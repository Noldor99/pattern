export interface IUsers {
  totalCount: number
  users: IUser[]
}

export interface IUser {
  id: number
  username: string
  moderatorId: string
  roles: TRole[]
  createdAt: Date
  updatedAt: Date
}

export enum RolesEnum {
  ADMIN = 'ADMIN',
  MODER = 'MODER',
}

export type TRole = {
  id: number
  value: RolesEnum
  description: string
}
