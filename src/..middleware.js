// import { NextResponse } from 'next/server'
// import { isAuthenticated } from "./utils"

// // This function can be marked `async` if using `await` inside
// export async function middleware(request) {
//   const isLoggedIn = isAuthenticated()
//   if (request.nextUrl.pathname !== "/login" && !isLoggedIn) {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
// }

// export const config = {
//   matcher: ['/:path*'],
// }