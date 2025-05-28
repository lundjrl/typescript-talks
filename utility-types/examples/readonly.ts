// Readonly makes a type immutable

type User = {
    id: string
    first_name: string
    last_name: string
    email: string
    phone: string
}

type ImmutableUser = Readonly<User>

const user: ImmutableUser = {
    id: 'jasldfkd-skdflkj-ksdlfjdskf-slndkf',
    first_name: 'John',
    last_name: 'Smith',
    email: 'test@test.com',
    phone: '222-333-4444'
}

// Will throw an error because each property on user is readonly. It cannot be re-assigned.
user.first_name = 'Jack'

// Alternatively, we can use "as const" to make a variable readonly. This is useful for magic string arrays where the values should not change.
const n = { id: 'jfsdlkdjf-sdjfldsf-wejsjlfdk-sfjdsflkdkj' } as const

const roles = ['User', 'Manager', 'Admin'] as const

// Roles is a readonly array of strings, we cannot change it's values once constructed.
roles[1] = 'Engineer'
