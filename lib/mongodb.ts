import mongoose from "mongoose";
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  try {
    if (cached.conn) {
      console.log("✅ Using existing MongoDB connection");
      return cached.conn;
    }

    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGODB_URI);
    }

    cached.conn = await cached.promise;

    console.log("✅ MongoDB Connected Successfully");

    return cached.conn;
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    throw error;
  }
}