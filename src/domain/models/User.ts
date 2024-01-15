import { type Role } from '@prisma/client'

export interface User {
  id: string
  name: string
  email: string
  password: string
  role: Role
  createdAt: Date
  updatedAt: Date
}
export interface LoadedUser extends Omit<User, 'password'> {}
export const LoadedUserForPrisma = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true
}

export interface UserToken {
  jwt: string | undefined
}
export interface UserAuthentication { id: string, role: Role }
