import axios from "axios"

export const login = async (userData) => {
  const res = await axios.post("/api/auth/login", userData)
  return res.data
}

export const register = async (userData) => {
  console.log(userData);
  const res = await axios.post("/api/auth/signup", JSON.stringify(userData))
}