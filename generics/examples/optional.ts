export type Optional<T> = T | undefined

type User = {
    id: string
    name: Optional<string | null | number>
}