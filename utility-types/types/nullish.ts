import type { Nullable } from "./nullable";
import type { Optional } from "../types/optional";

export type Nullish<T> = Nullable<Optional<T>>
