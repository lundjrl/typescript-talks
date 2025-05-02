/**
 * Awaited
 * 
 * What is it?
 * - A type for returning the results of an awaited promise.
 * 
 * When to use:
 * - When you have a promise that you do not control the return type.
 */


// Here we can see that "AwaitedExampleTypeResult" returns a string.
export type AwaitedExampleTypeResult = Awaited<Promise<string>>

export const awaitedExample = async (): Promise<string> => {
    const url = new URL(``)

    const params: Partial<Request> = {
        method: 'GET',
        body: null
    }

    const response = await fetch(url, params)
    const body = await response.json()

    return `${body}`
}
