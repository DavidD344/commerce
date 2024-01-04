import { type RegisterUserDTO } from '@/domain/dtos/user'
import { verifyZodImplementsInterface } from '@/utils'
import { z } from 'zod'

export const RegisterUserValidDTO = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required'
    }).min(2),

    email: z
      .string({
        required_error: 'Email is required'
      })
      .email('Not a valid email'),
    password: z.string({ required_error: 'Password is required' }).min(4)
  }).required()
    .strict()
})
// Verifica se o object zod tem os mesmos campos da interface
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
verifyZodImplementsInterface<{ body: RegisterUserDTO }>({ } as z.infer<typeof RegisterUserValidDTO>)
