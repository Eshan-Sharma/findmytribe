import {
  pgTable,
  serial,
  text,
  varchar,
  boolean,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

// 1. Users table
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  country: text("country").notNull(),
  city: text("city").notNull(),
  discordId: varchar("discord_id", { length: 100 }).notNull(),
  twitterHandle: varchar("twitter_handle", { length: 100 }),
  isPublic: boolean("is_public").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 2. Communities table
export const communities = pgTable("communities", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 100 }).unique().notNull(),
  name: varchar("name", { length: 200 }).notNull(),
});

// 3. Membership table (user–community)
export const memberships = pgTable("memberships", {
  id: serial("id").primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  communityId: serial("community_id")
    .notNull()
    .references(() => communities.id, { onDelete: "cascade" }),
  visible: boolean("visible").notNull().default(true),
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});
