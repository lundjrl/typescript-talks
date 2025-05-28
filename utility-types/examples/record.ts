// What's the difference between objects and records in Typescript?

const obj: object = {}

const record: Record<string, unknown> = {}

// Object doesn't have an index type by default. Typescript cannot tell if this is an object with string or numeric keys
obj['id'] = ''

// Whereas record makes us specify this index type. That would be "string" in the above example.
record['id'] = ''
