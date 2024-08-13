declare module "packages/fzzyhmstrs/emi_loot/mixins/$EnchantmentPredicateAccessor" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"

export interface $EnchantmentPredicateAccessor {

 "getEnchantment"(): $Enchantment

(): $Enchantment
}

export namespace $EnchantmentPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentPredicateAccessor$Type = ($EnchantmentPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentPredicateAccessor_ = $EnchantmentPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$LightPredicateAccessor" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"

export interface $LightPredicateAccessor {

 "getRange"(): $MinMaxBounds$Ints

(): $MinMaxBounds$Ints
}

export namespace $LightPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightPredicateAccessor$Type = ($LightPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LightPredicateAccessor_ = $LightPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$EffectDataAccessor" {
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"

export interface $EffectDataAccessor {

 "getDuration"(): $MinMaxBounds$Ints
 "getVisible"(): boolean
 "getAmplifier"(): $MinMaxBounds$Ints
 "getAmbient"(): boolean
}

export namespace $EffectDataAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectDataAccessor$Type = ($EffectDataAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectDataAccessor_ = $EffectDataAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$FluidPredicateAccessor" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$Type} from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $FluidPredicateAccessor {

 "getState"(): $StatePropertiesPredicate
 "getTag"(): $TagKey<($Fluid)>
 "getFluid"(): $Fluid
}

export namespace $FluidPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPredicateAccessor$Type = ($FluidPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidPredicateAccessor_ = $FluidPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$BlockPredicateAccessor" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$StatePropertiesPredicate, $StatePropertiesPredicate$Type} from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate"
import {$NbtPredicate, $NbtPredicate$Type} from "packages/net/minecraft/advancements/critereon/$NbtPredicate"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockPredicateAccessor {

 "getState"(): $StatePropertiesPredicate
 "getTag"(): $TagKey<($Block)>
 "getBlocks"(): $Set<($Block)>
 "getNbt"(): $NbtPredicate
}

export namespace $BlockPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPredicateAccessor$Type = ($BlockPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockPredicateAccessor_ = $BlockPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/util/$LootManagerConditionManager" {
import {$LootDataId, $LootDataId$Type} from "packages/net/minecraft/world/level/storage/loot/$LootDataId"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $LootManagerConditionManager {

 "getKeysToValues"(): $Map<($LootDataId<(any)>), (any)>

(): $Map<($LootDataId<(any)>), (any)>
}

export namespace $LootManagerConditionManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootManagerConditionManager$Type = ($LootManagerConditionManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootManagerConditionManager_ = $LootManagerConditionManager$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/util/$LootTablePools" {
import {$LootPool, $LootPool$Type} from "packages/net/minecraft/world/level/storage/loot/$LootPool"

export interface $LootTablePools {

 "getPools"(): ($LootPool)[]

(): ($LootPool)[]
}

export namespace $LootTablePools {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootTablePools$Type = ($LootTablePools);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootTablePools_ = $LootTablePools$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$DistancePredicateAccessor" {
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"

export interface $DistancePredicateAccessor {

 "getY"(): $MinMaxBounds$Doubles
 "getZ"(): $MinMaxBounds$Doubles
 "getX"(): $MinMaxBounds$Doubles
 "getHorizontal"(): $MinMaxBounds$Doubles
 "getAbsolute"(): $MinMaxBounds$Doubles
}

export namespace $DistancePredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DistancePredicateAccessor$Type = ($DistancePredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DistancePredicateAccessor_ = $DistancePredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$EntityPredicateAccessor" {
import {$LocationPredicate, $LocationPredicate$Type} from "packages/net/minecraft/advancements/critereon/$LocationPredicate"
import {$MobEffectsPredicate, $MobEffectsPredicate$Type} from "packages/net/minecraft/advancements/critereon/$MobEffectsPredicate"
import {$EntityPredicate, $EntityPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityPredicate"
import {$DistancePredicate, $DistancePredicate$Type} from "packages/net/minecraft/advancements/critereon/$DistancePredicate"
import {$EntityEquipmentPredicate, $EntityEquipmentPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityEquipmentPredicate"
import {$EntityTypePredicate, $EntityTypePredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityTypePredicate"
import {$NbtPredicate, $NbtPredicate$Type} from "packages/net/minecraft/advancements/critereon/$NbtPredicate"
import {$EntitySubPredicate, $EntitySubPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntitySubPredicate"
import {$EntityFlagsPredicate, $EntityFlagsPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EntityFlagsPredicate"

export interface $EntityPredicateAccessor {

 "getLocation"(): $LocationPredicate
 "getType"(): $EntityTypePredicate
 "getFlags"(): $EntityFlagsPredicate
 "getDistance"(): $DistancePredicate
 "getEffects"(): $MobEffectsPredicate
 "getNbt"(): $NbtPredicate
 "getEquipment"(): $EntityEquipmentPredicate
 "getVehicle"(): $EntityPredicate
 "getPassenger"(): $EntityPredicate
 "getTeam"(): string
 "getTargetedEntity"(): $EntityPredicate
 "getTypeSpecific"(): $EntitySubPredicate
 "getSteppingOn"(): $LocationPredicate
}

export namespace $EntityPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPredicateAccessor$Type = ($EntityPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPredicateAccessor_ = $EntityPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$EntityFlagsPredicateAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityFlagsPredicateAccessor {

 "getIsOnFire"(): boolean
 "getIsSwimming"(): boolean
 "getIsSneaking"(): boolean
 "getIsSprinting"(): boolean
 "getIsBaby"(): boolean
}

export namespace $EntityFlagsPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityFlagsPredicateAccessor$Type = ($EntityFlagsPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityFlagsPredicateAccessor_ = $EntityFlagsPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$EntityEquipmentPredicateAccessor" {
import {$ItemPredicate, $ItemPredicate$Type} from "packages/net/minecraft/advancements/critereon/$ItemPredicate"

export interface $EntityEquipmentPredicateAccessor {

 "getHead"(): $ItemPredicate
 "getChest"(): $ItemPredicate
 "getLegs"(): $ItemPredicate
 "getFeet"(): $ItemPredicate
 "getMainhand"(): $ItemPredicate
 "getOffhand"(): $ItemPredicate
}

export namespace $EntityEquipmentPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEquipmentPredicateAccessor$Type = ($EntityEquipmentPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEquipmentPredicateAccessor_ = $EntityEquipmentPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$LootPoolAccessor" {
import {$LootItemFunction, $LootItemFunction$Type} from "packages/net/minecraft/world/level/storage/loot/functions/$LootItemFunction"
import {$LootPoolEntryContainer, $LootPoolEntryContainer$Type} from "packages/net/minecraft/world/level/storage/loot/entries/$LootPoolEntryContainer"
import {$LootItemCondition, $LootItemCondition$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"
import {$NumberProvider, $NumberProvider$Type} from "packages/net/minecraft/world/level/storage/loot/providers/number/$NumberProvider"

export interface $LootPoolAccessor {

 "getEntries"(): ($LootPoolEntryContainer)[]
 "getFunctions"(): ($LootItemFunction)[]
 "getConditions"(): ($LootItemCondition)[]
 "getRolls"(): $NumberProvider
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
declare module "packages/fzzyhmstrs/emi_loot/mixins/$ItemPredicateAccessor" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MinMaxBounds$Ints, $MinMaxBounds$Ints$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Ints"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$EnchantmentPredicate, $EnchantmentPredicate$Type} from "packages/net/minecraft/advancements/critereon/$EnchantmentPredicate"

export interface $ItemPredicateAccessor {

 "getCount"(): $MinMaxBounds$Ints
 "getTag"(): $TagKey<($Item)>
 "getItems"(): $Set<($Item)>
 "getStoredEnchantments"(): ($EnchantmentPredicate)[]
 "getDurability"(): $MinMaxBounds$Ints
 "getEnchantments"(): ($EnchantmentPredicate)[]
}

export namespace $ItemPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPredicateAccessor$Type = ($ItemPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemPredicateAccessor_ = $ItemPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$LocationPredicateAccessor" {
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$BlockPredicate, $BlockPredicate$Type} from "packages/net/minecraft/advancements/critereon/$BlockPredicate"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$FluidPredicate, $FluidPredicate$Type} from "packages/net/minecraft/advancements/critereon/$FluidPredicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MinMaxBounds$Doubles, $MinMaxBounds$Doubles$Type} from "packages/net/minecraft/advancements/critereon/$MinMaxBounds$Doubles"
import {$LightPredicate, $LightPredicate$Type} from "packages/net/minecraft/advancements/critereon/$LightPredicate"

export interface $LocationPredicateAccessor {

 "getFeature"(): $ResourceKey<($Structure)>
 "getBlock"(): $BlockPredicate
 "getY"(): $MinMaxBounds$Doubles
 "getDimension"(): $ResourceKey<($Level)>
 "getZ"(): $MinMaxBounds$Doubles
 "getFluid"(): $FluidPredicate
 "getX"(): $MinMaxBounds$Doubles
 "getLight"(): $LightPredicate
 "getBiome"(): $ResourceKey<($Biome)>
 "getSmokey"(): boolean
}

export namespace $LocationPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocationPredicateAccessor$Type = ($LocationPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocationPredicateAccessor_ = $LocationPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$StatePredicateAccessor" {
import {$StatePropertiesPredicate$PropertyMatcher, $StatePropertiesPredicate$PropertyMatcher$Type} from "packages/net/minecraft/advancements/critereon/$StatePropertiesPredicate$PropertyMatcher"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $StatePredicateAccessor {

 "getConditions"(): $List<($StatePropertiesPredicate$PropertyMatcher)>

(): $List<($StatePropertiesPredicate$PropertyMatcher)>
}

export namespace $StatePredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatePredicateAccessor$Type = ($StatePredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatePredicateAccessor_ = $StatePredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$LootPoolEntryAccessor" {
import {$LootItemCondition, $LootItemCondition$Type} from "packages/net/minecraft/world/level/storage/loot/predicates/$LootItemCondition"

export interface $LootPoolEntryAccessor {

 "getConditions"(): ($LootItemCondition)[]

(): ($LootItemCondition)[]
}

export namespace $LootPoolEntryAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootPoolEntryAccessor$Type = ($LootPoolEntryAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootPoolEntryAccessor_ = $LootPoolEntryAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$EntityEffectPredicateAccessor" {
import {$MobEffectsPredicate$MobEffectInstancePredicate, $MobEffectsPredicate$MobEffectInstancePredicate$Type} from "packages/net/minecraft/advancements/critereon/$MobEffectsPredicate$MobEffectInstancePredicate"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $EntityEffectPredicateAccessor {

 "getEffects"(): $Map<($MobEffect), ($MobEffectsPredicate$MobEffectInstancePredicate)>

(): $Map<($MobEffect), ($MobEffectsPredicate$MobEffectInstancePredicate)>
}

export namespace $EntityEffectPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEffectPredicateAccessor$Type = ($EntityEffectPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEffectPredicateAccessor_ = $EntityEffectPredicateAccessor$Type;
}}
declare module "packages/fzzyhmstrs/emi_loot/mixins/$NbtPredicateAccessor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $NbtPredicateAccessor {

 "getNbt"(): $CompoundTag

(): $CompoundTag
}

export namespace $NbtPredicateAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtPredicateAccessor$Type = ($NbtPredicateAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NbtPredicateAccessor_ = $NbtPredicateAccessor$Type;
}}
