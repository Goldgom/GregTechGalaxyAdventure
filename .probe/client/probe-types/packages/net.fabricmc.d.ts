declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AllowKeyPress" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenKeyboardEvents$AllowKeyPress {

 "allowKeyPress"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): boolean

(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): boolean
}

export namespace $ScreenKeyboardEvents$AllowKeyPress {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AllowKeyPress$Type = ($ScreenKeyboardEvents$AllowKeyPress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AllowKeyPress_ = $ScreenKeyboardEvents$AllowKeyPress$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$OuterCloseCallback" {
import {$TransactionContext$Result, $TransactionContext$Result$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$Result"

export interface $TransactionContext$OuterCloseCallback {

 "afterOuterClose"(arg0: $TransactionContext$Result$Type): void

(arg0: $TransactionContext$Result$Type): void
}

export namespace $TransactionContext$OuterCloseCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$OuterCloseCallback$Type = ($TransactionContext$OuterCloseCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext$OuterCloseCallback_ = $TransactionContext$OuterCloseCallback$Type;
}}
declare module "packages/net/fabricmc/fabric/api/event/$Event" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Event<T> {
static readonly "DEFAULT_PHASE": $ResourceLocation

constructor()

public "register"(phase: $ResourceLocation$Type, listener: T): void
public "register"(arg0: T): void
public "invoker"(): T
public "addPhaseOrdering"(firstPhase: $ResourceLocation$Type, secondPhase: $ResourceLocation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Type<T> = ($Event<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_<T> = $Event$Type<(T)>;
}}
declare module "packages/net/fabricmc/fabric/mixin/renderer/client/$BakedModelMixin" {
import {$RenderContext, $RenderContext$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$FabricBakedModel, $FabricBakedModel$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/model/$FabricBakedModel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $BakedModelMixin extends $FabricBakedModel {

 "isVanillaAdapter"(): boolean
 "emitBlockQuads"(blockView: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, randomSupplier: $Supplier$Type<($RandomSource$Type)>, context: $RenderContext$Type): void
 "emitItemQuads"(stack: $ItemStack$Type, randomSupplier: $Supplier$Type<($RandomSource$Type)>, context: $RenderContext$Type): void
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelMixin$Type = ($BakedModelMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelMixin_ = $BakedModelMixin$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/lookup/block/$ServerWorldCache" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockApiCacheImpl, $BlockApiCacheImpl$Type} from "packages/net/fabricmc/fabric/impl/lookup/block/$BlockApiCacheImpl"

export interface $ServerWorldCache {

 "fabric_invalidateCache"(arg0: $BlockPos$Type): void
 "fabric_registerCache"(arg0: $BlockPos$Type, arg1: $BlockApiCacheImpl$Type<(any), (any)>): void
}

export namespace $ServerWorldCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldCache$Type = ($ServerWorldCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldCache_ = $ServerWorldCache$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/loot/$LootTableAccessor" {
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LootPool, $LootPool$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $LootTableAccessor {

 "fabric_getRandomSequenceId"(): $ResourceLocation
 "fabric_getFunctions"(): ($LootItemFunction)[]
 "fabric_getPools"(): $List<($LootPool)>
}

export namespace $LootTableAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTableAccessor$Type = ($LootTableAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTableAccessor_ = $LootTableAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/gamerule/$RuleKeyExtensions" {
import {$CustomGameRuleCategory, $CustomGameRuleCategory$Type} from "packages/net/fabricmc/fabric/api/gamerule/v1/$CustomGameRuleCategory"

export interface $RuleKeyExtensions {

 "fabric_setCustomCategory"(arg0: $CustomGameRuleCategory$Type): void
 "fabric_getCustomCategory"(): $CustomGameRuleCategory
}

export namespace $RuleKeyExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RuleKeyExtensions$Type = ($RuleKeyExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RuleKeyExtensions_ = $RuleKeyExtensions$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/model/$SpriteFinder" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$QuadView, $QuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadView"

export interface $SpriteFinder {

/**
 * 
 * @deprecated
 */
 "find"(quad: $QuadView$Type, textureIndex: integer): $TextureAtlasSprite
 "find"(arg0: float, arg1: float): $TextureAtlasSprite
 "find"(arg0: $QuadView$Type): $TextureAtlasSprite
}

export namespace $SpriteFinder {
function get(atlas: $TextureAtlas$Type): $SpriteFinder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinder$Type = ($SpriteFinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinder_ = $SpriteFinder$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/object/builder/$AbstractBlockSettingsAccessor" {
import {$ToIntFunction, $ToIntFunction$Type} from "packages/java/util/function/$ToIntFunction"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$NoteBlockInstrument, $NoteBlockInstrument$Type} from "packages/net/minecraft/world/level/block/state/properties/$NoteBlockInstrument"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$BlockBehaviour$OffsetFunction, $BlockBehaviour$OffsetFunction$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$OffsetFunction"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockBehaviour$StatePredicate, $BlockBehaviour$StatePredicate$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StatePredicate"
import {$BlockBehaviour$StateArgumentPredicate, $BlockBehaviour$StateArgumentPredicate$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$StateArgumentPredicate"

export interface $AbstractBlockSettingsAccessor {

 "getOpaque"(): boolean
 "setOpaque"(arg0: boolean): void
 "setOffsetter"(arg0: $Optional$Type<($BlockBehaviour$OffsetFunction$Type)>): void
 "setBurnable"(arg0: boolean): void
 "setToolRequired"(arg0: boolean): void
 "setForceNotSolid"(arg0: boolean): void
 "setLiquid"(arg0: boolean): void
 "setLootTableId"(arg0: $ResourceLocation$Type): void
 "setForceSolid"(arg0: boolean): void
 "setIsAir"(arg0: boolean): void
 "setReplaceable"(arg0: boolean): void
 "getResistance"(): float
 "getSlipperiness"(): float
 "isToolRequired"(): boolean
 "getRandomTicks"(): boolean
 "getSoundGroup"(): $SoundType
 "getCollidable"(): boolean
 "getHardness"(): float
 "getLuminance"(): $ToIntFunction<($BlockState)>
 "getDynamicBounds"(): boolean
 "getIsAir"(): boolean
 "getLiquid"(): boolean
 "setRandomTicks"(arg0: boolean): void
 "setDynamicBounds"(arg0: boolean): void
 "getReplaceable"(): boolean
 "getForceSolid"(): boolean
 "getForceNotSolid"(): boolean
 "getOffsetter"(): $Optional<($BlockBehaviour$OffsetFunction)>
 "getPistonBehavior"(): $PushReaction
 "getBurnable"(): boolean
 "setCollidable"(arg0: boolean): void
 "getLootTableId"(): $ResourceLocation
 "getSuffocationPredicate"(): $BlockBehaviour$StatePredicate
 "getMapColorProvider"(): $Function<($BlockState), ($MapColor)>
 "getPostProcessPredicate"(): $BlockBehaviour$StatePredicate
 "getRequiredFeatures"(): $FeatureFlagSet
 "getEmissiveLightingPredicate"(): $BlockBehaviour$StatePredicate
 "getAllowsSpawningPredicate"(): $BlockBehaviour$StateArgumentPredicate<($EntityType<(any)>)>
 "setBlockBreakParticles"(arg0: boolean): void
 "getVelocityMultiplier"(): float
 "setMapColorProvider"(arg0: $Function$Type<($BlockState$Type), ($MapColor$Type)>): void
 "getJumpVelocityMultiplier"(): float
 "getSolidBlockPredicate"(): $BlockBehaviour$StatePredicate
 "getBlockVisionPredicate"(): $BlockBehaviour$StatePredicate
 "getBlockBreakParticles"(): boolean
 "setRequiredFeatures"(arg0: $FeatureFlagSet$Type): void
 "getInstrument"(): $NoteBlockInstrument
}

export namespace $AbstractBlockSettingsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockSettingsAccessor$Type = ($AbstractBlockSettingsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockSettingsAccessor_ = $AbstractBlockSettingsAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/gamerule/$GameRulesBooleanRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesBooleanRuleAccessor {

}

export namespace $GameRulesBooleanRuleAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesBooleanRuleAccessor$Type = ($GameRulesBooleanRuleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesBooleanRuleAccessor_ = $GameRulesBooleanRuleAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/client/model/loading/$ModelLoaderHooks" {
import {$ModelLoadingEventDispatcher, $ModelLoadingEventDispatcher$Type} from "packages/net/fabricmc/fabric/impl/client/model/loading/$ModelLoadingEventDispatcher"
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ModelLoaderHooks {

 "fabric_getDispatcher"(): $ModelLoadingEventDispatcher
 "fabric_getOrLoadModel"(arg0: $ResourceLocation$Type): $UnbakedModel
 "fabric_getMissingModel"(): $UnbakedModel
 "fabric_loadModelFromJson"(arg0: $ResourceLocation$Type): $BlockModel
 "fabric_queueModelDependencies"(arg0: $UnbakedModel$Type): void
 "fabric_putModelDirectly"(arg0: $ResourceLocation$Type, arg1: $UnbakedModel$Type): void
 "fabric_putModel"(arg0: $ResourceLocation$Type, arg1: $UnbakedModel$Type): void
}

export namespace $ModelLoaderHooks {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoaderHooks$Type = ($ModelLoaderHooks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoaderHooks_ = $ModelLoaderHooks$Type;
}}
declare module "packages/net/fabricmc/fabric/api/item/v1/$EquipmentSlotProvider" {
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $EquipmentSlotProvider {

 "getPreferredEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot

(arg0: $ItemStack$Type): $EquipmentSlot
}

export namespace $EquipmentSlotProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentSlotProvider$Type = ($EquipmentSlotProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentSlotProvider_ = $EquipmentSlotProvider$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/rendering/data/$WorldViewMixin" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$RenderAttachedBlockView, $RenderAttachedBlockView$Type} from "packages/net/fabricmc/fabric/api/rendering/data/v1/$RenderAttachedBlockView"
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
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $WorldViewMixin extends $RenderAttachedBlockView {

/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(pos: $BlockPos$Type): any
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getLightEngine"(): $LevelLightEngine
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getMaxBuildHeight"(): integer
 "getHeight"(): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMinSection"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getMaxSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
 "getBlockEntityRenderData"(pos: $BlockPos$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
}

export namespace $WorldViewMixin {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldViewMixin$Type = ($WorldViewMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldViewMixin_ = $WorldViewMixin$Type;
}}
declare module "packages/net/fabricmc/fabric/api/resource/conditions/v1/$ConditionJsonProvider" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ConditionJsonProvider {

 "toJson"(): $JsonObject
 "getConditionId"(): $ResourceLocation
 "writeParameters"(arg0: $JsonObject$Type): void
}

export namespace $ConditionJsonProvider {
function write(conditionalObject: $JsonObject$Type, ...conditions: ($ConditionJsonProvider$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionJsonProvider$Type = ($ConditionJsonProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionJsonProvider_ = $ConditionJsonProvider$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext" {
import {$TransactionContext$CloseCallback, $TransactionContext$CloseCallback$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$CloseCallback"
import {$Transaction, $Transaction$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$Transaction"
import {$TransactionContext$OuterCloseCallback, $TransactionContext$OuterCloseCallback$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$OuterCloseCallback"

export interface $TransactionContext {

 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$Type): void
 "nestingDepth"(): integer
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$Type): void
 "getOpenTransaction"(arg0: integer): $Transaction
 "openNested"(): $Transaction
}

export namespace $TransactionContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$Type = ($TransactionContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext_ = $TransactionContext$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/client/rendering/$ColorProviderRegistryImpl$ColorMapperHolder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ColorProviderRegistryImpl$ColorMapperHolder<T, Provider> {

 "get"(arg0: T): Provider

(arg0: T): Provider
}

export namespace $ColorProviderRegistryImpl$ColorMapperHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorProviderRegistryImpl$ColorMapperHolder$Type<T, Provider> = ($ColorProviderRegistryImpl$ColorMapperHolder<(T), (Provider)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ColorProviderRegistryImpl$ColorMapperHolder_<T, Provider> = $ColorProviderRegistryImpl$ColorMapperHolder$Type<(T), (Provider)>;
}}
declare module "packages/net/fabricmc/fabric/mixin/networking/accessor/$ThreadedAnvilChunkStorageAccessor" {
import {$EntityTrackerAccessor, $EntityTrackerAccessor$Type} from "packages/net/fabricmc/fabric/mixin/networking/accessor/$EntityTrackerAccessor"
import {$Int2ObjectMap, $Int2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2ObjectMap"

export interface $ThreadedAnvilChunkStorageAccessor {

 "getEntityTrackers"(): $Int2ObjectMap<($EntityTrackerAccessor)>

(): $Int2ObjectMap<($EntityTrackerAccessor)>
}

export namespace $ThreadedAnvilChunkStorageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThreadedAnvilChunkStorageAccessor$Type = ($ThreadedAnvilChunkStorageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThreadedAnvilChunkStorageAccessor_ = $ThreadedAnvilChunkStorageAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/lookup/block/$BlockApiLookupImpl" {
import {$BlockApiLookup, $BlockApiLookup$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup$BlockApiProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockApiLookup$BlockEntityApiProvider, $BlockApiLookup$BlockEntityApiProvider$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup$BlockEntityApiProvider"

export class $BlockApiLookupImpl<A, C> implements $BlockApiLookup<(A), (C)> {


public static "get"<A, C>(lookupId: $ResourceLocation$Type, apiClass: $Class$Type<(A)>, contextClass: $Class$Type<(C)>): $BlockApiLookup<(A), (C)>
public "find"(world: $Level$Type, pos: $BlockPos$Type, state: $BlockState$Type, blockEntity: $BlockEntity$Type, context: C): A
public "getId"(): $ResourceLocation
public "getProvider"(block: $Block$Type): $BlockApiLookup$BlockApiProvider<(A), (C)>
public "contextClass"(): $Class<(C)>
public "apiClass"(): $Class<(A)>
public "registerSelf"(...blockEntityTypes: ($BlockEntityType$Type<(any)>)[]): void
public "registerFallback"(fallbackProvider: $BlockApiLookup$BlockApiProvider$Type<(A), (C)>): void
public "getFallbackProviders"(): $List<($BlockApiLookup$BlockApiProvider<(A), (C)>)>
public "registerForBlockEntities"(provider: $BlockApiLookup$BlockEntityApiProvider$Type<(A), (C)>, ...blockEntityTypes: ($BlockEntityType$Type<(any)>)[]): void
public "registerForBlocks"(provider: $BlockApiLookup$BlockApiProvider$Type<(A), (C)>, ...blocks: ($Block$Type)[]): void
public "find"(world: $Level$Type, pos: $BlockPos$Type, context: C): A
public "registerForBlockEntity"<T extends $BlockEntity>(provider: $BiFunction$Type<(any), (C), (A)>, blockEntityType: $BlockEntityType$Type<(T)>): void
get "id"(): $ResourceLocation
get "fallbackProviders"(): $List<($BlockApiLookup$BlockApiProvider<(A), (C)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookupImpl$Type<A, C> = ($BlockApiLookupImpl<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookupImpl_<A, C> = $BlockApiLookupImpl$Type<(A), (C)>;
}}
declare module "packages/net/fabricmc/fabric/api/item/v1/$FabricItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $FabricItem {

 "getAttributeModifiers"(stack: $ItemStack$Type, slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "isSuitableFor"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
 "getRecipeRemainder"(stack: $ItemStack$Type): $ItemStack
 "allowNbtUpdateAnimation"(player: $Player$Type, hand: $InteractionHand$Type, oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
 "allowContinuingBlockBreaking"(player: $Player$Type, oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
}

export namespace $FabricItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItem$Type = ($FabricItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricItem_ = $FabricItem$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AfterMouseRelease" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$AfterMouseRelease {

 "afterMouseRelease"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$AfterMouseRelease {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseRelease$Type = ($ScreenMouseEvents$AfterMouseRelease);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AfterMouseRelease_ = $ScreenMouseEvents$AfterMouseRelease$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/renderer/$SpriteFinderImpl" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"
import {$SpriteFinder, $SpriteFinder$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/model/$SpriteFinder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$QuadView, $QuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadView"

export class $SpriteFinderImpl implements $SpriteFinder {

constructor(sprites: $Map$Type<($ResourceLocation$Type), ($TextureAtlasSprite$Type)>, spriteAtlasTexture: $TextureAtlas$Type)

public static "get"(atlas: $TextureAtlas$Type): $SpriteFinderImpl
public "find"(quad: $QuadView$Type): $TextureAtlasSprite
public "find"(u: float, v: float): $TextureAtlasSprite
/**
 * 
 * @deprecated
 */
public "find"(quad: $QuadView$Type, textureIndex: integer): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$Type = ($SpriteFinderImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl_ = $SpriteFinderImpl$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AllowKeyRelease" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenKeyboardEvents$AllowKeyRelease {

 "allowKeyRelease"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): boolean

(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): boolean
}

export namespace $ScreenKeyboardEvents$AllowKeyRelease {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AllowKeyRelease$Type = ($ScreenKeyboardEvents$AllowKeyRelease);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AllowKeyRelease_ = $ScreenKeyboardEvents$AllowKeyRelease$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/networking/accessor/$ServerPlayNetworkHandlerAccessor" {
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"

export interface $ServerPlayNetworkHandlerAccessor {

 "getConnection"(): $Connection

(): $Connection
}

export namespace $ServerPlayNetworkHandlerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayNetworkHandlerAccessor$Type = ($ServerPlayNetworkHandlerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerPlayNetworkHandlerAccessor_ = $ServerPlayNetworkHandlerAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/blockview/client/$RenderDataMapConsumer" {
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"

export interface $RenderDataMapConsumer {

 "fabric_acceptRenderDataMap"(arg0: $Long2ObjectMap$Type<(any)>): void

(arg0: $Long2ObjectMap$Type<(any)>): void
}

export namespace $RenderDataMapConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataMapConsumer$Type = ($RenderDataMapConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderDataMapConsumer_ = $RenderDataMapConsumer$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/gamerule/$GameRulesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesAccessor {

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
declare module "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget" {
import {$AttachmentType, $AttachmentType$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentType"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $AttachmentTarget {

 "setAttached"<A>(type: $AttachmentType$Type<(A)>, value: A): A
 "getAttached"<A>(type: $AttachmentType$Type<(A)>): A
 "hasAttached"(type: $AttachmentType$Type<(any)>): boolean
 "getAttachedOrThrow"<A>(type: $AttachmentType$Type<(A)>): A
 "getAttachedOrSet"<A>(type: $AttachmentType$Type<(A)>, defaultValue: A): A
 "getAttachedOrElse"<A>(type: $AttachmentType$Type<(A)>, defaultValue: A): A
 "getAttachedOrGet"<A>(type: $AttachmentType$Type<(A)>, defaultValue: $Supplier$Type<(A)>): A
 "removeAttached"<A>(type: $AttachmentType$Type<(A)>): A
 "modifyAttached"<A>(type: $AttachmentType$Type<(A)>, modifier: $UnaryOperator$Type<(A)>): A
 "getAttachedOrCreate"<A>(type: $AttachmentType$Type<(A)>): A
 "getAttachedOrCreate"<A>(type: $AttachmentType$Type<(A)>, initializer: $Supplier$Type<(A)>): A
}

export namespace $AttachmentTarget {
const NBT_ATTACHMENT_KEY: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTarget$Type = ($AttachmentTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentTarget_ = $AttachmentTarget$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AllowMouseRelease" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$AllowMouseRelease {

 "allowMouseRelease"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): boolean

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): boolean
}

export namespace $ScreenMouseEvents$AllowMouseRelease {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseRelease$Type = ($ScreenMouseEvents$AllowMouseRelease);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AllowMouseRelease_ = $ScreenMouseEvents$AllowMouseRelease$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AllowMouseClick" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$AllowMouseClick {

 "allowMouseClick"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): boolean

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): boolean
}

export namespace $ScreenMouseEvents$AllowMouseClick {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseClick$Type = ($ScreenMouseEvents$AllowMouseClick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AllowMouseClick_ = $ScreenMouseEvents$AllowMouseClick$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/networking/$ChannelInfoHolder" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ChannelInfoHolder {

 "getPendingChannelsNames"(): $Collection<($ResourceLocation)>

(): $Collection<($ResourceLocation)>
}

export namespace $ChannelInfoHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChannelInfoHolder$Type = ($ChannelInfoHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChannelInfoHolder_ = $ChannelInfoHolder$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/resource/loader/$FabricLifecycledResourceManager" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"

export interface $FabricLifecycledResourceManager {

 "fabric_getResourceType"(): $PackType

(): $PackType
}

export namespace $FabricLifecycledResourceManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLifecycledResourceManager$Type = ($FabricLifecycledResourceManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricLifecycledResourceManager_ = $FabricLifecycledResourceManager$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/model/$FabricBakedModel" {
import {$RenderContext, $RenderContext$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $FabricBakedModel {

 "isVanillaAdapter"(): boolean
 "emitBlockQuads"(blockView: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, randomSupplier: $Supplier$Type<($RandomSource$Type)>, context: $RenderContext$Type): void
 "emitItemQuads"(stack: $ItemStack$Type, randomSupplier: $Supplier$Type<($RandomSource$Type)>, context: $RenderContext$Type): void
}

export namespace $FabricBakedModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModel$Type = ($FabricBakedModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBakedModel_ = $FabricBakedModel$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/client/screen/$MouseExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseExtensions {

 "getHorizontalScroll"(): double

(): double
}

export namespace $MouseExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseExtensions$Type = ($MouseExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MouseExtensions_ = $MouseExtensions$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$Result" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TransactionContext$Result extends $Enum<($TransactionContext$Result)> {
static readonly "ABORTED": $TransactionContext$Result
static readonly "COMMITTED": $TransactionContext$Result


public static "values"(): ($TransactionContext$Result)[]
public static "valueOf"(name: string): $TransactionContext$Result
public "wasAborted"(): boolean
public "wasCommitted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$Result$Type = (("committed") | ("aborted")) | ($TransactionContext$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext$Result_ = $TransactionContext$Result$Type;
}}
declare module "packages/net/fabricmc/fabric/api/item/v1/$FabricItemStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IForgeItemStack, $IForgeItemStack$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItemStack"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $FabricItemStack extends $IForgeItemStack {

 "getRecipeRemainder"(): $ItemStack
 "equals"(arg0: $ItemStack$Type, arg1: boolean): boolean
 "onEntityItemUpdate"(arg0: $ItemEntity$Type): boolean
 "getEntityLifespan"(arg0: $Level$Type): integer
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canPerformAction"(arg0: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $Player$Type, arg1: $Entity$Type): $AABB
 "canElytraFly"(arg0: $LivingEntity$Type): boolean
 "getEquipmentSlot"(): $EquipmentSlot
 "getAllEnchantments"(): $Map<($Enchantment), (integer)>
 "getCraftingRemainingItem"(): $ItemStack
 "getEnchantmentLevel"(arg0: $Enchantment$Type): integer
 "hasCraftingRemainingItem"(): boolean
 "isRepairable"(): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "getXpRepairRatio"(): float
 "isPiglinCurrency"(): boolean
 "onDroppedByPlayer"(arg0: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $Level$Type, arg1: $Player$Type): void
 "onInventoryTick"(arg0: $Level$Type, arg1: $Player$Type, arg2: integer, arg3: integer): void
 "onItemUseFirst"(arg0: $UseOnContext$Type): $InteractionResult
 "onBlockStartBreak"(arg0: $BlockPos$Type, arg1: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$Type, arg1: $Entity$Type): boolean
 "isEnderMask"(arg0: $Player$Type, arg1: $EnderMan$Type): boolean
 "getBurnTime"(arg0: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $Level$Type, arg1: $Mob$Type): void
 "getFoodProperties"(arg0: $LivingEntity$Type): $FoodProperties
 "onStopUsing"(arg0: $LivingEntity$Type, arg1: integer): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$Type): boolean
 "getEnchantmentValue"(): integer
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$Type): boolean
 "canGrindstoneRepair"(): boolean
 "isNotReplaceableByPickAction"(arg0: $Player$Type, arg1: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type): boolean
 "canApplyAtEnchantingTable"(arg0: $Enchantment$Type): boolean
 "areShareTagsEqual"(arg0: $ItemStack$Type): boolean
 "readShareTag"(arg0: $CompoundTag$Type): void
 "getShareTag"(): $CompoundTag
 "onEntitySwing"(arg0: $LivingEntity$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$Type, arg1: integer): boolean
 "getHighlightTip"(arg0: $Component$Type): $Component
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $FabricItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItemStack$Type = ($FabricItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricItemStack_ = $FabricItemStack$Type;
}}
declare module "packages/net/fabricmc/fabric/api/networking/v1/$FabricPacket" {
import {$PacketType, $PacketType$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$PacketType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $FabricPacket {

 "write"(arg0: $FriendlyByteBuf$Type): void
 "getType"(): $PacketType<(any)>
}

export namespace $FabricPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricPacket$Type = ($FabricPacket);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricPacket_ = $FabricPacket$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$FabricBakedModelManager" {
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FabricBakedModelManager {

 "getModel"(id: $ResourceLocation$Type): $BakedModel
}

export namespace $FabricBakedModelManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBakedModelManager$Type = ($FabricBakedModelManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBakedModelManager_ = $FabricBakedModelManager$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/networking/$NetworkHandlerExtensions" {
import {$AbstractNetworkAddon, $AbstractNetworkAddon$Type} from "packages/net/fabricmc/fabric/impl/networking/$AbstractNetworkAddon"

export interface $NetworkHandlerExtensions {

 "getAddon"(): $AbstractNetworkAddon<(any)>

(): $AbstractNetworkAddon<(any)>
}

export namespace $NetworkHandlerExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkHandlerExtensions$Type = ($NetworkHandlerExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkHandlerExtensions_ = $NetworkHandlerExtensions$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/lookup/block/$BlockApiCacheImpl" {
import {$BlockApiLookupImpl, $BlockApiLookupImpl$Type} from "packages/net/fabricmc/fabric/impl/lookup/block/$BlockApiLookupImpl"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockApiLookup, $BlockApiLookup$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup"
import {$BlockApiCache, $BlockApiCache$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiCache"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockApiCacheImpl<A, C> implements $BlockApiCache<(A), (C)> {

constructor(lookup: $BlockApiLookupImpl$Type<(A), (C)>, world: $ServerLevel$Type, pos: $BlockPos$Type)

public "find"(state: $BlockState$Type, context: C): A
public "invalidate"(): void
public "getLookup"(): $BlockApiLookupImpl<(A), (C)>
public "getPos"(): $BlockPos
public "getBlockEntity"(): $BlockEntity
public "getWorld"(): $ServerLevel
public "find"(context: C): A
public static "create"<A, C>(lookup: $BlockApiLookup$Type<(A), (C)>, world: $ServerLevel$Type, pos: $BlockPos$Type): $BlockApiCache<(A), (C)>
get "lookup"(): $BlockApiLookupImpl<(A), (C)>
get "pos"(): $BlockPos
get "blockEntity"(): $BlockEntity
get "world"(): $ServerLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiCacheImpl$Type<A, C> = ($BlockApiCacheImpl<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiCacheImpl_<A, C> = $BlockApiCacheImpl$Type<(A), (C)>;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$BeforeBake" {
import {$ModelModifier$BeforeBake$Context, $ModelModifier$BeforeBake$Context$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$BeforeBake$Context"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"

export interface $ModelModifier$BeforeBake {

 "modifyModelBeforeBake"(arg0: $UnbakedModel$Type, arg1: $ModelModifier$BeforeBake$Context$Type): $UnbakedModel

(arg0: $UnbakedModel$Type, arg1: $ModelModifier$BeforeBake$Context$Type): $UnbakedModel
}

export namespace $ModelModifier$BeforeBake {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$BeforeBake$Type = ($ModelModifier$BeforeBake);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelModifier$BeforeBake_ = $ModelModifier$BeforeBake$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/screen/$ScreenAccessor" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"

export interface $ScreenAccessor {

 "getTextRenderer"(): $Font
 "getClient"(): $Minecraft
}

export namespace $ScreenAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenAccessor$Type = ($ScreenAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenAccessor_ = $ScreenAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AfterKeyRelease" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenKeyboardEvents$AfterKeyRelease {

 "afterKeyRelease"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$AfterKeyRelease {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AfterKeyRelease$Type = ($ScreenKeyboardEvents$AfterKeyRelease);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AfterKeyRelease_ = $ScreenKeyboardEvents$AfterKeyRelease$Type;
}}
declare module "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentType" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $AttachmentType<A> {

 "identifier"(): $ResourceLocation
 "initializer"(): $Supplier<(A)>
 "isPersistent"(): boolean
 "copyOnDeath"(): boolean
 "persistenceCodec"(): $Codec<(A)>
}

export namespace $AttachmentType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentType$Type<A> = ($AttachmentType<(A)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentType_<A> = $AttachmentType$Type<(A)>;
}}
declare module "packages/net/fabricmc/fabric/impl/networking/$DisconnectPacketSource" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"

export interface $DisconnectPacketSource {

 "createDisconnectPacket"(arg0: $Component$Type): $Packet<(any)>

(arg0: $Component$Type): $Packet<(any)>
}

export namespace $DisconnectPacketSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DisconnectPacketSource$Type = ($DisconnectPacketSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DisconnectPacketSource_ = $DisconnectPacketSource$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AfterMouseClick" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$AfterMouseClick {

 "afterMouseClick"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$AfterMouseClick {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseClick$Type = ($ScreenMouseEvents$AfterMouseClick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AfterMouseClick_ = $ScreenMouseEvents$AfterMouseClick$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/transfer/item/$ItemVariantCache" {
import {$ItemVariant, $ItemVariant$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/item/$ItemVariant"

export interface $ItemVariantCache {

 "fabric_getCachedItemVariant"(): $ItemVariant

(): $ItemVariant
}

export namespace $ItemVariantCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariantCache$Type = ($ItemVariantCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVariantCache_ = $ItemVariantCache$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$BlockStateResolver" {
import {$BlockStateResolver$Context, $BlockStateResolver$Context$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$BlockStateResolver$Context"

export interface $BlockStateResolver {

 "resolveBlockStates"(arg0: $BlockStateResolver$Context$Type): void

(arg0: $BlockStateResolver$Context$Type): void
}

export namespace $BlockStateResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateResolver$Type = ($BlockStateResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateResolver_ = $BlockStateResolver$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/sound/v1/$FabricSoundInstance" {
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$SoundBufferLibrary, $SoundBufferLibrary$Type} from "packages/net/minecraft/client/sounds/$SoundBufferLibrary"
import {$AudioStream, $AudioStream$Type} from "packages/net/minecraft/client/sounds/$AudioStream"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $FabricSoundInstance {

 "getAudioStream"(loader: $SoundBufferLibrary$Type, id: $ResourceLocation$Type, repeatInstantly: boolean): $CompletableFuture<($AudioStream)>
}

export namespace $FabricSoundInstance {
const EMPTY_SOUND: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricSoundInstance$Type = ($FabricSoundInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricSoundInstance_ = $FabricSoundInstance$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AfterKeyPress" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenKeyboardEvents$AfterKeyPress {

 "afterKeyPress"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$AfterKeyPress {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$AfterKeyPress$Type = ($ScreenKeyboardEvents$AfterKeyPress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$AfterKeyPress_ = $ScreenKeyboardEvents$AfterKeyPress$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$AfterBake" {
import {$ModelModifier$AfterBake$Context, $ModelModifier$AfterBake$Context$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$AfterBake$Context"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"

export interface $ModelModifier$AfterBake {

 "modifyModelAfterBake"(arg0: $BakedModel$Type, arg1: $ModelModifier$AfterBake$Context$Type): $BakedModel

(arg0: $BakedModel$Type, arg1: $ModelModifier$AfterBake$Context$Type): $BakedModel
}

export namespace $ModelModifier$AfterBake {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$AfterBake$Type = ($ModelModifier$AfterBake);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelModifier$AfterBake_ = $ModelModifier$AfterBake$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/material/$BlendMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $BlendMode extends $Enum<($BlendMode)> {
static readonly "DEFAULT": $BlendMode
static readonly "SOLID": $BlendMode
static readonly "CUTOUT_MIPPED": $BlendMode
static readonly "CUTOUT": $BlendMode
static readonly "TRANSLUCENT": $BlendMode
readonly "blockRenderLayer": $RenderType


public static "values"(): ($BlendMode)[]
public static "valueOf"(name: string): $BlendMode
public static "fromRenderLayer"(renderLayer: $RenderType$Type): $BlendMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlendMode$Type = (("default") | ("translucent") | ("solid") | ("cutout") | ("cutout_mipped")) | ($BlendMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlendMode_ = $BlendMode$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/networking/$AbstractNetworkAddon" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AbstractNetworkAddon<H> {


public "getHandler"(channel: $ResourceLocation$Type): H
public "getReceivableChannels"(): $Set<($ResourceLocation)>
public "handleDisconnect"(): void
public "registerChannel"(channelName: $ResourceLocation$Type, handler: H): boolean
public "unregisterChannel"(channelName: $ResourceLocation$Type): H
get "receivableChannels"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNetworkAddon$Type<H> = ($AbstractNetworkAddon<(H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNetworkAddon_<H> = $AbstractNetworkAddon$Type<(H)>;
}}
declare module "packages/net/fabricmc/fabric/api/util/$BooleanFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BooleanFunction<R> {

 "apply"(arg0: boolean): R

(arg0: boolean): R
}

export namespace $BooleanFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanFunction$Type<R> = ($BooleanFunction<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanFunction_<R> = $BooleanFunction$Type<(R)>;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$BeforeRender" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ScreenEvents$BeforeRender {

 "beforeRender"(arg0: $Screen$Type, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: float): void

(arg0: $Screen$Type, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: float): void
}

export namespace $ScreenEvents$BeforeRender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$BeforeRender$Type = ($ScreenEvents$BeforeRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$BeforeRender_ = $ScreenEvents$BeforeRender$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelResolver" {
import {$ModelResolver$Context, $ModelResolver$Context$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelResolver$Context"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"

export interface $ModelResolver {

 "resolveModel"(arg0: $ModelResolver$Context$Type): $UnbakedModel

(arg0: $ModelResolver$Context$Type): $UnbakedModel
}

export namespace $ModelResolver {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelResolver$Type = ($ModelResolver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelResolver_ = $ModelResolver$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$BeforeMouseClick" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$BeforeMouseClick {

 "beforeMouseClick"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$BeforeMouseClick {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseClick$Type = ($ScreenMouseEvents$BeforeMouseClick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$BeforeMouseClick_ = $ScreenMouseEvents$BeforeMouseClick$Type;
}}
declare module "packages/net/fabricmc/fabric/api/blockview/v2/$FabricBlockView" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $FabricBlockView {

 "getBlockEntityRenderData"(pos: $BlockPos$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
}

export namespace $FabricBlockView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockView$Type = ($FabricBlockView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockView_ = $FabricBlockView$Type;
}}
declare module "packages/net/fabricmc/fabric/api/recipe/v1/ingredient/$CustomIngredient" {
import {$CustomIngredientSerializer, $CustomIngredientSerializer$Type} from "packages/net/fabricmc/fabric/api/recipe/v1/ingredient/$CustomIngredientSerializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CustomIngredient {

 "test"(arg0: $ItemStack$Type): boolean
 "toVanilla"(): $Ingredient
 "getSerializer"(): $CustomIngredientSerializer<(any)>
 "getMatchingStacks"(): $List<($ItemStack)>
 "requiresTesting"(): boolean
}

export namespace $CustomIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIngredient$Type = ($CustomIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIngredient_ = $CustomIngredient$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$BeforeKeyRelease" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenKeyboardEvents$BeforeKeyRelease {

 "beforeKeyRelease"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$BeforeKeyRelease {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$BeforeKeyRelease$Type = ($ScreenKeyboardEvents$BeforeKeyRelease);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$BeforeKeyRelease_ = $ScreenKeyboardEvents$BeforeKeyRelease$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/object/builder/$AbstractBlockAccessor" {
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"

export interface $AbstractBlockAccessor {

 "getSettings"(): $BlockBehaviour$Properties

(): $BlockBehaviour$Properties
}

export namespace $AbstractBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockAccessor$Type = ($AbstractBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockAccessor_ = $AbstractBlockAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/networking/accessor/$EntityTrackerAccessor" {
import {$ServerPlayerConnection, $ServerPlayerConnection$Type} from "packages/net/minecraft/server/network/$ServerPlayerConnection"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $EntityTrackerAccessor {

 "getPlayersTracking"(): $Set<($ServerPlayerConnection)>

(): $Set<($ServerPlayerConnection)>
}

export namespace $EntityTrackerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTrackerAccessor$Type = ($EntityTrackerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityTrackerAccessor_ = $EntityTrackerAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$BeforeTick" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenEvents$BeforeTick {

 "beforeTick"(arg0: $Screen$Type): void

(arg0: $Screen$Type): void
}

export namespace $ScreenEvents$BeforeTick {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$BeforeTick$Type = ($ScreenEvents$BeforeTick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$BeforeTick_ = $ScreenEvents$BeforeTick$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/networking/v1/$ClientPlayNetworking$PlayChannelHandler" {
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$PacketSender, $PacketSender$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$PacketSender"

export interface $ClientPlayNetworking$PlayChannelHandler {

 "receive"(arg0: $Minecraft$Type, arg1: $ClientPacketListener$Type, arg2: $FriendlyByteBuf$Type, arg3: $PacketSender$Type): void

(arg0: $Minecraft$Type, arg1: $ClientPacketListener$Type, arg2: $FriendlyByteBuf$Type, arg3: $PacketSender$Type): void
}

export namespace $ClientPlayNetworking$PlayChannelHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayNetworking$PlayChannelHandler$Type = ($ClientPlayNetworking$PlayChannelHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPlayNetworking$PlayChannelHandler_ = $ClientPlayNetworking$PlayChannelHandler$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/item/$ItemVariant" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$TransferVariant, $TransferVariant$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/storage/$TransferVariant"

export interface $ItemVariant extends $TransferVariant<($Item)> {

 "matches"(stack: $ItemStack$Type): boolean
 "getItem"(): $Item
 "toStack"(count: integer): $ItemStack
 "toStack"(): $ItemStack
 "isBlank"(): boolean
 "getObject"(): $Item
 "toNbt"(): $CompoundTag
 "toPacket"(arg0: $FriendlyByteBuf$Type): void
 "nbtMatches"(other: $CompoundTag$Type): boolean
 "isOf"(object: $Item$Type): boolean
 "copyOrCreateNbt"(): $CompoundTag
 "copyNbt"(): $CompoundTag
 "hasNbt"(): boolean
 "getNbt"(): $CompoundTag
}

export namespace $ItemVariant {
function of(item: $ItemLike$Type, tag: $CompoundTag$Type): $ItemVariant
function of(item: $ItemLike$Type): $ItemVariant
function of(stack: $ItemStack$Type): $ItemVariant
function fromPacket(buf: $FriendlyByteBuf$Type): $ItemVariant
function fromNbt(nbt: $CompoundTag$Type): $ItemVariant
function blank(): $ItemVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemVariant$Type = ($ItemVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemVariant_ = $ItemVariant$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelLoadingPlugin$Context" {
import {$ModelModifier$AfterBake, $ModelModifier$AfterBake$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$AfterBake"
import {$BlockStateResolver, $BlockStateResolver$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$BlockStateResolver"
import {$ModelModifier$OnLoad, $ModelModifier$OnLoad$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$OnLoad"
import {$ModelResolver, $ModelResolver$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelResolver"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Event, $Event$Type} from "packages/net/fabricmc/fabric/api/event/$Event"
import {$ModelModifier$BeforeBake, $ModelModifier$BeforeBake$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$BeforeBake"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $ModelLoadingPlugin$Context {

 "modifyModelOnLoad"(): $Event<($ModelModifier$OnLoad)>
 "modifyModelBeforeBake"(): $Event<($ModelModifier$BeforeBake)>
 "registerBlockStateResolver"(arg0: $Block$Type, arg1: $BlockStateResolver$Type): void
 "modifyModelAfterBake"(): $Event<($ModelModifier$AfterBake)>
 "addModels"(...arg0: ($ResourceLocation$Type)[]): void
 "addModels"(arg0: $Collection$Type<(any)>): void
 "resolveModel"(): $Event<($ModelResolver)>
}

export namespace $ModelLoadingPlugin$Context {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingPlugin$Context$Type = ($ModelLoadingPlugin$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoadingPlugin$Context_ = $ModelLoadingPlugin$Context$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/transfer/fluid/$FluidVariantCache" {
import {$FluidVariant, $FluidVariant$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/fluid/$FluidVariant"

export interface $FluidVariantCache {

 "fabric_getCachedFluidVariant"(): $FluidVariant

(): $FluidVariant
}

export namespace $FluidVariantCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVariantCache$Type = ($FluidVariantCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidVariantCache_ = $FluidVariantCache$Type;
}}
declare module "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup$BlockApiProvider" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockApiLookup$BlockApiProvider<A, C> {

 "find"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntity$Type, arg4: C): A

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntity$Type, arg4: C): A
}

export namespace $BlockApiLookup$BlockApiProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$BlockApiProvider$Type<A, C> = ($BlockApiLookup$BlockApiProvider<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookup$BlockApiProvider_<A, C> = $BlockApiLookup$BlockApiProvider$Type<(A), (C)>;
}}
declare module "packages/net/fabricmc/fabric/impl/blockrenderlayer/$ExtendedChunkRenderTypeSet" {
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $ExtendedChunkRenderTypeSet {

 "sinytra$firstLayer"(): $RenderType

(): $RenderType
}

export namespace $ExtendedChunkRenderTypeSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedChunkRenderTypeSet$Type = ($ExtendedChunkRenderTypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedChunkRenderTypeSet_ = $ExtendedChunkRenderTypeSet$Type;
}}
declare module "packages/net/fabricmc/fabric/api/networking/v1/$PacketType" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FabricPacket, $FabricPacket$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$FabricPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $PacketType<T extends $FabricPacket> {


public "read"(buf: $FriendlyByteBuf$Type): T
public "getId"(): $ResourceLocation
public static "create"<P extends $FabricPacket>(id: $ResourceLocation$Type, arg1: $Function$Type<($FriendlyByteBuf$Type), (P)>): $PacketType<(P)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketType$Type<T> = ($PacketType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketType_<T> = $PacketType$Type<(T)>;
}}
declare module "packages/net/fabricmc/fabric/mixin/blockview/$BlockViewMixin" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$FabricBlockView, $FabricBlockView$Type} from "packages/net/fabricmc/fabric/api/blockview/v2/$FabricBlockView"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockViewMixin extends $FabricBlockView {

 "getBlockEntityRenderData"(pos: $BlockPos$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
}

export namespace $BlockViewMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockViewMixin$Type = ($BlockViewMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockViewMixin_ = $BlockViewMixin$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/content/registry/$FireBlockHooks" {
import {$FlammableBlockRegistry$Entry, $FlammableBlockRegistry$Entry$Type} from "packages/net/fabricmc/fabric/api/registry/$FlammableBlockRegistry$Entry"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $FireBlockHooks {

 "fabric_getVanillaEntry"(arg0: $BlockState$Type): $FlammableBlockRegistry$Entry

(arg0: $BlockState$Type): $FlammableBlockRegistry$Entry
}

export namespace $FireBlockHooks {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockHooks$Type = ($FireBlockHooks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireBlockHooks_ = $FireBlockHooks$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$BeforeMouseScroll" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$BeforeMouseScroll {

 "beforeMouseScroll"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: double, arg4: double): void

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
}

export namespace $ScreenMouseEvents$BeforeMouseScroll {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseScroll$Type = ($ScreenMouseEvents$BeforeMouseScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$BeforeMouseScroll_ = $ScreenMouseEvents$BeforeMouseScroll$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/content/registry/$VillagerEntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $VillagerEntityAccessor {

}

export namespace $VillagerEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerEntityAccessor$Type = ($VillagerEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VillagerEntityAccessor_ = $VillagerEntityAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/client/particle/$ParticleManagerAccessor" {
import {$TextureAtlas, $TextureAtlas$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlas"

export interface $ParticleManagerAccessor {

 "getParticleAtlasTexture"(): $TextureAtlas

(): $TextureAtlas
}

export namespace $ParticleManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleManagerAccessor$Type = ($ParticleManagerAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleManagerAccessor_ = $ParticleManagerAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$OnLoad" {
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ModelModifier$OnLoad$Context, $ModelModifier$OnLoad$Context$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$OnLoad$Context"

export interface $ModelModifier$OnLoad {

 "modifyModelOnLoad"(arg0: $UnbakedModel$Type, arg1: $ModelModifier$OnLoad$Context$Type): $UnbakedModel

(arg0: $UnbakedModel$Type, arg1: $ModelModifier$OnLoad$Context$Type): $UnbakedModel
}

export namespace $ModelModifier$OnLoad {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$OnLoad$Type = ($ModelModifier$OnLoad);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelModifier$OnLoad_ = $ModelModifier$OnLoad$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/object/builder/$FabricEntityType" {
import {$GlowItemFrame, $GlowItemFrame$Type} from "packages/net/minecraft/world/entity/decoration/$GlowItemFrame"
import {$Illusioner, $Illusioner$Type} from "packages/net/minecraft/world/entity/monster/$Illusioner"
import {$MagmaCube, $MagmaCube$Type} from "packages/net/minecraft/world/entity/monster/$MagmaCube"
import {$Dolphin, $Dolphin$Type} from "packages/net/minecraft/world/entity/animal/$Dolphin"
import {$Pig, $Pig$Type} from "packages/net/minecraft/world/entity/animal/$Pig"
import {$FallingBlockEntity, $FallingBlockEntity$Type} from "packages/net/minecraft/world/entity/item/$FallingBlockEntity"
import {$WanderingTrader, $WanderingTrader$Type} from "packages/net/minecraft/world/entity/npc/$WanderingTrader"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$GlowSquid, $GlowSquid$Type} from "packages/net/minecraft/world/entity/$GlowSquid"
import {$IronGolem, $IronGolem$Type} from "packages/net/minecraft/world/entity/animal/$IronGolem"
import {$EvokerFangs, $EvokerFangs$Type} from "packages/net/minecraft/world/entity/projectile/$EvokerFangs"
import {$Vex, $Vex$Type} from "packages/net/minecraft/world/entity/monster/$Vex"
import {$Bee, $Bee$Type} from "packages/net/minecraft/world/entity/animal/$Bee"
import {$Mule, $Mule$Type} from "packages/net/minecraft/world/entity/animal/horse/$Mule"
import {$Cow, $Cow$Type} from "packages/net/minecraft/world/entity/animal/$Cow"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$AreaEffectCloud, $AreaEffectCloud$Type} from "packages/net/minecraft/world/entity/$AreaEffectCloud"
import {$Piglin, $Piglin$Type} from "packages/net/minecraft/world/entity/monster/piglin/$Piglin"
import {$Minecart, $Minecart$Type} from "packages/net/minecraft/world/entity/vehicle/$Minecart"
import {$TraderLlama, $TraderLlama$Type} from "packages/net/minecraft/world/entity/animal/horse/$TraderLlama"
import {$LlamaSpit, $LlamaSpit$Type} from "packages/net/minecraft/world/entity/projectile/$LlamaSpit"
import {$ShulkerBullet, $ShulkerBullet$Type} from "packages/net/minecraft/world/entity/projectile/$ShulkerBullet"
import {$Hoglin, $Hoglin$Type} from "packages/net/minecraft/world/entity/monster/hoglin/$Hoglin"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$ThrownTrident, $ThrownTrident$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownTrident"
import {$Spider, $Spider$Type} from "packages/net/minecraft/world/entity/monster/$Spider"
import {$MinecartHopper, $MinecartHopper$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartHopper"
import {$ArmorStand, $ArmorStand$Type} from "packages/net/minecraft/world/entity/decoration/$ArmorStand"
import {$ZombifiedPiglin, $ZombifiedPiglin$Type} from "packages/net/minecraft/world/entity/monster/$ZombifiedPiglin"
import {$Fox, $Fox$Type} from "packages/net/minecraft/world/entity/animal/$Fox"
import {$MushroomCow, $MushroomCow$Type} from "packages/net/minecraft/world/entity/animal/$MushroomCow"
import {$ChestBoat, $ChestBoat$Type} from "packages/net/minecraft/world/entity/vehicle/$ChestBoat"
import {$EndCrystal, $EndCrystal$Type} from "packages/net/minecraft/world/entity/boss/enderdragon/$EndCrystal"
import {$Cat, $Cat$Type} from "packages/net/minecraft/world/entity/animal/$Cat"
import {$WitherSkeleton, $WitherSkeleton$Type} from "packages/net/minecraft/world/entity/monster/$WitherSkeleton"
import {$Marker, $Marker$Type} from "packages/net/minecraft/world/entity/$Marker"
import {$Panda, $Panda$Type} from "packages/net/minecraft/world/entity/animal/$Panda"
import {$Parrot, $Parrot$Type} from "packages/net/minecraft/world/entity/animal/$Parrot"
import {$Chicken, $Chicken$Type} from "packages/net/minecraft/world/entity/animal/$Chicken"
import {$Silverfish, $Silverfish$Type} from "packages/net/minecraft/world/entity/monster/$Silverfish"
import {$MinecartSpawner, $MinecartSpawner$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartSpawner"
import {$Witch, $Witch$Type} from "packages/net/minecraft/world/entity/monster/$Witch"
import {$WitherBoss, $WitherBoss$Type} from "packages/net/minecraft/world/entity/boss/wither/$WitherBoss"
import {$Display$TextDisplay, $Display$TextDisplay$Type} from "packages/net/minecraft/world/entity/$Display$TextDisplay"
import {$SkeletonHorse, $SkeletonHorse$Type} from "packages/net/minecraft/world/entity/animal/horse/$SkeletonHorse"
import {$EntityType$EntityFactory, $EntityType$EntityFactory$Type} from "packages/net/minecraft/world/entity/$EntityType$EntityFactory"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Arrow, $Arrow$Type} from "packages/net/minecraft/world/entity/projectile/$Arrow"
import {$Salmon, $Salmon$Type} from "packages/net/minecraft/world/entity/animal/$Salmon"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Interaction, $Interaction$Type} from "packages/net/minecraft/world/entity/$Interaction"
import {$Slime, $Slime$Type} from "packages/net/minecraft/world/entity/monster/$Slime"
import {$ThrownEnderpearl, $ThrownEnderpearl$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownEnderpearl"
import {$Tadpole, $Tadpole$Type} from "packages/net/minecraft/world/entity/animal/frog/$Tadpole"
import {$Endermite, $Endermite$Type} from "packages/net/minecraft/world/entity/monster/$Endermite"
import {$Allay, $Allay$Type} from "packages/net/minecraft/world/entity/animal/allay/$Allay"
import {$Blaze, $Blaze$Type} from "packages/net/minecraft/world/entity/monster/$Blaze"
import {$Pufferfish, $Pufferfish$Type} from "packages/net/minecraft/world/entity/animal/$Pufferfish"
import {$Horse, $Horse$Type} from "packages/net/minecraft/world/entity/animal/horse/$Horse"
import {$Rabbit, $Rabbit$Type} from "packages/net/minecraft/world/entity/animal/$Rabbit"
import {$TropicalFish, $TropicalFish$Type} from "packages/net/minecraft/world/entity/animal/$TropicalFish"
import {$ItemFrame, $ItemFrame$Type} from "packages/net/minecraft/world/entity/decoration/$ItemFrame"
import {$ZombieVillager, $ZombieVillager$Type} from "packages/net/minecraft/world/entity/monster/$ZombieVillager"
import {$Drowned, $Drowned$Type} from "packages/net/minecraft/world/entity/monster/$Drowned"
import {$SpectralArrow, $SpectralArrow$Type} from "packages/net/minecraft/world/entity/projectile/$SpectralArrow"
import {$MinecartCommandBlock, $MinecartCommandBlock$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartCommandBlock"
import {$Frog, $Frog$Type} from "packages/net/minecraft/world/entity/animal/frog/$Frog"
import {$LeashFenceKnotEntity, $LeashFenceKnotEntity$Type} from "packages/net/minecraft/world/entity/decoration/$LeashFenceKnotEntity"
import {$FireworkRocketEntity, $FireworkRocketEntity$Type} from "packages/net/minecraft/world/entity/projectile/$FireworkRocketEntity"
import {$PiglinBrute, $PiglinBrute$Type} from "packages/net/minecraft/world/entity/monster/piglin/$PiglinBrute"
import {$Squid, $Squid$Type} from "packages/net/minecraft/world/entity/animal/$Squid"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$ThrownExperienceBottle, $ThrownExperienceBottle$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownExperienceBottle"
import {$Creeper, $Creeper$Type} from "packages/net/minecraft/world/entity/monster/$Creeper"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Pillager, $Pillager$Type} from "packages/net/minecraft/world/entity/monster/$Pillager"
import {$EyeOfEnder, $EyeOfEnder$Type} from "packages/net/minecraft/world/entity/projectile/$EyeOfEnder"
import {$Turtle, $Turtle$Type} from "packages/net/minecraft/world/entity/animal/$Turtle"
import {$Zoglin, $Zoglin$Type} from "packages/net/minecraft/world/entity/monster/$Zoglin"
import {$SmallFireball, $SmallFireball$Type} from "packages/net/minecraft/world/entity/projectile/$SmallFireball"
import {$SnowGolem, $SnowGolem$Type} from "packages/net/minecraft/world/entity/animal/$SnowGolem"
import {$EnderDragon, $EnderDragon$Type} from "packages/net/minecraft/world/entity/boss/enderdragon/$EnderDragon"
import {$Guardian, $Guardian$Type} from "packages/net/minecraft/world/entity/monster/$Guardian"
import {$Warden, $Warden$Type} from "packages/net/minecraft/world/entity/monster/warden/$Warden"
import {$DragonFireball, $DragonFireball$Type} from "packages/net/minecraft/world/entity/projectile/$DragonFireball"
import {$ThrownPotion, $ThrownPotion$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownPotion"
import {$Vindicator, $Vindicator$Type} from "packages/net/minecraft/world/entity/monster/$Vindicator"
import {$Husk, $Husk$Type} from "packages/net/minecraft/world/entity/monster/$Husk"
import {$Giant, $Giant$Type} from "packages/net/minecraft/world/entity/monster/$Giant"
import {$PrimedTnt, $PrimedTnt$Type} from "packages/net/minecraft/world/entity/item/$PrimedTnt"
import {$EntityTypeTest, $EntityTypeTest$Type} from "packages/net/minecraft/world/level/entity/$EntityTypeTest"
import {$ThrownEgg, $ThrownEgg$Type} from "packages/net/minecraft/world/entity/projectile/$ThrownEgg"
import {$Zombie, $Zombie$Type} from "packages/net/minecraft/world/entity/monster/$Zombie"
import {$Sniffer, $Sniffer$Type} from "packages/net/minecraft/world/entity/animal/sniffer/$Sniffer"
import {$ZombieHorse, $ZombieHorse$Type} from "packages/net/minecraft/world/entity/animal/horse/$ZombieHorse"
import {$CaveSpider, $CaveSpider$Type} from "packages/net/minecraft/world/entity/monster/$CaveSpider"
import {$Stray, $Stray$Type} from "packages/net/minecraft/world/entity/monster/$Stray"
import {$Bat, $Bat$Type} from "packages/net/minecraft/world/entity/ambient/$Bat"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Llama, $Llama$Type} from "packages/net/minecraft/world/entity/animal/horse/$Llama"
import {$MinecartTNT, $MinecartTNT$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartTNT"
import {$WitherSkull, $WitherSkull$Type} from "packages/net/minecraft/world/entity/projectile/$WitherSkull"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$Painting, $Painting$Type} from "packages/net/minecraft/world/entity/decoration/$Painting"
import {$MinecartFurnace, $MinecartFurnace$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartFurnace"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Goat, $Goat$Type} from "packages/net/minecraft/world/entity/animal/goat/$Goat"
import {$Strider, $Strider$Type} from "packages/net/minecraft/world/entity/monster/$Strider"
import {$Phantom, $Phantom$Type} from "packages/net/minecraft/world/entity/monster/$Phantom"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Skeleton, $Skeleton$Type} from "packages/net/minecraft/world/entity/monster/$Skeleton"
import {$Axolotl, $Axolotl$Type} from "packages/net/minecraft/world/entity/animal/axolotl/$Axolotl"
import {$MinecartChest, $MinecartChest$Type} from "packages/net/minecraft/world/entity/vehicle/$MinecartChest"
import {$Villager, $Villager$Type} from "packages/net/minecraft/world/entity/npc/$Villager"
import {$ExperienceOrb, $ExperienceOrb$Type} from "packages/net/minecraft/world/entity/$ExperienceOrb"
import {$Shulker, $Shulker$Type} from "packages/net/minecraft/world/entity/monster/$Shulker"
import {$FishingHook, $FishingHook$Type} from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import {$Display$BlockDisplay, $Display$BlockDisplay$Type} from "packages/net/minecraft/world/entity/$Display$BlockDisplay"
import {$Sheep, $Sheep$Type} from "packages/net/minecraft/world/entity/animal/$Sheep"
import {$LargeFireball, $LargeFireball$Type} from "packages/net/minecraft/world/entity/projectile/$LargeFireball"
import {$Cod, $Cod$Type} from "packages/net/minecraft/world/entity/animal/$Cod"
import {$Snowball, $Snowball$Type} from "packages/net/minecraft/world/entity/projectile/$Snowball"
import {$ElderGuardian, $ElderGuardian$Type} from "packages/net/minecraft/world/entity/monster/$ElderGuardian"
import {$LightningBolt, $LightningBolt$Type} from "packages/net/minecraft/world/entity/$LightningBolt"
import {$Ghast, $Ghast$Type} from "packages/net/minecraft/world/entity/monster/$Ghast"
import {$Ocelot, $Ocelot$Type} from "packages/net/minecraft/world/entity/animal/$Ocelot"
import {$Donkey, $Donkey$Type} from "packages/net/minecraft/world/entity/animal/horse/$Donkey"
import {$Wolf, $Wolf$Type} from "packages/net/minecraft/world/entity/animal/$Wolf"
import {$Display$ItemDisplay, $Display$ItemDisplay$Type} from "packages/net/minecraft/world/entity/$Display$ItemDisplay"
import {$Ravager, $Ravager$Type} from "packages/net/minecraft/world/entity/monster/$Ravager"
import {$Camel, $Camel$Type} from "packages/net/minecraft/world/entity/animal/camel/$Camel"
import {$PolarBear, $PolarBear$Type} from "packages/net/minecraft/world/entity/animal/$PolarBear"
import {$Evoker, $Evoker$Type} from "packages/net/minecraft/world/entity/monster/$Evoker"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $FabricEntityType<T extends $Entity> extends $EntityType<(T)> {
static readonly "ENTITY_TAG": string
static readonly "ALLAY": $EntityType<($Allay)>
static readonly "AREA_EFFECT_CLOUD": $EntityType<($AreaEffectCloud)>
static readonly "ARMOR_STAND": $EntityType<($ArmorStand)>
static readonly "ARROW": $EntityType<($Arrow)>
static readonly "AXOLOTL": $EntityType<($Axolotl)>
static readonly "BAT": $EntityType<($Bat)>
static readonly "BEE": $EntityType<($Bee)>
static readonly "BLAZE": $EntityType<($Blaze)>
static readonly "BLOCK_DISPLAY": $EntityType<($Display$BlockDisplay)>
static readonly "BOAT": $EntityType<($Boat)>
static readonly "CAMEL": $EntityType<($Camel)>
static readonly "CAT": $EntityType<($Cat)>
static readonly "CAVE_SPIDER": $EntityType<($CaveSpider)>
static readonly "CHEST_BOAT": $EntityType<($ChestBoat)>
static readonly "CHEST_MINECART": $EntityType<($MinecartChest)>
static readonly "CHICKEN": $EntityType<($Chicken)>
static readonly "COD": $EntityType<($Cod)>
static readonly "COMMAND_BLOCK_MINECART": $EntityType<($MinecartCommandBlock)>
static readonly "COW": $EntityType<($Cow)>
static readonly "CREEPER": $EntityType<($Creeper)>
static readonly "DOLPHIN": $EntityType<($Dolphin)>
static readonly "DONKEY": $EntityType<($Donkey)>
static readonly "DRAGON_FIREBALL": $EntityType<($DragonFireball)>
static readonly "DROWNED": $EntityType<($Drowned)>
static readonly "EGG": $EntityType<($ThrownEgg)>
static readonly "ELDER_GUARDIAN": $EntityType<($ElderGuardian)>
static readonly "END_CRYSTAL": $EntityType<($EndCrystal)>
static readonly "ENDER_DRAGON": $EntityType<($EnderDragon)>
static readonly "ENDER_PEARL": $EntityType<($ThrownEnderpearl)>
static readonly "ENDERMAN": $EntityType<($EnderMan)>
static readonly "ENDERMITE": $EntityType<($Endermite)>
static readonly "EVOKER": $EntityType<($Evoker)>
static readonly "EVOKER_FANGS": $EntityType<($EvokerFangs)>
static readonly "EXPERIENCE_BOTTLE": $EntityType<($ThrownExperienceBottle)>
static readonly "EXPERIENCE_ORB": $EntityType<($ExperienceOrb)>
static readonly "EYE_OF_ENDER": $EntityType<($EyeOfEnder)>
static readonly "FALLING_BLOCK": $EntityType<($FallingBlockEntity)>
static readonly "FIREWORK_ROCKET": $EntityType<($FireworkRocketEntity)>
static readonly "FOX": $EntityType<($Fox)>
static readonly "FROG": $EntityType<($Frog)>
static readonly "FURNACE_MINECART": $EntityType<($MinecartFurnace)>
static readonly "GHAST": $EntityType<($Ghast)>
static readonly "GIANT": $EntityType<($Giant)>
static readonly "GLOW_ITEM_FRAME": $EntityType<($GlowItemFrame)>
static readonly "GLOW_SQUID": $EntityType<($GlowSquid)>
static readonly "GOAT": $EntityType<($Goat)>
static readonly "GUARDIAN": $EntityType<($Guardian)>
static readonly "HOGLIN": $EntityType<($Hoglin)>
static readonly "HOPPER_MINECART": $EntityType<($MinecartHopper)>
static readonly "HORSE": $EntityType<($Horse)>
static readonly "HUSK": $EntityType<($Husk)>
static readonly "ILLUSIONER": $EntityType<($Illusioner)>
static readonly "INTERACTION": $EntityType<($Interaction)>
static readonly "IRON_GOLEM": $EntityType<($IronGolem)>
static readonly "ITEM": $EntityType<($ItemEntity)>
static readonly "ITEM_DISPLAY": $EntityType<($Display$ItemDisplay)>
static readonly "ITEM_FRAME": $EntityType<($ItemFrame)>
static readonly "FIREBALL": $EntityType<($LargeFireball)>
static readonly "LEASH_KNOT": $EntityType<($LeashFenceKnotEntity)>
static readonly "LIGHTNING_BOLT": $EntityType<($LightningBolt)>
static readonly "LLAMA": $EntityType<($Llama)>
static readonly "LLAMA_SPIT": $EntityType<($LlamaSpit)>
static readonly "MAGMA_CUBE": $EntityType<($MagmaCube)>
static readonly "MARKER": $EntityType<($Marker)>
static readonly "MINECART": $EntityType<($Minecart)>
static readonly "MOOSHROOM": $EntityType<($MushroomCow)>
static readonly "MULE": $EntityType<($Mule)>
static readonly "OCELOT": $EntityType<($Ocelot)>
static readonly "PAINTING": $EntityType<($Painting)>
static readonly "PANDA": $EntityType<($Panda)>
static readonly "PARROT": $EntityType<($Parrot)>
static readonly "PHANTOM": $EntityType<($Phantom)>
static readonly "PIG": $EntityType<($Pig)>
static readonly "PIGLIN": $EntityType<($Piglin)>
static readonly "PIGLIN_BRUTE": $EntityType<($PiglinBrute)>
static readonly "PILLAGER": $EntityType<($Pillager)>
static readonly "POLAR_BEAR": $EntityType<($PolarBear)>
static readonly "POTION": $EntityType<($ThrownPotion)>
static readonly "PUFFERFISH": $EntityType<($Pufferfish)>
static readonly "RABBIT": $EntityType<($Rabbit)>
static readonly "RAVAGER": $EntityType<($Ravager)>
static readonly "SALMON": $EntityType<($Salmon)>
static readonly "SHEEP": $EntityType<($Sheep)>
static readonly "SHULKER": $EntityType<($Shulker)>
static readonly "SHULKER_BULLET": $EntityType<($ShulkerBullet)>
static readonly "SILVERFISH": $EntityType<($Silverfish)>
static readonly "SKELETON": $EntityType<($Skeleton)>
static readonly "SKELETON_HORSE": $EntityType<($SkeletonHorse)>
static readonly "SLIME": $EntityType<($Slime)>
static readonly "SMALL_FIREBALL": $EntityType<($SmallFireball)>
static readonly "SNIFFER": $EntityType<($Sniffer)>
static readonly "SNOW_GOLEM": $EntityType<($SnowGolem)>
static readonly "SNOWBALL": $EntityType<($Snowball)>
static readonly "SPAWNER_MINECART": $EntityType<($MinecartSpawner)>
static readonly "SPECTRAL_ARROW": $EntityType<($SpectralArrow)>
static readonly "SPIDER": $EntityType<($Spider)>
static readonly "SQUID": $EntityType<($Squid)>
static readonly "STRAY": $EntityType<($Stray)>
static readonly "STRIDER": $EntityType<($Strider)>
static readonly "TADPOLE": $EntityType<($Tadpole)>
static readonly "TEXT_DISPLAY": $EntityType<($Display$TextDisplay)>
static readonly "TNT": $EntityType<($PrimedTnt)>
static readonly "TNT_MINECART": $EntityType<($MinecartTNT)>
static readonly "TRADER_LLAMA": $EntityType<($TraderLlama)>
static readonly "TRIDENT": $EntityType<($ThrownTrident)>
static readonly "TROPICAL_FISH": $EntityType<($TropicalFish)>
static readonly "TURTLE": $EntityType<($Turtle)>
static readonly "VEX": $EntityType<($Vex)>
static readonly "VILLAGER": $EntityType<($Villager)>
static readonly "VINDICATOR": $EntityType<($Vindicator)>
static readonly "WANDERING_TRADER": $EntityType<($WanderingTrader)>
static readonly "WARDEN": $EntityType<($Warden)>
static readonly "WITCH": $EntityType<($Witch)>
static readonly "WITHER": $EntityType<($WitherBoss)>
static readonly "WITHER_SKELETON": $EntityType<($WitherSkeleton)>
static readonly "WITHER_SKULL": $EntityType<($WitherSkull)>
static readonly "WOLF": $EntityType<($Wolf)>
static readonly "ZOGLIN": $EntityType<($Zoglin)>
static readonly "ZOMBIE": $EntityType<($Zombie)>
static readonly "ZOMBIE_HORSE": $EntityType<($ZombieHorse)>
static readonly "ZOMBIE_VILLAGER": $EntityType<($ZombieVillager)>
static readonly "ZOMBIFIED_PIGLIN": $EntityType<($ZombifiedPiglin)>
static readonly "PLAYER": $EntityType<($Player)>
static readonly "FISHING_BOBBER": $EntityType<($FishingHook)>
readonly "factory": $EntityType$EntityFactory<(T)>

constructor(factory: $EntityType$EntityFactory$Type<(T)>, spawnGroup: $MobCategory$Type, bl: boolean, summonable: boolean, fireImmune: boolean, spawnableFarFromPlayer: boolean, spawnBlocks: $ImmutableSet$Type<($Block$Type)>, entityDimensions: $EntityDimensions$Type, maxTrackDistance: integer, trackTickInterval: integer, alwaysUpdateVelocity: boolean, featureSet: $FeatureFlagSet$Type)

public "trackDeltas"(): boolean
public static "forClass"<B, T extends B>(arg0: $Class$Type<(T)>): $EntityTypeTest<(B), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricEntityType$Type<T> = ($FabricEntityType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricEntityType_<T> = $FabricEntityType$Type<(T)>;
}}
declare module "packages/net/fabricmc/fabric/mixin/networking/accessor/$CustomPayloadC2SPacketAccessor" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CustomPayloadC2SPacketAccessor {

 "getChannel"(): $ResourceLocation
 "getData"(): $FriendlyByteBuf
}

export namespace $CustomPayloadC2SPacketAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPayloadC2SPacketAccessor$Type = ($CustomPayloadC2SPacketAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomPayloadC2SPacketAccessor_ = $CustomPayloadC2SPacketAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/screenhandler/$NamedScreenHandlerFactoryMixin" {
import {$FabricScreenHandlerFactory, $FabricScreenHandlerFactory$Type} from "packages/net/fabricmc/fabric/api/screenhandler/v1/$FabricScreenHandlerFactory"

export interface $NamedScreenHandlerFactoryMixin extends $FabricScreenHandlerFactory {

 "shouldCloseCurrentScreen"(): boolean
}

export namespace $NamedScreenHandlerFactoryMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedScreenHandlerFactoryMixin$Type = ($NamedScreenHandlerFactoryMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedScreenHandlerFactoryMixin_ = $NamedScreenHandlerFactoryMixin$Type;
}}
declare module "packages/net/fabricmc/fabric/api/gamerule/v1/$CustomGameRuleCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$GameRules$Value, $GameRules$Value$Type} from "packages/net/minecraft/world/level/$GameRules$Value"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$GameRules$Key, $GameRules$Key$Type} from "packages/net/minecraft/world/level/$GameRules$Key"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $CustomGameRuleCategory {

constructor(id: $ResourceLocation$Type, name: $Component$Type)

public "getName"(): $Component
public "equals"(o: any): boolean
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public static "getCategory"<T extends $GameRules$Value<(T)>>(key: $GameRules$Key$Type<(T)>): $Optional<($CustomGameRuleCategory)>
get "name"(): $Component
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomGameRuleCategory$Type = ($CustomGameRuleCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomGameRuleCategory_ = $CustomGameRuleCategory$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelResolver$Context" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"

export interface $ModelResolver$Context {

 "loader"(): $ModelBakery
 "id"(): $ResourceLocation
 "getOrLoadModel"(arg0: $ResourceLocation$Type): $UnbakedModel
}

export namespace $ModelResolver$Context {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelResolver$Context$Type = ($ModelResolver$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelResolver$Context_ = $ModelResolver$Context$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/client/screen/$ScreenExtensions" {
import {$ScreenEvents$BeforeTick, $ScreenEvents$BeforeTick$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$BeforeTick"
import {$ScreenKeyboardEvents$BeforeKeyRelease, $ScreenKeyboardEvents$BeforeKeyRelease$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$BeforeKeyRelease"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ScreenEvents$AfterTick, $ScreenEvents$AfterTick$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$AfterTick"
import {$ScreenMouseEvents$AllowMouseRelease, $ScreenMouseEvents$AllowMouseRelease$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AllowMouseRelease"
import {$ScreenEvents$AfterRender, $ScreenEvents$AfterRender$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$AfterRender"
import {$ScreenKeyboardEvents$AllowKeyRelease, $ScreenKeyboardEvents$AllowKeyRelease$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AllowKeyRelease"
import {$ScreenMouseEvents$AllowMouseClick, $ScreenMouseEvents$AllowMouseClick$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AllowMouseClick"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Event, $Event$Type} from "packages/net/fabricmc/fabric/api/event/$Event"
import {$ScreenKeyboardEvents$AfterKeyPress, $ScreenKeyboardEvents$AfterKeyPress$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AfterKeyPress"
import {$ScreenMouseEvents$BeforeMouseScroll, $ScreenMouseEvents$BeforeMouseScroll$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$BeforeMouseScroll"
import {$ScreenMouseEvents$BeforeMouseRelease, $ScreenMouseEvents$BeforeMouseRelease$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$BeforeMouseRelease"
import {$ScreenMouseEvents$AfterMouseRelease, $ScreenMouseEvents$AfterMouseRelease$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AfterMouseRelease"
import {$ScreenMouseEvents$AfterMouseClick, $ScreenMouseEvents$AfterMouseClick$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AfterMouseClick"
import {$ScreenKeyboardEvents$BeforeKeyPress, $ScreenKeyboardEvents$BeforeKeyPress$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$BeforeKeyPress"
import {$AbstractWidget, $AbstractWidget$Type} from "packages/net/minecraft/client/gui/components/$AbstractWidget"
import {$ScreenKeyboardEvents$AllowKeyPress, $ScreenKeyboardEvents$AllowKeyPress$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AllowKeyPress"
import {$ScreenEvents$BeforeRender, $ScreenEvents$BeforeRender$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$BeforeRender"
import {$ScreenKeyboardEvents$AfterKeyRelease, $ScreenKeyboardEvents$AfterKeyRelease$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$AfterKeyRelease"
import {$ScreenEvents$Remove, $ScreenEvents$Remove$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$Remove"
import {$ScreenMouseEvents$AfterMouseScroll, $ScreenMouseEvents$AfterMouseScroll$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AfterMouseScroll"
import {$ScreenMouseEvents$BeforeMouseClick, $ScreenMouseEvents$BeforeMouseClick$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$BeforeMouseClick"
import {$ScreenMouseEvents$AllowMouseScroll, $ScreenMouseEvents$AllowMouseScroll$Type} from "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AllowMouseScroll"

export interface $ScreenExtensions {

 "fabric_getAfterTickEvent"(): $Event<($ScreenEvents$AfterTick)>
 "fabric_getBeforeKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyRelease)>
 "fabric_getRemoveEvent"(): $Event<($ScreenEvents$Remove)>
 "fabric_getBeforeMouseScrollEvent"(): $Event<($ScreenMouseEvents$BeforeMouseScroll)>
 "fabric_getAfterKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyRelease)>
 "fabric_getAfterRenderEvent"(): $Event<($ScreenEvents$AfterRender)>
 "fabric_getAfterMouseScrollEvent"(): $Event<($ScreenMouseEvents$AfterMouseScroll)>
 "fabric_getAfterMouseClickEvent"(): $Event<($ScreenMouseEvents$AfterMouseClick)>
 "fabric_getBeforeMouseClickEvent"(): $Event<($ScreenMouseEvents$BeforeMouseClick)>
 "fabric_getAfterMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AfterMouseRelease)>
 "fabric_getBeforeRenderEvent"(): $Event<($ScreenEvents$BeforeRender)>
 "fabric_getBeforeTickEvent"(): $Event<($ScreenEvents$BeforeTick)>
 "fabric_getAllowMouseReleaseEvent"(): $Event<($ScreenMouseEvents$AllowMouseRelease)>
 "fabric_getAllowMouseScrollEvent"(): $Event<($ScreenMouseEvents$AllowMouseScroll)>
 "fabric_getAllowKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyPress)>
 "fabric_getAllowKeyReleaseEvent"(): $Event<($ScreenKeyboardEvents$AllowKeyRelease)>
 "fabric_getAllowMouseClickEvent"(): $Event<($ScreenMouseEvents$AllowMouseClick)>
 "fabric_getAfterKeyPressEvent"(): $Event<($ScreenKeyboardEvents$AfterKeyPress)>
 "fabric_getBeforeKeyPressEvent"(): $Event<($ScreenKeyboardEvents$BeforeKeyPress)>
 "fabric_getBeforeMouseReleaseEvent"(): $Event<($ScreenMouseEvents$BeforeMouseRelease)>
 "fabric_getButtons"(): $List<($AbstractWidget)>
}

export namespace $ScreenExtensions {
function getExtensions(screen: $Screen$Type): $ScreenExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenExtensions$Type = ($ScreenExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenExtensions_ = $ScreenExtensions$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/content/registry/$ShovelItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShovelItemAccessor {

}

export namespace $ShovelItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShovelItemAccessor$Type = ($ShovelItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShovelItemAccessor_ = $ShovelItemAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/command/v2/$FabricClientCommandSource" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$SharedSuggestionProvider$TextCoordinates, $SharedSuggestionProvider$TextCoordinates$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider$TextCoordinates"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$SharedSuggestionProvider$ElementSuggestionType, $SharedSuggestionProvider$ElementSuggestionType$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider$ElementSuggestionType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Message, $Message$Type} from "packages/com/mojang/brigadier/$Message"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$SharedSuggestionProvider, $SharedSuggestionProvider$Type} from "packages/net/minecraft/commands/$SharedSuggestionProvider"

export interface $FabricClientCommandSource extends $SharedSuggestionProvider {

 "getPosition"(): $Vec3
 "getEntity"(): $Entity
 "getPlayer"(): $LocalPlayer
 "sendError"(arg0: $Component$Type): void
 "getClient"(): $Minecraft
 "getWorld"(): $ClientLevel
 "getRotation"(): $Vec2
 "getMeta"(key: string): any
 "sendFeedback"(arg0: $Component$Type): void
 "hasPermission"(arg0: integer): boolean
 "registryAccess"(): $RegistryAccess
 "enabledFeatures"(): $FeatureFlagSet
 "getRecipeNames"(): $Stream<($ResourceLocation)>
 "suggestRegistryElements"(arg0: $Registry$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$Type, arg2: $SuggestionsBuilder$Type): void
 "getAvailableSounds"(): $Stream<($ResourceLocation)>
 "getCustomTabSugggestions"(): $Collection<(string)>
 "suggestRegistryElements"(arg0: $ResourceKey$Type<(any)>, arg1: $SharedSuggestionProvider$ElementSuggestionType$Type, arg2: $SuggestionsBuilder$Type, arg3: $CommandContext$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getSelectedEntities"(): $Collection<(string)>
 "getOnlinePlayerNames"(): $Collection<(string)>
 "getRelevantCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "getAbsoluteCoordinates"(): $Collection<($SharedSuggestionProvider$TextCoordinates)>
 "levels"(): $Set<($ResourceKey<($Level)>)>
 "customSuggestion"(arg0: $CommandContext$Type<(any)>): $CompletableFuture<($Suggestions)>
 "getAllTeams"(): $Collection<(string)>
}

export namespace $FabricClientCommandSource {
function filterResources<T>(arg0: $Iterable$Type<(T)>, arg1: string, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Consumer$Type<(T)>): void
function matchesSubStr(arg0: string, arg1: string): boolean
function filterResources<T>(arg0: $Iterable$Type<(T)>, arg1: string, arg2: string, arg3: $Function$Type<(T), ($ResourceLocation$Type)>, arg4: $Consumer$Type<(T)>): void
function suggestResource<T>(arg0: $Stream$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggestResource<T>(arg0: $Iterable$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), ($ResourceLocation$Type)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggest<T>(arg0: $Iterable$Type<(T)>, arg1: $SuggestionsBuilder$Type, arg2: $Function$Type<(T), (string)>, arg3: $Function$Type<(T), ($Message$Type)>): $CompletableFuture<($Suggestions)>
function suggestCoordinates(arg0: string, arg1: $Collection$Type<($SharedSuggestionProvider$TextCoordinates$Type)>, arg2: $SuggestionsBuilder$Type, arg3: $Predicate$Type<(string)>): $CompletableFuture<($Suggestions)>
function suggest2DCoordinates(arg0: string, arg1: $Collection$Type<($SharedSuggestionProvider$TextCoordinates$Type)>, arg2: $SuggestionsBuilder$Type, arg3: $Predicate$Type<(string)>): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Stream$Type<(string)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: (string)[], arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Stream$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type, arg2: string): $CompletableFuture<($Suggestions)>
function suggestResource(arg0: $Iterable$Type<($ResourceLocation$Type)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
function suggest(arg0: $Iterable$Type<(string)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricClientCommandSource$Type = ($FabricClientCommandSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricClientCommandSource_ = $FabricClientCommandSource$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/event/interaction/client/$KeyBindingAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $KeyBindingAccessor {

 "fabric_getTimesPressed"(): integer

(): integer
}

export namespace $KeyBindingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$Type = ($KeyBindingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyBindingAccessor_ = $KeyBindingAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/networking/client/accessor/$MinecraftClientAccessor" {
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"

export interface $MinecraftClientAccessor {

 "getConnection"(): $Connection

(): $Connection
}

export namespace $MinecraftClientAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftClientAccessor$Type = ($MinecraftClientAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftClientAccessor_ = $MinecraftClientAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockApiLookup$BlockApiProvider, $BlockApiLookup$BlockApiProvider$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup$BlockApiProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$BlockApiLookup$BlockEntityApiProvider, $BlockApiLookup$BlockEntityApiProvider$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup$BlockEntityApiProvider"

export interface $BlockApiLookup<A, C> {

 "find"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockEntity$Type, arg4: C): A
 "find"(world: $Level$Type, pos: $BlockPos$Type, context: C): A
 "getId"(): $ResourceLocation
 "getProvider"(arg0: $Block$Type): $BlockApiLookup$BlockApiProvider<(A), (C)>
 "contextClass"(): $Class<(C)>
 "apiClass"(): $Class<(A)>
 "registerSelf"(...arg0: ($BlockEntityType$Type<(any)>)[]): void
 "registerFallback"(arg0: $BlockApiLookup$BlockApiProvider$Type<(A), (C)>): void
 "registerForBlockEntity"<T extends $BlockEntity>(provider: $BiFunction$Type<(any), (C), (A)>, blockEntityType: $BlockEntityType$Type<(T)>): void
 "registerForBlockEntities"(arg0: $BlockApiLookup$BlockEntityApiProvider$Type<(A), (C)>, ...arg1: ($BlockEntityType$Type<(any)>)[]): void
 "registerForBlocks"(arg0: $BlockApiLookup$BlockApiProvider$Type<(A), (C)>, ...arg1: ($Block$Type)[]): void
}

export namespace $BlockApiLookup {
function get<A, C>(lookupId: $ResourceLocation$Type, apiClass: $Class$Type<(A)>, contextClass: $Class$Type<(C)>): $BlockApiLookup<(A), (C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$Type<A, C> = ($BlockApiLookup<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookup_<A, C> = $BlockApiLookup$Type<(A), (C)>;
}}
declare module "packages/net/fabricmc/fabric/api/screenhandler/v1/$FabricScreenHandlerFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricScreenHandlerFactory {

 "shouldCloseCurrentScreen"(): boolean
}

export namespace $FabricScreenHandlerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricScreenHandlerFactory$Type = ($FabricScreenHandlerFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricScreenHandlerFactory_ = $FabricScreenHandlerFactory$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadEmitter" {
import {$RenderMaterial, $RenderMaterial$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/material/$RenderMaterial"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MutableQuadView, $MutableQuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$MutableQuadView"
import {$QuadView, $QuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadView"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $QuadEmitter extends $MutableQuadView {

 "color"(arg0: integer, arg1: integer): $QuadEmitter
 "normal"(vertexIndex: integer, normal: $Vector3f$Type): $QuadEmitter
 "square"(nominalFace: $Direction$Type, left: float, bottom: float, right: float, top: float, depth: float): $QuadEmitter
 "tag"(arg0: integer): $QuadEmitter
 "copyFrom"(arg0: $QuadView$Type): $QuadEmitter
 "emit"(): $QuadEmitter
 "uv"(vertexIndex: integer, uv: $Vector2f$Type): $QuadEmitter
 "lightmap"(arg0: integer, arg1: integer): $QuadEmitter
 "lightmap"(b0: integer, b1: integer, b2: integer, b3: integer): $QuadEmitter
 "cullFace"(arg0: $Direction$Type): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteColor"(vertexIndex: integer, spriteIndex: integer, color: integer): $QuadEmitter
 "spriteBake"(arg0: $TextureAtlasSprite$Type, arg1: integer): $QuadEmitter
 "uvUnitSquare"(): $QuadEmitter
/**
 * 
 * @deprecated
 */
 "spriteUnitSquare"(spriteIndex: integer): $QuadEmitter
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(target: $MutableQuadView$Type): void
 "normalZ"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toVanilla"(spriteIndex: integer, target: (integer)[], targetIndex: integer, isItem: boolean): void
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "lightmap"(arg0: integer): integer
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "hasNormal"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(spriteIndex: integer, sprite: $TextureAtlasSprite$Type, isItem: boolean): $BakedQuad
 "toBakedQuad"(sprite: $TextureAtlasSprite$Type): $BakedQuad
 "copyNormal"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "material"(): $RenderMaterial
 "colorIndex"(): integer
 "faceNormal"(): $Vector3f
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(vertexIndex: integer, spriteIndex: integer): float
/**
 * 
 * @deprecated
 */
 "spriteColor"(vertexIndex: integer, spriteIndex: integer): integer
 "posByIndex"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(vertexIndex: integer, spriteIndex: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$Type): $Vector2f
}

export namespace $QuadEmitter {
const CULL_FACE_EPSILON: float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadEmitter$Type = ($QuadEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadEmitter_ = $QuadEmitter$Type;
}}
declare module "packages/net/fabricmc/fabric/api/resource/$IdentifiableResourceReloadListener" {
import {$PreparableReloadListener, $PreparableReloadListener$Type} from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PreparableReloadListener$PreparationBarrier, $PreparableReloadListener$PreparationBarrier$Type} from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener$PreparationBarrier"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ResourceManager, $ResourceManager$Type} from "packages/net/minecraft/server/packs/resources/$ResourceManager"
import {$ProfilerFiller, $ProfilerFiller$Type} from "packages/net/minecraft/util/profiling/$ProfilerFiller"

export interface $IdentifiableResourceReloadListener extends $PreparableReloadListener {

 "getFabricDependencies"(): $Collection<($ResourceLocation)>
 "getFabricId"(): $ResourceLocation
 "reload"(arg0: $PreparableReloadListener$PreparationBarrier$Type, arg1: $ResourceManager$Type, arg2: $ProfilerFiller$Type, arg3: $ProfilerFiller$Type, arg4: $Executor$Type, arg5: $Executor$Type): $CompletableFuture<(void)>
 "getName"(): string
}

export namespace $IdentifiableResourceReloadListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdentifiableResourceReloadListener$Type = ($IdentifiableResourceReloadListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdentifiableResourceReloadListener_ = $IdentifiableResourceReloadListener$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$BlockStateResolver$Context" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"

export interface $BlockStateResolver$Context {

 "loader"(): $ModelBakery
 "block"(): $Block
 "getOrLoadModel"(arg0: $ResourceLocation$Type): $UnbakedModel
 "setModel"(arg0: $BlockState$Type, arg1: $UnbakedModel$Type): void
}

export namespace $BlockStateResolver$Context {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateResolver$Context$Type = ($BlockStateResolver$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateResolver$Context_ = $BlockStateResolver$Context$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/client/keybinding/$KeyBindingAccessor" {
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $KeyBindingAccessor {

 "fabric_getBoundKey"(): $InputConstants$Key

(): $InputConstants$Key
}

export namespace $KeyBindingAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyBindingAccessor$Type = ($KeyBindingAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyBindingAccessor_ = $KeyBindingAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/loot/$LootPoolAccessor" {
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$Type} from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer"
import {$LootItemCondition, $LootItemCondition$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootPoolAccessor {

 "fabric_getFunctions"(): ($LootItemFunction)[]
 "fabric_getRolls"(): $NumberProvider
 "fabric_getEntries"(): ($LootPoolEntryContainer)[]
 "fabric_getConditions"(): ($LootItemCondition)[]
 "fabric_getBonusRolls"(): $NumberProvider
}

export namespace $LootPoolAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolAccessor$Type = ($LootPoolAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootPoolAccessor_ = $LootPoolAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadView" {
import {$RenderMaterial, $RenderMaterial$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/material/$RenderMaterial"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MutableQuadView, $MutableQuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$MutableQuadView"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $QuadView {

 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(target: $MutableQuadView$Type): void
 "normalZ"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toVanilla"(spriteIndex: integer, target: (integer)[], targetIndex: integer, isItem: boolean): void
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "lightmap"(arg0: integer): integer
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "hasNormal"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(spriteIndex: integer, sprite: $TextureAtlasSprite$Type, isItem: boolean): $BakedQuad
 "toBakedQuad"(sprite: $TextureAtlasSprite$Type): $BakedQuad
 "copyNormal"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "material"(): $RenderMaterial
 "colorIndex"(): integer
 "faceNormal"(): $Vector3f
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(vertexIndex: integer, spriteIndex: integer): float
/**
 * 
 * @deprecated
 */
 "spriteColor"(vertexIndex: integer, spriteIndex: integer): integer
 "posByIndex"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(vertexIndex: integer, spriteIndex: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$Type): $Vector2f
}

export namespace $QuadView {
const VANILLA_VERTEX_STRIDE: integer
const VANILLA_QUAD_STRIDE: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadView$Type = ($QuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuadView_ = $QuadView$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext$BakedModelConsumer" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"

/**
 * 
 * @deprecated
 */
export interface $RenderContext$BakedModelConsumer extends $Consumer<($BakedModel)> {

 "accept"(arg0: $BakedModel$Type): void
 "accept"(arg0: $BakedModel$Type, arg1: $BlockState$Type): void
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<($BakedModel)>
}

export namespace $RenderContext$BakedModelConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$BakedModelConsumer$Type = ($RenderContext$BakedModelConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext$BakedModelConsumer_ = $RenderContext$BakedModelConsumer$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/gamerule/$GameRulesIntRuleAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GameRulesIntRuleAccessor {

 "getValue"(): integer
 "setValue"(arg0: integer): void
}

export namespace $GameRulesIntRuleAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRulesIntRuleAccessor$Type = ($GameRulesIntRuleAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GameRulesIntRuleAccessor_ = $GameRulesIntRuleAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/material/$RenderMaterial" {
import {$MaterialView, $MaterialView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/material/$MaterialView"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TriState, $TriState$Type} from "packages/net/fabricmc/fabric/api/util/$TriState"
import {$BlendMode, $BlendMode$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/material/$BlendMode"

export interface $RenderMaterial extends $MaterialView {

/**
 * 
 * @deprecated
 */
 "spriteDepth"(): integer
 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
 "blendMode"(): $BlendMode
 "emissive"(): boolean
 "glint"(): $TriState
 "ambientOcclusion"(): $TriState
}

export namespace $RenderMaterial {
const MATERIAL_STANDARD: $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderMaterial$Type = ($RenderMaterial);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderMaterial_ = $RenderMaterial$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelLoadingPlugin" {
import {$ModelLoadingPlugin$Context, $ModelLoadingPlugin$Context$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelLoadingPlugin$Context"

export interface $ModelLoadingPlugin {

 "onInitializeModelLoader"(arg0: $ModelLoadingPlugin$Context$Type): void

(plugin: $ModelLoadingPlugin$Type): void
}

export namespace $ModelLoadingPlugin {
function register(plugin: $ModelLoadingPlugin$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingPlugin$Type = ($ModelLoadingPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoadingPlugin_ = $ModelLoadingPlugin$Type;
}}
declare module "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiCache" {
import {$BlockApiLookup, $BlockApiLookup$Type} from "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockApiCache<A, C> {

 "find"(context: C): A
 "find"(arg0: $BlockState$Type, arg1: C): A
 "getLookup"(): $BlockApiLookup<(A), (C)>
 "getPos"(): $BlockPos
 "getBlockEntity"(): $BlockEntity
 "getWorld"(): $ServerLevel
}

export namespace $BlockApiCache {
function create<A, C>(lookup: $BlockApiLookup$Type<(A), (C)>, world: $ServerLevel$Type, pos: $BlockPos$Type): $BlockApiCache<(A), (C)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiCache$Type<A, C> = ($BlockApiCache<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiCache_<A, C> = $BlockApiCache$Type<(A), (C)>;
}}
declare module "packages/net/fabricmc/fabric/impl/client/model/loading/$ModelLoadingEventDispatcher" {
import {$ModelLoadingPlugin, $ModelLoadingPlugin$Type} from "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelLoadingPlugin"
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $ModelLoadingEventDispatcher {

constructor(loader: $ModelBakery$Type, plugins: $List$Type<($ModelLoadingPlugin$Type)>)

public "modifyModelOnLoad"(id: $ResourceLocation$Type, model: $UnbakedModel$Type): $UnbakedModel
public "modifyModelBeforeBake"(model: $UnbakedModel$Type, id: $ResourceLocation$Type, textureGetter: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, settings: $ModelState$Type, baker: $ModelBaker$Type): $UnbakedModel
public "modifyModelAfterBake"(model: $BakedModel$Type, id: $ResourceLocation$Type, sourceModel: $UnbakedModel$Type, textureGetter: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, settings: $ModelState$Type, baker: $ModelBaker$Type): $BakedModel
public "loadModel"(id: $ResourceLocation$Type): boolean
public "addExtraModels"(extraModelConsumer: $Consumer$Type<($ResourceLocation$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelLoadingEventDispatcher$Type = ($ModelLoadingEventDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelLoadingEventDispatcher_ = $ModelLoadingEventDispatcher$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AllowMouseScroll" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$AllowMouseScroll {

 "allowMouseScroll"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: double, arg4: double): boolean

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: double, arg4: double): boolean
}

export namespace $ScreenMouseEvents$AllowMouseScroll {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AllowMouseScroll$Type = ($ScreenMouseEvents$AllowMouseScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AllowMouseScroll_ = $ScreenMouseEvents$AllowMouseScroll$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$MutableQuadView" {
import {$RenderMaterial, $RenderMaterial$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/material/$RenderMaterial"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Vector2f, $Vector2f$Type} from "packages/org/joml/$Vector2f"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$QuadView, $QuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadView"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $MutableQuadView extends $QuadView {

 "pos"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "pos"(vertexIndex: integer, pos: $Vector3f$Type): $MutableQuadView
 "color"(c0: integer, c1: integer, c2: integer, c3: integer): $MutableQuadView
 "color"(arg0: integer, arg1: integer): $MutableQuadView
 "normal"(arg0: integer, arg1: float, arg2: float, arg3: float): $MutableQuadView
 "normal"(vertexIndex: integer, normal: $Vector3f$Type): $MutableQuadView
 "tag"(arg0: integer): $MutableQuadView
 "copyFrom"(arg0: $QuadView$Type): $MutableQuadView
 "uv"(arg0: integer, arg1: float, arg2: float): $MutableQuadView
 "uv"(vertexIndex: integer, uv: $Vector2f$Type): $MutableQuadView
 "lightmap"(b0: integer, b1: integer, b2: integer, b3: integer): $MutableQuadView
 "lightmap"(arg0: integer, arg1: integer): $MutableQuadView
 "cullFace"(arg0: $Direction$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(vertexIndex: integer, spriteIndex: integer, u: float, v: float): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "sprite"(vertexIndex: integer, spriteIndex: integer, uv: $Vec2$Type): $MutableQuadView
 "fromVanilla"(arg0: $BakedQuad$Type, arg1: $RenderMaterial$Type, arg2: $Direction$Type): $MutableQuadView
 "fromVanilla"(arg0: (integer)[], arg1: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "fromVanilla"(quadData: (integer)[], startIndex: integer, isItem: boolean): $MutableQuadView
 "material"(arg0: $RenderMaterial$Type): $MutableQuadView
 "colorIndex"(arg0: integer): $MutableQuadView
 "nominalFace"(arg0: $Direction$Type): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(spriteIndex: integer, c0: integer, c1: integer, c2: integer, c3: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteColor"(vertexIndex: integer, spriteIndex: integer, color: integer): $MutableQuadView
/**
 * 
 * @deprecated
 */
 "spriteBake"(spriteIndex: integer, sprite: $TextureAtlasSprite$Type, bakeFlags: integer): $MutableQuadView
 "spriteBake"(arg0: $TextureAtlasSprite$Type, arg1: integer): $MutableQuadView
 "x"(arg0: integer): float
 "v"(arg0: integer): float
 "z"(arg0: integer): float
 "u"(arg0: integer): float
 "y"(arg0: integer): float
 "color"(arg0: integer): integer
 "tag"(): integer
 "normalX"(arg0: integer): float
 "normalY"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "copyTo"(target: $MutableQuadView$Type): void
 "normalZ"(arg0: integer): float
/**
 * 
 * @deprecated
 */
 "toVanilla"(spriteIndex: integer, target: (integer)[], targetIndex: integer, isItem: boolean): void
 "toVanilla"(arg0: (integer)[], arg1: integer): void
 "lightmap"(arg0: integer): integer
 "lightFace"(): $Direction
 "cullFace"(): $Direction
 "hasNormal"(arg0: integer): boolean
/**
 * 
 * @deprecated
 */
 "toBakedQuad"(spriteIndex: integer, sprite: $TextureAtlasSprite$Type, isItem: boolean): $BakedQuad
 "toBakedQuad"(sprite: $TextureAtlasSprite$Type): $BakedQuad
 "copyNormal"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "material"(): $RenderMaterial
 "colorIndex"(): integer
 "faceNormal"(): $Vector3f
 "nominalFace"(): $Direction
/**
 * 
 * @deprecated
 */
 "spriteU"(vertexIndex: integer, spriteIndex: integer): float
/**
 * 
 * @deprecated
 */
 "spriteColor"(vertexIndex: integer, spriteIndex: integer): integer
 "posByIndex"(arg0: integer, arg1: integer): float
/**
 * 
 * @deprecated
 */
 "spriteV"(vertexIndex: integer, spriteIndex: integer): float
 "copyPos"(arg0: integer, arg1: $Vector3f$Type): $Vector3f
 "copyUv"(arg0: integer, arg1: $Vector2f$Type): $Vector2f
}

export namespace $MutableQuadView {
const BAKE_ROTATE_NONE: integer
const BAKE_ROTATE_90: integer
const BAKE_ROTATE_180: integer
const BAKE_ROTATE_270: integer
const BAKE_LOCK_UV: integer
const BAKE_FLIP_U: integer
const BAKE_FLIP_V: integer
const BAKE_NORMALIZED: integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableQuadView$Type = ($MutableQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableQuadView_ = $MutableQuadView$Type;
}}
declare module "packages/net/fabricmc/fabric/api/loot/v2/$FabricLootTableBuilder" {
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$LootTable$Builder, $LootTable$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable$Builder"
import {$LootPool, $LootPool$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool"
import {$LootTable, $LootTable$Type} from "packages/net/minecraft/world/level/storage/loot/$LootTable"

export interface $FabricLootTableBuilder {

 "apply"(functions: $Collection$Type<(any)>): $LootTable$Builder
 "apply"(arg0: $LootItemFunction$Type): $LootTable$Builder
 "pool"(pool: $LootPool$Type): $LootTable$Builder
 "pools"(pools: $Collection$Type<(any)>): $LootTable$Builder
 "modifyPools"(modifier: $Consumer$Type<(any)>): $LootTable$Builder
}

export namespace $FabricLootTableBuilder {
function copyOf(table: $LootTable$Type): $LootTable$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootTableBuilder$Type = ($FabricLootTableBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricLootTableBuilder_ = $FabricLootTableBuilder$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/renderer/$SpriteFinderImpl$SpriteFinderAccess" {
import {$SpriteFinderImpl, $SpriteFinderImpl$Type} from "packages/net/fabricmc/fabric/impl/renderer/$SpriteFinderImpl"

export interface $SpriteFinderImpl$SpriteFinderAccess {

 "fabric_spriteFinder"(): $SpriteFinderImpl

(): $SpriteFinderImpl
}

export namespace $SpriteFinderImpl$SpriteFinderAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteFinderImpl$SpriteFinderAccess$Type = ($SpriteFinderImpl$SpriteFinderAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteFinderImpl$SpriteFinderAccess_ = $SpriteFinderImpl$SpriteFinderAccess$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenKeyboardEvents$BeforeKeyPress" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenKeyboardEvents$BeforeKeyPress {

 "beforeKeyPress"(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void

(arg0: $Screen$Type, arg1: integer, arg2: integer, arg3: integer): void
}

export namespace $ScreenKeyboardEvents$BeforeKeyPress {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenKeyboardEvents$BeforeKeyPress$Type = ($ScreenKeyboardEvents$BeforeKeyPress);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenKeyboardEvents$BeforeKeyPress_ = $ScreenKeyboardEvents$BeforeKeyPress$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/client/indigo/renderer/render/$AbstractBlockRenderContext" {
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$QuadEmitter, $QuadEmitter$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadEmitter"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$RenderContext$BakedModelConsumer, $RenderContext$BakedModelConsumer$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext$BakedModelConsumer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AbstractRenderContext, $AbstractRenderContext$Type} from "packages/net/fabricmc/fabric/impl/client/indigo/renderer/render/$AbstractRenderContext"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $AbstractBlockRenderContext extends $AbstractRenderContext {


public "itemTransformationMode"(): $ItemDisplayContext
public "getRenderLayer"(): $RenderType
public "getVanillaModelEmitter"(): $QuadEmitter
public "getModelData"(): $ModelData
public "isFaceCulled"(face: $Direction$Type): boolean
public "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
public "getEmitter"(): $QuadEmitter
get "renderLayer"(): $RenderType
get "vanillaModelEmitter"(): $QuadEmitter
get "modelData"(): $ModelData
get "emitter"(): $QuadEmitter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlockRenderContext$Type = ($AbstractBlockRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractBlockRenderContext_ = $AbstractBlockRenderContext$Type;
}}
declare module "packages/net/fabricmc/fabric/api/datagen/v1/loot/$FabricBlockLootTableGenerator" {
import {$BlockLootSubProvider, $BlockLootSubProvider$Type} from "packages/net/minecraft/data/loot/$BlockLootSubProvider"
import {$ConditionJsonProvider, $ConditionJsonProvider$Type} from "packages/net/fabricmc/fabric/api/resource/conditions/v1/$ConditionJsonProvider"

export interface $FabricBlockLootTableGenerator {

 "withConditions"(...conditions: ($ConditionJsonProvider$Type)[]): $BlockLootSubProvider
}

export namespace $FabricBlockLootTableGenerator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockLootTableGenerator$Type = ($FabricBlockLootTableGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockLootTableGenerator_ = $FabricBlockLootTableGenerator$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$BeforeBake$Context" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelModifier$BeforeBake$Context {

 "loader"(): $ModelBakery
 "id"(): $ResourceLocation
 "settings"(): $ModelState
 "textureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "baker"(): $ModelBaker
}

export namespace $ModelModifier$BeforeBake$Context {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$BeforeBake$Context$Type = ($ModelModifier$BeforeBake$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelModifier$BeforeBake$Context_ = $ModelModifier$BeforeBake$Context$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/lookup/$BlockEntityTypeAccessor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockEntityTypeAccessor {

 "getBlocks"(): $Set<($Block)>

(): $Set<($Block)>
}

export namespace $BlockEntityTypeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeAccessor$Type = ($BlockEntityTypeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityTypeAccessor_ = $BlockEntityTypeAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/client/indigo/renderer/render/$TerrainRenderContext" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$RenderChunkRegion, $RenderChunkRegion$Type} from "packages/net/minecraft/client/renderer/chunk/$RenderChunkRegion"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults, $ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults$Type} from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$AbstractBlockRenderContext, $AbstractBlockRenderContext$Type} from "packages/net/fabricmc/fabric/impl/client/indigo/renderer/render/$AbstractBlockRenderContext"
import {$ThreadLocal, $ThreadLocal$Type} from "packages/java/lang/$ThreadLocal"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$ChunkRenderDispatcher$RenderChunk, $ChunkRenderDispatcher$RenderChunk$Type} from "packages/net/minecraft/client/renderer/chunk/$ChunkRenderDispatcher$RenderChunk"
import {$ChunkBufferBuilderPack, $ChunkBufferBuilderPack$Type} from "packages/net/minecraft/client/renderer/$ChunkBufferBuilderPack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TerrainRenderContext extends $AbstractBlockRenderContext {
static readonly "POOL": $ThreadLocal<($TerrainRenderContext)>

constructor()

public "prepare"(blockView: $RenderChunkRegion$Type, chunkRenderer: $ChunkRenderDispatcher$RenderChunk$Type, renderData: $ChunkRenderDispatcher$RenderChunk$RebuildTask$CompileResults$Type, builders: $ChunkBufferBuilderPack$Type, initializedLayers: $Set$Type<($RenderType$Type)>): void
public "release"(): void
public "tessellateBlock"(blockState: $BlockState$Type, blockPos: $BlockPos$Type, model: $BakedModel$Type, matrixStack: $PoseStack$Type, modelData: $ModelData$Type, renderLayer: $RenderType$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerrainRenderContext$Type = ($TerrainRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerrainRenderContext_ = $TerrainRenderContext$Type;
}}
declare module "packages/net/fabricmc/fabric/api/networking/v1/$PacketSender" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$PacketSendListener, $PacketSendListener$Type} from "packages/net/minecraft/network/$PacketSendListener"
import {$FabricPacket, $FabricPacket$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$FabricPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $PacketSender {

 "sendPacket"<T extends $FabricPacket>(packet: T, callback: $GenericFutureListener$Type<(any)>): void
 "sendPacket"(channel: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type, callback: $PacketSendListener$Type): void
 "sendPacket"<T extends $FabricPacket>(packet: T, callback: $PacketSendListener$Type): void
 "sendPacket"(channel: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type): void
 "sendPacket"(channel: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type, callback: $GenericFutureListener$Type<(any)>): void
 "sendPacket"(arg0: $Packet$Type<(any)>, arg1: $PacketSendListener$Type): void
 "sendPacket"(arg0: $Packet$Type<(any)>): void
 "sendPacket"<T extends $FabricPacket>(packet: T): void
 "sendPacket"(arg0: $Packet$Type<(any)>, arg1: $GenericFutureListener$Type<(any)>): void
 "createPacket"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $Packet<(any)>
}

export namespace $PacketSender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketSender$Type = ($PacketSender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketSender_ = $PacketSender$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$Remove" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenEvents$Remove {

 "onRemove"(arg0: $Screen$Type): void

(arg0: $Screen$Type): void
}

export namespace $ScreenEvents$Remove {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$Remove$Type = ($ScreenEvents$Remove);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$Remove_ = $ScreenEvents$Remove$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$Mesh" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$QuadEmitter, $QuadEmitter$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadEmitter"
import {$QuadView, $QuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadView"

export interface $Mesh {

 "forEach"(arg0: $Consumer$Type<($QuadView$Type)>): void
 "outputTo"(emitter: $QuadEmitter$Type): void

(arg0: $Consumer$Type<($QuadView$Type)>): void
}

export namespace $Mesh {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mesh$Type = ($Mesh);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mesh_ = $Mesh$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$BeforeMouseRelease" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$BeforeMouseRelease {

 "beforeMouseRelease"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: integer): void
}

export namespace $ScreenMouseEvents$BeforeMouseRelease {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$BeforeMouseRelease$Type = ($ScreenMouseEvents$BeforeMouseRelease);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$BeforeMouseRelease_ = $ScreenMouseEvents$BeforeMouseRelease$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/networking/$AbstractChanneledNetworkAddon" {
import {$GenericFutureListener, $GenericFutureListener$Type} from "packages/io/netty/util/concurrent/$GenericFutureListener"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$PacketSendListener, $PacketSendListener$Type} from "packages/net/minecraft/network/$PacketSendListener"
import {$AbstractNetworkAddon, $AbstractNetworkAddon$Type} from "packages/net/fabricmc/fabric/impl/networking/$AbstractNetworkAddon"
import {$FabricPacket, $FabricPacket$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$FabricPacket"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$PacketSender, $PacketSender$Type} from "packages/net/fabricmc/fabric/api/networking/v1/$PacketSender"

export class $AbstractChanneledNetworkAddon<H> extends $AbstractNetworkAddon<(H)> implements $PacketSender {


public "getSendableChannels"(): $Set<($ResourceLocation)>
public "lateInit"(): void
public "sendPacket"(packet: $Packet$Type<(any)>): void
public "sendPacket"(packet: $Packet$Type<(any)>, callback: $GenericFutureListener$Type<(any)>): void
public "sendPacket"(packet: $Packet$Type<(any)>, callback: $PacketSendListener$Type): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $GenericFutureListener$Type<(any)>): void
public "sendPacket"(channel: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type, callback: $PacketSendListener$Type): void
public "sendPacket"<T extends $FabricPacket>(packet: T, callback: $PacketSendListener$Type): void
public "sendPacket"(channel: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type): void
public "sendPacket"(channel: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type, callback: $GenericFutureListener$Type<(any)>): void
public "sendPacket"<T extends $FabricPacket>(packet: T): void
public "createPacket"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $Packet<(any)>
get "sendableChannels"(): $Set<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChanneledNetworkAddon$Type<H> = ($AbstractChanneledNetworkAddon<(H)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractChanneledNetworkAddon_<H> = $AbstractChanneledNetworkAddon$Type<(H)>;
}}
declare module "packages/net/fabricmc/fabric/impl/networking/client/$ClientPlayNetworkAddon" {
import {$ClientPlayNetworking$PlayChannelHandler, $ClientPlayNetworking$PlayChannelHandler$Type} from "packages/net/fabricmc/fabric/api/client/networking/v1/$ClientPlayNetworking$PlayChannelHandler"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$AbstractChanneledNetworkAddon, $AbstractChanneledNetworkAddon$Type} from "packages/net/fabricmc/fabric/impl/networking/$AbstractChanneledNetworkAddon"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ClientboundCustomPayloadPacket, $ClientboundCustomPayloadPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundCustomPayloadPacket"
import {$ClientPacketListener, $ClientPacketListener$Type} from "packages/net/minecraft/client/multiplayer/$ClientPacketListener"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ClientPlayNetworkAddon extends $AbstractChanneledNetworkAddon<($ClientPlayNetworking$PlayChannelHandler)> {

constructor(handler: $ClientPacketListener$Type, client: $Minecraft$Type)

public "handle"(packet: $ClientboundCustomPayloadPacket$Type): boolean
public "lateInit"(): void
public "onServerReady"(): void
public "createPacket"(channelName: $ResourceLocation$Type, buf: $FriendlyByteBuf$Type): $Packet<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayNetworkAddon$Type = ($ClientPlayNetworkAddon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPlayNetworkAddon_ = $ClientPlayNetworkAddon$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$CloseCallback" {
import {$TransactionContext$Result, $TransactionContext$Result$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$Result"
import {$TransactionContext, $TransactionContext$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext"

export interface $TransactionContext$CloseCallback {

 "onClose"(arg0: $TransactionContext$Type, arg1: $TransactionContext$Result$Type): void

(arg0: $TransactionContext$Type, arg1: $TransactionContext$Result$Type): void
}

export namespace $TransactionContext$CloseCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$CloseCallback$Type = ($TransactionContext$CloseCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransactionContext$CloseCallback_ = $TransactionContext$CloseCallback$Type;
}}
declare module "packages/net/fabricmc/fabric/api/rendering/data/v1/$RenderAttachedBlockView" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$LevelLightEngine, $LevelLightEngine$Type} from "packages/net/minecraft/world/level/lighting/$LevelLightEngine"
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
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$ClipBlockStateContext, $ClipBlockStateContext$Type} from "packages/net/minecraft/world/level/$ClipBlockStateContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

/**
 * 
 * @deprecated
 */
export interface $RenderAttachedBlockView extends $BlockAndTintGetter {

/**
 * 
 * @deprecated
 */
 "getBlockEntityRenderAttachment"(pos: $BlockPos$Type): any
 "getBlockTint"(arg0: $BlockPos$Type, arg1: $ColorResolver$Type): integer
 "canSeeSky"(arg0: $BlockPos$Type): boolean
 "getRawBrightness"(arg0: $BlockPos$Type, arg1: integer): integer
 "getBrightness"(arg0: $LightLayer$Type, arg1: $BlockPos$Type): integer
 "getLightEngine"(): $LevelLightEngine
 "getShade"(arg0: $Direction$Type, arg1: boolean): float
 "getBlockState"(arg0: $BlockPos$Type): $BlockState
 "getBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getFluidState"(arg0: $BlockPos$Type): $FluidState
 "clip"(arg0: $ClipContext$Type): $BlockHitResult
 "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$Type, arg1: $BlockEntityType$Type<(T)>): $Optional<(T)>
 "getBlockStates"(arg0: $AABB$Type): $Stream<($BlockState)>
 "getLightEmission"(arg0: $BlockPos$Type): integer
 "getMaxLightLevel"(): integer
 "getBlockFloorHeight"(arg0: $VoxelShape$Type, arg1: $Supplier$Type<($VoxelShape$Type)>): double
 "clipWithInteractionOverride"(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: $BlockPos$Type, arg3: $VoxelShape$Type, arg4: $BlockState$Type): $BlockHitResult
 "isBlockInLine"(arg0: $ClipBlockStateContext$Type): $BlockHitResult
 "getBlockFloorHeight"(arg0: $BlockPos$Type): double
 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
 "getMaxBuildHeight"(): integer
 "getHeight"(): integer
 "getMinBuildHeight"(): integer
 "isOutsideBuildHeight"(arg0: integer): boolean
 "getMinSection"(): integer
 "getSectionIndex"(arg0: integer): integer
 "getSectionsCount"(): integer
 "isOutsideBuildHeight"(arg0: $BlockPos$Type): boolean
 "getMaxSection"(): integer
 "getSectionIndexFromSectionY"(arg0: integer): integer
 "getSectionYFromSectionIndex"(arg0: integer): integer
 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
 "getBlockEntityRenderData"(pos: $BlockPos$Type): any
 "hasBiomes"(): boolean
 "getBiomeFabric"(pos: $BlockPos$Type): $Holder<($Biome)>
}

export namespace $RenderAttachedBlockView {
function traverseBlocks<T, C>(arg0: $Vec3$Type, arg1: $Vec3$Type, arg2: C, arg3: $BiFunction$Type<(C), ($BlockPos$Type), (T)>, arg4: $Function$Type<(C), (T)>): T
function create(arg0: integer, arg1: integer): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachedBlockView$Type = ($RenderAttachedBlockView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderAttachedBlockView_ = $RenderAttachedBlockView$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/storage/$TransferVariant" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $TransferVariant<O> {

 "isBlank"(): boolean
 "getObject"(): O
 "toNbt"(): $CompoundTag
 "toPacket"(arg0: $FriendlyByteBuf$Type): void
 "nbtMatches"(other: $CompoundTag$Type): boolean
 "isOf"(object: O): boolean
 "copyOrCreateNbt"(): $CompoundTag
 "copyNbt"(): $CompoundTag
 "hasNbt"(): boolean
 "getNbt"(): $CompoundTag
}

export namespace $TransferVariant {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferVariant$Type<O> = ($TransferVariant<(O)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferVariant_<O> = $TransferVariant$Type<(O)>;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$Transaction$Lifecycle" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Transaction$Lifecycle extends $Enum<($Transaction$Lifecycle)> {
static readonly "NONE": $Transaction$Lifecycle
static readonly "OPEN": $Transaction$Lifecycle
static readonly "CLOSING": $Transaction$Lifecycle
static readonly "OUTER_CLOSING": $Transaction$Lifecycle


public static "values"(): ($Transaction$Lifecycle)[]
public static "valueOf"(name: string): $Transaction$Lifecycle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transaction$Lifecycle$Type = (("closing") | ("none") | ("outer_closing") | ("open")) | ($Transaction$Lifecycle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transaction$Lifecycle_ = $Transaction$Lifecycle$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$AfterRender" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $ScreenEvents$AfterRender {

 "afterRender"(arg0: $Screen$Type, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: float): void

(arg0: $Screen$Type, arg1: $GuiGraphics$Type, arg2: integer, arg3: integer, arg4: float): void
}

export namespace $ScreenEvents$AfterRender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$AfterRender$Type = ($ScreenEvents$AfterRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$AfterRender_ = $ScreenEvents$AfterRender$Type;
}}
declare module "packages/net/fabricmc/fabric/api/block/v1/$FabricBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $FabricBlock {

 "getAppearance"(state: $BlockState$Type, renderView: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, sourceState: $BlockState$Type, sourcePos: $BlockPos$Type): $BlockState
}

export namespace $FabricBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlock$Type = ($FabricBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlock_ = $FabricBlock$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/itemgroup/$FabricItemGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FabricItemGroup {

 "getPage"(): integer
 "setPage"(arg0: integer): void
}

export namespace $FabricItemGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricItemGroup$Type = ($FabricItemGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricItemGroup_ = $FabricItemGroup$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenEvents$AfterTick" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenEvents$AfterTick {

 "afterTick"(arg0: $Screen$Type): void

(arg0: $Screen$Type): void
}

export namespace $ScreenEvents$AfterTick {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenEvents$AfterTick$Type = ($ScreenEvents$AfterTick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenEvents$AfterTick_ = $ScreenEvents$AfterTick$Type;
}}
declare module "packages/net/fabricmc/fabric/api/item/v1/$CustomDamageHandler" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $CustomDamageHandler {

 "damage"(arg0: $ItemStack$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $Consumer$Type<($LivingEntity$Type)>): integer

(arg0: $ItemStack$Type, arg1: integer, arg2: $LivingEntity$Type, arg3: $Consumer$Type<($LivingEntity$Type)>): integer
}

export namespace $CustomDamageHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDamageHandler$Type = ($CustomDamageHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomDamageHandler_ = $CustomDamageHandler$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$OnLoad$Context" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"

export interface $ModelModifier$OnLoad$Context {

 "loader"(): $ModelBakery
 "id"(): $ResourceLocation
 "getOrLoadModel"(arg0: $ResourceLocation$Type): $UnbakedModel
}

export namespace $ModelModifier$OnLoad$Context {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$OnLoad$Context$Type = ($ModelModifier$OnLoad$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelModifier$OnLoad$Context_ = $ModelModifier$OnLoad$Context$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext$QuadTransform" {
import {$MutableQuadView, $MutableQuadView$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$MutableQuadView"

export interface $RenderContext$QuadTransform {

 "transform"(arg0: $MutableQuadView$Type): boolean

(arg0: $MutableQuadView$Type): boolean
}

export namespace $RenderContext$QuadTransform {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$QuadTransform$Type = ($RenderContext$QuadTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext$QuadTransform_ = $RenderContext$QuadTransform$Type;
}}
declare module "packages/net/fabricmc/fabric/api/recipe/v1/ingredient/$CustomIngredientSerializer" {
import {$CustomIngredient, $CustomIngredient$Type} from "packages/net/fabricmc/fabric/api/recipe/v1/ingredient/$CustomIngredient"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CustomIngredientSerializer<T extends $CustomIngredient> {

 "write"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "write"(arg0: $JsonObject$Type, arg1: T): void
 "read"(arg0: $FriendlyByteBuf$Type): T
 "read"(arg0: $JsonObject$Type): T
 "getIdentifier"(): $ResourceLocation
}

export namespace $CustomIngredientSerializer {
function get(identifier: $ResourceLocation$Type): $CustomIngredientSerializer<(any)>
function register(serializer: $CustomIngredientSerializer$Type<(any)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomIngredientSerializer$Type<T> = ($CustomIngredientSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomIngredientSerializer_<T> = $CustomIngredientSerializer$Type<(T)>;
}}
declare module "packages/net/fabricmc/fabric/impl/datagen/$DataGeneratorExtension" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$DataGenerator$PackGenerator, $DataGenerator$PackGenerator$Type} from "packages/net/minecraft/data/$DataGenerator$PackGenerator"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $DataGeneratorExtension {

 "createPack"(arg0: string, arg1: $PackOutput$Type): $DataGenerator$PackGenerator
 "createBuiltinResourcePack"(arg0: boolean, arg1: $ResourceLocation$Type, arg2: $IModInfo$Type, arg3: boolean): $Pair<($DataGenerator$PackGenerator), ($Path)>
}

export namespace $DataGeneratorExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataGeneratorExtension$Type = ($DataGeneratorExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataGeneratorExtension_ = $DataGeneratorExtension$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/biome/$MultiNoiseSamplerHooks" {
import {$ImprovedNoise, $ImprovedNoise$Type} from "packages/net/minecraft/world/level/levelgen/synth/$ImprovedNoise"

export interface $MultiNoiseSamplerHooks {

 "fabric_setSeed"(arg0: long): void
 "fabric_getEndBiomesSampler"(): $ImprovedNoise
 "fabric_getSeed"(): long
}

export namespace $MultiNoiseSamplerHooks {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiNoiseSamplerHooks$Type = ($MultiNoiseSamplerHooks);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiNoiseSamplerHooks_ = $MultiNoiseSamplerHooks$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/model/loading/v1/$ModelModifier$AfterBake$Context" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelModifier$AfterBake$Context {

 "loader"(): $ModelBakery
 "id"(): $ResourceLocation
 "settings"(): $ModelState
 "textureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "baker"(): $ModelBaker
 "sourceModel"(): $UnbakedModel
}

export namespace $ModelModifier$AfterBake$Context {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelModifier$AfterBake$Context$Type = ($ModelModifier$AfterBake$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelModifier$AfterBake$Context_ = $ModelModifier$AfterBake$Context$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/biome/$SpawnSettingsBuilderAccessor" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $SpawnSettingsBuilderAccessor {

 "getSpawnCosts"(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>

(): $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
}

export namespace $SpawnSettingsBuilderAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnSettingsBuilderAccessor$Type = ($SpawnSettingsBuilderAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpawnSettingsBuilderAccessor_ = $SpawnSettingsBuilderAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/util/$TriState" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BooleanFunction, $BooleanFunction$Type} from "packages/net/fabricmc/fabric/api/util/$BooleanFunction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TriState extends $Enum<($TriState)> {
static readonly "FALSE": $TriState
static readonly "DEFAULT": $TriState
static readonly "TRUE": $TriState


public "get"(): boolean
public static "values"(): ($TriState)[]
public static "valueOf"(name: string): $TriState
public "map"<T>(mapper: $BooleanFunction$Type<(any)>): $Optional<(T)>
public static "of"(bool: boolean): $TriState
public static "of"(bool: boolean): $TriState
public "orElse"(value: boolean): boolean
public "orElseThrow"<X extends $Throwable>(exceptionSupplier: $Supplier$Type<(X)>): boolean
public "orElseGet"(supplier: $BooleanSupplier$Type): boolean
public "getBoxed"(): boolean
get "boxed"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriState$Type = (("default") | ("false") | ("true")) | ($TriState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriState_ = $TriState$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$Transaction" {
import {$TransactionContext$CloseCallback, $TransactionContext$CloseCallback$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$CloseCallback"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$TransactionContext, $TransactionContext$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext"
import {$Transaction$Lifecycle, $Transaction$Lifecycle$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$Transaction$Lifecycle"
import {$TransactionContext$OuterCloseCallback, $TransactionContext$OuterCloseCallback$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext$OuterCloseCallback"

export interface $Transaction extends $AutoCloseable, $TransactionContext {

 "close"(): void
 "commit"(): void
 "abort"(): void
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$Type): void
 "nestingDepth"(): integer
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$Type): void
 "getOpenTransaction"(arg0: integer): $Transaction
 "openNested"(): $Transaction
}

export namespace $Transaction {
function isOpen(): boolean
function getLifecycle(): $Transaction$Lifecycle
function openNested(maybeParent: $TransactionContext$Type): $Transaction
function openOuter(): $Transaction
function getCurrentUnsafe(): $TransactionContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transaction$Type = ($Transaction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Transaction_ = $Transaction$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/registry/sync/$RegistriesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RegistriesAccessor<T> {

}

export namespace $RegistriesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistriesAccessor$Type<T> = ($RegistriesAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistriesAccessor_<T> = $RegistriesAccessor$Type<(T)>;
}}
declare module "packages/net/fabricmc/fabric/impl/attachment/$AttachmentTargetImpl" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AttachmentType, $AttachmentType$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentType"
import {$UnaryOperator, $UnaryOperator$Type} from "packages/java/util/function/$UnaryOperator"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AttachmentTargetImpl extends $AttachmentTarget {

 "fabric_writeAttachmentsToNbt"(nbt: $CompoundTag$Type): void
 "fabric_readAttachmentsFromNbt"(nbt: $CompoundTag$Type): void
 "fabric_getAttachments"(): $Map<($AttachmentType<(any)>), (any)>
 "fabric_hasPersistentAttachments"(): boolean
 "setAttached"<A>(type: $AttachmentType$Type<(A)>, value: A): A
 "getAttached"<A>(type: $AttachmentType$Type<(A)>): A
 "hasAttached"(type: $AttachmentType$Type<(any)>): boolean
 "getAttachedOrThrow"<A>(type: $AttachmentType$Type<(A)>): A
 "getAttachedOrSet"<A>(type: $AttachmentType$Type<(A)>, defaultValue: A): A
 "getAttachedOrElse"<A>(type: $AttachmentType$Type<(A)>, defaultValue: A): A
 "getAttachedOrGet"<A>(type: $AttachmentType$Type<(A)>, defaultValue: $Supplier$Type<(A)>): A
 "removeAttached"<A>(type: $AttachmentType$Type<(A)>): A
 "modifyAttached"<A>(type: $AttachmentType$Type<(A)>, modifier: $UnaryOperator$Type<(A)>): A
 "getAttachedOrCreate"<A>(type: $AttachmentType$Type<(A)>): A
 "getAttachedOrCreate"<A>(type: $AttachmentType$Type<(A)>, initializer: $Supplier$Type<(A)>): A
}

export namespace $AttachmentTargetImpl {
function transfer(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachmentTargetImpl$Type = ($AttachmentTargetImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttachmentTargetImpl_ = $AttachmentTargetImpl$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/content/registry/$AxeItemAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AxeItemAccessor {

}

export namespace $AxeItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AxeItemAccessor$Type = ($AxeItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AxeItemAccessor_ = $AxeItemAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/api/recipe/v1/ingredient/$FabricIngredient" {
import {$CustomIngredient, $CustomIngredient$Type} from "packages/net/fabricmc/fabric/api/recipe/v1/ingredient/$CustomIngredient"

export interface $FabricIngredient {

 "getCustomIngredient"(): $CustomIngredient
 "requiresTesting"(): boolean
}

export namespace $FabricIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricIngredient$Type = ($FabricIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricIngredient_ = $FabricIngredient$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/event/lifecycle/$LoadedChunksCache" {
import {$LevelChunk, $LevelChunk$Type} from "packages/net/minecraft/world/level/chunk/$LevelChunk"
import {$Set, $Set$Type} from "packages/java/util/$Set"

export interface $LoadedChunksCache {

 "fabric_markUnloaded"(arg0: $LevelChunk$Type): void
 "fabric_getLoadedChunks"(): $Set<($LevelChunk)>
 "fabric_markLoaded"(arg0: $LevelChunk$Type): void
}

export namespace $LoadedChunksCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadedChunksCache$Type = ($LoadedChunksCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LoadedChunksCache_ = $LoadedChunksCache$Type;
}}
declare module "packages/net/fabricmc/fabric/api/registry/$FlammableBlockRegistry$Entry" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $FlammableBlockRegistry$Entry {

constructor(burn: integer, spread: integer)

public "equals"(o: any): boolean
public "hashCode"(): integer
public "getSpreadChance"(): integer
public "getBurnChance"(): integer
get "spreadChance"(): integer
get "burnChance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlammableBlockRegistry$Entry$Type = ($FlammableBlockRegistry$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlammableBlockRegistry$Entry_ = $FlammableBlockRegistry$Entry$Type;
}}
declare module "packages/net/fabricmc/fabric/api/loot/v2/$FabricLootPoolBuilder" {
import {$LootPool$Builder, $LootPool$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool$Builder"
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$Type} from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer"
import {$LootPool, $LootPool$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool"
import {$LootItemCondition, $LootItemCondition$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export interface $FabricLootPoolBuilder {

 "apply"(arg0: $LootItemFunction$Type): $LootPool$Builder
 "apply"(functions: $Collection$Type<(any)>): $LootPool$Builder
 "with"(entry: $LootPoolEntryContainer$Type): $LootPool$Builder
 "with"(entries: $Collection$Type<(any)>): $LootPool$Builder
 "conditionally"(condition: $LootItemCondition$Type): $LootPool$Builder
 "conditionally"(conditions: $Collection$Type<(any)>): $LootPool$Builder
}

export namespace $FabricLootPoolBuilder {
function copyOf(pool: $LootPool$Type): $LootPool$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricLootPoolBuilder$Type = ($FabricLootPoolBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricLootPoolBuilder_ = $FabricLootPoolBuilder$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext" {
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$RenderContext$QuadTransform, $RenderContext$QuadTransform$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext$QuadTransform"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$QuadEmitter, $QuadEmitter$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadEmitter"
import {$RenderContext$BakedModelConsumer, $RenderContext$BakedModelConsumer$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext$BakedModelConsumer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Mesh, $Mesh$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$Mesh"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $RenderContext {

 "itemTransformationMode"(): $ItemDisplayContext
 "getRenderLayer"(): $RenderType
 "getModelData"(): $ModelData
 "pushTransform"(arg0: $RenderContext$QuadTransform$Type): void
 "isFaceCulled"(face: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
 "fallbackConsumer"(): $Consumer<($BakedModel)>
 "hasTransform"(): boolean
 "popTransform"(): void
/**
 * 
 * @deprecated
 */
 "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
/**
 * 
 * @deprecated
 */
 "meshConsumer"(): $Consumer<($Mesh)>
 "getEmitter"(): $QuadEmitter
}

export namespace $RenderContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$Type = ($RenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderContext_ = $RenderContext$Type;
}}
declare module "packages/net/fabricmc/fabric/api/transfer/v1/fluid/$FluidVariant" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$TransferVariant, $TransferVariant$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/storage/$TransferVariant"

export interface $FluidVariant extends $TransferVariant<($Fluid)> {

 "getFluid"(): $Fluid
 "isBlank"(): boolean
 "getObject"(): $Fluid
 "toNbt"(): $CompoundTag
 "toPacket"(arg0: $FriendlyByteBuf$Type): void
 "nbtMatches"(other: $CompoundTag$Type): boolean
 "isOf"(object: $Fluid$Type): boolean
 "copyOrCreateNbt"(): $CompoundTag
 "copyNbt"(): $CompoundTag
 "hasNbt"(): boolean
 "getNbt"(): $CompoundTag
}

export namespace $FluidVariant {
function of(fluid: $Fluid$Type, nbt: $CompoundTag$Type): $FluidVariant
function of(fluid: $Fluid$Type): $FluidVariant
function fromPacket(buf: $FriendlyByteBuf$Type): $FluidVariant
function fromNbt(nbt: $CompoundTag$Type): $FluidVariant
function blank(): $FluidVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVariant$Type = ($FluidVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidVariant_ = $FluidVariant$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/item/$ItemExtensions" {
import {$CustomDamageHandler, $CustomDamageHandler$Type} from "packages/net/fabricmc/fabric/api/item/v1/$CustomDamageHandler"
import {$EquipmentSlotProvider, $EquipmentSlotProvider$Type} from "packages/net/fabricmc/fabric/api/item/v1/$EquipmentSlotProvider"

export interface $ItemExtensions {

 "fabric_getCustomDamageHandler"(): $CustomDamageHandler
 "fabric_getEquipmentSlotProvider"(): $EquipmentSlotProvider
 "fabric_setEquipmentSlotProvider"(arg0: $EquipmentSlotProvider$Type): void
 "fabric_setCustomDamageHandler"(arg0: $CustomDamageHandler$Type): void
}

export namespace $ItemExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemExtensions$Type = ($ItemExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemExtensions_ = $ItemExtensions$Type;
}}
declare module "packages/net/fabricmc/fabric/api/client/screen/v1/$ScreenMouseEvents$AfterMouseScroll" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $ScreenMouseEvents$AfterMouseScroll {

 "afterMouseScroll"(arg0: $Screen$Type, arg1: double, arg2: double, arg3: double, arg4: double): void

(arg0: $Screen$Type, arg1: double, arg2: double, arg3: double, arg4: double): void
}

export namespace $ScreenMouseEvents$AfterMouseScroll {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenMouseEvents$AfterMouseScroll$Type = ($ScreenMouseEvents$AfterMouseScroll);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ScreenMouseEvents$AfterMouseScroll_ = $ScreenMouseEvents$AfterMouseScroll$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/transfer/item/$SpecialLogicInventory" {
import {$TransactionContext, $TransactionContext$Type} from "packages/net/fabricmc/fabric/api/transfer/v1/transaction/$TransactionContext"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $SpecialLogicInventory {

 "fabric_onTransfer"(slot: integer, transaction: $TransactionContext$Type): void
 "fabric_setSuppress"(arg0: boolean): void
 "fabric_onFinalCommit"(arg0: integer, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
}

export namespace $SpecialLogicInventory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialLogicInventory$Type = ($SpecialLogicInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpecialLogicInventory_ = $SpecialLogicInventory$Type;
}}
declare module "packages/net/fabricmc/fabric/api/rendering/data/v1/$RenderAttachmentBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * 
 * @deprecated
 */
export interface $RenderAttachmentBlockEntity {

/**
 * 
 * @deprecated
 */
 "getRenderAttachmentData"(): any

(): any
}

export namespace $RenderAttachmentBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderAttachmentBlockEntity$Type = ($RenderAttachmentBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderAttachmentBlockEntity_ = $RenderAttachmentBlockEntity$Type;
}}
declare module "packages/net/fabricmc/fabric/api/block/v1/$FabricBlockState" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $FabricBlockState {

 "getAppearance"(renderView: $BlockAndTintGetter$Type, pos: $BlockPos$Type, side: $Direction$Type, sourceState: $BlockState$Type, sourcePos: $BlockPos$Type): $BlockState
}

export namespace $FabricBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FabricBlockState$Type = ($FabricBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FabricBlockState_ = $FabricBlockState$Type;
}}
declare module "packages/net/fabricmc/fabric/api/renderer/v1/material/$MaterialView" {
import {$TriState, $TriState$Type} from "packages/net/fabricmc/fabric/api/util/$TriState"
import {$BlendMode, $BlendMode$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/material/$BlendMode"

export interface $MaterialView {

 "disableDiffuse"(): boolean
 "disableColorIndex"(): boolean
 "blendMode"(): $BlendMode
 "emissive"(): boolean
 "glint"(): $TriState
 "ambientOcclusion"(): $TriState
}

export namespace $MaterialView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialView$Type = ($MaterialView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterialView_ = $MaterialView$Type;
}}
declare module "packages/net/fabricmc/fabric/mixin/client/rendering/$DimensionEffectsAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DimensionEffectsAccessor {

}

export namespace $DimensionEffectsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionEffectsAccessor$Type = ($DimensionEffectsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionEffectsAccessor_ = $DimensionEffectsAccessor$Type;
}}
declare module "packages/net/fabricmc/fabric/impl/client/indigo/renderer/accessor/$AccessChunkRendererRegion" {
import {$TerrainRenderContext, $TerrainRenderContext$Type} from "packages/net/fabricmc/fabric/impl/client/indigo/renderer/render/$TerrainRenderContext"

export interface $AccessChunkRendererRegion {

 "fabric_setRenderer"(arg0: $TerrainRenderContext$Type): void
 "fabric_getRenderer"(): $TerrainRenderContext
}

export namespace $AccessChunkRendererRegion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessChunkRendererRegion$Type = ($AccessChunkRendererRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessChunkRendererRegion_ = $AccessChunkRendererRegion$Type;
}}
declare module "packages/net/fabricmc/fabric/api/blockview/v2/$RenderDataBlockEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderDataBlockEntity {

 "getRenderData"(): any
}

export namespace $RenderDataBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderDataBlockEntity$Type = ($RenderDataBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderDataBlockEntity_ = $RenderDataBlockEntity$Type;
}}
declare module "packages/net/fabricmc/fabric/api/lookup/v1/block/$BlockApiLookup$BlockEntityApiProvider" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"

export interface $BlockApiLookup$BlockEntityApiProvider<A, C> {

 "find"(arg0: $BlockEntity$Type, arg1: C): A

(arg0: $BlockEntity$Type, arg1: C): A
}

export namespace $BlockApiLookup$BlockEntityApiProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockApiLookup$BlockEntityApiProvider$Type<A, C> = ($BlockApiLookup$BlockEntityApiProvider<(A), (C)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockApiLookup$BlockEntityApiProvider_<A, C> = $BlockApiLookup$BlockEntityApiProvider$Type<(A), (C)>;
}}
declare module "packages/net/fabricmc/fabric/impl/client/indigo/renderer/render/$AbstractRenderContext" {
import {$RenderContext$QuadTransform, $RenderContext$QuadTransform$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext$QuadTransform"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$QuadEmitter, $QuadEmitter$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$QuadEmitter"
import {$RenderContext$BakedModelConsumer, $RenderContext$BakedModelConsumer$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext$BakedModelConsumer"
import {$RenderContext, $RenderContext$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Mesh, $Mesh$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/mesh/$Mesh"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $AbstractRenderContext implements $RenderContext {


public "pushTransform"(transform: $RenderContext$QuadTransform$Type): void
public "hasTransform"(): boolean
public "popTransform"(): void
/**
 * 
 * @deprecated
 */
public "meshConsumer"(): $Consumer<($Mesh)>
public "itemTransformationMode"(): $ItemDisplayContext
public "getRenderLayer"(): $RenderType
public "getModelData"(): $ModelData
public "isFaceCulled"(face: $Direction$Type): boolean
/**
 * 
 * @deprecated
 */
public "fallbackConsumer"(): $Consumer<($BakedModel)>
/**
 * 
 * @deprecated
 */
public "bakedModelConsumer"(): $RenderContext$BakedModelConsumer
public "getEmitter"(): $QuadEmitter
get "renderLayer"(): $RenderType
get "modelData"(): $ModelData
get "emitter"(): $QuadEmitter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractRenderContext$Type = ($AbstractRenderContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractRenderContext_ = $AbstractRenderContext$Type;
}}
