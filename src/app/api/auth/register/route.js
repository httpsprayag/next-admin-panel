import { NextResponse } from "next/server";
import ConnectDb, { } from "../../../../../db";
import User from "../../../../../models/User"
export const GET = async (request) => {
  try {
    await ConnectDb()
    console.log("in Get req")
    return NextResponse.json({ message: "Success", status: 200 })
  } catch (error) {
    return new NextResponse('error in register user :', error, { status: 500 })
  }
}

export const POST = async (request) => {
  try {
    await ConnectDb()
    console.log("Fetching data from Frontend in Post req....");
    const { userName, email, password } = await request.json()
    console.log({ userName, email, password })
    const existingUser = await User.findOne({ email })
    if (!existingUser) {
      const newUser = new User({
        userName, email, password
      });
      console.log({ newUser })
      const savedUser = await newUser.save();
      console.log({ savedUser })
      return NextResponse.json({ message: "User registered successfully...", status: 200 })
    } else {
      return NextResponse.json({ message: "user already exists....", status: 400 })
    }
  } catch (error) {
    return new NextResponse('error in register user :', error, { status: 500 })
  }
} 