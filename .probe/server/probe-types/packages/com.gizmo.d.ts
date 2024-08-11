declare module "packages/com/gizmo/trophies/item/$TrophyItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Trophy, $Trophy$Type} from "packages/com/gizmo/trophies/trophy/$Trophy"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TrophyItem extends $BlockItem {
static readonly "ENTITY_TAG": string
static readonly "COOLDOWN_TAG": string
static readonly "CYCLING_TAG": string
static readonly "VARIANT_TAG": string
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

public "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
public static "loadEntityToTrophy"(arg0: $EntityType$Type<(any)>, arg1: integer, arg2: boolean): $ItemStack
public static "getTrophyVariant"(arg0: $ItemStack$Type): integer
public static "getTrophy"(arg0: $ItemStack$Type): $Trophy
public static "hasCycleOnTrophy"(arg0: $ItemStack$Type): boolean
public static "createTrophyTag"(arg0: $EntityType$Type<(any)>, arg1: integer, arg2: boolean): $CompoundTag
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrophyItem$Type = ($TrophyItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrophyItem_ = $TrophyItem$Type;
}}
declare module "packages/com/gizmo/trophies/behavior/$CustomBehavior" {
import {$TrophyBlockEntity, $TrophyBlockEntity$Type} from "packages/com/gizmo/trophies/block/$TrophyBlockEntity"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CustomBehaviorType, $CustomBehaviorType$Type} from "packages/com/gizmo/trophies/behavior/$CustomBehaviorType"

export interface $CustomBehavior {

 "execute"(arg0: $TrophyBlockEntity$Type, arg1: $ServerPlayer$Type, arg2: $ItemStack$Type): integer
 "getType"(): $CustomBehaviorType
}

export namespace $CustomBehavior {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBehavior$Type = ($CustomBehavior);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBehavior_ = $CustomBehavior$Type;
}}
declare module "packages/com/gizmo/trophies/block/$TrophyBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
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
import {$LootParams$Builder, $LootParams$Builder$Type} from "packages/net/minecraft/world/level/storage/loot/$LootParams$Builder"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $TrophyBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "PEDESTAL": $BooleanProperty
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
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$Type, arg1: $LootParams$Builder$Type): $List<($ItemStack)>
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrophyBlock$Type = ($TrophyBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrophyBlock_ = $TrophyBlock$Type;
}}
declare module "packages/com/gizmo/trophies/behavior/$CustomBehaviorType" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $CustomBehaviorType extends $Record {

constructor(codec: $Codec$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "codec"(): $Codec<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomBehaviorType$Type = ($CustomBehaviorType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomBehaviorType_ = $CustomBehaviorType$Type;
}}
declare module "packages/com/gizmo/trophies/trophy/$Trophy" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CustomBehavior, $CustomBehavior$Type} from "packages/com/gizmo/trophies/behavior/$CustomBehavior"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$TreeMap, $TreeMap$Type} from "packages/java/util/$TreeMap"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"

export class $Trophy extends $Record {
static readonly "DEFAULT_DROP_CHANCE": double
static readonly "BOSS_DROP_CHANCE": double
static readonly "CODEC": $Codec<($Trophy)>

constructor(type: $EntityType$Type<(any)>, dropChance: double, verticalOffset: double, scale: float, clickBehavior: $Optional$Type<($CustomBehavior$Type)>, variants: $Either$Type<($Pair$Type<(string), ($ResourceLocation$Type)>), ($List$Type<($CompoundTag$Type)>)>, defaultData: $Optional$Type<($CompoundTag$Type)>)

public "type"(): $EntityType<(any)>
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "scale"(): float
public "getVariants"(arg0: $HolderLookup$Provider$Type): $List<($CompoundTag)>
public "getVariants"(arg0: $RegistryAccess$Type): $List<($CompoundTag)>
public "variants"(): $Either<($Pair<(string), ($ResourceLocation)>), ($List<($CompoundTag)>)>
public "defaultData"(): $Optional<($CompoundTag)>
public static "getTrophies"(): $TreeMap<($ResourceLocation), ($Trophy)>
public "dropChance"(): double
public "verticalOffset"(): double
public "clickBehavior"(): $Optional<($CustomBehavior)>
get "trophies"(): $TreeMap<($ResourceLocation), ($Trophy)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Trophy$Type = ($Trophy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Trophy_ = $Trophy$Type;
}}
declare module "packages/com/gizmo/trophies/block/$TrophyBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Trophy, $Trophy$Type} from "packages/com/gizmo/trophies/trophy/$Trophy"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $TrophyBlockEntity extends $BlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public static "tick"(arg0: $TrophyBlockEntity$Type): void
public "getVariant"(): integer
public "setVariant"(arg0: integer): void
public "getCooldown"(): integer
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "handleUpdateTag"(arg0: $CompoundTag$Type): void
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "setCooldown"(arg0: integer): void
public "setTrophy"(arg0: $Trophy$Type): void
public "setCycling"(arg0: boolean): void
public "setTrophyName"(arg0: string): void
public "getTrophy"(): $Trophy
public "isCycling"(): boolean
public "getTrophyName"(): string
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "variant"(): integer
set "variant"(value: integer)
get "cooldown"(): integer
get "updateTag"(): $CompoundTag
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "cooldown"(value: integer)
set "trophy"(value: $Trophy$Type)
set "cycling"(value: boolean)
set "trophyName"(value: string)
get "trophy"(): $Trophy
get "cycling"(): boolean
get "trophyName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrophyBlockEntity$Type = ($TrophyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrophyBlockEntity_ = $TrophyBlockEntity$Type;
}}
