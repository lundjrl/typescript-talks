export const fn = <T>(str: T[], index: number): T[] => {
    return str
}

// Returns a tuple type of the function's params.
export type FNParams = Parameters<typeof fn>
