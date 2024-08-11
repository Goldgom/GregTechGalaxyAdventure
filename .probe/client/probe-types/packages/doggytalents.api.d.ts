declare module "packages/doggytalents/api/inferface/$IThrowableItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IThrowableItem {

 "getReturnStack"(arg0: $ItemStack$Type): $ItemStack
 "getCustomRenderStack"(arg0: $ItemStack$Type): $ItemStack
}

export namespace $IThrowableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThrowableItem$Type = ($IThrowableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IThrowableItem_ = $IThrowableItem$Type;
}}
declare module "packages/doggytalents/api/registry/$TalentInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$IDogAlteration, $IDogAlteration$Type} from "packages/doggytalents/api/inferface/$IDogAlteration"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$WetSource, $WetSource$Type} from "packages/doggytalents/api/enu/$WetSource"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Talent, $Talent$Type} from "packages/doggytalents/api/registry/$Talent"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export class $TalentInstance implements $IDogAlteration {

constructor(arg0: $Talent$Type)
constructor(arg0: $Talent$Type, arg1: integer)

public "toString"(): string
public "cast"<T extends $TalentInstance>(arg0: $Class$Type<(T)>): T
public "of"(arg0: $Talent$Type): boolean
public "of"(arg0: $Supplier$Type<($Talent$Type)>): boolean
public "set"(arg0: $AbstractDog$Type, arg1: integer): void
public "init"(arg0: $AbstractDog$Type): void
public "copy"(): $TalentInstance
public "level"(): integer
public "setLevel"(arg0: integer): void
public "readFromNBT"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): void
public "writeToNBT"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): void
public "hasRenderer"(): boolean
public "writeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "readFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "getTalent"(): $Talent
public "writeInstance"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): void
public static "readInstance"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): $Optional<($TalentInstance)>
public "remove"(arg0: $AbstractDog$Type): void
public "tick"(arg0: $AbstractDog$Type): void
public "getCapability"<T>(arg0: $AbstractDog$Type, arg1: $Capability$Type<(T)>, arg2: $Direction$Type): $LazyOptional<(T)>
public "dropInventory"(arg0: $AbstractDog$Type): void
public "dropLoot"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type, arg2: boolean): void
public "canTrample"(arg0: $AbstractDog$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: float): $InteractionResult
public "canStandOnFluid"(arg0: $AbstractDog$Type, arg1: $FluidState$Type): $InteractionResult
public "spawnDrops"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): void
public "canBeRiddenInWater"(arg0: $AbstractDog$Type): $InteractionResult
public "onLivingFall"(arg0: $AbstractDog$Type, arg1: float, arg2: float): $InteractionResult
public "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
public "onWrite"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): void
public "onRead"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): void
public "livingTick"(arg0: $AbstractDog$Type): void
public "canAttack"(arg0: $AbstractDog$Type, arg1: $LivingEntity$Type): $InteractionResult
public "canAttack"(arg0: $AbstractDog$Type, arg1: $EntityType$Type<(any)>): $InteractionResult
public "shouldAttackEntity"(arg0: $AbstractDog$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): $InteractionResult
public "hungerTick"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
public "healingTick"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
public "decreaseAirSupply"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
public "isInvulnerable"(arg0: $AbstractDog$Type): $InteractionResult
public "setDogHunger"(arg0: $AbstractDog$Type, arg1: float, arg2: float): $InteractionResultHolder<(float)>
public "getMaxHunger"(arg0: $AbstractDog$Type, arg1: float): $InteractionResultHolder<(float)>
public "isPotionApplicable"(arg0: $AbstractDog$Type, arg1: $MobEffectInstance$Type): $InteractionResult
public "isInvulnerableTo"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): $InteractionResult
public "canSwimUnderwater"(arg0: $AbstractDog$Type): $InteractionResult
public "inferType"(arg0: $AbstractDog$Type, arg1: $BlockPathTypes$Type): $InteractionResultHolder<($BlockPathTypes)>
public "setFire"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
public "onShakingDry"(arg0: $AbstractDog$Type, arg1: $WetSource$Type): void
public "isBlockSafe"(arg0: $BlockState$Type): $InteractionResult
public "isImmuneToFire"(arg0: $AbstractDog$Type): $InteractionResult
public "determineNextAir"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
public "blockIdleAnim"(arg0: $AbstractDog$Type): $InteractionResult
public "negateExplosion"(arg0: $AbstractDog$Type): $InteractionResult
public "canFly"(arg0: $AbstractDog$Type): $InteractionResult
public "attackEntityFrom"(arg0: $AbstractDog$Type, arg1: float, arg2: float): $InteractionResultHolder<(float)>
public "onDeath"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): void
public "canResistPushFromFluidType"(arg0: $FluidType$Type): $InteractionResult
public "canBlockDamageSource"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): $InteractionResult
public "stillIdleOrSitWhenHurt"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type, arg2: float): $InteractionResult
public "invalidateCapabilities"(arg0: $AbstractDog$Type): void
public "shouldSkipAttackFrom"(arg0: $AbstractDog$Type, arg1: $Entity$Type): $InteractionResult
public "canBreatheUnderwater"(arg0: $AbstractDog$Type): $InteractionResult
public "gettingAttackedFrom"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type, arg2: float): $InteractionResultHolder<(float)>
public "calculateFallDistance"(arg0: $AbstractDog$Type, arg1: float): $InteractionResultHolder<(float)>
public "doAdditionalAttackEffects"(arg0: $AbstractDog$Type, arg1: $Entity$Type): void
get "talent"(): $Talent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TalentInstance$Type = ($TalentInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TalentInstance_ = $TalentInstance$Type;
}}
declare module "packages/doggytalents/api/registry/$AccessoryType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $AccessoryType {

constructor()

public "getTranslationKey"(): string
public "numberToPutOn"(): integer
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryType$Type = ($AccessoryType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryType_ = $AccessoryType$Type;
}}
declare module "packages/doggytalents/api/inferface/$IDogAlteration" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$WetSource, $WetSource$Type} from "packages/doggytalents/api/enu/$WetSource"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IDogAlteration {

 "remove"(arg0: $AbstractDog$Type): void
 "init"(arg0: $AbstractDog$Type): void
 "tick"(arg0: $AbstractDog$Type): void
 "getCapability"<T>(arg0: $AbstractDog$Type, arg1: $Capability$Type<(T)>, arg2: $Direction$Type): $LazyOptional<(T)>
 "dropInventory"(arg0: $AbstractDog$Type): void
 "dropLoot"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type, arg2: boolean): void
 "canTrample"(arg0: $AbstractDog$Type, arg1: $BlockState$Type, arg2: $BlockPos$Type, arg3: float): $InteractionResult
 "canStandOnFluid"(arg0: $AbstractDog$Type, arg1: $FluidState$Type): $InteractionResult
 "spawnDrops"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): void
 "canBeRiddenInWater"(arg0: $AbstractDog$Type): $InteractionResult
 "onLivingFall"(arg0: $AbstractDog$Type, arg1: float, arg2: float): $InteractionResult
 "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
 "onWrite"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): void
 "onRead"(arg0: $AbstractDog$Type, arg1: $CompoundTag$Type): void
 "livingTick"(arg0: $AbstractDog$Type): void
 "canAttack"(arg0: $AbstractDog$Type, arg1: $LivingEntity$Type): $InteractionResult
 "canAttack"(arg0: $AbstractDog$Type, arg1: $EntityType$Type<(any)>): $InteractionResult
 "shouldAttackEntity"(arg0: $AbstractDog$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): $InteractionResult
 "hungerTick"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
 "healingTick"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
 "decreaseAirSupply"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
 "isInvulnerable"(arg0: $AbstractDog$Type): $InteractionResult
 "setDogHunger"(arg0: $AbstractDog$Type, arg1: float, arg2: float): $InteractionResultHolder<(float)>
 "getMaxHunger"(arg0: $AbstractDog$Type, arg1: float): $InteractionResultHolder<(float)>
 "isPotionApplicable"(arg0: $AbstractDog$Type, arg1: $MobEffectInstance$Type): $InteractionResult
 "isInvulnerableTo"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): $InteractionResult
 "canSwimUnderwater"(arg0: $AbstractDog$Type): $InteractionResult
 "inferType"(arg0: $AbstractDog$Type, arg1: $BlockPathTypes$Type): $InteractionResultHolder<($BlockPathTypes)>
 "setFire"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
 "onShakingDry"(arg0: $AbstractDog$Type, arg1: $WetSource$Type): void
 "isBlockSafe"(arg0: $BlockState$Type): $InteractionResult
 "isImmuneToFire"(arg0: $AbstractDog$Type): $InteractionResult
 "determineNextAir"(arg0: $AbstractDog$Type, arg1: integer): $InteractionResultHolder<(integer)>
 "blockIdleAnim"(arg0: $AbstractDog$Type): $InteractionResult
 "negateExplosion"(arg0: $AbstractDog$Type): $InteractionResult
 "canFly"(arg0: $AbstractDog$Type): $InteractionResult
 "attackEntityFrom"(arg0: $AbstractDog$Type, arg1: float, arg2: float): $InteractionResultHolder<(float)>
 "onDeath"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): void
 "canResistPushFromFluidType"(arg0: $FluidType$Type): $InteractionResult
 "canBlockDamageSource"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type): $InteractionResult
 "stillIdleOrSitWhenHurt"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type, arg2: float): $InteractionResult
 "invalidateCapabilities"(arg0: $AbstractDog$Type): void
 "shouldSkipAttackFrom"(arg0: $AbstractDog$Type, arg1: $Entity$Type): $InteractionResult
 "canBreatheUnderwater"(arg0: $AbstractDog$Type): $InteractionResult
 "gettingAttackedFrom"(arg0: $AbstractDog$Type, arg1: $DamageSource$Type, arg2: float): $InteractionResultHolder<(float)>
 "calculateFallDistance"(arg0: $AbstractDog$Type, arg1: float): $InteractionResultHolder<(float)>
 "doAdditionalAttackEffects"(arg0: $AbstractDog$Type, arg1: $Entity$Type): void
}

export namespace $IDogAlteration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDogAlteration$Type = ($IDogAlteration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDogAlteration_ = $IDogAlteration$Type;
}}
declare module "packages/doggytalents/api/feature/$DataKey" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataKey<T> {

constructor(arg0: boolean)

public static "make"<T>(): $DataKey<(T)>
public "isFinal"(): boolean
public "getIndex"(): integer
public static "makeFinal"<T>(): $DataKey<(T)>
get "final"(): boolean
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataKey$Type<T> = ($DataKey<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataKey_<T> = $DataKey$Type<(T)>;
}}
declare module "packages/doggytalents/api/registry/$AccessoryInstance" {
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Accessory, $Accessory$Type} from "packages/doggytalents/api/registry/$Accessory"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AccessoryType, $AccessoryType$Type} from "packages/doggytalents/api/registry/$AccessoryType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $AccessoryInstance {
static readonly "RENDER_TOP": byte
static readonly "RENDER_BOTTOM": byte
static readonly "RENDER_DEFAULT": byte
static readonly "RENDER_SORTER": $Comparator<($AccessoryInstance)>

constructor(arg0: $Accessory$Type)

public "cast"<T extends $AccessoryInstance>(arg0: $Class$Type<(T)>): T
public "of"<T extends $Accessory>(arg0: $Supplier$Type<(T)>): boolean
public "of"<T extends $Accessory>(arg0: T): boolean
public "copy"(): $AccessoryInstance
public "ofType"<T extends $AccessoryType>(arg0: T): boolean
public "ofType"<T extends $AccessoryType>(arg0: $Supplier$Type<(T)>): boolean
public "getModelTexture"(arg0: $AbstractDog$Type): $ResourceLocation
public "getReturnItem"(): $ItemStack
public "getRenderIndex"(): byte
public "writeInstance"(arg0: $CompoundTag$Type): void
public static "readInstance"(arg0: $CompoundTag$Type): $Optional<($AccessoryInstance)>
public "getAccessory"(): $Accessory
get "returnItem"(): $ItemStack
get "renderIndex"(): byte
get "accessory"(): $Accessory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryInstance$Type = ($AccessoryInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryInstance_ = $AccessoryInstance$Type;
}}
declare module "packages/doggytalents/api/enu/$WetSource" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WetSource extends $Enum<($WetSource)> {
static readonly "WATER": $WetSource
static readonly "BUBBLE_COLUMN": $WetSource
static readonly "RAIN": $WetSource


public static "values"(): ($WetSource)[]
public static "valueOf"(arg0: string): $WetSource
public static "of"(arg0: boolean, arg1: boolean, arg2: boolean): $WetSource
public "isWaterBlock"(): boolean
get "waterBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WetSource$Type = (("rain") | ("water") | ("bubble_column")) | ($WetSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WetSource_ = $WetSource$Type;
}}
declare module "packages/doggytalents/api/registry/$Talent" {
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$TalentInstance, $TalentInstance$Type} from "packages/doggytalents/api/registry/$TalentInstance"

export class $Talent {

constructor(arg0: $BiFunction$Type<($Talent$Type), (integer), ($TalentInstance$Type)>)

public "getDefault"(arg0: integer): $TalentInstance
public "getDefault"(): $TalentInstance
public "getMaxLevel"(): integer
public "getTranslationKey"(): string
public "getDeTrainXPCost"(arg0: integer): integer
public "isDogEligible"(arg0: $AbstractDog$Type): boolean
public "getLevelCost"(arg0: integer): integer
public "hasRenderer"(): boolean
public "getInfoTranslationKey"(): string
public "getCummulativeCost"(arg0: integer): integer
get "default"(): $TalentInstance
get "maxLevel"(): integer
get "translationKey"(): string
get "infoTranslationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Talent$Type = ($Talent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Talent_ = $Talent$Type;
}}
declare module "packages/doggytalents/api/feature/$DogLevel" {
import {$DogLevel$Type, $DogLevel$Type$Type} from "packages/doggytalents/api/feature/$DogLevel$Type"

export class $DogLevel {

constructor(arg0: integer, arg1: integer)

public "combine"(arg0: $DogLevel$Type): $DogLevel
public "copy"(): $DogLevel
public "getLevel"(arg0: $DogLevel$Type$Type): integer
/**
 * 
 * @deprecated
 */
public "setLevel"(arg0: $DogLevel$Type$Type, arg1: integer): void
public "canIncrease"(arg0: $DogLevel$Type$Type): boolean
public "getMaxHealth"(): float
public "isDireDog"(): boolean
/**
 * 
 * @deprecated
 */
public "incrementLevel"(arg0: $DogLevel$Type$Type): void
get "maxHealth"(): float
get "direDog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogLevel$Type = ($DogLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogLevel_ = $DogLevel$Type;
}}
declare module "packages/doggytalents/api/feature/$EnumGender" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"

export class $EnumGender extends $Enum<($EnumGender)> {
static readonly "MALE": $EnumGender
static readonly "FEMALE": $EnumGender
static readonly "UNISEX": $EnumGender
static readonly "VALUES": ($EnumGender)[]


public static "values"(): ($EnumGender)[]
public static "valueOf"(arg0: string): $EnumGender
public "getIndex"(): integer
public static "random"(arg0: $RandomSource$Type): $EnumGender
public "getUnlocalisedTip"(): string
public "getUnlocalisedName"(): string
public "getUnlocalisedTitle"(): string
public "getUnlocalisedPronoun"(): string
public "getUnlocalisedSubject"(): string
public "getUnlocalisedPossessiveAdj"(): string
public "canMateWith"(arg0: $EnumGender$Type): boolean
public "getSaveName"(): string
public static "bySaveName"(arg0: string): $EnumGender
public static "byIndex"(arg0: integer): $EnumGender
get "index"(): integer
get "unlocalisedTip"(): string
get "unlocalisedName"(): string
get "unlocalisedTitle"(): string
get "unlocalisedPronoun"(): string
get "unlocalisedSubject"(): string
get "unlocalisedPossessiveAdj"(): string
get "saveName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumGender$Type = (("unisex") | ("female") | ("male")) | ($EnumGender);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumGender_ = $EnumGender$Type;
}}
declare module "packages/doggytalents/api/feature/$EnumMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"

export class $EnumMode extends $Enum<($EnumMode)> {
static readonly "INCAPACITATED": $EnumMode
static readonly "DOCILE": $EnumMode
static readonly "WANDERING": $EnumMode
static readonly "AGGRESIVE": $EnumMode
static readonly "BERSERKER": $EnumMode
static readonly "BERSERKER_MINOR": $EnumMode
static readonly "TACTICAL": $EnumMode
static readonly "PATROL": $EnumMode
static readonly "GUARD": $EnumMode
static readonly "GUARD_FLAT": $EnumMode
static readonly "GUARD_MINOR": $EnumMode
static readonly "VALUES": ($EnumMode)[]


public static "values"(): ($EnumMode)[]
public static "valueOf"(arg0: string): $EnumMode
public "getIndex"(): integer
public "getUnlocalisedName"(): string
public "shouldAttack"(): boolean
public "shouldFollowOwner"(): boolean
public "getSaveName"(): string
public "canWander"(): boolean
public static "bySaveName"(arg0: string): $EnumMode
public static "byIndex"(arg0: integer): $EnumMode
public "nextMode"(): $EnumMode
public "getTip"(): string
public "getUnlocalisedInfo"(): string
public "previousMode"(): $EnumMode
public "onModeSet"(arg0: $AbstractDog$Type, arg1: $EnumMode$Type): void
get "index"(): integer
get "unlocalisedName"(): string
get "saveName"(): string
get "tip"(): string
get "unlocalisedInfo"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumMode$Type = (("patrol") | ("berserker_minor") | ("docile") | ("berserker") | ("guard") | ("guard_flat") | ("tactical") | ("incapacitated") | ("wandering") | ("guard_minor") | ("aggresive")) | ($EnumMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumMode_ = $EnumMode$Type;
}}
declare module "packages/doggytalents/api/inferface/$IDogFoodPredicate" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IDogFoodPredicate {

 "isFood"(arg0: $ItemStack$Type): boolean

(arg0: $ItemStack$Type): boolean
}

export namespace $IDogFoodPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDogFoodPredicate$Type = ($IDogFoodPredicate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDogFoodPredicate_ = $IDogFoodPredicate$Type;
}}
declare module "packages/doggytalents/api/registry/$Accessory$AccessoryRenderType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Accessory$AccessoryRenderType extends $Enum<($Accessory$AccessoryRenderType)> {
static readonly "OVERLAY": $Accessory$AccessoryRenderType
static readonly "MODEL": $Accessory$AccessoryRenderType
static readonly "OVERLAY_AND_MODEL": $Accessory$AccessoryRenderType


public static "values"(): ($Accessory$AccessoryRenderType)[]
public static "valueOf"(arg0: string): $Accessory$AccessoryRenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessory$AccessoryRenderType$Type = (("overlay") | ("overlay_and_model") | ("model")) | ($Accessory$AccessoryRenderType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Accessory$AccessoryRenderType_ = $Accessory$AccessoryRenderType$Type;
}}
declare module "packages/doggytalents/api/feature/$IDog" {
import {$IDogFoodHandler, $IDogFoodHandler$Type} from "packages/doggytalents/api/inferface/$IDogFoodHandler"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DataKey, $DataKey$Type} from "packages/doggytalents/api/feature/$DataKey"
import {$DogSize, $DogSize$Type} from "packages/doggytalents/api/feature/$DogSize"
import {$DogLevel, $DogLevel$Type} from "packages/doggytalents/api/feature/$DogLevel"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$DogLevel$Type, $DogLevel$Type$Type} from "packages/doggytalents/api/feature/$DogLevel$Type"
import {$Talent, $Talent$Type} from "packages/doggytalents/api/registry/$Talent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$EnumMode, $EnumMode$Type} from "packages/doggytalents/api/feature/$EnumMode"
import {$TalentInstance, $TalentInstance$Type} from "packages/doggytalents/api/registry/$TalentInstance"

export interface $IDog {

/**
 * 
 * @deprecated
 */
 "getData"<T>(arg0: $DataKey$Type<(T)>): T
 "getMode"(): $EnumMode
/**
 * 
 * @deprecated
 */
 "setData"<T>(arg0: $DataKey$Type<(T)>, arg1: T): void
/**
 * 
 * @deprecated
 */
 "hasData"<T>(arg0: $DataKey$Type<(T)>): boolean
 "isDefeated"(): boolean
 "canInteract"(arg0: $LivingEntity$Type): boolean
 "addAccessory"(arg0: $AccessoryInstance$Type): boolean
 "setDogHunger"(arg0: float): void
 "getMaxHunger"(): float
 "getDogLevel"(): $DogLevel
 "getDogLevel"(arg0: $Talent$Type): integer
 "getDogLevel"(arg0: $Supplier$Type<(any)>): integer
 "setDogSize"(arg0: $DogSize$Type): void
 "increaseLevel"(arg0: $DogLevel$Type$Type): void
 "getDogSize"(): $DogSize
 "getDogHunger"(): float
 "getDog"(): $AbstractDog
 "untame"(): void
 "addHunger"(arg0: float): void
 "removeAccessories"(): $List<($AccessoryInstance)>
 "getWagAngle"(arg0: float, arg1: float, arg2: float): float
 "getAccessories"(): $List<($AccessoryInstance)>
 "getShakeAngle"(arg0: float, arg1: float): float
 "getInterestedAngle"(arg0: float): float
/**
 * 
 * @deprecated
 */
 "setDataIfEmpty"<T>(arg0: $DataKey$Type<(T)>, arg1: T): void
 "getTalent"(arg0: $Supplier$Type<(any)>): $Optional<($TalentInstance)>
 "getTalent"(arg0: $Talent$Type): $Optional<($TalentInstance)>
/**
 * 
 * @deprecated
 */
 "getDataOrGet"<T>(arg0: $DataKey$Type<(T)>, arg1: $Supplier$Type<(T)>): T
/**
 * 
 * @deprecated
 */
 "getDataOrDefault"<T>(arg0: $DataKey$Type<(T)>, arg1: T): T
 "isLying"(): boolean
 "getFoodHandlers"(): $List<($IDogFoodHandler)>
}

export namespace $IDog {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDog$Type = ($IDog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDog_ = $IDog$Type;
}}
declare module "packages/doggytalents/api/feature/$DogSize" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogSize extends $Enum<($DogSize)> {
static readonly "PPP": $DogSize
static readonly "PIANISSIMO": $DogSize
static readonly "PIANO": $DogSize
static readonly "MODERATO": $DogSize
static readonly "FORTE": $DogSize
static readonly "FORTISSIMO": $DogSize
static readonly "VALUES": ($DogSize)[]


public static "values"(): ($DogSize)[]
public static "valueOf"(arg0: string): $DogSize
public "getId"(): integer
public "grow"(): $DogSize
public static "fromId"(arg0: integer): $DogSize
public "shrink"(): $DogSize
public "getScale"(): float
get "id"(): integer
get "scale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogSize$Type = (("ppp") | ("pianissimo") | ("moderato") | ("piano") | ("fortissimo") | ("forte")) | ($DogSize);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogSize_ = $DogSize$Type;
}}
declare module "packages/doggytalents/api/inferface/$IDogItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"

export interface $IDogItem {

 "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
 "onInteractWithDog"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult

(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
}

export namespace $IDogItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDogItem$Type = ($IDogItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDogItem_ = $IDogItem$Type;
}}
declare module "packages/doggytalents/api/inferface/$IDogFoodHandler" {
import {$IDogFoodPredicate, $IDogFoodPredicate$Type} from "packages/doggytalents/api/inferface/$IDogFoodPredicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IDogFoodHandler extends $IDogFoodPredicate {

 "consume"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): $InteractionResult
 "canConsume"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): boolean
 "isFood"(arg0: $ItemStack$Type): boolean
}

export namespace $IDogFoodHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDogFoodHandler$Type = ($IDogFoodHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDogFoodHandler_ = $IDogFoodHandler$Type;
}}
declare module "packages/doggytalents/api/inferface/$AbstractDog" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$IDogFoodHandler, $IDogFoodHandler$Type} from "packages/doggytalents/api/inferface/$IDogFoodHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$DataKey, $DataKey$Type} from "packages/doggytalents/api/feature/$DataKey"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$DogSize, $DogSize$Type} from "packages/doggytalents/api/feature/$DogSize"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DogLevel$Type, $DogLevel$Type$Type} from "packages/doggytalents/api/feature/$DogLevel$Type"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$TalentInstance, $TalentInstance$Type} from "packages/doggytalents/api/registry/$TalentInstance"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$KnockBackModifier, $KnockBackModifier$Type} from "packages/com/tacz/guns/api/entity/$KnockBackModifier"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$DogLevel, $DogLevel$Type} from "packages/doggytalents/api/feature/$DogLevel"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$JumpControl, $JumpControl$Type} from "packages/net/minecraft/world/entity/ai/control/$JumpControl"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Function, $Function$Type} from "packages/com/google/common/base/$Function"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$IDog, $IDog$Type} from "packages/doggytalents/api/feature/$IDog"
import {$TamableAnimal, $TamableAnimal$Type} from "packages/net/minecraft/world/entity/$TamableAnimal"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$EnumGender, $EnumGender$Type} from "packages/doggytalents/api/feature/$EnumGender"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Talent, $Talent$Type} from "packages/doggytalents/api/registry/$Talent"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EnumMode, $EnumMode$Type} from "packages/doggytalents/api/feature/$EnumMode"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractDog extends $TamableAnimal implements $IDog {
static readonly "DATA_FLAGS_ID": $EntityDataAccessor<(byte)>
static readonly "DATA_OWNERUUID_ID": $EntityDataAccessor<($Optional<($UUID)>)>
static readonly "PARENT_AGE_AFTER_BREEDING": integer
static readonly "BABY_START_AGE": integer
 "age": integer
 "forcedAge": integer
 "forcedAgeTimer": integer
static readonly "DEFAULT_WALK_TARGET_VALUE": float
static readonly "PICKUP_REACH": integer
static readonly "MAX_WEARING_ARMOR_CHANCE": float
static readonly "MAX_PICKUP_LOOT_CHANCE": float
static readonly "MAX_ENCHANTED_ARMOR_CHANCE": float
static readonly "MAX_ENCHANTED_WEAPON_CHANCE": float
static readonly "LEASH_TAG": string
static readonly "DEFAULT_EQUIPMENT_DROP_CHANCE": float
static readonly "PRESERVE_ITEM_DROP_CHANCE": integer
static readonly "UPDATE_GOAL_SELECTOR_EVERY_N_TICKS": integer
 "ambientSoundTime": integer
 "xpReward": integer
 "lookControl": $LookControl
 "moveControl": $MoveControl
 "jumpControl": $JumpControl
 "navigation": $PathNavigation
readonly "goalSelector": $GoalSelector
readonly "targetSelector": $GoalSelector
readonly "handItems": $NonNullList<($ItemStack)>
readonly "handDropChances": (float)[]
readonly "armorItems": $NonNullList<($ItemStack)>
readonly "armorDropChances": (float)[]
 "lootTable": $ResourceLocation
 "leashInfoTag": $CompoundTag
static readonly "HAND_SLOTS": integer
static readonly "ARMOR_SLOTS": integer
static readonly "EQUIPMENT_SLOT_OFFSET": integer
static readonly "ARMOR_SLOT_OFFSET": integer
static readonly "SWING_DURATION": integer
static readonly "PLAYER_HURT_EXPERIENCE_TIME": integer
static readonly "MIN_MOVEMENT_DISTANCE": double
static readonly "DEFAULT_BASE_GRAVITY": double
static readonly "DEATH_DURATION": integer
static readonly "USE_ITEM_INTERVAL": integer
static readonly "LIVING_ENTITY_FLAG_IS_USING": integer
static readonly "LIVING_ENTITY_FLAG_OFF_HAND": integer
static readonly "LIVING_ENTITY_FLAG_SPIN_ATTACK": integer
static readonly "DATA_LIVING_ENTITY_FLAGS": $EntityDataAccessor<(byte)>
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "SLEEPING_DIMENSIONS": $EntityDimensions
static readonly "EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT": float
readonly "activeEffects": $Map<($MobEffect), ($MobEffectInstance)>
 "swinging": boolean
 "swingingArm": $InteractionHand
 "swingTime": integer
 "removeArrowTime": integer
 "removeStingerTime": integer
 "hurtTime": integer
 "hurtDuration": integer
 "deathTime": integer
 "oAttackAnim": float
 "attackAnim": float
 "attackStrengthTicker": integer
readonly "walkAnimation": $WalkAnimationState
readonly "invulnerableDuration": integer
readonly "timeOffs": float
readonly "rotA": float
 "yBodyRot": float
 "yBodyRotO": float
 "yHeadRot": float
 "yHeadRotO": float
 "lastHurtByPlayer": $Player
 "lastHurtByPlayerTime": integer
 "dead": boolean
 "noActionTime": integer
 "oRun": float
 "run": float
 "animStep": float
 "animStepO": float
 "rotOffs": float
 "deathScore": integer
 "lastHurt": float
 "jumping": boolean
 "xxa": float
 "yya": float
 "zza": float
 "lerpSteps": integer
 "lerpX": double
 "lerpY": double
 "lerpZ": double
 "lerpYRot": double
 "lerpXRot": double
 "lyHeadRot": double
 "lerpHeadSteps": integer
 "effectsDirty": boolean
 "useItem": $ItemStack
 "useItemRemaining": integer
 "fallFlyTicks": integer
 "autoSpinAttackTicks": integer
 "brain": $Brain<(any)>
 "updateClimbingMobCachingSectionOnChange": boolean
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


public "getTranslationKey"(arg0: $Function$Type<($EnumGender$Type), (string)>): $Component
public "isDefeated"(): boolean
public "getGenderPossessiveAdj"(): $Component
public "getSoundVolume"(): float
public "canSwimUnderwater"(): boolean
public "isDoingFine"(): boolean
public "getDog"(): $AbstractDog
public "setMoveControl"(arg0: $MoveControl$Type): void
public "getGenderTip"(): $Component
public "setDogSwimming"(arg0: boolean): void
public "resetNavigation"(): void
public "getGenderTitle"(): $Component
public "setNavigation"(arg0: $PathNavigation$Type): void
public "resetMoveControl"(): void
public "getGenderName"(): $Component
public "isDogFlying"(): boolean
public "getGenderPronoun"(): $Component
public "getGenderSubject"(): $Component
public "setDogFlying"(arg0: boolean): void
public "isDogLowHealth"(): boolean
public "canStillEat"(): boolean
public "breakMoveControl"(): void
public "spawnTamingParticles"(arg0: boolean): void
public "consumeItemFromStack"(arg0: $Entity$Type, arg1: $ItemStack$Type): void
public "removeAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type): void
public "setAttributeModifier"(arg0: $Attribute$Type, arg1: $UUID$Type, arg2: $BiFunction$Type<($AbstractDog$Type), ($UUID$Type), ($AttributeModifier$Type)>): void
public "getClientAnimatedYBodyRotInRadians"(): float
public "getDefaultNavigation"(): $PathNavigation
public "getDogVisualBbWidth"(): float
public "getDefaultMoveControl"(): $MoveControl
public "getDogVisualBbHeight"(): float
/**
 * 
 * @deprecated
 */
public "getData"<T>(arg0: $DataKey$Type<(T)>): T
public "getMode"(): $EnumMode
/**
 * 
 * @deprecated
 */
public "setData"<T>(arg0: $DataKey$Type<(T)>, arg1: T): void
/**
 * 
 * @deprecated
 */
public "hasData"<T>(arg0: $DataKey$Type<(T)>): boolean
public "canInteract"(arg0: $LivingEntity$Type): boolean
public "addAccessory"(arg0: $AccessoryInstance$Type): boolean
public "setDogHunger"(arg0: float): void
public "getMaxHunger"(): float
public "getDogLevel"(): $DogLevel
public "getDogLevel"(arg0: $Talent$Type): integer
public "getDogLevel"(arg0: $Supplier$Type<(any)>): integer
public "setDogSize"(arg0: $DogSize$Type): void
public "increaseLevel"(arg0: $DogLevel$Type$Type): void
public "getDogSize"(): $DogSize
public "getDogHunger"(): float
public "untame"(): void
public "addHunger"(arg0: float): void
public "removeAccessories"(): $List<($AccessoryInstance)>
public "getWagAngle"(arg0: float, arg1: float, arg2: float): float
public "getAccessories"(): $List<($AccessoryInstance)>
public "getShakeAngle"(arg0: float, arg1: float): float
public "getInterestedAngle"(arg0: float): float
/**
 * 
 * @deprecated
 */
public "setDataIfEmpty"<T>(arg0: $DataKey$Type<(T)>, arg1: T): void
public "getTalent"(arg0: $Supplier$Type<(any)>): $Optional<($TalentInstance)>
public "getTalent"(arg0: $Talent$Type): $Optional<($TalentInstance)>
/**
 * 
 * @deprecated
 */
public "getDataOrGet"<T>(arg0: $DataKey$Type<(T)>, arg1: $Supplier$Type<(T)>): T
/**
 * 
 * @deprecated
 */
public "getDataOrDefault"<T>(arg0: $DataKey$Type<(T)>, arg1: T): T
public "isLying"(): boolean
public "getFoodHandlers"(): $List<($IDogFoodHandler)>
public "canaryOnEquipmentChanged"(): void
public "getCachedFeetBlockState"(): $BlockState
public static "fromLivingEntity"(arg0: $LivingEntity$Type): $KnockBackModifier
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "defeated"(): boolean
get "genderPossessiveAdj"(): $Component
get "soundVolume"(): float
get "doingFine"(): boolean
get "dog"(): $AbstractDog
set "moveControl"(value: $MoveControl$Type)
get "genderTip"(): $Component
set "dogSwimming"(value: boolean)
get "genderTitle"(): $Component
set "navigation"(value: $PathNavigation$Type)
get "genderName"(): $Component
get "dogFlying"(): boolean
get "genderPronoun"(): $Component
get "genderSubject"(): $Component
set "dogFlying"(value: boolean)
get "dogLowHealth"(): boolean
get "clientAnimatedYBodyRotInRadians"(): float
get "defaultNavigation"(): $PathNavigation
get "dogVisualBbWidth"(): float
get "defaultMoveControl"(): $MoveControl
get "dogVisualBbHeight"(): float
get "mode"(): $EnumMode
set "dogHunger"(value: float)
get "maxHunger"(): float
get "dogLevel"(): $DogLevel
set "dogSize"(value: $DogSize$Type)
get "dogSize"(): $DogSize
get "dogHunger"(): float
get "accessories"(): $List<($AccessoryInstance)>
get "lying"(): boolean
get "foodHandlers"(): $List<($IDogFoodHandler)>
get "cachedFeetBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDog$Type = ($AbstractDog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDog_ = $AbstractDog$Type;
}}
declare module "packages/doggytalents/api/feature/$DogLevel$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogLevel$Type extends $Enum<($DogLevel$Type)> {
static readonly "NORMAL": $DogLevel$Type
static readonly "DIRE": $DogLevel$Type


public "getName"(): string
public static "values"(): ($DogLevel$Type)[]
public static "valueOf"(arg0: string): $DogLevel$Type
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogLevel$Type$Type = (("normal") | ("dire")) | ($DogLevel$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogLevel$Type_ = $DogLevel$Type$Type;
}}
declare module "packages/doggytalents/api/registry/$Accessory" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$Accessory$AccessoryRenderType, $Accessory$AccessoryRenderType$Type} from "packages/doggytalents/api/registry/$Accessory$AccessoryRenderType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$AccessoryType, $AccessoryType$Type} from "packages/doggytalents/api/registry/$AccessoryType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $Accessory {

constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<($ItemStack$Type)>, arg2: integer)
constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>)

public "getDefault"(): $AccessoryInstance
public "of"<T extends $Accessory>(arg0: $Supplier$Type<(T)>): boolean
public "of"<T extends $Accessory>(arg0: T): boolean
public "write"(arg0: $AccessoryInstance$Type, arg1: $CompoundTag$Type): void
public "write"(arg0: $AccessoryInstance$Type, arg1: $FriendlyByteBuf$Type): void
public "read"(arg0: $CompoundTag$Type): $AccessoryInstance
public "getType"(): $AccessoryType
public "createInstance"(arg0: $FriendlyByteBuf$Type): $AccessoryInstance
public "getModelTexture"(): $ResourceLocation
public "getTranslationKey"(): string
public "setModelTexture"<T extends $Accessory>(arg0: $ResourceLocation$Type): T
public "getReturnItem"(arg0: $AccessoryInstance$Type): $ItemStack
public "renderTranslucent"(): boolean
public "getRenderLayer"(): byte
public "hasHindLegDiffTex"(): boolean
public "getAccessoryRenderType"(): $Accessory$AccessoryRenderType
public "setHasHindLegDiffTex"<T extends $Accessory>(arg0: boolean): T
public "setRenderTranslucent"<T extends $Accessory>(arg0: boolean): T
public "setAccessoryRenderType"<T extends $Accessory>(arg0: $Accessory$AccessoryRenderType$Type): T
public "createFromStack"(arg0: $ItemStack$Type): $AccessoryInstance
get "default"(): $AccessoryInstance
get "type"(): $AccessoryType
get "modelTexture"(): $ResourceLocation
get "translationKey"(): string
set "modelTexture"(value: $ResourceLocation$Type)
get "renderLayer"(): byte
get "accessoryRenderType"(): $Accessory$AccessoryRenderType
set "accessoryRenderType"(value: $Accessory$AccessoryRenderType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Accessory$Type = ($Accessory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Accessory_ = $Accessory$Type;
}}
