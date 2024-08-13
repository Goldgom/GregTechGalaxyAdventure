declare module "packages/de/srendi/advancedperipherals/common/util/fakeplayer/$APFakePlayer" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$FFPlayer, $FFPlayer$Type} from "packages/snownee/fruits/duck/$FFPlayer"
import {$FakePlayer, $FakePlayer$Type} from "packages/net/minecraftforge/common/util/$FakePlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$KnockBackModifier, $KnockBackModifier$Type} from "packages/com/tacz/guns/api/entity/$KnockBackModifier"
import {$ServerPlayerGameMode, $ServerPlayerGameMode$Type} from "packages/net/minecraft/server/level/$ServerPlayerGameMode"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$InventoryMenu, $InventoryMenu$Type} from "packages/net/minecraft/world/inventory/$InventoryMenu"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FoodData, $FoodData$Type} from "packages/net/minecraft/world/food/$FoodData"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$PlayerEnderChestContainer, $PlayerEnderChestContainer$Type} from "packages/net/minecraft/world/inventory/$PlayerEnderChestContainer"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$EntityDraggingInformation, $EntityDraggingInformation$Type} from "packages/org/valkyrienskies/mod/common/util/$EntityDraggingInformation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$FishingHook, $FishingHook$Type} from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Pair, $Pair$Type} from "packages/de/srendi/advancedperipherals/common/util/$Pair"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $APFakePlayer extends $FakePlayer {
static readonly "PROFILE": $GameProfile
 "connection": $ServerGamePacketListenerImpl
readonly "server": $MinecraftServer
readonly "gameMode": $ServerPlayerGameMode
 "camera": $Entity
 "containerCounter": integer
 "latency": integer
 "wonGame": boolean
static readonly "PERSISTED_NBT_TAG": string
static readonly "MAX_NAME_LENGTH": integer
static readonly "MAX_HEALTH": integer
static readonly "SLEEP_DURATION": integer
static readonly "WAKE_UP_DURATION": integer
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "CROUCH_BB_HEIGHT": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MODE_CUSTOMISATION": $EntityDataAccessor<(byte)>
static readonly "DATA_PLAYER_MAIN_HAND": $EntityDataAccessor<(byte)>
static readonly "DATA_SHOULDER_LEFT": $EntityDataAccessor<($CompoundTag)>
static readonly "DATA_SHOULDER_RIGHT": $EntityDataAccessor<($CompoundTag)>
 "enderChestInventory": $PlayerEnderChestContainer
readonly "inventoryMenu": $InventoryMenu
 "containerMenu": $AbstractContainerMenu
 "foodData": $FoodData
 "jumpTriggerTime": integer
 "oBob": float
 "bob": float
 "takeXpDelay": integer
 "xCloakO": double
 "yCloakO": double
 "zCloakO": double
 "xCloak": double
 "yCloak": double
 "zCloak": double
 "sleepCounter": integer
 "wasUnderwater": boolean
 "experienceLevel": integer
 "totalExperience": integer
 "experienceProgress": float
 "enchantmentSeed": integer
readonly "defaultFlySpeed": float
 "fishing": $FishingHook
 "hurtDir": float
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "LIVING_ENTITY_FLAG_IS_USING": integer
static readonly "LIVING_ENTITY_FLAG_OFF_HAND": integer
static readonly "LIVING_ENTITY_FLAG_SPIN_ATTACK": integer
static readonly "DATA_LIVING_ENTITY_FLAGS": $EntityDataAccessor<(byte)>
static readonly "SLEEPING_DIMENSIONS": $EntityDimensions
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
readonly "activeEffects": $Map<($MobEffect), ($MobEffectInstance)>
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "noActionTime": integer
 "oRun": float
 "run": float
 "animStep": float
 "animStepO": float
 "rotOffs": float
 "deathScore": integer
 "lastHurt": float
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lerpSteps": integer
 "lerpX": double
 "lerpY": double
 "lerpZ": double
 "lerpYRot": double
 "lerpXRot": double
 "lyHeadRot": double
 "lerpHeadSteps": integer
 "effectsDirty": boolean
 "useItem": $ItemStack
 "useItemRemaining": integer
 "fallFlyTicks": integer
 "autoSpinAttackTicks": integer
 "brain": $Brain<(any)>
 "updateClimbingMobCachingSectionOnChange": boolean
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

constructor(arg0: $ServerLevel$Type, arg1: $Entity$Type, arg2: $GameProfile$Type)

public "use"(arg0: boolean, arg1: boolean, arg2: $Predicate$Type<($Entity$Type)>): $InteractionResult
public "use"(arg0: boolean, arg1: boolean): $InteractionResult
public "awardStat"(arg0: $Stat$Type<(any)>): void
public "getEyeHeight"(arg0: $Pose$Type): float
public "setLevel"(arg0: $Level$Type): void
public "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float): void
public "isSilent"(): boolean
public "canAttack"(arg0: $LivingEntity$Type): boolean
public static "wrapActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$Type<($APFakePlayer$Type), (T)>): $Function<($APFakePlayer), (T)>
public "doActionWithShiftKey"<T>(arg0: boolean, arg1: $Function$Type<($APFakePlayer$Type), (T)>): T
public "useOnFilteredEntity"(arg0: $Predicate$Type<($Entity$Type)>): $InteractionResult
public "useOnSpecificEntity"(arg0: $Entity$Type, arg1: $HitResult$Type): $InteractionResult
public static "wrapActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$Type<($APFakePlayer$Type), (T)>): $Function<($APFakePlayer), (T)>
public "doActionWithRot"<T>(arg0: float, arg1: float, arg2: $Function$Type<($APFakePlayer$Type), (T)>): T
public "digBlock"(): $Pair<(boolean), (string)>
/**
 * 
 * @deprecated
 */
public "digBlock"(arg0: $Direction$Type): $Pair<(boolean), (string)>
public "useOnBlock"(): $InteractionResult
public "useOnEntity"(): $InteractionResult
public "findHit"(arg0: boolean, arg1: boolean, arg2: $Predicate$Type<($Entity$Type)>): $HitResult
public "findHit"(arg0: boolean, arg1: boolean): $HitResult
public static "of"(arg0: any): $FFPlayer
public "vs$shouldDrag"(): boolean
public "getDraggingInformation"(): $EntityDraggingInformation
public "getCachedFeetBlockState"(): $BlockState
public static "fromLivingEntity"(arg0: $LivingEntity$Type): $KnockBackModifier
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "level"(value: $Level$Type)
get "silent"(): boolean
get "draggingInformation"(): $EntityDraggingInformation
get "cachedFeetBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APFakePlayer$Type = ($APFakePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APFakePlayer_ = $APFakePlayer$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralPlugin" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$BoundMethod, $BoundMethod$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"

export interface $IPeripheralPlugin {

 "getMethods"(): $List<($BoundMethod)>
 "getOperations"(): ($IPeripheralOperation<(any)>)[]
 "isSuitable"(arg0: $IPeripheral$Type): boolean
}

export namespace $IPeripheralPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralPlugin$Type = ($IPeripheralPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralPlugin_ = $IPeripheralPlugin$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlockEntityBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BaseBlock, $BaseBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BaseBlockEntityBlock extends $BaseBlock implements $EntityBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
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

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockEntityBlock$Type = ($BaseBlockEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockEntityBlock_ = $BaseBlockEntityBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$BoundMethod, $BoundMethod$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"
import {$IPeripheralFunction, $IPeripheralFunction$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$IPeripheralPlugin, $IPeripheralPlugin$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralPlugin"
import {$OperationAbility$FailReason, $OperationAbility$FailReason$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility$FailReason"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IOwnerAbility, $IOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility"
import {$IPeripheralCheck, $IPeripheralCheck$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralCheck"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OperationAbility implements $IOwnerAbility, $IPeripheralPlugin {

constructor(arg0: $IPeripheralOwner$Type)

public "isOnCooldown"(arg0: $IPeripheralOperation$Type<(any)>): boolean
public "collectConfiguration"(arg0: $Map$Type<(string), (any)>): void
public "registerOperation"(arg0: $IPeripheralOperation$Type<(any)>): void
public "performOperation"<T>(arg0: $IPeripheralOperation$Type<(T)>, arg1: T, arg2: $IPeripheralCheck$Type<(T)>, arg3: $IPeripheralFunction$Type<(T), ($MethodResult$Type)>, arg4: $Consumer$Type<(T)>, arg5: $BiConsumer$Type<($MethodResult$Type), ($OperationAbility$FailReason$Type)>): $MethodResult
public "getOperationCooldown"(arg0: string): $MethodResult
public "getCurrentCooldown"(arg0: $IPeripheralOperation$Type<(any)>): integer
public "getMethods"(): $List<($BoundMethod)>
public "getOperations"(): ($IPeripheralOperation<(any)>)[]
public "isSuitable"(arg0: $IPeripheral$Type): boolean
get "methods"(): $List<($BoundMethod)>
get "operations"(): ($IPeripheralOperation<(any)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$Type = ($OperationAbility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationAbility_ = $OperationAbility$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility$FailReason" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $OperationAbility$FailReason extends $Enum<($OperationAbility$FailReason)> {
static readonly "COOLDOWN": $OperationAbility$FailReason
static readonly "NOT_ENOUGH_FUEL": $OperationAbility$FailReason
static readonly "CHECK_FAILED": $OperationAbility$FailReason


public static "values"(): ($OperationAbility$FailReason)[]
public static "valueOf"(arg0: string): $OperationAbility$FailReason
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationAbility$FailReason$Type = (("check_failed") | ("cooldown") | ("not_enough_fuel")) | ($OperationAbility$FailReason);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationAbility$FailReason_ = $OperationAbility$FailReason$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$MemoryCardItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseItem, $BaseItem$Type} from "packages/de/srendi/advancedperipherals/common/items/base/$BaseItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemoryCardItem extends $BaseItem {
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

public "isEnabled"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCardItem$Type = ($MemoryCardItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCardItem_ = $MemoryCardItem$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation" {
import {$IConfigHandler, $IConfigHandler$Type} from "packages/de/srendi/advancedperipherals/lib/misc/$IConfigHandler"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IPeripheralOperation<T> extends $IConfigHandler {

 "getCost"(arg0: T): integer
 "computerDescription"(): $Map<(string), (any)>
 "getInitialCooldown"(): integer
 "getCooldown"(arg0: T): integer
 "name"(): string
 "settingsName"(): string
 "settingsPostfix"(): string
 "addToConfig"(arg0: $ForgeConfigSpec$Builder$Type): void
}

export namespace $IPeripheralOperation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOperation$Type<T> = ($IPeripheralOperation<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralOperation_<T> = $IPeripheralOperation$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/blockentities/$PlayerDetectorEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$PlayerDetectorPeripheral, $PlayerDetectorPeripheral$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/peripheral/$PlayerDetectorPeripheral"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$PeripheralBlockEntity"

export class $PlayerDetectorEntity extends $PeripheralBlockEntity<($PlayerDetectorPeripheral)> {
 "lockKey": $LockCode
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "handleTick"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): void
public "getDisplayName"(): $Component
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorEntity$Type = ($PlayerDetectorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorEntity_ = $PlayerDetectorEntity$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/misc/$IConfigHandler" {
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"

export interface $IConfigHandler {

 "name"(): string
 "settingsName"(): string
 "settingsPostfix"(): string
 "addToConfig"(arg0: $ForgeConfigSpec$Builder$Type): void
}

export namespace $IConfigHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigHandler$Type = ($IConfigHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigHandler_ = $IConfigHandler$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/base/$BaseItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BaseItem extends $Item {
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
constructor()

public "isEnabled"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDescription"(): $Component
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseItem$Type = ($BaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseItem_ = $BaseItem$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$PeripheralMethod, $PeripheralMethod$Type} from "packages/dan200/computercraft/core/methods/$PeripheralMethod"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"

export class $BoundMethod {

constructor(arg0: any, arg1: string, arg2: $PeripheralMethod$Type)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: $IArguments$Type): $MethodResult
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundMethod$Type = ($BoundMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundMethod_ = $BoundMethod$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/base/$BaseBlockItem" {
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

export class $BaseBlockItem extends $BlockItem {
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
constructor(arg0: $Block$Type)

public "isEnabled"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getDescription"(): $Component
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "enabled"(): boolean
get "description"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlockItem$Type = ($BaseBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlockItem_ = $BaseBlockItem$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$BasePeripheral" {
import {$IBasePeripheral, $IBasePeripheral$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IBasePeripheral"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$IDynamicPeripheral, $IDynamicPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IDynamicPeripheral"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasePeripheral<O extends $IPeripheralOwner> implements $IBasePeripheral<(O)>, $IDynamicPeripheral {


public "getName"(): string
public "equals"(arg0: $IPeripheral$Type): boolean
public "getType"(): string
public "getTarget"(): any
public "attach"(arg0: $IComputerAccess$Type): void
public "detach"(arg0: $IComputerAccess$Type): void
public "getConfiguration"(): $Map<(string), (any)>
public "getMethodNames"(): (string)[]
public "callMethod"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: integer, arg3: $IArguments$Type): $MethodResult
public "getPeripheralConfiguration"(): $Map<(string), (any)>
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "getPeripheralOwner"(): O
public "isEnabled"(): boolean
public "getAdditionalTypes"(): $Set<(string)>
get "name"(): string
get "type"(): string
get "target"(): any
get "configuration"(): $Map<(string), (any)>
get "methodNames"(): (string)[]
get "peripheralConfiguration"(): $Map<(string), (any)>
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "peripheralOwner"(): O
get "enabled"(): boolean
get "additionalTypes"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePeripheral$Type<O> = ($BasePeripheral<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePeripheral_<O> = $BasePeripheral$Type<(O)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$APBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BaseBlockItem, $BaseBlockItem$Type} from "packages/de/srendi/advancedperipherals/common/items/base/$BaseBlockItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $APBlockItem extends $BaseBlockItem {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $Supplier$Type<(boolean)>)
constructor(arg0: $Block$Type, arg1: $Supplier$Type<(boolean)>)

public "isEnabled"(): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockItem$Type = ($APBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APBlockItem_ = $APBlockItem$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/metaphysics/$IFeedableAutomataCore" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFeedableAutomataCore {

}

export namespace $IFeedableAutomataCore {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFeedableAutomataCore$Type = ($IFeedableAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFeedableAutomataCore_ = $IFeedableAutomataCore$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralTileEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"

export interface $IPeripheralTileEntity {

 "getPeripheralSettings"(): $CompoundTag
 "markSettingsChanged"(): void
 "handleTick"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): void
}

export namespace $IPeripheralTileEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralTileEntity$Type = ($IPeripheralTileEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralTileEntity_ = $IPeripheralTileEntity$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$IHarvestableBlock" {
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $IHarvestableBlock {

 "getHarvestTag"(): $TagKey<($Block)>
 "getToolTag"(): $TagKey<($Block)>

(): $TagKey<($Block)>
}

export namespace $IHarvestableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHarvestableBlock$Type = ($IHarvestableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHarvestableBlock_ = $IHarvestableBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$WeakAutomataCore" {
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
import {$IFeedableAutomataCore, $IFeedableAutomataCore$Type} from "packages/de/srendi/advancedperipherals/lib/metaphysics/$IFeedableAutomataCore"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$APItem, $APItem$Type} from "packages/de/srendi/advancedperipherals/common/items/$APItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WeakAutomataCore extends $APItem implements $IFeedableAutomataCore {
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
constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeakAutomataCore$Type = ($WeakAutomataCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeakAutomataCore_ = $WeakAutomataCore$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PeripheralOwnerAbility, $PeripheralOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$PeripheralOwnerAbility"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IOwnerAbility, $IOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$APFakePlayer, $APFakePlayer$Type} from "packages/de/srendi/advancedperipherals/common/util/fakeplayer/$APFakePlayer"

export interface $IPeripheralOwner {

 "getOwner"(): $Player
 "move"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "getLevel"(): $Level
 "getOrientation"(): $FrontAndTop
 "getFacing"(): $Direction
 "getPos"(): $BlockPos
 "getDataStorage"(): $CompoundTag
 "getCustomName"(): string
 "getAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$Type<(T)>): T
 "getAbilities"(): $Collection<($IOwnerAbility)>
 "attachOperation"(...arg0: ($IPeripheralOperation$Type<(any)>)[]): void
 "attachOperation"(arg0: $Collection$Type<($IPeripheralOperation$Type<(any)>)>): void
 "markDataStorageDirty"(): void
 "withPlayer"<T>(arg0: $Function$Type<($APFakePlayer$Type), (T)>): T
 "getToolInMainHand"(): $ItemStack
 "destroyUpgrade"(): void
 "storeItem"(arg0: $ItemStack$Type): $ItemStack
 "isMovementPossible"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "attachAbility"<T extends $IOwnerAbility>(arg0: $PeripheralOwnerAbility$Type<(T)>, arg1: T): void
}

export namespace $IPeripheralOwner {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOwner$Type = ($IPeripheralOwner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralOwner_ = $IPeripheralOwner$Type;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPeripheralFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $IPeripheralFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralFunction$Type<T, R> = ($IPeripheralFunction<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralFunction_<T, R> = $IPeripheralFunction$Type<(T), (R)>;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IBasePeripheral" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $IBasePeripheral<T extends $IPeripheralOwner> extends $IPeripheral {

 "isEnabled"(): boolean
 "getConnectedComputers"(): $Iterable<($IComputerAccess)>
 "getPeripheralOwner"(): T
 "equals"(arg0: $IPeripheral$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$Type): void
 "detach"(arg0: $IComputerAccess$Type): void
 "getAdditionalTypes"(): $Set<(string)>
}

export namespace $IBasePeripheral {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasePeripheral$Type<T> = ($IBasePeripheral<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBasePeripheral_<T> = $IBasePeripheral$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$FuelAbility" {
import {$IPeripheralPlugin, $IPeripheralPlugin$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralPlugin"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$BoundMethod, $BoundMethod$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BoundMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IOwnerAbility, $IOwnerAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility"
import {$IPeripheralOperation, $IPeripheralOperation$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralOperation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FuelAbility<T extends $IPeripheralOwner> implements $IOwnerAbility, $IPeripheralPlugin {

constructor(arg0: T)

public "addFuel"(arg0: integer): void
public "consumeFuel"(arg0: integer, arg1: boolean): boolean
public "getFuelLevel"(): integer
public "collectConfiguration"(arg0: $Map$Type<(string), (any)>): void
public "reduceCooldownAccordingToConsumptionRate"(arg0: integer): integer
public "isFuelConsumptionDisable"(): boolean
public "getFuelConsumptionMultiply"(): integer
public "getFuelConsumptionRate"(): integer
public "setFuelConsumptionRate"(arg0: integer): $MethodResult
public "getFuelCount"(): integer
public "getFuelMaxCount"(): integer
public "getMaxFuelLevel"(): integer
public "getMethods"(): $List<($BoundMethod)>
public "getOperations"(): ($IPeripheralOperation<(any)>)[]
public "isSuitable"(arg0: $IPeripheral$Type): boolean
get "fuelLevel"(): integer
get "fuelConsumptionDisable"(): boolean
get "fuelConsumptionMultiply"(): integer
get "fuelConsumptionRate"(): integer
set "fuelConsumptionRate"(value: integer)
get "fuelCount"(): integer
get "fuelMaxCount"(): integer
get "maxFuelLevel"(): integer
get "methods"(): $List<($BoundMethod)>
get "operations"(): ($IPeripheralOperation<(any)>)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelAbility$Type<T> = ($FuelAbility<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelAbility_<T> = $FuelAbility$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IOwnerAbility" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IOwnerAbility {

 "collectConfiguration"(arg0: $Map$Type<(string), (any)>): void
}

export namespace $IOwnerAbility {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOwnerAbility$Type = ($IOwnerAbility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOwnerAbility_ = $IOwnerAbility$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/$RedstoneIntegratorBlock" {
import {$BaseBlockEntityBlock, $BaseBlockEntityBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlockEntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RedstoneIntegratorBlock extends $BaseBlockEntityBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
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

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneIntegratorBlock$Type = ($RedstoneIntegratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RedstoneIntegratorBlock_ = $RedstoneIntegratorBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$PeripheralBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$WorldlyContainer, $WorldlyContainer$Type} from "packages/net/minecraft/world/$WorldlyContainer"
import {$IPeripheralTileEntity, $IPeripheralTileEntity$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralTileEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BasePeripheral, $BasePeripheral$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BasePeripheral"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$LockCode, $LockCode$Type} from "packages/net/minecraft/world/$LockCode"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$BaseContainerBlockEntity, $BaseContainerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BaseContainerBlockEntity"

export class $PeripheralBlockEntity<T extends $BasePeripheral<(any)>> extends $BaseContainerBlockEntity implements $WorldlyContainer, $MenuProvider, $IPeripheralTileEntity {
 "lockKey": $LockCode
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T1>(arg0: $Capability$Type<(T1)>, arg1: $Direction$Type): $LazyOptional<(T1)>
public "getSlotsForFace"(arg0: $Direction$Type): (integer)[]
public "canPlaceItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "canTakeItemThroughFace"(arg0: integer, arg1: $ItemStack$Type, arg2: $Direction$Type): boolean
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "invalidateCaps"(): void
public "getPeripheralSettings"(): $CompoundTag
public "markSettingsChanged"(): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "load"(arg0: $CompoundTag$Type): void
public "saveAdditional"(arg0: $CompoundTag$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "getDisplayName"(): $Component
public "handleTick"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): void
public "setChanged"(): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "empty"(): boolean
get "peripheralSettings"(): $CompoundTag
get "containerSize"(): integer
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralBlockEntity$Type<T> = ($PeripheralBlockEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralBlockEntity_<T> = $PeripheralBlockEntity$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$PeripheralOwnerAbility" {
import {$FuelAbility, $FuelAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$FuelAbility"
import {$OperationAbility, $OperationAbility$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$OperationAbility"

export class $PeripheralOwnerAbility<T> {
static readonly "FUEL": $PeripheralOwnerAbility<($FuelAbility<(any)>)>
static readonly "OPERATION": $PeripheralOwnerAbility<($OperationAbility)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralOwnerAbility$Type<T> = ($PeripheralOwnerAbility<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralOwnerAbility_<T> = $PeripheralOwnerAbility$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/util/$Pair" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $Pair<T, V> {

constructor(arg0: T, arg1: V)

public static "of"<T, V>(arg0: T, arg1: V): $Pair<(T), (V)>
public "reduce"<R>(arg0: $BiFunction$Type<(T), (V), (R)>): R
public "getRight"(): V
public "getLeft"(): T
public "mapRight"<V1>(arg0: $Function$Type<(V), (V1)>): $Pair<(T), (V1)>
public "mapBoth"<T1, V1>(arg0: $BiFunction$Type<(T), (V), ($Pair$Type<(T1), (V1)>)>): $Pair<(T1), (V1)>
public "mapLeft"<T1>(arg0: $Function$Type<(T), (T1)>): $Pair<(T1), (V)>
public "ifLeftPresent"(arg0: $Consumer$Type<(T)>): void
public "ignoreRight"<V1>(): $Pair<(T), (V1)>
public static "onlyRight"<T, V>(arg0: V): $Pair<(T), (V)>
public "ifRightPresent"(arg0: $Consumer$Type<(V)>): void
public "leftPresent"(): boolean
public static "onlyLeft"<T, V>(arg0: T): $Pair<(T), (V)>
public "ignoreLeft"<T1>(): $Pair<(T1), (V)>
public "rightPresent"(): boolean
get "right"(): V
get "left"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<T, V> = ($Pair<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<T, V> = $Pair$Type<(T), (V)>;
}}
declare module "packages/de/srendi/advancedperipherals/lib/peripherals/$IPeripheralCheck" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"

export interface $IPeripheralCheck<T> {

 "check"(arg0: T): $MethodResult
 "checkAlso"(arg0: $IPeripheralCheck$Type<(T)>): $IPeripheralCheck<(T)>

(arg0: T): $MethodResult
}

export namespace $IPeripheralCheck {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralCheck$Type<T> = ($IPeripheralCheck<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheralCheck_<T> = $IPeripheralCheck$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/$PlayerDetectorBlock" {
import {$PlayerDetectorEntity, $PlayerDetectorEntity$Type} from "packages/de/srendi/advancedperipherals/common/blocks/blockentities/$PlayerDetectorEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$APBlockEntityBlock, $APBlockEntityBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$APBlockEntityBlock"

export class $PlayerDetectorBlock extends $APBlockEntityBlock<($PlayerDetectorEntity)> {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
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

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorBlock$Type = ($PlayerDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorBlock_ = $PlayerDetectorBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$APBlockEntityBlock" {
import {$BaseBlockEntityBlock, $BaseBlockEntityBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlockEntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $APBlockEntityBlock<T extends $BlockEntity> extends $BaseBlockEntityBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
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

constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: $BlockBehaviour$Properties$Type, arg2: boolean)
constructor(arg0: $RegistryObject$Type<($BlockEntityType$Type<(T)>)>, arg1: boolean)

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APBlockEntityBlock$Type<T> = ($APBlockEntityBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APBlockEntityBlock_<T> = $APBlockEntityBlock$Type<(T)>;
}}
declare module "packages/de/srendi/advancedperipherals/common/addons/computercraft/peripheral/$PlayerDetectorPeripheral" {
import {$TurtleSide, $TurtleSide$Type} from "packages/dan200/computercraft/api/turtle/$TurtleSide"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$BasePeripheral, $BasePeripheral$Type} from "packages/de/srendi/advancedperipherals/lib/peripherals/$BasePeripheral"
import {$IPeripheralOwner, $IPeripheralOwner$Type} from "packages/de/srendi/advancedperipherals/common/addons/computercraft/owner/$IPeripheralOwner"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPocketAccess, $IPocketAccess$Type} from "packages/dan200/computercraft/api/pocket/$IPocketAccess"
import {$ITurtleAccess, $ITurtleAccess$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleAccess"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$PeripheralBlockEntity, $PeripheralBlockEntity$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$PeripheralBlockEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlayerDetectorPeripheral extends $BasePeripheral<($IPeripheralOwner)> {
static readonly "PERIPHERAL_TYPE": string

constructor(arg0: $IPocketAccess$Type)
constructor(arg0: $ITurtleAccess$Type, arg1: $TurtleSide$Type)
constructor(arg0: $PeripheralBlockEntity$Type<(any)>)

public "isEnabled"(): boolean
public "isPlayerInCubic"(arg0: integer, arg1: integer, arg2: integer, arg3: string): boolean
public "getPlayerPos"(arg0: $IArguments$Type): $Map<(string), (any)>
public "isPlayersInRange"(arg0: integer): boolean
public "getPlayersInRange"(arg0: integer): $List<(string)>
public "getPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): $List<(string)>
public "isPlayersInCoords"(arg0: $Map$Type<(any), (any)>, arg1: $Map$Type<(any), (any)>): boolean
public "isPlayerInRange"(arg0: integer, arg1: string): boolean
public "getOnlinePlayers"(): (string)[]
public "getPlayersInCoords"(arg0: $Map$Type<(any), (any)>, arg1: $Map$Type<(any), (any)>): $MethodResult
public "isPlayersInCubic"(arg0: integer, arg1: integer, arg2: integer): boolean
public "isPlayerInCoords"(arg0: $Map$Type<(any), (any)>, arg1: $Map$Type<(any), (any)>, arg2: string): boolean
get "enabled"(): boolean
get "onlinePlayers"(): (string)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDetectorPeripheral$Type = ($PlayerDetectorPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDetectorPeripheral_ = $PlayerDetectorPeripheral$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/blocks/base/$BaseBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IHarvestableBlock, $IHarvestableBlock$Type} from "packages/de/srendi/advancedperipherals/common/blocks/base/$IHarvestableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BaseBlock extends $Block implements $IHarvestableBlock {
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $TagKey$Type<($Block$Type)>)
constructor(arg0: $TagKey$Type<($Block$Type)>)
constructor()

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getHarvestTag"(): $TagKey<($Block)>
public "getToolTag"(): $TagKey<($Block)>
get "harvestTag"(): $TagKey<($Block)>
get "toolTag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBlock$Type = ($BaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBlock_ = $BaseBlock$Type;
}}
declare module "packages/de/srendi/advancedperipherals/common/items/$APItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BaseItem, $BaseItem$Type} from "packages/de/srendi/advancedperipherals/common/items/base/$BaseItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $APItem extends $BaseItem {
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

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<(boolean)>)
constructor(arg0: $Supplier$Type<(boolean)>)

public "isEnabled"(): boolean
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $APItem$Type = ($APItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $APItem_ = $APItem$Type;
}}
