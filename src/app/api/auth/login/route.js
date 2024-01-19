import { NextResponse } from "next/server";
import User from "../../../../../models/User";
import { getAllUsers } from "../../../../services/User";
import ConnectDb from "../../../../../db";

export const POST = async (request, res) => {
  console.log("In Login Post req...")
  try {
    await ConnectDb()
    const { email, password } = await request.json()
    console.log("Body :", email, password);
    const existingUser = await User.findOne({ email })
    const allUsers = await getAllUsers()
    if (!existingUser) {
      res.cookies("login","awdasd")
      return NextResponse.json({ message: "Invalid Username or password", status: 400 })
    } else {
      return NextResponse.json({ message: "User Logged in successfully...", status: 200 }).cookies({ "token": "t2" })
    }
  } catch (error) {
    return NextResponse.json({ 'error in register user:': error, status: 500 })
  }
} 