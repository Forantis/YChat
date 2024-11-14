import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// Définition des schémas de la base de données
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
    }).index("by_token", ["tokenIdentifier"]),

    messages: defineTable({
        sender_id: v.number(),
        body: v.string(),
        user_id: v.number(),
        read_status: v.string(),
        created_at: v.string(),
    }),
    sentTo: defineTable({
        message_id: v.number(),
        receveir_id: v.number(),
    }).index("message_id", ["receveir_id"]),
});

/*v.id("documents"),
    string: v.string(),
    number: v.number(),
    boolean: v.boolean(),
    nestedObject: v.object({
      property: v.string(),*/