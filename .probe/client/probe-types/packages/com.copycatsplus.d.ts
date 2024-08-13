declare module "packages/com/copycatsplus/copycats/content/copycat/bytes/$CopycatByteBlock$Byte" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"

export class $CopycatByteBlock$Byte extends $Record {

constructor(x: boolean, y: boolean, z: boolean)

public "get"(axis: $Direction$Axis$Type): boolean
public "equals"(obj: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "x"(): boolean
public "set"(axis: $Direction$Axis$Type, value: boolean): $CopycatByteBlock$Byte
public "copy"(): $CopycatByteBlock$Byte
public "z"(): boolean
public "y"(): boolean
public "rotate"(rotation: $Rotation$Type): $CopycatByteBlock$Byte
public "relative"(direction: $Direction$Type): $CopycatByteBlock$Byte
public "mirror"(mirror: $Mirror$Type): $CopycatByteBlock$Byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$Byte$Type = ($CopycatByteBlock$Byte);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatByteBlock$Byte_ = $CopycatByteBlock$Byte$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fluid_pipe/$CopycatGlassFluidPipeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$GlassFluidPipeBlock, $GlassFluidPipeBlock$Type} from "packages/com/simibubi/create/content/fluids/pipes/$GlassFluidPipeBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatGlassFluidPipeBlock extends $GlassFluidPipeBlock implements $ICopycatBlock {
static readonly "ALT": $BooleanProperty
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

public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "getCloneItemStack"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type): $ItemStack
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "toRegularPipe"(world: $LevelAccessor$Type, pos: $BlockPos$Type, state: $BlockState$Type): $BlockState
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAxisOf"(arg0: $BlockState$Type): $Direction$Axis
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGlassFluidPipeBlock$Type = ($CopycatGlassFluidPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatGlassFluidPipeBlock_ = $CopycatGlassFluidPipeBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/layer/$CopycatLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatLayerBlock extends $CCWaterloggedCopycatBlock implements $ISpecialBlockItemRequirement, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLayerBlock$Type = ($CopycatLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatLayerBlock_ = $CopycatLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/pressure_plate/$CopycatPressurePlateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$PressurePlateBlock$Sensitivity, $PressurePlateBlock$Sensitivity$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock$Sensitivity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatPressurePlateBlock extends $PressurePlateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "POWERED": $BooleanProperty
static readonly "PRESSED_AABB": $VoxelShape
static readonly "AABB": $VoxelShape
static readonly "TOUCH_AABB": $AABB
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

constructor(sensitivity: $PressurePlateBlock$Sensitivity$Type, properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatPressurePlateBlock$Type = ($CopycatPressurePlateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatPressurePlateBlock_ = $CopycatPressurePlateBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/ladder/$CopycatLadderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LadderBlock, $LadderBlock$Type} from "packages/net/minecraft/world/level/block/$LadderBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $CopycatLadderBlock extends $LadderBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static "RAILS": $BooleanProperty
static "STEPS": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_OFFSET": float
static readonly "EAST_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "SOUTH_AABB": $VoxelShape
static readonly "NORTH_AABB": $VoxelShape
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$Type, blockPos: $BlockPos$Type, blockPos1: $BlockPos$Type, blockState: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLadderBlock$Type = ($CopycatLadderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatLadderBlock_ = $CopycatLadderBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/pressure_plate/$CopycatWeightedPressurePlate" {
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$WeightedPressurePlateBlock, $WeightedPressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$WeightedPressurePlateBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatWeightedPressurePlate extends $WeightedPressurePlateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "POWER": $IntegerProperty
static readonly "PRESSED_AABB": $VoxelShape
static readonly "AABB": $VoxelShape
static readonly "TOUCH_AABB": $AABB
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

constructor(maxWeight: integer, pProperties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWeightedPressurePlate$Type = ($CopycatWeightedPressurePlate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatWeightedPressurePlate_ = $CopycatWeightedPressurePlate$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/board/$CopycatCatwalkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatCatwalkItem extends $BlockItem {
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

constructor(builder: $Item$Properties$Type)

public "getDescriptionId"(): string
public "registerBlocks"(map: $Map$Type<($Block$Type), ($Item$Type)>, self: $Item$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCatwalkItem$Type = ($CopycatCatwalkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCatwalkItem_ = $CopycatCatwalkItem$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slab/$CopycatSlabBlock$FaceShape" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"

export class $CopycatSlabBlock$FaceShape extends $Enum<($CopycatSlabBlock$FaceShape)> {
static readonly "FULL": $CopycatSlabBlock$FaceShape
static readonly "TOP": $CopycatSlabBlock$FaceShape
static readonly "BOTTOM": $CopycatSlabBlock$FaceShape
static readonly "NONE": $CopycatSlabBlock$FaceShape


public static "values"(): ($CopycatSlabBlock$FaceShape)[]
public static "valueOf"(name: string): $CopycatSlabBlock$FaceShape
public "hasContact"(): boolean
public static "canConnect"(shape1: $CopycatSlabBlock$FaceShape$Type, shape2: $CopycatSlabBlock$FaceShape$Type): boolean
public static "forSlabSide"(type: $SlabType$Type): $CopycatSlabBlock$FaceShape
public static "fullOrNone"(value: boolean): $CopycatSlabBlock$FaceShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$FaceShape$Type = (("top") | ("bottom") | ("none") | ("full")) | ($CopycatSlabBlock$FaceShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlabBlock$FaceShape_ = $CopycatSlabBlock$FaceShape$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/ghost_block/$CopycatGhostBlock" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
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
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$CCCopycatBlock, $CCCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatGhostBlock extends $CCCopycatBlock implements $IStateType {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$Type, blockPos: $BlockPos$Type, blockPos1: $BlockPos$Type, blockState: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGhostBlock$Type = ($CopycatGhostBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatGhostBlock_ = $CopycatGhostBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_slice/$CopycatVerticalSliceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalSliceBlock extends $CCWaterloggedCopycatBlock implements $ISpecialBlockItemRequirement, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSliceBlock$Type = ($CopycatVerticalSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalSliceBlock_ = $CopycatVerticalSliceBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/block/$CopycatBlockBlock" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
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
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$CCCopycatBlock, $CCCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatBlockBlock extends $CCCopycatBlock implements $IStateType {
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

public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBlockBlock$Type = ($CopycatBlockBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBlockBlock_ = $CopycatBlockBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MaterialItemStorage, $MaterialItemStorage$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export class $MultiStateCopycatBlockEntity extends $SmartBlockEntity implements $IMultiStateCopycatBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "getMaterialItemStorage"(): $MaterialItemStorage
public "redraw"(): void
public "getModelData"(): $ModelData
public "migrateData"(copycatBlockEntity: $ICopycatBlockEntity$Type): void
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "writeSafe"(tag: $CompoundTag$Type): void
public "setMaterialItemStorageInternal"(storage: $MaterialItemStorage$Type): void
public "transform"(transform: $StructureTransform$Type): void
public "init"(): void
public static "write"(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public static "read"(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public "getBlock"(): $IMultiStateCopycatBlock
public "setMaterial"(property: string, blockState: $BlockState$Type): void
public "getMaterial"(): $BlockState
public static "writeSafe"(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "setMaterialInternal"(material: $BlockState$Type): void
public "setConsumedItem"(property: string, itemStack: $ItemStack$Type): void
public "getConsumedItem"(): $ItemStack
public "cycleMaterial"(property: string): boolean
public "hasCustomMaterial"(): boolean
public "isCTEnabled"(): boolean
public "setEnableCT"(property: string, value: boolean): void
public static "write"(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public "setMaterial"(blockState: $BlockState$Type): void
public "setLevel"(arg0: $Level$Type): void
public "getLevel"(): $Level
public "setBlockState"(arg0: $BlockState$Type): void
public "getBlockPos"(): $BlockPos
public "notifyUpdate"(): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public static "writeSafe"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
public "getBlockState"(): $BlockState
public "setConsumedItem"(stack: $ItemStack$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "materialItemStorage"(): $MaterialItemStorage
get "modelData"(): $ModelData
set "materialItemStorageInternal"(value: $MaterialItemStorage$Type)
get "block"(): $IMultiStateCopycatBlock
get "material"(): $BlockState
set "consumedItemInternal"(value: $ItemStack$Type)
set "cTEnabledInternal"(value: boolean)
set "materialInternal"(value: $BlockState$Type)
get "consumedItem"(): $ItemStack
get "cTEnabled"(): boolean
set "material"(value: $BlockState$Type)
set "level"(value: $Level$Type)
get "level"(): $Level
set "blockState"(value: $BlockState$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "consumedItem"(value: $ItemStack$Type)
set "cTEnabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlockEntity$Type = ($MultiStateCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiStateCopycatBlockEntity_ = $MultiStateCopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/board/$CopycatBoxItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatBoxItem extends $BlockItem {
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

constructor(builder: $Item$Properties$Type)

public "getDescriptionId"(): string
public "registerBlocks"(map: $Map$Type<($Block$Type), ($Item$Type)>, self: $Item$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoxItem$Type = ($CopycatBoxItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBoxItem_ = $CopycatBoxItem$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/half_panel/$CopycatHalfPanelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatHalfPanelBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "OFFSET": $DirectionProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "getOffsetFacing"(facing: $Direction$Type, offset: $Direction$Type): $Direction
public static "getOffsetAxis"(facing: $Direction$Type, offset: $Direction$Type): $Direction$Axis
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfPanelBlock$Type = ($CopycatHalfPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHalfPanelBlock_ = $CopycatHalfPanelBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slope/$CopycatSlopeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeBlock$Type = ($CopycatSlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlopeBlock_ = $CopycatSlopeBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ICustomCTBlocking {

 "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
 "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
}

export namespace $ICustomCTBlocking {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCTBlocking$Type = ($ICustomCTBlocking);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomCTBlocking_ = $ICustomCTBlocking$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$WrappedCopycatBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$CopycatBlock, $CopycatBlock$Type} from "packages/com/simibubi/create/content/decoration/copycat/$CopycatBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $WrappedCopycatBlock extends $CopycatBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getWrapped"(): $ICopycatBlock
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "setWrapped"(wrapped: $ICopycatBlock$Type): void
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
get "wrapped"(): $ICopycatBlock
set "wrapped"(value: $ICopycatBlock$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedCopycatBlock$Type = ($WrappedCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedCopycatBlock_ = $WrappedCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_stairs/$CopycatVerticalStairBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$CCBlockStateProperties$VerticalStairShape, $CCBlockStateProperties$VerticalStairShape$Type} from "packages/com/copycatsplus/copycats/$CCBlockStateProperties$VerticalStairShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CopycatStairsBlock$FaceShape, $CopycatStairsBlock$FaceShape$Type} from "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock$FaceShape"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$CCBlockStateProperties$Side, $CCBlockStateProperties$Side$Type} from "packages/com/copycatsplus/copycats/$CCBlockStateProperties$Side"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalStairBlock extends $CCWaterloggedCopycatBlock implements $ICustomCTBlocking, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "SIDE": $EnumProperty<($CCBlockStateProperties$Side)>
static readonly "SHAPE": $EnumProperty<($CCBlockStateProperties$VerticalStairShape)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "useShapeForLightOcclusion"(pState: $BlockState$Type): boolean
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "isStairs"(state: $BlockState$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public static "getFaceShape"(state: $BlockState$Type, face: $Direction$Type): $CopycatStairsBlock$FaceShape
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStairBlock$Type = ($CopycatVerticalStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalStairBlock_ = $CopycatVerticalStairBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CopycatStairsBlock$FaceShape, $CopycatStairsBlock$FaceShape$Type} from "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock$FaceShape"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $CopycatStairsBlock extends $StairBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $ICustomCTBlocking, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "TOP_AABB": $VoxelShape
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "OCTET_NNN": $VoxelShape
static readonly "OCTET_NNP": $VoxelShape
static readonly "OCTET_NPN": $VoxelShape
static readonly "OCTET_NPP": $VoxelShape
static readonly "OCTET_PNN": $VoxelShape
static readonly "OCTET_PNP": $VoxelShape
static readonly "OCTET_PPN": $VoxelShape
static readonly "OCTET_PPP": $VoxelShape
static readonly "TOP_SHAPES": ($VoxelShape)[]
static readonly "BOTTOM_SHAPES": ($VoxelShape)[]
readonly "baseState": $BlockState
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
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public static "getFaceShape"(state: $BlockState$Type, face: $Direction$Type): $CopycatStairsBlock$FaceShape
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$Type = ($CopycatStairsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStairsBlock_ = $CopycatStairsBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CCCopycatBlock extends $Block implements $IBE<($CCCopycatBlockEntity)>, $ICopycatBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public static "getMaterial"(level: $BlockGetter$Type, pos: $BlockPos$Type): $BlockState
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "stateType"(): $StateType
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlock$Type = ($CCCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCCopycatBlock_ = $CCCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$MultiStateCopycatBlock, $MultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlock"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $WaterloggedMultiStateCopycatBlock extends $MultiStateCopycatBlock implements $ProperWaterloggedBlock {
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

public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(pState: $BlockState$Type): $FluidState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "blockShapeOverride"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterloggedMultiStateCopycatBlock$Type = ($WaterloggedMultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterloggedMultiStateCopycatBlock_ = $WaterloggedMultiStateCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slice/$CopycatSliceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatSliceBlock extends $CCWaterloggedCopycatBlock implements $ISpecialBlockItemRequirement, $IStateType {
static readonly "HALF": $EnumProperty<($Half)>
static readonly "FACING": $DirectionProperty
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSliceBlock$Type = ($CopycatSliceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSliceBlock_ = $CopycatSliceBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$SmartBlockEntity, $SmartBlockEntity$Type} from "packages/com/simibubi/create/foundation/blockEntity/$SmartBlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export class $CCCopycatBlockEntity extends $SmartBlockEntity implements $ICopycatBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(type: $BlockEntityType$Type<(any)>, pos: $BlockPos$Type, state: $BlockState$Type)

public "write"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$Type, clientPacket: boolean): void
public "redraw"(): void
public "setLevel"(level: $Level$Type): void
public "getLevel"(): $Level
public "setBlockState"(blockState: $BlockState$Type): void
public "getModelData"(): $ModelData
public "getBlockPos"(): $BlockPos
public "getMaterial"(): $BlockState
public "notifyUpdate"(): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "addBehaviours"(behaviours: $List$Type<($BlockEntityBehaviour$Type)>): void
public "writeSafe"(tag: $CompoundTag$Type): void
public "getBlockState"(): $BlockState
public "setConsumedItemInternal"(consumedItem: $ItemStack$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "setMaterialInternal"(material: $BlockState$Type): void
public "getConsumedItem"(): $ItemStack
public "isCTEnabled"(): boolean
public "transform"(transform: $StructureTransform$Type): void
public "init"(): void
public static "write"(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
public static "write"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public static "read"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
public "getBlock"(): $ICopycatBlock
public "getRequiredItems"(state: $BlockState$Type): $ItemRequirement
public "setMaterial"(blockState: $BlockState$Type): void
public static "writeSafe"(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
public "setConsumedItem"(stack: $ItemStack$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "hasCustomMaterial"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "level"(value: $Level$Type)
get "level"(): $Level
set "blockState"(value: $BlockState$Type)
get "modelData"(): $ModelData
get "blockPos"(): $BlockPos
get "material"(): $BlockState
get "blockState"(): $BlockState
set "consumedItemInternal"(value: $ItemStack$Type)
set "cTEnabledInternal"(value: boolean)
set "materialInternal"(value: $BlockState$Type)
get "consumedItem"(): $ItemStack
get "cTEnabled"(): boolean
get "block"(): $ICopycatBlock
set "material"(value: $BlockState$Type)
set "consumedItem"(value: $ItemStack$Type)
set "cTEnabled"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlockEntity$Type = ($CCCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCCopycatBlockEntity_ = $CCCopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType" {
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"

/**
 * 
 * @deprecated
 */
export interface $IStateType {

 "stateType"(): $StateType
}

export namespace $IStateType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateType$Type = ($IStateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStateType_ = $IStateType$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_slope/$CopycatVerticalSlopeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType, $ICustomCTBlocking {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSlopeBlock$Type = ($CopycatVerticalSlopeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalSlopeBlock_ = $CopycatVerticalSlopeBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ScaledBlockAndTintGetter, $ScaledBlockAndTintGetter$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/model/$ScaledBlockAndTintGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"

export interface $IMultiStateCopycatBlock extends $ICopycatBlock, $IStateType {

 "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "m_6402_"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
 "m_5707_"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
 "canOcclude"(property: string, level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
 "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
 "m_6227_"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
 "m_6810_"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
 "getColorIndex"(arg0: string): integer
 "getVectorFromProperty"(arg0: $BlockState$Type, arg1: string): $Vec3i
 "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $ScaledBlockAndTintGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
 "storageProperties"(): $Set<(string)>
 "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $IMultiStateCopycatBlockEntity
 "isIgnoredConnectivitySide"(arg0: string, arg1: $BlockAndTintGetter$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): boolean
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
 "canConnectTexturesToward"(arg0: string, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type): boolean
 "toggleCT"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
 "stateType"(): $StateType
 "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hit: $BlockHitResult$Type, targetingSolid: boolean): string
 "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hitVec: $Vec3$Type, face: $Direction$Type, targetingSolid: boolean): string
 "getPropertyFromInteraction"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $Vec3i$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: $Vec3$Type): string
 "partExists"(arg0: $BlockState$Type, arg1: string): boolean
 "defaultProperty"(): string
 "vectorScale"(arg0: $BlockState$Type): $Vec3i
 "fillEmptyParts"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, material: $BlockState$Type): void
 "transformStorage"(arg0: $BlockState$Type, arg1: $IMultiStateCopycatBlockEntity$Type, arg2: $StructureTransform$Type): void
 "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
 "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
 "isAcceptedRegardless"(material: $BlockState$Type): boolean
 "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
 "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
}

export namespace $IMultiStateCopycatBlock {
function getAppearance(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
function hidesNeighborFace(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
function getMaterial(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
function wrappedColor(): $BlockColor
function blockShapeOverride(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
function getAppearance(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
function getMaterial(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlock$Type = ($IMultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateCopycatBlock_ = $IMultiStateCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/vertical_step/$CopycatVerticalStepBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatVerticalStepBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRot: $Rotation$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStepBlock$Type = ($CopycatVerticalStepBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatVerticalStepBlock_ = $CopycatVerticalStepBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/trapdoor/$CopycatTrapdoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatTrapdoorBlock extends $TrapDoorBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "OPEN": $BooleanProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POWERED": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB_THICKNESS": integer
static readonly "EAST_OPEN_AABB": $VoxelShape
static readonly "WEST_OPEN_AABB": $VoxelShape
static readonly "SOUTH_OPEN_AABB": $VoxelShape
static readonly "NORTH_OPEN_AABB": $VoxelShape
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "TOP_AABB": $VoxelShape
readonly "type": $BlockSetType
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTrapdoorBlock$Type = ($CopycatTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatTrapdoorBlock_ = $CopycatTrapdoorBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/cogwheel/$CopycatCogWheelBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$ScaledBlockAndTintGetter, $ScaledBlockAndTintGetter$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/model/$ScaledBlockAndTintGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$CogWheelBlock, $CogWheelBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$CogWheelBlock"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"

export class $CopycatCogWheelBlock extends $CogWheelBlock implements $IMultiStateCopycatBlock, $IForgeBlock {
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


public static "small"(properties: $BlockBehaviour$Properties$Type): $CopycatCogWheelBlock
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "fallOn"(pLevel: $Level$Type, state: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, renderView: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, sourceState: $BlockState$Type, sourcePos: $BlockPos$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getColorIndex"(property: string): integer
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public static "large"(properties: $BlockBehaviour$Properties$Type): $CopycatCogWheelBlock
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "storageProperties"(): $Set<(string)>
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(property: string, reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(property: string, level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $ScaledBlockAndTintGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $IMultiStateCopycatBlockEntity
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "toggleCT"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "stateType"(): $StateType
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hit: $BlockHitResult$Type, targetingSolid: boolean): string
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hitVec: $Vec3$Type, face: $Direction$Type, targetingSolid: boolean): string
public "fillEmptyParts"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, material: $BlockState$Type): void
public static "blockShapeOverride"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$Type): boolean
public static "isLargeCog"(arg0: $Block$Type): boolean
public static "isLargeCog"(arg0: $BlockState$Type): boolean
public static "isSmallCog"(arg0: $Block$Type): boolean
public static "isSmallCog"(arg0: $BlockState$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$Type): boolean
public "hasShaftTowards"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
public "getRotationAxis"(arg0: $BlockState$Type): $Direction$Axis
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCogWheelBlock$Type = ($CopycatCogWheelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatCogWheelBlock_ = $CopycatCogWheelBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/stairs/$CopycatStairsBlock$FaceShape" {
import {$Direction$AxisDirection, $Direction$AxisDirection$Type} from "packages/net/minecraft/core/$Direction$AxisDirection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $CopycatStairsBlock$FaceShape {
 "topNegative": boolean
 "topPositive": boolean
 "bottomNegative": boolean
 "bottomPositive": boolean

constructor()

public "equals"(obj: any): boolean
public "set"(bottomNegative: boolean, bottomPositive: boolean, topNegative: boolean, topPositive: boolean): $CopycatStairsBlock$FaceShape
public "rotate"(angle: integer): $CopycatStairsBlock$FaceShape
public "rotate"(angle: float): $CopycatStairsBlock$FaceShape
public "isFull"(): boolean
public "canConnect"(): boolean
public "countBlocks"(): integer
public "fillAll"(): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean, direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
public "fillTop"(direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
public "fillTop"(): $CopycatStairsBlock$FaceShape
public "fillBottom"(direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
public "fillBottom"(): $CopycatStairsBlock$FaceShape
public "fillRight"(relativeTo: $Direction$Type): $CopycatStairsBlock$FaceShape
public "fillPositive"(): $CopycatStairsBlock$FaceShape
public "fillNegative"(): $CopycatStairsBlock$FaceShape
public "fillLeft"(relativeTo: $Direction$Type): $CopycatStairsBlock$FaceShape
public "fillColumn"(direction: $Direction$AxisDirection$Type): $CopycatStairsBlock$FaceShape
get "full"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$FaceShape$Type = ($CopycatStairsBlock$FaceShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatStairsBlock$FaceShape_ = $CopycatStairsBlock$FaceShape$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slab/$CopycatSlabBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CopycatSlabBlock$FaceShape, $CopycatSlabBlock$FaceShape$Type} from "packages/com/copycatsplus/copycats/content/copycat/slab/$CopycatSlabBlock$FaceShape"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"

export class $CopycatSlabBlock extends $WaterloggedMultiStateCopycatBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "SLAB_TYPE": $EnumProperty<($SlabType)>
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "setApparentDirection"(state: $BlockState$Type, direction: $Direction$Type): $BlockState
public static "getApparentDirection"(state: $BlockState$Type): $Direction
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getColorIndex"(property: string): integer
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "storageProperties"(): $Set<(string)>
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public static "getFaceShape"(state: $BlockState$Type, face: $Direction$Type): $CopycatSlabBlock$FaceShape
public "isIgnoredConnectivitySide"(property: string, reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "blockShapeOverride"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$Type = ($CopycatSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlabBlock_ = $CopycatSlabBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/shaft/$CopycatShaftBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ShaftBlock, $ShaftBlock$Type} from "packages/com/simibubi/create/content/kinetics/simpleRelays/$ShaftBlock"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatShaftBlock extends $ShaftBlock implements $ICopycatBlock, $ICustomCTBlocking {
static readonly "placementHelperId": integer
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

public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatShaftBlock$Type = ($CopycatShaftBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatShaftBlock_ = $CopycatShaftBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/bytes/$CopycatByteBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$CopycatByteBlock$Byte, $CopycatByteBlock$Byte$Type} from "packages/com/copycatsplus/copycats/content/copycat/bytes/$CopycatByteBlock$Byte"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatByteBlock extends $WaterloggedMultiStateCopycatBlock {
static "TOP_NE": $BooleanProperty
static "TOP_NW": $BooleanProperty
static "TOP_SE": $BooleanProperty
static "TOP_SW": $BooleanProperty
static "BOTTOM_NE": $BooleanProperty
static "BOTTOM_NW": $BooleanProperty
static "BOTTOM_SE": $BooleanProperty
static "BOTTOM_SW": $BooleanProperty
static readonly "allBytes": $List<($CopycatByteBlock$Byte)>
static readonly "byteMap": $Map<(string), ($CopycatByteBlock$Byte)>
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

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getColorIndex"(property: string): integer
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public static "bite"(x: boolean, y: boolean, z: boolean): $CopycatByteBlock$Byte
public "storageProperties"(): $Set<(string)>
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(property: string, reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "byByte"(x: boolean, y: boolean, z: boolean): $BooleanProperty
public static "byByte"(bite: $CopycatByteBlock$Byte$Type): $BooleanProperty
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public static "getByteFromVec"(vec: $Vec3$Type, pos: $BlockPos$Type): $CopycatByteBlock$Byte
public static "clampToBlockPos"(vec: $Vec3$Type, pos: $BlockPos$Type): $Vec3
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "blockShapeOverride"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$Type = ($CopycatByteBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatByteBlock_ = $CopycatByteBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/slope_layer/$CopycatSlopeLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ISpecialBlockItemRequirement, $ISpecialBlockItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockItemRequirement"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatSlopeLayerBlock extends $CCWaterloggedCopycatBlock implements $ISpecialBlockItemRequirement, $IStateType {
static readonly "FACING": $DirectionProperty
static readonly "HALF": $EnumProperty<($Half)>
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getRequiredItems"(state: $BlockState$Type, blockEntity: $BlockEntity$Type): $ItemRequirement
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$Type): boolean
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getShadeBrightness"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): float
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeLayerBlock$Type = ($CopycatSlopeLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatSlopeLayerBlock_ = $CopycatSlopeLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage$MaterialItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $MaterialItemStorage$MaterialItem {

constructor(material: $BlockState$Type, consumedItem: $ItemStack$Type)
constructor(material: $BlockState$Type, consumedItem: $ItemStack$Type, enableCT: boolean)

public static "deserialize"(tag: $CompoundTag$Type): $MaterialItemStorage$MaterialItem
public "serialize"(): $CompoundTag
public "setMaterial"(material: $BlockState$Type): void
public "material"(): $BlockState
public "enableCT"(): boolean
public "setConsumedItem"(stack: $ItemStack$Type): void
public "consumedItem"(): $ItemStack
public "serializeSafe"(): $CompoundTag
public "setEnableCT"(enableCT: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$MaterialItem$Type = ($MaterialItemStorage$MaterialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItemStorage$MaterialItem_ = $MaterialItemStorage$MaterialItem$Type;
}}
declare module "packages/com/copycatsplus/copycats/$CCBlockStateProperties$VerticalStairShape" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CCBlockStateProperties$VerticalStairShape extends $Enum<($CCBlockStateProperties$VerticalStairShape)> implements $StringRepresentable {
static readonly "STRAIGHT": $CCBlockStateProperties$VerticalStairShape
static readonly "OUTER_TOP": $CCBlockStateProperties$VerticalStairShape
static readonly "OUTER_BOTTOM": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_TOP": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_BOTTOM": $CCBlockStateProperties$VerticalStairShape


public static "values"(): ($CCBlockStateProperties$VerticalStairShape)[]
public static "valueOf"(name: string): $CCBlockStateProperties$VerticalStairShape
public "isOuter"(): boolean
public "isTop"(): boolean
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "outer"(): boolean
get "top"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$VerticalStairShape$Type = (("straight") | ("inner_top") | ("outer_top") | ("inner_bottom") | ("outer_bottom")) | ($CCBlockStateProperties$VerticalStairShape);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCBlockStateProperties$VerticalStairShape_ = $CCBlockStateProperties$VerticalStairShape$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage$MaterialItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MaterialItemStorage {


public static "create"(properties: $Set$Type<(string)>): $MaterialItemStorage
public "deserialize"(tag: $CompoundTag$Type): boolean
public "serialize"(): $CompoundTag
public "getAllConsumedItems"(): $List<($ItemStack)>
public "getAllProperties"(): $Set<(string)>
public "getAllMaterials"(): $Set<($BlockState)>
public "hasCustomMaterial"(property: string): boolean
public "storeMaterialItem"(property: string, materialItem: $MaterialItemStorage$MaterialItem$Type): void
public "getMaterialMap"(): $Map<(string), ($BlockState)>
public "serializeSafe"(): $CompoundTag
public "getMaterialItem"(property: string): $MaterialItemStorage$MaterialItem
public "remapStorage"(keyMapper: $Function$Type<(string), (string)>): void
get "allConsumedItems"(): $List<($ItemStack)>
get "allProperties"(): $Set<(string)>
get "allMaterials"(): $Set<($BlockState)>
get "materialMap"(): $Map<(string), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$Type = ($MaterialItemStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialItemStorage_ = $MaterialItemStorage$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/door/$CopycatDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatDoorBlock extends $DoorBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$Type, p_153213_: $BlockState$Type, p_153214_: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatDoorBlock$Type = ($CopycatDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatDoorBlock_ = $CopycatDoorBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/half_layer/$CopycatHalfLayerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"

export class $CopycatHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "HALF": $EnumProperty<($Half)>
static readonly "POSITIVE_LAYERS": $IntegerProperty
static readonly "NEGATIVE_LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "mirror"(state: $BlockState$Type, mirrorIn: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getColorIndex"(property: string): integer
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "storageProperties"(): $Set<(string)>
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(property: string, reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "blockShapeOverride"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfLayerBlock$Type = ($CopycatHalfLayerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatHalfLayerBlock_ = $CopycatHalfLayerBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/beam/$CopycatBeamBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$CCWaterloggedCopycatBlock, $CCWaterloggedCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatBeamBlock extends $CCWaterloggedCopycatBlock implements $IStateType {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "rotate"(state: $BlockState$Type, rot: $Rotation$Type): $BlockState
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "wrappedColor"(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBeamBlock$Type = ($CopycatBeamBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBeamBlock_ = $CopycatBeamBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlock" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IForgeBlock, $IForgeBlock$Type} from "packages/net/minecraftforge/common/extensions/$IForgeBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$MultiStateCopycatBlockEntity, $MultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MultiStateCopycatBlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$ScaledBlockAndTintGetter, $ScaledBlockAndTintGetter$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/model/$ScaledBlockAndTintGetter"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"

export class $MultiStateCopycatBlock extends $Block implements $IMultiStateCopycatBlock, $IBE<($MultiStateCopycatBlockEntity)>, $IForgeBlock {
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
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$Type, p_153213_: $BlockState$Type, p_153214_: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, state: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, renderView: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, sourceState: $BlockState$Type, sourcePos: $BlockPos$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(property: string, level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public "getColorIndex"(arg0: string): integer
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getVectorFromProperty"(arg0: $BlockState$Type, arg1: string): $Vec3i
public "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $ScaledBlockAndTintGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
public "storageProperties"(): $Set<(string)>
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $IMultiStateCopycatBlockEntity
public "isIgnoredConnectivitySide"(arg0: string, arg1: $BlockAndTintGetter$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "canConnectTexturesToward"(arg0: string, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "toggleCT"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "stateType"(): $StateType
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hit: $BlockHitResult$Type, targetingSolid: boolean): string
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, hitVec: $Vec3$Type, face: $Direction$Type, targetingSolid: boolean): string
public "getPropertyFromInteraction"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $Vec3i$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: $Vec3$Type): string
public "partExists"(arg0: $BlockState$Type, arg1: string): boolean
public "defaultProperty"(): string
public "vectorScale"(arg0: $BlockState$Type): $Vec3i
public "fillEmptyParts"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, material: $BlockState$Type): void
public "transformStorage"(arg0: $BlockState$Type, arg1: $IMultiStateCopycatBlockEntity$Type, arg2: $StructureTransform$Type): void
public static "blockShapeOverride"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($MultiStateCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($MultiStateCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $MultiStateCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($MultiStateCopycatBlockEntity)>
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlock$Type = ($MultiStateCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiStateCopycatBlock_ = $MultiStateCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/$CCBlockStateProperties$Side" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CCBlockStateProperties$Side extends $Enum<($CCBlockStateProperties$Side)> implements $StringRepresentable {
static readonly "LEFT": $CCBlockStateProperties$Side
static readonly "RIGHT": $CCBlockStateProperties$Side


public static "values"(): ($CCBlockStateProperties$Side)[]
public static "valueOf"(name: string): $CCBlockStateProperties$Side
public "isRight"(): boolean
public "getSerializedName"(): string
public "getOpposite"(): $CCBlockStateProperties$Side
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "right"(): boolean
get "serializedName"(): string
get "opposite"(): $CCBlockStateProperties$Side
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$Side$Type = (("left") | ("right")) | ($CCBlockStateProperties$Side);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCBlockStateProperties$Side_ = $CCBlockStateProperties$Side$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CopycatBaseBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CopycatBaseBlock extends $Block {
static readonly "BASE_TYPE_COUNT": integer
static readonly "BASE_TYPE": $IntegerProperty
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBaseBlock$Type = ($CopycatBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBaseBlock_ = $CopycatBaseBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fence/$CopycatFenceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatFenceBlock extends $FenceBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
 "collisionShapeByIndex": ($VoxelShape)[]
 "shapeByIndex": ($VoxelShape)[]
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
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "collisionExtendsVertically"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collidingEntity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public static "byDirection"(direction: $Direction$Type): $BooleanProperty
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceBlock$Type = ($CopycatFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFenceBlock_ = $CopycatFenceBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/button/$CopycatButtonBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $CopycatButtonBlock extends $ButtonBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "POWERED": $BooleanProperty
static readonly "HALF_AABB_HEIGHT": integer
static readonly "HALF_AABB_WIDTH": integer
static readonly "CEILING_AABB_X": $VoxelShape
static readonly "CEILING_AABB_Z": $VoxelShape
static readonly "FLOOR_AABB_X": $VoxelShape
static readonly "FLOOR_AABB_Z": $VoxelShape
static readonly "NORTH_AABB": $VoxelShape
static readonly "SOUTH_AABB": $VoxelShape
static readonly "WEST_AABB": $VoxelShape
static readonly "EAST_AABB": $VoxelShape
static readonly "PRESSED_CEILING_AABB_X": $VoxelShape
static readonly "PRESSED_CEILING_AABB_Z": $VoxelShape
static readonly "PRESSED_FLOOR_AABB_X": $VoxelShape
static readonly "PRESSED_FLOOR_AABB_Z": $VoxelShape
static readonly "PRESSED_NORTH_AABB": $VoxelShape
static readonly "PRESSED_SOUTH_AABB": $VoxelShape
static readonly "PRESSED_WEST_AABB": $VoxelShape
static readonly "PRESSED_EAST_AABB": $VoxelShape
readonly "type": $BlockSetType
readonly "ticksToStayPressed": integer
readonly "arrowsCanPress": boolean
static readonly "FACE": $EnumProperty<($AttachFace)>
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

constructor(properties: $BlockBehaviour$Properties$Type, type: $BlockSetType$Type, ticksToStayPressed: integer, arrowsCanPress: boolean)

public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatButtonBlock$Type = ($CopycatButtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatButtonBlock_ = $CopycatButtonBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock" {
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ITransformableBlock, $ITransformableBlock$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlock"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $ICopycatBlock extends $IWrenchable, $IStateType, $ITransformableBlock {

 "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
 "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
 "m_6402_"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
 "m_5707_"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
 "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
 "m_6227_"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
 "m_6810_"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
 "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
 "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
 "isAcceptedRegardless"(material: $BlockState$Type): boolean
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
 "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
 "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
 "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
 "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
 "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
 "stateType"(): $StateType
}

export namespace $ICopycatBlock {
function getAppearance(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
function hidesNeighborFace(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
function getMaterial(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
function wrappedColor(): $BlockColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlock$Type = ($ICopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlock_ = $ICopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/wall/$CopycatWallBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatWallBlock extends $WallBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "UP": $BooleanProperty
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "WATERLOGGED": $BooleanProperty
 "shapeByIndex": $Map<($BlockState), ($VoxelShape)>
 "collisionShapeByIndex": $Map<($BlockState), ($VoxelShape)>
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
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "collisionExtendsVertically"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collidingEntity: $Entity$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public static "byDirection"(direction: $Direction$Type): $EnumProperty<($WallSide)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWallBlock$Type = ($CopycatWallBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatWallBlock_ = $CopycatWallBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MaterialItemStorage, $MaterialItemStorage$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$MaterialItemStorage"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export interface $IMultiStateCopycatBlockEntity extends $ICopycatBlockEntity {

 "transform"(transform: $StructureTransform$Type): void
 "init"(): void
 "getBlock"(): $IMultiStateCopycatBlock
 "getMaterialItemStorage"(): $MaterialItemStorage
 "setMaterial"(property: string, blockState: $BlockState$Type): void
 "getMaterial"(): $BlockState
 "setConsumedItemInternal"(consumedItem: $ItemStack$Type): void
 "setCTEnabledInternal"(value: boolean): void
 "setMaterialInternal"(material: $BlockState$Type): void
 "setConsumedItem"(property: string, itemStack: $ItemStack$Type): void
 "getConsumedItem"(): $ItemStack
 "cycleMaterial"(property: string): boolean
 "hasCustomMaterial"(): boolean
 "isCTEnabled"(): boolean
 "setEnableCT"(property: string, value: boolean): void
 "setMaterialItemStorageInternal"(arg0: $MaterialItemStorage$Type): void
 "getRequiredItems"(state: $BlockState$Type): $ItemRequirement
 "redraw"(): void
 "setMaterial"(blockState: $BlockState$Type): void
 "m_142339_"(arg0: $Level$Type): void
 "m_58904_"(): $Level
 "m_155250_"(arg0: $BlockState$Type): void
 "m_58899_"(): $BlockPos
 "notifyUpdate"(): void
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "m_58900_"(): $BlockState
 "setConsumedItem"(stack: $ItemStack$Type): void
 "cycleMaterial"(): boolean
 "setCTEnabled"(value: boolean): void
 "writeSafe"(arg0: $CompoundTag$Type): void
}

export namespace $IMultiStateCopycatBlockEntity {
function write(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function read(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function writeSafe(self: $IMultiStateCopycatBlockEntity$Type, tag: $CompoundTag$Type): void
function write(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
function write(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function read(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function writeSafe(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlockEntity$Type = ($IMultiStateCopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMultiStateCopycatBlockEntity_ = $IMultiStateCopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/mixin/copycat/$VoxelShapeAccessor" {
import {$DiscreteVoxelShape, $DiscreteVoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$DiscreteVoxelShape"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$DoubleList, $DoubleList$Type} from "packages/it/unimi/dsi/fastutil/doubles/$DoubleList"

export interface $VoxelShapeAccessor {

 "copycats$getShape"(): $DiscreteVoxelShape
 "copycats$setShape"(arg0: $DiscreteVoxelShape$Type): void
 "copycats$callGetCoords"(arg0: $Direction$Axis$Type): $DoubleList
}

export namespace $VoxelShapeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VoxelShapeAccessor$Type = ($VoxelShapeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VoxelShapeAccessor_ = $VoxelShapeAccessor$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$StateType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * 
 * @deprecated
 */
export class $StateType extends $Enum<($StateType)> {
static readonly "SINGULAR": $StateType
static readonly "MULTI": $StateType


public static "values"(): ($StateType)[]
public static "valueOf"(name: string): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateType$Type = (("singular") | ("multi")) | ($StateType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StateType_ = $StateType$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fence_gate/$CopycatFenceGateBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IStateType, $IStateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$IStateType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CopycatFenceGateBlock extends $FenceGateBlock implements $ICopycatBlock, $IBE<($CCCopycatBlockEntity)>, $IStateType {
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "IN_WALL": $BooleanProperty
static readonly "Z_SHAPE": $VoxelShape
static readonly "X_SHAPE": $VoxelShape
static readonly "Z_SHAPE_LOW": $VoxelShape
static readonly "X_SHAPE_LOW": $VoxelShape
static readonly "Z_COLLISION_SHAPE": $VoxelShape
static readonly "X_COLLISION_SHAPE": $VoxelShape
static readonly "Z_SUPPORT_SHAPE": $VoxelShape
static readonly "X_SUPPORT_SHAPE": $VoxelShape
static readonly "Z_OCCLUSION_SHAPE": $VoxelShape
static readonly "X_OCCLUSION_SHAPE": $VoxelShape
static readonly "Z_OCCLUSION_SHAPE_LOW": $VoxelShape
static readonly "X_OCCLUSION_SHAPE_LOW": $VoxelShape
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
public "getTicker"<S extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlacer: $LivingEntity$Type, pStack: $ItemStack$Type): void
public "playerWillDestroy"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pNewState: $BlockState$Type, pIsMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "collisionExtendsVertically"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, collidingEntity: $Entity$Type): boolean
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public "onWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($CCCopycatBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($CCCopycatBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $CCCopycatBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($CCCopycatBlockEntity)>
public "stateType"(): $StateType
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceGateBlock$Type = ($CopycatFenceGateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFenceGateBlock_ = $CopycatFenceGateBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$CCWaterloggedCopycatBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ProperWaterloggedBlock, $ProperWaterloggedBlock$Type} from "packages/com/simibubi/create/foundation/block/$ProperWaterloggedBlock"
import {$CCCopycatBlock, $CCCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$CCCopycatBlock"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CCWaterloggedCopycatBlock extends $CCCopycatBlock implements $ProperWaterloggedBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(pContext: $BlockPlaceContext$Type): $BlockState
public "updateShape"(pState: $BlockState$Type, pDirection: $Direction$Type, pNeighborState: $BlockState$Type, pLevel: $LevelAccessor$Type, pCurrentPos: $BlockPos$Type, pNeighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(pState: $BlockState$Type): $FluidState
public "fluidState"(arg0: $BlockState$Type): $FluidState
public "updateWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): void
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public "withWater"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "wrappedColor"(): $BlockColor
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCWaterloggedCopycatBlock$Type = ($CCWaterloggedCopycatBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CCWaterloggedCopycatBlock_ = $CCWaterloggedCopycatBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/board/$CopycatBoardBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ICustomCTBlocking, $ICustomCTBlocking$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICustomCTBlocking"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WaterloggedMultiStateCopycatBlock, $WaterloggedMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$WaterloggedMultiStateCopycatBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ScaledBlockAndTintGetter, $ScaledBlockAndTintGetter$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/model/$ScaledBlockAndTintGetter"
import {$IMultiStateCopycatBlock, $IMultiStateCopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/multistate/$IMultiStateCopycatBlockEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatBoardBlock extends $WaterloggedMultiStateCopycatBlock implements $ICustomCTBlocking {
static "UP": $BooleanProperty
static "DOWN": $BooleanProperty
static "NORTH": $BooleanProperty
static "SOUTH": $BooleanProperty
static "EAST": $BooleanProperty
static "WEST": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
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

public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pType: $PathComputationType$Type): boolean
public "mirror"(pState: $BlockState$Type, pMirror: $Mirror$Type): $BlockState
public "rotate"(pState: $BlockState$Type, pRotation: $Rotation$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$Type, pUseContext: $BlockPlaceContext$Type): boolean
public "getShape"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public "getColorIndex"(property: string): integer
public "blockCTTowards"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, ctPos: $BlockPos$Type, connectingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public "getVectorFromProperty"(state: $BlockState$Type, property: string): $Vec3i
public "getPropertyFromRender"(renderingProperty: string, state: $BlockState$Type, level: $ScaledBlockAndTintGetter$Type, vector: $Vec3i$Type, blockPos: $BlockPos$Type): string
public "storageProperties"(): $Set<(string)>
public "supportsExternalFaceHiding"(state: $BlockState$Type): boolean
public static "byDirection"(direction: $Direction$Type): $BooleanProperty
public "isIgnoredConnectivitySide"(property: string, reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(property: string, reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public static "directionToProperty"(direction: $Direction$Type): string
public "getPropertyFromInteraction"(state: $BlockState$Type, level: $BlockGetter$Type, hitLocation: $Vec3i$Type, blockPos: $BlockPos$Type, facing: $Direction$Type, unscaledHit: $Vec3$Type): string
public "partExists"(state: $BlockState$Type, property: string): boolean
public "defaultProperty"(): string
public "vectorScale"(state: $BlockState$Type): $Vec3i
public "transformStorage"(state: $BlockState$Type, be: $IMultiStateCopycatBlockEntity$Type, transform: $StructureTransform$Type): void
public "isCTBlocked"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, connectingPos: $BlockPos$Type, blockingPos: $BlockPos$Type, face: $Direction$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $BlockState
public static "getAppearance"(block: $IMultiStateCopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type, property: string): $BlockState
public static "wrappedColor"(): $BlockColor
public static "blockShapeOverride"(pState: $BlockState$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type, pContext: $CollisionContext$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoardBlock$Type = ($CopycatBoardBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatBoardBlock_ = $CopycatBoardBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ISpecialBlockEntityItemRequirement, $ISpecialBlockEntityItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ISpecialBlockEntityItemRequirement"
import {$ITransformableBlockEntity, $ITransformableBlockEntity$Type} from "packages/com/simibubi/create/content/contraptions/$ITransformableBlockEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$IPartialSafeNBT, $IPartialSafeNBT$Type} from "packages/com/simibubi/create/foundation/utility/$IPartialSafeNBT"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HolderGetter, $HolderGetter$Type} from "packages/net/minecraft/core/$HolderGetter"

export interface $ICopycatBlockEntity extends $ISpecialBlockEntityItemRequirement, $ITransformableBlockEntity, $IPartialSafeNBT {

 "transform"(transform: $StructureTransform$Type): void
 "init"(): void
 "getBlock"(): $ICopycatBlock
 "getRequiredItems"(state: $BlockState$Type): $ItemRequirement
 "redraw"(): void
 "setMaterial"(blockState: $BlockState$Type): void
 "m_142339_"(arg0: $Level$Type): void
 "m_58904_"(): $Level
 "m_155250_"(arg0: $BlockState$Type): void
 "m_58899_"(): $BlockPos
 "getMaterial"(): $BlockState
 "notifyUpdate"(): void
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "m_58900_"(): $BlockState
 "setConsumedItemInternal"(arg0: $ItemStack$Type): void
 "setCTEnabledInternal"(arg0: boolean): void
 "setMaterialInternal"(arg0: $BlockState$Type): void
 "setConsumedItem"(stack: $ItemStack$Type): void
 "getConsumedItem"(): $ItemStack
 "cycleMaterial"(): boolean
 "setCTEnabled"(value: boolean): void
 "hasCustomMaterial"(): boolean
 "isCTEnabled"(): boolean
 "writeSafe"(arg0: $CompoundTag$Type): void
}

export namespace $ICopycatBlockEntity {
function write(tag: $CompoundTag$Type, stack: $ItemStack$Type, material: $BlockState$Type, enableCT: boolean): void
function write(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function read(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type, clientPacket: boolean): void
function writeSafe(self: $ICopycatBlockEntity$Type, tag: $CompoundTag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlockEntity$Type = ($ICopycatBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICopycatBlockEntity_ = $ICopycatBlockEntity$Type;
}}
declare module "packages/com/copycatsplus/copycats/content/copycat/fluid_pipe/$CopycatFluidPipeBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$StructureTransform, $StructureTransform$Type} from "packages/com/simibubi/create/content/contraptions/$StructureTransform"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$StateType, $StateType$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$StateType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ICopycatBlock, $ICopycatBlock$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidPipeBlock, $FluidPipeBlock$Type} from "packages/com/simibubi/create/content/fluids/pipes/$FluidPipeBlock"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$ICopycatBlockEntity, $ICopycatBlockEntity$Type} from "packages/com/copycatsplus/copycats/foundation/copycat/$ICopycatBlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CopycatFluidPipeBlock extends $FluidPipeBlock implements $ICopycatBlock {
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
readonly "shapeByIndex": ($VoxelShape)[]
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
public "onSneakWrenched"(state: $BlockState$Type, context: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "fallOn"(pLevel: $Level$Type, pState: $BlockState$Type, pPos: $BlockPos$Type, pEntity: $Entity$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "getAppearance"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "setPlacedBy"(worldIn: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "isValidSpawn"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $SpawnPlacements$Type$Type, entityType: $EntityType$Type<(any)>): boolean
public "canHarvestBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): boolean
public "canEntityDestroy"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, entity: $Entity$Type): boolean
public "use"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, ray: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, world: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, isMoving: boolean): void
public "getDestroyProgress"(pState: $BlockState$Type, pPlayer: $Player$Type, pLevel: $BlockGetter$Type, pPos: $BlockPos$Type): float
public "getFriction"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): float
public "getCloneItemStack"(state: $BlockState$Type, target: $HitResult$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, player: $Player$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, state2: $BlockState$Type, entity: $LivingEntity$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type, entity: $Entity$Type): $SoundType
public "getLightEmission"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): integer
public "getExplosionResistance"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): float
public "getEnchantPowerBonus"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): float
public "getAcceptedBlockState"(pLevel: $Level$Type, pPos: $BlockPos$Type, item: $ItemStack$Type, face: $Direction$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$Type, state: $BlockState$Type, face: $Direction$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$Type, fromPos: $BlockPos$Type, toPos: $BlockPos$Type, state: $BlockState$Type): boolean
public "transform"(state: $BlockState$Type, transform: $StructureTransform$Type): $BlockState
public static "getAppearance"(block: $ICopycatBlock$Type, state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, queryState: $BlockState$Type, queryPos: $BlockPos$Type): $BlockState
public "canOcclude"(level: $BlockGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$Type, pos: $BlockPos$Type, state: $BlockState$Type, neighborState: $BlockState$Type, dir: $Direction$Type): boolean
public static "getMaterial"(reader: $BlockGetter$Type, targetPos: $BlockPos$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$Type, pos: $BlockPos$Type): $ICopycatBlockEntity
public "isAcceptedRegardless"(material: $BlockState$Type): boolean
public static "wrappedColor"(): $BlockColor
public "prepareMaterial"(pLevel: $Level$Type, pPos: $BlockPos$Type, pState: $BlockState$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type, material: $BlockState$Type): $BlockState
public "canToggleCT"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "toggleCT"(pState: $BlockState$Type, pLevel: $Level$Type, pPos: $BlockPos$Type, pPlayer: $Player$Type, pHand: $InteractionHand$Type, pHit: $BlockHitResult$Type): $InteractionResult
public "isCTEnabled"(state: $BlockState$Type, level: $BlockAndTintGetter$Type, pos: $BlockPos$Type): boolean
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
get "blockEntityType"(): $BlockEntityType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFluidPipeBlock$Type = ($CopycatFluidPipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CopycatFluidPipeBlock_ = $CopycatFluidPipeBlock$Type;
}}
declare module "packages/com/copycatsplus/copycats/foundation/copycat/model/$ScaledBlockAndTintGetter" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$ColorResolver, $ColorResolver$Type} from "packages/net/minecraft/world/level/$ColorResolver"
import {$ClipContext, $ClipContext$Type} from "packages/net/minecraft/world/level/$ClipContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$LightLayer, $LightLayer$Type} from "packages/net/minecraft/world/level/$LightLayer"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $ScaledBlockAndTintGetter implements $BlockAndTintGetter {

constructor(renderingProperty: string, wrapped: $BlockAndTintGetter$Type, origin: $BlockPos$Type, originInner: $Vec3i$Type, scale: $Vec3i$Type, filter: $Predicate$Type<($BlockPos$Type)>)

public "getWrapped"(): $BlockAndTintGetter
public "getHeight"(): integer
public "getInner"(pos: $BlockPos$Type): $Vec3i
public "getBlockState"(pPos: $BlockPos$Type): $BlockState
public "getRenderingProperty"(): string
public "getBlockEntity"(pPos: $BlockPos$Type): $BlockEntity
public "getPropertyForRender"(state: $BlockState$Type, pos: $BlockPos$Type): string
public "getFluidState"(pPos: $BlockPos$Type): $FluidState
public "getMinBuildHeight"(): integer
public "getBlockTint"(pBlockPos: $BlockPos$Type, pColorResolver: $ColorResolver$Type): integer
public "getLightEngine"(): $LevelLightEngine
public "getShade"(pDirection: $Direction$Type, pShade: boolean): float
public "getScale"(): $Vec3i
public "getScaledPos"(pos: $BlockPos$Type): $BlockPos
public "getTruePos"(pos: $BlockPos$Type): $BlockPos
public "canSeeSky"(arg0: $BlockPos$Type): boolean
public "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
public "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
public "clip"(arg0: $ClipContext$Type): $BlockHitResult
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
public "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
public "getLightEmission"(arg0: $BlockPos$Type): integer
public "getMaxLightLevel"(): integer
public "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
public "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
public "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
public "getBlockFloorHeight"(arg0: $BlockPos$Type): double
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getMinSection"(): integer
public "getSectionIndex"(arg0: integer): integer
public "getSectionsCount"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMaxSection"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
public "getModelDataManager"(): $ModelDataManager
public "getBlockEntityRenderData"(pos: $BlockPos$Type): any
public "hasBiomes"(): boolean
public "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
get "wrapped"(): $BlockAndTintGetter
get "height"(): integer
get "renderingProperty"(): string
get "minBuildHeight"(): integer
get "lightEngine"(): $LevelLightEngine
get "scale"(): $Vec3i
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "minSection"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "modelDataManager"(): $ModelDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaledBlockAndTintGetter$Type = ($ScaledBlockAndTintGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScaledBlockAndTintGetter_ = $ScaledBlockAndTintGetter$Type;
}}
