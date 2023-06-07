// This solution is temporary and will be replaced by fake backend service

// Different json for logged in user, no need to leak password to show user info
export async function getUser() {
  const request = await fetch("/current.json")
  const user = await request.json()
  return user
}

export async function login(username, password) {
  const request = await fetch("/users.json")
  const usersJson = await request.json()
  return usersJson.find(s => s.password === password && s.username === username)
}