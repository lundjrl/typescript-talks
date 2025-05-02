/**
 * Required
 * 
 * What is it?
 * - A type for returning the generic type with every key as a required value.
 * 
 * When to use:
 * - When you have an object that every key must be required.
 */


interface User {
    id: string
    name: string
    age: number
    phone: string
    password?: string
    someMaybeKey?: boolean
    anotherMaybeKey?: boolean
}

export type RequiredUserModel = Required<User>

