import { z } from 'zod'

export const UserSchema = z.object({
    email: z.string().email('digite um email valido'),
    password: z.string().nonempty('senha obrigatoria')
})

export type UserData = z.infer<typeof UserSchema>