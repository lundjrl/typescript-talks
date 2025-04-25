interface UserLike {
    id: string
    firstName: string
    lastName: string
    age: number
}

// T is our generic type

export const getUserId = <T extends UserLike>(user: T): UserLike['id'] | null => {
    if (!user?.id) return null

    return user.id
}

export const getUserName = <T extends Omit<UserLike, 'age' | 'id'>>(user: T): string => {
    if (!user.firstName) return ''
    if (!user.lastName) return ''

    return `${user.firstName} ${user.lastName}`
}
