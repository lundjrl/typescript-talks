import type { Nullable } from "./nullable";
import type { Optional } from "./optional";

export type Nullish<T> = Nullable<Optional<T>>