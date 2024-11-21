import { query } from "./_generated/server";
import { v } from "convex/values";


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
    return await ctx.db.query("messages")
    .filter((q) => q.eq(q.field("conversation_public_uuid"), args.conversation_id))
    .order("desc")
    .collect();
  },
});