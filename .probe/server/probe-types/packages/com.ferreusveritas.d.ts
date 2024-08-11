declare module "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GrowSignal {
 "energy": float
 "dir": $Direction
 "numTurns": integer
 "numSteps": integer
readonly "defaultDir": $Direction
 "rootPos": $BlockPos
 "delta": $BlockPos
 "radius": float
 "tapering": float
 "success": boolean
 "choked": boolean
 "rand": $RandomSource

constructor(arg0: $Species$Type, arg1: $BlockPos$Type, arg2: float, arg3: $RandomSource$Type)
constructor(arg0: $Species$Type, arg1: $BlockPos$Type, arg2: float, arg3: $RandomSource$Type, arg4: $Direction$Type)

public "step"(): boolean
public "getSpecies"(): $Species
public "isInTrunk"(): boolean
public "doTurn"(arg0: $Direction$Type): boolean
get "species"(): $Species
get "inTrunk"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowSignal$Type = ($GrowSignal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowSignal_ = $GrowSignal$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SafeChunkBounds, $SafeChunkBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import {$TreePart, $TreePart$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Ageable, $Ageable$Type} from "packages/com/ferreusveritas/dynamictrees/api/$Ageable"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$TreePart$TreePartType, $TreePart$TreePartType$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$RayTraceCollision, $RayTraceCollision$Type} from "packages/com/ferreusveritas/dynamictrees/util/$RayTraceCollision"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LeavesBlock, $LeavesBlock$Type} from "packages/net/minecraft/world/level/block/$LeavesBlock"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $DynamicLeavesBlock extends $LeavesBlock implements $TreePart, $Ageable, $RayTraceCollision {
 "properties": $LeavesProperties
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
 "drops": $ResourceLocation

constructor(arg0: $LeavesProperties$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "getProperties"(arg0: $BlockState$Type): $LeavesProperties
public "setProperties"(arg0: $LeavesProperties$Type): void
public "getFamily"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $Family
public "age"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $RandomSource$Type, arg4: $SafeChunkBounds$Type): integer
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public static "isBottom"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "getTreePartType"(): $TreePart$TreePartType
public "shouldAnalyse"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "onSheared"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
public "isShearable"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
public "hasAdequateLight"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $LeavesProperties$Type, arg3: $BlockPos$Type): boolean
public "isEntityPassable"(arg0: $CollisionContext$Type): boolean
public "isEntityPassable"(arg0: $Entity$Type): boolean
public "branchOut"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "needLeaves"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LeavesProperties$Type, arg3: $Species$Type): boolean
public "getRadius"(arg0: $BlockState$Type): integer
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isRayTraceCollidable"(): boolean
public "getLeavesBlockStateForPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer, arg4: boolean): $BlockState
public "getHydrationLevelFromNeighbors"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $LeavesProperties$Type): integer
public "appearanceChangesWithHydro"(arg0: integer, arg1: integer): boolean
public "isLocationSuitableForNewLeaves"(arg0: $LevelAccessor$Type, arg1: $LeavesProperties$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getDrops"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "growLeavesIfLocationIsSuitable"(arg0: $LevelAccessor$Type, arg1: $LeavesProperties$Type, arg2: $BlockPos$Type, arg3: integer): boolean
public "isRootNode"(): boolean
set "properties"(value: $LeavesProperties$Type)
get "treePartType"(): $TreePart$TreePartType
get "rayTraceCollidable"(): boolean
get "rootNode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicLeavesBlock$Type = ($DynamicLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicLeavesBlock_ = $DynamicLeavesBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/item/$DendroPotion$DendroPotionType" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $DendroPotion$DendroPotionType extends $Enum<($DendroPotion$DendroPotionType)> {
static readonly "BIOCHAR": $DendroPotion$DendroPotionType
static readonly "DEPLETION": $DendroPotion$DendroPotionType
static readonly "GIGAS": $DendroPotion$DendroPotionType
static readonly "BURGEONING": $DendroPotion$DendroPotionType
static readonly "FERTILITY": $DendroPotion$DendroPotionType
static readonly "PERSISTENCE": $DendroPotion$DendroPotionType
static readonly "TRANSFORM": $DendroPotion$DendroPotionType
static readonly "HARVEST": $DendroPotion$DendroPotionType
static readonly "DENUDING": $DendroPotion$DendroPotionType


public "getName"(): string
public static "values"(): ($DendroPotion$DendroPotionType)[]
public static "valueOf"(arg0: string): $DendroPotion$DendroPotionType
public "isActive"(): boolean
public "getIndex"(): integer
public "getDescription"(): $Component
public "getColor"(): integer
public "getBasePotionType"(): $DendroPotion$DendroPotionType
public "getIngredient"(): $ItemStack
get "name"(): string
get "active"(): boolean
get "index"(): integer
get "description"(): $Component
get "color"(): integer
get "basePotionType"(): $DendroPotion$DendroPotionType
get "ingredient"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DendroPotion$DendroPotionType$Type = (("depletion") | ("transform") | ("harvest") | ("burgeoning") | ("biochar") | ("fertility") | ("persistence") | ("denuding") | ("gigas")) | ($DendroPotion$DendroPotionType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DendroPotion$DendroPotionType_ = $DendroPotion$DendroPotionType$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$SimpleRegistry, $SimpleRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $TypedRegistry<V extends $RegistryEntry<(V)>> extends $SimpleRegistry<(V)> {

constructor(arg0: $Class$Type<(V)>, arg1: V, arg2: $TypedRegistry$EntryType$Type<(V)>)
constructor(arg0: string, arg1: $Class$Type<(V)>, arg2: V, arg3: $TypedRegistry$EntryType$Type<(V)>)

public static "newType"<V extends $RegistryEntry<(V)>>(arg0: $Codec$Type<(V)>): $TypedRegistry$EntryType<(V)>
public static "newType"<V extends $RegistryEntry<(V)>>(arg0: $Function$Type<($ResourceLocation$Type), (V)>): $TypedRegistry$EntryType<(V)>
public "getType"(arg0: $JsonObject$Type, arg1: $ResourceLocation$Type): $TypedRegistry$EntryType<(V)>
public "getType"(arg0: $ResourceLocation$Type): $TypedRegistry$EntryType<(V)>
public "getDefaultType"(): $TypedRegistry$EntryType<(V)>
public "hasType"(arg0: $ResourceLocation$Type): boolean
public static "createDefaultCodec"<V extends $RegistryEntry<(V)>>(arg0: $Function$Type<($ResourceLocation$Type), (V)>): $Codec<(V)>
public static "putJsonRegistryName"(arg0: $JsonObject$Type, arg1: $ResourceLocation$Type): $JsonObject
public "registerType"(arg0: $ResourceLocation$Type, arg1: $TypedRegistry$EntryType$Type<(V)>): void
public "postRegistryEvent"(): void
get "defaultType"(): $TypedRegistry$EntryType<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedRegistry$Type<V> = ($TypedRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedRegistry_<V> = $TypedRegistry$Type<(V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$CellSolver" {
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"

export interface $CellSolver {

 "solve"(arg0: ($Cell$Type)[]): integer

(arg0: ($Cell$Type)[]): integer
}

export namespace $CellSolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellSolver$Type = ($CellSolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CellSolver_ = $CellSolver$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$SpreadableSoilProperties$SpreadableRootyBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$SpreadableSoilProperties, $SpreadableSoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SpreadableSoilProperties"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RootyBlockDecayer, $RootyBlockDecayer$Type} from "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$RootyBlock, $RootyBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SpreadableSoilProperties$SpreadableRootyBlock extends $RootyBlock {
static "rootyBlockDecayer": $RootyBlockDecayer
static readonly "FERTILITY": $IntegerProperty
static readonly "IS_VARIANT": $BooleanProperty
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

constructor(arg0: $SpreadableSoilProperties$Type, arg1: $BlockBehaviour$Properties$Type)

public "getSoilProperties"(): $SpreadableSoilProperties
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "soilProperties"(): $SpreadableSoilProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpreadableSoilProperties$SpreadableRootyBlock$Type = ($SpreadableSoilProperties$SpreadableRootyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpreadableSoilProperties$SpreadableRootyBlock_ = $SpreadableSoilProperties$SpreadableRootyBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffectProvider" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$SubstanceEffect, $SubstanceEffect$Type} from "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffect"

export interface $SubstanceEffectProvider {

 "getSubstanceEffect"(arg0: $ItemStack$Type): $SubstanceEffect

(arg0: $ItemStack$Type): $SubstanceEffect
}

export namespace $SubstanceEffectProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubstanceEffectProvider$Type = ($SubstanceEffectProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubstanceEffectProvider_ = $SubstanceEffectProvider$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DynamicTrees$DestroyMode extends $Enum<($DynamicTrees$DestroyMode)> {
static readonly "IGNORE": $DynamicTrees$DestroyMode
static readonly "SLOPPY": $DynamicTrees$DestroyMode
static readonly "SET_RADIUS": $DynamicTrees$DestroyMode
static readonly "HARVEST": $DynamicTrees$DestroyMode
static readonly "ROT": $DynamicTrees$DestroyMode
static readonly "OVERFLOW": $DynamicTrees$DestroyMode


public static "values"(): ($DynamicTrees$DestroyMode)[]
public static "valueOf"(arg0: string): $DynamicTrees$DestroyMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicTrees$DestroyMode$Type = (("sloppy") | ("harvest") | ("overflow") | ("rot") | ("ignore") | ("set_radius")) | ($DynamicTrees$DestroyMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicTrees$DestroyMode_ = $DynamicTrees$DestroyMode$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/$FutureBreakable" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $FutureBreakable {

 "futureBreak"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): void

(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): void
}

export namespace $FutureBreakable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FutureBreakable$Type = ($FutureBreakable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FutureBreakable_ = $FutureBreakable$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration" {
import {$PropertiesAccessor, $PropertiesAccessor$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor"
import {$Configurable, $Configurable$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $Configuration<T extends $Configuration<(T), (C)>, C extends $Configurable> extends $RegistryEntry<(T)> {

constructor(arg0: C)

public "get"<V>(arg0: $ConfigurationProperty$Type<(V)>): V
public "toString"(): string
public "copy"(): T
public "with"<V>(arg0: $ConfigurationProperty$Type<(V)>, arg1: V): T
public "has"(arg0: $ConfigurationProperty$Type<(any)>): boolean
public "withAll"(arg0: $PropertiesAccessor$Type): T
public "getAsOptional"<V>(arg0: $ConfigurationProperty$Type<(V)>): $Optional<(V)>
public "getConfigurable"(): C
public "getOrInvalidDefault"<V>(arg0: $ConfigurationProperty$Type<(V)>, arg1: $Predicate$Type<(V)>, arg2: V): V
get "configurable"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configuration$Type<T, C> = ($Configuration<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configuration_<T, C> = $Configuration$Type<(T), (C)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $Registry<V extends $RegistryEntry<(V)>> extends $Iterable<(V)> {

 "getName"(): string
 "lock"(): void
 "get"(arg0: $ResourceLocation$Type): V
 "get"(arg0: string): V
 "clear"(): void
 "iterator"(): $Iterator<(V)>
 "register"(arg0: V): $Registry<(V)>
 "getType"(): $Class<(V)>
 "isLocked"(): boolean
 "unlock"(): void
 "getComparator"(): $Comparator<(V)>
 "getAll"(): $Set<(V)>
 "has"(arg0: $ResourceLocation$Type): boolean
 "dump"(): void
 "getOptional"(arg0: $ResourceLocation$Type): $Optional<(V)>
 "getOptional"(arg0: string): $Optional<(V)>
 "registerAll"(...arg0: (V)[]): void
 "generateIfValidRunnable"(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<(V)>, arg2: $Runnable$Type): $Runnable
 "dataGenerationStream"(arg0: string): $Stream<(V)>
 "runOnNextLock"(arg0: $Runnable$Type): void
 "postRegistryEvent"(): void
 "getAllFor"(arg0: string): $Set<(V)>
 "getGetterCodec"(): $Codec<(V)>
 "getAsDataResult"(arg0: $ResourceLocation$Type): $DataResult<(V)>
 "getRegistryNames"(): $Set<($ResourceLocation)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $Registry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Registry$Type<V> = ($Registry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Registry_<V> = $Registry$Type<(V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$TreePart, $TreePart$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$TreePart$TreePartType, $TreePart$TreePartType$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SoilProperties, $SoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$BlockColors, $BlockColors$Type} from "packages/net/minecraft/client/color/block/$BlockColors"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockWithDynamicHardness, $BlockWithDynamicHardness$Type} from "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RootyBlockDecayer, $RootyBlockDecayer$Type} from "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $RootyBlock extends $BlockWithDynamicHardness implements $TreePart, $EntityBlock {
static "rootyBlockDecayer": $RootyBlockDecayer
static readonly "FERTILITY": $IntegerProperty
static readonly "IS_VARIANT": $BooleanProperty
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

constructor(arg0: $SoilProperties$Type, arg1: $BlockBehaviour$Properties$Type)

public "getFamily"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $Family
public "getHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "updateTree"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type, arg4: boolean): void
public "getDecayBlockState"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $BlockState
public "getTrunkDirection"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Direction
public "getSpecies"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $Species
public "getSoilProperties"(): $SoilProperties
public "getFertility"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "destroyTree"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "destroyTree"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public "fertilize"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): boolean
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "setSpecies"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Species$Type): void
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "doDecay"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Species$Type): void
public "setFertility"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): void
public "startAnalysis"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $MapSignal$Type): $MapSignal
public "isRootNode"(): boolean
public "getTreePartType"(): $TreePart$TreePartType
public "shouldAnalyse"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "rootColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getColorFromBark"(): boolean
public "fallWithTree"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): boolean
public "fallWithTree"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "colorMultiplier"(arg0: $BlockColors$Type, arg1: $BlockState$Type, arg2: $BlockAndTintGetter$Type, arg3: $BlockPos$Type, arg4: integer): integer
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "getFriction"(): float
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getLightBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "defaultMapColor"(): $MapColor
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getPrimitiveSoilBlock"(): $Block
public "getPrimitiveSoilState"(arg0: $BlockState$Type): $BlockState
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
public "getRadius"(arg0: $BlockState$Type): integer
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getJumpFactor"(): float
public "getSpeedFactor"(): float
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "hasTileEntity"(arg0: $BlockState$Type): boolean
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "soilProperties"(): $SoilProperties
get "rootNode"(): boolean
get "treePartType"(): $TreePart$TreePartType
get "colorFromBark"(): boolean
get "friction"(): float
get "primitiveSoilBlock"(): $Block
get "jumpFactor"(): float
get "speedFactor"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootyBlock$Type = ($RootyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootyBlock_ = $RootyBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$ThickBranchBlock$ReplaceableState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ThickBranchBlock$ReplaceableState extends $Enum<($ThickBranchBlock$ReplaceableState)> {
static readonly "SHELL": $ThickBranchBlock$ReplaceableState
static readonly "REPLACEABLE": $ThickBranchBlock$ReplaceableState
static readonly "BLOCKING": $ThickBranchBlock$ReplaceableState
static readonly "TREEPART": $ThickBranchBlock$ReplaceableState


public static "values"(): ($ThickBranchBlock$ReplaceableState)[]
public static "valueOf"(arg0: string): $ThickBranchBlock$ReplaceableState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThickBranchBlock$ReplaceableState$Type = (("shell") | ("blocking") | ("replaceable") | ("treepart")) | ($ThickBranchBlock$ReplaceableState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThickBranchBlock$ReplaceableState_ = $ThickBranchBlock$ReplaceableState$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/$SeedSaplingRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SeedSaplingRecipe {
static readonly "CODEC": $Codec<($SeedSaplingRecipe)>

constructor(arg0: $Block$Type, arg1: $Item$Type)
constructor(arg0: $Item$Type)

public "isValid"(): boolean
public "getSaplingBlock"(): $Optional<($Block)>
public "setSaplingItem"(arg0: $Item$Type): $SeedSaplingRecipe
public "getSaplingItem"(): $Optional<($Item)>
public "canCraftSaplingToSeed"(): boolean
public "setCanCraftSeedToSapling"(arg0: boolean): void
public "canCraftSeedToSapling"(): boolean
public "addExtraIngredientForSaplingToSeed"(arg0: $Item$Type): void
public "addExtraIngredientForSeedToSapling"(arg0: $Item$Type): void
public "getIngredientsForSaplingToSeed"(): $List<($Item)>
public "setCanCraftSaplingToSeed"(arg0: boolean): void
public "getIngredientsForSeedToSapling"(): $List<($Item)>
get "valid"(): boolean
get "saplingBlock"(): $Optional<($Block)>
set "saplingItem"(value: $Item$Type)
get "saplingItem"(): $Optional<($Item)>
get "ingredientsForSaplingToSeed"(): $List<($Item)>
get "ingredientsForSeedToSapling"(): $List<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeedSaplingRecipe$Type = ($SeedSaplingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SeedSaplingRecipe_ = $SeedSaplingRecipe$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData$PosType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BranchDestructionData$PosType extends $Enum<($BranchDestructionData$PosType)> {
static readonly "BRANCHES": $BranchDestructionData$PosType
static readonly "LEAVES": $BranchDestructionData$PosType
static readonly "ENDPOINTS": $BranchDestructionData$PosType


public static "values"(): ($BranchDestructionData$PosType)[]
public static "valueOf"(arg0: string): $BranchDestructionData$PosType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchDestructionData$PosType$Type = (("endpoints") | ("leaves") | ("branches")) | ($BranchDestructionData$PosType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchDestructionData$PosType_ = $BranchDestructionData$PosType$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor$IterationAction" {
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

export interface $PropertiesAccessor$IterationAction<V> {

 "apply"(arg0: $ConfigurationProperty$Type<(V)>, arg1: V): void

(arg0: $ConfigurationProperty$Type<(V)>, arg1: V): void
}

export namespace $PropertiesAccessor$IterationAction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertiesAccessor$IterationAction$Type<V> = ($PropertiesAccessor$IterationAction<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertiesAccessor$IterationAction_<V> = $PropertiesAccessor$IterationAction$Type<(V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$PoissonDisc" {
import {$Vec2i, $Vec2i$Type} from "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$Vec2i"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PoissonDisc extends $Vec2i {
 "radius": integer
 "arc": integer
 "real": boolean
 "x": integer
 "z": integer
 "tight": boolean

constructor(arg0: $PoissonDisc$Type)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor()
constructor(arg0: $BlockPos$Type, arg1: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: boolean)
constructor(arg0: $Vec2i$Type, arg1: integer)

public "toString"(): string
public "set"(arg0: integer, arg1: integer, arg2: integer): $PoissonDisc
public "set"(arg0: integer, arg1: integer): $PoissonDisc
public "fillArc"(): void
public "setRadius"(arg0: integer): $PoissonDisc
public "isInside"(arg0: integer, arg1: integer): boolean
public "isEdge"(arg0: integer, arg1: integer): boolean
public "doCirclesIntersectPadding"(arg0: $PoissonDisc$Type): boolean
public "edgeMask"(arg0: integer, arg1: integer): void
public "discPenetration"(arg0: $PoissonDisc$Type): double
public "getFreeAngleCW"(): double
public "getFreeBitCW"(): integer
public "isInCenterChunk"(arg0: integer, arg1: integer): boolean
public "getFreeAngleCCW"(): double
public "doCirclesIntersect"(arg0: $PoissonDisc$Type): boolean
public "isInterior"(arg0: integer, arg1: integer): boolean
public "getFreeBitCCW"(): integer
public "bitToAngle"(arg0: integer): double
public "clearArc"(): void
public "hasFreeAngles"(): boolean
public "maskArc"(arg0: double, arg1: double): void
public "isSolved"(): boolean
public "setSolved"(): void
set "radius"(value: integer)
get "freeAngleCW"(): double
get "freeBitCW"(): integer
get "freeAngleCCW"(): double
get "freeBitCCW"(): integer
get "solved"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoissonDisc$Type = ($PoissonDisc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoissonDisc_ = $PoissonDisc$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$BlockBounds, $BlockBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SafeChunkBounds {
static readonly "ANY": $SafeChunkBounds
static readonly "ANY_WG": $SafeChunkBounds

constructor(arg0: $WorldGenLevel$Type, arg1: $ChunkPos$Type)

public "inBounds"(arg0: $BlockBounds$Type, arg1: boolean): boolean
public "inBounds"(arg0: $BlockPos$Type, arg1: boolean): boolean
public "setBlockState"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): void
public "setBlockState"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SafeChunkBounds$Type = ($SafeChunkBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SafeChunkBounds_ = $SafeChunkBounds$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PreGenerationContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$JoCode, $JoCode$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SafeChunkBounds, $SafeChunkBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PreGenerationContext extends $GenerationContext {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: integer, arg4: $Direction$Type, arg5: $SafeChunkBounds$Type, arg6: $JoCode$Type)

public "bounds"(): $SafeChunkBounds
public "radius"(): integer
public "facing"(): $Direction
public "joCode"(): $JoCode
public "isWorldGen"(): boolean
get "worldGen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PreGenerationContext$Type = ($PreGenerationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PreGenerationContext_ = $PreGenerationContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$RootConnections$ConnectionLevel" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $RootConnections$ConnectionLevel extends $Enum<($RootConnections$ConnectionLevel)> implements $StringRepresentable {
static readonly "MID": $RootConnections$ConnectionLevel
static readonly "LOW": $RootConnections$ConnectionLevel
static readonly "HIGH": $RootConnections$ConnectionLevel


public static "values"(): ($RootConnections$ConnectionLevel)[]
public static "valueOf"(arg0: string): $RootConnections$ConnectionLevel
public "getYOffset"(): integer
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "yOffset"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootConnections$ConnectionLevel$Type = (("high") | ("low") | ("mid")) | ($RootConnections$ConnectionLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootConnections$ConnectionLevel_ = $RootConnections$ConnectionLevel$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$AnimationHandler, $AnimationHandler$Type} from "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$DataAnimationHandler, $DataAnimationHandler$Type} from "packages/com/ferreusveritas/dynamictrees/entity/animation/$DataAnimationHandler"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ModelTracker, $ModelTracker$Type} from "packages/com/ferreusveritas/dynamictrees/models/$ModelTracker"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$FallingTreeEntity$DestroyType, $FallingTreeEntity$DestroyType$Type} from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity$DestroyType"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$BranchDestructionData, $BranchDestructionData$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"

export class $FallingTreeEntity extends $Entity implements $ModelTracker {
static readonly "voxelDataParameter": $EntityDataAccessor<($CompoundTag)>
 "landed": boolean
 "destroyType": $FallingTreeEntity$DestroyType
 "onFire": boolean
static "AnimHandlerFall": $AnimationHandler
static "AnimHandlerDrop": $AnimationHandler
static "AnimHandlerBurn": $AnimationHandler
static "AnimHandlerFling": $AnimationHandler
static "AnimHandlerBlast": $AnimationHandler
 "currentAnimationHandler": $AnimationHandler
 "dataAnimationHandler": $DataAnimationHandler
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

constructor(arg0: $Level$Type)
constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "getPayload"(): $List<($ItemStack)>
public "setData"(arg0: $BranchDestructionData$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $FallingTreeEntity$DestroyType$Type): $FallingTreeEntity
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "shouldRender"(): boolean
public "hasLeaves"(): boolean
public "getSpecies"(): $Species
public static "dropTree"(arg0: $Level$Type, arg1: $BranchDestructionData$Type, arg2: $List$Type<($ItemStack$Type)>, arg3: $FallingTreeEntity$DestroyType$Type): $FallingTreeEntity
public "getVolume"(): float
public "defaultAnimationHandler"(): $AnimationHandler
public "getBoundingBoxForCulling"(): $AABB
public "tick"(): void
public "setPos"(arg0: double, arg1: double, arg2: double): void
public "buildClient"(): void
public "getGeomCenter"(): $Vec3
public "isClientBuilt"(): boolean
public "buildVoxelData"(arg0: $BranchDestructionData$Type): $CompoundTag
public "getMassCenter"(): $Vec3
public "setVoxelData"(arg0: $CompoundTag$Type): void
public "getVoxelData"(): $CompoundTag
public "getDestroyData"(): $BranchDestructionData
public "setupFromNBT"(arg0: $CompoundTag$Type): void
public "shouldDie"(): boolean
public static "spawnItemAsEntity"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): void
public "handleMotion"(): void
public "dropPayLoad"(): void
public "modelCleanup"(): void
public "cleanupRootyDirt"(): void
public static "standardDropLogsPayload"(arg0: $FallingTreeEntity$Type): void
public "buildAABBFromDestroyData"(arg0: $BranchDestructionData$Type): $AABB
public static "standardDropLeavesPayLoad"(arg0: $FallingTreeEntity$Type): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "payload"(): $List<($ItemStack)>
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "species"(): $Species
get "volume"(): float
get "boundingBoxForCulling"(): $AABB
get "geomCenter"(): $Vec3
get "clientBuilt"(): boolean
get "massCenter"(): $Vec3
set "voxelData"(value: $CompoundTag$Type)
get "voxelData"(): $CompoundTag
get "destroyData"(): $BranchDestructionData
set "upFromNBT"(value: $CompoundTag$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingTreeEntity$Type = ($FallingTreeEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingTreeEntity_ = $FallingTreeEntity$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$TreePart$TreePartType, $TreePart$TreePartType$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $TreePart {

 "getFamily"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $Family
 "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
 "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
 "isRootNode"(): boolean
 "getTreePartType"(): $TreePart$TreePartType
 "shouldAnalyse"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
 "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
 "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
 "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
 "getRadius"(arg0: $BlockState$Type): integer
}

export namespace $TreePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreePart$Type = ($TreePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreePart_ = $TreePart$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$MatureAction" {
import {$GrowableBlock, $GrowableBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock"
import {$GrowableBlock$Info, $GrowableBlock$Info$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GrowableBlock$MatureAction extends $Enum<($GrowableBlock$MatureAction)> {
static readonly "DEFAULT": $GrowableBlock$MatureAction
static readonly "DROP": $GrowableBlock$MatureAction
static readonly "ROT": $GrowableBlock$MatureAction


public static "values"(): ($GrowableBlock$MatureAction)[]
public static "valueOf"(arg0: string): $GrowableBlock$MatureAction
public "perform"(arg0: $GrowableBlock$Type, arg1: $GrowableBlock$Info$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowableBlock$MatureAction$Type = (("drop") | ("default") | ("rot")) | ($GrowableBlock$MatureAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowableBlock$MatureAction_ = $GrowableBlock$MatureAction$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$RayTraceCollision" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RayTraceCollision {

 "isRayTraceCollidable"(): boolean

(): boolean
}

export namespace $RayTraceCollision {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RayTraceCollision$Type = ($RayTraceCollision);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RayTraceCollision_ = $RayTraceCollision$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $GrowableBlock {

 "isSupported"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
 "drop"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
 "performMatureAction"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
 "rot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
}

export namespace $GrowableBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowableBlock$Type = ($GrowableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowableBlock_ = $GrowableBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$DependencyKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Generator$DependencyKey<T> {

constructor(arg0: string)
constructor(arg0: string, arg1: boolean)

public "getName"(): string
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isOptional"(): boolean
get "name"(): string
get "optional"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Generator$DependencyKey$Type<T> = ($Generator$DependencyKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Generator$DependencyKey_<T> = $Generator$DependencyKey$Type<(T)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ThrowableBiFunction, $ThrowableBiFunction$Type} from "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableBiFunction"
import {$DeserialisationException, $DeserialisationException$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/$DeserialisationException"

export interface $Result$Mapper<T, V> extends $ThrowableBiFunction<(T), ($Consumer<(string)>), (V), ($DeserialisationException)> {

 "apply"(arg0: $DeserialisationException$Type, arg1: $Consumer$Type<(string)>): V

(arg0: $DeserialisationException$Type, arg1: $Consumer$Type<(string)>): V
}

export namespace $Result$Mapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Result$Mapper$Type<T, V> = ($Result$Mapper<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Result$Mapper_<T, V> = $Result$Mapper$Type<(T), (V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKit" {
import {$DirectionSelectionContext, $DirectionSelectionContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext"
import {$PositionalSpeciesContext, $PositionalSpeciesContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$GrowthLogicKitConfiguration, $GrowthLogicKitConfiguration$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKitConfiguration"
import {$ConfigurableRegistry, $ConfigurableRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry"
import {$ConfigurableRegistryEntry, $ConfigurableRegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import {$DirectionManipulationContext, $DirectionManipulationContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionManipulationContext"

export class $GrowthLogicKit extends $ConfigurableRegistryEntry<($GrowthLogicKit), ($GrowthLogicKitConfiguration)> {
static readonly "HEIGHT_VARIATION": $ConfigurationProperty<(integer)>
static readonly "DEFAULT": $GrowthLogicKit
static readonly "REGISTRY": $ConfigurableRegistry<($GrowthLogicKit), ($GrowthLogicKitConfiguration)>

constructor(arg0: $ResourceLocation$Type)

public "selectNewDirection"(arg0: $GrowthLogicKitConfiguration$Type, arg1: $DirectionSelectionContext$Type): $Direction
public "getLowestBranchHeight"(arg0: $GrowthLogicKitConfiguration$Type, arg1: $PositionalSpeciesContext$Type): integer
public "populateDirectionProbabilityMap"(arg0: $GrowthLogicKitConfiguration$Type, arg1: $DirectionManipulationContext$Type): (integer)[]
public "getEnergy"(arg0: $GrowthLogicKitConfiguration$Type, arg1: $PositionalSpeciesContext$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthLogicKit$Type = ($GrowthLogicKit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthLogicKit_ = $GrowthLogicKit$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties" {
import {$Resettable, $Resettable$Type} from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import {$DTBlockStateProvider, $DTBlockStateProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RootyBlock, $RootyBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SoilProperties extends $RegistryEntry<($SoilProperties)> implements $Resettable<($SoilProperties)> {
static readonly "CODEC": $Codec<($SoilProperties)>
static readonly "NULL_SOIL_PROPERTIES": $SoilProperties
static readonly "REGISTRY": $TypedRegistry<($SoilProperties)>
static readonly "ROOTS": string
static readonly "SOIL_BLOCK": string

constructor(arg0: $Block$Type, arg1: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type)

public "toString"(): string
public "getBlock"(): $Optional<($RootyBlock)>
public "getSoilFlags"(): integer
public "isOnlyIfLoaded"(): boolean
public "setOnlyIfLoaded"(arg0: string): void
public "setModelOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "getModelPath"(arg0: string): $Optional<($ResourceLocation)>
public "setBlock"(arg0: $RootyBlock$Type): void
public "setPrimitiveSoilBlock"(arg0: $Block$Type): void
public "setTextureOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "getBlockRegistryName"(): $ResourceLocation
public "getDefaultBlockProperties"(arg0: $MapColor$Type): $BlockBehaviour$Properties
public "defaultSoilBlockTags"(): $List<($TagKey<($Block)>)>
public "getRootsOverlayModelLocation"(): $ResourceLocation
public "addGeneratedBlockTags"(arg0: $Function$Type<($TagKey$Type<($Block$Type)>), ($IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type<($Block$Type)>)>): void
public "getPrimitiveSoilBlockOptional"(): $Optional<($Block)>
public "setBlockRegistryName"(arg0: $ResourceLocation$Type): $SoilProperties
public "getPrimitiveSoilBlock"(): $Block
public "getPrimitiveSoilState"(arg0: $BlockState$Type): $BlockState
public "generateStateData"(arg0: $DTBlockStateProvider$Type): void
public "isValidState"(arg0: $BlockState$Type): boolean
public "getSoilState"(arg0: $BlockState$Type, arg1: integer, arg2: boolean): $BlockState
public "hasSubstitute"(): boolean
public "generateBlock"(arg0: $BlockBehaviour$Properties$Type): void
public "setHasSubstitute"(arg0: boolean): void
public "setSoilFlags"(arg0: integer): $SoilProperties
public "getDefaultMapColor"(): $MapColor
public "addSoilFlags"(arg0: integer): $SoilProperties
public "getTexturePath"(arg0: string): $Optional<($ResourceLocation)>
public "reset"(): $SoilProperties
public "setPostReloadDefaults"(): $SoilProperties
public "setPreReloadDefaults"(): $SoilProperties
get "block"(): $Optional<($RootyBlock)>
get "soilFlags"(): integer
get "onlyIfLoaded"(): boolean
set "onlyIfLoaded"(value: string)
set "modelOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
set "block"(value: $RootyBlock$Type)
set "primitiveSoilBlock"(value: $Block$Type)
set "textureOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
get "blockRegistryName"(): $ResourceLocation
get "rootsOverlayModelLocation"(): $ResourceLocation
get "primitiveSoilBlockOptional"(): $Optional<($Block)>
set "blockRegistryName"(value: $ResourceLocation$Type)
get "primitiveSoilBlock"(): $Block
set "soilFlags"(value: integer)
get "defaultMapColor"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoilProperties$Type = ($SoilProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoilProperties_ = $SoilProperties$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$FullGenerationContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SafeChunkBounds, $SafeChunkBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $FullGenerationContext extends $GenerationContext {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: $Holder$Type<($Biome$Type)>, arg4: integer, arg5: $SafeChunkBounds$Type)

public "bounds"(): $SafeChunkBounds
public "radius"(): integer
public "biome"(): $Holder<($Biome)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FullGenerationContext$Type = ($FullGenerationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FullGenerationContext_ = $FullGenerationContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator" {
import {$Generator$Dependencies, $Generator$Dependencies$Type} from "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$Dependencies"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$DTDataProvider, $DTDataProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"

export interface $Generator<P extends ($DataProvider) & ($DTDataProvider), I> {

 "generate"(arg0: P, arg1: I): void
 "generate"(arg0: P, arg1: I, arg2: $Generator$Dependencies$Type): void
 "verifyInput"(arg0: I): boolean
 "gatherDependencies"(arg0: I): $Generator$Dependencies
 "verifyDependencies"(arg0: $Generator$Dependencies$Type): boolean
}

export namespace $Generator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Generator$Type<P, I> = ($Generator<(P), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Generator_<P, I> = $Generator$Type<(P), (I)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableBiFunction" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"

export interface $ThrowableBiFunction<A, B, R, T extends $Throwable> {

 "apply"(arg0: A, arg1: B): R

(arg0: A, arg1: B): R
}

export namespace $ThrowableBiFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowableBiFunction$Type<A, B, R, T> = ($ThrowableBiFunction<(A), (B), (R), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThrowableBiFunction_<A, B, R, T> = $ThrowableBiFunction$Type<(A), (B), (R), (T)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$DynamicTreeFeature" {
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
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$UniversalPoissonDiscProvider, $UniversalPoissonDiscProvider$Type} from "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$UniversalPoissonDiscProvider"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$LevelSimulatedReader, $LevelSimulatedReader$Type} from "packages/net/minecraft/world/level/$LevelSimulatedReader"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $DynamicTreeFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "DISC_PROVIDER": $UniversalPoissonDiscProvider
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

constructor()

public static "setup"(): void
public static "validTreePos"(arg0: $LevelSimulatedReader$Type, arg1: $BlockPos$Type): boolean
public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public static "isFoliage"(arg0: $LevelSimulatedReader$Type, arg1: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicTreeFeature$Type = ($DynamicTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicTreeFeature_ = $DynamicTreeFeature$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$FruitBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GrowableBlock, $GrowableBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Fruit, $Fruit$Type} from "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $FruitBlock extends $Block implements $BonemealableBlock, $GrowableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Fruit$Type)

public "isSupported"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getMaxAge"(): integer
public "getAge"(arg0: $BlockState$Type): integer
public "performMatureAction"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "doTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "tickMature"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getAgeAsPercentage"(arg0: $BlockState$Type): float
public "drop"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "rot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
get "maxAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitBlock$Type = ($FruitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitBlock_ = $FruitBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $NodeInspector {

 "run"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "returnRun"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
}

export namespace $NodeInspector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NodeInspector$Type = ($NodeInspector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NodeInspector_ = $NodeInspector$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$AerialRootsSoilProperties$RootRootyBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
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
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SoilProperties, $SoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RootyBlockDecayer, $RootyBlockDecayer$Type} from "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RootyBlock, $RootyBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock"

export class $AerialRootsSoilProperties$RootRootyBlock extends $RootyBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static "rootyBlockDecayer": $RootyBlockDecayer
static readonly "FERTILITY": $IntegerProperty
static readonly "IS_VARIANT": $BooleanProperty
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

constructor(arg0: $SoilProperties$Type, arg1: $BlockBehaviour$Properties$Type)

public "getHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "dropWholeTree"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public "getDecayBlockState"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $BlockState
public "destroyTree"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): void
public "startAnalysis"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $MapSignal$Type): $MapSignal
public "fallWithTree"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: boolean): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "isStructurallyStable"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
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
export type $AerialRootsSoilProperties$RootRootyBlock$Type = ($AerialRootsSoilProperties$RootRootyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AerialRootsSoilProperties$RootRootyBlock_ = $AerialRootsSoilProperties$RootRootyBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry" {
import {$SimpleRegistry, $SimpleRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$TemplateRegistry, $TemplateRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$ConfigurableRegistryEntry, $ConfigurableRegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"

export class $ConfigurableRegistry<V extends $ConfigurableRegistryEntry<(V), (C)>, C extends $Configuration<(C), (V)>> extends $SimpleRegistry<(V)> {

constructor(arg0: string, arg1: $Class$Type<(V)>, arg2: V, arg3: boolean, arg4: $TemplateRegistry$Type<(C)>)
constructor(arg0: $Class$Type<(V)>, arg1: V, arg2: boolean, arg3: $TemplateRegistry$Type<(C)>)
constructor(arg0: string, arg1: $Class$Type<(V)>, arg2: V, arg3: $TemplateRegistry$Type<(C)>)
constructor(arg0: $Class$Type<(V)>, arg1: V, arg2: $TemplateRegistry$Type<(C)>)

public "register"(arg0: V): $ConfigurableRegistry<(V), (C)>
public "getTemplates"(): $TemplateRegistry<(C)>
get "templates"(): $TemplateRegistry<(C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableRegistry$Type<V, C> = ($ConfigurableRegistry<(V), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableRegistry_<V, C> = $ConfigurableRegistry$Type<(V), (C)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Registry, $Registry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ItemModelProvider, $ItemModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DTDataProvider, $DTDataProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DTItemModelProvider extends $ItemModelProvider implements $DTDataProvider {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type, arg3: $List$Type<($Registry$Type<(any)>)>)

public "block"(arg0: $ResourceLocation$Type): $ResourceLocation
public "item"(arg0: $ResourceLocation$Type): $ResourceLocation
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DTItemModelProvider$Type = ($DTItemModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DTItemModelProvider_ = $DTItemModelProvider$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/function/$TriFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriFunction<T, U, R, S> {

 "apply"(arg0: T, arg1: U, arg2: R): S

(arg0: T, arg1: U, arg2: R): S
}

export namespace $TriFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$Type<T, U, R, S> = ($TriFunction<(T), (U), (R), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriFunction_<T, U, R, S> = $TriFunction$Type<(T), (U), (R), (S)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PositionalSpeciesContext {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Species$Type)

public "pos"(): $BlockPos
public "level"(): $Level
public "species"(): $Species
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionalSpeciesContext$Type = ($PositionalSpeciesContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionalSpeciesContext_ = $PositionalSpeciesContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$AbstractRegistry" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$Registry, $Registry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $AbstractRegistry<V extends $RegistryEntry<(V)>> implements $Registry<(V)> {


public "getName"(): string
public "lock"(): void
public "get"(arg0: string): V
public "get"(arg0: $ResourceLocation$Type): V
public "clear"(): void
public "iterator"(): $Iterator<(V)>
public "getType"(): $Class<(V)>
public "isLocked"(): boolean
public "unlock"(): void
public "getComparator"(): $Comparator<(V)>
public "has"(arg0: $ResourceLocation$Type): boolean
public "dump"(): void
public "getOptional"(arg0: $ResourceLocation$Type): $Optional<(V)>
public "getOptional"(arg0: string): $Optional<(V)>
public "registerAll"(...arg0: (V)[]): void
public "generateIfValidRunnable"(arg0: $ResourceLocation$Type, arg1: $Consumer$Type<(V)>, arg2: $Runnable$Type): $Runnable
public "dataGenerationStream"(arg0: string): $Stream<(V)>
public "runOnNextLock"(arg0: $Runnable$Type): void
public "postRegistryEvent"(): void
public "getAllFor"(arg0: string): $Set<(V)>
public "getGetterCodec"(): $Codec<(V)>
public "getAsDataResult"(arg0: $ResourceLocation$Type): $DataResult<(V)>
public "getRegistryNames"(): $Set<($ResourceLocation)>
public "register"(arg0: V): $Registry<(V)>
public "getAll"(): $Set<(V)>
public "spliterator"(): $Spliterator<(V)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<V>;
get "name"(): string
get "type"(): $Class<(V)>
get "locked"(): boolean
get "comparator"(): $Comparator<(V)>
get "getterCodec"(): $Codec<(V)>
get "registryNames"(): $Set<($ResourceLocation)>
get "all"(): $Set<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRegistry$Type<V> = ($AbstractRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRegistry_<V> = $AbstractRegistry$Type<(V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $NetVolumeNode$Volume {
static readonly "VOXELSPERLOG": integer

constructor(...arg0: (integer)[])
constructor(arg0: integer)
constructor()

public "addVolume"(arg0: $NetVolumeNode$Volume$Type): void
public "addVolume"(arg0: integer, arg1: integer): void
public "addVolume"(arg0: integer): void
public "multiplyVolume"(arg0: double): void
public "getRawVolumesArray"(): (integer)[]
public "getRawVolume"(arg0: integer): integer
public "getRawVolume"(): integer
public "getVolume"(): float
public "getVolume"(arg0: integer): float
get "rawVolumesArray"(): (integer)[]
get "rawVolume"(): integer
get "volume"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetVolumeNode$Volume$Type = ($NetVolumeNode$Volume);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetVolumeNode$Volume_ = $NetVolumeNode$Volume$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Resettable, $Resettable$Type} from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$LevelContext, $LevelContext$Type} from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$GrowableBlock$Info, $GrowableBlock$Info$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GrowableBlock$MatureAction, $GrowableBlock$MatureAction$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$MatureAction"
import {$PodBlock, $PodBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$PodBlock"

export class $Pod extends $RegistryEntry<($Pod)> implements $Resettable<($Pod)> {
static readonly "TYPE": $TypedRegistry$EntryType<($Pod)>
static readonly "NULL": $Pod
static readonly "REGISTRY": $TypedRegistry<($Pod)>

constructor(arg0: $ResourceLocation$Type)

public "getBlock"(): $PodBlock
public "setMaxAge"(arg0: integer): void
public "getMaxAge"(): integer
public "place"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: float, arg3: $Direction$Type, arg4: integer): void
public "shouldGenerateBlockDrops"(): boolean
public "performMatureAction"(arg0: $GrowableBlock$Info$Type): void
public "setMinProductionFactor"(arg0: float): void
public "getFlowerHoldPeriodLength"(): float
public "setFlowerHoldPeriodLength"(arg0: float): void
public "placeDuringWorldGen"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: float, arg3: $Direction$Type, arg4: integer): void
public "getMinProductionFactor"(): float
public "isInFlowerHoldPeriod"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: float): boolean
public "seasonalProductionFactor"(arg0: $LevelContext$Type, arg1: $BlockPos$Type): float
public "getDefaultBlockProperties"(arg0: $MapColor$Type): $BlockBehaviour$Properties
public "getDefaultBlockProperties"(): $BlockBehaviour$Properties
public "getItemStack"(): $ItemStack
public "setItemStack"(arg0: $ItemStack$Type): void
public "createBlockDrops"(): $LootTable$Builder
public "setDropCount"(arg0: integer): void
public "getBlockShape"(arg0: $Direction$Type, arg1: integer): $VoxelShape
public "setBlockShapes"(arg0: $Direction$Type, arg1: ($VoxelShape$Type)[]): void
public "getGrowthChance"(): float
public "setGrowthChance"(arg0: float): void
public "setMaxDropCount"(arg0: integer): void
public "canBoneMeal"(): boolean
public "isOutOfSeason"(arg0: $LevelContext$Type, arg1: $BlockPos$Type): boolean
public "setCanBoneMeal"(arg0: boolean): void
public "getAgeProperty"(): $IntegerProperty
public "setMinDropCount"(arg0: integer): void
public "getSeasonOffset"(): float
public "getBlockDropsPath"(): $ResourceLocation
public "setMatureAction"(arg0: $GrowableBlock$MatureAction$Type): void
public "setMinRadius"(arg0: integer): void
public "setMaxRadius"(arg0: integer): void
public "isValidRadius"(arg0: integer): boolean
public "isItem"(arg0: $ItemStack$Type): boolean
public "getOffsetProperty"(): $IntegerProperty
public "hasVariableOffset"(): boolean
public "setSeasonOffset"(arg0: float): void
public "getDefaultMapColor"(): $MapColor
public "createBlock"(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type): void
public "setPostReloadDefaults"(): $Pod
public "setPreReloadDefaults"(): $Pod
get "block"(): $PodBlock
set "maxAge"(value: integer)
get "maxAge"(): integer
set "minProductionFactor"(value: float)
get "flowerHoldPeriodLength"(): float
set "flowerHoldPeriodLength"(value: float)
get "minProductionFactor"(): float
get "defaultBlockProperties"(): $BlockBehaviour$Properties
get "itemStack"(): $ItemStack
set "itemStack"(value: $ItemStack$Type)
set "dropCount"(value: integer)
get "growthChance"(): float
set "growthChance"(value: float)
set "maxDropCount"(value: integer)
get "ageProperty"(): $IntegerProperty
set "minDropCount"(value: integer)
get "seasonOffset"(): float
get "blockDropsPath"(): $ResourceLocation
set "matureAction"(value: $GrowableBlock$MatureAction$Type)
set "minRadius"(value: integer)
set "maxRadius"(value: integer)
get "offsetProperty"(): $IntegerProperty
set "seasonOffset"(value: float)
get "defaultMapColor"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pod$Type = ($Pod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pod_ = $Pod$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$BlitOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleVoxmap$BlitOp {

 "getOp"(arg0: byte, arg1: byte): byte

(arg0: byte, arg1: byte): byte
}

export namespace $SimpleVoxmap$BlitOp {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleVoxmap$BlitOp$Type = ($SimpleVoxmap$BlitOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleVoxmap$BlitOp_ = $SimpleVoxmap$BlitOp$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/$CactusBranchBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$CactusBranchBlock$CactusThickness, $CactusBranchBlock$CactusThickness$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/$CactusBranchBlock$CactusThickness"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$Connections, $Connections$Type} from "packages/com/ferreusveritas/dynamictrees/util/$Connections"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DynamicTrees$DestroyMode, $DynamicTrees$DestroyMode$Type} from "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $CactusBranchBlock extends $BranchBlock {
static readonly "ORIGIN": $EnumProperty<($Direction)>
static readonly "TRUNK_TYPE": $EnumProperty<($CactusBranchBlock$CactusThickness)>
static readonly "MAX_RADIUS": integer
static readonly "NAME_SUFFIX": string
static "destroyMode": $DynamicTrees$DestroyMode
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

constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type)

public "checkForRot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: integer, arg4: integer, arg5: $RandomSource$Type, arg6: float, arg7: boolean): boolean
public "setRadius"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $Direction$Type, arg4: integer): integer
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "getConnectionData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Connections
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
public "getRadius"(arg0: $BlockState$Type): integer
public "getStateForRadius"(arg0: integer): $BlockState
public "createBranchDrops"(): $LootTable$Builder
public "growIntoAir"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CactusBranchBlock$Type = ($CactusBranchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CactusBranchBlock_ = $CactusBranchBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKitConfiguration" {
import {$DirectionSelectionContext, $DirectionSelectionContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext"
import {$PositionalSpeciesContext, $PositionalSpeciesContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext"
import {$GrowthLogicKit, $GrowthLogicKit$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKit"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TemplateRegistry, $TemplateRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$DirectionManipulationContext, $DirectionManipulationContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionManipulationContext"

export class $GrowthLogicKitConfiguration extends $Configuration<($GrowthLogicKitConfiguration), ($GrowthLogicKit)> {
static readonly "TEMPLATES": $TemplateRegistry<($GrowthLogicKitConfiguration)>

constructor(arg0: $GrowthLogicKit$Type)

public static "getDefault"(): $GrowthLogicKitConfiguration
public "copy"(): $GrowthLogicKitConfiguration
public "selectNewDirection"(arg0: $DirectionSelectionContext$Type): $Direction
public "getLowestBranchHeight"(arg0: $PositionalSpeciesContext$Type): integer
public "populateDirectionProbabilityMap"(arg0: $DirectionManipulationContext$Type): (integer)[]
public "getEnergy"(arg0: $PositionalSpeciesContext$Type): float
get "default"(): $GrowthLogicKitConfiguration
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowthLogicKitConfiguration$Type = ($GrowthLogicKitConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowthLogicKitConfiguration_ = $GrowthLogicKitConfiguration$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/tree/$HugeMushroomSpecies" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$CapProperties, $CapProperties$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$CapProperties"
import {$DynamicCapBlock, $DynamicCapBlock$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$DynamicCapBlock"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Species$LogsAndSticks, $Species$LogsAndSticks$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$LogsAndSticks"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$MushroomShapeConfiguration, $MushroomShapeConfiguration$Type} from "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/$MushroomShapeConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DynamicCapCenterBlock, $DynamicCapCenterBlock$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$DynamicCapCenterBlock"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$JoCode, $JoCode$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pair, $Pair$Type} from "packages/oshi/util/tuples/$Pair"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$MushroomInflatorNode, $MushroomInflatorNode$Type} from "packages/com/ferreusveritas/dynamictreesplus/systems/nodemapper/$MushroomInflatorNode"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$NetVolumeNode$Volume, $NetVolumeNode$Volume$Type} from "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume"
import {$BranchDestructionData, $BranchDestructionData$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"

export class $HugeMushroomSpecies extends $Species {
static readonly "TYPE": $TypedRegistry$EntryType<($Species)>
static readonly "NULL_SPECIES": $Species
static readonly "CODEC": $Codec<($Species)>
static readonly "REGISTRY": $TypedRegistry<($Species)>
static readonly "SAPLING": string
static readonly "SEED_PARENT": string
static readonly "SEED": string

constructor(arg0: $ResourceLocation$Type, arg1: $Family$Type, arg2: $MushroomShapeConfiguration$Type, arg3: $CapProperties$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $Family$Type, arg2: $CapProperties$Type)

public "rot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $Random$Type, arg6: boolean, arg7: boolean): boolean
public "getCapCenterBlock"(): $Optional<($DynamicCapCenterBlock)>
public "getCapBlock"(): $Optional<($DynamicCapBlock)>
public "getLogsAndSticks"(arg0: $NetVolumeNode$Volume$Type, arg1: boolean, arg2: integer): $Species$LogsAndSticks
public "encodeLeavesBlocks"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Block$Type, arg3: $BranchDestructionData$Type): integer
public "encodeLeavesPos"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Block$Type, arg3: $BranchDestructionData$Type): integer
public "leavesAreSolid"(): boolean
public "defaultSeedTags"(): $List<($TagKey<($Item)>)>
public "getNodeInflator"(arg0: $List$Type<($Pair$Type<($BlockPos$Type), (integer)>)>, arg1: integer, arg2: $BlockPos$Type): $MushroomInflatorNode
public "defaultSaplingTags"(): $List<($TagKey<($Block)>)>
public "addSaplingTextures"(arg0: $BiConsumer$Type<(string), ($ResourceLocation$Type)>, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "getMushroomShapeKit"(): $MushroomShapeConfiguration
public "getJoCode"(arg0: string): $JoCode
public "isAcceptableSoil"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "isAcceptableSoil"(arg0: $BlockState$Type): boolean
public "getSaplingSmartModelLocation"(): $ResourceLocation
public "canEncodeLeavesBlocks"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Block$Type, arg3: $BranchDestructionData$Type): boolean
public "getFallingTreeEndSound"(arg0: float, arg1: boolean): $SoundEvent
public "getFellingLeavesClusters"(arg0: $BranchDestructionData$Type): $HashMap<($BlockPos), ($BlockState)>
public "getFallingTreeStartSound"(arg0: float, arg1: boolean): $SoundEvent
public "getFallingBranchEndSound"(arg0: float, arg1: boolean, arg2: boolean): $SoundEvent
public "getFallingTreePitch"(arg0: float): float
public "isAcceptableSoilForWorldgen"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getPrimitiveCap"(): $Optional<($Block)>
public "getChanceToAge"(): float
public "getCapProperties"(): $CapProperties
public "setMushroomShapeConfiguration"(arg0: $MushroomShapeConfiguration$Type): void
public "setMaxLightForPlanting"(arg0: integer): void
public "setCapProperties"(arg0: $CapProperties$Type): $Species
public "setAcceptAnySoil"(arg0: boolean): void
public static "createDefaultMushroomType"(arg0: $Function3$Type<($ResourceLocation$Type), ($Family$Type), ($CapProperties$Type), ($Species$Type)>): $TypedRegistry$EntryType<($Species)>
public static "createDefaultMushroomCodec"(arg0: $Function3$Type<($ResourceLocation$Type), ($Family$Type), ($CapProperties$Type), ($Species$Type)>): $Codec<($Species)>
public "getMaxLightForPlanting"(): integer
get "capCenterBlock"(): $Optional<($DynamicCapCenterBlock)>
get "capBlock"(): $Optional<($DynamicCapBlock)>
get "mushroomShapeKit"(): $MushroomShapeConfiguration
get "saplingSmartModelLocation"(): $ResourceLocation
get "primitiveCap"(): $Optional<($Block)>
get "chanceToAge"(): float
get "capProperties"(): $CapProperties
set "mushroomShapeConfiguration"(value: $MushroomShapeConfiguration$Type)
set "maxLightForPlanting"(value: integer)
set "capProperties"(value: $CapProperties$Type)
set "acceptAnySoil"(value: boolean)
get "maxLightForPlanting"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HugeMushroomSpecies$Type = ($HugeMushroomSpecies);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HugeMushroomSpecies_ = $HugeMushroomSpecies$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Registry, $Registry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider"
import {$DTDataProvider, $DTDataProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"

export class $DTBlockStateProvider extends $BlockStateProvider implements $DTDataProvider {
static readonly "WALL_PROPS": $ImmutableMap<($Direction), ($Property<($WallSide)>)>

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type, arg3: $Collection$Type<($Registry$Type<(any)>)>)

public "block"(arg0: $ResourceLocation$Type): $ResourceLocation
public "item"(arg0: $ResourceLocation$Type): $ResourceLocation
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DTBlockStateProvider$Type = ($DTBlockStateProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DTBlockStateProvider_ = $DTBlockStateProvider$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$PostGenerationContext, $PostGenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGenerationContext"
import {$Seed, $Seed$Type} from "packages/com/ferreusveritas/dynamictrees/item/$Seed"
import {$Species$CommonOverride, $Species$CommonOverride$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$CommonOverride"
import {$TreePart, $TreePart$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import {$Pod, $Pod$Type} from "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Species$LogsAndSticks, $Species$LogsAndSticks$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$LogsAndSticks"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FallingTreeEntity, $FallingTreeEntity$Type} from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$GrowthLogicKitConfiguration, $GrowthLogicKitConfiguration$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKitConfiguration"
import {$DynamicSaplingBlock, $DynamicSaplingBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$DynamicSaplingBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$SimpleVoxmap, $SimpleVoxmap$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap"
import {$PostRotContext, $PostRotContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostRotContext"
import {$Resettable, $Resettable$Type} from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import {$DTBlockStateProvider, $DTBlockStateProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import {$Family$TreeActivationContext, $Family$TreeActivationContext$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family$TreeActivationContext"
import {$GrowthLogicKit, $GrowthLogicKit$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/$GrowthLogicKit"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SoilProperties, $SoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$LevelContext, $LevelContext$Type} from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import {$FallingTreeEntityModel$TreeQuadData, $FallingTreeEntityModel$TreeQuadData$Type} from "packages/com/ferreusveritas/dynamictrees/models/$FallingTreeEntityModel$TreeQuadData"
import {$GenFeatureConfiguration, $GenFeatureConfiguration$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$Fruit, $Fruit$Type} from "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RootyBlock, $RootyBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock"
import {$SubstanceEffect, $SubstanceEffect$Type} from "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffect"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$NetVolumeNode$Volume, $NetVolumeNode$Volume$Type} from "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$SafeChunkBounds, $SafeChunkBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$SeedSaplingRecipe, $SeedSaplingRecipe$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$SeedSaplingRecipe"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$AnimationHandler, $AnimationHandler$Type} from "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler"
import {$NodeInspector, $NodeInspector$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Generator, $Generator$Type} from "packages/com/ferreusveritas/dynamictrees/api/data/$Generator"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import {$DynamicLeavesBlock, $DynamicLeavesBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock"
import {$JoCode, $JoCode$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode"
import {$DTItemModelProvider, $DTItemModelProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider"
import {$HashMap, $HashMap$Type} from "packages/java/util/$HashMap"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PottedSaplingBlock, $PottedSaplingBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$PottedSaplingBlock"
import {$DTBiomeHolderSet, $DTBiomeHolderSet$Type} from "packages/com/ferreusveritas/dynamictrees/util/holderset/$DTBiomeHolderSet"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$GenFeature, $GenFeature$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DTLangProvider, $DTLangProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$LootDataManager, $LootDataManager$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$LootTable, $LootTable$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import {$Function3, $Function3$Type} from "packages/com/mojang/datafixers/util/$Function3"
import {$RootsJoCode, $RootsJoCode$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$RootsJoCode"
import {$BranchDestructionData, $BranchDestructionData$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Species extends $RegistryEntry<($Species)> implements $Resettable<($Species)> {
static readonly "NULL_SPECIES": $Species
static readonly "TYPE": $TypedRegistry$EntryType<($Species)>
static readonly "CODEC": $Codec<($Species)>
static readonly "REGISTRY": $TypedRegistry<($Species)>
static readonly "SAPLING": string
static readonly "SEED_PARENT": string
static readonly "SEED": string

constructor()
constructor(arg0: $ResourceLocation$Type, arg1: $Family$Type, arg2: $LeavesProperties$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $Family$Type)

public "update"(arg0: $Level$Type, arg1: $RootyBlock$Type, arg2: $BlockPos$Type, arg3: integer, arg4: $TreePart$Type, arg5: $BlockPos$Type, arg6: $RandomSource$Type, arg7: boolean): boolean
public "reset"(): $Species
public "grow"(arg0: $Level$Type, arg1: $RootyBlock$Type, arg2: $BlockPos$Type, arg3: integer, arg4: $TreePart$Type, arg5: $BlockPos$Type, arg6: $RandomSource$Type, arg7: boolean): boolean
public "generate"(arg0: $GenerationContext$Type): boolean
public "getFamily"(): $Family
public "setSeed"(arg0: $Supplier$Type<($Seed$Type)>): $Species
public "getSeed"(): $Optional<($Seed)>
public "getLocalizedName"(): string
public "setFamily"(arg0: $Family$Type): void
public "rot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: integer, arg5: $RandomSource$Type, arg6: boolean, arg7: boolean): boolean
/**
 * 
 * @deprecated
 */
public "rot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: $RandomSource$Type, arg5: boolean): boolean
public "getUpProbability"(): integer
public "getSignalEnergy"(): float
public "coordHashCode"(arg0: $BlockPos$Type): integer
public "biomeSuitability"(arg0: $Level$Type, arg1: $BlockPos$Type): float
public "canBoneMealTree"(): boolean
public "shouldGenerateSeed"(): boolean
public static "createDefaultType"(arg0: $Function3$Type<($ResourceLocation$Type), ($Family$Type), ($LeavesProperties$Type), ($Species$Type)>): $TypedRegistry$EntryType<($Species)>
public "setSaplingSound"(arg0: $SoundType$Type): $Species
public "hasSeed"(): boolean
public "getCommonSpecies"(): $Species
public "setSaplingShape"(arg0: $VoxelShape$Type): $Species
public "setUnlocalizedName"(arg0: string): $Species
public static "createDefaultCodec"(arg0: $Function3$Type<($ResourceLocation$Type), ($Family$Type), ($LeavesProperties$Type), ($Species$Type)>): $Codec<($Species)>
public "getLeafBlockIndex"(arg0: $DynamicLeavesBlock$Type): integer
public "isSeedCommon"(): boolean
public "getGrowthRate"(arg0: $Level$Type, arg1: $BlockPos$Type): float
public "getLeavesBlock"(): $Optional<($DynamicLeavesBlock)>
public "setSignalEnergy"(arg0: float): void
public "hasAcceptableSoil"(): boolean
public "isCommonSpecies"(): boolean
public "setGrowthRate"(arg0: float): void
public "getTapering"(): float
public "isTransformable"(): boolean
public "setCommonOverride"(arg0: $Species$CommonOverride$Type): void
public "setTapering"(arg0: float): void
public "addValidLeafBlocks"(...arg0: ($LeavesProperties$Type)[]): void
public "getPrimitiveLeaves"(): $Optional<($Block)>
public "hasCommonOverride"(): boolean
public "setTransformable"(arg0: boolean): $Species
public "setUpProbability"(arg0: integer): void
public "colorTreeQuads"(arg0: integer, arg1: $FallingTreeEntityModel$TreeQuadData$Type): integer
public "setSeedName"(arg0: string): void
public "getVoluntaryDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): $List<($ItemStack)>
public "getValidLeafBlock"(arg0: integer): $DynamicLeavesBlock
public "getSeedName"(): $ResourceLocation
public "isValidLeafBlock"(arg0: $DynamicLeavesBlock$Type): boolean
public "getLootTable"(arg0: $LootDataManager$Type, arg1: $Function$Type<($Species$Type), ($ResourceLocation$Type)>): $LootTable
public "getBranchesDrops"(arg0: $Level$Type, arg1: $NetVolumeNode$Volume$Type): $List<($ItemStack)>
public "getBranchesDrops"(arg0: $Level$Type, arg1: $NetVolumeNode$Volume$Type, arg2: $ItemStack$Type): $List<($ItemStack)>
public "getBranchesDrops"(arg0: $Level$Type, arg1: $NetVolumeNode$Volume$Type, arg2: $ItemStack$Type, arg3: float): $List<($ItemStack)>
public "processVolume"(arg0: $NetVolumeNode$Volume$Type): void
public "getLogsAndSticks"(arg0: $NetVolumeNode$Volume$Type, arg1: boolean, arg2: integer): $Species$LogsAndSticks
public "getLogsAndSticks"(arg0: $NetVolumeNode$Volume$Type): $Species$LogsAndSticks
public "setSapling"(arg0: $Supplier$Type<($DynamicSaplingBlock$Type)>): $Species
public "isMegaSpecies"(): boolean
public "generateSapling"(): $Species
public "getPreMegaSpecies"(): $Species
public "canSaplingGrow"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "getSaplingRegName"(): $ResourceLocation
public "saplingFireSpread"(): integer
public "transitionToTree"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "plantSapling"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: boolean): boolean
public "getForceSoil"(): $SoilProperties
public "setSoilLongevity"(arg0: integer): $Species
public "getSoilLongevity"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public "getSaplingSound"(): $SoundType
public "setSaplingName"(arg0: string): void
public "getSaplingShape"(): $VoxelShape
public "setForceSoil"(arg0: $SoilProperties$Type): $Species
public "isThick"(): boolean
public "setTintSapling"(arg0: boolean): void
public "addAcceptableSoils"(...arg0: (string)[]): $Species
public "isPlantableOnFluid"(): boolean
public "rotChance"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type, arg3: integer): float
public "handleDisease"(arg0: $Level$Type, arg1: $TreePart$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type, arg4: integer): boolean
public "handleRot"(arg0: $LevelAccessor$Type, arg1: $List$Type<($BlockPos$Type)>, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer, arg5: $SafeChunkBounds$Type): boolean
public "setMaxBranchRadius"(arg0: integer): void
public "getMaxBranchRadius"(): integer
public "postGrow"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: integer, arg4: boolean): boolean
public "setGrowthLogicKit"(arg0: $GrowthLogicKit$Type): $Species
public "setGrowthLogicKit"(arg0: $GrowthLogicKitConfiguration$Type): $Species
public "getGrowthLogicKit"(): $GrowthLogicKitConfiguration
public "postRot"(arg0: $PostRotContext$Type): void
public "setCanBoneMealTree"(arg0: boolean): void
public "setDoesRot"(arg0: boolean): void
public "envFactor"(arg0: $TagKey$Type<($Biome$Type)>, arg1: float): $Species
public "hasFruits"(): boolean
public static "isOneOfBiomes"(arg0: $ResourceKey$Type<($Biome$Type)>, ...arg1: ($ResourceKey$Type<($Biome$Type)>)[]): boolean
public "hasPods"(): boolean
public "getPerfectBiomes"(): $DTBiomeHolderSet
public static "defaultSuitability"(): float
public "isBiomePerfect"(arg0: $ResourceKey$Type<($Biome$Type)>): boolean
public "isBiomePerfect"(arg0: $Holder$Type<($Biome$Type)>): boolean
public "encodeLeavesBlocks"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Block$Type, arg3: $BranchDestructionData$Type): integer
public "showSpeciesOnWaila"(): boolean
public "setMegaSpecies"(arg0: $Species$Type): void
public "encodeLeavesPos"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Block$Type, arg3: $BranchDestructionData$Type): integer
public "applySubstance"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $ItemStack$Type): boolean
public static "consumePlayerItem"(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type): void
public "getMegaSpecies"(): $Species
public "hasGenFeatures"(): boolean
public "getGenFeatures"(): $List<($GenFeatureConfiguration)>
public "preGeneration"(arg0: $LevelAccessor$Type, arg1: $BlockPos$MutableBlockPos$Type, arg2: integer, arg3: $Direction$Type, arg4: $SafeChunkBounds$Type, arg5: $JoCode$Type): $BlockPos
public "leavesAreSolid"(): boolean
public "getJoCodes"(): $Collection<($JoCode)>
public "addGenFeature"(arg0: $GenFeatureConfiguration$Type): $Species
public "addGenFeature"(arg0: $GenFeature$Type): $Species
public "isOnlyIfLoaded"(): boolean
public "getFruits"(): $Set<($Fruit)>
public "defaultSeedTags"(): $List<($TagKey<($Item)>)>
public "setOnlyIfLoaded"(arg0: string): void
public "setModelOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "setLangOverrides"(arg0: $Map$Type<(string), (string)>): void
public "getNodeInflator"(arg0: $SimpleVoxmap$Type, arg1: integer): $NodeInspector
public "getNodeInflator"(arg0: $SimpleVoxmap$Type): $NodeInspector
public "getModelPath"(arg0: string): $Optional<($ResourceLocation)>
public "hasPod"(arg0: $Pod$Type): boolean
public "getPods"(): $Set<($Pod)>
public "defaultSaplingTags"(): $List<($TagKey<($Block)>)>
public "addFruits"(arg0: $Collection$Type<($Fruit$Type)>): void
public "postGeneration"(arg0: $PostGenerationContext$Type): void
public "addPods"(arg0: $Collection$Type<($Pod$Type)>): void
public "addSaplingTextures"(arg0: $BiConsumer$Type<(string), ($ResourceLocation$Type)>, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "getLangOverride"(arg0: string): $Optional<(string)>
public "generateSeed"(): $Species
public "getSeedStack"(arg0: integer): $ItemStack
public "onTreeActivated"(arg0: $Family$TreeActivationContext$Type): boolean
public "getSubstanceEffect"(arg0: $ItemStack$Type): $SubstanceEffect
public "getJoCode"(arg0: string): $JoCode
public "isAcceptableSoil"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "isAcceptableSoil"(arg0: $BlockState$Type): boolean
public "isAcceptableSoil"(...arg0: (string)[]): boolean
public "getRootsJoCode"(arg0: string): $RootsJoCode
public "getWorldGenTaperingFactor"(): float
public "setTextureOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "getFallingBranchPitch"(arg0: float): float
public "setWorldGenLeafMapHeight"(arg0: integer): void
public "getSaplingSmartModelLocation"(): $ResourceLocation
public "getWorldGenAgeIterations"(): integer
public "canEncodeLeavesBlocks"(arg0: $BlockPos$Type, arg1: $BlockState$Type, arg2: $Block$Type, arg3: $BranchDestructionData$Type): boolean
public "getSeedParentModelLocation"(): $ResourceLocation
public "getVoluntaryDropsPath"(): $ResourceLocation
public "getFallingTreeHitWaterSound"(arg0: float, arg1: boolean): $SoundEvent
public "getFallingTreeEndSound"(arg0: float, arg1: boolean): $SoundEvent
public "getSeedModelGenerator"(): $Generator<($DTItemModelProvider), ($Species)>
public "getFellingLeavesClusters"(arg0: $BranchDestructionData$Type): $HashMap<($BlockPos), ($BlockState)>
public "getFallingTreeStartSound"(arg0: float, arg1: boolean): $SoundEvent
public "getWorldGenLeafMapHeight"(): integer
public "getFallingBranchEndSound"(arg0: float, arg1: boolean, arg2: boolean): $SoundEvent
public "addGeneratedItemTags"(arg0: $Function$Type<($TagKey$Type<($Item$Type)>), ($IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type<($Item$Type)>)>): void
public "shouldGenerateVoluntaryDrops"(): boolean
public "getFallingTreePitch"(arg0: float): float
public "setBigTreeSoundThreshold"(arg0: float): void
public "createVoluntaryDrops"(): $LootTable$Builder
public "addGeneratedBlockTags"(arg0: $Function$Type<($TagKey$Type<($Block$Type)>), ($IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type<($Block$Type)>)>): void
public "seasonalGrowthFactor"(arg0: $LevelContext$Type, arg1: $BlockPos$Type): float
public "shouldOverrideCommon"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "getValidLeavesProperties"(arg0: integer): $LeavesProperties
public "seasonalSeedDropFactor"(arg0: $LevelContext$Type, arg1: $BlockPos$Type): float
public "doesRequireTileEntity"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
public "addPrimitiveSaplingItem"(arg0: $Item$Type): $Species
public "addAcceptableBlockForGrowth"(arg0: $Block$Type): void
public "setShouldGenerateSeed"(arg0: boolean): void
public "setCanSaplingGrowNaturally"(arg0: boolean): $Species
public "saplingFlammability"(): integer
public "getSaplingModelName"(): string
public "defaultSeedComposterChance"(): float
public "setShouldGenerateSapling"(arg0: boolean): void
public "leafColorMultiplier"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public "addAcceptableSoilsForWorldGen"(...arg0: (string)[]): $Species
public "getAllowedWaterHeightForWorldgen"(): integer
public "canSaplingGrowAfterBoneMeal"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type): boolean
public "setShouldGenerateSaplingIfNull"(arg0: boolean): $Species
public "placeRootyDirtBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): boolean
public "isAcceptableSoilForWorldgen"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "isAcceptableSoilForWorldgen"(arg0: $BlockState$Type): boolean
public "setPlantableOnFluid"(arg0: boolean): void
public "selfOrLocationOverride"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Species
public "canSaplingConsumeBoneMeal"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "saplingColorMultiplier"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: integer): integer
public "setAllowedWaterHeightForWorldgen"(arg0: integer): void
public "setBasicGrowingParameters"(arg0: float, arg1: float, arg2: integer, arg3: integer, arg4: float): $Species
public "setShouldGenerateSeedIfNull"(arg0: boolean): $Species
public "shouldUseLocationOverride"(): boolean
public "setLowestBranchHeight"(arg0: integer): void
public "handleVoluntaryDrops"(arg0: $Level$Type, arg1: $List$Type<($BlockPos$Type)>, arg2: $BlockPos$Type, arg3: $BlockPos$Type, arg4: integer): boolean
public "setDefaultGrowingParameters"(): $Species
public "addPrimitiveSaplingRecipe"(arg0: $SeedSaplingRecipe$Type): void
public "getPrimitiveSaplingRecipes"(): $Set<($SeedSaplingRecipe)>
public "getLowestBranchHeight"(): integer
public "getLeavesProperties"(): $LeavesProperties
public "getProbabilityForCurrentDir"(): integer
public "shouldGenerateSapling"(): boolean
public "canSaplingGrowNaturally"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "setLeavesProperties"(arg0: $LeavesProperties$Type): $Species
public "clearAcceptableSoils"(): $Species
public "getEnergy"(arg0: $Level$Type, arg1: $BlockPos$Type): float
public "hasFruit"(arg0: $Fruit$Type): boolean
public "generateItemModelData"(arg0: $DTItemModelProvider$Type): void
public "getTextComponent"(): $Component
public "toLoadDataString"(): string
public "generateLangData"(arg0: $DTLangProvider$Type): void
public "generateStateData"(arg0: $DTBlockStateProvider$Type): void
public "toReloadDataString"(): string
public "getUnlocalizedName"(): string
public "getPottedSapling"(): $PottedSaplingBlock
public "setSeasonalGrowthOffset"(arg0: float): void
public "setSeasonalFruitingOffset"(arg0: float): void
public "setSeasonalSeedDropOffset"(arg0: float): void
public "setFlowerSeasonHold"(arg0: float, arg1: float): $Species
public "seasonalFruitProductionFactor"(arg0: $LevelContext$Type, arg1: $BlockPos$Type): float
public "testFlowerSeasonHold"(arg0: float): boolean
public "getSeasonalTooltipFlags"(arg0: $LevelContext$Type): integer
public "getSapling"(): $Optional<($DynamicSaplingBlock)>
public "selectAnimationHandler"(arg0: $FallingTreeEntity$Type): $AnimationHandler
public "shouldDropSeeds"(): boolean
public "setDropSeeds"(arg0: boolean): void
public "useDefaultWailaBody"(): boolean
public "setAlwaysShowOnWaila"(arg0: boolean): $Species
public "inheritSeasonalFruitingOffsetToFruits"(): void
public "inheritSeasonalFruitingOffsetToPods"(): void
public "getTexturePath"(arg0: string): $Optional<($ResourceLocation)>
get "family"(): $Family
set "seed"(value: $Supplier$Type<($Seed$Type)>)
get "seed"(): $Optional<($Seed)>
get "localizedName"(): string
set "family"(value: $Family$Type)
get "upProbability"(): integer
get "signalEnergy"(): float
set "saplingSound"(value: $SoundType$Type)
get "commonSpecies"(): $Species
set "saplingShape"(value: $VoxelShape$Type)
set "unlocalizedName"(value: string)
get "seedCommon"(): boolean
get "leavesBlock"(): $Optional<($DynamicLeavesBlock)>
set "signalEnergy"(value: float)
get "commonSpecies"(): boolean
set "growthRate"(value: float)
get "tapering"(): float
get "transformable"(): boolean
set "commonOverride"(value: $Species$CommonOverride$Type)
set "tapering"(value: float)
get "primitiveLeaves"(): $Optional<($Block)>
set "transformable"(value: boolean)
set "upProbability"(value: integer)
set "seedName"(value: string)
get "seedName"(): $ResourceLocation
set "sapling"(value: $Supplier$Type<($DynamicSaplingBlock$Type)>)
get "megaSpecies"(): boolean
get "preMegaSpecies"(): $Species
get "saplingRegName"(): $ResourceLocation
get "forceSoil"(): $SoilProperties
set "soilLongevity"(value: integer)
get "saplingSound"(): $SoundType
set "saplingName"(value: string)
get "saplingShape"(): $VoxelShape
set "forceSoil"(value: $SoilProperties$Type)
get "thick"(): boolean
set "tintSapling"(value: boolean)
get "plantableOnFluid"(): boolean
set "maxBranchRadius"(value: integer)
get "maxBranchRadius"(): integer
set "growthLogicKit"(value: $GrowthLogicKit$Type)
set "growthLogicKit"(value: $GrowthLogicKitConfiguration$Type)
get "growthLogicKit"(): $GrowthLogicKitConfiguration
set "doesRot"(value: boolean)
get "perfectBiomes"(): $DTBiomeHolderSet
set "megaSpecies"(value: $Species$Type)
get "megaSpecies"(): $Species
get "genFeatures"(): $List<($GenFeatureConfiguration)>
get "joCodes"(): $Collection<($JoCode)>
get "onlyIfLoaded"(): boolean
get "fruits"(): $Set<($Fruit)>
set "onlyIfLoaded"(value: string)
set "modelOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
set "langOverrides"(value: $Map$Type<(string), (string)>)
get "pods"(): $Set<($Pod)>
get "worldGenTaperingFactor"(): float
set "textureOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
set "worldGenLeafMapHeight"(value: integer)
get "saplingSmartModelLocation"(): $ResourceLocation
get "worldGenAgeIterations"(): integer
get "seedParentModelLocation"(): $ResourceLocation
get "voluntaryDropsPath"(): $ResourceLocation
get "seedModelGenerator"(): $Generator<($DTItemModelProvider), ($Species)>
get "worldGenLeafMapHeight"(): integer
set "bigTreeSoundThreshold"(value: float)
get "saplingModelName"(): string
get "allowedWaterHeightForWorldgen"(): integer
set "shouldGenerateSaplingIfNull"(value: boolean)
set "plantableOnFluid"(value: boolean)
set "allowedWaterHeightForWorldgen"(value: integer)
set "shouldGenerateSeedIfNull"(value: boolean)
set "lowestBranchHeight"(value: integer)
get "primitiveSaplingRecipes"(): $Set<($SeedSaplingRecipe)>
get "lowestBranchHeight"(): integer
get "leavesProperties"(): $LeavesProperties
get "probabilityForCurrentDir"(): integer
set "leavesProperties"(value: $LeavesProperties$Type)
get "textComponent"(): $Component
get "unlocalizedName"(): string
get "pottedSapling"(): $PottedSaplingBlock
set "seasonalGrowthOffset"(value: float)
set "seasonalFruitingOffset"(value: float)
set "seasonalSeedDropOffset"(value: float)
get "sapling"(): $Optional<($DynamicSaplingBlock)>
set "dropSeeds"(value: boolean)
set "alwaysShowOnWaila"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Species$Type = ($Species);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Species_ = $Species$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$CaveRootedTreeFeature" {
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
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$DynamicTreeFeature, $DynamicTreeFeature$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$DynamicTreeFeature"
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
import {$UniversalPoissonDiscProvider, $UniversalPoissonDiscProvider$Type} from "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$UniversalPoissonDiscProvider"
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

export class $CaveRootedTreeFeature extends $DynamicTreeFeature {
static readonly "DISC_PROVIDER": $UniversalPoissonDiscProvider
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

constructor()

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaveRootedTreeFeature$Type = ($CaveRootedTreeFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaveRootedTreeFeature_ = $CaveRootedTreeFeature$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor" {
import {$PropertiesAccessor$IterationAction, $PropertiesAccessor$IterationAction$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor$IterationAction"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

export interface $PropertiesAccessor {

 "get"<V>(arg0: $ConfigurationProperty$Type<(V)>): V
 "forEach"(arg0: $PropertiesAccessor$IterationAction$Type<(any)>): void
 "has"(arg0: $ConfigurationProperty$Type<(any)>): boolean
}

export namespace $PropertiesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertiesAccessor$Type = ($PropertiesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertiesAccessor_ = $PropertiesAccessor$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry" {
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ConfigurationTemplate, $ConfigurationTemplate$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationTemplate"

export class $TemplateRegistry<C extends $Configuration<(C), (any)>> {

constructor()

public "get"(arg0: $ResourceLocation$Type): $Optional<($ConfigurationTemplate<(C)>)>
public "register"(arg0: $ResourceLocation$Type, arg1: $ConfigurationTemplate$Type<(C)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemplateRegistry$Type<C> = ($TemplateRegistry<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemplateRegistry_<C> = $TemplateRegistry$Type<(C)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/tree/family/$Family$TreeActivationContext" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $Family$TreeActivationContext {
readonly "level": $Level
readonly "rootPos": $BlockPos
readonly "hitPos": $BlockPos
readonly "hitState": $BlockState
readonly "player": $Player
readonly "hand": $InteractionHand
readonly "heldItem": $ItemStack
readonly "hitResult": $BlockHitResult

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $Player$Type, arg5: $InteractionHand$Type, arg6: $ItemStack$Type, arg7: $BlockHitResult$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Family$TreeActivationContext$Type = ($Family$TreeActivationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Family$TreeActivationContext_ = $Family$TreeActivationContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$SurfaceRootBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RootConnections, $RootConnections$Type} from "packages/com/ferreusveritas/dynamictrees/util/$RootConnections"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $SurfaceRootBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "MAX_RADIUS": integer
static readonly "GROUNDED": $BooleanProperty
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

constructor(arg0: $Family$Type)
constructor(arg0: $MapColor$Type, arg1: $Family$Type)

public "getFamily"(): $Family
public "setRadius"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): integer
public "getConnectionData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type): $RootConnections
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getRadialHeight"(arg0: integer): integer
public "getRadius"(arg0: $BlockState$Type): integer
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getMaxRadius"(): integer
public "getStateForRadius"(arg0: integer): $BlockState
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "family"(): $Family
get "maxRadius"(): integer
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurfaceRootBlock$Type = ($SurfaceRootBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurfaceRootBlock_ = $SurfaceRootBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BasicBranchBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DynamicTrees$DestroyMode, $DynamicTrees$DestroyMode$Type} from "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode"

export class $BasicBranchBlock extends $BranchBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static readonly "MAX_RADIUS": integer
static readonly "NAME_SUFFIX": string
static "destroyMode": $DynamicTrees$DestroyMode
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

constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type, arg2: $IntegerProperty$Type, arg3: integer)
constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $MapColor$Type)

public "getHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "checkForRot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: integer, arg4: integer, arg5: $RandomSource$Type, arg6: float, arg7: boolean): boolean
public "setFlammability"(arg0: integer): $BasicBranchBlock
public "setRadius"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $Direction$Type, arg4: integer): integer
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
public "getRadius"(arg0: $BlockState$Type): integer
public "setFireSpreadSpeed"(arg0: integer): $BasicBranchBlock
public "canFall"(): boolean
public "getStateForRadius"(arg0: integer): $BlockState
public "createBranchStates"(arg0: $IntegerProperty$Type, arg1: integer): ($BlockState)[]
public "growIntoAir"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type, arg3: integer): $GrowSignal
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
set "flammability"(value: integer)
set "fireSpreadSpeed"(value: integer)
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBranchBlock$Type = ($BasicBranchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicBranchBlock_ = $BasicBranchBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BranchBlock$ItemStackPos {
readonly "stack": $ItemStack
readonly "pos": $BlockPos

constructor(arg0: $ItemStack$Type, arg1: $BlockPos$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchBlock$ItemStackPos$Type = ($BranchBlock$ItemStackPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchBlock$ItemStackPos_ = $BranchBlock$ItemStackPos$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$Vec2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Vec2i {
 "x": integer
 "z": integer
 "tight": boolean

constructor(arg0: $Vec2i$Type)
constructor(arg0: integer, arg1: integer, arg2: boolean)
constructor(arg0: integer, arg1: integer)
constructor()

public "add"(arg0: $Vec2i$Type): $Vec2i
public "add"(arg0: integer, arg1: integer): $Vec2i
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "len"(): double
public "set"(arg0: integer, arg1: integer): $Vec2i
public "set"(arg0: $Vec2i$Type): $Vec2i
public "sub"(arg0: $Vec2i$Type): $Vec2i
public "sub"(arg0: integer, arg1: integer): $Vec2i
public static "crossProduct"(arg0: $Vec2i$Type, arg1: $Vec2i$Type): integer
public "angle"(): double
public "isTight"(): boolean
public "setTight"(arg0: boolean): $Vec2i
get "tight"(): boolean
set "tight"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Vec2i$Type = ($Vec2i);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Vec2i_ = $Vec2i$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$PottedSaplingBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $PottedSaplingBlock extends $BaseEntityBlock {
static readonly "REG_NAME": $ResourceLocation
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

public "getSpecies"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Species
public "setSpecies"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Species$Type): boolean
public "getPotState"(arg0: $Level$Type, arg1: $BlockPos$Type): $BlockState
public "setPotState"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "spawnDrops"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PottedSaplingBlock$Type = ($PottedSaplingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PottedSaplingBlock_ = $PottedSaplingBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $JoCode {
 "instructions": (byte)[]

constructor(arg0: string)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type)

public "toString"(): string
public static "decode"(arg0: string): (byte)[]
public static "encode"(arg0: (byte)[]): string
public "rotate"(arg0: $Direction$Type): $JoCode
public "generate"(arg0: $GenerationContext$Type): void
public "setFacing"(arg0: $Direction$Type): $JoCode
public "setCareful"(arg0: boolean): $JoCode
public "getTextComponent"(): $Component
set "facing"(value: $Direction$Type)
set "careful"(value: boolean)
get "textComponent"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JoCode$Type = ($JoCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JoCode_ = $JoCode$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/$DeserialisationException" {
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"

export class $DeserialisationException extends $Exception {

constructor(arg0: string)

public static "error"(arg0: string): $DeserialisationException
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeserialisationException$Type = ($DeserialisationException);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeserialisationException_ = $DeserialisationException$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Result$SimpleMapper, $Result$SimpleMapper$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$SimpleMapper"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$MappedResult, $MappedResult$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$MappedResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Result$Mapper, $Result$Mapper$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper"

export interface $Result<T, I> {

 "get"(): T
 "map"<V>(arg0: $Result$Mapper$Type<(T), (V)>, arg1: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$Mapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$SimpleMapper$Type<(T), (V)>, arg1: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$SimpleMapper$Type<(T), (V)>, arg1: $Predicate$Type<(V)>, arg2: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$Mapper$Type<(T), (V)>, arg1: $Predicate$Type<(V)>, arg2: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$SimpleMapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "orElse"(arg0: T, arg1: $Consumer$Type<(string)>, arg2: $Consumer$Type<(string)>): T
 "orElse"(arg0: T): T
 "orElseThrow"(): T
 "orElseGet"(arg0: $Supplier$Type<(T)>): T
 "success"(): boolean
 "getInput"(): I
 "getError"(): string
 "ifSuccessOrElseThrow"(arg0: $Consumer$Type<(T)>, arg1: $Consumer$Type<(string)>): $Result<(T), (I)>
 "orElseApply"(arg0: $Function$Type<(string), (T)>, arg1: $BiConsumer$Type<(T), ($List$Type<(string)>)>, arg2: T): T
 "orElseApply"(arg0: $Function$Type<(string), (T)>, arg1: T): T
 "mapToListOfType"<E>(arg0: $Class$Type<(E)>): $MappedResult<($List<(E)>), (I)>
 "getWarnings"(): $List<(string)>
 "forEachWarning"(arg0: $Consumer$Type<(string)>): $Result<(T), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$Mapper$Type<(E), (V)>, arg3: V): $MappedResult<(V), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$SimpleMapper$Type<(E), (V)>): $MappedResult<(V), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$Mapper$Type<(E), (V)>): $MappedResult<(V), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$SimpleMapper$Type<(E), (V)>, arg3: V): $MappedResult<(V), (I)>
 "ifSuccessOrElse"(arg0: $Consumer$Type<(T)>, arg1: $Consumer$Type<(string)>, arg2: $Consumer$Type<(string)>): $Result<(T), (I)>
 "ifSuccess"(arg0: $Consumer$Type<(T)>): $Result<(T), (I)>
 "removeError"(): $Result<(T), (I)>
 "mapIfValid"<V>(arg0: $Predicate$Type<(T)>, arg1: string, arg2: $Result$Mapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "mapIfValid"<V>(arg0: $Predicate$Type<(T)>, arg1: string, arg2: $Result$SimpleMapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "mapEachIfArray"<V, E>(arg0: $Class$Type<(V)>, arg1: $Result$Mapper$Type<(V), (E)>): $MappedResult<($List<(E)>), (I)>
 "mapEachIfArray"<V, E>(arg0: $Class$Type<(V)>, arg1: $Result$SimpleMapper$Type<(V), (E)>): $MappedResult<($List<(E)>), (I)>
 "mapIfType"<V, N>(arg0: $Class$Type<(V)>, arg1: $Result$SimpleMapper$Type<(V), (N)>): $MappedResult<(N), (I)>
 "mapIfType"<V, N>(arg0: $Class$Type<(V)>, arg1: $Result$Mapper$Type<(V), (N)>): $MappedResult<(N), (I)>
}

export namespace $Result {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Result$Type<T, I> = ($Result<(T), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Result_<T, I> = $Result$Type<(T), (I)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $BlockBounds implements $Iterable<($BlockPos)> {
static readonly "INVALID": $BlockBounds

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer)
constructor(arg0: $LevelAccessor$Type, arg1: $ChunkPos$Type)
constructor(arg0: $BlockBounds$Type)
constructor(arg0: $List$Type<($BlockPos$Type)>)
constructor(arg0: $BlockPos$Type)
constructor(arg0: $BlockPos$Type, arg1: $BlockPos$Type)

public "toString"(): string
public "iterator"(): $Iterator<($BlockPos)>
public "expand"(arg0: $Direction$Type, arg1: integer): $BlockBounds
public "expand"(arg0: integer): $BlockBounds
public "move"(arg0: integer, arg1: integer, arg2: integer): $BlockBounds
public "move"(arg0: $BlockPos$Type): $BlockBounds
public "union"(arg0: $List$Type<($BlockPos$Type)>): $BlockBounds
public "union"(arg0: $BlockPos$Type): $BlockBounds
public "getMin"(): $BlockPos
public "getMax"(): $BlockPos
public "shrink"(arg0: $Direction$Type, arg1: integer): $BlockBounds
public "shrink"(arg0: integer): $BlockBounds
public "getXSize"(): integer
public "getYSize"(): integer
public "getZSize"(): integer
public "inBounds"(arg0: $BlockPos$Type): boolean
public "spliterator"(): $Spliterator<($BlockPos)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$BlockPos>;
get "min"(): $BlockPos
get "max"(): $BlockPos
get "xSize"(): integer
get "ySize"(): integer
get "zSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBounds$Type = ($BlockBounds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBounds_ = $BlockBounds$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/items/$FoodSeed" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Seed, $Seed$Type} from "packages/com/ferreusveritas/dynamictrees/item/$Seed"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodSeed extends $Seed {
static readonly "SAGUARO_FRUIT": $FoodProperties
static readonly "FORCE_PLANT_KEY": string
static readonly "LIFESPAN_KEY": string
static readonly "CODE_KEY": string
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

constructor(arg0: $Species$Type)

public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodSeed$Type = ($FoodSeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodSeed_ = $FoodSeed$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap" {
import {$SimpleVoxmap$FilterOp, $SimpleVoxmap$FilterOp$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$FilterOp"
import {$SimpleVoxmap$Cell, $SimpleVoxmap$Cell$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$Cell"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$SimpleVoxmap$BlitOp, $SimpleVoxmap$BlitOp$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$BlitOp"
import {$BlockBounds, $BlockBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export class $SimpleVoxmap {

constructor(arg0: $BlockBounds$Type)
constructor(arg0: $SimpleVoxmap$Type)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: (byte)[])
constructor(arg0: integer, arg1: integer, arg2: integer)

public "fill"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: byte): $SimpleVoxmap
public "fill"(arg0: byte): $SimpleVoxmap
public "getBounds"(): $BlockBounds
public "filter"(arg0: $BlockPos$Type, arg1: $BlockPos$Type, arg2: $SimpleVoxmap$FilterOp$Type): $SimpleVoxmap
public "filter"(arg0: $SimpleVoxmap$FilterOp$Type): $SimpleVoxmap
public "print"(): void
public "setMap"(arg0: $BlockPos$Type): $SimpleVoxmap
public "getData"(): (byte)[]
public "getLenZ"(): integer
public "getLenY"(): integer
public "getLenX"(): integer
public "getAllNonZero"(arg0: byte): $Iterable<($BlockPos$MutableBlockPos)>
public "getAllNonZero"(): $Iterable<($BlockPos$MutableBlockPos)>
public "getCenter"(): $BlockPos
public "setCenter"(arg0: $BlockPos$Type): $SimpleVoxmap
public "getAllNonZeroCells"(arg0: byte): $Iterable<($SimpleVoxmap$Cell)>
public "getAllNonZeroCells"(): $Iterable<($SimpleVoxmap$Cell)>
public "setVoxel"(arg0: $BlockPos$Type, arg1: byte): void
public "setVoxel"(arg0: integer, arg1: integer, arg2: integer, arg3: byte): void
public "crop"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $SimpleVoxmap
public "setMapAndCenter"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): $SimpleVoxmap
public "blitOp"(arg0: $BlockPos$Type, arg1: $SimpleVoxmap$Type, arg2: $SimpleVoxmap$BlitOp$Type): $SimpleVoxmap
public "blitClear"(arg0: $BlockPos$Type, arg1: $SimpleVoxmap$Type): $SimpleVoxmap
public "blitMax"(arg0: $BlockPos$Type, arg1: $SimpleVoxmap$Type): $SimpleVoxmap
public "setYTouched"(arg0: integer): void
public "isYTouched"(arg0: integer): boolean
public "getVoxel"(arg0: $BlockPos$Type, arg1: $BlockPos$Type): byte
public "getVoxel"(arg0: $BlockPos$Type): byte
public "getVoxel"(arg0: integer, arg1: integer, arg2: integer): byte
public "setVoxelOr"(arg0: integer, arg1: integer, arg2: integer, arg3: byte): void
public "setVoxelOr"(arg0: $BlockPos$Type, arg1: byte): void
public "getTops"(): $Iterable<($BlockPos$MutableBlockPos)>
public "blitReplace"(arg0: $BlockPos$Type, arg1: $SimpleVoxmap$Type): $SimpleVoxmap
get "bounds"(): $BlockBounds
set "map"(value: $BlockPos$Type)
get "data"(): (byte)[]
get "lenZ"(): integer
get "lenY"(): integer
get "lenX"(): integer
get "allNonZero"(): $Iterable<($BlockPos$MutableBlockPos)>
get "center"(): $BlockPos
set "center"(value: $BlockPos$Type)
get "allNonZeroCells"(): $Iterable<($SimpleVoxmap$Cell)>
set "yTouched"(value: integer)
get "tops"(): $Iterable<($BlockPos$MutableBlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleVoxmap$Type = ($SimpleVoxmap);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleVoxmap_ = $SimpleVoxmap$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/context/$MushroomCapContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$HugeMushroomSpecies, $HugeMushroomSpecies$Type} from "packages/com/ferreusveritas/dynamictreesplus/tree/$HugeMushroomSpecies"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MushroomCapContext extends $Record {

constructor(level: $LevelAccessor$Type, pos: $BlockPos$Type, species: $HugeMushroomSpecies$Type, age: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "pos"(): $BlockPos
public "level"(): $LevelAccessor
public "species"(): $HugeMushroomSpecies
public "age"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MushroomCapContext$Type = ($MushroomCapContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MushroomCapContext_ = $MushroomCapContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$LevelContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $LevelContext {

constructor(arg0: $ResourceKey$Type<($Level$Type)>, arg1: long, arg2: $LevelAccessor$Type, arg3: $Level$Type)

public "accessor"(): $LevelAccessor
public static "create"(arg0: $LevelAccessor$Type): $LevelContext
public "seed"(): long
public "level"(): $Level
public "dimensionName"(): $ResourceLocation
public static "getServerLevelOrThrow"(arg0: $LevelAccessor$Type): $ServerLevel
public "dimensionKey"(): $ResourceKey<($Level)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelContext$Type = ($LevelContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelContext_ = $LevelContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/$Ageable" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SafeChunkBounds, $SafeChunkBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Ageable {

 "age"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $RandomSource$Type, arg4: $SafeChunkBounds$Type): integer

(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $RandomSource$Type, arg4: $SafeChunkBounds$Type): integer
}

export namespace $Ageable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Ageable$Type = ($Ageable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Ageable_ = $Ageable$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/holderset/$DTBiomeHolderSet" {
import {$HolderSet$Direct, $HolderSet$Direct$Type} from "packages/net/minecraft/core/$HolderSet$Direct"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IncludesExcludesHolderSet, $IncludesExcludesHolderSet$Type} from "packages/com/ferreusveritas/dynamictrees/util/holderset/$IncludesExcludesHolderSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$HolderOwner, $HolderOwner$Type} from "packages/net/minecraft/core/$HolderOwner"
import {$HolderSet$Named, $HolderSet$Named$Type} from "packages/net/minecraft/core/$HolderSet$Named"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $DTBiomeHolderSet extends $IncludesExcludesHolderSet<($Biome)> {

constructor()

public "containsKey"(arg0: $ResourceKey$Type<($Biome$Type)>): boolean
public static "direct"<T>(...arg0: ($Holder$Type<(T)>)[]): $HolderSet$Direct<(T)>
/**
 * 
 * @deprecated
 */
public static "emptyNamed"<T>(arg0: $HolderOwner$Type<(T)>, arg1: $TagKey$Type<(T)>): $HolderSet$Named<(T)>
public static "direct"<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
public static "direct"<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, arg1: $List$Type<(E)>): $HolderSet$Direct<(T)>
public static "direct"<T>(arg0: $List$Type<(any)>): $HolderSet$Direct<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DTBiomeHolderSet$Type = ($DTBiomeHolderSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DTBiomeHolderSet_ = $DTBiomeHolderSet$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/entity/animation/$DataAnimationHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataAnimationHandler {

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataAnimationHandler$Type = ($DataAnimationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataAnimationHandler_ = $DataAnimationHandler$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$MushroomBranchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ThickBranchBlock, $ThickBranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$ThickBranchBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$BranchBlock$ItemStackPos, $BranchBlock$ItemStackPos$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DynamicTrees$DestroyMode, $DynamicTrees$DestroyMode$Type} from "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$BranchDestructionData, $BranchDestructionData$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"

export class $MushroomBranchBlock extends $ThickBranchBlock {
static readonly "MAX_RADIUS_THICK": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "MAX_RADIUS": integer
static readonly "NAME_SUFFIX": string
static "destroyMode": $DynamicTrees$DestroyMode
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

constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type)

public "destroyMushroomCap"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: $ItemStack$Type, arg4: $List$Type<($BlockPos$Type)>, arg5: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, arg6: $List$Type<($BranchBlock$ItemStackPos$Type)>): void
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "destroyBranchFromNode"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: boolean, arg4: $LivingEntity$Type): $BranchDestructionData
public "createBranchDrops"(): $LootTable$Builder
public "growIntoAir"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type, arg3: integer): $GrowSignal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MushroomBranchBlock$Type = ($MushroomBranchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MushroomBranchBlock_ = $MushroomBranchBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature$Type" {
import {$GenFeature, $GenFeature$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature"
import {$PostGenerationContext, $PostGenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGenerationContext"
import {$TriFunction, $TriFunction$Type} from "packages/com/ferreusveritas/dynamictrees/util/function/$TriFunction"
import {$PostGrowContext, $PostGrowContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGrowContext"
import {$PostRotContext, $PostRotContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostRotContext"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenFeatureConfiguration, $GenFeatureConfiguration$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration"
import {$FullGenerationContext, $FullGenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$FullGenerationContext"
import {$PreGenerationContext, $PreGenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PreGenerationContext"

export class $GenFeature$Type<C extends $GenerationContext, R> {
static readonly "PRE_GENERATION": $GenFeature$Type<($PreGenerationContext), ($BlockPos)>
static readonly "POST_GENERATION": $GenFeature$Type<($PostGenerationContext), (boolean)>
static readonly "POST_GROW": $GenFeature$Type<($PostGrowContext), (boolean)>
static readonly "POST_ROT": $GenFeature$Type<($PostRotContext), (boolean)>
static readonly "FULL": $GenFeature$Type<($FullGenerationContext), (boolean)>

constructor(arg0: $TriFunction$Type<($GenFeature$Type), ($GenFeatureConfiguration$Type), (C), (R)>)

public "generate"(arg0: $GenFeatureConfiguration$Type, arg1: C): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenFeature$Type$Type<C, R> = ($GenFeature$Type<(C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenFeature$Type_<C, R> = $GenFeature$Type$Type<(C), (R)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/substance/$Emptiable" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $Emptiable {

 "getEmptyContainer"(): $ItemStack

(): $ItemStack
}

export namespace $Emptiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Emptiable$Type = ($Emptiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Emptiable_ = $Emptiable$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature" {
import {$CanGrowPredicate, $CanGrowPredicate$Type} from "packages/com/ferreusveritas/dynamictrees/util/function/$CanGrowPredicate"
import {$ConfigurableRegistry, $ConfigurableRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry"
import {$ConfigurableRegistryEntry, $ConfigurableRegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$GenFeatureConfiguration, $GenFeatureConfiguration$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import {$BiomePredicate, $BiomePredicate$Type} from "packages/com/ferreusveritas/dynamictrees/util/function/$BiomePredicate"
import {$GenFeature$Type, $GenFeature$Type$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature$Type"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenFeature extends $ConfigurableRegistryEntry<($GenFeature), ($GenFeatureConfiguration)> {
static readonly "VERTICAL_SPREAD": $ConfigurationProperty<(float)>
static readonly "QUANTITY": $ConfigurationProperty<(integer)>
static readonly "RAY_DISTANCE": $ConfigurationProperty<(float)>
static readonly "MAX_HEIGHT": $ConfigurationProperty<(integer)>
static readonly "CAN_GROW_PREDICATE": $ConfigurationProperty<($CanGrowPredicate)>
static readonly "MAX_COUNT": $ConfigurationProperty<(integer)>
static readonly "FRUITING_RADIUS": $ConfigurationProperty<(integer)>
static readonly "PLACE_CHANCE": $ConfigurationProperty<(float)>
static readonly "BIOME_PREDICATE": $ConfigurationProperty<($BiomePredicate)>
static readonly "NULL": $GenFeature
static readonly "REGISTRY": $ConfigurableRegistry<($GenFeature), ($GenFeatureConfiguration)>

constructor(arg0: $ResourceLocation$Type)

public "generate"<C extends $GenerationContext, R>(arg0: $GenFeatureConfiguration$Type, arg1: $GenFeature$Type$Type<(C), (R)>, arg2: C): R
public "shouldApply"(arg0: $Species$Type, arg1: $GenFeatureConfiguration$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenFeature$Type = ($GenFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenFeature_ = $GenFeature$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionManipulationContext" {
import {$DirectionSelectionContext, $DirectionSelectionContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $DirectionManipulationContext extends $DirectionSelectionContext {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: $BranchBlock$Type, arg4: $GrowSignal$Type, arg5: integer, arg6: (integer)[])

public "radius"(): integer
public "probMap"(arg0: (integer)[]): void
public "probMap"(): (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionManipulationContext$Type = ($DirectionManipulationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionManipulationContext_ = $DirectionManipulationContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$SolidDynamicLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$DynamicLeavesBlock, $DynamicLeavesBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock"
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
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SolidDynamicLeavesBlock extends $DynamicLeavesBlock {
 "properties": $LeavesProperties
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
 "drops": $ResourceLocation

constructor(arg0: $LeavesProperties$Type, arg1: $BlockBehaviour$Properties$Type)

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidDynamicLeavesBlock$Type = ($SolidDynamicLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SolidDynamicLeavesBlock_ = $SolidDynamicLeavesBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $Cell {

 "getValue"(): integer
 "getValueFromSide"(arg0: $Direction$Type): integer
}

export namespace $Cell {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cell$Type = ($Cell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cell_ = $Cell$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$RootsJoCode" {
import {$JoCode, $JoCode$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$JoCode"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $RootsJoCode extends $JoCode {
 "instructions": (byte)[]

constructor(arg0: string)
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type)

public "generate"(arg0: $GenerationContext$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootsJoCode$Type = ($RootsJoCode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootsJoCode_ = $RootsJoCode$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$BranchLoaderBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$BlockModelBuilder, $BlockModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CustomLoaderBuilder, $CustomLoaderBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder"

export class $BranchLoaderBuilder extends $CustomLoaderBuilder<($BlockModelBuilder)> {

constructor(arg0: $ResourceLocation$Type, arg1: $BlockModelBuilder$Type, arg2: $ExistingFileHelper$Type)

public static "branch"(arg0: $BlockModelBuilder$Type, arg1: $ExistingFileHelper$Type): $BranchLoaderBuilder
public "texture"(arg0: string, arg1: $ResourceLocation$Type): $BranchLoaderBuilder
public "toJson"(arg0: $JsonObject$Type): $JsonObject
public static "surfaceRoot"(arg0: $BlockModelBuilder$Type, arg1: $ExistingFileHelper$Type): $BranchLoaderBuilder
public static "Roots"(arg0: $BlockModelBuilder$Type, arg1: $ExistingFileHelper$Type): $BranchLoaderBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchLoaderBuilder$Type = ($BranchLoaderBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchLoaderBuilder_ = $BranchLoaderBuilder$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/$CactusBranchBlock$CactusThickness" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CactusBranchBlock$CactusThickness extends $Enum<($CactusBranchBlock$CactusThickness)> implements $StringRepresentable {
static readonly "BRANCH": $CactusBranchBlock$CactusThickness
static readonly "TRUNK": $CactusBranchBlock$CactusThickness
static readonly "CORE": $CactusBranchBlock$CactusThickness


public "toString"(): string
public static "values"(): ($CactusBranchBlock$CactusThickness)[]
public static "valueOf"(arg0: string): $CactusBranchBlock$CactusThickness
public "getRadius"(): integer
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "radius"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CactusBranchBlock$CactusThickness$Type = (("core") | ("trunk") | ("branch")) | ($CactusBranchBlock$CactusThickness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CactusBranchBlock$CactusThickness_ = $CactusBranchBlock$CactusThickness$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGrowContext" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PostGrowContext extends $GenerationContext {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: $BlockPos$Type, arg4: integer, arg5: boolean)

public "natural"(): boolean
public "treePos"(): $BlockPos
public "fertility"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostGrowContext$Type = ($PostGrowContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostGrowContext_ = $PostGrowContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$CommonOverride" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Species$CommonOverride extends $BiPredicate<($BlockGetter), ($BlockPos)> {

 "test"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($BlockGetter), ($BlockPos)>
 "negate"(): $BiPredicate<($BlockGetter), ($BlockPos)>
 "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($BlockGetter), ($BlockPos)>

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
}

export namespace $Species$CommonOverride {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Species$CommonOverride$Type = ($Species$CommonOverride);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Species$CommonOverride_ = $Species$CommonOverride$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$RootConnections" {
import {$RootConnections$ConnectionLevel, $RootConnections$ConnectionLevel$Type} from "packages/com/ferreusveritas/dynamictrees/util/$RootConnections$ConnectionLevel"
import {$Connections, $Connections$Type} from "packages/com/ferreusveritas/dynamictrees/util/$Connections"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $RootConnections extends $Connections {
static readonly "ROOT_CONNECTIONS_PROPERTY": $ModelProperty<($RootConnections)>
static readonly "PLACEHOLDER_CONNECTION_LEVELS": ($RootConnections$ConnectionLevel)[]

constructor()
constructor(arg0: $RootConnections$Type)

public "setRadius"(arg0: $Direction$Type, arg1: integer): void
public "setConnectionLevel"(arg0: $Direction$Type, arg1: $RootConnections$ConnectionLevel$Type): void
public "getConnectionLevels"(): ($RootConnections$ConnectionLevel)[]
public "setConnectionLevels"(arg0: ($RootConnections$ConnectionLevel$Type)[]): void
get "connectionLevels"(): ($RootConnections$ConnectionLevel)[]
set "connectionLevels"(value: ($RootConnections$ConnectionLevel$Type)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootConnections$Type = ($RootConnections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootConnections_ = $RootConnections$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/holderset/$IncludesExcludesHolderSet" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$HolderSetType, $HolderSetType$Type} from "packages/net/minecraftforge/registries/holdersets/$HolderSetType"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$HolderSet$Direct, $HolderSet$Direct$Type} from "packages/net/minecraft/core/$HolderSet$Direct"
import {$CompositeHolderSet, $CompositeHolderSet$Type} from "packages/net/minecraftforge/registries/holdersets/$CompositeHolderSet"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HolderOwner, $HolderOwner$Type} from "packages/net/minecraft/core/$HolderOwner"
import {$HolderSet$Named, $HolderSet$Named$Type} from "packages/net/minecraft/core/$HolderSet$Named"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $IncludesExcludesHolderSet<T> extends $CompositeHolderSet<(T)> {

constructor(arg0: $HolderSet$Type<(T)>, arg1: $HolderSet$Type<(T)>)

public "type"(): $HolderSetType
public "clear"(): void
public "excludes"(): $HolderSet<(T)>
public "includes"(): $HolderSet<(T)>
public "getIncludeComponents"(): $List<($HolderSet<(T)>)>
public "getExcludeComponents"(): $List<($HolderSet<(T)>)>
public static "codec"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $Codec$Type<($Holder$Type<(T)>)>, arg2: boolean): $Codec<(any)>
public static "direct"<T>(...arg0: ($Holder$Type<(T)>)[]): $HolderSet$Direct<(T)>
/**
 * 
 * @deprecated
 */
public static "emptyNamed"<T>(arg0: $HolderOwner$Type<(T)>, arg1: $TagKey$Type<(T)>): $HolderSet$Named<(T)>
public static "direct"<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
public static "direct"<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, arg1: $List$Type<(E)>): $HolderSet$Direct<(T)>
public static "direct"<T>(arg0: $List$Type<(any)>): $HolderSet$Direct<(T)>
get "includeComponents"(): $List<($HolderSet<(T)>)>
get "excludeComponents"(): $List<($HolderSet<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncludesExcludesHolderSet$Type<T> = ($IncludesExcludesHolderSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncludesExcludesHolderSet_<T> = $IncludesExcludesHolderSet$Type<(T)>;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/$MushroomShapeConfiguration" {
import {$MushroomShapeKit, $MushroomShapeKit$Type} from "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/shapekits/$MushroomShapeKit"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TemplateRegistry, $TemplateRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$MushroomCapContext, $MushroomCapContext$Type} from "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/context/$MushroomCapContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MushroomShapeConfiguration extends $Configuration<($MushroomShapeConfiguration), ($MushroomShapeKit)> {
static readonly "TEMPLATES": $TemplateRegistry<($MushroomShapeConfiguration)>

constructor(arg0: $MushroomShapeKit$Type)

public static "getDefault"(): $MushroomShapeConfiguration
public "generateMushroomCap"(arg0: $MushroomCapContext$Type): void
public "getMaxCapAge"(): integer
public "getChanceToAge"(): float
public "clearMushroomCap"(arg0: $MushroomCapContext$Type): void
public "getShapeCluster"(arg0: $MushroomCapContext$Type): $List<($BlockPos)>
public "getShapeKit"(): $MushroomShapeKit
get "default"(): $MushroomShapeConfiguration
get "maxCapAge"(): integer
get "chanceToAge"(): float
get "shapeKit"(): $MushroomShapeKit
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MushroomShapeConfiguration$Type = ($MushroomShapeConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MushroomShapeConfiguration_ = $MushroomShapeConfiguration$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SafeChunkBounds, $SafeChunkBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"
import {$LevelContext, $LevelContext$Type} from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenerationContext {

constructor(arg0: $LevelContext$Type, arg1: $Species$Type, arg2: $BlockPos$Type, arg3: $BlockPos$MutableBlockPos$Type, arg4: $Holder$Type<($Biome$Type)>, arg5: $Direction$Type, arg6: integer, arg7: $SafeChunkBounds$Type)

public "random"(): $RandomSource
public "level"(): $LevelAccessor
public "species"(): $Species
public "radius"(): integer
public "secondChance"(): void
public "secondChanceRegen"(): boolean
public "facing"(): $Direction
public "safeBounds"(): $SafeChunkBounds
public "levelContext"(): $LevelContext
public "originPos"(): $BlockPos
public "biome"(): $Holder<($Biome)>
public "rootPos"(): $BlockPos$MutableBlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationContext$Type = ($GenerationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerationContext_ = $GenerationContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/models/$FallingTreeEntityModel$TreeQuadData" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $FallingTreeEntityModel$TreeQuadData {
readonly "bakedQuad": $BakedQuad
readonly "state": $BlockState
readonly "color": integer

constructor(arg0: $BakedQuad$Type, arg1: integer, arg2: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingTreeEntityModel$TreeQuadData$Type = ($FallingTreeEntityModel$TreeQuadData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingTreeEntityModel$TreeQuadData_ = $FallingTreeEntityModel$TreeQuadData$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BasicRootsBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
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
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$MangroveFamily, $MangroveFamily$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$MangroveFamily"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$BasicRootsBlock$Layer, $BasicRootsBlock$Layer$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BasicRootsBlock$Layer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DynamicTrees$DestroyMode, $DynamicTrees$DestroyMode$Type} from "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode"
import {$LootDataManager, $LootDataManager$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import {$LootTable, $LootTable$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import {$BranchDestructionData, $BranchDestructionData$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"

export class $BasicRootsBlock extends $BranchBlock implements $SimpleWaterloggedBlock {
static readonly "NAME_SUFFIX": string
static readonly "RADIUS": $IntegerProperty
static readonly "LAYER": $EnumProperty<($BasicRootsBlock$Layer)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "MAX_RADIUS": integer
static "destroyMode": $DynamicTrees$DestroyMode
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

constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type)

public "getFamily"(): $MangroveFamily
public "getHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getLootTable"(arg0: $LootDataManager$Type, arg1: $Species$Type): $LootTable
public "checkForRot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: integer, arg4: integer, arg5: $RandomSource$Type, arg6: float, arg7: boolean): boolean
public "setFlammability"(arg0: integer): $BasicRootsBlock
public "setRadius"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $Direction$Type, arg4: integer): integer
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "destroyBranchFromNode"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: boolean, arg4: $LivingEntity$Type): $BranchDestructionData
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
public "getRadius"(arg0: $BlockState$Type): integer
public "setFireSpreadSpeed"(arg0: integer): $BasicRootsBlock
public "getPrimitiveLog"(): $Optional<($Block)>
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "getLootTableName"(): $ResourceLocation
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getStateForRadius"(arg0: integer): $BlockState
public "removedByEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "futureBreak"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): void
public "growIntoAir"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type, arg3: integer, arg4: boolean): $GrowSignal
public "isFullBlock"(arg0: $BlockState$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "family"(): $MangroveFamily
set "flammability"(value: integer)
set "fireSpreadSpeed"(value: integer)
get "primitiveLog"(): $Optional<($Block)>
get "lootTableName"(): $ResourceLocation
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicRootsBlock$Type = ($BasicRootsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicRootsBlock_ = $BasicRootsBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export interface $RootyBlockDecayer {

 "decay"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Species$Type): boolean

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Species$Type): boolean
}

export namespace $RootyBlockDecayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RootyBlockDecayer$Type = ($RootyBlockDecayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RootyBlockDecayer_ = $RootyBlockDecayer$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry" {
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DTItemModelProvider, $DTItemModelProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DTBlockStateProvider, $DTBlockStateProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import {$DTLangProvider, $DTLangProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $RegistryEntry<T extends $RegistryEntry<(T)>> {


public "toString"(): string
public "getString"(...arg0: ($Pair$Type<(string), (any)>)[]): string
public "isValid"(): boolean
public "generateItemModelData"(arg0: $DTItemModelProvider$Type): void
public "getTextComponent"(): $Component
public "setRegistryName"(arg0: $ResourceLocation$Type): T
public "ifValid"(arg0: $Consumer$Type<(T)>): boolean
public "toLoadDataString"(): string
public "shouldGenerateData"(): boolean
public "generateLangData"(arg0: $DTLangProvider$Type): void
public "setGenerateData"(arg0: boolean): void
public "ifInvalid"(arg0: $Runnable$Type): boolean
public "elseIfInvalid"(arg0: T): T
public "generateStateData"(arg0: $DTBlockStateProvider$Type): void
public "ifValidElse"(arg0: $Consumer$Type<(T)>, arg1: $Runnable$Type): boolean
public "toReloadDataString"(): string
public "getRegistryName"(): $ResourceLocation
get "valid"(): boolean
get "textComponent"(): $Component
set "registryName"(value: $ResourceLocation$Type)
set "generateData"(value: boolean)
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$Type<T> = ($RegistryEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<T> = $RegistryEntry$Type<(T)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$OffsetablePodBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Pod, $Pod$Type} from "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$PodBlock, $PodBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$PodBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $OffsetablePodBlock extends $PodBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Pod$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetablePodBlock$Type = ($OffsetablePodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetablePodBlock_ = $OffsetablePodBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostRotContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $PostRotContext extends $GenerationContext {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: integer, arg4: integer, arg5: integer, arg6: boolean)

public "radius"(): integer
public "rapid"(): boolean
public "fertility"(): integer
public "neighbourCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostRotContext$Type = ($PostRotContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostRotContext_ = $PostRotContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffect" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $SubstanceEffect {

 "getName"(): string
 "update"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): boolean
 "apply"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "isLingering"(): boolean
}

export namespace $SubstanceEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SubstanceEffect$Type = ($SubstanceEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SubstanceEffect_ = $SubstanceEffect$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationTemplate" {
import {$PropertiesAccessor, $PropertiesAccessor$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$PropertiesAccessor"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import {$Result, $Result$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result"

export interface $ConfigurationTemplate<C extends $Configuration<(C), (any)>> {

 "apply"(arg0: $PropertiesAccessor$Type): $Result<(C), (any)>
 "getRegisteredProperties"(): $Iterable<($ConfigurationProperty<(any)>)>
}

export namespace $ConfigurationTemplate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationTemplate$Type<C> = ($ConfigurationTemplate<(C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationTemplate_<C> = $ConfigurationTemplate$Type<(C)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$FallingTreeEntity, $FallingTreeEntity$Type} from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity"

export interface $AnimationHandler {

 "getName"(): string
 "shouldRender"(arg0: $FallingTreeEntity$Type): boolean
 "renderTransform"(arg0: $FallingTreeEntity$Type, arg1: float, arg2: float, arg3: $PoseStack$Type): void
 "dropPayload"(arg0: $FallingTreeEntity$Type): void
 "shouldDie"(arg0: $FallingTreeEntity$Type): boolean
 "handleMotion"(arg0: $FallingTreeEntity$Type): void
 "initMotion"(arg0: $FallingTreeEntity$Type): void
}

export namespace $AnimationHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationHandler$Type = ($AnimationHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationHandler_ = $AnimationHandler$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$CoordUtils$Surround" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CoordUtils$Surround extends $Enum<($CoordUtils$Surround)> implements $StringRepresentable {
static readonly "N": $CoordUtils$Surround
static readonly "NW": $CoordUtils$Surround
static readonly "W": $CoordUtils$Surround
static readonly "SW": $CoordUtils$Surround
static readonly "S": $CoordUtils$Surround
static readonly "SE": $CoordUtils$Surround
static readonly "E": $CoordUtils$Surround
static readonly "NE": $CoordUtils$Surround


public static "values"(): ($CoordUtils$Surround)[]
public static "valueOf"(arg0: string): $CoordUtils$Surround
public "getOffset"(): $Vec3i
public "getOffsetPos"(): $BlockPos
public "getSerializedName"(): string
public "getOpposite"(): $CoordUtils$Surround
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "offset"(): $Vec3i
get "offsetPos"(): $BlockPos
get "serializedName"(): string
get "opposite"(): $CoordUtils$Surround
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoordUtils$Surround$Type = (("se") | ("s") | ("sw") | ("e") | ("w") | ("ne") | ("nw") | ("n")) | ($CoordUtils$Surround);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoordUtils$Surround_ = $CoordUtils$Surround$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/item/$Staff" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Staff extends $Item {
static readonly "HANDLE": string
static readonly "COLOR": string
static readonly "READ_ONLY": string
static readonly "TREE": string
static readonly "CODE": string
static readonly "ROOTS_CODE": string
static readonly "USES": string
static readonly "MAX_USES": string
static readonly "REACH_DISTANCE": float
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

public "setReadOnly"(arg0: $ItemStack$Type, arg1: boolean): $Staff
public "isReadOnly"(arg0: $ItemStack$Type): boolean
public "setColor"(arg0: $ItemStack$Type, arg1: integer): $Staff
public "getCode"(arg0: $ItemStack$Type): string
public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "setCode"(arg0: $ItemStack$Type, arg1: string): $Staff
public "getSpecies"(arg0: $ItemStack$Type): $Species
public "setSpecies"(arg0: $ItemStack$Type, arg1: $Species$Type): $Staff
public "decUses"(arg0: $ItemStack$Type): boolean
public "setRootsCode"(arg0: $ItemStack$Type, arg1: string): $Staff
public "hasMaxUses"(arg0: $ItemStack$Type): boolean
public "getUses"(arg0: $ItemStack$Type): integer
public "setMaxUses"(arg0: $ItemStack$Type, arg1: integer): $Staff
public "getMaxUses"(arg0: $ItemStack$Type): integer
public "getRootsCode"(arg0: $ItemStack$Type): string
public "setUses"(arg0: $ItemStack$Type, arg1: integer): $Staff
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "mineBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type, arg4: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Staff$Type = ($Staff);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Staff_ = $Staff$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$Musable" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $Musable {

 "isMusable"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean

(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
}

export namespace $Musable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Musable$Type = ($Musable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Musable_ = $Musable$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractRegistry, $AbstractRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$AbstractRegistry"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $SimpleRegistry<V extends $RegistryEntry<(V)>> extends $AbstractRegistry<(V)> {

constructor(arg0: string, arg1: $Class$Type<(V)>, arg2: V, arg3: boolean)
constructor(arg0: $Class$Type<(V)>, arg1: V, arg2: boolean)
constructor(arg0: string, arg1: $Class$Type<(V)>, arg2: V)
constructor(arg0: $Class$Type<(V)>, arg1: V)

public "getAll"(): $Set<(V)>
get "all"(): $Set<(V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleRegistry$Type<V> = ($SimpleRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleRegistry_<V> = $SimpleRegistry$Type<(V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TreePart, $TreePart$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$TreePart$TreePartType, $TreePart$TreePartType$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$BranchBlock$ItemStackPos, $BranchBlock$ItemStackPos$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos"
import {$Connections, $Connections$Type} from "packages/com/ferreusveritas/dynamictrees/util/$Connections"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockWithDynamicHardness, $BlockWithDynamicHardness$Type} from "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness"
import {$FutureBreakable, $FutureBreakable$Type} from "packages/com/ferreusveritas/dynamictrees/api/$FutureBreakable"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$DynamicTrees$DestroyMode, $DynamicTrees$DestroyMode$Type} from "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode"
import {$LootDataManager, $LootDataManager$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$LootTable, $LootTable$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$BranchDestructionData, $BranchDestructionData$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$NetVolumeNode$Volume, $NetVolumeNode$Volume$Type} from "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume"

export class $BranchBlock extends $BlockWithDynamicHardness implements $TreePart, $FutureBreakable {
static readonly "MAX_RADIUS": integer
static readonly "NAME_SUFFIX": string
static "destroyMode": $DynamicTrees$DestroyMode
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

constructor(arg0: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type)

public "getFamily"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $Family
public "getFamily"(): $Family
public "setFamily"(arg0: $Family$Type): void
public "rot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): void
public "getLootTable"(arg0: $LootDataManager$Type, arg1: $Species$Type): $LootTable
public "getPrimitiveLogs"(arg0: float, arg1: $List$Type<($ItemStack$Type)>): float
public "checkForRot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: integer, arg4: integer, arg5: $RandomSource$Type, arg6: float, arg7: boolean): boolean
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "setRadius"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $Direction$Type): integer
public "setRadius"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $Direction$Type, arg4: integer): integer
public "getTreePartType"(): $TreePart$TreePartType
public "shouldAnalyse"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public static "setSupport"(arg0: integer, arg1: integer): integer
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "setBlockStateIgnored"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer): void
public "shouldGenerateBranchDrops"(): boolean
public "getConnectionData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $Connections
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "destroyBranchFromNode"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: boolean, arg4: $LivingEntity$Type): $BranchDestructionData
public "setPrimitiveLogDrops"(...arg0: ($ItemStack$Type)[]): $BranchBlock
public static "isNextToBranch"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
public "getRadius"(arg0: $BlockState$Type): integer
public "stripBranch"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer): void
public "stripBranch"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $ItemStack$Type): void
public "stripBranch"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): void
public "canBeStripped"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $ItemStack$Type): boolean
public "getPrimitiveLog"(): $Optional<($Block)>
public "setCanBeStripped"(arg0: boolean): $BranchBlock
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "canFall"(): boolean
public "connectToLeaves"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: integer): boolean
public "getLootTableName"(): $ResourceLocation
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public static "getBranchSupport"(arg0: integer): integer
public "getMaxRadius"(): integer
public "isSameTree"(arg0: $TreePart$Type): boolean
public "isSameTree"(arg0: $BlockState$Type): boolean
public "isSameTree"(arg0: $BranchBlock$Type): boolean
public "destroyLeaves"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: $ItemStack$Type, arg4: $List$Type<($BlockPos$Type)>, arg5: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, arg6: $List$Type<($BranchBlock$ItemStackPos$Type)>): void
public "damageAxe"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer, arg3: $NetVolumeNode$Volume$Type, arg4: boolean): void
public "isStrippedBranch"(): boolean
public static "getLeavesSupport"(arg0: integer): integer
public "getStateForRadius"(arg0: integer): $BlockState
public "breakDeliberate"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $DynamicTrees$DestroyMode$Type): void
public "createBranchDrops"(): $LootTable$Builder
public "removedByEntity"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
public "futureBreak"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): void
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "isRootNode"(): boolean
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
get "family"(): $Family
set "family"(value: $Family$Type)
get "treePartType"(): $TreePart$TreePartType
set "primitiveLogDrops"(value: ($ItemStack$Type)[])
get "primitiveLog"(): $Optional<($Block)>
get "lootTableName"(): $ResourceLocation
get "maxRadius"(): integer
get "strippedBranch"(): boolean
get "rootNode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchBlock$Type = ($BranchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchBlock_ = $BranchBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$WaterSoilProperties$RootyWaterBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
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
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SoilProperties, $SoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RootyBlockDecayer, $RootyBlockDecayer$Type} from "packages/com/ferreusveritas/dynamictrees/api/$RootyBlockDecayer"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RootyBlock, $RootyBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$RootyBlock"

export class $WaterSoilProperties$RootyWaterBlock extends $RootyBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
static "rootyBlockDecayer": $RootyBlockDecayer
static readonly "FERTILITY": $IntegerProperty
static readonly "IS_VARIANT": $BooleanProperty
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

constructor(arg0: $SoilProperties$Type, arg1: $BlockBehaviour$Properties$Type)

public "getHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "getDecayBlockState"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $BlockState
public "getColorFromBark"(): boolean
public "fallWithTree"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "colorFromBark"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterSoilProperties$RootyWaterBlock$Type = ($WaterSoilProperties$RootyWaterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterSoilProperties$RootyWaterBlock_ = $WaterSoilProperties$RootyWaterBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$FilterOp" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleVoxmap$FilterOp {

 "getOp"(arg0: byte): byte

(arg0: byte): byte
}

export namespace $SimpleVoxmap$FilterOp {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleVoxmap$FilterOp$Type = ($SimpleVoxmap$FilterOp);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleVoxmap$FilterOp_ = $SimpleVoxmap$FilterOp$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/item/$DirtBucket" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DirtBucket extends $Item {
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

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "tryPlaceContainedDirt"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirtBucket$Type = ($DirtBucket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirtBucket_ = $DirtBucket$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$DynamicCapCenterBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CapProperties, $CapProperties$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$CapProperties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TreePart, $TreePart$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$UpdatesSurroundNeighbors, $UpdatesSurroundNeighbors$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$UpdatesSurroundNeighbors"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$TreePart$TreePartType, $TreePart$TreePartType$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $DynamicCapCenterBlock extends $Block implements $TreePart, $UpdatesSurroundNeighbors {
static readonly "AGE": $IntegerProperty
 "f_60439_": $CapProperties
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

constructor(arg0: $CapProperties$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "getProperties"(arg0: $BlockState$Type): $CapProperties
public "setProperties"(arg0: $CapProperties$Type): void
public "getFamily"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $Family
public "getCapBlockStateForPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $BlockState$Type, arg4: boolean): $BlockState
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "getTreePartType"(): $TreePart$TreePartType
public "shouldAnalyse"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
public "branchOut"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type, arg3: integer): $GrowSignal
public "getRadius"(arg0: $BlockState$Type): integer
public "clearRing"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): void
public static "getCapAge"(arg0: $Level$Type, arg1: $BlockPos$Type): integer
public "tryGrowCap"(arg0: $Level$Type, arg1: $CapProperties$Type, arg2: integer, arg3: $GrowSignal$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type, arg6: boolean): boolean
public "getRing"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer): $List<($BlockPos)>
public "placeRing"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer, arg4: boolean, arg5: boolean): boolean
public static "canCapReplace"(arg0: $BlockState$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "isRootNode"(): boolean
public "updateNeighborsSurround"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Class$Type<(any)>): void
set "properties"(value: $CapProperties$Type)
get "treePartType"(): $TreePart$TreePartType
get "rootNode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicCapCenterBlock$Type = ($DynamicCapCenterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicCapCenterBlock_ = $DynamicCapCenterBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/$CactusFruitBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$FruitBlock, $FruitBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$FruitBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Fruit, $Fruit$Type} from "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $CactusFruitBlock extends $FruitBlock {
static readonly "OFFSET": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Fruit$Type)

public "isSupported"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CactusFruitBlock$Type = ($CactusFruitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CactusFruitBlock_ = $CactusFruitBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$TrunkShellBlock" {
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
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$CoordUtils$Surround, $CoordUtils$Surround$Type} from "packages/com/ferreusveritas/dynamictrees/util/$CoordUtils$Surround"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IClientBlockExtensions, $IClientBlockExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockWithDynamicHardness, $BlockWithDynamicHardness$Type} from "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$TrunkShellBlock$ShellMuse, $TrunkShellBlock$ShellMuse$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$TrunkShellBlock$ShellMuse"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TrunkShellBlock extends $BlockWithDynamicHardness implements $SimpleWaterloggedBlock {
static readonly "CORE_DIR": $EnumProperty<($CoordUtils$Surround)>
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

constructor()

public "getHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "museDoesNotExist"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "getMuse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TrunkShellBlock$ShellMuse
public "getMuse"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $TrunkShellBlock$ShellMuse
public "getMuseUnchecked"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): $TrunkShellBlock$ShellMuse
public "getMuseUnchecked"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $TrunkShellBlock$ShellMuse
public "getMuseUnchecked"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): $TrunkShellBlock$ShellMuse
public "isFullBlockShell"(arg0: integer): boolean
public "isFullBlockShell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
public "isFullBlockShell"(arg0: $TrunkShellBlock$ShellMuse$Type): boolean
public "scheduleUpdateTick"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): void
public "getMuseDir"(arg0: $BlockState$Type, arg1: $BlockPos$Type): $CoordUtils$Surround
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientBlockExtensions$Type)>): void
public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
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
export type $TrunkShellBlock$Type = ($TrunkShellBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrunkShellBlock_ = $TrunkShellBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$Connections" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $Connections {

constructor()
constructor(arg0: (integer)[])

public "setRadius"(arg0: $Direction$Type, arg1: integer): void
public "getAllRadii"(): (integer)[]
public "setAllRadii"(arg0: (integer)[]): $Connections
get "allRadii"(): (integer)[]
set "allRadii"(value: (integer)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Connections$Type = ($Connections);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Connections_ = $Connections$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/shapekits/$MushroomShapeKit" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Configurable, $Configurable$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable"
import {$MushroomShapeConfiguration, $MushroomShapeConfiguration$Type} from "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/$MushroomShapeConfiguration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$ConfigurableRegistry, $ConfigurableRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistry"
import {$ConfigurableRegistryEntry, $ConfigurableRegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MushroomCapContext, $MushroomCapContext$Type} from "packages/com/ferreusveritas/dynamictreesplus/systems/mushroomlogic/context/$MushroomCapContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

export class $MushroomShapeKit extends $ConfigurableRegistryEntry<($MushroomShapeKit), ($MushroomShapeConfiguration)> implements $Configurable {
static readonly "MAX_CAP_AGE": $ConfigurationProperty<(integer)>
static readonly "CHANCE_TO_AGE": $ConfigurationProperty<(float)>
static readonly "NULL": $MushroomShapeKit
static readonly "REGISTRY": $ConfigurableRegistry<($MushroomShapeKit), ($MushroomShapeConfiguration)>

constructor(arg0: $ResourceLocation$Type)

public "generateMushroomCap"(arg0: $MushroomShapeConfiguration$Type, arg1: $MushroomCapContext$Type): void
public "getMaxCapAge"(arg0: $MushroomShapeConfiguration$Type): integer
public "getChanceToAge"(arg0: $MushroomShapeConfiguration$Type): float
public "clearMushroomCap"(arg0: $MushroomShapeConfiguration$Type, arg1: $MushroomCapContext$Type): void
public "getShapeCluster"(arg0: $MushroomShapeConfiguration$Type, arg1: $MushroomCapContext$Type): $List<($BlockPos)>
public "isPropertyRegistered"(arg0: $ConfigurationProperty$Type<(any)>): boolean
public "getRegisteredProperties"(): $Set<($ConfigurationProperty<(any)>)>
public "getDefaultConfiguration"(): $Configuration<(any), (any)>
get "registeredProperties"(): $Set<($ConfigurationProperty<(any)>)>
get "defaultConfiguration"(): $Configuration<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MushroomShapeKit$Type = ($MushroomShapeKit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MushroomShapeKit_ = $MushroomShapeKit$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/item/$Seed" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Seed extends $Item implements $IPlantable {
static readonly "FORCE_PLANT_KEY": string
static readonly "LIFESPAN_KEY": string
static readonly "CODE_KEY": string
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

constructor(arg0: $Species$Type, arg1: $Item$Properties$Type)
constructor(arg0: $Species$Type)
constructor()

public "getTimeToLive"(arg0: $ItemStack$Type): integer
public "getCode"(arg0: $ItemStack$Type, arg1: $RandomSource$Type): string
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "hasForcePlant"(arg0: $ItemStack$Type): boolean
public "shouldPlant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type): boolean
public "doPlanting"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $ItemStack$Type): boolean
public "onItemUsePlantSeed"(arg0: $UseOnContext$Type, arg1: boolean): $InteractionResult
public "onItemUseFlowerPot"(arg0: $UseOnContext$Type): $InteractionResult
public "getSpecies"(): $Species
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
get "species"(): $Species
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Seed$Type = ($Seed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Seed_ = $Seed$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/models/$ModelTracker" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ModelTracker {

 "modelCleanup"(): void
}

export namespace $ModelTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelTracker$Type = ($ModelTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelTracker_ = $ModelTracker$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $DTDataProvider {

 "block"(arg0: $ResourceLocation$Type): $ResourceLocation
 "item"(arg0: $ResourceLocation$Type): $ResourceLocation
}

export namespace $DTDataProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DTDataProvider$Type = ($DTDataProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DTDataProvider_ = $DTDataProvider$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$CapProperties" {
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DynamicCapBlock, $DynamicCapBlock$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$DynamicCapBlock"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HugeMushroomSpecies, $HugeMushroomSpecies$Type} from "packages/com/ferreusveritas/dynamictreesplus/tree/$HugeMushroomSpecies"
import {$DynamicCapCenterBlock, $DynamicCapCenterBlock$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$DynamicCapCenterBlock"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$Resettable, $Resettable$Type} from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import {$DTBlockStateProvider, $DTBlockStateProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LootDataManager, $LootDataManager$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import {$LootTable, $LootTable$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapProperties extends $RegistryEntry<($CapProperties)> implements $Resettable<($CapProperties)> {
static readonly "CODEC": $Codec<($CapProperties)>
static readonly "NULL": $CapProperties
static readonly "REGISTRY": $TypedRegistry<($CapProperties)>
static readonly "OUTSIDE_FACE": string
static readonly "INSIDE_FACE": string
static readonly "FACE": string
static readonly "CAP_CENTER_AGE_0_PARENT": string

constructor(arg0: $BlockState$Type, arg1: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type)

public "getFamily"(): $Family
public "setFamily"(arg0: $Family$Type): $CapProperties
public "getMaxAge"(arg0: $HugeMushroomSpecies$Type): integer
public "getBlockLootTableName"(): $ResourceLocation
public "shouldGenerateBlockDrops"(): boolean
public "shouldGenerateDrops"(): boolean
public "getLootTable"(arg0: $LootDataManager$Type, arg1: $Species$Type): $LootTable
public "setModelOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "getModelPath"(arg0: string): $Optional<($ResourceLocation)>
public "getDynamicCapCenterBlock"(): $Optional<($DynamicCapCenterBlock)>
public "addCapCenterAgeZeroTextures"(arg0: $BiConsumer$Type<(string), ($ResourceLocation$Type)>, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "getPrimitiveCapItemStack"(): $ItemStack
public "setGenerateFaceModels"(arg0: boolean): void
public "setCenterBlockRegistryName"(arg0: $ResourceLocation$Type): $CapProperties
public "getCapFaceModelName"(): string
public "getCapInsideFaceModelName"(): string
public "getCapCenterAgeZeroModelParent"(): $ResourceLocation
public "shouldGenerateFaceModels"(): boolean
public "getPrimitiveCapBlock"(): $Optional<($Block)>
public "generateDynamicCapBlocks"(arg0: $BlockBehaviour$Properties$Type): void
public "getCenterBlockRegistryName"(): $ResourceLocation
public "getCapCenterAgeZeroModelName"(): string
public "setFlammability"(arg0: integer): void
public "getFireSpreadSpeed"(): integer
public "getFlammability"(): integer
public "setTextureOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "getBlockRegistryName"(): $ResourceLocation
public "getDefaultBlockProperties"(arg0: $MapColor$Type): $BlockBehaviour$Properties
public "setBlockRegistryName"(arg0: $ResourceLocation$Type): $CapProperties
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "setMushroomItem"(arg0: $Item$Type): void
public "setPrimitiveCap"(arg0: $Block$Type): void
public "setAgeZeroShape"(arg0: $VoxelShape$Type): void
public "isPartOfCap"(arg0: $BlockState$Type): boolean
public "getPrimitiveCap"(): $BlockState
public "setDynamicCapState"(arg0: $BlockState$Type, arg1: boolean): $CapProperties
public "getAgeZeroShape"(): $VoxelShape
public "sporeParticleType"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): $ParticleOptions
public "getDynamicCapBlock"(): $Optional<($DynamicCapBlock)>
public "getDynamicCapState"(arg0: boolean): $BlockState
public "getDynamicCapState"(arg0: integer, arg1: (boolean)[]): $BlockState
public "getDynamicCapState"(arg0: boolean, arg1: integer): $BlockState
public "getDynamicCapState"(arg0: integer): $BlockState
public "sporeParticleSpeed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): $Vec3
public "addCapFaceTextures"(arg0: $BiConsumer$Type<(string), ($ResourceLocation$Type)>, arg1: $ResourceLocation$Type, arg2: boolean): void
public "getMushroomItem"(): $Item
public "getFaceModelParent"(): $ResourceLocation
public "setFireSpreadSpeed"(arg0: integer): void
public "generateStateData"(arg0: $DTBlockStateProvider$Type): void
public "getDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type, arg3: $Species$Type): $List<($ItemStack)>
public "createBlockDrops"(): $LootTable$Builder
public "getLootTableName"(): $ResourceLocation
public "createDrops"(): $LootTable$Builder
public "getDefaultMapColor"(): $MapColor
public "getTexturePath"(arg0: string): $Optional<($ResourceLocation)>
public "reset"(): $CapProperties
public "setPostReloadDefaults"(): $CapProperties
public "setPreReloadDefaults"(): $CapProperties
get "family"(): $Family
set "family"(value: $Family$Type)
get "blockLootTableName"(): $ResourceLocation
set "modelOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
get "dynamicCapCenterBlock"(): $Optional<($DynamicCapCenterBlock)>
get "primitiveCapItemStack"(): $ItemStack
set "generateFaceModels"(value: boolean)
set "centerBlockRegistryName"(value: $ResourceLocation$Type)
get "capFaceModelName"(): string
get "capInsideFaceModelName"(): string
get "capCenterAgeZeroModelParent"(): $ResourceLocation
get "primitiveCapBlock"(): $Optional<($Block)>
get "centerBlockRegistryName"(): $ResourceLocation
get "capCenterAgeZeroModelName"(): string
set "flammability"(value: integer)
get "fireSpreadSpeed"(): integer
get "flammability"(): integer
set "textureOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
get "blockRegistryName"(): $ResourceLocation
set "blockRegistryName"(value: $ResourceLocation$Type)
set "mushroomItem"(value: $Item$Type)
set "primitiveCap"(value: $Block$Type)
set "ageZeroShape"(value: $VoxelShape$Type)
get "primitiveCap"(): $BlockState
get "ageZeroShape"(): $VoxelShape
get "dynamicCapBlock"(): $Optional<($DynamicCapBlock)>
get "mushroomItem"(): $Item
get "faceModelParent"(): $ResourceLocation
set "fireSpreadSpeed"(value: integer)
get "lootTableName"(): $ResourceLocation
get "defaultMapColor"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapProperties$Type = ($CapProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapProperties_ = $CapProperties$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$UpdatesSurroundNeighbors" {
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $UpdatesSurroundNeighbors {

 "updateNeighborsSurround"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Class$Type<(any)>): void
}

export namespace $UpdatesSurroundNeighbors {
const cornersAndEdges: ($Vec3i)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpdatesSurroundNeighbors$Type = ($UpdatesSurroundNeighbors);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpdatesSurroundNeighbors_ = $UpdatesSurroundNeighbors$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$PalmLeavesProperties$DynamicPalmLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$DynamicLeavesBlock, $DynamicLeavesBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$CoordUtils$Surround, $CoordUtils$Surround$Type} from "packages/com/ferreusveritas/dynamictrees/util/$CoordUtils$Surround"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PalmLeavesProperties$DynamicPalmLeavesBlock extends $DynamicLeavesBlock {
static readonly "DIRECTION": $IntegerProperty
static readonly "hydroSurroundMap": (($CoordUtils$Surround)[])[]
 "properties": $LeavesProperties
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
 "drops": $ResourceLocation

constructor(arg0: $LeavesProperties$Type, arg1: $BlockBehaviour$Properties$Type)

public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "getLeavesBlockStateForPlacement"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer, arg4: boolean): $BlockState
public "appearanceChangesWithHydro"(arg0: integer, arg1: integer): boolean
public static "getDirectionState"(arg0: $BlockState$Type, arg1: $CoordUtils$Surround$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PalmLeavesProperties$DynamicPalmLeavesBlock$Type = ($PalmLeavesProperties$DynamicPalmLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PalmLeavesProperties$DynamicPalmLeavesBlock_ = $PalmLeavesProperties$DynamicPalmLeavesBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$NodeInspector, $NodeInspector$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MapSignal {
 "root": $BlockPos
 "depth": integer
 "multiroot": boolean
 "destroyLoopedNodes": boolean
 "trackVisited": boolean
 "localRootDir": $Direction
 "overflow": boolean
 "foundRoot": boolean

constructor()
constructor(...arg0: ($NodeInspector$Type)[])

public "run"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "doTrackingVisited"(arg0: $BlockPos$Type): boolean
public "returnRun"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getInspectors"(): $ArrayList<($NodeInspector)>
get "inspectors"(): $ArrayList<($NodeInspector)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapSignal$Type = ($MapSignal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MapSignal_ = $MapSignal$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TreePart$TreePartType extends $Enum<($TreePart$TreePartType)> {
static readonly "NULL": $TreePart$TreePartType
static readonly "ROOT": $TreePart$TreePartType
static readonly "BRANCH": $TreePart$TreePartType
static readonly "LEAVES": $TreePart$TreePartType
static readonly "OTHER": $TreePart$TreePartType


public static "values"(): ($TreePart$TreePartType)[]
public static "valueOf"(arg0: string): $TreePart$TreePartType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreePart$TreePartType$Type = (("other") | ("null") | ("leaves") | ("root") | ("branch")) | ($TreePart$TreePartType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreePart$TreePartType_ = $TreePart$TreePartType$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/tree/family/$MangroveFamily" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$DTItemModelProvider, $DTItemModelProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider"
import {$DTBlockStateProvider, $DTBlockStateProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$SoilProperties, $SoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import {$AerialRootsSoilProperties, $AerialRootsSoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$AerialRootsSoilProperties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"

export class $MangroveFamily extends $Family {
static readonly "TYPE": $TypedRegistry$EntryType<($Family)>
static readonly "NULL_FAMILY": $Family
static readonly "REGISTRY": $TypedRegistry<($Family)>
 "woodRingColor": integer
 "woodBarkColor": integer
static readonly "BRANCH": string
static readonly "BRANCH_TOP": string
static readonly "STRIPPED_BRANCH": string
static readonly "STRIPPED_BRANCH_TOP": string
static readonly "ROOTS_SIDE": string
static readonly "ROOTS_TOP": string

constructor(arg0: $ResourceLocation$Type)

public "addGeneratedBlockTags"(arg0: $Function$Type<($TagKey$Type<($Block$Type)>), ($IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type<($Block$Type)>)>): void
public "setPrimitiveRootsCovered"(arg0: $Block$Type): void
public "addAcceptableSoilsForRootSystem"(...arg0: (string)[]): $Family
public "getBranchForRootsPlacement"(arg0: $LevelAccessor$Type, arg1: $Species$Type, arg2: $BlockPos$Type): $Optional<($BranchBlock)>
public "setPrimitiveRootsFilled"(arg0: $Block$Type): void
public "getBranchItemParentLocation"(): $ResourceLocation
public "getSecondaryRootThickness"(): integer
public "getPrimaryRootThickness"(): integer
public "isAcceptableSoilForRootSystem"(arg0: $BlockState$Type): boolean
public "getRoots"(): $Optional<($BranchBlock)>
public "setPrimitiveRoots"(arg0: $Block$Type): void
public "setDefaultSoil"(arg0: $SoilProperties$Type): void
public "setCommonSpecies"(arg0: $Species$Type): void
public "generateItemModelData"(arg0: $DTItemModelProvider$Type): void
public "generateStateData"(arg0: $DTBlockStateProvider$Type): void
public "setupBlocks"(): void
public "setRoots"(arg0: $Supplier$Type<($BranchBlock$Type)>): $Family
public "getPrimitiveRoots"(): $Optional<($Block)>
public "getDefaultSoil"(): $AerialRootsSoilProperties
public "createRootsItem"(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<($BranchBlock$Type)>): $Supplier<($BlockItem)>
public "getRootsItem"(): $Optional<($Item)>
public "defaultRootsTags"(): $List<($TagKey<($Block)>)>
public "setSecondaryRootThickness"(arg0: integer): void
public "setSupportedRootThicknessExtra"(arg0: integer): void
public "getSupportedRootThicknessExtra"(): integer
public "setPrimaryRootThickness"(arg0: integer): void
public "getPrimitiveCoveredRoots"(): $Optional<($Block)>
public "getDefaultRootsHarvestTier"(): $Tier
public "getPrimitiveFilledRoots"(): $Optional<($Block)>
set "primitiveRootsCovered"(value: $Block$Type)
set "primitiveRootsFilled"(value: $Block$Type)
get "branchItemParentLocation"(): $ResourceLocation
get "secondaryRootThickness"(): integer
get "primaryRootThickness"(): integer
get "roots"(): $Optional<($BranchBlock)>
set "primitiveRoots"(value: $Block$Type)
set "defaultSoil"(value: $SoilProperties$Type)
set "commonSpecies"(value: $Species$Type)
set "roots"(value: $Supplier$Type<($BranchBlock$Type)>)
get "primitiveRoots"(): $Optional<($Block)>
get "defaultSoil"(): $AerialRootsSoilProperties
get "rootsItem"(): $Optional<($Item)>
set "secondaryRootThickness"(value: integer)
set "supportedRootThicknessExtra"(value: integer)
get "supportedRootThicknessExtra"(): integer
set "primaryRootThickness"(value: integer)
get "primitiveCoveredRoots"(): $Optional<($Block)>
get "defaultRootsHarvestTier"(): $Tier
get "primitiveFilledRoots"(): $Optional<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MangroveFamily$Type = ($MangroveFamily);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MangroveFamily_ = $MangroveFamily$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurableRegistryEntry" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Configurable, $Configurable$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $ConfigurableRegistryEntry<T extends $ConfigurableRegistryEntry<(T), (C)>, C extends $Configuration<(C), (T)>> extends $RegistryEntry<(T)> implements $Configurable {


public "with"<V>(arg0: $ConfigurationProperty$Type<(V)>, arg1: V): C
public "isPropertyRegistered"(arg0: $ConfigurationProperty$Type<(any)>): boolean
public "getRegisteredProperties"(): $Set<($ConfigurationProperty<(any)>)>
public "getDefaultConfiguration"(): C
get "registeredProperties"(): $Set<($ConfigurationProperty<(any)>)>
get "defaultConfiguration"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableRegistryEntry$Type<T, C> = ($ConfigurableRegistryEntry<(T), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableRegistryEntry_<T, C> = $ConfigurableRegistryEntry$Type<(T), (C)>;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$DynamicCapBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$HugeMushroomBlock, $HugeMushroomBlock$Type} from "packages/net/minecraft/world/level/block/$HugeMushroomBlock"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CapProperties, $CapProperties$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$CapProperties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TreePart, $TreePart$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$UpdatesSurroundNeighbors, $UpdatesSurroundNeighbors$Type} from "packages/com/ferreusveritas/dynamictreesplus/block/mushroom/$UpdatesSurroundNeighbors"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$TreePart$TreePartType, $TreePart$TreePartType$Type} from "packages/com/ferreusveritas/dynamictrees/api/treedata/$TreePart$TreePartType"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$MapSignal, $MapSignal$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$MapSignal"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $DynamicCapBlock extends $HugeMushroomBlock implements $TreePart, $UpdatesSurroundNeighbors {
static readonly "DISTANCE": $IntegerProperty
 "f_60439_": $CapProperties
static readonly "NORTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

constructor(arg0: $CapProperties$Type, arg1: $BlockBehaviour$Properties$Type)
constructor(arg0: $BlockBehaviour$Properties$Type)

public "getProperties"(arg0: $BlockState$Type): $CapProperties
public "setProperties"(arg0: $CapProperties$Type): void
public "getFamily"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $Family
public "getHydrationCell"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $LeavesProperties$Type): $Cell
public "growSignal"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $GrowSignal$Type): $GrowSignal
public "getTreePartType"(): $TreePart$TreePartType
public "shouldAnalyse"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "branchSupport"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BranchBlock$Type, arg3: $BlockPos$Type, arg4: $Direction$Type, arg5: integer): integer
public "analyse"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $MapSignal$Type): $MapSignal
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "probabilityForBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type): integer
public "getRadius"(arg0: $BlockState$Type): integer
public static "setDirectionValues"(arg0: $BlockState$Type, arg1: (boolean)[]): $BlockState
public static "getDirectionValues"(arg0: $BlockState$Type): (boolean)[]
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "isRootNode"(): boolean
public "updateNeighborsSurround"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Class$Type<(any)>): void
set "properties"(value: $CapProperties$Type)
get "treePartType"(): $TreePart$TreePartType
get "rootNode"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicCapBlock$Type = ($DynamicCapBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicCapBlock_ = $DynamicCapBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$BasicRootsBlock$Layer" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$MangroveFamily, $MangroveFamily$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$MangroveFamily"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BasicRootsBlock$Layer extends $Enum<($BasicRootsBlock$Layer)> implements $StringRepresentable {
static readonly "EXPOSED": $BasicRootsBlock$Layer
static readonly "FILLED": $BasicRootsBlock$Layer
static readonly "COVERED": $BasicRootsBlock$Layer


public static "values"(): ($BasicRootsBlock$Layer)[]
public static "valueOf"(arg0: string): $BasicRootsBlock$Layer
public "getPrimitive"(arg0: $MangroveFamily$Type): $Optional<($Block)>
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
export type $BasicRootsBlock$Layer$Type = (("covered") | ("exposed") | ("filled")) | ($BasicRootsBlock$Layer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicRootsBlock$Layer_ = $BasicRootsBlock$Layer$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/tree/species/$Species$LogsAndSticks" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $Species$LogsAndSticks {
 "logs": $List<($ItemStack)>
readonly "sticks": integer

constructor(arg0: $List$Type<($ItemStack$Type)>, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Species$LogsAndSticks$Type = ($Species$LogsAndSticks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Species$LogsAndSticks_ = $Species$LogsAndSticks$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$UniversalPoissonDiscProvider" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$PoissonDiscProvider, $PoissonDiscProvider$Type} from "packages/com/ferreusveritas/dynamictrees/api/worldgen/$PoissonDiscProvider"
import {$PoissonDisc, $PoissonDisc$Type} from "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$PoissonDisc"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$LevelContext, $LevelContext$Type} from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"

export class $UniversalPoissonDiscProvider {

constructor()

public "getProvider"(arg0: $LevelContext$Type): $PoissonDiscProvider
public "getPoissonDiscs"(arg0: $LevelContext$Type, arg1: $ChunkPos$Type): $List<($PoissonDisc)>
public "getChunkPoissonData"(arg0: $LevelContext$Type, arg1: $ChunkPos$Type): (byte)[]
public "unloadChunkPoissonData"(arg0: $LevelContext$Type, arg1: $ChunkPos$Type): void
public "setChunkPoissonData"(arg0: $LevelContext$Type, arg1: $ChunkPos$Type, arg2: (byte)[]): void
public "unloadWorld"(arg0: $ServerLevel$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalPoissonDiscProvider$Type = ($UniversalPoissonDiscProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalPoissonDiscProvider_ = $UniversalPoissonDiscProvider$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties" {
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LeavesProperties$AgeingConfiguration, $LeavesProperties$AgeingConfiguration$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties$AgeingConfiguration"
import {$Family, $Family$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CellKit, $CellKit$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$CellKit"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import {$DynamicLeavesBlock, $DynamicLeavesBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$DynamicLeavesBlock"
import {$Resettable, $Resettable$Type} from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import {$DTBlockStateProvider, $DTBlockStateProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$DTLangProvider, $DTLangProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$LootDataManager, $LootDataManager$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataManager"
import {$LootTable, $LootTable$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LeavesProperties extends $RegistryEntry<($LeavesProperties)> implements $Resettable<($LeavesProperties)> {
static readonly "CODEC": $Codec<($LeavesProperties)>
static readonly "NULL": $LeavesProperties
static readonly "REGISTRY": $TypedRegistry<($LeavesProperties)>
static readonly "LEAVES": string

constructor(arg0: $BlockState$Type, arg1: $CellKit$Type, arg2: $ResourceLocation$Type)
constructor(arg0: $BlockState$Type, arg1: $ResourceLocation$Type)
constructor(arg0: $ResourceLocation$Type)

public "getFamily"(): $Family
public "setFamily"(arg0: $Family$Type): $LeavesProperties
public "getBlockLootTableName"(): $ResourceLocation
public "shouldGenerateBlockDrops"(): boolean
public "shouldGenerateDrops"(): boolean
public "getPrimitiveLeavesBlock"(): $Optional<($Block)>
public "getPrimitiveLeavesItemStack"(): $ItemStack
public "getSmotherLeavesMax"(): integer
public "getLightRequirement"(): integer
public "setDynamicLeavesState"(arg0: $BlockState$Type): $LeavesProperties
public "canGrowOnGround"(): boolean
public "getPrimitiveLeaves"(): $BlockState
public "getLootTable"(arg0: $LootDataManager$Type, arg1: $Species$Type): $LootTable
public "getCellKit"(): $CellKit
public "isOnlyIfLoaded"(): boolean
public "setOnlyIfLoaded"(arg0: string): void
public "setModelOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "setLangOverrides"(arg0: $Map$Type<(string), (string)>): void
public "getModelPath"(arg0: string): $Optional<($ResourceLocation)>
public "getLangOverride"(arg0: string): $Optional<(string)>
public "setFlammability"(arg0: integer): void
public "getFireSpreadSpeed"(): integer
public "getFlammability"(): integer
public "setTextureOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "getBlockRegistryName"(): $ResourceLocation
public "getDefaultBlockProperties"(arg0: $MapColor$Type): $BlockBehaviour$Properties
public "addGeneratedBlockTags"(arg0: $Function$Type<($TagKey$Type<($Block$Type)>), ($IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type<($Block$Type)>)>): void
public "setBlockRegistryName"(arg0: $ResourceLocation$Type): $LeavesProperties
public "foliageColorMultiplier"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getDynamicLeavesState"(arg0: integer): $BlockState
public "getDynamicLeavesState"(): $BlockState
public "treeFallColorMultiplier"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getDynamicLeavesBlock"(): $Optional<($DynamicLeavesBlock)>
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "generateDynamicLeaves"(arg0: $BlockBehaviour$Properties$Type): void
public "setLightRequirement"(arg0: integer): void
public "setAgeingConfiguration"(arg0: $LeavesProperties$AgeingConfiguration$Type): void
public "setSmotherLeavesMax"(arg0: integer): void
public "setHasTickParticles"(arg0: boolean): void
public "setConnectAnyRadius"(arg0: boolean): void
public "setColorNumber"(arg0: integer): void
public "setPrimitiveLeaves"(arg0: $Block$Type): void
public "setColorString"(arg0: string): void
public "setCellKit"(arg0: $CellKit$Type): void
public "setFireSpreadSpeed"(arg0: integer): void
public "setSeedDropChances"(arg0: (float)[]): void
public "setSeedDropChances"(arg0: $Collection$Type<(float)>): void
public "setRequiresShears"(arg0: boolean): void
public "setCanGrowOnGround"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "setDoesAge"(arg0: string): void
public "generateLangData"(arg0: $DTLangProvider$Type): void
public "generateStateData"(arg0: $DTBlockStateProvider$Type): void
public "toReloadDataString"(): string
public "getDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type, arg3: $Species$Type): $List<($ItemStack)>
public "getBlockLootTable"(arg0: $LootDataManager$Type, arg1: $Species$Type): $LootTable
public "createBlockDrops"(): $LootTable$Builder
public "getLootTableName"(): $ResourceLocation
public "shouldAge"(arg0: boolean, arg1: $BlockState$Type): boolean
public "isConnectAnyRadius"(): boolean
public "createDrops"(): $LootTable$Builder
public "defaultLeavesTags"(): $List<($TagKey<($Block)>)>
public "doRequireShears"(): boolean
public static "postInitClient"(): void
public "getDefaultMapColor"(): $MapColor
public "getTexturePath"(arg0: string): $Optional<($ResourceLocation)>
public "updateTick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $RandomSource$Type): boolean
public "reset"(): $LeavesProperties
public "setPostReloadDefaults"(): $LeavesProperties
public "setPreReloadDefaults"(): $LeavesProperties
get "family"(): $Family
set "family"(value: $Family$Type)
get "blockLootTableName"(): $ResourceLocation
get "primitiveLeavesBlock"(): $Optional<($Block)>
get "primitiveLeavesItemStack"(): $ItemStack
get "smotherLeavesMax"(): integer
get "lightRequirement"(): integer
set "dynamicLeavesState"(value: $BlockState$Type)
get "primitiveLeaves"(): $BlockState
get "cellKit"(): $CellKit
get "onlyIfLoaded"(): boolean
set "onlyIfLoaded"(value: string)
set "modelOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
set "langOverrides"(value: $Map$Type<(string), (string)>)
set "flammability"(value: integer)
get "fireSpreadSpeed"(): integer
get "flammability"(): integer
set "textureOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
get "blockRegistryName"(): $ResourceLocation
set "blockRegistryName"(value: $ResourceLocation$Type)
get "dynamicLeavesState"(): $BlockState
get "dynamicLeavesBlock"(): $Optional<($DynamicLeavesBlock)>
set "lightRequirement"(value: integer)
set "ageingConfiguration"(value: $LeavesProperties$AgeingConfiguration$Type)
set "smotherLeavesMax"(value: integer)
set "hasTickParticles"(value: boolean)
set "connectAnyRadius"(value: boolean)
set "colorNumber"(value: integer)
set "primitiveLeaves"(value: $Block$Type)
set "colorString"(value: string)
set "cellKit"(value: $CellKit$Type)
set "fireSpreadSpeed"(value: integer)
set "seedDropChances"(value: (float)[])
set "seedDropChances"(value: $Collection$Type<(float)>)
set "requiresShears"(value: boolean)
set "doesAge"(value: string)
get "lootTableName"(): $ResourceLocation
get "connectAnyRadius"(): boolean
get "defaultMapColor"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeavesProperties$Type = ($LeavesProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeavesProperties_ = $LeavesProperties$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap$Cell" {
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"

export class $SimpleVoxmap$Cell {

constructor()

public "getValue"(): byte
public "setValue"(arg0: byte): $SimpleVoxmap$Cell
public "getPos"(): $BlockPos$MutableBlockPos
get "value"(): byte
set "value"(value: byte)
get "pos"(): $BlockPos$MutableBlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleVoxmap$Cell$Type = ($SimpleVoxmap$Cell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleVoxmap$Cell_ = $SimpleVoxmap$Cell$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/cell/$CellKit" {
import {$Cell, $Cell$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$Cell"
import {$SimpleRegistry, $SimpleRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$SimpleRegistry"
import {$SimpleVoxmap, $SimpleVoxmap$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SimpleVoxmap"
import {$CellSolver, $CellSolver$Type} from "packages/com/ferreusveritas/dynamictrees/api/cell/$CellSolver"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $CellKit extends $RegistryEntry<($CellKit)> {
static readonly "NULL_CELL_SOLVER": $CellSolver
static readonly "NULL_CELL_KIT": $CellKit
static readonly "REGISTRY": $SimpleRegistry<($CellKit)>

constructor(arg0: $ResourceLocation$Type)

public "getDefaultHydration"(): integer
public "getLeafCluster"(): $SimpleVoxmap
public "getCellForLeaves"(arg0: integer): $Cell
public "getCellSolver"(): $CellSolver
public "getCellForBranch"(arg0: integer, arg1: integer): $Cell
get "defaultHydration"(): integer
get "leafCluster"(): $SimpleVoxmap
get "cellSolver"(): $CellSolver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CellKit$Type = ($CellKit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CellKit_ = $CellKit$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity$DestroyType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FallingTreeEntity$DestroyType extends $Enum<($FallingTreeEntity$DestroyType)> {
static readonly "VOID": $FallingTreeEntity$DestroyType
static readonly "HARVEST": $FallingTreeEntity$DestroyType
static readonly "BLAST": $FallingTreeEntity$DestroyType
static readonly "FIRE": $FallingTreeEntity$DestroyType
static readonly "ROOT": $FallingTreeEntity$DestroyType


public static "values"(): ($FallingTreeEntity$DestroyType)[]
public static "valueOf"(arg0: string): $FallingTreeEntity$DestroyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingTreeEntity$DestroyType$Type = (("harvest") | ("void") | ("root") | ("fire") | ("blast")) | ($FallingTreeEntity$DestroyType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FallingTreeEntity$DestroyType_ = $FallingTreeEntity$DestroyType$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/worldgen/$PoissonDiscProvider" {
import {$PoissonDisc, $PoissonDisc$Type} from "packages/com/ferreusveritas/dynamictrees/systems/poissondisc/$PoissonDisc"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $PoissonDiscProvider {

 "getPoissonDiscs"(arg0: integer, arg1: integer, arg2: integer): $List<($PoissonDisc)>
 "getChunkPoissonData"(arg0: integer, arg1: integer, arg2: integer): (byte)[]
 "unloadChunkPoissonData"(arg0: integer, arg1: integer, arg2: integer): void
 "setChunkPoissonData"(arg0: integer, arg1: integer, arg2: integer, arg3: (byte)[]): void
}

export namespace $PoissonDiscProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoissonDiscProvider$Type = ($PoissonDiscProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoissonDiscProvider_ = $PoissonDiscProvider$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeatureConfiguration" {
import {$GenFeature, $GenFeature$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature"
import {$TemplateRegistry, $TemplateRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$TemplateRegistry"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$GenFeature$Type, $GenFeature$Type$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/$GenFeature$Type"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenFeatureConfiguration extends $Configuration<($GenFeatureConfiguration), ($GenFeature)> {
static readonly "TEMPLATES": $TemplateRegistry<($GenFeatureConfiguration)>

constructor(arg0: $GenFeature$Type)

public "generate"<C extends $GenerationContext, R>(arg0: $GenFeature$Type$Type<(C), (R)>, arg1: C): R
public static "getNull"(): $GenFeatureConfiguration
public "getGenFeature"(): $GenFeature
public "shouldApply"(arg0: $Species$Type): boolean
get "null"(): $GenFeatureConfiguration
get "genFeature"(): $GenFeature
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenFeatureConfiguration$Type = ($GenFeatureConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenFeatureConfiguration_ = $GenFeatureConfiguration$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchConnectionData" {
import {$Connections, $Connections$Type} from "packages/com/ferreusveritas/dynamictrees/util/$Connections"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export class $BranchConnectionData {

constructor(arg0: $BlockState$Type, arg1: $Connections$Type)

public "getBlockState"(): $BlockState
public "getConnections"(): $Connections
get "blockState"(): $BlockState
get "connections"(): $Connections
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchConnectionData$Type = ($BranchConnectionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchConnectionData_ = $BranchConnectionData$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$SimpleMapper" {
import {$ThrowableFunction, $ThrowableFunction$Type} from "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableFunction"
import {$Result$Mapper, $Result$Mapper$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper"
import {$DeserialisationException, $DeserialisationException$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/$DeserialisationException"

export interface $Result$SimpleMapper<T, V> extends $ThrowableFunction<(T), (V), ($DeserialisationException)> {

 "fullMapper"(): $Result$Mapper<(T), (V)>
 "apply"(arg0: T): V

(): $Result$Mapper<(T), (V)>
}

export namespace $Result$SimpleMapper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Result$SimpleMapper$Type<T, V> = ($Result$SimpleMapper<(T), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Result$SimpleMapper_<T, V> = $Result$SimpleMapper$Type<(T), (V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configurable" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Configuration, $Configuration$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$Configuration"
import {$ConfigurationProperty, $ConfigurationProperty$Type} from "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty"

export interface $Configurable {

 "isPropertyRegistered"(arg0: $ConfigurationProperty$Type<(any)>): boolean
 "getRegisteredProperties"(): $Set<($ConfigurationProperty<(any)>)>
 "getDefaultConfiguration"(): $Configuration<(any), (any)>
}

export namespace $Configurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Configurable$Type = ($Configurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Configurable_ = $Configurable$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/tree/family/$Family" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockBounds, $BlockBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$AnimationHandler, $AnimationHandler$Type} from "packages/com/ferreusveritas/dynamictrees/entity/animation/$AnimationHandler"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BranchLoaderBuilder, $BranchLoaderBuilder$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$BranchLoaderBuilder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$FallingTreeEntity, $FallingTreeEntity$Type} from "packages/com/ferreusveritas/dynamictrees/entity/$FallingTreeEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Resettable, $Resettable$Type} from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import {$DTItemModelProvider, $DTItemModelProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTItemModelProvider"
import {$DTBlockStateProvider, $DTBlockStateProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTBlockStateProvider"
import {$Family$TreeActivationContext, $Family$TreeActivationContext$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$Family$TreeActivationContext"
import {$BlockModelBuilder, $BlockModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import {$SurfaceRootBlock, $SurfaceRootBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$SurfaceRootBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$DTLangProvider, $DTLangProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Family extends $RegistryEntry<($Family)> implements $Resettable<($Family)> {
static readonly "TYPE": $TypedRegistry$EntryType<($Family)>
static readonly "NULL_FAMILY": $Family
static readonly "REGISTRY": $TypedRegistry<($Family)>
 "woodRingColor": integer
 "woodBarkColor": integer
static readonly "BRANCH": string
static readonly "BRANCH_TOP": string
static readonly "STRIPPED_BRANCH": string
static readonly "STRIPPED_BRANCH_TOP": string
static readonly "ROOTS_SIDE": string
static readonly "ROOTS_TOP": string

constructor(arg0: $ResourceLocation$Type)

public "getProperties"(): $BlockBehaviour$Properties
public "setProperties"(arg0: $BlockBehaviour$Properties$Type): $Family
public "isCompatibleDynamicLeaves"(arg0: $Species$Type, arg1: $BlockState$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): boolean
public "getCommonLeaves"(): $LeavesProperties
public "getCommonSpecies"(): $Species
public "addSpecies"(arg0: $Species$Type): $Family
public "isThick"(): boolean
public "setMaxBranchRadius"(arg0: integer): void
public "getMaxBranchRadius"(): integer
public "isOnlyIfLoaded"(): boolean
public "setOnlyIfLoaded"(arg0: string): void
public "setModelOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "setLangOverrides"(arg0: $Map$Type<(string), (string)>): void
public "getModelPath"(arg0: string): $Optional<($ResourceLocation)>
public "getLangOverride"(arg0: string): $Optional<(string)>
public "getSpecies"(): $Set<($Species)>
public "onTreeActivated"(arg0: $Family$TreeActivationContext$Type): boolean
public "getRootColor"(arg0: $BlockState$Type, arg1: boolean): integer
public "setTextureOverrides"(arg0: $Map$Type<(string), ($ResourceLocation$Type)>): void
public "addGeneratedItemTags"(arg0: $Function$Type<($TagKey$Type<($Item$Type)>), ($IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type<($Item$Type)>)>): void
public "addGeneratedBlockTags"(arg0: $Function$Type<($TagKey$Type<($Block$Type)>), ($IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type<($Block$Type)>)>): void
public "getLootVolumeMultiplier"(): float
public "getNumberOfValidBranchBlocks"(): integer
public "getValidBranchBlock"(arg0: integer): $BranchBlock
public "getPrimaryThickness"(): integer
public "getSpeciesForLocation"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): $Species
public "getSpeciesForLocation"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Species$Type): $Species
public "setMinRadiusForStripping"(arg0: integer): void
public "setReduceRadiusWhenStripping"(arg0: boolean): void
public "reduceRadiusWhenStripping"(): boolean
public "setPrimaryThickness"(arg0: integer): void
public "getDefaultBranchProperties"(arg0: $MapColor$Type): $BlockBehaviour$Properties
public "getDefaultBranchMapColor"(): $MapColor
public "setPrimitiveStrippedLog"(arg0: $Block$Type): $Family
public "setSecondaryThickness"(arg0: integer): void
public "setHasStrippedBranch"(arg0: boolean): void
public "setLootVolumeMultiplier"(arg0: float): void
public "getBranchForRootsPlacement"(arg0: $LevelAccessor$Type, arg1: $Species$Type, arg2: $BlockPos$Type): $Optional<($BranchBlock)>
/**
 * 
 * @deprecated
 */
public "setHasConiferVariants"(arg0: boolean): void
public "getPrimitiveStrippedLog"(): $Optional<($Block)>
public "isCompatibleGenericLeaves"(arg0: $Species$Type, arg1: $BlockState$Type, arg2: $LevelAccessor$Type, arg3: $BlockPos$Type): boolean
public "getBranchItemParentLocation"(): $ResourceLocation
public "getSecondaryRootThickness"(): integer
public "getLogDropsForBranch"(arg0: float, arg1: integer): $List<($ItemStack)>
public "getRadiusForCellKit"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type, arg4: $BranchBlock$Type): integer
public "getMinRadiusForStripping"(): integer
public "getBranchBlockIndex"(arg0: $BranchBlock$Type): integer
public "getRootItemParentLocation"(): $ResourceLocation
public "getDefaultBranchHarvestTier"(): $Tier
public "getDefaultBranchSoundType"(): $SoundType
public "defaultStrippedBranchTags"(): $List<($TagKey<($Block)>)>
public "getPrimaryRootThickness"(): integer
public "isAcceptableSoilForRootSystem"(arg0: $BlockState$Type): boolean
public "getDefaultFlammable"(): boolean
public "expandLeavesBlockBounds"(arg0: $BlockBounds$Type): $BlockBounds
public "getBranchLoaderConstructor"(): $BiFunction<($BlockModelBuilder), ($ExistingFileHelper), ($BranchLoaderBuilder)>
public "defaultBranchItemTags"(): $List<($TagKey<($Item)>)>
public "setPrimitiveLog"(arg0: $Block$Type): $Family
public "setCommonLeaves"(arg0: $LeavesProperties$Type): void
public "setIsFireProof"(arg0: boolean): void
public "setBranchIsLadder"(arg0: boolean): void
public "setHasSurfaceRoot"(arg0: boolean): void
public "setStick"(arg0: $Item$Type): $Family
public "setMaxSignalDepth"(arg0: integer): void
public "hasSurfaceRoot"(): boolean
public "branchIsLadder"(): boolean
public "setupCommonSpecies"(arg0: $Species$Type): void
public "hasStrippedBranch"(): boolean
public "createSurfaceRoot"(): $Supplier<($SurfaceRootBlock)>
public "setCommonSpecies"(arg0: $Species$Type): void
public "createBranchItem"(arg0: $ResourceLocation$Type, arg1: $Supplier$Type<($BranchBlock$Type)>): $Supplier<($BlockItem)>
public "canStripBranch"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $ItemStack$Type): boolean
public "stripBranch"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $ItemStack$Type): boolean
public "getPrimitiveLog"(): $Optional<($Block)>
public "getBranchItem"(): $Optional<($Item)>
/**
 * 
 * @deprecated
 */
public "getBranchSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "isWood"(): boolean
public "getStrippedBranch"(): $Optional<($BranchBlock)>
public "addValidBranches"(...arg0: ($BranchBlock$Type)[]): void
public "isValidBranchBlock"(arg0: $BranchBlock$Type): boolean
public "getMaxSignalDepth"(): integer
public "getSurfaceRoot"(): $Optional<($SurfaceRootBlock)>
public "defaultBranchTags"(): $List<($TagKey<($Block)>)>
public "addBranchTextures"(arg0: $BiConsumer$Type<(string), ($ResourceLocation$Type)>, arg1: $ResourceLocation$Type, arg2: $Block$Type): void
public "addRootTextures"(arg0: $BiConsumer$Type<(string), ($ResourceLocation$Type)>, arg1: $ResourceLocation$Type): void
public "generateItemModelData"(arg0: $DTItemModelProvider$Type): void
public "getBranchForPlacement"(arg0: $LevelAccessor$Type, arg1: $Species$Type, arg2: $BlockPos$Type): $Optional<($BranchBlock)>
public "getSecondaryThickness"(): integer
public "toLoadDataString"(): string
public "generateLangData"(arg0: $DTLangProvider$Type): void
public "generateStateData"(arg0: $DTBlockStateProvider$Type): void
public "toReloadDataString"(): string
public "getStick"(arg0: integer): $ItemStack
public "isFireProof"(): boolean
public "getBranch"(): $Optional<($BranchBlock)>
public "selectAnimationHandler"(arg0: $FallingTreeEntity$Type): $AnimationHandler
public "getDefaultStrippedBranchHarvestTier"(): $Tier
public "setupBlocks"(): void
public "getTexturePath"(arg0: string): $Optional<($ResourceLocation)>
public "reset"(): $Family
public "setPostReloadDefaults"(): $Family
public "setPreReloadDefaults"(): $Family
get "properties"(): $BlockBehaviour$Properties
set "properties"(value: $BlockBehaviour$Properties$Type)
get "commonLeaves"(): $LeavesProperties
get "commonSpecies"(): $Species
get "thick"(): boolean
set "maxBranchRadius"(value: integer)
get "maxBranchRadius"(): integer
get "onlyIfLoaded"(): boolean
set "onlyIfLoaded"(value: string)
set "modelOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
set "langOverrides"(value: $Map$Type<(string), (string)>)
get "species"(): $Set<($Species)>
set "textureOverrides"(value: $Map$Type<(string), ($ResourceLocation$Type)>)
get "lootVolumeMultiplier"(): float
get "numberOfValidBranchBlocks"(): integer
get "primaryThickness"(): integer
set "minRadiusForStripping"(value: integer)
set "primaryThickness"(value: integer)
get "defaultBranchMapColor"(): $MapColor
set "primitiveStrippedLog"(value: $Block$Type)
set "secondaryThickness"(value: integer)
set "lootVolumeMultiplier"(value: float)
set "hasConiferVariants"(value: boolean)
get "primitiveStrippedLog"(): $Optional<($Block)>
get "branchItemParentLocation"(): $ResourceLocation
get "secondaryRootThickness"(): integer
get "minRadiusForStripping"(): integer
get "rootItemParentLocation"(): $ResourceLocation
get "defaultBranchHarvestTier"(): $Tier
get "defaultBranchSoundType"(): $SoundType
get "primaryRootThickness"(): integer
get "defaultFlammable"(): boolean
get "branchLoaderConstructor"(): $BiFunction<($BlockModelBuilder), ($ExistingFileHelper), ($BranchLoaderBuilder)>
set "primitiveLog"(value: $Block$Type)
set "commonLeaves"(value: $LeavesProperties$Type)
set "stick"(value: $Item$Type)
set "maxSignalDepth"(value: integer)
set "upCommonSpecies"(value: $Species$Type)
set "commonSpecies"(value: $Species$Type)
get "primitiveLog"(): $Optional<($Block)>
get "branchItem"(): $Optional<($Item)>
get "wood"(): boolean
get "strippedBranch"(): $Optional<($BranchBlock)>
get "maxSignalDepth"(): integer
get "surfaceRoot"(): $Optional<($SurfaceRootBlock)>
get "secondaryThickness"(): integer
get "fireProof"(): boolean
get "branch"(): $Optional<($BranchBlock)>
get "defaultStrippedBranchHarvestTier"(): $Tier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Family$Type = ($Family);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Family_ = $Family$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$BlockWithDynamicHardness" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $BlockWithDynamicHardness extends $Block {
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

public "getHardness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "hasTileEntity"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockWithDynamicHardness$Type = ($BlockWithDynamicHardness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockWithDynamicHardness_ = $BlockWithDynamicHardness$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties$AgeingConfiguration" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $LeavesProperties$AgeingConfiguration extends $Enum<($LeavesProperties$AgeingConfiguration)> {
static readonly "ALWAYS": $LeavesProperties$AgeingConfiguration
static readonly "WORLDGEN_ONLY": $LeavesProperties$AgeingConfiguration
static readonly "GROWTH_ONLY": $LeavesProperties$AgeingConfiguration
static readonly "NEVER": $LeavesProperties$AgeingConfiguration


public static "values"(): ($LeavesProperties$AgeingConfiguration)[]
public static "valueOf"(arg0: string): $LeavesProperties$AgeingConfiguration
public "shouldAge"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeavesProperties$AgeingConfiguration$Type = (("always") | ("never") | ("worldgen_only") | ("growth_only")) | ($LeavesProperties$AgeingConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeavesProperties$AgeingConfiguration_ = $LeavesProperties$AgeingConfiguration$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$DendroBrewingRecipe" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IBrewingRecipe, $IBrewingRecipe$Type} from "packages/net/minecraftforge/common/brewing/$IBrewingRecipe"

export class $DendroBrewingRecipe extends $Record implements $IBrewingRecipe {

constructor(input: $ItemStack$Type, ingredient: $ItemStack$Type, output: $ItemStack$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "input"(): $ItemStack
public "output"(): $ItemStack
public "getOutput"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
public "isIngredient"(arg0: $ItemStack$Type): boolean
public "isInput"(arg0: $ItemStack$Type): boolean
public "ingredient"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DendroBrewingRecipe$Type = ($DendroBrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DendroBrewingRecipe_ = $DendroBrewingRecipe$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$AerialRootsSoilProperties" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$MangroveFamily, $MangroveFamily$Type} from "packages/com/ferreusveritas/dynamictrees/tree/family/$MangroveFamily"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$SoilProperties, $SoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AerialRootsSoilProperties extends $SoilProperties {
static readonly "TYPE": $TypedRegistry$EntryType<($SoilProperties)>
static readonly "CODEC": $Codec<($SoilProperties)>
static readonly "NULL_SOIL_PROPERTIES": $SoilProperties
static readonly "REGISTRY": $TypedRegistry<($SoilProperties)>
static readonly "ROOTS": string
static readonly "SOIL_BLOCK": string

constructor(arg0: $ResourceLocation$Type)

public "getFamily"(): $MangroveFamily
public "setFamily"(arg0: $MangroveFamily$Type): void
public static "updateRadius"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: integer): integer
public static "updateRadius"(arg0: $LevelAccessor$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: integer, arg4: boolean): integer
public "defaultSoilBlockTags"(): $List<($TagKey<($Block)>)>
public "getSoilState"(arg0: $BlockState$Type, arg1: integer, arg2: boolean): $BlockState
get "family"(): $MangroveFamily
set "family"(value: $MangroveFamily$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AerialRootsSoilProperties$Type = ($AerialRootsSoilProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AerialRootsSoilProperties_ = $AerialRootsSoilProperties$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$LevelContext, $LevelContext$Type} from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $GenerationContext {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Species$Type)

public "pos"(): $BlockPos
public "random"(): $RandomSource
public "level"(): $LevelAccessor
public "species"(): $Species
public "levelContext"(): $LevelContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenerationContext$Type = ($GenerationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenerationContext_ = $GenerationContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $GrowableBlock$Info {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrowableBlock$Info$Type = ($GrowableBlock$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GrowableBlock$Info_ = $GrowableBlock$Info$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/rooty/$SpreadableSoilProperties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$SoilProperties, $SoilProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/rooty/$SoilProperties"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SpreadableSoilProperties extends $SoilProperties {
static readonly "TYPE": $TypedRegistry$EntryType<($SoilProperties)>
static readonly "CODEC": $Codec<($SoilProperties)>
static readonly "NULL_SOIL_PROPERTIES": $SoilProperties
static readonly "REGISTRY": $TypedRegistry<($SoilProperties)>
static readonly "ROOTS": string
static readonly "SOIL_BLOCK": string

constructor(arg0: $ResourceLocation$Type)

public "setRequiredLight"(arg0: integer): void
public "setSpreadItem"(arg0: $Item$Type): void
public "addSpreadableSoils"(...arg0: ($SoilProperties$Type)[]): void
public "addSpreadableSoils"(...arg0: ($Block$Type)[]): void
set "requiredLight"(value: integer)
set "spreadItem"(value: $Item$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpreadableSoilProperties$Type = ($SpreadableSoilProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpreadableSoilProperties_ = $SpreadableSoilProperties$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$PodBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Pod, $Pod$Type} from "packages/com/ferreusveritas/dynamictrees/systems/pod/$Pod"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GrowableBlock, $GrowableBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $PodBlock extends $HorizontalDirectionalBlock implements $BonemealableBlock, $GrowableBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Pod$Type)

public "isSupported"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): boolean
public "getMaxAge"(): integer
public "getAge"(arg0: $BlockState$Type): integer
public "performMatureAction"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "doTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "tickMature"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getAgeAsPercentage"(arg0: $BlockState$Type): float
public "drop"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "rot"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
get "maxAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PodBlock$Type = ($PodBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PodBlock_ = $PodBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$ThickBranchBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ThickBranchBlock$ReplaceableState, $ThickBranchBlock$ReplaceableState$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$ThickBranchBlock$ReplaceableState"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TrunkShellBlock, $TrunkShellBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$TrunkShellBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StateDefinition$Builder, $StateDefinition$Builder$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition$Builder"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$Musable, $Musable$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$Musable"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DynamicTrees$DestroyMode, $DynamicTrees$DestroyMode$Type} from "packages/com/ferreusveritas/dynamictrees/$DynamicTrees$DestroyMode"
import {$BasicBranchBlock, $BasicBranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BasicBranchBlock"

export class $ThickBranchBlock extends $BasicBranchBlock implements $Musable {
static readonly "MAX_RADIUS_THICK": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "MAX_RADIUS": integer
static readonly "NAME_SUFFIX": string
static "destroyMode": $DynamicTrees$DestroyMode
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

constructor(arg0: $ResourceLocation$Type, arg1: $MapColor$Type)
constructor(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type)

public "setRadius"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: integer, arg3: $Direction$Type, arg4: integer): integer
public "isMusable"(arg0: $BlockGetter$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getRadiusForConnection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BranchBlock$Type, arg4: $Direction$Type, arg5: integer): integer
public "getRadius"(arg0: $BlockState$Type): integer
public "createBlockStateDefinition"(arg0: $StateDefinition$Builder$Type<($Block$Type), ($BlockState$Type)>): void
public "getMaxRadius"(): integer
public "getReplaceability"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): $ThickBranchBlock$ReplaceableState
public "getTrunkShell"(): $TrunkShellBlock
get "maxRadius"(): integer
get "trunkShell"(): $TrunkShellBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThickBranchBlock$Type = ($ThickBranchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThickBranchBlock_ = $ThickBranchBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/$DynamicSaplingBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"

export class $DynamicSaplingBlock extends $Block implements $BonemealableBlock, $IPlantable {
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

constructor(arg0: $Species$Type)

public static "canSaplingStay"(arg0: $LevelReader$Type, arg1: $Species$Type, arg2: $BlockPos$Type): boolean
public "getSpecies"(): $Species
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "getPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
public "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
get "species"(): $Species
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicSaplingBlock$Type = ($DynamicSaplingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DynamicSaplingBlock_ = $DynamicSaplingBlock$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/block/branch/$TrunkShellBlock$ShellMuse" {
import {$CoordUtils$Surround, $CoordUtils$Surround$Type} from "packages/com/ferreusveritas/dynamictrees/util/$CoordUtils$Surround"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrunkShellBlock$ShellMuse {
readonly "state": $BlockState
readonly "pos": $BlockPos
readonly "museOffset": $BlockPos
readonly "dir": $CoordUtils$Surround

constructor(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: $CoordUtils$Surround$Type, arg3: $BlockPos$Type)

public "getRadius"(): integer
get "radius"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrunkShellBlock$ShellMuse$Type = ($TrunkShellBlock$ShellMuse);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrunkShellBlock$ShellMuse_ = $TrunkShellBlock$ShellMuse$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BranchBlock$ItemStackPos, $BranchBlock$ItemStackPos$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock$ItemStackPos"
import {$BranchConnectionData, $BranchConnectionData$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchConnectionData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockBounds, $BlockBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BlockBounds"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$BranchDestructionData$PosType, $BranchDestructionData$PosType$Type} from "packages/com/ferreusveritas/dynamictrees/util/$BranchDestructionData$PosType"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$LeavesProperties, $LeavesProperties$Type} from "packages/com/ferreusveritas/dynamictrees/block/leaves/$LeavesProperties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$NetVolumeNode$Volume, $NetVolumeNode$Volume$Type} from "packages/com/ferreusveritas/dynamictrees/systems/nodemapper/$NetVolumeNode$Volume"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BranchDestructionData {
readonly "species": $Species
readonly "destroyedBranchesRadiusPosition": (integer)[]
readonly "destroyedBranchesConnections": (integer)[]
readonly "destroyedBranchesBlockIndex": (integer)[]
readonly "destroyedLeaves": (integer)[]
readonly "destroyedLeavesBlockIndex": (integer)[]
readonly "leavesDrops": $List<($BranchBlock$ItemStackPos)>
readonly "endPoints": (integer)[]
readonly "woodVolume": $NetVolumeNode$Volume
readonly "cutDir": $Direction
readonly "toolDir": $Direction
readonly "cutPos": $BlockPos
readonly "basePos": $BlockPos
readonly "trunkHeight": integer
static readonly "bounds": $BlockBounds

constructor(arg0: $CompoundTag$Type)
constructor(arg0: $Species$Type, arg1: $Map$Type<($BlockPos$Type), ($BranchConnectionData$Type)>, arg2: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $List$Type<($BranchBlock$ItemStackPos$Type)>, arg4: $List$Type<($BlockPos$Type)>, arg5: $NetVolumeNode$Volume$Type, arg6: $BlockPos$Type, arg7: $Direction$Type, arg8: $Direction$Type, arg9: integer)
constructor(arg0: $Species$Type, arg1: $Map$Type<($BlockPos$Type), ($BranchConnectionData$Type)>, arg2: $Map$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $List$Type<($BranchBlock$ItemStackPos$Type)>, arg4: $List$Type<($BlockPos$Type)>, arg5: $NetVolumeNode$Volume$Type, arg6: $BlockPos$Type, arg7: $BlockPos$Type, arg8: $Direction$Type, arg9: $Direction$Type, arg10: integer)
constructor()

public "merge"(arg0: $BranchDestructionData$Type): $BranchDestructionData
public "getEndPointRelPos"(arg0: integer): $BlockPos
public "getLeavesRelPos"(arg0: integer): $BlockPos
public "getNumLeaves"(): integer
public "getNumEndpoints"(): integer
public static "decodeRelPos"(arg0: integer): $BlockPos
public "getNumBranches"(): integer
public static "encodeRelBlockPos"(arg0: $BlockPos$Type): integer
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "getLeavesProperties"(arg0: integer): $LeavesProperties
public "getConnections"(arg0: integer, arg1: (integer)[]): void
public "getBranchRelPos"(arg0: integer): $BlockPos
public "getBranchRadius"(arg0: integer): integer
public "getPositions"(arg0: $BranchDestructionData$PosType$Type): $Iterable<($BlockPos)>
public "getPositions"(arg0: $BranchDestructionData$PosType$Type, arg1: boolean): $Iterable<($BlockPos)>
public "getRelativeCutPos"(): $BlockPos
public "getLeavesHydro"(arg0: integer): integer
public "getBranchBlockState"(arg0: integer): $BlockState
public "getLeavesBlockState"(arg0: integer): $BlockState
get "numLeaves"(): integer
get "numEndpoints"(): integer
get "numBranches"(): integer
get "relativeCutPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BranchDestructionData$Type = ($BranchDestructionData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BranchDestructionData_ = $BranchDestructionData$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$MappedResult" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Result$SimpleMapper, $Result$SimpleMapper$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$SimpleMapper"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Result$Mapper, $Result$Mapper$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result$Mapper"
import {$Result, $Result$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result"

export interface $MappedResult<T, I> extends $Result<(T), (I)> {

 "elseMapIfType"<V>(arg0: $Class$Type<(V)>, arg1: $Result$SimpleMapper$Type<(V), (T)>): $MappedResult<(T), (I)>
 "elseMapIfType"<V>(arg0: $Class$Type<(V)>, arg1: $Result$Mapper$Type<(V), (T)>): $MappedResult<(T), (I)>
 "elseTypeError"(): $MappedResult<(T), (I)>
 "elseError"(arg0: $Predicate$Type<(T)>, arg1: string): $MappedResult<(T), (I)>
 "elseMapIfContains"<V>(arg0: string, arg1: $Class$Type<(V)>, arg2: $Result$SimpleMapper$Type<(V), (T)>, arg3: T): $MappedResult<(T), (I)>
 "elseMapIfContains"<V>(arg0: string, arg1: $Class$Type<(V)>, arg2: $Result$SimpleMapper$Type<(V), (T)>): $MappedResult<(T), (I)>
 "elseMapIfContains"<V>(arg0: string, arg1: $Class$Type<(V)>, arg2: $Result$Mapper$Type<(V), (T)>, arg3: T): $MappedResult<(T), (I)>
 "elseMapIfContains"<V>(arg0: string, arg1: $Class$Type<(V)>, arg2: $Result$Mapper$Type<(V), (T)>): $MappedResult<(T), (I)>
 "get"(): T
 "map"<V>(arg0: $Result$Mapper$Type<(T), (V)>, arg1: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$Mapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$SimpleMapper$Type<(T), (V)>, arg1: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$SimpleMapper$Type<(T), (V)>, arg1: $Predicate$Type<(V)>, arg2: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$Mapper$Type<(T), (V)>, arg1: $Predicate$Type<(V)>, arg2: string): $MappedResult<(V), (I)>
 "map"<V>(arg0: $Result$SimpleMapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "orElse"(arg0: T, arg1: $Consumer$Type<(string)>, arg2: $Consumer$Type<(string)>): T
 "orElse"(arg0: T): T
 "orElseThrow"(): T
 "orElseGet"(arg0: $Supplier$Type<(T)>): T
 "success"(): boolean
 "getInput"(): I
 "getError"(): string
 "ifSuccessOrElseThrow"(arg0: $Consumer$Type<(T)>, arg1: $Consumer$Type<(string)>): $Result<(T), (I)>
 "orElseApply"(arg0: $Function$Type<(string), (T)>, arg1: $BiConsumer$Type<(T), ($List$Type<(string)>)>, arg2: T): T
 "orElseApply"(arg0: $Function$Type<(string), (T)>, arg1: T): T
 "mapToListOfType"<E>(arg0: $Class$Type<(E)>): $MappedResult<($List<(E)>), (I)>
 "getWarnings"(): $List<(string)>
 "forEachWarning"(arg0: $Consumer$Type<(string)>): $Result<(T), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$Mapper$Type<(E), (V)>, arg3: V): $MappedResult<(V), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$SimpleMapper$Type<(E), (V)>): $MappedResult<(V), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$Mapper$Type<(E), (V)>): $MappedResult<(V), (I)>
 "mapIfContains"<E, V>(arg0: string, arg1: $Class$Type<(E)>, arg2: $Result$SimpleMapper$Type<(E), (V)>, arg3: V): $MappedResult<(V), (I)>
 "ifSuccessOrElse"(arg0: $Consumer$Type<(T)>, arg1: $Consumer$Type<(string)>, arg2: $Consumer$Type<(string)>): $Result<(T), (I)>
 "ifSuccess"(arg0: $Consumer$Type<(T)>): $Result<(T), (I)>
 "removeError"(): $Result<(T), (I)>
 "mapIfValid"<V>(arg0: $Predicate$Type<(T)>, arg1: string, arg2: $Result$Mapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "mapIfValid"<V>(arg0: $Predicate$Type<(T)>, arg1: string, arg2: $Result$SimpleMapper$Type<(T), (V)>): $MappedResult<(V), (I)>
 "mapEachIfArray"<V, E>(arg0: $Class$Type<(V)>, arg1: $Result$Mapper$Type<(V), (E)>): $MappedResult<($List<(E)>), (I)>
 "mapEachIfArray"<V, E>(arg0: $Class$Type<(V)>, arg1: $Result$SimpleMapper$Type<(V), (E)>): $MappedResult<($List<(E)>), (I)>
 "mapIfType"<V, N>(arg0: $Class$Type<(V)>, arg1: $Result$SimpleMapper$Type<(V), (N)>): $MappedResult<(N), (I)>
 "mapIfType"<V, N>(arg0: $Class$Type<(V)>, arg1: $Result$Mapper$Type<(V), (N)>): $MappedResult<(N), (I)>
}

export namespace $MappedResult {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MappedResult$Type<T, I> = ($MappedResult<(T), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MappedResult_<T, I> = $MappedResult$Type<(T), (I)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$Dependencies" {
import {$Generator$DependencyKey, $Generator$DependencyKey$Type} from "packages/com/ferreusveritas/dynamictrees/api/data/$Generator$DependencyKey"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $Generator$Dependencies {

constructor()

public "get"<T>(arg0: $Generator$DependencyKey$Type<(T)>): T
public "append"<T>(arg0: $Generator$DependencyKey$Type<(T)>, arg1: $Optional$Type<(T)>): $Generator$Dependencies
public "appendValue"<T>(arg0: $Generator$DependencyKey$Type<(T)>, arg1: T): $Generator$Dependencies
public "getOptional"<T>(arg0: $Generator$DependencyKey$Type<(T)>): $Optional<(T)>
public "allRequiredPresent"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Generator$Dependencies$Type = ($Generator$Dependencies);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Generator$Dependencies_ = $Generator$Dependencies$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/tree/$Resettable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Resettable<T extends $Resettable<(T)>> {

 "reset"(): T
 "setPostReloadDefaults"(): T
 "setPreReloadDefaults"(): T
}

export namespace $Resettable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Resettable$Type<T> = ($Resettable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Resettable_<T> = $Resettable$Type<(T)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/function/$BiomePredicate" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"

export interface $BiomePredicate extends $Predicate<($Holder<($Biome)>)> {

 "test"(arg0: $Holder$Type<($Biome$Type)>): boolean
 "or"(arg0: $Predicate$Type<(any)>): $Predicate<($Holder<($Biome)>)>
 "negate"(): $Predicate<($Holder<($Biome)>)>
 "and"(arg0: $Predicate$Type<(any)>): $Predicate<($Holder<($Biome)>)>

(arg0: $Holder$Type<($Biome$Type)>): boolean
}

export namespace $BiomePredicate {
function not<T>(arg0: $Predicate$Type<(any)>): $Predicate<($Holder<($Biome)>)>
function isEqual<T>(arg0: any): $Predicate<($Holder<($Biome)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomePredicate$Type = ($BiomePredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomePredicate_ = $BiomePredicate$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/function/$ThrowableFunction" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"

export interface $ThrowableFunction<I, R, T extends $Throwable> {

 "apply"(arg0: I): R

(arg0: I): R
}

export namespace $ThrowableFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowableFunction$Type<I, R, T> = ($ThrowableFunction<(I), (R), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThrowableFunction_<I, R, T> = $ThrowableFunction$Type<(I), (R), (T)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$PostGenerationContext" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$GenerationContext, $GenerationContext$Type} from "packages/com/ferreusveritas/dynamictrees/worldgen/$GenerationContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$SafeChunkBounds, $SafeChunkBounds$Type} from "packages/com/ferreusveritas/dynamictrees/util/$SafeChunkBounds"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$GenerationContext as $GenerationContext$0, $GenerationContext$Type as $GenerationContext$0$Type} from "packages/com/ferreusveritas/dynamictrees/systems/genfeature/context/$GenerationContext"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PostGenerationContext extends $GenerationContext$0 {

constructor(arg0: $GenerationContext$Type, arg1: $List$Type<($BlockPos$Type)>, arg2: $BlockState$Type)

public "bounds"(): $SafeChunkBounds
public "fruitProductionFactor"(): float
public "radius"(): integer
public "endPoints"(): $List<($BlockPos)>
public "seasonValue"(): float
public "originPos"(): $BlockPos
public "biome"(): $Holder<($Biome)>
public "initialDirtState"(): $BlockState
public "isWorldGen"(): boolean
get "worldGen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostGenerationContext$Type = ($PostGenerationContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PostGenerationContext_ = $PostGenerationContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/systems/fruit/$Fruit" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Resettable, $Resettable$Type} from "packages/com/ferreusveritas/dynamictrees/tree/$Resettable"
import {$TypedRegistry$EntryType, $TypedRegistry$EntryType$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType"
import {$FruitBlock, $FruitBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/$FruitBlock"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LevelContext, $LevelContext$Type} from "packages/com/ferreusveritas/dynamictrees/util/$LevelContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"
import {$GrowableBlock$Info, $GrowableBlock$Info$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$Info"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GrowableBlock$MatureAction, $GrowableBlock$MatureAction$Type} from "packages/com/ferreusveritas/dynamictrees/block/$GrowableBlock$MatureAction"

export class $Fruit extends $RegistryEntry<($Fruit)> implements $Resettable<($Fruit)> {
static readonly "TYPE": $TypedRegistry$EntryType<($Fruit)>
static readonly "NULL": $Fruit
static readonly "REGISTRY": $TypedRegistry<($Fruit)>

constructor(arg0: $ResourceLocation$Type)

public "reset"(): $Fruit
public "getBlock"(): $FruitBlock
public "setMaxAge"(arg0: integer): void
public "getMaxAge"(): integer
public "place"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: float): void
public "shouldGenerateBlockDrops"(): boolean
public "performMatureAction"(arg0: $GrowableBlock$Info$Type): void
public "setMinProductionFactor"(arg0: float): void
public "getFlowerHoldPeriodLength"(): float
public "setFlowerHoldPeriodLength"(arg0: float): void
public "placeDuringWorldGen"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: float): void
public "getMinProductionFactor"(): float
public "isInFlowerHoldPeriod"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: float): boolean
public "getDefaultBlockProperties"(arg0: $MapColor$Type): $BlockBehaviour$Properties
public "getDefaultBlockProperties"(): $BlockBehaviour$Properties
public "getItemStack"(): $ItemStack
public "setItemStack"(arg0: $ItemStack$Type): void
public "createBlockDrops"(): $LootTable$Builder
public "seasonalFruitProductionFactor"(arg0: $LevelContext$Type, arg1: $BlockPos$Type): float
public "setDropCount"(arg0: integer): void
public "getBlockShape"(arg0: integer): $VoxelShape
public "setBlockShapes"(arg0: ($VoxelShape$Type)[]): void
public "getGrowthChance"(): float
public "setGrowthChance"(arg0: float): void
public "setMaxDropCount"(arg0: integer): void
public "canBoneMeal"(): boolean
public "isOutOfSeason"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "setCanBoneMeal"(arg0: boolean): void
public "getAgeProperty"(): $IntegerProperty
public "setMinDropCount"(arg0: integer): void
public "getSeasonOffset"(): float
public "getMatureAction"(): $GrowableBlock$MatureAction
public "getBlockDropsPath"(): $ResourceLocation
public "setMatureAction"(arg0: $GrowableBlock$MatureAction$Type): void
public "setSeasonOffset"(arg0: float): void
public "getDefaultMapColor"(): $MapColor
public "createBlock"(arg0: $ResourceLocation$Type, arg1: $BlockBehaviour$Properties$Type): void
public "setPostReloadDefaults"(): $Fruit
public "setPreReloadDefaults"(): $Fruit
get "block"(): $FruitBlock
set "maxAge"(value: integer)
get "maxAge"(): integer
set "minProductionFactor"(value: float)
get "flowerHoldPeriodLength"(): float
set "flowerHoldPeriodLength"(value: float)
get "minProductionFactor"(): float
get "defaultBlockProperties"(): $BlockBehaviour$Properties
get "itemStack"(): $ItemStack
set "itemStack"(value: $ItemStack$Type)
set "dropCount"(value: integer)
set "blockShapes"(value: ($VoxelShape$Type)[])
get "growthChance"(): float
set "growthChance"(value: float)
set "maxDropCount"(value: integer)
get "ageProperty"(): $IntegerProperty
set "minDropCount"(value: integer)
get "seasonOffset"(): float
get "matureAction"(): $GrowableBlock$MatureAction
get "blockDropsPath"(): $ResourceLocation
set "matureAction"(value: $GrowableBlock$MatureAction$Type)
set "seasonOffset"(value: float)
get "defaultMapColor"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Fruit$Type = ($Fruit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Fruit_ = $Fruit$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/data/provider/$DTLangProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Registry, $Registry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$Registry"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DTDataProvider, $DTDataProvider$Type} from "packages/com/ferreusveritas/dynamictrees/data/provider/$DTDataProvider"
import {$LanguageProvider, $LanguageProvider$Type} from "packages/net/minecraftforge/common/data/$LanguageProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $DTLangProvider extends $LanguageProvider implements $DTDataProvider {

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $Collection$Type<($Registry$Type<(any)>)>)

public "block"(arg0: $ResourceLocation$Type): $ResourceLocation
public "item"(arg0: $ResourceLocation$Type): $ResourceLocation
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DTLangProvider$Type = ($DTLangProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DTLangProvider_ = $DTLangProvider$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/item/$DendroPotion" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DendroBrewingRecipe, $DendroBrewingRecipe$Type} from "packages/com/ferreusveritas/dynamictrees/util/$DendroBrewingRecipe"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Emptiable, $Emptiable$Type} from "packages/com/ferreusveritas/dynamictrees/api/substance/$Emptiable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$SubstanceEffectProvider, $SubstanceEffectProvider$Type} from "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffectProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DendroPotion$DendroPotionType, $DendroPotion$DendroPotionType$Type} from "packages/com/ferreusveritas/dynamictrees/item/$DendroPotion$DendroPotionType"
import {$SubstanceEffect, $SubstanceEffect$Type} from "packages/com/ferreusveritas/dynamictrees/api/substance/$SubstanceEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DendroPotion extends $Item implements $SubstanceEffectProvider, $Emptiable {
static readonly "brewingRecipes": $List<($DendroBrewingRecipe)>
static readonly "INDEX_TAG_KEY": string
static readonly "TREE_TAG_KEY": string
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

public "getColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "registerRecipes"(): void
public static "applyIndexTag"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "getTargetSpecies"(arg0: $ItemStack$Type): $Species
public "getSubstanceEffect"(arg0: $ItemStack$Type): $SubstanceEffect
public "setTargetSpecies"(arg0: $ItemStack$Type, arg1: $Species$Type): $ItemStack
public static "getPotionType"(arg0: $ItemStack$Type): $DendroPotion$DendroPotionType
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getEmptyContainer"(): $ItemStack
public "getDescriptionId"(arg0: $ItemStack$Type): string
get "emptyContainer"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DendroPotion$Type = ($DendroPotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DendroPotion_ = $DendroPotion$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry$EntryType" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TypedRegistry, $TypedRegistry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$TypedRegistry"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/ferreusveritas/dynamictrees/api/registry/$RegistryEntry"

export class $TypedRegistry$EntryType<V extends $RegistryEntry<(V)>> {

constructor(arg0: $Codec$Type<(V)>)

public "decode"(arg0: $JsonObject$Type): V
public "getCodec"(): $Codec<(V)>
public "setRegistry"(arg0: $TypedRegistry$Type<(V)>): $TypedRegistry$EntryType<(V)>
get "codec"(): $Codec<(V)>
set "registry"(value: $TypedRegistry$Type<(V)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TypedRegistry$EntryType$Type<V> = ($TypedRegistry$EntryType<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TypedRegistry$EntryType_<V> = $TypedRegistry$EntryType$Type<(V)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$DirectionSelectionContext" {
import {$GrowSignal, $GrowSignal$Type} from "packages/com/ferreusveritas/dynamictrees/systems/$GrowSignal"
import {$PositionalSpeciesContext, $PositionalSpeciesContext$Type} from "packages/com/ferreusveritas/dynamictrees/growthlogic/context/$PositionalSpeciesContext"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BranchBlock, $BranchBlock$Type} from "packages/com/ferreusveritas/dynamictrees/block/branch/$BranchBlock"
import {$Species, $Species$Type} from "packages/com/ferreusveritas/dynamictrees/tree/species/$Species"

export class $DirectionSelectionContext extends $PositionalSpeciesContext {

constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Species$Type, arg3: $BranchBlock$Type, arg4: $GrowSignal$Type)

public "branch"(): $BranchBlock
public "signal"(): $GrowSignal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DirectionSelectionContext$Type = ($DirectionSelectionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DirectionSelectionContext_ = $DirectionSelectionContext$Type;
}}
declare module "packages/com/ferreusveritas/dynamictreesplus/systems/nodemapper/$MushroomInflatorNode" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$NodeInspector, $NodeInspector$Type} from "packages/com/ferreusveritas/dynamictrees/api/network/$NodeInspector"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$HugeMushroomSpecies, $HugeMushroomSpecies$Type} from "packages/com/ferreusveritas/dynamictreesplus/tree/$HugeMushroomSpecies"
import {$Pair, $Pair$Type} from "packages/oshi/util/tuples/$Pair"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MushroomInflatorNode implements $NodeInspector {

constructor(arg0: $HugeMushroomSpecies$Type, arg1: $List$Type<($Pair$Type<($BlockPos$Type), (integer)>)>, arg2: integer, arg3: $BlockPos$Type)

public "run"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "returnRun"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MushroomInflatorNode$Type = ($MushroomInflatorNode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MushroomInflatorNode_ = $MushroomInflatorNode$Type;
}}
declare module "packages/com/ferreusveritas/dynamictrees/api/configuration/$ConfigurationProperty" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Result, $Result$Type} from "packages/com/ferreusveritas/dynamictrees/deserialisation/result/$Result"

export class $ConfigurationProperty<T> {
static readonly "NULL": $ConfigurationProperty<(any)>


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getKey"(): string
public "getType"(): $Class<(T)>
public static "block"(arg0: string): $ConfigurationProperty<($Block)>
public static "string"(arg0: string): $ConfigurationProperty<(string)>
public static "integer"(arg0: string): $ConfigurationProperty<(integer)>
public static "item"(arg0: string): $ConfigurationProperty<($Item)>
public static "property"<T>(arg0: string, arg1: $Class$Type<(T)>): $ConfigurationProperty<(T)>
public static "bool"(arg0: string): $ConfigurationProperty<(boolean)>
public "deserialise"(arg0: $JsonObject$Type): $Optional<($Result<(T), ($JsonElement)>)>
public static "longProperty"(arg0: string): $ConfigurationProperty<(long)>
public static "doubleProperty"(arg0: string): $ConfigurationProperty<(float)>
public static "floatProperty"(arg0: string): $ConfigurationProperty<(float)>
get "key"(): string
get "type"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationProperty$Type<T> = ($ConfigurationProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurationProperty_<T> = $ConfigurationProperty$Type<(T)>;
}}
declare module "packages/com/ferreusveritas/dynamictrees/util/function/$CanGrowPredicate" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $CanGrowPredicate extends $BiPredicate<($LevelAccessor), ($BlockPos)> {

 "test"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
 "or"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($LevelAccessor), ($BlockPos)>
 "negate"(): $BiPredicate<($LevelAccessor), ($BlockPos)>
 "and"(arg0: $BiPredicate$Type<(any), (any)>): $BiPredicate<($LevelAccessor), ($BlockPos)>

(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): boolean
}

export namespace $CanGrowPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanGrowPredicate$Type = ($CanGrowPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanGrowPredicate_ = $CanGrowPredicate$Type;
}}
