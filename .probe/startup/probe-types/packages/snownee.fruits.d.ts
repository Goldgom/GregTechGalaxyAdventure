declare module "packages/snownee/fruits/bee/genetics/$Locus" {
import {$Allele, $Allele$Type} from "packages/snownee/fruits/bee/genetics/$Allele"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $Locus {

constructor(arg0: $Allele$Type)

public "getType"(): $Allele
public "getData"(): byte
public "setData"(arg0: byte): void
public "getLow"(): integer
public "getHigh"(): integer
public "randomize"(arg0: $RandomSource$Type): void
get "type"(): $Allele
get "data"(): byte
set "data"(value: byte)
get "low"(): integer
get "high"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Locus$Type = ($Locus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Locus_ = $Locus$Type;
}}
declare module "packages/snownee/fruits/duck/$FFPlayer$GeneName" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $FFPlayer$GeneName extends $Record {

constructor(name: string, desc: string)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "desc"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FFPlayer$GeneName$Type = ($FFPlayer$GeneName);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FFPlayer$GeneName_ = $FFPlayer$GeneName$Type;
}}
declare module "packages/snownee/fruits/cherry/item/$RedloveItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/snownee/kiwi/item/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RedloveItem extends $ModItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedloveItem$Type = ($RedloveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedloveItem_ = $RedloveItem$Type;
}}
declare module "packages/snownee/fruits/duck/$FFBee" {
import {$BeeAttributes, $BeeAttributes$Type} from "packages/snownee/fruits/bee/$BeeAttributes"

export interface $FFBee {

 "fruits$roll"(): void
 "fruits$getBeeAttributes"(): $BeeAttributes
}

export namespace $FFBee {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FFBee$Type = ($FFBee);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FFBee_ = $FFBee$Type;
}}
declare module "packages/snownee/fruits/vacuum/$VacItemProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ThrowableItemProjectile, $ThrowableItemProjectile$Type} from "packages/net/minecraft/world/entity/projectile/$ThrowableItemProjectile"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VacItemProjectile extends $ThrowableItemProjectile {
readonly "bobOffs": float
static readonly "DATA_ITEM_STACK": $EntityDataAccessor<($ItemStack)>
 "ownerUUID": $UUID
 "cachedOwner": $Entity
 "leftOwner": boolean
 "hasBeenShot": boolean
static readonly "ID_TAG": string
static readonly "PASSENGERS_TAG": string
static readonly "ENTITY_COUNTER": $AtomicInteger
static readonly "BOARDING_COOLDOWN": integer
static readonly "TOTAL_AIR_SUPPLY": integer
static readonly "MAX_ENTITY_TAG_COUNT": integer
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2": float
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5": double
static readonly "DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0": double
static readonly "BREATHING_DISTANCE_BELOW_EYES": float
static readonly "BASE_TICKS_REQUIRED_TO_FREEZE": integer
static readonly "FREEZE_HURT_FREQUENCY": integer
static readonly "UUID_TAG": string
 "blocksBuilding": boolean
 "boardingCooldown": integer
 "level": $Level
 "xo": double
 "yo": double
 "zo": double
 "blockPosition": $BlockPos
 "yRot": float
 "yRotO": float
 "xRotO": float
 "onGround": boolean
 "horizontalCollision": boolean
 "verticalCollision": boolean
 "verticalCollisionBelow": boolean
 "minorHorizontalCollision": boolean
 "hurtMarked": boolean
 "stuckSpeedMultiplier": $Vec3
 "removalReason": $Entity$RemovalReason
static readonly "DEFAULT_BB_WIDTH": float
static readonly "DEFAULT_BB_HEIGHT": float
 "walkDistO": float
 "walkDist": float
 "moveDist": float
 "flyDist": float
 "fallDistance": float
 "xOld": double
 "yOld": double
 "zOld": double
 "noPhysics": boolean
readonly "random": $RandomSource
 "age": integer
 "wasTouchingWater": boolean
/**
 * 
 * @deprecated
 */
 "fluidHeight": $Object2DoubleMap<($TagKey<($Fluid)>)>
 "wasEyeInWater": boolean
 "invulnerableTime": integer
 "firstTick": boolean
readonly "entityData": $SynchedEntityData
static readonly "DATA_SHARED_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "FLAG_ONFIRE": integer
static readonly "FLAG_GLOWING": integer
static readonly "FLAG_FALL_FLYING": integer
static readonly "DATA_POSE": $EntityDataAccessor<($Pose)>
 "levelCallback": $EntityInLevelCallback
 "noCulling": boolean
 "hasImpulse": boolean
 "portalCooldown": integer
 "isInsidePortal": boolean
 "portalTime": integer
 "portalEntrancePos": $BlockPos
 "uuid": $UUID
 "stringUUID": string
 "dimensions": $EntityDimensions
 "eyeHeight": float
 "isInPowderSnow": boolean
 "wasInPowderSnow": boolean
 "wasOnFire": boolean
 "mainSupportingBlockPos": $Optional<($BlockPos)>
 "forgeFluidTypeHeight": $Object2DoubleMap<($FluidType)>

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getAge"(): integer
public "getSpin"(arg0: float): float
public "getName"(): $Component
public "canCollideWith"(arg0: $Entity$Type): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "getPickResult"(): $ItemStack
public "tick"(): void
public "getItem"(): $ItemStack
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "age"(): integer
get "name"(): $Component
get "pickResult"(): $ItemStack
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacItemProjectile$Type = ($VacItemProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacItemProjectile_ = $VacItemProjectile$Type;
}}
declare module "packages/snownee/fruits/mixin/forge/$BlockColorsAccess" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $BlockColorsAccess {

 "getBlockColors"(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>

(): $Map<($Holder$Reference<($Block)>), ($BlockColor)>
}

export namespace $BlockColorsAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsAccess$Type = ($BlockColorsAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsAccess_ = $BlockColorsAccess$Type;
}}
declare module "packages/snownee/fruits/bee/$HybridizingRecipe" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$LycheeRecipe, $LycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$ILycheeRecipe, $ILycheeRecipe$Type} from "packages/snownee/lychee/core/recipe/$ILycheeRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LycheeRecipeType, $LycheeRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$LycheeRecipeType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockKeyRecipe, $BlockKeyRecipe$Type} from "packages/snownee/lychee/core/recipe/$BlockKeyRecipe"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$JsonPointer, $JsonPointer$Type} from "packages/snownee/lychee/util/json/$JsonPointer"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$PostAction, $PostAction$Type} from "packages/snownee/lychee/core/post/$PostAction"

export class $HybridizingRecipe extends $LycheeRecipe<($LycheeContext)> implements $BlockKeyRecipe<($HybridizingRecipe)> {
 "pollens": $Collection<(string)>
 "endingStep": $Collection<(string)>
readonly "ingredients": $NonNullList<($Ingredient)>
 "ghost": boolean
 "hideInRecipeViewer": boolean
 "comment": string
 "group": string

constructor(arg0: $ResourceLocation$Type)

public "compareTo"(arg0: $HybridizingRecipe$Type): integer
public "matches"(arg0: $LycheeContext$Type, arg1: $Level$Type): boolean
public "getType"(): $LycheeRecipeType<(any), (any)>
public "getBlock"(): $BlockPredicate
public "getSerializer"(): $LycheeRecipe$Serializer<(any)>
public "endingStep"(): $Collection<(string)>
public "refreshIngredients"(): void
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getItemIndexes"(arg0: $JsonPointer$Type): $IntList
public "addInvisibleOutputs"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "addInvisibleInputs"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public static "processActions"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonObject$Type): void
public static "processActionGroup"(arg0: $ILycheeRecipe$Type<(any)>, arg1: $JsonPointer$Type, arg2: $List$Type<($PostAction$Type)>, arg3: $JsonObject$Type): $JsonElement
public static "filterHidden"(arg0: $Stream$Type<($PostAction$Type)>): $Stream<($PostAction)>
get "type"(): $LycheeRecipeType<(any), (any)>
get "block"(): $BlockPredicate
get "serializer"(): $LycheeRecipe$Serializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HybridizingRecipe$Type = ($HybridizingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HybridizingRecipe_ = $HybridizingRecipe$Type;
}}
declare module "packages/snownee/fruits/block/entity/$FruitTreeBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModBlockEntity, $ModBlockEntity$Type} from "packages/snownee/kiwi/block/entity/$ModBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$FruitType, $FruitType$Type} from "packages/snownee/fruits/$FruitType"

export class $FruitTreeBlockEntity extends $ModBlockEntity {
 "type": $FruitType
 "persistData": boolean
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $FruitType$Type)

public "isDead"(): boolean
public "canDrop"(): boolean
public "consumeLifespan"(arg0: integer): void
public "removeActiveLeaves"(arg0: $BlockPos$Type): void
public "setOnlyItem"(arg0: $ItemEntity$Type): void
public "getActiveLeaves"(): $Set<($BlockPos)>
public "setLifespan"(arg0: integer): void
public "getLifespan"(): integer
public "addActiveLeaves"(arg0: $Collection$Type<($BlockPos$Type)>): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "dead"(): boolean
set "onlyItem"(value: $ItemEntity$Type)
get "activeLeaves"(): $Set<($BlockPos)>
set "lifespan"(value: integer)
get "lifespan"(): integer
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitTreeBlockEntity$Type = ($FruitTreeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitTreeBlockEntity_ = $FruitTreeBlockEntity$Type;
}}
declare module "packages/snownee/fruits/food/$FoodBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$IKiwiBlock, $IKiwiBlock$Type} from "packages/snownee/kiwi/block/$IKiwiBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"

export class $FoodBlock extends $HorizontalDirectionalBlock implements $IKiwiBlock {
 "lockShapeRotation": boolean
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

constructor(arg0: $VoxelShape$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "createItem"(arg0: $Item$Properties$Type): $BlockItem
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getName"(arg0: $ItemStack$Type): $MutableComponent
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodBlock$Type = ($FoodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodBlock_ = $FoodBlock$Type;
}}
declare module "packages/snownee/fruits/food/$PieBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FeastBlock, $FeastBlock$Type} from "packages/snownee/fruits/food/$FeastBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PieBlock extends $FeastBlock {
static readonly "PIE_SERVINGS": $IntegerProperty
static readonly "LEFTOVER_SHAPE": $VoxelShape
readonly "servingItem": $Supplier<($Item)>
 "lockShapeRotation": boolean
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

constructor(arg0: $VoxelShape$Type, arg1: $VoxelShape$Type, arg2: $Supplier$Type<($Item$Type)>)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getServingsProperty"(): $IntegerProperty
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
get "servingsProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PieBlock$Type = ($PieBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PieBlock_ = $PieBlock$Type;
}}
declare module "packages/snownee/fruits/bee/$HybridizingRecipeType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LootContextParamSet, $LootContextParamSet$Type} from "packages/net/minecraft/world/level/storage/loot/parameters/$LootContextParamSet"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$BlockKeyRecipeType, $BlockKeyRecipeType$Type} from "packages/snownee/lychee/core/recipe/type/$BlockKeyRecipeType"
import {$Bee, $Bee$Type} from "packages/net/minecraft/world/entity/animal/$Bee"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LycheeContext, $LycheeContext$Type} from "packages/snownee/lychee/core/$LycheeContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HybridizingRecipe, $HybridizingRecipe$Type} from "packages/snownee/fruits/bee/$HybridizingRecipe"

export class $HybridizingRecipeType extends $BlockKeyRecipeType<($LycheeContext), ($HybridizingRecipe)> {
 "extractChance": boolean
readonly "id": $ResourceLocation
 "categoryId": $ResourceLocation
readonly "clazz": $Class<(any)>
readonly "contextParamSet": $LootContextParamSet
 "requiresClient": boolean
 "compactInputs": boolean
 "canPreventConsumeInputs": boolean
 "hasStandaloneCategory": boolean
static readonly "DEFAULT_PREVENT_TIP": $Component

constructor(arg0: string, arg1: $Class$Type<($HybridizingRecipe$Type)>, arg2: $LootContextParamSet$Type)

public "buildCache"(): void
public "buildContext"(arg0: $Bee$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Supplier<($LycheeContext)>
public static "removeOverflownPollens"(arg0: $Bee$Type): void
public "onPollinateComplete"(arg0: $Bee$Type): void
public static "simple"<T extends $Recipe<(any)>>(arg0: $ResourceLocation$Type): $RecipeType<(T)>
public static "register"<T extends $Recipe<(any)>>(arg0: string): $RecipeType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HybridizingRecipeType$Type = ($HybridizingRecipeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HybridizingRecipeType_ = $HybridizingRecipeType$Type;
}}
declare module "packages/snownee/fruits/pomegranate/block/$PomegranateItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PomegranateItem extends $BlockItem {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PomegranateItem$Type = ($PomegranateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PomegranateItem_ = $PomegranateItem$Type;
}}
declare module "packages/snownee/fruits/cherry/block/$CherryLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FruitLeavesBlock, $FruitLeavesBlock$Type} from "packages/snownee/fruits/block/$FruitLeavesBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FruitType, $FruitType$Type} from "packages/snownee/fruits/$FruitType"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $CherryLeavesBlock extends $FruitLeavesBlock {
static readonly "AGE": $IntegerProperty
readonly "type": $Supplier<($FruitType)>
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $Supplier$Type<($FruitType$Type)>, arg1: $BlockBehaviour$Properties$Type, arg2: $ParticleOptions$Type)

public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "spawnDestroyParticles"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ParticleOptions$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CherryLeavesBlock$Type = ($CherryLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CherryLeavesBlock_ = $CherryLeavesBlock$Type;
}}
declare module "packages/snownee/fruits/mixin/forge/$FoliagePlacerAccess" {
import {$LevelSimulatedReader, $LevelSimulatedReader$Type} from "packages/net/minecraft/world/level/$LevelSimulatedReader"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$FoliagePlacer$FoliageAttachment, $FoliagePlacer$FoliageAttachment$Type} from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacer$FoliageAttachment"
import {$FoliagePlacer$FoliageSetter, $FoliagePlacer$FoliageSetter$Type} from "packages/net/minecraft/world/level/levelgen/feature/foliageplacers/$FoliagePlacer$FoliageSetter"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"

export interface $FoliagePlacerAccess {

 "callShouldSkipLocation"(arg0: $RandomSource$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: boolean): boolean
 "callCreateFoliage"(arg0: $LevelSimulatedReader$Type, arg1: $FoliagePlacer$FoliageSetter$Type, arg2: $RandomSource$Type, arg3: $TreeConfiguration$Type, arg4: integer, arg5: $FoliagePlacer$FoliageAttachment$Type, arg6: integer, arg7: integer, arg8: integer): void
}

export namespace $FoliagePlacerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoliagePlacerAccess$Type = ($FoliagePlacerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoliagePlacerAccess_ = $FoliagePlacerAccess$Type;
}}
declare module "packages/snownee/fruits/bee/$BeeAttributes" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Bee, $Bee$Type} from "packages/net/minecraft/world/entity/animal/$Bee"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Allele, $Allele$Type} from "packages/snownee/fruits/bee/genetics/$Allele"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Locus, $Locus$Type} from "packages/snownee/fruits/bee/genetics/$Locus"
import {$Trait, $Trait$Type} from "packages/snownee/fruits/bee/genetics/$Trait"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BeeAttributes {
 "dirty": boolean

constructor()

public static "of"(arg0: any): $BeeAttributes
public "getTexture"(): $ResourceLocation
public "setMutagenEndsIn"(arg0: long, arg1: long): void
public "fromNBT"(arg0: $CompoundTag$Type, arg1: $Bee$Type): void
public "isSaddleable"(): boolean
public "hasTrait"(arg0: $Trait$Type): boolean
public "updateTraits"(arg0: $Bee$Type): void
public "breedFrom"(arg0: $BeeAttributes$Type, arg1: $Allele$Type, arg2: $BeeAttributes$Type, arg3: $Allele$Type, arg4: $Bee$Type): void
public "getSaddle"(): $ItemStack
public "setSaddle"(arg0: $ItemStack$Type): void
public "toNBT"(arg0: $CompoundTag$Type): void
public "getMutagenEndsIn"(): long
public "setTraits"(arg0: $List$Type<($Trait$Type)>): void
public "getLocus"(arg0: $Allele$Type): $Locus
public "getTraits"(): $Set<($Trait)>
public "getTrusted"(): $List<($UUID)>
public "setTrusted"(arg0: $List$Type<($UUID$Type)>): void
public "getPollens"(): $List<(string)>
public "updateTexture"(): void
public "setTexture"(arg0: $ResourceLocation$Type): void
public "randomize"(arg0: $Bee$Type): void
public "isSaddled"(): boolean
public "trusts"(arg0: $UUID$Type): boolean
public "addTrusted"(arg0: $UUID$Type): void
public "allGene"(arg0: $Allele$Type, arg1: integer): boolean
public "anyGene"(arg0: $Allele$Type, arg1: integer): boolean
public "getLoci"(): $Map<($Allele), ($Locus)>
get "texture"(): $ResourceLocation
get "saddleable"(): boolean
get "saddle"(): $ItemStack
set "saddle"(value: $ItemStack$Type)
get "mutagenEndsIn"(): long
set "traits"(value: $List$Type<($Trait$Type)>)
get "traits"(): $Set<($Trait)>
get "trusted"(): $List<($UUID)>
set "trusted"(value: $List$Type<($UUID$Type)>)
get "pollens"(): $List<(string)>
set "texture"(value: $ResourceLocation$Type)
get "saddled"(): boolean
get "loci"(): $Map<($Allele), ($Locus)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeAttributes$Type = ($BeeAttributes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BeeAttributes_ = $BeeAttributes$Type;
}}
declare module "packages/snownee/fruits/food/$FoodItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModItem, $ModItem$Type} from "packages/snownee/kiwi/item/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodItem extends $ModItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getEatingSound"(): $SoundEvent
public static "finishUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
get "eatingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodItem$Type = ($FoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodItem_ = $FoodItem$Type;
}}
declare module "packages/snownee/fruits/bee/$HybridizingRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$LycheeRecipe$Serializer, $LycheeRecipe$Serializer$Type} from "packages/snownee/lychee/core/recipe/$LycheeRecipe$Serializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$HybridizingRecipe, $HybridizingRecipe$Type} from "packages/snownee/fruits/bee/$HybridizingRecipe"

export class $HybridizingRecipe$Serializer extends $LycheeRecipe$Serializer<($HybridizingRecipe)> {
static readonly "EMPTY_INGREDIENT": $Ingredient

constructor()

public "fromJson"(arg0: $HybridizingRecipe$Type, arg1: $JsonObject$Type): void
public "toNetwork0"(arg0: $FriendlyByteBuf$Type, arg1: $HybridizingRecipe$Type): void
public "fromNetwork"(arg0: $HybridizingRecipe$Type, arg1: $FriendlyByteBuf$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HybridizingRecipe$Serializer$Type = ($HybridizingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HybridizingRecipe$Serializer_ = $HybridizingRecipe$Serializer$Type;
}}
declare module "packages/snownee/fruits/block/$FruitLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LeavesBlock, $LeavesBlock$Type} from "packages/net/minecraft/world/level/block/$LeavesBlock"
import {$FruitTreeBlockEntity, $FruitTreeBlockEntity$Type} from "packages/snownee/fruits/block/entity/$FruitTreeBlockEntity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$FruitType, $FruitType$Type} from "packages/snownee/fruits/$FruitType"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $FruitLeavesBlock extends $LeavesBlock implements $BonemealableBlock, $EntityBlock {
static readonly "AGE": $IntegerProperty
readonly "type": $Supplier<($FruitType)>
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $Supplier$Type<($FruitType$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "hasBlockEntity"(arg0: $BlockState$Type): boolean
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "dropFruit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FruitTreeBlockEntity$Type, arg4: integer): $ItemEntity
public "doDropFruit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FruitTreeBlockEntity$Type, arg4: integer): $ItemEntity
public static "createItemEntity"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): $ItemEntity
public "findCore"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): $FruitTreeBlockEntity
public "canGrow"(arg0: $BlockState$Type): boolean
public "shouldDecay"(arg0: $BlockState$Type): boolean
public "hasFruit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public static "rangeDrop"(arg0: $ServerLevel$Type, arg1: $Iterable$Type<($BlockPos$Type)>, arg2: integer, arg3: $FruitTreeBlockEntity$Type, arg4: $Consumer$Type<($ItemEntity$Type)>): void
public static "giveItemTo"(arg0: $Player$Type, arg1: $BlockHitResult$Type, arg2: $ItemStack$Type): void
public "notPlacedByPlayer"(arg0: $BlockState$Type): boolean
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitLeavesBlock$Type = ($FruitLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitLeavesBlock_ = $FruitLeavesBlock$Type;
}}
declare module "packages/snownee/fruits/duck/$FFPlayer" {
import {$FFPlayer$GeneName, $FFPlayer$GeneName$Type} from "packages/snownee/fruits/duck/$FFPlayer$GeneName"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $FFPlayer {

 "fruits$setGeneName"(arg0: string, arg1: $FFPlayer$GeneName$Type): void
 "fruits$getGeneName"(arg0: string): string
 "fruits$getGeneName"(arg0: character): string
 "fruits$getGeneDesc"(arg0: string): string
 "fruits$getGeneDesc"(arg0: character): string
 "fruits$getGeneNames"(): $Map<(string), ($FFPlayer$GeneName)>
 "fruits$setGeneNames"(arg0: $Map$Type<(string), ($FFPlayer$GeneName$Type)>): void
 "fruits$maybeInitGenes"(): void
}

export namespace $FFPlayer {
function of(arg0: any): $FFPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FFPlayer$Type = ($FFPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FFPlayer_ = $FFPlayer$Type;
}}
declare module "packages/snownee/fruits/block/$SlidingDoorBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $SlidingDoorBlock extends $DoorBlock {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "POWERED": $BooleanProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "AABB_DOOR_THICKNESS": float
static readonly "SOUTH_AABB": $VoxelShape
static readonly "NORTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "setOpen"(arg0: $Entity$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorBlock$Type = ($SlidingDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingDoorBlock_ = $SlidingDoorBlock$Type;
}}
declare module "packages/snownee/fruits/pomegranate/block/$HangingFruitBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$HangingRootsBlock, $HangingRootsBlock$Type} from "packages/net/minecraft/world/level/block/$HangingRootsBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $HangingFruitBlock extends $HangingRootsBlock {
static readonly "SHAPE": $VoxelShape
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

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingFruitBlock$Type = ($HangingFruitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingFruitBlock_ = $HangingFruitBlock$Type;
}}
declare module "packages/snownee/fruits/cherry/$CherryFruitType" {
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$FruitType, $FruitType$Type} from "packages/snownee/fruits/$FruitType"

export class $CherryFruitType extends $FruitType {
 "treeFeature": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
 "treeBeesFeature": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
readonly "tier": integer
readonly "log": $Supplier<(any)>
readonly "leaves": $Supplier<(any)>
readonly "sapling": $Supplier<(any)>
readonly "fruit": $Supplier<($Item)>
 "poiType": $Holder<($PoiType)>

constructor(arg0: integer, arg1: $Supplier$Type<($Block$Type)>, arg2: $Supplier$Type<(any)>, arg3: $Supplier$Type<(any)>, arg4: $Supplier$Type<($Item$Type)>)

public "receiveKey"(arg0: $ResourceLocation$Type): void
public "getConfiguredFeature"(arg0: $RandomSource$Type, arg1: boolean): $ResourceKey<($ConfiguredFeature<(any), (any)>)>
public "makeFeatures"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $BiConsumer$Type<($ResourceLocation$Type), ($TreeConfiguration$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CherryFruitType$Type = ($CherryFruitType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CherryFruitType_ = $CherryFruitType$Type;
}}
declare module "packages/snownee/fruits/vacuum/$VacGunItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PreventUpdateAnimation, $PreventUpdateAnimation$Type} from "packages/snownee/fruits/util/$PreventUpdateAnimation"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$VacGunContainer, $VacGunContainer$Type} from "packages/snownee/fruits/vacuum/$VacGunContainer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$ModItem, $ModItem$Type} from "packages/snownee/kiwi/item/$ModItem"
import {$VacItemProjectile, $VacItemProjectile$Type} from "packages/snownee/fruits/vacuum/$VacItemProjectile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VacGunItem extends $ModItem implements $PreventUpdateAnimation {
static readonly "MAX_ITEM_COUNT": integer
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

constructor()

public static "getItemCount"(arg0: $ItemStack$Type): integer
public static "collectItem"(arg0: $Player$Type, arg1: $ItemEntity$Type, arg2: $ItemStack$Type, arg3: $VacGunContainer$Type): void
public static "shoot"(arg0: $Player$Type, arg1: $InteractionHand$Type): void
public static "shootItem"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $VacGunContainer$Type): $VacItemProjectile
public static "readItemContainer"(arg0: $ItemStack$Type): $VacGunContainer
public static "saveItemContainer"(arg0: $ItemStack$Type, arg1: $VacGunContainer$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "playContainerAnimation"(arg0: $BlockEntity$Type): void
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$Type): integer
public static "getAmmoType"(arg0: $ItemStack$Type): string
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isRepairable"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacGunItem$Type = ($VacGunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacGunItem_ = $VacGunItem$Type;
}}
declare module "packages/snownee/fruits/cherry/item/$FlowerCrownItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ModItem, $ModItem$Type} from "packages/snownee/kiwi/item/$ModItem"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FlowerCrownItem extends $ModItem implements $Equipable {
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

constructor(arg0: $Item$Properties$Type, arg1: $ParticleOptions$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "spawnParticles"(arg0: $LivingEntity$Type): void
public "getParticle"(): $ParticleOptions
public "getEquipmentSlot"(): $EquipmentSlot
public "getEquipSound"(): $SoundEvent
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "get"(arg0: $ItemStack$Type): $Equipable
get "particle"(): $ParticleOptions
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerCrownItem$Type = ($FlowerCrownItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowerCrownItem_ = $FlowerCrownItem$Type;
}}
declare module "packages/snownee/fruits/bee/genetics/$MutagenItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ModItem, $ModItem$Type} from "packages/snownee/kiwi/item/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MutagenItem extends $ModItem {
static readonly "BREWING_ITEM": $Item
static readonly "RANDOM": $RandomSource
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

constructor()

public static "getCodename"(arg0: $ItemStack$Type): $Optional<(string)>
public static "getClientName"(arg0: string): string
public "isImperfect"(arg0: $ItemStack$Type): boolean
public "imperfectMutagen"(): $ItemStack
public "getName"(arg0: $ItemStack$Type): $Component
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getDefaultInstance"(): $ItemStack
public "randomMutagen"(arg0: boolean, arg1: $RandomSource$Type): $ItemStack
get "defaultInstance"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutagenItem$Type = ($MutagenItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutagenItem_ = $MutagenItem$Type;
}}
declare module "packages/snownee/fruits/mixin/forge/$ItemColorsAccess" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ItemColorsAccess {

 "getItemColors"(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>

(): $Map<($Holder$Reference<($Item)>), ($ItemColor)>
}

export namespace $ItemColorsAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsAccess$Type = ($ItemColorsAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsAccess_ = $ItemColorsAccess$Type;
}}
declare module "packages/snownee/fruits/util/$PreventUpdateAnimation" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $PreventUpdateAnimation extends $IForgeItem {

 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "handler$fdg000$connectormod$redirectIsPiglinCurrency"(arg0: $ItemStack$Type, arg1: $CallbackInfoReturnable$Type<(any)>): void
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getAttributeModifiers"(stack: $ItemStack$Type, slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "isSuitableFor"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
 "getRecipeRemainder"(stack: $ItemStack$Type): $ItemStack
 "allowNbtUpdateAnimation"(player: $Player$Type, hand: $InteractionHand$Type, oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
 "allowContinuingBlockBreaking"(player: $Player$Type, oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean

(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
}

export namespace $PreventUpdateAnimation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreventUpdateAnimation$Type = ($PreventUpdateAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PreventUpdateAnimation_ = $PreventUpdateAnimation$Type;
}}
declare module "packages/snownee/fruits/bee/genetics/$Allele" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Allele {
static readonly "REGISTRY": $Map<(string), ($Allele)>
static "BY_CODE": $List<($Allele)>
static readonly "RAINC": $Allele
static readonly "FANCY": $Allele
static readonly "FEAT1": $Allele
static readonly "FEAT2": $Allele
readonly "name": string
readonly "defaultValue": integer
readonly "defaultData": byte
readonly "allowedValues": $IntList
readonly "mutationRate": float
 "codename": character
 "index": integer
 "color": integer

constructor(arg0: string, arg1: integer, arg2: float)

public static "values"(): $Collection<($Allele)>
public static "register"(arg0: $Allele$Type): $Allele
public "getDisplayName"(arg0: integer): $Component
public static "sortedByCode"(): $Collection<($Allele)>
public static "byCode"(arg0: character): $Allele
public "randomize"(arg0: $RandomSource$Type): byte
public static "byIndex"(arg0: integer): $Allele
public "maybeMutate"(arg0: byte, arg1: $RandomSource$Type, arg2: boolean): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Allele$Type = ($Allele);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Allele_ = $Allele$Type;
}}
declare module "packages/snownee/fruits/vacuum/$VacGunContainer" {
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/$ContainerListener"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $VacGunContainer extends $SimpleContainer {
readonly "items": $NonNullList<($ItemStack)>
 "listeners": $List<($ContainerListener)>

constructor(arg0: integer)

public "getItemCount"(): integer
public "setChanged"(): void
public "getLastItem"(): $ItemStack
public "fromTag"(arg0: $ListTag$Type): void
public "canAddItem"(arg0: $ItemStack$Type): boolean
public "addItem"(arg0: $ItemStack$Type): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
get "itemCount"(): integer
get "lastItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacGunContainer$Type = ($VacGunContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacGunContainer_ = $VacGunContainer$Type;
}}
declare module "packages/snownee/fruits/food/$FeastBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$FoodBlock, $FoodBlock$Type} from "packages/snownee/fruits/food/$FoodBlock"

export class $FeastBlock extends $FoodBlock {
static readonly "LEFTOVER_SHAPE": $VoxelShape
readonly "servingItem": $Supplier<($Item)>
 "lockShapeRotation": boolean
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

constructor(arg0: $VoxelShape$Type, arg1: $VoxelShape$Type, arg2: $Supplier$Type<($Item$Type)>)

public "hasLeftover"(): boolean
public "getServings"(arg0: $BlockState$Type): integer
public "consumeServing"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "createItem"(arg0: $Item$Properties$Type): $BlockItem
public "getServingsProperty"(): $IntegerProperty
public "getMaxServings"(): integer
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
get "servingsProperty"(): $IntegerProperty
get "maxServings"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeastBlock$Type = ($FeastBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FeastBlock_ = $FeastBlock$Type;
}}
declare module "packages/snownee/fruits/food/$FoodBlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ModBlockItem, $ModBlockItem$Type} from "packages/snownee/kiwi/item/$ModBlockItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodBlockItem extends $ModBlockItem {
static readonly "INSTANT_UPDATE_TILES": $Set<($BlockEntityType<(any)>)>
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

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodBlockItem$Type = ($FoodBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodBlockItem_ = $FoodBlockItem$Type;
}}
declare module "packages/snownee/fruits/pomegranate/block/$HangingFruitLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$FruitLeavesBlock, $FruitLeavesBlock$Type} from "packages/snownee/fruits/block/$FruitLeavesBlock"
import {$FruitTreeBlockEntity, $FruitTreeBlockEntity$Type} from "packages/snownee/fruits/block/entity/$FruitTreeBlockEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$FruitType, $FruitType$Type} from "packages/snownee/fruits/$FruitType"

export class $HangingFruitLeavesBlock extends $FruitLeavesBlock {
static readonly "AGE": $IntegerProperty
readonly "type": $Supplier<($FruitType)>
static readonly "DECAY_DISTANCE": integer
static readonly "DISTANCE": $IntegerProperty
static readonly "PERSISTENT": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $Supplier$Type<($FruitType$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "doDropFruit"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FruitTreeBlockEntity$Type, arg4: integer): $ItemEntity
public "hasFruit"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HangingFruitLeavesBlock$Type = ($HangingFruitLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HangingFruitLeavesBlock_ = $HangingFruitLeavesBlock$Type;
}}
declare module "packages/snownee/fruits/$CoreFruitType" {
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$FruitType, $FruitType$Type} from "packages/snownee/fruits/$FruitType"

export class $CoreFruitType extends $FruitType {
 "treeFeature": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
 "treeBeesFeature": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
 "treeFancyFeature": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
readonly "tier": integer
readonly "log": $Supplier<(any)>
readonly "leaves": $Supplier<(any)>
readonly "sapling": $Supplier<(any)>
readonly "fruit": $Supplier<($Item)>
 "poiType": $Holder<($PoiType)>

constructor(arg0: integer, arg1: $Supplier$Type<($Block$Type)>, arg2: $Supplier$Type<(any)>, arg3: $Supplier$Type<(any)>, arg4: $Supplier$Type<($Item$Type)>)

public "receiveKey"(arg0: $ResourceLocation$Type): void
public "getConfiguredFeature"(arg0: $RandomSource$Type, arg1: boolean): $ResourceKey<($ConfiguredFeature<(any), (any)>)>
public "makeFeatures"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $BiConsumer$Type<($ResourceLocation$Type), ($TreeConfiguration$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoreFruitType$Type = ($CoreFruitType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoreFruitType_ = $CoreFruitType$Type;
}}
declare module "packages/snownee/fruits/bee/$InspectorItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$ModItem, $ModItem$Type} from "packages/snownee/kiwi/item/$ModItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InspectorItem extends $ModItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getUseDuration"(arg0: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InspectorItem$Type = ($InspectorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InspectorItem_ = $InspectorItem$Type;
}}
declare module "packages/snownee/fruits/$FruitType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"

export class $FruitType {
readonly "tier": integer
readonly "log": $Supplier<(any)>
readonly "leaves": $Supplier<(any)>
readonly "sapling": $Supplier<(any)>
readonly "fruit": $Supplier<($Item)>
 "poiType": $Holder<($PoiType)>

constructor(arg0: integer, arg1: $Supplier$Type<($Block$Type)>, arg2: $Supplier$Type<(any)>, arg3: $Supplier$Type<(any)>, arg4: $Supplier$Type<($Item$Type)>)

public "receiveKey"(arg0: $ResourceLocation$Type): void
public "getConfiguredFeature"(arg0: $RandomSource$Type, arg1: boolean): $ResourceKey<($ConfiguredFeature<(any), (any)>)>
public static "getFruitOrDefault"(arg0: string): $Item
public "makeFeatures"(arg0: $ResourceLocation$Type, arg1: boolean, arg2: $BiConsumer$Type<($ResourceLocation$Type), ($TreeConfiguration$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitType$Type = ($FruitType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitType_ = $FruitType$Type;
}}
declare module "packages/snownee/fruits/bee/genetics/$Trait" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Trait extends $Record {
static readonly "REGISTRY": $Map<(string), ($Trait)>
static readonly "RAIN_CAPABLE": $Trait
static readonly "WITHER_TOLERANT": $Trait
static readonly "MOUNTABLE": $Trait
static readonly "FAST": $Trait
static readonly "FASTER": $Trait
static readonly "LAZY": $Trait
static readonly "MILD": $Trait
static readonly "WARRIOR": $Trait
static readonly "ADVANCED_POLLINATION": $Trait
static readonly "PINK": $Trait

constructor(name: string)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public static "values"(): $Collection<($Trait)>
public "hashCode"(): integer
public static "register"(arg0: $Trait$Type): $Trait
public "getDisplayName"(): $MutableComponent
public "getDescription"(): $MutableComponent
get "displayName"(): $MutableComponent
get "description"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trait$Type = ($Trait);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Trait_ = $Trait$Type;
}}
