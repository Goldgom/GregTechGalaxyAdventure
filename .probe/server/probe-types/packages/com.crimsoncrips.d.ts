declare module "packages/com/crimsoncrips/alexsmobsinteraction/item/$Swatter" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Swatter extends $Item {
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
export type $Swatter$Type = ($Swatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Swatter_ = $Swatter$Type;
}}
declare module "packages/com/crimsoncrips/alexsmobsinteraction/effect/$AMIGusting" {
import {$AttributeMap, $AttributeMap$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeMap"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AMIGusting extends $MobEffect {

constructor()

public "getDescriptionId"(): string
public "removeAttributeModifiers"(arg0: $LivingEntity$Type, arg1: $AttributeMap$Type, arg2: integer): void
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AMIGusting$Type = ($AMIGusting);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AMIGusting_ = $AMIGusting$Type;
}}
declare module "packages/com/crimsoncrips/alexsmobsinteraction/mobmodification/interfaces/$AMITransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AMITransform {

 "isTransforming"(): boolean
 "setTransforming"(arg0: boolean): void
}

export namespace $AMITransform {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AMITransform$Type = ($AMITransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AMITransform_ = $AMITransform$Type;
}}
declare module "packages/com/crimsoncrips/alexsmobsinteraction/effect/$AMISkreeching" {
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $AMISkreeching extends $MobEffect {

constructor()

public "getDescriptionId"(): string
public "isDurationEffectTick"(arg0: integer, arg1: integer): boolean
public "applyEffectTick"(arg0: $LivingEntity$Type, arg1: integer): void
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AMISkreeching$Type = ($AMISkreeching);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AMISkreeching_ = $AMISkreeching$Type;
}}
declare module "packages/com/crimsoncrips/alexsmobsinteraction/enchantment/$AMIBasicEnchantment" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Enchantment$Rarity, $Enchantment$Rarity$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment$Rarity"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $AMIBasicEnchantment extends $Enchantment {
readonly "category": $EnchantmentCategory
 "descriptionId": string

constructor(arg0: $Enchantment$Rarity$Type, arg1: $EnchantmentCategory$Type, ...arg2: ($EquipmentSlot$Type)[])

public "getMinCost"(arg0: integer): integer
public "isTradeable"(): boolean
public "getMaxCost"(arg0: integer): integer
public "isDiscoverable"(): boolean
public "isAllowedOnBooks"(): boolean
get "tradeable"(): boolean
get "discoverable"(): boolean
get "allowedOnBooks"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AMIBasicEnchantment$Type = ($AMIBasicEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AMIBasicEnchantment_ = $AMIBasicEnchantment$Type;
}}
