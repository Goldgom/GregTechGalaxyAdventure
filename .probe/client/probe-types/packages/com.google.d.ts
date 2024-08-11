declare module "packages/com/google/common/collect/$Multiset" {
import {$ObjIntConsumer, $ObjIntConsumer$Type} from "packages/java/util/function/$ObjIntConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Multiset$Entry, $Multiset$Entry$Type} from "packages/com/google/common/collect/$Multiset$Entry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export interface $Multiset<E> extends $Collection<(E)> {

 "add"(arg0: E, arg1: integer): integer
 "add"(arg0: E): boolean
 "remove"(arg0: any, arg1: integer): integer
 "remove"(arg0: any): boolean
 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "size"(): integer
 "iterator"(): $Iterator<(E)>
 "count"(arg0: any): integer
 "contains"(arg0: any): boolean
 "spliterator"(): $Spliterator<(E)>
 "entrySet"(): $Set<($Multiset$Entry<(E)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "forEachEntry"(arg0: $ObjIntConsumer$Type<(any)>): void
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "setCount"(arg0: E, arg1: integer, arg2: integer): boolean
 "setCount"(arg0: E, arg1: integer): integer
 "elementSet"(): $Set<(E)>
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "stream"(): $Stream<(E)>
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<(E)>
}

export namespace $Multiset {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$Type<E> = ($Multiset<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiset_<E> = $Multiset$Type<(E)>;
}}
declare module "packages/com/google/common/collect/$BiMap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $BiMap<K, V> extends $Map<(K), (V)> {

 "put"(arg0: K, arg1: V): V
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "forcePut"(arg0: K, arg1: V): V
 "inverse"(): $BiMap<(V), (K)>
 "remove"(arg0: any): V
 "remove"(arg0: any, arg1: any): boolean
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V): V
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
 "size"(): integer
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
}

export namespace $BiMap {
function copyOf<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiMap$Type<K, V> = ($BiMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiMap_<K, V> = $BiMap$Type<(K), (V)>;
}}
declare module "packages/com/google/common/collect/$ImmutableSetMultimap$Builder" {
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ImmutableSetMultimap$Builder<K, V> extends $ImmutableMultimap$Builder<(K), (V)> {

constructor()

public "put"(arg0: $Map$Entry$Type<(any), (any)>): $ImmutableSetMultimap$Builder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$Builder$Type<K, V> = ($ImmutableSetMultimap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSetMultimap$Builder_<K, V> = $ImmutableSetMultimap$Builder$Type<(K), (V)>;
}}
declare module "packages/com/google/gson/$TypeAdapter" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonReader, $JsonReader$Type} from "packages/com/google/gson/stream/$JsonReader"
import {$JsonWriter, $JsonWriter$Type} from "packages/com/google/gson/stream/$JsonWriter"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export class $TypeAdapter<T> {

constructor()

public "write"(arg0: $JsonWriter$Type, arg1: T): void
public "read"(arg0: $JsonReader$Type): T
public "fromJson"(arg0: $Reader$Type): T
public "fromJson"(arg0: string): T
public "toJsonTree"(arg0: T): $JsonElement
public "fromJsonTree"(arg0: $JsonElement$Type): T
public "nullSafe"(): $TypeAdapter<(T)>
public "toJson"(arg0: T): string
public "toJson"(arg0: $Writer$Type, arg1: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapter$Type<T> = ($TypeAdapter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAdapter_<T> = $TypeAdapter$Type<(T)>;
}}
declare module "packages/com/google/common/collect/$ImmutableSet" {
import {$ImmutableSet$Builder, $ImmutableSet$Builder$Type} from "packages/com/google/common/collect/$ImmutableSet$Builder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ImmutableSet<E> extends $ImmutableCollection<(E)> implements $Set<(E)> {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: (E)[]): $ImmutableSet<(E)>
public static "copyOf"<E>(arg0: $Iterable$Type<(any)>): $ImmutableSet<(E)>
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $ImmutableSet<(E)>
public static "copyOf"<E>(arg0: $Iterator$Type<(any)>): $ImmutableSet<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $ImmutableSet<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $ImmutableSet<(E)>
public static "of"<E>(): $ImmutableSet<(E)>
public static "of"<E>(arg0: E): $ImmutableSet<(E)>
public static "of"<E>(arg0: E, arg1: E): $ImmutableSet<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, ...arg6: (E)[]): $ImmutableSet<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $ImmutableSet<(E)>
public static "builder"<E>(): $ImmutableSet$Builder<(E)>
public static "builderWithExpectedSize"<E>(arg0: integer): $ImmutableSet$Builder<(E)>
public static "toImmutableSet"<E>(): $Collector<(E), (any), ($ImmutableSet<(E)>)>
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$Type<E> = ($ImmutableSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSet_<E> = $ImmutableSet$Type<(E)>;
}}
declare module "packages/com/google/common/collect/$Table$Cell" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Table$Cell<R, C, V> {

 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "getValue"(): V
 "getColumnKey"(): C
 "getRowKey"(): R
}

export namespace $Table$Cell {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Table$Cell$Type<R, C, V> = ($Table$Cell<(R), (C), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Table$Cell_<R, C, V> = $Table$Cell$Type<(R), (C), (V)>;
}}
declare module "packages/com/google/gson/internal/$Excluder" {
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"
import {$ExclusionStrategy, $ExclusionStrategy$Type} from "packages/com/google/gson/$ExclusionStrategy"
import {$TypeAdapter, $TypeAdapter$Type} from "packages/com/google/gson/$TypeAdapter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Cloneable, $Cloneable$Type} from "packages/java/lang/$Cloneable"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$TypeAdapterFactory, $TypeAdapterFactory$Type} from "packages/com/google/gson/$TypeAdapterFactory"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/gson/reflect/$TypeToken"

export class $Excluder implements $TypeAdapterFactory, $Cloneable {
static readonly "DEFAULT": $Excluder

constructor()

public "create"<T>(arg0: $Gson$Type, arg1: $TypeToken$Type<(T)>): $TypeAdapter<(T)>
public "excludeField"(arg0: $Field$Type, arg1: boolean): boolean
public "excludeClass"(arg0: $Class$Type<(any)>, arg1: boolean): boolean
public "withVersion"(arg0: double): $Excluder
public "withModifiers"(...arg0: (integer)[]): $Excluder
public "withExclusionStrategy"(arg0: $ExclusionStrategy$Type, arg1: boolean, arg2: boolean): $Excluder
public "excludeFieldsWithoutExposeAnnotation"(): $Excluder
public "disableInnerClassSerialization"(): $Excluder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Excluder$Type = ($Excluder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Excluder_ = $Excluder$Type;
}}
declare module "packages/com/google/common/collect/$ForwardingSet" {
import {$ForwardingCollection, $ForwardingCollection$Type} from "packages/com/google/common/collect/$ForwardingCollection"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ForwardingSet<E> extends $ForwardingCollection<(E)> implements $Set<(E)> {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingSet$Type<E> = ($ForwardingSet<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingSet_<E> = $ForwardingSet$Type<(E)>;
}}
declare module "packages/com/google/common/cache/$Cache" {
import {$ConcurrentMap, $ConcurrentMap$Type} from "packages/java/util/concurrent/$ConcurrentMap"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$CacheStats, $CacheStats$Type} from "packages/com/google/common/cache/$CacheStats"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Cache<K, V> {

 "get"(arg0: K, arg1: $Callable$Type<(any)>): V
 "put"(arg0: K, arg1: V): void
 "size"(): long
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "invalidate"(arg0: any): void
 "asMap"(): $ConcurrentMap<(K), (V)>
 "stats"(): $CacheStats
 "invalidateAll"(): void
 "invalidateAll"(arg0: $Iterable$Type<(any)>): void
 "getIfPresent"(arg0: any): V
 "cleanUp"(): void
 "getAllPresent"(arg0: $Iterable$Type<(any)>): $ImmutableMap<(K), (V)>
}

export namespace $Cache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cache$Type<K, V> = ($Cache<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cache_<K, V> = $Cache$Type<(K), (V)>;
}}
declare module "packages/com/google/common/base/$CharMatcher" {
import {$Predicate, $Predicate$Type} from "packages/com/google/common/base/$Predicate"
import {$Predicate as $Predicate$0, $Predicate$Type as $Predicate$0$Type} from "packages/java/util/function/$Predicate"

export class $CharMatcher implements $Predicate<(character)> {


public "toString"(): string
public "matches"(arg0: character): boolean
/**
 * 
 * @deprecated
 */
public "apply"(arg0: character): boolean
public static "ascii"(): $CharMatcher
public static "is"(arg0: character): $CharMatcher
public static "noneOf"(arg0: charseq): $CharMatcher
/**
 * 
 * @deprecated
 */
public static "digit"(): $CharMatcher
public "or"(arg0: $CharMatcher$Type): $CharMatcher
public static "inRange"(arg0: character, arg1: character): $CharMatcher
public "and"(arg0: $CharMatcher$Type): $CharMatcher
/**
 * 
 * @deprecated
 */
public static "javaLowerCase"(): $CharMatcher
/**
 * 
 * @deprecated
 */
public static "javaUpperCase"(): $CharMatcher
/**
 * 
 * @deprecated
 */
public static "javaDigit"(): $CharMatcher
/**
 * 
 * @deprecated
 */
public static "javaLetter"(): $CharMatcher
/**
 * 
 * @deprecated
 */
public static "javaLetterOrDigit"(): $CharMatcher
public static "any"(): $CharMatcher
public static "whitespace"(): $CharMatcher
public "removeFrom"(arg0: charseq): string
public static "none"(): $CharMatcher
public "retainFrom"(arg0: charseq): string
/**
 * 
 * @deprecated
 */
public static "singleWidth"(): $CharMatcher
public static "javaIsoControl"(): $CharMatcher
/**
 * 
 * @deprecated
 */
public static "invisible"(): $CharMatcher
public static "breakingWhitespace"(): $CharMatcher
public static "anyOf"(arg0: charseq): $CharMatcher
public static "isNot"(arg0: character): $CharMatcher
public "lastIndexIn"(arg0: charseq): integer
public "trimFrom"(arg0: charseq): string
public "precomputed"(): $CharMatcher
public "countIn"(arg0: charseq): integer
public "matchesNoneOf"(arg0: charseq): boolean
public "replaceFrom"(arg0: charseq, arg1: charseq): string
public "replaceFrom"(arg0: charseq, arg1: character): string
public "trimLeadingFrom"(arg0: charseq): string
public "collapseFrom"(arg0: charseq, arg1: character): string
public "indexIn"(arg0: charseq, arg1: integer): integer
public "indexIn"(arg0: charseq): integer
public static "forPredicate"(arg0: $Predicate$Type<(any)>): $CharMatcher
public "matchesAllOf"(arg0: charseq): boolean
public "trimTrailingFrom"(arg0: charseq): string
public "matchesAnyOf"(arg0: charseq): boolean
public "trimAndCollapseFrom"(arg0: charseq, arg1: character): string
public "equals"(arg0: any): boolean
public "test"(arg0: character): boolean
public "or"(arg0: $Predicate$0$Type<(any)>): $Predicate$0<(character)>
public "and"(arg0: $Predicate$0$Type<(any)>): $Predicate$0<(character)>
public static "not"<T>(arg0: $Predicate$0$Type<(any)>): $Predicate$0<(character)>
public static "isEqual"<T>(arg0: any): $Predicate$0<(character)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CharMatcher$Type = ($CharMatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CharMatcher_ = $CharMatcher$Type;
}}
declare module "packages/com/google/common/cache/$LoadingCache" {
import {$ConcurrentMap, $ConcurrentMap$Type} from "packages/java/util/concurrent/$ConcurrentMap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Callable, $Callable$Type} from "packages/java/util/concurrent/$Callable"
import {$CacheStats, $CacheStats$Type} from "packages/com/google/common/cache/$CacheStats"
import {$Cache, $Cache$Type} from "packages/com/google/common/cache/$Cache"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Function as $Function$0, $Function$Type as $Function$0$Type} from "packages/com/google/common/base/$Function"

export interface $LoadingCache<K, V> extends $Cache<(K), (V)>, $Function$0<(K), (V)> {

 "get"(arg0: K): V
/**
 * 
 * @deprecated
 */
 "apply"(arg0: K): V
 "getAll"(arg0: $Iterable$Type<(any)>): $ImmutableMap<(K), (V)>
 "getUnchecked"(arg0: K): V
 "refresh"(arg0: K): void
 "asMap"(): $ConcurrentMap<(K), (V)>
 "get"(arg0: K, arg1: $Callable$Type<(any)>): V
 "put"(arg0: K, arg1: V): void
 "size"(): long
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "invalidate"(arg0: any): void
 "stats"(): $CacheStats
 "invalidateAll"(): void
 "invalidateAll"(arg0: $Iterable$Type<(any)>): void
 "getIfPresent"(arg0: any): V
 "cleanUp"(): void
 "getAllPresent"(arg0: $Iterable$Type<(any)>): $ImmutableMap<(K), (V)>
 "equals"(arg0: any): boolean
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<(K), (V)>
}

export namespace $LoadingCache {
function identity<T>(): $Function<(K), (K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadingCache$Type<K, V> = ($LoadingCache<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadingCache_<K, V> = $LoadingCache$Type<(K), (V)>;
}}
declare module "packages/com/google/common/cache/$CacheStats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CacheStats {

constructor(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "plus"(arg0: $CacheStats$Type): $CacheStats
public "minus"(arg0: $CacheStats$Type): $CacheStats
public "hitCount"(): long
public "missCount"(): long
public "loadSuccessCount"(): long
public "totalLoadTime"(): long
public "evictionCount"(): long
public "loadExceptionCount"(): long
public "requestCount"(): long
public "hitRate"(): double
public "missRate"(): double
public "averageLoadPenalty"(): double
public "loadExceptionRate"(): double
public "loadCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CacheStats$Type = ($CacheStats);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CacheStats_ = $CacheStats$Type;
}}
declare module "packages/com/google/common/collect/$ImmutableList$Builder" {
import {$ImmutableCollection$Builder, $ImmutableCollection$Builder$Type} from "packages/com/google/common/collect/$ImmutableCollection$Builder"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ImmutableList$Builder<E> extends $ImmutableCollection$Builder<(E)> {

constructor()

public "addAll"(arg0: $Iterator$Type<(any)>): $ImmutableList$Builder<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableList$Builder$Type<E> = ($ImmutableList$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableList$Builder_<E> = $ImmutableList$Builder$Type<(E)>;
}}
declare module "packages/com/google/common/reflect/$Parameter" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AnnotatedType, $AnnotatedType$Type} from "packages/java/lang/reflect/$AnnotatedType"
import {$Invokable, $Invokable$Type} from "packages/com/google/common/reflect/$Invokable"
import {$AnnotatedElement, $AnnotatedElement$Type} from "packages/java/lang/reflect/$AnnotatedElement"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export class $Parameter implements $AnnotatedElement {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isAnnotationPresent"(arg0: $Class$Type<(any)>): boolean
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getAnnotationsByType"<A extends $Annotation>(arg0: $Class$Type<(A)>): (A)[]
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getDeclaredAnnotationsByType"<A extends $Annotation>(arg0: $Class$Type<(A)>): (A)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "getType"(): $TypeToken<(any)>
public "getAnnotatedType"(): $AnnotatedType
public "getDeclaringInvokable"(): $Invokable<(any), (any)>
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "type"(): $TypeToken<(any)>
get "annotatedType"(): $AnnotatedType
get "declaringInvokable"(): $Invokable<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Parameter$Type = ($Parameter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Parameter_ = $Parameter$Type;
}}
declare module "packages/com/google/common/collect/$ImmutableMap" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ImmutableSetMultimap, $ImmutableSetMultimap$Type} from "packages/com/google/common/collect/$ImmutableSetMultimap"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$BinaryOperator, $BinaryOperator$Type} from "packages/java/util/function/$BinaryOperator"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ImmutableMap$Builder, $ImmutableMap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMap$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ImmutableMap<K, V> implements $Map<(K), (V)>, $Serializable {


/**
 * 
 * @deprecated
 */
public "remove"(arg0: any, arg1: any): boolean
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): V
public "get"(arg0: any): V
/**
 * 
 * @deprecated
 */
public "put"(arg0: K, arg1: V): V
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Iterable$Type<(any)>): $ImmutableMap<(K), (V)>
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $ImmutableMap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "replace"(arg0: K, arg1: V, arg2: V): boolean
/**
 * 
 * @deprecated
 */
public "replace"(arg0: K, arg1: V): V
/**
 * 
 * @deprecated
 */
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $ImmutableMap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $ImmutableMap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
/**
 * 
 * @deprecated
 */
public "putAll"(arg0: $Map$Type<(any), (any)>): void
/**
 * 
 * @deprecated
 */
public "putIfAbsent"(arg0: K, arg1: V): V
/**
 * 
 * @deprecated
 */
public "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public "containsKey"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
public "keySet"(): $ImmutableSet<(K)>
public "containsValue"(arg0: any): boolean
public "getOrDefault"(arg0: any, arg1: V): V
/**
 * 
 * @deprecated
 */
public "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $ImmutableMap<(K), (V)>
public static "toImmutableMap"<T, K, V>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>, arg2: $BinaryOperator$Type<(V)>): $Collector<(T), (any), ($ImmutableMap<(K), (V)>)>
public static "toImmutableMap"<T, K, V>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Collector<(T), (any), ($ImmutableMap<(K), (V)>)>
public "asMultimap"(): $ImmutableSetMultimap<(K), (V)>
public static "builderWithExpectedSize"<K, V>(arg0: integer): $ImmutableMap$Builder<(K), (V)>
public "size"(): integer
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
[index: string | number]: V
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$Type<K, V> = ($ImmutableMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMap_<K, V> = $ImmutableMap$Type<(K), (V)>;
}}
declare module "packages/com/google/gson/stream/$JsonReader" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$JsonToken, $JsonToken$Type} from "packages/com/google/gson/stream/$JsonToken"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export class $JsonReader implements $Closeable {

constructor(arg0: $Reader$Type)

public "toString"(): string
public "hasNext"(): boolean
public "close"(): void
public "getPath"(): string
public "peek"(): $JsonToken
public "nextDouble"(): double
public "nextInt"(): integer
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "nextLong"(): long
public "nextBoolean"(): boolean
public "skipValue"(): void
public "endArray"(): void
public "nextName"(): string
public "nextString"(): string
public "beginObject"(): void
public "nextNull"(): void
public "endObject"(): void
public "beginArray"(): void
public "getPreviousPath"(): string
get "path"(): string
set "lenient"(value: boolean)
get "lenient"(): boolean
get "previousPath"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonReader$Type = ($JsonReader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonReader_ = $JsonReader$Type;
}}
declare module "packages/com/google/gson/$FieldNamingStrategy" {
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export interface $FieldNamingStrategy {

 "translateName"(arg0: $Field$Type): string

(arg0: $Field$Type): string
}

export namespace $FieldNamingStrategy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingStrategy$Type = ($FieldNamingStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldNamingStrategy_ = $FieldNamingStrategy$Type;
}}
declare module "packages/com/google/common/base/$Predicate" {
import {$Predicate as $Predicate$0, $Predicate$Type as $Predicate$0$Type} from "packages/java/util/function/$Predicate"

export interface $Predicate<T> extends $Predicate$0<(T)> {

 "equals"(arg0: any): boolean
 "test"(arg0: T): boolean
 "apply"(arg0: T): boolean
 "or"(arg0: $Predicate$0$Type<(any)>): $Predicate$0<(T)>
 "negate"(): $Predicate$0<(T)>
 "and"(arg0: $Predicate$0$Type<(any)>): $Predicate$0<(T)>
}

export namespace $Predicate {
function not<T>(arg0: $Predicate$0$Type<(any)>): $Predicate$0<(T)>
function isEqual<T>(arg0: any): $Predicate$0<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicate$Type<T> = ($Predicate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Predicate_<T> = $Predicate$Type<(T)>;
}}
declare module "packages/com/google/common/collect/$ForwardingObject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ForwardingObject {


public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingObject$Type = ($ForwardingObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingObject_ = $ForwardingObject$Type;
}}
declare module "packages/com/google/gson/$ReflectionAccessFilter$FilterResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ReflectionAccessFilter$FilterResult extends $Enum<($ReflectionAccessFilter$FilterResult)> {
static readonly "ALLOW": $ReflectionAccessFilter$FilterResult
static readonly "INDECISIVE": $ReflectionAccessFilter$FilterResult
static readonly "BLOCK_INACCESSIBLE": $ReflectionAccessFilter$FilterResult
static readonly "BLOCK_ALL": $ReflectionAccessFilter$FilterResult


public static "values"(): ($ReflectionAccessFilter$FilterResult)[]
public static "valueOf"(arg0: string): $ReflectionAccessFilter$FilterResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionAccessFilter$FilterResult$Type = (("allow") | ("block_inaccessible") | ("block_all") | ("indecisive")) | ($ReflectionAccessFilter$FilterResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionAccessFilter$FilterResult_ = $ReflectionAccessFilter$FilterResult$Type;
}}
declare module "packages/com/google/gson/$ExclusionStrategy" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$FieldAttributes, $FieldAttributes$Type} from "packages/com/google/gson/$FieldAttributes"

export interface $ExclusionStrategy {

 "shouldSkipClass"(arg0: $Class$Type<(any)>): boolean
 "shouldSkipField"(arg0: $FieldAttributes$Type): boolean
}

export namespace $ExclusionStrategy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExclusionStrategy$Type = ($ExclusionStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExclusionStrategy_ = $ExclusionStrategy$Type;
}}
declare module "packages/com/google/common/collect/$UnmodifiableIterator" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $UnmodifiableIterator<E> implements $Iterator<(E)> {


/**
 * 
 * @deprecated
 */
public "remove"(): void
public "forEachRemaining"(arg0: $Consumer$Type<(any)>): void
public "hasNext"(): boolean
public "next"(): E
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnmodifiableIterator$Type<E> = ($UnmodifiableIterator<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnmodifiableIterator_<E> = $UnmodifiableIterator$Type<(E)>;
}}
declare module "packages/com/google/gson/$JsonNull" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"

export class $JsonNull extends $JsonElement {
static readonly "INSTANCE": $JsonNull

/**
 * 
 * @deprecated
 */
constructor()

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "deepCopy"(): $JsonNull
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonNull$Type = ($JsonNull);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonNull_ = $JsonNull$Type;
}}
declare module "packages/com/google/common/collect/$ForwardingCollection" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ForwardingObject, $ForwardingObject$Type} from "packages/com/google/common/collect/$ForwardingObject"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ForwardingCollection<E> extends $ForwardingObject implements $Collection<(E)> {


public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<(E)>
public "spliterator"(): $Spliterator<(E)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<(E)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<E>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingCollection$Type<E> = ($ForwardingCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingCollection_<E> = $ForwardingCollection$Type<(E)>;
}}
declare module "packages/com/google/common/collect/$ImmutableMultimap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$ImmutableMultimap$Builder, $ImmutableMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BaseImmutableMultimap, $BaseImmutableMultimap$Type} from "packages/com/google/common/collect/$BaseImmutableMultimap"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ImmutableMultimap<K, V> extends $BaseImmutableMultimap<(K), (V)> implements $Serializable {


/**
 * 
 * @deprecated
 */
public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: K): $ImmutableCollection<(V)>
/**
 * 
 * @deprecated
 */
public "put"(arg0: K, arg1: V): boolean
public "values"(): $ImmutableCollection<(V)>
public static "copyOf"<K, V>(arg0: $Multimap$Type<(any), (any)>): $ImmutableMultimap<(K), (V)>
public static "copyOf"<K, V>(arg0: $Iterable$Type<(any)>): $ImmutableMultimap<(K), (V)>
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "size"(): integer
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $ImmutableMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $ImmutableMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableMultimap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "putAll"(arg0: $Multimap$Type<(any), (any)>): boolean
/**
 * 
 * @deprecated
 */
public "putAll"(arg0: K, arg1: $Iterable$Type<(any)>): boolean
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "containsValue"(arg0: any): boolean
public "entries"(): $ImmutableCollection<($Map$Entry<(K), (V)>)>
public "asMap"(): $ImmutableMap<(K), ($Collection<(V)>)>
/**
 * 
 * @deprecated
 */
public "replaceValues"(arg0: K, arg1: $Iterable$Type<(any)>): $ImmutableCollection<(V)>
public "inverse"(): $ImmutableMultimap<(V), (K)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$Type<K, V> = ($ImmutableMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultimap_<K, V> = $ImmutableMultimap$Type<(K), (V)>;
}}
declare module "packages/com/google/common/collect/$ImmutableList" {
import {$UnmodifiableIterator, $UnmodifiableIterator$Type} from "packages/com/google/common/collect/$UnmodifiableIterator"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ImmutableList$Builder, $ImmutableList$Builder$Type} from "packages/com/google/common/collect/$ImmutableList$Builder"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomAccess, $RandomAccess$Type} from "packages/java/util/$RandomAccess"
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $ImmutableList<E> extends $ImmutableCollection<(E)> implements $List<(E)>, $RandomAccess {


/**
 * 
 * @deprecated
 */
public "add"(arg0: integer, arg1: E): void
/**
 * 
 * @deprecated
 */
public "remove"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<E>(arg0: (E)[]): $ImmutableList<(E)>
public static "copyOf"<E>(arg0: $Iterator$Type<(any)>): $ImmutableList<(E)>
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $ImmutableList<(E)>
public static "copyOf"<E>(arg0: $Iterable$Type<(any)>): $ImmutableList<(E)>
public "indexOf"(arg0: any): integer
public "lastIndexOf"(arg0: any): integer
/**
 * 
 * @deprecated
 */
public "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
public "subList"(arg0: integer, arg1: integer): $ImmutableList<(E)>
public "iterator"(): $UnmodifiableIterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $ImmutableList<(E)>
public static "of"<E>(): $ImmutableList<(E)>
public static "of"<E>(arg0: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E, arg11: E, ...arg12: (E)[]): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E, arg10: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $ImmutableList<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $ImmutableList<(E)>
public static "builder"<E>(): $ImmutableList$Builder<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
/**
 * 
 * @deprecated
 */
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "set"(arg0: integer, arg1: E): E
public "forEach"(arg0: $Consumer$Type<(any)>): void
/**
 * 
 * @deprecated
 */
public "asList"(): $ImmutableList<(E)>
public "reverse"(): $ImmutableList<(E)>
/**
 * 
 * @deprecated
 */
public "sort"(arg0: $Comparator$Type<(any)>): void
public static "builderWithExpectedSize"<E>(arg0: integer): $ImmutableList$Builder<(E)>
public static "sortedCopyOf"<E extends $Comparable<(any)>>(arg0: $Iterable$Type<(any)>): $ImmutableList<(E)>
public static "sortedCopyOf"<E>(arg0: $Comparator$Type<(any)>, arg1: $Iterable$Type<(any)>): $ImmutableList<(E)>
public static "toImmutableList"<E>(): $Collector<(E), (any), ($ImmutableList<(E)>)>
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public "get"(arg0: integer): E
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
[index: number]: E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableList$Type<E> = ($ImmutableList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableList_<E> = $ImmutableList$Type<(E)>;
}}
declare module "packages/com/google/common/base/$Optional" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional as $Optional$0, $Optional$Type as $Optional$0$Type} from "packages/java/util/$Optional"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Function, $Function$Type} from "packages/com/google/common/base/$Function"
import {$Supplier, $Supplier$Type} from "packages/com/google/common/base/$Supplier"

export class $Optional<T> implements $Serializable {


public "get"(): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"<T>(arg0: T): $Optional<(T)>
public "transform"<V>(arg0: $Function$Type<(any), (V)>): $Optional<(V)>
public "isPresent"(): boolean
public "or"(arg0: $Supplier$Type<(any)>): T
public "or"(arg0: $Optional$Type<(any)>): $Optional<(T)>
public "or"(arg0: T): T
public static "absent"<T>(): $Optional<(T)>
public "asSet"(): $Set<(T)>
public static "fromNullable"<T>(arg0: T): $Optional<(T)>
public static "fromJavaUtil"<T>(arg0: $Optional$0$Type<(T)>): $Optional<(T)>
public "orNull"(): T
public static "presentInstances"<T>(arg0: $Iterable$Type<(any)>): $Iterable<(T)>
public "toJavaUtil"(): $Optional$0<(T)>
public static "toJavaUtil"<T>(arg0: $Optional$Type<(T)>): $Optional$0<(T)>
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optional$Type<T> = ($Optional<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Optional_<T> = $Optional$Type<(T)>;
}}
declare module "packages/com/google/gson/$Gson" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FieldNamingStrategy, $FieldNamingStrategy$Type} from "packages/com/google/gson/$FieldNamingStrategy"
import {$JsonReader, $JsonReader$Type} from "packages/com/google/gson/stream/$JsonReader"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Appendable, $Appendable$Type} from "packages/java/lang/$Appendable"
import {$GsonBuilder, $GsonBuilder$Type} from "packages/com/google/gson/$GsonBuilder"
import {$TypeAdapterFactory, $TypeAdapterFactory$Type} from "packages/com/google/gson/$TypeAdapterFactory"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/gson/reflect/$TypeToken"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$Excluder, $Excluder$Type} from "packages/com/google/gson/internal/$Excluder"
import {$TypeAdapter, $TypeAdapter$Type} from "packages/com/google/gson/$TypeAdapter"
import {$JsonWriter, $JsonWriter$Type} from "packages/com/google/gson/stream/$JsonWriter"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Reader, $Reader$Type} from "packages/java/io/$Reader"

export class $Gson {

constructor()

public "toString"(): string
public "getAdapter"<T>(arg0: $Class$Type<(T)>): $TypeAdapter<(T)>
public "getAdapter"<T>(arg0: $TypeToken$Type<(T)>): $TypeAdapter<(T)>
public "newBuilder"(): $GsonBuilder
public "fromJson"<T>(arg0: $JsonReader$Type, arg1: $TypeToken$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonReader$Type, arg1: $Type$Type): T
public "fromJson"<T>(arg0: $JsonElement$Type, arg1: $Class$Type<(T)>): T
public "fromJson"<T>(arg0: $JsonElement$Type, arg1: $Type$Type): T
public "fromJson"<T>(arg0: $JsonElement$Type, arg1: $TypeToken$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$Type, arg1: $TypeToken$Type<(T)>): T
public "fromJson"<T>(arg0: $Reader$Type, arg1: $Type$Type): T
public "fromJson"<T>(arg0: $Reader$Type, arg1: $Class$Type<(T)>): T
public "fromJson"<T>(arg0: string, arg1: $Class$Type<(T)>): T
public "fromJson"<T>(arg0: string, arg1: $Type$Type): T
public "fromJson"<T>(arg0: string, arg1: $TypeToken$Type<(T)>): T
public "serializeNulls"(): boolean
public "htmlSafe"(): boolean
/**
 * 
 * @deprecated
 */
public "excluder"(): $Excluder
public "toJsonTree"(arg0: any): $JsonElement
public "toJsonTree"(arg0: any, arg1: $Type$Type): $JsonElement
public "getDelegateAdapter"<T>(arg0: $TypeAdapterFactory$Type, arg1: $TypeToken$Type<(T)>): $TypeAdapter<(T)>
public "newJsonWriter"(arg0: $Writer$Type): $JsonWriter
public "newJsonReader"(arg0: $Reader$Type): $JsonReader
public "fieldNamingStrategy"(): $FieldNamingStrategy
public "toJson"(arg0: any, arg1: $Type$Type, arg2: $Appendable$Type): void
public "toJson"(arg0: any, arg1: $Type$Type, arg2: $JsonWriter$Type): void
public "toJson"(arg0: any, arg1: $Appendable$Type): void
public "toJson"(arg0: any, arg1: $Type$Type): string
public "toJson"(arg0: any): string
public "toJson"(arg0: $JsonElement$Type): string
public "toJson"(arg0: $JsonElement$Type, arg1: $Appendable$Type): void
public "toJson"(arg0: $JsonElement$Type, arg1: $JsonWriter$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Gson$Type = ($Gson);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Gson_ = $Gson$Type;
}}
declare module "packages/com/google/common/reflect/$TypeToken" {
import {$TypeCapture, $TypeCapture$Type} from "packages/com/google/common/reflect/$TypeCapture"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$Constructor, $Constructor$Type} from "packages/java/lang/reflect/$Constructor"
import {$Invokable, $Invokable$Type} from "packages/com/google/common/reflect/$Invokable"
import {$TypeToken$TypeSet, $TypeToken$TypeSet$Type} from "packages/com/google/common/reflect/$TypeToken$TypeSet"
import {$TypeParameter, $TypeParameter$Type} from "packages/com/google/common/reflect/$TypeParameter"

export class $TypeToken<T> extends $TypeCapture<(T)> implements $Serializable {


public "equals"(arg0: any): boolean
public "toString"(): string
public "method"(arg0: $Method$Type): $Invokable<(T), (any)>
public "hashCode"(): integer
public "isArray"(): boolean
public "isPrimitive"(): boolean
public "wrap"(): $TypeToken<(T)>
public static "of"<T>(arg0: $Class$Type<(T)>): $TypeToken<(T)>
public static "of"(arg0: $Type$Type): $TypeToken<(any)>
public "getComponentType"(): $TypeToken<(any)>
public "constructor"(arg0: $Constructor$Type<(any)>): $Invokable<(T), (T)>
public "getType"(): $Type
public "unwrap"(): $TypeToken<(T)>
public "getRawType"(): $Class<(any)>
public "getSupertype"(arg0: $Class$Type<(any)>): $TypeToken<(any)>
public "where"<X>(arg0: $TypeParameter$Type<(X)>, arg1: $Class$Type<(X)>): $TypeToken<(T)>
public "where"<X>(arg0: $TypeParameter$Type<(X)>, arg1: $TypeToken$Type<(X)>): $TypeToken<(T)>
public "isSubtypeOf"(arg0: $TypeToken$Type<(any)>): boolean
public "isSubtypeOf"(arg0: $Type$Type): boolean
public "isSupertypeOf"(arg0: $Type$Type): boolean
public "isSupertypeOf"(arg0: $TypeToken$Type<(any)>): boolean
public "getTypes"(): $TypeToken$TypeSet<>
public "resolveType"(arg0: $Type$Type): $TypeToken<(any)>
public "getSubtype"(arg0: $Class$Type<(any)>): $TypeToken<(any)>
get "array"(): boolean
get "primitive"(): boolean
get "componentType"(): $TypeToken<(any)>
get "type"(): $Type
get "rawType"(): $Class<(any)>
get "types"(): $TypeToken$TypeSet<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$Type<T> = ($TypeToken<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken_<T> = $TypeToken$Type<(T)>;
}}
declare module "packages/com/google/common/base/$Function" {
import {$Function as $Function$0, $Function$Type as $Function$0$Type} from "packages/java/util/function/$Function"

export interface $Function<F, T> extends $Function$0<(F), (T)> {

 "equals"(arg0: any): boolean
 "apply"(arg0: F): T
 "compose"<V>(arg0: $Function$0$Type<(any), (any)>): $Function$0<(V), (F)>
 "andThen"<V>(arg0: $Function$0$Type<(any), (any)>): $Function$0<(F), (V)>
}

export namespace $Function {
function identity<T>(): $Function$0<(F), (F)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$Type<F, T> = ($Function<(F), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Function_<F, T> = $Function$Type<(F), (T)>;
}}
declare module "packages/com/google/gson/$JsonSerializationContext" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export interface $JsonSerializationContext {

 "serialize"(arg0: any): $JsonElement
 "serialize"(arg0: any, arg1: $Type$Type): $JsonElement
}

export namespace $JsonSerializationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonSerializationContext$Type = ($JsonSerializationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonSerializationContext_ = $JsonSerializationContext$Type;
}}
declare module "packages/com/google/common/hash/$HashCode" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $HashCode {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "bits"(): integer
public "asInt"(): integer
public static "fromString"(arg0: string): $HashCode
public "asBytes"(): (byte)[]
public "padToLong"(): long
public "asLong"(): long
public static "fromInt"(arg0: integer): $HashCode
public static "fromLong"(arg0: long): $HashCode
public "writeBytesTo"(arg0: (byte)[], arg1: integer, arg2: integer): integer
public static "fromBytes"(arg0: (byte)[]): $HashCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HashCode$Type = ($HashCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HashCode_ = $HashCode$Type;
}}
declare module "packages/com/google/common/collect/$AbstractMultimap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Multiset, $Multiset$Type} from "packages/com/google/common/collect/$Multiset"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractMultimap<K, V> implements $Multimap<(K), (V)> {


public "remove"(arg0: any, arg1: any): boolean
public "put"(arg0: K, arg1: V): boolean
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "isEmpty"(): boolean
public "putAll"(arg0: K, arg1: $Iterable$Type<(any)>): boolean
public "putAll"(arg0: $Multimap$Type<(any), (any)>): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "replaceValues"(arg0: K, arg1: $Iterable$Type<(any)>): $Collection<(V)>
public "containsEntry"(arg0: any, arg1: any): boolean
public "get"(arg0: K): $Collection<(V)>
public "clear"(): void
public "size"(): integer
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "containsKey"(arg0: any): boolean
public "removeAll"(arg0: any): $Collection<(V)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractMultimap$Type<K, V> = ($AbstractMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractMultimap_<K, V> = $AbstractMultimap$Type<(K), (V)>;
}}
declare module "packages/com/google/gson/$JsonObject" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$JsonPrimitive, $JsonPrimitive$Type} from "packages/com/google/gson/$JsonPrimitive"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JsonObject extends $JsonElement {

constructor()

public "add"(arg0: string, arg1: $JsonElement$Type): void
public "remove"(arg0: string): $JsonElement
public "get"(arg0: string): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(string), ($JsonElement)>)>
public "keySet"(): $Set<(string)>
public "has"(arg0: string): boolean
public "asMap"(): $Map<(string), ($JsonElement)>
public "addProperty"(arg0: string, arg1: string): void
public "addProperty"(arg0: string, arg1: character): void
public "addProperty"(arg0: string, arg1: boolean): void
public "addProperty"(arg0: string, arg1: number): void
public "getAsJsonObject"(arg0: string): $JsonObject
public "deepCopy"(): $JsonObject
public "getAsJsonArray"(arg0: string): $JsonArray
public "getAsJsonPrimitive"(arg0: string): $JsonPrimitive
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonObject$Type = (object) | ($JsonObject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonObject_ = $JsonObject$Type;
}}
declare module "packages/com/google/common/base/$Supplier" {
import {$Supplier as $Supplier$0, $Supplier$Type as $Supplier$0$Type} from "packages/java/util/function/$Supplier"

export interface $Supplier<T> extends $Supplier$0<(T)> {

 "get"(): T

(): T
}

export namespace $Supplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Supplier$Type<T> = ($Supplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Supplier_<T> = $Supplier$Type<(T)>;
}}
declare module "packages/com/google/common/collect/$ListMultimap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Multiset, $Multiset$Type} from "packages/com/google/common/collect/$Multiset"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $ListMultimap<K, V> extends $Multimap<(K), (V)> {

 "get"(arg0: K): $List<(V)>
 "equals"(arg0: any): boolean
 "removeAll"(arg0: any): $List<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(arg0: K, arg1: $Iterable$Type<(any)>): $List<(V)>
 "remove"(arg0: any, arg1: any): boolean
 "put"(arg0: K, arg1: V): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "putAll"(arg0: $Multimap$Type<(any), (any)>): boolean
 "putAll"(arg0: K, arg1: $Iterable$Type<(any)>): boolean
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "entries"(): $Collection<($Map$Entry<(K), (V)>)>
 "containsEntry"(arg0: any, arg1: any): boolean
}

export namespace $ListMultimap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListMultimap$Type<K, V> = ($ListMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListMultimap_<K, V> = $ListMultimap$Type<(K), (V)>;
}}
declare module "packages/com/google/common/collect/$ImmutableSet$Builder" {
import {$ImmutableCollection$Builder, $ImmutableCollection$Builder$Type} from "packages/com/google/common/collect/$ImmutableCollection$Builder"

export class $ImmutableSet$Builder<E> extends $ImmutableCollection$Builder<(E)> {

constructor()

public "add"(arg0: E): $ImmutableSet$Builder<(E)>
public "add"(...arg0: (E)[]): $ImmutableSet$Builder<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSet$Builder$Type<E> = ($ImmutableSet$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSet$Builder_<E> = $ImmutableSet$Builder$Type<(E)>;
}}
declare module "packages/com/google/gson/$ToNumberStrategy" {
import {$JsonReader, $JsonReader$Type} from "packages/com/google/gson/stream/$JsonReader"

export interface $ToNumberStrategy {

 "readNumber"(arg0: $JsonReader$Type): number

(arg0: $JsonReader$Type): number
}

export namespace $ToNumberStrategy {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToNumberStrategy$Type = ($ToNumberStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToNumberStrategy_ = $ToNumberStrategy$Type;
}}
declare module "packages/com/google/common/collect/$ForwardingList" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ForwardingCollection, $ForwardingCollection$Type} from "packages/com/google/common/collect/$ForwardingCollection"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ListIterator, $ListIterator$Type} from "packages/java/util/$ListIterator"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ForwardingList<E> extends $ForwardingCollection<(E)> implements $List<(E)> {


public "add"(arg0: integer, arg1: E): void
public "remove"(arg0: integer): E
public "get"(arg0: integer): E
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "indexOf"(arg0: any): integer
public "lastIndexOf"(arg0: any): integer
public "subList"(arg0: integer, arg1: integer): $List<(E)>
public "addAll"(arg0: integer, arg1: $Collection$Type<(any)>): boolean
public "set"(arg0: integer, arg1: E): E
public "listIterator"(arg0: integer): $ListIterator<(E)>
public "listIterator"(): $ListIterator<(E)>
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "replaceAll"(arg0: $UnaryOperator$Type<(E)>): void
public "size"(): integer
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "sort"(arg0: $Comparator$Type<(any)>): void
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
[index: number]: E
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingList$Type<E> = ($ForwardingList<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingList_<E> = $ForwardingList$Type<(E)>;
}}
declare module "packages/com/google/common/collect/$BaseImmutableMultimap" {
import {$AbstractMultimap, $AbstractMultimap$Type} from "packages/com/google/common/collect/$AbstractMultimap"

export class $BaseImmutableMultimap<K, V> extends $AbstractMultimap<(K), (V)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseImmutableMultimap$Type<K, V> = ($BaseImmutableMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseImmutableMultimap_<K, V> = $BaseImmutableMultimap$Type<(K), (V)>;
}}
declare module "packages/com/google/gson/$LongSerializationPolicy" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LongSerializationPolicy extends $Enum<($LongSerializationPolicy)> {
static readonly "DEFAULT": $LongSerializationPolicy
static readonly "STRING": $LongSerializationPolicy


public static "values"(): ($LongSerializationPolicy)[]
public static "valueOf"(arg0: string): $LongSerializationPolicy
public "serialize"(arg0: long): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongSerializationPolicy$Type = (("default") | ("string")) | ($LongSerializationPolicy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongSerializationPolicy_ = $LongSerializationPolicy$Type;
}}
declare module "packages/com/google/common/collect/$ForwardingMultimap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Multiset, $Multiset$Type} from "packages/com/google/common/collect/$Multiset"
import {$ForwardingObject, $ForwardingObject$Type} from "packages/com/google/common/collect/$ForwardingObject"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForwardingMultimap<K, V> extends $ForwardingObject implements $Multimap<(K), (V)> {


public "remove"(arg0: any, arg1: any): boolean
public "get"(arg0: K): $Collection<(V)>
public "put"(arg0: K, arg1: V): boolean
public "equals"(arg0: any): boolean
public "values"(): $Collection<(V)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "putAll"(arg0: $Multimap$Type<(any), (any)>): boolean
public "putAll"(arg0: K, arg1: $Iterable$Type<(any)>): boolean
public "containsKey"(arg0: any): boolean
public "keys"(): $Multiset<(K)>
public "keySet"(): $Set<(K)>
public "containsValue"(arg0: any): boolean
public "entries"(): $Collection<($Map$Entry<(K), (V)>)>
public "removeAll"(arg0: any): $Collection<(V)>
public "asMap"(): $Map<(K), ($Collection<(V)>)>
public "replaceValues"(arg0: K, arg1: $Iterable$Type<(any)>): $Collection<(V)>
public "containsEntry"(arg0: any, arg1: any): boolean
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForwardingMultimap$Type<K, V> = ($ForwardingMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForwardingMultimap_<K, V> = $ForwardingMultimap$Type<(K), (V)>;
}}
declare module "packages/com/google/common/reflect/$TypeCapture" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TypeCapture<T> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeCapture$Type<T> = ($TypeCapture<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeCapture_<T> = $TypeCapture$Type<(T)>;
}}
declare module "packages/com/google/common/collect/$Table" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Table$Cell, $Table$Cell$Type} from "packages/com/google/common/collect/$Table$Cell"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Table<R, C, V> {

 "remove"(arg0: any, arg1: any): V
 "get"(arg0: any, arg1: any): V
 "put"(arg0: R, arg1: C, arg2: V): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "contains"(arg0: any, arg1: any): boolean
 "putAll"(arg0: $Table$Type<(any), (any), (any)>): void
 "containsValue"(arg0: any): boolean
 "row"(arg0: R): $Map<(C), (V)>
 "column"(arg0: C): $Map<(R), (V)>
 "rowKeySet"(): $Set<(R)>
 "cellSet"(): $Set<($Table$Cell<(R), (C), (V)>)>
 "columnMap"(): $Map<(C), ($Map<(R), (V)>)>
 "containsColumn"(arg0: any): boolean
 "rowMap"(): $Map<(R), ($Map<(C), (V)>)>
 "columnKeySet"(): $Set<(C)>
 "containsRow"(arg0: any): boolean
}

export namespace $Table {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Table$Type<R, C, V> = ($Table<(R), (C), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Table_<R, C, V> = $Table$Type<(R), (C), (V)>;
}}
declare module "packages/com/google/common/collect/$Multiset$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Multiset$Entry<E> {

 "equals"(arg0: any): boolean
 "toString"(): string
 "hashCode"(): integer
 "getCount"(): integer
 "getElement"(): E
}

export namespace $Multiset$Entry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multiset$Entry$Type<E> = ($Multiset$Entry<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multiset$Entry_<E> = $Multiset$Entry$Type<(E)>;
}}
declare module "packages/com/google/gson/$FieldNamingPolicy" {
import {$FieldNamingStrategy, $FieldNamingStrategy$Type} from "packages/com/google/gson/$FieldNamingStrategy"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"

export class $FieldNamingPolicy extends $Enum<($FieldNamingPolicy)> implements $FieldNamingStrategy {
static readonly "IDENTITY": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE": $FieldNamingPolicy
static readonly "UPPER_CAMEL_CASE_WITH_SPACES": $FieldNamingPolicy
static readonly "UPPER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_UNDERSCORES": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DASHES": $FieldNamingPolicy
static readonly "LOWER_CASE_WITH_DOTS": $FieldNamingPolicy


public static "values"(): ($FieldNamingPolicy)[]
public static "valueOf"(arg0: string): $FieldNamingPolicy
public "translateName"(arg0: $Field$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldNamingPolicy$Type = (("lower_case_with_dashes") | ("upper_camel_case_with_spaces") | ("lower_case_with_underscores") | ("identity") | ("upper_case_with_underscores") | ("upper_camel_case") | ("lower_case_with_dots")) | ($FieldNamingPolicy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldNamingPolicy_ = $FieldNamingPolicy$Type;
}}
declare module "packages/com/google/common/collect/$ImmutableCollection$Builder" {
import {$ImmutableCollection, $ImmutableCollection$Type} from "packages/com/google/common/collect/$ImmutableCollection"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $ImmutableCollection$Builder<E> {


public "add"(arg0: E): $ImmutableCollection$Builder<(E)>
public "add"(...arg0: (E)[]): $ImmutableCollection$Builder<(E)>
public "addAll"(arg0: $Iterator$Type<(any)>): $ImmutableCollection$Builder<(E)>
public "addAll"(arg0: $Iterable$Type<(any)>): $ImmutableCollection$Builder<(E)>
public "build"(): $ImmutableCollection<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$Builder$Type<E> = ($ImmutableCollection$Builder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableCollection$Builder_<E> = $ImmutableCollection$Builder$Type<(E)>;
}}
declare module "packages/com/google/gson/$JsonDeserializationContext" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export interface $JsonDeserializationContext {

 "deserialize"<T>(arg0: $JsonElement$Type, arg1: $Type$Type): T

(arg0: $JsonElement$Type, arg1: $Type$Type): T
}

export namespace $JsonDeserializationContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonDeserializationContext$Type = ($JsonDeserializationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonDeserializationContext_ = $JsonDeserializationContext$Type;
}}
declare module "packages/com/google/common/collect/$ImmutableMultimap$Builder" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ImmutableMultimap, $ImmutableMultimap$Type} from "packages/com/google/common/collect/$ImmutableMultimap"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $ImmutableMultimap$Builder<K, V> {

constructor()

public "put"(arg0: $Map$Entry$Type<(any), (any)>): $ImmutableMultimap$Builder<(K), (V)>
public "put"(arg0: K, arg1: V): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(arg0: $Multimap$Type<(any), (any)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(arg0: K, ...arg1: (V)[]): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(arg0: K, arg1: $Iterable$Type<(any)>): $ImmutableMultimap$Builder<(K), (V)>
public "putAll"(arg0: $Iterable$Type<(any)>): $ImmutableMultimap$Builder<(K), (V)>
public "build"(): $ImmutableMultimap<(K), (V)>
public "orderValuesBy"(arg0: $Comparator$Type<(any)>): $ImmutableMultimap$Builder<(K), (V)>
public "orderKeysBy"(arg0: $Comparator$Type<(any)>): $ImmutableMultimap$Builder<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMultimap$Builder$Type<K, V> = ($ImmutableMultimap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMultimap$Builder_<K, V> = $ImmutableMultimap$Builder$Type<(K), (V)>;
}}
declare module "packages/com/google/gson/$GsonBuilder" {
import {$ReflectionAccessFilter, $ReflectionAccessFilter$Type} from "packages/com/google/gson/$ReflectionAccessFilter"
import {$FieldNamingStrategy, $FieldNamingStrategy$Type} from "packages/com/google/gson/$FieldNamingStrategy"
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"
import {$ExclusionStrategy, $ExclusionStrategy$Type} from "packages/com/google/gson/$ExclusionStrategy"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LongSerializationPolicy, $LongSerializationPolicy$Type} from "packages/com/google/gson/$LongSerializationPolicy"
import {$TypeAdapterFactory, $TypeAdapterFactory$Type} from "packages/com/google/gson/$TypeAdapterFactory"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"
import {$ToNumberStrategy, $ToNumberStrategy$Type} from "packages/com/google/gson/$ToNumberStrategy"
import {$FieldNamingPolicy, $FieldNamingPolicy$Type} from "packages/com/google/gson/$FieldNamingPolicy"

export class $GsonBuilder {

constructor()

public "create"(): $Gson
public "setLenient"(): $GsonBuilder
public "registerTypeAdapterFactory"(arg0: $TypeAdapterFactory$Type): $GsonBuilder
public "setVersion"(arg0: double): $GsonBuilder
public "addReflectionAccessFilter"(arg0: $ReflectionAccessFilter$Type): $GsonBuilder
public "registerTypeHierarchyAdapter"(arg0: $Class$Type<(any)>, arg1: any): $GsonBuilder
public "enableComplexMapKeySerialization"(): $GsonBuilder
public "setLongSerializationPolicy"(arg0: $LongSerializationPolicy$Type): $GsonBuilder
public "setFieldNamingPolicy"(arg0: $FieldNamingPolicy$Type): $GsonBuilder
public "setObjectToNumberStrategy"(arg0: $ToNumberStrategy$Type): $GsonBuilder
public "setExclusionStrategies"(...arg0: ($ExclusionStrategy$Type)[]): $GsonBuilder
public "addSerializationExclusionStrategy"(arg0: $ExclusionStrategy$Type): $GsonBuilder
public "setNumberToNumberStrategy"(arg0: $ToNumberStrategy$Type): $GsonBuilder
public "disableJdkUnsafe"(): $GsonBuilder
public "disableHtmlEscaping"(): $GsonBuilder
public "setDateFormat"(arg0: integer, arg1: integer): $GsonBuilder
public "setDateFormat"(arg0: string): $GsonBuilder
public "setDateFormat"(arg0: integer): $GsonBuilder
public "serializeNulls"(): $GsonBuilder
public "setFieldNamingStrategy"(arg0: $FieldNamingStrategy$Type): $GsonBuilder
public "serializeSpecialFloatingPointValues"(): $GsonBuilder
public "excludeFieldsWithoutExposeAnnotation"(): $GsonBuilder
public "addDeserializationExclusionStrategy"(arg0: $ExclusionStrategy$Type): $GsonBuilder
public "generateNonExecutableJson"(): $GsonBuilder
public "registerTypeAdapter"(arg0: $Type$Type, arg1: any): $GsonBuilder
public "disableInnerClassSerialization"(): $GsonBuilder
public "excludeFieldsWithModifiers"(...arg0: (integer)[]): $GsonBuilder
public "setPrettyPrinting"(): $GsonBuilder
set "version"(value: double)
set "longSerializationPolicy"(value: $LongSerializationPolicy$Type)
set "fieldNamingPolicy"(value: $FieldNamingPolicy$Type)
set "objectToNumberStrategy"(value: $ToNumberStrategy$Type)
set "exclusionStrategies"(value: ($ExclusionStrategy$Type)[])
set "numberToNumberStrategy"(value: $ToNumberStrategy$Type)
set "dateFormat"(value: string)
set "dateFormat"(value: integer)
set "fieldNamingStrategy"(value: $FieldNamingStrategy$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GsonBuilder$Type = ($GsonBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GsonBuilder_ = $GsonBuilder$Type;
}}
declare module "packages/com/google/common/collect/$SetMultimap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Multiset, $Multiset$Type} from "packages/com/google/common/collect/$Multiset"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SetMultimap<K, V> extends $Multimap<(K), (V)> {

 "get"(arg0: K): $Set<(V)>
 "equals"(arg0: any): boolean
 "removeAll"(arg0: any): $Set<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(arg0: K, arg1: $Iterable$Type<(any)>): $Set<(V)>
 "remove"(arg0: any, arg1: any): boolean
 "put"(arg0: K, arg1: V): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "putAll"(arg0: $Multimap$Type<(any), (any)>): boolean
 "putAll"(arg0: K, arg1: $Iterable$Type<(any)>): boolean
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "containsEntry"(arg0: any, arg1: any): boolean
}

export namespace $SetMultimap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetMultimap$Type<K, V> = ($SetMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetMultimap_<K, V> = $SetMultimap$Type<(K), (V)>;
}}
declare module "packages/com/google/gson/$JsonArray" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $JsonArray extends $JsonElement implements $Iterable<($JsonElement)> {

constructor()
constructor(arg0: integer)

public "add"(arg0: string): void
public "add"(arg0: number): void
public "add"(arg0: $JsonElement$Type): void
public "add"(arg0: character): void
public "add"(arg0: boolean): void
public "remove"(arg0: $JsonElement$Type): boolean
public "remove"(arg0: integer): $JsonElement
public "get"(arg0: integer): $JsonElement
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($JsonElement)>
public "contains"(arg0: $JsonElement$Type): boolean
public "addAll"(arg0: $JsonArray$Type): void
public "set"(arg0: integer, arg1: $JsonElement$Type): $JsonElement
public "asList"(): $List<($JsonElement)>
public "getAsInt"(): integer
public "getAsDouble"(): double
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): string
public "getAsNumber"(): number
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsFloat"(): float
public "getAsByte"(): byte
public "getAsShort"(): short
public "getAsBigDecimal"(): $BigDecimal
public "getAsBigInteger"(): $BigInteger
public "spliterator"(): $Spliterator<($JsonElement)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$JsonElement>;
get "empty"(): boolean
get "asInt"(): integer
get "asDouble"(): double
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): string
get "asNumber"(): number
get "asCharacter"(): character
get "asFloat"(): float
get "asByte"(): byte
get "asShort"(): short
get "asBigDecimal"(): $BigDecimal
get "asBigInteger"(): $BigInteger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonArray$Type = ((any)[]) | ($JsonArray);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonArray_ = $JsonArray$Type;
}}
declare module "packages/com/google/gson/$JsonPrimitive" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"

export class $JsonPrimitive extends $JsonElement {

constructor(arg0: character)
constructor(arg0: string)
constructor(arg0: number)
constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "getAsInt"(): integer
public "getAsDouble"(): double
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): string
public "isNumber"(): boolean
public "deepCopy"(): $JsonPrimitive
public "getAsNumber"(): number
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsFloat"(): float
public "getAsByte"(): byte
public "isString"(): boolean
public "getAsShort"(): short
public "isBoolean"(): boolean
public "getAsBigDecimal"(): $BigDecimal
public "getAsBigInteger"(): $BigInteger
get "asInt"(): integer
get "asDouble"(): double
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): string
get "number"(): boolean
get "asNumber"(): number
get "asCharacter"(): character
get "asFloat"(): float
get "asByte"(): byte
get "string"(): boolean
get "asShort"(): short
get "boolean"(): boolean
get "asBigDecimal"(): $BigDecimal
get "asBigInteger"(): $BigInteger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonPrimitive$Type = (number) | (string) | (boolean) | (null) | ($JsonPrimitive);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonPrimitive_ = $JsonPrimitive$Type;
}}
declare module "packages/com/google/common/collect/$ImmutableSetMultimap" {
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$ImmutableSetMultimap$Builder, $ImmutableSetMultimap$Builder$Type} from "packages/com/google/common/collect/$ImmutableSetMultimap$Builder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SetMultimap, $SetMultimap$Type} from "packages/com/google/common/collect/$SetMultimap"
import {$ImmutableMultimap, $ImmutableMultimap$Type} from "packages/com/google/common/collect/$ImmutableMultimap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Collector, $Collector$Type} from "packages/java/util/stream/$Collector"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ImmutableSetMultimap<K, V> extends $ImmutableMultimap<(K), (V)> implements $SetMultimap<(K), (V)> {


public static "copyOf"<K, V>(arg0: $Multimap$Type<(any), (any)>): $ImmutableSetMultimap<(K), (V)>
public static "copyOf"<K, V>(arg0: $Iterable$Type<(any)>): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $ImmutableSetMultimap<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $ImmutableSetMultimap<(K), (V)>
public static "builder"<K, V>(): $ImmutableSetMultimap$Builder<(K), (V)>
/**
 * 
 * @deprecated
 */
public "removeAll"(arg0: any): $ImmutableSet<(V)>
public "inverse"(): $ImmutableSetMultimap<(V), (K)>
public static "toImmutableSetMultimap"<T, K, V>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Collector<(T), (any), ($ImmutableSetMultimap<(K), (V)>)>
public static "flatteningToImmutableSetMultimap"<T, K, V>(arg0: $Function$Type<(any), (any)>, arg1: $Function$Type<(any), (any)>): $Collector<(T), (any), ($ImmutableSetMultimap<(K), (V)>)>
public "equals"(arg0: any): boolean
public "asMap"(): $Map<(K), ($Collection<(V)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableSetMultimap$Type<K, V> = ($ImmutableSetMultimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableSetMultimap_<K, V> = $ImmutableSetMultimap$Type<(K), (V)>;
}}
declare module "packages/com/google/gson/$FieldAttributes" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Field, $Field$Type} from "packages/java/lang/reflect/$Field"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $FieldAttributes {

constructor(arg0: $Field$Type)

public "getName"(): string
public "toString"(): string
public "getDeclaringClass"(): $Class<(any)>
public "getAnnotation"<T extends $Annotation>(arg0: $Class$Type<(T)>): T
public "getAnnotations"(): $Collection<($Annotation)>
public "hasModifier"(arg0: integer): boolean
public "getDeclaredClass"(): $Class<(any)>
public "getDeclaredType"(): $Type
get "name"(): string
get "declaringClass"(): $Class<(any)>
get "annotations"(): $Collection<($Annotation)>
get "declaredClass"(): $Class<(any)>
get "declaredType"(): $Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieldAttributes$Type = ($FieldAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieldAttributes_ = $FieldAttributes$Type;
}}
declare module "packages/com/google/gson/$JsonElement" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonNull, $JsonNull$Type} from "packages/com/google/gson/$JsonNull"
import {$JsonPrimitive, $JsonPrimitive$Type} from "packages/com/google/gson/$JsonPrimitive"
import {$BigInteger, $BigInteger$Type} from "packages/java/math/$BigInteger"
import {$BigDecimal, $BigDecimal$Type} from "packages/java/math/$BigDecimal"
import {$JsonArray, $JsonArray$Type} from "packages/com/google/gson/$JsonArray"

export class $JsonElement {

/**
 * 
 * @deprecated
 */
constructor()

public "toString"(): string
public "getAsInt"(): integer
public "getAsDouble"(): double
public "getAsLong"(): long
public "getAsBoolean"(): boolean
public "getAsString"(): string
public "isJsonNull"(): boolean
public "getAsJsonNull"(): $JsonNull
public "isJsonArray"(): boolean
public "isJsonPrimitive"(): boolean
public "getAsJsonObject"(): $JsonObject
public "deepCopy"(): $JsonElement
public "getAsJsonArray"(): $JsonArray
public "getAsJsonPrimitive"(): $JsonPrimitive
public "isJsonObject"(): boolean
public "getAsNumber"(): number
/**
 * 
 * @deprecated
 */
public "getAsCharacter"(): character
public "getAsFloat"(): float
public "getAsByte"(): byte
public "getAsShort"(): short
public "getAsBigDecimal"(): $BigDecimal
public "getAsBigInteger"(): $BigInteger
get "asInt"(): integer
get "asDouble"(): double
get "asLong"(): long
get "asBoolean"(): boolean
get "asString"(): string
get "jsonNull"(): boolean
get "asJsonNull"(): $JsonNull
get "jsonArray"(): boolean
get "jsonPrimitive"(): boolean
get "asJsonObject"(): $JsonObject
get "asJsonArray"(): $JsonArray
get "asJsonPrimitive"(): $JsonPrimitive
get "jsonObject"(): boolean
get "asNumber"(): number
get "asCharacter"(): character
get "asFloat"(): float
get "asByte"(): byte
get "asShort"(): short
get "asBigDecimal"(): $BigDecimal
get "asBigInteger"(): $BigInteger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonElement$Type = ($JsonObject$Type) | ($JsonArray$Type) | ($JsonPrimitive$Type) | ($JsonElement);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonElement_ = $JsonElement$Type;
}}
declare module "packages/com/google/gson/reflect/$TypeToken" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $TypeToken<T> {


public static "get"(arg0: $Type$Type): $TypeToken<(any)>
public static "get"<T>(arg0: $Class$Type<(T)>): $TypeToken<(T)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $TypeToken$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Type$Type): boolean
/**
 * 
 * @deprecated
 */
public "isAssignableFrom"(arg0: $Class$Type<(any)>): boolean
public "getType"(): $Type
public "getRawType"(): $Class<(any)>
public static "getArray"(arg0: $Type$Type): $TypeToken<(any)>
public static "getParameterized"(arg0: $Type$Type, ...arg1: ($Type$Type)[]): $TypeToken<(any)>
get "type"(): $Type
get "rawType"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$Type<T> = ($TypeToken<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken_<T> = $TypeToken$Type<(T)>;
}}
declare module "packages/com/google/gson/stream/$JsonToken" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $JsonToken extends $Enum<($JsonToken)> {
static readonly "BEGIN_ARRAY": $JsonToken
static readonly "END_ARRAY": $JsonToken
static readonly "BEGIN_OBJECT": $JsonToken
static readonly "END_OBJECT": $JsonToken
static readonly "NAME": $JsonToken
static readonly "STRING": $JsonToken
static readonly "NUMBER": $JsonToken
static readonly "BOOLEAN": $JsonToken
static readonly "NULL": $JsonToken
static readonly "END_DOCUMENT": $JsonToken


public static "values"(): ($JsonToken)[]
public static "valueOf"(arg0: string): $JsonToken
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonToken$Type = (("number") | ("end_document") | ("begin_array") | ("boolean") | ("end_object") | ("string") | ("null") | ("name") | ("end_array") | ("begin_object")) | ($JsonToken);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonToken_ = $JsonToken$Type;
}}
declare module "packages/com/google/gson/$TypeAdapterFactory" {
import {$Gson, $Gson$Type} from "packages/com/google/gson/$Gson"
import {$TypeAdapter, $TypeAdapter$Type} from "packages/com/google/gson/$TypeAdapter"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/gson/reflect/$TypeToken"

export interface $TypeAdapterFactory {

 "create"<T>(arg0: $Gson$Type, arg1: $TypeToken$Type<(T)>): $TypeAdapter<(T)>

(arg0: $Gson$Type, arg1: $TypeToken$Type<(T)>): $TypeAdapter<(T)>
}

export namespace $TypeAdapterFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeAdapterFactory$Type = ($TypeAdapterFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeAdapterFactory_ = $TypeAdapterFactory$Type;
}}
declare module "packages/com/google/common/reflect/$TypeParameter" {
import {$TypeCapture, $TypeCapture$Type} from "packages/com/google/common/reflect/$TypeCapture"

export class $TypeParameter<T> extends $TypeCapture<(T)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeParameter$Type<T> = ($TypeParameter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeParameter_<T> = $TypeParameter$Type<(T)>;
}}
declare module "packages/com/google/gson/stream/$JsonWriter" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$Writer, $Writer$Type} from "packages/java/io/$Writer"
import {$Flushable, $Flushable$Type} from "packages/java/io/$Flushable"

export class $JsonWriter implements $Closeable, $Flushable {

constructor(arg0: $Writer$Type)

public "name"(arg0: string): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: float): $JsonWriter
public "value"(arg0: double): $JsonWriter
public "value"(arg0: boolean): $JsonWriter
public "value"(arg0: string): $JsonWriter
public "value"(arg0: long): $JsonWriter
public "value"(arg0: number): $JsonWriter
public "flush"(): void
public "close"(): void
public "setLenient"(arg0: boolean): void
public "isLenient"(): boolean
public "nullValue"(): $JsonWriter
public "setHtmlSafe"(arg0: boolean): void
public "getSerializeNulls"(): boolean
public "isHtmlSafe"(): boolean
public "setSerializeNulls"(arg0: boolean): void
public "endArray"(): $JsonWriter
public "beginObject"(): $JsonWriter
public "endObject"(): $JsonWriter
public "beginArray"(): $JsonWriter
public "jsonValue"(arg0: string): $JsonWriter
public "setIndent"(arg0: string): void
set "lenient"(value: boolean)
get "lenient"(): boolean
set "htmlSafe"(value: boolean)
get "serializeNulls"(): boolean
get "htmlSafe"(): boolean
set "serializeNulls"(value: boolean)
set "indent"(value: string)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JsonWriter$Type = ($JsonWriter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JsonWriter_ = $JsonWriter$Type;
}}
declare module "packages/com/google/common/reflect/$Invokable" {
import {$Annotation, $Annotation$Type} from "packages/java/lang/annotation/$Annotation"
import {$Member, $Member$Type} from "packages/java/lang/reflect/$Member"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Method, $Method$Type} from "packages/java/lang/reflect/$Method"
import {$Constructor, $Constructor$Type} from "packages/java/lang/reflect/$Constructor"
import {$AnnotatedType, $AnnotatedType$Type} from "packages/java/lang/reflect/$AnnotatedType"
import {$AnnotatedElement, $AnnotatedElement$Type} from "packages/java/lang/reflect/$AnnotatedElement"
import {$TypeVariable, $TypeVariable$Type} from "packages/java/lang/reflect/$TypeVariable"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"
import {$Parameter, $Parameter$Type} from "packages/com/google/common/reflect/$Parameter"

export class $Invokable<T, R> implements $AnnotatedElement, $Member {


public "invoke"(arg0: T, ...arg1: (any)[]): R
public "getName"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getModifiers"(): integer
public static "from"(arg0: $Method$Type): $Invokable<(any), (any)>
public static "from"<T>(arg0: $Constructor$Type<(T)>): $Invokable<(T), (T)>
public "getTypeParameters"(): ($TypeVariable<(any)>)[]
public "getReturnType"(): $TypeToken<(any)>
public "isStatic"(): boolean
public "isAnnotationPresent"(arg0: $Class$Type<(any)>): boolean
public "isSynthetic"(): boolean
public "getDeclaringClass"(): $Class<(any)>
public "getAnnotation"<A extends $Annotation>(arg0: $Class$Type<(A)>): A
public "getAnnotations"(): ($Annotation)[]
public "getDeclaredAnnotations"(): ($Annotation)[]
public "isPublic"(): boolean
public "setAccessible"(arg0: boolean): void
public "isProtected"(): boolean
public "trySetAccessible"(): boolean
public "isAccessible"(): boolean
public "isVarArgs"(): boolean
public "getExceptionTypes"(): $ImmutableList<($TypeToken<(any)>)>
public "getAnnotatedReturnType"(): $AnnotatedType
public "getParameters"(): $ImmutableList<($Parameter)>
public "isFinal"(): boolean
public "isAbstract"(): boolean
public "isPrivate"(): boolean
public "isNative"(): boolean
public "isSynchronized"(): boolean
public "getOwnerType"(): $TypeToken<(T)>
public "isOverridable"(): boolean
public "isPackagePrivate"(): boolean
public "returning"<R1 extends R>(arg0: $TypeToken$Type<(R1)>): $Invokable<(T), (R1)>
public "returning"<R1 extends R>(arg0: $Class$Type<(R1)>): $Invokable<(T), (R1)>
public "getAnnotationsByType"<T extends $Annotation>(arg0: $Class$Type<(T)>): (T)[]
public "getDeclaredAnnotation"<T extends $Annotation>(arg0: $Class$Type<(T)>): T
public "getDeclaredAnnotationsByType"<T extends $Annotation>(arg0: $Class$Type<(T)>): (T)[]
get "name"(): string
get "modifiers"(): integer
get "typeParameters"(): ($TypeVariable<(any)>)[]
get "returnType"(): $TypeToken<(any)>
get "static"(): boolean
get "synthetic"(): boolean
get "declaringClass"(): $Class<(any)>
get "annotations"(): ($Annotation)[]
get "declaredAnnotations"(): ($Annotation)[]
get "public"(): boolean
set "accessible"(value: boolean)
get "protected"(): boolean
get "accessible"(): boolean
get "varArgs"(): boolean
get "exceptionTypes"(): $ImmutableList<($TypeToken<(any)>)>
get "annotatedReturnType"(): $AnnotatedType
get "parameters"(): $ImmutableList<($Parameter)>
get "final"(): boolean
get "abstract"(): boolean
get "private"(): boolean
get "native"(): boolean
get "synchronized"(): boolean
get "ownerType"(): $TypeToken<(T)>
get "overridable"(): boolean
get "packagePrivate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Invokable$Type<T, R> = ($Invokable<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Invokable_<T, R> = $Invokable$Type<(T), (R)>;
}}
declare module "packages/com/google/common/collect/$Multimap" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Multiset, $Multiset$Type} from "packages/com/google/common/collect/$Multiset"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $Multimap<K, V> {

 "remove"(arg0: any, arg1: any): boolean
 "get"(arg0: K): $Collection<(V)>
 "put"(arg0: K, arg1: V): boolean
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "clear"(): void
 "isEmpty"(): boolean
 "size"(): integer
 "putAll"(arg0: $Multimap$Type<(any), (any)>): boolean
 "putAll"(arg0: K, arg1: $Iterable$Type<(any)>): boolean
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "keys"(): $Multiset<(K)>
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "entries"(): $Collection<($Map$Entry<(K), (V)>)>
 "removeAll"(arg0: any): $Collection<(V)>
 "asMap"(): $Map<(K), ($Collection<(V)>)>
 "replaceValues"(arg0: K, arg1: $Iterable$Type<(any)>): $Collection<(V)>
 "containsEntry"(arg0: any, arg1: any): boolean
}

export namespace $Multimap {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Multimap$Type<K, V> = ($Multimap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Multimap_<K, V> = $Multimap$Type<(K), (V)>;
}}
declare module "packages/com/google/common/collect/$ImmutableCollection" {
import {$UnmodifiableIterator, $UnmodifiableIterator$Type} from "packages/com/google/common/collect/$UnmodifiableIterator"
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AbstractCollection, $AbstractCollection$Type} from "packages/java/util/$AbstractCollection"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export class $ImmutableCollection<E> extends $AbstractCollection<(E)> implements $Serializable {


/**
 * 
 * @deprecated
 */
public "add"(arg0: E): boolean
/**
 * 
 * @deprecated
 */
public "remove"(arg0: any): boolean
/**
 * 
 * @deprecated
 */
public "clear"(): void
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public "iterator"(): $UnmodifiableIterator<(E)>
public "contains"(arg0: any): boolean
public "spliterator"(): $Spliterator<(E)>
/**
 * 
 * @deprecated
 */
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "asList"(): $ImmutableList<(E)>
/**
 * 
 * @deprecated
 */
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
/**
 * 
 * @deprecated
 */
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "equals"(arg0: any): boolean
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableCollection$Type<E> = ($ImmutableCollection<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableCollection_<E> = $ImmutableCollection$Type<(E)>;
}}
declare module "packages/com/google/gson/$ReflectionAccessFilter" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ReflectionAccessFilter$FilterResult, $ReflectionAccessFilter$FilterResult$Type} from "packages/com/google/gson/$ReflectionAccessFilter$FilterResult"

export interface $ReflectionAccessFilter {

 "check"(arg0: $Class$Type<(any)>): $ReflectionAccessFilter$FilterResult

(arg0: $Class$Type<(any)>): $ReflectionAccessFilter$FilterResult
}

export namespace $ReflectionAccessFilter {
const BLOCK_INACCESSIBLE_JAVA: $ReflectionAccessFilter
const BLOCK_ALL_JAVA: $ReflectionAccessFilter
const BLOCK_ALL_ANDROID: $ReflectionAccessFilter
const BLOCK_ALL_PLATFORM: $ReflectionAccessFilter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReflectionAccessFilter$Type = ($ReflectionAccessFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReflectionAccessFilter_ = $ReflectionAccessFilter$Type;
}}
declare module "packages/com/google/common/collect/$ImmutableMap$Builder" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ImmutableMap$Builder<K, V> {

constructor()

public "put"(arg0: K, arg1: V): $ImmutableMap$Builder<(K), (V)>
public "put"(arg0: $Map$Entry$Type<(any), (any)>): $ImmutableMap$Builder<(K), (V)>
public "putAll"(arg0: $Iterable$Type<(any)>): $ImmutableMap$Builder<(K), (V)>
public "putAll"(arg0: $Map$Type<(any), (any)>): $ImmutableMap$Builder<(K), (V)>
public "build"(): $ImmutableMap<(K), (V)>
public "orderEntriesByValue"(arg0: $Comparator$Type<(any)>): $ImmutableMap$Builder<(K), (V)>
public "buildKeepingLast"(): $ImmutableMap<(K), (V)>
public "buildOrThrow"(): $ImmutableMap<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmutableMap$Builder$Type<K, V> = ($ImmutableMap$Builder<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ImmutableMap$Builder_<K, V> = $ImmutableMap$Builder$Type<(K), (V)>;
}}
declare module "packages/com/google/common/reflect/$TypeToken$TypeSet" {
import {$Serializable, $Serializable$Type} from "packages/java/io/$Serializable"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForwardingSet, $ForwardingSet$Type} from "packages/com/google/common/collect/$ForwardingSet"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$TypeToken, $TypeToken$Type} from "packages/com/google/common/reflect/$TypeToken"

export class $TypeToken$TypeSet extends $ForwardingSet<($TypeToken<(any)>)> implements $Serializable {


public "interfaces"(): $TypeToken$TypeSet<>
public "classes"(): $TypeToken$TypeSet<>
public "rawTypes"(): $Set<($Class<(any)>)>
public "add"(arg0: E): boolean
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "iterator"(): $Iterator<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $Set<(E)>
public static "of"<E>(arg0: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $Set<(E)>
public static "of"<E>(...arg0: (E)[]): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $Set<(E)>
public static "of"<E>(): $Set<(E)>
public static "of"<E>(arg0: E, arg1: E): $Set<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeToken$TypeSet$Type = ($TypeToken$TypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeToken$TypeSet_ = $TypeToken$TypeSet$Type;
}}
