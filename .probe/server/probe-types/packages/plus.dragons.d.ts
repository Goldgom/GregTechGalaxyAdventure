declare module "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IHaveGoggleInformation, $IHaveGoggleInformation$Type} from "packages/com/simibubi/create/content/equipment/goggles/$IHaveGoggleInformation"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$Type} from "packages/com/simibubi/create/foundation/blockEntity/behaviour/$BlockEntityBehaviour"
import {$ItemStackHandler, $ItemStackHandler$Type} from "packages/net/minecraftforge/items/$ItemStackHandler"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IPartialSafeNBT, $IPartialSafeNBT$Type} from "packages/com/simibubi/create/foundation/utility/$IPartialSafeNBT"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlazeBurnerBlockEntity, $BlazeBurnerBlockEntity$Type} from "packages/com/simibubi/create/content/processing/burner/$BlazeBurnerBlockEntity"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"
import {$ItemRequirement, $ItemRequirement$Type} from "packages/com/simibubi/create/content/schematics/requirement/$ItemRequirement"
import {$LerpedFloat, $LerpedFloat$Type} from "packages/com/simibubi/create/foundation/utility/animation/$LerpedFloat"
import {$Vec2, $Vec2$Type} from "packages/net/minecraft/world/phys/$Vec2"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$CampfireCookingRecipe, $CampfireCookingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CampfireCookingRecipe"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"

export class $BlazeStoveBlockEntity extends $BlazeBurnerBlockEntity implements $MenuProvider, $IHaveGoggleInformation, $IPartialSafeNBT {
static readonly "ITEM_OFFSET_NS": ($Vec2)[]
static readonly "ITEM_OFFSET_WE": ($Vec2)[]
static readonly "MAX_HEAT_CAPACITY": integer
static readonly "INSERTION_THRESHOLD": integer
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "initialize"(): void
public "write"(arg0: $CompoundTag$Type, arg1: boolean): void
public "destroy"(): void
public "tick"(): void
public "getRequiredItems"(arg0: $BlockState$Type): $ItemRequirement
public "getDisplayName"(): $Component
public "findRecipe"(arg0: $Container$Type, arg1: integer): $Optional<($CampfireCookingRecipe)>
public "getInventory"(): $ItemStackHandler
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "getBlazeStatusCode"(): integer
public "isValidBlockAbove"(): boolean
public "addBehaviours"(arg0: $List$Type<($BlockEntityBehaviour$Type)>): void
public "writeSafe"(arg0: $CompoundTag$Type): void
public "addToGoggleTooltip"(arg0: $List$Type<($Component$Type)>, arg1: boolean): boolean
public "getNextEmptySlot"(): integer
public "applyCreativeFuel"(): void
public "tryUpdateFuel"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): boolean
public "stillValid"(arg0: $Player$Type): boolean
public "getHeadAngle"(): $LerpedFloat
public "setGuide"(arg0: $ItemStack$Type): void
public "tryAddIngredient"(arg0: $ItemStack$Type, arg1: boolean, arg2: boolean): boolean
public "getGuide"(): $ItemStack
public "addSmokeAtItem"(arg0: integer, arg1: integer): void
public "getHeadAnimation"(): $LerpedFloat
public "isBlockedAbove"(): boolean
public "dropAll"(): void
public "containedFluidTooltip"(arg0: $List$Type<(any)>, arg1: boolean, arg2: $LazyOptional$Type<(any)>): boolean
public "getPurityColor"(arg0: integer): $ChatFormatting
public "shouldCloseCurrentScreen"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "displayName"(): $Component
get "inventory"(): $ItemStackHandler
get "blazeStatusCode"(): integer
get "validBlockAbove"(): boolean
get "nextEmptySlot"(): integer
get "headAngle"(): $LerpedFloat
set "guide"(value: $ItemStack$Type)
get "guide"(): $ItemStack
get "headAnimation"(): $LerpedFloat
get "blockedAbove"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeStoveBlockEntity$Type = ($BlazeStoveBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeStoveBlockEntity_ = $BlazeStoveBlockEntity$Type;
}}
declare module "packages/plus/dragons/createdragonlib/advancement/critereon/$AbstractTrigger$Instance" {
import {$AbstractCriterionTriggerInstance, $AbstractCriterionTriggerInstance$Type} from "packages/net/minecraft/advancements/critereon/$AbstractCriterionTriggerInstance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ContextAwarePredicate, $ContextAwarePredicate$Type} from "packages/net/minecraft/advancements/critereon/$ContextAwarePredicate"

export class $AbstractTrigger$Instance extends $AbstractCriterionTriggerInstance {

constructor(arg0: $ResourceLocation$Type, arg1: $ContextAwarePredicate$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTrigger$Instance$Type = ($AbstractTrigger$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTrigger$Instance_ = $AbstractTrigger$Instance$Type;
}}
declare module "packages/plus/dragons/createdragonlib/advancement/critereon/$AbstractTrigger" {
import {$CriterionTrigger$Listener, $CriterionTrigger$Listener$Type} from "packages/net/minecraft/advancements/$CriterionTrigger$Listener"
import {$PlayerAdvancements, $PlayerAdvancements$Type} from "packages/net/minecraft/server/$PlayerAdvancements"
import {$AbstractTrigger$Instance, $AbstractTrigger$Instance$Type} from "packages/plus/dragons/createdragonlib/advancement/critereon/$AbstractTrigger$Instance"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CriterionTrigger, $CriterionTrigger$Type} from "packages/net/minecraft/advancements/$CriterionTrigger"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/net/minecraft/advancements/critereon/$DeserializationContext"

export class $AbstractTrigger<T extends $AbstractTrigger$Instance> implements $CriterionTrigger<(T)> {

constructor(arg0: $ResourceLocation$Type)

public "getId"(): $ResourceLocation
public "addPlayerListener"(arg0: $PlayerAdvancements$Type, arg1: $CriterionTrigger$Listener$Type<(T)>): void
public "removePlayerListener"(arg0: $PlayerAdvancements$Type, arg1: $CriterionTrigger$Listener$Type<(T)>): void
public "removePlayerListeners"(arg0: $PlayerAdvancements$Type): void
public "createInstance"(arg0: $JsonObject$Type, arg1: $DeserializationContext$Type): T
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTrigger$Type<T> = ($AbstractTrigger<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTrigger_<T> = $AbstractTrigger$Type<(T)>;
}}
declare module "packages/plus/dragons/createdragonlib/mixin/$CreateAdvancementConstructor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CreateAdvancementConstructor {

}

export namespace $CreateAdvancementConstructor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateAdvancementConstructor$Type = ($CreateAdvancementConstructor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateAdvancementConstructor_ = $CreateAdvancementConstructor$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/foundation/item/$ConditionedItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ConfigBase$ConfigBool, $ConfigBase$ConfigBool$Type} from "packages/com/simibubi/create/foundation/config/$ConfigBase$ConfigBool"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConditionedItem extends $Item {
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

constructor(arg0: $Item$Properties$Type, arg1: $ConfigBase$ConfigBool$Type, arg2: string)
constructor(arg0: $Item$Properties$Type, arg1: $ConfigBase$ConfigBool$Type)
constructor(arg0: $Item$Properties$Type, ...arg1: (string)[])
constructor(arg0: $Item$Properties$Type, arg1: string)
constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<(boolean)>)

public "enabled"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionedItem$Type = ($ConditionedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionedItem_ = $ConditionedItem$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/content/logistics/item/guide/cooking/$CookingGuideItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlazeStoveGuideItem, $BlazeStoveGuideItem$Type} from "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveGuideItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$CookingGuide, $CookingGuide$Type} from "packages/plus/dragons/createcentralkitchen/content/logistics/item/guide/cooking/$CookingGuide"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CookingGuideItem extends $BlazeStoveGuideItem<($CookingGuide)> {
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

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingGuideItem$Type = ($CookingGuideItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingGuideItem_ = $CookingGuideItem$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/content/logistics/item/guide/minersCooking/$MinersCookingGuideItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlazeStoveGuideItem, $BlazeStoveGuideItem$Type} from "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveGuideItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$MinersCookingGuide, $MinersCookingGuide$Type} from "packages/plus/dragons/createcentralkitchen/content/logistics/item/guide/minersCooking/$MinersCookingGuide"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MinersCookingGuideItem extends $BlazeStoveGuideItem<($MinersCookingGuide)> {
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

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinersCookingGuideItem$Type = ($MinersCookingGuideItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinersCookingGuideItem_ = $MinersCookingGuideItem$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/foundation/mixin/common/create/$DeployerBlockEntityAccessor" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $DeployerBlockEntityAccessor {

 "getHeldItem"(): $ItemStack

(): $ItemStack
}

export namespace $DeployerBlockEntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployerBlockEntityAccessor$Type = ($DeployerBlockEntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeployerBlockEntityAccessor_ = $DeployerBlockEntityAccessor$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlazeStoveBlockEntity, $BlazeStoveBlockEntity$Type} from "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IBE, $IBE$Type} from "packages/com/simibubi/create/foundation/block/$IBE"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PathComputationType, $PathComputationType$Type} from "packages/net/minecraft/world/level/pathfinder/$PathComputationType"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IWrenchable, $IWrenchable$Type} from "packages/com/simibubi/create/content/equipment/wrench/$IWrenchable"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlazeBurnerBlock$HeatLevel, $BlazeBurnerBlock$HeatLevel$Type} from "packages/com/simibubi/create/content/processing/burner/$BlazeBurnerBlock$HeatLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $BlazeStoveBlock extends $HorizontalDirectionalBlock implements $IBE<($BlazeStoveBlockEntity)>, $IWrenchable {
static readonly "POWERED": $BooleanProperty
static readonly "HEAT_LEVEL": $EnumProperty<($BlazeBurnerBlock$HeatLevel)>
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

public "onSneakWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "getBlockEntityType"(): $BlockEntityType<(any)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "isPathfindable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $PathComputationType$Type): boolean
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "stepOn"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Entity$Type): void
public "getBlockEntityClass"(): $Class<($BlazeStoveBlockEntity)>
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "asItem"(): $Item
public static "tryInsert"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ItemStack$Type, arg3: boolean, arg4: boolean, arg5: boolean): $InteractionResultHolder<($ItemStack)>
public "startSignal"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type): void
public static "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): void
public "withBlockEntityDo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Consumer$Type<($BlazeStoveBlockEntity$Type)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Function$Type<($BlazeStoveBlockEntity$Type), ($InteractionResult$Type)>): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntity"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlazeStoveBlockEntity
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $Optional<($BlazeStoveBlockEntity)>
public "onWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $InteractionResult
public "playRemoveSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "playRotateSound"(arg0: $Level$Type, arg1: $BlockPos$Type): void
public "getRotatedBlockState"(arg0: $BlockState$Type, arg1: $Direction$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$Type, arg1: $UseOnContext$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "blockEntityType"(): $BlockEntityType<(any)>
get "blockEntityClass"(): $Class<($BlazeStoveBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeStoveBlock$Type = ($BlazeStoveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeStoveBlock_ = $BlazeStoveBlock$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/foundation/item/$FluidBucketItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BucketItem, $BucketItem$Type} from "packages/net/minecraft/world/item/$BucketItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FluidBucketItem extends $BucketItem {
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

public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidBucketItem$Type = ($FluidBucketItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidBucketItem_ = $FluidBucketItem$Type;
}}
declare module "packages/plus/dragons/createdragonlib/advancement/critereon/$SimpleTrigger$Instance" {
import {$AbstractTrigger$Instance, $AbstractTrigger$Instance$Type} from "packages/plus/dragons/createdragonlib/advancement/critereon/$AbstractTrigger$Instance"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $SimpleTrigger$Instance extends $AbstractTrigger$Instance {

constructor(arg0: $ResourceLocation$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrigger$Instance$Type = ($SimpleTrigger$Instance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrigger$Instance_ = $SimpleTrigger$Instance$Type;
}}
declare module "packages/plus/dragons/createdragonlib/advancement/critereon/$SimpleTrigger" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$SimpleTrigger$Instance, $SimpleTrigger$Instance$Type} from "packages/plus/dragons/createdragonlib/advancement/critereon/$SimpleTrigger$Instance"
import {$AbstractTrigger, $AbstractTrigger$Type} from "packages/plus/dragons/createdragonlib/advancement/critereon/$AbstractTrigger"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$DeserializationContext, $DeserializationContext$Type} from "packages/net/minecraft/advancements/critereon/$DeserializationContext"

export class $SimpleTrigger extends $AbstractTrigger<($SimpleTrigger$Instance)> {

constructor(arg0: $ResourceLocation$Type)

public "trigger"(arg0: $ServerPlayer$Type): void
public "instance"(): $SimpleTrigger$Instance
public "createInstance"(arg0: $JsonObject$Type, arg1: $DeserializationContext$Type): $SimpleTrigger$Instance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleTrigger$Type = ($SimpleTrigger);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SimpleTrigger_ = $SimpleTrigger$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveGuide" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $BlazeStoveGuide implements $ICapabilitySerializable<($CompoundTag)> {

constructor(arg0: $ItemStack$Type, arg1: integer)

public "getOwner"(): $ItemStack
public "getResult"(): $ItemStack
public "isContainer"(arg0: $ItemStack$Type): boolean
public "isIngredient"(arg0: integer, arg1: $ItemStack$Type): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "updateRecipe"(arg0: $Level$Type): void
public "getIngredientSize"(): integer
public "needIngredient"(arg0: integer): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
get "owner"(): $ItemStack
get "result"(): $ItemStack
get "ingredientSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeStoveGuide$Type = ($BlazeStoveGuide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeStoveGuide_ = $BlazeStoveGuide$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/content/logistics/item/guide/cooking/$CookingGuide" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlazeStoveGuide, $BlazeStoveGuide$Type} from "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveGuide"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CookingGuide extends $BlazeStoveGuide {

constructor(arg0: $ItemStack$Type)

public static "of"(arg0: $ItemStack$Type): $CookingGuide
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "updateRecipe"(arg0: $Level$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CookingGuide$Type = ($CookingGuide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CookingGuide_ = $CookingGuide$Type;
}}
declare module "packages/plus/dragons/createdragonlib/advancement/$CreateAdvancementAccess" {
import {$AdvancementHolder, $AdvancementHolder$Type} from "packages/plus/dragons/createdragonlib/advancement/$AdvancementHolder"

export interface $CreateAdvancementAccess {

 "fromAdvancementHolder"(arg0: $AdvancementHolder$Type): void

(arg0: $AdvancementHolder$Type): void
}

export namespace $CreateAdvancementAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateAdvancementAccess$Type = ($CreateAdvancementAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreateAdvancementAccess_ = $CreateAdvancementAccess$Type;
}}
declare module "packages/plus/dragons/respiteful/common/item/$EffectStrengtheningDrinkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$EffectTransformingDrinkItem, $EffectTransformingDrinkItem$Type} from "packages/plus/dragons/respiteful/common/item/$EffectTransformingDrinkItem"

export class $EffectStrengtheningDrinkItem extends $EffectTransformingDrinkItem {
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

constructor(arg0: $MobEffectCategory$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectStrengtheningDrinkItem$Type = ($EffectStrengtheningDrinkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectStrengtheningDrinkItem_ = $EffectStrengtheningDrinkItem$Type;
}}
declare module "packages/plus/dragons/createdragonlib/advancement/$AdvancementHolder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"
import {$CreateAdvancement, $CreateAdvancement$Type} from "packages/com/simibubi/create/foundation/advancement/$CreateAdvancement"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$SimpleTrigger, $SimpleTrigger$Type} from "packages/plus/dragons/createdragonlib/advancement/critereon/$SimpleTrigger"

export class $AdvancementHolder {
static readonly "ENTRIES_MAP": $Map<(string), ($List<($AdvancementHolder)>)>


public "id"(): $ResourceLocation
public "save"(arg0: $Consumer$Type<($Advancement$Type)>): void
public "description"(): string
public "title"(): string
public "awardTo"(arg0: $Player$Type): void
public "titleKey"(): string
public static "provideLangEntries"(arg0: string): $JsonObject
public "isAlreadyAwardedTo"(arg0: $Player$Type): boolean
public "descriptionKey"(): string
public "getTrigger"(): $SimpleTrigger
public "appendToLang"(arg0: $JsonObject$Type): void
public "asCreateAdvancement"(): $CreateAdvancement
get "trigger"(): $SimpleTrigger
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementHolder$Type = ($AdvancementHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancementHolder_ = $AdvancementHolder$Type;
}}
declare module "packages/plus/dragons/createdragonlib/fluid/$NoTintFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$AllFluids$TintedFluidType, $AllFluids$TintedFluidType$Type} from "packages/com/simibubi/create/$AllFluids$TintedFluidType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $NoTintFluidType extends $AllFluids$TintedFluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type)

public "getTintColor"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoTintFluidType$Type = ($NoTintFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoTintFluidType_ = $NoTintFluidType$Type;
}}
declare module "packages/plus/dragons/respiteful/common/item/$EffectExtendingDrinkItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$EffectTransformingDrinkItem, $EffectTransformingDrinkItem$Type} from "packages/plus/dragons/respiteful/common/item/$EffectTransformingDrinkItem"

export class $EffectExtendingDrinkItem extends $EffectTransformingDrinkItem {
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

constructor(arg0: $MobEffectCategory$Type, arg1: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectExtendingDrinkItem$Type = ($EffectExtendingDrinkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectExtendingDrinkItem_ = $EffectExtendingDrinkItem$Type;
}}
declare module "packages/plus/dragons/respiteful/common/item/$EffectTransformingDrinkItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
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
import {$DrinkItem, $DrinkItem$Type} from "packages/com/teamabnormals/neapolitan/common/item/$DrinkItem"
import {$MobEffectCategory, $MobEffectCategory$Type} from "packages/net/minecraft/world/effect/$MobEffectCategory"
import {$UseAnim, $UseAnim$Type} from "packages/net/minecraft/world/item/$UseAnim"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EffectTransformingDrinkItem extends $DrinkItem {
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

constructor(arg0: $MobEffectCategory$Type, arg1: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "finishUsingItem"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type): $ItemStack
public "getUseAnimation"(arg0: $ItemStack$Type): $UseAnim
public "getEatingSound"(): $SoundEvent
public "getDrinkingSound"(): $SoundEvent
public "getUseDuration"(arg0: $ItemStack$Type): integer
get "eatingSound"(): $SoundEvent
get "drinkingSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectTransformingDrinkItem$Type = ($EffectTransformingDrinkItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EffectTransformingDrinkItem_ = $EffectTransformingDrinkItem$Type;
}}
declare module "packages/plus/dragons/respiteful/core/mixin/$MobEffectInstanceAccessor" {
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"

export interface $MobEffectInstanceAccessor {

 "getHiddenEffect"(): $MobEffectInstance

(): $MobEffectInstance
}

export namespace $MobEffectInstanceAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceAccessor$Type = ($MobEffectInstanceAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobEffectInstanceAccessor_ = $MobEffectInstanceAccessor$Type;
}}
declare module "packages/plus/dragons/respiteful/core/mixin/$FoodPropertiesAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $FoodPropertiesAccessor {

 "getEffectSuppliers"(): $List<($Pair<($Supplier<($MobEffectInstance)>), (float)>)>
 "setEffects"(arg0: $List$Type<($Pair$Type<($Supplier$Type<($MobEffectInstance$Type)>), (float)>)>): void
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
declare module "packages/plus/dragons/createcentralkitchen/content/logistics/item/guide/minersCooking/$MinersCookingGuide" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlazeStoveGuide, $BlazeStoveGuide$Type} from "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveGuide"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $MinersCookingGuide extends $BlazeStoveGuide {

constructor(arg0: $ItemStack$Type)

public static "of"(arg0: $ItemStack$Type): $MinersCookingGuide
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "updateRecipe"(arg0: $Level$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinersCookingGuide$Type = ($MinersCookingGuide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinersCookingGuide_ = $MinersCookingGuide$Type;
}}
declare module "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveGuideItem" {
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
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlazeStoveGuide, $BlazeStoveGuide$Type} from "packages/plus/dragons/createcentralkitchen/content/contraptions/blazeStove/$BlazeStoveGuide"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlazeStoveGuideItem<G extends $BlazeStoveGuide> extends $Item implements $MenuProvider {
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

public "getDisplayName"(): $Component
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "appendGuideTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>, arg2: boolean): void
public "shouldCloseCurrentScreen"(): boolean
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlazeStoveGuideItem$Type<G> = ($BlazeStoveGuideItem<(G)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlazeStoveGuideItem_<G> = $BlazeStoveGuideItem$Type<(G)>;
}}
