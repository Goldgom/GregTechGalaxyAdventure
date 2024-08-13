declare module "packages/top/theillusivec4/curios/mixin/core/$AccessorEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AccessorEntity {

 "getFirstTick"(): boolean

(): boolean
}

export namespace $AccessorEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorEntity$Type = ($AccessorEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorEntity_ = $AccessorEntity$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ICurio$SoundInfo extends $Record {

constructor(soundEvent: $SoundEvent$Type, volume: float, pitch: float)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "volume"(): float
public "pitch"(): float
/**
 * 
 * @deprecated
 */
public "getPitch"(): float
/**
 * 
 * @deprecated
 */
public "getSoundEvent"(): $SoundEvent
/**
 * 
 * @deprecated
 */
public "getVolume"(): float
public "soundEvent"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$SoundInfo$Type = ($ICurio$SoundInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$SoundInfo_ = $ICurio$SoundInfo$Type;
}}
declare module "packages/top/theillusivec4/curios/api/$SlotContext" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $SlotContext extends $Record {

constructor(identifier: string, entity: $LivingEntity$Type, index: integer, cosmetic: boolean, visible: boolean)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
/**
 * 
 * @deprecated
 */
public "getIndex"(): integer
public "visible"(): boolean
public "identifier"(): string
/**
 * 
 * @deprecated
 */
public "getIdentifier"(): string
public "entity"(): $LivingEntity
public "cosmetic"(): boolean
/**
 * 
 * @deprecated
 */
public "getWearer"(): $LivingEntity
get "wearer"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotContext$Type = ($SlotContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SlotContext_ = $SlotContext$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ICurio$DropRule extends $Enum<($ICurio$DropRule)> {
static readonly "DEFAULT": $ICurio$DropRule
static readonly "ALWAYS_DROP": $ICurio$DropRule
static readonly "ALWAYS_KEEP": $ICurio$DropRule
static readonly "DESTROY": $ICurio$DropRule


public static "values"(): ($ICurio$DropRule)[]
public static "valueOf"(arg0: string): $ICurio$DropRule
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$DropRule$Type = (("always_drop") | ("default") | ("always_keep") | ("destroy")) | ($ICurio$DropRule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio$DropRule_ = $ICurio$DropRule$Type;
}}
declare module "packages/top/theillusivec4/curios/api/type/capability/$ICurio" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$LootContext, $LootContext$Type} from "packages/net/minecraft/world/level/storage/loot/$LootContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ICurio$SoundInfo, $ICurio$SoundInfo$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$SoundInfo"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$SlotContext, $SlotContext$Type} from "packages/top/theillusivec4/curios/api/$SlotContext"
import {$ICurio$DropRule, $ICurio$DropRule$Type} from "packages/top/theillusivec4/curios/api/type/capability/$ICurio$DropRule"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"

export interface $ICurio {

 "getStack"(): $ItemStack
/**
 * 
 * @deprecated
 */
 "getAttributeModifiers"(arg0: string): $Multimap<($Attribute), ($AttributeModifier)>
 "getAttributeModifiers"(arg0: $SlotContext$Type, arg1: $UUID$Type): $Multimap<($Attribute), ($AttributeModifier)>
/**
 * 
 * @deprecated
 */
 "canEquip"(arg0: string, arg1: $LivingEntity$Type): boolean
 "canEquip"(arg0: $SlotContext$Type): boolean
 "isEnderMask"(arg0: $SlotContext$Type, arg1: $EnderMan$Type): boolean
 "getFortuneLevel"(arg0: $SlotContext$Type, arg1: $LootContext$Type): integer
 "makesPiglinsNeutral"(arg0: $SlotContext$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $SlotContext$Type): boolean
 "getLootingLevel"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: $LivingEntity$Type, arg3: integer): integer
 "getAttributesTooltip"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "showAttributesTooltip"(arg0: string): boolean
/**
 * 
 * @deprecated
 */
 "playRightClickEquipSound"(arg0: $LivingEntity$Type): void
 "getSlotsTooltip"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
/**
 * 
 * @deprecated
 */
 "getTagsTooltip"(arg0: $List$Type<($Component$Type)>): $List<($Component)>
 "onEquipFromUse"(arg0: $SlotContext$Type): void
 "onUnequip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "onUnequip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
 "canEquipFromUse"(arg0: $SlotContext$Type): boolean
 "getEquipSound"(arg0: $SlotContext$Type): $ICurio$SoundInfo
/**
 * 
 * @deprecated
 */
 "canRightClickEquip"(): boolean
/**
 * 
 * @deprecated
 */
 "writeSyncData"(): $CompoundTag
 "writeSyncData"(arg0: $SlotContext$Type): $CompoundTag
 "onEquip"(arg0: $SlotContext$Type, arg1: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
 "onEquip"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "canUnequip"(arg0: string, arg1: $LivingEntity$Type): boolean
 "canUnequip"(arg0: $SlotContext$Type): boolean
/**
 * 
 * @deprecated
 */
 "curioBreak"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
 "curioBreak"(arg0: $SlotContext$Type): void
 "canSync"(arg0: $SlotContext$Type): boolean
/**
 * 
 * @deprecated
 */
 "canSync"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): boolean
 "curioTick"(arg0: $SlotContext$Type): void
/**
 * 
 * @deprecated
 */
 "curioTick"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
/**
 * 
 * @deprecated
 */
 "getFortuneBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
 "getDropRule"(arg0: $SlotContext$Type, arg1: $DamageSource$Type, arg2: integer, arg3: boolean): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "getDropRule"(arg0: $LivingEntity$Type): $ICurio$DropRule
/**
 * 
 * @deprecated
 */
 "getLootingBonus"(arg0: string, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): integer
/**
 * 
 * @deprecated
 */
 "curioAnimate"(arg0: string, arg1: integer, arg2: $LivingEntity$Type): void
 "readSyncData"(arg0: $SlotContext$Type, arg1: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
 "readSyncData"(arg0: $CompoundTag$Type): void

(): $ItemStack
}

export namespace $ICurio {
function playBreakAnimation(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICurio$Type = ($ICurio);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICurio_ = $ICurio$Type;
}}
