import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all conversations where the user is in
export const getConversationsByUserId = query({
  args: { user_id: v.number() },
  handler: async (ctx, args) => {
    return await ctx.db.query("usersInConversations")
    .filter((q) => q.eq(q.field("user_id"), args.user_id))
    .collect();
  },
});

// Get all conversation data by conversation id
export const getConversationByConversationId = query({
  args: { conversation_id: v.number() },
  handler: async (ctx, args) => {
    return await ctx.db.query("conversations")
    .filter((q) => q.eq(q.field("conversation_public_uuid"), args.conversation_id))
    .collect();
  },
});

// ---------------------------------------------------
// Get all conversation names in which the user is involved
// ---------------------------------------------------
export const getConversationsNameByUserId = query({
  args: { user_id: v.number() },
  handler: async (ctx, args) => {
    // First get all conversations IDs for the user
    const userConversations = await ctx.db
      .query("usersInConversations")
      .filter((q) => q.eq(q.field("user_id"), args.user_id))
      .collect();

    // Extract conversation IDs
    const conversationIds = userConversations.map(
      (conversation) => conversation.conversation_id
    );

    // If no conversations found, return empty array
    if (conversationIds.length === 0) {
      return [];
    }

    // Get conversation details using or() for multiple conditions
    const conversations = await ctx.db
      .query("conversations")
      .filter((q) => 
        q.or(
          ...conversationIds.map(id => 
            q.eq(q.field("conversation_public_uuid"), id)
          )
        )
      )
      .order("desc")
      .collect();

    return conversations;
  },
});

export const createConversation = mutation({
  args: {
    conversation_name: v.string(),
    conversation_public_uuid: v.number(),
    last_update: v.string(),
    current_user_id: v.number(),
    invited_user_id:v.array(v.number())
  },
  handler: async (ctx, args) => {
    const { conversation_public_uuid, last_update, current_user_id, invited_user_id } = args;
    let conversation_name = args.conversation_name;

    if(invited_user_id.length === 1){
      // get user_id name
      const user = await ctx.db.query("users")
      .filter((q) => q.eq(q.field("public_uuid"), invited_user_id[0]))
      .collect();
      const name = user[0].name; 
      const surname = user[0].surname;
      conversation_name = `${name} ${surname}`;
    }


    // Insert the new conversation
    await ctx.db.insert("conversations", {
      conversation_name,
      conversation_public_uuid,
      last_update,
    });

    // Insert the current user into the conversation
    await ctx.db.insert("usersInConversations", {
      user_id : current_user_id,
      conversation_id: conversation_public_uuid,
    });

    // Insert the invited user into the conversation
    for (const user_id of invited_user_id) {
      await ctx.db.insert("usersInConversations", {
        user_id,
        conversation_id: conversation_public_uuid,
      });
    }

    return { success: true };
  },
});
