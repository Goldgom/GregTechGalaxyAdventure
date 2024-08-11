declare module "packages/ad_astra_giselle_addon/common/enchantment/$EnchantmentAcidRainProof" {
import {$AddonEnchantment, $AddonEnchantment$Type} from "packages/ad_astra_giselle_addon/common/enchantment/$AddonEnchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentAcidRainProof extends $AddonEnchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentAcidRainProof$Type = ($EnchantmentAcidRainProof);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentAcidRainProof_ = $EnchantmentAcidRainProof$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/enchantment/$EnchantmentHotTemperatureProof" {
import {$AddonEnchantment, $AddonEnchantment$Type} from "packages/ad_astra_giselle_addon/common/enchantment/$AddonEnchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentHotTemperatureProof extends $AddonEnchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor()

public "canEnchant"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentHotTemperatureProof$Type = ($EnchantmentHotTemperatureProof);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentHotTemperatureProof_ = $EnchantmentHotTemperatureProof$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/block/$FuelLoaderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $FuelLoaderBlock extends $MachineBlock {
static readonly "TOOLTIP": $Component
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "entity"(arg0: $BlockState$Type): $BlockEntityType<(any)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelLoaderBlock$Type = ($FuelLoaderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FuelLoaderBlock_ = $FuelLoaderBlock$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/enchantment/$EnchantmentGravityProof" {
import {$AddonEnchantment, $AddonEnchantment$Type} from "packages/ad_astra_giselle_addon/common/enchantment/$AddonEnchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentGravityProof extends $AddonEnchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentGravityProof$Type = ($EnchantmentGravityProof);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentGravityProof_ = $EnchantmentGravityProof$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/proof/$ProofFunction" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ProofFunction {

 "provide"(arg0: $Entity$Type): integer

(arg0: $Entity$Type): integer
}

export namespace $ProofFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProofFunction$Type = ($ProofFunction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProofFunction_ = $ProofFunction$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenChargerItem" {
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$IOxygenStorageItem, $IOxygenStorageItem$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenStorageItem"
import {$IOxygenCharger, $IOxygenCharger$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenCharger"
import {$IOxygenStorage, $IOxygenStorage$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenStorage"

export interface $IOxygenChargerItem extends $IOxygenStorageItem {

 "getOxygenCharger"(arg0: $ItemStackHolder$Type): $IOxygenCharger
 "getOxygenStorage"(arg0: $ItemStackHolder$Type): $IOxygenStorage

(arg0: $ItemStackHolder$Type): $IOxygenCharger
}

export namespace $IOxygenChargerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOxygenChargerItem$Type = ($IOxygenChargerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOxygenChargerItem_ = $IOxygenChargerItem$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenStorageItem" {
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$IOxygenStorage, $IOxygenStorage$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenStorage"

export interface $IOxygenStorageItem {

 "getOxygenStorage"(arg0: $ItemStackHolder$Type): $IOxygenStorage

(arg0: $ItemStackHolder$Type): $IOxygenStorage
}

export namespace $IOxygenStorageItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOxygenStorageItem$Type = ($IOxygenStorageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOxygenStorageItem_ = $IOxygenStorageItem$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenCharger" {
import {$IChargeMode, $IChargeMode$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IChargeMode"
import {$FluidContainer, $FluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$FluidContainer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IOxygenStorage, $IOxygenStorage$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenStorage"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IOxygenCharger extends $IOxygenStorage {

 "extractOxygen"(arg0: $LivingEntity$Type, arg1: long, arg2: boolean): long
 "getFluidContainer"(): $FluidContainer
 "getAvailableChargeModes"(): $List<($IChargeMode)>
 "getChargeMode"(): $IChargeMode
 "getOxygenCapacity"(): long
 "getOxygenAmount"(): long
 "setChargeMode"(arg0: $IChargeMode$Type): void
 "getTransferAmount"(): long
 "canUse"(arg0: boolean, arg1: boolean): boolean
 "getOxygenStoredRatio"(): double
 "canUseOnCold"(): boolean
 "canUseOnHot"(): boolean
}

export namespace $IOxygenCharger {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOxygenCharger$Type = ($IOxygenCharger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOxygenCharger_ = $IOxygenCharger$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenStorage" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IOxygenStorage {

 "canUse"(arg0: boolean, arg1: boolean): boolean
 "extractOxygen"(arg0: $LivingEntity$Type, arg1: long, arg2: boolean): long
 "getOxygenStoredRatio"(): double
 "canUseOnCold"(): boolean
 "getOxygenCapacity"(): long
 "getOxygenAmount"(): long
 "canUseOnHot"(): boolean
}

export namespace $IOxygenStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOxygenStorage$Type = ($IOxygenStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOxygenStorage_ = $IOxygenStorage$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/mixin/minecraft/$ShapedRecipeAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ShapedRecipeAccessor {

 "getResult"(): $ItemStack

(): $ItemStack
}

export namespace $ShapedRecipeAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccessor$Type = ($ShapedRecipeAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeAccessor_ = $ShapedRecipeAccessor$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/oxygen/$IChargeMode" {
import {$ItemStackReference, $ItemStackReference$Type} from "packages/ad_astra_giselle_addon/common/item/$ItemStackReference"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IChargeMode {

 "getName"(): $ResourceLocation
 "getDisplayName"(): $Component
 "getItems"(arg0: $LivingEntity$Type): $List<($ItemStackReference)>
}

export namespace $IChargeMode {
const LANGUGE_CATEGORY_CHARGEMODE: string
function find(arg0: $ResourceLocation$Type): $IChargeMode
function writeNBT(arg0: $IChargeMode$Type): $Tag
function readNBT(arg0: $Tag$Type): $IChargeMode
function getAllChargeModes(): $List<($IChargeMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IChargeMode$Type = ($IChargeMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IChargeMode_ = $IChargeMode$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/item/$IClientExtensionItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export interface $IClientExtensionItem extends $ItemLike {

 "asItem"(): $Item

(): $Item
}

export namespace $IClientExtensionItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientExtensionItem$Type = ($IClientExtensionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientExtensionItem_ = $IClientExtensionItem$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/crafting/$CanUpgradeRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CanUpgradeRecipe, $CanUpgradeRecipe$Type} from "packages/ad_astra_giselle_addon/common/crafting/$CanUpgradeRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CanUpgradeRecipe$Serializer implements $RecipeSerializer<($CanUpgradeRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CanUpgradeRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CanUpgradeRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CanUpgradeRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CanUpgradeRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanUpgradeRecipe$Serializer$Type = ($CanUpgradeRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanUpgradeRecipe$Serializer_ = $CanUpgradeRecipe$Serializer$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/crafting/$CanUpgradeRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $CanUpgradeRecipe extends $ShapedRecipe {
static "MAX_WIDTH": integer
static "MAX_HEIGHT": integer
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ShapedRecipe$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<(any)>
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanUpgradeRecipe$Type = ($CanUpgradeRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanUpgradeRecipe_ = $CanUpgradeRecipe$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/item/$ICreativeTabOutputProvider" {
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"

export interface $ICreativeTabOutputProvider {

 "provideCreativeTabOutput"(arg0: $CreativeModeTab$Output$Type): void

(arg0: $CreativeModeTab$Output$Type): void
}

export namespace $ICreativeTabOutputProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreativeTabOutputProvider$Type = ($ICreativeTabOutputProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreativeTabOutputProvider_ = $ICreativeTabOutputProvider$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/proof/$ProofAbstractUtils" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ProofFunction, $ProofFunction$Type} from "packages/ad_astra_giselle_addon/common/content/proof/$ProofFunction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ProofAbstractUtils {
static readonly "PROOFS": $List<($ProofAbstractUtils)>
static readonly "KEY_PROOF_DURATION": string
static readonly "GENERAL_PROOF_INTERVAL": integer
static readonly "OXYGEN_PROOF_INTERVAL": integer
static readonly "OXYGEN_PROOF_USING": long


public "register"(arg0: $ProofFunction$Type): void
public "getId"(): $ResourceLocation
public "unregister"(arg0: $ProofFunction$Type): boolean
public "post"(arg0: $Entity$Type): integer
public "getDataKey"(): string
public "tryProvideProof"(arg0: $Entity$Type): boolean
public static "reduceProofDuration"(arg0: $Entity$Type): void
public "getProofDuration"(arg0: $Entity$Type): integer
public "setProofDuration"(arg0: $Entity$Type, arg1: integer): void
get "id"(): $ResourceLocation
get "dataKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProofAbstractUtils$Type = ($ProofAbstractUtils);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProofAbstractUtils_ = $ProofAbstractUtils$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/item/$NetheriteOxygenCanItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$OxygenCanItem, $OxygenCanItem$Type} from "packages/ad_astra_giselle_addon/common/item/$OxygenCanItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IOxygenCharger, $IOxygenCharger$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenCharger"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NetheriteOxygenCanItem extends $OxygenCanItem {
static readonly "KEY_OXYGEN_CHARGER": string
static readonly "KEY_CHARGE_MODE": string
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

public "getOxygenCharger"(arg0: $ItemStackHolder$Type): $IOxygenCharger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetheriteOxygenCanItem$Type = ($NetheriteOxygenCanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetheriteOxygenCanItem_ = $NetheriteOxygenCanItem$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/item/$OxygenCanItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IOxygenChargerItem, $IOxygenChargerItem$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenChargerItem"
import {$ICreativeTabOutputProvider, $ICreativeTabOutputProvider$Type} from "packages/ad_astra_giselle_addon/common/item/$ICreativeTabOutputProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$WrappedItemFluidContainer, $WrappedItemFluidContainer$Type} from "packages/earth/terrarium/botarium/common/fluid/impl/$WrappedItemFluidContainer"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$IOxygenCharger, $IOxygenCharger$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenCharger"
import {$IOxygenStorage, $IOxygenStorage$Type} from "packages/ad_astra_giselle_addon/common/content/oxygen/$IOxygenStorage"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BotariumFluidItem, $BotariumFluidItem$Type} from "packages/earth/terrarium/botarium/common/fluid/base/$BotariumFluidItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OxygenCanItem extends $Item implements $BotariumFluidItem<($WrappedItemFluidContainer)>, $IOxygenChargerItem, $ICreativeTabOutputProvider {
static readonly "KEY_OXYGEN_CHARGER": string
static readonly "KEY_CHARGE_MODE": string
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
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "isFoil"(arg0: $ItemStack$Type): boolean
public "provideCreativeTabOutput"(arg0: $CreativeModeTab$Output$Type): void
public "getOxygenCharger"(arg0: $ItemStackHolder$Type): $IOxygenCharger
public "getOxygenStorage"(arg0: $ItemStackHolder$Type): $IOxygenStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OxygenCanItem$Type = ($OxygenCanItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OxygenCanItem_ = $OxygenCanItem$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/block/$RocketSensorBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $RocketSensorBlock extends $MachineBlock {
static readonly "TOOLTIP": $Component
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "entity"(arg0: $BlockState$Type): $BlockEntityType<(any)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RocketSensorBlock$Type = ($RocketSensorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RocketSensorBlock_ = $RocketSensorBlock$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/enchantment/$AddonEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $AddonEnchantment extends $Enchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor(arg0: $Enchantment$Rarity$Type, arg1: $EnchantmentCategory$Type, ...arg2: ($EquipmentSlot$Type)[])

public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "isTradeable"(): boolean
public "getMaxCost"(arg0: integer): integer
public "isDiscoverable"(): boolean
get "maxLevel"(): integer
get "tradeable"(): boolean
get "discoverable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddonEnchantment$Type = ($AddonEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddonEnchantment_ = $AddonEnchantment$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/item/$LanderIconItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IClientExtensionItem, $IClientExtensionItem$Type} from "packages/ad_astra_giselle_addon/common/item/$IClientExtensionItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LanderIconItem extends $Item implements $IClientExtensionItem {
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

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanderIconItem$Type = ($LanderIconItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LanderIconItem_ = $LanderIconItem$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/item/$ItemStackReference" {
import {$ItemStackHolder, $ItemStackHolder$Type} from "packages/earth/terrarium/botarium/common/item/$ItemStackHolder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemStackReference extends $ItemStackHolder {

constructor(arg0: $ItemStack$Type, arg1: $Consumer$Type<($ItemStack$Type)>)

public "setStack"(arg0: $ItemStack$Type): void
set "stack"(value: $ItemStack$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackReference$Type = ($ItemStackReference);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackReference_ = $ItemStackReference$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/content/proof/$EntityProofDurationAccessor" {
import {$ProofAbstractUtils, $ProofAbstractUtils$Type} from "packages/ad_astra_giselle_addon/common/content/proof/$ProofAbstractUtils"

export interface $EntityProofDurationAccessor {

 "ad_astra_giselle_addon$setProofDuration"(arg0: $ProofAbstractUtils$Type, arg1: integer): void
 "ad_astra_giselle_addon$getProofDuration"(arg0: $ProofAbstractUtils$Type): integer
}

export namespace $EntityProofDurationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityProofDurationAccessor$Type = ($EntityProofDurationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityProofDurationAccessor_ = $EntityProofDurationAccessor$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/entity/$ICustomDataHolder" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $ICustomDataHolder {

 "ad_astra_giselle_addon$getCustomData"(): $CompoundTag

(): $CompoundTag
}

export namespace $ICustomDataHolder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomDataHolder$Type = ($ICustomDataHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomDataHolder_ = $ICustomDataHolder$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/block/$GravityNormalizerBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $GravityNormalizerBlock extends $MachineBlock {
static readonly "TOOLTIP": $Component
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "entity"(arg0: $BlockState$Type): $BlockEntityType<(any)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
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
declare module "packages/ad_astra_giselle_addon/common/enchantment/$EnchantmentOxygenProof" {
import {$AddonEnchantment, $AddonEnchantment$Type} from "packages/ad_astra_giselle_addon/common/enchantment/$AddonEnchantment"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentOxygenProof extends $AddonEnchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor()

public "canEnchant"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentOxygenProof$Type = ($EnchantmentOxygenProof);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentOxygenProof_ = $EnchantmentOxygenProof$Type;
}}
declare module "packages/ad_astra_giselle_addon/common/block/$AutomationNasaWorkbenchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
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
import {$MachineBlock, $MachineBlock$Type} from "packages/earth/terrarium/adastra/common/blocks/base/$MachineBlock"

export class $AutomationNasaWorkbenchBlock extends $MachineBlock {
static readonly "TOOLTIP": $Component
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "entity"(arg0: $BlockState$Type): $BlockEntityType<(any)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomationNasaWorkbenchBlock$Type = ($AutomationNasaWorkbenchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutomationNasaWorkbenchBlock_ = $AutomationNasaWorkbenchBlock$Type;
}}
