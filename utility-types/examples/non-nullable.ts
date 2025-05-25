type NullType = null

// NonNullable returns the generic without nulls
export type NonNullArray = NonNullable<string[] | NullType>
