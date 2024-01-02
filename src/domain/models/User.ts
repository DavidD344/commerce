export interface User {
  id: string
  name: string
  email: string
  password?: string
  createdAt: Date
  updatedAt: Date
}
export interface LoadedUser extends Omit<User, 'password'> {}

export interface UserAuthentication {
  jwt: string | undefined
}
