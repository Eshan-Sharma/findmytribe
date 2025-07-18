import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

// You can specify any property from the node-postgres connection options
export const db = drizzle(process.env.DATABASE_URL!);
