export const GET = async (request) => {
  try {
    return NextResponse.json({ message: "Success", status: 200 })
  } catch (error) {
    return new NextResponse('error in register user :', error, { status: 500 })
  }
}