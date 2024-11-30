import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";


export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});


export const getBySenderId =query({
  args: { sender_id: v.number() },
  handler: async (ctx, args) => {
    return await ctx.db.query("messages")
    .filter((q) => q.eq(q.field("sender_id"), args.sender_id))
    .collect();
  },
});

// Get all messages by conversation id order by created_at date in descending order
export const getByConversationId = query({
  args: { conversation_id: v.number() },
  handler: async (ctx, args) => {
    const messages = await ctx.db.query("messages")
    .filter((q) => q.eq(q.field("conversation_public_uuid"), args.conversation_id))
    .order("desc")
    .collect();
    return Promise.all(
      messages.map(async (message) => {
      const _storage = message.body as Id<"_storage">;
      return {
        ...message,
        // If the message is an "image" its `body` is an `Id<"_storage">` to act as a url
        ...(message.format === "image"
        ? { url: await ctx.storage.getUrl(_storage) }
        : {}),
      };
      }),
    );
  },
});

export const getLastMessageByConversationId = query({
  args: { conversation_id: v.number() },
  handler: async (ctx, args) => {
    return await ctx.db.query("messages")
    .filter((q) => q.eq(q.field("conversation_public_uuid"), args.conversation_id))
    .order("desc")
    .take(1);
  },
});

export const send = mutation({
  args: {
    sender_id: v.number(),
    conversation_id: v.number(),
    body: v.string(),
  },
  handler: async (ctx, args) => {
    // Create the message
    const messageId = await ctx.db.insert("messages", {
      sender_id: args.sender_id,
      conversation_public_uuid: args.conversation_id,
      body: args.body,
      read_status: "unread",
      created_at: new Date().toISOString(),
      format: "text",
    });

    // Update conversation's last_update
    await ctx.db
      .query("conversations")
      .filter((q) => 
        q.eq(q.field("conversation_public_uuid"), args.conversation_id)
      )
      .first()
      .then(conversation => {
        if (conversation) {
          ctx.db.patch(conversation._id, {
            last_update: new Date().toISOString()
          });
        }
      });

    return messageId;
  },
});

// In order to send an image
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});

export const sendImage = mutation({
  args: { storageId: v.id("_storage"), sender_id: v.number(), conversation_id: v.number(),},
  handler: async (ctx, args) => {
    await ctx.db.insert("messages", {
      body: args.storageId,
      sender_id: args.sender_id,
      format: "image",
      read_status: "unread",
      created_at: new Date().toISOString(),
      conversation_public_uuid: args.conversation_id,
    });
  },
});