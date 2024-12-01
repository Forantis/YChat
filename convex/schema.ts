import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Database schema definition
export default defineSchema({
    users: defineTable({
        public_uuid: v.number(),
        name: v.string(),
        surname: v.string(),
        tokenIdentifier: v.string(),
        role: v.string(),
        email: v.string(),
        password: v.string(),
        created_at: v.string(),
    }),
    messages: defineTable({
        sender_id: v.number(),
        body: v.string(),
        conversation_public_uuid: v.number(), //To whom the message is sent
        read_status: v.string(),
        created_at: v.string(),
        last_update: v.optional(v.string()),
        format: v.string(),
    }),
    conversations: defineTable({
        conversation_name: v.string(),
        conversation_public_uuid: v.number(),
        last_update: v.string(),

    }),
    usersInConversations: defineTable({
        user_id: v.number(),
        conversation_id: v.number(),
    }).index("user_id", ["conversation_id"]),
});