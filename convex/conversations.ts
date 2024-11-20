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