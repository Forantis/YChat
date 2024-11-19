import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Log In Function
export const authentication = mutation({
    args: {email: v.string(), password: v.string()},
    handler: async (ctx, args) => {
        return await ctx.db.query("users")
        .filter((q) => q.eq(q.field("email"), args.email))
        .filter((q) => q.eq(q.field("password"), args.password))
        .collect();
    },
});

// Sign In Function
export const register = mutation({
    args: {public_uuid: v.number(), email: v.string(), password: v.string(), name: v.string(), surname: v.string(), role: v.string(), tokenIdentifier: v.string(), created_at: v.string()},
    handler: async (ctx, args) => {
        await ctx.db.insert("users", {
            public_uuid: args.public_uuid,
            email: args.email,
            password: args.password,
            name: args.name,
            surname: args.surname,
            role: args.role,
            tokenIdentifier: args.tokenIdentifier,
            created_at: args.created_at,
        });
    },
});