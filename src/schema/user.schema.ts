import { z } from 'zod'

export const UserSchema = z.object({
    email: z.string().email('digite um email valido'),
    password: z.string().nonempty('senha obrigatoria')
})

export const ClientSchema = z.object({
    id: z.number(),
    completeName: z.string().nonempty('Nome obrigatorio'),
    email: z.string().email('email obrigatorio'),
    phone: z.string().nonempty('Numero de telefone obrigatorio'),
    avatar: z.string().optional(),
    profession: z.string().optional()
})

export const ContactSchema = z.object({
    id: z.number(),
    completeName: z.string().nonempty('Nome obrigatorio'),
    email: z.string().email('email obrigatorio'),
    phone: z.string().nonempty('Numero de telefone obrigatorio'),
})

export type UserData = z.infer<typeof UserSchema>

export type ClientData = z.infer<typeof ClientSchema>

export type ContactData = z.infer<typeof ContactSchema>
