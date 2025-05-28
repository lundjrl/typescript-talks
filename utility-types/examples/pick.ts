/**
 * Pick
 * 
 * What is it?
 * - A utility type that returns an object with the selected types.
 * 
 * When to use:
 * - When you have an object type and want only certain properties of that type.
 */

type User = {
    id: string
    first_name: string
    last_name: string
    email: string
    avatar_url: string
    role: 'User' | 'Manager' | 'Admin'
    date_created: string
    date_updated: string
}

// Let's construct a new type based on this type.

// Here we "pick" which properties of User we'd like in our next type.
export type UserDisplayInformation = Pick<User, 'first_name' | 'last_name' | 'email' | 'avatar_url'>


// We can also combine "pick" with an object type to create a new object.
export type UserContactInformation = Pick<User, 'first_name' | 'last_name' | 'email'> & {
    phone: string
}
