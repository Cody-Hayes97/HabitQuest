import { type } from "os"
import { object, string, TypeOf } from "zod"


export const createUserSchema = object({
    body: object({
        username: string({
            required_error: "Username Required"
        }),
        password: string({
            required_error: "Password Required"
        }).min(6, "Password too short"),
        passwordConfirmation: string({
            required_error: "Confirm Password"
        }),
        email: string({
            required_error: "Email Required"
        }).email("Not a valid email")
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"]
    })
})

export type CreateUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">