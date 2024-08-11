declare module "packages/com/tacz/guns/resource/pojo/data/recipe/$TableRecipe" {
import {$GunSmithTableIngredient, $GunSmithTableIngredient$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableIngredient"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GunSmithTableResult, $GunSmithTableResult$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableResult"

export class $TableRecipe {

constructor()

public "getResult"(): $GunSmithTableResult
public "getMaterials"(): $List<($GunSmithTableIngredient)>
get "result"(): $GunSmithTableResult
get "materials"(): $List<($GunSmithTableIngredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableRecipe$Type = ($TableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TableRecipe_ = $TableRecipe$Type;
}}
declare module "packages/com/tacz/guns/api/client/other/$KeepingItemRenderer" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $KeepingItemRenderer {

 "keep"(arg0: $ItemStack$Type, arg1: long): void
 "getCurrentItem"(): $ItemStack
}

export namespace $KeepingItemRenderer {
function getRenderer(): $KeepingItemRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeepingItemRenderer$Type = ($KeepingItemRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeepingItemRenderer_ = $KeepingItemRenderer$Type;
}}
declare module "packages/com/tacz/guns/block/$TargetBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TargetBlock extends $BaseEntityBlock {
static readonly "OUTPUT_POWER": $IntegerProperty
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "STAND": $BooleanProperty
static readonly "BOX_BOTTOM_STAND_X": $VoxelShape
static readonly "BOX_BOTTOM_STAND_Z": $VoxelShape
static readonly "BOX_BOTTOM_DOWN": $VoxelShape
static readonly "BOX_UPPER_X": $VoxelShape
static readonly "BOX_UPPER_Z": $VoxelShape
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onProjectileHit"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockHitResult$Type, arg3: $Projectile$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public static "getRedstoneStrength"(arg0: $BlockHitResult$Type, arg1: boolean): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetBlock$Type = ($TargetBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetBlock_ = $TargetBlock$Type;
}}
declare module "packages/com/tacz/guns/block/$StatueBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $StatueBlock extends $BaseEntityBlock {
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatueBlock$Type = ($StatueBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatueBlock_ = $StatueBlock$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IAmmo" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAmmo {

 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "isAmmoOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $IAmmo {
function getIAmmoOrNull(arg0: $ItemStack$Type): $IAmmo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAmmo$Type = ($IAmmo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAmmo_ = $IAmmo$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IAttachment" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAttachment {

 "getType"(arg0: $ItemStack$Type): $AttachmentType
 "getAttachmentId"(arg0: $ItemStack$Type): $ResourceLocation
 "setAttachmentId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "setSkinId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getZoomNumber"(arg0: $ItemStack$Type): integer
 "getSkinId"(arg0: $ItemStack$Type): $ResourceLocation
 "setZoomNumber"(arg0: $ItemStack$Type, arg1: integer): void
}

export namespace $IAttachment {
function getIAttachmentOrNull(arg0: $ItemStack$Type): $IAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAttachment$Type = ($IAttachment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAttachment_ = $IAttachment$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$AttachmentItemDataAccessor" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IAttachment, $IAttachment$Type} from "packages/com/tacz/guns/api/item/$IAttachment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AttachmentItemDataAccessor extends $IAttachment {

 "getAttachmentId"(arg0: $ItemStack$Type): $ResourceLocation
 "setAttachmentId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "setSkinId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getZoomNumber"(arg0: $ItemStack$Type): integer
 "getSkinId"(arg0: $ItemStack$Type): $ResourceLocation
 "setZoomNumber"(arg0: $ItemStack$Type, arg1: integer): void
 "getType"(arg0: $ItemStack$Type): $AttachmentType

(arg0: $CompoundTag$Type): integer
}

export namespace $AttachmentItemDataAccessor {
const ATTACHMENT_ID_TAG: string
const SKIN_ID_TAG: string
const ZOOM_NUMBER_TAG: string
function getZoomNumberFromTag(arg0: $CompoundTag$Type): integer
function getAttachmentIdFromTag(arg0: $CompoundTag$Type): $ResourceLocation
function setZoomNumberToTag(arg0: $CompoundTag$Type, arg1: integer): void
function getIAttachmentOrNull(arg0: $ItemStack$Type): $IAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentItemDataAccessor$Type = ($AttachmentItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentItemDataAccessor_ = $AttachmentItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/api/item/attachment/$AttachmentType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AttachmentType extends $Enum<($AttachmentType)> {
static readonly "SCOPE": $AttachmentType
static readonly "MUZZLE": $AttachmentType
static readonly "STOCK": $AttachmentType
static readonly "GRIP": $AttachmentType
static readonly "LASER": $AttachmentType
static readonly "EXTENDED_MAG": $AttachmentType
static readonly "NONE": $AttachmentType


public static "values"(): ($AttachmentType)[]
public static "valueOf"(arg0: string): $AttachmentType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Type = (("grip") | ("laser") | ("extended_mag") | ("scope") | ("muzzle") | ("none") | ("stock")) | ($AttachmentType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_ = $AttachmentType$Type;
}}
declare module "packages/com/tacz/guns/item/$TargetMinecartItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TargetMinecartItem extends $Item {
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

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetMinecartItem$Type = ($TargetMinecartItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetMinecartItem_ = $TargetMinecartItem$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IGun" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IGun {

 "getLevel"(arg0: $ItemStack$Type): integer
 "getLevel"(arg0: integer): integer
 "getMaxLevel"(): integer
 "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
 "getFireMode"(arg0: $ItemStack$Type): $FireMode
 "getAimingZoom"(arg0: $ItemStack$Type): float
 "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
 "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
 "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
 "allowAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
 "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
 "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
 "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "allowAttachmentType"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): boolean
 "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
 "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
 "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
 "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
 "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getExpToNextLevel"(arg0: $ItemStack$Type): integer
 "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
 "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
 "useDummyAmmo"(arg0: $ItemStack$Type): boolean
 "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
 "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
 "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "getExp"(arg0: $ItemStack$Type): integer
 "getExp"(arg0: integer): integer
}

export namespace $IGun {
function getIGunOrNull(arg0: $ItemStack$Type): $IGun
function getMainhandFireMode(arg0: $LivingEntity$Type): $FireMode
function mainhandHoldGun(arg0: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGun$Type = ($IGun);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGun_ = $IGun$Type;
}}
declare module "packages/com/tacz/guns/api/item/gun/$FireMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FireMode extends $Enum<($FireMode)> {
static readonly "AUTO": $FireMode
static readonly "SEMI": $FireMode
static readonly "BURST": $FireMode
static readonly "UNKNOWN": $FireMode


public static "values"(): ($FireMode)[]
public static "valueOf"(arg0: string): $FireMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireMode$Type = (("auto") | ("semi") | ("burst") | ("unknown")) | ($FireMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireMode_ = $FireMode$Type;
}}
declare module "packages/com/tacz/guns/api/client/gameplay/$IClientPlayerGunOperator" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$ShootResult, $ShootResult$Type} from "packages/com/tacz/guns/api/entity/$ShootResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IClientPlayerGunOperator {

 "reload"(): void
 "draw"(arg0: $ItemStack$Type): void
 "aim"(arg0: boolean): void
 "shoot"(): $ShootResult
 "inspect"(): void
 "bolt"(): void
 "melee"(): void
 "isAim"(): boolean
 "fireSelect"(): void
 "getClientShootCoolDown"(): long
 "getClientAimingProgress"(arg0: float): float
}

export namespace $IClientPlayerGunOperator {
function fromLocalPlayer(arg0: $LocalPlayer$Type): $IClientPlayerGunOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientPlayerGunOperator$Type = ($IClientPlayerGunOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientPlayerGunOperator_ = $IClientPlayerGunOperator$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$ShootResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ShootResult extends $Enum<($ShootResult)> {
static readonly "SUCCESS": $ShootResult
static readonly "UNKNOWN_FAIL": $ShootResult
static readonly "COOL_DOWN": $ShootResult
static readonly "NO_AMMO": $ShootResult
static readonly "NOT_DRAW": $ShootResult
static readonly "NOT_GUN": $ShootResult
static readonly "ID_NOT_EXIST": $ShootResult
static readonly "NEED_BOLT": $ShootResult
static readonly "IS_RELOADING": $ShootResult
static readonly "IS_DRAWING": $ShootResult
static readonly "IS_BOLTING": $ShootResult
static readonly "IS_MELEE": $ShootResult
static readonly "IS_SPRINTING": $ShootResult
static readonly "FORGE_EVENT_CANCEL": $ShootResult


public static "values"(): ($ShootResult)[]
public static "valueOf"(arg0: string): $ShootResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShootResult$Type = (("is_sprinting") | ("not_draw") | ("unknown_fail") | ("is_melee") | ("is_reloading") | ("forge_event_cancel") | ("not_gun") | ("no_ammo") | ("id_not_exist") | ("success") | ("is_bolting") | ("cool_down") | ("is_drawing") | ("need_bolt")) | ($ShootResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShootResult_ = $ShootResult$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$KnockBackModifier" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $KnockBackModifier {

 "getKnockBackStrength"(): double
 "resetKnockBackStrength"(): void
 "setKnockBackStrength"(arg0: double): void
}

export namespace $KnockBackModifier {
function fromLivingEntity(arg0: $LivingEntity$Type): $KnockBackModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnockBackModifier$Type = ($KnockBackModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnockBackModifier_ = $KnockBackModifier$Type;
}}
declare module "packages/com/tacz/guns/crafting/$GunSmithTableRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$GunSmithTableIngredient, $GunSmithTableIngredient$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableIngredient"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TableRecipe, $TableRecipe$Type} from "packages/com/tacz/guns/resource/pojo/data/recipe/$TableRecipe"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$GunSmithTableResult, $GunSmithTableResult$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableResult"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $GunSmithTableRecipe implements $Recipe<($Inventory)> {

constructor(arg0: $ResourceLocation$Type, arg1: $GunSmithTableResult$Type, arg2: $List$Type<($GunSmithTableIngredient$Type)>)
constructor(arg0: $ResourceLocation$Type, arg1: $TableRecipe$Type)

/**
 * 
 * @deprecated
 */
public "matches"(arg0: $Inventory$Type, arg1: $Level$Type): boolean
public "getResult"(): $GunSmithTableResult
public "getInputs"(): $List<($GunSmithTableIngredient)>
public "getId"(): $ResourceLocation
/**
 * 
 * @deprecated
 */
public "assemble"(arg0: $Inventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getOutput"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $Inventory$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getType"(): $ResourceLocation
public "getMod"(): string
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getGroup"(): string
public "setGroup"(group: string): void
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
get "result"(): $GunSmithTableResult
get "inputs"(): $List<($GunSmithTableIngredient)>
get "id"(): $ResourceLocation
get "output"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "mod"(): string
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableRecipe$Type = ($GunSmithTableRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableRecipe_ = $GunSmithTableRecipe$Type;
}}
declare module "packages/com/tacz/guns/api/item/gun/$AbstractGunItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$GunTabType, $GunTabType$Type} from "packages/com/tacz/guns/api/item/$GunTabType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IGun, $IGun$Type} from "packages/com/tacz/guns/api/item/$IGun"

export class $AbstractGunItem extends $Item implements $IGun {
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


public "shoot"(arg0: $ItemStack$Type, arg1: $Supplier$Type<(float)>, arg2: $Supplier$Type<(float)>, arg3: boolean, arg4: $LivingEntity$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public static "fillItemCategory"(arg0: $GunTabType$Type): $NonNullList<($ItemStack)>
public "bolt"(arg0: $ItemStack$Type): void
public "melee"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "fireSelect"(arg0: $ItemStack$Type): void
public "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "reloadAmmo"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): void
public "allowAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "allowAttachmentType"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): boolean
public "getLevel"(arg0: $ItemStack$Type): integer
public "getLevel"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
public "getFireMode"(arg0: $ItemStack$Type): $FireMode
public "getAimingZoom"(arg0: $ItemStack$Type): float
public "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
public "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
public static "getIGunOrNull"(arg0: $ItemStack$Type): $IGun
public "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
public "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
public "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
public static "getMainhandFireMode"(arg0: $LivingEntity$Type): $FireMode
public "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
public "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
public "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
public "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
public "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
public "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
public "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getExpToNextLevel"(arg0: $ItemStack$Type): integer
public "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
public "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
public "useDummyAmmo"(arg0: $ItemStack$Type): boolean
public "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
public "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "getExp"(arg0: $ItemStack$Type): integer
public "getExp"(arg0: integer): integer
public static "mainhandHoldGun"(arg0: $LivingEntity$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGunItem$Type = ($AbstractGunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGunItem_ = $AbstractGunItem$Type;
}}
declare module "packages/com/tacz/guns/mixin/client/$StairBlockAccessor" {
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $StairBlockAccessor {

 "invokeGetModelBlock"(): $Block

(): $Block
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
declare module "packages/com/tacz/guns/item/$AmmoBoxItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ClickAction, $ClickAction$Type} from "packages/net/minecraft/world/inventory/$ClickAction"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SlotAccess, $SlotAccess$Type} from "packages/net/minecraft/world/entity/$SlotAccess"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$AmmoBoxItemDataAccessor, $AmmoBoxItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$AmmoBoxItemDataAccessor"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmmoBoxItem extends $Item implements $DyeableLeatherItem, $AmmoBoxItemDataAccessor {
static readonly "PROPERTY_NAME": $ResourceLocation
static readonly "IRON_LEVEL": integer
static readonly "GOLD_LEVEL": integer
static readonly "DIAMOND_LEVEL": integer
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

public static "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "overrideOtherStackedOnMe"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $Slot$Type, arg3: $ClickAction$Type, arg4: $Player$Type, arg5: $SlotAccess$Type): boolean
public "overrideStackedOnOther"(arg0: $ItemStack$Type, arg1: $Slot$Type, arg2: $ClickAction$Type, arg3: $Player$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "isFoil"(arg0: $ItemStack$Type): boolean
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public static "fillItemCategory"(arg0: $CreativeModeTab$Output$Type): void
public static "getStatue"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type, arg3: integer): float
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "getColor"(arg0: $ItemStack$Type): integer
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
public "isCreative"(arg0: $ItemStack$Type): boolean
public "setAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
public "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
public "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getAmmoCount"(arg0: $ItemStack$Type): integer
public "getAmmoLevel"(arg0: $ItemStack$Type): integer
public "isAllTypeCreative"(arg0: $ItemStack$Type): boolean
public "isAmmoBoxOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "setCreative"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
public "setAmmoLevel"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoBoxItem$Type = ($AmmoBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoBoxItem_ = $AmmoBoxItem$Type;
}}
declare module "packages/com/tacz/guns/item/$AttachmentItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$IAttachment, $IAttachment$Type} from "packages/com/tacz/guns/api/item/$IAttachment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$AttachmentItemDataAccessor, $AttachmentItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$AttachmentItemDataAccessor"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AttachmentItem extends $Item implements $AttachmentItemDataAccessor {
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

public "getType"(arg0: $ItemStack$Type): $AttachmentType
public "getName"(arg0: $ItemStack$Type): $Component
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public static "fillItemCategory"(arg0: $AttachmentType$Type): $NonNullList<($ItemStack)>
public static "getZoomNumberFromTag"(arg0: $CompoundTag$Type): integer
public "getAttachmentId"(arg0: $ItemStack$Type): $ResourceLocation
public static "getAttachmentIdFromTag"(arg0: $CompoundTag$Type): $ResourceLocation
public "setAttachmentId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "setSkinId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getZoomNumber"(arg0: $ItemStack$Type): integer
public "getSkinId"(arg0: $ItemStack$Type): $ResourceLocation
public "setZoomNumber"(arg0: $ItemStack$Type, arg1: integer): void
public static "setZoomNumberToTag"(arg0: $CompoundTag$Type, arg1: integer): void
public static "getIAttachmentOrNull"(arg0: $ItemStack$Type): $IAttachment
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentItem$Type = ($AttachmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentItem_ = $AttachmentItem$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$GunItemDataAccessor" {
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IGun, $IGun$Type} from "packages/com/tacz/guns/api/item/$IGun"

export interface $GunItemDataAccessor extends $IGun {

 "getLevel"(arg0: $ItemStack$Type): integer
 "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
 "getFireMode"(arg0: $ItemStack$Type): $FireMode
 "getAimingZoom"(arg0: $ItemStack$Type): float
 "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
 "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
 "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
 "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
 "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
 "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
 "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
 "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
 "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
 "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
 "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getExpToNextLevel"(arg0: $ItemStack$Type): integer
 "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
 "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
 "useDummyAmmo"(arg0: $ItemStack$Type): boolean
 "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
 "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
 "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
 "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
 "getExp"(arg0: $ItemStack$Type): integer
 "getLevel"(arg0: integer): integer
 "getMaxLevel"(): integer
 "allowAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "allowAttachmentType"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): boolean
 "getExp"(arg0: integer): integer
}

export namespace $GunItemDataAccessor {
const GUN_ID_TAG: string
const GUN_FIRE_MODE_TAG: string
const GUN_HAS_BULLET_IN_BARREL: string
const GUN_CURRENT_AMMO_COUNT_TAG: string
const GUN_ATTACHMENT_BASE: string
const GUN_EXP_TAG: string
const GUN_DUMMY_AMMO: string
const GUN_MAX_DUMMY_AMMO: string
const GUN_ATTACHMENT_LOCK: string
function getIGunOrNull(arg0: $ItemStack$Type): $IGun
function getMainhandFireMode(arg0: $LivingEntity$Type): $FireMode
function mainhandHoldGun(arg0: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunItemDataAccessor$Type = ($GunItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunItemDataAccessor_ = $GunItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/block/$GunSmithTableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BedPart, $BedPart$Type} from "packages/net/minecraft/world/level/block/state/properties/$BedPart"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $GunSmithTableBlock extends $BaseEntityBlock {
static readonly "BLOCK_AABB": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "PART": $EnumProperty<($BedPart)>
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableBlock$Type = ($GunSmithTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableBlock_ = $GunSmithTableBlock$Type;
}}
declare module "packages/com/tacz/guns/crafting/$GunSmithTableResult" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $GunSmithTableResult {
static readonly "GUN": string
static readonly "AMMO": string
static readonly "ATTACHMENT": string

constructor(arg0: $ItemStack$Type, arg1: string)

public "getResult"(): $ItemStack
public "getGroup"(): string
get "result"(): $ItemStack
get "group"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableResult$Type = ($GunSmithTableResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableResult_ = $GunSmithTableResult$Type;
}}
declare module "packages/com/tacz/guns/api/item/$IAmmoBox" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IAmmoBox {

 "isCreative"(arg0: $ItemStack$Type): boolean
 "setAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getAmmoCount"(arg0: $ItemStack$Type): integer
 "getAmmoLevel"(arg0: $ItemStack$Type): integer
 "isAllTypeCreative"(arg0: $ItemStack$Type): boolean
 "isAmmoBoxOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "setCreative"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "setAmmoLevel"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
}

export namespace $IAmmoBox {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAmmoBox$Type = ($IAmmoBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAmmoBox_ = $IAmmoBox$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$ReloadState" {
import {$ReloadState$StateType, $ReloadState$StateType$Type} from "packages/com/tacz/guns/api/entity/$ReloadState$StateType"

export class $ReloadState {
static readonly "NOT_RELOADING_COUNTDOWN": integer

constructor()
constructor(arg0: $ReloadState$Type)

public "equals"(arg0: any): boolean
public "getStateType"(): $ReloadState$StateType
public "getCountDown"(): long
public "setCountDown"(arg0: long): void
public "setStateType"(arg0: $ReloadState$StateType$Type): void
get "stateType"(): $ReloadState$StateType
get "countDown"(): long
set "countDown"(value: long)
set "stateType"(value: $ReloadState$StateType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadState$Type = ($ReloadState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadState_ = $ReloadState$Type;
}}
declare module "packages/com/tacz/guns/crafting/$GunSmithTableSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$GunSmithTableRecipe, $GunSmithTableRecipe$Type} from "packages/com/tacz/guns/crafting/$GunSmithTableRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $GunSmithTableSerializer implements $RecipeSerializer<($GunSmithTableRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $GunSmithTableRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $GunSmithTableRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $GunSmithTableRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $GunSmithTableRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableSerializer$Type = ($GunSmithTableSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableSerializer_ = $GunSmithTableSerializer$Type;
}}
declare module "packages/com/tacz/guns/item/$GunSmithTableItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GunSmithTableItem extends $BlockItem {
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

constructor()

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableItem$Type = ($GunSmithTableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableItem_ = $GunSmithTableItem$Type;
}}
declare module "packages/com/tacz/guns/item/$ModernKineticGunItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$GunItemDataAccessor, $GunItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$GunItemDataAccessor"
import {$AbstractGunItem, $AbstractGunItem$Type} from "packages/com/tacz/guns/api/item/gun/$AbstractGunItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AttachmentType, $AttachmentType$Type} from "packages/com/tacz/guns/api/item/attachment/$AttachmentType"
import {$FireMode, $FireMode$Type} from "packages/com/tacz/guns/api/item/gun/$FireMode"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IGun, $IGun$Type} from "packages/com/tacz/guns/api/item/$IGun"

export class $ModernKineticGunItem extends $AbstractGunItem implements $GunItemDataAccessor {
static readonly "TYPE_NAME": string
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

public "getLevel"(arg0: integer): integer
public "getMaxLevel"(): integer
public "shoot"(arg0: $ItemStack$Type, arg1: $Supplier$Type<(float)>, arg2: $Supplier$Type<(float)>, arg3: boolean, arg4: $LivingEntity$Type): void
public "bolt"(arg0: $ItemStack$Type): void
public "melee"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type): void
public "fireSelect"(arg0: $ItemStack$Type): void
public "reloadAmmo"(arg0: $ItemStack$Type, arg1: integer, arg2: boolean): void
public "getExp"(arg0: integer): integer
public "getLevel"(arg0: $ItemStack$Type): integer
public "getAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ItemStack
public "getFireMode"(arg0: $ItemStack$Type): $FireMode
public "getAimingZoom"(arg0: $ItemStack$Type): float
public "getGunId"(arg0: $ItemStack$Type): $ResourceLocation
public "getAttachmentTag"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $CompoundTag
public "getAttachmentId"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): $ResourceLocation
public "setFireMode"(arg0: $ItemStack$Type, arg1: $FireMode$Type): void
public "getCurrentAmmoCount"(arg0: $ItemStack$Type): integer
public "reduceCurrentAmmoCount"(arg0: $ItemStack$Type): void
public "getMaxDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "setCurrentAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
public "setMaxDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "addDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "hasMaxDummyAmmo"(arg0: $ItemStack$Type): boolean
public "getExpCurrentLevel"(arg0: $ItemStack$Type): integer
public "unloadAttachment"(arg0: $ItemStack$Type, arg1: $AttachmentType$Type): void
public "setBulletInBarrel"(arg0: $ItemStack$Type, arg1: boolean): void
public "setGunId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "getExpToNextLevel"(arg0: $ItemStack$Type): integer
public "hasBulletInBarrel"(arg0: $ItemStack$Type): boolean
public "hasAttachmentLock"(arg0: $ItemStack$Type): boolean
public "useDummyAmmo"(arg0: $ItemStack$Type): boolean
public "installAttachment"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): void
public "setAttachmentLock"(arg0: $ItemStack$Type, arg1: boolean): void
public "getDummyAmmoAmount"(arg0: $ItemStack$Type): integer
public "setDummyAmmoAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "getExp"(arg0: $ItemStack$Type): integer
public static "getIGunOrNull"(arg0: $ItemStack$Type): $IGun
public static "getMainhandFireMode"(arg0: $LivingEntity$Type): $FireMode
public static "mainhandHoldGun"(arg0: $LivingEntity$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModernKineticGunItem$Type = ($ModernKineticGunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModernKineticGunItem_ = $ModernKineticGunItem$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$ReloadState$StateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ReloadState$StateType extends $Enum<($ReloadState$StateType)> {
static readonly "NOT_RELOADING": $ReloadState$StateType
static readonly "EMPTY_RELOAD_FEEDING": $ReloadState$StateType
static readonly "EMPTY_RELOAD_FINISHING": $ReloadState$StateType
static readonly "TACTICAL_RELOAD_FEEDING": $ReloadState$StateType
static readonly "TACTICAL_RELOAD_FINISHING": $ReloadState$StateType


public static "values"(): ($ReloadState$StateType)[]
public static "valueOf"(arg0: string): $ReloadState$StateType
public "isReloading"(): boolean
public "isReloadFinishing"(): boolean
public "isReloadingEmpty"(): boolean
public "isReloadingTactical"(): boolean
get "reloading"(): boolean
get "reloadFinishing"(): boolean
get "reloadingEmpty"(): boolean
get "reloadingTactical"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReloadState$StateType$Type = (("empty_reload_feeding") | ("empty_reload_finishing") | ("tactical_reload_finishing") | ("tactical_reload_feeding") | ("not_reloading")) | ($ReloadState$StateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReloadState$StateType_ = $ReloadState$StateType$Type;
}}
declare module "packages/com/tacz/guns/api/entity/$IGunOperator" {
import {$ReloadState, $ReloadState$Type} from "packages/com/tacz/guns/api/entity/$ReloadState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ShootResult, $ShootResult$Type} from "packages/com/tacz/guns/api/entity/$ShootResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IGunOperator {

 "reload"(): void
 "draw"(arg0: $Supplier$Type<($ItemStack$Type)>): void
 "aim"(arg0: boolean): void
 "shoot"(arg0: $Supplier$Type<(float)>, arg1: $Supplier$Type<(float)>): $ShootResult
 "getSynReloadState"(): $ReloadState
 "bolt"(): void
 "getSynBoltCoolDown"(): long
 "getSynIsAiming"(): boolean
 "needCheckAmmo"(): boolean
 "getSynDrawCoolDown"(): long
 "melee"(): void
 "zoom"(): void
 "consumesAmmoOrNot"(): boolean
 "fireSelect"(): void
 "getSynSprintTime"(): float
 "initialData"(): void
 "getSynMeleeCoolDown"(): long
 "getSynShootCoolDown"(): long
 "getSynAimingProgress"(): float
}

export namespace $IGunOperator {
function fromLivingEntity(arg0: $LivingEntity$Type): $IGunOperator
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGunOperator$Type = ($IGunOperator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGunOperator_ = $IGunOperator$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$AmmoBoxItemDataAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IAmmoBox, $IAmmoBox$Type} from "packages/com/tacz/guns/api/item/$IAmmoBox"

export interface $AmmoBoxItemDataAccessor extends $IAmmoBox {

 "isCreative"(arg0: $ItemStack$Type): boolean
 "setAmmoCount"(arg0: $ItemStack$Type, arg1: integer): void
 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "getAmmoCount"(arg0: $ItemStack$Type): integer
 "getAmmoLevel"(arg0: $ItemStack$Type): integer
 "isAllTypeCreative"(arg0: $ItemStack$Type): boolean
 "isAmmoBoxOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "setCreative"(arg0: $ItemStack$Type, arg1: boolean): $ItemStack
 "setAmmoLevel"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
}

export namespace $AmmoBoxItemDataAccessor {
const AMMO_ID_TAG: string
const AMMO_COUNT_TAG: string
const CREATIVE_TAG: string
const ALL_TYPE_CREATIVE_TAG: string
const LEVEL_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoBoxItemDataAccessor$Type = ($AmmoBoxItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoBoxItemDataAccessor_ = $AmmoBoxItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/item/$AmmoItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IAmmo, $IAmmo$Type} from "packages/com/tacz/guns/api/item/$IAmmo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AmmoItemDataAccessor, $AmmoItemDataAccessor$Type} from "packages/com/tacz/guns/api/item/nbt/$AmmoItemDataAccessor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmmoItem extends $Item implements $AmmoItemDataAccessor {
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

public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public static "fillItemCategory"(): $NonNullList<($ItemStack)>
public "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
public "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
public "isAmmoOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public static "getIAmmoOrNull"(arg0: $ItemStack$Type): $IAmmo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoItem$Type = ($AmmoItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoItem_ = $AmmoItem$Type;
}}
declare module "packages/com/tacz/guns/api/item/$GunTabType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GunTabType extends $Enum<($GunTabType)> {
static readonly "PISTOL": $GunTabType
static readonly "SNIPER": $GunTabType
static readonly "RIFLE": $GunTabType
static readonly "SHOTGUN": $GunTabType
static readonly "SMG": $GunTabType
static readonly "RPG": $GunTabType
static readonly "MG": $GunTabType


public static "values"(): ($GunTabType)[]
public static "valueOf"(arg0: string): $GunTabType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunTabType$Type = (("shotgun") | ("sniper") | ("rpg") | ("mg") | ("pistol") | ("smg") | ("rifle")) | ($GunTabType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunTabType_ = $GunTabType$Type;
}}
declare module "packages/com/tacz/guns/crafting/$GunSmithTableIngredient" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $GunSmithTableIngredient {

constructor(arg0: $Ingredient$Type, arg1: integer)

public "getCount"(): integer
public "getIngredient"(): $Ingredient
get "count"(): integer
get "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunSmithTableIngredient$Type = ($GunSmithTableIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GunSmithTableIngredient_ = $GunSmithTableIngredient$Type;
}}
declare module "packages/com/tacz/guns/api/item/nbt/$AmmoItemDataAccessor" {
import {$IAmmo, $IAmmo$Type} from "packages/com/tacz/guns/api/item/$IAmmo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AmmoItemDataAccessor extends $IAmmo {

 "getAmmoId"(arg0: $ItemStack$Type): $ResourceLocation
 "setAmmoId"(arg0: $ItemStack$Type, arg1: $ResourceLocation$Type): void
 "isAmmoOfGun"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}

export namespace $AmmoItemDataAccessor {
const AMMO_ID_TAG: string
function getIAmmoOrNull(arg0: $ItemStack$Type): $IAmmo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmmoItemDataAccessor$Type = ($AmmoItemDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmmoItemDataAccessor_ = $AmmoItemDataAccessor$Type;
}}
declare module "packages/com/tacz/guns/init/$ModParticles$ModParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ModParticles$ModParticleType<T extends $ParticleOptions> extends $ParticleType<(T)> {

constructor(arg0: boolean, arg1: $ParticleOptions$Deserializer$Type<(T)>, arg2: $Codec$Type<(T)>)

public "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModParticles$ModParticleType$Type<T> = ($ModParticles$ModParticleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModParticles$ModParticleType_<T> = $ModParticles$ModParticleType$Type<(T)>;
}}
