declare module "packages/cech12/bucketlib/item/crafting/$BucketFillingShapedRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$BucketFillingShapedRecipe, $BucketFillingShapedRecipe$Type} from "packages/cech12/bucketlib/item/crafting/$BucketFillingShapedRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BucketFillingShapedRecipe$Serializer implements $RecipeSerializer<($BucketFillingShapedRecipe)> {
static readonly "INSTANCE": $BucketFillingShapedRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BucketFillingShapedRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BucketFillingShapedRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BucketFillingShapedRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BucketFillingShapedRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketFillingShapedRecipe$Serializer$Type = ($BucketFillingShapedRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketFillingShapedRecipe$Serializer_ = $BucketFillingShapedRecipe$Serializer$Type;
}}
declare module "packages/cech12/bucketlib/item/crafting/$BucketFillingShapelessRecipe" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$BucketFillingType, $BucketFillingType$Type} from "packages/cech12/bucketlib/item/crafting/$BucketFillingType"

export class $BucketFillingShapelessRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: $NonNullList$Type<($Ingredient$Type)>, arg4: $BucketFillingType$Type, arg5: $Fluid$Type, arg6: $Block$Type, arg7: $EntityType$Type<(any)>)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketFillingShapelessRecipe$Type = ($BucketFillingShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketFillingShapelessRecipe_ = $BucketFillingShapelessRecipe$Type;
}}
declare module "packages/cech12/bucketlib/api/item/$UniversalBucketItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UniversalBucketItem$Properties, $UniversalBucketItem$Properties$Type} from "packages/cech12/bucketlib/api/item/$UniversalBucketItem$Properties"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $UniversalBucketItem extends $Item {
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

constructor(arg0: $UniversalBucketItem$Properties$Type)

public "getMaxStackSize"(arg0: $ItemStack$Type): integer
public "getName"(arg0: $ItemStack$Type): $Component
public "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
public "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getMaxDamage"(arg0: $ItemStack$Type): integer
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
public "spawnEntityFromBucket"(arg0: $Player$Type, arg1: $Level$Type, arg2: $ItemStack$Type, arg3: $BlockPos$Type, arg4: boolean): $ItemStack
public "getBurningTemperature"(): integer
public "getLowerBreakTemperature"(): integer
public "getUpperBreakTemperature"(): integer
public "getFreezingTemperature"(): integer
public "getUseDuration"(arg0: $ItemStack$Type): integer
public "getDefaultColor"(): integer
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "isDamageable"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "isCracked"(arg0: $ItemStack$Type): boolean
public "getMaxTemperature"(): integer
public "getMinTemperature"(): integer
public "isFreezingFluid"(arg0: $Fluid$Type): boolean
public "isFreezingBlock"(arg0: $Block$Type): boolean
public "isBurningBlock"(arg0: $Block$Type): boolean
public "isBurningFluid"(arg0: $Fluid$Type): boolean
public "canMilkEntities"(): boolean
public "getDurability"(): integer
public "canHoldFluid"(arg0: $Fluid$Type): boolean
public "canHoldEntity"(arg0: $EntityType$Type<(any)>): boolean
public "canHoldBlock"(arg0: $Block$Type): boolean
public "getCreativeTab"(): $ResourceKey<($CreativeModeTab)>
public "isDyeable"(): boolean
get "burningTemperature"(): integer
get "lowerBreakTemperature"(): integer
get "upperBreakTemperature"(): integer
get "freezingTemperature"(): integer
get "defaultColor"(): integer
get "maxTemperature"(): integer
get "minTemperature"(): integer
get "durability"(): integer
get "creativeTab"(): $ResourceKey<($CreativeModeTab)>
get "dyeable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalBucketItem$Type = ($UniversalBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalBucketItem_ = $UniversalBucketItem$Type;
}}
declare module "packages/cech12/bucketlib/item/crafting/$BucketFillingShapelessRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BucketFillingShapelessRecipe, $BucketFillingShapelessRecipe$Type} from "packages/cech12/bucketlib/item/crafting/$BucketFillingShapelessRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BucketFillingShapelessRecipe$Serializer implements $RecipeSerializer<($BucketFillingShapelessRecipe)> {
static readonly "INSTANCE": $BucketFillingShapelessRecipe$Serializer

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $BucketFillingShapelessRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $BucketFillingShapelessRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $BucketFillingShapelessRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $BucketFillingShapelessRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketFillingShapelessRecipe$Serializer$Type = ($BucketFillingShapelessRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketFillingShapelessRecipe$Serializer_ = $BucketFillingShapelessRecipe$Serializer$Type;
}}
declare module "packages/cech12/bucketlib/item/crafting/$BucketDyeingRecipe$Serializer" {
import {$SimpleCraftingRecipeSerializer, $SimpleCraftingRecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$SimpleCraftingRecipeSerializer"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$BucketDyeingRecipe, $BucketDyeingRecipe$Type} from "packages/cech12/bucketlib/item/crafting/$BucketDyeingRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $BucketDyeingRecipe$Serializer extends $SimpleCraftingRecipeSerializer<($BucketDyeingRecipe)> {
static readonly "INSTANCE": $BucketDyeingRecipe$Serializer

constructor()

public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketDyeingRecipe$Serializer$Type = ($BucketDyeingRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketDyeingRecipe$Serializer_ = $BucketDyeingRecipe$Serializer$Type;
}}
declare module "packages/cech12/bucketlib/item/crafting/$BucketFillingType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $BucketFillingType extends $Enum<($BucketFillingType)> implements $StringRepresentable {
static readonly "BLOCK": $BucketFillingType
static readonly "ENTITY": $BucketFillingType
static readonly "FLUID": $BucketFillingType
static readonly "MILK": $BucketFillingType
static readonly "CODEC": $StringRepresentable$EnumCodec<($BucketFillingType)>


public static "values"(): ($BucketFillingType)[]
public static "valueOf"(arg0: string): $BucketFillingType
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
export type $BucketFillingType$Type = (("milk") | ("block") | ("fluid") | ("entity")) | ($BucketFillingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketFillingType_ = $BucketFillingType$Type;
}}
declare module "packages/cech12/bucketlib/api/item/$UniversalBucketItem$Properties" {
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $UniversalBucketItem$Properties {

constructor()

public "tab"(arg0: $ResourceKey$Type<($CreativeModeTab$Type)>): $UniversalBucketItem$Properties
public "disableEntityObtaining"(): $UniversalBucketItem$Properties
public "disableBlockObtaining"(): $UniversalBucketItem$Properties
public "upperCrackingTemperature"(arg0: $ForgeConfigSpec$IntValue$Type): $UniversalBucketItem$Properties
public "upperCrackingTemperature"(arg0: integer): $UniversalBucketItem$Properties
public "lowerCrackingTemperature"(arg0: $ForgeConfigSpec$IntValue$Type): $UniversalBucketItem$Properties
public "lowerCrackingTemperature"(arg0: integer): $UniversalBucketItem$Properties
public "freezingTemperature"(arg0: $ForgeConfigSpec$IntValue$Type): $UniversalBucketItem$Properties
public "freezingTemperature"(arg0: integer): $UniversalBucketItem$Properties
public "disableMilking"(): $UniversalBucketItem$Properties
/**
 * 
 * @deprecated
 */
public "blockedBlocks"(arg0: $TagKey$Type<($Block$Type)>): $UniversalBucketItem$Properties
/**
 * 
 * @deprecated
 */
public "blockedBlocks"(arg0: $List$Type<($Block$Type)>): $UniversalBucketItem$Properties
/**
 * 
 * @deprecated
 */
public "blockedEntities"(arg0: $TagKey$Type<($EntityType$Type<(any)>)>): $UniversalBucketItem$Properties
/**
 * 
 * @deprecated
 */
public "blockedEntities"(arg0: $List$Type<($EntityType$Type<(any)>)>): $UniversalBucketItem$Properties
/**
 * 
 * @deprecated
 */
public "blockedFluids"(arg0: $List$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
/**
 * 
 * @deprecated
 */
public "blockedFluids"(arg0: $TagKey$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "durability"(arg0: $ForgeConfigSpec$IntValue$Type): $UniversalBucketItem$Properties
public "durability"(arg0: integer): $UniversalBucketItem$Properties
public "allowedFluids"(arg0: $TagKey$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "allowedFluids"(arg0: $List$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "deniedFluids"(arg0: $List$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "deniedFluids"(arg0: $TagKey$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "maxTemperature"(arg0: integer): $UniversalBucketItem$Properties
public "maxTemperature"(arg0: $ForgeConfigSpec$IntValue$Type): $UniversalBucketItem$Properties
public "deniedBlocks"(arg0: $List$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "deniedBlocks"(arg0: $TagKey$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "deniedEntities"(arg0: $List$Type<($EntityType$Type<(any)>)>): $UniversalBucketItem$Properties
public "deniedEntities"(arg0: $TagKey$Type<($EntityType$Type<(any)>)>): $UniversalBucketItem$Properties
public "allowedBlocks"(arg0: $List$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "allowedBlocks"(arg0: $TagKey$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "burningTemperature"(arg0: $ForgeConfigSpec$IntValue$Type): $UniversalBucketItem$Properties
public "burningTemperature"(arg0: integer): $UniversalBucketItem$Properties
public "allowedEntities"(arg0: $TagKey$Type<($EntityType$Type<(any)>)>): $UniversalBucketItem$Properties
public "allowedEntities"(arg0: $List$Type<($EntityType$Type<(any)>)>): $UniversalBucketItem$Properties
public "minTemperature"(arg0: integer): $UniversalBucketItem$Properties
public "minTemperature"(arg0: $ForgeConfigSpec$IntValue$Type): $UniversalBucketItem$Properties
public "burningFluids"(arg0: $List$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "burningFluids"(arg0: $TagKey$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "blockObtaining"(arg0: $ForgeConfigSpec$BooleanValue$Type): $UniversalBucketItem$Properties
public "freezingBlocks"(arg0: $TagKey$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "freezingBlocks"(arg0: $List$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "freezingFluids"(arg0: $TagKey$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "freezingFluids"(arg0: $List$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "burningBlocks"(arg0: $TagKey$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "burningBlocks"(arg0: $List$Type<($Block$Type)>): $UniversalBucketItem$Properties
public "milking"(arg0: $ForgeConfigSpec$BooleanValue$Type): $UniversalBucketItem$Properties
public "entityObtaining"(arg0: $ForgeConfigSpec$BooleanValue$Type): $UniversalBucketItem$Properties
public "dyeable"(arg0: integer): $UniversalBucketItem$Properties
public "dyeable"(arg0: integer, arg1: integer, arg2: integer): $UniversalBucketItem$Properties
public "crackingFluids"(arg0: $List$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "crackingFluids"(arg0: $TagKey$Type<($Fluid$Type)>): $UniversalBucketItem$Properties
public "stacksTo"(arg0: integer): $UniversalBucketItem$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniversalBucketItem$Properties$Type = ($UniversalBucketItem$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniversalBucketItem$Properties_ = $UniversalBucketItem$Properties$Type;
}}
declare module "packages/cech12/bucketlib/item/crafting/$BucketDyeingRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$CustomRecipe, $CustomRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CustomRecipe"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $BucketDyeingRecipe extends $CustomRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $CraftingBookCategory$Type)

public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "getRemainingItems"(arg0: $CraftingContainer$Type): $NonNullList<($ItemStack)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketDyeingRecipe$Type = ($BucketDyeingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketDyeingRecipe_ = $BucketDyeingRecipe$Type;
}}
declare module "packages/cech12/bucketlib/item/crafting/$BucketFillingShapedRecipe" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$BucketFillingType, $BucketFillingType$Type} from "packages/cech12/bucketlib/item/crafting/$BucketFillingType"

export class $BucketFillingShapedRecipe extends $ShapedRecipe {
static "MAX_WIDTH": integer
static "MAX_HEIGHT": integer
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ResourceLocation$Type, arg1: string, arg2: $CraftingBookCategory$Type, arg3: integer, arg4: integer, arg5: $NonNullList$Type<($Ingredient$Type)>, arg6: $BucketFillingType$Type, arg7: $Fluid$Type, arg8: $Block$Type, arg9: $EntityType$Type<(any)>)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "matches"(arg0: $CraftingContainer$Type, arg1: $Level$Type): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BucketFillingShapedRecipe$Type = ($BucketFillingShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BucketFillingShapedRecipe_ = $BucketFillingShapedRecipe$Type;
}}
