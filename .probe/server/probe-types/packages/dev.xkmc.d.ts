declare module "packages/dev/xkmc/twilightdelight/content/item/food/$InBowlItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$TDFoodItem, $TDFoodItem$Type} from "packages/dev/xkmc/twilightdelight/content/item/food/$TDFoodItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InBowlItem extends $TDFoodItem {
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

public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InBowlItem$Type = ($InBowlItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InBowlItem_ = $InBowlItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$HayTrapDoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HayTrapDoorBlock extends $TrapDoorBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HayTrapDoorBlock$Type = ($HayTrapDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HayTrapDoorBlock_ = $HayTrapDoorBlock$Type;
}}
declare module "packages/dev/xkmc/fastprojectileapi/render/$DoubleLayerLaserType$Ins" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"

export class $DoubleLayerLaserType$Ins extends $Record {

constructor(m3: $Matrix3f$Type, m4: $Matrix4f$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "m3"(): $Matrix3f
public "m4"(): $Matrix4f
public "texInner"(arg0: $VertexConsumer$Type, arg1: integer): void
public "texOuter"(arg0: boolean, arg1: $VertexConsumer$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleLayerLaserType$Ins$Type = ($DoubleLayerLaserType$Ins);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleLayerLaserType$Ins_ = $DoubleLayerLaserType$Ins$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$DurianFleshItem" {
import {$FDFoodItem, $FDFoodItem$Type} from "packages/dev/xkmc/fruitsdelight/content/item/$FDFoodItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DurianFleshItem extends $FDFoodItem {
static readonly "ROOT": string
readonly "food": $IFDFood
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

constructor(arg0: $Item$Properties$Type, arg1: $IFDFood$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianFleshItem$Type = ($DurianFleshItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianFleshItem_ = $DurianFleshItem$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AbstractShapelessRecipe$Serializer, $AbstractShapelessRecipe$Serializer$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$Serializer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $AbstractShapelessRecipe<T extends $AbstractShapelessRecipe<(T)>> extends $ShapelessRecipe {
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>)

public "getSerializer"(): $AbstractShapelessRecipe$Serializer<(T)>
public "getJEIResult"(): $List<($ItemStack)>
get "serializer"(): $AbstractShapelessRecipe$Serializer<(T)>
get "jEIResult"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapelessRecipe$Type<T> = ($AbstractShapelessRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapelessRecipe_<T> = $AbstractShapelessRecipe$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/events/$FoodDataAccessor" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export interface $FoodDataAccessor {

 "fruitsdelight$setPlayer"(arg0: $Player$Type): void

(arg0: $Player$Type): void
}

export namespace $FoodDataAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodDataAccessor$Type = ($FoodDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodDataAccessor_ = $FoodDataAccessor$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/recipe/$CuisineRecipeContainer" {
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/$ContainerListener"
import {$BaseCuisineRecipe, $BaseCuisineRecipe$Type} from "packages/dev/xkmc/cuisinedelight/content/recipe/$BaseCuisineRecipe"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BaseRecipe$RecInv, $BaseRecipe$RecInv$Type} from "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe$RecInv"
import {$CookedFoodData, $CookedFoodData$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData"

export class $CuisineRecipeContainer extends $SimpleContainer implements $BaseRecipe$RecInv<($BaseCuisineRecipe<(any)>)> {
readonly "list": $List<($ItemStack)>
readonly "items": $NonNullList<($ItemStack)>
 "listeners": $List<($ContainerListener)>

constructor(arg0: $CookedFoodData$Type)

public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public static "tryClear"(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuisineRecipeContainer$Type = ($CuisineRecipeContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuisineRecipeContainer_ = $CuisineRecipeContainer$Type;
}}
declare module "packages/dev/xkmc/l2damagetracker/contents/attributes/$WrappedAttribute" {
import {$RangedAttribute, $RangedAttribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$RangedAttribute"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $WrappedAttribute extends $RangedAttribute {
static readonly "MAX_NAME_LENGTH": integer

constructor(arg0: string, arg1: double, arg2: double, arg3: double)

public "setSyncable"(arg0: boolean): $WrappedAttribute
public "getWrappedValue"(arg0: $LivingEntity$Type): double
set "syncable"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedAttribute$Type = ($WrappedAttribute);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WrappedAttribute_ = $WrappedAttribute$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushType" {
import {$BlockEntry, $BlockEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntry"
import {$FDBushes, $FDBushes$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushes"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $FDBushType extends $Enum<($FDBushType)> {
static readonly "CROSS": $FDBushType
static readonly "BLOCK": $FDBushType
static readonly "TALL": $FDBushType


public static "values"(): ($FDBushType)[]
public static "valueOf"(arg0: string): $FDBushType
public "build"(arg0: string, arg1: $FDBushes$Type): $BlockEntry<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDBushType$Type = (("cross") | ("block") | ("tall")) | ($FDBushType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDBushType_ = $FDBushType$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/mixin/$ItemAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $ItemAccessor {

 "setCraftingRemainingItem"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $ItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAccessor$Type = ($ItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAccessor_ = $ItemAccessor$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$EffectFunc" {
import {$Int2IntFunction, $Int2IntFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2IntFunction"
import {$Int2FloatFunction, $Int2FloatFunction$Type} from "packages/it/unimi/dsi/fastutil/ints/$Int2FloatFunction"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EffectFunc extends $Record {

constructor(eff: $Supplier$Type<($MobEffect$Type)>, duration: $Int2IntFunction$Type, amplifier: $Int2IntFunction$Type, chance: $Int2FloatFunction$Type)
constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: $Int2IntFunction$Type)
constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: $Int2IntFunction$Type, arg2: $Int2IntFunction$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "duration"(): $Int2IntFunction
public "getEffect"(arg0: integer): $MobEffectInstance
public "chance"(): $Int2FloatFunction
public "getChance"(arg0: integer): float
public "eff"(): $Supplier<($MobEffect)>
public "amplifier"(): $Int2IntFunction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectFunc$Type = ($EffectFunc);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectFunc_ = $EffectFunc$Type;
}}
declare module "packages/dev/xkmc/l2modularblock/type/$BlockMethod" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $BlockMethod {

}

export namespace $BlockMethod {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockMethod$Type = ($BlockMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockMethod_ = $BlockMethod$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/danmaku/$DanmakuItem" {
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
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$YHDanmaku$Bullet, $YHDanmaku$Bullet$Type} from "packages/dev/xkmc/youkaishomecoming/init/registrate/$YHDanmaku$Bullet"
import {$RenderableProjectileType, $RenderableProjectileType$Type} from "packages/dev/xkmc/fastprojectileapi/render/$RenderableProjectileType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DanmakuItem extends $Item {
readonly "type": $YHDanmaku$Bullet
readonly "color": $DyeColor
readonly "size": float
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

constructor(arg0: $Item$Properties$Type, arg1: $YHDanmaku$Bullet$Type, arg2: $DyeColor$Type, arg3: float)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDanmakuColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getTypeForRender"(): $RenderableProjectileType<(any), (any)>
get "typeForRender"(): $RenderableProjectileType<(any), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DanmakuItem$Type = ($DanmakuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DanmakuItem_ = $DanmakuItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/plant/$CoffeaCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$YHCrops, $YHCrops$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$YHCrops"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DoubleCropBlock, $DoubleCropBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/plant/$DoubleCropBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"

export class $CoffeaCropBlock extends $DoubleCropBlock {
static readonly "AGE": $IntegerProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "MAX_AGE": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public "getDoubleBlockStart"(): integer
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getMaxAge"(): integer
public static "buildPlantLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $CoffeaCropBlock$Type, arg2: $YHCrops$Type): void
public static "buildPlantModel"(arg0: $DataGenContext$Type<($Block$Type), ($CoffeaCropBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
get "doubleBlockStart"(): integer
get "maxAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoffeaCropBlock$Type = ($CoffeaCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CoffeaCropBlock_ = $CoffeaCropBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/danmaku/$SpellItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ProjectileWeaponItem, $ProjectileWeaponItem$Type} from "packages/net/minecraft/world/item/$ProjectileWeaponItem"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
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
import {$ItemSpell, $ItemSpell$Type} from "packages/dev/xkmc/youkaishomecoming/content/spell/item/$ItemSpell"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IGlowingTarget, $IGlowingTarget$Type} from "packages/dev/xkmc/l2library/util/raytrace/$IGlowingTarget"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SpellItem extends $ProjectileWeaponItem implements $IGlowingTarget {
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
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

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($ItemSpell$Type)>, arg2: boolean, arg3: $Supplier$Type<($Item$Type)>)

public "getDistance"(arg0: $ItemStack$Type): integer
public "getAllSupportedProjectiles"(): $Predicate<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getDefaultProjectileRange"(): integer
get "allSupportedProjectiles"(): $Predicate<($ItemStack)>
get "defaultProjectileRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpellItem$Type = ($SpellItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpellItem_ = $SpellItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotSerializer$Factory" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CookingPotRecipeBookTab, $CookingPotRecipeBookTab$Type} from "packages/vectorwing/farmersdelight/client/recipebook/$CookingPotRecipeBookTab"
import {$BasePotRecipe, $BasePotRecipe$Type} from "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotRecipe"

export interface $BasePotSerializer$Factory<R extends $BasePotRecipe> {

 "create"(arg0: $ResourceLocation$Type, arg1: string, arg2: $CookingPotRecipeBookTab$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: $ItemStack$Type, arg6: float, arg7: integer): R

(arg0: $ResourceLocation$Type, arg1: string, arg2: $CookingPotRecipeBookTab$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: $ItemStack$Type, arg6: float, arg7: integer): R
}

export namespace $BasePotSerializer$Factory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePotSerializer$Factory$Type<R> = ($BasePotSerializer$Factory<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePotSerializer$Factory_<R> = $BasePotSerializer$Factory$Type<(R)>;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$IconRenderRegion" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IconRenderRegion extends $Record {

constructor(x: float, y: float, scale: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): float
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IconRenderRegion
public "x"(): float
public static "identity"(): $IconRenderRegion
public "resize"(arg0: $IconRenderRegion$Type): $IconRenderRegion
public "y"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IconRenderRegion$Type = ($IconRenderRegion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IconRenderRegion_ = $IconRenderRegion$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DoubleFruitBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FDBushType, $FDBushType$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$DoubleBushBlock, $DoubleBushBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$DoubleBushBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $DoubleFruitBushBlock extends $DoubleBushBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: $FDBushType$Type)

public "getDoubleBlockStart"(): integer
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
get "doubleBlockStart"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleFruitBushBlock$Type = ($DoubleFruitBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleFruitBushBlock_ = $DoubleFruitBushBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$SurpriseChestBlock" {
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SurpriseChestBlock extends $HorizontalDirectionalBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "buildModel"(arg0: $DataGenContext$Type<($Block$Type), ($SurpriseChestBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurpriseChestBlock$Type = ($SurpriseChestBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurpriseChestBlock_ = $SurpriseChestBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/entity/danmaku/$IYHDanmaku" {
import {$SimplifiedProjectile, $SimplifiedProjectile$Type} from "packages/dev/xkmc/fastprojectileapi/entity/$SimplifiedProjectile"
import {$EntityHitResult, $EntityHitResult$Type} from "packages/net/minecraft/world/phys/$EntityHitResult"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IYHDanmaku {

 "self"(): $SimplifiedProjectile
 "damage"(arg0: $Entity$Type): float
 "shouldHurt"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
 "hurtTarget"(arg0: $EntityHitResult$Type): void

(): $SimplifiedProjectile
}

export namespace $IYHDanmaku {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IYHDanmaku$Type = ($IYHDanmaku);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IYHDanmaku_ = $IYHDanmaku$Type;
}}
declare module "packages/dev/xkmc/l2modularblock/$DelegateBlock" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$BlockMethod, $BlockMethod$Type} from "packages/dev/xkmc/l2modularblock/type/$BlockMethod"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $DelegateBlock extends $Block {
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


public static "newBaseBlock"(arg0: $BlockBehaviour$Properties$Type, ...arg1: ($BlockMethod$Type)[]): $DelegateBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegateBlock$Type = ($DelegateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegateBlock_ = $DelegateBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/misc/$FairyIceItem" {
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

export class $FairyIceItem extends $Item {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FairyIceItem$Type = ($FairyIceItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FairyIceItem_ = $FairyIceItem$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/tool/$SteeleafKnifeItem" {
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$TDKnifeItem, $TDKnifeItem$Type} from "packages/dev/xkmc/twilightdelight/content/item/tool/$TDKnifeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SteeleafKnifeItem extends $TDKnifeItem {
 "speed": float
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

public "getDefault"(): $ItemStack
public "fillItemCategory"(arg0: $CreativeModeTabModifier$Type): void
get "default"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteeleafKnifeItem$Type = ($SteeleafKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SteeleafKnifeItem_ = $SteeleafKnifeItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FruitPlant" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$PlantDataEntry, $PlantDataEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $FruitPlant<T extends ($Enum<(T)>) & ($FruitPlant<(T)>)> extends $PlantDataEntry<(T)> {

 "getFruit"(): $Item
 "getFruitTag"(): $TagKey<($Item)>
 "getName"(): string
 "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
 "registerComposter"(): void
 "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
 "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
 "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
}

export namespace $FruitPlant {
function run(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
function gen<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
function addFruitTags<T>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitPlant$Type<T> = ($FruitPlant<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitPlant_<T> = $FruitPlant$Type<(T)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$EmptyEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EmptyEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyEffect$Type = ($EmptyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyEffect_ = $EmptyEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/wings/$CirnoWingsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$TouhouWingsItem, $TouhouWingsItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/wings/$TouhouWingsItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CirnoWingsItem extends $TouhouWingsItem {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CirnoWingsItem$Type = ($CirnoWingsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CirnoWingsItem_ = $CirnoWingsItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$EffectRemovalEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$InherentEffect, $InherentEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$InherentEffect"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EffectRemovalEffect extends $InherentEffect {
readonly "set": $Lazy<($Set<($MobEffect)>)>

constructor(arg0: $MobEffectCategory$Type, arg1: integer, arg2: $List$Type<($Supplier$Type<($MobEffect$Type)>)>)

public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectRemovalEffect$Type = ($EffectRemovalEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectRemovalEffect_ = $EffectRemovalEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/rack/$DryingRackBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DryingRackBlock extends $BaseEntityBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "buildModel"(arg0: $DataGenContext$Type<($Block$Type), ($DryingRackBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DryingRackBlock$Type = ($DryingRackBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DryingRackBlock_ = $DryingRackBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/danmaku/$LaserItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$YHDanmaku$Laser, $YHDanmaku$Laser$Type} from "packages/dev/xkmc/youkaishomecoming/init/registrate/$YHDanmaku$Laser"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoubleLayerLaserType, $DoubleLayerLaserType$Type} from "packages/dev/xkmc/fastprojectileapi/render/$DoubleLayerLaserType"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LaserItem extends $Item {
readonly "color": $DyeColor
readonly "type": $YHDanmaku$Laser
readonly "size": float
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

constructor(arg0: $Item$Properties$Type, arg1: $YHDanmaku$Laser$Type, arg2: $DyeColor$Type, arg3: float)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getDanmakuColor"(arg0: $ItemStack$Type, arg1: integer): integer
public "getTypeForRender"(): $DoubleLayerLaserType
get "typeForRender"(): $DoubleLayerLaserType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserItem$Type = ($LaserItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LaserItem_ = $LaserItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$AlienatingAuraEffect" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $AlienatingAuraEffect extends $RangeRenderEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlienatingAuraEffect$Type = ($AlienatingAuraEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AlienatingAuraEffect_ = $AlienatingAuraEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$SakeBottleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SakeFluid, $SakeFluid$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$SakeFluid"

export class $SakeBottleItem extends $Item {
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

constructor(arg0: $Supplier$Type<($SakeFluid$Type)>, arg1: $Item$Properties$Type)

public "getFluid"(): $SakeFluid
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
get "fluid"(): $SakeFluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SakeBottleItem$Type = ($SakeBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SakeBottleItem_ = $SakeBottleItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$EffectEntry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EffectEntry extends $Record {

constructor(eff: $Supplier$Type<($MobEffect$Type)>, duration: integer, amplifier: integer, chance: float)
constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: integer)
constructor(arg0: $Supplier$Type<($MobEffect$Type)>, arg1: integer, arg2: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "duration"(): integer
public "getEffect"(): $MobEffectInstance
public "chance"(): float
public "eff"(): $Supplier<($MobEffect)>
public "amplifier"(): integer
get "effect"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectEntry$Type = ($EffectEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectEntry_ = $EffectEntry$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$DelayedEntityRender" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$IconRenderRegion, $IconRenderRegion$Type} from "packages/dev/xkmc/l2library/base/effects/api/$IconRenderRegion"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DelayedEntityRender extends $Record {

constructor(entity: $LivingEntity$Type, region: $IconRenderRegion$Type, rl: $ResourceLocation$Type, tx: float, ty: float, tw: float, th: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "th"(): float
public "resize"(arg0: $IconRenderRegion$Type): $DelayedEntityRender
public "rl"(): $ResourceLocation
public "region"(): $IconRenderRegion
public "tw"(): float
public "tx"(): float
public "ty"(): float
public "entity"(): $LivingEntity
public static "icon"(arg0: $LivingEntity$Type, arg1: $IconRenderRegion$Type, arg2: $ResourceLocation$Type): $DelayedEntityRender
public static "icon"(arg0: $LivingEntity$Type, arg1: $ResourceLocation$Type): $DelayedEntityRender
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelayedEntityRender$Type = ($DelayedEntityRender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelayedEntityRender_ = $DelayedEntityRender$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/tool/$TDKnifeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$KnifeItem, $KnifeItem$Type} from "packages/vectorwing/farmersdelight/common/item/$KnifeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TDKnifeItem extends $KnifeItem {
 "speed": float
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

constructor(arg0: $Tier$Type, arg1: $Item$Properties$Type)

public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TDKnifeItem$Type = ($TDKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TDKnifeItem_ = $TDKnifeItem$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"
import {$BaseRecipe$RecType, $BaseRecipe$RecType$Type} from "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe$RecType"

export class $BaseRecipe<Rec extends SRec, SRec extends $BaseRecipe<(any), (SRec), (Inv)>, Inv extends $Container> implements $Recipe<(Inv)> {
 "id": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $BaseRecipe$RecType$Type<(Rec), (SRec), (Inv)>)

public "getId"(): $ResourceLocation
public "assemble"(arg0: Inv, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: Inv, arg1: $Level$Type): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: Inv): $NonNullList<($ItemStack)>
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
get "id"(): $ResourceLocation
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
export type $BaseRecipe$Type<Rec, SRec, Inv> = ($BaseRecipe<(Rec), (SRec), (Inv)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseRecipe_<Rec, SRec, Inv> = $BaseRecipe$Type<(Rec), (SRec), (Inv)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$BaseLeavesBlock, $BaseLeavesBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseLeavesBlock"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PassableLeavesBlock$State, $PassableLeavesBlock$State$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock$State"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"

export class $PassableLeavesBlock extends $BaseLeavesBlock implements $BonemealableBlock {
static readonly "STATE": $EnumProperty<($PassableLeavesBlock$State)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Item$Type): void
public "flowerState"(): $BlockState
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PassableLeavesBlock$Type = ($PassableLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassableLeavesBlock_ = $PassableLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/fastprojectileapi/render/$ProjectileRenderer" {
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"

export interface $ProjectileRenderer {

 "cameraOrientation"(): $Quaternionf

(): $Quaternionf
}

export namespace $ProjectileRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileRenderer$Type = ($ProjectileRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileRenderer_ = $ProjectileRenderer$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $PlantDataEntry<E extends ($Enum<(E)>) & ($PlantDataEntry<(E)>)> {

 "getName"(): string
 "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
 "registerComposter"(): void
 "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
 "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
 "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
}

export namespace $PlantDataEntry {
const LIST: $List<($Supplier<(($PlantDataEntry<(any)>)[])>)>
function run(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
function gen<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
function addFruitTags<T>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantDataEntry$Type<E> = ($PlantDataEntry<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantDataEntry_<E> = $PlantDataEntry$Type<(E)>;
}}
declare module "packages/dev/xkmc/twilightdelight/compat/neapolitan/$TDCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$FlavoredCakeBlock, $FlavoredCakeBlock$Type} from "packages/com/teamabnormals/neapolitan/common/block/$FlavoredCakeBlock"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$NeapolitanCakes, $NeapolitanCakes$Type} from "packages/dev/xkmc/twilightdelight/init/registrate/neapolitan/$NeapolitanCakes"

export class $TDCakeBlock extends $FlavoredCakeBlock {
readonly "cake": $NeapolitanCakes
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
static readonly "FULL_CAKE_SIGNAL": integer
static readonly "AABB_OFFSET": float
static readonly "AABB_SIZE_PER_BITE": float
static readonly "SHAPE_BY_BITE": ($VoxelShape)[]
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

constructor(arg0: $FoodProperties$Type, arg1: $BlockBehaviour$Properties$Type, arg2: $NeapolitanCakes$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TDCakeBlock$Type = ($TDCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TDCakeBlock_ = $TDCakeBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/mixin/$PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $PersistentEntitySectionManagerAccessor<T extends $Entity> {

 "getSectionStorage"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage<(T)>
}

export namespace $PersistentEntitySectionManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$Type<T> = ($PersistentEntitySectionManagerAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersistentEntitySectionManagerAccessor_<T> = $PersistentEntitySectionManagerAccessor$Type<(T)>;
}}
declare module "packages/dev/xkmc/twilightdelight/content/effect/$PoisonRange" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/twilightdelight/content/effect/$RangeRenderEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $PoisonRange extends $RangeRenderEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoisonRange$Type = ($PoisonRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoisonRange_ = $PoisonRange$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/init/registrate/neapolitan/$NeapolitanCakes" {
import {$BlockEntry, $BlockEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntry"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$TDFoodItem, $TDFoodItem$Type} from "packages/dev/xkmc/twilightdelight/content/item/food/$TDFoodItem"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$TDCakeBlock, $TDCakeBlock$Type} from "packages/dev/xkmc/twilightdelight/compat/neapolitan/$TDCakeBlock"
import {$FlavoredCandleCakeBlock, $FlavoredCandleCakeBlock$Type} from "packages/com/teamabnormals/neapolitan/common/block/$FlavoredCandleCakeBlock"

export class $NeapolitanCakes extends $Enum<($NeapolitanCakes)> {
static readonly "AURORA": $NeapolitanCakes
static readonly "TORCHBERRY": $NeapolitanCakes
static readonly "PHYTOCHEMICAL": $NeapolitanCakes
static readonly "GLACIER": $NeapolitanCakes
readonly "block": $BlockEntry<($TDCakeBlock)>
readonly "candle": $BlockEntry<($FlavoredCandleCakeBlock)>
readonly "colored_candles": ($BlockEntry<($FlavoredCandleCakeBlock)>)[]
readonly "item": $ItemEntry<($TDFoodItem)>


public static "values"(): ($NeapolitanCakes)[]
public static "valueOf"(arg0: string): $NeapolitanCakes
public static "register"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NeapolitanCakes$Type = (("torchberry") | ("aurora") | ("glacier") | ("phytochemical")) | ($NeapolitanCakes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NeapolitanCakes_ = $NeapolitanCakes$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BaseLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LeavesBlock, $LeavesBlock$Type} from "packages/net/minecraft/world/level/block/$LeavesBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"

export class $BaseLeavesBlock extends $LeavesBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Item$Type): void
public "flowerState"(): $BlockState
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseLeavesBlock$Type = ($BaseLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseLeavesBlock_ = $BaseLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FDCauldronBlock" {
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AbstractCauldronBlock, $AbstractCauldronBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractCauldronBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FDCauldronBlock extends $AbstractCauldronBlock {
static readonly "FLOOR_LEVEL": integer
static readonly "SHAPE": $VoxelShape
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
 "DYED_WING": $CauldronInteraction
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

public "build"<T extends $FDCauldronBlock>(arg0: $DataGenContext$Type<($Block$Type), (T)>, arg1: $RegistrateBlockstateProvider$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "isFull"(arg0: $BlockState$Type): boolean
public "getInteractions"(): $Map<($Item), ($CauldronInteraction)>
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "interactions"(): $Map<($Item), ($CauldronInteraction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDCauldronBlock$Type = ($FDCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDCauldronBlock_ = $FDCauldronBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/food/$FoodSaucerItem" {
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
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FoodSaucerItem extends $BlockItem {
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

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodSaucerItem$Type = ($FoodSaucerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodSaucerItem_ = $FoodSaucerItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/mixin/$ServerLevelAccessor" {
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$PersistentEntitySectionManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ServerLevelAccessor {

 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>

(): $PersistentEntitySectionManager<($Entity)>
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$Type = ($ServerLevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelAccessor_ = $ServerLevelAccessor$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/tool/$FieryKnifeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$TDKnifeItem, $TDKnifeItem$Type} from "packages/dev/xkmc/twilightdelight/content/item/tool/$TDKnifeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FieryKnifeItem extends $TDKnifeItem {
 "speed": float
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
public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
public "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieryKnifeItem$Type = ($FieryKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieryKnifeItem_ = $FieryKnifeItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$SizeEffect" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $SizeEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "addAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizeEffect$Type = ($SizeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SizeEffect_ = $SizeEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$MultiFenceBlock$State" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $MultiFenceBlock$State extends $Enum<($MultiFenceBlock$State)> implements $StringRepresentable {
static readonly "OPEN": $MultiFenceBlock$State
static readonly "CONNECT": $MultiFenceBlock$State
static readonly "FLAT": $MultiFenceBlock$State
static readonly "UP": $MultiFenceBlock$State
static readonly "CW": $MultiFenceBlock$State
static readonly "CCW": $MultiFenceBlock$State


public "type"(): integer
public static "values"(): ($MultiFenceBlock$State)[]
public static "valueOf"(arg0: string): $MultiFenceBlock$State
public "collide"(): integer
public "flip"(): $MultiFenceBlock$State
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
export type $MultiFenceBlock$State$Type = (("cw") | ("flat") | ("ccw") | ("up") | ("open") | ("connect")) | ($MultiFenceBlock$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiFenceBlock$State_ = $MultiFenceBlock$State$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$FruitBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FDBushType, $FDBushType$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
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
import {$BaseBushBlock, $BaseBushBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseBushBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FruitBushBlock extends $BaseBushBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: $FDBushType$Type)

/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitBushBlock$Type = ($FruitBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitBushBlock_ = $FruitBushBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$JellyBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HoneyBlock, $HoneyBlock$Type} from "packages/net/minecraft/world/level/block/$HoneyBlock"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JellyBlock extends $HoneyBlock {
readonly "fruit": $FruitType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "showJellyJumpParticles"(arg0: $Entity$Type): void
public "showJellySlideParticles"(arg0: $Entity$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "isStickyBlock"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JellyBlock$Type = ($JellyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JellyBlock_ = $JellyBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$HigiEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $HigiEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HigiEffect$Type = ($HigiEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HigiEffect_ = $HigiEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$ThinTrapdoorBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $ThinTrapdoorBlock extends $TrapDoorBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $BlockSetType$Type)

public static "trapdoorBlock"(arg0: $RegistrateBlockstateProvider$Type, arg1: $TrapDoorBlock$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type): void
public static "buildModels"(arg0: $RegistrateBlockstateProvider$Type, arg1: $TrapDoorBlock$Type, arg2: string, arg3: $ResourceLocation$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThinTrapdoorBlock$Type = ($ThinTrapdoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThinTrapdoorBlock_ = $ThinTrapdoorBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouMat" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"

export class $TouhouMat extends $Enum<($TouhouMat)> implements $ArmorMaterial {
static readonly "SUWAKO_HAT": $TouhouMat
static readonly "STRAW_HAT": $TouhouMat
static readonly "KOISHI_HAT": $TouhouMat
static readonly "RUMIA_HAIRBAND": $TouhouMat
static readonly "REIMU_HAIRBAND": $TouhouMat
static readonly "CIRNO_HAIRBAND": $TouhouMat


public static "values"(): ($TouhouMat)[]
public static "valueOf"(arg0: string): $TouhouMat
public "getEquipSound"(): $SoundEvent
public "getDefenseForType"(arg0: $ArmorItem$Type$Type): integer
public "getKnockbackResistance"(): float
public "getDurabilityForType"(arg0: $ArmorItem$Type$Type): integer
public "getToughness"(): float
public "getEnchantmentValue"(): integer
public "getRepairIngredient"(): $Ingredient
public "getName"(): string
get "equipSound"(): $SoundEvent
get "knockbackResistance"(): float
get "toughness"(): float
get "enchantmentValue"(): integer
get "repairIngredient"(): $Ingredient
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TouhouMat$Type = (("suwako_hat") | ("cirno_hairband") | ("rumia_hairband") | ("reimu_hairband") | ("koishi_hat") | ("straw_hat")) | ($TouhouMat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TouhouMat_ = $TouhouMat$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/food/$RoseTeaItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TDDrinkableItem, $TDDrinkableItem$Type} from "packages/dev/xkmc/twilightdelight/content/item/food/$TDDrinkableItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RoseTeaItem extends $TDDrinkableItem {
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

public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RoseTeaItem$Type = ($RoseTeaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RoseTeaItem_ = $RoseTeaItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/food/$YHDrinkItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$YHFoodItem, $YHFoodItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/food/$YHFoodItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $YHDrinkItem extends $YHFoodItem {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHDrinkItem$Type = ($YHDrinkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHDrinkItem_ = $YHDrinkItem$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/tool/$IronwoodKnifeItem" {
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$TDKnifeItem, $TDKnifeItem$Type} from "packages/dev/xkmc/twilightdelight/content/item/tool/$TDKnifeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $IronwoodKnifeItem extends $TDKnifeItem {
 "speed": float
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

public "getDefault"(): $ItemStack
public "fillItemCategory"(arg0: $CreativeModeTabModifier$Type): void
get "default"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IronwoodKnifeItem$Type = ($IronwoodKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IronwoodKnifeItem_ = $IronwoodKnifeItem$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData$EffectData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $CookedFoodData$EffectData extends $Record {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "level"(): integer
public "duration"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookedFoodData$EffectData$Type = ($CookedFoodData$EffectData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookedFoodData$EffectData_ = $CookedFoodData$EffectData$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/logic/$CookingData$CookingEntry" {
import {$Stage, $Stage$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/transform/$Stage"
import {$CookingData, $CookingData$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookingData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CookingData$CookingEntry {

/**
 * 
 * @deprecated
 */
constructor()
constructor(arg0: $ItemStack$Type, arg1: long)

public "seed"(): long
public "getDuration"(arg0: $CookingData$Type, arg1: float): float
public "getItem"(): $ItemStack
public "getStage"(arg0: $CookingData$Type): $Stage
public "timeSinceStir"(arg0: $CookingData$Type, arg1: float): float
public "getMaxStirTime"(arg0: $CookingData$Type): float
public "stir"(arg0: long, arg1: integer): void
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingData$CookingEntry$Type = ($CookingData$CookingEntry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingData$CookingEntry_ = $CookingData$CookingEntry$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$DurianHelmetItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DurianHelmetItem extends $Item {
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

public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianHelmetItem$Type = ($DurianHelmetItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianHelmetItem_ = $DurianHelmetItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/cauldrons/$JellyCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FDCauldronBlock, $FDCauldronBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FDCauldronBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $JellyCauldronBlock extends $FDCauldronBlock {
static readonly "LEVEL": $IntegerProperty
readonly "type": $FruitType
static readonly "FLOOR_LEVEL": integer
static readonly "SHAPE": $VoxelShape
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
 "DYED_WING": $CauldronInteraction
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "build"<T extends $FDCauldronBlock>(arg0: $DataGenContext$Type<($Block$Type), (T)>, arg1: $RegistrateBlockstateProvider$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JellyCauldronBlock$Type = ($JellyCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JellyCauldronBlock_ = $JellyCauldronBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BushFruitItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BushFruitItem extends $ItemNameBlockItem {
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

public "registerBlocks"(arg0: $Map$Type<($Block$Type), ($Item$Type)>, arg1: $Item$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BushFruitItem$Type = ($BushFruitItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BushFruitItem_ = $BushFruitItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$BaseLeavesBlock, $BaseLeavesBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseLeavesBlock"
import {$DurianLeavesBlock$Fruit, $DurianLeavesBlock$Fruit$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Fruit"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$DurianLeavesBlock$Leaf, $DurianLeavesBlock$Leaf$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Leaf"

export class $DurianLeavesBlock extends $BaseLeavesBlock {
static readonly "FRUIT": $EnumProperty<($DurianLeavesBlock$Fruit)>
static readonly "LEAF": $EnumProperty<($DurianLeavesBlock$Leaf)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $Block$Type, arg2: $Block$Type, arg3: $Item$Type): void
public "flowerState"(): $BlockState
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianLeavesBlock$Type = ($DurianLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianLeavesBlock_ = $DurianLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/spell/item/$ItemSpell" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $ItemSpell {

constructor()

public "start"(arg0: $Player$Type, arg1: $LivingEntity$Type): void
public "tick"(arg0: $Player$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSpell$Type = ($ItemSpell);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemSpell_ = $ItemSpell$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$DrunkEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $DrunkEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrunkEffect$Type = ($DrunkEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrunkEffect_ = $DrunkEffect$Type;
}}
declare module "packages/dev/xkmc/l2modularblock/type/$MultipleBlockMethod" {
import {$BlockMethod, $BlockMethod$Type} from "packages/dev/xkmc/l2modularblock/type/$BlockMethod"

export interface $MultipleBlockMethod extends $BlockMethod {

}

export namespace $MultipleBlockMethod {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultipleBlockMethod$Type = ($MultipleBlockMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultipleBlockMethod_ = $MultipleBlockMethod$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/effect/$AuroraGlowing" {
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AuroraGlowing extends $MobEffect {

constructor()

public static "getColor"(arg0: $Entity$Type): integer
public static "shouldRender"(arg0: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AuroraGlowing$Type = ($AuroraGlowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AuroraGlowing_ = $AuroraGlowing$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$YHPieBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$PieBlock, $PieBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$PieBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $YHPieBlock extends $PieBlock {
static readonly "FACING": $DirectionProperty
static readonly "BITES": $IntegerProperty
readonly "pieSlice": $Supplier<($Item)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHPieBlock$Type = ($YHPieBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHPieBlock_ = $YHPieBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/kettle/$KettleBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CookingPotSupport, $CookingPotSupport$Type} from "packages/vectorwing/farmersdelight/common/block/state/$CookingPotSupport"
import {$BasePotBlock, $BasePotBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $KettleBlock extends $BasePotBlock {
static readonly "FACING": $DirectionProperty
static readonly "SUPPORT": $EnumProperty<($CookingPotSupport)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "buildModel"(arg0: $DataGenContext$Type<($Block$Type), ($KettleBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KettleBlock$Type = ($KettleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KettleBlock_ = $KettleBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/entries/$FruitFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $FruitFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $FruitType$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitFluidType$Type = ($FruitFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitFluidType_ = $FruitFluidType$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/food/$TDFoodItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TDFoodItem extends $Item {
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
public static "getFoodEffects"(arg0: $FoodProperties$Type, arg1: $List$Type<($Component$Type)>): void
public static "getFoodEffects"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TDFoodItem$Type = ($TDFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TDFoodItem_ = $TDFoodItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$TeaEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$EmptyEffect, $EmptyEffect$Type} from "packages/dev/xkmc/youkaishomecoming/content/effect/$EmptyEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $TeaEffect extends $EmptyEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeaEffect$Type = ($TeaEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeaEffect_ = $TeaEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/furniture/$WoodChairBlock" {
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $WoodChairBlock extends $Block {
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

public static "buildStates"(arg0: $DataGenContext$Type<($Block$Type), ($WoodChairBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
public static "isSeatOccupied"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "sitDown"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodChairBlock$Type = ($WoodChairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodChairBlock_ = $WoodChairBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$BaseSaucerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$StateDefinition$Builder, $StateDefinition$Builder$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition$Builder"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $BaseSaucerBlock extends $Block {
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
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "createBlockStateDefinition"(arg0: $StateDefinition$Builder$Type<($Block$Type), ($BlockState$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSaucerBlock$Type = ($BaseSaucerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseSaucerBlock_ = $BaseSaucerBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDBushes" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$PlantDataEntry, $PlantDataEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$FruitPlant, $FruitPlant$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FruitPlant"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $FDBushes extends $Enum<($FDBushes)> implements $FruitPlant<($FDBushes)> {
static readonly "BLUEBERRY": $FDBushes
static readonly "LEMON": $FDBushes
static readonly "CRANBERRY": $FDBushes
readonly "configKey": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
readonly "placementKey": $ResourceKey<($PlacedFeature)>


public "getName"(): string
public static "values"(): ($FDBushes)[]
public static "valueOf"(arg0: string): $FDBushes
public static "register"(): void
public "getSeed"(): $Item
public "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
public "getFruit"(): $Item
public "registerComposter"(): void
public "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
public "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
public "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
public "buildBushModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type): void
public "getBush"(): $BushBlock
public "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $BushBlock$Type): void
public "getFruitTag"(): $TagKey<($Item)>
public static "run"(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
public static "gen"<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
public static "addFruitTags"<T extends $Item>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
get "name"(): string
get "seed"(): $Item
get "fruit"(): $Item
get "placementKey"(): $ResourceKey<($PlacedFeature)>
get "bush"(): $BushBlock
get "fruitTag"(): $TagKey<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDBushes$Type = (("lemon") | ("blueberry") | ("cranberry")) | ($FDBushes);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDBushes_ = $FDBushes$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/plant/$UdumbaraBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$YHCrops, $YHCrops$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$YHCrops"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$YHCropBlock, $YHCropBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/plant/$YHCropBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"

export class $UdumbaraBlock extends $YHCropBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: $Supplier$Type<($Item$Type)>)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public static "buildPlantLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $YHCropBlock$Type, arg2: $YHCrops$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UdumbaraBlock$Type = ($UdumbaraBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UdumbaraBlock_ = $UdumbaraBlock$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/logic/$FoodType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $FoodType extends $Enum<($FoodType)> {
static readonly "NONE": $FoodType
static readonly "MEAT": $FoodType
static readonly "VEG": $FoodType
static readonly "CARB": $FoodType
static readonly "SEAFOOD": $FoodType
readonly "bonus": integer
readonly "def": string
readonly "format": $ChatFormatting


public "get"(): $MutableComponent
public static "values"(): ($FoodType)[]
public static "valueOf"(arg0: string): $FoodType
public "getID"(): string
public "getDisplay"(): $ItemStack
get "iD"(): string
get "display"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodType$Type = (("carb") | ("seafood") | ("meat") | ("veg") | ("none")) | ($FoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodType_ = $FoodType$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDMelons$FDMelonBlock" {
import {$StemGrownBlock, $StemGrownBlock$Type} from "packages/net/minecraft/world/level/block/$StemGrownBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StemBlock, $StemBlock$Type} from "packages/net/minecraft/world/level/block/$StemBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FDMelons, $FDMelons$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$FDMelons"
import {$AttachedStemBlock, $AttachedStemBlock$Type} from "packages/net/minecraft/world/level/block/$AttachedStemBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $FDMelons$FDMelonBlock extends $StemGrownBlock {
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

constructor(arg0: $FDMelons$Type, arg1: $BlockBehaviour$Properties$Type)

public "getAttachedStem"(): $AttachedStemBlock
public "getStem"(): $StemBlock
get "attachedStem"(): $AttachedStemBlock
get "stem"(): $StemBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDMelons$FDMelonBlock$Type = ($FDMelons$FDMelonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDMelons$FDMelonBlock_ = $FDMelons$FDMelonBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/plant/$WildCoffeaBlock" {
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$YHCrops, $YHCrops$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$YHCrops"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DoublePlantBlock, $DoublePlantBlock$Type} from "packages/net/minecraft/world/level/block/$DoublePlantBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"

export class $WildCoffeaBlock extends $DoublePlantBlock {
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

public static "buildWildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $WildCoffeaBlock$Type, arg2: $YHCrops$Type): void
public static "buildWildModel"(arg0: $DataGenContext$Type<($Block$Type), ($WildCoffeaBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type, arg2: $YHCrops$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildCoffeaBlock$Type = ($WildCoffeaBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildCoffeaBlock_ = $WildCoffeaBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ShapelessRecipe$Serializer, $ShapelessRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe$Serializer"
import {$AbstractShapelessRecipe, $AbstractShapelessRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractShapelessRecipe$RecipeFactory, $AbstractShapelessRecipe$RecipeFactory$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$RecipeFactory"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $AbstractShapelessRecipe$Serializer<T extends $AbstractShapelessRecipe<(T)>> extends $ShapelessRecipe$Serializer {

constructor(arg0: $AbstractShapelessRecipe$RecipeFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapelessRecipe$Serializer$Type<T> = ($AbstractShapelessRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapelessRecipe$Serializer_<T> = $AbstractShapelessRecipe$Serializer$Type<(T)>;
}}
declare module "packages/dev/xkmc/twilightdelight/content/block/$MazeStoveBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$StoveBlock, $StoveBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$StoveBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MazeStoveBlock extends $StoveBlock {
static readonly "LIT": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MazeStoveBlock$Type = ($MazeStoveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MazeStoveBlock_ = $MazeStoveBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotRecipe" {
import {$RecipeWrapper, $RecipeWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$RecipeWrapper"
import {$CookingPotRecipe, $CookingPotRecipe$Type} from "packages/vectorwing/farmersdelight/common/crafting/$CookingPotRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CookingPotRecipeBookTab, $CookingPotRecipeBookTab$Type} from "packages/vectorwing/farmersdelight/client/recipebook/$CookingPotRecipeBookTab"

export class $BasePotRecipe extends $CookingPotRecipe {
static readonly "INPUT_SLOTS": integer

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CookingPotRecipeBookTab$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $ItemStack$Type, arg5: $ItemStack$Type, arg6: float, arg7: integer)

public "matches"(arg0: $RecipeWrapper$Type, arg1: $Level$Type): boolean
public "getToastSymbol"(): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "toastSymbol"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePotRecipe$Type = ($BasePotRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePotRecipe_ = $BasePotRecipe$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/food/$FleshBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FleshBlockItem extends $BlockItem {
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

public "getName"(arg0: $ItemStack$Type): $Component
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FleshBlockItem$Type = ($FleshBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FleshBlockItem_ = $FleshBlockItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/furniture/$WoodTableBlock" {
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $WoodTableBlock extends $Block {
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

public static "buildStates"(arg0: $DataGenContext$Type<($Block$Type), ($WoodTableBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodTableBlock$Type = ($WoodTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WoodTableBlock_ = $WoodTableBlock$Type;
}}
declare module "packages/dev/xkmc/l2modularblock/$DelegateBlockImpl" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockImplementor, $BlockImplementor$Type} from "packages/dev/xkmc/l2modularblock/$BlockImplementor"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DelegateBlock, $DelegateBlock$Type} from "packages/dev/xkmc/l2modularblock/$DelegateBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DelegateBlockImpl extends $DelegateBlock {
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


public "getImpl"(): $BlockImplementor
public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getVisualShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
get "impl"(): $BlockImplementor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegateBlockImpl$Type = ($DelegateBlockImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegateBlockImpl_ = $DelegateBlockImpl$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/init/food/$YHDish" {
import {$BlockEntry, $BlockEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntry"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Saucer, $Saucer$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$Saucer"
import {$FoodSaucerBlock, $FoodSaucerBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/food/$FoodSaucerBlock"

export class $YHDish extends $Enum<($YHDish)> {
static readonly "BAMBOO_MIZUYOKAN": $YHDish
static readonly "DRIED_FISH": $YHDish
static readonly "IMITATION_BEAR_PAW": $YHDish
static readonly "PASTITSIO": $YHDish
static readonly "SAUCE_GRILLED_FISH": $YHDish
static readonly "STINKY_TOFU": $YHDish
static readonly "TOFU_BURGER": $YHDish
static readonly "BLOOD_CURD": $YHDish
static readonly "SEVEN_COLORED_YOKAN": $YHDish
readonly "base": $Saucer
readonly "height": integer
readonly "block": $BlockEntry<($FoodSaucerBlock)>


public static "values"(): ($YHDish)[]
public static "valueOf"(arg0: string): $YHDish
public static "register"(): void
public "isFlesh"(): boolean
get "flesh"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHDish$Type = (("pastitsio") | ("dried_fish") | ("seven_colored_yokan") | ("imitation_bear_paw") | ("stinky_tofu") | ("blood_curd") | ("bamboo_mizuyokan") | ("sauce_grilled_fish") | ("tofu_burger")) | ($YHDish);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHDish_ = $YHDish$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$CaffeinatedEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$EmptyEffect, $EmptyEffect$Type} from "packages/dev/xkmc/youkaishomecoming/content/effect/$EmptyEffect"

export class $CaffeinatedEffect extends $EmptyEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CaffeinatedEffect$Type = ($CaffeinatedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CaffeinatedEffect_ = $CaffeinatedEffect$Type;
}}
declare module "packages/dev/xkmc/fastprojectileapi/render/$DoubleLayerLaserType" {
import {$SimplifiedProjectile, $SimplifiedProjectile$Type} from "packages/dev/xkmc/fastprojectileapi/entity/$SimplifiedProjectile"
import {$DoubleLayerLaserType$Ins, $DoubleLayerLaserType$Ins$Type} from "packages/dev/xkmc/fastprojectileapi/render/$DoubleLayerLaserType$Ins"
import {$ProjectileRenderer, $ProjectileRenderer$Type} from "packages/dev/xkmc/fastprojectileapi/render/$ProjectileRenderer"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$RenderableProjectileType, $RenderableProjectileType$Type} from "packages/dev/xkmc/fastprojectileapi/render/$RenderableProjectileType"

export class $DoubleLayerLaserType extends $Record implements $RenderableProjectileType<($DoubleLayerLaserType), ($DoubleLayerLaserType$Ins)> {

constructor(inner: $ResourceLocation$Type, outer: $ResourceLocation$Type, color: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "start"(arg0: $MultiBufferSource$Type, arg1: $Iterable$Type<($DoubleLayerLaserType$Ins$Type)>): void
public "create"(arg0: $ProjectileRenderer$Type, arg1: $SimplifiedProjectile$Type, arg2: $PoseStack$Type, arg3: float): void
public "color"(): integer
public "outer"(): $ResourceLocation
public "inner"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleLayerLaserType$Type = ($DoubleLayerLaserType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleLayerLaserType_ = $DoubleLayerLaserType$Type;
}}
declare module "packages/dev/xkmc/l2modularblock/type/$SingletonBlockMethod" {
import {$BlockMethod, $BlockMethod$Type} from "packages/dev/xkmc/l2modularblock/type/$BlockMethod"

export interface $SingletonBlockMethod extends $BlockMethod {

}

export namespace $SingletonBlockMethod {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingletonBlockMethod$Type = ($SingletonBlockMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SingletonBlockMethod_ = $SingletonBlockMethod$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/moka/$MokaMakerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CookingPotSupport, $CookingPotSupport$Type} from "packages/vectorwing/farmersdelight/common/block/state/$CookingPotSupport"
import {$BasePotBlock, $BasePotBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $MokaMakerBlock extends $BasePotBlock {
static readonly "FACING": $DirectionProperty
static readonly "SUPPORT": $EnumProperty<($CookingPotSupport)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "buildModel"(arg0: $DataGenContext$Type<($Block$Type), ($MokaMakerBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MokaMakerBlock$Type = ($MokaMakerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MokaMakerBlock_ = $MokaMakerBlock$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData" {
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$CookingData, $CookingData$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookingData"
import {$FoodType, $FoodType$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$FoodType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$CookedFoodData$Entry, $CookedFoodData$Entry$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData$Entry"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"

export class $CookedFoodData {
static readonly "BAD": $FoodProperties
 "total": integer
 "size": integer
 "nutrition": integer
 "score": integer
 "glowstone": integer
 "redstone": integer
 "types": $HashSet<($FoodType)>
 "entries": $ArrayList<($CookedFoodData$Entry)>

/**
 * 
 * @deprecated
 */
constructor()
constructor(arg0: $CookingData$Type)

public "toFoodData"(): $FoodProperties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookedFoodData$Type = ($CookedFoodData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookedFoodData_ = $CookedFoodData$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$RecSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $RecSerializer<R extends $Recipe<(I)>, I extends $Container> implements $RecipeSerializer<(R)> {
readonly "cls": $Class<(R)>

constructor(arg0: $Class$Type<(R)>)

public "blank"(): R
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): R
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): R
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: R): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecSerializer$Type<R, I> = ($RecSerializer<(R), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecSerializer_<R, I> = $RecSerializer$Type<(R), (I)>;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/recipe/$BaseCuisineRecipe" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe"
import {$CuisineRecipeMatch, $CuisineRecipeMatch$Type} from "packages/dev/xkmc/cuisinedelight/content/recipe/$CuisineRecipeMatch"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$CuisineRecipeContainer, $CuisineRecipeContainer$Type} from "packages/dev/xkmc/cuisinedelight/content/recipe/$CuisineRecipeContainer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BaseRecipe$RecType, $BaseRecipe$RecType$Type} from "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe$RecType"
import {$CookedFoodData, $CookedFoodData$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData"

export class $BaseCuisineRecipe<R extends $BaseCuisineRecipe<(R)>> extends $BaseRecipe<(R), ($BaseCuisineRecipe<(any)>), ($CuisineRecipeContainer)> {
readonly "list": $ArrayList<($CuisineRecipeMatch)>
 "saturationBonus": double
 "saturationBonusModifier": double
 "holderItem": $Item
 "id": $ResourceLocation

constructor(arg0: $ResourceLocation$Type, arg1: $BaseRecipe$RecType$Type<(R), ($BaseCuisineRecipe$Type<(any)>), ($CuisineRecipeContainer$Type)>)

public "matches"(arg0: $CuisineRecipeContainer$Type, arg1: $Level$Type): boolean
public "getMaxSaturationBonus"(): double
public "getMinSaturationBonus"(): double
public "assemble"(arg0: $CuisineRecipeContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getScore"(arg0: $CuisineRecipeContainer$Type): double
public static "findBestMatch"(arg0: $Level$Type, arg1: $CookedFoodData$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
get "maxSaturationBonus"(): double
get "minSaturationBonus"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCuisineRecipe$Type<R> = ($BaseCuisineRecipe<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseCuisineRecipe_<R> = $BaseCuisineRecipe$Type<(R)>;
}}
declare module "packages/dev/xkmc/l2modularblock/$DelegateEntityBlockImpl" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$DelegateBlockImpl, $DelegateBlockImpl$Type} from "packages/dev/xkmc/l2modularblock/$DelegateBlockImpl"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $DelegateEntityBlockImpl extends $DelegateBlockImpl implements $EntityBlock {
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


public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "triggerEvent"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): boolean
public "getMenuProvider"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $MenuProvider
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DelegateEntityBlockImpl$Type = ($DelegateEntityBlockImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DelegateEntityBlockImpl_ = $DelegateEntityBlockImpl$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock$State" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $PassableLeavesBlock$State extends $Enum<($PassableLeavesBlock$State)> implements $StringRepresentable {
static readonly "LEAVES": $PassableLeavesBlock$State
static readonly "FLOWERS": $PassableLeavesBlock$State
static readonly "FRUITS": $PassableLeavesBlock$State


public static "values"(): ($PassableLeavesBlock$State)[]
public static "valueOf"(arg0: string): $PassableLeavesBlock$State
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
export type $PassableLeavesBlock$State$Type = (("flowers") | ("leaves") | ("fruits")) | ($PassableLeavesBlock$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PassableLeavesBlock$State_ = $PassableLeavesBlock$State$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/plant/$TeaCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$YHCrops, $YHCrops$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$YHCrops"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DoubleCropBlock, $DoubleCropBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/plant/$DoubleCropBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $TeaCropBlock extends $DoubleCropBlock {
static readonly "AGE": $IntegerProperty
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "MAX_AGE": integer
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public "getDoubleBlockStart"(): integer
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getMaxAge"(): integer
public static "buildPlantLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $TeaCropBlock$Type, arg2: $YHCrops$Type): void
public static "buildPlantModel"(arg0: $DataGenContext$Type<($Block$Type), ($TeaCropBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
public static "buildWildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $BushBlock$Type, arg2: $YHCrops$Type): void
get "doubleBlockStart"(): integer
get "maxAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeaCropBlock$Type = ($TeaCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeaCropBlock_ = $TeaCropBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/wings/$TouhouWingsItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TouhouWingsItem extends $Item {
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

public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TouhouWingsItem$Type = ($TouhouWingsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TouhouWingsItem_ = $TouhouWingsItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FruitCauldronBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$FDCauldronBlock, $FDCauldronBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/cauldrons/$FDCauldronBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FruitCauldronBlock extends $FDCauldronBlock {
static readonly "MAX": integer
static readonly "LEVEL": $IntegerProperty
readonly "type": $FruitType
static readonly "FLOOR_LEVEL": integer
static readonly "SHAPE": $VoxelShape
readonly "interactions": $Map<($Item), ($CauldronInteraction)>
 "DYED_WING": $CauldronInteraction
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitCauldronBlock$Type = ($FruitCauldronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitCauldronBlock_ = $FruitCauldronBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$FoodSaucerBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$YHDish, $YHDish$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$YHDish"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BaseSaucerBlock, $BaseSaucerBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/food/$BaseSaucerBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $FoodSaucerBlock extends $BaseSaucerBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $YHDish$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodSaucerBlock$Type = ($FoodSaucerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodSaucerBlock_ = $FoodSaucerBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$VerticalSlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockModelBuilder, $BlockModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$HorizontalLoggedBlock, $HorizontalLoggedBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/variants/$HorizontalLoggedBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $VerticalSlabBlock extends $HorizontalLoggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "buildModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type): $BlockModelBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalSlabBlock$Type = ($VerticalSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VerticalSlabBlock_ = $VerticalSlabBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/mixin/$AbstractCauldronBlockAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $AbstractCauldronBlockAccessor {

 "getInteractions"(): $Map<($Item), ($CauldronInteraction)>

(): $Map<($Item), ($CauldronInteraction)>
}

export namespace $AbstractCauldronBlockAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCauldronBlockAccessor$Type = ($AbstractCauldronBlockAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCauldronBlockAccessor_ = $AbstractCauldronBlockAccessor$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/block/$LilyChickenBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FeastBlock, $FeastBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$FeastBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $LilyChickenBlock extends $FeastBlock {
static readonly "FACING": $DirectionProperty
static readonly "SERVINGS": $IntegerProperty
readonly "servingItem": $Supplier<($Item)>
readonly "hasLeftovers": boolean
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LilyChickenBlock$Type = ($LilyChickenBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LilyChickenBlock_ = $LilyChickenBlock$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/item/$CuisineSkilletItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$SkilletItem, $SkilletItem$Type} from "packages/vectorwing/farmersdelight/common/item/$SkilletItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CookingData, $CookingData$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookingData"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Tiers, $Tiers$Type} from "packages/net/minecraft/world/item/$Tiers"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CuisineSkilletItem extends $SkilletItem {
static readonly "SKILLET_TIER": $Tiers
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

public static "canUse"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Level$Type): boolean
public static "getData"(arg0: $ItemStack$Type): $CookingData
public static "setData"(arg0: $ItemStack$Type, arg1: $CookingData$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public static "playSound"(arg0: $Player$Type, arg1: $Level$Type, arg2: $SoundEvent$Type): void
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuisineSkilletItem$Type = ($CuisineSkilletItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuisineSkilletItem_ = $CuisineSkilletItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/food/$FleshFoodItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$YHFoodItem, $YHFoodItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/food/$YHFoodItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FleshFoodItem extends $YHFoodItem {
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

public "consume"(arg0: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public static "getPlayer"(): $Player
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FleshFoodItem$Type = ($FleshFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FleshFoodItem_ = $FleshFoodItem$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$RecipeFactory" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AbstractShapedRecipe, $AbstractShapedRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AbstractShapedRecipe$RecipeFactory<T extends $AbstractShapedRecipe<(T)>> {

 "create"(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type): T

(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type): T
}

export namespace $AbstractShapedRecipe$RecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$RecipeFactory$Type<T> = ($AbstractShapedRecipe$RecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapedRecipe$RecipeFactory_<T> = $AbstractShapedRecipe$RecipeFactory$Type<(T)>;
}}
declare module "packages/dev/xkmc/twilightdelight/mixin/$ItemAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"

export interface $ItemAccessor {

 "setCraftingRemainingItem"(arg0: $Item$Type): void

(arg0: $Item$Type): void
}

export namespace $ItemAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemAccessor$Type = ($ItemAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemAccessor_ = $ItemAccessor$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$HayStairBlock" {
import {$Half, $Half$Type} from "packages/net/minecraft/world/level/block/state/properties/$Half"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StairsShape, $StairsShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$StairsShape"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HayStairBlock extends $StairBlock {
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

constructor(arg0: $Supplier$Type<($BlockState$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HayStairBlock$Type = ($HayStairBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HayStairBlock_ = $HayStairBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/misc/$FrozenFrogItem" {
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
import {$FrogVariant, $FrogVariant$Type} from "packages/net/minecraft/world/entity/animal/$FrogVariant"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FrozenFrogItem extends $Item {
readonly "variant": $FrogVariant
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

constructor(arg0: $Item$Properties$Type, arg1: $FrogVariant$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrozenFrogItem$Type = ($FrozenFrogItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrozenFrogItem_ = $FrozenFrogItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$FairyEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $FairyEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FairyEffect$Type = ($FairyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FairyEffect_ = $FairyEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$IFDFoodItem" {
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"

export interface $IFDFoodItem {

 "food"(): $IFDFood

(): $IFDFood
}

export namespace $IFDFoodItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFDFoodItem$Type = ($IFDFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFDFoodItem_ = $IFDFoodItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/food/$FleshSimpleItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FleshSimpleItem extends $Item {
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

public "getName"(arg0: $ItemStack$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FleshSimpleItem$Type = ($FleshSimpleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FleshSimpleItem_ = $FleshSimpleItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$MultiFenceBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$LeftClickBlock, $LeftClickBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/variants/$LeftClickBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$MultiFenceBlock$State, $MultiFenceBlock$State$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/variants/$MultiFenceBlock$State"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $MultiFenceBlock extends $Block implements $SimpleWaterloggedBlock, $LeftClickBlock {
static readonly "STATES": ($EnumProperty<($MultiFenceBlock$State)>)[]
static readonly "WATERLOGGED": $BooleanProperty
static readonly "INVERTED": $BooleanProperty
static readonly "SHAPES": ($VoxelShape)[]
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

public static "of"(arg0: $BlockState$Type, arg1: $Direction$Type): $MultiFenceBlock$State
public static "with"(arg0: $BlockState$Type, arg1: $MultiFenceBlock$State$Type, arg2: $MultiFenceBlock$State$Type, arg3: $MultiFenceBlock$State$Type, arg4: $MultiFenceBlock$State$Type): $BlockState
public static "with"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $MultiFenceBlock$State$Type): $BlockState
public static "genModel"(arg0: $DataGenContext$Type<($Block$Type), ($MultiFenceBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "canBeReplaced"(arg0: $BlockState$Type, arg1: $BlockPlaceContext$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "leftClick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
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
export type $MultiFenceBlock$Type = ($MultiFenceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiFenceBlock_ = $MultiFenceBlock$Type;
}}
declare module "packages/dev/xkmc/l2modularblock/$BlockImplementor" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$SingletonBlockMethod, $SingletonBlockMethod$Type} from "packages/dev/xkmc/l2modularblock/type/$SingletonBlockMethod"
import {$BlockMethod, $BlockMethod$Type} from "packages/dev/xkmc/l2modularblock/type/$BlockMethod"
import {$MultipleBlockMethod, $MultipleBlockMethod$Type} from "packages/dev/xkmc/l2modularblock/type/$MultipleBlockMethod"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"

export class $BlockImplementor {

constructor(arg0: $BlockBehaviour$Properties$Type)

/**
 * 
 * @deprecated
 */
public "execute"<T extends $MultipleBlockMethod>(arg0: $Class$Type<(T)>): $Stream<(T)>
public "forEach"<T extends $MultipleBlockMethod>(arg0: $Class$Type<(T)>, arg1: $Consumer$Type<(T)>): void
public "reduce"<T extends $MultipleBlockMethod, U>(arg0: $Class$Type<(T)>, arg1: U, arg2: $BiFunction$Type<(U), (T), (U)>): U
public "one"<T extends $SingletonBlockMethod>(arg0: $Class$Type<(T)>): $Optional<(T)>
public "addImpls"(...arg0: ($BlockMethod$Type)[]): $BlockImplementor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockImplementor$Type = ($BlockImplementor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockImplementor_ = $BlockImplementor$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe$RecipeFactory" {
import {$AbstractShapelessRecipe, $AbstractShapelessRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapelessRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $AbstractShapelessRecipe$RecipeFactory<T extends $AbstractShapelessRecipe<(T)>> {

 "create"(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>): T

(arg0: $ResourceLocation$Type, arg1: string, arg2: $ItemStack$Type, arg3: $NonNullList$Type<($Ingredient$Type)>): T
}

export namespace $AbstractShapelessRecipe$RecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapelessRecipe$RecipeFactory$Type<T> = ($AbstractShapelessRecipe$RecipeFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapelessRecipe$RecipeFactory_<T> = $AbstractShapelessRecipe$RecipeFactory$Type<(T)>;
}}
declare module "packages/dev/xkmc/twilightdelight/content/effect/$FrozenRange" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/twilightdelight/content/effect/$RangeRenderEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FrozenRange extends $RangeRenderEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrozenRange$Type = ($FrozenRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrozenRange_ = $FrozenRange$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$SoberEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$EmptyEffect, $EmptyEffect$Type} from "packages/dev/xkmc/youkaishomecoming/content/effect/$EmptyEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SoberEffect extends $EmptyEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoberEffect$Type = ($SoberEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoberEffect_ = $SoberEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$FoodType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FoodType extends $Enum<($FoodType)> {
static readonly "JUICE": $FoodType
static readonly "JELLY": $FoodType
static readonly "JELLO": $FoodType
static readonly "FRUIT": $FoodType
static readonly "SLICE": $FoodType
static readonly "SHEET": $FoodType
static readonly "STICK": $FoodType
static readonly "SWEET": $FoodType
static readonly "CREAM": $FoodType
static readonly "BOWL": $FoodType
static readonly "MEAL": $FoodType
static readonly "DESSERT": $FoodType
static readonly "STAPLE": $FoodType
static readonly "ROLL": $FoodType
static readonly "COOKIE": $FoodType
static readonly "MANGOSTEEN_CAKE": $FoodType
static readonly "DURIAN_FLESH": $FoodType
readonly "food": integer
readonly "tags": ($TagKey<($Item)>)[]
readonly "effectLevel": integer


public static "values"(): ($FoodType)[]
public static "valueOf"(arg0: string): $FoodType
public "build"(arg0: $Item$Properties$Type, arg1: $IFDFood$Type): $Item
public "build"(arg0: $Item$Properties$Type, arg1: $IFDFood$Type, arg2: $Block$Type): $Item
public "model"<T>(arg0: $ItemBuilder$Type<($Item$Type), (T)>, arg1: integer, arg2: $FruitType$Type): $ItemBuilder<($Item), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodType$Type = (("mangosteen_cake") | ("staple") | ("cookie") | ("fruit") | ("roll") | ("cream") | ("juice") | ("bowl") | ("meal") | ("jello") | ("dessert") | ("slice") | ("durian_flesh") | ("sheet") | ("stick") | ("jelly") | ("sweet")) | ($FoodType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodType_ = $FoodType$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$JellyBottleBlock" {
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
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

export class $JellyBottleBlock extends $Block {
static readonly "SHAPE": $VoxelShape
readonly "fruit": $FruitType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JellyBottleBlock$Type = ($JellyBottleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JellyBottleBlock_ = $JellyBottleBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/food/$YHFoodItem" {
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
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $YHFoodItem extends $Item {
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

constructor(arg0: $Item$Properties$Type, arg1: $UseAnim$Type)
constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getFoodEffects"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public static "getFoodEffects"(arg0: $FoodProperties$Type, arg1: $List$Type<($Component$Type)>): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHFoodItem$Type = ($YHFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHFoodItem_ = $YHFoodItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$YHCandleCakeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractCandleBlock, $AbstractCandleBlock$Type} from "packages/net/minecraft/world/level/block/$AbstractCandleBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$YHCakeBlock, $YHCakeBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/food/$YHCakeBlock"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $YHCandleCakeBlock extends $AbstractCandleBlock {
static readonly "LIT": $BooleanProperty
readonly "candle": $Block
static readonly "LIGHT_PER_CANDLE": integer
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

constructor(arg0: $Supplier$Type<($YHCakeBlock$Type)>, arg1: $Block$Type, arg2: $BlockBehaviour$Properties$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "byCandle"(arg0: $Block$Type, arg1: $YHCakeBlock$Type): $BlockState
public static "hasEntry"(arg0: $Block$Type, arg1: $YHCakeBlock$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHCandleCakeBlock$Type = ($YHCandleCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHCandleCakeBlock_ = $YHCandleCakeBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/plant/$YHBushBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $YHBushBlock extends $BushBlock {
static readonly "FLOWERING": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public static "buildModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHBushBlock$Type = ($YHBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHBushBlock_ = $YHBushBlock$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/effect/$RangeRenderEffect" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FirstPlayerRenderEffect, $FirstPlayerRenderEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$FirstPlayerRenderEffect"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$DelayedEntityRender, $DelayedEntityRender$Type} from "packages/dev/xkmc/l2library/base/effects/api/$DelayedEntityRender"
import {$ClientRenderEffect, $ClientRenderEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$ClientRenderEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$RangeSearchEffect, $RangeSearchEffect$Type} from "packages/dev/xkmc/twilightdelight/content/effect/$RangeSearchEffect"

export class $RangeRenderEffect extends $RangeSearchEffect implements $ClientRenderEffect, $FirstPlayerRenderEffect {


public "render"(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($DelayedEntityRender$Type)>): void
public "onClientLevelRender"(arg0: $AbstractClientPlayer$Type, arg1: $MobEffectInstance$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeRenderEffect$Type = ($RangeRenderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeRenderEffect_ = $RangeRenderEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/plant/$DoubleCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DoubleCropBlock extends $CropBlock {
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getDoubleBlockStart"(): integer
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "setGrowth"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): void
public "growCrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
get "doubleBlockStart"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleCropBlock$Type = ($DoubleCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleCropBlock_ = $DoubleCropBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$SakeFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IYHSake, $IYHSake$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$IYHSake"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $SakeFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $IYHSake$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SakeFluidType$Type = ($SakeFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SakeFluidType_ = $SakeFluidType$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/item/$PlateItem" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlateItem extends $Item {
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

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlateItem$Type = ($PlateItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlateItem_ = $PlateItem$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/block/$FierySnakesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FeastBlock, $FeastBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$FeastBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FierySnakesBlock extends $FeastBlock {
static readonly "FACING": $DirectionProperty
static readonly "SERVINGS": $IntegerProperty
readonly "servingItem": $Supplier<($Item)>
readonly "hasLeftovers": boolean
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FierySnakesBlock$Type = ($FierySnakesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FierySnakesBlock_ = $FierySnakesBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouHatItem" {
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IYHDanmaku, $IYHDanmaku$Type} from "packages/dev/xkmc/youkaishomecoming/content/entity/danmaku/$IYHDanmaku"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$TouhouMat, $TouhouMat$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouMat"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TouhouHatItem extends $ArmorItem {
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

constructor(arg0: $Item$Properties$Type, arg1: $TouhouMat$Type)

public "support"(arg0: $DyeColor$Type): boolean
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "onHurtTarget"(arg0: $ItemStack$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type): void
public "modifyDamageType"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $IYHDanmaku$Type, arg3: $DamageSource$Type): $DamageSource
public static "showTooltip"(): boolean
public "getDefaultAttributeModifiers"(arg0: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
public "getAttributeModifiersForDisplay"(): $Multimap<($Attribute), ($AttributeModifier)>
public static "get"(arg0: $ItemStack$Type): $Equipable
get "attributeModifiersForDisplay"(): $Multimap<($Attribute), ($AttributeModifier)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TouhouHatItem$Type = ($TouhouHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TouhouHatItem_ = $TouhouHatItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Fruit" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DurianLeavesBlock$Fruit extends $Enum<($DurianLeavesBlock$Fruit)> implements $StringRepresentable {
static readonly "NONE": $DurianLeavesBlock$Fruit
static readonly "FLOWERS": $DurianLeavesBlock$Fruit
static readonly "SMALL": $DurianLeavesBlock$Fruit
static readonly "FRUITS": $DurianLeavesBlock$Fruit


public static "values"(): ($DurianLeavesBlock$Fruit)[]
public static "valueOf"(arg0: string): $DurianLeavesBlock$Fruit
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
export type $DurianLeavesBlock$Fruit$Type = (("small") | ("flowers") | ("fruits") | ("none")) | ($DurianLeavesBlock$Fruit);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianLeavesBlock$Fruit_ = $DurianLeavesBlock$Fruit$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PineappleRiceBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FeastBlock, $FeastBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$FeastBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PineappleRiceBlock extends $FeastBlock {
static readonly "FACING": $DirectionProperty
static readonly "SERVINGS": $IntegerProperty
readonly "servingItem": $Supplier<($Item)>
readonly "hasLeftovers": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>, arg2: boolean)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PineappleRiceBlock$Type = ($PineappleRiceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PineappleRiceBlock_ = $PineappleRiceBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PeachLeavesBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PassableLeavesBlock, $PassableLeavesBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock"
import {$PassableLeavesBlock$State, $PassableLeavesBlock$State$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$PassableLeavesBlock$State"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PeachLeavesBlock extends $PassableLeavesBlock {
static readonly "FERTILE": $BooleanProperty
static readonly "STATE": $EnumProperty<($PassableLeavesBlock$State)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
public "buildLeavesModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeachLeavesBlock$Type = ($PeachLeavesBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeachLeavesBlock_ = $PeachLeavesBlock$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/item/$SpatulaItem" {
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
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SpatulaItem extends $Item {
static readonly "ANIM_TIME": integer
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
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatulaItem$Type = ($SpatulaItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatulaItem_ = $SpatulaItem$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$InherentEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $InherentEffect extends $MobEffect {


public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InherentEffect$Type = ($InherentEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InherentEffect_ = $InherentEffect$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe$RecInv" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BaseRecipe, $BaseRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $BaseRecipe$RecInv<R extends $BaseRecipe<(any), (R), (any)>> extends $Container {

 "setChanged"(): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "kjs$self"(): $Container
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "getMaxStackSize"(): integer
 "startOpen"(arg0: $Player$Type): void
 "stillValid"(arg0: $Player$Type): boolean
 "stopOpen"(arg0: $Player$Type): void
 "isMutable"(): boolean
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "getStackInSlot"(slot: integer): $ItemStack
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "getSlots"(): integer
 "countItem"(arg0: $Item$Type): integer
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getHeight"(): integer
 "clear"(): void
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "asContainer"(): $Container
 "getWidth"(): integer
 "getSlotLimit"(slot: integer): integer
 "setChanged"(): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "clearContent"(): void
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "clear"(ingredient: $Ingredient$Type): void
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
}

export namespace $BaseRecipe$RecInv {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseRecipe$RecInv$Type<R> = ($BaseRecipe$RecInv<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseRecipe$RecInv_<R> = $BaseRecipe$RecInv$Type<(R)>;
}}
declare module "packages/dev/xkmc/l2library/base/$NamedEntry" {
import {$L2Registrate$RegistryInstance, $L2Registrate$RegistryInstance$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate$RegistryInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $NamedEntry<T extends $NamedEntry<(T)>> {

constructor(arg0: $L2Registrate$RegistryInstance$Type<(T)>)

public "getID"(): string
public "getDesc"(): $MutableComponent
public "getThis"(): T
public "getDescriptionId"(): string
public "getRegistryName"(): $ResourceLocation
get "iD"(): string
get "desc"(): $MutableComponent
get "this"(): T
get "descriptionId"(): string
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedEntry$Type<T> = ($NamedEntry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedEntry_<T> = $NamedEntry$Type<(T)>;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$IYHSake" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FluidEntry, $FluidEntry$Type} from "packages/com/tterrag/registrate/util/entry/$FluidEntry"

export interface $IYHSake {

 "count"(): integer
 "amount"(): integer
 "item"(): $ItemEntry<(any)>
 "getContainer"(): $Item
 "getColor"(): integer
 "fluid"(): $FluidEntry<(any)>
 "asStack"(arg0: integer): $ItemStack
}

export namespace $IYHSake {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IYHSake$Type = ($IYHSake);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IYHSake_ = $IYHSake$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/recipe/$CuisineRecipeMatch" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CuisineRecipeMatch extends $Record {

constructor(ingredient: $Ingredient$Type, min: double, max: double, score: double, bonus: double)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "min"(): double
public "max"(): double
public "reduce"(arg0: $ArrayList$Type<($ItemStack$Type)>): double
public "score"(): double
public "bonus"(): double
public "ingredient"(): $Ingredient
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuisineRecipeMatch$Type = ($CuisineRecipeMatch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuisineRecipeMatch_ = $CuisineRecipeMatch$Type;
}}
declare module "packages/dev/xkmc/fastprojectileapi/entity/$SimplifiedProjectile" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$IEntityAdditionalSpawnData, $IEntityAdditionalSpawnData$Type} from "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$TraceableEntity, $TraceableEntity$Type} from "packages/net/minecraft/world/entity/$TraceableEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$SimplifiedEntity, $SimplifiedEntity$Type} from "packages/dev/xkmc/fastprojectileapi/entity/$SimplifiedEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $SimplifiedProjectile extends $SimplifiedEntity implements $TraceableEntity, $IEntityAdditionalSpawnData {
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

public "setOwner"(arg0: $Entity$Type): void
public "rot"(): $Vec3
public "lerpMotion"(arg0: double, arg1: double, arg2: double): void
public "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
public "getOwner"(): $Entity
public "canHitEntity"(arg0: $Entity$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "owner"(value: $Entity$Type)
get "owner"(): $Entity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplifiedProjectile$Type = ($SimplifiedProjectile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplifiedProjectile_ = $SimplifiedProjectile$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$ClientRenderEffect" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$DelayedEntityRender, $DelayedEntityRender$Type} from "packages/dev/xkmc/l2library/base/effects/api/$DelayedEntityRender"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ClientRenderEffect {

 "render"(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($DelayedEntityRender$Type)>): void

(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($DelayedEntityRender$Type)>): void
}

export namespace $ClientRenderEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientRenderEffect$Type = ($ClientRenderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientRenderEffect_ = $ClientRenderEffect$Type;
}}
declare module "packages/dev/xkmc/l2library/base/$L2Registrate$RegistryInstance" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$NamedEntry, $NamedEntry$Type} from "packages/dev/xkmc/l2library/base/$NamedEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $L2Registrate$RegistryInstance<E extends $NamedEntry<(E)>> extends $Record implements $Supplier<($IForgeRegistry<(E)>)> {

constructor(supplier: $Supplier$Type<($IForgeRegistry$Type<(E)>)>, key: $ResourceKey$Type<($Registry$Type<(E)>)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "key"(): $ResourceKey<($Registry<(E)>)>
public "supplier"(): $Supplier<($IForgeRegistry<(E)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $L2Registrate$RegistryInstance$Type<E> = ($L2Registrate$RegistryInstance<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $L2Registrate$RegistryInstance_<E> = $L2Registrate$RegistryInstance$Type<(E)>;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BasePotItem extends $BlockItem {
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

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getTooltipImage"(arg0: $ItemStack$Type): $Optional<($TooltipComponent)>
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePotItem$Type = ($BasePotItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePotItem_ = $BasePotItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$FleshFeastBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FeastBlock, $FeastBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$FeastBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FleshFeastBlock extends $FeastBlock {
static readonly "FACING": $DirectionProperty
static readonly "SERVINGS": $IntegerProperty
readonly "servingItem": $Supplier<($Item)>
readonly "hasLeftovers": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public "getName"(): $MutableComponent
public static "builtLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $FleshFeastBlock$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
get "name"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FleshFeastBlock$Type = ($FleshFeastBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FleshFeastBlock_ = $FleshFeastBlock$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/block/$FieryCookingPotBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$CookingPotBlock, $CookingPotBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$CookingPotBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CookingPotSupport, $CookingPotSupport$Type} from "packages/vectorwing/farmersdelight/common/block/state/$CookingPotSupport"

export class $FieryCookingPotBlock extends $CookingPotBlock {
static readonly "FACING": $DirectionProperty
static readonly "SUPPORT": $EnumProperty<($CookingPotSupport)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieryCookingPotBlock$Type = ($FieryCookingPotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieryCookingPotBlock_ = $FieryCookingPotBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotSerializer" {
import {$BasePotSerializer$Factory, $BasePotSerializer$Factory$Type} from "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotSerializer$Factory"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$BasePotRecipe, $BasePotRecipe$Type} from "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotRecipe"

export class $BasePotSerializer<T extends $BasePotRecipe> extends $Record implements $RecipeSerializer<(T)> {

constructor(factory: $BasePotSerializer$Factory$Type<(T)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $BasePotSerializer$Factory<(T)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePotSerializer$Type<T> = ($BasePotSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePotSerializer_<T> = $BasePotSerializer$Type<(T)>;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$HayVerticalSlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$VerticalSlabBlock, $VerticalSlabBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/variants/$VerticalSlabBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HayVerticalSlabBlock extends $VerticalSlabBlock {
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HayVerticalSlabBlock$Type = ($HayVerticalSlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HayVerticalSlabBlock_ = $HayVerticalSlabBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$CyclingEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $CyclingEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CyclingEffect$Type = ($CyclingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CyclingEffect_ = $CyclingEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$HealAuraEffect" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $HealAuraEffect extends $RangeRenderEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HealAuraEffect$Type = ($HealAuraEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HealAuraEffect_ = $HealAuraEffect$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData$Entry" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$CookedFoodData$EffectData, $CookedFoodData$EffectData$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData$EffectData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CookedFoodData$Entry extends $Record {

constructor(stack: $ItemStack$Type, itemSize: integer, burnt: boolean, raw: boolean, overcooked: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "stack"(): $ItemStack
public "raw"(): boolean
public "itemSize"(): integer
public "addMobEffects"(arg0: $Map$Type<($MobEffect$Type), ($CookedFoodData$EffectData$Type)>, arg1: integer): void
public "getEatenStack"(): $ItemStack
public "burnt"(): boolean
public "overcooked"(): boolean
get "eatenStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookedFoodData$Entry$Type = ($CookedFoodData$Entry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookedFoodData$Entry_ = $CookedFoodData$Entry$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$StrawHatItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TouhouHatItem, $TouhouHatItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouHatItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StrawHatItem extends $TouhouHatItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StrawHatItem$Type = ($StrawHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StrawHatItem_ = $StrawHatItem$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$AbstractShapedRecipe$RecipeFactory, $AbstractShapedRecipe$RecipeFactory$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$RecipeFactory"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractShapedRecipe, $AbstractShapedRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$ShapedRecipe$Serializer, $ShapedRecipe$Serializer$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe$Serializer"

export class $AbstractShapedRecipe$Serializer<T extends $AbstractShapedRecipe<(T)>> extends $ShapedRecipe$Serializer {

constructor(arg0: $AbstractShapedRecipe$RecipeFactory$Type<(T)>)

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toJson"(arg0: T, arg1: $JsonObject$Type): void
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$Serializer$Type<T> = ($AbstractShapedRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapedRecipe$Serializer_<T> = $AbstractShapedRecipe$Serializer$Type<(T)>;
}}
declare module "packages/dev/xkmc/youkaishomecoming/init/food/$Saucer" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$BlockModelBuilder, $BlockModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Saucer extends $Enum<($Saucer)> implements $StringRepresentable {
static readonly "SAUCER_1": $Saucer
static readonly "SAUCER_2": $Saucer
static readonly "SAUCER_3": $Saucer
static readonly "SAUCER_4": $Saucer
readonly "extra": boolean
readonly "base": string
readonly "tex": (string)[]


public static "values"(): ($Saucer)[]
public static "valueOf"(arg0: string): $Saucer
public "build"(arg0: $RegistrateBlockstateProvider$Type): $BlockModelBuilder
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
export type $Saucer$Type = (("saucer_3") | ("saucer_2") | ("saucer_4") | ("saucer_1")) | ($Saucer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Saucer_ = $Saucer$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$RumiaHairbandItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$TouhouHatItem, $TouhouHatItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouHatItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RumiaHairbandItem extends $TouhouHatItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RumiaHairbandItem$Type = ($RumiaHairbandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RumiaHairbandItem_ = $RumiaHairbandItem$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/tool/$KnightmetalKnifeItem" {
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
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$TDKnifeItem, $TDKnifeItem$Type} from "packages/dev/xkmc/twilightdelight/content/item/tool/$TDKnifeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KnightmetalKnifeItem extends $TDKnifeItem {
 "speed": float
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KnightmetalKnifeItem$Type = ($KnightmetalKnifeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KnightmetalKnifeItem_ = $KnightmetalKnifeItem$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/food/$TDDrinkableItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DrinkableItem, $DrinkableItem$Type} from "packages/vectorwing/farmersdelight/common/item/$DrinkableItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TDDrinkableItem extends $DrinkableItem {
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
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TDDrinkableItem$Type = ($TDDrinkableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TDDrinkableItem_ = $TDDrinkableItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$MangosteenCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
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
import {$BaseCakeBlock, $BaseCakeBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseCakeBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MangosteenCakeBlock extends $BaseCakeBlock {
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
readonly "bite": $IntegerProperty
readonly "maxBite": integer
readonly "plate": boolean
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MangosteenCakeBlock$Type = ($MangosteenCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MangosteenCakeBlock_ = $MangosteenCakeBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianBlock" {
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
import {$FallingBlock, $FallingBlock$Type} from "packages/net/minecraft/world/level/block/$FallingBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $DurianBlock extends $FallingBlock {
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DurianBlock$Type = ($DurianBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianBlock_ = $DurianBlock$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/effect/$RangeSearchEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RangeSearchEffect extends $MobEffect {


public "getEntitiesInRange"<T extends $Entity>(arg0: $LivingEntity$Type, arg1: $Class$Type<(T)>): $List<(T)>
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeSearchEffect$Type = ($RangeSearchEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeSearchEffect_ = $RangeSearchEffect$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/mixin/$FoodPropertiesAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $FoodPropertiesAccessor {

 "getEffectSupplierList"(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>

(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>
}

export namespace $FoodPropertiesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodPropertiesAccessor$Type = ($FoodPropertiesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodPropertiesAccessor_ = $FoodPropertiesAccessor$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$YHCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$CakeBlock, $CakeBlock$Type} from "packages/net/minecraft/world/level/block/$CakeBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $YHCakeBlock extends $CakeBlock {
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
static readonly "FULL_CAKE_SIGNAL": integer
static readonly "AABB_OFFSET": float
static readonly "AABB_SIZE_PER_BITE": float
static readonly "SHAPE_BY_BITE": ($VoxelShape)[]
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

constructor(arg0: $Supplier$Type<($Item$Type)>, arg1: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "eatSlice"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHCakeBlock$Type = ($YHCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHCakeBlock_ = $YHCakeBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$KoishiHatItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TouhouHatItem, $TouhouHatItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouHatItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $KoishiHatItem extends $TouhouHatItem {
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

constructor(arg0: $Item$Properties$Type)

public "support"(arg0: $DyeColor$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KoishiHatItem$Type = ($KoishiHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KoishiHatItem_ = $KoishiHatItem$Type;
}}
declare module "packages/dev/xkmc/l2library/base/$L2Registrate$GenericBuilder" {
import {$AbstractBuilder, $AbstractBuilder$Type} from "packages/com/tterrag/registrate/builders/$AbstractBuilder"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$NamedEntry, $NamedEntry$Type} from "packages/dev/xkmc/l2library/base/$NamedEntry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $L2Registrate$GenericBuilder<T extends $NamedEntry<(T)>, P extends T> extends $AbstractBuilder<(T), (P), ($L2Registrate), ($L2Registrate$GenericBuilder<(T), (P)>)> {


public "defaultLang"(): $L2Registrate$GenericBuilder<(T), (P)>
public static "of"<T>(arg0: $Supplier$Type<(T)>, arg1: $NonNullSupplier$Type<(string)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$Type<(T)>): $NonNullSupplier<(T)>
public static "lazy"<T>(arg0: $Supplier$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $L2Registrate$GenericBuilder$Type<T, P> = ($L2Registrate$GenericBuilder<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $L2Registrate$GenericBuilder_<T, P> = $L2Registrate$GenericBuilder$Type<(T), (P)>;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$ThinDoorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$DoorHingeSide, $DoorHingeSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoorHingeSide"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockSetType, $BlockSetType$Type} from "packages/net/minecraft/world/level/block/state/properties/$BlockSetType"

export class $ThinDoorBlock extends $DoorBlock {
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

public static "doorBlock"(arg0: $RegistrateBlockstateProvider$Type, arg1: $DoorBlock$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type, arg5: $ModelFile$Type, arg6: $ModelFile$Type, arg7: $ModelFile$Type, arg8: $ModelFile$Type, arg9: $ModelFile$Type): void
public static "buildModels"(arg0: $RegistrateBlockstateProvider$Type, arg1: $DoorBlock$Type, arg2: string, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThinDoorBlock$Type = ($ThinDoorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThinDoorBlock_ = $ThinDoorBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$RangeSearchEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $RangeSearchEffect extends $MobEffect {


public "getEntitiesInRange"<T extends $Entity>(arg0: $LivingEntity$Type, arg1: $Class$Type<(T)>): $List<(T)>
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeSearchEffect$Type = ($RangeSearchEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeSearchEffect_ = $RangeSearchEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$SuwakoHatItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TouhouHatItem, $TouhouHatItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouHatItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SuwakoHatItem extends $TouhouHatItem {
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

constructor(arg0: $Item$Properties$Type)

public "support"(arg0: $DyeColor$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuwakoHatItem$Type = ($SuwakoHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SuwakoHatItem_ = $SuwakoHatItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BaseBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $BaseBushBlock extends $BushBlock implements $BonemealableBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
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

/**
 * 
 * @deprecated
 */
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseBushBlock$Type = ($BaseBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseBushBlock_ = $BaseBushBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/plants/$FDMelons" {
import {$RegistrateRecipeProvider, $RegistrateRecipeProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateRecipeProvider"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$StemGrownBlock, $StemGrownBlock$Type} from "packages/net/minecraft/world/level/block/$StemGrownBlock"
import {$PlantDataEntry, $PlantDataEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/plants/$PlantDataEntry"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ItemBuilder, $ItemBuilder$Type} from "packages/com/tterrag/registrate/builders/$ItemBuilder"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$StemBlock, $StemBlock$Type} from "packages/net/minecraft/world/level/block/$StemBlock"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$AttachedStemBlock, $AttachedStemBlock$Type} from "packages/net/minecraft/world/level/block/$AttachedStemBlock"
import {$L2Registrate, $L2Registrate$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$RegisterColorHandlersEvent$Block, $RegisterColorHandlersEvent$Block$Type} from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$Block"

export class $FDMelons extends $Enum<($FDMelons)> implements $PlantDataEntry<($FDMelons)> {
static readonly "HAMIMELON": $FDMelons
readonly "configKey": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
readonly "placementKey": $ResourceKey<($PlacedFeature)>


public "getName"(): string
public static "values"(): ($FDMelons)[]
public static "valueOf"(arg0: string): $FDMelons
public static "register"(): void
public "getSeed"(): $ItemNameBlockItem
public "genRecipe"(arg0: $RegistrateRecipeProvider$Type): void
public "getSlice"(): $Item
public "getStem"(): $StemBlock
public "registerComposter"(): void
public "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
public "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
public "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
public "getAttachedStem"(): $AttachedStemBlock
public "getMelonBlock"(): $StemGrownBlock
public static "registerColor"(arg0: $RegisterColorHandlersEvent$Block$Type): void
public static "run"(arg0: $Consumer$Type<($PlantDataEntry$Type<(any)>)>): void
public static "gen"<T>(arg0: T, arg1: $BiConsumer$Type<($PlantDataEntry$Type<(any)>), (T)>): void
public static "addFruitTags"<T extends $Item>(arg0: string, arg1: $ItemBuilder$Type<(T), ($L2Registrate$Type)>): $ItemBuilder<(T), ($L2Registrate)>
get "name"(): string
get "seed"(): $ItemNameBlockItem
get "slice"(): $Item
get "stem"(): $StemBlock
get "placementKey"(): $ResourceKey<($PlacedFeature)>
get "attachedStem"(): $AttachedStemBlock
get "melonBlock"(): $StemGrownBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDMelons$Type = (("hamimelon")) | ($FDMelons);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDMelons_ = $FDMelons$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$ReimuHairbandItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$TouhouHatItem, $TouhouHatItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouHatItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$IYHDanmaku, $IYHDanmaku$Type} from "packages/dev/xkmc/youkaishomecoming/content/entity/danmaku/$IYHDanmaku"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ReimuHairbandItem extends $TouhouHatItem {
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

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "modifyDamageType"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $IYHDanmaku$Type, arg3: $DamageSource$Type): $DamageSource
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReimuHairbandItem$Type = ($ReimuHairbandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReimuHairbandItem_ = $ReimuHairbandItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$RageAuraEffect" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"

export class $RageAuraEffect extends $RangeRenderEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RageAuraEffect$Type = ($RageAuraEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RageAuraEffect_ = $RageAuraEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$PineappleBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseBushBlock, $BaseBushBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseBushBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PineappleBlock extends $BaseBushBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PineappleBlock$Type = ($PineappleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PineappleBlock_ = $PineappleBlock$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/block/$FieryCookingPotItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$CookingPotItem, $CookingPotItem$Type} from "packages/vectorwing/farmersdelight/common/item/$CookingPotItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FieryCookingPotItem extends $CookingPotItem {
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
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FieryCookingPotItem$Type = ($FieryCookingPotItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FieryCookingPotItem_ = $FieryCookingPotItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/init/registrate/$YHDanmaku$Bullet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$DanmakuItem, $DanmakuItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/danmaku/$DanmakuItem"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $YHDanmaku$Bullet extends $Enum<($YHDanmaku$Bullet)> {
static readonly "CIRCLE": $YHDanmaku$Bullet
static readonly "BALL": $YHDanmaku$Bullet
static readonly "MENTOS": $YHDanmaku$Bullet
static readonly "BUBBLE": $YHDanmaku$Bullet
static readonly "BUTTERFLY": $YHDanmaku$Bullet
readonly "name": string
readonly "tag": $TagKey<($Item)>
readonly "size": float


public "get"(arg0: $DyeColor$Type): $ItemEntry<($DanmakuItem)>
public static "values"(): ($YHDanmaku$Bullet)[]
public static "valueOf"(arg0: string): $YHDanmaku$Bullet
public "damage"(): integer
public "bypass"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHDanmaku$Bullet$Type = (("ball") | ("mentos") | ("bubble") | ("butterfly") | ("circle")) | ($YHDanmaku$Bullet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHDanmaku$Bullet_ = $YHDanmaku$Bullet$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/entries/$FruitFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $FruitFluid extends $ForgeFlowingFluid {
readonly "type": $FruitType
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type, arg1: $FruitType$Type)

public "getBucket"(): $Item
public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "bucket"(): $Item
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitFluid$Type = ($FruitFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitFluid_ = $FruitFluid$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$WildPineappleBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $WildPineappleBlock extends $BushBlock {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WildPineappleBlock$Type = ($WildPineappleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WildPineappleBlock_ = $WildPineappleBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/init/food/$YHCrops" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockEntry, $BlockEntry$Type} from "packages/com/tterrag/registrate/util/entry/$BlockEntry"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$ItemNameBlockItem, $ItemNameBlockItem$Type} from "packages/net/minecraft/world/item/$ItemNameBlockItem"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BootstapContext, $BootstapContext$Type} from "packages/net/minecraft/data/worldgen/$BootstapContext"

export class $YHCrops extends $Enum<($YHCrops)> {
static readonly "SOYBEAN": $YHCrops
static readonly "REDBEAN": $YHCrops
static readonly "COFFEA": $YHCrops
static readonly "TEA": $YHCrops
static readonly "UDUMBARA": $YHCrops
static readonly "MANDRAKE": $YHCrops
readonly "seed": $ItemEntry<($ItemNameBlockItem)>
readonly "fruits": $ItemEntry<(any)>
readonly "configKey": $ResourceKey<($ConfiguredFeature<(any), (any)>)>
readonly "placementKey": $ResourceKey<($PlacedFeature)>


public "getName"(): string
public static "values"(): ($YHCrops)[]
public static "valueOf"(arg0: string): $YHCrops
public static "register"(): void
public "getSeed"(): $Item
public "getFruits"(): $Item
public "createBag"(): $BlockEntry<($Block)>
public static "createBag"(arg0: string): $BlockEntry<($Block)>
public "getPlant"(): $Block
public "registerComposter"(): void
public "registerConfigs"(arg0: $BootstapContext$Type<($ConfiguredFeature$Type<(any), (any)>)>): void
public "registerPlacements"(arg0: $BootstapContext$Type<($PlacedFeature$Type)>): void
public "getPlacementKey"(): $ResourceKey<($PlacedFeature)>
public "getWildPlant"(): $Block
get "name"(): string
get "seed"(): $Item
get "fruits"(): $Item
get "plant"(): $Block
get "placementKey"(): $ResourceKey<($PlacedFeature)>
get "wildPlant"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHCrops$Type = (("soybean") | ("tea") | ("coffea") | ("udumbara") | ("mandrake") | ("redbean")) | ($YHCrops);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHCrops_ = $YHCrops$Type;
}}
declare module "packages/dev/xkmc/l2library/base/effects/api/$FirstPlayerRenderEffect" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"

export interface $FirstPlayerRenderEffect {

 "onClientLevelRender"(arg0: $AbstractClientPlayer$Type, arg1: $MobEffectInstance$Type): void

(arg0: $AbstractClientPlayer$Type, arg1: $MobEffectInstance$Type): void
}

export namespace $FirstPlayerRenderEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirstPlayerRenderEffect$Type = ($FirstPlayerRenderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirstPlayerRenderEffect_ = $FirstPlayerRenderEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/pot/base/$BasePotBlock" {
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
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CookingPotSupport, $CookingPotSupport$Type} from "packages/vectorwing/farmersdelight/common/block/state/$CookingPotSupport"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $BasePotBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "SUPPORT": $EnumProperty<($CookingPotSupport)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public static "buildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $BasePotBlock$Type): void
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
export type $BasePotBlock$Type = ($BasePotBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasePotBlock_ = $BasePotBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$LeftClickBlock" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $LeftClickBlock {

 "leftClick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean

(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
}

export namespace $LeftClickBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeftClickBlock$Type = ($LeftClickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LeftClickBlock_ = $LeftClickBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$FigPuddingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BaseCakeBlock, $BaseCakeBlock$Type} from "packages/dev/xkmc/fruitsdelight/content/block/$BaseCakeBlock"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $FigPuddingBlock extends $BaseCakeBlock {
static readonly "MAX_BITES": integer
static readonly "BITES": $IntegerProperty
readonly "bite": $IntegerProperty
readonly "maxBite": integer
readonly "plate": boolean
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FigPuddingBlock$Type = ($FigPuddingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FigPuddingBlock_ = $FigPuddingBlock$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/block/$MeefWellingtonBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$FeastBlock, $FeastBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$FeastBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MeefWellingtonBlock extends $FeastBlock {
static readonly "FACING": $DirectionProperty
static readonly "SERVINGS": $IntegerProperty
readonly "servingItem": $Supplier<($Item)>
readonly "hasLeftovers": boolean
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeefWellingtonBlock$Type = ($MeefWellingtonBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MeefWellingtonBlock_ = $MeefWellingtonBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$JelloBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SlimeBlock, $SlimeBlock$Type} from "packages/net/minecraft/world/level/block/$SlimeBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JelloBlock extends $SlimeBlock {
readonly "fruit": $FruitType
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $FruitType$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isSlimeBlock"(arg0: $BlockState$Type): boolean
public "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
public "isStickyBlock"(arg0: $BlockState$Type): boolean
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JelloBlock$Type = ($JelloBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JelloBlock_ = $JelloBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/furniture/$MoonLanternBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$LanternBlock, $LanternBlock$Type} from "packages/net/minecraft/world/level/block/$LanternBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $MoonLanternBlock extends $LanternBlock {
static readonly "SHAPE": $VoxelShape
static readonly "HANGING": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "AABB": $VoxelShape
static readonly "HANGING_AABB": $VoxelShape
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

public static "buildStates"(arg0: $DataGenContext$Type<($Block$Type), ($MoonLanternBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoonLanternBlock$Type = ($MoonLanternBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MoonLanternBlock_ = $MoonLanternBlock$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$RangeRenderEffect" {
import {$AbstractClientPlayer, $AbstractClientPlayer$Type} from "packages/net/minecraft/client/player/$AbstractClientPlayer"
import {$RangeSearchEffect, $RangeSearchEffect$Type} from "packages/dev/xkmc/fruitsdelight/content/effects/$RangeSearchEffect"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FirstPlayerRenderEffect, $FirstPlayerRenderEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$FirstPlayerRenderEffect"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$DelayedEntityRender, $DelayedEntityRender$Type} from "packages/dev/xkmc/l2library/base/effects/api/$DelayedEntityRender"
import {$ClientRenderEffect, $ClientRenderEffect$Type} from "packages/dev/xkmc/l2library/base/effects/api/$ClientRenderEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $RangeRenderEffect extends $RangeSearchEffect implements $ClientRenderEffect, $FirstPlayerRenderEffect {


public "render"(arg0: $LivingEntity$Type, arg1: integer, arg2: $Consumer$Type<($DelayedEntityRender$Type)>): void
public "onClientLevelRender"(arg0: $AbstractClientPlayer$Type, arg1: $MobEffectInstance$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeRenderEffect$Type = ($RangeRenderEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangeRenderEffect_ = $RangeRenderEffect$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/logic/transform/$Stage" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Stage extends $Enum<($Stage)> {
static readonly "RAW": $Stage
static readonly "COOKED": $Stage
static readonly "OVERCOOKED": $Stage


public static "values"(): ($Stage)[]
public static "valueOf"(arg0: string): $Stage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stage$Type = (("cooked") | ("raw") | ("overcooked")) | ($Stage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stage_ = $Stage$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$FDBlockItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$IFDFoodItem, $IFDFoodItem$Type} from "packages/dev/xkmc/fruitsdelight/content/item/$IFDFoodItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FDBlockItem extends $BlockItem implements $IFDFoodItem {
readonly "food": $IFDFood
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

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $IFDFood$Type)
constructor(arg0: $Block$Type, arg1: $Item$Properties$Type, arg2: $IFDFood$Type, arg3: $UseAnim$Type)

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getDrinkingSound"(): $SoundEvent
public "food"(): $IFDFood
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDBlockItem$Type = ($FDBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDBlockItem_ = $FDBlockItem$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/item/$BaseFoodItem" {
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
import {$BaseCuisineRecipe, $BaseCuisineRecipe$Type} from "packages/dev/xkmc/cuisinedelight/content/recipe/$BaseCuisineRecipe"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$CookedFoodData, $CookedFoodData$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookedFoodData"

export class $BaseFoodItem extends $Item {
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

public static "getData"(arg0: $ItemStack$Type): $CookedFoodData
public static "setData"(arg0: $ItemStack$Type, arg1: $CookedFoodData$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "displayStack"(arg0: $BaseCuisineRecipe$Type<(any)>): $ItemStack
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "isEdible"(): boolean
public "getFoodProperties"(): $FoodProperties
public static "setResultDisplay"(arg0: $BaseCuisineRecipe$Type<(any)>, arg1: $ItemStack$Type): $ItemStack
public static "setIngredientDisplay"(arg0: $ItemStack$Type): $ItemStack
get "edible"(): boolean
get "foodProperties"(): $FoodProperties
set "ingredientDisplay"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseFoodItem$Type = ($BaseFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseFoodItem_ = $BaseFoodItem$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$AbstractShapedRecipe$Serializer, $AbstractShapedRecipe$Serializer$Type} from "packages/dev/xkmc/l2library/serial/recipe/$AbstractShapedRecipe$Serializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $AbstractShapedRecipe<T extends $AbstractShapedRecipe<(T)>> extends $ShapedRecipe {
static "MAX_WIDTH": integer
static "MAX_HEIGHT": integer
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: integer, arg3: integer, arg4: $NonNullList$Type<($Ingredient$Type)>, arg5: $ItemStack$Type)

public "getSerializer"(): $AbstractShapedRecipe$Serializer<(T)>
get "serializer"(): $AbstractShapedRecipe$Serializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractShapedRecipe$Type<T> = ($AbstractShapedRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractShapedRecipe_<T> = $AbstractShapedRecipe$Type<(T)>;
}}
declare module "packages/dev/xkmc/fastprojectileapi/entity/$SimplifiedEntity" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"

export class $SimplifiedEntity extends $Entity {
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

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "setSecondsOnFire"(arg0: integer): void
public "setRemainingFireTicks"(arg0: integer): void
public "ignoreExplosion"(): boolean
public "getPistonPushReaction"(): $PushReaction
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public "mayInteract"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
public "canSpawnSprintParticle"(): boolean
public "getRemainingFireTicks"(): integer
public "extinguish"(): void
public "baseTick"(): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "secondsOnFire"(value: integer)
set "remainingFireTicks"(value: integer)
get "pistonPushReaction"(): $PushReaction
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
get "remainingFireTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimplifiedEntity$Type = ($SimplifiedEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimplifiedEntity_ = $SimplifiedEntity$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/init/registrate/$YHDanmaku$Laser" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ItemEntry, $ItemEntry$Type} from "packages/com/tterrag/registrate/util/entry/$ItemEntry"
import {$LaserItem, $LaserItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/danmaku/$LaserItem"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $YHDanmaku$Laser extends $Enum<($YHDanmaku$Laser)> {
static readonly "LASER": $YHDanmaku$Laser
readonly "name": string
readonly "tag": $TagKey<($Item)>
readonly "size": float


public "get"(arg0: $DyeColor$Type): $ItemEntry<($LaserItem)>
public static "values"(): ($YHDanmaku$Laser)[]
public static "valueOf"(arg0: string): $YHDanmaku$Laser
public "damage"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHDanmaku$Laser$Type = (("laser")) | ($YHDanmaku$Laser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHDanmaku$Laser_ = $YHDanmaku$Laser$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$HaySlabBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$SlabType, $SlabType$Type} from "packages/net/minecraft/world/level/block/state/properties/$SlabType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $HaySlabBlock extends $SlabBlock {
static readonly "TYPE": $EnumProperty<($SlabType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "BOTTOM_AABB": $VoxelShape
static readonly "TOP_AABB": $VoxelShape
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

public "fallOn"(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HaySlabBlock$Type = ($HaySlabBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HaySlabBlock_ = $HaySlabBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/util/raytrace/$IGlowingTarget" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IGlowingTarget {

 "getDistance"(arg0: $ItemStack$Type): integer

(arg0: $ItemStack$Type): integer
}

export namespace $IGlowingTarget {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGlowingTarget$Type = ($IGlowingTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGlowingTarget_ = $IGlowingTarget$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/item/tool/$TeardropSwordItem" {
import {$FierySwordItem, $FierySwordItem$Type} from "packages/twilightforest/item/$FierySwordItem"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TeardropSwordItem extends $FierySwordItem {
static readonly "TIER": $Tier
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

public "hurtEnemy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeardropSwordItem$Type = ($TeardropSwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TeardropSwordItem_ = $TeardropSwordItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DoubleBushBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BonemealableBlock, $BonemealableBlock$Type} from "packages/net/minecraft/world/level/block/$BonemealableBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$DoublePlantBlock, $DoublePlantBlock$Type} from "packages/net/minecraft/world/level/block/$DoublePlantBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $DoubleBushBlock extends $DoublePlantBlock implements $BonemealableBlock {
static readonly "AGE": $IntegerProperty
static readonly "MAX_AGE": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
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

public "getDoubleBlockStart"(): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "randomTick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "setGrowth"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer, arg3: integer): void
public "isRandomlyTicking"(arg0: $BlockState$Type): boolean
public "isBonemealSuccess"(arg0: $Level$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean): boolean
get "doubleBlockStart"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleBushBlock$Type = ($DoubleBushBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoubleBushBlock_ = $DoubleBushBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$NativeGodBlessEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$EmptyEffect, $EmptyEffect$Type} from "packages/dev/xkmc/youkaishomecoming/content/effect/$EmptyEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $NativeGodBlessEffect extends $EmptyEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeGodBlessEffect$Type = ($NativeGodBlessEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeGodBlessEffect_ = $NativeGodBlessEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/item/$FDFoodItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CreativeModeTabModifier, $CreativeModeTabModifier$Type} from "packages/com/tterrag/registrate/util/$CreativeModeTabModifier"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$IFDFood, $IFDFood$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFDFoodItem, $IFDFoodItem$Type} from "packages/dev/xkmc/fruitsdelight/content/item/$IFDFoodItem"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FDFoodItem extends $Item implements $IFDFoodItem {
static readonly "ROOT": string
readonly "food": $IFDFood
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

constructor(arg0: $Item$Properties$Type, arg1: $IFDFood$Type, arg2: $UseAnim$Type)
constructor(arg0: $Item$Properties$Type, arg1: $IFDFood$Type)

public static "color"(arg0: $ItemStack$Type, arg1: integer): integer
public static "setContent"(arg0: $FDFoodItem$Type, arg1: $FruitType$Type): $ItemStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getFoodEffects"(arg0: $FoodProperties$Type, arg1: $List$Type<($Component$Type)>): void
public static "getFoodEffects"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getDrinkingSound"(): $SoundEvent
public "fillItemCategory"(arg0: integer, arg1: $CreativeModeTabModifier$Type): void
public "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
public "food"(): $IFDFood
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FDFoodItem$Type = ($FDFoodItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FDFoodItem_ = $FDFoodItem$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$UdumbaraEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $UdumbaraEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public static "hasLantern"(arg0: $LivingEntity$Type): boolean
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UdumbaraEffect$Type = ($UdumbaraEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UdumbaraEffect_ = $UdumbaraEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$SakeFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$IYHSake, $IYHSake$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$IYHSake"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $SakeFluid extends $ForgeFlowingFluid {
readonly "type": $IYHSake
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type, arg1: $IYHSake$Type)

public "getBucket"(): $Item
public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "bucket"(): $Item
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SakeFluid$Type = ($SakeFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SakeFluid_ = $SakeFluid$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/misc/$BloodBottleItem" {
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
import {$SakeBottleItem, $SakeBottleItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$SakeBottleItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SakeFluid, $SakeFluid$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/fluid/$SakeFluid"

export class $BloodBottleItem extends $SakeBottleItem {
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

constructor(arg0: $Supplier$Type<($SakeFluid$Type)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BloodBottleItem$Type = ($BloodBottleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BloodBottleItem_ = $BloodBottleItem$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/effect/$FireRange" {
import {$RangeRenderEffect, $RangeRenderEffect$Type} from "packages/dev/xkmc/twilightdelight/content/effect/$RangeRenderEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $FireRange extends $RangeRenderEffect {

constructor()

public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireRange$Type = ($FireRange);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireRange_ = $FireRange$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$CirnoHairbandItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$TouhouHatItem, $TouhouHatItem$Type} from "packages/dev/xkmc/youkaishomecoming/content/item/curio/hat/$TouhouHatItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CirnoHairbandItem extends $TouhouHatItem {
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

constructor(arg0: $Item$Properties$Type)

public "support"(arg0: $DyeColor$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onHurtTarget"(arg0: $ItemStack$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CirnoHairbandItem$Type = ($CirnoHairbandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CirnoHairbandItem_ = $CirnoHairbandItem$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/effects/$ChorusEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $ChorusEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "teleport"(arg0: $LivingEntity$Type): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChorusEffect$Type = ($ChorusEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChorusEffect_ = $ChorusEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/mixin/$CookingPotRecipeAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $CookingPotRecipeAccessor {

 "getOutput"(): $ItemStack

(): $ItemStack
}

export namespace $CookingPotRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingPotRecipeAccessor$Type = ($CookingPotRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingPotRecipeAccessor_ = $CookingPotRecipeAccessor$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/block/$CuisineSkilletBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$SkilletBlock, $SkilletBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$SkilletBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $CuisineSkilletBlock extends $SkilletBlock {
static readonly "MINIMUM_COOKING_TIME": integer
static readonly "FACING": $DirectionProperty
static readonly "SUPPORT": $BooleanProperty
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
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CuisineSkilletBlock$Type = ($CuisineSkilletBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CuisineSkilletBlock_ = $CuisineSkilletBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe$RecType" {
import {$BaseRecipe, $BaseRecipe$Type} from "packages/dev/xkmc/l2library/serial/recipe/$BaseRecipe"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/tterrag/registrate/util/entry/$RegistryEntry"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RecSerializer, $RecSerializer$Type} from "packages/dev/xkmc/l2library/serial/recipe/$RecSerializer"

export class $BaseRecipe$RecType<Rec extends SRec, SRec extends $BaseRecipe<(any), (SRec), (Inv)>, Inv extends $Container> extends $RecSerializer<(Rec), (Inv)> {
readonly "type": $RegistryEntry<($RecipeType<(SRec)>)>
readonly "cls": $Class<(R)>

constructor(arg0: $Class$Type<(Rec)>, arg1: $RegistryEntry$Type<($RecipeType$Type<(SRec)>)>)

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseRecipe$RecType$Type<Rec, SRec, Inv> = ($BaseRecipe$RecType<(Rec), (SRec), (Inv)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseRecipe$RecType_<Rec, SRec, Inv> = $BaseRecipe$RecType$Type<(Rec), (SRec), (Inv)>;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$SurpriseFeastBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$FeastBlock, $FeastBlock$Type} from "packages/vectorwing/farmersdelight/common/block/$FeastBlock"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SurpriseFeastBlock extends $FeastBlock {
static readonly "FACING": $DirectionProperty
static readonly "SERVINGS": $IntegerProperty
readonly "servingItem": $Supplier<($Item)>
readonly "hasLeftovers": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public static "builtLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $SurpriseFeastBlock$Type): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "buildModel"(arg0: $DataGenContext$Type<($Block$Type), ($SurpriseFeastBlock$Type)>, arg1: $RegistrateBlockstateProvider$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SurpriseFeastBlock$Type = ($SurpriseFeastBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SurpriseFeastBlock_ = $SurpriseFeastBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/furniture/$MokaKitBlock" {
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
import {$HorizontalLoggedBlock, $HorizontalLoggedBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/variants/$HorizontalLoggedBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MokaKitBlock extends $HorizontalLoggedBlock {
static readonly "SHAPE": $VoxelShape
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MokaKitBlock$Type = ($MokaKitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MokaKitBlock_ = $MokaKitBlock$Type;
}}
declare module "packages/dev/xkmc/l2library/base/$L2Registrate" {
import {$L2Registrate$RegistryInstance, $L2Registrate$RegistryInstance$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate$RegistryInstance"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RegistryBuilder, $RegistryBuilder$Type} from "packages/net/minecraftforge/registries/$RegistryBuilder"
import {$EnchantmentBuilder, $EnchantmentBuilder$Type} from "packages/com/tterrag/registrate/builders/$EnchantmentBuilder"
import {$NoConfigBuilder, $NoConfigBuilder$Type} from "packages/com/tterrag/registrate/builders/$NoConfigBuilder"
import {$L2Registrate$GenericBuilder, $L2Registrate$GenericBuilder$Type} from "packages/dev/xkmc/l2library/base/$L2Registrate$GenericBuilder"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$CreativeModeTab$Builder, $CreativeModeTab$Builder$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Builder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$EnchantmentBuilder$EnchantmentFactory, $EnchantmentBuilder$EnchantmentFactory$Type} from "packages/com/tterrag/registrate/builders/$EnchantmentBuilder$EnchantmentFactory"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$NamedEntry, $NamedEntry$Type} from "packages/dev/xkmc/l2library/base/$NamedEntry"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/com/tterrag/registrate/util/nullness/$NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/com/tterrag/registrate/util/entry/$RegistryEntry"
import {$AbstractRegistrate, $AbstractRegistrate$Type} from "packages/com/tterrag/registrate/$AbstractRegistrate"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $L2Registrate extends $AbstractRegistrate<($L2Registrate)> {

constructor(arg0: string)

public "generic"<T extends $NamedEntry<(T)>, P extends T>(arg0: $L2Registrate$RegistryInstance$Type<(T)>, arg1: string, arg2: $NonNullSupplier$Type<(P)>): $L2Registrate$GenericBuilder<(T), (P)>
public "recipe"<T extends $Recipe<(any)>>(arg0: string): $RegistryEntry<($RecipeType<(T)>)>
public "enchantment"<T extends $Enchantment>(arg0: string, arg1: $EnchantmentCategory$Type, arg2: $EnchantmentBuilder$EnchantmentFactory$Type<(T)>, arg3: string): $EnchantmentBuilder<(T), ($L2Registrate)>
/**
 * 
 * @deprecated
 */
public "enchantment"<T extends $Enchantment>(arg0: string, arg1: $EnchantmentCategory$Type, arg2: $EnchantmentBuilder$EnchantmentFactory$Type<(T)>): $EnchantmentBuilder<(T), ($L2Registrate)>
public "buildModCreativeTab"(arg0: string, arg1: string, arg2: $Consumer$Type<($CreativeModeTab$Builder$Type)>): $RegistryEntry<($CreativeModeTab)>
public "newRegistry"<E extends $NamedEntry<(E)>>(arg0: string, arg1: $Class$Type<(any)>): $L2Registrate$RegistryInstance<(E)>
public "newRegistry"<E extends $NamedEntry<(E)>>(arg0: string, arg1: $Class$Type<(any)>, arg2: $Consumer$Type<($RegistryBuilder$Type<(E)>)>): $L2Registrate$RegistryInstance<(E)>
public "effect"<T extends $MobEffect>(arg0: string, arg1: $NonNullSupplier$Type<(T)>, arg2: string): $NoConfigBuilder<($MobEffect), (T), ($L2Registrate)>
public "buildL2CreativeTab"(arg0: string, arg1: string, arg2: $Consumer$Type<($CreativeModeTab$Builder$Type)>): $RegistryEntry<($CreativeModeTab)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $L2Registrate$Type = ($L2Registrate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $L2Registrate_ = $L2Registrate$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/plant/$YHCropBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$RegistrateBlockstateProvider, $RegistrateBlockstateProvider$Type} from "packages/com/tterrag/registrate/providers/$RegistrateBlockstateProvider"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$YHCrops, $YHCrops$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$YHCrops"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DataGenContext, $DataGenContext$Type} from "packages/com/tterrag/registrate/providers/$DataGenContext"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$CropBlock, $CropBlock$Type} from "packages/net/minecraft/world/level/block/$CropBlock"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RegistrateBlockLootTables, $RegistrateBlockLootTables$Type} from "packages/com/tterrag/registrate/providers/loot/$RegistrateBlockLootTables"
import {$BushBlock, $BushBlock$Type} from "packages/net/minecraft/world/level/block/$BushBlock"

export class $YHCropBlock extends $CropBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $Supplier$Type<($Item$Type)>)

public static "buildCropModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
public static "buildCrossModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: string): void
public "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public static "buildPlantLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $YHCropBlock$Type, arg2: $YHCrops$Type): void
public static "buildWildLoot"(arg0: $RegistrateBlockLootTables$Type, arg1: $BushBlock$Type, arg2: $YHCrops$Type): void
public static "buildWildModel"(arg0: $DataGenContext$Type<($Block$Type), (any)>, arg1: $RegistrateBlockstateProvider$Type, arg2: $YHCrops$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YHCropBlock$Type = ($YHCropBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YHCropBlock_ = $YHCropBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$YoukaifiedEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $YoukaifiedEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YoukaifiedEffect$Type = ($YoukaifiedEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YoukaifiedEffect_ = $YoukaifiedEffect$Type;
}}
declare module "packages/dev/xkmc/fastprojectileapi/render/$RenderableProjectileType" {
import {$SimplifiedProjectile, $SimplifiedProjectile$Type} from "packages/dev/xkmc/fastprojectileapi/entity/$SimplifiedProjectile"
import {$ProjectileRenderer, $ProjectileRenderer$Type} from "packages/dev/xkmc/fastprojectileapi/render/$ProjectileRenderer"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $RenderableProjectileType<T extends $RenderableProjectileType<(T), (I)>, I> {

 "start"(arg0: $MultiBufferSource$Type, arg1: $Iterable$Type<(I)>): void
 "create"(arg0: $ProjectileRenderer$Type, arg1: $SimplifiedProjectile$Type, arg2: $PoseStack$Type, arg3: float): void
}

export namespace $RenderableProjectileType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableProjectileType$Type<T, I> = ($RenderableProjectileType<(T), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderableProjectileType_<T, I> = $RenderableProjectileType$Type<(T), (I)>;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$IFDFood" {
import {$FruitType, $FruitType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FruitType"
import {$EffectEntry, $EffectEntry$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$EffectEntry"
import {$FoodType, $FoodType$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$FoodType"

export interface $IFDFood {

 "getType"(): $FoodType
 "fruit"(): $FruitType
 "getEffects"(): ($EffectEntry)[]
}

export namespace $IFDFood {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFDFood$Type = ($IFDFood);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFDFood_ = $IFDFood$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$YoukaifyingEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $YoukaifyingEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $YoukaifyingEffect$Type = ($YoukaifyingEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $YoukaifyingEffect_ = $YoukaifyingEffect$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$BaseCakeBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BaseCakeBlock extends $Block {
readonly "bite": $IntegerProperty
readonly "maxBite": integer
readonly "plate": boolean
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $IntegerProperty$Type, arg2: integer, arg3: boolean)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseCakeBlock$Type = ($BaseCakeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BaseCakeBlock_ = $BaseCakeBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/variants/$HorizontalLoggedBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $HorizontalLoggedBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
static readonly "WATERLOGGED": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
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
export type $HorizontalLoggedBlock$Type = ($HorizontalLoggedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalLoggedBlock_ = $HorizontalLoggedBlock$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/content/effect/$TemporalSadness" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $TemporalSadness extends $MobEffect {

constructor()

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemporalSadness$Type = ($TemporalSadness);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TemporalSadness_ = $TemporalSadness$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/block/food/$EmptySaucerBlock" {
import {$StateDefinition$Builder, $StateDefinition$Builder$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition$Builder"
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
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BaseSaucerBlock, $BaseSaucerBlock$Type} from "packages/dev/xkmc/youkaishomecoming/content/block/food/$BaseSaucerBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Saucer, $Saucer$Type} from "packages/dev/xkmc/youkaishomecoming/init/food/$Saucer"

export class $EmptySaucerBlock extends $BaseSaucerBlock {
static readonly "TYPE": $EnumProperty<($Saucer)>
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "createBlockStateDefinition"(arg0: $StateDefinition$Builder$Type<($Block$Type), ($BlockState$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptySaucerBlock$Type = ($EmptySaucerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptySaucerBlock_ = $EmptySaucerBlock$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$EmptyEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $EmptyEffect extends $MobEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "getCurativeItems"(): $List<($ItemStack)>
get "curativeItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyEffect$Type = ($EmptyEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyEffect_ = $EmptyEffect$Type;
}}
declare module "packages/dev/xkmc/youkaishomecoming/content/effect/$MandrakeEffect" {
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$EmptyEffect, $EmptyEffect$Type} from "packages/dev/xkmc/youkaishomecoming/content/effect/$EmptyEffect"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $MandrakeEffect extends $EmptyEffect {

constructor(arg0: $MobEffectCategory$Type, arg1: integer)

public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MandrakeEffect$Type = ($MandrakeEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MandrakeEffect_ = $MandrakeEffect$Type;
}}
declare module "packages/dev/xkmc/twilightdelight/compat/neapolitan/$TDMilkshakeItem" {
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
import {$MilkshakeItem, $MilkshakeItem$Type} from "packages/com/teamabnormals/neapolitan/common/item/$MilkshakeItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TDMilkshakeItem extends $MilkshakeItem {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TDMilkshakeItem$Type = ($TDMilkshakeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TDMilkshakeItem_ = $TDMilkshakeItem$Type;
}}
declare module "packages/dev/xkmc/cuisinedelight/content/logic/$CookingData" {
import {$CookingData$CookingEntry, $CookingData$CookingEntry$Type} from "packages/dev/xkmc/cuisinedelight/content/logic/$CookingData$CookingEntry"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $CookingData {
 "glowstone": integer
 "redstone": integer
 "contents": $ArrayList<($CookingData$CookingEntry)>

constructor()

public "update"(arg0: long): void
public "addItem"(arg0: $ItemStack$Type, arg1: long): void
public "setSpeed"(arg0: float): void
public "stir"(arg0: long, arg1: integer): void
set "speed"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingData$Type = ($CookingData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingData_ = $CookingData$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/content/block/$DurianLeavesBlock$Leaf" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DurianLeavesBlock$Leaf extends $Enum<($DurianLeavesBlock$Leaf)> implements $StringRepresentable {
static readonly "LEAF": $DurianLeavesBlock$Leaf
static readonly "BUDDING": $DurianLeavesBlock$Leaf
static readonly "BARE": $DurianLeavesBlock$Leaf


public static "values"(): ($DurianLeavesBlock$Leaf)[]
public static "valueOf"(arg0: string): $DurianLeavesBlock$Leaf
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
export type $DurianLeavesBlock$Leaf$Type = (("budding") | ("leaf") | ("bare")) | ($DurianLeavesBlock$Leaf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DurianLeavesBlock$Leaf_ = $DurianLeavesBlock$Leaf$Type;
}}
declare module "packages/dev/xkmc/fruitsdelight/init/food/$FruitType" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EffectFunc, $EffectFunc$Type} from "packages/dev/xkmc/fruitsdelight/init/food/$EffectFunc"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $FruitType extends $Enum<($FruitType)> {
static readonly "APPLE": $FruitType
static readonly "BLUEBERRY": $FruitType
static readonly "GLOWBERRY": $FruitType
static readonly "HAMIMELON": $FruitType
static readonly "MELON": $FruitType
static readonly "HAWBERRY": $FruitType
static readonly "LYCHEE": $FruitType
static readonly "MANGO": $FruitType
static readonly "ORANGE": $FruitType
static readonly "PEACH": $FruitType
static readonly "PEAR": $FruitType
static readonly "PERSIMMON": $FruitType
static readonly "PINEAPPLE": $FruitType
static readonly "LEMON": $FruitType
static readonly "CRANBERRY": $FruitType
static readonly "MANGOSTEEN": $FruitType
static readonly "SWEETBERRY": $FruitType
static readonly "CHORUS": $FruitType
static readonly "BAYBERRY": $FruitType
static readonly "KIWI": $FruitType
static readonly "FIG": $FruitType
static readonly "DURIAN": $FruitType
readonly "color": integer
readonly "jellyCost": integer
readonly "eff": $List<($EffectFunc)>


public static "values"(): ($FruitType)[]
public static "valueOf"(arg0: string): $FruitType
public static "empty"(): $FruitType
public "getFruit"(): $Item
public "getJello"(): $Item
public "getFruitTag"(): $Ingredient
public "getJelly"(): $Item
get "fruit"(): $Item
get "jello"(): $Item
get "fruitTag"(): $Ingredient
get "jelly"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FruitType$Type = (("mangosteen") | ("bayberry") | ("kiwi") | ("blueberry") | ("hawberry") | ("fig") | ("sweetberry") | ("peach") | ("glowberry") | ("mango") | ("orange") | ("apple") | ("lychee") | ("pear") | ("lemon") | ("pineapple") | ("persimmon") | ("cranberry") | ("chorus") | ("hamimelon") | ("melon") | ("durian")) | ($FruitType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FruitType_ = $FruitType$Type;
}}
