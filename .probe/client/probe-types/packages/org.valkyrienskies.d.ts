declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SerializableSelectedAreaToolkit" {
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AABBd, $AABBd$Type} from "packages/org/joml/primitives/$AABBd"

export class $SerializableSelectedAreaToolkit {

constructor(selectedAreas: $HashSet$Type<($AABBd$Type)>, selectionClusters: $HashSet$Type<($Set$Type<($AABBd$Type)>)>)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(selectedAreas: $HashSet$Type<($AABBd$Type)>, selectionClusters: $HashSet$Type<($Set$Type<($AABBd$Type)>)>): $SerializableSelectedAreaToolkit
public "component2"(): $HashSet<($Set<($AABBd)>)>
public "component1"(): $HashSet<($AABBd)>
public "getSelectionClusters"(): $HashSet<($Set<($AABBd)>)>
public "getSelectedAreas"(): $HashSet<($AABBd)>
get "selectionClusters"(): $HashSet<($Set<($AABBd)>)>
get "selectedAreas"(): $HashSet<($AABBd)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializableSelectedAreaToolkit$Type = ($SerializableSelectedAreaToolkit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializableSelectedAreaToolkit_ = $SerializableSelectedAreaToolkit$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/command/$ShipArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ShipArgument$Companion, $ShipArgument$Companion$Type} from "packages/org/valkyrienskies/mod/common/command/$ShipArgument$Companion"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ShipSelector, $ShipSelector$Type} from "packages/org/valkyrienskies/mod/common/command/$ShipSelector"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ShipArgument implements $ArgumentType<($ShipSelector)> {
static readonly "Companion": $ShipArgument$Companion

constructor(selectorOnly: boolean, $constructor_marker: $DefaultConstructorMarker$Type)

public "getSelectorOnly"(): boolean
public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(context: $CommandContext$Type<(S)>, builder: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
get "selectorOnly"(): boolean
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipArgument$Type = ($ShipArgument);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipArgument_ = $ShipArgument$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/command/$ShipArgument$Companion" {
import {$ShipArgument, $ShipArgument$Type} from "packages/org/valkyrienskies/mod/common/command/$ShipArgument"
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$VSCommandSource, $VSCommandSource$Type} from "packages/org/valkyrienskies/mod/mixinducks/feature/command/$VSCommandSource"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $ShipArgument$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "ships"(): $ShipArgument
public "selectorOnly"(): $ShipArgument
public "getShips"<S extends $VSCommandSource>(context: $CommandContext$Type<(S)>, argName: string): $Set<($Ship)>
public "getShip"<S extends $VSCommandSource>(context: $CommandContext$Type<(S)>, argName: string): $Ship
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipArgument$Companion$Type = ($ShipArgument$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipArgument$Companion_ = $ShipArgument$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/entity/$ShipMountedToData" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$LoadedShip, $LoadedShip$Type} from "packages/org/valkyrienskies/core/api/ships/$LoadedShip"

export class $ShipMountedToData {

constructor(shipMountedTo: $LoadedShip$Type, mountPosInShip: $Vector3dc$Type)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(shipMountedTo: $LoadedShip$Type, mountPosInShip: $Vector3dc$Type): $ShipMountedToData
public "component2"(): $Vector3dc
public "component1"(): $LoadedShip
public "getMountPosInShip"(): $Vector3dc
public "getShipMountedTo"(): $LoadedShip
get "mountPosInShip"(): $Vector3dc
get "shipMountedTo"(): $LoadedShip
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipMountedToData$Type = ($ShipMountedToData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipMountedToData_ = $ShipMountedToData$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$ContraptionWingProvider" {
import {$Matrix4dc, $Matrix4dc$Type} from "packages/org/joml/$Matrix4dc"

export interface $ContraptionWingProvider {

 "getWingGroupId"(): integer
 "setWingGroupId"(arg0: integer): void
 "computeContraptionWingTransform"(): $Matrix4dc
}

export namespace $ContraptionWingProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContraptionWingProvider$Type = ($ContraptionWingProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContraptionWingProvider_ = $ContraptionWingProvider$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/client/render/$LevelRendererAccessor" {
import {$ViewArea, $ViewArea$Type} from "packages/net/minecraft/client/renderer/$ViewArea"

export interface $LevelRendererAccessor {

 "getViewArea"(): $ViewArea

(): $ViewArea
}

export namespace $LevelRendererAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$Type = ($LevelRendererAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelRendererAccessor_ = $LevelRendererAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet" {
import {$Vector3i, $Vector3i$Type} from "packages/org/joml/$Vector3i"
import {$LevelYRange, $LevelYRange$Type} from "packages/org/valkyrienskies/core/api/world/$LevelYRange"
import {$IntBinaryConsumer, $IntBinaryConsumer$Type} from "packages/org/valkyrienskies/core/api/util/functions/$IntBinaryConsumer"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$Function2, $Function2$Type} from "packages/kotlin/jvm/functions/$Function2"
import {$IShipActiveChunksSet$Companion, $IShipActiveChunksSet$Companion$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet$Companion"

export interface $IShipActiveChunksSet {

 "add"(arg0: integer, arg1: integer): boolean
 "remove"(arg0: integer, arg1: integer): boolean
 "contains"(arg0: integer, arg1: integer): boolean
 "forEach"(arg0: $IntBinaryConsumer$Type): void
 "getSize"(): integer
 "getTotalChunks"(): integer
 "addChunkPos"(arg0: integer, arg1: integer): boolean
 "containsChunkPos"(arg0: integer, arg1: integer): boolean
 "getMinMaxWorldPos"(arg0: $Vector3i$Type, arg1: $Vector3i$Type, arg2: $LevelYRange$Type): void
 "iterateChunkPos"(arg0: $Function2$Type<(any), (any), ($Unit$Type)>): void
 "removeChunkPos"(arg0: integer, arg1: integer): boolean
}

export namespace $IShipActiveChunksSet {
const Companion: $IShipActiveChunksSet$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShipActiveChunksSet$Type = ($IShipActiveChunksSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShipActiveChunksSet_ = $IShipActiveChunksSet$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/physics/$PhysicsEntityData" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ShipInertiaData, $ShipInertiaData$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipInertiaData"
import {$VSCollisionShapeData, $VSCollisionShapeData$Type} from "packages/org/valkyrienskies/core/apigame/physics/$VSCollisionShapeData"

export class $PhysicsEntityData {

constructor(shipId: long, transform: $ShipTransform$Type, inertiaData: $ShipInertiaData$Type, linearVelocity: $Vector3dc$Type, angularVelocity: $Vector3dc$Type, collisionShapeData: $VSCollisionShapeData$Type, collisionMask: integer, staticFrictionCoefficient: double, dynamicFrictionCoefficient: double, restitutionCoefficient: double, isStatic: boolean)
constructor(arg0: long, arg1: $ShipTransform$Type, arg2: $ShipInertiaData$Type, arg3: $Vector3dc$Type, arg4: $Vector3dc$Type, arg5: $VSCollisionShapeData$Type, arg6: integer, arg7: double, arg8: double, arg9: double, arg10: boolean, arg11: integer, arg12: $DefaultConstructorMarker$Type)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isStatic"(): boolean
public "copy"(shipId: long, transform: $ShipTransform$Type, inertiaData: $ShipInertiaData$Type, linearVelocity: $Vector3dc$Type, angularVelocity: $Vector3dc$Type, collisionShapeData: $VSCollisionShapeData$Type, collisionMask: integer, staticFrictionCoefficient: double, dynamicFrictionCoefficient: double, restitutionCoefficient: double, isStatic: boolean): $PhysicsEntityData
public "setTransform"(arg0: $ShipTransform$Type): void
public "component2"(): $ShipTransform
public "component4"(): $Vector3dc
public "component5"(): $Vector3dc
public "component1"(): long
public "component3"(): $ShipInertiaData
public "setRestitutionCoefficient"(arg0: double): void
public "setStaticFrictionCoefficient"(arg0: double): void
public "setDynamicFrictionCoefficient"(arg0: double): void
public "component6"(): $VSCollisionShapeData
public "setCollisionMask"(arg0: integer): void
public "setStatic"(arg0: boolean): void
public "setInertiaData"(arg0: $ShipInertiaData$Type): void
public "getInertiaData"(): $ShipInertiaData
public "getTransform"(): $ShipTransform
public "component7"(): integer
public "getShipId"(): long
public "copyPhysicsEntityDataWithNewId"(newId: long): $PhysicsEntityData
public "getCollisionShapeData"(): $VSCollisionShapeData
public "setCollisionShapeData"(arg0: $VSCollisionShapeData$Type): void
public "getAngularVelocity"(): $Vector3dc
public "getLinearVelocity"(): $Vector3dc
public "getRestitutionCoefficient"(): double
public "getStaticFrictionCoefficient"(): double
public "getDynamicFrictionCoefficient"(): double
public "setAngularVelocity"(arg0: $Vector3dc$Type): void
public "getCollisionMask"(): integer
public "setLinearVelocity"(arg0: $Vector3dc$Type): void
public "component11"(): boolean
public "component9"(): double
public "component10"(): double
public "component8"(): double
get "static"(): boolean
set "transform"(value: $ShipTransform$Type)
set "restitutionCoefficient"(value: double)
set "staticFrictionCoefficient"(value: double)
set "dynamicFrictionCoefficient"(value: double)
set "collisionMask"(value: integer)
set "static"(value: boolean)
set "inertiaData"(value: $ShipInertiaData$Type)
get "inertiaData"(): $ShipInertiaData
get "transform"(): $ShipTransform
get "shipId"(): long
get "collisionShapeData"(): $VSCollisionShapeData
set "collisionShapeData"(value: $VSCollisionShapeData$Type)
get "angularVelocity"(): $Vector3dc
get "linearVelocity"(): $Vector3dc
get "restitutionCoefficient"(): double
get "staticFrictionCoefficient"(): double
get "dynamicFrictionCoefficient"(): double
set "angularVelocity"(value: $Vector3dc$Type)
get "collisionMask"(): integer
set "linearVelocity"(value: $Vector3dc$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsEntityData$Type = ($PhysicsEntityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsEntityData_ = $PhysicsEntityData$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$Ship" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$IShipActiveChunksSet, $IShipActiveChunksSet$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet"
import {$AABBic, $AABBic$Type} from "packages/org/joml/primitives/$AABBic"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$Matrix4dc, $Matrix4dc$Type} from "packages/org/joml/$Matrix4dc"
import {$ChunkClaim, $ChunkClaim$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim"

export interface $Ship {

 "getId"(): long
 "getVelocity"(): $Vector3dc
 "getShipTransform"(): $ShipTransform
 "getWorldToShip"(): $Matrix4dc
 "getShipToWorld"(): $Matrix4dc
 "getTransform"(): $ShipTransform
 "getShipActiveChunksSet"(): $IShipActiveChunksSet
 "getPrevTickTransform"(): $ShipTransform
 "getPrevTickShipTransform"(): $ShipTransform
 "getChunkClaimDimension"(): string
 "setChunkClaimDimension"(arg0: string): void
 "getShipVoxelAABB"(): $AABBic
 "getSlug"(): string
 "getChunkClaim"(): $ChunkClaim
 "getWorldAABB"(): $AABBdc
 "getOmega"(): $Vector3dc
 "getActiveChunksSet"(): $IShipActiveChunksSet
 "getShipAABB"(): $AABBic
}

export namespace $Ship {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ship$Type = ($Ship);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ship_ = $Ship$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Argue" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $Argue extends $DirectionalBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Argue$Type = ($Argue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Argue_ = $Argue$Type;
}}
declare module "packages/org/valkyrienskies/core/api/util/functions/$IntBinaryConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntBinaryConsumer {

 "accept"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $IntBinaryConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBinaryConsumer$Type = ($IntBinaryConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntBinaryConsumer_ = $IntBinaryConsumer$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlockEntity$Companion" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $PhysicsInfuserBlockEntity$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "playWindupSound"(world: $Level$Type, location: $Vec3$Type): void
public "playZapSound"(world: $Level$Type, location: $Vec3$Type, rand: $RandomSource$Type): void
public "playFinishSound"(world: $Level$Type, location: $Vec3$Type): void
public "playInitializeSound"(world: $Level$Type, location: $Vec3$Type): void
public "spawnParticlesAssembly"(world: $Level$Type, pos: $Vec3$Type, rand: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsInfuserBlockEntity$Companion$Type = ($PhysicsInfuserBlockEntity$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsInfuserBlockEntity$Companion_ = $PhysicsInfuserBlockEntity$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/blockentity/$TestHingeBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TestHingeBlockEntity extends $BlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(blockPos: $BlockPos$Type, blockState: $BlockState$Type)

public "tick"(): void
public "getConstraintId"(): integer
public "setOtherHingePos"(arg0: $BlockPos$Type): void
public "getOtherHingePos"(): $BlockPos
public "setConstraintId"(arg0: integer): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "constraintId"(): integer
set "otherHingePos"(value: $BlockPos$Type)
get "otherHingePos"(): $BlockPos
set "constraintId"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestHingeBlockEntity$Type = ($TestHingeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestHingeBlockEntity_ = $TestHingeBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/util/$VSServerLevel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VSServerLevel {

 "removeChunk"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $VSServerLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSServerLevel$Type = ($VSServerLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSServerLevel_ = $VSServerLevel$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/world/$OfLevel" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $OfLevel {

 "getLevel"(): $Level
 "setLevel"(arg0: $Level$Type): void
}

export namespace $OfLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfLevel$Type = ($OfLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfLevel_ = $OfLevel$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/command/$ShipArgumentInfo" {
import {$ShipArgumentInfoTemplate, $ShipArgumentInfoTemplate$Type} from "packages/org/valkyrienskies/mod/common/command/$ShipArgumentInfoTemplate"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ShipArgument, $ShipArgument$Type} from "packages/org/valkyrienskies/mod/common/command/$ShipArgument"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"

export class $ShipArgumentInfo implements $ArgumentTypeInfo<($ShipArgument), ($ShipArgumentInfoTemplate)> {

constructor()

public "unpack"(argumentType: $ShipArgument$Type): $ShipArgumentInfoTemplate
public "serializeToJson"(template: $ShipArgumentInfoTemplate$Type, jsonObject: $JsonObject$Type): void
public "serializeToNetwork"(template: $ShipArgumentInfoTemplate$Type, friendlyByteBuf: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(friendlyByteBuf: $FriendlyByteBuf$Type): $ShipArgumentInfoTemplate
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipArgumentInfo$Type = ($ShipArgumentInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipArgumentInfo_ = $ShipArgumentInfo$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$InputKey" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"
import {$InputKey$Companion, $InputKey$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$InputKey$Companion"

export class $InputKey extends $Enum<($InputKey)> {
static readonly "Companion": $InputKey$Companion
static readonly "FORWARD": $InputKey
static readonly "BACKWARD": $InputKey
static readonly "LEFT": $InputKey
static readonly "RIGHT": $InputKey
static readonly "JUMP": $InputKey


public static "values"(): ($InputKey)[]
public static "valueOf"(value: string): $InputKey
public static "getEntries"(): $EnumEntries<($InputKey)>
get "entries"(): $EnumEntries<($InputKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputKey$Type = (("left") | ("forward") | ("backward") | ("right") | ("jump")) | ($InputKey);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputKey_ = $InputKey$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/block/$WingBlock" {
import {$Wing, $Wing$Type} from "packages/org/valkyrienskies/core/api/ships/$Wing"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $WingBlock {

 "getWing"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Wing

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Wing
}

export namespace $WingBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WingBlock$Type = ($WingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WingBlock_ = $WingBlock$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$Vec3iAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Vec3iAccessor {

 "noon"(arg0: integer): void
 "converter"(arg0: integer): void
 "birds"(arg0: integer): void
}

export namespace $Vec3iAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3iAccessor$Type = ($Vec3iAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3iAccessor_ = $Vec3iAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/$ServerShipWorldCore" {
import {$LevelYRange, $LevelYRange$Type} from "packages/org/valkyrienskies/core/api/world/$LevelYRange"
import {$ServerShip, $ServerShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShip"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$ChunkWatchTasks, $ChunkWatchTasks$Type} from "packages/org/valkyrienskies/core/apigame/world/chunks/$ChunkWatchTasks"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IPlayer, $IPlayer$Type} from "packages/org/valkyrienskies/core/apigame/world/$IPlayer"
import {$QueryableShipData, $QueryableShipData$Type} from "packages/org/valkyrienskies/core/api/ships/$QueryableShipData"
import {$PhysicsEntityServer, $PhysicsEntityServer$Type} from "packages/org/valkyrienskies/core/apigame/physics/$PhysicsEntityServer"
import {$ShipWorldCore, $ShipWorldCore$Type} from "packages/org/valkyrienskies/core/apigame/world/$ShipWorldCore"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ShipTeleportData, $ShipTeleportData$Type} from "packages/org/valkyrienskies/core/apigame/$ShipTeleportData"
import {$ServerShipWorld, $ServerShipWorld$Type} from "packages/org/valkyrienskies/core/api/world/$ServerShipWorld"
import {$List, $List$Type} from "packages/java/util/$List"
import {$VSConstraint, $VSConstraint$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraint"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$GameServer, $GameServer$Type} from "packages/org/valkyrienskies/core/apigame/$GameServer"
import {$BlockType, $BlockType$Type} from "packages/org/valkyrienskies/core/apigame/world/chunks/$BlockType"
import {$PhysicsEntityData, $PhysicsEntityData$Type} from "packages/org/valkyrienskies/core/apigame/physics/$PhysicsEntityData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$LoadedServerShip, $LoadedServerShip$Type} from "packages/org/valkyrienskies/core/api/ships/$LoadedServerShip"

export interface $ServerShipWorldCore extends $ShipWorldCore, $ServerShipWorld {

 "addDimension"(arg0: string, arg1: $LevelYRange$Type): void
 "addTerrainUpdates"(arg0: string, arg1: $List$Type<(any)>): void
 "enableCollisionBetweenBodies"(arg0: long, arg1: long): boolean
 "disableCollisionBetweenBodies"(arg0: long, arg1: long): boolean
 "getPlayers"(): $Set<($IPlayer)>
 "updateConstraint"(arg0: integer, arg1: $VSConstraint$Type): boolean
 "removeConstraint"(arg0: integer): boolean
 "getIPlayersWatchingShipChunk"(arg0: integer, arg1: integer, arg2: string): $Iterator<($IPlayer)>
 "teleportShip"(arg0: $ServerShip$Type, arg1: $ShipTeleportData$Type): void
 "deleteShip"(arg0: $ServerShip$Type): void
 "onDisconnect"(arg0: $IPlayer$Type): void
 "allocateShipId"(arg0: string): long
 "createNewShipAtBlock"(arg0: $Vector3ic$Type, arg1: boolean, arg2: double, arg3: string): $ServerShip
 "deletePhysicsEntity"(arg0: long): void
 "teleportPhysicsEntity"(arg0: $PhysicsEntityServer$Type, arg1: $ShipTeleportData$Type): void
 "createPhysicsEntity"(arg0: $PhysicsEntityData$Type, arg1: string): $PhysicsEntityServer
 "getDimensionToGroundBodyIdImmutable"(): $Map<(string), (long)>
 "setPlayers"(arg0: $Set$Type<(any)>): void
 "setGameServer"(arg0: $GameServer$Type): void
 "removeDimension"(arg0: string): void
 "createNewConstraint"(arg0: $VSConstraint$Type): integer
 "setExecutedChunkWatchTasks"(arg0: $Iterable$Type<(any)>, arg1: $Iterable$Type<(any)>): void
 "getChunkWatchTasks"(): $ChunkWatchTasks
 "onSetBlock"(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: $BlockType$Type, arg5: $BlockType$Type, arg6: double, arg7: double): void
 "getShipObjectsIntersecting"(arg0: $AABBdc$Type): $List<($LoadedServerShip)>
 "getQueryableShipData"(): $QueryableShipData<($ServerShip)>
 "getAllShips"(): $QueryableShipData<($ServerShip)>
 "getLoadedShips"(): $QueryableShipData<($LoadedServerShip)>
 "isChunkInShipyard"(arg0: integer, arg1: integer, arg2: string): boolean
 "isBlockInShipyard"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
}

export namespace $ServerShipWorldCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerShipWorldCore$Type = ($ServerShipWorldCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerShipWorldCore_ = $ServerShipWorldCore$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet$Companion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $IShipActiveChunksSet$Companion {


public "chunkPosToLong"(arg0: integer, arg1: integer): long
public "longToChunkZ"(arg0: long): integer
public "longToChunkX"(arg0: long): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShipActiveChunksSet$Companion$Type = ($IShipActiveChunksSet$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShipActiveChunksSet$Companion_ = $IShipActiveChunksSet$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/generic/$ColorBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ColorBlockEntity extends $SmartBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(tag: $CompoundTag$Type, client: boolean): void
public "setColor"(rgb: integer): void
public "getColor"(): integer
public "setChanged"(): void
public "clearColor"(): void
public "addBehaviours"(behaviours: $List$Type<(any)>): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "color"(value: integer)
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorBlockEntity$Type = ($ColorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorBlockEntity_ = $ColorBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/constraints/$VSFixedOrientationConstraint" {
import {$VSTorqueConstraint, $VSTorqueConstraint$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSTorqueConstraint"
import {$VSConstraintType, $VSConstraintType$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraintType"
import {$Quaterniondc, $Quaterniondc$Type} from "packages/org/joml/$Quaterniondc"

export class $VSFixedOrientationConstraint implements $VSTorqueConstraint {

constructor(shipId0: long, shipId1: long, compliance: double, localRot0: $Quaterniondc$Type, localRot1: $Quaterniondc$Type, maxTorque: double)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(shipId0: long, shipId1: long, compliance: double, localRot0: $Quaterniondc$Type, localRot1: $Quaterniondc$Type, maxTorque: double): $VSFixedOrientationConstraint
public "component2"(): long
public "component4"(): $Quaterniondc
public "component5"(): $Quaterniondc
public "component1"(): long
public "component3"(): double
public "component6"(): double
public "getShipId1"(): long
public "getShipId0"(): long
public "getLocalRot1"(): $Quaterniondc
public "getCompliance"(): double
public "getMaxTorque"(): double
public "getConstraintType"(): $VSConstraintType
public "getLocalRot0"(): $Quaterniondc
get "shipId1"(): long
get "shipId0"(): long
get "localRot1"(): $Quaterniondc
get "compliance"(): double
get "maxTorque"(): double
get "constraintType"(): $VSConstraintType
get "localRot0"(): $Quaterniondc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSFixedOrientationConstraint$Type = ($VSFixedOrientationConstraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSFixedOrientationConstraint_ = $VSFixedOrientationConstraint$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$KineticBlockEntityAccessor" {
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"

export interface $KineticBlockEntityAccessor {

 "salt"(arg0: integer): void
 "salt"(arg0: boolean): void
 "pam"(): boolean
 "somebody"(): $SequencedGearshiftBlockEntity$SequenceContext
 "somebody"(arg0: integer): void
 "geographical"(arg0: integer): void
 "geographical"(): integer
 "wizard"(): void
}

export namespace $KineticBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBlockEntityAccessor$Type = ($KineticBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KineticBlockEntityAccessor_ = $KineticBlockEntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/entity/$EntityAccessor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $EntityAccessor {

 "setPortalCooldown"(arg0: integer): void
 "getPortalCooldown"(): integer
 "setPosNoUpdates"(arg0: $Vec3$Type): void
 "getBlockPosition"(): $BlockPos
 "setFeetBlockState"(arg0: $BlockState$Type): void
 "setBlockPosition"(arg0: $BlockPos$Type): void
 "getPortalEntrancePos"(): $BlockPos
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatValue$Companion" {
import {$SequencedSeatValue, $SequencedSeatValue$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatValue"

export class $SequencedSeatValue$Companion {


public "distance"(meters: integer): $SequencedSeatValue
public "multiply"(v: float): $SequencedSeatValue
public "angle"(degrees: integer): $SequencedSeatValue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatValue$Companion$Type = ($SequencedSeatValue$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatValue$Companion_ = $SequencedSeatValue$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/mod_compat/create/$IExtendedAirCurrentSource" {
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AirCurrent, $AirCurrent$Type} from "packages/com/simibubi/create/content/kinetics/fan/$AirCurrent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IAirCurrentSource, $IAirCurrentSource$Type} from "packages/com/simibubi/create/content/kinetics/fan/$IAirCurrentSource"

export interface $IExtendedAirCurrentSource extends $IAirCurrentSource {

 "getShip"(): $Ship
 "getSpeed"(): float
 "getAirflowOriginSide"(): $Direction
 "getMaxDistance"(): float
 "getAirFlowDirection"(): $Direction
 "getAirCurrent"(): $AirCurrent
 "getAirCurrentWorld"(): $Level
 "isSourceRemoved"(): boolean
 "getAirCurrentPos"(): $BlockPos
}

export namespace $IExtendedAirCurrentSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendedAirCurrentSource$Type = ($IExtendedAirCurrentSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendedAirCurrentSource_ = $IExtendedAirCurrentSource$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRule$Companion" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SequencedSeatRule, $SequencedSeatRule$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRule"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SequencedSeatRule$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "empty"(): $SequencedSeatRule
public "deserializeNBT"(tag: $CompoundTag$Type): $SequencedSeatRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatRule$Companion$Type = ($SequencedSeatRule$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatRule$Companion_ = $SequencedSeatRule$Companion$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/constraints/$VSTorqueConstraint" {
import {$VSConstraintType, $VSConstraintType$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraintType"
import {$Quaterniondc, $Quaterniondc$Type} from "packages/org/joml/$Quaterniondc"
import {$VSConstraint, $VSConstraint$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraint"

export interface $VSTorqueConstraint extends $VSConstraint {

 "getLocalRot1"(): $Quaterniondc
 "getMaxTorque"(): double
 "getLocalRot0"(): $Quaterniondc
 "getShipId1"(): long
 "getShipId0"(): long
 "getCompliance"(): double
 "getConstraintType"(): $VSConstraintType
}

export namespace $VSTorqueConstraint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSTorqueConstraint$Type = ($VSTorqueConstraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSTorqueConstraint_ = $VSTorqueConstraint$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatValue" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$SequencedSeatValue$Companion, $SequencedSeatValue$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatValue$Companion"
import {$ScrollInput, $ScrollInput$Type} from "packages/com/simibubi/create/foundation/gui/widget/$ScrollInput"

export interface $SequencedSeatValue {

 "deserializeNBT"(arg0: $Tag$Type): void
 "serializeNBT"(): $Tag
 "asComponent"(): $Component
 "configureInput"(arg0: $ScrollInput$Type): void
}

export namespace $SequencedSeatValue {
const Companion: $SequencedSeatValue$Companion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatValue$Type = ($SequencedSeatValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatValue_ = $SequencedSeatValue$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$ServerShip" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$IShipActiveChunksSet, $IShipActiveChunksSet$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet"
import {$AABBic, $AABBic$Type} from "packages/org/joml/primitives/$AABBic"
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$ShipInertiaData, $ShipInertiaData$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipInertiaData"
import {$ServerShipTransformProvider, $ServerShipTransformProvider$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShipTransformProvider"
import {$Matrix4dc, $Matrix4dc$Type} from "packages/org/joml/$Matrix4dc"
import {$ChunkClaim, $ChunkClaim$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim"

export interface $ServerShip extends $Ship {

 "isStatic"(): boolean
 "getAttachment"<T>(arg0: $Class$Type<(T)>): T
 "setEnableKinematicVelocity"(arg0: boolean): void
 "setStatic"(arg0: boolean): void
 "getInertiaData"(): $ShipInertiaData
 "setTransformProvider"(arg0: $ServerShipTransformProvider$Type): void
 "getEnableKinematicVelocity"(): boolean
 "getTransformProvider"(): $ServerShipTransformProvider
 "getSlug"(): string
 "saveAttachment"<T>(arg0: $Class$Type<(T)>, arg1: T): void
 "setSlug"(arg0: string): void
 "getId"(): long
 "getVelocity"(): $Vector3dc
 "getShipTransform"(): $ShipTransform
 "getWorldToShip"(): $Matrix4dc
 "getShipToWorld"(): $Matrix4dc
 "getTransform"(): $ShipTransform
 "getShipActiveChunksSet"(): $IShipActiveChunksSet
 "getPrevTickTransform"(): $ShipTransform
 "getPrevTickShipTransform"(): $ShipTransform
 "getChunkClaimDimension"(): string
 "setChunkClaimDimension"(arg0: string): void
 "getShipVoxelAABB"(): $AABBic
 "getChunkClaim"(): $ChunkClaim
 "getWorldAABB"(): $AABBdc
 "getOmega"(): $Vector3dc
 "getActiveChunksSet"(): $IShipActiveChunksSet
 "getShipAABB"(): $AABBic
}

export namespace $ServerShip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerShip$Type = ($ServerShip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerShip_ = $ServerShip$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$QueryableShipData" {
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$KMappedMarker, $KMappedMarker$Type} from "packages/kotlin/jvm/internal/markers/$KMappedMarker"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $QueryableShipData<ShipType extends $Ship> extends $Collection<(ShipType)>, $KMappedMarker {

 "isEmpty"(): boolean
 "contains"(arg0: long): boolean
 "contains"(arg0: ShipType): boolean
 "contains"(arg0: any): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "getById"(arg0: long): ShipType
 "getIntersecting"(arg0: $AABBdc$Type): $Iterable<(ShipType)>
 "getShipDataFromChunkPos"(arg0: integer, arg1: integer, arg2: string): ShipType
 "getShipDataIntersecting"(arg0: $AABBdc$Type): $Iterable<(ShipType)>
 "getByChunkPos"(arg0: integer, arg1: integer, arg2: string): ShipType
 "getIdToShipData"(): $Map<(long), (ShipType)>
 "add"(arg0: ShipType): boolean
 "remove"(arg0: any): boolean
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "clear"(): void
 "size"(): integer
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "toArray"(): (any)[]
 "iterator"(): $Iterator<(ShipType)>
 "stream"(): $Stream<(ShipType)>
 "spliterator"(): $Spliterator<(ShipType)>
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "parallelStream"(): $Stream<(ShipType)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $QueryableShipData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QueryableShipData$Type<ShipType> = ($QueryableShipData<(ShipType)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QueryableShipData_<ShipType> = $QueryableShipData$Type<(ShipType)>;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Tr" {
import {$CarriageContraptionEntity, $CarriageContraptionEntity$Type} from "packages/com/simibubi/create/content/trains/entity/$CarriageContraptionEntity"

export interface $Tr {

 "somebody"(arg0: $CarriageContraptionEntity$Type, arg1: long): boolean

(arg0: $CarriageContraptionEntity$Type, arg1: long): boolean
}

export namespace $Tr {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tr$Type = ($Tr);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Tr_ = $Tr$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/network/protocol/game/$ClientboundSectionBlocksUpdatePacketAccessor" {
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"

export interface $ClientboundSectionBlocksUpdatePacketAccessor {

 "getSectionPos"(): $SectionPos

(): $SectionPos
}

export namespace $ClientboundSectionBlocksUpdatePacketAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientboundSectionBlocksUpdatePacketAccessor$Type = ($ClientboundSectionBlocksUpdatePacketAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientboundSectionBlocksUpdatePacketAccessor_ = $ClientboundSectionBlocksUpdatePacketAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$GravitronState" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GravitronState$Companion, $GravitronState$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$GravitronState$Companion"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$Vector2dc, $Vector2dc$Type} from "packages/org/joml/$Vector2dc"
import {$Quaterniondc, $Quaterniondc$Type} from "packages/org/joml/$Quaterniondc"

export class $GravitronState {
static readonly "Companion": $GravitronState$Companion

constructor()

public static "getState"(player: $Player$Type): $GravitronState
public static "leftClickItem"(player: $Player$Type, state: $GravitronState$Type): boolean
public static "getNeedRefresh"(player: $Player$Type): boolean
public static "getDialAngle"(player: $Player$Type): float
public static "getPrevDialAngle"(player: $Player$Type): float
public "setShipID"(arg0: long): void
public "setHeldBlockPos"(arg0: $Vector3dc$Type): void
public static "mapValueToAngle"(value: float): float
public "getHeldBlockPos"(): $Vector3dc
public "getShipGrabbedRot"(): $Quaterniondc
public "setShipGrabbedPos"(arg0: $Vector3dc$Type): void
public "setShipGrabbedRot"(arg0: $Quaterniondc$Type): void
public "getShipGrabbedPos"(): $Vector3dc
public "getShipID"(): long
public "getShipGrabbedDistance"(): double
public "setPlayerGrabbedRotation"(arg0: $Vector2dc$Type): void
public "getPlayerGrabbedRotation"(): $Vector2dc
public "setShipGrabbedDistance"(arg0: double): void
set "shipID"(value: long)
set "heldBlockPos"(value: $Vector3dc$Type)
get "heldBlockPos"(): $Vector3dc
get "shipGrabbedRot"(): $Quaterniondc
set "shipGrabbedPos"(value: $Vector3dc$Type)
set "shipGrabbedRot"(value: $Quaterniondc$Type)
get "shipGrabbedPos"(): $Vector3dc
get "shipID"(): long
get "shipGrabbedDistance"(): double
set "playerGrabbedRotation"(value: $Vector2dc$Type)
get "playerGrabbedRotation"(): $Vector2dc
set "shipGrabbedDistance"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravitronState$Type = ($GravitronState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GravitronState_ = $GravitronState$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Framework" {
import {$List, $List$Type} from "packages/java/util/$List"

export interface $Framework {

 "salt"(): $List<(any)>

(): $List<(any)>
}

export namespace $Framework {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Framework$Type = ($Framework);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Framework_ = $Framework$Type;
}}
declare module "packages/org/valkyrienskies/eureka/block/$BalloonBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BalloonBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "fallOn"(level: $Level$Type, state: $BlockState$Type, blockPos: $BlockPos$Type, entity: $Entity$Type, f: float): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, hit: $BlockHitResult$Type, projectile: $Projectile$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalloonBlock$Type = ($BalloonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BalloonBlock_ = $BalloonBlock$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/command/$ShipSelector" {
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$QueryableShipData, $QueryableShipData$Type} from "packages/org/valkyrienskies/core/api/ships/$QueryableShipData"

export class $ShipSelector {

constructor()
constructor(arg0: string, arg1: long, arg2: integer, arg3: integer, arg4: $DefaultConstructorMarker$Type)
constructor(slug: string, id: long, maxAmount: integer)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getId"(): long
public "copy"(slug: string, id: long, maxAmount: integer): $ShipSelector
public "select"(queryableShipData: $QueryableShipData$Type<(any)>): $Set<($Ship)>
public "component2"(): long
public "component1"(): string
public "component3"(): integer
public "getMaxAmount"(): integer
public "getSlug"(): string
get "id"(): long
get "maxAmount"(): integer
get "slug"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipSelector$Type = ($ShipSelector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipSelector_ = $ShipSelector$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/platform/api/$ContraptionController$LockedMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$INamedIconOptions, $INamedIconOptions$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$INamedIconOptions"
import {$AllIcons, $AllIcons$Type} from "packages/com/simibubi/create/foundation/gui/$AllIcons"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $ContraptionController$LockedMode extends $Enum<($ContraptionController$LockedMode)> implements $INamedIconOptions {
static readonly "UNLOCKED": $ContraptionController$LockedMode
static readonly "LOCKED": $ContraptionController$LockedMode


public static "values"(): ($ContraptionController$LockedMode)[]
public static "valueOf"(value: string): $ContraptionController$LockedMode
public static "getEntries"(): $EnumEntries<($ContraptionController$LockedMode)>
public "getTranslationKey"(): string
public "getIcon"(): $AllIcons
get "entries"(): $EnumEntries<($ContraptionController$LockedMode)>
get "translationKey"(): string
get "icon"(): $AllIcons
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContraptionController$LockedMode$Type = (("locked") | ("unlocked")) | ($ContraptionController$LockedMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContraptionController$LockedMode_ = $ContraptionController$LockedMode$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/mod_compat/create/accessors/$Matrix3dAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Matrix3dAccessor {

 "getM00"(): double
 "getM12"(): double
 "getM01"(): double
 "getM02"(): double
 "getM10"(): double
 "getM22"(): double
 "getM11"(): double
 "getM20"(): double
 "getM21"(): double
}

export namespace $Matrix3dAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix3dAccessor$Type = ($Matrix3dAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix3dAccessor_ = $Matrix3dAccessor$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/assembly/$SeamlessChunksManager$Companion" {
import {$SeamlessChunksManager, $SeamlessChunksManager$Type} from "packages/org/valkyrienskies/mod/common/assembly/$SeamlessChunksManager"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SeamlessChunksManager$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "get"(): $SeamlessChunksManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeamlessChunksManager$Companion$Type = ($SeamlessChunksManager$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeamlessChunksManager$Companion_ = $SeamlessChunksManager$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/flap/$FlapBearingBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$FlapBearingBlockEntity, $FlapBearingBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/flap/$FlapBearingBlockEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BearingBlock, $BearingBlock$Type} from "packages/com/simibubi/create/content/contraptions/bearing/$BearingBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FlapBearingBlock extends $BearingBlock implements $IBE<($FlapBearingBlockEntity)> {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($FlapBearingBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($FlapBearingBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($FlapBearingBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $FlapBearingBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($FlapBearingBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($FlapBearingBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlapBearingBlock$Type = ($FlapBearingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlapBearingBlock_ = $FlapBearingBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlock$Companion" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$PropellerBearingBlock$Direction, $PropellerBearingBlock$Direction$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlock$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Couple, $Couple$Type} from "packages/com/simibubi/create/foundation/utility/$Couple"

export class $PropellerBearingBlock$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "getSpeedRange"(): $Couple<(integer)>
public "getDirectionof"(blockState: $BlockState$Type): $PropellerBearingBlock$Direction
public "getDIRECTION"(): $EnumProperty<($PropellerBearingBlock$Direction)>
get "speedRange"(): $Couple<(integer)>
get "dIRECTION"(): $EnumProperty<($PropellerBearingBlock$Direction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropellerBearingBlock$Companion$Type = ($PropellerBearingBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropellerBearingBlock$Companion_ = $PropellerBearingBlock$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatBlockEntity" {
import {$SequencedSeatRuleList, $SequencedSeatRuleList$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRuleList"
import {$SplitShaftBlockEntity, $SplitShaftBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/transmission/$SplitShaftBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ComputerAttachmentHandler, $ComputerAttachmentHandler$Type} from "packages/org/valkyrienskies/clockwork/integration/cc/$ComputerAttachmentHandler"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InputKey, $InputKey$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$InputKey"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SequencedSeatBlockEntity extends $SplitShaftBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "getList"(face: $Direction$Type): $SequencedSeatRuleList
public "getList"(rotation: $Rotation$Type): $SequencedSeatRuleList
public "updateInput"(pressedKeys: $Set$Type<(any)>): void
public "pressedKeys"(): $Set<($InputKey)>
public "getForwardRules"(): $SequencedSeatRuleList
public "getLeftRules"(): $SequencedSeatRuleList
public "updateRules"(forwardRules: $SequencedSeatRuleList$Type, backwardRules: $SequencedSeatRuleList$Type, leftRules: $SequencedSeatRuleList$Type, rightRules: $SequencedSeatRuleList$Type): void
public "getBackwardRules"(): $SequencedSeatRuleList
public "getComputerHandler"(): $ComputerAttachmentHandler
public "getRightRules"(): $SequencedSeatRuleList
public "getRotationSpeedModifier"(face: $Direction$Type): float
public "getDegreesAwayFromBase"(direction: $Direction$Type): float
public "getDegreesAwayFromBase"(): (float)[]
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "forwardRules"(): $SequencedSeatRuleList
get "leftRules"(): $SequencedSeatRuleList
get "backwardRules"(): $SequencedSeatRuleList
get "computerHandler"(): $ComputerAttachmentHandler
get "rightRules"(): $SequencedSeatRuleList
get "degreesAwayFromBase"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatBlockEntity$Type = ($SequencedSeatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatBlockEntity_ = $SequencedSeatBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Baskets" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $Baskets extends $HorizontalDirectionalBlock implements $IBE<(any)> {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getBlockEntityClass"(): $Class<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<(any)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<(any), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): any
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(any)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Baskets$Type = ($Baskets);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Baskets_ = $Baskets$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/mixinduck/$MixinPlayerDuck" {
import {$GravitronState, $GravitronState$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$GravitronState"

export interface $MixinPlayerDuck {

 "setNeedsRefresh"(arg0: boolean): void
 "getNeedsRefresh"(): boolean
 "setGravitronState"(arg0: $GravitronState$Type): void
 "getGravitronState"(): $GravitronState
 "setGravitronDialAngle"(arg0: float): void
 "getGravitronDialAngle"(): float
 "getPrevGravitronDialAngle"(): float
 "setPrevGravitronDialAngle"(arg0: float): void
}

export namespace $MixinPlayerDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinPlayerDuck$Type = ($MixinPlayerDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinPlayerDuck_ = $MixinPlayerDuck$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$GeneratingKineticBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GeneratingKineticBlockEntityAccessor {

 "salt"(): boolean
 "geographical"(arg0: boolean): void
}

export namespace $GeneratingKineticBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratingKineticBlockEntityAccessor$Type = ($GeneratingKineticBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GeneratingKineticBlockEntityAccessor_ = $GeneratingKineticBlockEntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/$IShipObjectWorldClientCreator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IShipObjectWorldClientCreator {

 "deleteShipObjectWorldClient"(): void
 "createShipObjectWorldClient"(): void
}

export namespace $IShipObjectWorldClientCreator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShipObjectWorldClientCreator$Type = ($IShipObjectWorldClientCreator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShipObjectWorldClientCreator_ = $IShipObjectWorldClientCreator$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SelectedAreaToolkit" {
import {$SelectedAreaToolkit$Companion, $SelectedAreaToolkit$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SelectedAreaToolkit$Companion"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SerializableSelectedAreaToolkit, $SerializableSelectedAreaToolkit$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SerializableSelectedAreaToolkit"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $SelectedAreaToolkit {
static readonly "Companion": $SelectedAreaToolkit$Companion

constructor()

public "dumpClusterDirty"(cluster: $Set$Type<(any)>): void
public "getClosestCluster"(pos: $Vector3ic$Type): $Set<($AABB)>
public "getAABBFromPos"(pos: $Vector3ic$Type): $AABB
public "setSelectedAreas"(arg0: $HashSet$Type<($AABB$Type)>): void
public "setBlockClusters"(arg0: $HashSet$Type<($Set$Type<($BlockPos$Type)>)>): void
public "getBlockClusters"(): $HashSet<($Set<($BlockPos)>)>
public "containsCluster"(cluster: $Set$Type<(any)>): boolean
public "setToStopRendering"(arg0: $ArrayList$Type<($Set$Type<($AABB$Type)>)>): void
public "setSelectionClusters"(arg0: $HashSet$Type<($Set$Type<($AABB$Type)>)>): void
public "getClusterContaining"(pos: $Vector3ic$Type): $Set<($AABB)>
public "getClusterContainingAABB"(box: $AABB$Type): $Set<($AABB)>
public "getToStopRendering"(): $ArrayList<($Set<($AABB)>)>
public "dumpCluster"(cluster: $Set$Type<(any)>): void
public "containsAABB"(aabb: $AABB$Type): boolean
public "getSelectionClusters"(): $HashSet<($Set<($AABB)>)>
public "overwriteFrom"(ssat: $SerializableSelectedAreaToolkit$Type): void
public "overwriteFrom"(sat: $SelectedAreaToolkit$Type): void
public "clusterNewArea"(initial: $AABB$Type): void
public "getSelectedAreas"(): $HashSet<($AABB)>
set "selectedAreas"(value: $HashSet$Type<($AABB$Type)>)
set "blockClusters"(value: $HashSet$Type<($Set$Type<($BlockPos$Type)>)>)
get "blockClusters"(): $HashSet<($Set<($BlockPos)>)>
set "toStopRendering"(value: $ArrayList$Type<($Set$Type<($AABB$Type)>)>)
set "selectionClusters"(value: $HashSet$Type<($Set$Type<($AABB$Type)>)>)
get "toStopRendering"(): $ArrayList<($Set<($AABB)>)>
get "selectionClusters"(): $HashSet<($Set<($AABB)>)>
get "selectedAreas"(): $HashSet<($AABB)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectedAreaToolkit$Type = ($SelectedAreaToolkit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectedAreaToolkit_ = $SelectedAreaToolkit$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/world/$OfShip" {
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"

export interface $OfShip {

 "getShip"(): $Ship
 "setShip"(arg0: $Ship$Type): void
}

export namespace $OfShip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OfShip$Type = ($OfShip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OfShip_ = $OfShip$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/feature/command/$VSCommandSource" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShipWorld, $ShipWorld$Type} from "packages/org/valkyrienskies/core/api/world/$ShipWorld"

export interface $VSCommandSource {

 "sendVSMessage"(arg0: $Component$Type, arg1: $UUID$Type): void
 "sendVSMessage"(component: $Component$Type): void
 "getShipWorld"(): $ShipWorld
}

export namespace $VSCommandSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSCommandSource$Type = ($VSCommandSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSCommandSource_ = $VSCommandSource$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$SmartBlockEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SmartBlockEntityAccessor {

 "noon"(arg0: boolean): void
 "salt"(): integer
 "pam"(arg0: integer): void
 "pam"(): integer
 "wizard"(): boolean
}

export namespace $SmartBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBlockEntityAccessor$Type = ($SmartBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmartBlockEntityAccessor_ = $SmartBlockEntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/$WanderliteOreBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ExperienceBlock, $ExperienceBlock$Type} from "packages/com/simibubi/create/content/materials/$ExperienceBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WanderliteOreBlock extends $ExperienceBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "destroy"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, movedByPiston: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "attack"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): void
public "stepOn"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $Entity$Type): void
public "isAlreadyShip"(level: $ServerLevel$Type, blockPos: $BlockPos$Type): boolean
public "shipifyBlock"(level: $ServerLevel$Type, blockPos: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WanderliteOreBlock$Type = ($WanderliteOreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WanderliteOreBlock_ = $WanderliteOreBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/mixin/content/gravitron/$MinecraftAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftAccessor {

 "setMissTime"(arg0: integer): void

(arg0: integer): void
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$Type = ($MinecraftAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccessor_ = $MinecraftAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/platform/api/$ContraptionController" {
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$IControlContraption, $IControlContraption$Type} from "packages/com/simibubi/create/content/contraptions/$IControlContraption"
import {$ControlledContraptionEntity, $ControlledContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ControlledContraptionEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ContraptionController extends $IControlContraption {

 "isShipContraptionController"(): boolean
 "getConnectedShip"(): $Ship
 "attach"(arg0: $ControlledContraptionEntity$Type): void
 "isValid"(): boolean
 "isAttachedTo"(arg0: $AbstractContraptionEntity$Type): boolean
 "onStall"(): void
 "getBlockPosition"(): $BlockPos
}

export namespace $ContraptionController {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContraptionController$Type = ($ContraptionController);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContraptionController_ = $ContraptionController$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$MechanicalBearingBlockEntityAccessor" {
import {$ScrollOptionBehaviour, $ScrollOptionBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$ScrollOptionBehaviour"

export interface $MechanicalBearingBlockEntityAccessor {

 "noon"(): boolean
 "salt"(): float
 "dame"(arg0: double): void
 "pam"(arg0: boolean): void
 "somebody"(): $ScrollOptionBehaviour<(any)>
 "somebody"(arg0: float): void
 "geographical"(arg0: float): void
 "geographical"(): float
}

export namespace $MechanicalBearingBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalBearingBlockEntityAccessor$Type = ($MechanicalBearingBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MechanicalBearingBlockEntityAccessor_ = $MechanicalBearingBlockEntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/client/world/$ClientChunkCacheStorageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkCacheStorageAccessor {

 "callInRange"(arg0: integer, arg1: integer): boolean

(arg0: integer, arg1: integer): boolean
}

export namespace $ClientChunkCacheStorageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkCacheStorageAccessor$Type = ($ClientChunkCacheStorageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkCacheStorageAccessor_ = $ClientChunkCacheStorageAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/$ShipWorldCore" {
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$BlockType, $BlockType$Type} from "packages/org/valkyrienskies/core/apigame/world/chunks/$BlockType"
import {$ShipWorld, $ShipWorld$Type} from "packages/org/valkyrienskies/core/api/world/$ShipWorld"
import {$LoadedShip, $LoadedShip$Type} from "packages/org/valkyrienskies/core/api/ships/$LoadedShip"
import {$QueryableShipData, $QueryableShipData$Type} from "packages/org/valkyrienskies/core/api/ships/$QueryableShipData"

export interface $ShipWorldCore extends $ShipWorld {

 "onSetBlock"(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: $BlockType$Type, arg5: $BlockType$Type, arg6: double, arg7: double): void
 "isChunkInShipyard"(arg0: integer, arg1: integer, arg2: string): boolean
 "isBlockInShipyard"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
 "getShipObjectsIntersecting"(arg0: $AABBdc$Type): $List<($LoadedShip)>
 "getQueryableShipData"(): $QueryableShipData<($Ship)>
 "getAllShips"(): $QueryableShipData<($Ship)>
 "getLoadedShips"(): $QueryableShipData<($LoadedShip)>
}

export namespace $ShipWorldCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipWorldCore$Type = ($ShipWorldCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipWorldCore_ = $ShipWorldCore$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/util/$MinecraftPlayer" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$WeakReference, $WeakReference$Type} from "packages/java/lang/ref/$WeakReference"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$PlayerState, $PlayerState$Type} from "packages/org/valkyrienskies/core/apigame/world/$PlayerState"
import {$IPlayer, $IPlayer$Type} from "packages/org/valkyrienskies/core/apigame/world/$IPlayer"

export class $MinecraftPlayer implements $IPlayer {

constructor(playerObject: $Player$Type)

public "equals"(other: any): boolean
public "hashCode"(): integer
public "getPosition"(dest: $Vector3d$Type): $Vector3d
public "getDimension"(): string
public "getCanModifyServerConfig"(): boolean
public "getUuid"(): $UUID
public "isAdmin"(): boolean
public "getPlayer"(): $Player
public "getPlayerState"(): $PlayerState
public "getPlayerEntityReference"(): $WeakReference<($Player)>
get "dimension"(): string
get "canModifyServerConfig"(): boolean
get "uuid"(): $UUID
get "admin"(): boolean
get "player"(): $Player
get "playerState"(): $PlayerState
get "playerEntityReference"(): $WeakReference<($Player)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftPlayer$Type = ($MinecraftPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftPlayer_ = $MinecraftPlayer$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/physicalities/ballast/$BallastBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BallastBlockEntity, $BallastBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/physicalities/ballast/$BallastBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BallastBlock extends $Block implements $IBE<($BallastBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($BallastBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BallastBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BallastBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BallastBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BallastBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($BallastBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BallastBlock$Type = ($BallastBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BallastBlock_ = $BallastBlock$Type;
}}
declare module "packages/org/valkyrienskies/core/api/world/$LevelYRange" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $LevelYRange {

constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: integer, arg1: integer): $LevelYRange
public "getSize"(): integer
public "component2"(): integer
public "component1"(): integer
public "getMinY"(): integer
public "getCenter"(): integer
public "getMaxY"(): integer
get "size"(): integer
get "minY"(): integer
get "center"(): integer
get "maxY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelYRange$Type = ($LevelYRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelYRange_ = $LevelYRange$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/bearing/$PhysBearingBlock" {
import {$PhysBearingBlockEntity, $PhysBearingBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/bearing/$PhysBearingBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BearingBlock, $BearingBlock$Type} from "packages/com/simibubi/create/content/contraptions/bearing/$BearingBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$PhysBearingBlock$Companion, $PhysBearingBlock$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/bearing/$PhysBearingBlock$Companion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PhysBearingBlock extends $BearingBlock implements $IBE<($PhysBearingBlockEntity)> {
static readonly "Companion": $PhysBearingBlock$Companion
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, worldIn: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($PhysBearingBlockEntity)>
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($PhysBearingBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($PhysBearingBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PhysBearingBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($PhysBearingBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($PhysBearingBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysBearingBlock$Type = ($PhysBearingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysBearingBlock_ = $PhysBearingBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatBlock$Companion" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SequencedSeatBlock$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "sitDown"(level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatBlock$Companion$Type = ($SequencedSeatBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatBlock$Companion_ = $SequencedSeatBlock$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlock$Direction" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $PropellerBearingBlock$Direction extends $Enum<($PropellerBearingBlock$Direction)> implements $StringRepresentable {
static readonly "PUSH": $PropellerBearingBlock$Direction
static readonly "PULL": $PropellerBearingBlock$Direction


public static "values"(): ($PropellerBearingBlock$Direction)[]
public static "valueOf"(value: string): $PropellerBearingBlock$Direction
public static "getEntries"(): $EnumEntries<($PropellerBearingBlock$Direction)>
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "entries"(): $EnumEntries<($PropellerBearingBlock$Direction)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropellerBearingBlock$Direction$Type = (("pull") | ("push")) | ($PropellerBearingBlock$Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropellerBearingBlock$Direction_ = $PropellerBearingBlock$Direction$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Six" {
import {$Quaterniond, $Quaterniond$Type} from "packages/org/joml/$Quaterniond"

export interface $Six {

 "somebody"(arg0: $Quaterniond$Type): $Quaterniond

(arg0: $Quaterniond$Type): $Quaterniond
}

export namespace $Six {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Six$Type = ($Six);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Six_ = $Six$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/gyro/$GyroBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GyroBlockEntity, $GyroBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/gyro/$GyroBlockEntity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$KineticBlock, $KineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $GyroBlock extends $KineticBlock implements $IBE<($GyroBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "destroy"(level: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "getRenderShape"(pState: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($GyroBlockEntity)>
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($GyroBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($GyroBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $GyroBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($GyroBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($GyroBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GyroBlock$Type = ($GyroBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GyroBlock_ = $GyroBlock$Type;
}}
declare module "packages/org/valkyrienskies/eureka/block/$EngineBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $EngineBlock extends $BaseEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getRenderShape"(blockState: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "newBlockEntity"(blockPos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, randomSource: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EngineBlock$Type = ($EngineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EngineBlock_ = $EngineBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/gyro/$GyroBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GyroBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GyroBlockItem$Type = ($GyroBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GyroBlockItem_ = $GyroBlockItem$Type;
}}
declare module "packages/org/valkyrienskies/core/util/datastructures/$BlockPos2ObjectOpenHashMap$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $BlockPos2ObjectOpenHashMap$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPos2ObjectOpenHashMap$Companion$Type = ($BlockPos2ObjectOpenHashMap$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPos2ObjectOpenHashMap$Companion_ = $BlockPos2ObjectOpenHashMap$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/world/level/block/$StairBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StairBlockAccessor {

}

export namespace $StairBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StairBlockAccessor$Type = ($StairBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StairBlockAccessor_ = $StairBlockAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/util/blocktype/$ConnectedWingAlike" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConnectedWingAlike$Companion, $ConnectedWingAlike$Companion$Type} from "packages/org/valkyrienskies/clockwork/util/blocktype/$ConnectedWingAlike$Companion"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $ConnectedWingAlike extends $Block {
static readonly "Companion": $ConnectedWingAlike$Companion
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getNewState"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedWingAlike$Type = ($ConnectedWingAlike);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectedWingAlike_ = $ConnectedWingAlike$Type;
}}
declare module "packages/org/valkyrienskies/core/util/datastructures/$SingleChunkDenseBlockPosSet" {
import {$SingleChunkDenseBlockPosSet$Companion, $SingleChunkDenseBlockPosSet$Companion$Type} from "packages/org/valkyrienskies/core/util/datastructures/$SingleChunkDenseBlockPosSet$Companion"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$Function3, $Function3$Type} from "packages/kotlin/jvm/functions/$Function3"

export class $SingleChunkDenseBlockPosSet {
static readonly "Companion": $SingleChunkDenseBlockPosSet$Companion

constructor()

public "add"(arg0: integer, arg1: integer, arg2: integer): boolean
public "remove"(arg0: integer, arg1: integer, arg2: integer): boolean
public "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
public "forEach"(arg0: $Function3$Type<(any), (any), (any), ($Unit$Type)>): void
public "getData"(): (byte)[]
get "data"(): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleChunkDenseBlockPosSet$Type = ($SingleChunkDenseBlockPosSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleChunkDenseBlockPosSet_ = $SingleChunkDenseBlockPosSet$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/chunks/$ChunkWatchTask" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ServerShip, $ServerShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShip"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IPlayer, $IPlayer$Type} from "packages/org/valkyrienskies/core/apigame/world/$IPlayer"

export interface $ChunkWatchTask extends $Comparable<($ChunkWatchTask)> {

 "getChunkPos"(): long
 "getDimensionId"(): string
 "getShip"(): $ServerShip
 "getChunkZ"(): integer
 "getChunkX"(): integer
 "getPlayersNeedWatching"(): $Iterable<($IPlayer)>
 "compareTo"(arg0: $ChunkWatchTask$Type): integer
}

export namespace $ChunkWatchTask {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkWatchTask$Type = ($ChunkWatchTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkWatchTask_ = $ChunkWatchTask$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$ClientShip" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$IShipActiveChunksSet, $IShipActiveChunksSet$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet"
import {$AABBic, $AABBic$Type} from "packages/org/joml/primitives/$AABBic"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$ClientShipTransformProvider, $ClientShipTransformProvider$Type} from "packages/org/valkyrienskies/core/api/ships/$ClientShipTransformProvider"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$Matrix4dc, $Matrix4dc$Type} from "packages/org/joml/$Matrix4dc"
import {$ChunkClaim, $ChunkClaim$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim"
import {$LoadedShip, $LoadedShip$Type} from "packages/org/valkyrienskies/core/api/ships/$LoadedShip"

export interface $ClientShip extends $LoadedShip {

 "getRenderTransform"(): $ShipTransform
 "setTransformProvider"(arg0: $ClientShipTransformProvider$Type): void
 "getTransformProvider"(): $ClientShipTransformProvider
 "getRenderAABB"(): $AABBdc
 "getId"(): long
 "getVelocity"(): $Vector3dc
 "getShipTransform"(): $ShipTransform
 "getWorldToShip"(): $Matrix4dc
 "getShipToWorld"(): $Matrix4dc
 "getTransform"(): $ShipTransform
 "getShipActiveChunksSet"(): $IShipActiveChunksSet
 "getPrevTickTransform"(): $ShipTransform
 "getPrevTickShipTransform"(): $ShipTransform
 "getChunkClaimDimension"(): string
 "setChunkClaimDimension"(arg0: string): void
 "getShipVoxelAABB"(): $AABBic
 "getSlug"(): string
 "getChunkClaim"(): $ChunkClaim
 "getWorldAABB"(): $AABBdc
 "getOmega"(): $Vector3dc
 "getActiveChunksSet"(): $IShipActiveChunksSet
 "getShipAABB"(): $AABBic
}

export namespace $ClientShip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientShip$Type = ($ClientShip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientShip_ = $ClientShip$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/item/$ShipAssemblerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShipAssemblerItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "useOn"(ctx: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipAssemblerItem$Type = ($ShipAssemblerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipAssemblerItem_ = $ShipAssemblerItem$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlockEntity$Animation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $PhysicsInfuserBlockEntity$Animation extends $Enum<($PhysicsInfuserBlockEntity$Animation)> {
static readonly "ASSEMBLY": $PhysicsInfuserBlockEntity$Animation
static readonly "DISASSEMBLY": $PhysicsInfuserBlockEntity$Animation
static readonly "IDLE": $PhysicsInfuserBlockEntity$Animation


public static "values"(): ($PhysicsInfuserBlockEntity$Animation)[]
public static "valueOf"(value: string): $PhysicsInfuserBlockEntity$Animation
public static "getEntries"(): $EnumEntries<($PhysicsInfuserBlockEntity$Animation)>
get "entries"(): $EnumEntries<($PhysicsInfuserBlockEntity$Animation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsInfuserBlockEntity$Animation$Type = (("disassembly") | ("idle") | ("assembly")) | ($PhysicsInfuserBlockEntity$Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsInfuserBlockEntity$Animation_ = $PhysicsInfuserBlockEntity$Animation$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$ContraptionAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ContraptionAccessor {

 "somebody"(arg0: boolean): void
 "somebody"(arg0: $Level$Type, arg1: $BlockPos$Type): $CompoundTag
 "geographical"(): boolean
}

export namespace $ContraptionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContraptionAccessor$Type = ($ContraptionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ContraptionAccessor_ = $ContraptionAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/util/blocktype/$ConnectedWingAlike$Companion" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ConnectedWingAlike$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "getPreferredDirection"(context: $BlockPlaceContext$Type): $Direction
public "getSOUTH"(): $BooleanProperty
public "getWEST"(): $BooleanProperty
public "getUP"(): $BooleanProperty
public "getEAST"(): $BooleanProperty
public "getDOWN"(): $BooleanProperty
public "getFACING"(): $DirectionProperty
public "getNORTH"(): $BooleanProperty
get "sOUTH"(): $BooleanProperty
get "wEST"(): $BooleanProperty
get "uP"(): $BooleanProperty
get "eAST"(): $BooleanProperty
get "dOWN"(): $BooleanProperty
get "fACING"(): $DirectionProperty
get "nORTH"(): $BooleanProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedWingAlike$Companion$Type = ($ConnectedWingAlike$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConnectedWingAlike$Companion_ = $ConnectedWingAlike$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/resistor/$RedstoneResistorBlock" {
import {$RedstoneResistorBlockEntity, $RedstoneResistorBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/resistor/$RedstoneResistorBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractEncasedShaftBlock, $AbstractEncasedShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$AbstractEncasedShaftBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RedstoneResistorBlock extends $AbstractEncasedShaftBlock implements $IBE<($RedstoneResistorBlockEntity)> {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $RandomSource$Type): void
public "detachKinetics"(worldIn: $Level$Type, pos: $BlockPos$Type, reAttachNextTick: boolean): void
public "getBlockEntityClass"(): $Class<($RedstoneResistorBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($RedstoneResistorBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($RedstoneResistorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $RedstoneResistorBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($RedstoneResistorBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($RedstoneResistorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneResistorBlock$Type = ($RedstoneResistorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneResistorBlock_ = $RedstoneResistorBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatOperation" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$AllIcons, $AllIcons$Type} from "packages/com/simibubi/create/foundation/gui/$AllIcons"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"
import {$SequencedSeatValue, $SequencedSeatValue$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatValue"

export class $SequencedSeatOperation extends $Enum<($SequencedSeatOperation)> {
static readonly "NOTHING": $SequencedSeatOperation
static readonly "TURN_ANGLE": $SequencedSeatOperation
static readonly "TURN_DISTANCE": $SequencedSeatOperation
static readonly "MULTIPLY": $SequencedSeatOperation


public static "values"(): ($SequencedSeatOperation)[]
public static "valueOf"(value: string): $SequencedSeatOperation
public "defaultValue"(): $SequencedSeatValue
public static "getEntries"(): $EnumEntries<($SequencedSeatOperation)>
public "getIcon"(): $AllIcons
public "asComponent"(): $Component
get "entries"(): $EnumEntries<($SequencedSeatOperation)>
get "icon"(): $AllIcons
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatOperation$Type = (("nothing") | ("turn_angle") | ("turn_distance") | ("multiply")) | ($SequencedSeatOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatOperation_ = $SequencedSeatOperation$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/$IShipObjectWorldClientProvider" {
import {$ClientShipWorldCore, $ClientShipWorldCore$Type} from "packages/org/valkyrienskies/core/apigame/world/$ClientShipWorldCore"
import {$IShipObjectWorldProvider, $IShipObjectWorldProvider$Type} from "packages/org/valkyrienskies/mod/common/$IShipObjectWorldProvider"

export interface $IShipObjectWorldClientProvider extends $IShipObjectWorldProvider {

 "getShipObjectWorld"(): $ClientShipWorldCore

(): $ClientShipWorldCore
}

export namespace $IShipObjectWorldClientProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShipObjectWorldClientProvider$Type = ($IShipObjectWorldClientProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShipObjectWorldClientProvider_ = $IShipObjectWorldClientProvider$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/resource/$ResourceKeyAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ResourceKeyAccessor {

 "getRegistryName"(): $ResourceLocation

(): $ResourceLocation
}

export namespace $ResourceKeyAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourceKeyAccessor$Type = ($ResourceKeyAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ResourceKeyAccessor_ = $ResourceKeyAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/util/datastructures/$BlockPos2ObjectOpenHashMap" {
import {$BlockPos2ObjectOpenHashMap$Companion, $BlockPos2ObjectOpenHashMap$Companion$Type} from "packages/org/valkyrienskies/core/util/datastructures/$BlockPos2ObjectOpenHashMap$Companion"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$Function4, $Function4$Type} from "packages/kotlin/jvm/functions/$Function4"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$Function0, $Function0$Type} from "packages/kotlin/jvm/functions/$Function0"

export class $BlockPos2ObjectOpenHashMap<T> {
static readonly "Companion": $BlockPos2ObjectOpenHashMap$Companion
static readonly "NUM_KEYS": integer

constructor()
constructor(arg0: integer, arg1: float, arg2: integer, arg3: $DefaultConstructorMarker$Type)
constructor(arg0: integer, arg1: float)

public "remove"(arg0: integer, arg1: integer, arg2: integer): T
public "get"(arg0: integer, arg1: integer, arg2: integer): T
public "put"(arg0: integer, arg1: integer, arg2: integer, arg3: T): T
public "clear"(): void
public "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
public "set"(arg0: $Vector3ic$Type, arg1: T): T
public "forEach"(arg0: $Function4$Type<(any), (any), (any), (any), ($Unit$Type)>): void
public "getKeys"(): (integer)[]
public "getOrPut"(arg0: $Vector3ic$Type, arg1: $Function0$Type<(any)>): T
public "getOrPut"(arg0: integer, arg1: integer, arg2: integer, arg3: $Function0$Type<(any)>): T
public "getValues"(): (T)[]
public "getContainsNullKey"(): boolean
public "getN"(): integer
public "getDefRetValue"(): T
public "setDefRetValue"(arg0: T): void
get "keys"(): (integer)[]
get "values"(): (T)[]
get "containsNullKey"(): boolean
get "n"(): integer
get "defRetValue"(): T
set "defRetValue"(value: T)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPos2ObjectOpenHashMap$Type<T> = ($BlockPos2ObjectOpenHashMap<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPos2ObjectOpenHashMap_<T> = $BlockPos2ObjectOpenHashMap$Type<(T)>;
}}
declare module "packages/org/valkyrienskies/core/api/util/functions/$IntTernaryConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IntTernaryConsumer {

 "accept"(arg0: integer, arg1: integer, arg2: integer): void

(arg0: integer, arg1: integer, arg2: integer): void
}

export namespace $IntTernaryConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntTernaryConsumer$Type = ($IntTernaryConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntTernaryConsumer_ = $IntTernaryConsumer$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$GravitronItem" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CWItem, $CWItem$Type} from "packages/org/valkyrienskies/clockwork/platform/$CWItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CustomArmPoseItem, $CustomArmPoseItem$Type} from "packages/com/simibubi/create/foundation/item/$CustomArmPoseItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GravitronItem extends $CWItem implements $CustomArmPoseItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "getArmPose"(stack: $ItemStack$Type, player: $AbstractClientPlayer$Type, hand: $InteractionHand$Type): $HumanoidModel$ArmPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravitronItem$Type = ($GravitronItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GravitronItem_ = $GravitronItem$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/client/render/chunk/$RenderChunkAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderChunkAccessor {

 "callReset"(): void

(): void
}

export namespace $RenderChunkAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderChunkAccessor$Type = ($RenderChunkAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderChunkAccessor_ = $RenderChunkAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlock$Companion" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $PhysicsInfuserBlock$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "isInfuser"(state: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsInfuserBlock$Companion$Type = ($PhysicsInfuserBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsInfuserBlock$Companion_ = $PhysicsInfuserBlock$Companion$Type;
}}
declare module "packages/org/valkyrienskies/eureka/util/$RotShape" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"

export interface $RotShape {

 "build"(): $VoxelShape
 "rotate90"(): $RotShape
 "rotate270"(): $RotShape
 "rotate180"(): $RotShape
 "makeMcShape"(): $VoxelShape
}

export namespace $RotShape {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotShape$Type = ($RotShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RotShape_ = $RotShape$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/altmeter/$AltMeterBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AltMeterBlockEntity extends $SmartBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "read"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "tick"(): void
public "setTriggerHeight$clockwork"(arg0: double): void
public "getTriggerHeight$clockwork"(): double
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "triggerHeight$clockwork"(value: double)
get "triggerHeight$clockwork"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltMeterBlockEntity$Type = ($AltMeterBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltMeterBlockEntity_ = $AltMeterBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/world/level/pathfinder/$PathAccessor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Target, $Target$Type} from "packages/net/minecraft/world/level/pathfinder/$Target"

export interface $PathAccessor {

 "getTargetNodes"(): $Set<($Target)>

(): $Set<($Target)>
}

export namespace $PathAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathAccessor$Type = ($PathAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathAccessor_ = $PathAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/physicalities/wing/$DyedWingBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DyedWingBlockItem extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(block: $Block$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "clearColor"(stack: $ItemStack$Type): void
public "hasColor"(stack: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyedWingBlockItem$Type = ($DyedWingBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyedWingBlockItem_ = $DyedWingBlockItem$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/$VSPipeline" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerShipWorldCore, $ServerShipWorldCore$Type} from "packages/org/valkyrienskies/core/apigame/world/$ServerShipWorldCore"

export interface $VSPipeline {

 "setArePhysicsRunning"(arg0: boolean): void
 "isUsingDummyPhysics"(): boolean
 "getLoadedVoxelChunks"(): integer
 "computePhysTps"(): double
 "registerBlocks"(arg0: $List$Type<(any)>, arg1: $List$Type<(any)>, arg2: $List$Type<(any)>): void
 "preTickGame"(): void
 "getShipWorld"(): $ServerShipWorldCore
 "postTickGame"(): void
 "setDeleteResources"(arg0: boolean): void
 "getArePhysicsRunning"(): boolean
 "getDeleteResources"(): boolean
}

export namespace $VSPipeline {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSPipeline$Type = ($VSPipeline);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSPipeline_ = $VSPipeline$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$CreativeGravitronItem$Companion" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SelectedAreaToolkit, $SelectedAreaToolkit$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SelectedAreaToolkit"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CreativeGravitronItem$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "abstractAssemble"(level: $Level$Type, player: $Player$Type, toolkit: $SelectedAreaToolkit$Type, blockPos: $BlockPos$Type, clickLocation: $Vec3$Type, grab: boolean): boolean
public "grabssemble"(level: $Level$Type, player: $Player$Type, blockPos: $BlockPos$Type, clickLocation: $Vec3$Type, grab: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeGravitronItem$Companion$Type = ($CreativeGravitronItem$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeGravitronItem$Companion_ = $CreativeGravitronItem$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/world/entity/$PlayerDuck" {
import {$MinecraftPlayer, $MinecraftPlayer$Type} from "packages/org/valkyrienskies/mod/common/util/$MinecraftPlayer"

export interface $PlayerDuck {

 "vs_getPlayer"(): $MinecraftPlayer

(): $MinecraftPlayer
}

export namespace $PlayerDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDuck$Type = ($PlayerDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDuck_ = $PlayerDuck$Type;
}}
declare module "packages/org/valkyrienskies/core/api/world/$ShipWorld" {
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$LoadedShip, $LoadedShip$Type} from "packages/org/valkyrienskies/core/api/ships/$LoadedShip"
import {$QueryableShipData, $QueryableShipData$Type} from "packages/org/valkyrienskies/core/api/ships/$QueryableShipData"

export interface $ShipWorld {

 "isChunkInShipyard"(arg0: integer, arg1: integer, arg2: string): boolean
 "isBlockInShipyard"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
 "getShipObjectsIntersecting"(arg0: $AABBdc$Type): $List<($LoadedShip)>
 "getQueryableShipData"(): $QueryableShipData<($Ship)>
 "getAllShips"(): $QueryableShipData<($Ship)>
 "getLoadedShips"(): $QueryableShipData<($LoadedShip)>
}

export namespace $ShipWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipWorld$Type = ($ShipWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipWorld_ = $ShipWorld$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Ict" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MechanicalBearingBlock, $MechanicalBearingBlock$Type} from "packages/com/simibubi/create/content/contraptions/bearing/$MechanicalBearingBlock"

export class $Ict extends $MechanicalBearingBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<(any)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ict$Type = ($Ict);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ict_ = $Ict$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Headquarters" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$StructureTemplate$StructureBlockInfo, $StructureTemplate$StructureBlockInfo$Type} from "packages/net/minecraft/world/level/levelgen/structure/templatesystem/$StructureTemplate$StructureBlockInfo"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Headquarters {

 "dame"(): void
 "somebody"(arg0: $BlockPos$Type): $Pair<(any), (any)>
 "somebody"(): $Collection<(any)>
 "somebody"(arg0: $BlockPos$Type, arg1: $StructureTemplate$StructureBlockInfo$Type): void
 "geographical"(arg0: $BlockPos$Type): boolean
}

export namespace $Headquarters {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Headquarters$Type = ($Headquarters);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Headquarters_ = $Headquarters$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/client/multiplayer/$ClientLevelAccessor" {
import {$LevelRenderer, $LevelRenderer$Type} from "packages/net/minecraft/client/renderer/$LevelRenderer"

export interface $ClientLevelAccessor {

 "getLevelRenderer"(): $LevelRenderer

(): $LevelRenderer
}

export namespace $ClientLevelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLevelAccessor$Type = ($ClientLevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientLevelAccessor_ = $ClientLevelAccessor$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$CarriageBogeyAccessor" {
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$AbstractBogeyBlock, $AbstractBogeyBlock$Type} from "packages/com/simibubi/create/content/trains/bogey/$AbstractBogeyBlock"

export interface $CarriageBogeyAccessor {

 "somebody"(): $AbstractBogeyBlock<(any)>
 "geographical"(): $LerpedFloat
}

export namespace $CarriageBogeyAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarriageBogeyAccessor$Type = ($CarriageBogeyAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarriageBogeyAccessor_ = $CarriageBogeyAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$ServerShipTransformProvider" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$ServerShipTransformProvider$NextTransformAndVelocityData, $ServerShipTransformProvider$NextTransformAndVelocityData$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShipTransformProvider$NextTransformAndVelocityData"

export interface $ServerShipTransformProvider {

 "provideNextTransformAndVelocity"(arg0: $ShipTransform$Type, arg1: $ShipTransform$Type): $ServerShipTransformProvider$NextTransformAndVelocityData

(arg0: $ShipTransform$Type, arg1: $ShipTransform$Type): $ServerShipTransformProvider$NextTransformAndVelocityData
}

export namespace $ServerShipTransformProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerShipTransformProvider$Type = ($ServerShipTransformProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerShipTransformProvider_ = $ServerShipTransformProvider$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$IBearingBlockEntity, $IBearingBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/bearing/$IBearingBlockEntity"
import {$ControlledContraptionEntity, $ControlledContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ControlledContraptionEntity"
import {$PropellerBearingBlock$Direction, $PropellerBearingBlock$Direction$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlock$Direction"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$ValueBoxTransform, $ValueBoxTransform$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$ValueBoxTransform"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PropellerBearingBlockEntity extends $KineticBlockEntity implements $IBearingBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "remove"(): void
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "attach"(contraption: $ControlledContraptionEntity$Type): void
public "tick"(): void
public "isValid"(): boolean
public "onSpeedChanged"(prevSpeed: float): void
public "getInterpolatedAngle"(partialTicks: float): float
public "isInverted"(): boolean
public "getAngularSpeed"(): float
public "isWoodenTop"(): boolean
public "setAngle"(forcedAngle: float): void
public "isAttachedTo"(contraption: $AbstractContraptionEntity$Type): boolean
public "onStall"(): void
public "getBlockPosition"(): $BlockPos
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "calculateStressApplied"(): float
public "setDisassembling"(arg0: float): void
public "getAssembleCooldown"(): integer
public "setAssembleNextTick"(arg0: boolean): void
public "getCornerHorizontalOffset"(partialTicks: float, te: $PropellerBearingBlockEntity$Type, ordinal: integer): float
public "setAssembleCooldown"(arg0: integer): void
public "getDirectonFromBlock"(): $PropellerBearingBlock$Direction
public "getAssembleNextTick"(): boolean
public "getRunning"(): boolean
public "shutDown"(): void
public "getDisassembling"(): float
public "getSails"(): void
public "handleOverStressed"(): boolean
public "getCountDown"(): integer
public "setCountDown"(arg0: integer): void
public "setSails"(arg0: integer): void
public "getOldRotspeed"(): float
public "setRunning"(arg0: boolean): void
public "getSlowingDown"(): boolean
public "setModdingSpeed"(arg0: integer): void
public "getSpeedChanged"(): boolean
public "setSpeedChanged"(arg0: boolean): void
public "getModdingSpeed"(): integer
public "setSlowingDown"(arg0: boolean): void
public "setOldRotspeed"(arg0: float): void
public "getRotspeed"(): float
public "setRotspeed"(arg0: float): void
public "getSailPositions"(): $List<($BlockPos)>
public "setSailPositions"(arg0: $List$Type<($BlockPos$Type)>): void
public "getSpinup"(): float
public "getWasOverStressed"(): boolean
public "getSpinningUp"(): boolean
public "setSpinup"(arg0: float): void
public "setWasOverStressed"(arg0: boolean): void
public "setSpinningUp"(arg0: boolean): void
public "getMovementModeSlot"(): $ValueBoxTransform
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "valid"(): boolean
get "inverted"(): boolean
get "angularSpeed"(): float
get "woodenTop"(): boolean
set "angle"(value: float)
get "blockPosition"(): $BlockPos
set "disassembling"(value: float)
get "assembleCooldown"(): integer
set "assembleNextTick"(value: boolean)
set "assembleCooldown"(value: integer)
get "directonFromBlock"(): $PropellerBearingBlock$Direction
get "assembleNextTick"(): boolean
get "running"(): boolean
get "disassembling"(): float
get "sails"(): void
get "countDown"(): integer
set "countDown"(value: integer)
set "sails"(value: integer)
get "oldRotspeed"(): float
set "running"(value: boolean)
get "slowingDown"(): boolean
set "moddingSpeed"(value: integer)
get "speedChanged"(): boolean
set "speedChanged"(value: boolean)
get "moddingSpeed"(): integer
set "slowingDown"(value: boolean)
set "oldRotspeed"(value: float)
get "rotspeed"(): float
set "rotspeed"(value: float)
get "sailPositions"(): $List<($BlockPos)>
set "sailPositions"(value: $List$Type<($BlockPos$Type)>)
get "spinup"(): float
get "wasOverStressed"(): boolean
get "spinningUp"(): boolean
set "spinup"(value: float)
set "wasOverStressed"(value: boolean)
set "spinningUp"(value: boolean)
get "movementModeSlot"(): $ValueBoxTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropellerBearingBlockEntity$Type = ($PropellerBearingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropellerBearingBlockEntity_ = $PropellerBearingBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRuleList$Companion" {
import {$SequencedSeatRuleList, $SequencedSeatRuleList$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRuleList"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SequencedSeatRuleList$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "defaultList"(rotation: $Rotation$Type): $SequencedSeatRuleList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatRuleList$Companion$Type = ($SequencedSeatRuleList$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatRuleList$Companion_ = $SequencedSeatRuleList$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/forge/mixin/accessors/$ItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemAccessor {

 "setRenderProperties"(arg0: any): void

(arg0: any): void
}

export namespace $ItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAccessor$Type = ($ItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAccessor_ = $ItemAccessor$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/assembly/$SeamlessChunksManager" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$SeamlessChunksManager$Companion, $SeamlessChunksManager$Companion$Type} from "packages/org/valkyrienskies/mod/common/assembly/$SeamlessChunksManager$Companion"

export class $SeamlessChunksManager {
static readonly "Companion": $SeamlessChunksManager$Companion

constructor(listener: $ClientPacketListener$Type)

public static "get"(): $SeamlessChunksManager
public "queue"(chunkX: integer, chunkZ: integer, packet: $Packet$Type<(any)>, level: $ClientLevel$Type): boolean
public "cleanup"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeamlessChunksManager$Type = ($SeamlessChunksManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeamlessChunksManager_ = $SeamlessChunksManager$Type;
}}
declare module "packages/org/valkyrienskies/core/util/datastructures/$SingleChunkDenseBlockPosSet$Companion" {
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SingleChunkDenseBlockPosSet$Companion {

constructor(arg0: $DefaultConstructorMarker$Type)

public "getDimensions"(): $Vector3ic
get "dimensions"(): $Vector3ic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleChunkDenseBlockPosSet$Companion$Type = ($SingleChunkDenseBlockPosSet$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingleChunkDenseBlockPosSet$Companion_ = $SingleChunkDenseBlockPosSet$Companion$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/$ShipTeleportData" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$Quaterniondc, $Quaterniondc$Type} from "packages/org/joml/$Quaterniondc"

export interface $ShipTeleportData {

 "getNewPos"(): $Vector3dc
 "createNewShipTransform"(arg0: $ShipTransform$Type): $ShipTransform
 "getNewOmega"(): $Vector3dc
 "getNewScale"(): double
 "getNewVel"(): $Vector3dc
 "getNewRot"(): $Quaterniondc
 "getNewDimension"(): string
}

export namespace $ShipTeleportData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipTeleportData$Type = ($ShipTeleportData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipTeleportData_ = $ShipTeleportData$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/constraints/$VSForceConstraint" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$VSConstraintType, $VSConstraintType$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraintType"
import {$VSConstraint, $VSConstraint$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraint"

export interface $VSForceConstraint extends $VSConstraint {

 "getMaxForce"(): double
 "getLocalPos0"(): $Vector3dc
 "getLocalPos1"(): $Vector3dc
 "scaleLocalPositions"(arg0: double, arg1: double): $VSForceConstraint
 "offsetLocalPositions"(arg0: $Vector3dc$Type, arg1: $Vector3dc$Type): $VSForceConstraint
 "getShipId1"(): long
 "getShipId0"(): long
 "getCompliance"(): double
 "getConstraintType"(): $VSConstraintType
}

export namespace $VSForceConstraint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSForceConstraint$Type = ($VSForceConstraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSForceConstraint_ = $VSForceConstraint$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/block/$TestHingeBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$TestHingeBlockEntity, $TestHingeBlockEntity$Type} from "packages/org/valkyrienskies/mod/common/blockentity/$TestHingeBlockEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $TestHingeBlock extends $DirectionalBlock implements $EntityBlock {
static readonly "INSTANCE": $TestHingeBlock
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(blockPos: $BlockPos$Type, blockState: $BlockState$Type): $TestHingeBlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestHingeBlock$Type = ($TestHingeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestHingeBlock_ = $TestHingeBlock$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim" {
import {$Vector3i, $Vector3i$Type} from "packages/org/joml/$Vector3i"
import {$LevelYRange, $LevelYRange$Type} from "packages/org/valkyrienskies/core/api/world/$LevelYRange"
import {$AABBi, $AABBi$Type} from "packages/org/joml/primitives/$AABBi"
import {$ChunkClaim$Companion, $ChunkClaim$Companion$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim$Companion"

export interface $ChunkClaim {

 "contains"(arg0: integer, arg1: integer): boolean
 "getSize"(): integer
 "getBlockSize"(arg0: $LevelYRange$Type, arg1: $Vector3i$Type): $Vector3i
 "toLong"(): long
 "getTotalVoxelRegion"(arg0: $LevelYRange$Type, arg1: $AABBi$Type): $AABBi
 "getZEnd"(): integer
 "getZStart"(): integer
 "getXIndex"(): integer
 "getXStart"(): integer
 "getXEnd"(): integer
 "getZMiddle"(): integer
 "getXMiddle"(): integer
 "getZIndex"(): integer
 "getCenterBlockCoordinates"(arg0: $LevelYRange$Type, arg1: $Vector3i$Type): $Vector3i
}

export namespace $ChunkClaim {
const Companion: $ChunkClaim$Companion
const DIAMETER: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkClaim$Type = ($ChunkClaim);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkClaim_ = $ChunkClaim$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/util/blocktype/$DyedWing" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConnectedWingAlike, $ConnectedWingAlike$Type} from "packages/org/valkyrienskies/clockwork/util/blocktype/$ConnectedWingAlike"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ConnectedWingAlike$Companion, $ConnectedWingAlike$Companion$Type} from "packages/org/valkyrienskies/clockwork/util/blocktype/$ConnectedWingAlike$Companion"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ColorBlockEntity, $ColorBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/generic/$ColorBlockEntity"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DyedWing extends $ConnectedWingAlike implements $IBE<($ColorBlockEntity)> {
static readonly "Companion": $ConnectedWingAlike$Companion
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDrops"(state: $BlockState$Type, params: $LootParams$Builder$Type): $List<($ItemStack)>
public "getBlockEntityClass"(): $Class<($ColorBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($ColorBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($ColorBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $ColorBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($ColorBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($ColorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyedWing$Type = ($DyedWing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyedWing_ = $DyedWing$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$GooBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GooBlockEntity extends $SmartBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlockEntity$Type = ($GooBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlockEntity_ = $GooBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/com/mojang/blaze3d/audio/$HasOpenALVelocity" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"

export interface $HasOpenALVelocity {

 "setVelocity"(arg0: $Vector3dc$Type): void

(arg0: $Vector3dc$Type): void
}

export namespace $HasOpenALVelocity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HasOpenALVelocity$Type = ($HasOpenALVelocity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HasOpenALVelocity_ = $HasOpenALVelocity$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/command/$ShipArgumentInfoTemplate" {
import {$ShipArgumentInfo, $ShipArgumentInfo$Type} from "packages/org/valkyrienskies/mod/common/command/$ShipArgumentInfo"
import {$ShipArgument, $ShipArgument$Type} from "packages/org/valkyrienskies/mod/common/command/$ShipArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $ShipArgumentInfoTemplate implements $ArgumentTypeInfo$Template<($ShipArgument)> {

constructor(info: $ShipArgumentInfo$Type, selectorOnly: boolean)

public "instantiate"(commandBuildContext: $CommandBuildContext$Type): $ShipArgument
public "type"(): $ArgumentTypeInfo<($ShipArgument), (any)>
public "getSelectorOnly$valkyrienskies_120"(): boolean
get "selectorOnly$valkyrienskies_120"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipArgumentInfoTemplate$Type = ($ShipArgumentInfoTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipArgumentInfoTemplate_ = $ShipArgumentInfoTemplate$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/properties/$ShipInertiaData" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$Matrix3dc, $Matrix3dc$Type} from "packages/org/joml/$Matrix3dc"

export interface $ShipInertiaData {

 "getMass"(): double
 "getShipMass"(): double
 "getCenterOfMassInShip"(): $Vector3dc
 "getCenterOfMassInShipSpace"(): $Vector3dc
 "getMomentOfInertiaTensorToSave"(): $Matrix3dc
 "getMomentOfInertiaTensor"(): $Matrix3dc
}

export namespace $ShipInertiaData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipInertiaData$Type = ($ShipInertiaData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipInertiaData_ = $ShipInertiaData$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$StructureBlockInfoAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $StructureBlockInfoAccessor {

 "somebody"(arg0: $CompoundTag$Type): void

(arg0: $CompoundTag$Type): void
}

export namespace $StructureBlockInfoAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlockInfoAccessor$Type = ($StructureBlockInfoAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlockInfoAccessor_ = $StructureBlockInfoAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/physics/$PhysicsEntityServer" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$ShipForcesInducer, $ShipForcesInducer$Type} from "packages/org/valkyrienskies/core/api/ships/$ShipForcesInducer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$ShipInertiaData, $ShipInertiaData$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipInertiaData"
import {$VSCollisionShapeData, $VSCollisionShapeData$Type} from "packages/org/valkyrienskies/core/apigame/physics/$VSCollisionShapeData"

export class $PhysicsEntityServer {

constructor(id: long, dimensionId: string, linearVelocity: $Vector3dc$Type, angularVelocity: $Vector3dc$Type, inertiaData: $ShipInertiaData$Type, shipTransform: $ShipTransform$Type, prevTickShipTransform: $ShipTransform$Type, shipTeleportId: integer, collisionShapeData: $VSCollisionShapeData$Type, collisionMask: integer, staticFrictionCoefficient: double, dynamicFrictionCoefficient: double, restitutionCoefficient: double, isStatic: boolean, needsUpdating: boolean, forceInducers: $List$Type<($ShipForcesInducer$Type)>)
constructor(arg0: long, arg1: string, arg2: $Vector3dc$Type, arg3: $Vector3dc$Type, arg4: $ShipInertiaData$Type, arg5: $ShipTransform$Type, arg6: $ShipTransform$Type, arg7: integer, arg8: $VSCollisionShapeData$Type, arg9: integer, arg10: double, arg11: double, arg12: double, arg13: boolean, arg14: boolean, arg15: $List$Type<(any)>, arg16: integer, arg17: $DefaultConstructorMarker$Type)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isStatic"(): boolean
public "getId"(): long
public "copy"(id: long, dimensionId: string, linearVelocity: $Vector3dc$Type, angularVelocity: $Vector3dc$Type, inertiaData: $ShipInertiaData$Type, shipTransform: $ShipTransform$Type, prevTickShipTransform: $ShipTransform$Type, shipTeleportId: integer, collisionShapeData: $VSCollisionShapeData$Type, collisionMask: integer, staticFrictionCoefficient: double, dynamicFrictionCoefficient: double, restitutionCoefficient: double, isStatic: boolean, needsUpdating: boolean, forceInducers: $List$Type<($ShipForcesInducer$Type)>): $PhysicsEntityServer
public "component2"(): string
public "component4"(): $Vector3dc
public "component5"(): $ShipInertiaData
public "component1"(): long
public "component3"(): $Vector3dc
public "getShipTransform"(): $ShipTransform
public "setRestitutionCoefficient"(arg0: double): void
public "setStaticFrictionCoefficient"(arg0: double): void
public "setDynamicFrictionCoefficient"(arg0: double): void
public "component6"(): $ShipTransform
public "setCollisionMask"(arg0: integer): void
public "setStatic"(arg0: boolean): void
public "setInertiaData"(arg0: $ShipInertiaData$Type): void
public "getInertiaData"(): $ShipInertiaData
public "component7"(): $ShipTransform
public "getPrevTickShipTransform"(): $ShipTransform
public "getDimensionId"(): string
public "getCollisionShapeData"(): $VSCollisionShapeData
public "setCollisionShapeData"(arg0: $VSCollisionShapeData$Type): void
public "getForceInducers"(): $List<($ShipForcesInducer)>
public "getAngularVelocity"(): $Vector3dc
public "getLinearVelocity"(): $Vector3dc
public "getRestitutionCoefficient"(): double
public "getStaticFrictionCoefficient"(): double
public "getDynamicFrictionCoefficient"(): double
public "setAngularVelocity"(arg0: $Vector3dc$Type): void
public "setShipTransform"(arg0: $ShipTransform$Type): void
public "getCollisionMask"(): integer
public "getShipTeleportId"(): integer
public "setLinearVelocity"(arg0: $Vector3dc$Type): void
public "setShipTeleportId"(arg0: integer): void
public "getNeedsUpdating"(): boolean
public "setNeedsUpdating"(arg0: boolean): void
public "component16"(): $List<($ShipForcesInducer)>
public "component14"(): boolean
public "component11"(): double
public "component9"(): $VSCollisionShapeData
public "component10"(): integer
public "component8"(): integer
public "component12"(): double
public "component15"(): boolean
public "component13"(): double
public "setPrevTickShipTransform"(arg0: $ShipTransform$Type): void
get "static"(): boolean
get "id"(): long
get "shipTransform"(): $ShipTransform
set "restitutionCoefficient"(value: double)
set "staticFrictionCoefficient"(value: double)
set "dynamicFrictionCoefficient"(value: double)
set "collisionMask"(value: integer)
set "static"(value: boolean)
set "inertiaData"(value: $ShipInertiaData$Type)
get "inertiaData"(): $ShipInertiaData
get "prevTickShipTransform"(): $ShipTransform
get "dimensionId"(): string
get "collisionShapeData"(): $VSCollisionShapeData
set "collisionShapeData"(value: $VSCollisionShapeData$Type)
get "forceInducers"(): $List<($ShipForcesInducer)>
get "angularVelocity"(): $Vector3dc
get "linearVelocity"(): $Vector3dc
get "restitutionCoefficient"(): double
get "staticFrictionCoefficient"(): double
get "dynamicFrictionCoefficient"(): double
set "angularVelocity"(value: $Vector3dc$Type)
set "shipTransform"(value: $ShipTransform$Type)
get "collisionMask"(): integer
get "shipTeleportId"(): integer
set "linearVelocity"(value: $Vector3dc$Type)
set "shipTeleportId"(value: integer)
get "needsUpdating"(): boolean
set "needsUpdating"(value: boolean)
set "prevTickShipTransform"(value: $ShipTransform$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsEntityServer$Type = ($PhysicsEntityServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsEntityServer_ = $PhysicsEntityServer$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/physics/$VSCollisionShapes" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VSCollisionShapes extends $Enum<($VSCollisionShapes)> {
static readonly "VOXEL": $VSCollisionShapes
static readonly "SPHERE": $VSCollisionShapes
static readonly "WHEEL": $VSCollisionShapes
static readonly "BOX": $VSCollisionShapes
static readonly "CAPSULE": $VSCollisionShapes


public static "values"(): ($VSCollisionShapes)[]
public static "valueOf"(value: string): $VSCollisionShapes
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSCollisionShapes$Type = (("capsule") | ("voxel") | ("sphere") | ("wheel") | ("box")) | ($VSCollisionShapes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSCollisionShapes_ = $VSCollisionShapes$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/world/level/block/$SlabBlockAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlabBlockAccessor {

}

export namespace $SlabBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlabBlockAccessor$Type = ($SlabBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlabBlockAccessor_ = $SlabBlockAccessor$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/util/$VSLevelChunk" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VSLevelChunk {

 "copyChunkFromOtherDimension"(arg0: $VSLevelChunk$Type): void
 "clearChunk"(): void
}

export namespace $VSLevelChunk {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSLevelChunk$Type = ($VSLevelChunk);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSLevelChunk_ = $VSLevelChunk$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$ServerShipTransformProvider$NextTransformAndVelocityData" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"

export class $ServerShipTransformProvider$NextTransformAndVelocityData {

constructor(arg0: $ShipTransform$Type, arg1: $Vector3dc$Type, arg2: $Vector3dc$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $ShipTransform$Type, arg1: $Vector3dc$Type, arg2: $Vector3dc$Type): $ServerShipTransformProvider$NextTransformAndVelocityData
public "component2"(): $Vector3dc
public "component1"(): $ShipTransform
public "component3"(): $Vector3dc
public "getNextTransform"(): $ShipTransform
public "getNextOmega"(): $Vector3dc
public "getNextVel"(): $Vector3dc
get "nextTransform"(): $ShipTransform
get "nextOmega"(): $Vector3dc
get "nextVel"(): $Vector3dc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerShipTransformProvider$NextTransformAndVelocityData$Type = ($ServerShipTransformProvider$NextTransformAndVelocityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerShipTransformProvider$NextTransformAndVelocityData_ = $ServerShipTransformProvider$NextTransformAndVelocityData$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Alternate" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Alternate extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Alternate$Type = ($Alternate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Alternate_ = $Alternate$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/block/$TestChairBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TestChairBlock extends $HorizontalDirectionalBlock {
static readonly "INSTANCE": $TestChairBlock
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestChairBlock$Type = ($TestChairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestChairBlock_ = $TestChairBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$GooBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GooBlockEntity, $GooBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$GooBlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $GooBlock extends $Block implements $IBE<($GooBlockEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getBlockEntityClass"(): $Class<($GooBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($GooBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($GooBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $GooBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($GooBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($GooBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GooBlock$Type = ($GooBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GooBlock_ = $GooBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/gyro/$GyroBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GyroBlockEntity extends $KineticBlockEntity {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(typeIn: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "read"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "tick"(): void
public "setAngle"(arg0: float): void
public "getCoreAngle"(): float
public "setCoreAngle"(arg0: float): void
public "setVisualSpeed"(arg0: $LerpedFloat$Type): void
public "getVisualSpeed"(): $LerpedFloat
public "getTargetVec3"(): $Vector3d
public "setTargetVec3"(arg0: $Vector3d$Type): void
public "getAngle"(): float
public "getPreviousCoreAngle"(): float
public "setPreviousCoreAngle"(arg0: float): void
public "getInterpolatedCoreAngle"(partialTicks: float): float
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "angle"(value: float)
get "coreAngle"(): float
set "coreAngle"(value: float)
set "visualSpeed"(value: $LerpedFloat$Type)
get "visualSpeed"(): $LerpedFloat
get "targetVec3"(): $Vector3d
set "targetVec3"(value: $Vector3d$Type)
get "angle"(): float
get "previousCoreAngle"(): float
set "previousCoreAngle"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GyroBlockEntity$Type = ($GyroBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GyroBlockEntity_ = $GyroBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/resistor/$RedstoneResistorBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$SplitShaftBlockEntity, $SplitShaftBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/transmission/$SplitShaftBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RedstoneResistorBlockEntity extends $SplitShaftBlockEntity implements $IHaveGoggleInformation {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "getState"(): integer
public "tick"(): void
public "setState"(arg0: integer): void
public "detachKinetics"(): void
public "setLastChange"(arg0: integer): void
public "addToGoggleTooltip"(tooltip: $List$Type<($Component$Type)>, isPlayerSneaking: boolean): boolean
public "getRotationSpeedModifier"(face: $Direction$Type): float
public "getLastChange"(): integer
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "state"(): integer
set "state"(value: integer)
set "lastChange"(value: integer)
get "lastChange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneResistorBlockEntity$Type = ($RedstoneResistorBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneResistorBlockEntity_ = $RedstoneResistorBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/eureka/block/$WoodType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $WoodType extends $Enum<($WoodType)> implements $StringRepresentable {
static readonly "OAK": $WoodType
static readonly "SPRUCE": $WoodType
static readonly "BIRCH": $WoodType
static readonly "JUNGLE": $WoodType
static readonly "ACACIA": $WoodType
static readonly "DARK_OAK": $WoodType
static readonly "WARPED": $WoodType
static readonly "CRIMSON": $WoodType


public static "values"(): ($WoodType)[]
public static "valueOf"(value: string): $WoodType
public static "getEntries"(): $EnumEntries<($WoodType)>
public "getResourceName"(): string
public "getTextureLocationLog"(): $ResourceLocation
public "getTextureLocationPlanks"(): $ResourceLocation
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "entries"(): $EnumEntries<($WoodType)>
get "resourceName"(): string
get "textureLocationLog"(): $ResourceLocation
get "textureLocationPlanks"(): $ResourceLocation
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodType$Type = (("crimson") | ("birch") | ("oak") | ("acacia") | ("warped") | ("jungle") | ("dark_oak") | ("spruce")) | ($WoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodType_ = $WoodType$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/$WanderliteItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CWItem, $CWItem$Type} from "packages/org/valkyrienskies/clockwork/platform/$CWItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WanderliteItem extends $CWItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WanderliteItem$Type = ($WanderliteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WanderliteItem_ = $WanderliteItem$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/$IShipObjectWorldProvider" {
import {$ShipWorld, $ShipWorld$Type} from "packages/org/valkyrienskies/core/api/world/$ShipWorld"

export interface $IShipObjectWorldProvider {

 "getShipObjectWorld"(): $ShipWorld

(): $ShipWorld
}

export namespace $IShipObjectWorldProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShipObjectWorldProvider$Type = ($IShipObjectWorldProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShipObjectWorldProvider_ = $IShipObjectWorldProvider$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$TrainAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$TrackGraph, $TrackGraph$Type} from "packages/com/simibubi/create/content/trains/graph/$TrackGraph"

export interface $TrainAccessor {

 "birds"(arg0: boolean): void
 "somebody"(arg0: $TrackGraph$Type): void
 "geographical"(): $List<(any)>
}

export namespace $TrainAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainAccessor$Type = ($TrainAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrainAccessor_ = $TrainAccessor$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Deeply" {
import {$AbstractContraptionEntity$ContraptionRotationState, $AbstractContraptionEntity$ContraptionRotationState$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity$ContraptionRotationState"

export interface $Deeply {

 "somebody"(arg0: $AbstractContraptionEntity$ContraptionRotationState$Type): void

(arg0: $AbstractContraptionEntity$ContraptionRotationState$Type): void
}

export namespace $Deeply {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Deeply$Type = ($Deeply);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Deeply_ = $Deeply$Type;
}}
declare module "packages/org/valkyrienskies/eureka/block/$FloaterBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FloaterBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloaterBlock$Type = ($FloaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloaterBlock_ = $FloaterBlock$Type;
}}
declare module "packages/org/valkyrienskies/eureka/util/$DirectionalShape" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RotShape, $RotShape$Type} from "packages/org/valkyrienskies/eureka/util/$RotShape"

export class $DirectionalShape {

constructor(shape: $RotShape$Type)

public "get"(direction: $Direction$Type): $VoxelShape
public "getEast"(): $VoxelShape
public "getWest"(): $VoxelShape
public "getNorth"(): $VoxelShape
public "getSouth"(): $VoxelShape
get "east"(): $VoxelShape
get "west"(): $VoxelShape
get "north"(): $VoxelShape
get "south"(): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionalShape$Type = ($DirectionalShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionalShape_ = $DirectionalShape$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/server/level/$DistanceManagerAccessor" {
import {$SortedArraySet, $SortedArraySet$Type} from "packages/net/minecraft/util/$SortedArraySet"
import {$Ticket, $Ticket$Type} from "packages/net/minecraft/server/level/$Ticket"
import {$Long2ObjectOpenHashMap, $Long2ObjectOpenHashMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectOpenHashMap"

export interface $DistanceManagerAccessor {

 "getTickets"(): $Long2ObjectOpenHashMap<($SortedArraySet<($Ticket<(any)>)>)>

(): $Long2ObjectOpenHashMap<($SortedArraySet<($Ticket<(any)>)>)>
}

export namespace $DistanceManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistanceManagerAccessor$Type = ($DistanceManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistanceManagerAccessor_ = $DistanceManagerAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraintType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $VSConstraintType extends $Enum<($VSConstraintType)> {
static readonly "ATTACHMENT": $VSConstraintType
static readonly "FIXED_ATTACHMENT_ORIENTATION": $VSConstraintType
static readonly "FIXED_ORIENTATION": $VSConstraintType
static readonly "HINGE_ORIENTATION": $VSConstraintType
static readonly "HINGE_SWING_LIMITS": $VSConstraintType
static readonly "HINGE_TARGET_ANGLE": $VSConstraintType
static readonly "POS_DAMPING": $VSConstraintType
static readonly "ROPE": $VSConstraintType
static readonly "ROT_DAMPING": $VSConstraintType
static readonly "SLIDE": $VSConstraintType
static readonly "SPHERICAL_SWING_LIMITS": $VSConstraintType
static readonly "SPHERICAL_TWIST_LIMITS": $VSConstraintType


public static "values"(): ($VSConstraintType)[]
public static "valueOf"(value: string): $VSConstraintType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSConstraintType$Type = (("hinge_target_angle") | ("rot_damping") | ("fixed_attachment_orientation") | ("attachment") | ("hinge_orientation") | ("slide") | ("rope") | ("hinge_swing_limits") | ("pos_damping") | ("spherical_swing_limits") | ("spherical_twist_limits") | ("fixed_orientation")) | ($VSConstraintType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSConstraintType_ = $VSConstraintType$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/client/render/$ViewAreaAccessor" {
import {$ChunkRenderDispatcher$RenderChunk, $ChunkRenderDispatcher$RenderChunk$Type} from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ViewAreaAccessor {

 "callGetRenderChunkAt"(arg0: $BlockPos$Type): $ChunkRenderDispatcher$RenderChunk

(arg0: $BlockPos$Type): $ChunkRenderDispatcher$RenderChunk
}

export namespace $ViewAreaAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewAreaAccessor$Type = ($ViewAreaAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewAreaAccessor_ = $ViewAreaAccessor$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$PhysShip" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"

export interface $PhysShip {

 "isStatic"(): boolean
 "getId"(): long
 "applyInvariantTorque"(arg0: $Vector3dc$Type): void
 "applyInvariantForce"(arg0: $Vector3dc$Type): void
 "setEnableKinematicVelocity"(arg0: boolean): void
 "applyInvariantForceToPos"(arg0: $Vector3dc$Type, arg1: $Vector3dc$Type): void
 "setStatic"(arg0: boolean): void
 "getTransform"(): $ShipTransform
 "getEnableKinematicVelocity"(): boolean
 "setDoFluidDrag"(arg0: boolean): void
 "getDoFluidDrag"(): boolean
 "applyRotDependentTorque"(arg0: $Vector3dc$Type): void
 "applyRotDependentForce"(arg0: $Vector3dc$Type): void
 "applyRotDependentForceToPos"(arg0: $Vector3dc$Type, arg1: $Vector3dc$Type): void
 "getBuoyantFactor"(): double
 "setBuoyantFactor"(arg0: double): void
}

export namespace $PhysShip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysShip$Type = ($PhysShip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysShip_ = $PhysShip$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/mixin/accessors/$FluidAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FluidAccessor {

 "getIfEmpty"(): boolean

(): boolean
}

export namespace $FluidAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidAccessor$Type = ($FluidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidAccessor_ = $FluidAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BearingBlock, $BearingBlock$Type} from "packages/com/simibubi/create/content/contraptions/bearing/$BearingBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PropellerBearingBlock$Companion, $PropellerBearingBlock$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlock$Companion"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PropellerBearingBlockEntity, $PropellerBearingBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/propeller/$PropellerBearingBlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PropellerBearingBlock extends $BearingBlock implements $IBE<($PropellerBearingBlockEntity)> {
static readonly "Companion": $PropellerBearingBlock$Companion
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($PropellerBearingBlockEntity)>
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($PropellerBearingBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($PropellerBearingBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PropellerBearingBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($PropellerBearingBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($PropellerBearingBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropellerBearingBlock$Type = ($PropellerBearingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropellerBearingBlock_ = $PropellerBearingBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$WanderWandItem$Animation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumEntries, $EnumEntries$Type} from "packages/kotlin/enums/$EnumEntries"

export class $WanderWandItem$Animation extends $Enum<($WanderWandItem$Animation)> {
static readonly "DRAW": $WanderWandItem$Animation
static readonly "IDLE": $WanderWandItem$Animation
static readonly "SUCCESS": $WanderWandItem$Animation
static readonly "DUMP": $WanderWandItem$Animation


public static "values"(): ($WanderWandItem$Animation)[]
public static "valueOf"(value: string): $WanderWandItem$Animation
public static "getEntries"(): $EnumEntries<($WanderWandItem$Animation)>
get "entries"(): $EnumEntries<($WanderWandItem$Animation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WanderWandItem$Animation$Type = (("idle") | ("success") | ("draw") | ("dump")) | ($WanderWandItem$Animation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WanderWandItem$Animation_ = $WanderWandItem$Animation$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/client/world/$ClientChunkCacheDuck" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$LongObjectMap, $LongObjectMap$Type} from "packages/io/netty/util/collection/$LongObjectMap"

export interface $ClientChunkCacheDuck {

 "vs$getShipChunks"(): $LongObjectMap<($LevelChunk)>

(): $LongObjectMap<($LevelChunk)>
}

export namespace $ClientChunkCacheDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkCacheDuck$Type = ($ClientChunkCacheDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkCacheDuck_ = $ClientChunkCacheDuck$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$AbstractContraptionEntityAccessor" {
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export interface $AbstractContraptionEntityAccessor {

 "converter"(): void
 "somebody"(): $EntityDataAccessor<(any)>
}

export namespace $AbstractContraptionEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContraptionEntityAccessor$Type = ($AbstractContraptionEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContraptionEntityAccessor_ = $AbstractContraptionEntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRuleList" {
import {$SequencedSeatOperation, $SequencedSeatOperation$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatOperation"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$InputKey, $InputKey$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$InputKey"
import {$SequencedSeatRule, $SequencedSeatRule$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRule"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SequencedSeatRuleList$Companion, $SequencedSeatRuleList$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRuleList$Companion"
import {$SequencedSeatBlockEntity, $SequencedSeatBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatBlockEntity"

export class $SequencedSeatRuleList {
static readonly "Companion": $SequencedSeatRuleList$Companion
static readonly "MAX_RULES": integer

constructor()

public "getRule"(index: integer): $SequencedSeatRule
public "setRule"(index: integer, rule: $SequencedSeatRule$Type): void
public "deserializeNBT"(tag: $ListTag$Type): void
public "serializeNBT"(): $ListTag
public "currentModifier"(be: $SequencedSeatBlockEntity$Type, face: $Direction$Type): float
public "addKey"(index: integer, key: $InputKey$Type): void
public "removeKey"(index: integer, key: $InputKey$Type): void
public "setOperation"(index: integer, operation: $SequencedSeatOperation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatRuleList$Type = ($SequencedSeatRuleList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatRuleList_ = $SequencedSeatRuleList$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$Matrix3dAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Matrix3dAccessor {

 "noon"(arg0: double): void
 "converter"(arg0: double): void
 "salt"(arg0: double): void
 "birds"(arg0: double): void
 "pam"(arg0: double): void
 "somebody"(arg0: double): void
 "geographical"(arg0: double): void
 "scores"(arg0: double): void
 "wizard"(arg0: double): void
}

export namespace $Matrix3dAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix3dAccessor$Type = ($Matrix3dAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Matrix3dAccessor_ = $Matrix3dAccessor$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$MovementContextAccessor" {
import {$Contraption, $Contraption$Type} from "packages/com/simibubi/create/content/contraptions/$Contraption"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $MovementContextAccessor {

 "converter"(): boolean
 "salt"(arg0: $Vec3$Type): void
 "somebody"(): $Contraption
 "geographical"(): $Vec3
 "geographical"(arg0: $Vec3$Type): void
}

export namespace $MovementContextAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementContextAccessor$Type = ($MovementContextAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovementContextAccessor_ = $MovementContextAccessor$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/util/$IEntityDraggingInformationProvider" {
import {$EntityDraggingInformation, $EntityDraggingInformation$Type} from "packages/org/valkyrienskies/mod/common/util/$EntityDraggingInformation"

export interface $IEntityDraggingInformationProvider {

 "vs$shouldDrag"(): boolean
 "getDraggingInformation"(): $EntityDraggingInformation
}

export namespace $IEntityDraggingInformationProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityDraggingInformationProvider$Type = ($IEntityDraggingInformationProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityDraggingInformationProvider_ = $IEntityDraggingInformationProvider$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/chunks/$ChunkUnwatchTask" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$ServerShip, $ServerShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShip"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IPlayer, $IPlayer$Type} from "packages/org/valkyrienskies/core/apigame/world/$IPlayer"

export interface $ChunkUnwatchTask extends $Comparable<($ChunkUnwatchTask)> {

 "getChunkPos"(): long
 "getDimensionId"(): string
 "getShip"(): $ServerShip
 "getChunkZ"(): integer
 "getChunkX"(): integer
 "getShouldUnload"(): boolean
 "getPlayersNeedUnwatching"(): $Iterable<($IPlayer)>
 "compareTo"(arg0: $ChunkUnwatchTask$Type): integer
}

export namespace $ChunkUnwatchTask {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkUnwatchTask$Type = ($ChunkUnwatchTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkUnwatchTask_ = $ChunkUnwatchTask$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$CarriageSyncDataAccessor" {
import {$Pair, $Pair$Type} from "packages/com/simibubi/create/foundation/utility/$Pair"

export interface $CarriageSyncDataAccessor {

 "somebody"(arg0: $Pair$Type<(any), (any)>): void

(arg0: $Pair$Type<(any), (any)>): void
}

export namespace $CarriageSyncDataAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarriageSyncDataAccessor$Type = ($CarriageSyncDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CarriageSyncDataAccessor_ = $CarriageSyncDataAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/physicalities/ballast/$BallastBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BallastBlockEntity extends $SmartBlockEntity {
 "inventory": any
 "recalculateWeightNextTick": boolean
 "oldWeight": double
 "newWeight": double
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "tick"(): void
public "mapValue"(oldValue: integer, oldMin: integer, oldMax: integer, newMin: integer, newMax: integer): integer
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "updateWeight"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BallastBlockEntity$Type = ($BallastBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BallastBlockEntity_ = $BallastBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/eureka/block/$AnchorBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DirectionalShape, $DirectionalShape$Type} from "packages/org/valkyrienskies/eureka/util/$DirectionalShape"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RotShape, $RotShape$Type} from "packages/org/valkyrienskies/eureka/util/$RotShape"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AnchorBlock extends $HorizontalDirectionalBlock {
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "getANCHOR_BOTTOM"(): $RotShape
public "getANCHOR_ROD"(): $RotShape
public "getANCHOR_SHAPE"(): $DirectionalShape
get "aNCHOR_BOTTOM"(): $RotShape
get "aNCHOR_ROD"(): $RotShape
get "aNCHOR_SHAPE"(): $DirectionalShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnchorBlock$Type = ($AnchorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnchorBlock_ = $AnchorBlock$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/mod_compat/create/$MixinAbstractContraptionEntityDuck" {
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"

export interface $MixinAbstractContraptionEntityDuck {

 "vs$setForceStall"(arg0: boolean): void
 "getStructureTransform"(): $StructureTransform
}

export namespace $MixinAbstractContraptionEntityDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MixinAbstractContraptionEntityDuck$Type = ($MixinAbstractContraptionEntityDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MixinAbstractContraptionEntityDuck_ = $MixinAbstractContraptionEntityDuck$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/feature/seamless_copy/$SeamlessCopyClientPacketListenerDuck" {
import {$SeamlessChunksManager, $SeamlessChunksManager$Type} from "packages/org/valkyrienskies/mod/common/assembly/$SeamlessChunksManager"

export interface $SeamlessCopyClientPacketListenerDuck {

 "vs_getChunks"(): $SeamlessChunksManager

(): $SeamlessChunksManager
}

export namespace $SeamlessCopyClientPacketListenerDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeamlessCopyClientPacketListenerDuck$Type = ($SeamlessCopyClientPacketListenerDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeamlessCopyClientPacketListenerDuck_ = $SeamlessCopyClientPacketListenerDuck$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/physics/$VSCollisionShapeData" {
import {$VSCollisionShapes, $VSCollisionShapes$Type} from "packages/org/valkyrienskies/core/apigame/physics/$VSCollisionShapes"

export interface $VSCollisionShapeData {

 "getShapeType"(): $VSCollisionShapes

(): $VSCollisionShapes
}

export namespace $VSCollisionShapeData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSCollisionShapeData$Type = ($VSCollisionShapeData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSCollisionShapeData_ = $VSCollisionShapeData$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$Wing" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"

export class $Wing {

constructor(arg0: $Vector3dc$Type, arg1: double, arg2: double, arg3: double, arg4: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(arg0: $Vector3dc$Type, arg1: double, arg2: double, arg3: double, arg4: double): $Wing
public "component2"(): double
public "component4"(): double
public "component5"(): double
public "component1"(): $Vector3dc
public "component3"(): double
public "getWingBreakingForce"(): double
public "getWingCamberAttackAngleBias"(): double
public "getWingNormal"(): $Vector3dc
public "getWingLiftPower"(): double
public "getWingDragPower"(): double
get "wingBreakingForce"(): double
get "wingCamberAttackAngleBias"(): double
get "wingNormal"(): $Vector3dc
get "wingLiftPower"(): double
get "wingDragPower"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wing$Type = ($Wing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wing_ = $Wing$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$SlickerBlockEntity$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$CBORMapper, $CBORMapper$Type} from "packages/com/fasterxml/jackson/dataformat/cbor/databind/$CBORMapper"

export class $SlickerBlockEntity$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "getMapper"(): $CBORMapper
get "mapper"(): $CBORMapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlickerBlockEntity$Companion$Type = ($SlickerBlockEntity$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlickerBlockEntity$Companion_ = $SlickerBlockEntity$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/integration/cc/$ComputerAttachmentHandler" {
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"

export class $ComputerAttachmentHandler {

constructor()

public "sendEvent"(name: string, obj: any): void
public "detachComputer"(access: $IComputerAccess$Type): void
public "attachComputer"(access: $IComputerAccess$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerAttachmentHandler$Type = ($ComputerAttachmentHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerAttachmentHandler_ = $ComputerAttachmentHandler$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$ClientShipTransformProvider" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"

export interface $ClientShipTransformProvider {

 "provideNextTransform"(arg0: $ShipTransform$Type, arg1: $ShipTransform$Type, arg2: $ShipTransform$Type): $ShipTransform
 "provideNextRenderTransform"(arg0: $ShipTransform$Type, arg1: $ShipTransform$Type, arg2: double): $ShipTransform
}

export namespace $ClientShipTransformProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientShipTransformProvider$Type = ($ClientShipTransformProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientShipTransformProvider_ = $ClientShipTransformProvider$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/contraptins/$ControlledContraptionEntityAccessor" {
import {$IControlContraption, $IControlContraption$Type} from "packages/com/simibubi/create/content/contraptions/$IControlContraption"

export interface $ControlledContraptionEntityAccessor {

 "somebody"(): $IControlContraption

(): $IControlContraption
}

export namespace $ControlledContraptionEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlledContraptionEntityAccessor$Type = ($ControlledContraptionEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlledContraptionEntityAccessor_ = $ControlledContraptionEntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRule" {
import {$SequencedSeatRule$Companion, $SequencedSeatRule$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatRule$Companion"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$SequencedSeatOperation, $SequencedSeatOperation$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatOperation"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InputKey, $InputKey$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$InputKey"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SequencedSeatBlockEntity, $SequencedSeatBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatBlockEntity"
import {$SequencedSeatValue, $SequencedSeatValue$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatValue"

export class $SequencedSeatRule {
static readonly "Companion": $SequencedSeatRule$Companion

constructor(inputKeys: $Set$Type<($InputKey$Type)>, operation: $SequencedSeatOperation$Type, value: $SequencedSeatValue$Type)

public "getValue"(): $SequencedSeatValue
public "matches"(inputKeys: $Set$Type<(any)>): boolean
public "getOperation"(): $SequencedSeatOperation
public "serializeNBT"(): $CompoundTag
public "calculateModifier"(be: $SequencedSeatBlockEntity$Type, face: $Direction$Type, inputKeys: $Set$Type<(any)>): float
public "getInputKeys"(): $Set<($InputKey)>
get "value"(): $SequencedSeatValue
get "operation"(): $SequencedSeatOperation
get "inputKeys"(): $Set<($InputKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatRule$Type = ($SequencedSeatRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatRule_ = $SequencedSeatRule$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/$PlayerState" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"

export class $PlayerState {

constructor(pos: $Vector3dc$Type, vel: $Vector3dc$Type, dimensionId: string, mountedShip: long, mountedPos: $Vector3dc$Type)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(pos: $Vector3dc$Type, vel: $Vector3dc$Type, dimensionId: string, mountedShip: long, mountedPos: $Vector3dc$Type): $PlayerState
public "component2"(): $Vector3dc
public "component4"(): long
public "component5"(): $Vector3dc
public "component1"(): $Vector3dc
public "component3"(): string
public "getPos"(): $Vector3dc
public "getVel"(): $Vector3dc
public "getMountedShip"(): long
public "getMountedPos"(): $Vector3dc
public "getDimensionId"(): string
get "pos"(): $Vector3dc
get "vel"(): $Vector3dc
get "mountedShip"(): long
get "mountedPos"(): $Vector3dc
get "dimensionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerState$Type = ($PlayerState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerState_ = $PlayerState$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/bearing/$PhysBearingBlock$Companion" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $PhysBearingBlock$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "getLight"(state: $BlockState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysBearingBlock$Companion$Type = ($PhysBearingBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysBearingBlock$Companion_ = $PhysBearingBlock$Companion$Type;
}}
declare module "packages/org/valkyrienskies/core/util/datastructures/$DenseBlockPosSet" {
import {$IntTernaryConsumer, $IntTernaryConsumer$Type} from "packages/org/valkyrienskies/core/api/util/functions/$IntTernaryConsumer"
import {$BlockPos2ObjectOpenHashMap, $BlockPos2ObjectOpenHashMap$Type} from "packages/org/valkyrienskies/core/util/datastructures/$BlockPos2ObjectOpenHashMap"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Function4, $Function4$Type} from "packages/kotlin/jvm/functions/$Function4"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Function3, $Function3$Type} from "packages/kotlin/jvm/functions/$Function3"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Unit, $Unit$Type} from "packages/kotlin/$Unit"
import {$SingleChunkDenseBlockPosSet, $SingleChunkDenseBlockPosSet$Type} from "packages/org/valkyrienskies/core/util/datastructures/$SingleChunkDenseBlockPosSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IBlockPosSet, $IBlockPosSet$Type} from "packages/org/valkyrienskies/core/util/datastructures/$IBlockPosSet"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $DenseBlockPosSet implements $IBlockPosSet {

constructor()

public "add"(arg0: integer, arg1: integer, arg2: integer): boolean
public "remove"(arg0: integer, arg1: integer, arg2: integer): boolean
public "clear"(): void
public "size"(): integer
public "iterator"(): $Iterator<($Vector3ic)>
public "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
public "forEach"(arg0: $Function3$Type<(any), (any), (any), ($Unit$Type)>): void
public "getSize"(): integer
public "canStore"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getChunks"(): $BlockPos2ObjectOpenHashMap<($SingleChunkDenseBlockPosSet)>
public "getChunk"(arg0: integer, arg1: integer, arg2: integer): $SingleChunkDenseBlockPosSet
public "forEachChunk"(arg0: $Function4$Type<(any), (any), (any), (any), ($Unit$Type)>): void
public "add"(arg0: $Vector3ic$Type): boolean
public "remove"(arg0: any): boolean
public "remove"(arg0: $Vector3ic$Type): boolean
public "isEmpty"(): boolean
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
public "contains"(arg0: any): boolean
public "contains"(arg0: $Vector3ic$Type): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "forEach"(arg0: $IntTernaryConsumer$Type): void
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
public "canStore"(arg0: $Vector3ic$Type): boolean
public "forEachUnsafe"(arg0: $IntTernaryConsumer$Type): void
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type, arg7: $Vector3ic$Type, arg8: $Vector3ic$Type, arg9: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type, arg7: $Vector3ic$Type, arg8: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type, arg7: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(...arg0: ($Vector3ic$Type)[]): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type): $Set<($Vector3ic)>
public static "of"<E>(): $Set<($Vector3ic)>
public static "of"<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type): $Set<($Vector3ic)>
public "spliterator"(): $Spliterator<($Vector3ic)>
public "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
public "stream"(): $Stream<($Vector3ic)>
public "removeIf"(arg0: $Predicate$Type<(any)>): boolean
public "parallelStream"(): $Stream<($Vector3ic)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Vector3ic>;
get "chunks"(): $BlockPos2ObjectOpenHashMap<($SingleChunkDenseBlockPosSet)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DenseBlockPosSet$Type = ($DenseBlockPosSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DenseBlockPosSet_ = $DenseBlockPosSet$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/bearing/$PhysBearingBlockEntity$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $PhysBearingBlockEntity$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysBearingBlockEntity$Companion$Type = ($PhysBearingBlockEntity$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysBearingBlockEntity$Companion_ = $PhysBearingBlockEntity$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/util/$EntityDraggingInformation$Companion" {
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $EntityDraggingInformation$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDraggingInformation$Companion$Type = ($EntityDraggingInformation$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDraggingInformation$Companion_ = $EntityDraggingInformation$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/util/$DimensionIdProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DimensionIdProvider {

 "getDimensionId"(): string

(): string
}

export namespace $DimensionIdProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionIdProvider$Type = ($DimensionIdProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionIdProvider_ = $DimensionIdProvider$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$LoadedServerShip" {
import {$IShipActiveChunksSet, $IShipActiveChunksSet$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet"
import {$AABBic, $AABBic$Type} from "packages/org/joml/primitives/$AABBic"
import {$ServerShip, $ServerShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShip"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$ServerShipTransformProvider, $ServerShipTransformProvider$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShipTransformProvider"
import {$ChunkClaim, $ChunkClaim$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim"
import {$LoadedShip, $LoadedShip$Type} from "packages/org/valkyrienskies/core/api/ships/$LoadedShip"
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$ShipInertiaData, $ShipInertiaData$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipInertiaData"
import {$Matrix4dc, $Matrix4dc$Type} from "packages/org/joml/$Matrix4dc"

export interface $LoadedServerShip extends $LoadedShip, $ServerShip {

 "setAttachment"<T>(arg0: $Class$Type<(T)>, arg1: T): void
 "isOnPortalCoolDown"(): boolean
 "handleInsidePortal"(): void
 "decayPortalCoolDown"(): void
 "isStatic"(): boolean
 "getAttachment"<T>(arg0: $Class$Type<(T)>): T
 "setEnableKinematicVelocity"(arg0: boolean): void
 "setStatic"(arg0: boolean): void
 "getInertiaData"(): $ShipInertiaData
 "setTransformProvider"(arg0: $ServerShipTransformProvider$Type): void
 "getEnableKinematicVelocity"(): boolean
 "getTransformProvider"(): $ServerShipTransformProvider
 "getSlug"(): string
 "saveAttachment"<T>(arg0: $Class$Type<(T)>, arg1: T): void
 "setSlug"(arg0: string): void
 "getId"(): long
 "getVelocity"(): $Vector3dc
 "getShipTransform"(): $ShipTransform
 "getWorldToShip"(): $Matrix4dc
 "getShipToWorld"(): $Matrix4dc
 "getTransform"(): $ShipTransform
 "getShipActiveChunksSet"(): $IShipActiveChunksSet
 "getPrevTickTransform"(): $ShipTransform
 "getPrevTickShipTransform"(): $ShipTransform
 "getChunkClaimDimension"(): string
 "setChunkClaimDimension"(arg0: string): void
 "getShipVoxelAABB"(): $AABBic
 "getChunkClaim"(): $ChunkClaim
 "getWorldAABB"(): $AABBdc
 "getOmega"(): $Vector3dc
 "getActiveChunksSet"(): $IShipActiveChunksSet
 "getShipAABB"(): $AABBic
}

export namespace $LoadedServerShip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedServerShip$Type = ($LoadedServerShip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadedServerShip_ = $LoadedServerShip$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/mod_compat/create/blockentity/$IMixinMechanicalBearingTileEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinMechanicalBearingTileEntity {

 "isAssembleNextTick"(): boolean

(): boolean
}

export namespace $IMixinMechanicalBearingTileEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinMechanicalBearingTileEntity$Type = ($IMixinMechanicalBearingTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinMechanicalBearingTileEntity_ = $IMixinMechanicalBearingTileEntity$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/chunks/$BlockType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockType {

 "toInt"(): integer

(): integer
}

export namespace $BlockType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$Type = ($BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockType_ = $BlockType$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$WanderWandItem" {
import {$WanderWandItem$Companion, $WanderWandItem$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$WanderWandItem$Companion"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SelectedAreaToolkit, $SelectedAreaToolkit$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SelectedAreaToolkit"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$CWItem, $CWItem$Type} from "packages/org/valkyrienskies/clockwork/platform/$CWItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$WanderWandItem$Animation, $WanderWandItem$Animation$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$WanderWandItem$Animation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WanderWandItem extends $CWItem {
static readonly "Companion": $WanderWandItem$Companion
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "canAttackBlock"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "useOn"(context: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "verifyTagAfterLoad"(compoundTag: $CompoundTag$Type): void
public static "onAttack"(player: $Player$Type): boolean
public "setShouldRenderOutlines"(arg0: boolean): void
public "getShouldRenderOutlines"(): boolean
public "getDrawProgress"(): float
public "getFirstPos"(): $Vector3ic
public "getDumpProgress"(): float
public "getAnimationType"(): $WanderWandItem$Animation
public "setDumpProgress"(arg0: float): void
public "setFirstPos"(arg0: $Vector3ic$Type): void
public "setDrawProgress"(arg0: float): void
public "setAnimationType"(arg0: $WanderWandItem$Animation$Type): void
public "getSecondPos"(): $Vector3ic
public "setSecondPos"(arg0: $Vector3ic$Type): void
public "setSuccessProgress"(arg0: float): void
public "getSelectedArea"(): $SelectedAreaToolkit
public "getIdleProgress"(): float
public "getSuccessProgress"(): float
public "setIdleProgress"(arg0: float): void
set "shouldRenderOutlines"(value: boolean)
get "shouldRenderOutlines"(): boolean
get "drawProgress"(): float
get "firstPos"(): $Vector3ic
get "dumpProgress"(): float
get "animationType"(): $WanderWandItem$Animation
set "dumpProgress"(value: float)
set "firstPos"(value: $Vector3ic$Type)
set "drawProgress"(value: float)
set "animationType"(value: $WanderWandItem$Animation$Type)
get "secondPos"(): $Vector3ic
set "secondPos"(value: $Vector3ic$Type)
set "successProgress"(value: float)
get "selectedArea"(): $SelectedAreaToolkit
get "idleProgress"(): float
get "successProgress"(): float
set "idleProgress"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WanderWandItem$Type = ($WanderWandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WanderWandItem_ = $WanderWandItem$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/altmeter/$AltMeterBlock" {
import {$AltMeterBlockEntity, $AltMeterBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/altmeter/$AltMeterBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AltMeterBlock$Companion, $AltMeterBlock$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/altmeter/$AltMeterBlock$Companion"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AltMeterBlock extends $Block implements $IBE<($AltMeterBlockEntity)> {
static readonly "Companion": $AltMeterBlock$Companion
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "isSignalSource"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "getBlockEntityClass"(): $Class<($AltMeterBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($AltMeterBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($AltMeterBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $AltMeterBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($AltMeterBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($AltMeterBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltMeterBlock$Type = ($AltMeterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltMeterBlock_ = $AltMeterBlock$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$LoadedShip" {
import {$ShipTransform, $ShipTransform$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform"
import {$IShipActiveChunksSet, $IShipActiveChunksSet$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet"
import {$AABBic, $AABBic$Type} from "packages/org/joml/primitives/$AABBic"
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$Matrix4dc, $Matrix4dc$Type} from "packages/org/joml/$Matrix4dc"
import {$ChunkClaim, $ChunkClaim$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim"

export interface $LoadedShip extends $Ship {

 "getId"(): long
 "getVelocity"(): $Vector3dc
 "getShipTransform"(): $ShipTransform
 "getWorldToShip"(): $Matrix4dc
 "getShipToWorld"(): $Matrix4dc
 "getTransform"(): $ShipTransform
 "getShipActiveChunksSet"(): $IShipActiveChunksSet
 "getPrevTickTransform"(): $ShipTransform
 "getPrevTickShipTransform"(): $ShipTransform
 "getChunkClaimDimension"(): string
 "setChunkClaimDimension"(arg0: string): void
 "getShipVoxelAABB"(): $AABBic
 "getSlug"(): string
 "getChunkClaim"(): $ChunkClaim
 "getWorldAABB"(): $AABBdc
 "getOmega"(): $Vector3dc
 "getActiveChunksSet"(): $IShipActiveChunksSet
 "getShipAABB"(): $AABBic
}

export namespace $LoadedShip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedShip$Type = ($LoadedShip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadedShip_ = $LoadedShip$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/$ClientShipWorldCore" {
import {$SocketAddress, $SocketAddress$Type} from "packages/java/net/$SocketAddress"
import {$ShipWorldCore, $ShipWorldCore$Type} from "packages/org/valkyrienskies/core/apigame/world/$ShipWorldCore"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$BlockType, $BlockType$Type} from "packages/org/valkyrienskies/core/apigame/world/chunks/$BlockType"
import {$ClientShip, $ClientShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ClientShip"
import {$QueryableShipData, $QueryableShipData$Type} from "packages/org/valkyrienskies/core/api/ships/$QueryableShipData"
import {$ClientShipWorld, $ClientShipWorld$Type} from "packages/org/valkyrienskies/core/api/world/$ClientShipWorld"

export interface $ClientShipWorldCore extends $ShipWorldCore, $ClientShipWorld {

 "updateRenderTransforms"(arg0: double): void
 "destroyWorld"(): void
 "postTick"(): void
 "tickNetworking"(arg0: $SocketAddress$Type): void
 "isSyncedWithServer"(): boolean
 "onSetBlock"(arg0: integer, arg1: integer, arg2: integer, arg3: string, arg4: $BlockType$Type, arg5: $BlockType$Type, arg6: double, arg7: double): void
 "getShipObjectsIntersecting"(arg0: $AABBdc$Type): $List<($ClientShip)>
 "getQueryableShipData"(): $QueryableShipData<($ClientShip)>
 "getAllShips"(): $QueryableShipData<($ClientShip)>
 "getLoadedShips"(): $QueryableShipData<($ClientShip)>
 "isChunkInShipyard"(arg0: integer, arg1: integer, arg2: string): boolean
 "isBlockInShipyard"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
}

export namespace $ClientShipWorldCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientShipWorldCore$Type = ($ClientShipWorldCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientShipWorldCore_ = $ClientShipWorldCore$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$SequencedSeatBlockEntity, $SequencedSeatBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatBlockEntity"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HorizontalKineticBlock, $HorizontalKineticBlock$Type} from "packages/com/simibubi/create/content/kinetics/base/$HorizontalKineticBlock"
import {$SequencedSeatBlock$Companion, $SequencedSeatBlock$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$SequencedSeatBlock$Companion"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SequencedSeatBlock extends $HorizontalKineticBlock implements $IBE<($SequencedSeatBlockEntity)> {
static readonly "Companion": $SequencedSeatBlock$Companion
static readonly "HORIZONTAL_FACING": $Property<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "hasShaftTowards"(world: $LevelReader$Type, pos: $BlockPos$Type, state: $BlockState$Type, face: $Direction$Type): boolean
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getBlockEntityClass"(): $Class<($SequencedSeatBlockEntity)>
public "getRotationAxis"(state: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SequencedSeatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SequencedSeatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SequencedSeatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SequencedSeatBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($SequencedSeatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedSeatBlock$Type = ($SequencedSeatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SequencedSeatBlock_ = $SequencedSeatBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$WanderWandItem$Companion" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $WanderWandItem$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "onAttack"(player: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WanderWandItem$Companion$Type = ($WanderWandItem$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WanderWandItem$Companion_ = $WanderWandItem$Companion$Type;
}}
declare module "packages/org/valkyrienskies/core/util/datastructures/$IBlockPosSet" {
import {$IntTernaryConsumer, $IntTernaryConsumer$Type} from "packages/org/valkyrienskies/core/api/util/functions/$IntTernaryConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IntFunction, $IntFunction$Type} from "packages/java/util/function/$IntFunction"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Vector3ic, $Vector3ic$Type} from "packages/org/joml/$Vector3ic"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"

export interface $IBlockPosSet extends $Set<($Vector3ic)> {

 "add"(arg0: $Vector3ic$Type): boolean
 "add"(arg0: integer, arg1: integer, arg2: integer): boolean
 "remove"(arg0: any): boolean
 "remove"(arg0: $Vector3ic$Type): boolean
 "remove"(arg0: integer, arg1: integer, arg2: integer): boolean
 "clear"(): void
 "isEmpty"(): boolean
 "toArray"<T>(arg0: (T)[]): (T)[]
 "toArray"(): (any)[]
 "contains"(arg0: any): boolean
 "contains"(arg0: integer, arg1: integer, arg2: integer): boolean
 "contains"(arg0: $Vector3ic$Type): boolean
 "addAll"(arg0: $Collection$Type<(any)>): boolean
 "forEach"(arg0: $IntTernaryConsumer$Type): void
 "removeAll"(arg0: $Collection$Type<(any)>): boolean
 "retainAll"(arg0: $Collection$Type<(any)>): boolean
 "containsAll"(arg0: $Collection$Type<(any)>): boolean
 "canStore"(arg0: $Vector3ic$Type): boolean
 "canStore"(arg0: integer, arg1: integer, arg2: integer): boolean
 "forEachUnsafe"(arg0: $IntTernaryConsumer$Type): void
 "equals"(arg0: any): boolean
 "hashCode"(): integer
 "size"(): integer
 "iterator"(): $Iterator<($Vector3ic)>
 "spliterator"(): $Spliterator<($Vector3ic)>
 "toArray"<T>(arg0: $IntFunction$Type<((T)[])>): (T)[]
 "stream"(): $Stream<($Vector3ic)>
 "removeIf"(arg0: $Predicate$Type<(any)>): boolean
 "parallelStream"(): $Stream<($Vector3ic)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IBlockPosSet {
function copyOf<E>(arg0: $Collection$Type<(any)>): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type, arg7: $Vector3ic$Type, arg8: $Vector3ic$Type, arg9: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type, arg7: $Vector3ic$Type, arg8: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type, arg7: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type, arg3: $Vector3ic$Type, arg4: $Vector3ic$Type, arg5: $Vector3ic$Type, arg6: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(...arg0: ($Vector3ic$Type)[]): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type, arg2: $Vector3ic$Type): $Set<($Vector3ic)>
function of<E>(): $Set<($Vector3ic)>
function of<E>(arg0: $Vector3ic$Type, arg1: $Vector3ic$Type): $Set<($Vector3ic)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockPosSet$Type = ($IBlockPosSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBlockPosSet_ = $IBlockPosSet$Type;
}}
declare module "packages/org/valkyrienskies/core/api/world/$ClientShipWorld" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$ShipWorld, $ShipWorld$Type} from "packages/org/valkyrienskies/core/api/world/$ShipWorld"
import {$ClientShip, $ClientShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ClientShip"
import {$QueryableShipData, $QueryableShipData$Type} from "packages/org/valkyrienskies/core/api/ships/$QueryableShipData"

export interface $ClientShipWorld extends $ShipWorld {

 "getShipObjectsIntersecting"(arg0: $AABBdc$Type): $List<($ClientShip)>
 "getQueryableShipData"(): $QueryableShipData<($ClientShip)>
 "getAllShips"(): $QueryableShipData<($ClientShip)>
 "getLoadedShips"(): $QueryableShipData<($ClientShip)>
 "isChunkInShipyard"(arg0: integer, arg1: integer, arg2: string): boolean
 "isBlockInShipyard"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
}

export namespace $ClientShipWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientShipWorld$Type = ($ClientShipWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientShipWorld_ = $ClientShipWorld$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraint" {
import {$VSConstraintType, $VSConstraintType$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraintType"

export interface $VSConstraint {

 "getShipId1"(): long
 "getShipId0"(): long
 "getCompliance"(): double
 "getConstraintType"(): $VSConstraintType
}

export namespace $VSConstraint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSConstraint$Type = ($VSConstraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSConstraint_ = $VSConstraint$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/block/$TestFlapBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$WingBlock, $WingBlock$Type} from "packages/org/valkyrienskies/mod/common/block/$WingBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Wing, $Wing$Type} from "packages/org/valkyrienskies/core/api/ships/$Wing"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $TestFlapBlock extends $DirectionalBlock implements $WingBlock {
static readonly "INSTANCE": $TestFlapBlock
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getWing"(level: $Level$Type, pos: $BlockPos$Type, blockState: $BlockState$Type): $Wing
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestFlapBlock$Type = ($TestFlapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestFlapBlock_ = $TestFlapBlock$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/feature/ai/node_evaluator/$PathNavigationRegionAccessor" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $PathNavigationRegionAccessor {

 "getLevel"(): $Level

(): $Level
}

export namespace $PathNavigationRegionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathNavigationRegionAccessor$Type = ($PathNavigationRegionAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PathNavigationRegionAccessor_ = $PathNavigationRegionAccessor$Type;
}}
declare module "packages/org/valkyrienskies/eureka/block/$BallastBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BallastBlock extends $Block {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor()

public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BallastBlock$Type = ($BallastBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BallastBlock_ = $BallastBlock$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Approximate" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export interface $Approximate {

 "somebody"(arg0: $Collection$Type<(any)>): void

(arg0: $Collection$Type<(any)>): void
}

export namespace $Approximate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Approximate$Type = ($Approximate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Approximate_ = $Approximate$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/item/$ShipCreatorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ShipCreatorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type, scale: $DoubleSupplier$Type, minScaling: $DoubleSupplier$Type)

public "useOn"(ctx: $UseOnContext$Type): $InteractionResult
public "isFoil"(stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipCreatorItem$Type = ($ShipCreatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipCreatorItem_ = $ShipCreatorItem$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$InputKey$Companion" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$InputKey, $InputKey$Type} from "packages/org/valkyrienskies/clockwork/content/kinetics/sequenced_seat/$InputKey"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $InputKey$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "asInt"(keys: $Set$Type<(any)>): integer
public "fromInt"(keys: integer): $Set<($InputKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputKey$Companion$Type = ($InputKey$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputKey$Companion_ = $InputKey$Companion$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/$IPlayer" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$PlayerState, $PlayerState$Type} from "packages/org/valkyrienskies/core/apigame/world/$PlayerState"

export interface $IPlayer {

 "getPosition"(arg0: $Vector3d$Type): $Vector3d
 "getDimension"(): string
 "getCanModifyServerConfig"(): boolean
 "getUuid"(): $UUID
 "isAdmin"(): boolean
 "getPlayerState"(): $PlayerState
}

export namespace $IPlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayer$Type = ($IPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlayer_ = $IPlayer$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/properties/$ChunkClaim$Companion" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ChunkClaim$Companion {
static readonly "DIAMETER": integer


public "claimToLong"(arg0: integer, arg1: integer): long
public "getClaimZIndex"(arg0: integer): integer
public "getClaimXIndex"(arg0: integer): integer
public "getClaimThenToLong"(arg0: integer, arg1: integer): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkClaim$Companion$Type = ($ChunkClaim$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkClaim$Companion_ = $ChunkClaim$Companion$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Reject" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Reject {

 "ls"(): void

(): void
}

export namespace $Reject {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Reject$Type = ($Reject);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Reject_ = $Reject$Type;
}}
declare module "packages/org/valkyrienskies/core/api/world/$ServerShipWorld" {
import {$ServerShip, $ServerShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ServerShip"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$ShipWorld, $ShipWorld$Type} from "packages/org/valkyrienskies/core/api/world/$ShipWorld"
import {$QueryableShipData, $QueryableShipData$Type} from "packages/org/valkyrienskies/core/api/ships/$QueryableShipData"
import {$LoadedServerShip, $LoadedServerShip$Type} from "packages/org/valkyrienskies/core/api/ships/$LoadedServerShip"

export interface $ServerShipWorld extends $ShipWorld {

 "getShipObjectsIntersecting"(arg0: $AABBdc$Type): $List<($LoadedServerShip)>
 "getQueryableShipData"(): $QueryableShipData<($ServerShip)>
 "getAllShips"(): $QueryableShipData<($ServerShip)>
 "getLoadedShips"(): $QueryableShipData<($LoadedServerShip)>
 "isChunkInShipyard"(arg0: integer, arg1: integer, arg2: string): boolean
 "isBlockInShipyard"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
}

export namespace $ServerShipWorld {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerShipWorld$Type = ($ServerShipWorld);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerShipWorld_ = $ServerShipWorld$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/block/$TestSphereBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TestSphereBlock extends $Block {
static readonly "INSTANCE": $TestSphereBlock
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getShadeBrightness"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type): float
public "getVisualShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestSphereBlock$Type = ($TestSphereBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestSphereBlock_ = $TestSphereBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$SlickerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SlickerBlockEntity, $SlickerBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$SlickerBlockEntity"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SlickerBlock$Companion, $SlickerBlock$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$SlickerBlock$Companion"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$WrenchableDirectionalBlock, $WrenchableDirectionalBlock$Type} from "packages/com/simibubi/create/foundation/block/$WrenchableDirectionalBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $SlickerBlock extends $WrenchableDirectionalBlock implements $IBE<($SlickerBlockEntity)> {
static readonly "Companion": $SlickerBlock$Companion
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, blockIn: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "getBlockEntityClass"(): $Class<($SlickerBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($SlickerBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($SlickerBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $SlickerBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($SlickerBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($SlickerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlickerBlock$Type = ($SlickerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlickerBlock_ = $SlickerBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/bearing/$PhysBearingBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ContraptionController$LockedMode, $ContraptionController$LockedMode$Type} from "packages/org/valkyrienskies/clockwork/platform/api/$ContraptionController$LockedMode"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ContraptionController, $ContraptionController$Type} from "packages/org/valkyrienskies/clockwork/platform/api/$ContraptionController"
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$IBearingBlockEntity, $IBearingBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/bearing/$IBearingBlockEntity"
import {$ControlledContraptionEntity, $ControlledContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ControlledContraptionEntity"
import {$GeneratingKineticBlockEntity, $GeneratingKineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$GeneratingKineticBlockEntity"
import {$PhysBearingBlockEntity$Companion, $PhysBearingBlockEntity$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/bearing/$PhysBearingBlockEntity$Companion"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ScrollOptionBehaviour, $ScrollOptionBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue/$ScrollOptionBehaviour"
import {$ValueBoxTransform, $ValueBoxTransform$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$ValueBoxTransform"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$IDisplayAssemblyExceptions, $IDisplayAssemblyExceptions$Type} from "packages/com/simibubi/create/content/contraptions/$IDisplayAssemblyExceptions"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AssemblyException, $AssemblyException$Type} from "packages/com/simibubi/create/content/contraptions/$AssemblyException"

export class $PhysBearingBlockEntity extends $GeneratingKineticBlockEntity implements $IBearingBlockEntity, $IDisplayAssemblyExceptions, $ContraptionController {
static readonly "Companion": $PhysBearingBlockEntity$Companion
static readonly "NO_SHIPTRAPTION_ID": long
 "reActivateSource": boolean
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "remove"(): void
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "destroy"(): void
public "attach"(contraption: $ControlledContraptionEntity$Type): void
public "tick"(): void
public "isValid"(): boolean
public "isRunning"(): boolean
public "onSpeedChanged"(prevSpeed: float): void
public "disassemble"(): void
public "getInterpolatedAngle"(partialTicks: float): float
public "getOpen"(): boolean
public "getAngularSpeed"(): float
public "isWoodenTop"(): boolean
public "setAngle"(forcedAngle: float): void
public "isAttachedTo"(contraption: $AbstractContraptionEntity$Type): boolean
public "isNearInitialAngle"(): boolean
public "onStall"(): void
public "getBlockPosition"(): $BlockPos
public "getCoreAngle"(): float
public "getShouldRefresh"(): boolean
public "setOpening"(arg0: boolean): void
public "getWingAngle"(): float
public "setCoreAngle"(arg0: float): void
public "setShouldRefresh"(arg0: boolean): void
public "setWingAngle"(arg0: float): void
public "setMovementMode"(arg0: $ScrollOptionBehaviour$Type<($ContraptionController$LockedMode$Type)>): void
public "addToTooltip"(tooltip: $List$Type<(any)>, isPlayerSneaking: boolean): boolean
public "getLastAssemblyException"(): $AssemblyException
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "lazyTick"(): void
public "getAngle"(): float
public "getMovementMode"(): $ScrollOptionBehaviour<($ContraptionController$LockedMode)>
public "getOpeningProgress"(): float
public "setOpen"(arg0: boolean): void
public "setAssembleNextTick"(arg0: boolean): void
public "getAssembleNextTick"(): boolean
public "getPreviousCoreAngle"(): float
public "setPreviousCoreAngle"(arg0: float): void
public "isShipContraptionController"(): boolean
public "getInterpolatedCoreAngle"(partialTicks: float): float
public "getConnectedShip"(): $Ship
public "getClosing"(): boolean
public "setClosing"(arg0: boolean): void
public "getWingRotOffset"(): float
public "getOpening"(): boolean
public "getMovementModeSlot"(): $ValueBoxTransform
public "addExceptionToTooltip"(arg0: $List$Type<($Component$Type)>): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "valid"(): boolean
get "running"(): boolean
get "open"(): boolean
get "angularSpeed"(): float
get "woodenTop"(): boolean
set "angle"(value: float)
get "nearInitialAngle"(): boolean
get "blockPosition"(): $BlockPos
get "coreAngle"(): float
get "shouldRefresh"(): boolean
set "opening"(value: boolean)
get "wingAngle"(): float
set "coreAngle"(value: float)
set "shouldRefresh"(value: boolean)
set "wingAngle"(value: float)
set "movementMode"(value: $ScrollOptionBehaviour$Type<($ContraptionController$LockedMode$Type)>)
get "lastAssemblyException"(): $AssemblyException
get "angle"(): float
get "movementMode"(): $ScrollOptionBehaviour<($ContraptionController$LockedMode)>
get "openingProgress"(): float
set "open"(value: boolean)
set "assembleNextTick"(value: boolean)
get "assembleNextTick"(): boolean
get "previousCoreAngle"(): float
set "previousCoreAngle"(value: float)
get "shipContraptionController"(): boolean
get "connectedShip"(): $Ship
get "closing"(): boolean
set "closing"(value: boolean)
get "wingRotOffset"(): float
get "opening"(): boolean
get "movementModeSlot"(): $ValueBoxTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysBearingBlockEntity$Type = ($PhysBearingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysBearingBlockEntity_ = $PhysBearingBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/$IShipObjectWorldServerProvider" {
import {$IShipObjectWorldProvider, $IShipObjectWorldProvider$Type} from "packages/org/valkyrienskies/mod/common/$IShipObjectWorldProvider"
import {$ServerShipWorldCore, $ServerShipWorldCore$Type} from "packages/org/valkyrienskies/core/apigame/world/$ServerShipWorldCore"
import {$VSPipeline, $VSPipeline$Type} from "packages/org/valkyrienskies/core/apigame/world/$VSPipeline"

export interface $IShipObjectWorldServerProvider extends $IShipObjectWorldProvider {

 "getVsPipeline"(): $VSPipeline
 "getShipObjectWorld"(): $ServerShipWorldCore
}

export namespace $IShipObjectWorldServerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShipObjectWorldServerProvider$Type = ($IShipObjectWorldServerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShipObjectWorldServerProvider_ = $IShipObjectWorldServerProvider$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlockEntity" {
import {$PhysicsInfuserBlockEntity$Companion, $PhysicsInfuserBlockEntity$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlockEntity$Companion"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$SelectedAreaToolkit, $SelectedAreaToolkit$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SelectedAreaToolkit"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Ship, $Ship$Type} from "packages/org/valkyrienskies/core/api/ships/$Ship"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$PhysicsInfuserBlockEntity$Animation, $PhysicsInfuserBlockEntity$Animation$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlockEntity$Animation"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export class $PhysicsInfuserBlockEntity extends $SmartBlockEntity implements $WorldlyContainer {
static readonly "Companion": $PhysicsInfuserBlockEntity$Companion
static readonly "ASSEMBLY_TIME": integer
static readonly "DISASSEMBLY_TIME": integer
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "initialize"(center: $Vec3$Type, scanRadius: float, scanComputeDuration: integer): void
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "tick"(): void
public "setChanged"(): void
public "disassemble"(): void
public "assemble"(): void
public "getSlotsForFace"(side: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(index: integer, itemStack: $ItemStack$Type, direction: $Direction$Type): boolean
public "canTakeItemThroughFace"(index: integer, stack: $ItemStack$Type, direction: $Direction$Type): boolean
public "getInventory"(): $NonNullList<($ItemStack)>
public "removeItem"(slot: integer, amount: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setItem"(slot: integer, stack: $ItemStack$Type): void
public "setInventory"(arg0: $NonNullList$Type<($ItemStack$Type)>): void
public "getCoreAngle"(): float
public "setCoreAngle"(arg0: float): void
public "setOnCooldown"(arg0: boolean): void
public "getPulseRange"(): double
public "getCoreOffset"(partialTicks: float): float
public "setAssembling"(arg0: boolean): void
public "computeRadius"(start: long, duration: float): float
public "setInitPlayed"(arg0: boolean): void
public "setAssembled"(arg0: boolean): void
public "getInitPlayed"(): boolean
public "setUseCooldown"(arg0: integer): void
public "getUseCooldown"(): integer
public "getStoredClusters"(): $SelectedAreaToolkit
public "setStoredClusters"(arg0: $SelectedAreaToolkit$Type): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(slot: integer): $ItemStack
public "getItem"(slot: integer): $ItemStack
public "stillValid"(player: $Player$Type): boolean
public "addBehaviours"(behaviours: $List$Type<(any)>): void
public "setDisassembling"(arg0: boolean): void
public "getPreviousCoreAngle"(): float
public "setPreviousCoreAngle"(arg0: float): void
public "getInterpolatedCoreAngle"(partialTicks: float): float
public "setSkippingAssembly"(arg0: boolean): void
public "setAssemblyProgress"(arg0: $LerpedFloat$Type): void
public "getAssemblyProgress"(): $LerpedFloat
public "setShouldEjectDesignator"(arg0: boolean): void
public "getShouldEjectDesignator"(): boolean
public "getSkippingAssembly"(): boolean
public "setDisassemblyProgress"(arg0: $LerpedFloat$Type): void
public "getDisassemblyProgress"(): $LerpedFloat
public "getScanGrowthDuration"(): integer
public "startAnimation"(animation: $PhysicsInfuserBlockEntity$Animation$Type): void
public "getConnectedShip"(): $Ship
public "getAssembling"(): boolean
public "skipAssembly"(): void
public "startAssembly"(): void
public "getOnCooldown"(): boolean
public "getDisassembling"(): boolean
public "isAssembled"(): boolean
public "startDisassembly"(): void
public "getAnimationType"(): $PhysicsInfuserBlockEntity$Animation
public "setAnimationType"(arg0: $PhysicsInfuserBlockEntity$Animation$Type): void
public "getIdleProgress"(): $LerpedFloat
public "setIdleProgress"(arg0: $LerpedFloat$Type): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "isMutable"(): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getStackInSlot"(slot: integer): $ItemStack
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "getSlots"(): integer
public "countItem"(arg0: $Item$Type): integer
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getHeight"(): integer
public "clear"(): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getWidth"(): integer
public "getSlotLimit"(slot: integer): integer
public "setChanged"(): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "clear"(ingredient: $Ingredient$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "inventory"(): $NonNullList<($ItemStack)>
get "empty"(): boolean
set "inventory"(value: $NonNullList$Type<($ItemStack$Type)>)
get "coreAngle"(): float
set "coreAngle"(value: float)
set "onCooldown"(value: boolean)
get "pulseRange"(): double
set "assembling"(value: boolean)
set "initPlayed"(value: boolean)
set "assembled"(value: boolean)
get "initPlayed"(): boolean
set "useCooldown"(value: integer)
get "useCooldown"(): integer
get "storedClusters"(): $SelectedAreaToolkit
set "storedClusters"(value: $SelectedAreaToolkit$Type)
get "containerSize"(): integer
set "disassembling"(value: boolean)
get "previousCoreAngle"(): float
set "previousCoreAngle"(value: float)
set "skippingAssembly"(value: boolean)
set "assemblyProgress"(value: $LerpedFloat$Type)
get "assemblyProgress"(): $LerpedFloat
set "shouldEjectDesignator"(value: boolean)
get "shouldEjectDesignator"(): boolean
get "skippingAssembly"(): boolean
set "disassemblyProgress"(value: $LerpedFloat$Type)
get "disassemblyProgress"(): $LerpedFloat
get "scanGrowthDuration"(): integer
get "connectedShip"(): $Ship
get "assembling"(): boolean
get "onCooldown"(): boolean
get "disassembling"(): boolean
get "assembled"(): boolean
get "animationType"(): $PhysicsInfuserBlockEntity$Animation
set "animationType"(value: $PhysicsInfuserBlockEntity$Animation$Type)
get "idleProgress"(): $LerpedFloat
set "idleProgress"(value: $LerpedFloat$Type)
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsInfuserBlockEntity$Type = ($PhysicsInfuserBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsInfuserBlockEntity_ = $PhysicsInfuserBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/world/chunks/$ChunkWatchTasks" {
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$ChunkUnwatchTask, $ChunkUnwatchTask$Type} from "packages/org/valkyrienskies/core/apigame/world/chunks/$ChunkUnwatchTask"
import {$ChunkWatchTask, $ChunkWatchTask$Type} from "packages/org/valkyrienskies/core/apigame/world/chunks/$ChunkWatchTask"

export interface $ChunkWatchTasks {

 "getWatchTasks"(): $SortedSet<($ChunkWatchTask)>
 "getUnwatchTasks"(): $SortedSet<($ChunkUnwatchTask)>
}

export namespace $ChunkWatchTasks {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkWatchTasks$Type = ($ChunkWatchTasks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkWatchTasks_ = $ChunkWatchTasks$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/block/$TestWingBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$WingBlock, $WingBlock$Type} from "packages/org/valkyrienskies/mod/common/block/$WingBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Wing, $Wing$Type} from "packages/org/valkyrienskies/core/api/ships/$Wing"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $TestWingBlock extends $DirectionalBlock implements $WingBlock {
static readonly "INSTANCE": $TestWingBlock
static readonly "FACING": $DirectionProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation


public "getWing"(level: $Level$Type, pos: $BlockPos$Type, blockState: $BlockState$Type): $Wing
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "getShape"(state: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TestWingBlock$Type = ($TestWingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TestWingBlock_ = $TestWingBlock$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixin/accessors/server/level/$ChunkMapAccessor" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$ClientboundLevelChunkWithLightPacket, $ClientboundLevelChunkWithLightPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundLevelChunkWithLightPacket"
import {$PoiManager, $PoiManager$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$LongSet, $LongSet$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongSet"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ChunkHolder, $ChunkHolder$Type} from "packages/net/minecraft/server/level/$ChunkHolder"
import {$ChunkMap$DistanceManager, $ChunkMap$DistanceManager$Type} from "packages/net/minecraft/server/level/$ChunkMap$DistanceManager"
import {$ChunkStatus$ChunkType, $ChunkStatus$ChunkType$Type} from "packages/net/minecraft/world/level/chunk/$ChunkStatus$ChunkType"
import {$MutableObject, $MutableObject$Type} from "packages/org/apache/commons/lang3/mutable/$MutableObject"

export interface $ChunkMapAccessor {

 "callGetChunks"(): $Iterable<($ChunkHolder)>
 "callGetVisibleChunkIfPresent"(arg0: long): $ChunkHolder
 "callUpdateChunkTracking"(arg0: $ServerPlayer$Type, arg1: $ChunkPos$Type, arg2: $MutableObject$Type<($ClientboundLevelChunkWithLightPacket$Type)>, arg3: boolean, arg4: boolean): void
 "getPoiManager"(): $PoiManager
 "callMarkPosition"(arg0: $ChunkPos$Type, arg1: $ChunkStatus$ChunkType$Type): byte
 "callSave"(arg0: $ChunkAccess$Type): boolean
 "getDistanceManager"(): $ChunkMap$DistanceManager
 "callProcessUnloads"(arg0: $BooleanSupplier$Type): void
 "getToDrop"(): $LongSet
}

export namespace $ChunkMapAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkMapAccessor$Type = ($ChunkMapAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkMapAccessor_ = $ChunkMapAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/platform/$CWItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CWItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CWItem$Type = ($CWItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CWItem_ = $CWItem$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PhysicsInfuserBlockEntity, $PhysicsInfuserBlockEntity$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlockEntity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PhysicsInfuserBlock$Companion, $PhysicsInfuserBlock$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/infuser/$PhysicsInfuserBlock$Companion"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $PhysicsInfuserBlock extends $Block implements $IBE<($PhysicsInfuserBlockEntity)> {
static readonly "Companion": $PhysicsInfuserBlock$Companion
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "onPlace"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, moved: boolean): void
public "use"(state: $BlockState$Type, worldIn: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, ctx: $CollisionContext$Type): $VoxelShape
public "getBlockEntityClass"(): $Class<($PhysicsInfuserBlockEntity)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($PhysicsInfuserBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($PhysicsInfuserBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PhysicsInfuserBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($PhysicsInfuserBlockEntity)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($PhysicsInfuserBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsInfuserBlock$Type = ($PhysicsInfuserBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsInfuserBlock_ = $PhysicsInfuserBlock$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/mod_compat/create/$IMixinControlledContraptionEntity" {
import {$IControlContraption, $IControlContraption$Type} from "packages/com/simibubi/create/content/contraptions/$IControlContraption"

export interface $IMixinControlledContraptionEntity {

 "grabController"(): $IControlContraption

(): $IControlContraption
}

export namespace $IMixinControlledContraptionEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinControlledContraptionEntity$Type = ($IMixinControlledContraptionEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMixinControlledContraptionEntity_ = $IMixinControlledContraptionEntity$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/$GameServer" {
import {$IShipActiveChunksSet, $IShipActiveChunksSet$Type} from "packages/org/valkyrienskies/core/api/ships/properties/$IShipActiveChunksSet"

export interface $GameServer {

 "moveTerrainAcrossDimensions"(arg0: $IShipActiveChunksSet$Type, arg1: string, arg2: string): void

(arg0: $IShipActiveChunksSet$Type, arg1: string, arg2: string): void
}

export namespace $GameServer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameServer$Type = ($GameServer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameServer_ = $GameServer$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/util/$EntityDraggingInformation" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$EntityDraggingInformation$Companion, $EntityDraggingInformation$Companion$Type} from "packages/org/valkyrienskies/mod/common/util/$EntityDraggingInformation$Companion"

export class $EntityDraggingInformation {
static readonly "Companion": $EntityDraggingInformation$Companion

constructor()

public "setLastShipStoodOn"(value: long): void
public "getLastShipStoodOn"(): long
public "getAddedMovementLastTick"(): $Vector3dc
public "getRestoreCachedLastPosition"(): boolean
public "setCachedLastPosition"(arg0: $Vector3dc$Type): void
public "getCachedLastPosition"(): $Vector3dc
public "setRestoreCachedLastPosition"(arg0: boolean): void
public "isEntityBeingDraggedByAShip"(): boolean
public "setAddedMovementLastTick"(arg0: $Vector3dc$Type): void
public "setAddedYawRotLastTick"(arg0: double): void
public "setTicksSinceStoodOnShip"(arg0: integer): void
public "getTicksSinceStoodOnShip"(): integer
public "getAddedYawRotLastTick"(): double
public "setMountedToEntity"(arg0: boolean): void
public "getMountedToEntity"(): boolean
set "lastShipStoodOn"(value: long)
get "lastShipStoodOn"(): long
get "addedMovementLastTick"(): $Vector3dc
get "restoreCachedLastPosition"(): boolean
set "cachedLastPosition"(value: $Vector3dc$Type)
get "cachedLastPosition"(): $Vector3dc
set "restoreCachedLastPosition"(value: boolean)
get "entityBeingDraggedByAShip"(): boolean
set "addedMovementLastTick"(value: $Vector3dc$Type)
set "addedYawRotLastTick"(value: double)
set "ticksSinceStoodOnShip"(value: integer)
get "ticksSinceStoodOnShip"(): integer
get "addedYawRotLastTick"(): double
set "mountedToEntity"(value: boolean)
get "mountedToEntity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDraggingInformation$Type = ($EntityDraggingInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDraggingInformation_ = $EntityDraggingInformation$Type;
}}
declare module "packages/org/valkyrienskies/core/apigame/constraints/$VSAttachmentConstraint" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$VSConstraintType, $VSConstraintType$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSConstraintType"
import {$VSForceConstraint, $VSForceConstraint$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSForceConstraint"

export class $VSAttachmentConstraint implements $VSForceConstraint {

constructor(shipId0: long, shipId1: long, compliance: double, localPos0: $Vector3dc$Type, localPos1: $Vector3dc$Type, maxForce: double, fixedDistance: double)

public "equals"(other: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "copy"(shipId0: long, shipId1: long, compliance: double, localPos0: $Vector3dc$Type, localPos1: $Vector3dc$Type, maxForce: double, fixedDistance: double): $VSAttachmentConstraint
public "component2"(): long
public "component4"(): $Vector3dc
public "component5"(): $Vector3dc
public "component1"(): long
public "component3"(): double
public "component6"(): double
public "getShipId1"(): long
public "getShipId0"(): long
public "getMaxForce"(): double
public "getCompliance"(): double
public "getFixedDistance"(): double
public "getLocalPos0"(): $Vector3dc
public "getConstraintType"(): $VSConstraintType
public "getLocalPos1"(): $Vector3dc
public "component7"(): double
public "scaleLocalPositions"(scale0: double, scale1: double): $VSForceConstraint
public "offsetLocalPositions"(offset0: $Vector3dc$Type, offset1: $Vector3dc$Type): $VSAttachmentConstraint
get "shipId1"(): long
get "shipId0"(): long
get "maxForce"(): double
get "compliance"(): double
get "fixedDistance"(): double
get "localPos0"(): $Vector3dc
get "constraintType"(): $VSConstraintType
get "localPos1"(): $Vector3dc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VSAttachmentConstraint$Type = ($VSAttachmentConstraint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VSAttachmentConstraint_ = $VSAttachmentConstraint$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/code/$Training" {
import {$AbstractContraptionEntity$ContraptionRotationState, $AbstractContraptionEntity$ContraptionRotationState$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity$ContraptionRotationState"

export interface $Training {

 "birds"(): boolean
 "somebody"(): $AbstractContraptionEntity$ContraptionRotationState
 "somebody"(arg0: long): void
 "scores"(): void
}

export namespace $Training {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Training$Type = ($Training);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Training_ = $Training$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$GravitronState$Companion" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GravitronState, $GravitronState$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$GravitronState"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $GravitronState$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "getState"(player: $Player$Type): $GravitronState
public "leftClickItem"(player: $Player$Type, state: $GravitronState$Type): boolean
public "getNeedRefresh"(player: $Player$Type): boolean
public "getDialAngle"(player: $Player$Type): float
public "getPrevDialAngle"(player: $Player$Type): float
public "mapValueToAngle"(value: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravitronState$Companion$Type = ($GravitronState$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GravitronState$Companion_ = $GravitronState$Companion$Type;
}}
declare module "packages/org/valkyrienskies/eureka/block/$ShipHelmBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$WoodType, $WoodType$Type} from "packages/org/valkyrienskies/eureka/block/$WoodType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$DirectionalShape, $DirectionalShape$Type} from "packages/org/valkyrienskies/eureka/util/$DirectionalShape"
import {$RotShape, $RotShape$Type} from "packages/org/valkyrienskies/eureka/util/$RotShape"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ShipHelmBlock extends $BaseEntityBlock {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type, woodType: $WoodType$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getWoodType"(): $WoodType
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "isPathfindable"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, pathComputationType: $PathComputationType$Type): boolean
public "useShapeForLightOcclusion"(blockState: $BlockState$Type): boolean
public "getRenderShape"(blockState: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, blockHitResult: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(blockPos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "getHELM_BASE"(): $RotShape
public "getHELM_POLE"(): $RotShape
public "getHELM_SHAPE"(): $DirectionalShape
get "woodType"(): $WoodType
get "hELM_BASE"(): $RotShape
get "hELM_POLE"(): $RotShape
get "hELM_SHAPE"(): $DirectionalShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipHelmBlock$Type = ($ShipHelmBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipHelmBlock_ = $ShipHelmBlock$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/item/$PhysicsEntityCreatorItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PhysicsEntityCreatorItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "useOn"(ctx: $UseOnContext$Type): $InteractionResult
public "isFoil"(stack: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PhysicsEntityCreatorItem$Type = ($PhysicsEntityCreatorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PhysicsEntityCreatorItem_ = $PhysicsEntityCreatorItem$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/properties/$ShipTransform" {
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$Quaterniondc, $Quaterniondc$Type} from "packages/org/joml/$Quaterniondc"
import {$AABBdc, $AABBdc$Type} from "packages/org/joml/primitives/$AABBdc"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$Matrix4dc, $Matrix4dc$Type} from "packages/org/joml/$Matrix4dc"

export interface $ShipTransform {

 "getShipCoordinatesToWorldCoordinatesRotation"(): $Quaterniondc
 "getWorldToShip"(): $Matrix4dc
 "transformDirectionNoScalingFromShipToWorld"(arg0: $Vector3dc$Type, arg1: $Vector3d$Type): $Vector3d
 "transformDirectionNoScalingFromWorldToShip"(arg0: $Vector3dc$Type, arg1: $Vector3d$Type): $Vector3d
 "getShipCoordinatesToWorldCoordinatesScaling"(): $Vector3dc
 "getPositionInWorld"(): $Vector3dc
 "getShipPositionInShipCoordinates"(): $Vector3dc
 "getShipToWorldRotation"(): $Quaterniondc
 "getShipToWorld"(): $Matrix4dc
 "getWorldToShipMatrix"(): $Matrix4dc
 "getShipToWorldMatrix"(): $Matrix4dc
 "getShipToWorldScaling"(): $Vector3dc
 "getShipPositionInWorldCoordinates"(): $Vector3dc
 "getPositionInShip"(): $Vector3dc
 "createEmptyAABB"(): $AABBdc
}

export namespace $ShipTransform {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipTransform$Type = ($ShipTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipTransform_ = $ShipTransform$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$CreativeGravitronItem" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CWItem, $CWItem$Type} from "packages/org/valkyrienskies/clockwork/platform/$CWItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CustomArmPoseItem, $CustomArmPoseItem$Type} from "packages/com/simibubi/create/foundation/item/$CustomArmPoseItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$CreativeGravitronItem$Companion, $CreativeGravitronItem$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/gravitron/$CreativeGravitronItem$Companion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CreativeGravitronItem extends $CWItem implements $CustomArmPoseItem {
static readonly "Companion": $CreativeGravitronItem$Companion
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer
 "descriptionId": string
 "foodProperties": $FoodProperties
readonly "canRepair": boolean
 "renderProperties": any
 "moonlight$clientAnimationProvider": any

constructor(properties: $Item$Properties$Type)

public "canAttackBlock"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "getArmPose"(stack: $ItemStack$Type, player: $AbstractClientPlayer$Type, hand: $InteractionHand$Type): $HumanoidModel$ArmPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeGravitronItem$Type = ($CreativeGravitronItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeGravitronItem_ = $CreativeGravitronItem$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/flap/$FlapBearingBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AbstractContraptionEntity, $AbstractContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$AbstractContraptionEntity"
import {$IBearingBlockEntity, $IBearingBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/bearing/$IBearingBlockEntity"
import {$ControlledContraptionEntity, $ControlledContraptionEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ControlledContraptionEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$KineticBlockEntity, $KineticBlockEntity$Type} from "packages/com/simibubi/create/content/kinetics/base/$KineticBlockEntity"
import {$ValueBoxTransform, $ValueBoxTransform$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$ValueBoxTransform"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FlapBearingBlockEntityAccessor, $FlapBearingBlockEntityAccessor$Type} from "packages/io/github/xiewuzhiying/vs_addition/mixin/vs_clockwork/flap_bearing/$FlapBearingBlockEntityAccessor"
import {$SequencedGearshiftBlockEntity$SequenceContext, $SequencedGearshiftBlockEntity$SequenceContext$Type} from "packages/com/simibubi/create/content/kinetics/transmission/sequencer/$SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FlapBearingBlockEntity extends $KineticBlockEntity implements $IBearingBlockEntity, $FlapBearingBlockEntityAccessor {
 "network": long
 "source": $BlockPos
 "networkDirty": boolean
 "updateSpeed": boolean
 "preventSpeedUpdate": integer
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "remove"(): void
public "write"(compound: $CompoundTag$Type, clientPacket: boolean): void
public "attach"(contraption: $ControlledContraptionEntity$Type): void
public "tick"(): void
public "isValid"(): boolean
public "isRunning"(): boolean
public "onSpeedChanged"(prevSpeed: float): void
public "disassemble"(): void
public "assemble"(): void
public "getInterpolatedAngle"(partialTicks: float): float
public "getAngularSpeed"(): float
public "isWoodenTop"(): boolean
public "setAngle"(forcedAngle: float): void
public "isAttachedTo"(contraption: $AbstractContraptionEntity$Type): boolean
public "onStall"(): void
public "getBlockPosition"(): $BlockPos
public "isFlap"(): boolean
public "setRedstoneSideTwo"(arg0: boolean): void
public "setRedstoneSideOne"(arg0: boolean): void
public "getRedstoneSideTwo"(): boolean
public "getFlapSpeed"(): float
public "getRedstoneSideOne"(): boolean
public "setSignalNegative"(power: integer): void
public "setSignalPositive"(power: integer): void
public "addBehaviours"(behaviours: $List$Type<(any)>): void
public "lazyTick"(): void
public "handler$geg000$vs_addition$sendData"(ci: $CallbackInfo$Type): void
public "handler$geg000$vs_addition$lazyTick"(ci: $CallbackInfo$Type): void
public "setAssembleNextTick"(arg0: boolean): void
public "getAssembleNextTick"(): boolean
public "getMovementModeSlot"(): $ValueBoxTransform
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "valid"(): boolean
get "running"(): boolean
get "angularSpeed"(): float
get "woodenTop"(): boolean
set "angle"(value: float)
get "blockPosition"(): $BlockPos
get "flap"(): boolean
set "redstoneSideTwo"(value: boolean)
set "redstoneSideOne"(value: boolean)
get "redstoneSideTwo"(): boolean
get "flapSpeed"(): float
get "redstoneSideOne"(): boolean
set "signalNegative"(value: integer)
set "signalPositive"(value: integer)
set "assembleNextTick"(value: boolean)
get "assembleNextTick"(): boolean
get "movementModeSlot"(): $ValueBoxTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlapBearingBlockEntity$Type = ($FlapBearingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlapBearingBlockEntity_ = $FlapBearingBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$ControlledContraptionEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ControlledContraptionEntityAccessor {

 "somebody"(): float

(): float
}

export namespace $ControlledContraptionEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlledContraptionEntityAccessor$Type = ($ControlledContraptionEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlledContraptionEntityAccessor_ = $ControlledContraptionEntityAccessor$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$SlickerBlockEntity" {
import {$SlickerBlockEntity$Companion, $SlickerBlockEntity$Companion$Type} from "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$SlickerBlockEntity$Companion"
import {$VSAttachmentConstraint, $VSAttachmentConstraint$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSAttachmentConstraint"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$VSFixedOrientationConstraint, $VSFixedOrientationConstraint$Type} from "packages/org/valkyrienskies/core/apigame/constraints/$VSFixedOrientationConstraint"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SlickerBlockEntity extends $SmartBlockEntity {
static readonly "Companion": $SlickerBlockEntity$Companion
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "initialize"(): void
public "destroy"(): void
public "tick"(): void
public "getDistance"(): double
public "playSound"(attach: boolean): void
public "isAlreadyPowered"(reset: boolean): boolean
public "setAttachedShipId"(arg0: long): void
public "getAttachedShipId"(): long
public "isAttachedToShip"(): boolean
public "getWaitForNoPower"(): boolean
public "getPiston"(): $LerpedFloat
public "getShipStuck"(): boolean
public "setWaitForNoPower"(arg0: boolean): void
public "setPiston"(arg0: $LerpedFloat$Type): void
public "setUpdate"(arg0: boolean): void
public "setShipStuck"(arg0: boolean): void
public "setDistance"(arg0: double): void
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "getUpdate"(): boolean
public "getOrientationConstraintData"(): $VSFixedOrientationConstraint
public "getAttachmentConstraintData"(): $VSAttachmentConstraint
public "setAttachmentConstraintId"(arg0: integer): void
public "setOrientationConstraintId"(arg0: integer): void
public "setOrientationConstraintData"(arg0: $VSFixedOrientationConstraint$Type): void
public "getOrientationConstraintId"(): integer
public "setAttachmentConstraintData"(arg0: $VSAttachmentConstraint$Type): void
public "isBlockStateExtended"(): boolean
public "getAttachmentConstraintId"(): integer
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "distance"(): double
set "attachedShipId"(value: long)
get "attachedShipId"(): long
get "attachedToShip"(): boolean
get "waitForNoPower"(): boolean
get "piston"(): $LerpedFloat
get "shipStuck"(): boolean
set "waitForNoPower"(value: boolean)
set "piston"(value: $LerpedFloat$Type)
set "update"(value: boolean)
set "shipStuck"(value: boolean)
set "distance"(value: double)
get "update"(): boolean
get "orientationConstraintData"(): $VSFixedOrientationConstraint
get "attachmentConstraintData"(): $VSAttachmentConstraint
set "attachmentConstraintId"(value: integer)
set "orientationConstraintId"(value: integer)
set "orientationConstraintData"(value: $VSFixedOrientationConstraint$Type)
get "orientationConstraintId"(): integer
set "attachmentConstraintData"(value: $VSAttachmentConstraint$Type)
get "blockStateExtended"(): boolean
get "attachmentConstraintId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlickerBlockEntity$Type = ($SlickerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlickerBlockEntity_ = $SlickerBlockEntity$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/slicker/$SlickerBlock$Companion" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $SlickerBlock$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "getEXTENDED"(): $BooleanProperty
public "getPOWERED"(): $BooleanProperty
get "eXTENDED"(): $BooleanProperty
get "pOWERED"(): $BooleanProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlickerBlock$Companion$Type = ($SlickerBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlickerBlock$Companion_ = $SlickerBlock$Companion$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/contraptions/phys/altmeter/$AltMeterBlock$Companion" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"

export class $AltMeterBlock$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "getPOWERED"(): $BooleanProperty
get "pOWERED"(): $BooleanProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AltMeterBlock$Companion$Type = ($AltMeterBlock$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AltMeterBlock$Companion_ = $AltMeterBlock$Companion$Type;
}}
declare module "packages/org/valkyrienskies/core/api/ships/$ShipForcesInducer" {
import {$PhysShip, $PhysShip$Type} from "packages/org/valkyrienskies/core/api/ships/$PhysShip"
import {$Function1, $Function1$Type} from "packages/kotlin/jvm/functions/$Function1"

export interface $ShipForcesInducer {

 "applyForcesAndLookupPhysShips"(arg0: $PhysShip$Type, arg1: $Function1$Type<(any), (any)>): void
 "applyForces"(arg0: $PhysShip$Type): void

(arg0: $PhysShip$Type, arg1: $Function1$Type<(any), (any)>): void
}

export namespace $ShipForcesInducer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipForcesInducer$Type = ($ShipForcesInducer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipForcesInducer_ = $ShipForcesInducer$Type;
}}
declare module "packages/org/valkyrienskies/mod/common/entity/$ShipMountedToDataProvider" {
import {$ShipMountedToData, $ShipMountedToData$Type} from "packages/org/valkyrienskies/mod/common/entity/$ShipMountedToData"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ShipMountedToDataProvider {

 "provideShipMountedToData"(arg0: $Entity$Type, arg1: float): $ShipMountedToData

(arg0: $Entity$Type, arg1: float): $ShipMountedToData
}

export namespace $ShipMountedToDataProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShipMountedToDataProvider$Type = ($ShipMountedToDataProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShipMountedToDataProvider_ = $ShipMountedToDataProvider$Type;
}}
declare module "packages/org/valkyrienskies/mod/mixinducks/client/$MinecraftDuck" {
import {$ClientShipWorldCore, $ClientShipWorldCore$Type} from "packages/org/valkyrienskies/core/apigame/world/$ClientShipWorldCore"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$IShipObjectWorldClientProvider, $IShipObjectWorldClientProvider$Type} from "packages/org/valkyrienskies/mod/common/$IShipObjectWorldClientProvider"

export interface $MinecraftDuck extends $IShipObjectWorldClientProvider {

 "vs$getOriginalCrosshairTarget"(): $HitResult
 "vs$setOriginalCrosshairTarget"(arg0: $HitResult$Type): void
 "getShipObjectWorld"(): $ClientShipWorldCore
}

export namespace $MinecraftDuck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftDuck$Type = ($MinecraftDuck);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftDuck_ = $MinecraftDuck$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SelectedAreaToolkit$Companion" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DenseBlockPosSet, $DenseBlockPosSet$Type} from "packages/org/valkyrienskies/core/util/datastructures/$DenseBlockPosSet"
import {$SerializableSelectedAreaToolkit, $SerializableSelectedAreaToolkit$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SerializableSelectedAreaToolkit"
import {$SelectedAreaToolkit, $SelectedAreaToolkit$Type} from "packages/org/valkyrienskies/clockwork/content/curiosities/tools/wanderwand/$SelectedAreaToolkit"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DefaultConstructorMarker, $DefaultConstructorMarker$Type} from "packages/kotlin/jvm/internal/$DefaultConstructorMarker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SelectedAreaToolkit$Companion {

constructor($constructor_marker: $DefaultConstructorMarker$Type)

public "toSerialize"(tk: $SelectedAreaToolkit$Type): $SerializableSelectedAreaToolkit
public "toDeserialize"(stk: $SerializableSelectedAreaToolkit$Type): $SelectedAreaToolkit
public "blocksFromCluster"(cluster: $Set$Type<(any)>, level: $Level$Type): $Set<($BlockPos)>
public "blocksFromCluster"(cluster: $Set$Type<(any)>): $Set<($BlockPos)>
public "denseBlocksFromCluster"(cluster: $Set$Type<(any)>): $DenseBlockPosSet
public "denseBlocksFromCluster"(cluster: $Set$Type<(any)>, level: $Level$Type): $DenseBlockPosSet
public "entitiesFromCluster"(cluster: $Set$Type<(any)>, level: $ServerLevel$Type): $Set<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectedAreaToolkit$Companion$Type = ($SelectedAreaToolkit$Companion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SelectedAreaToolkit$Companion_ = $SelectedAreaToolkit$Companion$Type;
}}
declare module "packages/org/valkyrienskies/mod/client/$IVSCamera" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Vector3dc, $Vector3dc$Type} from "packages/org/joml/$Vector3dc"
import {$ClientShip, $ClientShip$Type} from "packages/org/valkyrienskies/core/api/ships/$ClientShip"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IVSCamera {

 "setupWithShipMounted"(arg0: $BlockGetter$Type, arg1: $Entity$Type, arg2: boolean, arg3: boolean, arg4: float, arg5: $ClientShip$Type, arg6: $Vector3dc$Type): void

(arg0: $BlockGetter$Type, arg1: $Entity$Type, arg2: boolean, arg3: boolean, arg4: float, arg5: $ClientShip$Type, arg6: $Vector3dc$Type): void
}

export namespace $IVSCamera {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVSCamera$Type = ($IVSCamera);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVSCamera_ = $IVSCamera$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/physicalities/wing/$FlapBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConnectedWingAlike$Companion, $ConnectedWingAlike$Companion$Type} from "packages/org/valkyrienskies/clockwork/util/blocktype/$ConnectedWingAlike$Companion"
import {$WingBlock, $WingBlock$Type} from "packages/org/valkyrienskies/mod/common/block/$WingBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Wing, $Wing$Type} from "packages/org/valkyrienskies/core/api/ships/$Wing"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DyedWing, $DyedWing$Type} from "packages/org/valkyrienskies/clockwork/util/blocktype/$DyedWing"

export class $FlapBlock extends $DyedWing implements $WingBlock {
static readonly "Companion": $ConnectedWingAlike$Companion
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getWing"(level: $Level$Type, pos: $BlockPos$Type, blockState: $BlockState$Type): $Wing
public "getNewState"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlapBlock$Type = ($FlapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlapBlock_ = $FlapBlock$Type;
}}
declare module "packages/org/valkyrienskies/clockwork/content/physicalities/wing/$WingBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConnectedWingAlike$Companion, $ConnectedWingAlike$Companion$Type} from "packages/org/valkyrienskies/clockwork/util/blocktype/$ConnectedWingAlike$Companion"
import {$WingBlock as $WingBlock$0, $WingBlock$Type as $WingBlock$0$Type} from "packages/org/valkyrienskies/mod/common/block/$WingBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Wing, $Wing$Type} from "packages/org/valkyrienskies/core/api/ships/$Wing"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DyedWing, $DyedWing$Type} from "packages/org/valkyrienskies/clockwork/util/blocktype/$DyedWing"

export class $WingBlock extends $DyedWing implements $WingBlock$0 {
static readonly "Companion": $ConnectedWingAlike$Companion
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
 "descriptionId": string
static readonly "UPDATE_SHAPE_ORDER": ($Direction)[]
 "hasCollision": boolean
 "explosionResistance": float
 "isRandomlyTicking": boolean
 "soundType": $SoundType
 "friction": float
 "speedFactor": float
 "jumpFactor": float
readonly "dynamicShape": boolean
readonly "requiredFeatures": $FeatureFlagSet
 "properties": $BlockBehaviour$Properties
 "drops": $ResourceLocation

constructor(properties: $BlockBehaviour$Properties$Type)

public "getWing"(level: $Level$Type, pos: $BlockPos$Type, blockState: $BlockState$Type): $Wing
public "getNewState"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WingBlock$Type = ($WingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WingBlock_ = $WingBlock$Type;
}}
declare module "packages/org/valkyrienskies/create_interactive/mixin/$DimensionalCarriageEntityAccessor" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export interface $DimensionalCarriageEntityAccessor {

 "somebody"(arg0: $Vec3$Type): void

(arg0: $Vec3$Type): void
}

export namespace $DimensionalCarriageEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionalCarriageEntityAccessor$Type = ($DimensionalCarriageEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionalCarriageEntityAccessor_ = $DimensionalCarriageEntityAccessor$Type;
}}
