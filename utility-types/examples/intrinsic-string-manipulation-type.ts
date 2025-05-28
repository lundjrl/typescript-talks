// MORE DETAILS HERE: https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#uppercasestringtype

type Name = 'James Smith'

/**
 * Uppercase
 * 
 * What is it?
 * - A utility type that checks if a string is uppercase
 * 
 */

export type UppercaseName = Uppercase<Name>

/**
 * Lowercase
 * 
 * What is it?
 * - A utility type that checks if a string is lowercase
 * 
 */

export type LowercaseName = Lowercase<Name>

/**
 * Capitalize
 * 
 * What is it?
 * - A utility type that checks if a string is capitalized.
 * 
 */

export type CapitalizeName = Capitalize<Name>


/**
 * Uncapitalize
 * 
 * What is it?
 * - A utility type that checks if a string is uncapitalized.
 * 
 */

export type UncapitalizedName = Uncapitalize<Name>
