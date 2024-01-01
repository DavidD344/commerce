export interface User {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface UserAuthentication {
  jwt: string | undefined

}
