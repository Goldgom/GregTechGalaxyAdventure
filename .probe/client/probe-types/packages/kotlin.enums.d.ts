declare module "packages/kotlin/enums/$EnumEntries" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $EnumEntries<E extends $Enum<(E)>> extends $List<(E)>, $KMappedMarker {

 "add"(arg0: integer, arg1: E): void
 "add"(arg0: E): boolean
 "remove"(arg0: any): boolean
 "remove"(arg0: integer): E
 "get"(arg0: integer): E
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "indexOf"(arg0: any): integer
 "clear"(): void
 "lastIndexOf"(arg0: any): integer
 "isEmpty"(): boolean
 "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
 "size"(): integer
 "subList"(arg0: integer, arg1: integer): $List<(E)>
 "toArray"(): (any)[]
 "toArray"<T>(arg0: (T)[]): (T)[]
 "iterator"(): $Iterator<(E)>
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "set"(arg0: integer, arg1: E): E
 "sort"(arg0: $Comparator$Type<(any)>): void
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "listIterator"(arg0: integer): $ListIterator<(E)>
 "listIterator"(): $ListIterator<(E)>
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<(E)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $EnumEntries {
function copyOf<E>(arg0: $Collection$Type<(any)>): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
function of<E>(arg0: E, arg1: E): $List<(E)>
function of<E>(arg0: E): $List<(E)>
function of<E>(): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
function of<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
function of<E>(...arg0: (E)[]): $List<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumEntries$Type<E> = ($EnumEntries<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumEntries_<E> = $EnumEntries$Type<(E)>;
}}
