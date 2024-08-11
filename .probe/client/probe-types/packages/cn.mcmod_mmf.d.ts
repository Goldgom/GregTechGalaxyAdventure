declare module "packages/cn/mcmod_mmf/mmlib/block/$BaseCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BaseCropBlock extends $CropBlock {
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "withAge"(arg0: integer): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCropBlock$Type = ($BaseCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseCropBlock_ = $BaseCropBlock$Type;
}}
declare module "packages/cn/mcmod_mmf/mmlib/block/$HighCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BaseCropBlock, $BaseCropBlock$Type} from "packages/cn/mcmod_mmf/mmlib/block/$BaseCropBlock"

export class $HighCropBlock extends $BaseCropBlock {
static readonly "UPPER": $BooleanProperty
static readonly "MAX_AGE": integer
static readonly "AGE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<(any)>)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getStateForAge"(arg0: integer): $BlockState
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "getUpperProperty"(): $BooleanProperty
public "getGrowUpperAge"(): integer
get "upperProperty"(): $BooleanProperty
get "growUpperAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HighCropBlock$Type = ($HighCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HighCropBlock_ = $HighCropBlock$Type;
}}
declare module "packages/cn/mcmod_mmf/mmlib/item/$ItemDrinkBase" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FoodInfo, $FoodInfo$Type} from "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemFoodBase, $ItemFoodBase$Type} from "packages/cn/mcmod_mmf/mmlib/item/$ItemFoodBase"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemDrinkBase extends $ItemFoodBase {
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

constructor(arg0: $Item$Properties$Type, arg1: $FoodInfo$Type)

public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getFoodProperties"(): $FoodProperties
public "getFoodInfo"(): $FoodInfo
get "foodProperties"(): $FoodProperties
get "foodInfo"(): $FoodInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDrinkBase$Type = ($ItemDrinkBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemDrinkBase_ = $ItemDrinkBase$Type;
}}
declare module "packages/cn/mcmod_mmf/mmlib/item/$IFoodLike" {
import {$FoodInfo, $FoodInfo$Type} from "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo"

export interface $IFoodLike {

 "getFoodInfo"(): $FoodInfo

(): $FoodInfo
}

export namespace $IFoodLike {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFoodLike$Type = ($IFoodLike);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFoodLike_ = $IFoodLike$Type;
}}
declare module "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FoodInfo$Builder, $FoodInfo$Builder$Type} from "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo$Builder"

export class $FoodInfo {


public "getName"(): string
public static "builder"(): $FoodInfo$Builder
public "getAmount"(): integer
public "getWater"(): float
public "getCalories"(): float
public "getEatTime"(): integer
public "isAlwaysEat"(): boolean
public "getEffects"(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>
public "isNeverDecay"(): boolean
public "getCookingTemp"(): float
public "isWolfFood"(): boolean
public "isHeatable"(): boolean
public "getNutrients"(): (float)[]
public "getHeatCapacity"(): float
public "getDecayModifier"(): float
public "getCompostChance"(): float
get "name"(): string
get "amount"(): integer
get "water"(): float
get "calories"(): float
get "eatTime"(): integer
get "alwaysEat"(): boolean
get "effects"(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>
get "neverDecay"(): boolean
get "cookingTemp"(): float
get "wolfFood"(): boolean
get "heatable"(): boolean
get "nutrients"(): (float)[]
get "heatCapacity"(): float
get "decayModifier"(): float
get "compostChance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodInfo$Type = ($FoodInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodInfo_ = $FoodInfo$Type;
}}
declare module "packages/cn/mcmod_mmf/mmlib/item/$ItemFoodBase" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IFoodLike, $IFoodLike$Type} from "packages/cn/mcmod_mmf/mmlib/item/$IFoodLike"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FoodInfo, $FoodInfo$Type} from "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFoodBase extends $Item implements $IFoodLike {
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

constructor(arg0: $Item$Properties$Type, arg1: $FoodInfo$Type)

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "isEdible"(): boolean
public "getFoodProperties"(): $FoodProperties
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "getFoodInfo"(): $FoodInfo
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
get "edible"(): boolean
get "foodProperties"(): $FoodProperties
get "foodInfo"(): $FoodInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFoodBase$Type = ($ItemFoodBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFoodBase_ = $ItemFoodBase$Type;
}}
declare module "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo$Builder" {
import {$FoodInfo, $FoodInfo$Type} from "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $FoodInfo$Builder {

constructor()

public "name"(arg0: string): $FoodInfo$Builder
public "build"(): $FoodInfo
public "amount"(arg0: integer): $FoodInfo$Builder
public "alwaysEat"(): $FoodInfo$Builder
public "fruit"(arg0: float): $FoodInfo$Builder
public "compostChance"(arg0: float): $FoodInfo$Builder
public "meat"(arg0: float): $FoodInfo$Builder
public "water"(arg0: float): $FoodInfo$Builder
public "grain"(arg0: float): $FoodInfo$Builder
public "addEffect"(arg0: $Supplier$Type<($MobEffectInstance$Type)>, arg1: float): $FoodInfo$Builder
public "amountAndCalories"(arg0: integer, arg1: float): $FoodInfo$Builder
public "nutrients"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): $FoodInfo$Builder
public "nutrients"(arg0: float): $FoodInfo$Builder
public "heatCapacity"(arg0: float): $FoodInfo$Builder
public "decayModifier"(arg0: float): $FoodInfo$Builder
public "cookingTemp"(arg0: float): $FoodInfo$Builder
public "wolfFood"(): $FoodInfo$Builder
public "vegatable"(arg0: float): $FoodInfo$Builder
public "calories"(arg0: float): $FoodInfo$Builder
public "dairy"(arg0: float): $FoodInfo$Builder
public "eatTime"(arg0: integer): $FoodInfo$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodInfo$Builder$Type = ($FoodInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodInfo$Builder_ = $FoodInfo$Builder$Type;
}}
declare module "packages/cn/mcmod_mmf/mmlib/item/$ItemFoodSeeds" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IFoodLike, $IFoodLike$Type} from "packages/cn/mcmod_mmf/mmlib/item/$IFoodLike"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FoodInfo, $FoodInfo$Type} from "packages/cn/mcmod_mmf/mmlib/item/info/$FoodInfo"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemFoodSeeds extends $ItemNameBlockItem implements $IFoodLike {
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $FoodInfo$Type)

public "isEdible"(): boolean
public "getFoodProperties"(): $FoodProperties
public "getFoodInfo"(): $FoodInfo
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "edible"(): boolean
get "foodProperties"(): $FoodProperties
get "foodInfo"(): $FoodInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFoodSeeds$Type = ($ItemFoodSeeds);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemFoodSeeds_ = $ItemFoodSeeds$Type;
}}
