import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        id: v.id("users"),
        public_uuid: v.integer().unique(),
        name: v.string(),
        surname: v.string(),
        role: v.string(),
        email: v.string().unique(),
        password: v.string(),
        created_at: v.timestamp(),
    }),
    messages: defineTable({
        id: v.id("messages"),
        sender_id: v.integer(),
        body: v.string(),
        user_id: v.integer(),
        read_status: v.timestamp(),
        created_at: v.timestamp(),
    }),
    sentTo: defineTable({
        message_id: v.integer(),
        receveir_id: v.integer(),
    }).index(["message_id", "receveir_id"], { unique: true }),
});