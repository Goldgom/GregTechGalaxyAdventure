declare module "packages/twilightforest/enchantment/$ChillAuraEnchantment" {
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LootOnlyEnchantment, $LootOnlyEnchantment$Type} from "packages/twilightforest/enchantment/$LootOnlyEnchantment"

export class $ChillAuraEnchantment extends $LootOnlyEnchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor(arg0: $Enchantment$Rarity$Type)

public "getMaxLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "getMaxCost"(arg0: integer): integer
public static "doChillAuraEffect"(arg0: $LivingEntity$Type, arg1: integer, arg2: integer, arg3: boolean): void
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChillAuraEnchantment$Type = ($ChillAuraEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChillAuraEnchantment_ = $ChillAuraEnchantment$Type;
}}
declare module "packages/twilightforest/enchantment/$LootOnlyEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $LootOnlyEnchantment extends $Enchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string


public "isTreasureOnly"(): boolean
public "isTradeable"(): boolean
public "isDiscoverable"(): boolean
get "treasureOnly"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootOnlyEnchantment$Type = ($LootOnlyEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootOnlyEnchantment_ = $LootOnlyEnchantment$Type;
}}
declare module "packages/twilightforest/enchantment/$DestructionEnchantment" {
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$LootOnlyEnchantment, $LootOnlyEnchantment$Type} from "packages/twilightforest/enchantment/$LootOnlyEnchantment"

export class $DestructionEnchantment extends $LootOnlyEnchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor(arg0: $Enchantment$Rarity$Type)

public "getMaxLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "getMaxCost"(arg0: integer): integer
public "getDamageBonus"(arg0: integer, arg1: $MobType$Type, arg2: $ItemStack$Type): float
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestructionEnchantment$Type = ($DestructionEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DestructionEnchantment_ = $DestructionEnchantment$Type;
}}
declare module "packages/twilightforest/enchantment/$FireReactEnchantment" {
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$LootOnlyEnchantment, $LootOnlyEnchantment$Type} from "packages/twilightforest/enchantment/$LootOnlyEnchantment"

export class $FireReactEnchantment extends $LootOnlyEnchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor(arg0: $Enchantment$Rarity$Type)

public "getMaxLevel"(): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
public "getMinCost"(arg0: integer): integer
public "doPostHurt"(arg0: $LivingEntity$Type, arg1: $Entity$Type, arg2: integer): void
public "getMaxCost"(arg0: integer): integer
public static "shouldHit"(arg0: integer, arg1: $RandomSource$Type, arg2: $Entity$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireReactEnchantment$Type = ($FireReactEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FireReactEnchantment_ = $FireReactEnchantment$Type;
}}
