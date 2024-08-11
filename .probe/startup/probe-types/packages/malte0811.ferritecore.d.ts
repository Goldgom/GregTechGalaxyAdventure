declare module "packages/malte0811/ferritecore/mixin/blockstatecache/$DiscreteVSAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DiscreteVSAccess {

 "getXSize"(): integer
 "getYSize"(): integer
 "getZSize"(): integer
}

export namespace $DiscreteVSAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiscreteVSAccess$Type = ($DiscreteVSAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiscreteVSAccess_ = $DiscreteVSAccess$Type;
}}
declare module "packages/malte0811/ferritecore/mixin/blockstatecache/$VoxelShapeAccess" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$DiscreteVoxelShape, $DiscreteVoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"

export interface $VoxelShapeAccess {

 "getShape"(): $DiscreteVoxelShape
 "setShape"(arg0: $DiscreteVoxelShape$Type): void
 "getFaces"(): ($VoxelShape)[]
 "setFaces"(arg0: ($VoxelShape$Type)[]): void
}

export namespace $VoxelShapeAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccess$Type = ($VoxelShapeAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccess_ = $VoxelShapeAccess$Type;
}}
declare module "packages/malte0811/ferritecore/fastmap/$FastMap" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$FastMapKey, $FastMapKey$Type} from "packages/malte0811/ferritecore/fastmap/$FastMapKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $FastMap<Value> {

constructor(arg0: $Collection$Type<($Property$Type<(any)>)>, arg1: $Map$Type<($Map$Type<($Property$Type<(any)>), ($Comparable$Type<(any)>)>), (Value)>, arg2: boolean)

public "getValue"(arg0: integer, arg1: any): $Comparable<(any)>
public "getValue"<T extends $Comparable<(T)>>(arg0: integer, arg1: $Property$Type<(T)>): T
public "getKey"(arg0: integer): $FastMapKey<(any)>
public "getEntry"(arg0: integer, arg1: integer): $Map$Entry<($Property<(any)>), ($Comparable<(any)>)>
public "with"<T extends $Comparable<(T)>>(arg0: integer, arg1: $Property$Type<(T)>, arg2: T): Value
public "withUnsafe"<T extends $Comparable<(T)>>(arg0: integer, arg1: $Property$Type<(T)>, arg2: any): Value
public "getIndexOf"(arg0: $Map$Type<($Property$Type<(any)>), ($Comparable$Type<(any)>)>): integer
public "getPropertySet"(): $ImmutableSet<($Property<(any)>)>
public "isSingleState"(): boolean
public "numProperties"(): integer
get "propertySet"(): $ImmutableSet<($Property<(any)>)>
get "singleState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMap$Type<Value> = ($FastMap<(Value)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastMap_<Value> = $FastMap$Type<(Value)>;
}}
declare module "packages/malte0811/ferritecore/ducks/$BlockStateCacheAccess" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"

export interface $BlockStateCacheAccess {

 "getCollisionShape"(): $VoxelShape
 "setFaceSturdy"(arg0: (boolean)[]): void
 "getFaceSturdy"(): (boolean)[]
 "setCollisionShape"(arg0: $VoxelShape$Type): void
 "getOcclusionShapes"(): ($VoxelShape)[]
 "setOcclusionShapes"(arg0: ($VoxelShape$Type)[]): void
}

export namespace $BlockStateCacheAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateCacheAccess$Type = ($BlockStateCacheAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateCacheAccess_ = $BlockStateCacheAccess$Type;
}}
declare module "packages/malte0811/ferritecore/ducks/$FastMapStateHolder" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Table, $Table$Type} from "packages/com/google/common/collect/$Table"
import {$FastMap, $FastMap$Type} from "packages/malte0811/ferritecore/fastmap/$FastMap"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"

export interface $FastMapStateHolder<S> {

 "setStateMap"(arg0: $FastMap$Type<(S)>): void
 "setStateIndex"(arg0: integer): void
 "setNeighborTable"(arg0: $Table$Type<($Property$Type<(any)>), ($Comparable$Type<(any)>), (S)>): void
 "getStateIndex"(): integer
 "getStateMap"(): $FastMap<(S)>
 "getNeighborTable"(): $Table<($Property<(any)>), ($Comparable<(any)>), (S)>
 "replacePropertyMap"(arg0: $ImmutableMap$Type<($Property$Type<(any)>), ($Comparable$Type<(any)>)>): void
 "getVanillaPropertyMap"(): $ImmutableMap<($Property<(any)>), ($Comparable<(any)>)>
}

export namespace $FastMapStateHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMapStateHolder$Type<S> = ($FastMapStateHolder<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastMapStateHolder_<S> = $FastMapStateHolder$Type<(S)>;
}}
declare module "packages/malte0811/ferritecore/fastmap/$FastMapKey" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $FastMapKey<T extends $Comparable<(T)>> {


public "getProperty"(): $Property<(T)>
public "getValue"(arg0: integer): T
public "numValues"(): integer
get "property"(): $Property<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FastMapKey$Type<T> = ($FastMapKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FastMapKey_<T> = $FastMapKey$Type<(T)>;
}}
declare module "packages/malte0811/ferritecore/mixin/dedupbakedquad/$BakedQuadAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BakedQuadAccess {

 "setVertices"(arg0: (integer)[]): void

(arg0: (integer)[]): void
}

export namespace $BakedQuadAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadAccess$Type = ($BakedQuadAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedQuadAccess_ = $BakedQuadAccess$Type;
}}
declare module "packages/malte0811/ferritecore/mixin/mrl/$ResourceLocationAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ResourceLocationAccess {

 "setNamespace"(arg0: string): void
 "setPath"(arg0: string): void
}

export namespace $ResourceLocationAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceLocationAccess$Type = ($ResourceLocationAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceLocationAccess_ = $ResourceLocationAccess$Type;
}}
