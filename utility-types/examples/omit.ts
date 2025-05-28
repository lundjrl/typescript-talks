/**
 * Omit
 * 
 * What is it?
 * - A type for returning all properties in the passed type EXCEPT those in the union.
 * 
 * When to use:
 * - When you have a model but only care about more than half of the types within it.
 */

type Cat = {
    id: string
    name: string
    hair_length: 'short' | 'medium' | 'long'
    eye_color: string
    coat_color: string
    coat_type: 'tabby' | 'solid' | 'calico'
}

// Omit accepts a type and union of omitted keys, returns the remaining properties of the type.
export type BaldCat = Omit<Cat, 'coat_color' | 'coat_type'>
