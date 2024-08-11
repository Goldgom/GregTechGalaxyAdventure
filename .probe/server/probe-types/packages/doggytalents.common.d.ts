declare module "packages/doggytalents/common/entity/accessory/$Wig$WigItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableAccessoryItem, $DyeableAccessoryItem$Type} from "packages/doggytalents/common/item/$DyeableAccessoryItem"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Wig$WigItem extends $DyeableAccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "getDefaultColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wig$WigItem$Type = ($Wig$WigItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wig$WigItem_ = $Wig$WigItem$Type;
}}
declare module "packages/doggytalents/common/item/$CanineTrackerItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CanineTrackerItem extends $Item {
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
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanineTrackerItem$Type = ($CanineTrackerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanineTrackerItem_ = $CanineTrackerItem$Type;
}}
declare module "packages/doggytalents/common/item/$DemonHornsItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DemonHornsItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DemonHornsItem$Type = ($DemonHornsItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DemonHornsItem_ = $DemonHornsItem$Type;
}}
declare module "packages/doggytalents/common/item/$PlagueDoctorMaskItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PlagueDoctorMaskItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlagueDoctorMaskItem$Type = ($PlagueDoctorMaskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlagueDoctorMaskItem_ = $PlagueDoctorMaskItem$Type;
}}
declare module "packages/doggytalents/common/entity/$DogIncapacitatedMananger" {
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DogAnimation, $DogAnimation$Type} from "packages/doggytalents/common/entity/anim/$DogAnimation"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnumMode, $EnumMode$Type} from "packages/doggytalents/api/feature/$EnumMode"
import {$DogPose, $DogPose$Type} from "packages/doggytalents/common/entity/anim/$DogPose"

export class $DogIncapacitatedMananger {
static readonly "MAX_INCAP_MSG_LEN": integer

constructor(arg0: $Dog$Type)

public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "tick"(): void
public "interact"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResult
public "getAnim"(): $DogAnimation
public "getPose"(): $DogPose
public "onHurt"(): void
public "setIncapMsg"(arg0: string): void
public "onModeUpdate"(arg0: $EnumMode$Type): void
public "canMove"(): boolean
public "getIncapMsg"(): string
public "incapacitatedClientTick"(): void
public "getFaintStandAnim"(): $DogAnimation
public "incapacitatedTick"(): void
get "anim"(): $DogAnimation
get "pose"(): $DogPose
set "incapMsg"(value: string)
get "incapMsg"(): string
get "faintStandAnim"(): $DogAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogIncapacitatedMananger$Type = ($DogIncapacitatedMananger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogIncapacitatedMananger_ = $DogIncapacitatedMananger$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$DogSizeSerializer" {
import {$DogSize, $DogSize$Type} from "packages/doggytalents/api/feature/$DogSize"
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $DogSizeSerializer implements $EntityDataSerializer<($DogSize)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $DogSize$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $DogSize
public "copy"(arg0: $DogSize$Type): $DogSize
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogSize$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogSize$Type)>): $EntityDataSerializer<($DogSize)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($DogSize$Type)>): $EntityDataSerializer<($DogSize)>
public static "simpleId"<T>(arg0: $IdMap$Type<($DogSize$Type)>): $EntityDataSerializer<($DogSize)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogSize$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogSize$Type)>): $EntityDataSerializer<($Optional<($DogSize)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($DogSize)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogSizeSerializer$Type = ($DogSizeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogSizeSerializer_ = $DogSizeSerializer$Type;
}}
declare module "packages/doggytalents/common/item/$DivineRetributionItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DivineRetributionItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DivineRetributionItem$Type = ($DivineRetributionItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DivineRetributionItem_ = $DivineRetributionItem$Type;
}}
declare module "packages/doggytalents/common/artifacts/$DoggyArtifact" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
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
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$WetSource, $WetSource$Type} from "packages/doggytalents/api/enu/$WetSource"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$DoggyArtifactItem, $DoggyArtifactItem$Type} from "packages/doggytalents/common/item/$DoggyArtifactItem"

export class $DoggyArtifact implements $IDogAlteration {
static readonly "ARTIFACTS_LIMIT": integer

constructor(arg0: $Supplier$Type<($DoggyArtifactItem$Type)>)

public "remove"(arg0: $AbstractDog$Type): void
public "init"(arg0: $AbstractDog$Type): void
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoggyArtifact$Type = ($DoggyArtifact);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoggyArtifact_ = $DoggyArtifact$Type;
}}
declare module "packages/doggytalents/common/item/$DroolBoneItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DroolBoneItem extends $Item {
 "altBone": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroolBoneItem$Type = ($DroolBoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DroolBoneItem_ = $DroolBoneItem$Type;
}}
declare module "packages/doggytalents/common/entity/stats/$StatsTracker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StatsTracker {

constructor()

public "writeAdditional"(arg0: $CompoundTag$Type): void
public "readAdditional"(arg0: $CompoundTag$Type): void
public "increaseDamageDealt"(arg0: float): void
public "increaseDistanceSprint"(arg0: integer): void
public "increaseDistanceOnWater"(arg0: integer): void
public "increaseDistanceWalk"(arg0: integer): void
public "increaseDistanceRidden"(arg0: integer): void
public "increaseDistanceSneaking"(arg0: integer): void
public "increaseDistanceInWater"(arg0: integer): void
public "incrementKillCount"(arg0: $Entity$Type): void
public "getDamageDealt"(): float
public "deserializeFromBuf"(arg0: $FriendlyByteBuf$Type): void
public "shallowCopyFrom"(arg0: $StatsTracker$Type): void
public "serializeToBuf"(arg0: $FriendlyByteBuf$Type): void
public "getDistanceSprint"(): integer
public "getAllKillCount"(): $Map<($EntityType<(any)>), (integer)>
public "getDistanceOnWater"(): integer
public "getTotalKillCount"(): integer
public "getKillCountFor"(arg0: $EntityType$Type<(any)>): integer
public "getKillCountFor"(arg0: $Predicate$Type<($MobCategory$Type)>): integer
public "getDistanceInWater"(): integer
public "getDistanceRidden"(): integer
public "getDistanceWalk"(): integer
public "getDistanceSneaking"(): integer
get "damageDealt"(): float
get "distanceSprint"(): integer
get "allKillCount"(): $Map<($EntityType<(any)>), (integer)>
get "distanceOnWater"(): integer
get "totalKillCount"(): integer
get "distanceInWater"(): integer
get "distanceRidden"(): integer
get "distanceWalk"(): integer
get "distanceSneaking"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StatsTracker$Type = ($StatsTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StatsTracker_ = $StatsTracker$Type;
}}
declare module "packages/doggytalents/common/item/$AccessoryItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDogItem, $IDogItem$Type} from "packages/doggytalents/api/inferface/$IDogItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AccessoryItem extends $Item implements $IDogItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "createInstance"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Player$Type): $AccessoryInstance
public "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onInteractWithDog"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessoryItem$Type = ($AccessoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessoryItem_ = $AccessoryItem$Type;
}}
declare module "packages/doggytalents/common/item/$EmptyLocatorOrbItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EmptyLocatorOrbItem extends $Item {
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
export type $EmptyLocatorOrbItem$Type = ($EmptyLocatorOrbItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EmptyLocatorOrbItem_ = $EmptyLocatorOrbItem$Type;
}}
declare module "packages/doggytalents/common/item/$ChopinRecordItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$RecordItem, $RecordItem$Type} from "packages/net/minecraft/world/item/$RecordItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChopinRecordItem extends $RecordItem {
readonly "EFFECT_RADIUS": integer
/**
 * 
 * @deprecated
 */
static readonly "BY_NAME": $Map<($SoundEvent), ($RecordItem)>
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

constructor(arg0: integer, arg1: $Supplier$Type<($SoundEvent$Type)>, arg2: $Item$Properties$Type, arg3: integer)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChopinRecordItem$Type = ($ChopinRecordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChopinRecordItem_ = $ChopinRecordItem$Type;
}}
declare module "packages/doggytalents/common/item/$SausageItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SausageItem extends $Item {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SausageItem$Type = ($SausageItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SausageItem_ = $SausageItem$Type;
}}
declare module "packages/doggytalents/common/item/$HotDogAccessoryItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HotDogAccessoryItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HotDogAccessoryItem$Type = ($HotDogAccessoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HotDogAccessoryItem_ = $HotDogAccessoryItem$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$DogLevelSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$DogLevel, $DogLevel$Type} from "packages/doggytalents/api/feature/$DogLevel"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $DogLevelSerializer implements $EntityDataSerializer<($DogLevel)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $DogLevel$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $DogLevel
public "copy"(arg0: $DogLevel$Type): $DogLevel
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogLevel$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogLevel$Type)>): $EntityDataSerializer<($DogLevel)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($DogLevel$Type)>): $EntityDataSerializer<($DogLevel)>
public static "simpleId"<T>(arg0: $IdMap$Type<($DogLevel$Type)>): $EntityDataSerializer<($DogLevel)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogLevel$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogLevel$Type)>): $EntityDataSerializer<($Optional<($DogLevel)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($DogLevel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogLevelSerializer$Type = ($DogLevelSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogLevelSerializer_ = $DogLevelSerializer$Type;
}}
declare module "packages/doggytalents/common/item/$WitchHatItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WitchHatItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitchHatItem$Type = ($WitchHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WitchHatItem_ = $WitchHatItem$Type;
}}
declare module "packages/doggytalents/common/block/$DogBedBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DogBedBlock extends $BaseEntityBlock {
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

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogBedBlock$Type = ($DogBedBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogBedBlock_ = $DogBedBlock$Type;
}}
declare module "packages/doggytalents/common/entity/ai/triggerable/$TriggerableAction" {
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"
import {$TriggerableAction$ActionState, $TriggerableAction$ActionState$Type} from "packages/doggytalents/common/entity/ai/triggerable/$TriggerableAction$ActionState"

export class $TriggerableAction {

constructor(arg0: $Dog$Type, arg1: boolean, arg2: boolean)

public "start"(): void
public "stop"(): void
public "getState"(): $TriggerableAction$ActionState
public "tick"(): void
public "onStart"(): void
public "setState"(arg0: $TriggerableAction$ActionState$Type): void
public "isStarted"(): boolean
public "canPreventSit"(): boolean
public "canOverrideSit"(): boolean
public "canPause"(): boolean
public "onStop"(): void
public "isTrivial"(): boolean
public "shouldPersistAfterSit"(): boolean
get "state"(): $TriggerableAction$ActionState
set "state"(value: $TriggerableAction$ActionState$Type)
get "started"(): boolean
get "trivial"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriggerableAction$Type = ($TriggerableAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriggerableAction_ = $TriggerableAction$Type;
}}
declare module "packages/doggytalents/common/block/$DogBathBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
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
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $DogBathBlock extends $Block {
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

constructor()

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogBathBlock$Type = ($DogBathBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogBathBlock_ = $DogBathBlock$Type;
}}
declare module "packages/doggytalents/common/entity/$Dog$LowHealthStrategy" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Dog$LowHealthStrategy extends $Enum<($Dog$LowHealthStrategy)> {
static readonly "NONE": $Dog$LowHealthStrategy
static readonly "RUN_AWAY": $Dog$LowHealthStrategy
static readonly "STICK_TO_OWNER": $Dog$LowHealthStrategy
static readonly "VALUES": ($Dog$LowHealthStrategy)[]


public static "values"(): ($Dog$LowHealthStrategy)[]
public static "valueOf"(arg0: string): $Dog$LowHealthStrategy
public "next"(): $Dog$LowHealthStrategy
public "prev"(): $Dog$LowHealthStrategy
public "getId"(): byte
public static "fromId"(arg0: integer): $Dog$LowHealthStrategy
public "getUnlocalisedTitle"(): string
public "getUnlocalisedInfo"(): string
get "id"(): byte
get "unlocalisedTitle"(): string
get "unlocalisedInfo"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dog$LowHealthStrategy$Type = (("none") | ("stick_to_owner") | ("run_away")) | ($Dog$LowHealthStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dog$LowHealthStrategy_ = $Dog$LowHealthStrategy$Type;
}}
declare module "packages/doggytalents/common/item/$TreatItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$DogLevel$Type, $DogLevel$Type$Type} from "packages/doggytalents/api/feature/$DogLevel$Type"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDogItem, $IDogItem$Type} from "packages/doggytalents/api/inferface/$IDogItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TreatItem extends $Item implements $IDogItem {
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

constructor(arg0: integer, arg1: $DogLevel$Type$Type, arg2: $Item$Properties$Type)

public "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onInteractWithDog"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreatItem$Type = ($TreatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreatItem_ = $TreatItem$Type;
}}
declare module "packages/doggytalents/common/entity/accessory/$BakerHat$BakerHatItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableAccessoryItem, $DyeableAccessoryItem$Type} from "packages/doggytalents/common/item/$DyeableAccessoryItem"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BakerHat$BakerHatItem extends $DyeableAccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakerHat$BakerHatItem$Type = ($BakerHat$BakerHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakerHat$BakerHatItem_ = $BakerHat$BakerHatItem$Type;
}}
declare module "packages/doggytalents/common/item/$StarterBundleItem" {
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
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StarterBundleItem extends $Item {
static "STARTER_ITEMS": $List<($Supplier<(any)>)>
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
export type $StarterBundleItem$Type = ($StarterBundleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StarterBundleItem_ = $StarterBundleItem$Type;
}}
declare module "packages/doggytalents/common/entity/texture/$DogSkinData$Version" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogSkinData$Version extends $Enum<($DogSkinData$Version)> {
static readonly "VERSION_0": $DogSkinData$Version
static readonly "VERSION_1": $DogSkinData$Version


public static "values"(): ($DogSkinData$Version)[]
public static "valueOf"(arg0: string): $DogSkinData$Version
public "getId"(): integer
public static "fromId"(arg0: integer): $DogSkinData$Version
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogSkinData$Version$Type = (("version_0") | ("version_1")) | ($DogSkinData$Version);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogSkinData$Version_ = $DogSkinData$Version$Type;
}}
declare module "packages/doggytalents/common/item/$SalmonSushiItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SalmonSushiItem extends $Item {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SalmonSushiItem$Type = ($SalmonSushiItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SalmonSushiItem_ = $SalmonSushiItem$Type;
}}
declare module "packages/doggytalents/common/item/$GenderBoneItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDogItem, $IDogItem$Type} from "packages/doggytalents/api/inferface/$IDogItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GenderBoneItem extends $Item implements $IDogItem {
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

public "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onInteractWithDog"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenderBoneItem$Type = ($GenderBoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenderBoneItem_ = $GenderBoneItem$Type;
}}
declare module "packages/doggytalents/common/entity/$DogIncapacitatedMananger$IncapacitatedSyncState" {
import {$DogIncapacitatedMananger$DefeatedType, $DogIncapacitatedMananger$DefeatedType$Type} from "packages/doggytalents/common/entity/$DogIncapacitatedMananger$DefeatedType"
import {$DogIncapacitatedMananger$BandaidState, $DogIncapacitatedMananger$BandaidState$Type} from "packages/doggytalents/common/entity/$DogIncapacitatedMananger$BandaidState"

export class $DogIncapacitatedMananger$IncapacitatedSyncState {
static "NONE": $DogIncapacitatedMananger$IncapacitatedSyncState
 "type": $DogIncapacitatedMananger$DefeatedType
 "bandaid": $DogIncapacitatedMananger$BandaidState
 "poseId": integer

constructor(arg0: $DogIncapacitatedMananger$DefeatedType$Type, arg1: $DogIncapacitatedMananger$BandaidState$Type, arg2: integer)
constructor(arg0: $DogIncapacitatedMananger$DefeatedType$Type, arg1: $DogIncapacitatedMananger$BandaidState$Type)
constructor(arg0: $DogIncapacitatedMananger$DefeatedType$Type)

public "equals"(arg0: any): boolean
public "copy"(): $DogIncapacitatedMananger$IncapacitatedSyncState
public "updateBandaid"(arg0: integer): $DogIncapacitatedMananger$IncapacitatedSyncState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogIncapacitatedMananger$IncapacitatedSyncState$Type = ($DogIncapacitatedMananger$IncapacitatedSyncState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogIncapacitatedMananger$IncapacitatedSyncState_ = $DogIncapacitatedMananger$IncapacitatedSyncState$Type;
}}
declare module "packages/doggytalents/common/entity/accessory/$LabCoat$LabCoatItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableAccessoryItem, $DyeableAccessoryItem$Type} from "packages/doggytalents/common/item/$DyeableAccessoryItem"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LabCoat$LabCoatItem extends $DyeableAccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LabCoat$LabCoatItem$Type = ($LabCoat$LabCoatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LabCoat$LabCoatItem_ = $LabCoat$LabCoatItem$Type;
}}
declare module "packages/doggytalents/common/entity/$DogIncapacitatedMananger$DefeatedType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogIncapacitatedMananger$DefeatedType extends $Enum<($DogIncapacitatedMananger$DefeatedType)> {
static readonly "NONE": $DogIncapacitatedMananger$DefeatedType
static readonly "BLOOD": $DogIncapacitatedMananger$DefeatedType
static readonly "BURN": $DogIncapacitatedMananger$DefeatedType
static readonly "POISON": $DogIncapacitatedMananger$DefeatedType
static readonly "DROWN": $DogIncapacitatedMananger$DefeatedType
static readonly "STARVE": $DogIncapacitatedMananger$DefeatedType


public static "values"(): ($DogIncapacitatedMananger$DefeatedType)[]
public static "valueOf"(arg0: string): $DogIncapacitatedMananger$DefeatedType
public "getId"(): integer
public static "byId"(arg0: integer): $DogIncapacitatedMananger$DefeatedType
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogIncapacitatedMananger$DefeatedType$Type = (("burn") | ("poison") | ("none") | ("starve") | ("blood") | ("drown")) | ($DogIncapacitatedMananger$DefeatedType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogIncapacitatedMananger$DefeatedType_ = $DogIncapacitatedMananger$DefeatedType$Type;
}}
declare module "packages/doggytalents/common/item/$BandaidItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BandaidItem extends $Item {
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
export type $BandaidItem$Type = ($BandaidItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BandaidItem_ = $BandaidItem$Type;
}}
declare module "packages/doggytalents/common/entity/$DogGroupsManager$DogGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DogGroupsManager$DogGroup {
readonly "color": integer
readonly "name": string

constructor(arg0: string, arg1: integer)

public "equals"(arg0: any): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogGroupsManager$DogGroup$Type = ($DogGroupsManager$DogGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogGroupsManager$DogGroup_ = $DogGroupsManager$DogGroup$Type;
}}
declare module "packages/doggytalents/common/item/$WhistleItem$WhistleMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$WhistleItem$WhistleSound, $WhistleItem$WhistleSound$Type} from "packages/doggytalents/common/item/$WhistleItem$WhistleSound"

export class $WhistleItem$WhistleMode extends $Enum<($WhistleItem$WhistleMode)> {
static readonly "STAND": $WhistleItem$WhistleMode
static readonly "HEEL": $WhistleItem$WhistleMode
static readonly "STAY": $WhistleItem$WhistleMode
static readonly "OKAY": $WhistleItem$WhistleMode
static readonly "SHELPERD": $WhistleItem$WhistleMode
static readonly "TACTICAL": $WhistleItem$WhistleMode
static readonly "ROAR": $WhistleItem$WhistleMode
static readonly "HEEL_BY_NAME": $WhistleItem$WhistleMode
static readonly "TO_BED": $WhistleItem$WhistleMode
static readonly "GO_BEHIND": $WhistleItem$WhistleMode
static readonly "HEEL_BY_GROUP": $WhistleItem$WhistleMode
static readonly "MOB_RETRIEVER": $WhistleItem$WhistleMode
static readonly "HEEL_BY_LOOK": $WhistleItem$WhistleMode
static readonly "RIDE_WITH_ME": $WhistleItem$WhistleMode
static readonly "HOWL": $WhistleItem$WhistleMode
static readonly "VALUES": ($WhistleItem$WhistleMode)[]


public static "values"(): ($WhistleItem$WhistleMode)[]
public static "valueOf"(arg0: string): $WhistleItem$WhistleMode
public "getIndex"(): integer
public "getSound"(): $WhistleItem$WhistleSound
public "getUnlocalisedTitle"(): string
get "index"(): integer
get "sound"(): $WhistleItem$WhistleSound
get "unlocalisedTitle"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhistleItem$WhistleMode$Type = (("okay") | ("heel_by_name") | ("ride_with_me") | ("to_bed") | ("go_behind") | ("tactical") | ("shelperd") | ("howl") | ("stay") | ("heel") | ("heel_by_look") | ("mob_retriever") | ("roar") | ("stand") | ("heel_by_group")) | ($WhistleItem$WhistleMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhistleItem$WhistleMode_ = $WhistleItem$WhistleMode$Type;
}}
declare module "packages/doggytalents/common/entity/$DogMiningCautiousManager" {
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"

export class $DogMiningCautiousManager {

constructor(arg0: $Dog$Type)

public "tick"(): void
public "isMiningCautious"(): boolean
get "miningCautious"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogMiningCautiousManager$Type = ($DogMiningCautiousManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogMiningCautiousManager_ = $DogMiningCautiousManager$Type;
}}
declare module "packages/doggytalents/common/item/$DyableBirthdayHatItem" {
import {$IDyeableArmorItem, $IDyeableArmorItem$Type} from "packages/doggytalents/common/item/$IDyeableArmorItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$DyeColor, $DyeColor$Type} from "packages/net/minecraft/world/item/$DyeColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DyableBirthdayHatItem extends $AccessoryItem implements $IDyeableArmorItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "createInstance"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Player$Type): $AccessoryInstance
public "clearColor"(arg0: $ItemStack$Type): void
public "getForegroundColor"(arg0: $ItemStack$Type): integer
public "setForegroundColor"(arg0: $ItemStack$Type, arg1: integer): void
public static "dyeForegroundColorStack"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeColor$Type)>): $ItemStack
public "getColor"(arg0: $ItemStack$Type): integer
public "getDefaultColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyableBirthdayHatItem$Type = ($DyableBirthdayHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyableBirthdayHatItem_ = $DyableBirthdayHatItem$Type;
}}
declare module "packages/doggytalents/common/item/$FrisbeeDroolItem" {
import {$IDyeableArmorItem, $IDyeableArmorItem$Type} from "packages/doggytalents/common/item/$IDyeableArmorItem"
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
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DroolBoneItem, $DroolBoneItem$Type} from "packages/doggytalents/common/item/$DroolBoneItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FrisbeeDroolItem extends $DroolBoneItem implements $IDyeableArmorItem {
 "altBone": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getColor"(arg0: $ItemStack$Type): integer
public "getDefaultColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrisbeeDroolItem$Type = ($FrisbeeDroolItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrisbeeDroolItem_ = $FrisbeeDroolItem$Type;
}}
declare module "packages/doggytalents/common/item/$GoldenAFiveWagyuItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GoldenAFiveWagyuItem extends $Item {
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

constructor()

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenAFiveWagyuItem$Type = ($GoldenAFiveWagyuItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenAFiveWagyuItem_ = $GoldenAFiveWagyuItem$Type;
}}
declare module "packages/doggytalents/common/item/$SussySickleItem" {
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
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SussySickleItem extends $SwordItem {
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
export type $SussySickleItem$Type = ($SussySickleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SussySickleItem_ = $SussySickleItem$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$AccessorySerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $AccessorySerializer implements $EntityDataSerializer<($List<($AccessoryInstance)>)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $List$Type<($AccessoryInstance$Type)>): void
public "read"(arg0: $FriendlyByteBuf$Type): $List<($AccessoryInstance)>
public "copy"(arg0: $List$Type<($AccessoryInstance$Type)>): $List<($AccessoryInstance)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($List$Type<($AccessoryInstance$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($List$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($List<($AccessoryInstance)>)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($List$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($List<($AccessoryInstance)>)>
public static "simpleId"<T>(arg0: $IdMap$Type<($List$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($List<($AccessoryInstance)>)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($List$Type<($AccessoryInstance$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($List$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($Optional<($List<($AccessoryInstance)>)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($List<($AccessoryInstance)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessorySerializer$Type = ($AccessorySerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AccessorySerializer_ = $AccessorySerializer$Type;
}}
declare module "packages/doggytalents/common/item/$DoggyArtifactItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DoggyArtifact, $DoggyArtifact$Type} from "packages/doggytalents/common/artifacts/$DoggyArtifact"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DoggyArtifactItem extends $Item {
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

constructor(arg0: $Supplier$Type<($DoggyArtifact$Type)>, arg1: $Item$Properties$Type)

public static "readCompound"(arg0: $CompoundTag$Type): $DoggyArtifactItem
public "createArtifact"(): $DoggyArtifact
public static "writeCompound"(arg0: $DoggyArtifactItem$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoggyArtifactItem$Type = ($DoggyArtifactItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoggyArtifactItem_ = $DoggyArtifactItem$Type;
}}
declare module "packages/doggytalents/common/entity/$Dog$CombatReturnStrategy" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Dog$CombatReturnStrategy extends $Enum<($Dog$CombatReturnStrategy)> {
static readonly "STANDARD": $Dog$CombatReturnStrategy
static readonly "FAR": $Dog$CombatReturnStrategy
static readonly "NONE": $Dog$CombatReturnStrategy
static readonly "VALUES": ($Dog$CombatReturnStrategy)[]


public static "values"(): ($Dog$CombatReturnStrategy)[]
public static "valueOf"(arg0: string): $Dog$CombatReturnStrategy
public "next"(): $Dog$CombatReturnStrategy
public "prev"(): $Dog$CombatReturnStrategy
public "getId"(): byte
public static "fromId"(arg0: integer): $Dog$CombatReturnStrategy
public "getUnlocalisedTitle"(): string
public "getUnlocalisedInfo"(): string
get "id"(): byte
get "unlocalisedTitle"(): string
get "unlocalisedInfo"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dog$CombatReturnStrategy$Type = (("standard") | ("far") | ("none")) | ($Dog$CombatReturnStrategy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dog$CombatReturnStrategy_ = $Dog$CombatReturnStrategy$Type;
}}
declare module "packages/doggytalents/common/item/$FrisbeeItem" {
import {$IDyeableArmorItem, $IDyeableArmorItem$Type} from "packages/doggytalents/common/item/$IDyeableArmorItem"
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
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ThrowableItem, $ThrowableItem$Type} from "packages/doggytalents/common/item/$ThrowableItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FrisbeeItem extends $ThrowableItem implements $IDyeableArmorItem {
 "altBone": $Supplier<(any)>
 "renderBone": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getCustomRenderStack"(arg0: $ItemStack$Type): $ItemStack
public "getColor"(arg0: $ItemStack$Type): integer
public "getDefaultColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrisbeeItem$Type = ($FrisbeeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FrisbeeItem_ = $FrisbeeItem$Type;
}}
declare module "packages/doggytalents/common/item/$EggSandwichItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EggSandwichItem extends $Item {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EggSandwichItem$Type = ($EggSandwichItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EggSandwichItem_ = $EggSandwichItem$Type;
}}
declare module "packages/doggytalents/common/item/$GiantStickAccessoryItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $GiantStickAccessoryItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GiantStickAccessoryItem$Type = ($GiantStickAccessoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GiantStickAccessoryItem_ = $GiantStickAccessoryItem$Type;
}}
declare module "packages/doggytalents/common/entity/texture/$DogSkinData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DogSkinData$Version, $DogSkinData$Version$Type} from "packages/doggytalents/common/entity/texture/$DogSkinData$Version"

export class $DogSkinData {
static "NULL": $DogSkinData

constructor(arg0: string, arg1: $DogSkinData$Version$Type)

public "save"(arg0: $CompoundTag$Type): void
public "copy"(): $DogSkinData
public "getVersion"(): $DogSkinData$Version
public "getHash"(): string
public static "readFromTag"(arg0: $CompoundTag$Type): $DogSkinData
get "version"(): $DogSkinData$Version
get "hash"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogSkinData$Type = ($DogSkinData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogSkinData_ = $DogSkinData$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$GenderSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$EnumGender, $EnumGender$Type} from "packages/doggytalents/api/feature/$EnumGender"

export class $GenderSerializer implements $EntityDataSerializer<($EnumGender)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $EnumGender$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $EnumGender
public "copy"(arg0: $EnumGender$Type): $EnumGender
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($EnumGender$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($EnumGender$Type)>): $EntityDataSerializer<($EnumGender)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($EnumGender$Type)>): $EntityDataSerializer<($EnumGender)>
public static "simpleId"<T>(arg0: $IdMap$Type<($EnumGender$Type)>): $EntityDataSerializer<($EnumGender)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($EnumGender$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($EnumGender$Type)>): $EntityDataSerializer<($Optional<($EnumGender)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($EnumGender)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenderSerializer$Type = ($GenderSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenderSerializer_ = $GenderSerializer$Type;
}}
declare module "packages/doggytalents/common/item/$OnigiriItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $OnigiriItem extends $Item {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OnigiriItem$Type = ($OnigiriItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OnigiriItem_ = $OnigiriItem$Type;
}}
declare module "packages/doggytalents/common/entity/$DogIncapacitatedMananger$BandaidState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogIncapacitatedMananger$BandaidState extends $Enum<($DogIncapacitatedMananger$BandaidState)> {
static readonly "NONE": $DogIncapacitatedMananger$BandaidState
static readonly "HALF": $DogIncapacitatedMananger$BandaidState
static readonly "FULL": $DogIncapacitatedMananger$BandaidState


public static "values"(): ($DogIncapacitatedMananger$BandaidState)[]
public static "valueOf"(arg0: string): $DogIncapacitatedMananger$BandaidState
public "getId"(): integer
public static "getState"(arg0: integer): $DogIncapacitatedMananger$BandaidState
public static "byId"(arg0: integer): $DogIncapacitatedMananger$BandaidState
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogIncapacitatedMananger$BandaidState$Type = (("half") | ("none") | ("full")) | ($DogIncapacitatedMananger$BandaidState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogIncapacitatedMananger$BandaidState_ = $DogIncapacitatedMananger$BandaidState$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$TalentListSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$TalentInstance, $TalentInstance$Type} from "packages/doggytalents/api/registry/$TalentInstance"

export class $TalentListSerializer implements $EntityDataSerializer<($List<($TalentInstance)>)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $List$Type<($TalentInstance$Type)>): void
public "read"(arg0: $FriendlyByteBuf$Type): $List<($TalentInstance)>
public "copy"(arg0: $List$Type<($TalentInstance$Type)>): $List<($TalentInstance)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($List<($TalentInstance)>)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($List$Type<($TalentInstance$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($List$Type<($TalentInstance$Type)>)>): $EntityDataSerializer<($List<($TalentInstance)>)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($List$Type<($TalentInstance$Type)>)>): $EntityDataSerializer<($List<($TalentInstance)>)>
public static "simpleId"<T>(arg0: $IdMap$Type<($List$Type<($TalentInstance$Type)>)>): $EntityDataSerializer<($List<($TalentInstance)>)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($List$Type<($TalentInstance$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($List$Type<($TalentInstance$Type)>)>): $EntityDataSerializer<($Optional<($List<($TalentInstance)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TalentListSerializer$Type = ($TalentListSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TalentListSerializer_ = $TalentListSerializer$Type;
}}
declare module "packages/doggytalents/common/item/$AmnesiaBoneItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDogItem, $IDogItem$Type} from "packages/doggytalents/api/inferface/$IDogItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AmnesiaBoneItem extends $Item implements $IDogItem {
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
public static "getUntameXPCost"(): integer
public static "getUseCap"(): integer
public "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
public static "getMigrateOwnerXPCost"(): integer
/**
 * 
 * @deprecated
 */
public "onInteractWithDog"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
get "untameXPCost"(): integer
get "useCap"(): integer
get "migrateOwnerXPCost"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmnesiaBoneItem$Type = ($AmnesiaBoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AmnesiaBoneItem_ = $AmnesiaBoneItem$Type;
}}
declare module "packages/doggytalents/common/entity/anim/$DogPose" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogPose extends $Enum<($DogPose)> {
static readonly "STAND": $DogPose
static readonly "SIT": $DogPose
static readonly "FAINTED": $DogPose
static readonly "REST": $DogPose
static readonly "FAINTED_2": $DogPose
static readonly "LYING_2": $DogPose
static readonly "DROWN": $DogPose
static readonly "FLYING": $DogPose
readonly "canBeg": boolean
readonly "canShake": boolean
readonly "freeTail": boolean
readonly "freeHead": boolean


public static "values"(): ($DogPose)[]
public static "valueOf"(arg0: string): $DogPose
public "getId"(): integer
public static "byId"(arg0: integer): $DogPose
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogPose$Type = (("rest") | ("flying") | ("stand") | ("fainted_2") | ("fainted") | ("lying_2") | ("drown") | ("sit")) | ($DogPose);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogPose_ = $DogPose$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$DoggyArtifactsSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$DoggyArtifactItem, $DoggyArtifactItem$Type} from "packages/doggytalents/common/item/$DoggyArtifactItem"

export class $DoggyArtifactsSerializer implements $EntityDataSerializer<($List<($DoggyArtifactItem)>)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $List$Type<($DoggyArtifactItem$Type)>): void
public "read"(arg0: $FriendlyByteBuf$Type): $List<($DoggyArtifactItem)>
public "copy"(arg0: $List$Type<($DoggyArtifactItem$Type)>): $List<($DoggyArtifactItem)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($List$Type<($DoggyArtifactItem$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($List$Type<($DoggyArtifactItem$Type)>)>): $EntityDataSerializer<($List<($DoggyArtifactItem)>)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($List$Type<($DoggyArtifactItem$Type)>)>): $EntityDataSerializer<($List<($DoggyArtifactItem)>)>
public static "simpleId"<T>(arg0: $IdMap$Type<($List$Type<($DoggyArtifactItem$Type)>)>): $EntityDataSerializer<($List<($DoggyArtifactItem)>)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($List$Type<($DoggyArtifactItem$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($List$Type<($DoggyArtifactItem$Type)>)>): $EntityDataSerializer<($Optional<($List<($DoggyArtifactItem)>)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($List<($DoggyArtifactItem)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoggyArtifactsSerializer$Type = ($DoggyArtifactsSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoggyArtifactsSerializer_ = $DoggyArtifactsSerializer$Type;
}}
declare module "packages/doggytalents/common/entity/ai/triggerable/$TriggerableAction$ActionState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TriggerableAction$ActionState extends $Enum<($TriggerableAction$ActionState)> {
static readonly "PENDING": $TriggerableAction$ActionState
static readonly "RUNNING": $TriggerableAction$ActionState
static readonly "FINISHED": $TriggerableAction$ActionState
static readonly "PAUSED": $TriggerableAction$ActionState


public static "values"(): ($TriggerableAction$ActionState)[]
public static "valueOf"(arg0: string): $TriggerableAction$ActionState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriggerableAction$ActionState$Type = (("running") | ("paused") | ("pending") | ("finished")) | ($TriggerableAction$ActionState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriggerableAction$ActionState_ = $TriggerableAction$ActionState$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$DimensionDependantArg" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $DimensionDependantArg<T> implements $Map<($ResourceKey<($Level)>), (T)> {
 "map": $Map<($ResourceKey<($Level)>), (T)>

constructor(arg0: $Supplier$Type<($EntityDataSerializer$Type<(T)>)>)

public "remove"(arg0: any): T
public "get"(arg0: any): T
public "put"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T): T
public "equals"(arg0: any): boolean
public "toString"(): string
public "values"(): $Collection<(T)>
public "hashCode"(): integer
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "entrySet"(): $Set<($Map$Entry<($ResourceKey<($Level)>), (T)>)>
public "putAll"(arg0: $Map$Type<(any), (any)>): void
public "set"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T): $DimensionDependantArg<(T)>
public "containsKey"(arg0: any): boolean
public "keySet"(): $Set<($ResourceKey<($Level)>)>
public "containsValue"(arg0: any): boolean
public "copy"(): $DimensionDependantArg<(T)>
public "getSerializer"(): $EntityDataSerializer<(T)>
public "copyEmpty"(): $DimensionDependantArg<(T)>
public "remove"(arg0: any, arg1: any): boolean
public static "copyOf"<K, V>(arg0: $Map$Type<(any), (any)>): $Map<($ResourceKey<($Level)>), (T)>
public "replace"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T): T
public "replace"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: T): boolean
public "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T, arg6: $ResourceKey$Type<($Level$Type)>, arg7: T, arg8: $ResourceKey$Type<($Level$Type)>, arg9: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T, arg6: $ResourceKey$Type<($Level$Type)>, arg7: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T, arg6: $ResourceKey$Type<($Level$Type)>, arg7: T, arg8: $ResourceKey$Type<($Level$Type)>, arg9: T, arg10: $ResourceKey$Type<($Level$Type)>, arg11: T, arg12: $ResourceKey$Type<($Level$Type)>, arg13: T, arg14: $ResourceKey$Type<($Level$Type)>, arg15: T, arg16: $ResourceKey$Type<($Level$Type)>, arg17: T, arg18: $ResourceKey$Type<($Level$Type)>, arg19: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T, arg6: $ResourceKey$Type<($Level$Type)>, arg7: T, arg8: $ResourceKey$Type<($Level$Type)>, arg9: T, arg10: $ResourceKey$Type<($Level$Type)>, arg11: T, arg12: $ResourceKey$Type<($Level$Type)>, arg13: T, arg14: $ResourceKey$Type<($Level$Type)>, arg15: T, arg16: $ResourceKey$Type<($Level$Type)>, arg17: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T, arg6: $ResourceKey$Type<($Level$Type)>, arg7: T, arg8: $ResourceKey$Type<($Level$Type)>, arg9: T, arg10: $ResourceKey$Type<($Level$Type)>, arg11: T, arg12: $ResourceKey$Type<($Level$Type)>, arg13: T, arg14: $ResourceKey$Type<($Level$Type)>, arg15: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T, arg6: $ResourceKey$Type<($Level$Type)>, arg7: T, arg8: $ResourceKey$Type<($Level$Type)>, arg9: T, arg10: $ResourceKey$Type<($Level$Type)>, arg11: T, arg12: $ResourceKey$Type<($Level$Type)>, arg13: T): $Map<($ResourceKey<($Level)>), (T)>
public static "of"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $ResourceKey$Type<($Level$Type)>, arg3: T, arg4: $ResourceKey$Type<($Level$Type)>, arg5: T, arg6: $ResourceKey$Type<($Level$Type)>, arg7: T, arg8: $ResourceKey$Type<($Level$Type)>, arg9: T, arg10: $ResourceKey$Type<($Level$Type)>, arg11: T): $Map<($ResourceKey<($Level)>), (T)>
public "merge"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T, arg2: $BiFunction$Type<(any), (any), (any)>): T
public "putIfAbsent"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T): T
public "compute"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $BiFunction$Type<(any), (any), (any)>): T
public static "entry"<K, V>(arg0: $ResourceKey$Type<($Level$Type)>, arg1: T): $Map$Entry<($ResourceKey<($Level)>), (T)>
public "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
public "computeIfAbsent"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $Function$Type<(any), (any)>): T
public "getOrDefault"(arg0: any, arg1: T): T
public "computeIfPresent"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $BiFunction$Type<(any), (any), (any)>): T
public static "ofEntries"<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<($ResourceKey<($Level)>), (T)>
[index: string | number]: T
get "empty"(): boolean
get "serializer"(): $EntityDataSerializer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionDependantArg$Type<T> = ($DimensionDependantArg<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DimensionDependantArg_<T> = $DimensionDependantArg$Type<(T)>;
}}
declare module "packages/doggytalents/common/entity/serializers/$DogSkinDataSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$DogSkinData, $DogSkinData$Type} from "packages/doggytalents/common/entity/texture/$DogSkinData"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $DogSkinDataSerializer implements $EntityDataSerializer<($DogSkinData)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $DogSkinData$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $DogSkinData
public "copy"(arg0: $DogSkinData$Type): $DogSkinData
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogSkinData$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogSkinData$Type)>): $EntityDataSerializer<($DogSkinData)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($DogSkinData$Type)>): $EntityDataSerializer<($DogSkinData)>
public static "simpleId"<T>(arg0: $IdMap$Type<($DogSkinData$Type)>): $EntityDataSerializer<($DogSkinData)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogSkinData$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogSkinData$Type)>): $EntityDataSerializer<($Optional<($DogSkinData)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($DogSkinData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogSkinDataSerializer$Type = ($DogSkinDataSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogSkinDataSerializer_ = $DogSkinDataSerializer$Type;
}}
declare module "packages/doggytalents/common/item/$DogResizeItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$DogResizeItem$Type, $DogResizeItem$Type$Type} from "packages/doggytalents/common/item/$DogResizeItem$Type"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IDogItem, $IDogItem$Type} from "packages/doggytalents/api/inferface/$IDogItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DogResizeItem extends $Item implements $IDogItem {
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

constructor(arg0: $DogResizeItem$Type$Type, arg1: $Item$Properties$Type)

public "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onInteractWithDog"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogResizeItem$Type = ($DogResizeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogResizeItem_ = $DogResizeItem$Type;
}}
declare module "packages/doggytalents/common/entity/$DogOwnerDistanceManager" {
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $DogOwnerDistanceManager {

constructor(arg0: $Dog$Type)

public "load"(arg0: $CompoundTag$Type): void
public "save"(arg0: $CompoundTag$Type): void
public "tick"(): void
public static "getGreetCountForOwner"(arg0: $LivingEntity$Type): integer
public static "decGreetCountForOwner"(arg0: $LivingEntity$Type): void
public static "incGreetCountForOwner"(arg0: $LivingEntity$Type): void
public "triggerGreetingAction"(arg0: $Dog$Type, arg1: $LivingEntity$Type, arg2: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogOwnerDistanceManager$Type = ($DogOwnerDistanceManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogOwnerDistanceManager_ = $DogOwnerDistanceManager$Type;
}}
declare module "packages/doggytalents/common/item/$RiceBowlItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BowlFoodItem, $BowlFoodItem$Type} from "packages/net/minecraft/world/item/$BowlFoodItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RiceBowlItem extends $BowlFoodItem {
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

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RiceBowlItem$Type = ($RiceBowlItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RiceBowlItem_ = $RiceBowlItem$Type;
}}
declare module "packages/doggytalents/common/entity/accessory/$ChefHat$ChefHatItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$DyeableAccessoryItem, $DyeableAccessoryItem$Type} from "packages/doggytalents/common/item/$DyeableAccessoryItem"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ChefHat$ChefHatItem extends $DyeableAccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChefHat$ChefHatItem$Type = ($ChefHat$ChefHatItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChefHat$ChefHatItem_ = $ChefHat$ChefHatItem$Type;
}}
declare module "packages/doggytalents/common/entity/$DogGroupsManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$DogGroupsManager$DogGroup, $DogGroupsManager$DogGroup$Type} from "packages/doggytalents/common/entity/$DogGroupsManager$DogGroup"
import {$List, $List$Type} from "packages/java/util/$List"

export class $DogGroupsManager {
static readonly "MAX_GROUP_STRLEN": integer
static readonly "MAX_GROUP_SIZE": integer

constructor()

public "add"(arg0: $DogGroupsManager$DogGroup$Type): boolean
public "remove"(arg0: $DogGroupsManager$DogGroup$Type): boolean
public "load"(arg0: $CompoundTag$Type): void
public "clear"(): void
public "save"(arg0: $CompoundTag$Type): void
public "getGroupsReadOnly"(): $List<($DogGroupsManager$DogGroup)>
public "isGroup"(arg0: $DogGroupsManager$DogGroup$Type): boolean
get "groupsReadOnly"(): $List<($DogGroupsManager$DogGroup)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogGroupsManager$Type = ($DogGroupsManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogGroupsManager_ = $DogGroupsManager$Type;
}}
declare module "packages/doggytalents/common/entity/anim/$DogAnimation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogAnimation extends $Enum<($DogAnimation)> {
static readonly "NONE": $DogAnimation
static readonly "STRETCH": $DogAnimation
static readonly "FAINT": $DogAnimation
static readonly "SIT_DOWN": $DogAnimation
static readonly "STAND_UP": $DogAnimation
static readonly "FAINT_2": $DogAnimation
static readonly "LYING_DOWN": $DogAnimation
static readonly "STAND_QUICK": $DogAnimation
static readonly "DROWN": $DogAnimation
static readonly "HURT_1": $DogAnimation
static readonly "HURT_2": $DogAnimation
static readonly "FAINT_STAND_1": $DogAnimation
static readonly "FAINT_STAND_2": $DogAnimation
static readonly "BACKFLIP": $DogAnimation
static readonly "PROTEST": $DogAnimation
static readonly "STAND_IDLE_2": $DogAnimation
static readonly "DIG": $DogAnimation
static readonly "SIT_IDLE": $DogAnimation
static readonly "SCRATCHIE": $DogAnimation
static readonly "CHOPIN_TAIL": $DogAnimation
static readonly "BELLY_RUB": $DogAnimation
static readonly "SIT_IDLE_2": $DogAnimation
static readonly "HOWL": $DogAnimation
static readonly "LIE_DOWN_IDLE": $DogAnimation
static readonly "SIT_TO_REST": $DogAnimation
static readonly "REST_IDLE": $DogAnimation
static readonly "REST_TO_SIT": $DogAnimation
static readonly "FLY_JUMP_START": $DogAnimation
static readonly "FLY_AIR_BOURNE": $DogAnimation
static readonly "FLY_LANDING": $DogAnimation
static readonly "TOUCH_RETREAT": $DogAnimation
static readonly "SNIFF_HOT": $DogAnimation
static readonly "SNIFF_NEUTRAL": $DogAnimation
static readonly "SNIFF_SNEEZE": $DogAnimation
static readonly "STOP_DROP_ROLL": $DogAnimation
static readonly "TOUCHY_TOUCH": $DogAnimation
static readonly "DOWN_THE_HOLE": $DogAnimation


public static "values"(): ($DogAnimation)[]
public static "valueOf"(arg0: string): $DogAnimation
public "getId"(): integer
public static "byId"(arg0: integer): $DogAnimation
public "freeTail"(): boolean
public "getLengthTicks"(): integer
public "getSpeedModifier"(): float
public "looping"(): boolean
public "freeHead"(): boolean
get "id"(): integer
get "lengthTicks"(): integer
get "speedModifier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogAnimation$Type = (("dig") | ("faint_stand_2") | ("rest_idle") | ("faint_stand_1") | ("down_the_hole") | ("none") | ("drown") | ("sniff_sneeze") | ("stretch") | ("sit_down") | ("stand_up") | ("hurt_2") | ("belly_rub") | ("faint") | ("hurt_1") | ("stand_idle_2") | ("sit_idle_2") | ("fly_air_bourne") | ("touch_retreat") | ("lying_down") | ("sit_idle") | ("backflip") | ("rest_to_sit") | ("stand_quick") | ("stop_drop_roll") | ("protest") | ("howl") | ("fly_landing") | ("sit_to_rest") | ("chopin_tail") | ("sniff_neutral") | ("touchy_touch") | ("fly_jump_start") | ("scratchie") | ("lie_down_idle") | ("sniff_hot") | ("faint_2")) | ($DogAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogAnimation_ = $DogAnimation$Type;
}}
declare module "packages/doggytalents/common/item/$DyeableAccessoryItem" {
import {$IDyeableArmorItem, $IDyeableArmorItem$Type} from "packages/doggytalents/common/item/$IDyeableArmorItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DyeableAccessoryItem extends $AccessoryItem implements $IDyeableArmorItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "createInstance"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Player$Type): $AccessoryInstance
public "getColor"(arg0: $ItemStack$Type): integer
public "getDefaultColor"(arg0: $ItemStack$Type): integer
public static "dyeArmor"(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
public "setColor"(arg0: $ItemStack$Type, arg1: integer): void
public "clearColor"(arg0: $ItemStack$Type): void
public "hasCustomColor"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeableAccessoryItem$Type = ($DyeableAccessoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DyeableAccessoryItem_ = $DyeableAccessoryItem$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$ModeSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$EnumMode, $EnumMode$Type} from "packages/doggytalents/api/feature/$EnumMode"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $ModeSerializer implements $EntityDataSerializer<($EnumMode)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $EnumMode$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $EnumMode
public "copy"(arg0: $EnumMode$Type): $EnumMode
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($EnumMode$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($EnumMode$Type)>): $EntityDataSerializer<($EnumMode)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($EnumMode$Type)>): $EntityDataSerializer<($EnumMode)>
public static "simpleId"<T>(arg0: $IdMap$Type<($EnumMode$Type)>): $EntityDataSerializer<($EnumMode)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($EnumMode$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($EnumMode$Type)>): $EntityDataSerializer<($Optional<($EnumMode)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($EnumMode)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModeSerializer$Type = ($ModeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModeSerializer_ = $ModeSerializer$Type;
}}
declare module "packages/doggytalents/common/item/$SnorkelAccessoryItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SnorkelAccessoryItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnorkelAccessoryItem$Type = ($SnorkelAccessoryItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SnorkelAccessoryItem_ = $SnorkelAccessoryItem$Type;
}}
declare module "packages/doggytalents/common/item/$HeadBandItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $HeadBandItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeadBandItem$Type = ($HeadBandItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeadBandItem_ = $HeadBandItem$Type;
}}
declare module "packages/doggytalents/common/item/$WhistleItem$WhistleSound" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $WhistleItem$WhistleSound extends $Enum<($WhistleItem$WhistleSound)> {
static readonly "NONE": $WhistleItem$WhistleSound
static readonly "SHORT": $WhistleItem$WhistleSound
static readonly "LONG": $WhistleItem$WhistleSound


public static "values"(): ($WhistleItem$WhistleSound)[]
public static "valueOf"(arg0: string): $WhistleItem$WhistleSound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhistleItem$WhistleSound$Type = (("short") | ("none") | ("long")) | ($WhistleItem$WhistleSound);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhistleItem$WhistleSound_ = $WhistleItem$WhistleSound$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$BedLocationsSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$DimensionDependantArg, $DimensionDependantArg$Type} from "packages/doggytalents/common/entity/serializers/$DimensionDependantArg"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $BedLocationsSerializer<D, T extends $EntityDataSerializer<(D)>> implements $EntityDataSerializer<($DimensionDependantArg<(D)>)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $DimensionDependantArg$Type<(D)>): void
public "read"(arg0: $FriendlyByteBuf$Type): $DimensionDependantArg<(D)>
public "copy"(arg0: $DimensionDependantArg$Type<(D)>): $DimensionDependantArg<(D)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DimensionDependantArg$Type<(D)>)>, arg1: $FriendlyByteBuf$Reader$Type<($DimensionDependantArg$Type<(D)>)>): $EntityDataSerializer<($DimensionDependantArg<(D)>)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($DimensionDependantArg$Type<(D)>)>): $EntityDataSerializer<($DimensionDependantArg<(D)>)>
public static "simpleId"<T>(arg0: $IdMap$Type<($DimensionDependantArg$Type<(D)>)>): $EntityDataSerializer<($DimensionDependantArg<(D)>)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DimensionDependantArg$Type<(D)>)>, arg1: $FriendlyByteBuf$Reader$Type<($DimensionDependantArg$Type<(D)>)>): $EntityDataSerializer<($Optional<($DimensionDependantArg<(D)>)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($DimensionDependantArg<(D)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BedLocationsSerializer$Type<D, T> = ($BedLocationsSerializer<(D), (T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BedLocationsSerializer_<D, T> = $BedLocationsSerializer$Type<(D), (T)>;
}}
declare module "packages/doggytalents/common/entity/$Dog" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$DogIncapacitatedMananger$IncapacitatedSyncState, $DogIncapacitatedMananger$IncapacitatedSyncState$Type} from "packages/doggytalents/common/entity/$DogIncapacitatedMananger$IncapacitatedSyncState"
import {$IDogFoodHandler, $IDogFoodHandler$Type} from "packages/doggytalents/api/inferface/$IDogFoodHandler"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$IDogAlteration, $IDogAlteration$Type} from "packages/doggytalents/api/inferface/$IDogAlteration"
import {$AccessoryType, $AccessoryType$Type} from "packages/doggytalents/api/registry/$AccessoryType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$MoveControl, $MoveControl$Type} from "packages/net/minecraft/world/entity/ai/control/$MoveControl"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"
import {$DogSkin, $DogSkin$Type} from "packages/doggytalents/client/entity/skin/$DogSkin"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$DataKey, $DataKey$Type} from "packages/doggytalents/api/feature/$DataKey"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$DogSize, $DogSize$Type} from "packages/doggytalents/api/feature/$DogSize"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$DogIncapacitatedMananger, $DogIncapacitatedMananger$Type} from "packages/doggytalents/common/entity/$DogIncapacitatedMananger"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$DogLevel$Type, $DogLevel$Type$Type} from "packages/doggytalents/api/feature/$DogLevel$Type"
import {$Animal, $Animal$Type} from "packages/net/minecraft/world/entity/animal/$Animal"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$DogSkinData, $DogSkinData$Type} from "packages/doggytalents/common/entity/texture/$DogSkinData"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$TalentInstance, $TalentInstance$Type} from "packages/doggytalents/api/registry/$TalentInstance"
import {$DogGroupsManager, $DogGroupsManager$Type} from "packages/doggytalents/common/entity/$DogGroupsManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$DogPose, $DogPose$Type} from "packages/doggytalents/common/entity/anim/$DogPose"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$KnockBackModifier, $KnockBackModifier$Type} from "packages/com/tacz/guns/api/entity/$KnockBackModifier"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$DogAnimation, $DogAnimation$Type} from "packages/doggytalents/common/entity/anim/$DogAnimation"
import {$DogLevel, $DogLevel$Type} from "packages/doggytalents/api/feature/$DogLevel"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$TriggerableAction, $TriggerableAction$Type} from "packages/doggytalents/common/entity/ai/triggerable/$TriggerableAction"
import {$Dog$CombatReturnStrategy, $Dog$CombatReturnStrategy$Type} from "packages/doggytalents/common/entity/$Dog$CombatReturnStrategy"
import {$AgeableMob, $AgeableMob$Type} from "packages/net/minecraft/world/entity/$AgeableMob"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$DogAnimationManager, $DogAnimationManager$Type} from "packages/doggytalents/common/entity/anim/$DogAnimationManager"
import {$AnimationAction, $AnimationAction$Type} from "packages/doggytalents/common/entity/ai/triggerable/$AnimationAction"
import {$JumpControl, $JumpControl$Type} from "packages/net/minecraft/world/entity/ai/control/$JumpControl"
import {$DogMiningCautiousManager, $DogMiningCautiousManager$Type} from "packages/doggytalents/common/entity/$DogMiningCautiousManager"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$IThrowableItem, $IThrowableItem$Type} from "packages/doggytalents/api/inferface/$IThrowableItem"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$Function, $Function$Type} from "packages/com/google/common/base/$Function"
import {$LookControl, $LookControl$Type} from "packages/net/minecraft/world/entity/ai/control/$LookControl"
import {$GoalSelector, $GoalSelector$Type} from "packages/net/minecraft/world/entity/ai/goal/$GoalSelector"
import {$StatsTracker, $StatsTracker$Type} from "packages/doggytalents/common/entity/stats/$StatsTracker"
import {$Accessory, $Accessory$Type} from "packages/doggytalents/api/registry/$Accessory"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ITeleporter, $ITeleporter$Type} from "packages/net/minecraftforge/common/util/$ITeleporter"
import {$DogOwnerDistanceManager, $DogOwnerDistanceManager$Type} from "packages/doggytalents/common/entity/$DogOwnerDistanceManager"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$EnumGender, $EnumGender$Type} from "packages/doggytalents/api/feature/$EnumGender"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Talent, $Talent$Type} from "packages/doggytalents/api/registry/$Talent"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EnumMode, $EnumMode$Type} from "packages/doggytalents/api/feature/$EnumMode"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Dog$LowHealthStrategy, $Dog$LowHealthStrategy$Type} from "packages/doggytalents/common/entity/$Dog$LowHealthStrategy"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$DoggyArtifactItem, $DoggyArtifactItem$Type} from "packages/doggytalents/common/item/$DoggyArtifactItem"

export class $Dog extends $AbstractDog {
readonly "animationManager": $DogAnimationManager
readonly "objects": $Map<(integer), (any)>
readonly "statsTracker": $StatsTracker
readonly "dogOwnerDistanceManager": $DogOwnerDistanceManager
readonly "dogMiningCautiousManager": $DogMiningCautiousManager
readonly "dogGroupsManager": $DogGroupsManager
readonly "incapacitatedMananger": $DogIncapacitatedMananger
 "lastOrderedToSitTick": integer
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

constructor(arg0: $EntityType$Type<(any)>, arg1: $Level$Type)

public "setLevel"(arg0: $DogLevel$Type): void
public "getData"<T>(arg0: $DataKey$Type<(T)>): T
public "setMode"(arg0: $EnumMode$Type): void
public "getMode"(): $EnumMode
public "triggerAction"(arg0: $TriggerableAction$Type): boolean
public "setData"<T>(arg0: $DataKey$Type<(T)>, arg1: T): void
public "hasData"<T>(arg0: $DataKey$Type<(T)>): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "isPickable"(): boolean
public "skipAttackInteraction"(arg0: $Entity$Type): boolean
public "getMyRidingOffset"(): double
public "setSecondsOnFire"(arg0: integer): void
public "remove"(arg0: $Entity$RemovalReason$Type): void
public "travel"(arg0: $Vec3$Type): void
public "causeFallDamage"(arg0: float, arg1: float, arg2: $DamageSource$Type): boolean
public "playStepSound"(arg0: $BlockPos$Type, arg1: $BlockState$Type): void
public "shouldShowName"(): boolean
public "onEquipItem"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type, arg2: $ItemStack$Type): void
public "getDimensions"(arg0: $Pose$Type): $EntityDimensions
public "setOwnerUUID"(arg0: $UUID$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "canCollideWith"(arg0: $Entity$Type): boolean
public "getPassengersRidingOffset"(): double
public "dismountsUnderwater"(): boolean
public "changeDimension"(arg0: $ServerLevel$Type, arg1: $ITeleporter$Type): $Entity
public "getMaxFallDistance"(): integer
public "ignoreExplosion"(): boolean
public "getLeashOffset"(): $Vec3
public "doEnchantDamageEffects"(arg0: $LivingEntity$Type, arg1: $Entity$Type): void
public "triggerActionDelayed"(arg0: integer, arg1: $TriggerableAction$Type): boolean
public "clearTriggerableAction"(): void
public "readyForNonTrivialAction"(): boolean
public "getTranslationKey"(arg0: $Function$Type<($EnumGender$Type), (string)>): $MutableComponent
public "getGroups"(): $DogGroupsManager
public "attack"(arg0: $DamageSource$Type, arg1: float): boolean
public "getGender"(): $EnumGender
public "setGender"(arg0: $EnumGender$Type): void
public "isBusy"(): boolean
public "maxHealth"(): void
public "setAnim"(arg0: $DogAnimation$Type): void
public "getAnim"(): $DogAnimation
public "setBedPos"(arg0: $BlockPos$Type): void
public "setBedPos"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $BlockPos$Type): void
public "setBedPos"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $Optional$Type<($BlockPos$Type)>): void
public "willObeyOthers"(): boolean
public "canInteract"(arg0: $LivingEntity$Type): boolean
public "canJump"(): boolean
public "isPushable"(): boolean
public "onSyncedDataUpdated"(arg0: $EntityDataAccessor$Type<(any)>): void
public "invalidateCaps"(): void
public "startRiding"(arg0: $Entity$Type): boolean
public "onRemovedFromWorld"(): void
public "canRiderInteract"(): boolean
public "canTrample"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: float): boolean
public "onAddedToWorld"(): void
public "isPushedByFluid"(arg0: $FluidType$Type): boolean
public "getBreedOffspring"(arg0: $ServerLevel$Type, arg1: $AgeableMob$Type): $AgeableMob
public "isFood"(arg0: $ItemStack$Type): boolean
public "canMate"(arg0: $Animal$Type): boolean
public "mobInteract"(arg0: $Player$Type, arg1: $InteractionHand$Type): $InteractionResult
public "canBeSeenAsEnemy"(): boolean
public "getPickedResult"(arg0: $HitResult$Type): $ItemStack
public "setBegging"(arg0: boolean): void
public "isBegging"(): boolean
public "setUUID"(arg0: $UUID$Type): void
public "tick"(): void
public "handleEntityEvent"(arg0: byte): void
public "heal"(arg0: float): void
public "stopRiding"(): void
public "aiStep"(): void
public "die"(arg0: $DamageSource$Type): void
public "dropEquipment"(): void
public "readAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "addAdditionalSaveData"(arg0: $CompoundTag$Type): void
public "isInvulnerableTo"(arg0: $DamageSource$Type): boolean
public "canAttackType"(arg0: $EntityType$Type<(any)>): boolean
public "fireImmune"(): boolean
public "canBreatheUnderwater"(): boolean
public "getScale"(): float
public "isBaby"(): boolean
public "canBeAffected"(arg0: $MobEffectInstance$Type): boolean
public "isInvulnerable"(): boolean
public "canAttack"(arg0: $LivingEntity$Type): boolean
public "getSoundVolume"(): float
public "isDamageSourceBlocked"(arg0: $DamageSource$Type): boolean
public "push"(arg0: $Entity$Type): void
public "getDismountLocationForPassenger"(arg0: $LivingEntity$Type): $Vec3
public "canStandOnFluid"(arg0: $FluidState$Type): boolean
public "getFluidJumpThreshold"(): double
public "getControllingPassenger"(): $LivingEntity
public "doHurtTarget"(arg0: $Entity$Type): boolean
public "addAccessory"(arg0: $AccessoryInstance$Type): boolean
public "setDogHunger"(arg0: float): void
public "getMaxHunger"(): float
public "canSwimUnderwater"(): boolean
public "setChopinTailFor"(arg0: integer): void
public "getDogLevel"(arg0: $Talent$Type): integer
public "getDogLevel"(): $DogLevel
public "isMode"(...arg0: ($EnumMode$Type)[]): boolean
public "hasBone"(): boolean
public "setDogSize"(arg0: $DogSize$Type): void
public "increaseLevel"(arg0: $DogLevel$Type$Type): void
public "getDogSize"(): $DogSize
public "getDogHunger"(): float
public "getBowlPos"(): $Optional<($BlockPos)>
public "getBowlPos"(arg0: $ResourceKey$Type<($Level$Type)>): $Optional<($BlockPos)>
public "setBowlPos"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $Optional$Type<($BlockPos$Type)>): void
public "setBowlPos"(arg0: $BlockPos$Type): void
public "setBowlPos"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $BlockPos$Type): void
public "setDogSwimming"(arg0: boolean): void
public "resetNavigation"(): void
public "setNavigation"(arg0: $PathNavigation$Type): void
public "resetMoveControl"(): void
public "isDogFlying"(): boolean
public "setDogFlying"(arg0: boolean): void
public "isDogLowHealth"(): boolean
public "canStillEat"(): boolean
public "untame"(): void
public "addHunger"(arg0: float): void
public "removeAccessories"(): $List<($AccessoryInstance)>
public "getWagAngle"(arg0: float, arg1: float, arg2: float): float
public "getAccessories"(): $List<($AccessoryInstance)>
public "getShakeAngle"(arg0: float, arg1: float): float
public "getInterestedAngle"(arg0: float): float
public "setResting"(arg0: boolean): void
public "setDataIfEmpty"<T>(arg0: $DataKey$Type<(T)>, arg1: T): void
public static "initDataParameters"(): void
public "setTame"(arg0: boolean): void
public "tame"(arg0: $Player$Type): void
public "setInSittingPose"(arg0: boolean): void
public "wantsToAttack"(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type): boolean
public "getClientAnimatedYBodyRotInRadians"(): float
public "getDefaultNavigation"(): $PathNavigation
public "getDogVisualBbWidth"(): float
public "getDefaultMoveControl"(): $MoveControl
public "getDogVisualBbHeight"(): float
public "setLowHealthStrategy"(arg0: $Dog$LowHealthStrategy$Type): void
public "dogCheckAndRidePlayer"(arg0: $Player$Type, arg1: $ItemStack$Type): $InteractionResult
public "recalculateAlterations"(): void
public "requireRidingAuthorization"(arg0: $Entity$Type): boolean
public "setStashedTriggerableAction"(arg0: $TriggerableAction$Type): void
public "startShakingAndBroadcast"(arg0: boolean): void
public "setCanPlayersAttack"(arg0: boolean): void
public "triggerAnimationAction"(arg0: $AnimationAction$Type): void
public "setRegardTeamPlayers"(arg0: boolean): void
public "canContinueDoIdileAnim"(): boolean
public "resetBeggingRotation"(): void
public "setPatrolTargetLock"(arg0: boolean): void
public "isOnSwitchNavCooldown"(): boolean
public "getCombatReturnStrategy"(): $Dog$CombatReturnStrategy
public "hasDelayedActionStart"(): boolean
public "checkIfAttackedFromOwnerOrTeam"(arg0: $LivingEntity$Type, arg1: $Entity$Type): boolean
public "getLowHealthStrategy"(): $Dog$LowHealthStrategy
public "getStashedTriggerableAction"(): $TriggerableAction
public "setCombatReturnStrategy"(arg0: $Dog$CombatReturnStrategy$Type): void
public "getTriggerableAction"(): $TriggerableAction
public "modifyListSyncedData"<T>(arg0: $EntityDataAccessor$Type<($List$Type<(T)>)>, arg1: $Consumer$Type<($List$Type<(T)>)>): void
public "getTimeDogIsShaking"(): float
public "getMouthItemForRender"(): $Optional<($ItemStack)>
public "getMaxIncapacitatedHunger"(): integer
public "getBlockPathTypeViaAlterations"(arg0: $BlockPos$Type): $BlockPathTypes
public "getClientSortedAccessories"(): $List<($AccessoryInstance)>
public "howl"(): void
public "getBedPos"(arg0: $ResourceKey$Type<($Level$Type)>): $Optional<($BlockPos)>
public "getBedPos"(): $Optional<($BlockPos)>
public "getTalent"(arg0: $Talent$Type): $Optional<($TalentInstance)>
public "authorizeRiding"(): void
public "getMaxHeadXRot"(): integer
public "canBeLeashed"(arg0: $Player$Type): boolean
public "getDataOrGet"<T>(arg0: $DataKey$Type<(T)>, arg1: $Supplier$Type<(T)>): T
public "getDataOrDefault"<T>(arg0: $DataKey$Type<(T)>, arg1: T): T
public "isDogSwimming"(): boolean
public "isProtesting"(): boolean
public "isLowHunger"(): boolean
public "isDogCurious"(): boolean
public "resetTickTillRest"(): void
public "updateDogPose"(): void
public "canDogDoShakeAnim"(): boolean
public "canDoIdileAnim"(): boolean
public "setAnimForIdle"(arg0: $DogAnimation$Type): void
public "isDogWet"(): boolean
public "getRealDimensions"(): $EntityDimensions
public "getDogPose"(): $DogPose
public "setOwnersName"(arg0: $Component$Type): void
public "setOwnersName"(arg0: $Optional$Type<($Component$Type)>): void
public "getTailRotation"(): float
public "canDogDoBegAnim"(): boolean
public "getShadingWhileWet"(arg0: float): float
public "resting"(): boolean
public "forceSit"(): boolean
public "getClientSkin"(): $DogSkin
public "canOwnerAttack"(): boolean
public "dogAutoMount"(): boolean
public "setProtesting"(arg0: boolean): void
public "isRidingAuthorized"(): boolean
public "setStandAnim"(arg0: $DogAnimation$Type): void
public "isShakingLava"(): boolean
public "startShakingLava"(): void
public "getTalentMap"(): $List<($TalentInstance)>
public "getArtifactsList"(): $List<($DoggyArtifactItem)>
public "getSkinData"(): $DogSkinData
public "patrolTargetLock"(): boolean
public "crossOriginTp"(): boolean
public "hideArmor"(): boolean
public "getBoneVariant"(): $ItemStack
public "getOwnersName"(): $Optional<($Component)>
public "regardTeamPlayers"(): boolean
public "setIncapSyncState"(arg0: $DogIncapacitatedMananger$IncapacitatedSyncState$Type): void
public "setBoneVariant"(arg0: $ItemStack$Type): void
public "setDogSkinData"(arg0: $DogSkinData$Type): void
public "setCrossOriginTp"(arg0: boolean): void
public "setWillObeyOthers"(arg0: boolean): void
public "setHideArmor"(arg0: boolean): void
public "setForceSit"(arg0: boolean): void
public "modifyAccessory"(arg0: $Consumer$Type<($List$Type<($AccessoryInstance$Type)>)>): void
public "isWanderResting"(): boolean
public "setClientSkin"(arg0: $DogSkin$Type): void
public "getAccessory"(arg0: $AccessoryType$Type): $Optional<($AccessoryInstance)>
public "getAccessory"(arg0: $Accessory$Type): $Optional<($AccessoryInstance)>
public "updateLowHunger"(): void
public "getIncapSyncState"(): $DogIncapacitatedMananger$IncapacitatedSyncState
public "setDogAutoMount"(arg0: boolean): void
public "setTalentLevel"(arg0: $Talent$Type, arg1: integer): $InteractionResult
public "setTalentMap"(arg0: $List$Type<($TalentInstance$Type)>): void
public "modifyTalent"(arg0: $Consumer$Type<($List$Type<($TalentInstance$Type)>)>): void
public "hasCustomSkin"(): boolean
public "getThrowableItem"(): $IThrowableItem
public "forceSyncTalents"(): void
public "addArtifact"(arg0: $DoggyArtifactItem$Type): boolean
public "modifyArtifact"(arg0: $Consumer$Type<($List$Type<($DoggyArtifactItem$Type)>)>): void
public "removeArtifact"(arg0: integer): $ItemStack
public "wantsToRest"(): boolean
public "getSpendablePoints"(): integer
public "isDogJumping"(): boolean
public "migrateOwner"(arg0: $UUID$Type): void
public "modifySyncedData"<T>(arg0: $EntityDataAccessor$Type<(T)>, arg1: $Consumer$Type<(T)>, arg2: $Function$Type<(T), (T)>): void
public "setDogJumping"(arg0: boolean): void
public "canSpendPoints"(arg0: integer): boolean
public "setJumpPower"(arg0: integer): void
public "addMovementStat"(arg0: double, arg1: double, arg2: double): void
public "canDogFly"(): boolean
public "setSitAnim"(arg0: $DogAnimation$Type): void
public "getAlterations"(): $List<($IDogAlteration)>
public "getSitAnim"(): $DogAnimation
public "isChopinTail"(): boolean
public "isLowAirSupply"(): boolean
public "setDogCurious"(arg0: boolean): void
public "getStandAnim"(): $DogAnimation
public "isMiningCautious"(): boolean
public "getStatTracker"(): $StatsTracker
public "isLying"(): boolean
public "getFoodHandlers"(): $List<($IDogFoodHandler)>
public "getUrgentSpeedModifier"(): float
public "canaryOnEquipmentChanged"(): void
public "getCachedFeetBlockState"(): $BlockState
public static "fromLivingEntity"(arg0: $LivingEntity$Type): $KnockBackModifier
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
set "level"(value: $DogLevel$Type)
set "mode"(value: $EnumMode$Type)
get "mode"(): $EnumMode
get "pickable"(): boolean
get "myRidingOffset"(): double
set "secondsOnFire"(value: integer)
set "ownerUUID"(value: $UUID$Type)
get "passengersRidingOffset"(): double
get "maxFallDistance"(): integer
get "leashOffset"(): $Vec3
get "groups"(): $DogGroupsManager
get "gender"(): $EnumGender
set "gender"(value: $EnumGender$Type)
get "busy"(): boolean
set "anim"(value: $DogAnimation$Type)
get "anim"(): $DogAnimation
set "bedPos"(value: $BlockPos$Type)
get "pushable"(): boolean
set "begging"(value: boolean)
get "begging"(): boolean
set "uUID"(value: $UUID$Type)
get "scale"(): float
get "baby"(): boolean
get "invulnerable"(): boolean
get "soundVolume"(): float
get "fluidJumpThreshold"(): double
get "controllingPassenger"(): $LivingEntity
set "dogHunger"(value: float)
get "maxHunger"(): float
set "chopinTailFor"(value: integer)
get "dogLevel"(): $DogLevel
set "dogSize"(value: $DogSize$Type)
get "dogSize"(): $DogSize
get "dogHunger"(): float
get "bowlPos"(): $Optional<($BlockPos)>
set "bowlPos"(value: $BlockPos$Type)
set "dogSwimming"(value: boolean)
set "navigation"(value: $PathNavigation$Type)
get "dogFlying"(): boolean
set "dogFlying"(value: boolean)
get "dogLowHealth"(): boolean
get "accessories"(): $List<($AccessoryInstance)>
set "inSittingPose"(value: boolean)
get "clientAnimatedYBodyRotInRadians"(): float
get "defaultNavigation"(): $PathNavigation
get "dogVisualBbWidth"(): float
get "defaultMoveControl"(): $MoveControl
get "dogVisualBbHeight"(): float
set "lowHealthStrategy"(value: $Dog$LowHealthStrategy$Type)
set "stashedTriggerableAction"(value: $TriggerableAction$Type)
set "canPlayersAttack"(value: boolean)
get "onSwitchNavCooldown"(): boolean
get "combatReturnStrategy"(): $Dog$CombatReturnStrategy
get "lowHealthStrategy"(): $Dog$LowHealthStrategy
get "stashedTriggerableAction"(): $TriggerableAction
set "combatReturnStrategy"(value: $Dog$CombatReturnStrategy$Type)
get "triggerableAction"(): $TriggerableAction
get "timeDogIsShaking"(): float
get "mouthItemForRender"(): $Optional<($ItemStack)>
get "maxIncapacitatedHunger"(): integer
get "clientSortedAccessories"(): $List<($AccessoryInstance)>
get "bedPos"(): $Optional<($BlockPos)>
get "maxHeadXRot"(): integer
get "dogSwimming"(): boolean
get "protesting"(): boolean
get "lowHunger"(): boolean
get "dogCurious"(): boolean
set "animForIdle"(value: $DogAnimation$Type)
get "dogWet"(): boolean
get "realDimensions"(): $EntityDimensions
get "dogPose"(): $DogPose
set "ownersName"(value: $Component$Type)
set "ownersName"(value: $Optional$Type<($Component$Type)>)
get "tailRotation"(): float
get "clientSkin"(): $DogSkin
set "protesting"(value: boolean)
get "ridingAuthorized"(): boolean
set "standAnim"(value: $DogAnimation$Type)
get "shakingLava"(): boolean
get "talentMap"(): $List<($TalentInstance)>
get "artifactsList"(): $List<($DoggyArtifactItem)>
get "skinData"(): $DogSkinData
get "boneVariant"(): $ItemStack
get "ownersName"(): $Optional<($Component)>
set "incapSyncState"(value: $DogIncapacitatedMananger$IncapacitatedSyncState$Type)
set "boneVariant"(value: $ItemStack$Type)
set "dogSkinData"(value: $DogSkinData$Type)
get "wanderResting"(): boolean
set "clientSkin"(value: $DogSkin$Type)
get "incapSyncState"(): $DogIncapacitatedMananger$IncapacitatedSyncState
set "talentMap"(value: $List$Type<($TalentInstance$Type)>)
get "throwableItem"(): $IThrowableItem
get "spendablePoints"(): integer
get "dogJumping"(): boolean
set "dogJumping"(value: boolean)
set "jumpPower"(value: integer)
set "sitAnim"(value: $DogAnimation$Type)
get "alterations"(): $List<($IDogAlteration)>
get "sitAnim"(): $DogAnimation
get "chopinTail"(): boolean
get "lowAirSupply"(): boolean
set "dogCurious"(value: boolean)
get "standAnim"(): $DogAnimation
get "miningCautious"(): boolean
get "statTracker"(): $StatsTracker
get "lying"(): boolean
get "foodHandlers"(): $List<($IDogFoodHandler)>
get "urgentSpeedModifier"(): float
get "cachedFeetBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dog$Type = ($Dog);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dog_ = $Dog$Type;
}}
declare module "packages/doggytalents/common/item/$LocatorOrbItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AccessoryItem, $AccessoryItem$Type} from "packages/doggytalents/common/item/$AccessoryItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $LocatorOrbItem extends $AccessoryItem {
 "type": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocatorOrbItem$Type = ($LocatorOrbItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LocatorOrbItem_ = $LocatorOrbItem$Type;
}}
declare module "packages/doggytalents/common/item/$TreatBagItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IDogFoodHandler, $IDogFoodHandler$Type} from "packages/doggytalents/api/inferface/$IDogFoodHandler"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
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
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TreatBagItem extends $Item implements $IDogFoodHandler {
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

public "consume"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFood"(arg0: $ItemStack$Type): boolean
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "canConsume"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreatBagItem$Type = ($TreatBagItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreatBagItem_ = $TreatBagItem$Type;
}}
declare module "packages/doggytalents/common/item/$IDyeableArmorItem" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$DyeItem, $DyeItem$Type} from "packages/net/minecraft/world/item/$DyeItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DyeableLeatherItem, $DyeableLeatherItem$Type} from "packages/net/minecraft/world/item/$DyeableLeatherItem"

export interface $IDyeableArmorItem extends $DyeableLeatherItem {

 "getColor"(arg0: $ItemStack$Type): integer
 "getDefaultColor"(arg0: $ItemStack$Type): integer
 "setColor"(arg0: $ItemStack$Type, arg1: integer): void
 "clearColor"(arg0: $ItemStack$Type): void
 "hasCustomColor"(arg0: $ItemStack$Type): boolean
}

export namespace $IDyeableArmorItem {
function dyeArmor(arg0: $ItemStack$Type, arg1: $List$Type<($DyeItem$Type)>): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDyeableArmorItem$Type = ($IDyeableArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDyeableArmorItem_ = $IDyeableArmorItem$Type;
}}
declare module "packages/doggytalents/common/item/$ConductingBoneItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConductingBoneItem extends $Item {
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
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConductingBoneItem$Type = ($ConductingBoneItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConductingBoneItem_ = $ConductingBoneItem$Type;
}}
declare module "packages/doggytalents/common/item/$DoggyCharmItem" {
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

export class $DoggyCharmItem extends $Item {
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
export type $DoggyCharmItem$Type = ($DoggyCharmItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DoggyCharmItem_ = $DoggyCharmItem$Type;
}}
declare module "packages/doggytalents/common/block/$FoodBowlBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $FoodBowlBlock extends $BaseEntityBlock {
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

constructor()

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodBowlBlock$Type = ($FoodBowlBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FoodBowlBlock_ = $FoodBowlBlock$Type;
}}
declare module "packages/doggytalents/common/item/$EnergizerStick" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IDogFoodHandler, $IDogFoodHandler$Type} from "packages/doggytalents/api/inferface/$IDogFoodHandler"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnergizerStick extends $Item implements $IDogFoodHandler {
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

public "consume"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): $InteractionResult
public "isFood"(arg0: $ItemStack$Type): boolean
public "canConsume"(arg0: $AbstractDog$Type, arg1: $ItemStack$Type, arg2: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergizerStick$Type = ($EnergizerStick);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergizerStick_ = $EnergizerStick$Type;
}}
declare module "packages/doggytalents/common/item/$ThrowableItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IThrowableItem, $IThrowableItem$Type} from "packages/doggytalents/api/inferface/$IThrowableItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ThrowableItem extends $Item implements $IThrowableItem {
 "altBone": $Supplier<(any)>
 "renderBone": $Supplier<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getReturnStack"(arg0: $ItemStack$Type): $ItemStack
public "getCustomRenderStack"(arg0: $ItemStack$Type): $ItemStack
public "setHeadingFromThrower"(arg0: $ItemEntity$Type, arg1: $Entity$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float): void
public "setThrowableHeading"(arg0: $ItemEntity$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThrowableItem$Type = ($ThrowableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ThrowableItem_ = $ThrowableItem$Type;
}}
declare module "packages/doggytalents/common/item/$WhistleItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractDog, $AbstractDog$Type} from "packages/doggytalents/api/inferface/$AbstractDog"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$WhistleItem$WhistleMode, $WhistleItem$WhistleMode$Type} from "packages/doggytalents/common/item/$WhistleItem$WhistleMode"
import {$IDogItem, $IDogItem$Type} from "packages/doggytalents/api/inferface/$IDogItem"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $WhistleItem extends $Item implements $IDogItem {
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
public "getDescriptionId"(arg0: $ItemStack$Type): string
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "processInteract"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
public "useMode"(arg0: $WhistleItem$WhistleMode$Type, arg1: $List$Type<($Dog$Type)>, arg2: $Level$Type, arg3: $Player$Type, arg4: $InteractionHand$Type): void
/**
 * 
 * @deprecated
 */
public "onInteractWithDog"(arg0: $AbstractDog$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WhistleItem$Type = ($WhistleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WhistleItem_ = $WhistleItem$Type;
}}
declare module "packages/doggytalents/common/entity/ai/triggerable/$AnimationAction" {
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"
import {$DogAnimation, $DogAnimation$Type} from "packages/doggytalents/common/entity/anim/$DogAnimation"
import {$TriggerableAction, $TriggerableAction$Type} from "packages/doggytalents/common/entity/ai/triggerable/$TriggerableAction"

export class $AnimationAction extends $TriggerableAction {

constructor(arg0: $Dog$Type, arg1: $DogAnimation$Type)

public "tick"(): void
public "onStart"(): void
public "onStop"(): void
public "blockSitStandAnim"(): boolean
public "blockLook"(): boolean
public "blockMove"(): boolean
public "validateAnim"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimationAction$Type = ($AnimationAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnimationAction_ = $AnimationAction$Type;
}}
declare module "packages/doggytalents/common/item/$DogResizeItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $DogResizeItem$Type extends $Enum<($DogResizeItem$Type)> {
static readonly "TINY": $DogResizeItem$Type
static readonly "BIG": $DogResizeItem$Type


public "getName"(): string
public static "values"(): ($DogResizeItem$Type)[]
public static "valueOf"(arg0: string): $DogResizeItem$Type
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogResizeItem$Type$Type = (("big") | ("tiny")) | ($DogResizeItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogResizeItem$Type_ = $DogResizeItem$Type$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$IncapacitatedSyncSerializer" {
import {$DogIncapacitatedMananger$IncapacitatedSyncState, $DogIncapacitatedMananger$IncapacitatedSyncState$Type} from "packages/doggytalents/common/entity/$DogIncapacitatedMananger$IncapacitatedSyncState"
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $IncapacitatedSyncSerializer implements $EntityDataSerializer<($DogIncapacitatedMananger$IncapacitatedSyncState)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $DogIncapacitatedMananger$IncapacitatedSyncState$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): $DogIncapacitatedMananger$IncapacitatedSyncState
public "copy"(arg0: $DogIncapacitatedMananger$IncapacitatedSyncState$Type): $DogIncapacitatedMananger$IncapacitatedSyncState
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogIncapacitatedMananger$IncapacitatedSyncState$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogIncapacitatedMananger$IncapacitatedSyncState$Type)>): $EntityDataSerializer<($DogIncapacitatedMananger$IncapacitatedSyncState)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($DogIncapacitatedMananger$IncapacitatedSyncState$Type)>): $EntityDataSerializer<($DogIncapacitatedMananger$IncapacitatedSyncState)>
public static "simpleId"<T>(arg0: $IdMap$Type<($DogIncapacitatedMananger$IncapacitatedSyncState$Type)>): $EntityDataSerializer<($DogIncapacitatedMananger$IncapacitatedSyncState)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($DogIncapacitatedMananger$IncapacitatedSyncState$Type)>, arg1: $FriendlyByteBuf$Reader$Type<($DogIncapacitatedMananger$IncapacitatedSyncState$Type)>): $EntityDataSerializer<($Optional<($DogIncapacitatedMananger$IncapacitatedSyncState)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($DogIncapacitatedMananger$IncapacitatedSyncState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IncapacitatedSyncSerializer$Type = ($IncapacitatedSyncSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IncapacitatedSyncSerializer_ = $IncapacitatedSyncSerializer$Type;
}}
declare module "packages/doggytalents/common/entity/serializers/$CollarSerializer" {
import {$FriendlyByteBuf$Reader, $FriendlyByteBuf$Reader$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Reader"
import {$EntityDataSerializer, $EntityDataSerializer$Type} from "packages/net/minecraft/network/syncher/$EntityDataSerializer"
import {$AccessoryInstance, $AccessoryInstance$Type} from "packages/doggytalents/api/registry/$AccessoryInstance"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IdMap, $IdMap$Type} from "packages/net/minecraft/core/$IdMap"
import {$FriendlyByteBuf$Writer, $FriendlyByteBuf$Writer$Type} from "packages/net/minecraft/network/$FriendlyByteBuf$Writer"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"

export class $CollarSerializer implements $EntityDataSerializer<($Optional<($AccessoryInstance)>)> {

constructor()

public "write"(arg0: $FriendlyByteBuf$Type, arg1: $Optional$Type<($AccessoryInstance$Type)>): void
public "read"(arg0: $FriendlyByteBuf$Type): $Optional<($AccessoryInstance)>
public "copy"(arg0: $Optional$Type<($AccessoryInstance$Type)>): $Optional<($AccessoryInstance)>
public static "simple"<T>(arg0: $FriendlyByteBuf$Writer$Type<($Optional$Type<($AccessoryInstance$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($Optional$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($Optional<($AccessoryInstance)>)>
public static "simpleEnum"<T extends $Enum<(T)>>(arg0: $Class$Type<($Optional$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($Optional<($AccessoryInstance)>)>
public static "simpleId"<T>(arg0: $IdMap$Type<($Optional$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($Optional<($AccessoryInstance)>)>
public static "optional"<T>(arg0: $FriendlyByteBuf$Writer$Type<($Optional$Type<($AccessoryInstance$Type)>)>, arg1: $FriendlyByteBuf$Reader$Type<($Optional$Type<($AccessoryInstance$Type)>)>): $EntityDataSerializer<($Optional<($Optional<($AccessoryInstance)>)>)>
public "createAccessor"(arg0: integer): $EntityDataAccessor<($Optional<($AccessoryInstance)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollarSerializer$Type = ($CollarSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CollarSerializer_ = $CollarSerializer$Type;
}}
declare module "packages/doggytalents/common/entity/anim/$DogAnimationManager" {
import {$AnimationState, $AnimationState$Type} from "packages/net/minecraft/world/entity/$AnimationState"
import {$Dog, $Dog$Type} from "packages/doggytalents/common/entity/$Dog"
import {$DogAnimation, $DogAnimation$Type} from "packages/doggytalents/common/entity/anim/$DogAnimation"

export class $DogAnimationManager {
readonly "animationState": $AnimationState
 "needRefresh": boolean

constructor(arg0: $Dog$Type)

public "started"(): boolean
public "tick"(): void
public "onAnimationChange"(arg0: $DogAnimation$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DogAnimationManager$Type = ($DogAnimationManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DogAnimationManager_ = $DogAnimationManager$Type;
}}
