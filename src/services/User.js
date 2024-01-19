import User from "../../models/User"

export const getAllUsers = async () => {
  const allUsers = await User.find()
  return allUsers
}