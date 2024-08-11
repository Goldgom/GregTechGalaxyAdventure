declare module "packages/yesman/epicfight/api/utils/math/$ValueModifier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ValueModifier {

constructor(arg0: float, arg1: float, arg2: float)

public "toString"(): string
public "merge"(arg0: $ValueModifier$Type): void
public static "empty"(): $ValueModifier
public static "multiplier"(arg0: float): $ValueModifier
public static "adder"(arg0: float): $ValueModifier
public "getTotalValue"(arg0: float): float
public static "setter"(arg0: float): $ValueModifier
set "ter"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueModifier$Type = ($ValueModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ValueModifier_ = $ValueModifier$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillContainer" {
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillDataManager, $SkillDataManager$Type} from "packages/yesman/epicfight/skill/$SkillDataManager"
import {$SkillExecuteEvent, $SkillExecuteEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillExecuteEvent"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$ControllEngine, $ControllEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControllEngine"

export class $SkillContainer {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillSlot$Type)

public "equals"(arg0: any): boolean
public "update"(): void
public "isEmpty"(): boolean
public "getResource"(arg0: float): float
public "getResource"(): float
public "getSlot"(): $SkillSlot
public "getStack"(): integer
public "canExecute"(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillExecuteEvent$Type): boolean
public "activate"(): void
public "deactivate"(): void
public "isFull"(): boolean
public "setDuration"(arg0: integer): void
public "setStack"(arg0: integer): void
public "isDisabled"(): boolean
public "getSkill"(): $Skill
public "sendExecuteRequest"(arg0: $LocalPlayerPatch$Type, arg1: $ControllEngine$Type): $SkillExecuteEvent
public "setResource"(arg0: float): void
public "setSkill"(arg0: $Skill$Type): boolean
public "setSkill"(arg0: $Skill$Type, arg1: boolean): boolean
public "setExecuter"(arg0: $PlayerPatch$Type<(any)>): void
public "hasSkill"(arg0: $Skill$Type): boolean
public "setDisabled"(arg0: boolean): void
public "getSlotId"(): integer
public "isActivated"(): boolean
public "getMaxResource"(): float
public "getExecuter"(): $PlayerPatch<(any)>
public "setMaxDuration"(arg0: integer): void
public "setMaxResource"(arg0: float): void
public "getDataManager"(): $SkillDataManager
public "getRemainDuration"(): integer
public "requestCancel"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): boolean
public "requestCharging"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): boolean
public "requestExecute"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): boolean
public "resetValues"(): void
public "getDurationRatio"(arg0: float): float
public "getNeededResource"(): float
get "empty"(): boolean
get "resource"(): float
get "slot"(): $SkillSlot
get "stack"(): integer
get "full"(): boolean
set "duration"(value: integer)
set "stack"(value: integer)
get "disabled"(): boolean
get "skill"(): $Skill
set "resource"(value: float)
set "skill"(value: $Skill$Type)
set "executer"(value: $PlayerPatch$Type<(any)>)
set "disabled"(value: boolean)
get "slotId"(): integer
get "activated"(): boolean
get "maxResource"(): float
get "executer"(): $PlayerPatch<(any)>
set "maxDuration"(value: integer)
set "maxResource"(value: float)
get "dataManager"(): $SkillDataManager
get "remainDuration"(): integer
get "neededResource"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillContainer$Type = ($SkillContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillContainer_ = $SkillContainer$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch$AnimationPacketProvider" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$SPPlayAnimation, $SPPlayAnimation$Type} from "packages/yesman/epicfight/network/server/$SPPlayAnimation"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $LivingEntityPatch$AnimationPacketProvider {

 "get"(arg0: $StaticAnimation$Type, arg1: float, arg2: $LivingEntityPatch$Type<(any)>): $SPPlayAnimation

(arg0: $StaticAnimation$Type, arg1: float, arg2: $LivingEntityPatch$Type<(any)>): $SPPlayAnimation
}

export namespace $LivingEntityPatch$AnimationPacketProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityPatch$AnimationPacketProvider$Type = ($LivingEntityPatch$AnimationPacketProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityPatch$AnimationPacketProvider_ = $LivingEntityPatch$AnimationPacketProvider$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$LivingEntityPatch$AnimationPacketProvider, $LivingEntityPatch$AnimationPacketProvider$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch$AnimationPacketProvider"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$ChargeableSkill, $ChargeableSkill$Type} from "packages/yesman/epicfight/skill/$ChargeableSkill"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ServerPlayerPatch extends $PlayerPatch<($ServerPlayer)> {
static readonly "STAMINA": $EntityDataAccessor<(float)>
static readonly "STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "MAX_STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "EXECUTION_RESISTANCE": $EntityDataAccessor<(integer)>
static readonly "AIRBORNE": $EntityDataAccessor<(boolean)>
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "getTarget"(): $LivingEntity
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "setLastAttackSuccess"(arg0: boolean): void
public "onJoinWorld"(arg0: $ServerPlayer$Type, arg1: $EntityJoinLevelEvent$Type): void
public "updateMotion"(arg0: boolean): void
public "gatherDamageDealt"(arg0: $EpicFightDamageSource$Type, arg1: float): void
public "tryHurt"(arg0: $DamageSource$Type, arg1: float): $AttackResult
public "reserveAnimation"(arg0: $StaticAnimation$Type): void
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type): void
public "onDodgeSuccess"(arg0: $DamageSource$Type): void
public "isTeammate"(arg0: $Entity$Type): boolean
public "setGrapplingTarget"(arg0: $LivingEntity$Type): void
public "onStartTracking"(arg0: $ServerPlayer$Type): void
public "playAnimationSynchronized"(arg0: $StaticAnimation$Type, arg1: float, arg2: $LivingEntityPatch$AnimationPacketProvider$Type): void
public "changeModelYRot"(arg0: float): void
public "startSkillCharging"(arg0: $ChargeableSkill$Type): void
public "consumeStamina"(arg0: float): boolean
public "toMiningMode"(arg0: boolean): void
public "toBattleMode"(arg0: boolean): void
public "setAttackTarget"(arg0: $LivingEntity$Type): void
public "modifyLivingMotionByCurrentItem"(): void
get "target"(): $LivingEntity
set "lastAttackSuccess"(value: boolean)
set "grapplingTarget"(value: $LivingEntity$Type)
set "attackTarget"(value: $LivingEntity$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerPatch$Type = ($ServerPlayerPatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerPatch_ = $ServerPlayerPatch$Type;
}}
declare module "packages/yesman/epicfight/client/events/engine/$ControllEngine" {
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Options, $Options$Type} from "packages/net/minecraft/client/$Options"
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"

export class $ControllEngine {
 "options": $Options

constructor()

public "setChargingKey"(arg0: $SkillSlot$Type, arg1: $KeyMapping$Type): void
public "canPlayerMove"(arg0: $EntityState$Type): boolean
public "canPlayerRotate"(arg0: $EntityState$Type): boolean
public "addPacketToSend"(arg0: any): void
public "lockHotkeys"(): void
public "getPlayerPatch"(): $LocalPlayerPatch
public "setPlayerPatch"(arg0: $LocalPlayerPatch$Type): void
public "unlockHotkeys"(): void
public "isKeyDown"(arg0: $KeyMapping$Type): boolean
public "setKeyBind"(arg0: $KeyMapping$Type, arg1: boolean): void
get "playerPatch"(): $LocalPlayerPatch
set "playerPatch"(value: $LocalPlayerPatch$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllEngine$Type = ($ControllEngine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControllEngine_ = $ControllEngine$Type;
}}
declare module "packages/yesman/epicfight/world/level/block/$FractureBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$FractureBlockState, $FractureBlockState$Type} from "packages/yesman/epicfight/world/level/block/$FractureBlockState"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FractureBlock extends $BaseEntityBlock {
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public static "getDefaultFractureBlockState"(arg0: $Block$Type): $FractureBlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FractureBlock$Type = ($FractureBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FractureBlock_ = $FractureBlock$Type;
}}
declare module "packages/yesman/epicfight/world/level/block/entity/$UniversalBlockEntityType" {
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ShulkerBoxBlockEntity, $ShulkerBoxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ShulkerBoxBlockEntity"
import {$BeehiveBlockEntity, $BeehiveBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeehiveBlockEntity"
import {$ComparatorBlockEntity, $ComparatorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ComparatorBlockEntity"
import {$DropperBlockEntity, $DropperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DropperBlockEntity"
import {$BrewingStandBlockEntity, $BrewingStandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrewingStandBlockEntity"
import {$DaylightDetectorBlockEntity, $DaylightDetectorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DaylightDetectorBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$HangingSignBlockEntity, $HangingSignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HangingSignBlockEntity"
import {$SignBlockEntity, $SignBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SignBlockEntity"
import {$JukeboxBlockEntity, $JukeboxBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JukeboxBlockEntity"
import {$SculkShriekerBlockEntity, $SculkShriekerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkShriekerBlockEntity"
import {$EnchantmentTableBlockEntity, $EnchantmentTableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnchantmentTableBlockEntity"
import {$Type, $Type$Type} from "packages/com/mojang/datafixers/types/$Type"
import {$CalibratedSculkSensorBlockEntity, $CalibratedSculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CalibratedSculkSensorBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ChiseledBookShelfBlockEntity, $ChiseledBookShelfBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChiseledBookShelfBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BrushableBlockEntity, $BrushableBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BrushableBlockEntity"
import {$FurnaceBlockEntity, $FurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$FurnaceBlockEntity"
import {$DispenserBlockEntity, $DispenserBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DispenserBlockEntity"
import {$EnderChestBlockEntity, $EnderChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$EnderChestBlockEntity"
import {$SculkSensorBlockEntity, $SculkSensorBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkSensorBlockEntity"
import {$BarrelBlockEntity, $BarrelBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BarrelBlockEntity"
import {$ChestBlockEntity, $ChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ChestBlockEntity"
import {$BannerBlockEntity, $BannerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BannerBlockEntity"
import {$TheEndGatewayBlockEntity, $TheEndGatewayBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndGatewayBlockEntity"
import {$CommandBlockEntity, $CommandBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CommandBlockEntity"
import {$BellBlockEntity, $BellBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BellBlockEntity"
import {$TrappedChestBlockEntity, $TrappedChestBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TrappedChestBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SmokerBlockEntity, $SmokerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SmokerBlockEntity"
import {$BlastFurnaceBlockEntity, $BlastFurnaceBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlastFurnaceBlockEntity"
import {$DecoratedPotBlockEntity, $DecoratedPotBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$DecoratedPotBlockEntity"
import {$PistonMovingBlockEntity, $PistonMovingBlockEntity$Type} from "packages/net/minecraft/world/level/block/piston/$PistonMovingBlockEntity"
import {$HopperBlockEntity, $HopperBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$HopperBlockEntity"
import {$TheEndPortalBlockEntity, $TheEndPortalBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TheEndPortalBlockEntity"
import {$BeaconBlockEntity, $BeaconBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BeaconBlockEntity"
import {$StructureBlockEntity, $StructureBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$StructureBlockEntity"
import {$SpawnerBlockEntity, $SpawnerBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SpawnerBlockEntity"
import {$JigsawBlockEntity, $JigsawBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$JigsawBlockEntity"
import {$ConduitBlockEntity, $ConduitBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$ConduitBlockEntity"
import {$BedBlockEntity, $BedBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BedBlockEntity"
import {$SculkCatalystBlockEntity, $SculkCatalystBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SculkCatalystBlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkullBlockEntity, $SkullBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$SkullBlockEntity"
import {$LecternBlockEntity, $LecternBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$LecternBlockEntity"
import {$CampfireBlockEntity, $CampfireBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$CampfireBlockEntity"

export class $UniversalBlockEntityType<T extends $BlockEntity> extends $BlockEntityType<(T)> {
static readonly "FURNACE": $BlockEntityType<($FurnaceBlockEntity)>
static readonly "CHEST": $BlockEntityType<($ChestBlockEntity)>
static readonly "TRAPPED_CHEST": $BlockEntityType<($TrappedChestBlockEntity)>
static readonly "ENDER_CHEST": $BlockEntityType<($EnderChestBlockEntity)>
static readonly "JUKEBOX": $BlockEntityType<($JukeboxBlockEntity)>
static readonly "DISPENSER": $BlockEntityType<($DispenserBlockEntity)>
static readonly "DROPPER": $BlockEntityType<($DropperBlockEntity)>
static readonly "SIGN": $BlockEntityType<($SignBlockEntity)>
static readonly "HANGING_SIGN": $BlockEntityType<($HangingSignBlockEntity)>
static readonly "MOB_SPAWNER": $BlockEntityType<($SpawnerBlockEntity)>
static readonly "PISTON": $BlockEntityType<($PistonMovingBlockEntity)>
static readonly "BREWING_STAND": $BlockEntityType<($BrewingStandBlockEntity)>
static readonly "ENCHANTING_TABLE": $BlockEntityType<($EnchantmentTableBlockEntity)>
static readonly "END_PORTAL": $BlockEntityType<($TheEndPortalBlockEntity)>
static readonly "BEACON": $BlockEntityType<($BeaconBlockEntity)>
static readonly "SKULL": $BlockEntityType<($SkullBlockEntity)>
static readonly "DAYLIGHT_DETECTOR": $BlockEntityType<($DaylightDetectorBlockEntity)>
static readonly "HOPPER": $BlockEntityType<($HopperBlockEntity)>
static readonly "COMPARATOR": $BlockEntityType<($ComparatorBlockEntity)>
static readonly "BANNER": $BlockEntityType<($BannerBlockEntity)>
static readonly "STRUCTURE_BLOCK": $BlockEntityType<($StructureBlockEntity)>
static readonly "END_GATEWAY": $BlockEntityType<($TheEndGatewayBlockEntity)>
static readonly "COMMAND_BLOCK": $BlockEntityType<($CommandBlockEntity)>
static readonly "SHULKER_BOX": $BlockEntityType<($ShulkerBoxBlockEntity)>
static readonly "BED": $BlockEntityType<($BedBlockEntity)>
static readonly "CONDUIT": $BlockEntityType<($ConduitBlockEntity)>
static readonly "BARREL": $BlockEntityType<($BarrelBlockEntity)>
static readonly "SMOKER": $BlockEntityType<($SmokerBlockEntity)>
static readonly "BLAST_FURNACE": $BlockEntityType<($BlastFurnaceBlockEntity)>
static readonly "LECTERN": $BlockEntityType<($LecternBlockEntity)>
static readonly "BELL": $BlockEntityType<($BellBlockEntity)>
static readonly "JIGSAW": $BlockEntityType<($JigsawBlockEntity)>
static readonly "CAMPFIRE": $BlockEntityType<($CampfireBlockEntity)>
static readonly "BEEHIVE": $BlockEntityType<($BeehiveBlockEntity)>
static readonly "SCULK_SENSOR": $BlockEntityType<($SculkSensorBlockEntity)>
static readonly "CALIBRATED_SCULK_SENSOR": $BlockEntityType<($CalibratedSculkSensorBlockEntity)>
static readonly "SCULK_CATALYST": $BlockEntityType<($SculkCatalystBlockEntity)>
static readonly "SCULK_SHRIEKER": $BlockEntityType<($SculkShriekerBlockEntity)>
static readonly "CHISELED_BOOKSHELF": $BlockEntityType<($ChiseledBookShelfBlockEntity)>
static readonly "BRUSHABLE_BLOCK": $BlockEntityType<($BrushableBlockEntity)>
static readonly "DECORATED_POT": $BlockEntityType<($DecoratedPotBlockEntity)>
 "validBlocks": $Set<($Block)>

constructor(arg0: $BlockEntityType$BlockEntitySupplier$Type<(T)>, arg1: $Set$Type<($Block$Type)>, arg2: $Type$Type<(any)>)

public "isValid"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalBlockEntityType$Type<T> = ($UniversalBlockEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalBlockEntityType_<T> = $UniversalBlockEntityType$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/item/$GreatswordItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GreatswordItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getEnchantmentValue"(): integer
get "enchantmentValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GreatswordItem$Type = ($GreatswordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GreatswordItem_ = $GreatswordItem$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$ExtraDamageInstance, $ExtraDamageInstance$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DamageSourceElements, $DamageSourceElements$Type} from "packages/yesman/epicfight/world/damagesource/$DamageSourceElements"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EpicFightDamageSource extends $DamageSource {

constructor(arg0: $DamageSource$Type)
constructor(arg0: $Holder$Type<($DamageType$Type)>, arg1: $Entity$Type, arg2: $Entity$Type, arg3: $Vec3$Type)

public "getImpact"(): float
public "getDamageModifier"(): $ValueModifier
public "is"(arg0: $ResourceKey$Type<($DamageType$Type)>): boolean
public "is"(arg0: $TagKey$Type<($DamageType$Type)>): boolean
public "addRuntimeTag"(arg0: $TagKey$Type<($DamageType$Type)>): $EpicFightDamageSource
public "addRuntimeTag"(arg0: $ResourceKey$Type<($DamageType$Type)>): $EpicFightDamageSource
public "setImpact"(arg0: float): $EpicFightDamageSource
public "getAnimation"(): $StaticAnimation
public "setInitialPosition"(arg0: $Vec3$Type): $EpicFightDamageSource
public "getExtraDamages"(): $Set<($ExtraDamageInstance)>
public "getArmorNegation"(): float
public "setArmorNegation"(arg0: float): $EpicFightDamageSource
public "getInitialPosition"(): $Vec3
public "isBasicAttack"(): boolean
public "setStunType"(arg0: $StunType$Type): $EpicFightDamageSource
public "getStunType"(): $StunType
public "addExtraDamage"(arg0: $ExtraDamageInstance$Type): $EpicFightDamageSource
public "setAnimation"(arg0: $StaticAnimation$Type): $EpicFightDamageSource
public "getDamageSourceElements"(): $DamageSourceElements
public "setHurtItem"(arg0: $ItemStack$Type): $EpicFightDamageSource
public "getHurtItem"(): $ItemStack
public "setDamageModifier"(arg0: $ValueModifier$Type): $EpicFightDamageSource
get "impact"(): float
get "damageModifier"(): $ValueModifier
set "impact"(value: float)
get "animation"(): $StaticAnimation
set "initialPosition"(value: $Vec3$Type)
get "extraDamages"(): $Set<($ExtraDamageInstance)>
get "armorNegation"(): float
set "armorNegation"(value: float)
get "initialPosition"(): $Vec3
get "basicAttack"(): boolean
set "stunType"(value: $StunType$Type)
get "stunType"(): $StunType
set "animation"(value: $StaticAnimation$Type)
get "damageSourceElements"(): $DamageSourceElements
set "hurtItem"(value: $ItemStack$Type)
get "hurtItem"(): $ItemStack
set "damageModifier"(value: $ValueModifier$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EpicFightDamageSource$Type = ($EpicFightDamageSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EpicFightDamageSource_ = $EpicFightDamageSource$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$MoveCoordFunctions$MoveCoordGetter" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $MoveCoordFunctions$MoveCoordGetter {

 "get"(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $TransformSheet$Type): $Vec3f

(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $TransformSheet$Type): $Vec3f
}

export namespace $MoveCoordFunctions$MoveCoordGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoveCoordFunctions$MoveCoordGetter$Type = ($MoveCoordFunctions$MoveCoordGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoveCoordFunctions$MoveCoordGetter_ = $MoveCoordFunctions$MoveCoordGetter$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$HitEntityList$Priority" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HitEntityList$Priority extends $Enum<($HitEntityList$Priority)> {
static readonly "DISTANCE": $HitEntityList$Priority
static readonly "TARGET": $HitEntityList$Priority
static readonly "HOSTILITY": $HitEntityList$Priority


public static "values"(): ($HitEntityList$Priority)[]
public static "valueOf"(arg0: string): $HitEntityList$Priority
public "sort"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $List$Type<($Entity$Type)>): $List<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitEntityList$Priority$Type = (("distance") | ("hostility") | ("target")) | ($HitEntityList$Priority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitEntityList$Priority_ = $HitEntityList$Priority$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Keyframe" {
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"

export class $Keyframe {

constructor(arg0: float, arg1: $JointTransform$Type)
constructor(arg0: $Keyframe$Type)

public "toString"(): string
public "transform"(): $JointTransform
public "time"(): float
public "copyFrom"(arg0: $Keyframe$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Keyframe$Type = ($Keyframe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Keyframe_ = $Keyframe$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$DynamicAnimation" {
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap"
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$JointMask$BindModifier, $JointMask$BindModifier$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$LinkAnimation, $LinkAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$LinkAnimation"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DynamicAnimation {

constructor()
constructor(arg0: float, arg1: boolean)

public "getProperty"<V>(arg0: $AnimationProperty$Type<(V)>): $Optional<(V)>
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type, arg2: boolean): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getId"(): integer
public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): T
public "getState"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $EntityState
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getTotalTime"(): float
public "getStatesMap"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>): float
public "getThis"(): $DynamicAnimation
public "isJointEnabled"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): boolean
public "setTotalTime"(arg0: float): void
public "getPoseByTime"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float, arg2: float): $Pose
public "putOnPlayer"(arg0: $AnimationPlayer$Type): void
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "getTransfroms"(): $Map<(string), ($TransformSheet)>
public "setLinkAnimation"(arg0: $Pose$Type, arg1: float, arg2: $LivingEntityPatch$Type<(any)>, arg3: $LinkAnimation$Type): void
public "getRawPose"(arg0: float): $Pose
public "linkTick"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type): void
public "isRepeat"(): boolean
public "addSheet"(arg0: string, arg1: $TransformSheet$Type): void
public "isMainFrameAnimation"(): boolean
public "getBindModifier"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): $JointMask$BindModifier
public "getCoord"(): $TransformSheet
public "renderDebugging"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "isClientAnimation"(): boolean
public "getRealAnimation"(): $DynamicAnimation
public "isStaticAnimation"(): boolean
public "canBePlayedReverse"(): boolean
public "isMetaAnimation"(): boolean
public "getConvertTime"(): float
public "isBasicAttackAnimation"(): boolean
public "getRegistryName"(): $ResourceLocation
public "isReboundAnimation"(): boolean
public "getNamespaceId"(): integer
get "id"(): integer
get "totalTime"(): float
get "this"(): $DynamicAnimation
set "totalTime"(value: float)
get "transfroms"(): $Map<(string), ($TransformSheet)>
get "repeat"(): boolean
get "mainFrameAnimation"(): boolean
get "coord"(): $TransformSheet
get "clientAnimation"(): boolean
get "realAnimation"(): $DynamicAnimation
get "staticAnimation"(): boolean
get "metaAnimation"(): boolean
get "convertTime"(): float
get "basicAttackAnimation"(): boolean
get "registryName"(): $ResourceLocation
get "reboundAnimation"(): boolean
get "namespaceId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicAnimation$Type = ($DynamicAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicAnimation_ = $DynamicAnimation$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch$PlayerMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayerPatch$PlayerMode extends $Enum<($PlayerPatch$PlayerMode)> {
static readonly "MINING": $PlayerPatch$PlayerMode
static readonly "BATTLE": $PlayerPatch$PlayerMode


public static "values"(): ($PlayerPatch$PlayerMode)[]
public static "valueOf"(arg0: string): $PlayerPatch$PlayerMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPatch$PlayerMode$Type = (("battle") | ("mining")) | ($PlayerPatch$PlayerMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPatch$PlayerMode_ = $PlayerPatch$PlayerMode$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$RightClickItemEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $RightClickItemEvent<T extends $PlayerPatch<(any)>> extends $PlayerEvent<(T)> {

constructor(arg0: T)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RightClickItemEvent$Type<T> = ($RightClickItemEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RightClickItemEvent_<T> = $RightClickItemEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$BasicAttackEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $BasicAttackEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicAttackEvent$Type = ($BasicAttackEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicAttackEvent_ = $BasicAttackEvent$Type;
}}
declare module "packages/yesman/epicfight/world/item/$DaggerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DaggerItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DaggerItem$Type = ($DaggerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DaggerItem_ = $DaggerItem$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"
import {$AttackResult$ResultType, $AttackResult$ResultType$Type} from "packages/yesman/epicfight/api/utils/$AttackResult$ResultType"

export class $HurtEvent<T> extends $PlayerEvent<($ServerPlayerPatch)> {


public "setResult"(arg0: $AttackResult$ResultType$Type): void
public "getResult"(): $AttackResult$ResultType
public "setAmount"(arg0: float): void
public "getAmount"(): float
public "isParried"(): boolean
public "getDamageSource"(): T
public "setParried"(arg0: boolean): void
set "result"(value: $AttackResult$ResultType$Type)
get "result"(): $AttackResult$ResultType
set "amount"(value: float)
get "amount"(): float
get "parried"(): boolean
get "damageSource"(): T
set "parried"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtEvent$Type<T> = ($HurtEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HurtEvent_<T> = $HurtEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/types/$ActionAnimation" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$AnimationProperty$ActionAnimationProperty, $AnimationProperty$ActionAnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$ActionAnimationProperty"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$MainFrameAnimation, $MainFrameAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$MainFrameAnimation"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LinkAnimation, $LinkAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$LinkAnimation"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $ActionAnimation extends $MainFrameAnimation {

constructor(arg0: float, arg1: string, arg2: $Armature$Type)
constructor(arg0: float, arg1: float, arg2: string, arg3: $Armature$Type)

public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "addProperty"<V>(arg0: $AnimationProperty$ActionAnimationProperty$Type<(V)>, arg1: V): $ActionAnimation
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "setLinkAnimation"(arg0: $Pose$Type, arg1: float, arg2: $LivingEntityPatch$Type<(any)>, arg3: $LinkAnimation$Type): void
public "linkTick"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type): void
public "shouldPlayerMove"(arg0: $LocalPlayerPatch$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionAnimation$Type = ($ActionAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionAnimation_ = $ActionAnimation$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LayerOffAnimation, $LayerOffAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$LayerOffAnimation"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $Layer {
readonly "animationPlayer": $AnimationPlayer

constructor(arg0: $Layer$Priority$Type)

public "toString"(): string
public "update"(arg0: $LivingEntityPatch$Type<(any)>): void
public "off"(arg0: $LivingEntityPatch$Type<(any)>): void
public "resume"(): void
public "pause"(): void
public "playAnimation"(arg0: $StaticAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): void
public "copyLayerTo"(arg0: $Layer$Type, arg1: float): void
public "getEnabledPose"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $Pose
public "playAnimationInstant"(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>): void
public static "setLayerOffAnimation"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LayerOffAnimation$Type, arg3: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Type = ($Layer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer_ = $Layer$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/skill/$CapabilitySkill" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export class $CapabilitySkill {
static readonly "EMPTY": $CapabilitySkill
readonly "skillContainers": ($SkillContainer)[]

constructor(arg0: $PlayerPatch$Type<(any)>)

public "clear"(): void
public "fromNBT"(arg0: $CompoundTag$Type): void
public "hasCategory"(arg0: $SkillCategory$Type): boolean
public "toNBT"(): $CompoundTag
public "addLearnedSkill"(arg0: $Skill$Type): void
public "getLearnedSkills"(arg0: $SkillCategory$Type): $Collection<($Skill)>
public "getSkillContainer"(arg0: $Skill$Type): $SkillContainer
public "removeLearnedSkill"(arg0: $Skill$Type): boolean
public "getSkillContainersFor"(arg0: $SkillCategory$Type): $Set<($SkillContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilitySkill$Type = ($CapabilitySkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilitySkill_ = $CapabilitySkill$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ItemUseEndEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$LivingEntityUseItemEvent$Stop, $LivingEntityUseItemEvent$Stop$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Stop"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $ItemUseEndEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntityUseItemEvent$Stop$Type)

public "getForgeEvent"(): $LivingEntityUseItemEvent$Stop
get "forgeEvent"(): $LivingEntityUseItemEvent$Stop
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemUseEndEvent$Type = ($ItemUseEndEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemUseEndEvent_ = $ItemUseEndEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$LayerOffAnimation" {
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$JointMask$BindModifier, $JointMask$BindModifier$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $LayerOffAnimation extends $DynamicAnimation {

constructor(arg0: $Layer$Priority$Type)

public "getProperty"<V>(arg0: $AnimationProperty$Type<(V)>): $Optional<(V)>
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type, arg2: boolean): void
public "isJointEnabled"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): boolean
public "getPoseByTime"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float, arg2: float): $Pose
public "getBindModifier"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): $JointMask$BindModifier
public "getRealAnimation"(): $DynamicAnimation
public "setLastAnimation"(arg0: $DynamicAnimation$Type): void
public "setLastPose"(arg0: $Pose$Type): void
get "realAnimation"(): $DynamicAnimation
set "lastAnimation"(value: $DynamicAnimation$Type)
set "lastPose"(value: $Pose$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayerOffAnimation$Type = ($LayerOffAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LayerOffAnimation_ = $LayerOffAnimation$Type;
}}
declare module "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$LivingEntityPatch$AnimationPacketProvider, $LivingEntityPatch$AnimationPacketProvider$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch$AnimationPacketProvider"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractClientPlayerPatch<T extends $AbstractClientPlayer> extends $PlayerPatch<(T)> {
 "prevBodyYaw": float
static readonly "STAMINA": $EntityDataAccessor<(float)>
static readonly "STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "MAX_STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "EXECUTION_RESISTANCE": $EntityDataAccessor<(integer)>
static readonly "AIRBORNE": $EntityDataAccessor<(boolean)>
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "setYaw"(arg0: float): void
public "overrideRender"(): boolean
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "updateMotion"(arg0: boolean): void
public "getHeadMatrix"(arg0: float): $OpenMatrix4f
public "reserveAnimation"(arg0: $StaticAnimation$Type): void
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type): void
public "playAnimationSynchronized"(arg0: $StaticAnimation$Type, arg1: float, arg2: $LivingEntityPatch$AnimationPacketProvider$Type): void
public "consumeStamina"(arg0: float): boolean
public "getBodyYaw"(): float
public "getLadderDirection"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): $Direction
set "yaw"(value: float)
get "bodyYaw"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractClientPlayerPatch$Type<T> = ($AbstractClientPlayerPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractClientPlayerPatch_<T> = $AbstractClientPlayerPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/types/$StaticAnimation" {
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap"
import {$AnimationEvent$TimePeriodEvent, $AnimationEvent$TimePeriodEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$TimePeriodEvent"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$Layer$LayerType, $Layer$LayerType$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$LayerType"
import {$JointMask$BindModifier, $JointMask$BindModifier$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent"
import {$AnimationEvent$TimeStampedEvent, $AnimationEvent$TimeStampedEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$TimeStampedEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$AnimationProperty$StaticAnimationProperty, $AnimationProperty$StaticAnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$StaticAnimationProperty"

export class $StaticAnimation extends $DynamicAnimation {

constructor(arg0: $ResourceLocation$Type, arg1: float, arg2: boolean, arg3: string, arg4: $Armature$Type, arg5: boolean)
constructor(arg0: float, arg1: boolean, arg2: string, arg3: $Armature$Type, arg4: boolean)
constructor(arg0: float, arg1: boolean, arg2: string, arg3: $Armature$Type)
constructor(arg0: boolean, arg1: string, arg2: $Armature$Type)
constructor()

public "getProperty"<V>(arg0: $AnimationProperty$Type<(V)>): $Optional<(V)>
public "equals"(arg0: any): boolean
public "toString"(): string
public static "load"(arg0: $ResourceManager$Type, arg1: $StaticAnimation$Type): void
public static "load"(arg0: $ResourceManager$Type, arg1: $ResourceLocation$Type, arg2: $StaticAnimation$Type): void
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type, arg2: boolean): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getLocation"(): $ResourceLocation
public "in"(arg0: ($StaticAnimation$Type)[]): boolean
public "getPriority"(): $Layer$Priority
public "getId"(): integer
public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): T
public "getState"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $EntityState
public "between"(arg0: $StaticAnimation$Type, arg1: $StaticAnimation$Type): boolean
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "addProperty"<V>(arg0: $AnimationProperty$StaticAnimationProperty$Type<(V)>, arg1: V): $StaticAnimation
public "getStatesMap"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>): float
public "isJointEnabled"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): boolean
public "addState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): $StaticAnimation
public "removeState"<T>(arg0: $EntityState$StateFactor$Type<(T)>): $StaticAnimation
public "getArmature"(): $Armature
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "loadAnimation"(arg0: $ResourceManager$Type): void
public "getBindModifier"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): $JointMask$BindModifier
public "getCoord"(): $TransformSheet
public "isStaticAnimation"(): boolean
public "getRegistryName"(): $ResourceLocation
public "getNamespaceId"(): integer
public static "loadBothSide"(arg0: $ResourceManager$Type, arg1: $StaticAnimation$Type): void
public "getLayerType"(): $Layer$LayerType
public "newTimePair"(arg0: float, arg1: float): $StaticAnimation
public "addEvents"<V extends $AnimationEvent>(...arg0: ($AnimationEvent$TimePeriodEvent$Type)[]): $StaticAnimation
public "addEvents"(arg0: $AnimationProperty$StaticAnimationProperty$Type<(any)>, ...arg1: ($AnimationEvent$Type)[]): $StaticAnimation
public "addEvents"<V extends $AnimationEvent>(...arg0: ($AnimationEvent$TimeStampedEvent$Type)[]): $StaticAnimation
public "addStateRemoveOld"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): $StaticAnimation
public "addStateIfNotExist"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): $StaticAnimation
public "newConditionalTimePair"(arg0: $Function$Type<($LivingEntityPatch$Type<(any)>), (integer)>, arg1: float, arg2: float): $StaticAnimation
public "addConditionalState"<T>(arg0: integer, arg1: $EntityState$StateFactor$Type<(T)>, arg2: T): $StaticAnimation
get "location"(): $ResourceLocation
get "priority"(): $Layer$Priority
get "id"(): integer
get "armature"(): $Armature
get "coord"(): $TransformSheet
get "staticAnimation"(): boolean
get "registryName"(): $ResourceLocation
get "namespaceId"(): integer
get "layerType"(): $Layer$LayerType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaticAnimation$Type = ($StaticAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaticAnimation_ = $StaticAnimation$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill$Resource$ResourcePredicate" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export interface $Skill$Resource$ResourcePredicate {

 "canExecute"(arg0: $Skill$Type, arg1: $PlayerPatch$Type<(any)>, arg2: float): boolean

(arg0: $Skill$Type, arg1: $PlayerPatch$Type<(any)>, arg2: float): boolean
}

export namespace $Skill$Resource$ResourcePredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Resource$ResourcePredicate$Type = ($Skill$Resource$ResourcePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$Resource$ResourcePredicate_ = $Skill$Resource$ResourcePredicate$Type;
}}
declare module "packages/yesman/epicfight/world/item/$GloveItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GloveItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GloveItem$Type = ($GloveItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GloveItem_ = $GloveItem$Type;
}}
declare module "packages/yesman/epicfight/skill/guard/$GuardSkill$Builder" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$Skill$Builder, $Skill$Builder$Type} from "packages/yesman/epicfight/skill/$Skill$Builder"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$GuardSkill, $GuardSkill$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill"

export class $GuardSkill$Builder extends $Skill$Builder<($GuardSkill)> {

constructor()

public "setCreativeTab"(arg0: $CreativeModeTab$Type): $GuardSkill$Builder
public "addAdvancedGuardMotion"(arg0: $WeaponCategory$Type, arg1: $BiFunction$Type<($CapabilityItem$Type), ($PlayerPatch$Type<(any)>), (any)>): $GuardSkill$Builder
public "addGuardBreakMotion"(arg0: $WeaponCategory$Type, arg1: $BiFunction$Type<($CapabilityItem$Type), ($PlayerPatch$Type<(any)>), ($StaticAnimation$Type)>): $GuardSkill$Builder
public "setActivateType"(arg0: $Skill$ActivateType$Type): $GuardSkill$Builder
public "addGuardMotion"(arg0: $WeaponCategory$Type, arg1: $BiFunction$Type<($CapabilityItem$Type), ($PlayerPatch$Type<(any)>), ($StaticAnimation$Type)>): $GuardSkill$Builder
set "creativeTab"(value: $CreativeModeTab$Type)
set "activateType"(value: $Skill$ActivateType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardSkill$Builder$Type = ($GuardSkill$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardSkill$Builder_ = $GuardSkill$Builder$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityPatch" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityPatch<T extends $Entity> {

constructor()

public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "getOriginal"(): T
public "isInitialized"(): boolean
public "getAngleToHorizontal"(arg0: $Entity$Type): double
public "overrideRender"(): boolean
public "processSpawnData"(arg0: $ByteBuf$Type): void
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "onConstructed"(arg0: T): void
public "getAngleTo"(arg0: $Entity$Type): double
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "getMatrix"(arg0: float): $OpenMatrix4f
public "onStartTracking"(arg0: $ServerPlayer$Type): void
public "isLogicalClient"(): boolean
public "onDeath"(arg0: $LivingDeathEvent$Type): void
get "original"(): T
get "initialized"(): boolean
get "logicalClient"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPatch$Type<T> = ($EntityPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPatch_<T> = $EntityPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/types/$EntityState" {
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$AttackResult$ResultType, $AttackResult$ResultType$Type} from "packages/yesman/epicfight/api/utils/$AttackResult$ResultType"

export class $EntityState {
static readonly "DEFAULT_STATE": $EntityState
static readonly "TURNING_LOCKED": $EntityState$StateFactor<(boolean)>
static readonly "MOVEMENT_LOCKED": $EntityState$StateFactor<(boolean)>
static readonly "ATTACKING": $EntityState$StateFactor<(boolean)>
static readonly "CAN_BASIC_ATTACK": $EntityState$StateFactor<(boolean)>
static readonly "CAN_SKILL_EXECUTION": $EntityState$StateFactor<(boolean)>
static readonly "INACTION": $EntityState$StateFactor<(boolean)>
static readonly "KNOCKDOWN": $EntityState$StateFactor<(boolean)>
static readonly "LOCKON_ROTATE": $EntityState$StateFactor<(boolean)>
static readonly "UPDATE_LIVING_MOTION": $EntityState$StateFactor<(boolean)>
static readonly "HURT_LEVEL": $EntityState$StateFactor<(integer)>
static readonly "PHASE_LEVEL": $EntityState$StateFactor<(integer)>
static readonly "ATTACK_RESULT": $EntityState$StateFactor<($Function<($DamageSource), ($AttackResult$ResultType)>)>

constructor(arg0: $TypeFlexibleHashMap$Type<($EntityState$StateFactor$Type<(any)>)>)

public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>): T
public "setState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: T): void
public "getLevel"(): integer
public "attackResult"(arg0: $DamageSource$Type): $AttackResult$ResultType
public "hurt"(): boolean
public "knockDown"(): boolean
public "attacking"(): boolean
public "hurtLevel"(): integer
public "movementLocked"(): boolean
public "canUseSkill"(): boolean
public "canBasicAttack"(): boolean
public "updateLivingMotion"(): boolean
public "lockonRotate"(): boolean
public "turningLocked"(): boolean
public "inaction"(): boolean
get "level"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityState$Type = ($EntityState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityState_ = $EntityState$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$BattleModeGui, $BattleModeGui$Type} from "packages/yesman/epicfight/client/gui/$BattleModeGui"
import {$Skill$Builder, $Skill$Builder$Type} from "packages/yesman/epicfight/skill/$Skill$Builder"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ControllEngine, $ControllEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControllEngine"

export class $Skill {

constructor(arg0: $Skill$Builder$Type<(any)>)

public "toString"(): string
public "canExecute"(arg0: $PlayerPatch$Type<(any)>): boolean
public "getDisplayName"(): $Component
public "setParams"(arg0: $CompoundTag$Type): void
public static "createBuilder"(): $Skill$Builder<($Skill)>
public "getMaxStack"(): integer
public "getCategory"(): $SkillCategory
public "getTranslationKey"(): string
public "onRemoved"(arg0: $SkillContainer$Type): void
public static "setDurationSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: $Skill$Type, arg2: integer): void
public "setDurationSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: integer): void
public "setStackSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: integer): void
public static "setStackSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: $Skill$Type, arg2: integer): void
public "getDefaultConsumeptionAmount"(arg0: $PlayerPatch$Type<(any)>): float
public "checkExecuteCondition"(arg0: $PlayerPatch$Type<(any)>): boolean
public "setMaxDurationSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: integer): void
public static "setMaxDurationSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: $Skill$Type, arg2: integer): void
public "setMaxResourceSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: float): void
public static "setMaxResourceSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: $Skill$Type, arg2: float): void
public "shouldDeactivateAutomatically"(arg0: $PlayerPatch$Type<(any)>): boolean
public "getTooltipArgsOfScreen"(arg0: $List$Type<(any)>): $List<(any)>
public static "createIdentityBuilder"(): $Skill$Builder<($Skill)>
public "registerPropertiesToAnimation"(): $Skill
public "getCooldownRegenPerSecond"(arg0: $PlayerPatch$Type<(any)>): float
public static "setConsumptionSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: $Skill$Type, arg2: float): void
public "setConsumptionSynchronize"(arg0: $ServerPlayerPatch$Type, arg1: float): void
public "getRegistryName"(): $ResourceLocation
public static "createMoverBuilder"(): $Skill$Builder<($Skill)>
public "executeOnServer"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): void
public "gatherArguments"(arg0: $LocalPlayerPatch$Type, arg1: $ControllEngine$Type): $FriendlyByteBuf
public "isExecutableState"(arg0: $PlayerPatch$Type<(any)>): boolean
public "getExecutionPacket"(arg0: $LocalPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): any
public "cancelOnServer"(arg0: $ServerPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): void
public "onInitiate"(arg0: $SkillContainer$Type): void
public "updateContainer"(arg0: $SkillContainer$Type): void
public "executeOnClient"(arg0: $LocalPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): void
public "cancelOnClient"(arg0: $LocalPlayerPatch$Type, arg1: $FriendlyByteBuf$Type): void
public "onReset"(arg0: $SkillContainer$Type): void
public "setConsumption"(arg0: $SkillContainer$Type, arg1: float): void
public "getResourceType"(): $Skill$Resource
public "onScreen"(arg0: $LocalPlayerPatch$Type, arg1: float, arg2: float): void
public "drawOnGui"(arg0: $BattleModeGui$Type, arg1: $SkillContainer$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float): void
public "getPriorSkill"(): $Skill
public "getTooltipOnItem"(arg0: $ItemStack$Type, arg1: $CapabilityItem$Type, arg2: $PlayerPatch$Type<(any)>): $List<($Component)>
public "getActivateType"(): $Skill$ActivateType
public "getRequiredXp"(): integer
public "getMaxDuration"(): integer
public "resourcePredicate"(arg0: $PlayerPatch$Type<(any)>): boolean
public "getConsumption"(): float
public "shouldDraw"(arg0: $SkillContainer$Type): boolean
public "getSkillTexture"(): $ResourceLocation
get "displayName"(): $Component
set "params"(value: $CompoundTag$Type)
get "maxStack"(): integer
get "category"(): $SkillCategory
get "translationKey"(): string
get "registryName"(): $ResourceLocation
get "resourceType"(): $Skill$Resource
get "priorSkill"(): $Skill
get "activateType"(): $Skill$ActivateType
get "requiredXp"(): integer
get "maxDuration"(): integer
get "consumption"(): float
get "skillTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Type = ($Skill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill_ = $Skill$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$ComboCounterHandleEvent$Causal, $ComboCounterHandleEvent$Causal$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent$Causal"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $ComboCounterHandleEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ComboCounterHandleEvent$Causal$Type, arg1: $ServerPlayerPatch$Type, arg2: $StaticAnimation$Type, arg3: integer, arg4: integer)

public "getNextValue"(): integer
public "getAnimation"(): $StaticAnimation
public "getCausal"(): $ComboCounterHandleEvent$Causal
public "getPrevValue"(): integer
public "setNextValue"(arg0: integer): void
get "nextValue"(): integer
get "animation"(): $StaticAnimation
get "causal"(): $ComboCounterHandleEvent$Causal
get "prevValue"(): integer
set "nextValue"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboCounterHandleEvent$Type = ($ComboCounterHandleEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComboCounterHandleEvent_ = $ComboCounterHandleEvent$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$AttackEndEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$AttackAnimation, $AttackAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $AttackEndEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $AttackAnimation$Type)

public "getAnimation"(): $AttackAnimation
get "animation"(): $AttackAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackEndEvent$Type = ($AttackEndEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackEndEvent_ = $AttackEndEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$AttackAnimation" {
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$AttackAnimation$Phase, $AttackAnimation$Phase$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation$Phase"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$TypeFlexibleHashMap$TypeKey, $TypeFlexibleHashMap$TypeKey$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap$TypeKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$AnimationProperty$AttackAnimationProperty, $AnimationProperty$AttackAnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackAnimationProperty"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AnimationProperty$AttackPhaseProperty, $AnimationProperty$AttackPhaseProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackPhaseProperty"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AttackAnimation extends $ActionAnimation {
readonly "phases": ($AttackAnimation$Phase)[]
static readonly "HIT_ENTITIES": $TypeFlexibleHashMap$TypeKey<($List<($LivingEntity)>)>
static readonly "HURT_ENTITIES": $TypeFlexibleHashMap$TypeKey<($List<($LivingEntity)>)>
static readonly "MAX_STRIKES_COUNT": $TypeFlexibleHashMap$TypeKey<(integer)>

constructor(arg0: float, arg1: string, arg2: $Armature$Type, ...arg3: ($AttackAnimation$Phase$Type)[])
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $InteractionHand$Type, arg6: $Collider$Type, arg7: $Joint$Type, arg8: string, arg9: $Armature$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $Collider$Type, arg6: $Joint$Type, arg7: string, arg8: $Armature$Type)

public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type, arg2: boolean): void
public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "addProperty"<V>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>, arg1: V): $AttackAnimation
public "addProperty"<V>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>, arg1: V, arg2: integer): $AttackAnimation
public "addProperty"<V>(arg0: $AnimationProperty$AttackAnimationProperty$Type<(V)>, arg1: V): $AttackAnimation
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>): float
public "getPhaseByTime"(arg0: float): $AttackAnimation$Phase
public "getTrueEntity"(arg0: $Entity$Type): $LivingEntity
/**
 * 
 * @deprecated
 */
public "changeCollider"(arg0: $Collider$Type, arg1: integer): void
public "getEpicFightDamageSource"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Entity$Type, arg2: $AttackAnimation$Phase$Type): $EpicFightDamageSource
public "getEpicFightDamageSource"(arg0: $DamageSource$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $Entity$Type, arg3: $AttackAnimation$Phase$Type): $EpicFightDamageSource
public "linkTick"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type): void
public "renderDebugging"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackAnimation$Type = ($AttackAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackAnimation_ = $AttackAnimation$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$MainFrameAnimation" {
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $MainFrameAnimation extends $StaticAnimation {

constructor(arg0: float, arg1: string, arg2: $Armature$Type)

public "begin"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getPriority"(): $Layer$Priority
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "isMainFrameAnimation"(): boolean
get "priority"(): $Layer$Priority
get "mainFrameAnimation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainFrameAnimation$Type = ($MainFrameAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainFrameAnimation_ = $MainFrameAnimation$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"
import {$PlayerEventListener$EventType, $PlayerEventListener$EventType$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener$EventType"

export class $PlayerEventListener {

constructor(arg0: $PlayerPatch$Type<(any)>)

public "removeListener"<T extends $PlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type, arg2: integer): void
public "removeListener"<T extends $PlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type): void
public "addEventListener"<T extends $PlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type, arg2: $Consumer$Type<(T)>, arg3: integer): void
public "addEventListener"<T extends $PlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: $UUID$Type, arg2: $Consumer$Type<(T)>): void
public "triggerEvents"<T extends $PlayerEvent<(any)>>(arg0: $PlayerEventListener$EventType$Type<(T)>, arg1: T): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEventListener$Type = ($PlayerEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEventListener_ = $PlayerEventListener$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Joint" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export class $Joint {
static readonly "EMPTY": $Joint

constructor(arg0: string, arg1: integer, arg2: $OpenMatrix4f$Type)

public "getName"(): string
public "getId"(): integer
public "searchPath"(arg0: string, arg1: string): string
public "getLocalTrasnform"(): $OpenMatrix4f
public "getPoseTransform"(): $OpenMatrix4f
public "addSubJoint"(...arg0: ($Joint$Type)[]): void
public "getSubJoints"(): $List<($Joint)>
public "resetPoseTransforms"(): void
public "initOriginTransform"(arg0: $OpenMatrix4f$Type): void
public "getAllJoints"(): $List<($Joint)>
public "getToOrigin"(): $OpenMatrix4f
get "name"(): string
get "id"(): integer
get "localTrasnform"(): $OpenMatrix4f
get "poseTransform"(): $OpenMatrix4f
get "subJoints"(): $List<($Joint)>
get "allJoints"(): $List<($Joint)>
get "toOrigin"(): $OpenMatrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Joint$Type = ($Joint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Joint_ = $Joint$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$AttackAnimation$Phase" {
import {$AttackAnimation, $AttackAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AnimationProperty$AttackPhaseProperty, $AnimationProperty$AttackPhaseProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackPhaseProperty"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $AttackAnimation$Phase {
readonly "start": float
readonly "antic": float
readonly "preDelay": float
readonly "contact": float
readonly "recovery": float
readonly "end": float
readonly "hand": $InteractionHand
 "colliders": $List<($Pair<($Joint), ($Collider)>)>
readonly "noStateBind": boolean

constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $InteractionHand$Type, arg7: $Joint$Type, arg8: $Collider$Type)
constructor(arg0: $InteractionHand$Type, arg1: $Joint$Type, arg2: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean, arg7: $InteractionHand$Type, arg8: $Joint$Type, arg9: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: boolean, arg7: $InteractionHand$Type, arg8: $List$Type<($Pair$Type<($Joint$Type), ($Collider$Type)>)>)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $Joint$Type, arg6: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: $InteractionHand$Type, arg6: $Joint$Type, arg7: $Collider$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $Joint$Type, arg7: $Collider$Type)

public "getProperty"<V>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>): $Optional<(V)>
public "addProperty"<V>(arg0: $AnimationProperty$AttackPhaseProperty$Type<(V)>, arg1: V): $AttackAnimation$Phase
public "getCollidingEntities"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AttackAnimation$Type, arg2: float, arg3: float, arg4: float): $List<($Entity)>
public "getHand"(): $InteractionHand
public "addProperties"(arg0: $Set$Type<($Map$Entry$Type<($AnimationProperty$AttackPhaseProperty$Type<(any)>), (any)>)>): void
public "getColliders"(): $List<($Pair<($Joint), ($Collider)>)>
get "hand"(): $InteractionHand
get "colliders"(): $List<($Pair<($Joint), ($Collider)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackAnimation$Phase$Type = ($AttackAnimation$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackAnimation$Phase_ = $AttackAnimation$Phase$Type;
}}
declare module "packages/yesman/epicfight/skill/$ChargeableSkill" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$SPSkillExecutionFeedback, $SPSkillExecutionFeedback$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$ControllEngine, $ControllEngine$Type} from "packages/yesman/epicfight/client/events/engine/$ControllEngine"

export interface $ChargeableSkill {

 "gatherChargingArguemtns"(arg0: $LocalPlayerPatch$Type, arg1: $ControllEngine$Type, arg2: $FriendlyByteBuf$Type): void
 "getMinChargingTicks"(): integer
 "getAllowedMaxChargingTicks"(): integer
 "getKeyMapping"(): $KeyMapping
 "startCharging"(arg0: $PlayerPatch$Type<(any)>): void
 "resetCharging"(arg0: $PlayerPatch$Type<(any)>): void
 "getChargingAmount"(arg0: $PlayerPatch$Type<(any)>): integer
 "asSkill"(): $Skill
 "castSkill"(arg0: $ServerPlayerPatch$Type, arg1: $SkillContainer$Type, arg2: integer, arg3: $SPSkillExecutionFeedback$Type, arg4: boolean): void
 "chargingTick"(arg0: $PlayerPatch$Type<(any)>): void
 "getMaxChargingTicks"(): integer
}

export namespace $ChargeableSkill {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargeableSkill$Type = ($ChargeableSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChargeableSkill_ = $ChargeableSkill$Type;
}}
declare module "packages/yesman/epicfight/particle/$HitParticleType" {
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HitParticleType extends $SimpleParticleType {
static readonly "CENTER_OF_TARGET": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "RANDOM_WITHIN_BOUNDING_BOX": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "FRONT_OF_EYES": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "MIDDLE_OF_ENTITIES": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "ZERO": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "ATTACKER_XY_ROTATION": $BiFunction<($Entity), ($Entity), ($Vector3d)>
static readonly "ATTACKER_Y_ROTATION": $BiFunction<($Entity), ($Entity), ($Vector3d)>
 "positionProvider": $BiFunction<($Entity), ($Entity), ($Vector3d)>
 "argumentProvider": $BiFunction<($Entity), ($Entity), ($Vector3d)>

constructor(arg0: boolean)
constructor(arg0: boolean, arg1: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>, arg2: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>)

public "spawnParticleWithArgument"(arg0: $ServerLevel$Type, arg1: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>, arg2: $BiFunction$Type<($Entity$Type), ($Entity$Type), ($Vector3d$Type)>, arg3: $Entity$Type, arg4: $Entity$Type): void
public "spawnParticleWithArgument"(arg0: $ServerLevel$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double): void
public "spawnParticleWithArgument"(arg0: $ServerLevel$Type, arg1: $Entity$Type, arg2: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HitParticleType$Type = ($HitParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HitParticleType_ = $HitParticleType$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamage" {
import {$ExtraDamageInstance, $ExtraDamageInstance$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance"
import {$ExtraDamageInstance$ExtraDamageFunction, $ExtraDamageInstance$ExtraDamageFunction$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageFunction"
import {$ExtraDamageInstance$ExtraDamageTooltipFunction, $ExtraDamageInstance$ExtraDamageTooltipFunction$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageTooltipFunction"

export class $ExtraDamageInstance$ExtraDamage {

constructor(arg0: $ExtraDamageInstance$ExtraDamageFunction$Type, arg1: $ExtraDamageInstance$ExtraDamageTooltipFunction$Type)

public "create"(...arg0: (float)[]): $ExtraDamageInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$ExtraDamage$Type = ($ExtraDamageInstance$ExtraDamage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance$ExtraDamage_ = $ExtraDamageInstance$ExtraDamage$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$HurtableEntityPatch" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$EntityPatch, $EntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$EntityPatch"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $HurtableEntityPatch<T extends $LivingEntity> extends $EntityPatch<(T)> {

constructor()

public "getWeight"(): float
public "setStunReductionOnHit"(arg0: $StunType$Type): void
public "setDefaultStunReduction"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "shouldCancelKnockback"(): boolean
public "overrideRender"(): boolean
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "getStunArmor"(): float
public "applyStun"(arg0: $StunType$Type, arg1: float): boolean
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "setStunShield"(arg0: float): void
public "knockBackEntity"(arg0: $Vec3$Type, arg1: float): void
public "getStunShield"(): float
public "getStunReduction"(): float
public "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float, arg3: float): void
public "playSound"(arg0: $SoundEvent$Type, arg1: float, arg2: float): void
public "isStunned"(): boolean
public "getEntityState"(): $EntityState
get "weight"(): float
set "stunReductionOnHit"(value: $StunType$Type)
get "stunArmor"(): float
set "stunShield"(value: float)
get "stunShield"(): float
get "stunReduction"(): float
get "stunned"(): boolean
get "entityState"(): $EntityState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtableEntityPatch$Type<T> = ($HurtableEntityPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HurtableEntityPatch_<T> = $HurtableEntityPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/effect/$VisibleMobEffect" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $VisibleMobEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $ResourceLocation$Type)
constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $Function$Type<($MobEffectInstance$Type), (integer)>, ...arg3: ($ResourceLocation$Type)[])

public "getIcon"(arg0: $MobEffectInstance$Type): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VisibleMobEffect$Type = ($VisibleMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VisibleMobEffect_ = $VisibleMobEffect$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$MoveCoordFunctions$MoveCoordSetter" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $MoveCoordFunctions$MoveCoordSetter {

 "set"(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $TransformSheet$Type): void

(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: $TransformSheet$Type): void
}

export namespace $MoveCoordFunctions$MoveCoordSetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoveCoordFunctions$MoveCoordSetter$Type = ($MoveCoordFunctions$MoveCoordSetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoveCoordFunctions$MoveCoordSetter_ = $MoveCoordFunctions$MoveCoordSetter$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"

export class $PlayerEvent<T extends $PlayerPatch<(any)>> {

constructor(arg0: T, arg1: boolean)

public "toString"(): string
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "getPlayerPatch"(): T
set "canceled"(value: boolean)
get "canceled"(): boolean
get "playerPatch"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$Type<T> = ($PlayerEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEvent_<T> = $PlayerEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/client/gui/$BattleModeGui" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$ModIngameGui, $ModIngameGui$Type} from "packages/yesman/epicfight/client/gui/$ModIngameGui"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export class $BattleModeGui extends $ModIngameGui {
 "font": $Font

constructor(arg0: $Minecraft$Type)

public "reset"(): void
public "getSlidingProgression"(): integer
public "renderGui"(arg0: $LocalPlayerPatch$Type, arg1: $GuiGraphics$Type, arg2: float): void
public "slideDown"(): void
public "slideUp"(): void
get "slidingProgression"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BattleModeGui$Type = ($BattleModeGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BattleModeGui_ = $BattleModeGui$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$ClientAnimator" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Layer$BaseLayer, $Layer$BaseLayer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$BaseLayer"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Layer, $Layer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ClientAnimator extends $Animator {
readonly "baseLayer": $Layer$BaseLayer

constructor(arg0: $LivingEntityPatch$Type<(any)>)

public "getAllLayers"(): $Collection<($Layer)>
public "init"(): void
public "getOwner"(): $LivingEntityPatch<(any)>
public "tick"(): void
public "playReboundAnimation"(): void
public "resetCompositeMotion"(): void
public "playDeathAnimation"(): void
public "reserveAnimation"(arg0: $StaticAnimation$Type): void
public "playAnimation"(arg0: $StaticAnimation$Type, arg1: float): void
public "findFor"<T>(arg0: $Class$Type<(T)>): $Pair<($AnimationPlayer), (T)>
public "resetMotion"(): void
public "isAiming"(): boolean
public "getJumpAnimation"(): $StaticAnimation
public "addLivingAnimation"(arg0: $LivingMotion$Type, arg1: $StaticAnimation$Type): void
public "getCompositeLayer"(arg0: $Layer$Priority$Type): $Layer
public static "getAnimator"(arg0: $LivingEntityPatch$Type<(any)>): $Animator
public "getPlayerFor"(arg0: $DynamicAnimation$Type): $AnimationPlayer
public "getEntityState"(): $EntityState
public "setCurrentMotionsAsDefault"(): void
public "resetLivingAnimations"(): void
public "poseTick"(): void
public "offAllLayers"(): void
public "playAnimationInstantly"(arg0: $StaticAnimation$Type): void
public "getComposedLayerPose"(arg0: float): $Pose
public "getCompositeLivingMotion"(arg0: $LivingMotion$Type): $StaticAnimation
public "compareCompositeMotion"(arg0: $LivingMotion$Type): boolean
public "getComposedLayerPoseBelow"(arg0: $Layer$Priority$Type, arg1: float): $Pose
public "compareMotion"(arg0: $LivingMotion$Type): boolean
public "getLivingMotion"(arg0: $LivingMotion$Type): $StaticAnimation
public static "applyBindModifier"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Pose$Type, arg2: $Pose$Type, arg3: $Joint$Type, arg4: $Map$Type<($Layer$Priority$Type), ($Pair$Type<($DynamicAnimation$Type), ($Pose$Type)>)>): void
get "allLayers"(): $Collection<($Layer)>
get "owner"(): $LivingEntityPatch<(any)>
get "aiming"(): boolean
get "jumpAnimation"(): $StaticAnimation
get "entityState"(): $EntityState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientAnimator$Type = ($ClientAnimator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientAnimator_ = $ClientAnimator$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillCategory" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $SkillCategory extends $ExtendableEnum {

 "shouldSave"(): boolean
 "shouldSynchronize"(): boolean
 "learnable"(): boolean
 "universalOrdinal"(): integer
}

export namespace $SkillCategory {
const ENUM_MANAGER: $ExtendableEnumManager<($SkillCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillCategory$Type = ($SkillCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillCategory_ = $SkillCategory$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AnimationProperty<T> {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$Type<T> = ($AnimationProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty_<T> = $AnimationProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/network/server/$SPPlayAnimation" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $SPPlayAnimation {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: float)
constructor(arg0: $StaticAnimation$Type, arg1: integer, arg2: float)
constructor(arg0: $StaticAnimation$Type, arg1: float, arg2: $LivingEntityPatch$Type<(any)>)
constructor()

public static "toBytes"(arg0: $SPPlayAnimation$Type, arg1: $ByteBuf$Type): void
public static "handle"(arg0: $SPPlayAnimation$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPPlayAnimation
public "onArrive"<T extends $SPPlayAnimation>(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPPlayAnimation$Type = ($SPPlayAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPPlayAnimation_ = $SPPlayAnimation$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$AttackResult" {
import {$AttackResult$ResultType, $AttackResult$ResultType$Type} from "packages/yesman/epicfight/api/utils/$AttackResult$ResultType"

export class $AttackResult {
readonly "resultType": $AttackResult$ResultType
readonly "damage": float

constructor(arg0: $AttackResult$ResultType$Type, arg1: float)

public static "of"(arg0: $AttackResult$ResultType$Type, arg1: float): $AttackResult
public static "success"(arg0: float): $AttackResult
public static "blocked"(arg0: float): $AttackResult
public static "missed"(arg0: float): $AttackResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackResult$Type = ($AttackResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackResult_ = $AttackResult$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$FallEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $FallEvent extends $PlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $LivingFallEvent$Type)

public "getForgeEvent"(): $LivingFallEvent
get "forgeEvent"(): $LivingFallEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallEvent$Type = ($FallEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallEvent_ = $FallEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$TransformSheet" {
import {$Keyframe, $Keyframe$Type} from "packages/yesman/epicfight/api/animation/$Keyframe"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $TransformSheet {

constructor()
constructor(arg0: ($Keyframe$Type)[])
constructor(arg0: $List$Type<($Keyframe$Type)>)

public "toString"(): string
public "transform"(arg0: $Consumer$Type<($JointTransform$Type)>): void
public "transform"(arg0: $Consumer$Type<($JointTransform$Type)>, arg1: integer, arg2: integer): void
public "copy"(arg0: integer, arg1: integer): $TransformSheet
public "readFrom"(arg0: $TransformSheet$Type): $TransformSheet
public "getInterpolatedTranslation"(arg0: float): $Vec3f
public "getKeyframes"(): ($Keyframe)[]
public "extendsZCoord"(arg0: float, arg1: integer, arg2: integer): $TransformSheet
public "copyAll"(): $TransformSheet
public "getCorrectedModelCoord"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: integer, arg4: integer): $TransformSheet
public "correctAnimationByNewPosition"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type, arg3: $Vec3f$Type): void
public "getInterpolatedTransform"(arg0: float): $JointTransform
public "getInterpolatedRotation"(arg0: float): $Quaternionf
public "getCorrectedWorldCoord"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Vec3$Type, arg2: $Vec3$Type, arg3: float, arg4: float, arg5: integer, arg6: integer): $TransformSheet
public "getStartTransform"(): $JointTransform
get "keyframes"(): ($Keyframe)[]
get "startTransform"(): $JointTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformSheet$Type = ($TransformSheet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformSheet_ = $TransformSheet$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$AttackResult$ResultType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AttackResult$ResultType extends $Enum<($AttackResult$ResultType)> {
static readonly "SUCCESS": $AttackResult$ResultType
static readonly "MISSED": $AttackResult$ResultType
static readonly "BLOCKED": $AttackResult$ResultType


public static "values"(): ($AttackResult$ResultType)[]
public static "valueOf"(arg0: string): $AttackResult$ResultType
public "dealtDamage"(): boolean
public "shouldCount"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackResult$ResultType$Type = (("blocked") | ("success") | ("missed")) | ($AttackResult$ResultType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackResult$ResultType_ = $AttackResult$ResultType$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillDataKey$SkillDataKeyCallbacks" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$SkillDataKey, $SkillDataKey$Type} from "packages/yesman/epicfight/skill/$SkillDataKey"
import {$IForgeRegistry$BakeCallback, $IForgeRegistry$BakeCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback"
import {$IForgeRegistry$CreateCallback, $IForgeRegistry$CreateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback"
import {$IForgeRegistry$ClearCallback, $IForgeRegistry$ClearCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback"

export class $SkillDataKey$SkillDataKeyCallbacks implements $IForgeRegistry$BakeCallback<($SkillDataKey<(any)>)>, $IForgeRegistry$CreateCallback<($SkillDataKey<(any)>)>, $IForgeRegistry$ClearCallback<($SkillDataKey<(any)>)> {


public "onCreate"(arg0: $IForgeRegistryInternal$Type<($SkillDataKey$Type<(any)>)>, arg1: $RegistryManager$Type): void
public "onBake"(arg0: $IForgeRegistryInternal$Type<($SkillDataKey$Type<(any)>)>, arg1: $RegistryManager$Type): void
public "onClear"(arg0: $IForgeRegistryInternal$Type<($SkillDataKey$Type<(any)>)>, arg1: $RegistryManager$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillDataKey$SkillDataKeyCallbacks$Type = ($SkillDataKey$SkillDataKeyCallbacks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillDataKey$SkillDataKeyCallbacks_ = $SkillDataKey$SkillDataKeyCallbacks$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill$Resource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Skill$Resource$ResourcePredicate, $Skill$Resource$ResourcePredicate$Type} from "packages/yesman/epicfight/skill/$Skill$Resource$ResourcePredicate"
import {$Skill$Resource$ResourceConsumer, $Skill$Resource$ResourceConsumer$Type} from "packages/yesman/epicfight/skill/$Skill$Resource$ResourceConsumer"

export class $Skill$Resource extends $Enum<($Skill$Resource)> {
static readonly "NONE": $Skill$Resource
static readonly "WEAPON_INNATE_ENERGY": $Skill$Resource
static readonly "COOLDOWN": $Skill$Resource
static readonly "STAMINA": $Skill$Resource
static readonly "HEALTH": $Skill$Resource
readonly "predicate": $Skill$Resource$ResourcePredicate
readonly "consumer": $Skill$Resource$ResourceConsumer


public static "values"(): ($Skill$Resource)[]
public static "valueOf"(arg0: string): $Skill$Resource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Resource$Type = (("weapon_innate_energy") | ("stamina") | ("cooldown") | ("health") | ("none")) | ($Skill$Resource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$Resource_ = $Skill$Resource$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$MatrixOperation" {
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export interface $MatrixOperation {

 "mul"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f

(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
}

export namespace $MatrixOperation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MatrixOperation$Type = ($MatrixOperation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MatrixOperation_ = $MatrixOperation$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SkillConsumeEvent" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $SkillConsumeEvent extends $PlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $Skill$Type, arg2: $Skill$Resource$Type, arg3: boolean)
constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $Skill$Type, arg2: $Skill$Resource$Type, arg3: float, arg4: boolean)

public "setAmount"(arg0: float): void
public "getAmount"(): float
public "getSkill"(): $Skill
public "getResourceType"(): $Skill$Resource
public "shouldConsume"(): boolean
public "setResourceType"(arg0: $Skill$Resource$Type): void
set "amount"(value: float)
get "amount"(): float
get "skill"(): $Skill
get "resourceType"(): $Skill$Resource
set "resourceType"(value: $Skill$Resource$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillConsumeEvent$Type = ($SkillConsumeEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillConsumeEvent_ = $SkillConsumeEvent$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f" {
import {$FloatBuffer, $FloatBuffer$Type} from "packages/java/nio/$FloatBuffer"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$Vec4f, $Vec4f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec4f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $OpenMatrix4f {
 "m00": float
 "m01": float
 "m02": float
 "m03": float
 "m10": float
 "m11": float
 "m12": float
 "m13": float
 "m20": float
 "m21": float
 "m22": float
 "m23": float
 "m30": float
 "m31": float
 "m32": float
 "m33": float

constructor()
constructor(arg0: $OpenMatrix4f$Type)

public static "add"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "toString"(): string
public static "load"(arg0: $OpenMatrix4f$Type, arg1: $FloatBuffer$Type): $OpenMatrix4f
public "load"(arg0: $FloatBuffer$Type): $OpenMatrix4f
public "load"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public static "load"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public static "load"(arg0: $OpenMatrix4f$Type, arg1: (float)[]): $OpenMatrix4f
public "store"(arg0: $FloatBuffer$Type): $OpenMatrix4f
public static "scale"(arg0: $Vec3f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "scale"(arg0: $Vec3f$Type): $OpenMatrix4f
public "scale"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public static "transform"(arg0: $OpenMatrix4f$Type, arg1: $Vec4f$Type, arg2: $Vec4f$Type): $Vec4f
public static "transform"(arg0: $OpenMatrix4f$Type, arg1: $Vec3$Type): $Vec3
public "rotate"(arg0: float, arg1: $Vec3f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public static "rotate"(arg0: float, arg1: $Vec3f$Type, arg2: $OpenMatrix4f$Type, arg3: $OpenMatrix4f$Type): $OpenMatrix4f
public "rotate"(arg0: float, arg1: $Vec3f$Type): $OpenMatrix4f
public static "mul"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "invert"(): $OpenMatrix4f
public static "invert"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public "toFloat"(): $OpenMatrix4f
public "transpose"(): $OpenMatrix4f
public "transpose"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public static "transpose"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public "translate"(arg0: $Vec3f$Type): $OpenMatrix4f
public "translate"(arg0: $Vec3f$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public static "translate"(arg0: $Vec3f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "translate"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public "mulBack"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public "mulFront"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public static "transform3v"(arg0: $OpenMatrix4f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public static "removeTranslation"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public "removeTranslation"(): $OpenMatrix4f
public static "createTranslation"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public static "fromQuaternion"(arg0: $Quaternionf$Type): $OpenMatrix4f
public static "mulAsOriginFront"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public static "createRotatorDeg"(arg0: float, arg1: $Vec3f$Type): $OpenMatrix4f
public static "overwriteRotation"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public "determinant"(): float
public "rotateDeg"(arg0: float, arg1: $Vec3f$Type): $OpenMatrix4f
public "toScaleVector"(): $Vec3f
public "toQuaternion"(): $Quaternionf
public static "toQuaternion"(arg0: $OpenMatrix4f$Type): $Quaternionf
public "setIdentity"(): $OpenMatrix4f
public static "setIdentity"(arg0: $OpenMatrix4f$Type): $OpenMatrix4f
public static "mulAsOrigin"(arg0: $OpenMatrix4f$Type, arg1: $OpenMatrix4f$Type, arg2: $OpenMatrix4f$Type): $OpenMatrix4f
public static "createScale"(arg0: float, arg1: float, arg2: float): $OpenMatrix4f
public static "toVector"(arg0: $OpenMatrix4f$Type): $Vec3f
public static "exportToMojangMatrix"(arg0: $OpenMatrix4f$Type): $Matrix4f
public static "importFromMojangMatrix"(arg0: $Matrix4f$Type): $OpenMatrix4f
public "toTranslationVector"(): $Vec3f
set "identity"(value: $OpenMatrix4f$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OpenMatrix4f$Type = ($OpenMatrix4f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OpenMatrix4f_ = $OpenMatrix4f$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DealtDamageEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"

export class $DealtDamageEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type, arg2: $EpicFightDamageSource$Type, arg3: float)

public "getTarget"(): $LivingEntity
public "getDamageSource"(): $EpicFightDamageSource
public "setAttackDamage"(arg0: float): void
public "getAttackDamage"(): float
get "target"(): $LivingEntity
get "damageSource"(): $EpicFightDamageSource
set "attackDamage"(value: float)
get "attackDamage"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DealtDamageEvent$Type = ($DealtDamageEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DealtDamageEvent_ = $DealtDamageEvent$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer$BaseLayer" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$Layer, $Layer$Type} from "packages/yesman/epicfight/api/client/animation/$Layer"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $Layer$BaseLayer extends $Layer {
readonly "animationPlayer": $AnimationPlayer

constructor(arg0: $Layer$Priority$Type)

public "update"(arg0: $LivingEntityPatch$Type<(any)>): void
public "off"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getLayer"(arg0: $Layer$Priority$Type): $Layer
public "playAnimation"(arg0: $StaticAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): void
public "disableLayer"(arg0: $Layer$Priority$Type): void
public "offCompositeLayerLowerThan"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $StaticAnimation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$BaseLayer$Type = ($Layer$BaseLayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$BaseLayer_ = $Layer$BaseLayer$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier" {
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $JointMask$BindModifier {

 "modify"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Pose$Type, arg2: $Pose$Type, arg3: $Layer$Priority$Type, arg4: $Joint$Type, arg5: $Map$Type<($Layer$Priority$Type), ($Pair$Type<($DynamicAnimation$Type), ($Pose$Type)>)>): void

(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Pose$Type, arg2: $Pose$Type, arg3: $Layer$Priority$Type, arg4: $Joint$Type, arg5: $Map$Type<($Layer$Priority$Type), ($Pair$Type<($DynamicAnimation$Type), ($Pose$Type)>)>): void
}

export namespace $JointMask$BindModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointMask$BindModifier$Type = ($JointMask$BindModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointMask$BindModifier_ = $JointMask$BindModifier$Type;
}}
declare module "packages/yesman/epicfight/world/item/$LongswordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LongswordItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongswordItem$Type = ($LongswordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LongswordItem_ = $LongswordItem$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$TargetIndicatorCheckEvent" {
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $TargetIndicatorCheckEvent extends $PlayerEvent<($LocalPlayerPatch)> {

constructor(arg0: $LocalPlayerPatch$Type, arg1: $LivingEntityPatch$Type<(any)>)

public "getTarget"(): $LivingEntityPatch<(any)>
get "target"(): $LivingEntityPatch<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetIndicatorCheckEvent$Type = ($TargetIndicatorCheckEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetIndicatorCheckEvent_ = $TargetIndicatorCheckEvent$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$PlayerEventListener, $PlayerEventListener$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$ChargeableSkill, $ChargeableSkill$Type} from "packages/yesman/epicfight/skill/$ChargeableSkill"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$CapabilitySkill, $CapabilitySkill$Type} from "packages/yesman/epicfight/world/capabilities/skill/$CapabilitySkill"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$SkillSlot, $SkillSlot$Type} from "packages/yesman/epicfight/skill/$SkillSlot"
import {$PlayerPatch$PlayerMode, $PlayerPatch$PlayerMode$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch$PlayerMode"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ClientAnimator, $ClientAnimator$Type} from "packages/yesman/epicfight/api/client/animation/$ClientAnimator"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $PlayerPatch<T extends $Player> extends $LivingEntityPatch<(T)> {
static readonly "STAMINA": $EntityDataAccessor<(float)>
static readonly "STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "MAX_STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "EXECUTION_RESISTANCE": $EntityDataAccessor<(integer)>
static readonly "AIRBORNE": $EntityDataAccessor<(boolean)>
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "toMode"(arg0: $PlayerPatch$PlayerMode$Type, arg1: boolean): void
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "isUnstable"(): boolean
public "attack"(arg0: $EpicFightDamageSource$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type): $AttackResult
public "getXOld"(): double
public "getZOld"(): double
public "getSkill"(arg0: integer): $SkillContainer
public "getSkill"(arg0: $SkillSlot$Type): $SkillContainer
public "getSkill"(arg0: $Skill$Type): $SkillContainer
public "openSkillBook"(arg0: $ItemStack$Type, arg1: $InteractionHand$Type): void
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "onConstructed"(arg0: T): void
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "getHitAnimation"(arg0: $StunType$Type): $StaticAnimation
public "initAnimator"(arg0: $ClientAnimator$Type): void
public "onFall"(arg0: $LivingFallEvent$Type): void
public "cancelAnyAction"(): void
public "getYOld"(): double
public "getSkillChargingTicks"(): integer
public "getSkillChargingTicks"(arg0: float): float
public "getAccumulatedChargeAmount"(): integer
public "getModifiedBaseDamage"(arg0: float): float
public "getModifiedStaminaConsume"(arg0: float): float
public "getTickSinceLastAction"(): integer
public "serverTick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "getDamageSource"(arg0: $StaticAnimation$Type, arg1: $InteractionHand$Type): $EpicFightDamageSource
public "getSkillCapability"(): $CapabilitySkill
public "changeModelYRot"(arg0: float): void
public "getStamina"(): float
public "setStamina"(arg0: float): void
public "getMaxStamina"(): float
public "copySkillsFrom"(arg0: $PlayerPatch$Type<(any)>): void
public "hasStamina"(arg0: float): boolean
public "startSkillCharging"(arg0: $ChargeableSkill$Type): void
public "getChargingAmount"(): integer
public "getAttackSpeed"(arg0: $InteractionHand$Type): float
public "consumeStamina"(arg0: float): boolean
public "setChargingAmount"(arg0: integer): void
public "isBattleMode"(): boolean
public "toMiningMode"(arg0: boolean): void
public "toggleMode"(): void
public "getPlayerMode"(): $PlayerPatch$PlayerMode
public "toBattleMode"(arg0: boolean): void
public "isChargingSkill"(): boolean
public "isChargingSkill"(arg0: $Skill$Type): boolean
public "resetSkillCharging"(): void
public "getEventListener"(): $PlayerEventListener
public "resetActionTick"(): void
public "getChargingSkill"(): $ChargeableSkill
public "getWeaponAttribute"(arg0: $Attribute$Type, arg1: $ItemStack$Type): double
public "getModifiedAttackSpeed"(arg0: $CapabilityItem$Type, arg1: float): float
public "consumeStaminaAlways"(arg0: float): void
public "getLastChargingTick"(): integer
get "unstable"(): boolean
get "xOld"(): double
get "zOld"(): double
get "yOld"(): double
get "skillChargingTicks"(): integer
get "accumulatedChargeAmount"(): integer
get "tickSinceLastAction"(): integer
get "skillCapability"(): $CapabilitySkill
get "stamina"(): float
set "stamina"(value: float)
get "maxStamina"(): float
get "chargingAmount"(): integer
set "chargingAmount"(value: integer)
get "battleMode"(): boolean
get "playerMode"(): $PlayerPatch$PlayerMode
get "chargingSkill"(): boolean
get "eventListener"(): $PlayerEventListener
get "chargingSkill"(): $ChargeableSkill
get "lastChargingTick"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerPatch$Type<T> = ($PlayerPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerPatch_<T> = $PlayerPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/$LivingMotion" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $LivingMotion extends $ExtendableEnum {

 "isSame"(arg0: $LivingMotion$Type): boolean
 "universalOrdinal"(): integer

(arg0: $LivingMotion$Type): boolean
}

export namespace $LivingMotion {
const ENUM_MANAGER: $ExtendableEnumManager<($LivingMotion)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingMotion$Type = ($LivingMotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingMotion_ = $LivingMotion$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ModifyBaseDamageEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $ModifyBaseDamageEvent<T extends $PlayerPatch<(any)>> extends $PlayerEvent<(T)> {

constructor(arg0: T, arg1: float)

public "getDamage"(): float
public "setDamage"(arg0: float): void
get "damage"(): float
set "damage"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifyBaseDamageEvent$Type<T> = ($ModifyBaseDamageEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifyBaseDamageEvent_<T> = $ModifyBaseDamageEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$AttackSpeedModifyEvent" {
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $AttackSpeedModifyEvent extends $PlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $CapabilityItem$Type, arg2: float)

public "setAttackSpeed"(arg0: float): void
public "getItemCapability"(): $CapabilityItem
public "getAttackSpeed"(): float
set "attackSpeed"(value: float)
get "itemCapability"(): $CapabilityItem
get "attackSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackSpeedModifyEvent$Type = ($AttackSpeedModifyEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackSpeedModifyEvent_ = $AttackSpeedModifyEvent$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$HitParticleType, $HitParticleType$Type} from "packages/yesman/epicfight/particle/$HitParticleType"
import {$Armature, $Armature$Type} from "packages/yesman/epicfight/api/model/$Armature"
import {$LivingEntityPatch$AnimationPacketProvider, $LivingEntityPatch$AnimationPacketProvider$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch$AnimationPacketProvider"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$HurtableEntityPatch, $HurtableEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$HurtableEntityPatch"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$LivingFallEvent, $LivingFallEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingFallEvent"
import {$LivingDropsEvent, $LivingDropsEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$ServerAnimator, $ServerAnimator$Type} from "packages/yesman/epicfight/api/animation/$ServerAnimator"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ClientAnimator, $ClientAnimator$Type} from "packages/yesman/epicfight/api/client/animation/$ClientAnimator"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $LivingEntityPatch<T extends $LivingEntity> extends $HurtableEntityPatch<(T)> {
static readonly "STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "MAX_STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "EXECUTION_RESISTANCE": $EntityDataAccessor<(integer)>
static readonly "AIRBORNE": $EntityDataAccessor<(boolean)>
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "getTarget"(): $LivingEntity
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "getImpact"(arg0: $InteractionHand$Type): float
public "getWeight"(): float
public "setExecutionResistance"(arg0: integer): void
public "getCurrenltyAttackedEntities"(): $List<($LivingEntity)>
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "getWeaponHitParticle"(arg0: $InteractionHand$Type): $HitParticleType
public "getCurrentLivingMotion"(): $LivingMotion
public "getCurrenltyHurtEntities"(): $List<($LivingEntity)>
public "getExecutionResistance"(): integer
public "getAttackDirectionPitch"(): float
public "isLastAttackSuccess"(): boolean
public "getAdvancedHoldingItemCapability"(arg0: $InteractionHand$Type): $CapabilityItem
public "notifyGrapplingWarning"(): void
public "getColliderMatching"(arg0: $InteractionHand$Type): $Collider
public "setLastAttackSuccess"(arg0: boolean): void
public "getLastAttackPosition"(): $Vec3
public "setLastAttackPosition"(): void
public "flashTargetIndicator"(arg0: $LocalPlayerPatch$Type): boolean
public "getAttackingHand"(): $InteractionHand
public "attack"(arg0: $EpicFightDamageSource$Type, arg1: $Entity$Type, arg2: $InteractionHand$Type): $AttackResult
public "getXOld"(): double
public "getYRotLimit"(): float
public "getZOld"(): double
public "overrideRender"(): boolean
public "onJoinWorld"(arg0: T, arg1: $EntityJoinLevelEvent$Type): void
public "onConstructed"(arg0: T): void
public "applyStun"(arg0: $StunType$Type, arg1: float): boolean
public "getModelMatrix"(arg0: float): $OpenMatrix4f
public "setStunShield"(arg0: float): void
public "getStunShield"(): float
public "getArmature"(): $Armature
public "getHitAnimation"(arg0: $StunType$Type): $StaticAnimation
public "initAnimator"(arg0: $ClientAnimator$Type): void
public "updateMotion"(arg0: boolean): void
public "aboutToDeath"(): void
public "setAirborneState"(arg0: boolean): void
public "isAirborneState"(): boolean
public "onFall"(arg0: $LivingFallEvent$Type): void
public "getCameraXRot"(): float
public "getHeadMatrix"(arg0: float): $OpenMatrix4f
public "gatherDamageDealt"(arg0: $EpicFightDamageSource$Type, arg1: float): void
public "tryHurt"(arg0: $DamageSource$Type, arg1: float): $AttackResult
public "tryHarm"(arg0: $Entity$Type, arg1: $EpicFightDamageSource$Type, arg2: float): $AttackResult
public "getMaxStunShield"(): float
public "getCameraYRot"(): float
public "isOffhandItemValid"(): boolean
public "cancelAnyAction"(): void
public "onDrop"(arg0: $LivingDropsEvent$Type): boolean
public "setMaxStunShield"(arg0: float): void
public "reserveAnimation"(arg0: $StaticAnimation$Type): void
public "correctRotation"(): void
public "getServerAnimator"(): $ServerAnimator
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type, arg2: $ItemStack$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type): void
public "getClientAnimator"(): $ClientAnimator
public "updateArmor"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type, arg2: $EquipmentSlot$Type): void
public "onDodgeSuccess"(arg0: $DamageSource$Type): void
public "getWeaponHitSound"(arg0: $InteractionHand$Type): $SoundEvent
public "resetSize"(arg0: $EntityDimensions$Type): void
public "getSwingSound"(arg0: $InteractionHand$Type): $SoundEvent
public "getMaxStrikes"(arg0: $InteractionHand$Type): integer
public "getGrapplingTarget"(): $LivingEntity
public "isTeammate"(arg0: $Entity$Type): boolean
public "getValidItemInHand"(arg0: $InteractionHand$Type): $ItemStack
public "setGrapplingTarget"(arg0: $LivingEntity$Type): void
public "removeHurtEntities"(): void
public "getYOld"(): double
public "onAttackBlocked"(arg0: $DamageSource$Type, arg1: $LivingEntityPatch$Type<(any)>): void
public "canPush"(arg0: $Entity$Type): boolean
public "setLastAttackEntity"(arg0: $Entity$Type): void
public "setLastAttackResult"(arg0: $AttackResult$Type): void
public "getEpicFightDamageSource"(): $EpicFightDamageSource
public "getModifiedBaseDamage"(arg0: float): float
public "playAnimationSynchronized"(arg0: $StaticAnimation$Type, arg1: float, arg2: $LivingEntityPatch$AnimationPacketProvider$Type): void
public "playAnimationSynchronized"(arg0: $StaticAnimation$Type, arg1: float): void
public "getHoldingItemCapability"(arg0: $InteractionHand$Type): $CapabilityItem
public "getArmorNegation"(arg0: $InteractionHand$Type): float
public "getDamageSource"(arg0: $StaticAnimation$Type, arg1: $InteractionHand$Type): $EpicFightDamageSource
public "isFirstPerson"(): boolean
public "shouldBlockMoving"(): boolean
public "rotateTo"(arg0: $Entity$Type, arg1: float, arg2: boolean): void
public "rotateTo"(arg0: float, arg1: float, arg2: boolean): void
public "updateEntityState"(): void
public "onDeath"(arg0: $LivingDeathEvent$Type): void
public "getAnimator"<A extends $Animator>(): A
public "onMount"(arg0: boolean, arg1: $Entity$Type): void
public "isStunned"(): boolean
public "getEntityState"(): $EntityState
get "target"(): $LivingEntity
get "weight"(): float
set "executionResistance"(value: integer)
get "currenltyAttackedEntities"(): $List<($LivingEntity)>
get "currentLivingMotion"(): $LivingMotion
get "currenltyHurtEntities"(): $List<($LivingEntity)>
get "executionResistance"(): integer
get "attackDirectionPitch"(): float
get "lastAttackSuccess"(): boolean
set "lastAttackSuccess"(value: boolean)
get "lastAttackPosition"(): $Vec3
get "attackingHand"(): $InteractionHand
get "xOld"(): double
get "yRotLimit"(): float
get "zOld"(): double
set "stunShield"(value: float)
get "stunShield"(): float
get "armature"(): $Armature
set "airborneState"(value: boolean)
get "airborneState"(): boolean
get "cameraXRot"(): float
get "maxStunShield"(): float
get "cameraYRot"(): float
get "offhandItemValid"(): boolean
set "maxStunShield"(value: float)
get "serverAnimator"(): $ServerAnimator
get "clientAnimator"(): $ClientAnimator
get "grapplingTarget"(): $LivingEntity
set "grapplingTarget"(value: $LivingEntity$Type)
get "yOld"(): double
set "lastAttackEntity"(value: $Entity$Type)
set "lastAttackResult"(value: $AttackResult$Type)
get "epicFightDamageSource"(): $EpicFightDamageSource
get "firstPerson"(): boolean
get "animator"(): A
get "stunned"(): boolean
get "entityState"(): $EntityState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityPatch$Type<T> = ($LivingEntityPatch<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityPatch_<T> = $LivingEntityPatch$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/$SkillDataKey" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$SkillDataKey$SkillDataKeyCallbacks, $SkillDataKey$SkillDataKeyCallbacks$Type} from "packages/yesman/epicfight/skill/$SkillDataKey$SkillDataKeyCallbacks"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SkillDataKey<T> {

constructor(arg0: $BiConsumer$Type<($ByteBuf$Type), (T)>, arg1: $Function$Type<($ByteBuf$Type), (T)>, arg2: T, arg3: boolean)

public "getId"(): integer
public "defaultValue"(): T
public static "byId"(arg0: integer): $SkillDataKey<(any)>
public static "createIntKey"(arg0: integer, arg1: boolean, ...arg2: ($Class$Type<(any)>)[]): $SkillDataKey<(integer)>
public static "createBooleanKey"(arg0: boolean, arg1: boolean, ...arg2: ($Class$Type<(any)>)[]): $SkillDataKey<(boolean)>
public static "createFloatKey"(arg0: float, arg1: boolean, ...arg2: ($Class$Type<(any)>)[]): $SkillDataKey<(float)>
public static "createSkillDataKey"<T>(arg0: $BiConsumer$Type<($ByteBuf$Type), (T)>, arg1: $Function$Type<($ByteBuf$Type), (T)>, arg2: T, arg3: boolean, ...arg4: ($Class$Type<(any)>)[]): $SkillDataKey<(T)>
public static "createVector3fKey"(arg0: $Vec3f$Type, arg1: boolean, ...arg2: ($Class$Type<(any)>)[]): $SkillDataKey<($Vec3f)>
public static "createDoubleKey"(arg0: double, arg1: boolean, ...arg2: ($Class$Type<(any)>)[]): $SkillDataKey<(double)>
public "readFromBuffer"(arg0: $ByteBuf$Type): T
public static "createVector3dKey"(arg0: $Vec3$Type, arg1: boolean, ...arg2: ($Class$Type<(any)>)[]): $SkillDataKey<($Vec3)>
public static "getSkillDataKeyMap"(): $Map<($Class<(any)>), ($Set<($SkillDataKey<(any)>)>)>
public static "getIdMap"(): $IdMapper<($SkillDataKey<(any)>)>
public "syncronizeTrackingPlayers"(): boolean
public "writeToBuffer"(arg0: $ByteBuf$Type, arg1: T): void
public static "getCallBack"(): $SkillDataKey$SkillDataKeyCallbacks
get "id"(): integer
get "skillDataKeyMap"(): $Map<($Class<(any)>), ($Set<($SkillDataKey<(any)>)>)>
get "idMap"(): $IdMapper<($SkillDataKey<(any)>)>
get "callBack"(): $SkillDataKey$SkillDataKeyCallbacks
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillDataKey$Type<T> = ($SkillDataKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillDataKey_<T> = $SkillDataKey$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/item/$UchigatanaItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UchigatanaItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UchigatanaItem$Type = ($UchigatanaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UchigatanaItem_ = $UchigatanaItem$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$HitParticleType, $HitParticleType$Type} from "packages/yesman/epicfight/particle/$HitParticleType"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuardSkill, $GuardSkill$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuardSkill$BlockType, $GuardSkill$BlockType$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill$BlockType"
import {$CapabilityItem$Builder, $CapabilityItem$Builder$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem$Builder"
import {$Collider, $Collider$Type} from "packages/yesman/epicfight/api/collider/$Collider"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Style, $Style$Type} from "packages/yesman/epicfight/world/capabilities/item/$Style"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapabilityItem {
static "EMPTY": $CapabilityItem


public "isEmpty"(): boolean
public static "builder"(): $CapabilityItem$Builder
public "getResult"(arg0: $ItemStack$Type): $CapabilityItem
public static "getBasicAutoAttackMotion"(): $List<($StaticAnimation)>
public "getDamageAttributesInCondition"(arg0: $Style$Type): $Map<($Attribute), ($AttributeModifier)>
public "canHoldInOffhandAlone"(): boolean
public "setConfigFileAttribute"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double, arg5: integer): void
public "getStyle"(arg0: $LivingEntityPatch$Type<(any)>): $Style
public "getSmashingSound"(): $SoundEvent
public "checkOffhandValid"(arg0: $LivingEntityPatch$Type<(any)>): boolean
public "getHitSound"(): $SoundEvent
public "getHitParticle"(): $HitParticleType
public "getWeaponCollider"(): $Collider
public "modifyItemTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: $LivingEntityPatch$Type<(any)>): void
public "addStyleAttributes"(arg0: $Style$Type, arg1: double, arg2: double, arg3: integer): void
public "getPassiveSkill"(): $Skill
public "canBePlacedOffhand"(): boolean
public "addStyleAttibutes"(arg0: $Style$Type, arg1: $Pair$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $LivingEntityPatch$Type<(any)>): $Multimap<($Attribute), ($AttributeModifier)>
public "getMountAttackMotion"(): $List<($StaticAnimation)>
public "getInnateSkill"(arg0: $PlayerPatch$Type<(any)>, arg1: $ItemStack$Type): $Skill
public "shouldCancelCombo"(arg0: $LivingEntityPatch$Type<(any)>): boolean
public "availableOnHorse"(): boolean
public "getAutoAttckMotion"(arg0: $PlayerPatch$Type<(any)>): $List<($StaticAnimation)>
public "getUseAnimation"(arg0: $LivingEntityPatch$Type<(any)>): $UseAnim
public "getWeaponCategory"(): $WeaponCategory
public "getGuardMotion"(arg0: $GuardSkill$Type, arg1: $GuardSkill$BlockType$Type, arg2: $PlayerPatch$Type<(any)>): $StaticAnimation
public "changeWeaponInnateSkill"(arg0: $PlayerPatch$Type<(any)>, arg1: $ItemStack$Type): void
public "getAllAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getLivingMotionModifier"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $InteractionHand$Type): $Map<($LivingMotion), ($StaticAnimation)>
get "empty"(): boolean
get "basicAutoAttackMotion"(): $List<($StaticAnimation)>
get "smashingSound"(): $SoundEvent
get "hitSound"(): $SoundEvent
get "hitParticle"(): $HitParticleType
get "weaponCollider"(): $Collider
get "passiveSkill"(): $Skill
get "mountAttackMotion"(): $List<($StaticAnimation)>
get "weaponCategory"(): $WeaponCategory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$Type = ($CapabilityItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem_ = $CapabilityItem$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor" {
import {$TypeFlexibleHashMap$TypeKey, $TypeFlexibleHashMap$TypeKey$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap$TypeKey"

export class $EntityState$StateFactor<T> implements $TypeFlexibleHashMap$TypeKey<(T)> {

constructor(arg0: string, arg1: T)

public "toString"(): string
public "defaultValue"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityState$StateFactor$Type<T> = ($EntityState$StateFactor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityState$StateFactor_<T> = $EntityState$StateFactor$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackAnimationProperty" {
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"

export class $AnimationProperty$AttackAnimationProperty<T> extends $AnimationProperty<(T)> {
static readonly "FIXED_MOVE_DISTANCE": $AnimationProperty$AttackAnimationProperty<(boolean)>
static readonly "ATTACK_SPEED_FACTOR": $AnimationProperty$AttackAnimationProperty<(float)>
static readonly "BASIS_ATTACK_SPEED": $AnimationProperty$AttackAnimationProperty<(float)>
static readonly "EXTRA_COLLIDERS": $AnimationProperty$AttackAnimationProperty<(integer)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$AttackAnimationProperty$Type<T> = ($AnimationProperty$AttackAnimationProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$AttackAnimationProperty_<T> = $AnimationProperty$AttackAnimationProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/guard/$GuardSkill" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$HurtEvent$Pre, $HurtEvent$Pre$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent$Pre"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$BattleModeGui, $BattleModeGui$Type} from "packages/yesman/epicfight/client/gui/$BattleModeGui"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$GuardSkill$Builder, $GuardSkill$Builder$Type} from "packages/yesman/epicfight/skill/guard/$GuardSkill$Builder"

export class $GuardSkill extends $Skill {

constructor(arg0: $GuardSkill$Builder$Type)

public "guard"(arg0: $SkillContainer$Type, arg1: $CapabilityItem$Type, arg2: $HurtEvent$Pre$Type, arg3: float, arg4: float, arg5: boolean): void
public "setParams"(arg0: $CompoundTag$Type): void
public "onRemoved"(arg0: $SkillContainer$Type): void
public "getTooltipArgsOfScreen"(arg0: $List$Type<(any)>): $List<(any)>
public static "createGuardBuilder"(): $GuardSkill$Builder
public "isExecutableState"(arg0: $PlayerPatch$Type<(any)>): boolean
public "onInitiate"(arg0: $SkillContainer$Type): void
public "updateContainer"(arg0: $SkillContainer$Type): void
public "drawOnGui"(arg0: $BattleModeGui$Type, arg1: $SkillContainer$Type, arg2: $GuiGraphics$Type, arg3: float, arg4: float): void
public "shouldDraw"(arg0: $SkillContainer$Type): boolean
public "dealEvent"(arg0: $PlayerPatch$Type<(any)>, arg1: $HurtEvent$Pre$Type, arg2: boolean): void
set "params"(value: $CompoundTag$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardSkill$Type = ($GuardSkill);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardSkill_ = $GuardSkill$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/property/$JointMask" {
import {$JointMask$BindModifier, $JointMask$BindModifier$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier"

export class $JointMask {
static readonly "KEEP_CHILD_LOCROT": $JointMask$BindModifier


public "equals"(arg0: any): boolean
public static "of"(arg0: string, arg1: $JointMask$BindModifier$Type): $JointMask
public static "of"(arg0: string): $JointMask
public "getBindModifier"(): $JointMask$BindModifier
public "getJointName"(): string
get "bindModifier"(): $JointMask$BindModifier
get "jointName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointMask$Type = ($JointMask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointMask_ = $JointMask$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill$Resource$ResourceConsumer" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"

export interface $Skill$Resource$ResourceConsumer {

 "consume"(arg0: $Skill$Type, arg1: $ServerPlayerPatch$Type, arg2: float): void

(arg0: $Skill$Type, arg1: $ServerPlayerPatch$Type, arg2: float): void
}

export namespace $Skill$Resource$ResourceConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Resource$ResourceConsumer$Type = ($Skill$Resource$ResourceConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$Resource$ResourceConsumer_ = $Skill$Resource$ResourceConsumer$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$AnimationPlayer" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationPlayer {

constructor()

public "isEmpty"(): boolean
public "reset"(): void
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "getElapsedTime"(): float
public "getCurrentPose"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $Pose
public "setPlayAnimation"(arg0: $DynamicAnimation$Type): void
public "getAnimation"(): $DynamicAnimation
public "isEnd"(): boolean
public "setReversed"(arg0: boolean): void
public "getPrevElapsedTime"(): float
public "isReversed"(): boolean
public "setElapsedTime"(arg0: float): void
public "setElapsedTime"(arg0: float, arg1: float): void
public "setElapsedTimeCurrent"(arg0: float): void
public "markToDoNotReset"(): void
get "empty"(): boolean
get "elapsedTime"(): float
set "playAnimation"(value: $DynamicAnimation$Type)
get "animation"(): $DynamicAnimation
get "end"(): boolean
set "reversed"(value: boolean)
get "prevElapsedTime"(): float
get "reversed"(): boolean
set "elapsedTime"(value: float)
set "elapsedTimeCurrent"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationPlayer$Type = ($AnimationPlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationPlayer_ = $AnimationPlayer$Type;
}}
declare module "packages/yesman/epicfight/world/item/$SpearItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpearItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpearItem$Type = ($SpearItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpearItem_ = $SpearItem$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PoseModifier" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationProperty$PoseModifier {

 "modify"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void

(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
}

export namespace $AnimationProperty$PoseModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$PoseModifier$Type = ($AnimationProperty$PoseModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$PoseModifier_ = $AnimationProperty$PoseModifier$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$TimePeriodEvent" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$AnimationEvent$Side, $AnimationEvent$Side$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Side"
import {$AnimationEvent$AnimationEventConsumer, $AnimationEvent$AnimationEventConsumer$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$AnimationEventConsumer"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationEvent$TimePeriodEvent extends $AnimationEvent implements $Comparable<($AnimationEvent$TimePeriodEvent)> {


public "compareTo"(arg0: $AnimationEvent$TimePeriodEvent$Type): integer
public "params"(...arg0: (any)[]): $AnimationEvent$TimePeriodEvent
public static "create"(arg0: float, arg1: float, arg2: $AnimationEvent$AnimationEventConsumer$Type, arg3: $AnimationEvent$Side$Type): $AnimationEvent$TimePeriodEvent
public "executeIfRightSide"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $StaticAnimation$Type, arg2: float, arg3: float): void
public "withParams"(...arg0: (any)[]): $AnimationEvent$TimePeriodEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$TimePeriodEvent$Type = ($AnimationEvent$TimePeriodEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$TimePeriodEvent_ = $AnimationEvent$TimePeriodEvent$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent$Causal" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ComboCounterHandleEvent$Causal extends $Enum<($ComboCounterHandleEvent$Causal)> {
static readonly "BASIC_ATTACK_COUNT": $ComboCounterHandleEvent$Causal
static readonly "ACTION_ANIMATION_RESET": $ComboCounterHandleEvent$Causal
static readonly "TIME_EXPIRED_RESET": $ComboCounterHandleEvent$Causal


public static "values"(): ($ComboCounterHandleEvent$Causal)[]
public static "valueOf"(arg0: string): $ComboCounterHandleEvent$Causal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComboCounterHandleEvent$Causal$Type = (("basic_attack_count") | ("time_expired_reset") | ("action_animation_reset")) | ($ComboCounterHandleEvent$Causal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComboCounterHandleEvent$Causal_ = $ComboCounterHandleEvent$Causal$Type;
}}
declare module "packages/yesman/epicfight/client/gui/$ModIngameGui" {
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"

export class $ModIngameGui {

constructor()

public "getBlitOffset"(): integer
public "drawTexturedModalRectFixCoord"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "drawTexturedModalRectFixCoord"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
get "blitOffset"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModIngameGui$Type = ($ModIngameGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModIngameGui_ = $ModIngameGui$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SetTargetEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SetTargetEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $LivingEntity$Type)

public "getTarget"(): $LivingEntity
get "target"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SetTargetEvent$Type = ($SetTargetEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SetTargetEvent_ = $SetTargetEvent$Type;
}}
declare module "packages/yesman/epicfight/world/level/block/$FractureBlockState" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MapCodec, $MapCodec$Type} from "packages/com/mojang/serialization/$MapCodec"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBehaviour$BlockStateBase$Cache, $BlockBehaviour$BlockStateBase$Cache$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$BlockStateBase$Cache"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FractureBlockState extends $BlockState {
static readonly "CODEC": $Codec<($BlockState)>
 "cache": $BlockBehaviour$BlockStateBase$Cache
static readonly "NAME_TAG": string
static readonly "PROPERTIES_TAG": string
 "owner": O
readonly "propertiesCodec": $MapCodec<(S)>

constructor(arg0: $Block$Type, arg1: $ImmutableMap$Type<($Property$Type<(any)>), ($Comparable$Type<(any)>)>, arg2: $MapCodec$Type<($BlockState$Type)>)

public static "remove"(arg0: $BlockPos$Type): void
public static "reset"(): void
public "getShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): $VoxelShape
public "getVisualShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $VoxelShape
public "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "hasBlockEntity"(): boolean
public "getRenderShape"(): $RenderShape
public "getLifeTime"(): integer
public "getLightEmission"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): integer
public "getRotation"(): $Quaternionf
public "supportsExternalFaceHiding"(): boolean
public "getTranslate"(): $Vector3f
public "getBouncing"(): double
public "setFractureInfo"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Vector3f$Type, arg3: $Quaternionf$Type, arg4: double, arg5: integer): void
public "getOriginalBlockState"(arg0: $BlockPos$Type): $BlockState
get "renderShape"(): $RenderShape
get "lifeTime"(): integer
get "rotation"(): $Quaternionf
get "translate"(): $Vector3f
get "bouncing"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FractureBlockState$Type = ($FractureBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FractureBlockState_ = $FractureBlockState$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ActionEvent" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $ActionEvent<T extends $PlayerPatch<(any)>> extends $PlayerEvent<(T)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $StaticAnimation$Type)

public "getAnimation"(): $StaticAnimation
get "animation"(): $StaticAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionEvent$Type<T> = ($ActionEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ActionEvent_<T> = $ActionEvent$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$StaticAnimationProperty" {
import {$AnimationEvent$TimePeriodEvent, $AnimationEvent$TimePeriodEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$TimePeriodEvent"
import {$AnimationProperty$PlaybackTimeModifier, $AnimationProperty$PlaybackTimeModifier$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PlaybackTimeModifier"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$AnimationProperty$PoseModifier, $AnimationProperty$PoseModifier$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PoseModifier"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent"
import {$AnimationEvent$TimeStampedEvent, $AnimationEvent$TimeStampedEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$TimeStampedEvent"

export class $AnimationProperty$StaticAnimationProperty<T> extends $AnimationProperty<(T)> {
static readonly "EVENTS": $AnimationProperty$StaticAnimationProperty<(($AnimationEvent)[])>
static readonly "TIME_STAMPED_EVENTS": $AnimationProperty$StaticAnimationProperty<(($AnimationEvent$TimeStampedEvent)[])>
static readonly "TIME_PERIOD_EVENTS": $AnimationProperty$StaticAnimationProperty<(($AnimationEvent$TimePeriodEvent)[])>
static readonly "ON_BEGIN_EVENTS": $AnimationProperty$StaticAnimationProperty<(($AnimationEvent)[])>
static readonly "ON_END_EVENTS": $AnimationProperty$StaticAnimationProperty<(($AnimationEvent)[])>
static readonly "PLAY_SPEED_MODIFIER": $AnimationProperty$StaticAnimationProperty<($AnimationProperty$PlaybackTimeModifier)>
static readonly "ELAPSED_TIME_MODIFIER": $AnimationProperty$StaticAnimationProperty<($AnimationProperty$PlaybackTimeModifier)>
static readonly "POSE_MODIFIER": $AnimationProperty$StaticAnimationProperty<($AnimationProperty$PoseModifier)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$StaticAnimationProperty$Type<T> = ($AnimationProperty$StaticAnimationProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$StaticAnimationProperty_<T> = $AnimationProperty$StaticAnimationProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$SPSkillExecutionFeedback$FeedbackType, $SPSkillExecutionFeedback$FeedbackType$Type} from "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback$FeedbackType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SPSkillExecutionFeedback {

constructor()

public static "toBytes"(arg0: $SPSkillExecutionFeedback$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $SPSkillExecutionFeedback$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public static "expired"(arg0: integer): $SPSkillExecutionFeedback
public "getBuffer"(): $FriendlyByteBuf
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $SPSkillExecutionFeedback
public static "executed"(arg0: integer): $SPSkillExecutionFeedback
public "setFeedbackType"(arg0: $SPSkillExecutionFeedback$FeedbackType$Type): void
public static "chargingBegin"(arg0: integer): $SPSkillExecutionFeedback
get "buffer"(): $FriendlyByteBuf
set "feedbackType"(value: $SPSkillExecutionFeedback$FeedbackType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPSkillExecutionFeedback$Type = ($SPSkillExecutionFeedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPSkillExecutionFeedback_ = $SPSkillExecutionFeedback$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem$Builder" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$WeaponCategory, $WeaponCategory$Type} from "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Style, $Style$Type} from "packages/yesman/epicfight/world/capabilities/item/$Style"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $CapabilityItem$Builder {


public "constructor"(arg0: $Function$Type<($CapabilityItem$Builder$Type), ($CapabilityItem$Type)>): $CapabilityItem$Builder
public "build"(): $CapabilityItem
public "category"(arg0: $WeaponCategory$Type): $CapabilityItem$Builder
public "addStyleAttibutes"(arg0: $Style$Type, arg1: $Pair$Type<($Attribute$Type), ($AttributeModifier$Type)>): $CapabilityItem$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityItem$Builder$Type = ($CapabilityItem$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityItem$Builder_ = $CapabilityItem$Builder$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$DamageSourceElements" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DamageSourceElements {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageSourceElements$Type = ($DamageSourceElements);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageSourceElements_ = $DamageSourceElements$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer$Priority" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Layer$Priority extends $Enum<($Layer$Priority)> {
static readonly "LOWEST": $Layer$Priority
static readonly "MIDDLE": $Layer$Priority
static readonly "HIGHEST": $Layer$Priority


public static "values"(): ($Layer$Priority)[]
public static "valueOf"(arg0: string): $Layer$Priority
public "uppers"(): ($Layer$Priority)[]
public "lowers"(): ($Layer$Priority)[]
public "lowerEquals"(): ($Layer$Priority)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$Priority$Type = (("middle") | ("highest") | ("lowest")) | ($Layer$Priority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$Priority_ = $Layer$Priority$Type;
}}
declare module "packages/yesman/epicfight/network/server/$SPSkillExecutionFeedback$FeedbackType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SPSkillExecutionFeedback$FeedbackType extends $Enum<($SPSkillExecutionFeedback$FeedbackType)> {
static readonly "EXECUTED": $SPSkillExecutionFeedback$FeedbackType
static readonly "CHARGING_BEGIN": $SPSkillExecutionFeedback$FeedbackType
static readonly "EXPIRED": $SPSkillExecutionFeedback$FeedbackType


public static "values"(): ($SPSkillExecutionFeedback$FeedbackType)[]
public static "valueOf"(arg0: string): $SPSkillExecutionFeedback$FeedbackType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SPSkillExecutionFeedback$FeedbackType$Type = (("charging_begin") | ("expired") | ("executed")) | ($SPSkillExecutionFeedback$FeedbackType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SPSkillExecutionFeedback$FeedbackType_ = $SPSkillExecutionFeedback$FeedbackType$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$DodgeSuccessEvent" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $DodgeSuccessEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $DamageSource$Type)

public "getDamageSource"(): $DamageSource
get "damageSource"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DodgeSuccessEvent$Type = ($DodgeSuccessEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DodgeSuccessEvent_ = $DodgeSuccessEvent$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageTooltipFunction" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export interface $ExtraDamageInstance$ExtraDamageTooltipFunction {

 "setTooltip"(arg0: $ItemStack$Type, arg1: $MutableComponent$Type, arg2: double, arg3: (float)[]): void

(arg0: $ItemStack$Type, arg1: $MutableComponent$Type, arg2: double, arg3: (float)[]): void
}

export namespace $ExtraDamageInstance$ExtraDamageTooltipFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$ExtraDamageTooltipFunction$Type = ($ExtraDamageInstance$ExtraDamageTooltipFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance$ExtraDamageTooltipFunction_ = $ExtraDamageInstance$ExtraDamageTooltipFunction$Type;
}}
declare module "packages/yesman/epicfight/skill/$Skill$Builder" {
import {$Skill$Resource, $Skill$Resource$Type} from "packages/yesman/epicfight/skill/$Skill$Resource"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Skill$ActivateType, $Skill$ActivateType$Type} from "packages/yesman/epicfight/skill/$Skill$ActivateType"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export class $Skill$Builder<T extends $Skill> {

constructor()

public "setCategory"(arg0: $SkillCategory$Type): $Skill$Builder<(T)>
public "isLearnable"(): boolean
public "hasCategory"(arg0: $SkillCategory$Type): boolean
public "setCreativeTab"(arg0: $CreativeModeTab$Type): $Skill$Builder<(T)>
public "setRegistryName"(arg0: $ResourceLocation$Type): $Skill$Builder<(T)>
public "setResource"(arg0: $Skill$Resource$Type): $Skill$Builder<(T)>
public "getRegistryName"(): $ResourceLocation
public "setActivateType"(arg0: $Skill$ActivateType$Type): $Skill$Builder<(T)>
public "getCreativeTab"(): $CreativeModeTab
set "category"(value: $SkillCategory$Type)
get "learnable"(): boolean
set "creativeTab"(value: $CreativeModeTab$Type)
set "registryName"(value: $ResourceLocation$Type)
set "resource"(value: $Skill$Resource$Type)
get "registryName"(): $ResourceLocation
set "activateType"(value: $Skill$ActivateType$Type)
get "creativeTab"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$Builder$Type<T> = ($Skill$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$Builder_<T> = $Skill$Builder$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/$Skill$ActivateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Skill$ActivateType extends $Enum<($Skill$ActivateType)> {
static readonly "ONE_SHOT": $Skill$ActivateType
static readonly "DURATION": $Skill$ActivateType
static readonly "DURATION_INFINITE": $Skill$ActivateType
static readonly "TOGGLE": $Skill$ActivateType
static readonly "CHARGING": $Skill$ActivateType


public static "values"(): ($Skill$ActivateType)[]
public static "valueOf"(arg0: string): $Skill$ActivateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Skill$ActivateType$Type = (("duration") | ("duration_infinite") | ("charging") | ("one_shot") | ("toggle")) | ($Skill$ActivateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Skill$ActivateType_ = $Skill$ActivateType$Type;
}}
declare module "packages/yesman/epicfight/world/item/$WeaponItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WeaponItem extends $SwordItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

public "isCorrectToolForDrops"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponItem$Type = ($WeaponItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponItem_ = $WeaponItem$Type;
}}
declare module "packages/yesman/epicfight/api/client/animation/$Layer$LayerType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Layer$LayerType extends $Enum<($Layer$LayerType)> {
static readonly "BASE_LAYER": $Layer$LayerType
static readonly "COMPOSITE_LAYER": $Layer$LayerType


public static "values"(): ($Layer$LayerType)[]
public static "valueOf"(arg0: string): $Layer$LayerType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Layer$LayerType$Type = (("composite_layer") | ("base_layer")) | ($Layer$LayerType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Layer$LayerType_ = $Layer$LayerType$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$WeaponCategory" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $WeaponCategory extends $ExtendableEnum {

 "universalOrdinal"(): integer

(): integer
}

export namespace $WeaponCategory {
const ENUM_MANAGER: $ExtendableEnumManager<($WeaponCategory)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WeaponCategory$Type = ($WeaponCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WeaponCategory_ = $WeaponCategory$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$TimePairList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TimePairList {


public static "create"(...arg0: (float)[]): $TimePairList
public "isTimeInPairs"(arg0: float): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimePairList$Type = ($TimePairList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimePairList_ = $TimePairList$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$TimeStampedEvent" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$AnimationEvent$Side, $AnimationEvent$Side$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Side"
import {$AnimationEvent$AnimationEventConsumer, $AnimationEvent$AnimationEventConsumer$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$AnimationEventConsumer"
import {$AnimationEvent, $AnimationEvent$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationEvent$TimeStampedEvent extends $AnimationEvent implements $Comparable<($AnimationEvent$TimeStampedEvent)> {


public "compareTo"(arg0: $AnimationEvent$TimeStampedEvent$Type): integer
public "params"(...arg0: (any)[]): $AnimationEvent$TimeStampedEvent
public static "create"(arg0: float, arg1: $AnimationEvent$AnimationEventConsumer$Type, arg2: $AnimationEvent$Side$Type): $AnimationEvent$TimeStampedEvent
public "executeIfRightSide"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $StaticAnimation$Type, arg2: float, arg3: float): void
public "withParams"(...arg0: (any)[]): $AnimationEvent$TimeStampedEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$TimeStampedEvent$Type = ($AnimationEvent$TimeStampedEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$TimeStampedEvent_ = $AnimationEvent$TimeStampedEvent$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ExtraDamageInstance$ExtraDamage, $ExtraDamageInstance$ExtraDamage$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamage"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $ExtraDamageInstance {
static readonly "TARGET_LOST_HEALTH": $ExtraDamageInstance$ExtraDamage
static readonly "SWEEPING_EDGE_ENCHANTMENT": $ExtraDamageInstance$ExtraDamage

constructor(arg0: $ExtraDamageInstance$ExtraDamage$Type, ...arg1: (float)[])

public "get"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: float): float
public "getParams"(): (float)[]
public "setTooltips"(arg0: $ItemStack$Type, arg1: $MutableComponent$Type, arg2: double): void
public "toTransableComponentParams"(): (any)[]
get "params"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$Type = ($ExtraDamageInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance_ = $ExtraDamageInstance$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$StunType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StunType extends $Enum<($StunType)> {
static readonly "NONE": $StunType
static readonly "SHORT": $StunType
static readonly "LONG": $StunType
static readonly "HOLD": $StunType
static readonly "KNOCKDOWN": $StunType
static readonly "NEUTRALIZE": $StunType
static readonly "FALL": $StunType


public "toString"(): string
public static "values"(): ($StunType)[]
public static "valueOf"(arg0: string): $StunType
public "hasFixedStunTime"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StunType$Type = (("neutralize") | ("knockdown") | ("fall") | ("short") | ("none") | ("long") | ("hold")) | ($StunType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StunType_ = $StunType$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Side" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AnimationEvent$Side extends $Enum<($AnimationEvent$Side)> {
static readonly "CLIENT": $AnimationEvent$Side
static readonly "SERVER": $AnimationEvent$Side
static readonly "BOTH": $AnimationEvent$Side


public static "values"(): ($AnimationEvent$Side)[]
public static "valueOf"(arg0: string): $AnimationEvent$Side
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$Side$Type = (("server") | ("client") | ("both")) | ($AnimationEvent$Side);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$Side_ = $AnimationEvent$Side$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillSlot" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"
import {$SkillCategory, $SkillCategory$Type} from "packages/yesman/epicfight/skill/$SkillCategory"

export interface $SkillSlot extends $ExtendableEnum {

 "category"(): $SkillCategory
 "universalOrdinal"(): integer
}

export namespace $SkillSlot {
const ENUM_MANAGER: $ExtendableEnumManager<($SkillSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillSlot$Type = ($SkillSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillSlot_ = $SkillSlot$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$ExtendableEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ExtendableEnum {

 "universalOrdinal"(): integer

(): integer
}

export namespace $ExtendableEnum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendableEnum$Type = ($ExtendableEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendableEnum_ = $ExtendableEnum$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$ServerAnimator" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Animator, $Animator$Type} from "packages/yesman/epicfight/api/animation/$Animator"

export class $ServerAnimator extends $Animator {
readonly "animationPlayer": $AnimationPlayer
 "pause": boolean

constructor(arg0: $LivingEntityPatch$Type<(any)>)

public "init"(): void
public "tick"(): void
public "reserveAnimation"(arg0: $StaticAnimation$Type): void
public "playAnimation"(arg0: $StaticAnimation$Type, arg1: float): void
public "findFor"<T>(arg0: $Class$Type<(T)>): $Pair<($AnimationPlayer), (T)>
public static "getAnimator"(arg0: $LivingEntityPatch$Type<(any)>): $Animator
public "getPlayerFor"(arg0: $DynamicAnimation$Type): $AnimationPlayer
public "getEntityState"(): $EntityState
public "poseTick"(): void
public "playAnimationInstantly"(arg0: $StaticAnimation$Type): void
get "entityState"(): $EntityState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerAnimator$Type = ($ServerAnimator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerAnimator_ = $ServerAnimator$Type;
}}
declare module "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance$ExtraDamageFunction" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ExtraDamageInstance$ExtraDamageFunction {

 "getBonusDamage"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: float, arg4: (float)[]): float

(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: float, arg4: (float)[]): float
}

export namespace $ExtraDamageInstance$ExtraDamageFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtraDamageInstance$ExtraDamageFunction$Type = ($ExtraDamageInstance$ExtraDamageFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtraDamageInstance$ExtraDamageFunction_ = $ExtraDamageInstance$ExtraDamageFunction$Type;
}}
declare module "packages/yesman/epicfight/api/collider/$Collider" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttackAnimation, $AttackAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$AttackAnimation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Collider {

constructor(arg0: $Vec3$Type, arg1: $AABB$Type)

public "toString"(): string
public "draw"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: $AttackAnimation$Type, arg4: $Joint$Type, arg5: float, arg6: float, arg7: float, arg8: float): void
public "deepCopy"(): $Collider
public "drawInternal"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $OpenMatrix4f$Type, arg3: boolean): void
public "getCollideEntities"(arg0: $Entity$Type): $List<($Entity)>
public "isCollide"(arg0: $Entity$Type): boolean
public "updateAndSelectCollideEntity"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $AttackAnimation$Type, arg2: float, arg3: float, arg4: $Joint$Type, arg5: float): $List<($Entity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collider$Type = ($Collider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Collider_ = $Collider$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SkillCancelEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $SkillCancelEvent extends $PlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillContainer$Type)

public "getSkillContainer"(): $SkillContainer
get "skillContainer"(): $SkillContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillCancelEvent$Type = ($SkillCancelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillCancelEvent_ = $SkillCancelEvent$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap" {
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$TypeFlexibleHashMap$TypeKey, $TypeFlexibleHashMap$TypeKey$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap$TypeKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $TypeFlexibleHashMap<A extends $TypeFlexibleHashMap$TypeKey<(any)>> extends $HashMap<(A), (any)> {

constructor(arg0: boolean)

public "get"<T>(arg0: $TypeFlexibleHashMap$TypeKey$Type<(T)>): T
public "put"<T>(arg0: $TypeFlexibleHashMap$TypeKey$Type<(T)>, arg1: T): T
public "getOrDefault"<T>(arg0: $TypeFlexibleHashMap$TypeKey$Type<(T)>): T
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
public static "of"<K, V>(): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
public static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
public static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFlexibleHashMap$Type<A> = ($TypeFlexibleHashMap<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeFlexibleHashMap_<A> = $TypeFlexibleHashMap$Type<(A)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEventListener$EventType" {
import {$DodgeSuccessEvent, $DodgeSuccessEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DodgeSuccessEvent"
import {$DealtDamageEvent, $DealtDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$DealtDamageEvent"
import {$SkillExecuteEvent, $SkillExecuteEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillExecuteEvent"
import {$SkillCancelEvent, $SkillCancelEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillCancelEvent"
import {$SkillConsumeEvent, $SkillConsumeEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SkillConsumeEvent"
import {$MovementInputEvent, $MovementInputEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$MovementInputEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$ItemUseEndEvent, $ItemUseEndEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ItemUseEndEvent"
import {$FallEvent, $FallEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$FallEvent"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"
import {$AttackEndEvent, $AttackEndEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AttackEndEvent"
import {$BasicAttackEvent, $BasicAttackEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$BasicAttackEvent"
import {$ActionEvent, $ActionEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ActionEvent"
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$ComboCounterHandleEvent, $ComboCounterHandleEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ComboCounterHandleEvent"
import {$ProjectileHitEvent, $ProjectileHitEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ProjectileHitEvent"
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$ModifyBaseDamageEvent, $ModifyBaseDamageEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$ModifyBaseDamageEvent"
import {$TargetIndicatorCheckEvent, $TargetIndicatorCheckEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$TargetIndicatorCheckEvent"
import {$HurtEvent$Post, $HurtEvent$Post$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent$Post"
import {$HurtEvent$Pre, $HurtEvent$Pre$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent$Pre"
import {$SetTargetEvent, $SetTargetEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$SetTargetEvent"
import {$RightClickItemEvent, $RightClickItemEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$RightClickItemEvent"
import {$AttackSpeedModifyEvent, $AttackSpeedModifyEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$AttackSpeedModifyEvent"

export class $PlayerEventListener$EventType<T extends $PlayerEvent<(any)>> {
static readonly "ACTION_EVENT_CLIENT": $PlayerEventListener$EventType<($ActionEvent<($LocalPlayerPatch)>)>
static readonly "ACTION_EVENT_SERVER": $PlayerEventListener$EventType<($ActionEvent<($ServerPlayerPatch)>)>
static readonly "MODIFY_ATTACK_SPEED_EVENT": $PlayerEventListener$EventType<($AttackSpeedModifyEvent)>
static readonly "MODIFY_DAMAGE_EVENT": $PlayerEventListener$EventType<($ModifyBaseDamageEvent<($PlayerPatch<(any)>)>)>
static readonly "DEALT_DAMAGE_EVENT_PRE": $PlayerEventListener$EventType<($DealtDamageEvent)>
static readonly "DEALT_DAMAGE_EVENT_POST": $PlayerEventListener$EventType<($DealtDamageEvent)>
static readonly "HURT_EVENT_PRE": $PlayerEventListener$EventType<($HurtEvent$Pre)>
static readonly "HURT_EVENT_POST": $PlayerEventListener$EventType<($HurtEvent$Post)>
static readonly "ATTACK_ANIMATION_END_EVENT": $PlayerEventListener$EventType<($AttackEndEvent)>
static readonly "BASIC_ATTACK_EVENT": $PlayerEventListener$EventType<($BasicAttackEvent)>
static readonly "MOVEMENT_INPUT_EVENT": $PlayerEventListener$EventType<($MovementInputEvent)>
static readonly "CLIENT_ITEM_USE_EVENT": $PlayerEventListener$EventType<($RightClickItemEvent<($LocalPlayerPatch)>)>
static readonly "SERVER_ITEM_USE_EVENT": $PlayerEventListener$EventType<($RightClickItemEvent<($ServerPlayerPatch)>)>
static readonly "SERVER_ITEM_STOP_EVENT": $PlayerEventListener$EventType<($ItemUseEndEvent)>
static readonly "PROJECTILE_HIT_EVENT": $PlayerEventListener$EventType<($ProjectileHitEvent)>
static readonly "SKILL_EXECUTE_EVENT": $PlayerEventListener$EventType<($SkillExecuteEvent)>
static readonly "SKILL_CANCEL_EVENT": $PlayerEventListener$EventType<($SkillCancelEvent)>
static readonly "SKILL_CONSUME_EVENT": $PlayerEventListener$EventType<($SkillConsumeEvent)>
static readonly "COMBO_COUNTER_HANDLE_EVENT": $PlayerEventListener$EventType<($ComboCounterHandleEvent)>
static readonly "TARGET_INDICATOR_ALERT_CHECK_EVENT": $PlayerEventListener$EventType<($TargetIndicatorCheckEvent)>
static readonly "FALL_EVENT": $PlayerEventListener$EventType<($FallEvent)>
static readonly "SET_TARGET_EVENT": $PlayerEventListener$EventType<($SetTargetEvent)>
static readonly "DODGE_SUCCESS_EVENT": $PlayerEventListener$EventType<($DodgeSuccessEvent)>


public "shouldActive"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEventListener$EventType$Type<T> = ($PlayerEventListener$EventType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEventListener$EventType_<T> = $PlayerEventListener$EventType$Type<(T)>;
}}
declare module "packages/yesman/epicfight/skill/guard/$GuardSkill$BlockType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GuardSkill$BlockType extends $Enum<($GuardSkill$BlockType)> {
static readonly "GUARD_BREAK": $GuardSkill$BlockType
static readonly "GUARD": $GuardSkill$BlockType
static readonly "ADVANCED_GUARD": $GuardSkill$BlockType


public static "values"(): ($GuardSkill$BlockType)[]
public static "valueOf"(arg0: string): $GuardSkill$BlockType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuardSkill$BlockType$Type = (("advanced_guard") | ("guard") | ("guard_break")) | ($GuardSkill$BlockType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuardSkill$BlockType_ = $GuardSkill$BlockType$Type;
}}
declare module "packages/yesman/epicfight/skill/$SkillDataManager" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$SkillDataKey, $SkillDataKey$Type} from "packages/yesman/epicfight/skill/$SkillDataKey"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"

export class $SkillDataManager {

constructor(arg0: integer, arg1: $SkillContainer$Type)

public "keySet"(): $Set<($SkillDataKey<(any)>)>
public "setData"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: T): void
public "hasData"(arg0: $SkillDataKey$Type<(any)>): boolean
public "removeData"<T>(arg0: $SkillDataKey$Type<(T)>): void
public "syncData"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: $LocalPlayer$Type): void
public "syncData"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: $ServerPlayer$Type): void
public "registerData"<T>(arg0: $SkillDataKey$Type<(T)>): void
public "getDataValue"<T>(arg0: $SkillDataKey$Type<(T)>): T
public "setDataSync"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: T, arg2: $LocalPlayer$Type): void
public "setDataSync"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: T, arg2: $ServerPlayer$Type): void
public "setDataF"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: $Function$Type<(T), (T)>): void
public "clearData"(): void
/**
 * 
 * @deprecated
 */
public "setDataRawtype"(arg0: $SkillDataKey$Type<(any)>, arg1: any): void
public "setDataSyncF"<T>(arg0: $SkillDataKey$Type<(T)>, arg1: $Function$Type<(T), (T)>, arg2: $ServerPlayer$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillDataManager$Type = ($SkillDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillDataManager_ = $SkillDataManager$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$ProjectileHitEvent" {
import {$ProjectileImpactEvent, $ProjectileImpactEvent$Type} from "packages/net/minecraftforge/event/entity/$ProjectileImpactEvent"
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $ProjectileHitEvent extends $PlayerEvent<($ServerPlayerPatch)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $ProjectileImpactEvent$Type)

public "getForgeEvent"(): $ProjectileImpactEvent
get "forgeEvent"(): $ProjectileImpactEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileHitEvent$Type = ($ProjectileHitEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileHitEvent_ = $ProjectileHitEvent$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent$Post" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$HurtEvent, $HurtEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent"
import {$EpicFightDamageSource, $EpicFightDamageSource$Type} from "packages/yesman/epicfight/world/damagesource/$EpicFightDamageSource"

export class $HurtEvent$Post extends $HurtEvent<($EpicFightDamageSource)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $EpicFightDamageSource$Type, arg2: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtEvent$Post$Type = ($HurtEvent$Post);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HurtEvent$Post_ = $HurtEvent$Post$Type;
}}
declare module "packages/yesman/epicfight/world/capabilities/item/$Style" {
import {$ExtendableEnumManager, $ExtendableEnumManager$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnumManager"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export interface $Style extends $ExtendableEnum {

 "canUseOffhand"(): boolean
 "universalOrdinal"(): integer
}

export namespace $Style {
const ENUM_MANAGER: $ExtendableEnumManager<($Style)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Style$Type = ($Style);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Style_ = $Style$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$SkillExecuteEvent" {
import {$PlayerPatch, $PlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$PlayerPatch"
import {$SkillContainer, $SkillContainer$Type} from "packages/yesman/epicfight/skill/$SkillContainer"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"

export class $SkillExecuteEvent extends $PlayerEvent<($PlayerPatch<(any)>)> {

constructor(arg0: $PlayerPatch$Type<(any)>, arg1: $SkillContainer$Type)

public "isExecutable"(): boolean
public "isStateExecutable"(): boolean
public "setStateExecutable"(arg0: boolean): void
public "shouldReserverKey"(): boolean
public "getSkillContainer"(): $SkillContainer
public "isSkillExecutable"(): boolean
public "setSkillExecutable"(arg0: boolean): void
public "isResourceAvailable"(): boolean
public "setResourcePredicate"(arg0: boolean): void
get "executable"(): boolean
get "stateExecutable"(): boolean
set "stateExecutable"(value: boolean)
get "skillContainer"(): $SkillContainer
get "skillExecutable"(): boolean
set "skillExecutable"(value: boolean)
get "resourceAvailable"(): boolean
set "resourcePredicate"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillExecuteEvent$Type = ($SkillExecuteEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillExecuteEvent_ = $SkillExecuteEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Animator" {
import {$AnimationPlayer, $AnimationPlayer$Type} from "packages/yesman/epicfight/api/animation/$AnimationPlayer"
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$TypeFlexibleHashMap$TypeKey, $TypeFlexibleHashMap$TypeKey$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap$TypeKey"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $Animator {

constructor()

public "init"(): void
public "tick"(): void
public "getAnimationVariables"<T>(arg0: $TypeFlexibleHashMap$TypeKey$Type<(T)>): T
public "playDeathAnimation"(): void
public "getLivingAnimation"(arg0: $LivingMotion$Type, arg1: $StaticAnimation$Type): $StaticAnimation
public "reserveAnimation"(arg0: $StaticAnimation$Type): void
public "playAnimation"(arg0: integer, arg1: integer, arg2: float): void
public "playAnimation"(arg0: $StaticAnimation$Type, arg1: float): void
public "findFor"<T>(arg0: $Class$Type<(T)>): $Pair<($AnimationPlayer), (T)>
public "isReverse"(): boolean
public "putAnimationVariables"<T>(arg0: $TypeFlexibleHashMap$TypeKey$Type<(T)>, arg1: T): void
public "removeAnimationVariables"(arg0: $TypeFlexibleHashMap$TypeKey$Type<(any)>): void
public "addLivingAnimation"(arg0: $LivingMotion$Type, arg1: $StaticAnimation$Type): void
public "getPlayerFor"(arg0: $DynamicAnimation$Type): $AnimationPlayer
public "getEntityState"(): $EntityState
public "getLivingAnimationEntrySet"(): $Set<($Map$Entry<($LivingMotion), ($StaticAnimation)>)>
public "resetLivingAnimations"(): void
public "poseTick"(): void
public "playAnimationInstantly"(arg0: $StaticAnimation$Type): void
public "playAnimationInstantly"(arg0: integer, arg1: integer): void
get "reverse"(): boolean
get "entityState"(): $EntityState
get "livingAnimationEntrySet"(): $Set<($Map$Entry<($LivingMotion), ($StaticAnimation)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Animator$Type = ($Animator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Animator_ = $Animator$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$JointTransform" {
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$MatrixOperation, $MatrixOperation$Type} from "packages/yesman/epicfight/api/utils/math/$MatrixOperation"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export class $JointTransform {
static readonly "ANIMATION_TRANSFROM": string
static readonly "JOINT_LOCAL_TRANSFORM": string
static readonly "PARENT": string
static readonly "RESULT1": string
static readonly "RESULT2": string

constructor(arg0: $Vec3f$Type, arg1: $Quaternionf$Type, arg2: $Vec3f$Type)

public "parent"(arg0: $JointTransform$Type, arg1: $MatrixOperation$Type): void
public "toString"(): string
public "scale"(): $Vec3f
public static "empty"(): $JointTransform
public "copy"(): $JointTransform
public "copyFrom"(arg0: $JointTransform$Type): $JointTransform
public static "interpolate"(arg0: $JointTransform$Type, arg1: $JointTransform$Type, arg2: float): $JointTransform
public "translation"(): $Vec3f
public "frontResult"(arg0: $JointTransform$Type, arg1: $MatrixOperation$Type): void
public static "fromMatrixNoScale"(arg0: $OpenMatrix4f$Type): $JointTransform
public "overwriteRotation"(arg0: $JointTransform$Type): void
public static "translationRotation"(arg0: $Vec3f$Type, arg1: $Quaternionf$Type): $JointTransform
public "getAnimationBindedMatrix"(arg0: $Joint$Type, arg1: $OpenMatrix4f$Type): $OpenMatrix4f
public static "getRotation"(arg0: $Quaternionf$Type): $JointTransform
public static "getTranslation"(arg0: $Vec3f$Type): $JointTransform
public static "getScale"(arg0: $Vec3f$Type): $JointTransform
public "rotation"(): $Quaternionf
public "jointLocal"(arg0: $JointTransform$Type, arg1: $MatrixOperation$Type): void
public "toMatrix"(): $OpenMatrix4f
public static "fromMatrix"(arg0: $OpenMatrix4f$Type): $JointTransform
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JointTransform$Type = ($JointTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JointTransform_ = $JointTransform$Type;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent$Pre" {
import {$ServerPlayerPatch, $ServerPlayerPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/player/$ServerPlayerPatch"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$HurtEvent, $HurtEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$HurtEvent"

export class $HurtEvent$Pre extends $HurtEvent<($DamageSource)> {

constructor(arg0: $ServerPlayerPatch$Type, arg1: $DamageSource$Type, arg2: float)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HurtEvent$Pre$Type = ($HurtEvent$Pre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HurtEvent$Pre_ = $HurtEvent$Pre$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$PlaybackTimeModifier" {
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationProperty$PlaybackTimeModifier {

 "modify"(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float, arg3: float): float

(arg0: $DynamicAnimation$Type, arg1: $LivingEntityPatch$Type<(any)>, arg2: float, arg3: float): float
}

export namespace $AnimationProperty$PlaybackTimeModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$PlaybackTimeModifier$Type = ($AnimationProperty$PlaybackTimeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$PlaybackTimeModifier_ = $AnimationProperty$PlaybackTimeModifier$Type;
}}
declare module "packages/yesman/epicfight/api/animation/$Pose" {
import {$Predicate, $Predicate$Type} from "packages/com/google/common/base/$Predicate"
import {$JointTransform, $JointTransform$Type} from "packages/yesman/epicfight/api/animation/$JointTransform"
import {$List, $List$Type} from "packages/java/util/$List"
import {$JointMask, $JointMask$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Pose {

constructor()

public "toString"(): string
public "getOrDefaultTransform"(arg0: string): $JointTransform
public static "interpolatePose"(arg0: $Pose$Type, arg1: $Pose$Type, arg2: float): $Pose
public "putJointData"(arg0: $Pose$Type): void
public "putJointData"(arg0: string, arg1: $JointTransform$Type): void
public "getJointTransformData"(): $Map<(string), ($JointTransform)>
public "removeJointIf"(arg0: $List$Type<($JointMask$Type)>): void
public "removeJointIf"(arg0: $Predicate$Type<(any)>): void
get "jointTransformData"(): $Map<(string), ($JointTransform)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pose$Type = ($Pose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pose_ = $Pose$Type;
}}
declare module "packages/yesman/epicfight/api/animation/types/$LinkAnimation" {
import {$EntityState, $EntityState$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState"
import {$TypeFlexibleHashMap, $TypeFlexibleHashMap$Type} from "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap"
import {$DynamicAnimation, $DynamicAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$DynamicAnimation"
import {$Layer$Priority, $Layer$Priority$Type} from "packages/yesman/epicfight/api/client/animation/$Layer$Priority"
import {$EntityState$StateFactor, $EntityState$StateFactor$Type} from "packages/yesman/epicfight/api/animation/types/$EntityState$StateFactor"
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$JointMask$BindModifier, $JointMask$BindModifier$Type} from "packages/yesman/epicfight/api/client/animation/property/$JointMask$BindModifier"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $LinkAnimation extends $DynamicAnimation {

constructor()

public "toString"(): string
public "end"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $DynamicAnimation$Type, arg2: boolean): void
public "getState"<T>(arg0: $EntityState$StateFactor$Type<(T)>, arg1: $LivingEntityPatch$Type<(any)>, arg2: float): T
public "getState"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $EntityState
public "tick"(arg0: $LivingEntityPatch$Type<(any)>): void
public "copyTo"(arg0: $LinkAnimation$Type): void
public "getStatesMap"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float): $TypeFlexibleHashMap<($EntityState$StateFactor<(any)>)>
public "getPlaySpeed"(arg0: $LivingEntityPatch$Type<(any)>): float
public "isJointEnabled"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): boolean
public "getPoseByTime"(arg0: $LivingEntityPatch$Type<(any)>, arg1: float, arg2: float): $Pose
public "setNextAnimation"(arg0: $DynamicAnimation$Type): void
public "modifyPose"(arg0: $DynamicAnimation$Type, arg1: $Pose$Type, arg2: $LivingEntityPatch$Type<(any)>, arg3: float, arg4: float): void
public "isMainFrameAnimation"(): boolean
public "getBindModifier"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $Layer$Priority$Type, arg2: string): $JointMask$BindModifier
public "getRealAnimation"(): $DynamicAnimation
public "isReboundAnimation"(): boolean
public "getNextAnimation"(): $DynamicAnimation
set "nextAnimation"(value: $DynamicAnimation$Type)
get "mainFrameAnimation"(): boolean
get "realAnimation"(): $DynamicAnimation
get "reboundAnimation"(): boolean
get "nextAnimation"(): $DynamicAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkAnimation$Type = ($LinkAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LinkAnimation_ = $LinkAnimation$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$ExtendableEnumManager" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ExtendableEnum, $ExtendableEnum$Type} from "packages/yesman/epicfight/api/utils/$ExtendableEnum"

export class $ExtendableEnumManager<T extends $ExtendableEnum> {

constructor(arg0: string)

public "get"(arg0: string): T
public "get"(arg0: integer): T
public "assign"(arg0: T): integer
public "universalValues"(): $Collection<(T)>
public "toTranslated"(arg0: $ExtendableEnum$Type): string
public "registerEnumCls"(arg0: string, arg1: $Class$Type<(any)>): void
public "loadEnum"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendableEnumManager$Type<T> = ($ExtendableEnumManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendableEnumManager_<T> = $ExtendableEnumManager$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/item/$SkillBookItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Skill, $Skill$Type} from "packages/yesman/epicfight/skill/$Skill"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SkillBookItem extends $Item {
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
public static "setContainingSkill"(arg0: string, arg1: $ItemStack$Type): void
public static "setContainingSkill"(arg0: $Skill$Type, arg1: $ItemStack$Type): void
public static "getContainSkill"(arg0: $ItemStack$Type): $Skill
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isFoil"(arg0: $ItemStack$Type): boolean
public "fillItemCategory"(arg0: $Consumer$Type<($ItemStack$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkillBookItem$Type = ($SkillBookItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SkillBookItem_ = $SkillBookItem$Type;
}}
declare module "packages/yesman/epicfight/world/item/$TachiItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$WeaponItem, $WeaponItem$Type} from "packages/yesman/epicfight/world/item/$WeaponItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TachiItem extends $WeaponItem {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
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

constructor(arg0: $Item$Properties$Type, arg1: $Tier$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TachiItem$Type = ($TachiItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TachiItem_ = $TachiItem$Type;
}}
declare module "packages/yesman/epicfight/api/utils/$TypeFlexibleHashMap$TypeKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TypeFlexibleHashMap$TypeKey<T> {

 "defaultValue"(): T

(): T
}

export namespace $TypeFlexibleHashMap$TypeKey {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypeFlexibleHashMap$TypeKey$Type<T> = ($TypeFlexibleHashMap$TypeKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypeFlexibleHashMap$TypeKey_<T> = $TypeFlexibleHashMap$TypeKey$Type<(T)>;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$ActionAnimationProperty" {
import {$TimePairList, $TimePairList$Type} from "packages/yesman/epicfight/api/utils/$TimePairList"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$MoveCoordFunctions$MoveCoordSetter, $MoveCoordFunctions$MoveCoordSetter$Type} from "packages/yesman/epicfight/api/animation/property/$MoveCoordFunctions$MoveCoordSetter"
import {$MoveCoordFunctions$MoveCoordGetter, $MoveCoordFunctions$MoveCoordGetter$Type} from "packages/yesman/epicfight/api/animation/property/$MoveCoordFunctions$MoveCoordGetter"

export class $AnimationProperty$ActionAnimationProperty<T> extends $AnimationProperty<(T)> {
static readonly "STOP_MOVEMENT": $AnimationProperty$ActionAnimationProperty<(boolean)>
static readonly "MOVE_VERTICAL": $AnimationProperty$ActionAnimationProperty<(boolean)>
static readonly "NO_GRAVITY_TIME": $AnimationProperty$ActionAnimationProperty<($TimePairList)>
static readonly "COORD": $AnimationProperty$ActionAnimationProperty<($TransformSheet)>
static readonly "MOVE_ON_LINK": $AnimationProperty$ActionAnimationProperty<(boolean)>
static readonly "MOVE_TIME": $AnimationProperty$ActionAnimationProperty<($TimePairList)>
static readonly "COORD_SET_BEGIN": $AnimationProperty$ActionAnimationProperty<($MoveCoordFunctions$MoveCoordSetter)>
static readonly "COORD_SET_TICK": $AnimationProperty$ActionAnimationProperty<($MoveCoordFunctions$MoveCoordSetter)>
static readonly "COORD_GET": $AnimationProperty$ActionAnimationProperty<($MoveCoordFunctions$MoveCoordGetter)>
static readonly "AFFECT_SPEED": $AnimationProperty$ActionAnimationProperty<(boolean)>
static readonly "CANCELABLE_MOVE": $AnimationProperty$ActionAnimationProperty<(boolean)>
static readonly "IS_DEATH_ANIMATION": $AnimationProperty$ActionAnimationProperty<(boolean)>
static readonly "COORD_UPDATE_TIME": $AnimationProperty$ActionAnimationProperty<($TimePairList)>
static readonly "RESET_PLAYER_COMBO_COUNTER": $AnimationProperty$ActionAnimationProperty<(boolean)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$ActionAnimationProperty$Type<T> = ($AnimationProperty$ActionAnimationProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$ActionAnimationProperty_<T> = $AnimationProperty$ActionAnimationProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/world/entity/eventlistener/$MovementInputEvent" {
import {$LocalPlayerPatch, $LocalPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/yesman/epicfight/world/entity/eventlistener/$PlayerEvent"
import {$Input, $Input$Type} from "packages/net/minecraft/client/player/$Input"

export class $MovementInputEvent extends $PlayerEvent<($LocalPlayerPatch)> {

constructor(arg0: $LocalPlayerPatch$Type, arg1: $Input$Type)

public "getMovementInput"(): $Input
get "movementInput"(): $Input
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementInputEvent$Type = ($MovementInputEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovementInputEvent_ = $MovementInputEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationProperty$AttackPhaseProperty" {
import {$StunType, $StunType$Type} from "packages/yesman/epicfight/world/damagesource/$StunType"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$HitParticleType, $HitParticleType$Type} from "packages/yesman/epicfight/particle/$HitParticleType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$ExtraDamageInstance, $ExtraDamageInstance$Type} from "packages/yesman/epicfight/world/damagesource/$ExtraDamageInstance"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DamageType, $DamageType$Type} from "packages/net/minecraft/world/damagesource/$DamageType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$HitEntityList$Priority, $HitEntityList$Priority$Type} from "packages/yesman/epicfight/api/utils/$HitEntityList$Priority"
import {$AnimationProperty, $AnimationProperty$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationProperty"
import {$ValueModifier, $ValueModifier$Type} from "packages/yesman/epicfight/api/utils/math/$ValueModifier"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationProperty$AttackPhaseProperty<T> extends $AnimationProperty<(T)> {
static readonly "MAX_STRIKES_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "DAMAGE_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "EXTRA_DAMAGE": $AnimationProperty$AttackPhaseProperty<($Set<($ExtraDamageInstance)>)>
static readonly "ARMOR_NEGATION_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "IMPACT_MODIFIER": $AnimationProperty$AttackPhaseProperty<($ValueModifier)>
static readonly "STUN_TYPE": $AnimationProperty$AttackPhaseProperty<($StunType)>
static readonly "SWING_SOUND": $AnimationProperty$AttackPhaseProperty<($SoundEvent)>
static readonly "HIT_SOUND": $AnimationProperty$AttackPhaseProperty<($SoundEvent)>
static readonly "PARTICLE": $AnimationProperty$AttackPhaseProperty<($RegistryObject<($HitParticleType)>)>
static readonly "HIT_PRIORITY": $AnimationProperty$AttackPhaseProperty<($HitEntityList$Priority)>
static readonly "SOURCE_TAG": $AnimationProperty$AttackPhaseProperty<($Set<($TagKey<($DamageType)>)>)>
static readonly "SOURCE_LOCATION_PROVIDER": $AnimationProperty$AttackPhaseProperty<($Function<($LivingEntityPatch<(any)>), ($Vec3)>)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationProperty$AttackPhaseProperty$Type<T> = ($AnimationProperty$AttackPhaseProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationProperty$AttackPhaseProperty_<T> = $AnimationProperty$AttackPhaseProperty$Type<(T)>;
}}
declare module "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$LocalPlayerPatch" {
import {$LivingMotion, $LivingMotion$Type} from "packages/yesman/epicfight/api/animation/$LivingMotion"
import {$ClientPlayerNetworkEvent$Clone, $ClientPlayerNetworkEvent$Clone$Type} from "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent$Clone"
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$LivingEntityPatch$AnimationPacketProvider, $LivingEntityPatch$AnimationPacketProvider$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch$AnimationPacketProvider"
import {$LivingDeathEvent, $LivingDeathEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent"
import {$CapabilityItem, $CapabilityItem$Type} from "packages/yesman/epicfight/world/capabilities/item/$CapabilityItem"
import {$ActionAnimation, $ActionAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$ActionAnimation"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntityJoinLevelEvent, $EntityJoinLevelEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent"
import {$AbstractClientPlayerPatch, $AbstractClientPlayerPatch$Type} from "packages/yesman/epicfight/client/world/capabilites/entitypatch/player/$AbstractClientPlayerPatch"
import {$LivingEvent$LivingTickEvent, $LivingEvent$LivingTickEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent"
import {$AttackResult, $AttackResult$Type} from "packages/yesman/epicfight/api/utils/$AttackResult"

export class $LocalPlayerPatch extends $AbstractClientPlayerPatch<($LocalPlayer)> {
 "prevBodyYaw": float
static readonly "STAMINA": $EntityDataAccessor<(float)>
static readonly "STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "MAX_STUN_SHIELD": $EntityDataAccessor<(float)>
static readonly "EXECUTION_RESISTANCE": $EntityDataAccessor<(integer)>
static readonly "AIRBORNE": $EntityDataAccessor<(boolean)>
 "currentLivingMotion": $LivingMotion
 "currentCompositeMotion": $LivingMotion

constructor()

public "getTarget"(): $LivingEntity
public "tick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "shouldMoveOnCurrentSide"(arg0: $ActionAnimation$Type): boolean
public "openSkillBook"(arg0: $ItemStack$Type, arg1: $InteractionHand$Type): void
public "onJoinWorld"(arg0: $LocalPlayer$Type, arg1: $EntityJoinLevelEvent$Type): void
public "onConstructed"(arg0: $LocalPlayer$Type): void
public "updateMotion"(arg0: boolean): void
public "getCameraXRot"(): float
public "tryHurt"(arg0: $DamageSource$Type, arg1: float): $AttackResult
public "getCameraYRot"(): float
public "correctRotation"(): void
public "updateHeldItem"(arg0: $CapabilityItem$Type, arg1: $CapabilityItem$Type): void
public "clientTick"(arg0: $LivingEvent$LivingTickEvent$Type): void
public "playAnimationSynchronized"(arg0: $StaticAnimation$Type, arg1: float, arg2: $LivingEntityPatch$AnimationPacketProvider$Type): void
public "onRespawnLocalPlayer"(arg0: $ClientPlayerNetworkEvent$Clone$Type): void
public "playAnimationClientPreemptive"(arg0: $StaticAnimation$Type, arg1: float): void
public "getPrevChargingAmount"(): integer
public "isFirstPerson"(): boolean
public "shouldBlockMoving"(): boolean
public "changeModelYRot"(arg0: float): void
public "consumeStamina"(arg0: float): boolean
public "toMiningMode"(arg0: boolean): void
public "toBattleMode"(arg0: boolean): void
public "setLockOn"(arg0: boolean): void
public "getPrevStamina"(): float
public "getLerpedLockOnY"(arg0: double): float
public "getLerpedLockOnX"(arg0: double): float
public "toggleLockOn"(): void
public "onDeath"(arg0: $LivingDeathEvent$Type): void
public "isTargetLockedOn"(): boolean
get "target"(): $LivingEntity
get "cameraXRot"(): float
get "cameraYRot"(): float
get "prevChargingAmount"(): integer
get "firstPerson"(): boolean
set "lockOn"(value: boolean)
get "prevStamina"(): float
get "targetLockedOn"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalPlayerPatch$Type = ($LocalPlayerPatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocalPlayerPatch_ = $LocalPlayerPatch$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$AnimationEvent$Side, $AnimationEvent$Side$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$Side"
import {$AnimationEvent$AnimationEventConsumer, $AnimationEvent$AnimationEventConsumer$Type} from "packages/yesman/epicfight/api/animation/property/$AnimationEvent$AnimationEventConsumer"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export class $AnimationEvent {


public "params"(...arg0: (any)[]): $AnimationEvent
public static "create"(arg0: $AnimationEvent$AnimationEventConsumer$Type, arg1: $AnimationEvent$Side$Type): $AnimationEvent
public "executeIfRightSide"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $StaticAnimation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$Type = ($AnimationEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent_ = $AnimationEvent$Type;
}}
declare module "packages/yesman/epicfight/api/animation/property/$AnimationEvent$AnimationEventConsumer" {
import {$StaticAnimation, $StaticAnimation$Type} from "packages/yesman/epicfight/api/animation/types/$StaticAnimation"
import {$LivingEntityPatch, $LivingEntityPatch$Type} from "packages/yesman/epicfight/world/capabilities/entitypatch/$LivingEntityPatch"

export interface $AnimationEvent$AnimationEventConsumer {

 "fire"(arg0: $LivingEntityPatch$Type<(any)>, arg1: $StaticAnimation$Type, ...arg2: (any)[]): void

(arg0: $LivingEntityPatch$Type<(any)>, arg1: $StaticAnimation$Type, ...arg2: (any)[]): void
}

export namespace $AnimationEvent$AnimationEventConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationEvent$AnimationEventConsumer$Type = ($AnimationEvent$AnimationEventConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationEvent$AnimationEventConsumer_ = $AnimationEvent$AnimationEventConsumer$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$Vec4f" {
import {$Vec3f, $Vec3f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec3f"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"

export class $Vec4f extends $Vec3f {
 "w": float
static readonly "X_AXIS": $Vec3f
static readonly "Y_AXIS": $Vec3f
static readonly "Z_AXIS": $Vec3f
 "z": float
 "x": float
 "y": float

constructor(arg0: $Vec3f$Type)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)
constructor()

public static "add"(arg0: $Vec4f$Type, arg1: $Vec4f$Type, arg2: $Vec4f$Type): $Vec4f
public "add"(arg0: float, arg1: float, arg2: float, arg3: float): $Vec4f
public "toString"(): string
public "transform"(arg0: $OpenMatrix4f$Type): $Vec4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec4f$Type = ($Vec4f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec4f_ = $Vec4f$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$Vec2f" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vec2f {
 "x": float
 "y": float

constructor()
constructor(arg0: float, arg1: float)

public "toString"(): string
public "scale"(arg0: float): $Vec2f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec2f$Type = ($Vec2f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec2f_ = $Vec2f$Type;
}}
declare module "packages/yesman/epicfight/api/utils/math/$Vec3f" {
import {$Vec2f, $Vec2f$Type} from "packages/yesman/epicfight/api/utils/math/$Vec2f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export class $Vec3f extends $Vec2f {
static readonly "X_AXIS": $Vec3f
static readonly "Y_AXIS": $Vec3f
static readonly "Z_AXIS": $Vec3f
 "z": float
 "x": float
 "y": float

constructor()
constructor(arg0: float, arg1: float, arg2: float)

public "add"(arg0: $Vec3f$Type): $Vec3f
public "add"(arg0: float, arg1: float, arg2: float): $Vec3f
public static "add"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public "length"(): float
public "toString"(): string
public "scale"(arg0: float): $Vec3f
public static "scale"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: float): $Vec3f
public static "dot"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): float
public "set"(arg0: $Vec3f$Type): void
public "set"(arg0: float, arg1: float, arg2: float): void
public "copy"(): $Vec3f
public "multiply"(arg0: float, arg1: float, arg2: float): $Vec3f
public static "multiply"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: float, arg3: float, arg4: float): $Vec3f
public "multiply"(arg0: $Vec3f$Type): $Vec3f
public static "rotate"(arg0: float, arg1: $Vec3f$Type, arg2: $Vec3f$Type, arg3: $Vec3f$Type): $Vec3f
public "rotate"(arg0: float, arg1: $Vec3f$Type): void
public "sub"(arg0: $Vec3f$Type): $Vec3f
public static "sub"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public "distanceSqr"(arg0: $Vec3f$Type): float
public "toMojangVector"(): $Vector3f
public "lengthSqr"(): float
public "toDoubleVector"(): $Vec3
public static "getRotatorBetween"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): $Quaternionf
public static "cross"(arg0: $Vec3f$Type, arg1: $Vec3f$Type, arg2: $Vec3f$Type): $Vec3f
public "normalise"(): $Vec3f
public static "fromMojangVector"(arg0: $Vector3f$Type): $Vec3f
public static "fromDoubleVector"(arg0: $Vec3$Type): $Vec3f
public static "getAngleBetween"(arg0: $Vec3f$Type, arg1: $Vec3f$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec3f$Type = ($Vec3f);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec3f_ = $Vec3f$Type;
}}
declare module "packages/yesman/epicfight/api/model/$Armature" {
import {$Pose, $Pose$Type} from "packages/yesman/epicfight/api/animation/$Pose"
import {$Joint, $Joint$Type} from "packages/yesman/epicfight/api/animation/$Joint"
import {$TransformSheet, $TransformSheet$Type} from "packages/yesman/epicfight/api/animation/$TransformSheet"
import {$OpenMatrix4f, $OpenMatrix4f$Type} from "packages/yesman/epicfight/api/utils/math/$OpenMatrix4f"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Armature {
readonly "rootJoint": $Joint

constructor(arg0: integer, arg1: $Joint$Type, arg2: $Map$Type<(string), ($Joint$Type)>)

public "deepCopy"(): $Armature
public "getActionAnimationCoord"(): $TransformSheet
public "initializeTransform"(): void
public "getCurrentPose"(): $Pose
public "getPrevPose"(): $Pose
public "getPose"(arg0: float): $Pose
public "setPose"(arg0: $Pose$Type): void
public "searchJointById"(arg0: integer): $Joint
public "getJointNumber"(): integer
public "getRootJoint"(): $Joint
public "searchPathIndex"(arg0: string): integer
public "getBindedTransformByJointIndex"(arg0: $Pose$Type, arg1: integer): $OpenMatrix4f
public "getPoseAsTransformMatrix"(arg0: $Pose$Type): ($OpenMatrix4f)[]
public "getBindedTransformFor"(arg0: $Pose$Type, arg1: $Joint$Type): $OpenMatrix4f
public "getAllPoseTransform"(arg0: float): ($OpenMatrix4f)[]
public "getBindedTransformForCurrentPose"(arg0: $Joint$Type): $OpenMatrix4f
public "searchJointByName"(arg0: string): $Joint
get "actionAnimationCoord"(): $TransformSheet
get "currentPose"(): $Pose
get "prevPose"(): $Pose
set "pose"(value: $Pose$Type)
get "jointNumber"(): integer
get "rootJoint"(): $Joint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Armature$Type = ($Armature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Armature_ = $Armature$Type;
}}
