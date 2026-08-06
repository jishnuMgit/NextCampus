// app/api/auth/login/route.ts

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";

export async function POST(req: Request) {
    try {
        await connectDB();

        const { email, password } = await req.json();

        console.log("Received login request:", { email, password });

        const user = await User.findOne({ email });

        if (!user)
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );

        if (!user.isActive)
            return NextResponse.json(
                { message: "Account disabled" },
                { status: 403 }
            );

        const match = await bcrypt.compare(password, user.password);

        if (!match)
            return NextResponse.json(
                { message: "Invalid credentials" },
                { status: 401 }
            );

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
                email: user.email,
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "7d",
            }
        );

        (await cookies()).set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });

        return NextResponse.json({
            success: true,
            role: user.role,
            token,
        });
    } catch (err) {
        return NextResponse.json(
            { message: "Server Error" },
            { status: 500 }
        );
    }
}