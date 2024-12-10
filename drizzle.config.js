/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:1UWxOdyct0jB@ep-wandering-heart-a56tr88h-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
    }
  };
  