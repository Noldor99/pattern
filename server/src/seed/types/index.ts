import { Request } from 'express'
import { User } from '../../user/user.entity'


type CustomRequest = Omit<Request, 'isAuthenticated' | 'user'> & {
  isAuthenticated: boolean
  user: Partial<User> | null
}

export { CustomRequest }
