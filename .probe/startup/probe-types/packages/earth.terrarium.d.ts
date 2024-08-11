declare module "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$EnergySnapshot, $EnergySnapshot$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Serializable, $Serializable$Type} from "packages/earth/terrarium/botarium/util/$Serializable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $EnergyContainer extends $Serializable, $Clearable {

 "getContainer"(direction: $Direction$Type): $EnergyContainer
 "extractEnergy"(arg0: long, arg1: boolean): long
 "maxExtract"(): long
 "setEnergy"(arg0: long): void
 "createSnapshot"(): $EnergySnapshot
 "readSnapshot"(snapshot: $EnergySnapshot$Type): void
 "allowsExtraction"(): boolean
 "internalInsert"(amount: long, simulate: boolean): long
 "internalExtract"(amount: long, simulate: boolean): long
 "allowsInsertion"(): boolean
 "maxInsert"(): long
 "getMaxCapacity"(): long
 "insertEnergy"(arg0: long, arg1: boolean): long
 "getStoredEnergy"(): long
 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "clearContent"(): void
}

export namespace $EnergyContainer {
function of(holder: $ItemStackHolder$Type): $EnergyContainer
function of(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $EnergyContainer
function of(block: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
function of(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
function holdsEnergy(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
function holdsEnergy(block: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsEnergy(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsEnergy(stack: $ItemStack$Type): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyContainer$Type = ($EnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyContainer_ = $EnergyContainer$Type;
}}
declare module "packages/earth/terrarium/adastra/common/world/features/$InfernalSpireColumnFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $InfernalSpireColumnFeature extends $Feature<($ColumnFeatureConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(codec: $Codec$Type<($ColumnFeatureConfiguration$Type)>)

public "place"(context: $FeaturePlaceContext$Type<($ColumnFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfernalSpireColumnFeature$Type = ($InfernalSpireColumnFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfernalSpireColumnFeature_ = $InfernalSpireColumnFeature$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/machines/$GravityNormalizerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SidedMachineBlock, $SidedMachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$SidedMachineBlock"
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
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $GravityNormalizerBlock extends $SidedMachineBlock {
static readonly "BOTTOM_SHAPE": $VoxelShape
static readonly "TOP_SHAPE": $VoxelShape
static readonly "NORTH_SIDE_SHAPE": $VoxelShape
static readonly "EAST_SIDE_SHAPE": $VoxelShape
static readonly "SOUTH_SIDE_SHAPE": $VoxelShape
static readonly "WEST_SIDE_SHAPE": $VoxelShape
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GravityNormalizerBlock$Type = ($GravityNormalizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GravityNormalizerBlock_ = $GravityNormalizerBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/pipes/$TransferablePipe" {
import {$TransferablePipe$Type, $TransferablePipe$Type$Type} from "packages/earth/terrarium/adastra/common/blocks/pipes/$TransferablePipe$Type"

export interface $TransferablePipe {

 "type"(): $TransferablePipe$Type
 "transferRate"(): long
}

export namespace $TransferablePipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferablePipe$Type = ($TransferablePipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferablePipe_ = $TransferablePipe$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/role/$RoleEntityHook" {
import {$Role, $Role$Type} from "packages/earth/terrarium/prometheus/common/handlers/role/$Role"

export interface $RoleEntityHook {

 "prometheus$getHighestRole"(): $Role
 "prometheus$updateHighestRole"(): void
}

export namespace $RoleEntityHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoleEntityHook$Type = ($RoleEntityHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoleEntityHook_ = $RoleEntityHook$Type;
}}
declare module "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyItem" {
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $BotariumEnergyItem<T extends ($EnergyContainer) & ($Updatable<($ItemStack)>)> {

 "getEnergyStorage"(arg0: $ItemStack$Type): T

(arg0: $ItemStack$Type): T
}

export namespace $BotariumEnergyItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumEnergyItem$Type<T> = ($BotariumEnergyItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumEnergyItem_<T> = $BotariumEnergyItem$Type<(T)>;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/pipes/$TransferablePipe$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TransferablePipe$Type extends $Enum<($TransferablePipe$Type)> {
static readonly "ENERGY": $TransferablePipe$Type
static readonly "FLUID": $TransferablePipe$Type


public static "values"(): ($TransferablePipe$Type)[]
public static "valueOf"(name: string): $TransferablePipe$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferablePipe$Type$Type = (("fluid") | ("energy")) | ($TransferablePipe$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferablePipe$Type_ = $TransferablePipe$Type$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/$SpacePaintingItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$PaintingVariant, $PaintingVariant$Type} from "packages/net/minecraft/world/entity/decoration/$PaintingVariant"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Painting, $Painting$Type} from "packages/net/minecraft/world/entity/decoration/$Painting"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$HangingEntityItem, $HangingEntityItem$Type} from "packages/net/minecraft/world/item/$HangingEntityItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpacePaintingItem extends $HangingEntityItem {
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

constructor(settings: $Item$Properties$Type, defaultVariant: $Supplier$Type<($PaintingVariant$Type)>, variants: $TagKey$Type<($PaintingVariant$Type)>)

public "create"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $Optional<($Painting)>
public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpacePaintingItem$Type = ($SpacePaintingItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpacePaintingItem_ = $SpacePaintingItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/base/$SidedMachineBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $SidedMachineBlock extends $MachineBlock {
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "getTop"(state: $BlockState$Type, pos: $BlockPos$Type): $BlockPos
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SidedMachineBlock$Type = ($SidedMachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SidedMachineBlock_ = $SidedMachineBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/$SlidingDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$SlidingDoorPartProperty, $SlidingDoorPartProperty$Type} from "packages/earth/terrarium/adastra/common/blocks/properties/$SlidingDoorPartProperty"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Wrenchable, $Wrenchable$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$Wrenchable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BasicEntityBlock, $BasicEntityBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$BasicEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $SlidingDoorBlock extends $BasicEntityBlock implements $Wrenchable {
static readonly "FACING": $DirectionProperty
static readonly "OPEN": $BooleanProperty
static readonly "LOCKED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "PART": $EnumProperty<($SlidingDoorPartProperty)>
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

public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "wasExploded"(level: $Level$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): void
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getCollisionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
public "onWrench"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, user: $Player$Type, hitPos: $Vec3$Type): void
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
declare module "packages/earth/terrarium/adastra/common/blocks/base/$Wrenchable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Wrenchable {

 "onWrench"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Player$Type, arg5: $Vec3$Type): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $Player$Type, arg5: $Vec3$Type): void
}

export namespace $Wrenchable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrenchable$Type = ($Wrenchable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wrenchable_ = $Wrenchable$Type;
}}
declare module "packages/earth/terrarium/prometheus/client/handlers/stuck/$StuckScreen" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StuckScreen {

 "prometheus$setStuck"(arg0: boolean): void
 "prometheus$isStuck"(): boolean
}

export namespace $StuckScreen {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StuckScreen$Type = ($StuckScreen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StuckScreen_ = $StuckScreen$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/heading/$HeadingEntityHook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Heading, $Heading$Type} from "packages/earth/terrarium/prometheus/common/handlers/heading/$Heading"

export interface $HeadingEntityHook {

 "prometheus$setHeadingAndUpdate"(heading: $Heading$Type): void
 "prometheus$getHeading"(): $Heading
 "prometheus$getHeadingText"(): $Component
 "prometheus$setHeadingText"(arg0: $Component$Type): void
 "prometheus$setHeading"(arg0: $Heading$Type): void
}

export namespace $HeadingEntityHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadingEntityHook$Type = ($HeadingEntityHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadingEntityHook_ = $HeadingEntityHook$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/armor/base/$CustomDyeableArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeableArmorItem, $DyeableArmorItem$Type} from "packages/net/minecraft/world/item/$DyeableArmorItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CustomDyeableArmorItem extends $DyeableArmorItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(armorMaterial: $ArmorMaterial$Type, type: $ArmorItem$Type$Type, properties: $Item$Properties$Type)

public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "getArmorTexture"(stack: $ItemStack$Type, entity: $Entity$Type, slot: $EquipmentSlot$Type, type: string): string
public "getColor"(stack: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDyeableArmorItem$Type = ($CustomDyeableArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomDyeableArmorItem_ = $CustomDyeableArmorItem$Type;
}}
declare module "packages/earth/terrarium/cadmus/mixins/forge/common/$GameRulesIntegerValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesIntegerValueInvoker {

}

export namespace $GameRulesIntegerValueInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesIntegerValueInvoker$Type = ($GameRulesIntegerValueInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesIntegerValueInvoker_ = $GameRulesIntegerValueInvoker$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$BotariumFluidItem" {
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemFluidContainer, $ItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer"

export interface $BotariumFluidItem<T extends ($ItemFluidContainer) & ($Updatable<($ItemStack)>)> {

 "getFluidContainer"(arg0: $ItemStack$Type): T

(arg0: $ItemStack$Type): T
}

export namespace $BotariumFluidItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumFluidItem$Type<T> = ($BotariumFluidItem<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumFluidItem_<T> = $BotariumFluidItem$Type<(T)>;
}}
declare module "packages/earth/terrarium/adastra/common/items/$Ti69Item" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ti69App, $Ti69App$Type} from "packages/earth/terrarium/adastra/client/renderers/ti69/apps/$Ti69App"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Ti69Item extends $Item {
static readonly "APP": $Ti69App
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

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ti69Item$Type = ($Ti69Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ti69Item_ = $Ti69Item$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/pipes/$PipeDuctBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PipeBlock, $PipeBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/pipes/$PipeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TransferablePipe$Type, $TransferablePipe$Type$Type} from "packages/earth/terrarium/adastra/common/blocks/pipes/$TransferablePipe$Type"
import {$PipeProperty, $PipeProperty$Type} from "packages/earth/terrarium/adastra/common/blocks/properties/$PipeProperty"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $PipeDuctBlock extends $PipeBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTED_UP": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_DOWN": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_NORTH": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_EAST": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_SOUTH": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_WEST": $EnumProperty<($PipeProperty)>
static readonly "DIRECTION_TO_CONNECTION": $EnumMap<($Direction), ($EnumProperty<($PipeProperty)>)>
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

constructor(transferRate: long, type: $TransferablePipe$Type$Type, properties: $BlockBehaviour$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeDuctBlock$Type = ($PipeDuctBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PipeDuctBlock_ = $PipeDuctBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/rendered/$RenderedBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RenderedBlockItem extends $BlockItem {
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

public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedBlockItem$Type = ($RenderedBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderedBlockItem_ = $RenderedBlockItem$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/$CustomPlayerDataHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"

export interface $CustomPlayerDataHandler {

 "prometheus$edit"(arg0: $UUID$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): $DataResult<($CompoundTag)>

(arg0: $UUID$Type, arg1: $Consumer$Type<($CompoundTag$Type)>): $DataResult<($CompoundTag)>
}

export namespace $CustomPlayerDataHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPlayerDataHandler$Type = ($CustomPlayerDataHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomPlayerDataHandler_ = $CustomPlayerDataHandler$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$BotariumFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $BotariumFlowingFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(data: $FluidData$Type)

public "getData"(): $FluidData
public "getFluidType"(): $FluidType
public "getBucket"(): $Item
public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
public "getTickDelay"(level: $LevelReader$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isSame"(fluid: $Fluid$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "data"(): $FluidData
get "fluidType"(): $FluidType
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumFlowingFluid$Type = ($BotariumFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumFlowingFluid_ = $BotariumFlowingFluid$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/$ZipGunItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WrappedItemFluidContainer, $WrappedItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/impl/$WrappedItemFluidContainer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BotariumFluidItem, $BotariumFluidItem$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$BotariumFluidItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ZipGunItem extends $Item implements $BotariumFluidItem<($WrappedItemFluidContainer)> {
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

public "getCapacity"(): long
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseDuration: integer): void
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getUseAnimation"(stack: $ItemStack$Type): $UseAnim
public "consumeFuel"(player: $Player$Type, stack: $ItemStack$Type, amount: long): boolean
public "getUseDuration"(stack: $ItemStack$Type): integer
get "capacity"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZipGunItem$Type = ($ZipGunItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZipGunItem_ = $ZipGunItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/utils/$DistributionMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DistributionMode extends $Enum<($DistributionMode)> {
static readonly "SEQUENTIAL": $DistributionMode
static readonly "ROUND_ROBIN": $DistributionMode


public static "values"(): ($DistributionMode)[]
public static "valueOf"(name: string): $DistributionMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistributionMode$Type = (("round_robin") | ("sequential")) | ($DistributionMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistributionMode_ = $DistributionMode$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/$GlobeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BasicEntityBlock, $BasicEntityBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$BasicEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $GlobeBlock extends $BasicEntityBlock implements $SimpleWaterloggedBlock {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, hit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobeBlock$Type = ($GlobeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlobeBlock_ = $GlobeBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/mixins/client/$SoundEngineAccessor" {
import {$SoundInstance, $SoundInstance$Type} from "packages/net/minecraft/client/resources/sounds/$SoundInstance"
import {$ChannelAccess$ChannelHandle, $ChannelAccess$ChannelHandle$Type} from "packages/net/minecraft/client/sounds/$ChannelAccess$ChannelHandle"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SoundEngineAccessor {

 "getSoundChannels"(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>

(): $Map<($SoundInstance), ($ChannelAccess$ChannelHandle)>
}

export namespace $SoundEngineAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundEngineAccessor$Type = ($SoundEngineAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundEngineAccessor_ = $SoundEngineAccessor$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/impl/$WrappedItemFluidContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$FluidHolder, $FluidHolder$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder"
import {$FluidContainer, $FluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidSnapshot, $FluidSnapshot$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemFluidContainer, $ItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer"

export class $WrappedItemFluidContainer extends $Record implements $ItemFluidContainer, $Updatable<($ItemStack)> {

constructor(stack: $ItemStack$Type, container: $FluidContainer$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "update"(object: $ItemStack$Type): void
public "isEmpty"(): boolean
public "stack"(): $ItemStack
public "copy"(): $FluidContainer
public "getSize"(): integer
public "container"(): $FluidContainer
public "deserialize"(nbt: $CompoundTag$Type): void
public "setFluid"(slot: integer, fluid: $FluidHolder$Type): void
public "serialize"(nbt: $CompoundTag$Type): $CompoundTag
public "getFluids"(): $List<($FluidHolder)>
public "clearContent"(): void
public "createSnapshot"(): $FluidSnapshot
public "readSnapshot"(snapshot: $FluidSnapshot$Type): void
public "isFluidValid"(slot: integer, fluid: $FluidHolder$Type): boolean
public "getTankCapacity"(tankSlot: integer): long
public "getContainerItem"(): $ItemStack
public "fromContainer"(container: $FluidContainer$Type): void
public "extractFluid"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
public "insertFluid"(fluid: $FluidHolder$Type, simulate: boolean): long
public "allowsExtraction"(): boolean
public "extractFromSlot"(fluidHolder: $FluidHolder$Type, toExtract: $FluidHolder$Type, snapshot: $Runnable$Type): long
public "extractFromSlot"(slot: integer, toExtract: $FluidHolder$Type, simulate: boolean): long
public "internalInsert"(fluids: $FluidHolder$Type, simulate: boolean): long
public "internalExtract"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
public "allowsInsertion"(): boolean
public static "of"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
public static "of"(holder: $ItemStackHolder$Type): $ItemFluidContainer
public static "of"(block: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $FluidContainer
public "getContainer"(direction: $Direction$Type): $FluidContainer
public "getFirstFluid"(): $FluidHolder
public static "holdsFluid"(stack: $ItemStack$Type): boolean
public static "holdsFluid"(block: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsFluid"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public static "holdsFluid"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "tryClear"(arg0: any): void
get "empty"(): boolean
get "size"(): integer
get "fluids"(): $List<($FluidHolder)>
get "containerItem"(): $ItemStack
get "firstFluid"(): $FluidHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedItemFluidContainer$Type = ($WrappedItemFluidContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedItemFluidContainer_ = $WrappedItemFluidContainer$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/machines/$EnergizerBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $EnergizerBlock extends $MachineBlock {
static readonly "POWER": $IntegerProperty
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDrops"(blockState: $BlockState$Type, builder: $LootParams$Builder$Type): $List<($ItemStack)>
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizerBlock$Type = ($EnergizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizerBlock_ = $EnergizerBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/$WrenchItem" {
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
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WrenchItem extends $Item {
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

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchItem$Type = ($WrenchItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrenchItem_ = $WrenchItem$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidSounds" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidSounds {

constructor()

public "getSound"(name: string): $SoundEvent
public "addSound"(name: string, sound: $SoundEvent$Type): void
public "getSounds"(): $Map<(string), ($SoundEvent)>
get "sounds"(): $Map<(string), ($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSounds$Type = ($FluidSounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSounds_ = $FluidSounds$Type;
}}
declare module "packages/earth/terrarium/adastra/client/renderers/ti69/apps/$Ti69App" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $Ti69App {

 "color"(): integer
 "render"(arg0: $PoseStack$Type, arg1: $MultiBufferSource$Type, arg2: $Matrix4f$Type, arg3: $Font$Type, arg4: $ClientLevel$Type, arg5: boolean): void
 "renderIcon"(matrix4f: $Matrix4f$Type, icon: $ResourceLocation$Type, x: integer, y: integer, uOffset: integer, vOffset: integer, uWidth: integer, vHeight: integer, textureWidth: integer, textureHeight: integer): void
 "renderTime"(bufferSource: $MultiBufferSource$Type, matrix4f: $Matrix4f$Type, font: $Font$Type, level: $ClientLevel$Type): void
}

export namespace $Ti69App {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ti69App$Type = ($Ti69App);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ti69App_ = $Ti69App$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/rendered/$RenderedItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RenderedItem extends $Item {
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

public "initializeClient"(consumer: $Consumer$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderedItem$Type = ($RenderedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderedItem_ = $RenderedItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/vehicles/$RoverItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VehicleItem, $VehicleItem$Type} from "packages/earth/terrarium/adastra/common/items/vehicles/$VehicleItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RoverItem extends $VehicleItem {
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

constructor(type: $Supplier$Type<($EntityType$Type<(any)>)>, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoverItem$Type = ($RoverItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoverItem_ = $RoverItem$Type;
}}
declare module "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot" {
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"

export interface $EnergySnapshot {

 "loadSnapshot"(arg0: $EnergyContainer$Type): void

(arg0: $EnergyContainer$Type): void
}

export namespace $EnergySnapshot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergySnapshot$Type = ($EnergySnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergySnapshot_ = $EnergySnapshot$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$SpecialLanternBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $SpecialLanternBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "FACING": $DirectionProperty
static readonly "CHONK_LANTERN_SHAPE": $VoxelShape
static readonly "THICC_LANTERN_SHAPE": $VoxelShape
static readonly "DONUT_LANTERN_SHAPE_EAST": $VoxelShape
static readonly "DONUT_LANTERN_SHAPE_NORTH": $VoxelShape
static readonly "TALL_LANTERN_SHAPE": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type, shape: $VoxelShape$Type)
constructor(properties: $BlockBehaviour$Properties$Type, toEast: $VoxelShape$Type, toNorth: $VoxelShape$Type)

public "getShape"(state: $BlockState$Type): $VoxelShape
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getShape"(blockState: $BlockState$Type, blockGetter: $BlockGetter$Type, blockPos: $BlockPos$Type, collisionContext: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialLanternBlock$Type = ($SpecialLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialLanternBlock_ = $SpecialLanternBlock$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/permission/$PermissionHolder" {
import {$TriState, $TriState$Type} from "packages/com/teamresourceful/resourcefullib/common/utils/$TriState"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $PermissionHolder {

 "prometheus$hasPermission"(arg0: string): $TriState
 "prometheus$getPermissions"(): $Map<(string), ($TriState)>
 "prometheus$updatePermissions"(): void
}

export namespace $PermissionHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PermissionHolder$Type = ($PermissionHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PermissionHolder_ = $PermissionHolder$Type;
}}
declare module "packages/earth/terrarium/botarium/common/energy/impl/$WrappedItemEnergyContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnergySnapshot, $EnergySnapshot$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergySnapshot"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$EnergyContainer, $EnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/base/$EnergyContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Updatable, $Updatable$Type} from "packages/earth/terrarium/botarium/util/$Updatable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WrappedItemEnergyContainer extends $Record implements $EnergyContainer, $Updatable<($ItemStack)> {

constructor(stack: $ItemStack$Type, container: $EnergyContainer$Type)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "update"(object: $ItemStack$Type): void
public "stack"(): $ItemStack
public "container"(): $EnergyContainer
public "deserialize"(nbt: $CompoundTag$Type): void
public "serialize"(nbt: $CompoundTag$Type): $CompoundTag
public "extractEnergy"(energy: long, simulate: boolean): long
public "maxExtract"(): long
public "clearContent"(): void
public "setEnergy"(energy: long): void
public "createSnapshot"(): $EnergySnapshot
public "allowsExtraction"(): boolean
public "internalInsert"(amount: long, simulate: boolean): long
public "internalExtract"(amount: long, simulate: boolean): long
public "allowsInsertion"(): boolean
public "maxInsert"(): long
public "getMaxCapacity"(): long
public "insertEnergy"(energy: long, simulate: boolean): long
public "getStoredEnergy"(): long
public static "of"(holder: $ItemStackHolder$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(block: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public static "of"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $EnergyContainer
public "getContainer"(direction: $Direction$Type): $EnergyContainer
public "readSnapshot"(snapshot: $EnergySnapshot$Type): void
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(block: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
public static "holdsEnergy"(stack: $ItemStack$Type): boolean
public static "tryClear"(arg0: any): void
set "energy"(value: long)
get "maxCapacity"(): long
get "storedEnergy"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedItemEnergyContainer$Type = ($WrappedItemEnergyContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedItemEnergyContainer_ = $WrappedItemEnergyContainer$Type;
}}
declare module "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ChippedRecipe, $ChippedRecipe$Type} from "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ChippedRecipe$Serializer extends $Record implements $RecipeSerializer<($ChippedRecipe)> {

constructor(type: $Supplier$Type<($RecipeType$Type<($ChippedRecipe$Type)>)>, icon: $Supplier$Type<($Block$Type)>)

public "type"(): $Supplier<($RecipeType<($ChippedRecipe)>)>
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "fromJson"(id: $ResourceLocation$Type, json: $JsonObject$Type): $ChippedRecipe
public "icon"(): $Supplier<($Block)>
public "fromNetwork"(recipeId: $ResourceLocation$Type, buffer: $FriendlyByteBuf$Type): $ChippedRecipe
public "toNetwork"(buffer: $FriendlyByteBuf$Type, recipe: $ChippedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ChippedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChippedRecipe$Serializer$Type = ($ChippedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChippedRecipe$Serializer_ = $ChippedRecipe$Serializer$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/machines/$WaterPumpBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $WaterPumpBlock extends $MachineBlock {
static readonly "SHAPE_NORTH": $VoxelShape
static readonly "SHAPE_EAST": $VoxelShape
static readonly "SHAPE_SOUTH": $VoxelShape
static readonly "SHAPE_WEST": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterPumpBlock$Type = ($WaterPumpBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterPumpBlock_ = $WaterPumpBlock$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FluidSounds, $FluidSounds$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidSounds"

export interface $FluidInformation {

 "id"(): $ResourceLocation
 "overlay"(): $ResourceLocation
 "toProperties"(): $FluidProperties
 "density"(): integer
 "fallDistanceModifier"(): float
 "tickDelay"(): integer
 "slopeFindDistance"(): integer
 "flowing"(): $ResourceLocation
 "canPlace"(): boolean
 "canDrown"(): boolean
 "pathType"(): $BlockPathTypes
 "viscosity"(): integer
 "adjacentPathType"(): $BlockPathTypes
 "screenOverlay"(): $ResourceLocation
 "supportsBloating"(): boolean
 "dropOff"(): integer
 "temperature"(): integer
 "tintColor"(): integer
 "rarity"(): $Rarity
 "canHydrate"(): boolean
 "motionScale"(): double
 "canExtinguish"(): boolean
 "canSwim"(): boolean
 "canPushEntity"(): boolean
 "lightLevel"(): integer
 "still"(): $ResourceLocation
 "canConvertToSource"(): boolean
 "sounds"(): $FluidSounds
 "explosionResistance"(): float
}

export namespace $FluidInformation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidInformation$Type = ($FluidInformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidInformation_ = $FluidInformation$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/heading/$Heading" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $Heading extends $Enum<($Heading)> {
static readonly "NONE": $Heading
static readonly "AFK": $Heading
static readonly "DND": $Heading
static readonly "MUSIC": $Heading
static readonly "RECORDING": $Heading
static readonly "STREAMING": $Heading
static readonly "VALUES": $List<($Heading)>


public static "values"(): ($Heading)[]
public static "valueOf"(name: string): $Heading
public "getDisplayName"(): $Component
public "permission"(): string
public "getColor"(): integer
public static "getInitalComponent"(heading: $Heading$Type): $Component
public static "fromName"(name: string): $Heading
public static "fromCommand"(context: $CommandContext$Type<($CommandSourceStack$Type)>): $Heading
public "getU"(): integer
public "getV"(): integer
public "getTranslation"(...args: (any)[]): $Component
public "hasPermission"(player: $Player$Type): boolean
public "canBroadcast"(): boolean
public "hasIcon"(): boolean
get "displayName"(): $Component
get "color"(): integer
get "u"(): integer
get "v"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Heading$Type = (("streaming") | ("music") | ("afk") | ("recording") | ("none") | ("dnd")) | ($Heading);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Heading_ = $Heading$Type;
}}
declare module "packages/earth/terrarium/prometheus/mixin/common/accessors/$ServerPlayerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerAccessor {

 "getContainerCounter"(): integer

(): integer
}

export namespace $ServerPlayerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccessor$Type = ($ServerPlayerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerAccessor_ = $ServerPlayerAccessor$Type;
}}
declare module "packages/earth/terrarium/botarium/util/$Serializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $Serializable {

 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
}

export namespace $Serializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Serializable$Type = ($Serializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Serializable_ = $Serializable$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$BotariumSourceFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $BotariumSourceFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(data: $FluidData$Type)

public "getData"(): $FluidData
public "getFluidType"(): $FluidType
public "getBucket"(): $Item
public "isSource"(state: $FluidState$Type): boolean
public "getAmount"(state: $FluidState$Type): integer
public "getTickDelay"(level: $LevelReader$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isSame"(fluid: $Fluid$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "data"(): $FluidData
get "fluidType"(): $FluidType
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumSourceFluid$Type = ($BotariumSourceFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumSourceFluid_ = $BotariumSourceFluid$Type;
}}
declare module "packages/earth/terrarium/prometheus/mixin/common/accessors/$ServerPlayerInvoker" {
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $ServerPlayerInvoker {

 "invokeNextContainerCounter"(): void
 "invokeInitMenu"(arg0: $AbstractContainerMenu$Type): void
}

export namespace $ServerPlayerInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerInvoker$Type = ($ServerPlayerInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayerInvoker_ = $ServerPlayerInvoker$Type;
}}
declare module "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ChippedRecipe$Serializer, $ChippedRecipe$Serializer$Type} from "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe$Serializer"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ChippedRecipe extends $Record implements $Recipe<($Container)> {

constructor(serializer: $ChippedRecipe$Serializer$Type, id: $ResourceLocation$Type, group: string, tags: $List$Type<(any)>, icon: $Block$Type)

public "group"(): string
public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public "tags"(): $List<(any)>
public "serializer"(): $ChippedRecipe$Serializer
public "icon"(): $Block
public "getId"(): $ResourceLocation
public "assemble"(container: $Container$Type, registryAccess: $RegistryAccess$Type): $ItemStack
public "matches"(container: $Container$Type, level: $Level$Type): boolean
public "isSpecial"(): boolean
public "canCraftInDimensions"(i: integer, j: integer): boolean
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(registryAccess: $RegistryAccess$Type): $ItemStack
public "getResults"(stack: $ItemStack$Type): $Stream<($ItemStack)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
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
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "mod"(): string
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChippedRecipe$Type = ($ChippedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChippedRecipe_ = $ChippedRecipe$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $FluidHolder {

 "isEmpty"(): boolean
 "matches"(arg0: $FluidHolder$Type): boolean
 "is"(predicate: $Predicate$Type<($Holder$Type<($Fluid$Type)>)>): boolean
 "is"(fluid: $Holder$Type<($Fluid$Type)>): boolean
 "is"(fluid: $Fluid$Type): boolean
 "is"(tagKey: $TagKey$Type<($Fluid$Type)>): boolean
 "deserialize"(arg0: $CompoundTag$Type): void
 "setFluid"(arg0: $Fluid$Type): void
 "serialize"(): $CompoundTag
 "setAmount"(arg0: long): void
 "getFluid"(): $Fluid
 "writeToBuffer"(buffer: $FriendlyByteBuf$Type): void
 "getFluidAmount"(): long
 "copyWithAmount"(amount: long): $FluidHolder
 "getCompound"(): $CompoundTag
 "setCompound"(arg0: $CompoundTag$Type): void
 "copyHolder"(): $FluidHolder
 "getFluidHolder"(): $Holder<($Fluid)>
}

export namespace $FluidHolder {
const CODEC: $Codec<($FluidHolder)>
const NEW_CODEC: $Codec<($FluidHolder)>
function of(fluid: $Fluid$Type): $FluidHolder
function of(fluid: $Fluid$Type, amount: long): $FluidHolder
function of(fluid: $Fluid$Type, buckets: double, tag: $CompoundTag$Type): $FluidHolder
function of(fluid: $Fluid$Type, amount: long, tag: $CompoundTag$Type): $FluidHolder
function empty(): $FluidHolder
function readFromBuffer(buffer: $FriendlyByteBuf$Type): $FluidHolder
function ofMillibuckets(fluid: $Fluid$Type, millibuckets: long, tag: $CompoundTag$Type): $FluidHolder
function ofMillibuckets(fluid: $Fluid$Type, millibuckets: long): $FluidHolder
function fromCompound(tag: $CompoundTag$Type): $FluidHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidHolder$Type = ($FluidHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidHolder_ = $FluidHolder$Type;
}}
declare module "packages/earth/terrarium/cadmus/common/util/$LastMessageHolder" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $LastMessageHolder {

 "cadmus$setLastMessage"(arg0: $Component$Type): void
 "cadmus$getLastMessage"(): $Component
}

export namespace $LastMessageHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LastMessageHolder$Type = ($LastMessageHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LastMessageHolder_ = $LastMessageHolder$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BasicEntityBlock, $BasicEntityBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$BasicEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MachineBlock extends $BasicEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "getStateForPlacement"(ctx: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, moved: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$Type): boolean
public "mirror"(state: $BlockState$Type, mirror: $Mirror$Type): $BlockState
public "rotate"(state: $BlockState$Type, rotation: $Rotation$Type): $BlockState
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBlock$Type = ($MachineBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineBlock_ = $MachineBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/armor/$JetSuitItem" {
import {$WrappedItemEnergyContainer, $WrappedItemEnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/impl/$WrappedItemEnergyContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BotariumEnergyItem, $BotariumEnergyItem$Type} from "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyItem"
import {$SpaceSuitItem, $SpaceSuitItem$Type} from "packages/earth/terrarium/adastra/common/items/armor/$SpaceSuitItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JetSuitItem extends $SpaceSuitItem implements $BotariumEnergyItem<($WrappedItemEnergyContainer)> {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(material: $ArmorMaterial$Type, type: $ArmorItem$Type$Type, tankSize: integer, energy: integer, properties: $Item$Properties$Type)

public "canElytraFly"(stack: $ItemStack$Type, entity: $LivingEntity$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "spawnParticles"(level: $Level$Type, entity: $LivingEntity$Type, model: $HumanoidModel$Type<(any)>, stack: $ItemStack$Type): void
public "elytraFlightTick"(stack: $ItemStack$Type, entity: $LivingEntity$Type, flightTicks: integer): boolean
public static "sigmoidAcceleration"(t: double, peakTime: double, peakAcceleration: double, initialAcceleration: double): double
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JetSuitItem$Type = ($JetSuitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JetSuitItem_ = $JetSuitItem$Type;
}}
declare module "packages/earth/terrarium/adastra/mixins/client/$SoundManagerAccessor" {
import {$SoundEngine, $SoundEngine$Type} from "packages/net/minecraft/client/sounds/$SoundEngine"

export interface $SoundManagerAccessor {

 "getEngine"(): $SoundEngine

(): $SoundEngine
}

export namespace $SoundManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundManagerAccessor$Type = ($SoundManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundManagerAccessor_ = $SoundManagerAccessor$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/$EtrionicCapacitorItem" {
import {$WrappedItemEnergyContainer, $WrappedItemEnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/impl/$WrappedItemEnergyContainer"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DistributionMode, $DistributionMode$Type} from "packages/earth/terrarium/adastra/common/utils/$DistributionMode"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BotariumEnergyItem, $BotariumEnergyItem$Type} from "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyItem"

export class $EtrionicCapacitorItem extends $Item implements $BotariumEnergyItem<($WrappedItemEnergyContainer)> {
static readonly "ACTIVE_TAG": string
static readonly "MODE_TAG": string
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

public static "mode"(stack: $ItemStack$Type): $DistributionMode
public static "active"(stack: $ItemStack$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "distributeRoundRobin"(from: $ItemStackHolder$Type, maxExtract: long, inventory: $Inventory$Type): void
public "shouldCauseReequipAnimation"(oldStack: $ItemStack$Type, newStack: $ItemStack$Type, slotChanged: boolean): boolean
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public "getEnergyStorage"(holder: $ItemStack$Type): $WrappedItemEnergyContainer
public "distributeSequential"(from: $ItemStackHolder$Type, maxExtract: long, inventory: $Inventory$Type): void
public static "toggleActive"(stack: $ItemStack$Type): boolean
public static "toggleMode"(stack: $ItemStack$Type): $DistributionMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtrionicCapacitorItem$Type = ($EtrionicCapacitorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtrionicCapacitorItem_ = $EtrionicCapacitorItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/machines/$EtrionicBlastFurnaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $EtrionicBlastFurnaceBlock extends $MachineBlock {
static readonly "BOTTOM_NORTH_SHAPE": $VoxelShape
static readonly "BOTTOM_EAST_SHAPE": $VoxelShape
static readonly "BOTTOM_SOUTH_SHAPE": $VoxelShape
static readonly "BOTTOM_WEST_SHAPE": $VoxelShape
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EtrionicBlastFurnaceBlock$Type = ($EtrionicBlastFurnaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EtrionicBlastFurnaceBlock_ = $EtrionicBlastFurnaceBlock$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Clearable, $Clearable$Type} from "packages/net/minecraft/world/$Clearable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$FluidHolder, $FluidHolder$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidSnapshot, $FluidSnapshot$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot"
import {$Serializable, $Serializable$Type} from "packages/earth/terrarium/botarium/util/$Serializable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemFluidContainer, $ItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer"

export interface $FluidContainer extends $Serializable, $Clearable {

 "isEmpty"(): boolean
 "copy"(): $FluidContainer
 "getSize"(): integer
 "setFluid"(arg0: integer, arg1: $FluidHolder$Type): void
 "getContainer"(direction: $Direction$Type): $FluidContainer
 "getFluids"(): $List<($FluidHolder)>
 "createSnapshot"(): $FluidSnapshot
 "readSnapshot"(snapshot: $FluidSnapshot$Type): void
 "isFluidValid"(slot: integer, fluid: $FluidHolder$Type): boolean
 "getTankCapacity"(arg0: integer): long
 "fromContainer"(arg0: $FluidContainer$Type): void
 "getFirstFluid"(): $FluidHolder
 "extractFluid"(arg0: $FluidHolder$Type, arg1: boolean): $FluidHolder
 "insertFluid"(arg0: $FluidHolder$Type, arg1: boolean): long
 "allowsExtraction"(): boolean
 "extractFromSlot"(slot: integer, toExtract: $FluidHolder$Type, simulate: boolean): long
 "extractFromSlot"(arg0: $FluidHolder$Type, arg1: $FluidHolder$Type, arg2: $Runnable$Type): long
 "internalInsert"(fluids: $FluidHolder$Type, simulate: boolean): long
 "internalExtract"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
 "allowsInsertion"(): boolean
 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "clearContent"(): void
}

export namespace $FluidContainer {
function of(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(holder: $ItemStackHolder$Type): $ItemFluidContainer
function of(block: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $FluidContainer
function holdsFluid(stack: $ItemStack$Type): boolean
function holdsFluid(block: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainer$Type = ($FluidContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidContainer_ = $FluidContainer$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/cooldowns/$CooldownHook" {
import {$Duration, $Duration$Type} from "packages/java/time/$Duration"

export interface $CooldownHook {

 "prometheus$getCooldown"(arg0: string): long
 "prometheus$hasCooldown"(arg0: string): boolean
 "prometheus$setCooldown"(arg0: string, arg1: $Duration$Type): void
}

export namespace $CooldownHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CooldownHook$Type = ($CooldownHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CooldownHook_ = $CooldownHook$Type;
}}
declare module "packages/earth/terrarium/adastra/common/entities/multipart/$MultipartPartsHolder" {
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $MultipartPartsHolder {

 "adastra$getParts"(): $Int2ObjectMap<($Entity)>

(): $Int2ObjectMap<($Entity)>
}

export namespace $MultipartPartsHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipartPartsHolder$Type = ($MultipartPartsHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipartPartsHolder_ = $MultipartPartsHolder$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/base/$BasicEntityBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BasicEntityBlock extends $BaseEntityBlock {
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

constructor(properties: $BlockBehaviour$Properties$Type, shouldTick: boolean)

public "entity"(state: $BlockState$Type): $BlockEntityType<(any)>
public static "preventCreativeDropFromBottomPart"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getTicker"<T extends $BlockEntity>(level: $Level$Type, state: $BlockState$Type, type: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "onRemove"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, newState: $BlockState$Type, moved: boolean): void
public "newBlockEntity"(pos: $BlockPos$Type, state: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicEntityBlock$Type = ($BasicEntityBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicEntityBlock_ = $BasicEntityBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/vehicles/$RocketItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VehicleItem, $VehicleItem$Type} from "packages/earth/terrarium/adastra/common/items/vehicles/$VehicleItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RocketItem extends $VehicleItem {
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

constructor(type: $Supplier$Type<($EntityType$Type<(any)>)>, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "useOn"(context: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RocketItem$Type = ($RocketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RocketItem_ = $RocketItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/$FlagBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$EightDirectionProperty, $EightDirectionProperty$Type} from "packages/earth/terrarium/adastra/common/blocks/properties/$EightDirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BasicEntityBlock, $BasicEntityBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$BasicEntityBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FlagBlock extends $BasicEntityBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $EightDirectionProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getSeed"(state: $BlockState$Type, pos: $BlockPos$Type): long
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlagBlock$Type = ($FlagBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlagBlock_ = $FlagBlock$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties" {
import {$FluidProperties$Builder, $FluidProperties$Builder$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties$Builder"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$FluidInformation, $FluidInformation$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FluidSounds, $FluidSounds$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidSounds"

export class $FluidProperties extends $Record implements $FluidInformation {

constructor(id: $ResourceLocation$Type, motionScale: double, canPushEntity: boolean, canSwim: boolean, canDrown: boolean, fallDistanceModifier: float, canExtinguish: boolean, canConvertToSource: boolean, supportsBloating: boolean, pathType: $BlockPathTypes$Type, adjacentPathType: $BlockPathTypes$Type, canHydrate: boolean, lightLevel: integer, density: integer, temperature: integer, viscosity: integer, rarity: $Rarity$Type, sounds: $FluidSounds$Type, still: $ResourceLocation$Type, flowing: $ResourceLocation$Type, overlay: $ResourceLocation$Type, screenOverlay: $ResourceLocation$Type, tintColor: integer, tickDelay: integer, slopeFindDistance: integer, dropOff: integer, explosionResistance: float, canPlace: boolean)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "id"(): $ResourceLocation
public static "create"(): $FluidProperties$Builder
public "overlay"(): $ResourceLocation
public "toProperties"(): $FluidProperties
public "density"(): integer
public "fallDistanceModifier"(): float
public "tickDelay"(): integer
public "slopeFindDistance"(): integer
public "flowing"(): $ResourceLocation
public "canPlace"(): boolean
public "canDrown"(): boolean
public "pathType"(): $BlockPathTypes
public "viscosity"(): integer
public "adjacentPathType"(): $BlockPathTypes
public "screenOverlay"(): $ResourceLocation
public "supportsBloating"(): boolean
public "dropOff"(): integer
public "temperature"(): integer
public "tintColor"(): integer
public "rarity"(): $Rarity
public "canHydrate"(): boolean
public "motionScale"(): double
public "canExtinguish"(): boolean
public "canSwim"(): boolean
public "canPushEntity"(): boolean
public "lightLevel"(): integer
public "still"(): $ResourceLocation
public "canConvertToSource"(): boolean
public "sounds"(): $FluidSounds
public "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$Type = ($FluidProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties_ = $FluidProperties$Type;
}}
declare module "packages/earth/terrarium/botarium/common/item/$ItemStackHolder" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackHolder {

constructor(stack: $ItemStack$Type)

public "copy"(): $ItemStackHolder
public "getStack"(): $ItemStack
public "isDirty"(): boolean
public "setStack"(stack: $ItemStack$Type): void
get "stack"(): $ItemStack
get "dirty"(): boolean
set "stack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHolder$Type = ($ItemStackHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHolder_ = $ItemStackHolder$Type;
}}
declare module "packages/earth/terrarium/prometheus/mixin/common/accessors/$PlayerListAccessor" {
import {$PlayerDataStorage, $PlayerDataStorage$Type} from "packages/net/minecraft/world/level/storage/$PlayerDataStorage"

export interface $PlayerListAccessor {

 "getPlayerIo"(): $PlayerDataStorage

(): $PlayerDataStorage
}

export namespace $PlayerListAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerListAccessor$Type = ($PlayerListAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerListAccessor_ = $PlayerListAccessor$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/fluids/$CryoFuelLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BotariumLiquidBlock, $BotariumLiquidBlock$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$BotariumLiquidBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $CryoFuelLiquidBlock extends $BotariumLiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(data: $FluidData$Type, properties: $BlockBehaviour$Properties$Type)

public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, block: $Block$Type, fromPos: $BlockPos$Type, isMoving: boolean): void
public "onPlace"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, oldState: $BlockState$Type, isMoving: boolean): void
public "entityInside"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, entity: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CryoFuelLiquidBlock$Type = ($CryoFuelLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CryoFuelLiquidBlock_ = $CryoFuelLiquidBlock$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$WorkbenchBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/teamresourceful/resourcefullib/common/registry/$RegistryEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ChippedRecipe, $ChippedRecipe$Type} from "packages/earth/terrarium/chipped/common/recipes/$ChippedRecipe"
import {$WorkbenchBlock$WorkbenchModelType, $WorkbenchBlock$WorkbenchModelType$Type} from "packages/earth/terrarium/chipped/common/blocks/$WorkbenchBlock$WorkbenchModelType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $WorkbenchBlock extends $HorizontalDirectionalBlock {
static readonly "MODEL_TYPE": $EnumProperty<($WorkbenchBlock$WorkbenchModelType)>
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

constructor(recipeType: $RegistryEntry$Type<($RecipeType$Type<($ChippedRecipe$Type)>)>, properties: $BlockBehaviour$Properties$Type)

/**
 * 
 * @deprecated
 */
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, handIn: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "recipeType"(): $RecipeType<($ChippedRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlock$Type = ($WorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlock_ = $WorkbenchBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/machines/$DetectorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DetectorBlock$DetectionType, $DetectorBlock$DetectionType$Type} from "packages/earth/terrarium/adastra/common/blocks/machines/$DetectorBlock$DetectionType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Wrenchable, $Wrenchable$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$Wrenchable"
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $DetectorBlock extends $MachineBlock implements $Wrenchable {
static readonly "INVERTED": $BooleanProperty
static readonly "DETECTION_TYPE": $EnumProperty<($DetectorBlock$DetectionType)>
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "isSignalSource"(state: $BlockState$Type): boolean
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getDirectSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "getSignal"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, direction: $Direction$Type): integer
public "onWrench"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, user: $Player$Type, hitPos: $Vec3$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$Type = ($DetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock_ = $DetectorBlock$Type;
}}
declare module "packages/earth/terrarium/prometheus/mixin/client/accessors/$FontManagerAccessor" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FontSet, $FontSet$Type} from "packages/net/minecraft/client/gui/font/$FontSet"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $FontManagerAccessor {

 "getFontSets"(): $Map<($ResourceLocation), ($FontSet)>

(): $Map<($ResourceLocation), ($FontSet)>
}

export namespace $FontManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontManagerAccessor$Type = ($FontManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FontManagerAccessor_ = $FontManagerAccessor$Type;
}}
declare module "packages/earth/terrarium/botarium/forge/regsitry/fluid/$BotariumFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidInformation, $FluidInformation$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $BotariumFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>


/**
 * 
 * @deprecated
 */
public static "of"(fluidProperties: $FluidProperties$Type): $BotariumFluidType
public static "create"(information: $FluidInformation$Type): $BotariumFluidType
public "initializeClient"(consumer: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumFluidType$Type = ($BotariumFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumFluidType_ = $BotariumFluidType$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$SpecialPointedDripstoneBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Fallable, $Fallable$Type} from "packages/net/minecraft/world/level/block/$Fallable"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockBehaviour$OffsetType, $BlockBehaviour$OffsetType$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DripstoneThickness, $DripstoneThickness$Type} from "packages/net/minecraft/world/level/block/state/properties/$DripstoneThickness"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $SpecialPointedDripstoneBlock extends $Block implements $Fallable, $SimpleWaterloggedBlock {
static readonly "TIP_DIRECTION": $DirectionProperty
static readonly "THICKNESS": $EnumProperty<($DripstoneThickness)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "tick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $Random$Type): void
public "fallOn"(level: $Level$Type, state: $BlockState$Type, pos: $BlockPos$Type, entity: $Entity$Type, fallDistance: float): void
public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, currentPos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getMaxHorizontalOffset"(): float
public "getOcclusionShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): $VoxelShape
public "isCollisionShapeFullBlock"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "onProjectileHit"(level: $Level$Type, state: $BlockState$Type, hit: $BlockHitResult$Type, projectile: $Projectile$Type): void
public "onBrokenAfterFall"(level: $Level$Type, pos: $BlockPos$Type, fallingBlock: $FallingBlockEntity$Type): void
public "animateTick"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, random: $Random$Type): void
public "randomTick"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $Random$Type): void
public "getPistonPushReaction"(state: $BlockState$Type): $PushReaction
public static "canDrip"(state: $BlockState$Type): boolean
public static "growStalactiteOrStalagmiteIfPossible"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, random: $Random$Type): void
public static "getCauldronFillFluidType"(level: $Level$Type, pos: $BlockPos$Type): $Fluid
public "getHurtsEntitySelector"(): $Predicate<($Entity)>
public "getOffsetType"(): $BlockBehaviour$OffsetType
public static "maybeFillCauldron"(state: $BlockState$Type, level: $ServerLevel$Type, pos: $BlockPos$Type, randChance: float): void
public "getFallDamageSource"(arg0: $Entity$Type): $DamageSource
public "onLand"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $FallingBlockEntity$Type): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "maxHorizontalOffset"(): float
get "hurtsEntitySelector"(): $Predicate<($Entity)>
get "offsetType"(): $BlockBehaviour$OffsetType
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialPointedDripstoneBlock$Type = ($SpecialPointedDripstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialPointedDripstoneBlock_ = $SpecialPointedDripstoneBlock$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot" {
import {$FluidContainer, $FluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer"

export interface $FluidSnapshot {

 "loadSnapshot"(arg0: $FluidContainer$Type): void

(arg0: $FluidContainer$Type): void
}

export namespace $FluidSnapshot {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSnapshot$Type = ($FluidSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidSnapshot_ = $FluidSnapshot$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/lamps/$SmallIndustrialLampBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IndustrialLampBlock, $IndustrialLampBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/lamps/$IndustrialLampBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SmallIndustrialLampBlock extends $IndustrialLampBlock {
static readonly "NORTH_SHAPE": $VoxelShape
static readonly "EAST_SHAPE": $VoxelShape
static readonly "SOUTH_SHAPE": $VoxelShape
static readonly "WEST_SHAPE": $VoxelShape
static readonly "UP_SHAPE": $VoxelShape
static readonly "DOWN_SHAPE": $VoxelShape
static readonly "UP_SHAPE_X": $VoxelShape
static readonly "UP_SHAPE_Z": $VoxelShape
static readonly "DOWN_SHAPE_X": $VoxelShape
static readonly "DOWN_SHAPE_Z": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallIndustrialLampBlock$Type = ($SmallIndustrialLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallIndustrialLampBlock_ = $SmallIndustrialLampBlock$Type;
}}
declare module "packages/earth/terrarium/prometheus/client/utils/$ClientListenerHook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Heading, $Heading$Type} from "packages/earth/terrarium/prometheus/common/handlers/heading/$Heading"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ClientListenerHook {

 "prometheus$setHeadingText"(arg0: $UUID$Type, arg1: $Component$Type): void
 "prometheus$setHeading"(arg0: $UUID$Type, arg1: $Heading$Type): void
 "prometheus$getHeadings"(): $Map<($UUID), ($Heading)>
 "prometheus$getHeadingTexts"(): $Map<($UUID), ($Component)>
}

export namespace $ClientListenerHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientListenerHook$Type = ($ClientListenerHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientListenerHook_ = $ClientListenerHook$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/$TooltipBlockItem" {
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

export class $TooltipBlockItem extends $BlockItem {
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

constructor(block: $Block$Type, description: $Component$Type, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipBlockItem$Type = ($TooltipBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipBlockItem_ = $TooltipBlockItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/properties/$LaunchPadPartProperty" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $LaunchPadPartProperty extends $Enum<($LaunchPadPartProperty)> implements $StringRepresentable {
static readonly "TOP_LEFT": $LaunchPadPartProperty
static readonly "TOP": $LaunchPadPartProperty
static readonly "TOP_RIGHT": $LaunchPadPartProperty
static readonly "LEFT": $LaunchPadPartProperty
static readonly "CENTER": $LaunchPadPartProperty
static readonly "RIGHT": $LaunchPadPartProperty
static readonly "BOTTOM_LEFT": $LaunchPadPartProperty
static readonly "BOTTOM": $LaunchPadPartProperty
static readonly "BOTTOM_RIGHT": $LaunchPadPartProperty


public "toString"(): string
public static "values"(): ($LaunchPadPartProperty)[]
public static "valueOf"(name: string): $LaunchPadPartProperty
public "yOffset"(): integer
public "isController"(): boolean
public "getSerializedName"(): string
public "xOffset"(): integer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "controller"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaunchPadPartProperty$Type = (("top_right") | ("top") | ("left") | ("bottom") | ("center") | ("top_left") | ("bottom_right") | ("right") | ("bottom_left")) | ($LaunchPadPartProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaunchPadPartProperty_ = $LaunchPadPartProperty$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/properties/$SlidingDoorPartProperty" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $SlidingDoorPartProperty extends $Enum<($SlidingDoorPartProperty)> implements $StringRepresentable {
static readonly "TOP_LEFT": $SlidingDoorPartProperty
static readonly "TOP": $SlidingDoorPartProperty
static readonly "TOP_RIGHT": $SlidingDoorPartProperty
static readonly "LEFT": $SlidingDoorPartProperty
static readonly "CENTER": $SlidingDoorPartProperty
static readonly "RIGHT": $SlidingDoorPartProperty
static readonly "BOTTOM_LEFT": $SlidingDoorPartProperty
static readonly "BOTTOM": $SlidingDoorPartProperty
static readonly "BOTTOM_RIGHT": $SlidingDoorPartProperty


public "toString"(): string
public static "values"(): ($SlidingDoorPartProperty)[]
public static "valueOf"(name: string): $SlidingDoorPartProperty
public "yOffset"(): integer
public "isController"(): boolean
public "getSerializedName"(): string
public "xOffset"(): integer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "controller"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlidingDoorPartProperty$Type = (("top_right") | ("top") | ("left") | ("bottom") | ("center") | ("top_left") | ("bottom_right") | ("right") | ("bottom_left")) | ($SlidingDoorPartProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlidingDoorPartProperty_ = $SlidingDoorPartProperty$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/rendered/$TooltipRenderedBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$TooltipBlockItem, $TooltipBlockItem$Type} from "packages/earth/terrarium/adastra/common/items/$TooltipBlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TooltipRenderedBlockItem extends $TooltipBlockItem {
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

constructor(block: $Block$Type, description: $Component$Type, properties: $Item$Properties$Type)

public "initializeClient"(consumer: $Consumer$Type<(any)>): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipRenderedBlockItem$Type = ($TooltipRenderedBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TooltipRenderedBlockItem_ = $TooltipRenderedBlockItem$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$BotariumLiquidBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"

export class $BotariumLiquidBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
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

constructor(data: $FluidData$Type, properties: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BotariumLiquidBlock$Type = ($BotariumLiquidBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BotariumLiquidBlock_ = $BotariumLiquidBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/vehicles/$VehicleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WrappedItemFluidContainer, $WrappedItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/impl/$WrappedItemFluidContainer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$RenderedItem, $RenderedItem$Type} from "packages/earth/terrarium/adastra/common/items/rendered/$RenderedItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BotariumFluidItem, $BotariumFluidItem$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$BotariumFluidItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VehicleItem extends $RenderedItem implements $BotariumFluidItem<($WrappedItemFluidContainer)> {
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

constructor(type: $Supplier$Type<($EntityType$Type<(any)>)>, properties: $Item$Properties$Type)

public "type"(): $EntityType<(any)>
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VehicleItem$Type = ($VehicleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VehicleItem_ = $VehicleItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/armor/$NetheriteSpaceSuitItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SpaceSuitItem, $SpaceSuitItem$Type} from "packages/earth/terrarium/adastra/common/items/armor/$SpaceSuitItem"

export class $NetheriteSpaceSuitItem extends $SpaceSuitItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(material: $ArmorMaterial$Type, type: $ArmorItem$Type$Type, tankSize: long, properties: $Item$Properties$Type)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteSpaceSuitItem$Type = ($NetheriteSpaceSuitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteSpaceSuitItem_ = $NetheriteSpaceSuitItem$Type;
}}
declare module "packages/earth/terrarium/adastra/client/screens/base/$AbstractContainerScreenExtension" {
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $AbstractContainerScreenExtension {

 "adastra$renderPreSlot"(graphics: $GuiGraphics$Type, slot: $Slot$Type): void
}

export namespace $AbstractContainerScreenExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerScreenExtension$Type = ($AbstractContainerScreenExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractContainerScreenExtension_ = $AbstractContainerScreenExtension$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/lamps/$IndustrialLampBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$FaceAttachedHorizontalDirectionalBlock, $FaceAttachedHorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$FaceAttachedHorizontalDirectionalBlock"

export class $IndustrialLampBlock extends $FaceAttachedHorizontalDirectionalBlock {
static readonly "NORTH_SHAPE": $VoxelShape
static readonly "EAST_SHAPE": $VoxelShape
static readonly "SOUTH_SHAPE": $VoxelShape
static readonly "WEST_SHAPE": $VoxelShape
static readonly "UP_SHAPE_X": $VoxelShape
static readonly "UP_SHAPE_Z": $VoxelShape
static readonly "DOWN_SHAPE_X": $VoxelShape
static readonly "DOWN_SHAPE_Z": $VoxelShape
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "isPathfindable"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, type: $PathComputationType$Type): boolean
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialLampBlock$Type = ($IndustrialLampBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IndustrialLampBlock_ = $IndustrialLampBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/mixins/common/$LivingEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingEntityAccessor {

 "isJumping"(): boolean

(): boolean
}

export namespace $LivingEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$Type = ($LivingEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityAccessor_ = $LivingEntityAccessor$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/$RadioBlock" {
import {$EightDirectionProperty, $EightDirectionProperty$Type} from "packages/earth/terrarium/adastra/common/blocks/properties/$EightDirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BasicEntityBlock, $BasicEntityBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$BasicEntityBlock"
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

export class $RadioBlock extends $BasicEntityBlock {
static readonly "FACING": $EightDirectionProperty
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
public "use"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, player: $Player$Type, hand: $InteractionHand$Type, hit: $BlockHitResult$Type): $InteractionResult
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RadioBlock$Type = ($RadioBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RadioBlock_ = $RadioBlock$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/nickname/$NickedEntityHook" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"

export interface $NickedEntityHook {

 "prometheus$setNickname"(arg0: $Component$Type): void
 "prometheus$getNickname"(): $Component
}

export namespace $NickedEntityHook {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NickedEntityHook$Type = ($NickedEntityHook);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NickedEntityHook_ = $NickedEntityHook$Type;
}}
declare module "packages/earth/terrarium/cadmus/mixins/common/$GameRulesAccessor" {
import {$GameRules$Value, $GameRules$Value$Type} from "packages/net/minecraft/world/level/$GameRules$Value"
import {$GameRules$Key, $GameRules$Key$Type} from "packages/net/minecraft/world/level/$GameRules$Key"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $GameRulesAccessor {

 "rules"(): $Map<($GameRules$Key<(any)>), ($GameRules$Value<(any)>)>
 "setRules"(arg0: $Map$Type<($GameRules$Key$Type<(any)>), ($GameRules$Value$Type<(any)>)>): void
}

export namespace $GameRulesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesAccessor$Type = ($GameRulesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesAccessor_ = $GameRulesAccessor$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidBucketItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$FluidData, $FluidData$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidBucketItem extends $BucketItem {
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

constructor(data: $FluidData$Type, properties: $Item$Properties$Type)

public "getData"(): $FluidData
public "use"(level: $Level$Type, player: $Player$Type, hand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(stack: $ItemStack$Type, nbt: $CompoundTag$Type): $ICapabilityProvider
get "data"(): $FluidData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBucketItem$Type = ($FluidBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBucketItem_ = $FluidBucketItem$Type;
}}
declare module "packages/earth/terrarium/cadmus/mixins/forge/common/$GameRulesBooleanValueInvoker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesBooleanValueInvoker {

}

export namespace $GameRulesBooleanValueInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesBooleanValueInvoker$Type = ($GameRulesBooleanValueInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesBooleanValueInvoker_ = $GameRulesBooleanValueInvoker$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/armor/$SpaceSuitItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$WrappedItemFluidContainer, $WrappedItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/impl/$WrappedItemFluidContainer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CustomDyeableArmorItem, $CustomDyeableArmorItem$Type} from "packages/earth/terrarium/adastra/common/items/armor/base/$CustomDyeableArmorItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$BotariumFluidItem, $BotariumFluidItem$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$BotariumFluidItem"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpaceSuitItem extends $CustomDyeableArmorItem implements $BotariumFluidItem<($WrappedItemFluidContainer)> {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(material: $ArmorMaterial$Type, type: $ArmorItem$Type$Type, tankSize: long, properties: $Item$Properties$Type)

public static "hasOxygen"(entity: $Entity$Type): boolean
public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "inventoryTick"(stack: $ItemStack$Type, level: $Level$Type, entity: $Entity$Type, slotId: integer, isSelected: boolean): void
public static "hasFullNetheriteSet"(entity: $LivingEntity$Type): boolean
public static "hasFullSet"(entity: $LivingEntity$Type): boolean
public static "hasFullSet"(entity: $LivingEntity$Type, spaceSuitTag: $TagKey$Type<($Item$Type)>): boolean
public "consumeOxygen"(stack: $ItemStack$Type, amount: long): void
public static "hasFullJetSuitSet"(entity: $LivingEntity$Type): boolean
public static "getOxygenAmount"(entity: $Entity$Type): long
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpaceSuitItem$Type = ($SpaceSuitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpaceSuitItem_ = $SpaceSuitItem$Type;
}}
declare module "packages/earth/terrarium/prometheus/common/handlers/role/$Role" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$RoleOption, $RoleOption$Type} from "packages/earth/terrarium/prometheus/api/roles/options/$RoleOption"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TriState, $TriState$Type} from "packages/com/teamresourceful/resourcefullib/common/utils/$TriState"
import {$RoleOptionSerializer, $RoleOptionSerializer$Type} from "packages/earth/terrarium/prometheus/api/roles/options/$RoleOptionSerializer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Role extends $Record {
static readonly "CODEC": $Codec<($Role)>

constructor()
constructor(permissions: $Map$Type<(string), ($TriState$Type)>, options: $Map$Type<($ResourceLocation$Type), ($RoleOption$Type<(any)>)>)

public "equals"(o: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "permissions"(): $Map<(string), ($TriState)>
public "options"(): $Map<($ResourceLocation), ($RoleOption<(any)>)>
public "setPermissions"(permissions: $Map$Type<(string), ($TriState$Type)>): void
public "getOption"<T extends $RoleOption<(T)>>(serializer: $RoleOptionSerializer$Type<(T)>): T
public "setData"(data: $RoleOption$Type<(any)>): void
public "getNonNullOption"<T extends $RoleOption<(T)>>(serializer: $RoleOptionSerializer$Type<(T)>): T
public static "fromBuffer"(buffer: $FriendlyByteBuf$Type): $Role
public "toBuffer"(buffer: $FriendlyByteBuf$Type): void
public "toTag"(): $CompoundTag
public static "fromTag"(tag: $CompoundTag$Type): $Role
public "getOptionalOption"<T extends $RoleOption<(T)>>(serializer: $RoleOptionSerializer$Type<(T)>): $Optional<(T)>
set "data"(value: $RoleOption$Type<(any)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Role$Type = ($Role);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Role_ = $Role$Type;
}}
declare module "packages/earth/terrarium/prometheus/api/roles/options/$RoleOption" {
import {$RoleOptionSerializer, $RoleOptionSerializer$Type} from "packages/earth/terrarium/prometheus/api/roles/options/$RoleOptionSerializer"

export interface $RoleOption<T extends $RoleOption<(T)>> {

 "serializer"(): $RoleOptionSerializer<(T)>

(): $RoleOptionSerializer<(T)>
}

export namespace $RoleOption {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoleOption$Type<T> = ($RoleOption<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoleOption_<T> = $RoleOption$Type<(T)>;
}}
declare module "packages/earth/terrarium/adastra/common/world/carver/$CraterWorldCarver" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CaveCarverConfiguration, $CaveCarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CaveCarverConfiguration"
import {$CarverConfiguration, $CarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CarverConfiguration"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$CarvingMask, $CarvingMask$Type} from "packages/net/minecraft/world/level/chunk/$CarvingMask"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$WorldCarver, $WorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$WorldCarver"
import {$CanyonCarverConfiguration, $CanyonCarverConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CanyonCarverConfiguration"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Aquifer, $Aquifer$Type} from "packages/net/minecraft/world/level/levelgen/$Aquifer"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$CarvingContext, $CarvingContext$Type} from "packages/net/minecraft/world/level/levelgen/carver/$CarvingContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CraterWorldCarver extends $WorldCarver<($CarverConfiguration)> {
static readonly "CAVE": $WorldCarver<($CaveCarverConfiguration)>
static readonly "NETHER_CAVE": $WorldCarver<($CaveCarverConfiguration)>
static readonly "CANYON": $WorldCarver<($CanyonCarverConfiguration)>
static readonly "AIR": $BlockState
static readonly "CAVE_AIR": $BlockState
static readonly "WATER": $FluidState
static readonly "LAVA": $FluidState
 "liquids": $Set<($Fluid)>

constructor(codec: $Codec$Type<($CarverConfiguration$Type)>)

public "isStartChunk"(config: $CarverConfiguration$Type, random: $RandomSource$Type): boolean
public "carve"(context: $CarvingContext$Type, config: $CarverConfiguration$Type, chunk: $ChunkAccess$Type, biomeAccessor: $Function$Type<($BlockPos$Type), ($Holder$Type<($Biome$Type)>)>, random: $RandomSource$Type, aquifer: $Aquifer$Type, chunkPos: $ChunkPos$Type, carvingMask: $CarvingMask$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraterWorldCarver$Type = ($CraterWorldCarver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraterWorldCarver_ = $CraterWorldCarver$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/machines/$DetectorBlock$DetectionType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DetectorBlock$DetectionType extends $Enum<($DetectorBlock$DetectionType)> implements $StringRepresentable {
static readonly "OXYGEN": $DetectorBlock$DetectionType
static readonly "GRAVITY": $DetectorBlock$DetectionType
static readonly "TEMPERATURE": $DetectorBlock$DetectionType


public static "values"(): ($DetectorBlock$DetectionType)[]
public static "valueOf"(name: string): $DetectorBlock$DetectionType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DetectorBlock$DetectionType$Type = (("gravity") | ("temperature") | ("oxygen")) | ($DetectorBlock$DetectionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DetectorBlock$DetectionType_ = $DetectorBlock$DetectionType$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$DirectionBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DirectionBlock extends $HorizontalDirectionalBlock {
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

public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionBlock$Type = ($DirectionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionBlock_ = $DirectionBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/$GasTankItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$WrappedItemFluidContainer, $WrappedItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/impl/$WrappedItemFluidContainer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FluidHolder, $FluidHolder$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BotariumFluidItem, $BotariumFluidItem$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$BotariumFluidItem"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GasTankItem extends $Item implements $BotariumFluidItem<($WrappedItemFluidContainer)> {
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

constructor(properties: $Item$Properties$Type, tankSize: long, distributionAmount: long)

public "appendHoverText"(stack: $ItemStack$Type, level: $Level$Type, tooltipComponents: $List$Type<($Component$Type)>, isAdvanced: $TooltipFlag$Type): void
public "onUseTick"(level: $Level$Type, entity: $LivingEntity$Type, stack: $ItemStack$Type, remainingUseDuration: integer): void
public "use"(level: $Level$Type, player: $Player$Type, usedHand: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getUseDuration"(stack: $ItemStack$Type): integer
public "getFluidContainer"(holder: $ItemStack$Type): $WrappedItemFluidContainer
public "distributeSequential"(from: $ItemStackHolder$Type, container: $FluidHolder$Type, inventory: $Inventory$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasTankItem$Type = ($GasTankItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasTankItem_ = $GasTankItem$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidData" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FluidInformation, $FluidInformation$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidInformation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"

export interface $FluidData {

/**
 * 
 * @deprecated
 */
 "getProperties"(): $FluidProperties
 "getBlock"(): $Supplier<(any)>
 "setBlock"(arg0: $Supplier$Type<(any)>): void
 "getOptionalBlock"(): $Optional<(any)>
 "getBucket"(): $Supplier<(any)>
 "setBucket"(arg0: $Supplier$Type<(any)>): void
 "getOptionalBucket"(): $Optional<($Item)>
 "setStillFluid"(arg0: $Supplier$Type<(any)>): void
 "setFlowingFluid"(arg0: $Supplier$Type<(any)>): void
 "getInformation"(): $FluidInformation
 "getFlowingFluid"(): $Supplier<(any)>
 "getStillFluid"(): $Supplier<(any)>
 "getOptionalFlowingFluid"(): $Optional<(any)>
 "getOptionalStillFluid"(): $Optional<(any)>
}

export namespace $FluidData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidData$Type = ($FluidData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidData_ = $FluidData$Type;
}}
declare module "packages/earth/terrarium/prometheus/mixin/client/accessors/$MinecraftAccessor" {
import {$FontManager, $FontManager$Type} from "packages/net/minecraft/client/gui/font/$FontManager"

export interface $MinecraftAccessor {

 "getFontManager"(): $FontManager

(): $FontManager
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
declare module "packages/earth/terrarium/adastra/common/blocks/properties/$EightDirectionProperty" {
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$EightDirectionProperty$Direction, $EightDirectionProperty$Direction$Type} from "packages/earth/terrarium/adastra/common/blocks/properties/$EightDirectionProperty$Direction"

export class $EightDirectionProperty extends $EnumProperty<($EightDirectionProperty$Direction)> {
static readonly "FACING": $EightDirectionProperty

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EightDirectionProperty$Type = ($EightDirectionProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EightDirectionProperty_ = $EightDirectionProperty$Type;
}}
declare module "packages/earth/terrarium/prometheus/api/roles/options/$RoleOptionSerializer" {
import {$RoleOption, $RoleOption$Type} from "packages/earth/terrarium/prometheus/api/roles/options/$RoleOption"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $RoleOptionSerializer<T extends $RoleOption<(T)>> {

 "type"(): $ResourceLocation
 "version"(): integer
 "cast"(data: $RoleOption$Type<(any)>): T
 "id"(): $ResourceLocation
 "defaultValue"(): T
 "codec"(): $Codec<(T)>
}

export namespace $RoleOptionSerializer {
function of<T>(id: $ResourceLocation$Type, version: integer, codec: $Codec$Type<(T)>, defaultValue: T): $RoleOptionSerializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoleOptionSerializer$Type<T> = ($RoleOptionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoleOptionSerializer_<T> = $RoleOptionSerializer$Type<(T)>;
}}
declare module "packages/earth/terrarium/botarium/util/$Updatable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Updatable<T> {

 "update"(arg0: T): void

(arg0: T): void
}

export namespace $Updatable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Updatable$Type<T> = ($Updatable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Updatable_<T> = $Updatable$Type<(T)>;
}}
declare module "packages/earth/terrarium/adastra/common/world/features/$MarsBlockBlobFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $MarsBlockBlobFeature extends $Feature<($BlockStateConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(codec: $Codec$Type<($BlockStateConfiguration$Type)>)

public "place"(context: $FeaturePlaceContext$Type<($BlockStateConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarsBlockBlobFeature$Type = ($MarsBlockBlobFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MarsBlockBlobFeature_ = $MarsBlockBlobFeature$Type;
}}
declare module "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties$Builder" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidProperties, $FluidProperties$Type} from "packages/earth/terrarium/botarium/common/registry/fluid/$FluidProperties"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $FluidProperties$Builder {


public "build"(id: $ResourceLocation$Type): $FluidProperties
public "overlay"(overlay: $ResourceLocation$Type): $FluidProperties$Builder
public "density"(density: integer): $FluidProperties$Builder
public "fallDistanceModifier"(fallDistanceModifier: float): $FluidProperties$Builder
public "slopeFindDistance"(slopeFindDistance: integer): $FluidProperties$Builder
public "flowing"(flowing: $ResourceLocation$Type): $FluidProperties$Builder
public "canDrown"(canDrown: boolean): $FluidProperties$Builder
public "pathType"(pathType: $BlockPathTypes$Type): $FluidProperties$Builder
public "viscosity"(viscosity: integer): $FluidProperties$Builder
public "adjacentPathType"(adjacentPathType: $BlockPathTypes$Type): $FluidProperties$Builder
public "screenOverlay"(screenOverlay: $ResourceLocation$Type): $FluidProperties$Builder
public "disablePlacing"(): $FluidProperties$Builder
public "supportsBloating"(supportsBloating: boolean): $FluidProperties$Builder
public "dropOff"(dropOff: integer): $FluidProperties$Builder
public "temperature"(temperature: integer): $FluidProperties$Builder
public "tintColor"(tintColor: integer): $FluidProperties$Builder
public "rarity"(rarity: $Rarity$Type): $FluidProperties$Builder
public "canHydrate"(canHydrate: boolean): $FluidProperties$Builder
public "motionScale"(motionScale: double): $FluidProperties$Builder
public "canExtinguish"(canExtinguish: boolean): $FluidProperties$Builder
public "canSwim"(canSwim: boolean): $FluidProperties$Builder
public "canPushEntity"(canPushEntity: boolean): $FluidProperties$Builder
public "lightLevel"(lightLevel: integer): $FluidProperties$Builder
public "tickRate"(tickRate: integer): $FluidProperties$Builder
public "still"(still: $ResourceLocation$Type): $FluidProperties$Builder
public "canConvertToSource"(canConvertToSource: boolean): $FluidProperties$Builder
public "sounds"(sound: string, soundEvent: $SoundEvent$Type): $FluidProperties$Builder
public "explosionResistance"(explosionResistance: float): $FluidProperties$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidProperties$Builder$Type = ($FluidProperties$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidProperties$Builder_ = $FluidProperties$Builder$Type;
}}
declare module "packages/earth/terrarium/adastra/mixins/common/$SlotAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SlotAccessor {

 "setX"(arg0: integer): void
 "setY"(arg0: integer): void
}

export namespace $SlotAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotAccessor$Type = ($SlotAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotAccessor_ = $SlotAccessor$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/properties/$EightDirectionProperty$Direction" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"

export class $EightDirectionProperty$Direction extends $Enum<($EightDirectionProperty$Direction)> implements $StringRepresentable {
static readonly "NORTH": $EightDirectionProperty$Direction
static readonly "NORTH_EAST": $EightDirectionProperty$Direction
static readonly "EAST": $EightDirectionProperty$Direction
static readonly "SOUTH_EAST": $EightDirectionProperty$Direction
static readonly "SOUTH": $EightDirectionProperty$Direction
static readonly "SOUTH_WEST": $EightDirectionProperty$Direction
static readonly "WEST": $EightDirectionProperty$Direction
static readonly "NORTH_WEST": $EightDirectionProperty$Direction
static readonly "VALUES": ($EightDirectionProperty$Direction)[]


public "toString"(): string
public static "values"(): ($EightDirectionProperty$Direction)[]
public static "valueOf"(name: string): $EightDirectionProperty$Direction
public "rotate"(rotation: $Rotation$Type): $EightDirectionProperty$Direction
public "normal"(): $Vec3i
public "mirror"(mirror: $Mirror$Type): $EightDirectionProperty$Direction
public "getSerializedName"(): string
public "asRotation"(): integer
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EightDirectionProperty$Direction$Type = (("south_west") | ("north_east") | ("east") | ("north_west") | ("south") | ("north") | ("south_east") | ("west")) | ($EightDirectionProperty$Direction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EightDirectionProperty$Direction_ = $EightDirectionProperty$Direction$Type;
}}
declare module "packages/earth/terrarium/adastra/common/items/machines/$EnergizerBlockItem" {
import {$WrappedItemEnergyContainer, $WrappedItemEnergyContainer$Type} from "packages/earth/terrarium/botarium/common/energy/impl/$WrappedItemEnergyContainer"
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
import {$BotariumEnergyItem, $BotariumEnergyItem$Type} from "packages/earth/terrarium/botarium/common/energy/base/$BotariumEnergyItem"

export class $EnergizerBlockItem extends $BlockItem implements $BotariumEnergyItem<($WrappedItemEnergyContainer)> {
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
public "isBarVisible"(stack: $ItemStack$Type): boolean
public "getBarColor"(stack: $ItemStack$Type): integer
public "getBarWidth"(stack: $ItemStack$Type): integer
public "getEnergyStorage"(holder: $ItemStack$Type): $WrappedItemEnergyContainer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizerBlockItem$Type = ($EnergizerBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizerBlockItem_ = $EnergizerBlockItem$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/pipes/$PipeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TransferablePipe$Type, $TransferablePipe$Type$Type} from "packages/earth/terrarium/adastra/common/blocks/pipes/$TransferablePipe$Type"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Wrenchable, $Wrenchable$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$Wrenchable"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BasicEntityBlock, $BasicEntityBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$BasicEntityBlock"
import {$TransferablePipe, $TransferablePipe$Type} from "packages/earth/terrarium/adastra/common/blocks/pipes/$TransferablePipe"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$PipeProperty, $PipeProperty$Type} from "packages/earth/terrarium/adastra/common/blocks/properties/$PipeProperty"
import {$EnumMap, $EnumMap$Type} from "packages/java/util/$EnumMap"

export class $PipeBlock extends $BasicEntityBlock implements $SimpleWaterloggedBlock, $Wrenchable, $TransferablePipe {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTED_UP": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_DOWN": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_NORTH": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_EAST": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_SOUTH": $EnumProperty<($PipeProperty)>
static readonly "CONNECTED_WEST": $EnumProperty<($PipeProperty)>
static readonly "DIRECTION_TO_CONNECTION": $EnumMap<($Direction), ($EnumProperty<($PipeProperty)>)>
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

constructor(transferRate: long, type: $TransferablePipe$Type$Type, size: double, properties: $BlockBehaviour$Properties$Type)

public "type"(): $TransferablePipe$Type
public static "getConnectedDirections"(state: $BlockState$Type): ($Direction)[]
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "updateShape"(state: $BlockState$Type, direction: $Direction$Type, neighborState: $BlockState$Type, level: $LevelAccessor$Type, pos: $BlockPos$Type, neighborPos: $BlockPos$Type): $BlockState
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public static "getDirectionByVec"(hit: $Vec3$Type, pos: $BlockPos$Type): $Optional<($Direction)>
public "onWrench"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, side: $Direction$Type, user: $Player$Type, hitPos: $Vec3$Type): void
public "transferRate"(): long
public static "makeShape"(state: $BlockState$Type, size: double): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeBlock$Type = ($PipeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PipeBlock_ = $PipeBlock$Type;
}}
declare module "packages/earth/terrarium/botarium/common/fluid/base/$ItemFluidContainer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$FluidHolder, $FluidHolder$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidHolder"
import {$FluidContainer, $FluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FluidSnapshot, $FluidSnapshot$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidSnapshot"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ItemFluidContainer extends $FluidContainer {

 "getContainerItem"(): $ItemStack
 "isEmpty"(): boolean
 "copy"(): $FluidContainer
 "getSize"(): integer
 "setFluid"(arg0: integer, arg1: $FluidHolder$Type): void
 "getContainer"(direction: $Direction$Type): $FluidContainer
 "getFluids"(): $List<($FluidHolder)>
 "createSnapshot"(): $FluidSnapshot
 "readSnapshot"(snapshot: $FluidSnapshot$Type): void
 "isFluidValid"(slot: integer, fluid: $FluidHolder$Type): boolean
 "getTankCapacity"(arg0: integer): long
 "fromContainer"(arg0: $FluidContainer$Type): void
 "getFirstFluid"(): $FluidHolder
 "extractFluid"(arg0: $FluidHolder$Type, arg1: boolean): $FluidHolder
 "insertFluid"(arg0: $FluidHolder$Type, arg1: boolean): long
 "allowsExtraction"(): boolean
 "extractFromSlot"(slot: integer, toExtract: $FluidHolder$Type, simulate: boolean): long
 "extractFromSlot"(arg0: $FluidHolder$Type, arg1: $FluidHolder$Type, arg2: $Runnable$Type): long
 "internalInsert"(fluids: $FluidHolder$Type, simulate: boolean): long
 "internalExtract"(fluid: $FluidHolder$Type, simulate: boolean): $FluidHolder
 "allowsInsertion"(): boolean
 "deserialize"(arg0: $CompoundTag$Type): void
 "serialize"(arg0: $CompoundTag$Type): $CompoundTag
 "clearContent"(): void
}

export namespace $ItemFluidContainer {
function of(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(holder: $ItemStackHolder$Type): $ItemFluidContainer
function of(block: $BlockEntity$Type, direction: $Direction$Type): $FluidContainer
function of(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): $FluidContainer
function holdsFluid(stack: $ItemStack$Type): boolean
function holdsFluid(block: $BlockEntity$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, direction: $Direction$Type): boolean
function holdsFluid(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, entity: $BlockEntity$Type, direction: $Direction$Type): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFluidContainer$Type = ($ItemFluidContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFluidContainer_ = $ItemFluidContainer$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/properties/$PipeProperty" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PipeProperty extends $Enum<($PipeProperty)> implements $StringRepresentable {
static readonly "NONE": $PipeProperty
static readonly "NORMAL": $PipeProperty
static readonly "INSERT": $PipeProperty
static readonly "EXTRACT": $PipeProperty


public "toString"(): string
public static "values"(): ($PipeProperty)[]
public static "valueOf"(name: string): $PipeProperty
public "isNormal"(): boolean
public "isInsert"(): boolean
public "isExtract"(): boolean
public "isNone"(): boolean
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "normal"(): boolean
get "insert"(): boolean
get "extract"(): boolean
get "none"(): boolean
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeProperty$Type = (("normal") | ("extract") | ("insert") | ("none")) | ($PipeProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PipeProperty_ = $PipeProperty$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/machines/$OxygenDistributorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$SidedMachineBlock, $SidedMachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$SidedMachineBlock"
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
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AttachFace, $AttachFace$Type} from "packages/net/minecraft/world/level/block/state/properties/$AttachFace"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $OxygenDistributorBlock extends $SidedMachineBlock {
static readonly "BOTTOM_SHAPE": $VoxelShape
static readonly "TOP_SHAPE": $VoxelShape
static readonly "NORTH_SIDE_SHAPE": $VoxelShape
static readonly "EAST_SIDE_SHAPE": $VoxelShape
static readonly "SOUTH_SIDE_SHAPE": $VoxelShape
static readonly "WEST_SIDE_SHAPE": $VoxelShape
static readonly "FACE": $EnumProperty<($AttachFace)>
static readonly "FACING": $DirectionProperty
static readonly "POWERED": $BooleanProperty
static readonly "LIT": $BooleanProperty
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

public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OxygenDistributorBlock$Type = ($OxygenDistributorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OxygenDistributorBlock_ = $OxygenDistributorBlock$Type;
}}
declare module "packages/earth/terrarium/adastra/common/blocks/$LaunchPadBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LaunchPadPartProperty, $LaunchPadPartProperty$Type} from "packages/earth/terrarium/adastra/common/blocks/properties/$LaunchPadPartProperty"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $LaunchPadBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "PART": $EnumProperty<($LaunchPadPartProperty)>
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

constructor(properties: $BlockBehaviour$Properties$Type)

public "canSurvive"(state: $BlockState$Type, level: $LevelReader$Type, pos: $BlockPos$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$Type): $BlockState
public "wasExploded"(level: $Level$Type, pos: $BlockPos$Type, explosion: $Explosion$Type): void
public "setPlacedBy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, placer: $LivingEntity$Type, stack: $ItemStack$Type): void
public "playerWillDestroy"(level: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, player: $Player$Type): void
public "appendHoverText"(stack: $ItemStack$Type, level: $BlockGetter$Type, tooltip: $List$Type<($Component$Type)>, flag: $TooltipFlag$Type): void
public "neighborChanged"(state: $BlockState$Type, level: $Level$Type, pos: $BlockPos$Type, neighborBlock: $Block$Type, neighborPos: $BlockPos$Type, movedByPiston: boolean): void
public "getFluidState"(state: $BlockState$Type): $FluidState
public "getRenderShape"(state: $BlockState$Type): $RenderShape
public "getShape"(state: $BlockState$Type, level: $BlockGetter$Type, pos: $BlockPos$Type, context: $CollisionContext$Type): $VoxelShape
public "getController"(state: $BlockState$Type, pos: $BlockPos$Type): $BlockPos
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaunchPadBlock$Type = ($LaunchPadBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaunchPadBlock_ = $LaunchPadBlock$Type;
}}
declare module "packages/earth/terrarium/chipped/common/blocks/$WorkbenchBlock$WorkbenchModelType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $WorkbenchBlock$WorkbenchModelType extends $Enum<($WorkbenchBlock$WorkbenchModelType)> implements $StringRepresentable {
static readonly "MAIN": $WorkbenchBlock$WorkbenchModelType
static readonly "SIDE": $WorkbenchBlock$WorkbenchModelType


public "toString"(): string
public static "values"(): ($WorkbenchBlock$WorkbenchModelType)[]
public static "valueOf"(name: string): $WorkbenchBlock$WorkbenchModelType
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkbenchBlock$WorkbenchModelType$Type = (("side") | ("main")) | ($WorkbenchBlock$WorkbenchModelType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkbenchBlock$WorkbenchModelType_ = $WorkbenchBlock$WorkbenchModelType$Type;
}}
declare module "packages/earth/terrarium/adastra/mixins/client/$LevelRendererAccessor" {
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$VertexBuffer, $VertexBuffer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexBuffer"

export interface $LevelRendererAccessor {

 "getSkyBuffer"(): $VertexBuffer
 "getTicks"(): integer
 "invokeDoesMobEffectBlockSky"(arg0: $Camera$Type): boolean
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
