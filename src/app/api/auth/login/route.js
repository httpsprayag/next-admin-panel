import { NextResponse } from "next/server";
import { connectDb } from "../../../../../db";
import User from "../../../../../models/User";
import { redirect } from "next/dist/server/api-utils";

connectDb()

export const POST = async (request) => {
  console.log("In Login Post req...")
  try {
    await connectDb()
    const { email, password } = await request.json()
    console.log("Body :", email, password);
    const existingUser = await User.findOne({ email })
    console.log({ existingUser })
    if (!existingUser) {
      return NextResponse.redirect("/")
    } else {
      // redirect("/")
      return NextResponse.json({ message: "User Logged in successfully...", status: 200 })
    }
  } catch (error) {
    return new NextResponse('error in register user:', error, { status: 500 })
  }
} 