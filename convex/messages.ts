import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});

export const getBySenderId =query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages")
    .filter((q) => q.eq(q.field("sender_id"), 6))
    .collect();
  },
});