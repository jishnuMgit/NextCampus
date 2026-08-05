import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

interface RegisterData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: "admin" | "teacher" | "student" | "parent";
}

 const Register = async (data: RegisterData) => {
  try {
    await connectDB();

    const { name, email, phone, password, role } = data;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    return {
      success: true,
      message: "User registered successfully",
      data: user,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Registration failed",
    };
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await Register(body);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}