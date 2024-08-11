declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$ServerCommand$OpLevel, $ServerCommand$OpLevel$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$OpLevel"
import {$ServerCommand$Task, $ServerCommand$Task$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Task"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$CommandDispatcher, $CommandDispatcher$Type} from "packages/com/mojang/brigadier/$CommandDispatcher"

export class $ServerCommand {

constructor(arg0: string, arg1: $CommandDispatcher$Type<($CommandSourceStack$Type)>)

public "register"(): void
public static "create"(arg0: $AbstractForgeMod$Type, arg1: $CommandDispatcher$Type<($CommandSourceStack$Type)>): $ServerCommand
public "requires"(arg0: $ServerCommand$OpLevel$Type): $ServerCommand
public "task"(arg0: string): $ServerCommand$Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Type = ($ServerCommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand_ = $ServerCommand$Type;
}}
declare module "packages/com/endertech/common/$Ordered" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"

export interface $Ordered<T> extends $Comparable<(T)> {

 "isLessThan"(arg0: T): boolean
 "isLessOrEqualTo"(arg0: T): boolean
 "isGreaterThan"(arg0: T): boolean
 "isGreaterOrEqualTo"(arg0: T): boolean
 "compareTo"(arg0: T): integer

(arg0: T, arg1: T): T
}

export namespace $Ordered {
function min<T>(arg0: T, arg1: T): T
function max<T>(arg0: T, arg1: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ordered$Type<T> = ($Ordered<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ordered_<T> = $Ordered$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/items/$GlassMeter$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $GlassMeter$Properties<T extends $GlassMeter$Properties<(T)>> extends $EquipmentItem$Properties<(T)> {
 "nameColor": $ChatFormatting
 "equipmentSlot": $EquipmentSlot
 "equipSound": $SoundEvent
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $GlassMeter$Properties<(any)>
public "nameColor"(arg0: $ChatFormatting$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassMeter$Properties$Type<T> = ($GlassMeter$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassMeter$Properties_<T> = $GlassMeter$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"

export class $EquipmentItem$Properties<T extends $EquipmentItem$Properties<(T)>> extends $DamageableItem$Properties<(T)> {
 "equipmentSlot": $EquipmentSlot
 "equipSound": $SoundEvent
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $EquipmentItem$Properties<(any)>
public "equipSound"(arg0: $SoundEvent$Type): T
public "equipmentSlot"(arg0: $EquipmentSlot$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentItem$Properties$Type<T> = ($EquipmentItem$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentItem$Properties_<T> = $EquipmentItem$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/types/$ParticleType" {
import {$ParticleType as $ParticleType$0, $ParticleType$Type as $ParticleType$0$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleType$Builder, $ParticleType$Builder$Type} from "packages/com/endertech/minecraft/forge/types/$ParticleType$Builder"
import {$ParticleOptions$Deserializer, $ParticleOptions$Deserializer$Type} from "packages/net/minecraft/core/particles/$ParticleOptions$Deserializer"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ParticleType<T extends $ParticleOptions> extends $ParticleType$0<(T)> {

constructor(arg0: boolean, arg1: $ParticleOptions$Deserializer$Type<(T)>)

public static "builder"<T extends $ParticleOptions>(arg0: $ParticleOptions$Deserializer$Type<(T)>): $ParticleType$Builder<(T)>
public "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleType$Type<T> = ($ParticleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleType_<T> = $ParticleType$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/world/$AbstractGenerator" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$BiomeModifier, $BiomeModifier$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $AbstractGenerator extends $Feature<($NoneFeatureConfiguration)> implements $BiomeModifier {
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

constructor(arg0: $AbstractForgeMod$Type)

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGenerator$Type = ($AbstractGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGenerator_ = $AbstractGenerator$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Percentage$Grade" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Percentage$Grade extends $Enum<($Percentage$Grade)> {
static readonly "LOW": $Percentage$Grade
static readonly "MEDIUM": $Percentage$Grade
static readonly "HIGH": $Percentage$Grade
readonly "threshold": float
readonly "textColor": $ChatFormatting
readonly "mapColor": $MapColor


public static "values"(): ($Percentage$Grade)[]
public static "valueOf"(arg0: string): $Percentage$Grade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Percentage$Grade$Type = (("high") | ("low") | ("medium")) | ($Percentage$Grade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Percentage$Grade_ = $Percentage$Grade$Type;
}}
declare module "packages/com/endertech/common/$CommonMath$Angle" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonMath$Angle {
static readonly "ZERO": $CommonMath$Angle


public "add"(arg0: $CommonMath$Angle$Type): $CommonMath$Angle
public "sin"(): double
public "cos"(): double
public "tan"(): double
public "negative"(): $CommonMath$Angle
public static "random"(): $CommonMath$Angle
public static "fromCos"(arg0: double): $CommonMath$Angle
public static "fromDegrees"(arg0: double): $CommonMath$Angle
public "getDegrees"(): double
public "getRadians"(): double
public "substract"(arg0: $CommonMath$Angle$Type): $CommonMath$Angle
public static "fromSin"(arg0: double): $CommonMath$Angle
public static "fromRadians"(arg0: double): $CommonMath$Angle
public static "fromTan"(arg0: double): $CommonMath$Angle
get "degrees"(): double
get "radians"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonMath$Angle$Type = ($CommonMath$Angle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonMath$Angle_ = $CommonMath$Angle$Type;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractForgeMod$RequiredSide extends $Enum<($AbstractForgeMod$RequiredSide)> {
static readonly "SERVER": $AbstractForgeMod$RequiredSide
static readonly "CLIENT": $AbstractForgeMod$RequiredSide
static readonly "BOTH": $AbstractForgeMod$RequiredSide


public static "values"(): ($AbstractForgeMod$RequiredSide)[]
public static "valueOf"(arg0: string): $AbstractForgeMod$RequiredSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$RequiredSide$Type = (("server") | ("client") | ("both")) | ($AbstractForgeMod$RequiredSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod$RequiredSide_ = $AbstractForgeMod$RequiredSide$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$Aerometer" {
import {$GlassMeter$Properties, $GlassMeter$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$GlassMeter$Properties"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$GlassMeter, $GlassMeter$Type} from "packages/com/endertech/minecraft/forge/items/$GlassMeter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Aerometer extends $GlassMeter {
static readonly "THICKNESS": float
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

constructor(arg0: $UnitConfig$Type, arg1: $GlassMeter$Properties$Type<(any)>)

public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public static "getCarrierFor"(arg0: $ItemStack$Type): $Optional<($Entity)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public static "findInInventoryOf"(arg0: $Player$Type): $List<($ItemStack)>
public "updateCarrier"(arg0: $ItemStack$Type, arg1: $Entity$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Aerometer$Type = ($Aerometer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Aerometer_ = $Aerometer$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$Stamp" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Date, $Date$Type} from "packages/java/util/$Date"

export class $CommonTime$Stamp implements $Comparable<($CommonTime$Stamp)> {


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CommonTime$Stamp$Type): integer
public static "at"(arg0: $Date$Type): $CommonTime$Stamp
public static "now"(): $CommonTime$Stamp
public "distanceTo"(arg0: $CommonTime$Stamp$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$Stamp$Type = ($CommonTime$Stamp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$Stamp_ = $CommonTime$Stamp$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ForgeItem$Properties, $ForgeItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $DamageableItem$Properties<T extends $DamageableItem$Properties<(T)>> extends $ForgeItem$Properties<(T)> {
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $ForgeItem$Properties<(any)>
public "durability"(arg0: integer): T
public "repairMaterial"(arg0: $UnitId$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageableItem$Properties$Type<T> = ($DamageableItem$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageableItem$Properties_<T> = $DamageableItem$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/items/$EquipmentItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DamageableItem, $DamageableItem$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EquipmentItem extends $DamageableItem implements $Equipable {
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

constructor(arg0: $UnitConfig$Type, arg1: $EquipmentItem$Properties$Type<(any)>)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getEquipmentSlot"(): $EquipmentSlot
public "getEquipSound"(): $SoundEvent
public "swapWithEquipmentSlot"(arg0: $Item$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "equipmentSlot"(): $EquipmentSlot
get "equipSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentItem$Type = ($EquipmentItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentItem_ = $EquipmentItem$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IPole" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IWaterLoggable, $IWaterLoggable$Type} from "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IPole extends $IWaterLoggable {

 "getTop"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
 "playPlaceSound"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
 "buildUp"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer): integer
 "isApex"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "isApex"(arg0: $BlockState$Type): boolean
 "breakBy"(arg0: $Player$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: integer): void
 "isPole"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "isPole"(arg0: $BlockState$Type): boolean
 "canBuildUp"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "breakDown"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: boolean): integer
 "canStayAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "buildBy"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: integer): $InteractionResult
 "getBottom"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
 "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
 "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $IPole {
function replaceWith(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
function isEmptyPlace(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
function getStateForPlacement(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
function getFluidState(arg0: $BlockState$Type, arg1: boolean): $FluidState
function getStateForPlacementAt(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function updateFluidPostPlacement(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function isWaterlogged(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPole$Type = ($IPole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPole_ = $IPole$Type;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$ForgeTile" {
import {$BlockEntityType$Builder, $BlockEntityType$Builder$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$Builder"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType$BlockEntitySupplier, $BlockEntityType$BlockEntitySupplier$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType$BlockEntitySupplier"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ForgeTile extends $BlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public static "builder"<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier$Type<(any)>, arg1: $Collection$Type<(any)>): $BlockEntityType$Builder<(T)>
public static "builder"<T extends $BlockEntity>(arg0: $BlockEntityType$BlockEntitySupplier$Type<(any)>, ...arg1: ($Block$Type)[]): $BlockEntityType$Builder<(T)>
public "load"(arg0: $CompoundTag$Type): void
public "saveAdditional"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public static "getRegistryName"(arg0: $BlockEntity$Type): $Optional<($ResourceLocation)>
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "syncWithClients"(): void
public "getSharedData"(): $CompoundTag
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "sharedData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeTile$Type = ($ForgeTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeTile_ = $ForgeTile$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$UnitProperties, $UnitProperties$Type} from "packages/com/endertech/minecraft/forge/units/$UnitProperties"

export class $ForgeItem$Properties<T extends $ForgeItem$Properties<(T)>> extends $UnitProperties<(T)> {
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $ForgeItem$Properties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItem$Properties$Type<T> = ($ForgeItem$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItem$Properties_<T> = $ForgeItem$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Sulfur" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Sulfur extends $AbstractGas {
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $UnitConfig$Type, arg1: string)

public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sulfur$Type = ($Sulfur);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Sulfur_ = $Sulfur$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ColorARGB" {
import {$Color, $Color$Type} from "packages/java/awt/$Color"
import {$ColorARGB$Channel, $ColorARGB$Channel$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB$Channel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ColorARGB {
static readonly "MAX_BYTE_VALUE": integer
static readonly "DEFAULT": $ColorARGB
static readonly "HEX_FORMAT": string
static readonly "DESCRIPTION_COMMON": string
static readonly "DESCRIPTION_FOR_SMOKE": string


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "blend"(arg0: $Map$Type<($ColorARGB$Type), (integer)>): $ColorARGB
public static "from"(arg0: string): $ColorARGB
public static "from"(arg0: integer): $ColorARGB
public static "from"(arg0: $Color$Type): $ColorARGB
public "isOpaque"(): boolean
public static "parse"(arg0: string): $ColorARGB
public "maxOpaque"(): $ColorARGB
public "withRed"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "withAlpha"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "withBlue"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "approxTo"(arg0: $ColorARGB$Type, arg1: float): $ColorARGB
public "withGreen"(arg0: $ColorARGB$Channel$Type): $ColorARGB
public "getAlpha"(): $ColorARGB$Channel
public "getHexARGB"(): string
public "isCompletelyTransparent"(): boolean
public "getRed"(): $ColorARGB$Channel
public "getGreen"(): $ColorARGB$Channel
public "getBlue"(): $ColorARGB$Channel
public "getARGB"(): integer
get "opaque"(): boolean
get "alpha"(): $ColorARGB$Channel
get "hexARGB"(): string
get "completelyTransparent"(): boolean
get "red"(): $ColorARGB$Channel
get "green"(): $ColorARGB$Channel
get "blue"(): $ColorARGB$Channel
get "aRGB"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorARGB$Type = ($ColorARGB);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorARGB_ = $ColorARGB$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$IStorage, $IStorage$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IStorageItem extends $IStorage<($ItemStack)> {

 "getContent"(arg0: $ItemStack$Type): $IStorage$Content
 "m_7373_"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
 "fill"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "free"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "getInitialCapacity"(arg0: $ItemStack$Type): integer
 "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
 "removeFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "installFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void

(arg0: $ItemStack$Type): $IStorage$Content
}

export namespace $IStorageItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageItem$Type = ($IStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorageItem_ = $IStorageItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage" {
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export interface $IStorage<S> {

 "fill"(arg0: S, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "getContent"(arg0: S): $IStorage$Content
 "free"(arg0: S, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "getInitialCapacity"(arg0: S): integer
 "_handleChanges"(arg0: $IStorage$Content$Type, arg1: S): void
 "onContentChanged"(arg0: $IStorage$Content$Type, arg1: S): void
 "removeFiltersFor"(arg0: S, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "installFiltersFor"(arg0: S, ...arg1: ($Pollutant$Type<(any)>)[]): void
}

export namespace $IStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorage$Type<S> = ($IStorage<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorage_<S> = $IStorage$Type<(S)>;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ConfigCategory" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Property, $Property$Type} from "packages/com/endertech/minecraft/forge/configs/$Property"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$CommonString$Joiner, $CommonString$Joiner$Type} from "packages/com/endertech/common/$CommonString$Joiner"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BufferedWriter, $BufferedWriter$Type} from "packages/java/io/$BufferedWriter"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigCategory implements $Map<(string), ($Property)> {
readonly "parent": $ConfigCategory

constructor(arg0: string, arg1: $ConfigCategory$Type)
constructor(arg0: string)

public "getName"(): string
public static "name"(): $CommonString$Joiner
public "remove"(arg0: any): $Property
public "get"(arg0: string): $Property
public "put"(arg0: string, arg1: $Property$Type): $Property
public "equals"(arg0: any): boolean
public "values"(): $Collection<($Property)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<(string), ($Property)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "write"(arg0: $BufferedWriter$Type, arg1: integer): void
public "containsKey"(arg0: string): boolean
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<(string)>
public "containsValue"(arg0: any): boolean
public "setComment"(arg0: string): void
public "getComment"(): string
public "getChildren"(): $Set<($ConfigCategory)>
public "removeChild"(arg0: $ConfigCategory$Type): void
public "isChild"(): boolean
public "getValues"(): $Map<(string), ($Property)>
public "getQualifiedName"(): string
public static "getQualifiedName"(arg0: string, arg1: $ConfigCategory$Type): string
public "setShowInGui"(arg0: boolean): $ConfigCategory
public "getPropertyOrder"(): $List<(string)>
public "getFirstParent"(): $ConfigCategory
public "getOrderedValues"(): $List<($Property)>
public "getLanguagekey"(): string
public "hasChanged"(): boolean
public "setLanguageKey"(arg0: string): $ConfigCategory
public "requiresMcRestart"(): boolean
public "setPropertyOrder"(arg0: $List$Type<(string)>): $ConfigCategory
public "setConfigEntryClass"(arg0: $Class$Type<(any)>): $ConfigCategory
public "setRequiresWorldRestart"(arg0: boolean): $ConfigCategory
public "requiresWorldRestart"(): boolean
public "setRequiresMcRestart"(arg0: boolean): $ConfigCategory
public "showInGui"(): boolean
public "getConfigEntryClass"(): $Class<(any)>
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(string), ($Property)>
public "replace"(arg0: string, arg1: $Property$Type): $Property
public "replace"(arg0: string, arg1: $Property$Type, arg2: $Property$Type): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type, arg18: string, arg19: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type, arg16: string, arg17: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type, arg14: string, arg15: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type, arg12: string, arg13: $Property$Type): $Map<(string), ($Property)>
public static "of"<K, V>(arg0: string, arg1: $Property$Type, arg2: string, arg3: $Property$Type, arg4: string, arg5: $Property$Type, arg6: string, arg7: $Property$Type, arg8: string, arg9: $Property$Type, arg10: string, arg11: $Property$Type): $Map<(string), ($Property)>
public "merge"(arg0: string, arg1: $Property$Type, arg2: $BiFunction$Type<(any), (any), (any)>): $Property
public "putIfAbsent"(arg0: string, arg1: $Property$Type): $Property
public "compute"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "entry"<K, V>(arg0: string, arg1: $Property$Type): $Map$Entry<(string), ($Property)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: string, arg1: $Function$Type<(any), (any)>): $Property
public "getOrDefault"(arg0: any, arg1: $Property$Type): $Property
public "computeIfPresent"(arg0: string, arg1: $BiFunction$Type<(any), (any), (any)>): $Property
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(string), ($Property)>
[index: string | number]: $Property
get "empty"(): boolean
set "comment"(value: string)
get "comment"(): string
get "children"(): $Set<($ConfigCategory)>
get "child"(): boolean
get "qualifiedName"(): string
get "propertyOrder"(): $List<(string)>
get "firstParent"(): $ConfigCategory
get "orderedValues"(): $List<($Property)>
get "languagekey"(): string
set "languageKey"(value: string)
set "propertyOrder"(value: $List$Type<(string)>)
set "configEntryClass"(value: $Class$Type<(any)>)
get "configEntryClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigCategory$Type = ($ConfigCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigCategory_ = $ConfigCategory$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$BiomeId" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $BiomeId {
static readonly "EMPTY": $BiomeId


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public static "from"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $BiomeId
public static "from"(arg0: $ResourceKey$Type<($Biome$Type)>): $BiomeId
public static "from"(arg0: $ResourceLocation$Type): $BiomeId
public "getKey"(): $Optional<($ResourceKey<($Biome)>)>
public "getResourceLocation"(): $Optional<($ResourceLocation)>
public "getBiome"(): $Optional<($Biome)>
get "empty"(): boolean
get "key"(): $Optional<($ResourceKey<($Biome)>)>
get "resourceLocation"(): $Optional<($ResourceLocation)>
get "biome"(): $Optional<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeId$Type = ($BiomeId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeId_ = $BiomeId$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Msg" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IEmitter, $IEmitter$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $ServerCommand$Msg {

constructor(arg0: string)

public static "clazz"(arg0: $Class$Type<(any)>, arg1: boolean): $ServerCommand$Msg
public "toString"(): string
public static "of"(arg0: string): $ServerCommand$Msg
public static "unit"(arg0: string, arg1: $ChatFormatting$Type, arg2: $UnitId$Type): $ServerCommand$Msg
public static "error"(arg0: string): $ServerCommand$Msg
public static "bool"(arg0: boolean): $ServerCommand$Msg
public static "emitter"(arg0: string, arg1: $IEmitter$Type, arg2: boolean): $ServerCommand$Msg
public static "nbt"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>, arg1: $Predicate$Type<(string)>): $ServerCommand$Msg
public static "colored"(arg0: string, arg1: $ChatFormatting$Type): $ServerCommand$Msg
public static "noUnitInSight"(arg0: string): $ServerCommand$Msg
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Msg$Type = ($ServerCommand$Msg);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Msg_ = $ServerCommand$Msg$Type;
}}
declare module "packages/com/endertech/minecraft/forge/entities/$ForgeEntity" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Vect3d, $Vect3d$Type} from "packages/com/endertech/minecraft/forge/math/$Vect3d"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ClipContext$Block, $ClipContext$Block$Type} from "packages/net/minecraft/world/level/$ClipContext$Block"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$PlayMessages$SpawnEntity, $PlayMessages$SpawnEntity$Type} from "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Rotation, $Rotation$Type} from "packages/com/endertech/minecraft/forge/math/$Rotation"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$ClipContext$Fluid, $ClipContext$Fluid$Type} from "packages/net/minecraft/world/level/$ClipContext$Fluid"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $ForgeEntity extends $Entity {
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
constructor(arg0: $PlayMessages$SpawnEntity$Type, arg1: $Level$Type)

public static "getSize"(arg0: $Entity$Type): float
public "move"(): void
public static "getPosition"(arg0: $Entity$Type): $BlockPos
public static "getById"(arg0: $Level$Type, arg1: integer): $Optional<($Entity)>
public static "getWeight"(arg0: $Entity$Type, arg1: boolean): float
public static "stopMoving"(arg0: $Entity$Type): void
public "stopMoving"(): void
public static "addMotion"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "addMotion"(arg0: double, arg1: double, arg2: double): void
public "addMotion"(arg0: $Vect3d$Type): void
public "setMotion"(arg0: $Vect3d$Type): void
public static "setMotion"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public static "setRotation"(arg0: $Entity$Type, arg1: $Rotation$Type): void
public static "getMotion"(arg0: $Entity$Type): $Vect3d
public "isClientSide"(): boolean
public static "isClientSide"(arg0: $Entity$Type): boolean
public "setCurRotation"(arg0: $Rotation$Type): void
public "getBBCenter"(): $Vect3d
public static "isServerSide"(arg0: $Entity$Type): boolean
public "isServerSide"(): boolean
public static "isUnderRain"(arg0: $Entity$Type): boolean
public static "isUnderOpenSky"(arg0: $Entity$Type): boolean
public static "isEating"(arg0: $LivingEntity$Type): boolean
public static "otherHand"(arg0: $InteractionHand$Type): $InteractionHand
public static "setPosition_NoBB"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public static "rayTraceBlockBeingLookedAt"(arg0: $Entity$Type, arg1: $ClipContext$Block$Type, arg2: $ClipContext$Fluid$Type, arg3: float, arg4: float): $Optional<($BlockHitResult)>
public "getRotation"(arg0: float): $Rotation
public static "getRotation"(arg0: $Entity$Type, arg1: float): $Rotation
public static "getRotation"(arg0: $Entity$Type): $Rotation
public static "getRegistryName"(arg0: $Entity$Type): $ResourceLocation
public "setAllPositions"(arg0: $Vect3d$Type): void
public static "setAllPositions"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public static "copyAllPositionsWithOffset"(arg0: $Entity$Type, arg1: $Entity$Type, arg2: $Vect3d$Type): void
public static "getLastTickPosition"(arg0: $Entity$Type): $Vect3d
public "getLastTickPosition"(): $Vect3d
public static "setLastTickPosition"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "setLastTickPosition"(arg0: $Vect3d$Type): void
public "hasSwingingPlayerPassenger"(): boolean
public static "hasSwingingPlayerPassenger"(arg0: $Entity$Type): boolean
public static "getRootVehicleWithAllPassengers"(arg0: $Entity$Type): $List<($Entity)>
public static "rayTraceEntityBeingLookedAt"(arg0: $Entity$Type, arg1: float, arg2: float): $Optional<($EntityHitResult)>
public "getCollidedWithIfMove"<E extends $Entity>(arg0: $Class$Type<(E)>, arg1: $Vect3d$Type, arg2: $Predicate$Type<(any)>): $List<(E)>
public "getCurMotion"(): $Vect3d
public static "getCenterPosition"(arg0: $Entity$Type, arg1: float): $Vect3d
public static "getCenterPosition"(arg0: $Entity$Type): $Vect3d
public "getPrevPosition"(): $Vect3d
public static "getPrevPosition"(arg0: $Entity$Type): $Vect3d
public static "getPositionEyes"(arg0: $Entity$Type): $BlockPos
public static "getNextPosition"(arg0: $Entity$Type): $Vect3d
public "getNextPosition"(): $Vect3d
public static "setCurPosition"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "setCurPosition"(arg0: $Vect3d$Type): void
public static "getPositionTop"(arg0: $Entity$Type): $BlockPos
public static "getPrevRotation"(arg0: $Entity$Type): $Rotation
public "getPrevRotation"(): $Rotation
public "getCurRotation"(): $Rotation
public static "getCenteredPosTo"(arg0: $BlockPos$Type): $Vect3d
public "getCurPosition"(arg0: float): $Vect3d
public "getCurPosition"(): $Vect3d
public static "getCurPosition"(arg0: $Entity$Type, arg1: float): $Vect3d
public static "getCurPosition"(arg0: $Entity$Type): $Vect3d
public "getBB"(): $AABB
public static "getBB"(arg0: $Entity$Type, arg1: $Vect3d$Type): $AABB
public "getBB"(arg0: $Vect3d$Type): $AABB
public static "getBB"(arg0: $Entity$Type): $AABB
public static "isHostileMob"(arg0: $Entity$Type): boolean
public static "setPrevPosition"(arg0: $Entity$Type, arg1: $Vect3d$Type): void
public "setPrevPosition"(arg0: $Vect3d$Type): void
public static "getEquipmentOn"(arg0: $Entity$Type): $Iterable<($ItemStack)>
public static "setFallDistance"(arg0: $Entity$Type, arg1: float, arg2: boolean): void
public "setAllRotations"(arg0: $Rotation$Type): void
public static "setAllRotations"(arg0: $Entity$Type, arg1: $Rotation$Type): void
public "updateBB"(): void
public static "updateBB"(arg0: $Entity$Type): void
public static "hasStack"(arg0: $Entity$Type, arg1: $ItemStack$Type): boolean
public "setBB"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): void
public static "setBB"(arg0: $Entity$Type, arg1: $Vect3d$Type, arg2: $Vect3d$Type): void
public static "getFacingTo"(arg0: $BlockPos$Type, arg1: $LivingEntity$Type): $Direction
public static "getAirShortage"(arg0: $Entity$Type): $Percentage
public "setPrevRotation"(arg0: $Rotation$Type): void
public static "setPrevRotation"(arg0: $Entity$Type, arg1: $Rotation$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "motion"(value: $Vect3d$Type)
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "clientSide"(): boolean
set "curRotation"(value: $Rotation$Type)
get "bBCenter"(): $Vect3d
get "serverSide"(): boolean
set "allPositions"(value: $Vect3d$Type)
get "lastTickPosition"(): $Vect3d
set "lastTickPosition"(value: $Vect3d$Type)
get "curMotion"(): $Vect3d
get "prevPosition"(): $Vect3d
get "nextPosition"(): $Vect3d
set "curPosition"(value: $Vect3d$Type)
get "prevRotation"(): $Rotation
get "curRotation"(): $Rotation
get "curPosition"(): $Vect3d
get "bB"(): $AABB
set "prevPosition"(value: $Vect3d$Type)
set "allRotations"(value: $Rotation$Type)
set "prevRotation"(value: $Rotation$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEntity$Type = ($ForgeEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEntity_ = $ForgeEntity$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$UnitConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$File, $File$Type} from "packages/java/io/$File"
import {$CharMatcher, $CharMatcher$Type} from "packages/com/google/common/base/$CharMatcher"
import {$List, $List$Type} from "packages/java/util/$List"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$Configuration, $Configuration$Type} from "packages/com/endertech/minecraft/forge/configs/$Configuration"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $UnitConfig extends $Configuration {
static readonly "EXTENSION": string
static readonly "KEY_LIST": string
static readonly "CATEGORY_GENERAL": string
static readonly "CATEGORY_CLIENT": string
static readonly "ALLOWED_CHARS": string
static readonly "DEFAULT_ENCODING": string
static readonly "CATEGORY_SPLITTER": string
static readonly "NEW_LINE": string
static readonly "COMMENT_SEPARATOR": string
static readonly "ALLOWED_PROPERTIES": $CharMatcher
 "defaultEncoding": string
 "isChild": boolean

constructor(arg0: $File$Type)

public static "getInt"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: integer, arg4: $IntBounds$Type, arg5: string): integer
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: $IntBounds$Type, arg4: string): integer
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: $FloatBounds$Type, arg4: string): float
public static "getFloat"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: float, arg4: $FloatBounds$Type, arg5: string): float
public static "in"(arg0: $Path$Type, arg1: string, arg2: string): $UnitConfig
public static "in"(arg0: $Path$Type, arg1: string): $UnitConfig
public static "save"(arg0: $UnitConfig$Type): void
public "save"(): void
public static "getTimeInMillis"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $CommonTime$Interval$Type, arg4: string): $CommonTime$Interval
public "getTimeInMillis"(arg0: string, arg1: string, arg2: $CommonTime$Interval$Type, arg3: string): $CommonTime$Interval
public static "getDescription"(arg0: string, arg1: string, arg2: boolean): string
public static "getSyntax"(...arg0: (any)[]): string
public "getConfigDir"(): $Path
public static "buildPath"(arg0: $Path$Type, arg1: string): $Path
public static "buildPath"(arg0: $Path$Type, arg1: string, arg2: string): $Path
public static "getIntBounds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $IntBounds$Type, arg4: $IntBounds$Type, arg5: string): $IntBounds
public "getIntBounds"(arg0: string, arg1: string, arg2: $IntBounds$Type, arg3: $IntBounds$Type, arg4: string): $IntBounds
public "getKeyValuePair"(arg0: string, arg1: string, arg2: $KeyValuePair$Type, arg3: string): $KeyValuePair
public static "getKeyValuePair"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $KeyValuePair$Type, arg4: string): $KeyValuePair
public static "listCustomConfigs"(arg0: $Path$Type, arg1: $Class$Type<(any)>): $List<($Path)>
public "getUnitId"(arg0: string, arg1: string, arg2: $UnitId$Type, arg3: string): $UnitId
public static "getUnitId"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $UnitId$Type, arg4: string): $UnitId
public static "getColorARGB"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $ColorARGB$Type, arg4: string): $ColorARGB
public "getColorARGB"(arg0: string, arg1: string, arg2: $ColorARGB$Type, arg3: string): $ColorARGB
public static "readConfigEnabled"(arg0: $UnitConfig$Type, arg1: boolean): boolean
public static "alreadyExists"(arg0: $Path$Type, arg1: string): boolean
public "getPercentage"(arg0: string, arg1: string, arg2: $Percentage$Type, arg3: $FloatBounds$Type, arg4: string): $Percentage
public static "getPercentage"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $Percentage$Type, arg4: $FloatBounds$Type, arg5: string): $Percentage
public static "getStrArray"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[], arg4: string): (string)[]
public "getStrArray"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public "getTimeInSeconds"(arg0: string, arg1: string, arg2: $CommonTime$Interval$Type, arg3: string): $CommonTime$Interval
public static "getTimeInSeconds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $CommonTime$Interval$Type, arg4: string): $CommonTime$Interval
public "getStr"(arg0: string, arg1: string, arg2: string, arg3: string): string
public static "getStr"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: string, arg4: string): string
public static "getFloatBounds"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: $FloatBounds$Type, arg4: $FloatBounds$Type, arg5: string): $FloatBounds
public "getFloatBounds"(arg0: string, arg1: string, arg2: $FloatBounds$Type, arg3: $FloatBounds$Type, arg4: string): $FloatBounds
public "getBool"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public static "getBool"(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: boolean, arg4: string): boolean
get "configDir"(): $Path
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitConfig$Type = ($UnitConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitConfig_ = $UnitConfig$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$DamageableItem" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$ForgeItem, $ForgeItem$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem"
import {$AnvilUpdateEvent, $AnvilUpdateEvent$Type} from "packages/net/minecraftforge/event/$AnvilUpdateEvent"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DamageableItem extends $ForgeItem {
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

constructor(arg0: $UnitConfig$Type, arg1: $DamageableItem$Properties$Type<(any)>)

public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "canBeDepleted"(): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
public "isDamageable"(arg0: $ItemStack$Type): boolean
public static "removeRepairPenaltyFor"(arg0: $ItemStack$Type): void
public "getWearoutPercentage"(arg0: $ItemStack$Type): $Percentage
public "updateDurability"(arg0: $ItemStack$Type, arg1: $ServerPlayer$Type): void
public "isRepairCostGrow"(): boolean
public static "onAnvilUpdate"(arg0: $AnvilUpdateEvent$Type): void
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "repairCostGrow"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageableItem$Type = ($DamageableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageableItem_ = $DamageableItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump$Tile" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ChameleonBlockTile, $ChameleonBlockTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ChameleonBlockTile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ITickableUnit, $ITickableUnit$Type} from "packages/com/endertech/minecraft/forge/units/$ITickableUnit"

export class $Pump$Tile extends $ChameleonBlockTile implements $ITickableUnit {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isActive"(): boolean
public "exists"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "setRemoved"(): void
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "getWorldLevel"(): $Level
public "getUpdateInterval"(): $GameTime
public "onUpdate"(): void
public "tick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "active"(): boolean
get "worldLevel"(): $Level
get "updateInterval"(): $GameTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pump$Tile$Type = ($Pump$Tile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pump$Tile_ = $Pump$Tile$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$Namespace" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Namespace {
readonly "id": string


public static "of"(arg0: string): $Namespace
public "resolve"(arg0: string): string
public "location"(arg0: string): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Namespace$Type = ($Namespace);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Namespace_ = $Namespace$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$ChunkPollution$Influence" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ChunkPollution$Influence extends $Enum<($ChunkPollution$Influence)> {
static readonly "ALWAYS": $ChunkPollution$Influence
static readonly "CLOUD": $ChunkPollution$Influence
static readonly "NEVER": $ChunkPollution$Influence


public static "values"(): ($ChunkPollution$Influence)[]
public static "valueOf"(arg0: string): $ChunkPollution$Influence
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkPollution$Influence$Type = (("always") | ("cloud") | ("never")) | ($ChunkPollution$Influence);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkPollution$Influence_ = $ChunkPollution$Influence$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Properties" {
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $Pollutant$Properties<T extends $Pollutant$Properties<(T)>> extends $ForgeBlock$Properties<(T)> {
readonly "mapColor": $MapColor
 "textColor": $ChatFormatting
 "criticalAmount": integer
 "concentrationAltitude": integer
 "motionVelocity": float
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public static "of"(arg0: string, arg1: $MapColor$Type): $Pollutant$Properties<(any)>
public "textColor"(arg0: $ChatFormatting$Type): T
public "concentrationAltitude"(arg0: integer): T
public "criticalAmount"(arg0: integer): T
public "motionVelocity"(arg0: float): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutant$Properties$Type<T> = ($Pollutant$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutant$Properties_<T> = $Pollutant$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$IModelWrapperFactory" {
import {$BakedModelWrapper, $BakedModelWrapper$Type} from "packages/net/minecraftforge/client/model/$BakedModelWrapper"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"

export interface $ItemModel$IModelWrapperFactory<T extends $BakedModel> {

 "create"(arg0: $BakedModel$Type): $BakedModelWrapper<(T)>

(arg0: $BakedModel$Type): $BakedModelWrapper<(T)>
}

export namespace $ItemModel$IModelWrapperFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$IModelWrapperFactory$Type<T> = ($ItemModel$IModelWrapperFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$IModelWrapperFactory_<T> = $ItemModel$IModelWrapperFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$Spread" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameWorld$Directions, $GameWorld$Directions$Type} from "packages/com/endertech/minecraft/forge/world/$GameWorld$Directions"

export class $Spread {
static readonly "ANY_DENSITY_DELTA": integer
readonly "pollutant": $Pollutant<(any)>
readonly "level": $ServerLevel
readonly "sourcePos": $BlockPos


public "apply"(): boolean
public "to"(arg0: $BlockPos$Type, arg1: integer): $Spread
public static "from"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Pollutant$Type<(any)>): $Spread
public "in"(arg0: $Optional$Type<($Direction$Type)>, arg1: integer): $Spread
public "in"(arg0: $Direction$Type, arg1: integer): $Spread
public "completed"(): boolean
public "setSource"(arg0: $BlockState$Type): void
public "getSourcePos"(): $BlockPos
public "around"(arg0: integer): $Spread
public "getTargetPos"(): $Optional<($BlockPos)>
public "inMotionFacing"(): $Spread
public "overLedge"(): $Spread
public "getSourceState"(): $BlockState
public "applyTarget"(): boolean
public "sourceChanged"(): boolean
public "getTargetState"(): $Optional<($BlockState)>
public "applySource"(): boolean
public "inDirectionsForced"(arg0: $Supplier$Type<($GameWorld$Directions$Type)>): $Spread
public "targetChanged"(): boolean
public "inDirectionForced"(arg0: $Direction$Type): $Spread
set "source"(value: $BlockState$Type)
get "sourcePos"(): $BlockPos
get "targetPos"(): $Optional<($BlockPos)>
get "sourceState"(): $BlockState
get "targetState"(): $Optional<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Spread$Type = ($Spread);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Spread_ = $Spread$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$IMessure" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CommonTime$IMessure {

 "getCapacity"(): long

(): long
}

export namespace $CommonTime$IMessure {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$IMessure$Type = ($CommonTime$IMessure);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$IMessure_ = $CommonTime$IMessure$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$UnitProperties" {
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $UnitProperties<T extends $UnitProperties<(T)>> extends $BaseProperties<(T)> {
readonly "name": string


public static "of"(arg0: string): $UnitProperties<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitProperties$Type<T> = ($UnitProperties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitProperties_<T> = $UnitProperties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IPollutant" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IPollutant$Type, $IPollutant$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPollutant {

 "push"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "getPollutionCapacity"(): integer
 "getCarriedPollutionAmount"(arg0: $BlockState$Type): integer
 "affectsPollutionLevel"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
 "canPassThrough"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Direction$Type): boolean
 "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
 "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
 "pumpEntitiesAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
 "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
 "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
 "getPollutantType"(): $IPollutant$Type
}

export namespace $IPollutant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPollutant$Type = ($IPollutant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPollutant_ = $IPollutant$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/init/$Respirators$RespiratorEffect" {
import {$ForgeEffect, $ForgeEffect$Type} from "packages/com/endertech/minecraft/forge/entities/$ForgeEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $Respirators$RespiratorEffect extends $ForgeEffect {


public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Respirators$RespiratorEffect$Type = ($Respirators$RespiratorEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Respirators$RespiratorEffect_ = $Respirators$RespiratorEffect$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$GameWorld$Directions" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export class $GameWorld$Directions {
static readonly "CLOCKWISE_HORIZONTALS": ($Direction)[]

constructor()

public "add"(...arg0: ($Direction$Type)[]): $GameWorld$Directions
public "add"(arg0: $Direction$Type): $GameWorld$Directions
public "remove"(...arg0: ($Direction$Type)[]): $GameWorld$Directions
public "toArray"(): ($Direction)[]
public "toList"(): $List<($Direction)>
public static "of"(): $GameWorld$Directions
public "shuffle"(): $GameWorld$Directions
public "shuffle"(arg0: $Random$Type): $GameWorld$Directions
public "up"(): $GameWorld$Directions
public "all"(): $GameWorld$Directions
public "down"(): $GameWorld$Directions
public "north"(): $GameWorld$Directions
public "east"(): $GameWorld$Directions
public "south"(): $GameWorld$Directions
public "west"(): $GameWorld$Directions
public "horizontals"(): $GameWorld$Directions
public "toStream"(): $Stream<($Direction)>
public "verticals"(): $GameWorld$Directions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameWorld$Directions$Type = ($GameWorld$Directions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameWorld$Directions_ = $GameWorld$Directions$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$GameTime" {
import {$CommonTime$IMessure, $CommonTime$IMessure$Type} from "packages/com/endertech/common/$CommonTime$IMessure"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"

export class $GameTime {
static readonly "MILLISECONDS_IN_SERVER_TICK": integer
static readonly "SERVER_TICKS": $CommonTime$IMessure
static readonly "TICKS_PER_SECOND": integer


public static "second"(): $GameTime
public static "time"(arg0: $CommonTime$Interval$Type): $GameTime
public "mult"(arg0: integer): $GameTime
public static "seconds"(arg0: float): $GameTime
public static "seconds"(arg0: integer): $GameTime
public "getInterval"(): $CommonTime$Interval
public static "quaterSecond"(): $GameTime
public "pastIn"(arg0: $Level$Type): boolean
public static "halfSecond"(): $GameTime
public static "fromServerTicks"(arg0: long): $CommonTime$Interval
public static "inServerTicks"(arg0: $CommonTime$Interval$Type): long
public static "ticks"(arg0: long, arg1: integer): $GameTime
public static "ticks"(arg0: long): $GameTime
get "interval"(): $CommonTime$Interval
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameTime$Type = ($GameTime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameTime_ = $GameTime$Type;
}}
declare module "packages/com/endertech/minecraft/forge/entities/$ForgeEffect" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$CommonTime$Interval, $CommonTime$Interval$Type} from "packages/com/endertech/common/$CommonTime$Interval"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ForgeEffect extends $MobEffect {


public "createInstance"(arg0: $CommonTime$Interval$Type, arg1: boolean): $MobEffectInstance
public "getUpdateInterval"(): integer
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
get "updateInterval"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeEffect$Type = ($ForgeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeEffect_ = $ForgeEffect$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FilterFrame$Properties, $FilterFrame$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Properties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ISmokeContainer, $ISmokeContainer$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$FilterFrame$Condition, $FilterFrame$Condition$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Condition"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$FilterFrame$BlockTile, $FilterFrame$BlockTile$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$BlockTile"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$FilterFrame$AirPurifier, $FilterFrame$AirPurifier$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$AirPurifier"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IFilterFrame, $IFilterFrame$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IFilterFrame"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IWaterLoggable, $IWaterLoggable$Type} from "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $FilterFrame extends $ForgeBlock implements $ITiledBlock<($FilterFrame$BlockTile)>, $IFilterFrame<($FilterFrame$BlockTile)>, $ISmokeContainer, $IWaterLoggable {
static readonly "SATURATION": $EnumProperty<($FilterFrame$Condition)>
static readonly "WALL_THICKNESS": float
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $UnitConfig$Type, arg1: $FilterFrame$Properties$Type<(any)>)

public "fill"(arg0: $FilterFrame$BlockTile$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "getType"(): $ISmokeContainer$Type
public "getContent"(arg0: $FilterFrame$BlockTile$Type): $IStorage$Content
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getColor"(): $ColorARGB
public "getInitialCapacity"(arg0: $FilterFrame$BlockTile$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "hasFilterMaterialInstalled"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getAirPurifier"(): $FilterFrame$AirPurifier
public "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $FilterFrame$BlockTile$Type): void
public "getTileClass"(): $Class<($FilterFrame$BlockTile)>
public "createTile"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $FilterFrame$BlockTile
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($FilterFrame$BlockTile)>
public "is"(arg0: $ISmokeContainer$Type$Type): boolean
public "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
public "isPump"(): boolean
public "isVent"(): boolean
public "isChimney"(): boolean
public "isPipe"(): boolean
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "free"(arg0: $FilterFrame$BlockTile$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $FilterFrame$BlockTile$Type): void
public "removeFiltersFor"(arg0: $FilterFrame$BlockTile$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "installFiltersFor"(arg0: $FilterFrame$BlockTile$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "type"(): $ISmokeContainer$Type
get "color"(): $ColorARGB
get "airPurifier"(): $FilterFrame$AirPurifier
get "tileClass"(): $Class<($FilterFrame$BlockTile)>
get "pump"(): boolean
get "vent"(): boolean
get "chimney"(): boolean
get "pipe"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$Type = ($FilterFrame);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame_ = $FilterFrame$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Tile" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ChameleonBlockTile, $ChameleonBlockTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ChameleonBlockTile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Container$Tile extends $ChameleonBlockTile {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$Tile$Type = ($Container$Tile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Container$Tile_ = $Container$Tile$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$ChunkBounds" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$WorldBounds, $WorldBounds$Type} from "packages/com/endertech/minecraft/forge/world/$WorldBounds"

export class $ChunkBounds extends $WorldBounds {
static readonly "WIDTH": integer
static readonly "HALF_WIDTH": integer
static readonly "SQUARE": integer


public static "from"(arg0: $LevelChunk$Type, arg1: $IntBounds$Type): $ChunkBounds
public static "from"(arg0: $LevelChunk$Type): $ChunkBounds
public static "from"(arg0: $LevelHeightAccessor$Type, arg1: $ChunkPos$Type): $ChunkBounds
public static "from"(arg0: $ChunkPos$Type, arg1: $IntBounds$Type): $ChunkBounds
public "getCapacity"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkBounds$Type = ($ChunkBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkBounds_ = $ChunkBounds$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Property" {
import {$Property$Type, $Property$Type$Type} from "packages/com/endertech/minecraft/forge/configs/$Property$Type"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $Property {

constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[], arg4: string)
constructor(arg0: string, arg1: (string)[], arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: boolean, arg4: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: string)
constructor(arg0: string, arg1: string, arg2: $Property$Type$Type, arg3: (string)[])

public "getName"(): string
public "getBoolean"(arg0: boolean): boolean
public "getBoolean"(): boolean
public "getInt"(): integer
public "getInt"(arg0: integer): integer
public "getLong"(): long
public "getLong"(arg0: long): long
public "getDouble"(): double
public "getDouble"(arg0: double): double
public "getDefault"(): string
public "set"(arg0: (string)[]): void
public "set"(arg0: string): void
public "set"(arg0: long): void
public "set"(arg0: (double)[]): void
public "set"(arg0: (boolean)[]): void
public "set"(arg0: (integer)[]): void
public "set"(arg0: integer): void
public "set"(arg0: double): void
public "set"(arg0: boolean): void
public "setName"(arg0: string): void
public "setValue"(arg0: integer): $Property
public "setValue"(arg0: double): $Property
public "setValue"(arg0: string): $Property
public "setValue"(arg0: boolean): $Property
public "getType"(): $Property$Type
public "isDefault"(): boolean
public "getString"(): string
public "isIntValue"(): boolean
public "setComment"(arg0: string): void
public "getComment"(): string
public "getBooleanList"(): (boolean)[]
public "getDoubleList"(): (double)[]
public "getStringList"(): (string)[]
public "getIntList"(): (integer)[]
public "getMinValue"(): string
public "getMaxValue"(): string
public "setValues"(arg0: (integer)[]): $Property
public "setValues"(arg0: (boolean)[]): $Property
public "setValues"(arg0: (double)[]): $Property
public "setValues"(arg0: (string)[]): $Property
public "setToDefault"(): $Property
public "setShowInGui"(arg0: boolean): $Property
public "isLongValue"(): boolean
public "getLanguageKey"(): string
public "getValidValues"(): (string)[]
public "wasRead"(): boolean
public "setArrayEntryClass"(arg0: $Class$Type<(any)>): $Property
public "isList"(): boolean
public "getMaxListLength"(): integer
public "getArrayEntryClass"(): $Class<(any)>
public "getDefaults"(): (string)[]
public "hasChanged"(): boolean
public "setMaxListLength"(arg0: integer): $Property
public "setDefaultValues"(arg0: (boolean)[]): $Property
public "setDefaultValues"(arg0: (integer)[]): $Property
public "setDefaultValues"(arg0: (string)[]): $Property
public "setDefaultValues"(arg0: (double)[]): $Property
public "setMinValue"(arg0: integer): $Property
public "setMinValue"(arg0: double): $Property
public "isListLengthFixed"(): boolean
public "isBooleanList"(): boolean
public "isIntList"(): boolean
public "setMaxValue"(arg0: integer): $Property
public "setMaxValue"(arg0: double): $Property
public "isDoubleValue"(): boolean
public "isDoubleList"(): boolean
public "setValidValues"(arg0: (string)[]): $Property
public "setLanguageKey"(arg0: string): $Property
public "requiresMcRestart"(): boolean
public "setDefaultValue"(arg0: string): $Property
public "setDefaultValue"(arg0: integer): $Property
public "setDefaultValue"(arg0: double): $Property
public "setDefaultValue"(arg0: boolean): $Property
public "isBooleanValue"(): boolean
public "setValidationPattern"(arg0: $Pattern$Type): $Property
public "setIsListLengthFixed"(arg0: boolean): $Property
public "setConfigEntryClass"(arg0: $Class$Type<(any)>): $Property
public "setRequiresWorldRestart"(arg0: boolean): $Property
public "requiresWorldRestart"(): boolean
public "setRequiresMcRestart"(arg0: boolean): $Property
public "showInGui"(): boolean
public "getValidationPattern"(): $Pattern
public "getConfigEntryClass"(): $Class<(any)>
get "name"(): string
get "boolean"(): boolean
get "int"(): integer
get "long"(): long
get "double"(): double
get "default"(): string
set "name"(value: string)
set "value"(value: integer)
set "value"(value: double)
set "value"(value: string)
set "value"(value: boolean)
get "type"(): $Property$Type
get "default"(): boolean
get "string"(): string
get "intValue"(): boolean
set "comment"(value: string)
get "comment"(): string
get "booleanList"(): (boolean)[]
get "doubleList"(): (double)[]
get "stringList"(): (string)[]
get "intList"(): (integer)[]
get "minValue"(): string
get "maxValue"(): string
set "values"(value: (integer)[])
set "values"(value: (boolean)[])
set "values"(value: (double)[])
set "values"(value: (string)[])
get "longValue"(): boolean
get "languageKey"(): string
get "validValues"(): (string)[]
set "arrayEntryClass"(value: $Class$Type<(any)>)
get "list"(): boolean
get "maxListLength"(): integer
get "arrayEntryClass"(): $Class<(any)>
get "defaults"(): (string)[]
set "maxListLength"(value: integer)
set "defaultValues"(value: (boolean)[])
set "defaultValues"(value: (integer)[])
set "defaultValues"(value: (string)[])
set "defaultValues"(value: (double)[])
set "minValue"(value: integer)
set "minValue"(value: double)
get "listLengthFixed"(): boolean
get "booleanList"(): boolean
get "intList"(): boolean
set "maxValue"(value: integer)
set "maxValue"(value: double)
get "doubleValue"(): boolean
get "doubleList"(): boolean
set "validValues"(value: (string)[])
set "languageKey"(value: string)
set "defaultValue"(value: string)
set "defaultValue"(value: integer)
set "defaultValue"(value: double)
set "defaultValue"(value: boolean)
get "booleanValue"(): boolean
set "validationPattern"(value: $Pattern$Type)
set "configEntryClass"(value: $Class$Type<(any)>)
get "validationPattern"(): $Pattern
get "configEntryClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type = ($Property);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property_ = $Property$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Dust" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Dust extends $AbstractGas {
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $UnitConfig$Type, arg1: string)

public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dust$Type = ($Dust);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dust_ = $Dust$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$ITickableUnit" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"

export interface $ITickableUnit {

 "exists"(): boolean
 "tick"(): void
 "getWorldLevel"(): $Level
 "getUpdateInterval"(): $GameTime
 "onUpdate"(): void
}

export namespace $ITickableUnit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableUnit$Type = ($ITickableUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickableUnit_ = $ITickableUnit$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$GasEntity, $GasEntity$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$GasEntity"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BiomeId, $BiomeId$Type} from "packages/com/endertech/minecraft/forge/world/$BiomeId"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Spread, $Spread$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$Spread"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IPollutant$Type, $IPollutant$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ChunkPollution$Influence, $ChunkPollution$Influence$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$ChunkPollution$Influence"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractGas$Properties, $AbstractGas$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PregeneratedClouds$Data, $PregeneratedClouds$Data$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Data"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractGas extends $Pollutant<($GasEntity)> {
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $UnitConfig$Type, arg1: $AbstractGas$Properties$Type<(any)>)

public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
public "getPregeneratedCloudsData"(arg0: $BiomeId$Type): $PregeneratedClouds$Data
public "getLowerExplosiveLimit"(): integer
public "getChunkPollutionInfluence"(arg0: $BiomeId$Type): $ChunkPollution$Influence
public "canBeAffectedByWind"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BiomeId$Type): boolean
public "shouldDissipateExcessive"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BiomeId$Type): boolean
public "affectsPollutionLevel"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "canPassThrough"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Direction$Type): boolean
public "createSpread"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Spread
public "emitFrom"(arg0: $BlockEntity$Type, arg1: $Set$Type<($BlockState$Type)>, arg2: integer): integer
public "getProtectiveItems"(arg0: $LivingEntity$Type): $Map<($ItemStack), ($IStorageItem)>
public "getPollutantType"(): $IPollutant$Type
public static "isGasBlock"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "canCauseExplosion"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "pushedBy"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $Direction$Type): boolean
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "lowerExplosiveLimit"(): integer
get "pollutantType"(): $IPollutant$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGas$Type = ($AbstractGas);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGas_ = $AbstractGas$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IFilterFrame" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$IStorage, $IStorage$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export interface $IFilterFrame<T extends $BlockEntity> extends $IStorage<(T)> {

 "fill"(arg0: T, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "getContent"(arg0: T): $IStorage$Content
 "free"(arg0: T, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
 "getInitialCapacity"(arg0: T): integer
 "_handleChanges"(arg0: $IStorage$Content$Type, arg1: T): void
 "onContentChanged"(arg0: $IStorage$Content$Type, arg1: T): void
 "removeFiltersFor"(arg0: T, ...arg1: ($Pollutant$Type<(any)>)[]): void
 "installFiltersFor"(arg0: T, ...arg1: ($Pollutant$Type<(any)>)[]): void
}

export namespace $IFilterFrame {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilterFrame$Type<T> = ($IFilterFrame<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFilterFrame_<T> = $IFilterFrame$Type<(T)>;
}}
declare module "packages/com/endertech/common/$CommonString$Joiner" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CommonString$Joiner {

constructor(arg0: string)

public "join"(...arg0: (string)[]): string
public static "with"(arg0: string): $CommonString$Joiner
public "getDelimiter"(): string
get "delimiter"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonString$Joiner$Type = ($CommonString$Joiner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonString$Joiner_ = $CommonString$Joiner$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IEmitter" {
import {$IEmitter$Type, $IEmitter$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRelatedUnit, $IRelatedUnit$Type} from "packages/com/endertech/minecraft/forge/units/$IRelatedUnit"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$KeyValuePair, $KeyValuePair$Type} from "packages/com/endertech/common/$KeyValuePair"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IEmitter extends $IRelatedUnit, $IPostInit {

 "getType"(): $IEmitter$Type
 "isActive"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
 "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "isIdentified"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>): boolean
 "getRelatedBlocks"(): $Set<($BlockState)>
 "getActiveTag"(): string
 "getIdentityTag"(): $KeyValuePair
 "getRelatedId"(): $UnitId
 "onPostInit"(): void
 "getConfig"(): $UnitConfig
 "getClassCategory"(arg0: string): string
 "getClassCategory"(): string
 "saveConfig"(): void
 "expandClassCategory"(arg0: string, arg1: string): string
 "expandClassCategory"(arg0: string): string
}

export namespace $IEmitter {
const COMMON_ACTIVE_TAG_NAME: $Predicate<(string)>
const COMMENT_ACTIVE_STATE_TAG: string
const COMMENT_IDENTITY_TAG: string
const COMMENT_TYPE: string
const COMMENT_RELATED_BLOCKS: string
const TAG_HARDCODED: string
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandCategory(arg0: string, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmitter$Type = ($IEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmitter_ = $IEmitter$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Properties" {
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export class $FilterFrame$Properties<T extends $FilterFrame$Properties<(T)>> extends $ForgeBlock$Properties<(T)> {
 "airPurifierEffectiveRadius": integer
 "airPurifierMaxRadius": integer
 "waterPurifierMaxRadius": integer
 "waterPurifierEfficiency": $Percentage
 "slotLimit": integer
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public static "of"(arg0: string): $FilterFrame$Properties<(any)>
public "waterPurifier"(arg0: integer, arg1: $Percentage$Type): T
public "slotLimit"(arg0: integer): T
public "airPurifier"(arg0: integer, arg1: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$Properties$Type<T> = ($FilterFrame$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$Properties_<T> = $FilterFrame$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$RegisterGuiOverlaysEvent, $RegisterGuiOverlaysEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterGuiOverlaysEvent"
import {$ServerCommand, $ServerCommand$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand"
import {$ItemModel$RegistryWrapper, $ItemModel$RegistryWrapper$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$RegistryWrapper"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Namespace, $Namespace$Type} from "packages/com/endertech/minecraft/forge/data/$Namespace"
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$Type} from "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$ItemModel$Properties, $ItemModel$Properties$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties"
import {$PlayerRenderer, $PlayerRenderer$Type} from "packages/net/minecraft/client/renderer/entity/player/$PlayerRenderer"
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$AbstractForgeMod$RequiredSide, $AbstractForgeMod$RequiredSide$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RegisterParticleProvidersEvent, $RegisterParticleProvidersEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterParticleProvidersEvent"
import {$RegisterKeyMappingsEvent, $RegisterKeyMappingsEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterKeyMappingsEvent"
import {$AbstractForgeMod$ConfigValueBuilder, $AbstractForgeMod$ConfigValueBuilder$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder"
import {$PlayerModel, $PlayerModel$Type} from "packages/net/minecraft/client/model/$PlayerModel"
import {$Connection, $Connection$Type} from "packages/com/endertech/minecraft/forge/network/$Connection"
import {$DataCollector, $DataCollector$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $AbstractForgeMod {


public "getLogger"(): $Logger
public "getId"(): string
public static "isLoaded"(arg0: string): boolean
public "getConnection"(): $Connection
public "getNamespace"(): $Namespace
public "commonInit"(): void
public "clientBuildCreativeModeTab"(arg0: $BuildCreativeModeTabContentsEvent$Type): void
public "clientAddRenderLayers"(): void
public "clientReplaceModels"(arg0: $ItemModel$RegistryWrapper$Type): void
public "clientRegisterItemModelProperties"(arg0: $ItemModel$Properties$Type<(any)>): void
public "clientRegisterParticleProviders"(arg0: $RegisterParticleProvidersEvent$Type): void
public "clientRegisterGuiOverlays"(arg0: $RegisterGuiOverlaysEvent$Type): void
public "clientRegisterKeyMappings"(arg0: $RegisterKeyMappingsEvent$Type): void
public "clientRegisterRenderers"(): void
public "addPostInitRunnable"(arg0: $Runnable$Type): void
public "addPlayerRenderLayer"(arg0: $Function$Type<($PlayerRenderer$Type), ($RenderLayer$Type<($AbstractClientPlayer$Type), ($PlayerModel$Type<($AbstractClientPlayer$Type)>)>)>): void
public "clientInit"(): void
public "isClientSide"(): boolean
public "clientConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "getForgeEventBus"(): $IEventBus
public "getRequiredSide"(): $AbstractForgeMod$RequiredSide
public "commonPostInit"(): void
public "commonConfigInit"(arg0: $AbstractForgeMod$ConfigValueBuilder$Type): void
public "configUpdated"(arg0: $ModConfig$Type): void
public "setRenderLayer"(arg0: $Block$Type, arg1: $RenderType$Type): void
public "setRenderLayer"(arg0: $Fluid$Type, arg1: $RenderType$Type): void
public "registerCommands"(arg0: $ServerCommand$Type, arg1: $CommandBuildContext$Type): void
public static "singletonInstance"<T>(arg0: string, arg1: $Class$Type<(T)>): $Lazy<($Optional<(T)>)>
public "getConfigsDir"(): $Path
public "gatherData"(arg0: $DataCollector$Type): void
public "getModEventBus"(): $IEventBus
public "tagsUpdated"(): void
get "logger"(): $Logger
get "id"(): string
get "connection"(): $Connection
get "namespace"(): $Namespace
get "clientSide"(): boolean
get "forgeEventBus"(): $IEventBus
get "requiredSide"(): $AbstractForgeMod$RequiredSide
get "configsDir"(): $Path
get "modEventBus"(): $IEventBus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$Type = ($AbstractForgeMod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod_ = $AbstractForgeMod$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$BlockItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FilterFrame$BlockItem extends $BlockItem implements $IStorageItem {
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

constructor(arg0: $ForgeBlock$Type, arg1: $Item$Properties$Type)

public "getInitialCapacity"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getContent"(arg0: $ItemStack$Type): $IStorage$Content
public "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "fill"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "free"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "removeFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "installFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$BlockItem$Type = ($FilterFrame$BlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$BlockItem_ = $FilterFrame$BlockItem$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/entities/$AbstractCarrier" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$BlockStateCarrier, $BlockStateCarrier$Type} from "packages/com/endertech/minecraft/forge/entities/$BlockStateCarrier"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $AbstractCarrier extends $BlockStateCarrier {
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "canBeCollidedWith"(): boolean
public "tick"(): void
public "getPollutionCapacity"(): integer
public "pump"(): boolean
public "spend"(): boolean
public "getPollutant"(): $Optional<($Pollutant<(any)>)>
public "getPollutionAmount"(): integer
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "pollutionCapacity"(): integer
get "pollutant"(): $Optional<($Pollutant<(any)>)>
get "pollutionAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCarrier$Type = ($AbstractCarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCarrier_ = $AbstractCarrier$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/entities/$GasEntity" {
import {$AbstractCarrier, $AbstractCarrier$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$AbstractCarrier"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $GasEntity extends $AbstractCarrier {
static readonly "FULL_RENDER_SCALE": float
static "maxGasEntitiesInChunk": $ForgeConfigSpec$ConfigValue<(integer)>
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
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "ignoreExplosion"(): boolean
public "baseTick"(): void
public "isStuck"(): boolean
public "setStuck"(arg0: boolean): void
public "updateRenderSizeXZ"(): void
public "fasterThan"(arg0: $GasEntity$Type): boolean
public "getRenderOffset"(arg0: $Direction$Axis$Type): float
public "getRenderScale"(arg0: $Direction$Axis$Type): float
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "stuck"(): boolean
set "stuck"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasEntity$Type = ($GasEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasEntity_ = $GasEntity$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$DimensionId" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DimensionId {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "from"(arg0: $ResourceKey$Type<($Level$Type)>): $DimensionId
public static "from"(arg0: $ResourceLocation$Type): $DimensionId
public static "from"(arg0: $Level$Type): $DimensionId
public "getKey"(): $ResourceKey<($Level)>
public "toResourceLocation"(): $ResourceLocation
public "belongsTo"(arg0: $Level$Type): boolean
get "key"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionId$Type = ($DimensionId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionId_ = $DimensionId$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney$Properties" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"

export class $Chimney$Properties<T extends $Chimney$Properties<(T)>> extends $Container$Properties<(T)> {
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public static "of"(arg0: string): $Chimney$Properties<(any)>
public "narrow"(arg0: integer): T
public "wallThickness"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chimney$Properties$Type<T> = ($Chimney$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chimney$Properties_<T> = $Chimney$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/types/$ParticleType$Builder" {
import {$ParticleType, $ParticleType$Type} from "packages/com/endertech/minecraft/forge/types/$ParticleType"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $ParticleType$Builder<T extends $ParticleOptions> {


public "build"(): $ParticleType<(T)>
public "alwaysShow"(): $ParticleType$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleType$Builder$Type<T> = ($ParticleType$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleType$Builder_<T> = $ParticleType$Builder$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$LanguageProviderFactory" {
import {$LanguageProvider, $LanguageProvider$Type} from "packages/net/minecraftforge/common/data/$LanguageProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"

export interface $DataCollector$LanguageProviderFactory<T extends $LanguageProvider> {

 "create"(arg0: $PackOutput$Type, arg1: string, arg2: string): T

(arg0: $PackOutput$Type, arg1: string, arg2: string): T
}

export namespace $DataCollector$LanguageProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$LanguageProviderFactory$Type<T> = ($DataCollector$LanguageProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$LanguageProviderFactory_<T> = $DataCollector$LanguageProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IWriter" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ForgeNetMsg$IWriter<T> {

 "write"(arg0: T, arg1: $FriendlyByteBuf$Type): void

(arg0: T, arg1: $FriendlyByteBuf$Type): void
}

export namespace $ForgeNetMsg$IWriter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$IWriter$Type<T> = ($ForgeNetMsg$IWriter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg$IWriter_<T> = $ForgeNetMsg$IWriter$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$ConfigValueBuilder" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $AbstractForgeMod$ConfigValueBuilder {
readonly "builder": $ForgeConfigSpec$Builder

constructor()

public "comment"(arg0: string): $AbstractForgeMod$ConfigValueBuilder
public "shared"(arg0: string): void
public "push"(arg0: string): $AbstractForgeMod$ConfigValueBuilder
public "pop"(): $AbstractForgeMod$ConfigValueBuilder
public "define"(arg0: string, arg1: $ColorARGB$Type): $ForgeConfigSpec$ConfigValue<(integer)>
public "define"(arg0: string, arg1: boolean): $ForgeConfigSpec$ConfigValue<(boolean)>
public "defineEnum"<T extends $Enum<(T)>>(arg0: string, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInRange"(arg0: string, arg1: float, arg2: $FloatBounds$Type): $ForgeConfigSpec$ConfigValue<(double)>
public "defineInRange"(arg0: string, arg1: integer, arg2: $IntBounds$Type): $ForgeConfigSpec$ConfigValue<(integer)>
public "defineList"(arg0: string, arg1: (string)[], arg2: $Predicate$Type<(string)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "worldRestart"(): $AbstractForgeMod$ConfigValueBuilder
public "defineFactor"(arg0: string, arg1: float): $ForgeConfigSpec$ConfigValue<(double)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractForgeMod$ConfigValueBuilder$Type = ($AbstractForgeMod$ConfigValueBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractForgeMod$ConfigValueBuilder_ = $AbstractForgeMod$ConfigValueBuilder$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$ClientDataProviderFactory" {
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export interface $DataCollector$ClientDataProviderFactory<T extends $DataProvider> {

 "create"(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$ClientDataProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$ClientDataProviderFactory$Type<T> = ($DataCollector$ClientDataProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$ClientDataProviderFactory_<T> = $DataCollector$ClientDataProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pipe" {
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IPole, $IPole$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPole"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"

export class $Pipe extends $Container implements $IPole {
static readonly "SHAPE": $VoxelShape
static "maxPipesAtOnce": $ForgeConfigSpec$ConfigValue<(integer)>
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $Container$Properties$Type<(any)>)

public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "isApex"(arg0: $BlockState$Type): boolean
public "isPole"(arg0: $BlockState$Type): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public static "replaceWith"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): boolean
public "getTop"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public "playPlaceSound"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "buildUp"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer): integer
public static "isEmptyPlace"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "isApex"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "breakBy"(arg0: $Player$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: integer): void
public "isPole"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "canBuildUp"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "breakDown"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: boolean): integer
public "canStayAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "buildBy"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $InteractionHand$Type, arg4: $BlockHitResult$Type, arg5: integer): $InteractionResult
public "getBottom"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "type"(): $ISmokeContainer$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pipe$Type = ($Pipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pipe_ = $Pipe$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Property$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Property$Type extends $Enum<($Property$Type)> {
static readonly "STRING": $Property$Type
static readonly "INTEGER": $Property$Type
static readonly "BOOLEAN": $Property$Type
static readonly "DOUBLE": $Property$Type
static readonly "COLOR": $Property$Type
static readonly "MOD_ID": $Property$Type


public static "values"(): ($Property$Type)[]
public static "valueOf"(arg0: string): $Property$Type
public "getID"(): character
public static "tryParse"(arg0: character): $Property$Type
get "iD"(): character
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Property$Type$Type = (("boolean") | ("mod_id") | ("string") | ("color") | ("double") | ("integer")) | ($Property$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Property$Type_ = $Property$Type$Type;
}}
declare module "packages/com/endertech/minecraft/forge/core/$IPostInit" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPostInit {

 "onPostInit"(): void

(): void
}

export namespace $IPostInit {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPostInit$Type = ($IPostInit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPostInit_ = $IPostInit$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts$ImpactType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $AbstractPollutionImpacts$ImpactType extends $Enum<($AbstractPollutionImpacts$ImpactType)> implements $IForgeEnum {
static readonly "CONTACT": $AbstractPollutionImpacts$ImpactType
static readonly "RAIN": $AbstractPollutionImpacts$ImpactType
static readonly "AIR": $AbstractPollutionImpacts$ImpactType


public static "values"(): ($AbstractPollutionImpacts$ImpactType)[]
public static "valueOf"(arg0: string): $AbstractPollutionImpacts$ImpactType
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPollutionImpacts$ImpactType$Type = (("rain") | ("contact") | ("air")) | ($AbstractPollutionImpacts$ImpactType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractPollutionImpacts$ImpactType_ = $AbstractPollutionImpacts$ImpactType$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$WorldBounds" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $WorldBounds {


public "min"(): $BlockPos
public "max"(): $BlockPos
public "offset"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public static "from"(arg0: $IntBounds$Type, arg1: $IntBounds$Type, arg2: $IntBounds$Type): $WorldBounds
public static "from"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $WorldBounds
public static "from"(arg0: $BlockPos$Type, arg1: integer): $WorldBounds
public "forEach"(arg0: $Consumer$Type<(any)>): void
public "reduce"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public "reduce"(arg0: integer): $WorldBounds
public "relative"(arg0: $BlockPos$Type): $BlockPos
public "getY"(): $IntBounds
public "encloses"(arg0: $BlockPos$Type): boolean
public "extend"(arg0: integer, arg1: integer, arg2: integer): $WorldBounds
public "extend"(arg0: integer): $WorldBounds
public "extend"(arg0: $Direction$Type, arg1: integer): $WorldBounds
public "getZ"(): $IntBounds
public "getHeight"(): integer
public "within"(arg0: $WorldBounds$Type): boolean
public "vertex"(arg0: $BlockPos$Type): boolean
public "edge"(arg0: $BlockPos$Type): boolean
public "face"(arg0: $BlockPos$Type): boolean
public "getX"(): $IntBounds
public "randomPos"(arg0: $Random$Type): $BlockPos
public "toAABB"(): $AABB
public static "chunksAround"(arg0: $LevelHeightAccessor$Type, arg1: $ChunkPos$Type): $WorldBounds
public static "getHeightBounds"(arg0: $LevelHeightAccessor$Type): $IntBounds
public static "horizPlane"(arg0: $BlockPos$Type, arg1: integer): $WorldBounds
public static "vertPlane"(arg0: $BlockPos$Type, arg1: integer, arg2: $Direction$Type): $WorldBounds
get "y"(): $IntBounds
get "z"(): $IntBounds
get "height"(): integer
get "x"(): $IntBounds
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldBounds$Type = ($WorldBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldBounds_ = $WorldBounds$Type;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$TileInventory" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"

export class $TileInventory extends $ItemStackHandler {

constructor(arg0: $BlockEntity$Type, arg1: integer)

public "getTile"(): $BlockEntity
get "tile"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileInventory$Type = ($TileInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileInventory_ = $TileInventory$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$BaseFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $PollutedWater$BaseFluid extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>


public "canBeReplacedWith"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Fluid$Type, arg4: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$BaseFluid$Type = ($PollutedWater$BaseFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater$BaseFluid_ = $PollutedWater$BaseFluid$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$MultiConfigProperty$BaseProperty" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"

export class $MultiConfigProperty$BaseProperty<K, V> {


public "getName"(): string
public "get"(arg0: K): V
public "getDefaultValue"(): V
public "getFrom"(arg0: $UnitConfig$Type, arg1: string, arg2: V): V
public "getComment"(): string
public "getCategory"(): string
public "resetToDefaultValue"(): void
public "putValueFrom"(arg0: $UnitConfig$Type, arg1: K, arg2: boolean): void
get "name"(): string
get "defaultValue"(): V
get "comment"(): string
get "category"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiConfigProperty$BaseProperty$Type<K, V> = ($MultiConfigProperty$BaseProperty<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiConfigProperty$BaseProperty_<K, V> = $MultiConfigProperty$BaseProperty$Type<(K), (V)>;
}}
declare module "packages/com/endertech/minecraft/forge/entities/$BlockStateCarrier" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$ForgeEntity, $ForgeEntity$Type} from "packages/com/endertech/minecraft/forge/entities/$ForgeEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $BlockStateCarrier extends $ForgeEntity {
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getCarriedBlockState"(): $Optional<($BlockState)>
public "carriesSameBlock"(arg0: $Optional$Type<(any)>): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "carriedBlockState"(): $Optional<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateCarrier$Type = ($BlockStateCarrier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateCarrier_ = $BlockStateCarrier$Type;
}}
declare module "packages/com/endertech/common/$FloatBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"

export class $FloatBounds implements $IBounds<(float)> {
static readonly "ZERO": $FloatBounds
static readonly "FLOAT": $FloatBounds
static readonly "FLOAT_POSITIVE": $FloatBounds

constructor(arg0: float, arg1: float)

public "equals"(arg0: any): boolean
public "length"(): float
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: float): $FloatBounds
public static "of"(arg0: float): $FloatBounds
public static "of"(arg0: $IBounds$Type<(any)>): $FloatBounds
public "offset"(arg0: float): $FloatBounds
public "reduce"(arg0: float): $FloatBounds
public static "between"(arg0: float, arg1: float): $FloatBounds
public "getMin"(): float
public "getMax"(): float
public "encloses"(arg0: float): boolean
public "extend"(arg0: float): $FloatBounds
public "within"(arg0: $IBounds$Type<(float)>): boolean
public "enclose"(arg0: float): float
public "corners"(arg0: float): boolean
public "interpolationFactor"(arg0: float): float
public "unite"(arg0: $IBounds$Type<(float)>): $FloatBounds
public "randomBetween"(arg0: $Random$Type): float
public "interpolateUp"(arg0: float): float
public "randomFits"(arg0: float): boolean
public "interpolateDown"(arg0: float): float
public "interpolateTo"(arg0: $IBounds$Type<(float)>): $CommonMath$Interpolation<(float)>
get "min"(): float
get "max"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloatBounds$Type = ($FloatBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FloatBounds_ = $FloatBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$AirPurifier" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$IPurifier, $IPurifier$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IPurifier"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FilterFrame$AirPurifier implements $IPurifier {
static readonly "MAX_RADIUS": integer
readonly "effectiveRadius": integer
readonly "maximumRadius": integer

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: integer, arg3: integer)

public "hasProperOutput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "hasProperInput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "getPumpPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public "getOutputPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
public "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "spawnParticle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $SimpleParticleType$Type): void
public "hasActivePump"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "hasActiveFilter"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$AirPurifier$Type = ($FilterFrame$AirPurifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$AirPurifier_ = $FilterFrame$AirPurifier$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas$Properties" {
import {$Pollutant$Properties, $Pollutant$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Properties"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$ChunkPollution$Influence, $ChunkPollution$Influence$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$ChunkPollution$Influence"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $AbstractGas$Properties<T extends $AbstractGas$Properties<(T)>> extends $Pollutant$Properties<(T)> {
 "absorbtionChance": integer
 "lowerExplosiveLimit": integer
 "chunkPollutionInfluence": $ChunkPollution$Influence
 "affectedByWind": boolean
readonly "mapColor": $MapColor
 "textColor": $ChatFormatting
 "criticalAmount": integer
 "concentrationAltitude": integer
 "motionVelocity": float
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public static "of"(arg0: string, arg1: $MapColor$Type): $AbstractGas$Properties<(any)>
public "lowerExplosiveLimit"(arg0: integer): T
public "alwaysAffectChunkPollution"(): T
public "neverAffectChunkPollution"(): T
public "absorbtionChance"(arg0: integer): T
public "ignoreWind"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGas$Properties$Type<T> = ($AbstractGas$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractGas$Properties_<T> = $AbstractGas$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$ForgeTileWithInventory" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ForgeTile, $ForgeTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ForgeTile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$TileInventory, $TileInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$TileInventory"

export class $ForgeTileWithInventory extends $ForgeTile implements $MenuProvider {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "canInteractWith"(arg0: $Player$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "saveAdditional"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "getTileInventory"(): $TileInventory
public "openGuiScreenFor"(arg0: $ServerPlayer$Type): void
public "getDisplayName"(): $Component
public "shouldCloseCurrentScreen"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "tileInventory"(): $TileInventory
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeTileWithInventory$Type = ($ForgeTileWithInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeTileWithInventory_ = $ForgeTileWithInventory$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$IForgeEnum" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $IForgeEnum extends $StringRepresentable {

 "getName"(): string
 "getSerializedName"(): string
}

export namespace $IForgeEnum {
function fromEnum<E>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
function fromEnumWithMapping<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
function keys(arg0: ($StringRepresentable$Type)[]): $Keyable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEnum$Type = ($IForgeEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEnum_ = $IForgeEnum$Type;
}}
declare module "packages/com/endertech/minecraft/forge/world/$ChunkLoc" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LevelHeightAccessor, $LevelHeightAccessor$Type} from "packages/net/minecraft/world/level/$LevelHeightAccessor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INBTSerializable"
import {$INetSerializable, $INetSerializable$Type} from "packages/com/endertech/minecraft/forge/data/$INetSerializable"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$DimensionId, $DimensionId$Type} from "packages/com/endertech/minecraft/forge/world/$DimensionId"
import {$ChunkBounds, $ChunkBounds$Type} from "packages/com/endertech/minecraft/forge/world/$ChunkBounds"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ChunkLoc implements $INetSerializable<($ChunkLoc)>, $INBTSerializable<($ChunkLoc)> {
static readonly "ZERO": $ChunkLoc

constructor(arg0: $DimensionId$Type, arg1: $ChunkPos$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "contains"(arg0: $Entity$Type): boolean
public static "from"(arg0: $LevelChunk$Type): $ChunkLoc
public static "from"(arg0: $Level$Type, arg1: $ChunkPos$Type): $ChunkLoc
public "getBounds"(arg0: $LevelHeightAccessor$Type): $ChunkBounds
public "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
public "writeTo"(arg0: $FriendlyByteBuf$Type): $FriendlyByteBuf
public "getPos"(): $ChunkPos
public "getChunk"(arg0: $Level$Type): $Optional<($LevelChunk)>
public "getDimensionId"(): $DimensionId
public "existsIn"(arg0: $Level$Type): boolean
get "pos"(): $ChunkPos
get "dimensionId"(): $DimensionId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoc$Type = ($ChunkLoc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkLoc_ = $ChunkLoc$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer" {
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export interface $ISmokeContainer {

 "getType"(): $ISmokeContainer$Type
 "is"(arg0: $ISmokeContainer$Type$Type): boolean
 "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
/**
 * 
 * @deprecated
 */
 "getColor"(): $ColorARGB
 "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
 "isPump"(): boolean
 "isVent"(): boolean
 "isChimney"(): boolean
 "isPipe"(): boolean
}

export namespace $ISmokeContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISmokeContainer$Type = ($ISmokeContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISmokeContainer_ = $ISmokeContainer$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$ItemTagsProviderFactory" {
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$TagsProvider$TagLookup, $TagsProvider$TagLookup$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagLookup"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ItemTagsProvider, $ItemTagsProvider$Type} from "packages/net/minecraft/data/tags/$ItemTagsProvider"

export interface $DataCollector$ItemTagsProviderFactory<T extends $ItemTagsProvider> {

 "create"(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: $CompletableFuture$Type<($TagsProvider$TagLookup$Type<($Block$Type)>)>, arg3: string, arg4: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: $CompletableFuture$Type<($TagsProvider$TagLookup$Type<($Block$Type)>)>, arg3: string, arg4: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$ItemTagsProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$ItemTagsProviderFactory$Type<T> = ($DataCollector$ItemTagsProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$ItemTagsProviderFactory_<T> = $DataCollector$ItemTagsProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ISmokeContainer$Type extends $Enum<($ISmokeContainer$Type)> implements $IForgeEnum {
static readonly "CHIMNEY": $ISmokeContainer$Type
static readonly "VENT": $ISmokeContainer$Type
static readonly "PUMP": $ISmokeContainer$Type
static readonly "PIPE": $ISmokeContainer$Type


public static "values"(): ($ISmokeContainer$Type)[]
public static "valueOf"(arg0: string): $ISmokeContainer$Type
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISmokeContainer$Type$Type = (("chimney") | ("vent") | ("pipe") | ("pump")) | ($ISmokeContainer$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISmokeContainer$Type_ = $ISmokeContainer$Type$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$BlockTile" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ForgeTileWithInventory, $ForgeTileWithInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$ForgeTileWithInventory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ITickableUnit, $ITickableUnit$Type} from "packages/com/endertech/minecraft/forge/units/$ITickableUnit"
import {$TileInventory, $TileInventory$Type} from "packages/com/endertech/minecraft/forge/tiles/$TileInventory"

export class $FilterFrame$BlockTile extends $ForgeTileWithInventory implements $ITickableUnit {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "isActive"(): boolean
public "exists"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getDisplayName"(): $Component
public "isValidFilterMaterial"(arg0: $ItemStack$Type): boolean
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "getWorldLevel"(): $Level
public "getUpdateInterval"(): $GameTime
public "getTargetPollutants"(): $List<($Pollutant<(any)>)>
public "getTileInventory"(): $TileInventory
public "getFilterMaterial"(): $ItemStack
public "getByproduct"(): $ItemStack
public "onUpdate"(): void
public "getRenderMaterial"(): $ItemStack
public "tick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "active"(): boolean
get "displayName"(): $Component
get "worldLevel"(): $Level
get "updateInterval"(): $GameTime
get "targetPollutants"(): $List<($Pollutant<(any)>)>
get "tileInventory"(): $TileInventory
get "filterMaterial"(): $ItemStack
get "byproduct"(): $ItemStack
get "renderMaterial"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$BlockTile$Type = ($FilterFrame$BlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$BlockTile_ = $FilterFrame$BlockTile$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump" {
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Pump$Tile, $Pump$Tile$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Pump$Tile"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $Pump extends $Container implements $ITiledBlock<($Pump$Tile)> {
static "invertedRedstoneSignal": $ForgeConfigSpec$ConfigValue<(boolean)>
static "energyStorageEnabled": $ForgeConfigSpec$ConfigValue<(boolean)>
static "energyStorageCapacity": $ForgeConfigSpec$ConfigValue<(integer)>
static "energyStorageConsumption": $ForgeConfigSpec$ConfigValue<(integer)>
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $Container$Properties$Type<(any)>)

public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTileClass"(): $Class<($Pump$Tile)>
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($Pump$Tile)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "type"(): $ISmokeContainer$Type
get "tileClass"(): $Class<($Pump$Tile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pump$Type = ($Pump);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pump_ = $Pump$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties$IPropertyGetter" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ItemPropertyFunction, $ItemPropertyFunction$Type} from "packages/net/minecraft/client/renderer/item/$ItemPropertyFunction"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ItemModel$Properties$IPropertyGetter extends $ItemPropertyFunction {

 "get"(arg0: $ItemStack$Type, arg1: $Optional$Type<($ClientLevel$Type)>, arg2: $Optional$Type<($LivingEntity$Type)>): float
/**
 * 
 * @deprecated
 */
 "call"(arg0: $ItemStack$Type, arg1: $ClientLevel$Type, arg2: $LivingEntity$Type, arg3: integer): float

(arg0: $ItemStack$Type, arg1: $Optional$Type<($ClientLevel$Type)>, arg2: $Optional$Type<($LivingEntity$Type)>): float
}

export namespace $ItemModel$Properties$IPropertyGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$Properties$IPropertyGetter$Type = ($ItemModel$Properties$IPropertyGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$Properties$IPropertyGetter_ = $ItemModel$Properties$IPropertyGetter$Type;
}}
declare module "packages/com/endertech/common/$IBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export interface $IBounds<T extends number> {

 "length"(): T
 "offset"(arg0: T): $IBounds<(T)>
 "reduce"(arg0: T): $IBounds<(T)>
 "getMin"(): T
 "getMax"(): T
 "center"(): T
 "fit"(arg0: $IBounds$Type<(T)>): $IBounds<(T)>
 "encloses"(arg0: T): boolean
 "extend"(arg0: T): $IBounds<(T)>
 "within"(arg0: $IBounds$Type<(T)>): boolean
 "enclose"(arg0: T): T
 "corners"(arg0: T): boolean
 "interpolationFactor"(arg0: T): float
 "unite"(arg0: $IBounds$Type<(T)>): $IBounds<(T)>
 "interpolateTo"(arg0: $IBounds$Type<(T)>): $CommonMath$Interpolation<(T)>
 "randomBetween"(): T
 "randomBetween"(arg0: $Random$Type): T
 "interpolateUp"(arg0: float): T
 "randomFits"(arg0: T): boolean
 "interpolateDown"(arg0: float): T
}

export namespace $IBounds {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBounds$Type<T> = ($IBounds<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBounds_<T> = $IBounds$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$StillFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$PollutedWater$BaseFluid, $PollutedWater$BaseFluid$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$BaseFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $PollutedWater$StillFluid extends $PollutedWater$BaseFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$StillFluid$Type = ($PollutedWater$StillFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater$StillFluid_ = $PollutedWater$StillFluid$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Vent" {
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Container$Tile, $Container$Tile$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Tile"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $Vent extends $Container implements $ITiledBlock<($Container$Tile)> {
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $Container$Properties$Type<(any)>)

public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTileClass"(): $Class<($Container$Tile)>
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($Container$Tile)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "type"(): $ISmokeContainer$Type
get "tileClass"(): $Class<($Container$Tile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vent$Type = ($Vent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vent_ = $Vent$Type;
}}
declare module "packages/com/endertech/minecraft/forge/units/$UnitId" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockStatesSet, $BlockStatesSet$Type} from "packages/com/endertech/minecraft/forge/blocks/$BlockStatesSet"
import {$StateHolder, $StateHolder$Type} from "packages/net/minecraft/world/level/block/state/$StateHolder"

export class $UnitId {
static readonly "EMPTY": $UnitId
static readonly "FORMAT_FULL": string
static readonly "DESCRIPTION": string
static readonly "DELIMITER": string
static readonly "TAG": string
static readonly "MOD_ID_MINECRAFT": string
static readonly "REG_NAME_WORDS_DELIMITER": string
static readonly "UNLOCALIZED_NAME_DELIMITER": string
static readonly "INCODE_DELIMITER": string
static readonly "PATTERN": $Pattern
static readonly "PROPS_OPENING_BRACKET": string
static readonly "PROPS_CLOSING_BRACKET": string
static readonly "PROPS_DELIMITER": string
static readonly "META_DEFAULT": integer
static readonly "META_ALL_INT": integer
static readonly "META_EMPTY": string
static readonly "META_ALL_CHAR": string
static readonly "META_EMPTY_PROPS": string

constructor(arg0: string, arg1: string, arg2: string, arg3: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "matches"(arg0: $BlockState$Type): boolean
public "matches"(arg0: $Item$Type): boolean
public static "from"(arg0: string, arg1: string): $UnitId
public static "from"(arg0: $ResourceLocation$Type): $UnitId
public static "from"(arg0: $ResourceLocation$Type, arg1: string): $UnitId
public static "from"(arg0: string, arg1: string, arg2: integer): $UnitId
public static "from"(arg0: $Fluid$Type, arg1: string): $UnitId
public static "from"(arg0: $BlockState$Type): $UnitId
public static "from"(arg0: $Block$Type): $UnitId
public static "from"(arg0: $Block$Type, arg1: string): $UnitId
public static "from"(arg0: $FluidState$Type): $UnitId
public static "from"(arg0: $Item$Type): $UnitId
public static "from"(arg0: string): $UnitId
public static "from"(arg0: $Enum$Type<(any)>, arg1: string): $UnitId
public static "from"(arg0: $Path$Type): $UnitId
public static "from"(arg0: string, ...arg1: (string)[]): $UnitId
public "notEmpty"(): boolean
public "getModId"(): string
public static "isNullOrEmpty"(arg0: $UnitId$Type): boolean
public "withName"(...arg0: (string)[]): $UnitId
public "withName"(arg0: string): $UnitId
public static "splitRegName"(arg0: string, arg1: boolean, arg2: boolean): (string)[]
public "getBlockProperties"(): $BlockBehaviour$Properties
public "getAllMatchedBlockStates"(): $BlockStatesSet
public "getAllMatchedFluids"(): $Collection<($Fluid)>
public "getFirstMatchedState"(): $BlockState
public "getFirstMatchedItem"(): $Item
public "getFirstMatchedFluid"(): $Fluid
public "withMetaData"(arg0: string): $UnitId
public "hasMetaData"(): boolean
public "withMetaAll"(): $UnitId
public "getMetaData"(): string
public "isTag"(): boolean
public "getMeta"(): integer
public "getAllMatchedItems"(): $Collection<($Item)>
public "toResLoc"(): $ResourceLocation
public "getRegName"(): string
public static "buildDictName"(...arg0: (string)[]): string
public static "regToDictName"(arg0: string): string
public static "splitDictName"(arg0: string): (string)[]
public static "buildRegName"(...arg0: (string)[]): string
public static "statePropsAsString"(arg0: $StateHolder$Type<(any), (any)>): string
public static "dictToRegName"(arg0: string): string
public static "capitalizeWords"(...arg0: (string)[]): (string)[]
public static "joinWords"(arg0: string, ...arg1: (string)[]): string
public static "getClassRegName"(arg0: $Class$Type<(any)>): string
public "withNameSuffix"(arg0: string): $UnitId
public "toConfigName"(): string
public "hasProperties"(): boolean
public "withNamePrefix"(arg0: string): $UnitId
get "empty"(): boolean
get "modId"(): string
get "blockProperties"(): $BlockBehaviour$Properties
get "allMatchedBlockStates"(): $BlockStatesSet
get "allMatchedFluids"(): $Collection<($Fluid)>
get "firstMatchedState"(): $BlockState
get "firstMatchedItem"(): $Item
get "firstMatchedFluid"(): $Fluid
get "metaData"(): string
get "tag"(): boolean
get "meta"(): integer
get "allMatchedItems"(): $Collection<($Item)>
get "regName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnitId$Type = ($UnitId);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UnitId_ = $UnitId$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumBag" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$VacuumBag$Properties, $VacuumBag$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/items/$VacuumBag$Properties"
import {$IStorage$Content, $IStorage$Content$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content"
import {$EquipmentItem, $EquipmentItem$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $VacuumBag extends $EquipmentItem implements $IStorageItem {
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

constructor(arg0: $UnitConfig$Type, arg1: $VacuumBag$Properties$Type<(any)>)

public "fill"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "getInitialCapacity"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getContent"(arg0: $ItemStack$Type): $IStorage$Content
public "onContentChanged"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "free"(arg0: $ItemStack$Type, arg1: $Pollutant$Type<(any)>, arg2: integer): integer
public "_handleChanges"(arg0: $IStorage$Content$Type, arg1: $ItemStack$Type): void
public "removeFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public "installFiltersFor"(arg0: $ItemStack$Type, ...arg1: ($Pollutant$Type<(any)>)[]): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumBag$Type = ($VacuumBag);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumBag_ = $VacuumBag$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties" {
import {$UnitProperties, $UnitProperties$Type} from "packages/com/endertech/minecraft/forge/units/$UnitProperties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export class $ForgeBlock$Properties<T extends $ForgeBlock$Properties<(T)>> extends $UnitProperties<(T)> {
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public static "of"(arg0: string): $ForgeBlock$Properties<(any)>
public "randomTicks"(): T
public "noOcclusion"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeBlock$Properties$Type<T> = ($ForgeBlock$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeBlock$Properties_<T> = $ForgeBlock$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Arg" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SuggestionProvider, $SuggestionProvider$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionProvider"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"

export class $ServerCommand$Arg<T> {


public "getName"(): string
public static "of"<T>(arg0: string, arg1: $ArgumentType$Type<(T)>, arg2: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(T)>
public static "of"<T>(arg0: string, arg1: $ArgumentType$Type<(T)>): $ServerCommand$Arg<(T)>
public static "bounds"(arg0: string, arg1: $IntBounds$Type): $ServerCommand$Arg<($IntBounds)>
public static "bounds"(arg0: string, arg1: $FloatBounds$Type): $ServerCommand$Arg<($FloatBounds)>
public "getType"(): $ArgumentType<(T)>
public static "color"(arg0: string): $ServerCommand$Arg<($ColorARGB)>
public static "string"(arg0: string): $ServerCommand$Arg<(string)>
public static "string"(arg0: string, arg1: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(string)>
public static "integer"(arg0: string, arg1: $IntBounds$Type): $ServerCommand$Arg<(integer)>
public static "word"(arg0: string, arg1: $SuggestionProvider$Type<($CommandSourceStack$Type)>): $ServerCommand$Arg<(string)>
public static "word"(arg0: string): $ServerCommand$Arg<(string)>
public "getCustomSuggestions"(): $Optional<($SuggestionProvider<($CommandSourceStack)>)>
public static "floatt"(arg0: string, arg1: $FloatBounds$Type): $ServerCommand$Arg<(float)>
get "name"(): string
get "type"(): $ArgumentType<(T)>
get "customSuggestions"(): $Optional<($SuggestionProvider<($CommandSourceStack)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Arg$Type<T> = ($ServerCommand$Arg<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Arg_<T> = $ServerCommand$Arg$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/units/$IRelatedUnit" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"

export interface $IRelatedUnit extends $IHaveConfig {

 "getRelatedId"(): $UnitId
 "getConfig"(): $UnitConfig
 "getClassCategory"(arg0: string): string
 "getClassCategory"(): string
 "saveConfig"(): void
 "expandClassCategory"(arg0: string, arg1: string): string
 "expandClassCategory"(arg0: string): string
}

export namespace $IRelatedUnit {
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandCategory(arg0: string, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRelatedUnit$Type = ($IRelatedUnit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRelatedUnit_ = $IRelatedUnit$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$ForgeBucketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeBucketItem extends $BucketItem {
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

constructor(arg0: string, arg1: $Supplier$Type<(any)>)
constructor(arg0: string, arg1: $Supplier$Type<(any)>, arg2: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeBucketItem$Type = ($ForgeBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeBucketItem_ = $ForgeBucketItem$Type;
}}
declare module "packages/com/endertech/minecraft/forge/tiles/$ChameleonBlockTile" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ForgeTile, $ForgeTile$Type} from "packages/com/endertech/minecraft/forge/tiles/$ForgeTile"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ChameleonBlockTile extends $ForgeTile {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getModelData"(): $ModelData
public "writeSharedData"(arg0: $CompoundTag$Type): $CompoundTag
public "readSharedData"(arg0: $CompoundTag$Type): void
public "getTargetBlock"(): $BlockState
public "setTargetBlock"(arg0: $BlockState$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "modelData"(): $ModelData
get "targetBlock"(): $BlockState
set "targetBlock"(value: $BlockState$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChameleonBlockTile$Type = ($ChameleonBlockTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChameleonBlockTile_ = $ChameleonBlockTile$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$ItemModel$Properties$IPropertyGetter, $ItemModel$Properties$IPropertyGetter$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$Properties$IPropertyGetter"
import {$BaseProperties, $BaseProperties$Type} from "packages/com/endertech/minecraft/forge/data/$BaseProperties"

export class $ItemModel$Properties<T extends $ItemModel$Properties<(T)>> extends $BaseProperties<(T)> {


public static "of"(arg0: $AbstractForgeMod$Type): $ItemModel$Properties<(any)>
public "register"(arg0: $Item$Type, arg1: string, arg2: $ItemModel$Properties$IPropertyGetter$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$Properties$Type<T> = ($ItemModel$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$Properties_<T> = $ItemModel$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/common/$KeyValuePair" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $KeyValuePair extends $Record {
static readonly "EMPTY": $KeyValuePair
static readonly "SEPARATOR": string

constructor(key: string, value: string)

public "value"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "key"(): string
public static "parse"(arg0: string): $KeyValuePair
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyValuePair$Type = ($KeyValuePair);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyValuePair_ = $KeyValuePair$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumTube" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$VacuumTube$Properties, $VacuumTube$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/items/$VacuumTube$Properties"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$DamageableItem, $DamageableItem$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VacuumTube extends $DamageableItem {
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

constructor(arg0: $UnitConfig$Type, arg1: $VacuumTube$Properties$Type<(any)>)

public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "suckIn"(arg0: $AbstractGas$Type, arg1: $ServerPlayer$Type): boolean
public "getSuckInterval"(): $GameTime
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "suckInterval"(): $GameTime
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumTube$Type = ($VacuumTube);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumTube_ = $VacuumTube$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/items/$Paintbrush" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Paintbrush extends $Item {
static "requiresWaterBucket": $ForgeConfigSpec$ConfigValue<(boolean)>
static "requiresDye": $ForgeConfigSpec$ConfigValue<(boolean)>
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

public static "in"(arg0: $ItemStack$Type): boolean
public static "in"(arg0: $Player$Type, arg1: $InteractionHand$Type): boolean
public "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "canBeDepleted"(): boolean
public static "hasAllRequiredMaterials"(arg0: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Paintbrush$Type = ($Paintbrush);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Paintbrush_ = $Paintbrush$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector$BlockTagsProviderFactory" {
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$BlockTagsProvider, $BlockTagsProvider$Type} from "packages/net/minecraftforge/common/data/$BlockTagsProvider"

export interface $DataCollector$BlockTagsProviderFactory<T extends $BlockTagsProvider> {

 "create"(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: string, arg3: $ExistingFileHelper$Type): T

(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: string, arg3: $ExistingFileHelper$Type): T
}

export namespace $DataCollector$BlockTagsProviderFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$BlockTagsProviderFactory$Type<T> = ($DataCollector$BlockTagsProviderFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector$BlockTagsProviderFactory_<T> = $DataCollector$BlockTagsProviderFactory$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Percentage" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Percentage$Grade, $Percentage$Grade$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage$Grade"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$Ordered, $Ordered$Type} from "packages/com/endertech/common/$Ordered"

export class $Percentage implements $Ordered<($Percentage)> {
static readonly "FACTOR": float
static readonly "ZERO": $Percentage
static readonly "HUNDRED": $Percentage

constructor(arg0: float)

public static "value"(arg0: float): $Percentage
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "compareTo"(arg0: $Percentage$Type): integer
public "getValue"(): float
public static "from"(arg0: float): $Percentage
public static "from"(arg0: integer, arg1: integer): $Percentage
public "multiply"(arg0: float): $Percentage
public static "parse"(arg0: string): $Percentage
public "getGrade"(): $Percentage$Grade
public "toColoredText"(): string
public "randomResult"(): boolean
public "toFraction"(): float
public "takeChance"(arg0: $Random$Type): boolean
public "takeChance"(): boolean
public static "min"<T extends $Comparable<(T)>>(arg0: $Percentage$Type, arg1: $Percentage$Type): $Percentage
public static "max"<T extends $Comparable<(T)>>(arg0: $Percentage$Type, arg1: $Percentage$Type): $Percentage
public "isLessThan"(arg0: $Percentage$Type): boolean
public "isLessOrEqualTo"(arg0: $Percentage$Type): boolean
public "isGreaterThan"(arg0: $Percentage$Type): boolean
public "isGreaterOrEqualTo"(arg0: $Percentage$Type): boolean
get "grade"(): $Percentage$Grade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Percentage$Type = ($Percentage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Percentage_ = $Percentage$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/config/$FilterMaterialList" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$AbstractParsableList, $AbstractParsableList$Type} from "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $FilterMaterialList extends $AbstractParsableList {

constructor(arg0: $UnitConfig$Type, arg1: string)

public "contains"(arg0: $ItemStack$Type): boolean
public "getMaterials"(): $Set<($Item)>
public "getCapacityFor"(arg0: $ItemStack$Type): integer
public "getByproductFor"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
get "materials"(): $Set<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterMaterialList$Type = ($FilterMaterialList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterMaterialList_ = $FilterMaterialList$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export interface $IWaterLoggable extends $SimpleWaterloggedBlock {

 "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
 "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
 "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
 "getPickupSound"(): $Optional<($SoundEvent)>
 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $IWaterLoggable {
const WATERLOGGED: $BooleanProperty
function getStateForPlacement(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
function getFluidState(arg0: $BlockState$Type, arg1: boolean): $FluidState
function getStateForPlacementAt(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function updateFluidPostPlacement(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
function isWaterlogged(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWaterLoggable$Type = ($IWaterLoggable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IWaterLoggable_ = $IWaterLoggable$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Task" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ServerCommand$Context, $ServerCommand$Context$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Context"
import {$ServerCommand$Arg, $ServerCommand$Arg$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Arg"

export class $ServerCommand$Task {

constructor(arg0: string)

public "executes"(arg0: $Consumer$Type<($ServerCommand$Context$Type)>, arg1: string): $ServerCommand$Task
public "executes"(arg0: $Consumer$Type<($ServerCommand$Context$Type)>, ...arg1: ($ServerCommand$Arg$Type<(any)>)[]): $ServerCommand$Task
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Task$Type = ($ServerCommand$Task);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Task_ = $ServerCommand$Task$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$GasBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GasBlockItem extends $BlockItem {
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

constructor(arg0: $AbstractGas$Type, arg1: $Item$Properties$Type)

public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "generateFrom"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type): integer
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GasBlockItem$Type = ($GasBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GasBlockItem_ = $GasBlockItem$Type;
}}
declare module "packages/com/endertech/common/$IntBounds" {
import {$CommonMath$Interpolation, $CommonMath$Interpolation$Type} from "packages/com/endertech/common/$CommonMath$Interpolation"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $IntBounds implements $IBounds<(integer)>, $Iterable<(integer)> {
static readonly "ZERO": $IntBounds
static readonly "INTEGER": $IntBounds
static readonly "INTEGER_POSITIVE": $IntBounds

constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "equals"(arg0: any): boolean
public "length"(): integer
public "toString"(): string
public "hashCode"(): integer
public "iterator"(): $Iterator<(integer)>
public static "of"(arg0: integer): $IntBounds
public static "of"(arg0: $IBounds$Type<(any)>): $IntBounds
public "offset"(arg0: integer): $IntBounds
public "reduce"(arg0: integer): $IntBounds
public static "between"(arg0: integer, arg1: integer): $IntBounds
public "getMax"(): integer
public "center"(): integer
public "fit"(arg0: $IBounds$Type<(integer)>): $IntBounds
public "encloses"(arg0: integer): boolean
public "extend"(arg0: integer): $IntBounds
public "within"(arg0: $IBounds$Type<(integer)>): boolean
public "enclose"(arg0: integer): integer
public "corners"(arg0: integer): boolean
public "interpolationFactor"(arg0: integer): float
public "interpolateUp"(arg0: float): integer
public "randomFits"(arg0: integer): boolean
public "interpolateDown"(arg0: float): integer
public "interpolateTo"(arg0: $IBounds$Type<(integer)>): $CommonMath$Interpolation<(integer)>
public "spliterator"(): $Spliterator<(integer)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<integer>;
get "max"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntBounds$Type = ($IntBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntBounds_ = $IntBounds$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PollutedWater extends $LiquidBlock {
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

constructor()

public static "isSource"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "isCleanWaterSource"(arg0: $BlockState$Type): boolean
public "isPollutedWith"(arg0: $Pollutant$Type<(any)>, arg1: $BlockState$Type): boolean
public static "isPollutedWith"(arg0: $Pollutant$Type<(any)>, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public static "findPollutant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Collection$Type<($Pollutant$Type<(any)>)>): $Optional<($Pollutant<(any)>)>
public "tryPollute"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$Type = ($PollutedWater);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater_ = $PollutedWater$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney" {
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Container$Tile, $Container$Tile$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Tile"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$ITiledBlock, $ITiledBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Container, $Container$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Chimney$Properties, $Chimney$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Chimney$Properties"

export class $Chimney extends $Container implements $ITiledBlock<($Container$Tile)> {
static readonly "TOP": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "SIDES": $Map<($Direction), ($BooleanProperty)>
readonly "isNarrow": boolean
readonly "radius": integer
readonly "wallThickness": integer
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $Chimney$Properties$Type<(any)>)

public "getType"(): $ISmokeContainer$Type
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getTileClass"(): $Class<($Container$Tile)>
public "createTile"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $Container$Tile
public "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($Container$Tile)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "type"(): $ISmokeContainer$Type
get "tileClass"(): $Class<($Container$Tile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Chimney$Type = ($Chimney);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Chimney_ = $Chimney$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$Respirator" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EquipmentItem, $EquipmentItem$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Respirator extends $EquipmentItem {
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

constructor(arg0: $UnitConfig$Type, arg1: $EquipmentItem$Properties$Type<(any)>)

public "onCraftedBy"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Respirator$Type = ($Respirator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Respirator_ = $Respirator$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$DataCollector" {
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$DataCollector$ClientDataProviderFactory, $DataCollector$ClientDataProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$ClientDataProviderFactory"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$GatherDataEvent, $GatherDataEvent$Type} from "packages/net/minecraftforge/data/event/$GatherDataEvent"
import {$DataCollector$ItemTagsProviderFactory, $DataCollector$ItemTagsProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$ItemTagsProviderFactory"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$DataProvider$Factory, $DataProvider$Factory$Type} from "packages/net/minecraft/data/$DataProvider$Factory"
import {$DataCollector$BlockTagsProviderFactory, $DataCollector$BlockTagsProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$BlockTagsProviderFactory"
import {$DataCollector$LanguageProviderFactory, $DataCollector$LanguageProviderFactory$Type} from "packages/com/endertech/minecraft/forge/data/$DataCollector$LanguageProviderFactory"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"

export class $DataCollector {
readonly "modId": string
readonly "generator": $DataGenerator
readonly "output": $PackOutput
readonly "lookupProvider": $CompletableFuture<($HolderLookup$Provider)>
readonly "fileHelper": $ExistingFileHelper

constructor(arg0: $AbstractForgeMod$Type, arg1: $GatherDataEvent$Type)

public "addBlockAndItemTags"(arg0: $DataCollector$BlockTagsProviderFactory$Type<(any)>, arg1: $DataCollector$ItemTagsProviderFactory$Type<(any)>): $DataCollector
public "addLootTables"(arg0: $DataProvider$Factory$Type<(any)>): $DataCollector
public "addLanguageUS"(arg0: $DataCollector$LanguageProviderFactory$Type<(any)>): $DataCollector
public "addRecipes"(arg0: $DataProvider$Factory$Type<(any)>): $DataCollector
public "addItemModels"(arg0: $DataCollector$ClientDataProviderFactory$Type<(any)>): $DataCollector
public "addBlockStates"(arg0: $DataCollector$ClientDataProviderFactory$Type<(any)>): $DataCollector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataCollector$Type = ($DataCollector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataCollector_ = $DataCollector$Type;
}}
declare module "packages/com/endertech/common/$CommonTime$Interval" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$CommonTime$IMessure, $CommonTime$IMessure$Type} from "packages/com/endertech/common/$CommonTime$IMessure"
import {$CommonTime$Stamp, $CommonTime$Stamp$Type} from "packages/com/endertech/common/$CommonTime$Stamp"

export class $CommonTime$Interval implements $Comparable<($CommonTime$Interval)> {
static readonly "ZERO": $CommonTime$Interval
static readonly "MILLISECONDS_IN_SECOND": integer
static readonly "SECONDS_IN_MINUTE": integer
static readonly "MINUTES_IN_HOUR": integer
static readonly "HOURS_IN_DAY": integer
static readonly "SECONDS_IN_HOUR": integer
static readonly "SECONDS_IN_DAY": integer


public "add"(arg0: $CommonTime$Interval$Type): $CommonTime$Interval
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "compareTo"(arg0: $CommonTime$Interval$Type): integer
public static "of"(arg0: $CommonTime$IMessure$Type, arg1: double): $CommonTime$Interval
public "in"(arg0: $CommonTime$IMessure$Type): double
public static "millis"(arg0: long): $CommonTime$Interval
public "mult"(arg0: double): $CommonTime$Interval
public static "days"(arg0: integer): $CommonTime$Interval
public static "hours"(arg0: double): $CommonTime$Interval
public static "minutes"(arg0: double): $CommonTime$Interval
public static "seconds"(arg0: double): $CommonTime$Interval
public "lessThan"(arg0: $CommonTime$Interval$Type): boolean
public "moreThan"(arg0: $CommonTime$Interval$Type): boolean
public "inSeconds"(): double
public "inMillis"(): long
public static "passedFrom"(arg0: $CommonTime$Stamp$Type): $CommonTime$Interval
public static "leftTo"(arg0: $CommonTime$Stamp$Type): $CommonTime$Interval
public "inHours"(): double
public "inMinutes"(): double
public "inDays"(): double
public "substract"(arg0: $CommonTime$Interval$Type): $CommonTime$Interval
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonTime$Interval$Type = ($CommonTime$Interval);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonTime$Interval_ = $CommonTime$Interval$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$Configuration" {
import {$Property$Type, $Property$Type$Type} from "packages/com/endertech/minecraft/forge/configs/$Property$Type"
import {$Pattern, $Pattern$Type} from "packages/java/util/regex/$Pattern"
import {$ConfigCategory, $ConfigCategory$Type} from "packages/com/endertech/minecraft/forge/configs/$ConfigCategory"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$CharMatcher, $CharMatcher$Type} from "packages/com/google/common/base/$CharMatcher"
import {$Property, $Property$Type} from "packages/com/endertech/minecraft/forge/configs/$Property"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"

export class $Configuration {
static readonly "CATEGORY_GENERAL": string
static readonly "CATEGORY_CLIENT": string
static readonly "ALLOWED_CHARS": string
static readonly "DEFAULT_ENCODING": string
static readonly "CATEGORY_SPLITTER": string
static readonly "NEW_LINE": string
static readonly "COMMENT_SEPARATOR": string
static readonly "ALLOWED_PROPERTIES": $CharMatcher
 "defaultEncoding": string
 "isChild": boolean

constructor(arg0: $File$Type, arg1: boolean)
constructor(arg0: $File$Type, arg1: string, arg2: boolean)
constructor(arg0: $File$Type, arg1: string)
constructor(arg0: $File$Type)
constructor()

public "get"(arg0: string, arg1: string, arg2: (double)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: boolean, arg5: integer, arg6: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer, arg6: boolean, arg7: integer): $Property
public "get"(arg0: string, arg1: string, arg2: double): $Property
public "get"(arg0: string, arg1: string, arg2: double, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: double, arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: string): $Property
public "get"(arg0: string, arg1: string, arg2: boolean): $Property
public "get"(arg0: string, arg1: string, arg2: boolean, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: $Property$Type$Type): $Property
public "get"(arg0: string, arg1: string, arg2: (double)[], arg3: string, arg4: double, arg5: double): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[]): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: (integer)[], arg3: string, arg4: integer, arg5: integer): $Property
public "get"(arg0: string, arg1: string, arg2: integer, arg3: string): $Property
public "get"(arg0: string, arg1: string, arg2: integer): $Property
public "get"(arg0: string, arg1: string, arg2: (boolean)[], arg3: string, arg4: boolean, arg5: integer): $Property
public "toString"(): string
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string, arg4: string): boolean
public "getBoolean"(arg0: string, arg1: string, arg2: boolean, arg3: string): boolean
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string): integer
public "getInt"(arg0: string, arg1: string, arg2: integer, arg3: integer, arg4: integer, arg5: string, arg6: string): integer
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: float, arg4: float, arg5: string): float
public "getFloat"(arg0: string, arg1: string, arg2: float, arg3: float, arg4: float, arg5: string, arg6: string): float
public "load"(): void
public "save"(): void
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[], arg5: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: (string)[]): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: $Pattern$Type): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): string
public "getString"(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: $Pattern$Type): string
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[]): (string)[]
public "getStringList"(arg0: string, arg1: string, arg2: (string)[], arg3: string, arg4: (string)[], arg5: string): (string)[]
public "getCategoryNames"(): $Set<(string)>
public "getCategory"(arg0: string): $ConfigCategory
public "hasChanged"(): boolean
public "hasKey"(arg0: string, arg1: string): boolean
public "copyCategoryProps"(arg0: $Configuration$Type, arg1: (string)[]): void
public "moveProperty"(arg0: string, arg1: string, arg2: string): boolean
public "hasCategory"(arg0: string): boolean
public "removeCategory"(arg0: $ConfigCategory$Type): void
public "setCategoryComment"(arg0: string, arg1: string): $Configuration
public "renameProperty"(arg0: string, arg1: string, arg2: string): boolean
public "addCustomCategoryComment"(arg0: string, arg1: string): void
public "setCategoryLanguageKey"(arg0: string, arg1: string): $Configuration
public "getDefinedConfigVersion"(): string
public "getLoadedConfigVersion"(): string
public "setCategoryConfigEntryClass"(arg0: string, arg1: $Class$Type<(any)>): $Configuration
public "setCategoryRequiresWorldRestart"(arg0: string, arg1: boolean): $Configuration
public "setCategoryRequiresMcRestart"(arg0: string, arg1: boolean): $Configuration
public "setCategoryPropertyOrder"(arg0: string, arg1: $List$Type<(string)>): $Configuration
public "getConfigFile"(): $File
get "categoryNames"(): $Set<(string)>
get "definedConfigVersion"(): string
get "loadedConfigVersion"(): string
get "configFile"(): $File
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$Type = ($Configuration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration_ = $Configuration$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$INetSerializable" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $INetSerializable<T> {

 "writeTo"(arg0: $FriendlyByteBuf$Type): $FriendlyByteBuf
 "readFrom"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $INetSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INetSerializable$Type<T> = ($INetSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INetSerializable_<T> = $INetSerializable$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IEmitter$Type" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $IEmitter$Type extends $Enum<($IEmitter$Type)> {
static readonly "BLOCK": $IEmitter$Type
static readonly "TILE": $IEmitter$Type
static readonly "ENTITY": $IEmitter$Type
static readonly "FUEL": $IEmitter$Type


public static "values"(): ($IEmitter$Type)[]
public static "valueOf"(arg0: string): $IEmitter$Type
public static "getByName"(arg0: string): $Optional<($IEmitter$Type)>
public static "getFrom"(arg0: $UnitConfig$Type, arg1: string, arg2: $IEmitter$Type$Type, arg3: string): $IEmitter$Type
public "isFuel"(): boolean
public "isBlock"(): boolean
public "isEntity"(): boolean
public "isTile"(): boolean
get "fuel"(): boolean
get "block"(): boolean
get "entity"(): boolean
get "tile"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEmitter$Type$Type = (("fuel") | ("tile") | ("block") | ("entity")) | ($IEmitter$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEmitter$Type_ = $IEmitter$Type$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Rotation" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rotation {
static readonly "ZERO": $Rotation
readonly "pitch": float
readonly "yaw": float

constructor(arg0: float, arg1: float)

public "add"(arg0: $Rotation$Type): $Rotation
public "approx"(arg0: float, arg1: $Rotation$Type): $Rotation
public "substract"(arg0: $Rotation$Type): $Rotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotation$Type = ($Rotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Rotation_ = $Rotation$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Data" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Random, $Random$Type} from "packages/java/util/$Random"

export class $PregeneratedClouds$Data extends $Record {

constructor(size: $IntBounds$Type, rarity: integer, persistence: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "size"(): $IntBounds
public "rarity"(): integer
public "canGenerate"(arg0: $Random$Type): boolean
public "persistence"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PregeneratedClouds$Data$Type = ($PregeneratedClouds$Data);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PregeneratedClouds$Data_ = $PregeneratedClouds$Data$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$BaseProperties" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BaseProperties<T extends $BaseProperties<(T)>> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseProperties$Type<T> = ($BaseProperties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseProperties_<T> = $BaseProperties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$BlockStatesSet" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AbstractSet, $AbstractSet$Type} from "packages/java/util/$AbstractSet"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockStatesSet extends $AbstractSet<($BlockState)> {

constructor()

public "add"(arg0: $BlockState$Type): boolean
public "add"(arg0: $UnitId$Type): boolean
public "remove"(arg0: any): boolean
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "iterator"(): $Iterator<($BlockState)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public static "parseFrom"(arg0: (string)[]): $BlockStatesSet
public "getBlocksWithAllStates"(): $Collection<($Block)>
public "getFirstFor"(arg0: $Block$Type): $Optional<($BlockState)>
public "addAllFor"(arg0: $Block$Type): boolean
public "hasAllStates"(arg0: $Block$Type): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $Set<(E)>
public "toArray"<T>(arg0: (T)[]): (T)[]
public "toArray"(): (any)[]
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
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
get "empty"(): boolean
get "blocksWithAllStates"(): $Collection<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatesSet$Type = ($BlockStatesSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStatesSet_ = $BlockStatesSet$Type;
}}
declare module "packages/com/endertech/minecraft/forge/math/$Vect3d" {
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Rotation, $Rotation$Type} from "packages/com/endertech/minecraft/forge/math/$Rotation"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CommonMath$Angle, $CommonMath$Angle$Type} from "packages/com/endertech/common/$CommonMath$Angle"

export class $Vect3d {
static readonly "ZERO": $Vect3d
readonly "x": double
readonly "y": double
readonly "z": double


public "add"(arg0: $Vect3d$Type): $Vect3d
public "add"(arg0: double): $Vect3d
public "equals"(arg0: any): boolean
public static "length"(arg0: $Vect3d$Type): double
public "length"(): double
public "toString"(): string
public "hashCode"(): integer
public "scale"(arg0: double): $Vect3d
public static "scale"(arg0: $Vect3d$Type, arg1: double): $Vect3d
public static "from"(arg0: $Vec3$Type): $Vect3d
public static "from"(arg0: $BlockPos$Type): $Vect3d
public static "from"(arg0: $Vec3i$Type): $Vect3d
public static "from"(arg0: double, arg1: double, arg2: double): $Vect3d
public static "setLength"(arg0: $Vect3d$Type, arg1: double): $Vect3d
public "expand"(arg0: double): $Vect3d
public static "normalize"(arg0: $Vect3d$Type): $Vect3d
public "normalize"(): $Vect3d
public static "sum"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "resize"(arg0: double): $Vect3d
public static "distance"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): double
public "distance"(arg0: $Vect3d$Type): double
public "rotate"(arg0: $Rotation$Type): $Vect3d
public "subtract"(arg0: double): $Vect3d
public "subtract"(arg0: $Vect3d$Type): $Vect3d
public static "divide"(arg0: $Vect3d$Type, arg1: double): $Vect3d
public "divide"(arg0: double): $Vect3d
public "isZero"(): boolean
public static "approx"(arg0: float, arg1: $Vect3d$Type, arg2: $Vect3d$Type): $Vect3d
public "approx"(arg0: float, arg1: $Vect3d$Type): $Vect3d
public static "difference"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "mult"(arg0: $Vect3d$Type): $Vect3d
public static "mult"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "move"(arg0: double, arg1: double, arg2: double): $Vect3d
public "truncate"(arg0: double): $Vect3d
public "invert"(): $Vect3d
public static "invert"(arg0: $Vect3d$Type): $Vect3d
public static "scalarMult"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): double
public static "straightMult"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "rotationWrapped"(): $Rotation
public static "rotationWrapped"(arg0: $Vect3d$Type): $Rotation
public static "maxOfAll"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "toBlockPos"(): $BlockPos
public static "minOfAllByAbs"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "invertY"(): $Vect3d
public "invertZ"(): $Vect3d
public "withZ"(arg0: double): $Vect3d
public "invertX"(): $Vect3d
public "withY"(arg0: double): $Vect3d
public "rotatePitch"(arg0: float): $Vect3d
public static "writeToByteBuf"(arg0: $Vect3d$Type, arg1: $ByteBuf$Type): void
public static "readFromByteBuf"(arg0: $ByteBuf$Type): $Vect3d
public "toVector3d"(): $Vec3
public "rotateAroundY"(arg0: float): $Vect3d
public static "rotateAroundY"(arg0: $Vect3d$Type, arg1: float): $Vect3d
public "rotateYaw"(arg0: float): $Vect3d
public "projectOn"(arg0: $Vect3d$Type): $Vect3d
public "withX"(arg0: double): $Vect3d
public "rotateAroundX"(arg0: float): $Vect3d
public static "rotateAroundX"(arg0: $Vect3d$Type, arg1: float): $Vect3d
public "rotateAroundZ"(arg0: float): $Vect3d
public static "rotateAroundZ"(arg0: $Vect3d$Type, arg1: float): $Vect3d
public static "projection"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $Vect3d
public "yaw"(): float
public "pitch"(): float
public "notEqual"(arg0: $Vect3d$Type): boolean
public static "angle"(arg0: $Vect3d$Type, arg1: $Vect3d$Type): $CommonMath$Angle
public static "rotation"(arg0: $Vect3d$Type): $Rotation
public "rotation"(): $Rotation
public "notZero"(): boolean
get "zero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vect3d$Type = ($Vect3d);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vect3d_ = $Vect3d$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Pollutant$Density extends $Enum<($Pollutant$Density)> implements $IForgeEnum {
static readonly "LIGHT": $Pollutant$Density
static readonly "MEDIUM": $Pollutant$Density
static readonly "HEAVY": $Pollutant$Density


public "toString"(): string
public static "values"(): ($Pollutant$Density)[]
public static "valueOf"(arg0: string): $Pollutant$Density
public "canAbsorb"(): boolean
public "getPumped"(): $Pollutant$Density
public "canSpread"(): boolean
public "getSpreaded"(): $Pollutant$Density
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "pumped"(): $Pollutant$Density
get "spreaded"(): $Pollutant$Density
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutant$Density$Type = (("light") | ("medium") | ("heavy")) | ($Pollutant$Density);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutant$Density_ = $Pollutant$Density$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IPurifier" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$SimpleParticleType, $SimpleParticleType$Type} from "packages/net/minecraft/core/particles/$SimpleParticleType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPurifier {

 "isActive"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "spawnParticle"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $SimpleParticleType$Type): void
 "hasActivePump"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "hasProperOutput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "hasActiveFilter"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "hasProperInput"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "getPumpPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
 "getOutputPos"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $BlockPos
}

export namespace $IPurifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPurifier$Type = ($IPurifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPurifier_ = $IPurifier$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$Context" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ServerCommand$Msg, $ServerCommand$Msg$Type} from "packages/com/endertech/minecraft/forge/data/$ServerCommand$Msg"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ServerCommand$Context {
readonly "source": $CommandSourceStack

constructor(arg0: $CommandContext$Type<($CommandSourceStack$Type)>)

public "getLevel"(): $ServerLevel
public "getEntity"(): $Entity
public "getArgument"<V>(arg0: string, arg1: $Class$Type<(V)>): V
public "sendMessage"(arg0: $ServerCommand$Msg$Type): void
public "sendMessage"(arg0: string): void
public "setReachDistance"(arg0: float): void
public "rayTraceBlockBeingLookedAt"(arg0: boolean): $Optional<($BlockHitResult)>
public "getBlockPos"(): $BlockPos
public "getTargetBlockInfo"(arg0: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getTargetTileInfo"(arg0: $Predicate$Type<(string)>, arg1: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getTargetFluidInfo"(arg0: boolean): $Optional<($Pair<($BlockPos), ($ServerCommand$Msg)>)>
public "getHeldItemInfo"(arg0: $InteractionHand$Type, arg1: boolean): $Optional<($Pair<($Item), ($ServerCommand$Msg)>)>
public "getTargetEntityInfo"(arg0: boolean, arg1: boolean, arg2: $Optional$Type<($Predicate$Type<(string)>)>): $Optional<($Pair<($Entity), ($ServerCommand$Msg)>)>
get "level"(): $ServerLevel
get "entity"(): $Entity
set "reachDistance"(value: float)
get "blockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$Context$Type = ($ServerCommand$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$Context_ = $ServerCommand$Context$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumBag$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentItem$Properties, $EquipmentItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"

export class $VacuumBag$Properties<T extends $VacuumBag$Properties<(T)>> extends $EquipmentItem$Properties<(T)> {
 "capacity": integer
 "equipmentSlot": $EquipmentSlot
 "equipSound": $SoundEvent
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $VacuumBag$Properties<(any)>
public "capacity"(arg0: integer): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumBag$Properties$Type<T> = ($VacuumBag$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumBag$Properties_<T> = $VacuumBag$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$IReloadableData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IReloadableData {

 "loadData"(): void

(): void
}

export namespace $IReloadableData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReloadableData$Type = ($IReloadableData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReloadableData_ = $IReloadableData$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$FlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$PollutedWater$BaseFluid, $PollutedWater$BaseFluid$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$PollutedWater$BaseFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $PollutedWater$FlowingFluid extends $PollutedWater$BaseFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PollutedWater$FlowingFluid$Type = ($PollutedWater$FlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PollutedWater$FlowingFluid_ = $PollutedWater$FlowingFluid$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$AbstractParsableList" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$IReloadableData, $IReloadableData$Type} from "packages/com/endertech/minecraft/forge/data/$IReloadableData"

export class $AbstractParsableList implements $IReloadableData {

constructor(arg0: $UnitConfig$Type, arg1: string, arg2: string, arg3: (string)[])

public "loadData"(): void
public "addDefaultValues"(...arg0: (string)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractParsableList$Type = ($AbstractParsableList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractParsableList_ = $AbstractParsableList$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$FilterFrame$Condition" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IForgeEnum, $IForgeEnum$Type} from "packages/com/endertech/minecraft/forge/configs/$IForgeEnum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FilterFrame$Condition extends $Enum<($FilterFrame$Condition)> implements $IForgeEnum {
static readonly "CLEAN": $FilterFrame$Condition
static readonly "DIRTY": $FilterFrame$Condition


public static "values"(): ($FilterFrame$Condition)[]
public static "valueOf"(arg0: string): $FilterFrame$Condition
public "getName"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "name"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterFrame$Condition$Type = (("dirty") | ("clean")) | ($FilterFrame$Condition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FilterFrame$Condition_ = $FilterFrame$Condition$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ISmokeContainer$Type, $ISmokeContainer$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer$Type"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ISmokeContainer, $ISmokeContainer$Type} from "packages/com/endertech/minecraft/forge/blocks/$ISmokeContainer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IWaterLoggable, $IWaterLoggable$Type} from "packages/com/endertech/minecraft/forge/blocks/$IWaterLoggable"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Container$Properties, $Container$Properties$Type} from "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $Container extends $ForgeBlock implements $ISmokeContainer, $IWaterLoggable {
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $Container$Properties$Type<(any)>)

public "getColor"(): $ColorARGB
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getType"(): $ISmokeContainer$Type
public "is"(arg0: $ISmokeContainer$Type$Type): boolean
public "isActive"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getClosestActiveExhaustPumps"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $List<($BlockPos)>
public "isPump"(): boolean
public "isVent"(): boolean
public "isChimney"(): boolean
public "isPipe"(): boolean
public static "getStateForPlacement"(arg0: $BlockPlaceContext$Type, arg1: $BlockState$Type): $BlockState
public static "getFluidState"(arg0: $BlockState$Type, arg1: boolean): $FluidState
public static "getStateForPlacementAt"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "updateFluidPostPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "isWaterlogged"(arg0: $BlockState$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "color"(): $ColorARGB
get "type"(): $ISmokeContainer$Type
get "pump"(): boolean
get "vent"(): boolean
get "chimney"(): boolean
get "pipe"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$Type = ($Container);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Container_ = $Container$Type;
}}
declare module "packages/com/endertech/common/$CommonMath$Interpolation" {
import {$IntBounds, $IntBounds$Type} from "packages/com/endertech/common/$IntBounds"
import {$FloatBounds, $FloatBounds$Type} from "packages/com/endertech/common/$FloatBounds"
import {$IBounds, $IBounds$Type} from "packages/com/endertech/common/$IBounds"

export class $CommonMath$Interpolation<T extends number> {
readonly "source": $IBounds<(T)>
readonly "dest": $IBounds<(T)>

constructor(arg0: $IBounds$Type<(T)>, arg1: $IBounds$Type<(T)>)

public static "up"(arg0: float, arg1: $FloatBounds$Type): float
public static "up"(arg0: float, arg1: $IntBounds$Type): integer
public static "down"(arg0: float, arg1: $FloatBounds$Type): float
public static "down"(arg0: float, arg1: $IntBounds$Type): integer
public "backward"(arg0: T): T
public static "backward"(arg0: float, arg1: float, arg2: float): float
public static "strictUp"(arg0: float, arg1: $IntBounds$Type): integer
public static "strictUp"(arg0: float, arg1: $FloatBounds$Type): float
public static "strictDown"(arg0: float, arg1: $IntBounds$Type): integer
public static "strictDown"(arg0: float, arg1: $FloatBounds$Type): float
public static "straight"(arg0: float, arg1: float, arg2: float): float
public "straight"(arg0: T): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommonMath$Interpolation$Type<T> = ($CommonMath$Interpolation<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommonMath$Interpolation_<T> = $CommonMath$Interpolation$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/data/$INBTSerializable" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $INBTSerializable<T> {

 "writeTo"(arg0: $CompoundTag$Type): $CompoundTag
 "readFrom"(arg0: $CompoundTag$Type): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/forge/items/$ForgeItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ForgeItem$Properties, $ForgeItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$ForgeItem$Properties"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeItem extends $Item implements $IHaveConfig {
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

constructor(arg0: $UnitConfig$Type, arg1: $ForgeItem$Properties$Type<(any)>)

public static "indexIn"(arg0: $Inventory$Type, arg1: $Predicate$Type<($ItemStack$Type)>): $Optional<(integer)>
public "getConfig"(): $UnitConfig
public static "damageItem"<T extends $LivingEntity>(arg0: integer, arg1: $ItemStack$Type, arg2: boolean, arg3: T, arg4: $Consumer$Type<(T)>): void
public static "getRegistryName"(arg0: $Item$Type): $ResourceLocation
public static "notBroken"(arg0: $ItemStack$Type): boolean
public static "isBroken"(arg0: $ItemStack$Type): boolean
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getClassCategory"(arg0: string): string
public "getClassCategory"(): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "saveConfig"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "expandClassCategory"(arg0: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeItem$Type = ($ForgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeItem_ = $ForgeItem$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IPollutant$Type extends $Enum<($IPollutant$Type)> {
static readonly "AIR": $IPollutant$Type
static readonly "WATER": $IPollutant$Type
static readonly "SOIL": $IPollutant$Type


public static "values"(): ($IPollutant$Type)[]
public static "valueOf"(arg0: string): $IPollutant$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPollutant$Type$Type = (("soil") | ("air") | ("water")) | ($IPollutant$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPollutant$Type_ = $IPollutant$Type$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IReader" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $ForgeNetMsg$IReader<T> {

 "read"(arg0: $FriendlyByteBuf$Type): T

(arg0: $FriendlyByteBuf$Type): T
}

export namespace $ForgeNetMsg$IReader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$IReader$Type<T> = ($ForgeNetMsg$IReader<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg$IReader_<T> = $ForgeNetMsg$IReader$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$PregeneratedClouds$Generator" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$AbstractForgeMod, $AbstractForgeMod$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AbstractGenerator, $AbstractGenerator$Type} from "packages/com/endertech/minecraft/forge/world/$AbstractGenerator"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $PregeneratedClouds$Generator extends $AbstractGenerator {
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

constructor(arg0: $AbstractForgeMod$Type)

public "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
public "codec"(): $Codec<(any)>
public static "generateCloud"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: integer, arg3: $AbstractGas$Type, arg4: integer, arg5: $Random$Type): integer
public static "generateSpots"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: integer, arg3: $AbstractGas$Type, arg4: integer, arg5: $Random$Type): integer
/**
 * 
 * @deprecated
 */
public static "generateMultilayeredCloud"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $AbstractGas$Type, arg4: integer, arg5: $Random$Type): integer
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type, arg2: $Random$Type): boolean
public static "fillWithGas"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: $AbstractGas$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PregeneratedClouds$Generator$Type = ($PregeneratedClouds$Generator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PregeneratedClouds$Generator_ = $PregeneratedClouds$Generator$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$IHaveConfig" {
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IHaveConfig {

 "getConfig"(): $UnitConfig
 "getClassCategory"(arg0: string): string
 "getClassCategory"(): string
 "saveConfig"(): void
 "expandClassCategory"(arg0: string, arg1: string): string
 "expandClassCategory"(arg0: string): string

(): $UnitConfig
}

export namespace $IHaveConfig {
function getClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function getClassCategory(arg0: $Class$Type<(any)>): string
function expandCategory(arg0: string, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string): string
function expandClassCategory(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveConfig$Type = ($IHaveConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHaveConfig_ = $IHaveConfig$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$IHaveConfig, $IHaveConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$IHaveConfig"

export class $ForgeBlock extends $Block implements $IHaveConfig {
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $UnitConfig$Type, arg1: $ForgeBlock$Properties$Type<(any)>)
constructor(arg0: $UnitConfig$Type, arg1: $BlockBehaviour$Properties$Type)

public "getConfig"(): $UnitConfig
public static "isLiquid"(arg0: $BlockState$Type): boolean
public static "isGlass"(arg0: $BlockState$Type): boolean
public static "isUnderRain"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "isUnderOpenSky"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public static "getRegistryName"(arg0: $Block$Type): $ResourceLocation
public static "getRegistryName"(arg0: $Fluid$Type): $ResourceLocation
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "getClassCategory"(arg0: string): string
public "getClassCategory"(): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public "saveConfig"(): void
public static "expandCategory"(arg0: string, arg1: string): string
public "expandClassCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public "expandClassCategory"(arg0: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "config"(): $UnitConfig
get "classCategory"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeBlock$Type = ($ForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeBlock_ = $ForgeBlock$Type;
}}
declare module "packages/com/endertech/minecraft/forge/client/$ItemModel$RegistryWrapper" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemModel$IModelWrapperFactory, $ItemModel$IModelWrapperFactory$Type} from "packages/com/endertech/minecraft/forge/client/$ItemModel$IModelWrapperFactory"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModel$RegistryWrapper {

constructor(arg0: $Map$Type<($ResourceLocation$Type), ($BakedModel$Type)>)

public "replaceModelOf"(arg0: $BlockState$Type, arg1: $BakedModel$Type): boolean
public "replaceModelOf"(arg0: $Item$Type, arg1: $ItemModel$IModelWrapperFactory$Type<(any)>): boolean
public "replaceModelOf"(arg0: $BlockState$Type, arg1: $ItemModel$IModelWrapperFactory$Type<(any)>): boolean
public "replaceModelOf"(arg0: $Item$Type, arg1: $BakedModel$Type): boolean
public "getModelOf"(arg0: $BlockState$Type): $BakedModel
public "getModelOf"(arg0: $Item$Type): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModel$RegistryWrapper$Type = ($ItemModel$RegistryWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModel$RegistryWrapper_ = $ItemModel$RegistryWrapper$Type;
}}
declare module "packages/com/endertech/minecraft/forge/data/$ServerCommand$OpLevel" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ServerCommand$OpLevel extends $Enum<($ServerCommand$OpLevel)> {
static readonly "NOOB": $ServerCommand$OpLevel
static readonly "NORMAL": $ServerCommand$OpLevel
static readonly "KICKASS": $ServerCommand$OpLevel
static readonly "GOD": $ServerCommand$OpLevel


public static "values"(): ($ServerCommand$OpLevel)[]
public static "valueOf"(arg0: string): $ServerCommand$OpLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerCommand$OpLevel$Type = (("normal") | ("noob") | ("kickass") | ("god")) | ($ServerCommand$OpLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerCommand$OpLevel_ = $ServerCommand$OpLevel$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Carbon" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$GameTime, $GameTime$Type} from "packages/com/endertech/minecraft/forge/math/$GameTime"
import {$AbstractGas, $AbstractGas$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$AbstractGas"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Carbon extends $AbstractGas {
static "spreadIntoWorldInterval": $GameTime
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $UnitConfig$Type, arg1: string)

public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Carbon$Type = ($Carbon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Carbon_ = $Carbon$Type;
}}
declare module "packages/com/endertech/minecraft/forge/items/$GlassMeter" {
import {$GlassMeter$Properties, $GlassMeter$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$GlassMeter$Properties"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EquipmentItem, $EquipmentItem$Type} from "packages/com/endertech/minecraft/forge/items/$EquipmentItem"
import {$PlayerInteractEvent$LeftClickBlock, $PlayerInteractEvent$LeftClickBlock$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$LeftClickBlock"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $GlassMeter extends $EquipmentItem {
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

constructor(arg0: $UnitConfig$Type, arg1: $GlassMeter$Properties$Type<(any)>)

public "getNameColor"(): $ChatFormatting
public static "onLeftClickBlock"(arg0: $PlayerInteractEvent$LeftClickBlock$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "nameColor"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassMeter$Type = ($GlassMeter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlassMeter_ = $GlassMeter$Type;
}}
declare module "packages/com/endertech/minecraft/forge/network/$Connection" {
import {$AbstractForgeMod$RequiredSide, $AbstractForgeMod$RequiredSide$Type} from "packages/com/endertech/minecraft/forge/core/$AbstractForgeMod$RequiredSide"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$PacketDistributor$TargetPoint, $PacketDistributor$TargetPoint$Type} from "packages/net/minecraftforge/network/$PacketDistributor$TargetPoint"
import {$ChunkLoc, $ChunkLoc$Type} from "packages/com/endertech/minecraft/forge/world/$ChunkLoc"
import {$ForgeNetMsg, $ForgeNetMsg$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg"
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$DimensionId, $DimensionId$Type} from "packages/com/endertech/minecraft/forge/world/$DimensionId"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevelAccessor, $ServerLevelAccessor$Type} from "packages/net/minecraft/world/level/$ServerLevelAccessor"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Connection {

constructor(arg0: string, arg1: $AbstractForgeMod$RequiredSide$Type)

public "sendToPlayer"<MSG>(arg0: MSG, arg1: $ServerPlayer$Type): void
public "toVanillaPacket"<MSG>(arg0: MSG, arg1: $NetworkDirection$Type): $Packet<(any)>
public static "acceptMissingIf"(arg0: boolean): $Predicate<(string)>
public "sendToAll"<MSG>(arg0: MSG): void
public "getServerPlayers"(): $List<($ServerPlayer)>
public "sendToAllInChunk"<MSG>(arg0: MSG, arg1: $ChunkLoc$Type): void
public "registerNetMessage"<MSG extends $ForgeNetMsg<(MSG)>>(arg0: MSG): void
public "sendToAllAround"<MSG>(arg0: MSG, arg1: $PacketDistributor$TargetPoint$Type): void
public "sendToAllAround"<MSG>(arg0: MSG, arg1: $ServerLevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer): void
public "sendToServer"<MSG>(arg0: MSG): void
public "sendToAllInDimension"<MSG>(arg0: MSG, arg1: $DimensionId$Type): void
public "sendToAllObservingChunk"<MSG>(arg0: MSG, arg1: $LevelChunk$Type): void
get "serverPlayers"(): $List<($ServerPlayer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connection$Type = ($Connection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connection_ = $Connection$Type;
}}
declare module "packages/com/endertech/minecraft/forge/configs/$ColorARGB$Channel" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ColorARGB$Channel {
readonly "value": integer


public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "from"(arg0: integer): $ColorARGB$Channel
public "toFloat"(): float
public static "fromFloat"(arg0: float): $ColorARGB$Channel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorARGB$Channel$Type = ($ColorARGB$Channel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorARGB$Channel_ = $ColorARGB$Channel$Type;
}}
declare module "packages/com/endertech/minecraft/forge/blocks/$ITiledBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export interface $ITiledBlock<T extends $BlockEntity> extends $EntityBlock {

 "getTicker"<E extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(E)>): $BlockEntityTicker<(E)>
 "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
 "getTile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<(T)>
 "getTileClass"(): $Class<(T)>
 "createTile"(arg0: $BlockPos$Type, arg1: $BlockState$Type): T
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}

export namespace $ITiledBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITiledBlock$Type<T> = ($ITiledBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITiledBlock_<T> = $ITiledBlock$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$AbstractCarrier, $AbstractCarrier$Type} from "packages/com/endertech/minecraft/mods/adpother/entities/$AbstractCarrier"
import {$IStorageItem, $IStorageItem$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorageItem"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$FilterMaterialList, $FilterMaterialList$Type} from "packages/com/endertech/minecraft/mods/adpother/config/$FilterMaterialList"
import {$IPostInit, $IPostInit$Type} from "packages/com/endertech/minecraft/forge/core/$IPostInit"
import {$BiomeId, $BiomeId$Type} from "packages/com/endertech/minecraft/forge/world/$BiomeId"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$ForgeBlock, $ForgeBlock$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock"
import {$Spread, $Spread$Type} from "packages/com/endertech/minecraft/mods/adpother/pollution/$Spread"
import {$UnitConfig, $UnitConfig$Type} from "packages/com/endertech/minecraft/forge/configs/$UnitConfig"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$IPollutant$Type, $IPollutant$Type$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant$Type"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ColorARGB, $ColorARGB$Type} from "packages/com/endertech/minecraft/forge/configs/$ColorARGB"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Pollutant$Properties, $Pollutant$Properties$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IPollutant, $IPollutant$Type} from "packages/com/endertech/minecraft/forge/blocks/$IPollutant"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiConfigProperty$BaseProperty, $MultiConfigProperty$BaseProperty$Type} from "packages/com/endertech/minecraft/forge/configs/$MultiConfigProperty$BaseProperty"
import {$EntityGetter, $EntityGetter$Type} from "packages/net/minecraft/world/level/$EntityGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Pollutant$Density, $Pollutant$Density$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant$Density"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractPollutionImpacts$ImpactType, $AbstractPollutionImpacts$ImpactType$Type} from "packages/com/endertech/minecraft/mods/adpother/impacts/$AbstractPollutionImpacts$ImpactType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Pollutant<E extends $AbstractCarrier> extends $ForgeBlock implements $IPollutant, $IPostInit {
static readonly "DENSITY": $EnumProperty<($Pollutant$Density)>
static readonly "MAX_REACH_DISTANCE": integer
static readonly "FULL_BLOCK_AABB": $AABB
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

constructor(arg0: $UnitConfig$Type, arg1: $Pollutant$Properties$Type<(any)>, arg2: $Class$Type<(E)>)

public "getSimpleName"(): string
public "push"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "getColor"(): $ColorARGB
public "onPostInit"(): void
public "scheduleUpdate"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "skipRendering"(arg0: $BlockState$Type, arg1: $BlockState$Type, arg2: $Direction$Type): boolean
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getTextColor"(): $ChatFormatting
public "getPollutantCarriersAt"(arg0: $EntityGetter$Type, arg1: $BlockPos$Type): $List<(E)>
public "getCriticalAmountIn"(arg0: $BiomeId$Type): integer
public "getPollutionCapacity"(): integer
public "getConcentrationAltitudeIn"(arg0: $BiomeId$Type): integer
public "getCarriedPollutionAmount"(arg0: $BlockState$Type): integer
public "getMotionVelocityIn"(arg0: $BiomeId$Type): float
public "getPercentageAtChunk"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type): $Percentage
public "inAllowableDimension"(arg0: $ServerLevel$Type): boolean
public "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "pump"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "pumpEntitiesAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "canSpreadAround"(): boolean
public "canSpreadOverLedge"(): boolean
public "getSpreadedState"(arg0: $BlockState$Type): $BlockState
public "canStateBePumped"(arg0: $BlockState$Type): boolean
public "getMotionFacing"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $Optional<($Direction)>
public "getMotionFacing"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BiomeId$Type): $Optional<($Direction)>
public "canStateBeSpreaded"(arg0: $BlockState$Type): boolean
public "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "spend"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "getPumpedState"(arg0: $BlockState$Type): $BlockState
public "getTickDelay"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public "isSamePollutant"(arg0: $BlockState$Type): boolean
public "spendEntitiesAt"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): integer
public "tryAffectBlockAt"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $Optional$Type<($Direction$Type)>, arg3: $AbstractPollutionImpacts$ImpactType$Type, arg4: $BlockState$Type): $BlockState
public "createSpread"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Spread
public "emitFrom"(arg0: $BlockEntity$Type, arg1: $Set$Type<($BlockState$Type)>, arg2: integer): integer
public "generateAt"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): integer
public "canAffectEntity"(arg0: $Entity$Type, arg1: $AbstractPollutionImpacts$ImpactType$Type, arg2: $Percentage$Type): boolean
public "getProtectiveItems"(arg0: $LivingEntity$Type): $Map<($ItemStack), ($IStorageItem)>
public "getBiomeProperties"(): $List<($MultiConfigProperty$BaseProperty<($BiomeId), (any)>)>
public "getFilterMaterials"(): $FilterMaterialList
public "canAffectBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Optional$Type<($Direction$Type)>, arg4: $AbstractPollutionImpacts$ImpactType$Type): boolean
public "tryAffectEntity"(arg0: $Entity$Type, arg1: $AbstractPollutionImpacts$ImpactType$Type, arg2: $Percentage$Type): boolean
public "getEmissionRateIn"(arg0: $BiomeId$Type): float
public "isUnderRainOrStorm"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "affectsPollutionLevel"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "canPassThrough"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $Direction$Type): boolean
public "getPollutantType"(): $IPollutant$Type
public static "getClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "getClassCategory"(arg0: $Class$Type<(any)>): string
public static "expandCategory"(arg0: string, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string): string
public static "expandClassCategory"(arg0: $Class$Type<(any)>, arg1: string, arg2: string): string
get "simpleName"(): string
get "color"(): $ColorARGB
get "textColor"(): $ChatFormatting
get "pollutionCapacity"(): integer
get "biomeProperties"(): $List<($MultiConfigProperty$BaseProperty<($BiomeId), (any)>)>
get "filterMaterials"(): $FilterMaterialList
get "pollutantType"(): $IPollutant$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pollutant$Type<E> = ($Pollutant<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pollutant_<E> = $Pollutant$Type<(E)>;
}}
declare module "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ForgeNetMsg$IReader, $ForgeNetMsg$IReader$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IReader"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeNetMsg$IWriter, $ForgeNetMsg$IWriter$Type} from "packages/com/endertech/minecraft/forge/network/$ForgeNetMsg$IWriter"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $ForgeNetMsg<MSG extends $ForgeNetMsg<(MSG)>> {

constructor()

public "decode"(arg0: $FriendlyByteBuf$Type): MSG
public "encode"(arg0: MSG, arg1: $FriendlyByteBuf$Type): void
public "handle"(arg0: $Level$Type, arg1: $Player$Type): void
public "handle"(arg0: MSG, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "create"(): MSG
public "getSide"(arg0: $NetworkEvent$Context$Type): $LogicalSide
public "getClientPlayer"(): $Player
public "getPlayer"(arg0: $NetworkEvent$Context$Type): $Player
public static "addFieldHandler"<T>(arg0: $Class$Type<(T)>, arg1: $ForgeNetMsg$IReader$Type<(T)>, arg2: $ForgeNetMsg$IWriter$Type<(T)>): void
get "clientPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeNetMsg$Type<MSG> = ($ForgeNetMsg<(MSG)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeNetMsg_<MSG> = $ForgeNetMsg$Type<(MSG)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/items/$VacuumTube$Properties" {
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageableItem$Properties, $DamageableItem$Properties$Type} from "packages/com/endertech/minecraft/forge/items/$DamageableItem$Properties"
import {$UnitId, $UnitId$Type} from "packages/com/endertech/minecraft/forge/units/$UnitId"

export class $VacuumTube$Properties<T extends $VacuumTube$Properties<(T)>> extends $DamageableItem$Properties<(T)> {
 "speed": float
 "suckIntoInventory": boolean
 "durability": integer
 "repairMaterial": $UnitId
readonly "vanillaProps": $Item$Properties
readonly "name": string


public static "of"(arg0: string): $VacuumTube$Properties<(any)>
public "speed"(arg0: float): T
public "suckIntoInventory"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VacuumTube$Properties$Type<T> = ($VacuumTube$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VacuumTube$Properties_<T> = $VacuumTube$Properties$Type<(T)>;
}}
declare module "packages/com/endertech/minecraft/mods/adpother/pollution/$IStorage$Content" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Percentage, $Percentage$Type} from "packages/com/endertech/minecraft/forge/math/$Percentage"
import {$Pollutant, $Pollutant$Type} from "packages/com/endertech/minecraft/mods/adpother/blocks/$Pollutant"

export class $IStorage$Content {
 "changed": boolean

constructor(arg0: integer)

public static "from"(arg0: $CompoundTag$Type): $IStorage$Content
public "getCapacity"(): integer
public "setCapacity"(arg0: integer): $IStorage$Content
public "hasFunctionalFilters"(): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getFullnessPercentageFor"(arg0: $Pollutant$Type<(any)>): $Percentage
public "getHighestFullnessPercentage"(): $Percentage
public "getFullnessWith"(arg0: $Pollutant$Type<(any)>): integer
public "removeFiltersFor"(...arg0: ($Pollutant$Type<(any)>)[]): $IStorage$Content
public "setFullnessWith"(arg0: $Pollutant$Type<(any)>, arg1: integer): $IStorage$Content
public "freeFrom"(arg0: $Pollutant$Type<(any)>, arg1: integer): integer
public "installFiltersFor"(arg0: integer, ...arg1: ($Pollutant$Type<(any)>)[]): $IStorage$Content
public "fillWith"(arg0: $Pollutant$Type<(any)>, arg1: integer): integer
public "getFreeSpaceFor"(arg0: $Pollutant$Type<(any)>): integer
public "hasFilterFor"(arg0: $Pollutant$Type<(any)>): boolean
public "getHighestFullness"(): integer
public "getFiltersAmount"(): integer
public "removeAllFilters"(): $IStorage$Content
get "capacity"(): integer
set "capacity"(value: integer)
get "highestFullnessPercentage"(): $Percentage
get "highestFullness"(): integer
get "filtersAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorage$Content$Type = ($IStorage$Content);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStorage$Content_ = $IStorage$Content$Type;
}}
declare module "packages/com/endertech/minecraft/mods/adchimneys/blocks/$Container$Properties" {
import {$ForgeBlock$Properties, $ForgeBlock$Properties$Type} from "packages/com/endertech/minecraft/forge/blocks/$ForgeBlock$Properties"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export class $Container$Properties<T extends $Container$Properties<(T)>> extends $ForgeBlock$Properties<(T)> {
readonly "vanillaProps": $BlockBehaviour$Properties
readonly "name": string


public static "of"(arg0: string): $Container$Properties<(any)>
public "metal"(): T
public "stone"(): T
public "glass"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Container$Properties$Type<T> = ($Container$Properties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Container$Properties_<T> = $Container$Properties$Type<(T)>;
}}
