import { NextResponse } from "next/server"
import { getAllUsers } from "../../../services/User"
import ConnectDb from "../../../../db"

export const GET = async (request) => {
  try {
    await ConnectDb()
    const users = await getAllUsers()
    return NextResponse.json({
      users,
      status: 200,
    })
  } catch (error) {
    console.log("getting some errors")
    return new NextResponse({ error, status: 500 })
  }
}