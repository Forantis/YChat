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

// function that get conversation id where the user is in and use it to get the conversation name
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
