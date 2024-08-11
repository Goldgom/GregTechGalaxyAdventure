declare module "packages/net/minecraftforge/event/entity/living/$LivingAttackEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingAttackEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: float)

public "getSource"(): $DamageSource
public "isCancelable"(): boolean
public "getAmount"(): float
public "getListenerList"(): $ListenerList
get "source"(): $DamageSource
get "cancelable"(): boolean
get "amount"(): float
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingAttackEvent$Type = ($LivingAttackEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingAttackEvent_ = $LivingAttackEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePlayer" {
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgePlayer {

 "getEntityReach"(): double
 "isCloseEnough"(entity: $Entity$Type, distance: double): boolean
 "canReach"(arg0: $Vec3$Type, arg1: double): boolean
 "canReach"(arg0: $Entity$Type, arg1: double): boolean
 "canReach"(pos: $BlockPos$Type, padding: double): boolean
 "getBlockReach"(): double
}

export namespace $IForgePlayer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePlayer$Type = ($IForgePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePlayer_ = $IForgePlayer$Type;
}}
declare module "packages/net/minecraftforge/common/util/$INBTSerializable" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"

export interface $INBTSerializable<T extends $Tag> {

 "deserializeNBT"(arg0: T): void
 "serializeNBT"(): T
}

export namespace $INBTSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INBTSerializable$Type<T> = ($INBTSerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $INBTSerializable_<T> = $INBTSerializable$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickEvent$Type extends $Enum<($TickEvent$Type)> {
static readonly "LEVEL": $TickEvent$Type
static readonly "PLAYER": $TickEvent$Type
static readonly "CLIENT": $TickEvent$Type
static readonly "SERVER": $TickEvent$Type
static readonly "RENDER": $TickEvent$Type


public static "values"(): ($TickEvent$Type)[]
public static "valueOf"(arg0: string): $TickEvent$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Type$Type = (("server") | ("level") | ("client") | ("render") | ("player")) | ($TickEvent$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$Type_ = $TickEvent$Type$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeSpawnEggItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$SpawnEggItem, $SpawnEggItem$Type} from "packages/net/minecraft/world/item/$SpawnEggItem"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeSpawnEggItem extends $SpawnEggItem {
static readonly "BY_ID": $Map<($EntityType<(any)>), ($SpawnEggItem)>
 "defaultType": $EntityType<(any)>
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

constructor(arg0: $Supplier$Type<(any)>, arg1: integer, arg2: integer, arg3: $Item$Properties$Type)

public "getType"(arg0: $CompoundTag$Type): $EntityType<(any)>
public static "fromEntityType"(arg0: $EntityType$Type<(any)>): $SpawnEggItem
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeSpawnEggItem$Type = ($ForgeSpawnEggItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeSpawnEggItem_ = $ForgeSpawnEggItem$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FogShape, $FogShape$Type} from "packages/com/mojang/blaze3d/shaders/$FogShape"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$Type} from "packages/net/minecraft/client/renderer/$FogRenderer$FogMode"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IClientFluidTypeExtensions {

 "getRenderOverlayTexture"(arg0: $Minecraft$Type): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getFlowingTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getFlowingTexture"(): $ResourceLocation
 "getStillTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "getStillTexture"(): $ResourceLocation
 "getStillTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getTintColor"(arg0: $FluidStack$Type): integer
 "getTintColor"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
 "getTintColor"(): integer
 "modifyFogColor"(arg0: $Camera$Type, arg1: float, arg2: $ClientLevel$Type, arg3: integer, arg4: float, arg5: $Vector3f$Type): $Vector3f
 "getOverlayTexture"(arg0: $FluidStack$Type): $ResourceLocation
 "getOverlayTexture"(): $ResourceLocation
 "getOverlayTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
 "modifyFogRender"(arg0: $Camera$Type, arg1: $FogRenderer$FogMode$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$Type): void
 "renderOverlay"(arg0: $Minecraft$Type, arg1: $PoseStack$Type): void
}

export namespace $IClientFluidTypeExtensions {
const DEFAULT: $IClientFluidTypeExtensions
function of(arg0: $FluidState$Type): $IClientFluidTypeExtensions
function of(arg0: $FluidType$Type): $IClientFluidTypeExtensions
function of(arg0: $Fluid$Type): $IClientFluidTypeExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientFluidTypeExtensions$Type = ($IClientFluidTypeExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientFluidTypeExtensions_ = $IClientFluidTypeExtensions$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryObject" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryObject<T> implements $Supplier<(T)> {


public "get"(): any
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "map"<U>(arg0: $Function$Type<(any), (any)>): $Optional<(U)>
public "stream"(): $Stream<(T)>
public "filter"(arg0: $Predicate$Type<(any)>): $RegistryObject<(T)>
public "getKey"(): $ResourceKey<(T)>
public "flatMap"<U>(arg0: $Function$Type<(any), ($Optional$Type<(U)>)>): $Optional<(U)>
public "isPresent"(): boolean
public "getId"(): $ResourceLocation
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $Supplier$Type<(any)>): T
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: string): $RegistryObject<(U)>
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $IForgeRegistry$Type<(T)>): $RegistryObject<(U)>
public static "create"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceKey$Type<(any)>, arg2: string): $RegistryObject<(U)>
public "ifPresent"(arg0: $Consumer$Type<(any)>): void
public "orElseGet"(arg0: $Supplier$Type<(any)>): T
public "lazyMap"<U>(arg0: $Function$Type<(any), (any)>): $Supplier<(U)>
public "getHolder"(): $Optional<($Holder<(T)>)>
public static "createOptional"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceKey$Type<(any)>, arg2: string): $RegistryObject<(U)>
public static "createOptional"<T, U extends T>(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type, arg2: string): $RegistryObject<(U)>
get "key"(): $ResourceKey<(T)>
get "present"(): boolean
get "id"(): $ResourceLocation
get "holder"(): $Optional<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryObject$Type<T> = ($RegistryObject<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryObject_<T> = $RegistryObject$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/level/$ChunkEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$LevelEvent, $LevelEvent$Type} from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $ChunkEvent extends $LevelEvent {

constructor()
constructor(arg0: $ChunkAccess$Type, arg1: $LevelAccessor$Type)
constructor(arg0: $ChunkAccess$Type)

public "getListenerList"(): $ListenerList
public "getChunk"(): $ChunkAccess
get "listenerList"(): $ListenerList
get "chunk"(): $ChunkAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Type = ($ChunkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent_ = $ChunkEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelDataManager" {
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$ChunkEvent$Unload, $ChunkEvent$Unload$Type} from "packages/net/minecraftforge/event/level/$ChunkEvent$Unload"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelDataManager {

constructor(arg0: $Level$Type)

public "getAt"(arg0: $ChunkPos$Type): $Map<($BlockPos), ($ModelData)>
public "getAt"(arg0: $BlockPos$Type): $ModelData
public "requestRefresh"(arg0: $BlockEntity$Type): void
public static "onChunkUnload"(arg0: $ChunkEvent$Unload$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelDataManager$Type = ($ModelDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelDataManager_ = $ModelDataManager$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$EventPriority" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $EventPriority extends $Enum<($EventPriority)> implements $IEventListener {
static readonly "HIGHEST": $EventPriority
static readonly "HIGH": $EventPriority
static readonly "NORMAL": $EventPriority
static readonly "LOW": $EventPriority
static readonly "LOWEST": $EventPriority


public "invoke"(arg0: $Event$Type): void
public static "values"(): ($EventPriority)[]
public static "valueOf"(arg0: string): $EventPriority
public "listenerName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventPriority$Type = (("normal") | ("high") | ("highest") | ("low") | ("lowest")) | ($EventPriority);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EventPriority_ = $EventPriority$Type;
}}
declare module "packages/net/minecraftforge/common/$ToolAction" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $ToolAction {


public "name"(): string
public static "get"(arg0: string): $ToolAction
public "toString"(): string
public static "getActions"(): $Collection<($ToolAction)>
get "actions"(): $Collection<($ToolAction)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolAction$Type = ($ToolAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ToolAction_ = $ToolAction$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup, $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup"
import {$MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$Type} from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder$PartBuilder {
 "models": $BlockStateProvider$ConfiguredModelList
 "useOr": boolean
readonly "conditions": $Multimap<($Property<(any)>), ($Comparable<(any)>)>
readonly "nestedConditionGroups": $List<($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup)>


public "end"(): $MultiPartBlockStateBuilder
public "condition"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, ...arg1: (T)[]): $MultiPartBlockStateBuilder$PartBuilder
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder
public "canApplyTo"(arg0: $Block$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$PartBuilder$Type = ($MultiPartBlockStateBuilder$PartBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder$PartBuilder_ = $MultiPartBlockStateBuilder$PartBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeIntrinsicHolderTagAppender" {
import {$IForgeTagAppender, $IForgeTagAppender$Type} from "packages/net/minecraftforge/common/extensions/$IForgeTagAppender"
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagAppender"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$IntrinsicHolderTagsProvider$IntrinsicTagAppender, $IntrinsicHolderTagsProvider$IntrinsicTagAppender$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider$IntrinsicTagAppender"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IForgeIntrinsicHolderTagAppender<T> extends $IForgeTagAppender<(T)> {

 "remove"(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: T): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "remove"(arg0: T, ...arg1: (T)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "replace"(arg0: boolean): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "getKey"(arg0: T): $ResourceKey<(T)>
 "addTags"(...arg0: ($TagKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
 "addOptionalTag"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "addOptionalTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>

(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $IntrinsicHolderTagsProvider$IntrinsicTagAppender<(T)>
}

export namespace $IForgeIntrinsicHolderTagAppender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeIntrinsicHolderTagAppender$Type<T> = ($IForgeIntrinsicHolderTagAppender<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeIntrinsicHolderTagAppender_<T> = $IForgeIntrinsicHolderTagAppender$Type<(T)>;
}}
declare module "packages/net/minecraftforge/network/$ICustomPacket" {
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICustomPacket<T extends $Packet<(any)>> {

 "getName"(): $ResourceLocation
 "getIndex"(): integer
 "getThis"(): T
 "getDirection"(): $NetworkDirection
 "getInternalData"(): $FriendlyByteBuf
}

export namespace $ICustomPacket {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomPacket$Type<T> = ($ICustomPacket<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomPacket_<T> = $ICustomPacket$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeRecipeSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export interface $IForgeRecipeSerializer<T extends $Recipe<(any)>> {

 "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}

export namespace $IForgeRecipeSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRecipeSerializer$Type<T> = ($IForgeRecipeSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRecipeSerializer_<T> = $IForgeRecipeSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$LeftClickBlock$Action" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ServerboundPlayerActionPacket$Action, $ServerboundPlayerActionPacket$Action$Type} from "packages/net/minecraft/network/protocol/game/$ServerboundPlayerActionPacket$Action"

export class $PlayerInteractEvent$LeftClickBlock$Action extends $Enum<($PlayerInteractEvent$LeftClickBlock$Action)> {
static readonly "START": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "STOP": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "ABORT": $PlayerInteractEvent$LeftClickBlock$Action
static readonly "CLIENT_HOLD": $PlayerInteractEvent$LeftClickBlock$Action


public static "values"(): ($PlayerInteractEvent$LeftClickBlock$Action)[]
public static "convert"(arg0: $ServerboundPlayerActionPacket$Action$Type): $PlayerInteractEvent$LeftClickBlock$Action
public static "valueOf"(arg0: string): $PlayerInteractEvent$LeftClickBlock$Action
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$LeftClickBlock$Action$Type = (("client_hold") | ("stop") | ("abort") | ("start")) | ($PlayerInteractEvent$LeftClickBlock$Action);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$LeftClickBlock$Action_ = $PlayerInteractEvent$LeftClickBlock$Action$Type;
}}
declare module "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$IForgeHolderSet$SerializationType, $IForgeHolderSet$SerializationType$Type} from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$HolderSetType, $HolderSetType$Type} from "packages/net/minecraftforge/registries/holdersets/$HolderSetType"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$HolderSet$Direct, $HolderSet$Direct$Type} from "packages/net/minecraft/core/$HolderSet$Direct"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$HolderOwner, $HolderOwner$Type} from "packages/net/minecraft/core/$HolderOwner"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$HolderSet$Named, $HolderSet$Named$Type} from "packages/net/minecraft/core/$HolderSet$Named"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $ICustomHolderSet<T> extends $HolderSet<(T)> {

 "type"(): $HolderSetType
 "serializationType"(): $IForgeHolderSet$SerializationType
 "contains"(arg0: $Holder$Type<(T)>): boolean
 "stream"(): $Stream<($Holder<(T)>)>
 "get"(arg0: integer): $Holder<(T)>
 "canSerializeIn"(arg0: $HolderOwner$Type<(T)>): boolean
 "unwrapKey"(): $Optional<($TagKey<(T)>)>
 "getRandomElement"(arg0: $RandomSource$Type): $Optional<($Holder<(T)>)>
 "size"(): integer
 "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
 "iterator"(): $Iterator<($Holder<(T)>)>
 "spliterator"(): $Spliterator<($Holder<(T)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
 "addInvalidationListener"(arg0: $Runnable$Type): void
}

export namespace $ICustomHolderSet {
function direct<T>(...arg0: ($Holder$Type<(T)>)[]): $HolderSet$Direct<(T)>
function emptyNamed<T>(arg0: $HolderOwner$Type<(T)>, arg1: $TagKey$Type<(T)>): $HolderSet$Named<(T)>
function direct<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
function direct<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, arg1: $List$Type<(E)>): $HolderSet$Direct<(T)>
function direct<T>(arg0: $List$Type<(any)>): $HolderSet$Direct<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomHolderSet$Type<T> = ($ICustomHolderSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICustomHolderSet_<T> = $ICustomHolderSet$Type<(T)>;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider" {
import {$ILifecycleEvent, $ILifecycleEvent$Type} from "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ModFileScanData, $ModFileScanData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"

export interface $IModLanguageProvider {

 "name"(): string
 "consumeLifecycleEvent"<R extends $ILifecycleEvent<(R)>>(arg0: $Supplier$Type<(R)>): void
 "getFileVisitor"(): $Consumer<($ModFileScanData)>
}

export namespace $IModLanguageProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModLanguageProvider$Type = ($IModLanguageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModLanguageProvider_ = $IModLanguageProvider$Type;
}}
declare module "packages/net/minecraftforge/event/entity/$EntityJoinLevelEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityJoinLevelEvent extends $EntityEvent {

constructor()
constructor(arg0: $Entity$Type, arg1: $Level$Type, arg2: boolean)
constructor(arg0: $Entity$Type, arg1: $Level$Type)

public "getLevel"(): $Level
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "loadedFromDisk"(): boolean
get "level"(): $Level
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityJoinLevelEvent$Type = ($EntityJoinLevelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityJoinLevelEvent_ = $EntityJoinLevelEvent$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$DoubleValue extends $ForgeConfigSpec$ConfigValue<(double)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$DoubleValue$Type = ($ForgeConfigSpec$DoubleValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$DoubleValue_ = $ForgeConfigSpec$DoubleValue$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$IIngredientSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IIngredientSerializer<T extends $Ingredient> {

 "write"(arg0: $FriendlyByteBuf$Type, arg1: T): void
 "parse"(arg0: $JsonObject$Type): T
 "parse"(arg0: $FriendlyByteBuf$Type): T
}

export namespace $IIngredientSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSerializer$Type<T> = ($IIngredientSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSerializer_<T> = $IIngredientSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec" {
import {$IConfigSpec, $IConfigSpec$Type} from "packages/net/minecraftforge/fml/config/$IConfigSpec"
import {$ConfigSpec$CorrectionListener, $ConfigSpec$CorrectionListener$Type} from "packages/com/electronwill/nightconfig/core/$ConfigSpec$CorrectionListener"
import {$List, $List$Type} from "packages/java/util/$List"
import {$UnmodifiableConfigWrapper, $UnmodifiableConfigWrapper$Type} from "packages/com/electronwill/nightconfig/core/utils/$UnmodifiableConfigWrapper"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"

export class $ForgeConfigSpec extends $UnmodifiableConfigWrapper<($UnmodifiableConfig)> implements $IConfigSpec<($ForgeConfigSpec)> {


public "save"(): void
public "isLoaded"(): boolean
public "getValues"(): $UnmodifiableConfig
public "isCorrect"(arg0: $CommentedConfig$Type): boolean
public "correct"(arg0: $CommentedConfig$Type, arg1: $ConfigSpec$CorrectionListener$Type, arg2: $ConfigSpec$CorrectionListener$Type): integer
public "correct"(arg0: $CommentedConfig$Type): integer
public "correct"(arg0: $CommentedConfig$Type, arg1: $ConfigSpec$CorrectionListener$Type): integer
public "setConfig"(arg0: $CommentedConfig$Type): void
public "getLevelTranslationKey"(arg0: $List$Type<(string)>): string
public "getSpec"(): $UnmodifiableConfig
public "isCorrecting"(): boolean
public "afterReload"(): void
public "acceptConfig"(arg0: $CommentedConfig$Type): void
public "getLevelComment"(arg0: $List$Type<(string)>): string
public "self"(): $ForgeConfigSpec
get "loaded"(): boolean
get "values"(): $UnmodifiableConfig
set "config"(value: $CommentedConfig$Type)
get "spec"(): $UnmodifiableConfig
get "correcting"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Type = ($ForgeConfigSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec_ = $ForgeConfigSpec$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFriendlyByteBuf" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeFriendlyByteBuf {

 "writeFluidStack"(arg0: $FluidStack$Type): void
 "writeRegistryId"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): void
 "readRegistryIdSafe"<T>(arg0: $Class$Type<(any)>): T
 "readFluidStack"(): $FluidStack
 "readRegistryId"<T>(): T
 "writeRegistryIdUnsafe"<T>(arg0: $IForgeRegistry$Type<(T)>, arg1: T): void
 "writeRegistryIdUnsafe"(arg0: $IForgeRegistry$Type<(any)>, arg1: $ResourceLocation$Type): void
 "readRegistryIdUnsafe"<T>(arg0: $IForgeRegistry$Type<(T)>): T
}

export namespace $IForgeFriendlyByteBuf {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFriendlyByteBuf$Type = ($IForgeFriendlyByteBuf);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFriendlyByteBuf_ = $IForgeFriendlyByteBuf$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilityProviderImpl" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CapabilityProvider, $CapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityProvider"
import {$CapabilityDispatcher, $CapabilityDispatcher$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityProviderImpl<B extends $ICapabilityProviderImpl<(B)>> extends $ICapabilityProvider {

 "areCapsCompatible"(arg0: $CapabilityProvider$Type<(B)>): boolean
 "areCapsCompatible"(arg0: $CapabilityDispatcher$Type): boolean
 "invalidateCaps"(): void
 "reviveCaps"(): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $ICapabilityProviderImpl {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProviderImpl$Type<B> = ($ICapabilityProviderImpl<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProviderImpl_<B> = $ICapabilityProviderImpl$Type<(B)>;
}}
declare module "packages/net/minecraftforge/common/data/$ExistingFileHelper" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$File, $File$Type} from "packages/java/io/$File"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$ExistingFileHelper$IResourceType, $ExistingFileHelper$IResourceType$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper$IResourceType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ExistingFileHelper {

constructor(arg0: $Collection$Type<($Path$Type)>, arg1: $Set$Type<(string)>, arg2: boolean, arg3: string, arg4: $File$Type)

public "getResource"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): $Resource
public "getResource"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): $Resource
public "exists"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): boolean
public "exists"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): boolean
public "exists"(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$IResourceType$Type): boolean
public "isEnabled"(): boolean
public "trackGenerated"(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$IResourceType$Type): void
public "trackGenerated"(arg0: $ResourceLocation$Type, arg1: $PackType$Type, arg2: string, arg3: string): void
public "getResourceStack"(arg0: $ResourceLocation$Type, arg1: $PackType$Type): $List<($Resource)>
get "enabled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$Type = ($ExistingFileHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper_ = $ExistingFileHelper$Type;
}}
declare module "packages/net/minecraftforge/common/util/$TransformationHelper$TransformOrigin" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $TransformationHelper$TransformOrigin extends $Enum<($TransformationHelper$TransformOrigin)> implements $StringRepresentable {
static readonly "CENTER": $TransformationHelper$TransformOrigin
static readonly "CORNER": $TransformationHelper$TransformOrigin
static readonly "OPPOSING_CORNER": $TransformationHelper$TransformOrigin


public static "values"(): ($TransformationHelper$TransformOrigin)[]
public static "valueOf"(arg0: string): $TransformationHelper$TransformOrigin
public static "fromString"(arg0: string): $TransformationHelper$TransformOrigin
public "getVector"(): $Vector3f
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "vector"(): $Vector3f
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformationHelper$TransformOrigin$Type = (("corner") | ("center") | ("opposing_corner")) | ($TransformationHelper$TransformOrigin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransformationHelper$TransformOrigin_ = $TransformationHelper$TransformOrigin$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBoat" {
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeBoat {

 "shouldUpdateFluidWhileRiding"(arg0: $FluidState$Type, arg1: $Entity$Type): boolean
 "canBoatInFluid"(arg0: $FluidState$Type): boolean
 "canBoatInFluid"(arg0: $FluidType$Type): boolean
}

export namespace $IForgeBoat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBoat$Type = ($IForgeBoat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBoat_ = $IForgeBoat$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder" {
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$RotationBuilder {

constructor(arg0: $ModelBuilder$ElementBuilder$Type)

public "end"(): $ModelBuilder$ElementBuilder<>
public "origin"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "angle"(arg0: float): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "axis"(arg0: $Direction$Axis$Type): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "rescale"(arg0: boolean): $ModelBuilder$ElementBuilder$RotationBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$RotationBuilder$Type = ($ModelBuilder$ElementBuilder$RotationBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder$RotationBuilder_ = $ModelBuilder$ElementBuilder$RotationBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$IntValue extends $ForgeConfigSpec$ConfigValue<(integer)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$IntValue$Type = ($ForgeConfigSpec$IntValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$IntValue_ = $ForgeConfigSpec$IntValue$Type;
}}
declare module "packages/net/minecraftforge/client/model/$BakedModelWrapper" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$RenderContext, $RenderContext$Type} from "packages/net/fabricmc/fabric/api/renderer/v1/render/$RenderContext"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$Type} from "packages/net/minecraftforge/client/$ChunkRenderTypeSet"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BakedModelWrapper<T extends $BakedModel> implements $BakedModel {

constructor(arg0: T)

public "applyTransform"(arg0: $ItemDisplayContext$Type, arg1: $PoseStack$Type, arg2: boolean): $BakedModel
public "isGui3d"(): boolean
public "usesBlockLight"(): boolean
public "getRenderPasses"(arg0: $ItemStack$Type, arg1: boolean): $List<($BakedModel)>
public "isCustomRenderer"(): boolean
public "getRenderTypes"(arg0: $BlockState$Type, arg1: $RandomSource$Type, arg2: $ModelData$Type): $ChunkRenderTypeSet
public "getRenderTypes"(arg0: $ItemStack$Type, arg1: boolean): $List<($RenderType)>
public "getQuads"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $RandomSource$Type): $List<($BakedQuad)>
public "getOverrides"(): $ItemOverrides
public "useAmbientOcclusion"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
public "useAmbientOcclusion"(arg0: $BlockState$Type): boolean
public "getParticleIcon"(): $TextureAtlasSprite
public "getModelData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ModelData$Type): $ModelData
public "useAmbientOcclusion"(): boolean
public "getTransforms"(): $ItemTransforms
public "getParticleIcon"(arg0: $ModelData$Type): $TextureAtlasSprite
public "getQuads"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $RandomSource$Type, arg3: $ModelData$Type, arg4: $RenderType$Type): $List<($BakedQuad)>
public "emitBlockQuads"(blockView: $BlockAndTintGetter$Type, state: $BlockState$Type, pos: $BlockPos$Type, randomSupplier: $Supplier$Type<(any)>, context: $RenderContext$Type): void
public "isVanillaAdapter"(): boolean
public "emitItemQuads"(stack: $ItemStack$Type, randomSupplier: $Supplier$Type<($RandomSource$Type)>, context: $RenderContext$Type): void
public "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
get "gui3d"(): boolean
get "customRenderer"(): boolean
get "overrides"(): $ItemOverrides
get "particleIcon"(): $TextureAtlasSprite
get "transforms"(): $ItemTransforms
get "vanillaAdapter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelWrapper$Type<T> = ($BakedModelWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelWrapper_<T> = $BakedModelWrapper$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeKeyMapping" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$IKeyConflictContext, $IKeyConflictContext$Type} from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import {$KeyModifier, $KeyModifier$Type} from "packages/net/minecraftforge/client/settings/$KeyModifier"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IForgeKeyMapping {

 "getKey"(): $InputConstants$Key
 "setToDefault"(): void
 "getKeyConflictContext"(): $IKeyConflictContext
 "isConflictContextAndModifierActive"(): boolean
 "getDefaultKeyModifier"(): $KeyModifier
 "setKeyConflictContext"(arg0: $IKeyConflictContext$Type): void
 "setKeyModifierAndCode"(arg0: $KeyModifier$Type, arg1: $InputConstants$Key$Type): void
 "hasKeyModifierConflict"(arg0: $KeyMapping$Type): boolean
 "getKeyModifier"(): $KeyModifier
 "isActiveAndMatches"(arg0: $InputConstants$Key$Type): boolean
}

export namespace $IForgeKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeKeyMapping$Type = ($IForgeKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeKeyMapping_ = $IForgeKeyMapping$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeHolderSet" {
import {$IForgeHolderSet$SerializationType, $IForgeHolderSet$SerializationType$Type} from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IForgeHolderSet<T> {

 "serializationType"(): $IForgeHolderSet$SerializationType
 "addInvalidationListener"(arg0: $Runnable$Type): void
}

export namespace $IForgeHolderSet {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeHolderSet$Type<T> = ($IForgeHolderSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeHolderSet_<T> = $IForgeHolderSet$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeTagAppender" {
import {$TagsProvider$TagAppender, $TagsProvider$TagAppender$Type} from "packages/net/minecraft/data/tags/$TagsProvider$TagAppender"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IForgeTagAppender<T> {

 "remove"(arg0: $TagKey$Type<(T)>, ...arg1: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceLocation$Type, ...arg1: ($ResourceLocation$Type)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceKey$Type<(T)>, ...arg1: ($ResourceKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "remove"(arg0: $ResourceLocation$Type): $TagsProvider$TagAppender<(T)>
 "replace"(arg0: boolean): $TagsProvider$TagAppender<(T)>
 "replace"(): $TagsProvider$TagAppender<(T)>
 "addOptionalTag"(arg0: $TagKey$Type<(T)>): $TagsProvider$TagAppender<(T)>
 "addTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
 "addOptionalTags"(...arg0: ($TagKey$Type<(T)>)[]): $TagsProvider$TagAppender<(T)>
}

export namespace $IForgeTagAppender {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeTagAppender$Type<T> = ($IForgeTagAppender<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeTagAppender_<T> = $IForgeTagAppender$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/data/$BlockTagsProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$IntrinsicHolderTagsProvider, $IntrinsicHolderTagsProvider$Type} from "packages/net/minecraft/data/tags/$IntrinsicHolderTagsProvider"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagBuilder, $TagBuilder$Type} from "packages/net/minecraft/tags/$TagBuilder"
import {$PackOutput$PathProvider, $PackOutput$PathProvider$Type} from "packages/net/minecraft/data/$PackOutput$PathProvider"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockTagsProvider extends $IntrinsicHolderTagsProvider<($Block)> {
readonly "pathProvider": $PackOutput$PathProvider
readonly "registryKey": $ResourceKey<(any)>
readonly "builders": $Map<($ResourceLocation), ($TagBuilder)>
readonly "modId": string
 "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg2: string, arg3: $ExistingFileHelper$Type)

public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTagsProvider$Type = ($BlockTagsProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockTagsProvider_ = $BlockTagsProvider$Type;
}}
declare module "packages/net/minecraftforge/common/util/$Lazy" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export interface $Lazy<T> extends $Supplier<(T)> {

 "get"(): T

(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
}

export namespace $Lazy {
function of<T>(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
function concurrentOf<T>(arg0: $Supplier$Type<(T)>): $Lazy<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lazy$Type<T> = ($Lazy<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Lazy_<T> = $Lazy$Type<(T)>;
}}
declare module "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IdMappingEvent$IdRemapping extends $Record {

constructor(currId: integer, newId: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "newId"(): integer
public "currId"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IdMappingEvent$IdRemapping$Type = ($IdMappingEvent$IdRemapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IdMappingEvent$IdRemapping_ = $IdMappingEvent$IdRemapping$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder" {
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$ModelBuilder$TransformsBuilder$TransformVecBuilder, $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$TransformsBuilder {

constructor(arg0: $ModelBuilder$Type<(any)>)

public "end"(): T
public "transform"(arg0: $ItemDisplayContext$Type): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$TransformsBuilder$Type = ($ModelBuilder$TransformsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$TransformsBuilder_ = $ModelBuilder$TransformsBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/event/$InputEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export class $InputEvent extends $Event {


public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$Type = ($InputEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputEvent_ = $InputEvent$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$IShapedRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IShapedRecipe<T extends $Container> extends $Recipe<(T)> {

 "getRecipeWidth"(): integer
 "getRecipeHeight"(): integer
 "getId"(): $ResourceLocation
 "assemble"(arg0: T, arg1: $RegistryAccess$Type): $ItemStack
 "matches"(arg0: T, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "getSerializer"(): $RecipeSerializer<(any)>
 "showNotification"(): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "isIncomplete"(): boolean
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "getType"(): $ResourceLocation
 "getMod"(): string
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
 "getGroup"(): string
 "setGroup"(group: string): void
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "getOrCreateId"(): $ResourceLocation
 "getSchema"(): $RecipeSchema
 "hasInput"(match: $ReplacementMatch$Type): boolean
}

export namespace $IShapedRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IShapedRecipe$Type<T> = ($IShapedRecipe<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IShapedRecipe_<T> = $IShapedRecipe$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/data/$ExistingFileHelper$IResourceType" {
import {$PackType, $PackType$Type} from "packages/net/minecraft/server/packs/$PackType"

export interface $ExistingFileHelper$IResourceType {

 "getPrefix"(): string
 "getSuffix"(): string
 "getPackType"(): $PackType
}

export namespace $ExistingFileHelper$IResourceType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExistingFileHelper$IResourceType$Type = ($ExistingFileHelper$IResourceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExistingFileHelper$IResourceType_ = $ExistingFileHelper$IResourceType$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModFileScanData$AnnotationData, $ModFileScanData$AnnotationData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"
import {$ModFileScanData$ClassData, $ModFileScanData$ClassData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"

export class $ModFileScanData {

constructor()

public "getClasses"(): $Set<($ModFileScanData$ClassData)>
public "getAnnotations"(): $Set<($ModFileScanData$AnnotationData)>
public static "interestingAnnotations"(): $Predicate<($Type)>
public "addLanguageLoader"(arg0: $Map$Type<(string), (any)>): void
public "getIModInfoData"(): $List<($IModFileInfo)>
public "getTargets"(): $Map<(string), (any)>
public "addModFileInfo"(arg0: $IModFileInfo$Type): void
get "classes"(): $Set<($ModFileScanData$ClassData)>
get "annotations"(): $Set<($ModFileScanData$AnnotationData)>
get "iModInfoData"(): $List<($IModFileInfo)>
get "targets"(): $Map<(string), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$Type = ($ModFileScanData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData_ = $ModFileScanData$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelProvider" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ItemModelBuilder, $ItemModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ModelProvider, $ModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemModelProvider extends $ModelProvider<($ItemModelBuilder)> {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "getName"(): string
public "basicItem"(arg0: $Item$Type): $ItemModelBuilder
public "basicItem"(arg0: $ResourceLocation$Type): $ItemModelBuilder
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelProvider$Type = ($ItemModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelProvider_ = $ItemModelProvider$Type;
}}
declare module "packages/net/minecraftforge/energy/$IEnergyStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyStorage {

 "canExtract"(): boolean
 "getEnergyStored"(): integer
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "canReceive"(): boolean
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "getMaxEnergyStored"(): integer
}

export namespace $IEnergyStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyStorage$Type = ($IEnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEnergyStorage_ = $IEnergyStorage$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingKnockBackEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingKnockBackEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: float, arg2: double, arg3: double)

public "isCancelable"(): boolean
public "setStrength"(arg0: float): void
public "getStrength"(): float
public "getOriginalStrength"(): float
public "getListenerList"(): $ListenerList
public "getRatioX"(): double
public "getRatioZ"(): double
public "setRatioX"(arg0: double): void
public "getOriginalRatioX"(): double
public "getOriginalRatioZ"(): double
public "setRatioZ"(arg0: double): void
get "cancelable"(): boolean
set "strength"(value: float)
get "strength"(): float
get "originalStrength"(): float
get "listenerList"(): $ListenerList
get "ratioX"(): double
get "ratioZ"(): double
set "ratioX"(value: double)
get "originalRatioX"(): double
get "originalRatioZ"(): double
set "ratioZ"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingKnockBackEvent$Type = ($LivingKnockBackEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingKnockBackEvent_ = $LivingKnockBackEvent$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IGenericEvent" {
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export interface $IGenericEvent<T> {

 "getGenericType"(): $Type

(): $Type
}

export namespace $IGenericEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGenericEvent$Type<T> = ($IGenericEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGenericEvent_<T> = $IGenericEvent$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/config/$ModConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$IConfigSpec, $IConfigSpec$Type} from "packages/net/minecraftforge/fml/config/$IConfigSpec"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$ConfigFileTypeHandler, $ConfigFileTypeHandler$Type} from "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler"
import {$ModConfig$Type, $ModConfig$Type$Type} from "packages/net/minecraftforge/fml/config/$ModConfig$Type"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig {

constructor(arg0: $ModConfig$Type$Type, arg1: $IConfigSpec$Type<(any)>, arg2: $ModContainer$Type, arg3: string)
constructor(arg0: $ModConfig$Type$Type, arg1: $IConfigSpec$Type<(any)>, arg2: $ModContainer$Type)

public "save"(): void
public "getType"(): $ModConfig$Type
public "getFileName"(): string
public "getHandler"(): $ConfigFileTypeHandler
public "getModId"(): string
public "acceptSyncedConfig"(arg0: (byte)[]): void
public "getFullPath"(): $Path
public "getConfigData"(): $CommentedConfig
public "getSpec"<T extends $IConfigSpec<(T)>>(): $IConfigSpec<(T)>
get "type"(): $ModConfig$Type
get "fileName"(): string
get "handler"(): $ConfigFileTypeHandler
get "modId"(): string
get "fullPath"(): $Path
get "configData"(): $CommentedConfig
get "spec"(): $IConfigSpec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type = ($ModConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig_ = $ModConfig$Type;
}}
declare module "packages/net/minecraftforge/fluids/$FluidType" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "toString"(): string
public "move"(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
public "getDescription"(): $Component
public "getDescription"(arg0: $FluidStack$Type): $Component
public "getBlockForFluidState"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): $BlockState
public "setItemMovement"(arg0: $ItemEntity$Type): void
public "getStateForPlacement"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): $FluidState
public "isVanilla"(): boolean
public "getBucket"(arg0: $FluidStack$Type): $ItemStack
public "getTemperature"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getTemperature"(): integer
public "getTemperature"(arg0: $FluidStack$Type): integer
public "getLightLevel"(): integer
public "getLightLevel"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getLightLevel"(arg0: $FluidStack$Type): integer
public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
public "getBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: boolean): $BlockPathTypes
public "canDrownIn"(arg0: $LivingEntity$Type): boolean
public "canHydrate"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
public "canHydrate"(arg0: $FluidStack$Type): boolean
public "canHydrate"(arg0: $Entity$Type): boolean
public "motionScale"(arg0: $Entity$Type): double
public "getSound"(arg0: $Player$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $FluidStack$Type, arg1: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $Entity$Type, arg1: $SoundAction$Type): $SoundEvent
public "getSound"(arg0: $SoundAction$Type): $SoundEvent
public "canExtinguish"(arg0: $Entity$Type): boolean
public "canExtinguish"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "canSwim"(arg0: $Entity$Type): boolean
public "canPushEntity"(arg0: $Entity$Type): boolean
public "onVaporize"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $FluidStack$Type): void
public "canRideVehicleUnder"(arg0: $Entity$Type, arg1: $Entity$Type): boolean
public "getFallDistanceModifier"(arg0: $Entity$Type): float
public "isVaporizedOnPlacement"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): boolean
public "getDescriptionId"(arg0: $FluidStack$Type): string
public "getDescriptionId"(): string
public "isAir"(): boolean
public "supportsBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
public "supportsBoating"(arg0: $Boat$Type): boolean
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "canConvertToSource"(arg0: $FluidStack$Type): boolean
public "getDensity"(): integer
public "getDensity"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getDensity"(arg0: $FluidStack$Type): integer
public "getRarity"(arg0: $FluidStack$Type): $Rarity
public "getRarity"(): $Rarity
public "isLighterThanAir"(): boolean
public "getViscosity"(): integer
public "getViscosity"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getViscosity"(arg0: $FluidStack$Type): integer
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): boolean
public "canBePlacedInLevel"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidStack$Type): boolean
public "shouldUpdateWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type, arg2: $Entity$Type): boolean
public "getAdjacentBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
public "getRenderPropertiesInternal"(): any
get "description"(): $Component
set "itemMovement"(value: $ItemEntity$Type)
get "vanilla"(): boolean
get "temperature"(): integer
get "lightLevel"(): integer
get "descriptionId"(): string
get "air"(): boolean
get "density"(): integer
get "rarity"(): $Rarity
get "lighterThanAir"(): boolean
get "viscosity"(): integer
get "renderPropertiesInternal"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Type = ($FluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType_ = $FluidType$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Comparator, $Comparator$Type} from "packages/java/util/$Comparator"
import {$VariantBlockStateBuilder, $VariantBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$SortedMap, $SortedMap$Type} from "packages/java/util/$SortedMap"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $VariantBlockStateBuilder$PartialBlockstate implements $Predicate<($BlockState)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "test"(arg0: $BlockState$Type): boolean
public "getOwner"(): $Block
public "with"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, arg1: T): $VariantBlockStateBuilder$PartialBlockstate
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "setModels"(...arg0: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
public "modelForState"(): $ConfiguredModel$Builder<($VariantBlockStateBuilder)>
public "addModels"(...arg0: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder$PartialBlockstate
public static "comparingByProperties"(): $Comparator<($VariantBlockStateBuilder$PartialBlockstate)>
public "getSetStates"(): $SortedMap<($Property<(any)>), ($Comparable<(any)>)>
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public "negate"(): $Predicate<($BlockState)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<($BlockState)>
public static "isEqual"<T>(arg0: any): $Predicate<($BlockState)>
get "owner"(): $Block
set "models"(value: ($ConfiguredModel$Type)[])
get "setStates"(): $SortedMap<($Property<(any)>), ($Comparable<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateBuilder$PartialBlockstate$Type = ($VariantBlockStateBuilder$PartialBlockstate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateBuilder$PartialBlockstate_ = $VariantBlockStateBuilder$PartialBlockstate$Type;
}}
declare module "packages/net/minecraftforge/entity/$PartEntity" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$ClientGamePacketListener, $ClientGamePacketListener$Type} from "packages/net/minecraft/network/protocol/game/$ClientGamePacketListener"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PartEntity<T extends $Entity> extends $Entity {
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
 "age": integer
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

constructor(arg0: T)

public "getParent"(): T
public "getAddEntityPacket"(): $Packet<($ClientGamePacketListener)>
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "parent"(): T
get "addEntityPacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartEntity$Type<T> = ($PartEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PartEntity_<T> = $PartEntity$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$StructureSettingsBuilder$StructureSpawnOverrideBuilder" {
import {$StructureSpawnOverride, $StructureSpawnOverride$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$StructureSpawnOverride$BoundingBoxType, $StructureSpawnOverride$BoundingBoxType$Type} from "packages/net/minecraft/world/level/levelgen/structure/$StructureSpawnOverride$BoundingBoxType"

export class $StructureSettingsBuilder$StructureSpawnOverrideBuilder {


public static "copyOf"(arg0: $StructureSpawnOverride$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "build"(): $StructureSpawnOverride
public "getBoundingBox"(): $StructureSpawnOverride$BoundingBoxType
public "addSpawn"(arg0: $MobSpawnSettings$SpawnerData$Type): void
public "removeSpawn"(arg0: $MobSpawnSettings$SpawnerData$Type): void
public "getSpawns"(): $List<($MobSpawnSettings$SpawnerData)>
public "setBoundingBox"(arg0: $StructureSpawnOverride$BoundingBoxType$Type): void
get "boundingBox"(): $StructureSpawnOverride$BoundingBoxType
get "spawns"(): $List<($MobSpawnSettings$SpawnerData)>
set "boundingBox"(value: $StructureSpawnOverride$BoundingBoxType$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type = ($StructureSettingsBuilder$StructureSpawnOverrideBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder$StructureSpawnOverrideBuilder_ = $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$ValueSpec" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$Range, $ForgeConfigSpec$Range$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Range"

export class $ForgeConfigSpec$ValueSpec {


public "test"(arg0: any): boolean
public "getDefault"(): any
public "getComment"(): string
public "getClazz"(): $Class<(any)>
public "getRange"<V extends $Comparable<(any)>>(): $ForgeConfigSpec$Range<(V)>
public "correct"(arg0: any): any
public "getTranslationKey"(): string
public "needsWorldRestart"(): boolean
get "default"(): any
get "comment"(): string
get "clazz"(): $Class<(any)>
get "range"(): $ForgeConfigSpec$Range<(V)>
get "translationKey"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$ValueSpec$Type = ($ForgeConfigSpec$ValueSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$ValueSpec_ = $ForgeConfigSpec$ValueSpec$Type;
}}
declare module "packages/net/minecraftforge/event/entity/$ProjectileImpactEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$Projectile, $Projectile$Type} from "packages/net/minecraft/world/entity/projectile/$Projectile"
import {$ProjectileImpactEvent$ImpactResult, $ProjectileImpactEvent$ImpactResult$Type} from "packages/net/minecraftforge/event/entity/$ProjectileImpactEvent$ImpactResult"

export class $ProjectileImpactEvent extends $EntityEvent {

constructor()
constructor(arg0: $Projectile$Type, arg1: $HitResult$Type)

/**
 * 
 * @deprecated
 */
public "setCanceled"(arg0: boolean): void
public "isCancelable"(): boolean
public "getProjectile"(): $Projectile
public "getListenerList"(): $ListenerList
public "getRayTraceResult"(): $HitResult
public "getImpactResult"(): $ProjectileImpactEvent$ImpactResult
public "setImpactResult"(arg0: $ProjectileImpactEvent$ImpactResult$Type): void
set "canceled"(value: boolean)
get "cancelable"(): boolean
get "projectile"(): $Projectile
get "listenerList"(): $ListenerList
get "rayTraceResult"(): $HitResult
get "impactResult"(): $ProjectileImpactEvent$ImpactResult
set "impactResult"(value: $ProjectileImpactEvent$ImpactResult$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileImpactEvent$Type = ($ProjectileImpactEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileImpactEvent_ = $ProjectileImpactEvent$Type;
}}
declare module "packages/net/minecraftforge/data/event/$GatherDataEvent" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$GatherDataEvent$DataGeneratorConfig, $GatherDataEvent$DataGeneratorConfig$Type} from "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"

export class $GatherDataEvent extends $Event implements $IModBusEvent {

constructor(arg0: $ModContainer$Type, arg1: $DataGenerator$Type, arg2: $GatherDataEvent$DataGeneratorConfig$Type, arg3: $ExistingFileHelper$Type)
constructor()

public "validate"(): boolean
public "getGenerator"(): $DataGenerator
public "getInputs"(): $Collection<($Path)>
public "getModContainer"(): $ModContainer
public "getExistingFileHelper"(): $ExistingFileHelper
public "isCancelable"(): boolean
public "includeServer"(): boolean
public "includeClient"(): boolean
public "getLookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "includeReports"(): boolean
public "includeDev"(): boolean
get "generator"(): $DataGenerator
get "inputs"(): $Collection<($Path)>
get "modContainer"(): $ModContainer
get "existingFileHelper"(): $ExistingFileHelper
get "cancelable"(): boolean
get "lookupProvider"(): $CompletableFuture<($HolderLookup$Provider)>
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$Type = ($GatherDataEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatherDataEvent_ = $GatherDataEvent$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeFlowingFluid$Properties {

constructor(arg0: $Supplier$Type<(any)>, arg1: $Supplier$Type<(any)>, arg2: $Supplier$Type<(any)>)

public "block"(arg0: $Supplier$Type<(any)>): $ForgeFlowingFluid$Properties
public "bucket"(arg0: $Supplier$Type<(any)>): $ForgeFlowingFluid$Properties
public "slopeFindDistance"(arg0: integer): $ForgeFlowingFluid$Properties
public "levelDecreasePerBlock"(arg0: integer): $ForgeFlowingFluid$Properties
public "tickRate"(arg0: integer): $ForgeFlowingFluid$Properties
public "explosionResistance"(arg0: float): $ForgeFlowingFluid$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Properties$Type = ($ForgeFlowingFluid$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Properties_ = $ForgeFlowingFluid$Properties$Type;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullConsumer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullConsumer<T> {

 "accept"(arg0: T): void

(arg0: T): void
}

export namespace $NonNullConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullConsumer$Type<T> = ($NonNullConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullConsumer_<T> = $NonNullConsumer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ILifecycleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILifecycleEvent<R extends $ILifecycleEvent<(any)>> {

 "concrete"(): R
}

export namespace $ILifecycleEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILifecycleEvent$Type<R> = ($ILifecycleEvent<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILifecycleEvent_<R> = $ILifecycleEvent$Type<(R)>;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModFile" {
import {$SecureJar, $SecureJar$Type} from "packages/cpw/mods/jarhandling/$SecureJar"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$IModFile$Type, $IModFile$Type$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile$Type"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import {$ModFileScanData, $ModFileScanData$Type} from "packages/net/minecraftforge/forgespi/language/$ModFileScanData"
import {$IModLanguageProvider, $IModLanguageProvider$Type} from "packages/net/minecraftforge/forgespi/language/$IModLanguageProvider"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModProvider, $IModProvider$Type} from "packages/net/minecraftforge/forgespi/locating/$IModProvider"
import {$SecureJar$Status, $SecureJar$Status$Type} from "packages/cpw/mods/jarhandling/$SecureJar$Status"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModFile {

 "findResource"(...arg0: (string)[]): $Path
 "getType"(): $IModFile$Type
 "getFileName"(): string
 "getProvider"(): $IModProvider
 "getModFileInfo"(): $IModFileInfo
 "getModInfos"(): $List<($IModInfo)>
 "getLoaders"(): $List<($IModLanguageProvider)>
 "getSubstitutionMap"(): $Supplier<($Map<(string), (any)>)>
 "getSecureJar"(): $SecureJar
 "getScanResult"(): $ModFileScanData
 "setSecurityStatus"(arg0: $SecureJar$Status$Type): void
 "getFilePath"(): $Path
}

export namespace $IModFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$Type = ($IModFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFile_ = $IModFile$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelProperty" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $ModelProperty<T> implements $Predicate<(T)> {

constructor()
constructor(arg0: $Predicate$Type<(T)>)

public "test"(arg0: T): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public "negate"(): $Predicate<(T)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(T)>
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProperty$Type<T> = ($ModelProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProperty_<T> = $ModelProperty$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message$MessageType extends $Enum<($Message$MessageType)> {
static readonly "MC": $Message$MessageType
static readonly "ML": $Message$MessageType
static readonly "LOC": $Message$MessageType
static readonly "MOD": $Message$MessageType


public static "values"(): ($Message$MessageType)[]
public static "valueOf"(arg0: string): $Message$MessageType
public "colour"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$MessageType$Type = (("loc") | ("mod") | ("mc") | ("ml")) | ($Message$MessageType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message$MessageType_ = $Message$MessageType$Type;
}}
declare module "packages/net/minecraftforge/network/$HandshakeMessages$LoginIndexedMessage" {
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"

export class $HandshakeMessages$LoginIndexedMessage implements $IntSupplier {


public "getAsInt"(): integer
get "asInt"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandshakeMessages$LoginIndexedMessage$Type = ($HandshakeMessages$LoginIndexedMessage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandshakeMessages$LoginIndexedMessage_ = $HandshakeMessages$LoginIndexedMessage$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeCommandSourceStack" {
import {$RecipeManager, $RecipeManager$Type} from "packages/net/minecraft/world/item/crafting/$RecipeManager"
import {$Scoreboard, $Scoreboard$Type} from "packages/net/minecraft/world/scores/$Scoreboard"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export interface $IForgeCommandSourceStack {

 "getRecipeManager"(): $RecipeManager
 "getUnsidedLevel"(): $Level
 "getScoreboard"(): $Scoreboard
 "getAdvancement"(arg0: $ResourceLocation$Type): $Advancement
}

export namespace $IForgeCommandSourceStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeCommandSourceStack$Type = ($IForgeCommandSourceStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeCommandSourceStack_ = $IForgeCommandSourceStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$MultiPartBlockStateBuilder$PartBuilder, $MultiPartBlockStateBuilder$PartBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"

export class $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup {
readonly "conditions": $Multimap<($Property<(any)>), ($Comparable<(any)>)>
readonly "nestedConditionGroups": $List<($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup)>
 "useOr": boolean

constructor(arg0: $MultiPartBlockStateBuilder$PartBuilder$Type)

public "end"(): $MultiPartBlockStateBuilder$PartBuilder
public "condition"<T extends $Comparable<(T)>>(arg0: $Property$Type<(T)>, ...arg1: (T)[]): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "nestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "useOr"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
public "endNestedGroup"(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type = ($MultiPartBlockStateBuilder$PartBuilder$ConditionGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup_ = $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEvent extends $EntityEvent {

constructor()
constructor(arg0: $LivingEntity$Type)

public "getEntity"(): $LivingEntity
public "getListenerList"(): $ListenerList
get "entity"(): $LivingEntity
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$Type = ($LivingEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEvent_ = $LivingEvent$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeModifier$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $BiomeModifier$Phase extends $Enum<($BiomeModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $BiomeModifier$Phase
static readonly "ADD": $BiomeModifier$Phase
static readonly "REMOVE": $BiomeModifier$Phase
static readonly "MODIFY": $BiomeModifier$Phase
static readonly "AFTER_EVERYTHING": $BiomeModifier$Phase


public static "values"(): ($BiomeModifier$Phase)[]
public static "valueOf"(arg0: string): $BiomeModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Phase$Type = (("add") | ("modify") | ("before_everything") | ("after_everything") | ("remove")) | ($BiomeModifier$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier$Phase_ = $BiomeModifier$Phase$Type;
}}
declare module "packages/net/minecraftforge/eventbus/$ListenerList" {
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export class $ListenerList {

constructor()
constructor(arg0: $ListenerList$Type)

public "register"(arg0: integer, arg1: $EventPriority$Type, arg2: $IEventListener$Type): void
public "unregister"(arg0: integer, arg1: $IEventListener$Type): void
public "getListeners"(arg0: integer): ($IEventListener)[]
public static "clearBusID"(arg0: integer): void
public static "unregisterAll"(arg0: integer, arg1: $IEventListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ListenerList$Type = ($ListenerList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ListenerList_ = $ListenerList$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IFluidHandler$FluidAction extends $Enum<($IFluidHandler$FluidAction)> {
static readonly "EXECUTE": $IFluidHandler$FluidAction
static readonly "SIMULATE": $IFluidHandler$FluidAction


public static "values"(): ($IFluidHandler$FluidAction)[]
public static "valueOf"(arg0: string): $IFluidHandler$FluidAction
public "execute"(): boolean
public "simulate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$FluidAction$Type = (("execute") | ("simulate")) | ($IFluidHandler$FluidAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler$FluidAction_ = $IFluidHandler$FluidAction$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$ITagManager" {
import {$ITag, $ITag$Type} from "packages/net/minecraftforge/registries/tags/$ITag"
import {$IReverseTag, $IReverseTag$Type} from "packages/net/minecraftforge/registries/tags/$IReverseTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $ITagManager<V> extends $Iterable<($ITag<(V)>)> {

 "stream"(): $Stream<($ITag<(V)>)>
 "getTag"(arg0: $TagKey$Type<(V)>): $ITag<(V)>
 "createTagKey"(arg0: $ResourceLocation$Type): $TagKey<(V)>
 "getTagNames"(): $Stream<($TagKey<(V)>)>
 "isKnownTagName"(arg0: $TagKey$Type<(V)>): boolean
 "getReverseTag"(arg0: V): $Optional<($IReverseTag<(V)>)>
 "createOptionalTagKey"(arg0: $ResourceLocation$Type, arg1: $Set$Type<(any)>): $TagKey<(V)>
 "addOptionalTagDefaults"(arg0: $TagKey$Type<(V)>, arg1: $Set$Type<(any)>): void
 "iterator"(): $Iterator<($ITag<(V)>)>
 "spliterator"(): $Spliterator<($ITag<(V)>)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ITagManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITagManager$Type<V> = ($ITagManager<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITagManager_<V> = $ITagManager$Type<(V)>;
}}
declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $MissingMappingsEvent$Mapping<T> implements $Comparable<($MissingMappingsEvent$Mapping<(T)>)> {

constructor(arg0: $IForgeRegistry$Type<(T)>, arg1: $IForgeRegistry$Type<(T)>, arg2: $ResourceLocation$Type, arg3: integer)

public "compareTo"(arg0: $MissingMappingsEvent$Mapping$Type<(T)>): integer
public "getKey"(): $ResourceLocation
public "getId"(): integer
public "fail"(): void
public "ignore"(): void
public "warn"(): void
public "remap"(arg0: T): void
public "getRegistry"(): $IForgeRegistry<(T)>
get "key"(): $ResourceLocation
get "id"(): integer
get "registry"(): $IForgeRegistry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingMappingsEvent$Mapping$Type<T> = ($MissingMappingsEvent$Mapping<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingMappingsEvent$Mapping_<T> = $MissingMappingsEvent$Mapping$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter" {
import {$Message, $Message$Type} from "packages/net/minecraftforge/fml/loading/progress/$Message"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ProgressMeter {

constructor(arg0: string, arg1: integer, arg2: integer, arg3: $Message$Type)

public "name"(): string
public "increment"(): void
public "current"(): integer
public "label"(arg0: string): void
public "label"(): $Message
public "steps"(): integer
public "complete"(): void
public "setAbsolute"(arg0: integer): void
public "progress"(): float
set "absolute"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressMeter$Type = ($ProgressMeter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProgressMeter_ = $ProgressMeter$Type;
}}
declare module "packages/net/minecraftforge/data/event/$GatherDataEvent$DataGeneratorConfig" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$HolderLookup$Provider, $HolderLookup$Provider$Type} from "packages/net/minecraft/core/$HolderLookup$Provider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DataGenerator, $DataGenerator$Type} from "packages/net/minecraft/data/$DataGenerator"

export class $GatherDataEvent$DataGeneratorConfig {

constructor(arg0: $Set$Type<(string)>, arg1: $Path$Type, arg2: $Collection$Type<($Path$Type)>, arg3: $CompletableFuture$Type<($HolderLookup$Provider$Type)>, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean, arg8: boolean, arg9: boolean)

public "getInputs"(): $Collection<($Path)>
public "getMods"(): $Set<(string)>
public "makeGenerator"(arg0: $Function$Type<($Path$Type), ($Path$Type)>, arg1: boolean): $DataGenerator
public "runAll"(): void
public "isFlat"(): boolean
get "inputs"(): $Collection<($Path)>
get "mods"(): $Set<(string)>
get "flat"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GatherDataEvent$DataGeneratorConfig$Type = ($GatherDataEvent$DataGeneratorConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GatherDataEvent$DataGeneratorConfig_ = $GatherDataEvent$DataGeneratorConfig$Type;
}}
declare module "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $RegisterColorHandlersEvent extends $Event implements $IModBusEvent {


public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterColorHandlersEvent$Type = ($RegisterColorHandlersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterColorHandlersEvent_ = $RegisterColorHandlersEvent$Type;
}}
declare module "packages/net/minecraftforge/network/$IContainerFactory" {
import {$MenuType$MenuSupplier, $MenuType$MenuSupplier$Type} from "packages/net/minecraft/world/inventory/$MenuType$MenuSupplier"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<(T)> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T
 "create"(arg0: integer, arg1: $Inventory$Type): T

(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T
}

export namespace $IContainerFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerFactory$Type<T> = ($IContainerFactory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IContainerFactory_<T> = $IContainerFactory$Type<(T)>;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventListener" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export interface $IEventListener {

 "invoke"(arg0: $Event$Type): void
 "listenerName"(): string

(arg0: $Event$Type): void
}

export namespace $IEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventListener$Type = ($IEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventListener_ = $IEventListener$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelData$Builder" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"

export class $ModelData$Builder {


public "build"(): $ModelData
public "with"<T>(arg0: $ModelProperty$Type<(T)>, arg1: T): $ModelData$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Builder$Type = ($ModelData$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData$Builder_ = $ModelData$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder" {
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $ConfiguredModel$Builder<T> {


public "build"(): ($ConfiguredModel)[]
public "weight"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "modelFile"(arg0: $ModelFile$Type): $ConfiguredModel$Builder<(T)>
public "uvLock"(arg0: boolean): $ConfiguredModel$Builder<(T)>
public "buildLast"(): $ConfiguredModel
public "rotationY"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "rotationX"(arg0: integer): $ConfiguredModel$Builder<(T)>
public "addModel"(): T
public "nextModel"(): $ConfiguredModel$Builder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredModel$Builder$Type<T> = ($ConfiguredModel$Builder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredModel$Builder_<T> = $ConfiguredModel$Builder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent$ILivingTargetType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LivingChangeTargetEvent$ILivingTargetType {

}

export namespace $LivingChangeTargetEvent$ILivingTargetType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingChangeTargetEvent$ILivingTargetType$Type = ($LivingChangeTargetEvent$ILivingTargetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingChangeTargetEvent$ILivingTargetType_ = $LivingChangeTargetEvent$ILivingTargetType$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventBusInvokeDispatcher" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IEventListener, $IEventListener$Type} from "packages/net/minecraftforge/eventbus/api/$IEventListener"

export interface $IEventBusInvokeDispatcher {

 "invoke"(arg0: $IEventListener$Type, arg1: $Event$Type): void

(arg0: $IEventListener$Type, arg1: $Event$Type): void
}

export namespace $IEventBusInvokeDispatcher {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBusInvokeDispatcher$Type = ($IEventBusInvokeDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventBusInvokeDispatcher_ = $IEventBusInvokeDispatcher$Type;
}}
declare module "packages/net/minecraftforge/network/$ServerStatusPing$ChannelData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ServerStatusPing$ChannelData extends $Record {
static readonly "CODEC": $Codec<($ServerStatusPing$ChannelData)>

constructor(res: $ResourceLocation$Type, version: string, required: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "version"(): string
public "hashCode"(): integer
public "res"(): $ResourceLocation
public "required"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatusPing$ChannelData$Type = ($ServerStatusPing$ChannelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStatusPing$ChannelData_ = $ServerStatusPing$ChannelData$Type;
}}
declare module "packages/net/minecraftforge/registries/$DeferredRegister" {
import {$IEventBus, $IEventBus$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBus"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RegistryBuilder, $RegistryBuilder$Type} from "packages/net/minecraftforge/registries/$RegistryBuilder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export class $DeferredRegister<T> {


public "register"(arg0: $IEventBus$Type): void
public "register"<I extends T>(arg0: string, arg1: $Supplier$Type<(any)>): $RegistryObject<(I)>
public static "create"<B>(arg0: $IForgeRegistry$Type<(B)>, arg1: string): $DeferredRegister<(B)>
public static "create"<B>(arg0: $ResourceKey$Type<(any)>, arg1: string): $DeferredRegister<(B)>
public static "create"<B>(arg0: $ResourceLocation$Type, arg1: string): $DeferredRegister<(B)>
public "getEntries"(): $Collection<($RegistryObject<(T)>)>
public "makeRegistry"(arg0: $Supplier$Type<($RegistryBuilder$Type<(T)>)>): $Supplier<($IForgeRegistry<(T)>)>
public "getRegistryKey"(): $ResourceKey<(any)>
public "createTagKey"(arg0: string): $TagKey<(T)>
public "createTagKey"(arg0: $ResourceLocation$Type): $TagKey<(T)>
public static "createOptional"<B>(arg0: $ResourceLocation$Type, arg1: string): $DeferredRegister<(B)>
public static "createOptional"<B>(arg0: $ResourceKey$Type<(any)>, arg1: string): $DeferredRegister<(B)>
public "getRegistryName"(): $ResourceLocation
public "createOptionalTagKey"(arg0: $ResourceLocation$Type, arg1: $Set$Type<(any)>): $TagKey<(T)>
public "createOptionalTagKey"(arg0: string, arg1: $Set$Type<(any)>): $TagKey<(T)>
public "addOptionalTagDefaults"(arg0: $TagKey$Type<(T)>, arg1: $Set$Type<(any)>): void
get "entries"(): $Collection<($RegistryObject<(T)>)>
get "registryKey"(): $ResourceKey<(any)>
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredRegister$Type<T> = ($DeferredRegister<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredRegister_<T> = $DeferredRegister$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/level/$BlockEvent$BreakEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEvent, $BlockEvent$Type} from "packages/net/minecraftforge/event/level/$BlockEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent$BreakEvent extends $BlockEvent {

constructor()
constructor(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type)

public "getExpToDrop"(): integer
public "setExpToDrop"(arg0: integer): void
public "isCancelable"(): boolean
public "getPlayer"(): $Player
public "getListenerList"(): $ListenerList
get "expToDrop"(): integer
set "expToDrop"(value: integer)
get "cancelable"(): boolean
get "player"(): $Player
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$BreakEvent$Type = ($BlockEvent$BreakEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent$BreakEvent_ = $BlockEvent$BreakEvent$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$MissingFactory<V> {

 "createMissing"(arg0: $ResourceLocation$Type, arg1: boolean): V

(arg0: $ResourceLocation$Type, arg1: boolean): V
}

export namespace $IForgeRegistry$MissingFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$MissingFactory$Type<V> = ($IForgeRegistry$MissingFactory<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$MissingFactory_<V> = $IForgeRegistry$MissingFactory$Type<(V)>;
}}
declare module "packages/net/minecraftforge/fml/config/$ConfigFileTypeHandler" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CommentedFileConfig, $CommentedFileConfig$Type} from "packages/com/electronwill/nightconfig/core/file/$CommentedFileConfig"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ConfigFileTypeHandler {

constructor()

public "reader"(arg0: $Path$Type): $Function<($ModConfig), ($CommentedFileConfig)>
public "unload"(arg0: $Path$Type, arg1: $ModConfig$Type): void
public static "backUpConfig"(arg0: $CommentedFileConfig$Type): void
public static "backUpConfig"(arg0: $CommentedFileConfig$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigFileTypeHandler$Type = ($ConfigFileTypeHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigFileTypeHandler_ = $ConfigFileTypeHandler$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$GenericEvent" {
import {$IGenericEvent, $IGenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$IGenericEvent"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Type, $Type$Type} from "packages/java/lang/reflect/$Type"

export class $GenericEvent<T> extends $Event implements $IGenericEvent<(T)> {

constructor()

public "getGenericType"(): $Type
get "genericType"(): $Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericEvent$Type<T> = ($GenericEvent<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericEvent_<T> = $GenericEvent$Type<(T)>;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistryInternal" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryInternal<V> extends $IForgeRegistry<(V)> {

 "getValue"(arg0: integer): V
 "register"(arg0: integer, arg1: $ResourceLocation$Type, arg2: V): void
 "setSlaveMap"(arg0: $ResourceLocation$Type, arg1: any): void
 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "register"(arg0: string, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getKeys"(): $Set<($ResourceLocation)>
 "tags"(): $ITagManager<(V)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getValues"(): $Collection<(V)>
 "getCodec"(): $Codec<(V)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDefaultKey"(): $ResourceLocation
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getRegistryName"(): $ResourceLocation
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistryInternal {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistryInternal$Type<V> = ($IForgeRegistryInternal<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistryInternal_<V> = $IForgeRegistryInternal$Type<(V)>;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandler" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IFluidHandler {

 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTankCapacity"(arg0: integer): integer
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
}

export namespace $IFluidHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandler$Type = ($IFluidHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandler_ = $IFluidHandler$Type;
}}
declare module "packages/net/minecraftforge/items/wrapper/$CombinedInvWrapper" {
import {$Approximate, $Approximate$Type} from "packages/org/valkyrienskies/create_interactive/code/$Approximate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $CombinedInvWrapper implements $IItemHandlerModifiable, $Approximate {

constructor(...arg0: ($IItemHandlerModifiable$Type)[])

public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getSlots"(): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "somebody"(arg0: $Collection$Type<(any)>): void
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "isMutable"(): boolean
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "asContainer"(): $Container
public "getWidth"(): integer
public "setChanged"(): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinedInvWrapper$Type = ($CombinedInvWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CombinedInvWrapper_ = $CombinedInvWrapper$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $EnumArgument<T extends $Enum<(T)>> implements $ArgumentType<(T)> {


public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public static "enumArgument"<R extends $Enum<(R)>>(arg0: $Class$Type<(R)>): $EnumArgument<(R)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Type<T> = ($EnumArgument<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument_<T> = $EnumArgument$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$ModelFile$ExistingModelFile, $ModelFile$ExistingModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelProvider<T extends $ModelBuilder<(T)>> implements $DataProvider {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: string, arg3: $BiFunction$Type<($ResourceLocation$Type), ($ExistingFileHelper$Type), (T)>, arg4: $ExistingFileHelper$Type)
constructor(arg0: $PackOutput$Type, arg1: string, arg2: string, arg3: $Function$Type<($ResourceLocation$Type), (T)>, arg4: $ExistingFileHelper$Type)

public "sign"(arg0: string, arg1: $ResourceLocation$Type): T
public "nested"(): T
public "button"(arg0: string, arg1: $ResourceLocation$Type): T
public "getBuilder"(arg0: string): T
public "leaves"(arg0: string, arg1: $ResourceLocation$Type): T
public "carpet"(arg0: string, arg1: $ResourceLocation$Type): T
public "stairs"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "modLoc"(arg0: string): $ResourceLocation
public "cubeAll"(arg0: string, arg1: $ResourceLocation$Type): T
public "cube"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type, arg6: $ResourceLocation$Type): T
public "torch"(arg0: string, arg1: $ResourceLocation$Type): T
public "cross"(arg0: string, arg1: $ResourceLocation$Type): T
public "pressurePlate"(arg0: string, arg1: $ResourceLocation$Type): T
public "slab"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "fenceGate"(arg0: string, arg1: $ResourceLocation$Type): T
public "doorBottomRightOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "cubeColumnHorizontal"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "orientableWithBottom"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): T
public "trapdoorOrientableBottom"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOrientableTop"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorOrientableOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "getExistingFile"(arg0: $ResourceLocation$Type): $ModelFile$ExistingModelFile
public "singleTexture"(arg0: string, arg1: $ResourceLocation$Type, arg2: string, arg3: $ResourceLocation$Type): T
public "singleTexture"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "mcLoc"(arg0: string): $ResourceLocation
public "slabTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "cubeTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "stairsInner"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "orientable"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "crop"(arg0: string, arg1: $ResourceLocation$Type): T
public "orientableVertical"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "stairsOuter"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "cubeColumn"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "cubeBottomTop"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): T
public "paneNoSideAlt"(arg0: string, arg1: $ResourceLocation$Type): T
public "panePost"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "paneSide"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "fenceGateWall"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallPost"(arg0: string, arg1: $ResourceLocation$Type): T
public "fencePost"(arg0: string, arg1: $ResourceLocation$Type): T
public "buttonInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallInventory"(arg0: string, arg1: $ResourceLocation$Type): T
public "paneSideAlt"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "paneNoSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "buttonPressed"(arg0: string, arg1: $ResourceLocation$Type): T
public "wallSideTall"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceGateWallOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "fenceSide"(arg0: string, arg1: $ResourceLocation$Type): T
public "pressurePlateDown"(arg0: string, arg1: $ResourceLocation$Type): T
public "trapdoorTop"(arg0: string, arg1: $ResourceLocation$Type): T
public "doorBottomLeftOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorBottomRight"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopLeft"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopRightOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "trapdoorBottom"(arg0: string, arg1: $ResourceLocation$Type): T
public "doorBottomLeft"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "doorTopRight"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "torchWall"(arg0: string, arg1: $ResourceLocation$Type): T
public "doorTopLeftOpen"(arg0: string, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): T
public "trapdoorOpen"(arg0: string, arg1: $ResourceLocation$Type): T
public "withExistingParent"(arg0: string, arg1: string): T
public "withExistingParent"(arg0: string, arg1: $ResourceLocation$Type): T
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
public "getName"(): string
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelProvider$Type<T> = ($ModelProvider<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelProvider_<T> = $ModelProvider$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/event/$InputEvent$InteractionKeyMappingTriggered" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$InputEvent, $InputEvent$Type} from "packages/net/minecraftforge/client/event/$InputEvent"

export class $InputEvent$InteractionKeyMappingTriggered extends $InputEvent {

constructor(arg0: integer, arg1: $KeyMapping$Type, arg2: $InteractionHand$Type)
constructor()

public "isCancelable"(): boolean
public "setSwingHand"(arg0: boolean): void
public "isAttack"(): boolean
public "getHand"(): $InteractionHand
public "getListenerList"(): $ListenerList
public "shouldSwingHand"(): boolean
public "isUseItem"(): boolean
public "isPickBlock"(): boolean
public "getKeyMapping"(): $KeyMapping
get "cancelable"(): boolean
set "swingHand"(value: boolean)
get "attack"(): boolean
get "hand"(): $InteractionHand
get "listenerList"(): $ListenerList
get "useItem"(): boolean
get "pickBlock"(): boolean
get "keyMapping"(): $KeyMapping
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputEvent$InteractionKeyMappingTriggered$Type = ($InputEvent$InteractionKeyMappingTriggered);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputEvent$InteractionKeyMappingTriggered_ = $InputEvent$InteractionKeyMappingTriggered$Type;
}}
declare module "packages/net/minecraftforge/client/gui/overlay/$IGuiOverlay" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$ForgeGui, $ForgeGui$Type} from "packages/net/minecraftforge/client/gui/overlay/$ForgeGui"

export interface $IGuiOverlay {

 "render"(arg0: $ForgeGui$Type, arg1: $GuiGraphics$Type, arg2: float, arg3: integer, arg4: integer): void

(arg0: $ForgeGui$Type, arg1: $GuiGraphics$Type, arg2: float, arg3: integer, arg4: integer): void
}

export namespace $IGuiOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiOverlay$Type = ($IGuiOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiOverlay_ = $IGuiOverlay$Type;
}}
declare module "packages/net/minecraftforge/client/model/data/$ModelData" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ModelProperty, $ModelProperty$Type} from "packages/net/minecraftforge/client/model/data/$ModelProperty"
import {$ModelData$Builder, $ModelData$Builder$Type} from "packages/net/minecraftforge/client/model/data/$ModelData$Builder"

export class $ModelData {
static readonly "EMPTY": $ModelData


public "get"<T>(arg0: $ModelProperty$Type<(T)>): T
public static "builder"(): $ModelData$Builder
public "getProperties"(): $Set<(any)>
public "has"(arg0: $ModelProperty$Type<(any)>): boolean
public "derive"(): $ModelData$Builder
get "properties"(): $Set<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelData$Type = ($ModelData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelData_ = $ModelData$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$RightClickBlock" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event$Result, $Event$Result$Type} from "packages/net/minecraftforge/eventbus/api/$Event$Result"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $PlayerInteractEvent$RightClickBlock extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type)

public "getUseItem"(): $Event$Result
public "setUseBlock"(arg0: $Event$Result$Type): void
public "setUseItem"(arg0: $Event$Result$Type): void
public "getUseBlock"(): $Event$Result
public "setCanceled"(arg0: boolean): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getHitVec"(): $BlockHitResult
get "useItem"(): $Event$Result
set "useBlock"(value: $Event$Result$Type)
set "useItem"(value: $Event$Result$Type)
get "useBlock"(): $Event$Result
set "canceled"(value: boolean)
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "hitVec"(): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$RightClickBlock$Type = ($PlayerInteractEvent$RightClickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$RightClickBlock_ = $PlayerInteractEvent$RightClickBlock$Type;
}}
declare module "packages/net/minecraftforge/fml/$ModContainer" {
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ProgressMeter, $ProgressMeter$Type} from "packages/net/minecraftforge/fml/loading/progress/$ProgressMeter"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Executor, $Executor$Type} from "packages/java/util/concurrent/$Executor"
import {$IExtensionPoint, $IExtensionPoint$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IExtensionPoint$DisplayTest, $IExtensionPoint$DisplayTest$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IModStateTransition$EventGenerator, $IModStateTransition$EventGenerator$Type} from "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModContainer {

constructor(arg0: $IModInfo$Type)

public "matches"(arg0: any): boolean
public "getModId"(): string
public "getNamespace"(): string
public "addConfig"(arg0: $ModConfig$Type): void
public "dispatchConfigEvent"(arg0: $IConfigEvent$Type): void
public "getCurrentState"(): $ModLoadingStage
public "getModInfo"(): $IModInfo
public "getCustomExtension"<T extends $Record>(arg0: $Class$Type<(any)>): $Optional<(T)>
public static "buildTransitionHandler"<T extends ($Event) & ($IModBusEvent)>(arg0: $ModContainer$Type, arg1: $IModStateTransition$EventGenerator$Type<(T)>, arg2: $ProgressMeter$Type, arg3: $BiFunction$Type<($ModLoadingStage$Type), ($Throwable$Type), ($ModLoadingStage$Type)>, arg4: $Executor$Type): $CompletableFuture<(void)>
public "registerDisplayTest"(arg0: $Supplier$Type<($IExtensionPoint$DisplayTest$Type)>): void
public "registerDisplayTest"(arg0: $IExtensionPoint$DisplayTest$Type): void
public "registerDisplayTest"(arg0: $Supplier$Type<(string)>, arg1: $BiPredicate$Type<(string), (boolean)>): void
public "registerDisplayTest"(arg0: string, arg1: $BiPredicate$Type<(string), (boolean)>): void
public "getMod"(): any
public "registerExtensionPoint"<T extends ($Record) & ($IExtensionPoint<(T)>)>(arg0: $Class$Type<(any)>, arg1: $Supplier$Type<(T)>): void
get "modId"(): string
get "namespace"(): string
get "currentState"(): $ModLoadingStage
get "modInfo"(): $IModInfo
get "mod"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModContainer$Type = ($ModContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModContainer_ = $ModContainer$Type;
}}
declare module "packages/net/minecraftforge/common/util/$MutableHashedLinkedMap" {
import {$MutableHashedLinkedMap$MergeFunction, $MutableHashedLinkedMap$MergeFunction$Type} from "packages/net/minecraftforge/common/util/$MutableHashedLinkedMap$MergeFunction"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Hash$Strategy, $Hash$Strategy$Type} from "packages/it/unimi/dsi/fastutil/$Hash$Strategy"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export class $MutableHashedLinkedMap<K, V> implements $Iterable<($Map$Entry<(K), (V)>)> {
static readonly "BASIC": $Hash$Strategy<(any)>
static readonly "IDENTITY": $Hash$Strategy<(any)>

constructor(arg0: $Hash$Strategy$Type<(any)>, arg1: $MutableHashedLinkedMap$MergeFunction$Type<(K), (V)>)
constructor(arg0: $Hash$Strategy$Type<(any)>)
constructor()

public "remove"(arg0: K): V
public "get"(arg0: K): V
public "put"(arg0: K, arg1: V): V
public "isEmpty"(): boolean
public "iterator"(): $Iterator<($Map$Entry<(K), (V)>)>
public "contains"(arg0: K): boolean
public "putBefore"(arg0: K, arg1: K, arg2: V): V
public "putAfter"(arg0: K, arg1: K, arg2: V): V
public "putFirst"(arg0: K, arg1: V): V
public "spliterator"(): $Spliterator<($Map$Entry<(K), (V)>)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Map$Entry<(K), (V)>>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableHashedLinkedMap$Type<K, V> = ($MutableHashedLinkedMap<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableHashedLinkedMap_<K, V> = $MutableHashedLinkedMap$Type<(K), (V)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeEnchantment" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MobType, $MobType$Type} from "packages/net/minecraft/world/entity/$MobType"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export interface $IForgeEnchantment {

 "getDamageBonus"(arg0: integer, arg1: $MobType$Type, arg2: $ItemStack$Type): float
 "allowedInCreativeTab"(arg0: $Item$Type, arg1: $Set$Type<($EnchantmentCategory$Type)>): boolean
}

export namespace $IForgeEnchantment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEnchantment$Type = ($IForgeEnchantment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEnchantment_ = $IForgeEnchantment$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$Capability" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"

export class $Capability<T> {


public "getName"(): string
public "isRegistered"(): boolean
public "addListener"(arg0: $Consumer$Type<($Capability$Type<(T)>)>): $Capability<(T)>
public "orEmpty"<R>(arg0: $Capability$Type<(R)>, arg1: $LazyOptional$Type<(T)>): $LazyOptional<(R)>
get "name"(): string
get "registered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Capability$Type<T> = ($Capability<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Capability_<T> = $Capability$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"

export class $BlockStateProvider$ConfiguredModelList {

constructor(...arg0: ($ConfiguredModel$Type)[])
constructor(arg0: $ConfiguredModel$Type)

public "append"(...arg0: ($ConfiguredModel$Type)[]): $BlockStateProvider$ConfiguredModelList
public "toJSON"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateProvider$ConfiguredModelList$Type = ($BlockStateProvider$ConfiguredModelList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateProvider$ConfiguredModelList_ = $BlockStateProvider$ConfiguredModelList$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo$Builder" {
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo"
import {$StructureSettingsBuilder, $StructureSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$StructureSettingsBuilder"

export class $ModifiableStructureInfo$StructureInfo$Builder {


public static "copyOf"(arg0: $ModifiableStructureInfo$StructureInfo$Type): $ModifiableStructureInfo$StructureInfo$Builder
public "build"(): $ModifiableStructureInfo$StructureInfo
public "getStructureSettings"(): $StructureSettingsBuilder
get "structureSettings"(): $StructureSettingsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Builder$Type = ($ModifiableStructureInfo$StructureInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo$Builder_ = $ModifiableStructureInfo$StructureInfo$Builder$Type;
}}
declare module "packages/net/minecraftforge/common/data/$LanguageProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export class $LanguageProvider implements $DataProvider {

constructor(arg0: $PackOutput$Type, arg1: string, arg2: string)

public "add"(arg0: $ItemStack$Type, arg1: string): void
public "add"(arg0: string, arg1: string): void
public "add"(arg0: $Item$Type, arg1: string): void
public "add"(arg0: $Enchantment$Type, arg1: string): void
public "add"(arg0: $MobEffect$Type, arg1: string): void
public "add"(arg0: $EntityType$Type<(any)>, arg1: string): void
public "add"(arg0: $Block$Type, arg1: string): void
public "addItem"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "getName"(): string
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "addBlock"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addEntityType"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addItemStack"(arg0: $Supplier$Type<($ItemStack$Type)>, arg1: string): void
public "addEffect"(arg0: $Supplier$Type<(any)>, arg1: string): void
public "addEnchantment"(arg0: $Supplier$Type<(any)>, arg1: string): void
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageProvider$Type = ($LanguageProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LanguageProvider_ = $LanguageProvider$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$ClassData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"

export class $ModFileScanData$ClassData extends $Record {

constructor(clazz: $Type$Type, parent: $Type$Type, interfaces: $Set$Type<($Type$Type)>)

public "clazz"(): $Type
public "parent"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "interfaces"(): $Set<($Type)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$ClassData$Type = ($ModFileScanData$ClassData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData$ClassData_ = $ModFileScanData$ClassData$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$CapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CapabilityDispatcher, $CapabilityDispatcher$Type} from "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher"
import {$ICapabilityProviderImpl, $ICapabilityProviderImpl$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProviderImpl"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $CapabilityProvider<B extends $ICapabilityProviderImpl<(B)>> implements $ICapabilityProviderImpl<(B)> {


public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "areCapsCompatible"(arg0: $CapabilityDispatcher$Type): boolean
public "areCapsCompatible"(arg0: $CapabilityProvider$Type<(B)>): boolean
public "invalidateCaps"(): void
public "reviveCaps"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityProvider$Type<B> = ($CapabilityProvider<(B)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityProvider_<B> = $CapabilityProvider$Type<(B)>;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo" {
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BiomeModifier, $BiomeModifier$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"

export class $ModifiableBiomeInfo {

constructor(arg0: $ModifiableBiomeInfo$BiomeInfo$Type)

public "get"(): $ModifiableBiomeInfo$BiomeInfo
public "getOriginalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
public "applyBiomeModifiers"(arg0: $Holder$Type<($Biome$Type)>, arg1: $List$Type<($BiomeModifier$Type)>): void
public "getModifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "originalBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
get "modifiedBiomeInfo"(): $ModifiableBiomeInfo$BiomeInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$Type = ($ModifiableBiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo_ = $ModifiableBiomeInfo$Type;
}}
declare module "packages/net/minecraftforge/common/$IExtensibleEnum" {
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $IExtensibleEnum {

/**
 * 
 * @deprecated
 */
 "init"(): void
}

export namespace $IExtensibleEnum {
function createCodecForExtensibleEnum<E>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(any), (any)>): $Codec<(E)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensibleEnum$Type = ($IExtensibleEnum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensibleEnum_ = $IExtensibleEnum$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilitySerializable<T extends $Tag> extends $ICapabilityProvider, $INBTSerializable<(T)> {

 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: T): void
 "serializeNBT"(): T
}

export namespace $ICapabilitySerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilitySerializable$Type<T> = ($ICapabilitySerializable<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilitySerializable_<T> = $ICapabilitySerializable$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$StructureModifier$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $StructureModifier$Phase extends $Enum<($StructureModifier$Phase)> {
static readonly "BEFORE_EVERYTHING": $StructureModifier$Phase
static readonly "ADD": $StructureModifier$Phase
static readonly "REMOVE": $StructureModifier$Phase
static readonly "MODIFY": $StructureModifier$Phase
static readonly "AFTER_EVERYTHING": $StructureModifier$Phase


public static "values"(): ($StructureModifier$Phase)[]
public static "valueOf"(arg0: string): $StructureModifier$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Phase$Type = (("add") | ("modify") | ("before_everything") | ("after_everything") | ("remove")) | ($StructureModifier$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier$Phase_ = $StructureModifier$Phase$Type;
}}
declare module "packages/net/minecraftforge/common/$PlantType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $PlantType {
static readonly "PLAINS": $PlantType
static readonly "DESERT": $PlantType
static readonly "BEACH": $PlantType
static readonly "CAVE": $PlantType
static readonly "WATER": $PlantType
static readonly "NETHER": $PlantType
static readonly "CROP": $PlantType


public "getName"(): string
public static "get"(arg0: string): $PlantType
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantType$Type = ($PlantType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlantType_ = $PlantType$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$BlockModel, $BlockModel$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel"
import {$BlockGeometryBakingContext$VisibilityData, $BlockGeometryBakingContext$VisibilityData$Type} from "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IGeometryBakingContext, $IGeometryBakingContext$Type} from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$IUnbakedGeometry, $IUnbakedGeometry$Type} from "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RenderTypeGroup, $RenderTypeGroup$Type} from "packages/net/minecraftforge/client/$RenderTypeGroup"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export class $BlockGeometryBakingContext implements $IGeometryBakingContext {
readonly "owner": $BlockModel
readonly "visibilityData": $BlockGeometryBakingContext$VisibilityData

constructor(arg0: $BlockModel$Type)

public "copyFrom"(arg0: $BlockGeometryBakingContext$Type): void
public "isGui3d"(): boolean
public "useBlockLight"(): boolean
public "useAmbientOcclusion"(): boolean
public "bake"(arg0: $ModelBaker$Type, arg1: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg2: $ModelState$Type, arg3: $ItemOverrides$Type, arg4: $ResourceLocation$Type): $BakedModel
public "getTransforms"(): $ItemTransforms
public "getMaterial"(arg0: string): $Material
public "setCustomGeometry"(arg0: $IUnbakedGeometry$Type<(any)>): void
public "setRenderTypeHint"(arg0: $ResourceLocation$Type): void
public "setRootTransform"(arg0: $Transformation$Type): void
public "setGui3d"(arg0: boolean): void
public "getCustomGeometry"(): $IUnbakedGeometry<(any)>
public "getModelName"(): string
public "getRenderTypeHint"(): $ResourceLocation
public "isComponentVisible"(arg0: string, arg1: boolean): boolean
public "getRootTransform"(): $Transformation
public "hasMaterial"(arg0: string): boolean
public "hasCustomGeometry"(): boolean
public "getRenderType"(arg0: $ResourceLocation$Type): $RenderTypeGroup
get "gui3d"(): boolean
get "transforms"(): $ItemTransforms
set "customGeometry"(value: $IUnbakedGeometry$Type<(any)>)
set "renderTypeHint"(value: $ResourceLocation$Type)
set "rootTransform"(value: $Transformation$Type)
set "gui3d"(value: boolean)
get "customGeometry"(): $IUnbakedGeometry<(any)>
get "modelName"(): string
get "renderTypeHint"(): $ResourceLocation
get "rootTransform"(): $Transformation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$Type = ($BlockGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext_ = $BlockGeometryBakingContext$Type;
}}
declare module "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata" {
import {$ITextureAtlasSpriteLoader, $ITextureAtlasSpriteLoader$Type} from "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader"
import {$MetadataSectionSerializer, $MetadataSectionSerializer$Type} from "packages/net/minecraft/server/packs/metadata/$MetadataSectionSerializer"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"

export class $ForgeTextureMetadata {
static readonly "EMPTY": $ForgeTextureMetadata
static readonly "SERIALIZER": $MetadataSectionSerializer<($ForgeTextureMetadata)>

constructor(arg0: $ITextureAtlasSpriteLoader$Type)

public "getLoader"(): $ITextureAtlasSpriteLoader
public static "forResource"(arg0: $Resource$Type): $ForgeTextureMetadata
get "loader"(): $ITextureAtlasSpriteLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeTextureMetadata$Type = ($ForgeTextureMetadata);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeTextureMetadata_ = $ForgeTextureMetadata$Type;
}}
declare module "packages/net/minecraftforge/client/event/$RegisterGuiOverlaysEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGuiOverlay, $IGuiOverlay$Type} from "packages/net/minecraftforge/client/gui/overlay/$IGuiOverlay"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RegisterGuiOverlaysEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $Map$Type<($ResourceLocation$Type), ($IGuiOverlay$Type)>, arg1: $List$Type<($ResourceLocation$Type)>)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "registerAboveAll"(arg0: string, arg1: $IGuiOverlay$Type): void
public "registerBelow"(arg0: $ResourceLocation$Type, arg1: string, arg2: $IGuiOverlay$Type): void
public "registerBelowAll"(arg0: string, arg1: $IGuiOverlay$Type): void
public "registerAbove"(arg0: $ResourceLocation$Type, arg1: string, arg2: $IGuiOverlay$Type): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterGuiOverlaysEvent$Type = ($RegisterGuiOverlaysEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterGuiOverlaysEvent_ = $RegisterGuiOverlaysEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingDeathEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingDeathEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type)

public "getSource"(): $DamageSource
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "source"(): $DamageSource
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDeathEvent$Type = ($LivingDeathEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDeathEvent_ = $LivingDeathEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LootingLevelEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LootingLevelEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: integer)

public "getListenerList"(): $ListenerList
public "getLootingLevel"(): integer
public "setLootingLevel"(arg0: integer): void
public "getDamageSource"(): $DamageSource
get "listenerList"(): $ListenerList
get "lootingLevel"(): integer
set "lootingLevel"(value: integer)
get "damageSource"(): $DamageSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LootingLevelEvent$Type = ($LootingLevelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LootingLevelEvent_ = $LootingLevelEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingFallEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingFallEvent extends $LivingEvent {

constructor(arg0: $LivingEntity$Type, arg1: float, arg2: float)
constructor()

public "getDistance"(): float
public "isCancelable"(): boolean
public "setDamageMultiplier"(arg0: float): void
public "getListenerList"(): $ListenerList
public "setDistance"(arg0: float): void
public "getDamageMultiplier"(): float
get "distance"(): float
get "cancelable"(): boolean
set "damageMultiplier"(value: float)
get "listenerList"(): $ListenerList
set "distance"(value: float)
get "damageMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingFallEvent$Type = ($LivingFallEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingFallEvent_ = $LivingFallEvent$Type;
}}
declare module "packages/net/minecraftforge/network/$PlayMessages$SpawnEntity" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayMessages$SpawnEntity {


public static "decode"(arg0: $FriendlyByteBuf$Type): $PlayMessages$SpawnEntity
public static "encode"(arg0: $PlayMessages$SpawnEntity$Type, arg1: $FriendlyByteBuf$Type): void
public static "handle"(arg0: $PlayMessages$SpawnEntity$Type, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): void
public "getEntity"(): $Entity
public "getTypeId"(): integer
public "getUuid"(): $UUID
public "getYaw"(): byte
public "getPitch"(): byte
public "getEntityId"(): integer
public "getPosZ"(): double
public "getVelY"(): integer
public "getAdditionalData"(): $FriendlyByteBuf
public "getVelZ"(): integer
public "getHeadYaw"(): byte
public "getVelX"(): integer
public "getPosY"(): double
public "getPosX"(): double
get "entity"(): $Entity
get "typeId"(): integer
get "uuid"(): $UUID
get "yaw"(): byte
get "pitch"(): byte
get "entityId"(): integer
get "posZ"(): double
get "velY"(): integer
get "additionalData"(): $FriendlyByteBuf
get "velZ"(): integer
get "headYaw"(): byte
get "velX"(): integer
get "posY"(): double
get "posX"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayMessages$SpawnEntity$Type = ($PlayMessages$SpawnEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayMessages$SpawnEntity_ = $PlayMessages$SpawnEntity$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/$IFluidHandlerItem" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFluidHandlerItem extends $IFluidHandler {

 "getContainer"(): $ItemStack
 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
 "getTankCapacity"(arg0: integer): integer
 "getTanks"(): integer
 "getFluidInTank"(arg0: integer): $FluidStack
}

export namespace $IFluidHandlerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidHandlerItem$Type = ($IFluidHandlerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidHandlerItem_ = $IFluidHandlerItem$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$MultiPartBlockStateBuilder$PartBuilder, $MultiPartBlockStateBuilder$PartBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder$PartBuilder"
import {$IGeneratedBlockState, $IGeneratedBlockState$Type} from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $MultiPartBlockStateBuilder implements $IGeneratedBlockState {

constructor(arg0: $Block$Type)

public "part"(): $ConfiguredModel$Builder<($MultiPartBlockStateBuilder$PartBuilder)>
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiPartBlockStateBuilder$Type = ($MultiPartBlockStateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiPartBlockStateBuilder_ = $MultiPartBlockStateBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/conditions/$IConditionSerializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ICondition, $ICondition$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition"

export interface $IConditionSerializer<T extends $ICondition> {

 "write"(arg0: $JsonObject$Type, arg1: T): void
 "read"(arg0: $JsonObject$Type): T
 "getID"(): $ResourceLocation
 "getJson"(arg0: T): $JsonObject
}

export namespace $IConditionSerializer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConditionSerializer$Type<T> = ($IConditionSerializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConditionSerializer_<T> = $IConditionSerializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo" {
import {$MobSpawnSettings, $MobSpawnSettings$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings"
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"

export class $ModifiableBiomeInfo$BiomeInfo extends $Record {

constructor(climateSettings: $Biome$ClimateSettings$Type, effects: $BiomeSpecialEffects$Type, generationSettings: $BiomeGenerationSettings$Type, mobSpawnSettings: $MobSpawnSettings$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mobSpawnSettings"(): $MobSpawnSettings
public "generationSettings"(): $BiomeGenerationSettings
public "climateSettings"(): $Biome$ClimateSettings
public "effects"(): $BiomeSpecialEffects
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Type = ($ModifiableBiomeInfo$BiomeInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo_ = $ModifiableBiomeInfo$BiomeInfo$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder" {
import {$ModelBuilder$FaceRotation, $ModelBuilder$FaceRotation$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"

export class $ModelBuilder$ElementBuilder$FaceBuilder {


public "end"(): $ModelBuilder$ElementBuilder<>
public "ao"(arg0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "color"(arg0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "texture"(arg0: string): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "emissivity"(arg0: integer, arg1: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "uvs"(arg0: float, arg1: float, arg2: float, arg3: float): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "rotation"(arg0: $ModelBuilder$FaceRotation$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "calculateNormals"(arg0: boolean): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "cullface"(arg0: $Direction$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "tintindex"(arg0: integer): $ModelBuilder$ElementBuilder$FaceBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$FaceBuilder$Type = ($ModelBuilder$ElementBuilder$FaceBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder$FaceBuilder_ = $ModelBuilder$ElementBuilder$FaceBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $ICapabilityProvider {

 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>

(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
}

export namespace $ICapabilityProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICapabilityProvider$Type = ($ICapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICapabilityProvider_ = $ICapabilityProvider$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerDestroyItemEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $PlayerDestroyItemEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $InteractionHand$Type)

public "getOriginal"(): $ItemStack
public "getHand"(): $InteractionHand
public "getListenerList"(): $ListenerList
get "original"(): $ItemStack
get "hand"(): $InteractionHand
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerDestroyItemEvent$Type = ($PlayerDestroyItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerDestroyItemEvent_ = $PlayerDestroyItemEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$IArmPoseTransformer" {
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IArmPoseTransformer {

 "applyTransform"(arg0: $HumanoidModel$Type<(any)>, arg1: $LivingEntity$Type, arg2: $HumanoidArm$Type): void

(arg0: $HumanoidModel$Type<(any)>, arg1: $LivingEntity$Type, arg2: $HumanoidArm$Type): void
}

export namespace $IArmPoseTransformer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArmPoseTransformer$Type = ($IArmPoseTransformer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IArmPoseTransformer_ = $IArmPoseTransformer$Type;
}}
declare module "packages/net/minecraftforge/event/level/$ChunkEvent$Unload" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$ChunkEvent, $ChunkEvent$Type} from "packages/net/minecraftforge/event/level/$ChunkEvent"

export class $ChunkEvent$Unload extends $ChunkEvent {

constructor(arg0: $ChunkAccess$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkEvent$Unload$Type = ($ChunkEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkEvent$Unload_ = $ChunkEvent$Unload$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ForgeFlowingFluid$Flowing extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Flowing$Type = ($ForgeFlowingFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Flowing_ = $ForgeFlowingFluid$Flowing$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $NetworkEvent extends $Event {

constructor()
constructor(arg0: $Supplier$Type<($NetworkEvent$Context$Type)>)

public "getPayload"(): $FriendlyByteBuf
public "getSource"(): $Supplier<($NetworkEvent$Context)>
public "isCancelable"(): boolean
public "getLoginIndex"(): integer
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "payload"(): $FriendlyByteBuf
get "source"(): $Supplier<($NetworkEvent$Context)>
get "cancelable"(): boolean
get "loginIndex"(): integer
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$Type = ($NetworkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent_ = $NetworkEvent$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigEvent" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent$ConfigConfig, $IConfigEvent$ConfigConfig$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigEvent {

 "self"<T extends ($Event) & ($IConfigEvent)>(): T
 "getConfig"(): $ModConfig

(): T
}

export namespace $IConfigEvent {
const CONFIGCONFIG: $IConfigEvent$ConfigConfig
function reloading(arg0: $ModConfig$Type): $IConfigEvent
function loading(arg0: $ModConfig$Type): $IConfigEvent
function unloading(arg0: $ModConfig$Type): $IConfigEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigEvent$Type = ($IConfigEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigEvent_ = $IConfigEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ItemTransforms, $ItemTransforms$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemTransforms"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$RenderTypeGroup, $RenderTypeGroup$Type} from "packages/net/minecraftforge/client/$RenderTypeGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IGeometryBakingContext {

 "isGui3d"(): boolean
 "useBlockLight"(): boolean
 "useAmbientOcclusion"(): boolean
 "getTransforms"(): $ItemTransforms
 "getMaterial"(arg0: string): $Material
 "getRenderType"(arg0: $ResourceLocation$Type): $RenderTypeGroup
 "getModelName"(): string
 "getRenderTypeHint"(): $ResourceLocation
 "isComponentVisible"(arg0: string, arg1: boolean): boolean
 "getRootTransform"(): $Transformation
 "hasMaterial"(arg0: string): boolean
}

export namespace $IGeometryBakingContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeometryBakingContext$Type = ($IGeometryBakingContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGeometryBakingContext_ = $IGeometryBakingContext$Type;
}}
declare module "packages/net/minecraftforge/registries/$ForgeRegistry" {
import {$ForgeRegistryForgeAccessor, $ForgeRegistryForgeAccessor$Type} from "packages/fuzs/puzzleslib/mixin/accessor/$ForgeRegistryForgeAccessor"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$MissingMappingsEvent, $MissingMappingsEvent$Type} from "packages/net/minecraftforge/registries/$MissingMappingsEvent"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$IdMappingEvent$IdRemapping, $IdMappingEvent$IdRemapping$Type} from "packages/net/minecraftforge/registries/$IdMappingEvent$IdRemapping"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Marker, $Marker$Type} from "packages/org/apache/logging/log4j/$Marker"
import {$IForgeRegistryModifiable, $IForgeRegistryModifiable$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryModifiable"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"
import {$Object2IntMap, $Object2IntMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeRegistry<V> implements $IForgeRegistryInternal<(V)>, $IForgeRegistryModifiable<(V)>, $ForgeRegistryForgeAccessor<(any)>, $IForgeRegistry<(any)> {
static readonly "REGISTRIES": $Marker


public "remove"(arg0: $ResourceLocation$Type): V
public "clear"(): void
public "getValue"(arg0: $ResourceLocation$Type): V
public "getValue"(arg0: integer): V
public "isEmpty"(): boolean
public "iterator"(): $Iterator<(V)>
public "getKey"(arg0: integer): $ResourceKey<(V)>
public "getKey"(arg0: V): $ResourceLocation
public "register"(arg0: $ResourceLocation$Type, arg1: V): void
public "register"(arg0: integer, arg1: $ResourceLocation$Type, arg2: V): void
public "register"(arg0: string, arg1: V): void
public "containsKey"(arg0: $ResourceLocation$Type): boolean
public "containsValue"(arg0: V): boolean
public "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
public "freeze"(): void
public "isLocked"(): boolean
public "getID"(arg0: V): integer
public "getID"(arg0: $ResourceLocation$Type): integer
public "getKeys"(): $Set<($ResourceLocation)>
public "tags"(): $ITagManager<(V)>
public "addAlias"(arg0: $ResourceLocation$Type, arg1: $ResourceLocation$Type): void
public "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
public "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
public "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
public "getValues"(): $Collection<(V)>
public "getRaw"(arg0: $ResourceLocation$Type): V
public "getCodec"(): $Codec<(V)>
public "unfreeze"(): void
public "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
public "bake"(): void
public "loadIds"(arg0: $Object2IntMap$Type<($ResourceLocation$Type)>, arg1: $Map$Type<($ResourceLocation$Type), (string)>, arg2: $Object2IntMap$Type<($ResourceLocation$Type)>, arg3: $Map$Type<($ResourceLocation$Type), ($IdMappingEvent$IdRemapping$Type)>, arg4: $ForgeRegistry$Type<(V)>, arg5: $ResourceLocation$Type): void
public "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
public "getMissingEvent"(arg0: $ResourceLocation$Type, arg1: $Object2IntMap$Type<($ResourceLocation$Type)>): $MissingMappingsEvent
public "getDelegateOrThrow"(value: any): $Holder$Reference<(any)>
public "getDelegateOrThrow"(rkey: $ResourceKey$Type<(any)>): $Holder$Reference<(any)>
public "getDelegateOrThrow"(location: $ResourceLocation$Type): $Holder$Reference<(any)>
public "getDefaultKey"(): $ResourceLocation
public "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
public "setSlaveMap"(arg0: $ResourceLocation$Type, arg1: any): void
public "makeSnapshot"(): $ForgeRegistry$Snapshot
public "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
public "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
public "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
public "getRegistryName"(): $ResourceLocation
public "spliterator"(): $Spliterator<(V)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<V>;
get "empty"(): boolean
get "entries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
get "locked"(): boolean
get "keys"(): $Set<($ResourceLocation)>
get "values"(): $Collection<(V)>
get "codec"(): $Codec<(V)>
get "registryKey"(): $ResourceKey<($Registry<(V)>)>
get "defaultKey"(): $ResourceLocation
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistry$Type<V> = ($ForgeRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistry_<V> = $ForgeRegistry$Type<(V)>;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export interface $IForgeRegistry$AddCallback<V> {

 "onAdd"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceKey$Type<(V)>, arg4: V, arg5: V): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceKey$Type<(V)>, arg4: V, arg5: V): void
}

export namespace $IForgeRegistry$AddCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$AddCallback$Type<V> = ($IForgeRegistry$AddCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$AddCallback_<V> = $IForgeRegistry$AddCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgePoseStack" {
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"

export interface $IForgePoseStack {

 "pushTransformation"(arg0: $Transformation$Type): void
}

export namespace $IForgePoseStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePoseStack$Type = ($IForgePoseStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePoseStack_ = $IForgePoseStack$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMobEffect" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgeMobEffect {

 "getSortOrder"(arg0: $MobEffectInstance$Type): integer
 "getCurativeItems"(): $List<($ItemStack)>
}

export namespace $IForgeMobEffect {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMobEffect$Type = ($IForgeMobEffect);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMobEffect_ = $IForgeMobEffect$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"

export class $PlayerEvent extends $LivingEvent {

constructor()
constructor(arg0: $Player$Type)

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$Type = ($PlayerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEvent_ = $PlayerEvent$Type;
}}
declare module "packages/net/minecraftforge/items/$IItemHandlerModifiable" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export interface $IItemHandlerModifiable extends $IItemHandler {

 "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
 "getSlots"(): integer
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "kjs$self"(): $IItemHandler
 "isMutable"(): boolean
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getHeight"(): integer
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "asContainer"(): $Container
 "getWidth"(): integer
 "setChanged"(): void
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
}

export namespace $IItemHandlerModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandlerModifiable$Type = ($IItemHandlerModifiable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandlerModifiable_ = $IItemHandlerModifiable$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelFile" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelFile {


public "getLocation"(): $ResourceLocation
public "getUncheckedLocation"(): $ResourceLocation
public "assertExistence"(): void
get "location"(): $ResourceLocation
get "uncheckedLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$Type = ($ModelFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile_ = $ModelFile$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$ItemTooltipEvent" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ItemTooltipEvent extends $PlayerEvent {

constructor()
constructor(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type)

public "getFlags"(): $TooltipFlag
public "getListenerList"(): $ListenerList
public "getItemStack"(): $ItemStack
public "getToolTip"(): $List<($Component)>
get "flags"(): $TooltipFlag
get "listenerList"(): $ListenerList
get "itemStack"(): $ItemStack
get "toolTip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTooltipEvent$Type = ($ItemTooltipEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemTooltipEvent_ = $ItemTooltipEvent$Type;
}}
declare module "packages/net/minecraftforge/client/settings/$KeyModifier" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$IKeyConflictContext, $IKeyConflictContext$Type} from "packages/net/minecraftforge/client/settings/$IKeyConflictContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export class $KeyModifier extends $Enum<($KeyModifier)> {
static readonly "CONTROL": $KeyModifier
static readonly "SHIFT": $KeyModifier
static readonly "ALT": $KeyModifier
static readonly "NONE": $KeyModifier
/**
 * 
 * @deprecated
 */
static readonly "MODIFIER_VALUES": ($KeyModifier)[]


public static "values"(): ($KeyModifier)[]
public static "valueOf"(arg0: string): $KeyModifier
public "matches"(arg0: $InputConstants$Key$Type): boolean
public "isActive"(arg0: $IKeyConflictContext$Type): boolean
public static "getValues"(arg0: boolean): $List<($KeyModifier)>
/**
 * 
 * @deprecated
 */
public static "getActiveModifier"(): $KeyModifier
public static "valueFromString"(arg0: string): $KeyModifier
public static "getModifier"(arg0: $InputConstants$Key$Type): $KeyModifier
public static "isKeyCodeModifier"(arg0: $InputConstants$Key$Type): boolean
public "getCombinedName"(arg0: $InputConstants$Key$Type, arg1: $Supplier$Type<($Component$Type)>): $Component
get "activeModifier"(): $KeyModifier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KeyModifier$Type = (("shift") | ("alt") | ("control") | ("none")) | ($KeyModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KeyModifier_ = $KeyModifier$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistryModifiable" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistryModifiable<V> extends $IForgeRegistry<(V)> {

 "remove"(arg0: $ResourceLocation$Type): V
 "clear"(): void
 "isLocked"(): boolean
 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "register"(arg0: string, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getKeys"(): $Set<($ResourceLocation)>
 "tags"(): $ITagManager<(V)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getValues"(): $Collection<(V)>
 "getCodec"(): $Codec<(V)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDefaultKey"(): $ResourceLocation
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getRegistryName"(): $ResourceLocation
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistryModifiable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistryModifiable$Type<V> = ($IForgeRegistryModifiable<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistryModifiable_<V> = $IForgeRegistryModifiable$Type<(V)>;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec" {
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $IModFileInfo$LanguageSpec extends $Record {

constructor(languageName: string, acceptedVersions: $VersionRange$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "languageName"(): string
public "acceptedVersions"(): $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$LanguageSpec$Type = ($IModFileInfo$LanguageSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo$LanguageSpec_ = $IModFileInfo$LanguageSpec$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBucketPickup" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $IForgeBucketPickup {

 "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
}

export namespace $IForgeBucketPickup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBucketPickup$Type = ($IForgeBucketPickup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBucketPickup_ = $IForgeBucketPickup$Type;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $ForgeFlowingFluid$Source extends $ForgeFlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>

constructor(arg0: $ForgeFlowingFluid$Properties$Type)

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Source$Type = ($ForgeFlowingFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid$Source_ = $ForgeFlowingFluid$Source$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeRegistry$ValidateCallback<V> {

 "onValidate"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceLocation$Type, arg4: V): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type, arg2: integer, arg3: $ResourceLocation$Type, arg4: V): void
}

export namespace $IForgeRegistry$ValidateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$ValidateCallback$Type<V> = ($IForgeRegistry$ValidateCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$ValidateCallback_<V> = $IForgeRegistry$ValidateCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModProvider" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IModFile, $IModFile$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModProvider {

 "name"(): string
 "isValid"(arg0: $IModFile$Type): boolean
 "scanFile"(arg0: $IModFile$Type, arg1: $Consumer$Type<($Path$Type)>): void
 "initArguments"(arg0: $Map$Type<(string), (any)>): void
}

export namespace $IModProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModProvider$Type = ($IModProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModProvider_ = $IModProvider$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeBakedModel" {
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ItemDisplayContext, $ItemDisplayContext$Type} from "packages/net/minecraft/world/item/$ItemDisplayContext"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ChunkRenderTypeSet, $ChunkRenderTypeSet$Type} from "packages/net/minecraftforge/client/$ChunkRenderTypeSet"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IForgeBakedModel {

 "applyTransform"(arg0: $ItemDisplayContext$Type, arg1: $PoseStack$Type, arg2: boolean): $BakedModel
 "getRenderPasses"(arg0: $ItemStack$Type, arg1: boolean): $List<($BakedModel)>
 "getRenderTypes"(arg0: $BlockState$Type, arg1: $RandomSource$Type, arg2: $ModelData$Type): $ChunkRenderTypeSet
 "getRenderTypes"(arg0: $ItemStack$Type, arg1: boolean): $List<($RenderType)>
 "useAmbientOcclusion"(arg0: $BlockState$Type): boolean
 "useAmbientOcclusion"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
 "getModelData"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ModelData$Type): $ModelData
 "getParticleIcon"(arg0: $ModelData$Type): $TextureAtlasSprite
 "getQuads"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $RandomSource$Type, arg3: $ModelData$Type, arg4: $RenderType$Type): $List<($BakedQuad)>
}

export namespace $IForgeBakedModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBakedModel$Type = ($IForgeBakedModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBakedModel_ = $IForgeBakedModel$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeModelBaker" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IForgeModelBaker {

 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "bake"(arg0: $ResourceLocation$Type, arg1: $ModelState$Type, arg2: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>): $BakedModel
}

export namespace $IForgeModelBaker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeModelBaker$Type = ($IForgeModelBaker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeModelBaker_ = $IForgeModelBaker$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$BakeCallback<V> {

 "onBake"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$BakeCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$BakeCallback$Type<V> = ($IForgeRegistry$BakeCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$BakeCallback_<V> = $IForgeRegistry$BakeCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder" {
import {$ItemModelBuilder, $ItemModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ItemModelBuilder$OverrideBuilder {

constructor(arg0: $ItemModelBuilder$Type)

public "end"(): $ItemModelBuilder
public "predicate"(arg0: $ResourceLocation$Type, arg1: float): $ItemModelBuilder$OverrideBuilder
public "model"(arg0: $ModelFile$Type): $ItemModelBuilder$OverrideBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelBuilder$OverrideBuilder$Type = ($ItemModelBuilder$OverrideBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelBuilder$OverrideBuilder_ = $ItemModelBuilder$OverrideBuilder$Type;
}}
declare module "packages/net/minecraftforge/items/wrapper/$RecipeWrapper" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $RecipeWrapper implements $Container {

constructor(arg0: $IItemHandlerModifiable$Type)

public "setChanged"(): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "stopOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "isMutable"(): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "getSlots"(): integer
public "countItem"(arg0: $Item$Type): integer
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "getHeight"(): integer
public "clear"(): void
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "asContainer"(): $Container
public "getWidth"(): integer
public "getSlotLimit"(slot: integer): integer
public "setChanged"(): void
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "clear"(ingredient: $Ingredient$Type): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeWrapper$Type = ($RecipeWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeWrapper_ = $RecipeWrapper$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$Event" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event$Result, $Event$Result$Type} from "packages/net/minecraftforge/eventbus/api/$Event$Result"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export class $Event {

constructor()

public "setResult"(arg0: $Event$Result$Type): void
public "getResult"(): $Event$Result
public "getPhase"(): $EventPriority
public "setPhase"(arg0: $EventPriority$Type): void
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
set "result"(value: $Event$Result$Type)
get "result"(): $Event$Result
get "phase"(): $EventPriority
set "phase"(value: $EventPriority$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Type = ($Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event_ = $Event$Type;
}}
declare module "packages/net/minecraftforge/common/$SoundAction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundAction {


public "name"(): string
public static "get"(arg0: string): $SoundAction
public "toString"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundAction$Type = ($SoundAction);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundAction_ = $SoundAction$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeSpecialEffectsBuilder" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Music, $Music$Type} from "packages/net/minecraft/sounds/$Music"
import {$BiomeSpecialEffects$Builder, $BiomeSpecialEffects$Builder$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$Builder"
import {$AmbientParticleSettings, $AmbientParticleSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientParticleSettings"
import {$AmbientMoodSettings, $AmbientMoodSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientMoodSettings"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AmbientAdditionsSettings, $AmbientAdditionsSettings$Type} from "packages/net/minecraft/world/level/biome/$AmbientAdditionsSettings"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$BiomeSpecialEffects, $BiomeSpecialEffects$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects"
import {$BiomeSpecialEffects$GrassColorModifier, $BiomeSpecialEffects$GrassColorModifier$Type} from "packages/net/minecraft/world/level/biome/$BiomeSpecialEffects$GrassColorModifier"

export class $BiomeSpecialEffectsBuilder extends $BiomeSpecialEffects$Builder {
 "fogColor": $OptionalInt
 "waterColor": $OptionalInt
 "waterFogColor": $OptionalInt
 "skyColor": $OptionalInt
 "foliageColorOverride": $Optional<(integer)>
 "grassColorOverride": $Optional<(integer)>
 "grassColorModifier": $BiomeSpecialEffects$GrassColorModifier
 "ambientParticle": $Optional<($AmbientParticleSettings)>
 "ambientLoopSoundEvent": $Optional<($Holder<($SoundEvent)>)>
 "ambientMoodSettings": $Optional<($AmbientMoodSettings)>
 "ambientAdditionsSettings": $Optional<($AmbientAdditionsSettings)>
 "backgroundMusic": $Optional<($Music)>


public static "copyOf"(arg0: $BiomeSpecialEffects$Type): $BiomeSpecialEffectsBuilder
public static "create"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $BiomeSpecialEffectsBuilder
public "getFogColor"(): integer
public "getBackgroundMusic"(): $Optional<($Music)>
public "getWaterFogColor"(): integer
public "getSkyColor"(): integer
public "getAmbientParticle"(): $Optional<($AmbientParticleSettings)>
public "waterColor"(): integer
public "getGrassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
public "getFoliageColorOverride"(): $Optional<(integer)>
public "getAmbientMoodSound"(): $Optional<($AmbientMoodSettings)>
public "getAmbientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
public "getAmbientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
public "getGrassColorOverride"(): $Optional<(integer)>
get "fogColor"(): integer
get "backgroundMusic"(): $Optional<($Music)>
get "waterFogColor"(): integer
get "skyColor"(): integer
get "ambientParticle"(): $Optional<($AmbientParticleSettings)>
get "grassColorModifier"(): $BiomeSpecialEffects$GrassColorModifier
get "foliageColorOverride"(): $Optional<(integer)>
get "ambientMoodSound"(): $Optional<($AmbientMoodSettings)>
get "ambientLoopSound"(): $Optional<($Holder<($SoundEvent)>)>
get "ambientAdditionsSound"(): $Optional<($AmbientAdditionsSettings)>
get "grassColorOverride"(): $Optional<(integer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSpecialEffectsBuilder$Type = ($BiomeSpecialEffectsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSpecialEffectsBuilder_ = $BiomeSpecialEffectsBuilder$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$ModConfig$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModConfig$Type extends $Enum<($ModConfig$Type)> {
static readonly "COMMON": $ModConfig$Type
static readonly "CLIENT": $ModConfig$Type
static readonly "SERVER": $ModConfig$Type


public static "values"(): ($ModConfig$Type)[]
public static "valueOf"(arg0: string): $ModConfig$Type
public "extension"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModConfig$Type$Type = (("server") | ("common") | ("client")) | ($ModConfig$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModConfig$Type_ = $ModConfig$Type$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePackResources" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$PackResources, $PackResources$Type} from "packages/net/minecraft/server/packs/$PackResources"

export interface $IForgePackResources {

 "isHidden"(): boolean
 "getChildren"(): $Collection<($PackResources)>
}

export namespace $IForgePackResources {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePackResources$Type = ($IForgePackResources);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePackResources_ = $IForgePackResources$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$ITag" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $ITag<V> extends $Iterable<(V)> {

 "isEmpty"(): boolean
 "size"(): integer
 "stream"(): $Stream<(V)>
 "contains"(arg0: V): boolean
 "getKey"(): $TagKey<(V)>
 "isBound"(): boolean
 "getRandomElement"(arg0: $RandomSource$Type): $Optional<(V)>
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $ITag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITag$Type<V> = ($ITag<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITag_<V> = $ITag$Type<(V)>;
}}
declare module "packages/net/minecraftforge/client/gui/overlay/$ForgeGui" {
import {$ItemRenderer, $ItemRenderer$Type} from "packages/net/minecraft/client/renderer/entity/$ItemRenderer"
import {$SubtitleOverlay, $SubtitleOverlay$Type} from "packages/net/minecraft/client/gui/components/$SubtitleOverlay"
import {$Gui, $Gui$Type} from "packages/net/minecraft/client/gui/$Gui"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PlayerRideableJumping, $PlayerRideableJumping$Type} from "packages/net/minecraft/world/entity/$PlayerRideableJumping"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$SpectatorGui, $SpectatorGui$Type} from "packages/net/minecraft/client/gui/components/spectator/$SpectatorGui"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$BossHealthOverlay, $BossHealthOverlay$Type} from "packages/net/minecraft/client/gui/components/$BossHealthOverlay"
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$PlayerTabOverlay, $PlayerTabOverlay$Type} from "packages/net/minecraft/client/gui/components/$PlayerTabOverlay"
import {$ChatComponent, $ChatComponent$Type} from "packages/net/minecraft/client/gui/components/$ChatComponent"
import {$DebugScreenOverlay, $DebugScreenOverlay$Type} from "packages/net/minecraft/client/gui/components/$DebugScreenOverlay"

export class $ForgeGui extends $Gui {
static "rayTraceDistance": double
 "leftHeight": integer
 "rightHeight": integer
static readonly "VIGNETTE_LOCATION": $ResourceLocation
static readonly "WIDGETS_LOCATION": $ResourceLocation
static readonly "PUMPKIN_BLUR_LOCATION": $ResourceLocation
static readonly "SPYGLASS_SCOPE_LOCATION": $ResourceLocation
static readonly "POWDER_SNOW_OUTLINE_LOCATION": $ResourceLocation
static readonly "GUI_ICONS_LOCATION": $ResourceLocation
static readonly "DEMO_EXPIRED_TEXT": $Component
static readonly "SAVING_TEXT": $Component
static readonly "COLOR_WHITE": integer
static readonly "MIN_CROSSHAIR_ATTACK_SPEED": float
static readonly "NUM_HEARTS_PER_ROW": integer
static readonly "LINE_HEIGHT": integer
static readonly "SPACER": string
static readonly "PORTAL_OVERLAY_ALPHA_MIN": float
static readonly "HEART_SIZE": integer
static readonly "HEART_SEPARATION": integer
static readonly "AUTOSAVE_FADE_SPEED_FACTOR": float
readonly "random": $RandomSource
readonly "minecraft": $Minecraft
readonly "itemRenderer": $ItemRenderer
readonly "chat": $ChatComponent
 "tickCount": integer
 "overlayMessageString": $Component
 "overlayMessageTime": integer
 "animateOverlayMessageColor": boolean
 "chatDisabledByPlayerShown": boolean
 "vignetteBrightness": float
 "toolHighlightTimer": integer
 "lastToolHighlight": $ItemStack
readonly "debugScreen": $DebugScreenOverlay
readonly "subtitleOverlay": $SubtitleOverlay
readonly "spectatorGui": $SpectatorGui
readonly "tabList": $PlayerTabOverlay
readonly "bossOverlay": $BossHealthOverlay
 "titleTime": integer
 "title": $Component
 "subtitle": $Component
 "titleFadeInTime": integer
 "titleStayTime": integer
 "titleFadeOutTime": integer
 "lastHealth": integer
 "displayHealth": integer
 "lastHealthTime": long
 "healthBlinkTime": long
 "screenWidth": integer
 "screenHeight": integer
 "autosaveIndicatorValue": float
 "lastAutosaveIndicatorValue": float
 "scopeScale": float

constructor(arg0: $Minecraft$Type)

public "handler$hjo000$betterf3$disableForgeTpsGraph"(ci: $CallbackInfo$Type): void
public "handler$hjo000$betterf3$customDebugMenu"(width: integer, height: integer, guiGraphics: $GuiGraphics$Type, ci: $CallbackInfo$Type): void
public "setupOverlayRenderState"(arg0: boolean, arg1: boolean): void
public "shouldDrawSurvivalElements"(): boolean
public "clearCache"(): void
public "renderJumpMeter"(arg0: $PlayerRideableJumping$Type, arg1: $GuiGraphics$Type, arg2: integer): void
public "render"(arg0: $GuiGraphics$Type, arg1: float): void
public "renderHealth"(arg0: integer, arg1: integer, arg2: $GuiGraphics$Type): void
public "getMinecraft"(): $Minecraft
public "renderFood"(arg0: integer, arg1: integer, arg2: $GuiGraphics$Type): void
get "minecraft"(): $Minecraft
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeGui$Type = ($ForgeGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeGui_ = $ForgeGui$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryManager" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$ForgeRegistry, $ForgeRegistry$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$HandshakeMessages$S2CRegistry, $HandshakeMessages$S2CRegistry$Type} from "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RegistryManager {
static readonly "ACTIVE": $RegistryManager
static readonly "VANILLA": $RegistryManager
static readonly "FROZEN": $RegistryManager

constructor(arg0: string)

public "getName"<V>(arg0: $IForgeRegistry$Type<(V)>): $ResourceLocation
public "getName"(): string
public "clean"(): void
public "takeSnapshot"(arg0: boolean): $Map<($ResourceLocation), ($ForgeRegistry$Snapshot)>
public "getRegistry"<V>(arg0: $ResourceKey$Type<(any)>): $ForgeRegistry<(V)>
public "getRegistry"<V>(arg0: $ResourceLocation$Type): $ForgeRegistry<(V)>
public "getRegistry"<V>(arg0: $ResourceLocation$Type, arg1: $RegistryManager$Type): $ForgeRegistry<(V)>
public "updateLegacyName"<V>(arg0: $ResourceLocation$Type): $ResourceLocation
public static "getVanillaRegistryKeys"(): $Set<($ResourceLocation)>
public static "getRegistryNamesForSyncToClient"(): $List<($ResourceLocation)>
public static "generateRegistryPackets"(arg0: boolean): $List<($Pair<(string), ($HandshakeMessages$S2CRegistry)>)>
public static "postNewRegistryEvent"(): void
get "name"(): string
get "vanillaRegistryKeys"(): $Set<($ResourceLocation)>
get "registryNamesForSyncToClient"(): $List<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryManager$Type = ($RegistryManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryManager_ = $RegistryManager$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$CreateCallback<V> {

 "onCreate"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$CreateCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$CreateCallback$Type<V> = ($IForgeRegistry$CreateCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$CreateCallback_<V> = $IForgeRegistry$CreateCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/fluids/$ForgeFlowingFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$FlowingFluid, $FlowingFluid$Type} from "packages/net/minecraft/world/level/material/$FlowingFluid"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $ForgeFlowingFluid extends $FlowingFluid {
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>
readonly "stateDefinition": $StateDefinition<($Fluid), ($FluidState)>


public "getFluidType"(): $FluidType
public "getBucket"(): $Item
public "getTickDelay"(arg0: $LevelReader$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "isSame"(arg0: $Fluid$Type): boolean
public "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
public "getFlowing"(): $Fluid
public "getSource"(): $Fluid
get "fluidType"(): $FluidType
get "bucket"(): $Item
get "pickupSound"(): $Optional<($SoundEvent)>
get "flowing"(): $Fluid
get "source"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFlowingFluid$Type = ($ForgeFlowingFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFlowingFluid_ = $ForgeFlowingFluid$Type;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigEvent$ConfigConfig" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModConfig, $ModConfig$Type} from "packages/net/minecraftforge/fml/config/$ModConfig"
import {$IConfigEvent, $IConfigEvent$Type} from "packages/net/minecraftforge/fml/config/$IConfigEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IConfigEvent$ConfigConfig extends $Record {

constructor(loading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>, reloading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>, unloading: $Function$Type<($ModConfig$Type), ($IConfigEvent$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "reloading"(): $Function<($ModConfig), ($IConfigEvent)>
public "loading"(): $Function<($ModConfig), ($IConfigEvent)>
public "unloading"(): $Function<($ModConfig), ($IConfigEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigEvent$ConfigConfig$Type = ($IConfigEvent$ConfigConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigEvent$ConfigConfig_ = $IConfigEvent$ConfigConfig$Type;
}}
declare module "packages/net/minecraftforge/event/level/$BlockEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockEvent extends $Event {

constructor(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor()

public "getState"(): $BlockState
public "getLevel"(): $LevelAccessor
public "isCancelable"(): boolean
public "getPos"(): $BlockPos
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "state"(): $BlockState
get "level"(): $LevelAccessor
get "cancelable"(): boolean
get "pos"(): $BlockPos
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$Type = ($BlockEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent_ = $BlockEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingDropsEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingDropsEvent extends $LivingEvent {

constructor(arg0: $LivingEntity$Type, arg1: $DamageSource$Type, arg2: $Collection$Type<($ItemEntity$Type)>, arg3: integer, arg4: boolean)
constructor()

public "getSource"(): $DamageSource
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getLootingLevel"(): integer
public "getDrops"(): $Collection<($ItemEntity)>
public "isRecentlyHit"(): boolean
get "source"(): $DamageSource
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "lootingLevel"(): integer
get "drops"(): $Collection<($ItemEntity)>
get "recentlyHit"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingDropsEvent$Type = ($LivingDropsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingDropsEvent_ = $LivingDropsEvent$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions" {
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$Type} from "packages/net/minecraft/client/renderer/$BlockEntityWithoutLevelRenderer"
import {$HumanoidArm, $HumanoidArm$Type} from "packages/net/minecraft/world/entity/$HumanoidArm"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$Type} from "packages/net/minecraft/client/model/$HumanoidModel$ArmPose"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$IClientItemExtensions$FontContext, $IClientItemExtensions$FontContext$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext"
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Model, $Model$Type} from "packages/net/minecraft/client/model/$Model"

export interface $IClientItemExtensions {

 "getFont"(arg0: $ItemStack$Type, arg1: $IClientItemExtensions$FontContext$Type): $Font
 "renderHelmetOverlay"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer, arg3: integer, arg4: float): void
 "getHumanoidArmorModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>): $HumanoidModel<(any)>
 "applyForgeHandTransform"(arg0: $PoseStack$Type, arg1: $LocalPlayer$Type, arg2: $HumanoidArm$Type, arg3: $ItemStack$Type, arg4: float, arg5: float, arg6: float): boolean
 "getGenericArmorModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>): $Model
 "getArmPose"(arg0: $LivingEntity$Type, arg1: $InteractionHand$Type, arg2: $ItemStack$Type): $HumanoidModel$ArmPose
 "getCustomRenderer"(): $BlockEntityWithoutLevelRenderer
}

export namespace $IClientItemExtensions {
const DEFAULT: $IClientItemExtensions
function of(arg0: $ItemStack$Type): $IClientItemExtensions
function of(arg0: $Item$Type): $IClientItemExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$Type = ($IClientItemExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions_ = $IClientItemExtensions$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$LeftClickBlock" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event$Result, $Event$Result$Type} from "packages/net/minecraftforge/eventbus/api/$Event$Result"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PlayerInteractEvent$LeftClickBlock$Action, $PlayerInteractEvent$LeftClickBlock$Action$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$LeftClickBlock$Action"

export class $PlayerInteractEvent$LeftClickBlock extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $PlayerInteractEvent$LeftClickBlock$Action$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $Player$Type, arg1: $BlockPos$Type, arg2: $Direction$Type)

public "getUseItem"(): $Event$Result
public "setUseBlock"(arg0: $Event$Result$Type): void
public "setUseItem"(arg0: $Event$Result$Type): void
public "getUseBlock"(): $Event$Result
public "setCanceled"(arg0: boolean): void
public "isCancelable"(): boolean
public "getAction"(): $PlayerInteractEvent$LeftClickBlock$Action
public "getListenerList"(): $ListenerList
get "useItem"(): $Event$Result
set "useBlock"(value: $Event$Result$Type)
set "useItem"(value: $Event$Result$Type)
get "useBlock"(): $Event$Result
set "canceled"(value: boolean)
get "cancelable"(): boolean
get "action"(): $PlayerInteractEvent$LeftClickBlock$Action
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$LeftClickBlock$Type = ($PlayerInteractEvent$LeftClickBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$LeftClickBlock_ = $PlayerInteractEvent$LeftClickBlock$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IConfigurable" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IConfigurable {

 "getConfigElement"<T>(...arg0: (string)[]): $Optional<(T)>
 "getConfigList"(...arg0: (string)[]): $List<(any)>
}

export namespace $IConfigurable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigurable$Type = ($IConfigurable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigurable_ = $IConfigurable$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $PlayerInteractEvent extends $PlayerEvent {

constructor()

public "getLevel"(): $Level
public "getSide"(): $LogicalSide
public "getFace"(): $Direction
public "getPos"(): $BlockPos
public "getHand"(): $InteractionHand
public "getListenerList"(): $ListenerList
public "getItemStack"(): $ItemStack
public "getCancellationResult"(): $InteractionResult
public "setCancellationResult"(arg0: $InteractionResult$Type): void
get "level"(): $Level
get "side"(): $LogicalSide
get "face"(): $Direction
get "pos"(): $BlockPos
get "hand"(): $InteractionHand
get "listenerList"(): $ListenerList
get "itemStack"(): $ItemStack
get "cancellationResult"(): $InteractionResult
set "cancellationResult"(value: $InteractionResult$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$Type = ($PlayerInteractEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent_ = $PlayerInteractEvent$Type;
}}
declare module "packages/net/minecraftforge/common/util/$MutableHashedLinkedMap$MergeFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MutableHashedLinkedMap$MergeFunction<Key, Value> {

 "apply"(arg0: Key, arg1: Value, arg2: Value): Value

(arg0: Key, arg1: Value, arg2: Value): Value
}

export namespace $MutableHashedLinkedMap$MergeFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MutableHashedLinkedMap$MergeFunction$Type<Key, Value> = ($MutableHashedLinkedMap$MergeFunction<(Key), (Value)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MutableHashedLinkedMap$MergeFunction_<Key, Value> = $MutableHashedLinkedMap$MergeFunction$Type<(Key), (Value)>;
}}
declare module "packages/net/minecraftforge/event/entity/$ProjectileImpactEvent$ImpactResult" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ProjectileImpactEvent$ImpactResult extends $Enum<($ProjectileImpactEvent$ImpactResult)> {
static readonly "DEFAULT": $ProjectileImpactEvent$ImpactResult
static readonly "SKIP_ENTITY": $ProjectileImpactEvent$ImpactResult
static readonly "STOP_AT_CURRENT": $ProjectileImpactEvent$ImpactResult
static readonly "STOP_AT_CURRENT_NO_DAMAGE": $ProjectileImpactEvent$ImpactResult


public static "values"(): ($ProjectileImpactEvent$ImpactResult)[]
public static "valueOf"(arg0: string): $ProjectileImpactEvent$ImpactResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProjectileImpactEvent$ImpactResult$Type = (("default") | ("skip_entity") | ("stop_at_current") | ("stop_at_current_no_damage")) | ($ProjectileImpactEvent$ImpactResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ProjectileImpactEvent$ImpactResult_ = $ProjectileImpactEvent$ImpactResult$Type;
}}
declare module "packages/net/minecraftforge/common/$IForgeShearable" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeShearable {

 "onSheared"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $Level$Type, arg3: $BlockPos$Type, arg4: integer): $List<($ItemStack)>
 "isShearable"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
}

export namespace $IForgeShearable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeShearable$Type = ($IForgeShearable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeShearable_ = $IForgeShearable$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModInfo" {
import {$VersionRange, $VersionRange$Type} from "packages/org/apache/maven/artifact/versioning/$VersionRange"
import {$IConfigurable, $IConfigurable$Type} from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import {$ArtifactVersion, $ArtifactVersion$Type} from "packages/org/apache/maven/artifact/versioning/$ArtifactVersion"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$URL, $URL$Type} from "packages/java/net/$URL"
import {$IModFileInfo, $IModFileInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModInfo {

 "getDisplayName"(): string
 "getVersion"(): $ArtifactVersion
 "getDescription"(): string
 "getModId"(): string
 "getOwningFile"(): $IModFileInfo
 "getForgeFeatures"(): $List<(any)>
 "getDependencies"(): $List<(any)>
 "getModProperties"(): $Map<(string), (any)>
 "getModURL"(): $Optional<($URL)>
 "getUpdateURL"(): $Optional<($URL)>
 "getLogoFile"(): $Optional<(string)>
 "getLogoBlur"(): boolean
 "getNamespace"(): string
 "getConfig"(): $IConfigurable
}

export namespace $IModInfo {
const UNBOUNDED: $VersionRange
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModInfo$Type = ($IModInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModInfo_ = $IModInfo$Type;
}}
declare module "packages/net/minecraftforge/energy/$EnergyStorage" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $EnergyStorage implements $IEnergyStorage, $INBTSerializable<($Tag)> {

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "canExtract"(): boolean
public "getEnergyStored"(): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "canReceive"(): boolean
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "getMaxEnergyStored"(): integer
public "deserializeNBT"(arg0: $Tag$Type): void
public "serializeNBT"(): $Tag
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyStorage$Type = ($EnergyStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyStorage_ = $EnergyStorage$Type;
}}
declare module "packages/net/minecraftforge/event/level/$BlockEvent$EntityPlaceEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$BlockSnapshot, $BlockSnapshot$Type} from "packages/net/minecraftforge/common/util/$BlockSnapshot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEvent, $BlockEvent$Type} from "packages/net/minecraftforge/event/level/$BlockEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BlockEvent$EntityPlaceEvent extends $BlockEvent {

constructor(arg0: $BlockSnapshot$Type, arg1: $BlockState$Type, arg2: $Entity$Type)
constructor()

public "getEntity"(): $Entity
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getPlacedAgainst"(): $BlockState
public "getBlockSnapshot"(): $BlockSnapshot
public "getPlacedBlock"(): $BlockState
get "entity"(): $Entity
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "placedAgainst"(): $BlockState
get "blockSnapshot"(): $BlockSnapshot
get "placedBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEvent$EntityPlaceEvent$Type = ($BlockEvent$EntityPlaceEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEvent$EntityPlaceEvent_ = $BlockEvent$EntityPlaceEvent$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Holder$Reference, $Holder$Reference$Type} from "packages/net/minecraft/core/$Holder$Reference"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ITagManager, $ITagManager$Type} from "packages/net/minecraftforge/registries/tags/$ITagManager"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $IForgeRegistry<V> extends $Iterable<(V)> {

 "getValue"(arg0: $ResourceLocation$Type): V
 "isEmpty"(): boolean
 "getKey"(arg0: V): $ResourceLocation
 "register"(arg0: $ResourceLocation$Type, arg1: V): void
 "register"(arg0: string, arg1: V): void
 "containsKey"(arg0: $ResourceLocation$Type): boolean
 "containsValue"(arg0: V): boolean
 "getEntries"(): $Set<($Map$Entry<($ResourceKey<(V)>), (V)>)>
 "getKeys"(): $Set<($ResourceLocation)>
 "tags"(): $ITagManager<(V)>
 "getDelegate"(arg0: V): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceLocation$Type): $Optional<($Holder$Reference<(V)>)>
 "getDelegate"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder$Reference<(V)>)>
 "getValues"(): $Collection<(V)>
 "getCodec"(): $Codec<(V)>
 "getSlaveMap"<T>(arg0: $ResourceLocation$Type, arg1: $Class$Type<(T)>): T
 "getRegistryKey"(): $ResourceKey<($Registry<(V)>)>
 "getDelegateOrThrow"(arg0: $ResourceKey$Type<(V)>): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: $ResourceLocation$Type): $Holder$Reference<(V)>
 "getDelegateOrThrow"(arg0: V): $Holder$Reference<(V)>
 "getDefaultKey"(): $ResourceLocation
 "getResourceKey"(arg0: V): $Optional<($ResourceKey<(V)>)>
 "getHolder"(arg0: $ResourceKey$Type<(V)>): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: $ResourceLocation$Type): $Optional<($Holder<(V)>)>
 "getHolder"(arg0: V): $Optional<($Holder<(V)>)>
 "getRegistryName"(): $ResourceLocation
 "iterator"(): $Iterator<(V)>
 "spliterator"(): $Spliterator<(V)>
 "forEach"(arg0: $Consumer$Type<(any)>): void
}

export namespace $IForgeRegistry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$Type<V> = ($IForgeRegistry<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry_<V> = $IForgeRegistry$Type<(V)>;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullSupplier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullSupplier<T> {

 "get"(): T

(): T
}

export namespace $NonNullSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullSupplier$Type<T> = ($NonNullSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullSupplier_<T> = $NonNullSupplier$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockGetter" {
import {$ModelDataManager, $ModelDataManager$Type} from "packages/net/minecraftforge/client/model/data/$ModelDataManager"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeBlockGetter {

 "getExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity
 "getModelDataManager"(): $ModelDataManager
}

export namespace $IForgeBlockGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockGetter$Type = ($IForgeBlockGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockGetter_ = $IForgeBlockGetter$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFluidState" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeFluidState {

 "move"(arg0: $LivingEntity$Type, arg1: $Vec3$Type, arg2: double): boolean
 "getBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: boolean): $BlockPathTypes
 "canHydrate"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockPos$Type): boolean
 "canExtinguish"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "getFluidType"(): $FluidType
 "supportsBoating"(arg0: $Boat$Type): boolean
 "canConvertToSource"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
 "shouldUpdateWhileBoating"(arg0: $Boat$Type, arg1: $Entity$Type): boolean
 "getExplosionResistance"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): float
 "getAdjacentBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: $BlockPathTypes$Type): $BlockPathTypes
}

export namespace $IForgeFluidState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFluidState$Type = ($IForgeFluidState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFluidState_ = $IForgeFluidState$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientMobEffectExtensions" {
import {$Gui, $Gui$Type} from "packages/net/minecraft/client/gui/$Gui"
import {$EffectRenderingInventoryScreen, $EffectRenderingInventoryScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$EffectRenderingInventoryScreen"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"

export interface $IClientMobEffectExtensions {

 "isVisibleInInventory"(arg0: $MobEffectInstance$Type): boolean
 "renderInventoryIcon"(arg0: $MobEffectInstance$Type, arg1: $EffectRenderingInventoryScreen$Type<(any)>, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderInventoryText"(arg0: $MobEffectInstance$Type, arg1: $EffectRenderingInventoryScreen$Type<(any)>, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: integer): boolean
 "renderGuiIcon"(arg0: $MobEffectInstance$Type, arg1: $Gui$Type, arg2: $GuiGraphics$Type, arg3: integer, arg4: integer, arg5: float, arg6: float): boolean
 "isVisibleInGui"(arg0: $MobEffectInstance$Type): boolean
}

export namespace $IClientMobEffectExtensions {
const DEFAULT: $IClientMobEffectExtensions
function of(arg0: $MobEffectInstance$Type): $IClientMobEffectExtensions
function of(arg0: $MobEffect$Type): $IClientMobEffectExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientMobEffectExtensions$Type = ($IClientMobEffectExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientMobEffectExtensions_ = $IClientMobEffectExtensions$Type;
}}
declare module "packages/net/minecraftforge/event/level/$LevelEvent" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$EventHandlerImplCommon$LevelEventAttachment, $EventHandlerImplCommon$LevelEventAttachment$Type} from "packages/dev/architectury/event/forge/$EventHandlerImplCommon$LevelEventAttachment"

export class $LevelEvent extends $Event implements $EventHandlerImplCommon$LevelEventAttachment {

constructor(arg0: $LevelAccessor$Type)
constructor()

public "getLevel"(): $LevelAccessor
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "architectury$attachLevel"(level: $LevelAccessor$Type): void
public "architectury$getAttachedLevel"(): $LevelAccessor
get "level"(): $LevelAccessor
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Type = ($LevelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent_ = $LevelEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeRawTagBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$TagEntry, $TagEntry$Type} from "packages/net/minecraft/tags/$TagEntry"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagBuilder, $TagBuilder$Type} from "packages/net/minecraft/tags/$TagBuilder"

export interface $IForgeRawTagBuilder {

 "remove"(arg0: $TagEntry$Type, arg1: string): $TagBuilder
 "removeElement"(arg0: $ResourceLocation$Type, arg1: string): $TagBuilder
 "removeTag"(arg0: $ResourceLocation$Type, arg1: string): $TagBuilder
 "getRawBuilder"(): $TagBuilder
/**
 * 
 * @deprecated
 */
 "serializeTagAdditions"(arg0: $JsonObject$Type): void
}

export namespace $IForgeRawTagBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRawTagBuilder$Type = ($IForgeRawTagBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRawTagBuilder_ = $IForgeRawTagBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMobEffectInstance" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgeMobEffectInstance {

 "isCurativeItem"(arg0: $ItemStack$Type): boolean
 "setCurativeItems"(arg0: $List$Type<($ItemStack$Type)>): void
 "writeCurativeItems"(arg0: $CompoundTag$Type): void
 "addCurativeItem"(arg0: $ItemStack$Type): void
 "getCurativeItems"(): $List<($ItemStack)>
}

export namespace $IForgeMobEffectInstance {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMobEffectInstance$Type = ($IForgeMobEffectInstance);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMobEffectInstance_ = $IForgeMobEffectInstance$Type;
}}
declare module "packages/net/minecraftforge/items/wrapper/$RangedWrapper" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $RangedWrapper implements $IItemHandlerModifiable {

constructor(arg0: $IItemHandlerModifiable$Type, arg1: integer, arg2: integer)

public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getSlots"(): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "isMutable"(): boolean
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "asContainer"(): $Container
public "getWidth"(): integer
public "setChanged"(): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangedWrapper$Type = ($RangedWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RangedWrapper_ = $RangedWrapper$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$EntityInteract" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerInteractEvent$EntityInteract extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Entity$Type)

public "getTarget"(): $Entity
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "target"(): $Entity
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteract$Type = ($PlayerInteractEvent$EntityInteract);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$EntityInteract_ = $PlayerInteractEvent$EntityInteract$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"

export interface $IGeneratedBlockState {

 "toJson"(): $JsonObject

(): $JsonObject
}

export namespace $IGeneratedBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGeneratedBlockState$Type = ($IGeneratedBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGeneratedBlockState_ = $IGeneratedBlockState$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeTransformation" {
import {$Vector4f, $Vector4f$Type} from "packages/org/joml/$Vector4f"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $IForgeTransformation {

 "isIdentity"(): boolean
 "transformPosition"(arg0: $Vector4f$Type): void
 "applyOrigin"(arg0: $Vector3f$Type): $Transformation
 "rotateTransform"(arg0: $Direction$Type): $Direction
 "blockCenterToCorner"(): $Transformation
 "blockCornerToCenter"(): $Transformation
 "transformNormal"(arg0: $Vector3f$Type): void
}

export namespace $IForgeTransformation {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeTransformation$Type = ($IForgeTransformation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeTransformation_ = $IForgeTransformation$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$MapColor, $MapColor$Type} from "packages/net/minecraft/world/level/material/$MapColor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"
import {$FabricBlock, $FabricBlock$Type} from "packages/net/fabricmc/fabric/api/block/v1/$FabricBlock"

export interface $IForgeBlock extends $FabricBlock {

 "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
 "getRespawnPosition"(arg0: $BlockState$Type, arg1: $EntityType$Type<(any)>, arg2: $LevelReader$Type, arg3: $BlockPos$Type, arg4: float, arg5: $LivingEntity$Type): $Optional<($Vec3)>
 "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type): void
 "onCaughtFire"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $LivingEntity$Type): void
 "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
 "getAppearance"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $BlockState$Type, arg5: $BlockPos$Type): $BlockState
 "canSustainPlant"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type, arg4: $IPlantable$Type): boolean
 "isLadder"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "isFertile"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isBurning"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
 "onTreeGrow"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg3: $RandomSource$Type, arg4: $BlockPos$Type, arg5: $TreeConfiguration$Type): boolean
 "isConduitFrame"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): boolean
 "canHarvestBlock"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
 "getBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type): $BlockPathTypes
 "isSlimeBlock"(arg0: $BlockState$Type): boolean
 "isPortalFrame"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isFlammable"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "isFireSource"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "canStickTo"(arg0: $BlockState$Type, arg1: $BlockState$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "getFlammability"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
 "isStickyBlock"(arg0: $BlockState$Type): boolean
 "getMapColor"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $MapColor$Type): $MapColor
 "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "canBeHydrated"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type, arg4: $BlockPos$Type): boolean
 "getBedDirection"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): $Direction
 "isBed"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "setBedOccupied"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type, arg4: boolean): void
 "getFriction"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): float
 "collisionExtendsVertically"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
 "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $BlockState$Type, arg4: $Direction$Type): boolean
 "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
 "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
 "getSoundType"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): $SoundType
 "isScaffolding"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $LivingEntity$Type): boolean
 "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
 "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
 "getWeakChanges"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
 "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
 "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "getBeaconColorMultiplier"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): (float)[]
 "getStateAtViewpoint"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Vec3$Type): $BlockState
 "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
 "getAdjacentBlockPathType"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes
 "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type, arg3: $FluidState$Type): boolean
 "getToolModifiedState"(arg0: $BlockState$Type, arg1: $UseOnContext$Type, arg2: $ToolAction$Type, arg3: boolean): $BlockState
 "makesOpenTrapdoorAboveClimbable"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type): boolean
 "supportsExternalFaceHiding"(arg0: $BlockState$Type): boolean
 "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction

(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
}

export namespace $IForgeBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlock$Type = ($IForgeBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlock_ = $IForgeBlock$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ModelEvent$RegisterAdditional" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ModelEvent, $ModelEvent$Type} from "packages/net/minecraftforge/client/event/$ModelEvent"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $ModelEvent$RegisterAdditional extends $ModelEvent implements $IModBusEvent {

constructor()
constructor(arg0: $Set$Type<($ResourceLocation$Type)>)

public "register"(arg0: $ResourceLocation$Type): void
public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$RegisterAdditional$Type = ($ModelEvent$RegisterAdditional);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelEvent$RegisterAdditional_ = $ModelEvent$RegisterAdditional$Type;
}}
declare module "packages/net/minecraftforge/forgespi/locating/$IModFile$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IModFile$Type extends $Enum<($IModFile$Type)> {
static readonly "MOD": $IModFile$Type
static readonly "LIBRARY": $IModFile$Type
static readonly "LANGPROVIDER": $IModFile$Type
static readonly "GAMELIBRARY": $IModFile$Type


public static "values"(): ($IModFile$Type)[]
public static "valueOf"(arg0: string): $IModFile$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFile$Type$Type = (("gamelibrary") | ("mod") | ("library") | ("langprovider")) | ($IModFile$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFile$Type_ = $IModFile$Type$Type;
}}
declare module "packages/net/minecraftforge/fml/$IExtensionPoint$DisplayTest" {
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$IExtensionPoint, $IExtensionPoint$Type} from "packages/net/minecraftforge/fml/$IExtensionPoint"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $IExtensionPoint$DisplayTest extends $Record implements $IExtensionPoint<($IExtensionPoint$DisplayTest)> {
static readonly "IGNORESERVERONLY": string
static readonly "IGNORE_SERVER_VERSION": $Supplier<($IExtensionPoint$DisplayTest)>
static readonly "IGNORE_ALL_VERSION": $Supplier<($IExtensionPoint$DisplayTest)>

constructor(arg0: string, arg1: $BiPredicate$Type<(string), (boolean)>)
constructor(suppliedVersion: $Supplier$Type<(string)>, remoteVersionTest: $BiPredicate$Type<(string), (boolean)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "suppliedVersion"(): $Supplier<(string)>
public "remoteVersionTest"(): $BiPredicate<(string), (boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$DisplayTest$Type = ($IExtensionPoint$DisplayTest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionPoint$DisplayTest_ = $IExtensionPoint$DisplayTest$Type;
}}
declare module "packages/net/minecraftforge/fml/$DeferredWorkQueue" {
import {$ModLoadingStage, $ModLoadingStage$Type} from "packages/net/minecraftforge/fml/$ModLoadingStage"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $DeferredWorkQueue {

constructor(arg0: $ModLoadingStage$Type)

public static "lookup"(arg0: $Optional$Type<($ModLoadingStage$Type)>): $Optional<($DeferredWorkQueue)>
public "runTasks"(): void
public "enqueueWork"<T>(arg0: $ModContainer$Type, arg1: $Supplier$Type<(T)>): $CompletableFuture<(T)>
public "enqueueWork"(arg0: $ModContainer$Type, arg1: $Runnable$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferredWorkQueue$Type = ($DeferredWorkQueue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DeferredWorkQueue_ = $DeferredWorkQueue$Type;
}}
declare module "packages/net/minecraftforge/network/$PacketDistributor$TargetPoint" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $PacketDistributor$TargetPoint {

constructor(arg0: $ServerPlayer$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>)

public static "p"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: $ResourceKey$Type<($Level$Type)>): $Supplier<($PacketDistributor$TargetPoint)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketDistributor$TargetPoint$Type = ($PacketDistributor$TargetPoint);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketDistributor$TargetPoint_ = $PacketDistributor$TargetPoint$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent$PacketDispatcher" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $NetworkEvent$PacketDispatcher {


public "sendPacket"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$PacketDispatcher$Type = ($NetworkEvent$PacketDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent$PacketDispatcher_ = $NetworkEvent$PacketDispatcher$Type;
}}
declare module "packages/net/minecraftforge/registries/holdersets/$HolderSetType" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $HolderSetType {

 "makeCodec"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $Codec$Type<($Holder$Type<(T)>)>, arg2: boolean): $Codec<(any)>

(arg0: $ResourceKey$Type<(any)>, arg1: $Codec$Type<($Holder$Type<(T)>)>, arg2: boolean): $Codec<(any)>
}

export namespace $HolderSetType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderSetType$Type = ($HolderSetType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HolderSetType_ = $HolderSetType$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeFont" {
import {$FormattedText, $FormattedText$Type} from "packages/net/minecraft/network/chat/$FormattedText"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"

export interface $IForgeFont {

 "self"(): $Font
 "ellipsize"(arg0: $FormattedText$Type, arg1: integer): $FormattedText

(): $Font
}

export namespace $IForgeFont {
const ELLIPSIS: $FormattedText
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFont$Type = ($IForgeFont);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFont_ = $IForgeFont$Type;
}}
declare module "packages/net/minecraftforge/registries/holdersets/$CompositeHolderSet" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$IForgeHolderSet$SerializationType, $IForgeHolderSet$SerializationType$Type} from "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$HolderSetType, $HolderSetType$Type} from "packages/net/minecraftforge/registries/holdersets/$HolderSetType"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ICustomHolderSet, $ICustomHolderSet$Type} from "packages/net/minecraftforge/registries/holdersets/$ICustomHolderSet"
import {$HolderSet$Direct, $HolderSet$Direct$Type} from "packages/net/minecraft/core/$HolderSet$Direct"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$HolderOwner, $HolderOwner$Type} from "packages/net/minecraft/core/$HolderOwner"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$HolderSet$Named, $HolderSet$Named$Type} from "packages/net/minecraft/core/$HolderSet$Named"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $CompositeHolderSet<T> implements $ICustomHolderSet<(T)> {

constructor(arg0: $List$Type<($HolderSet$Type<(T)>)>)

public "iterator"(): $Iterator<($Holder<(T)>)>
public "getSet"(): $Set<($Holder<(T)>)>
public "getList"(): $List<($Holder<(T)>)>
public "getComponents"(): $List<($HolderSet<(T)>)>
public "contains"(arg0: $Holder$Type<(T)>): boolean
public "stream"(): $Stream<($Holder<(T)>)>
public "get"(arg0: integer): $Holder<(T)>
public "canSerializeIn"(arg0: $HolderOwner$Type<(T)>): boolean
public "unwrapKey"(): $Optional<($TagKey<(T)>)>
public "getRandomElement"(arg0: $RandomSource$Type): $Optional<($Holder<(T)>)>
public "size"(): integer
public "unwrap"(): $Either<($TagKey<(T)>), ($List<($Holder<(T)>)>)>
public "homogenize"(): $List<($HolderSet<(T)>)>
public "isHomogenous"(): boolean
public "addInvalidationListener"(arg0: $Runnable$Type): void
public "type"(): $HolderSetType
public "serializationType"(): $IForgeHolderSet$SerializationType
public static "direct"<T>(...arg0: ($Holder$Type<(T)>)[]): $HolderSet$Direct<(T)>
/**
 * 
 * @deprecated
 */
public static "emptyNamed"<T>(arg0: $HolderOwner$Type<(T)>, arg1: $TagKey$Type<(T)>): $HolderSet$Named<(T)>
public static "direct"<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, ...arg1: (E)[]): $HolderSet$Direct<(T)>
public static "direct"<E, T>(arg0: $Function$Type<(E), ($Holder$Type<(T)>)>, arg1: $List$Type<(E)>): $HolderSet$Direct<(T)>
public static "direct"<T>(arg0: $List$Type<(any)>): $HolderSet$Direct<(T)>
public "spliterator"(): $Spliterator<($Holder<(T)>)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<$Holder<(T)>>;
get "set"(): $Set<($Holder<(T)>)>
get "list"(): $List<($Holder<(T)>)>
get "components"(): $List<($HolderSet<(T)>)>
get "homogenous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompositeHolderSet$Type<T> = ($CompositeHolderSet<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CompositeHolderSet_<T> = $CompositeHolderSet$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$CallbackInfoReturnable, $CallbackInfoReturnable$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfoReturnable"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$FabricItem, $FabricItem$Type} from "packages/net/fabricmc/fabric/api/item/v1/$FabricItem"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IForgeItem extends $FabricItem {

 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "handler$fdg000$connectormod$redirectIsPiglinCurrency"(arg0: $ItemStack$Type, arg1: $CallbackInfoReturnable$Type<(any)>): void
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getAttributeModifiers"(stack: $ItemStack$Type, slot: $EquipmentSlot$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "isSuitableFor"(stack: $ItemStack$Type, state: $BlockState$Type): boolean
 "getRecipeRemainder"(stack: $ItemStack$Type): $ItemStack
 "allowNbtUpdateAnimation"(player: $Player$Type, hand: $InteractionHand$Type, oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean
 "allowContinuingBlockBreaking"(player: $Player$Type, oldStack: $ItemStack$Type, newStack: $ItemStack$Type): boolean

(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
}

export namespace $IForgeItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeItem$Type = ($IForgeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeItem_ = $IForgeItem$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$IUnbakedGeometry" {
import {$Material, $Material$Type} from "packages/net/minecraft/client/resources/model/$Material"
import {$ItemOverrides, $ItemOverrides$Type} from "packages/net/minecraft/client/renderer/block/model/$ItemOverrides"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModelBaker, $ModelBaker$Type} from "packages/net/minecraft/client/resources/model/$ModelBaker"
import {$ModelState, $ModelState$Type} from "packages/net/minecraft/client/resources/model/$ModelState"
import {$IGeometryBakingContext, $IGeometryBakingContext$Type} from "packages/net/minecraftforge/client/model/geometry/$IGeometryBakingContext"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UnbakedModel, $UnbakedModel$Type} from "packages/net/minecraft/client/resources/model/$UnbakedModel"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IUnbakedGeometry<T extends $IUnbakedGeometry<(T)>> {

 "bake"(arg0: $IGeometryBakingContext$Type, arg1: $ModelBaker$Type, arg2: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg3: $ModelState$Type, arg4: $ItemOverrides$Type, arg5: $ResourceLocation$Type): $BakedModel
 "getConfigurableComponentNames"(): $Set<(string)>
 "resolveParents"(arg0: $Function$Type<($ResourceLocation$Type), ($UnbakedModel$Type)>, arg1: $IGeometryBakingContext$Type): void

(arg0: $IGeometryBakingContext$Type, arg1: $ModelBaker$Type, arg2: $Function$Type<($Material$Type), ($TextureAtlasSprite$Type)>, arg3: $ModelState$Type, arg4: $ItemOverrides$Type, arg5: $ResourceLocation$Type): $BakedModel
}

export namespace $IUnbakedGeometry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUnbakedGeometry$Type<T> = ($IUnbakedGeometry<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUnbakedGeometry_<T> = $IUnbakedGeometry$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fluids/$FluidStack" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $FluidStack {
static readonly "EMPTY": $FluidStack
static readonly "CODEC": $Codec<($FluidStack)>

constructor(arg0: $FluidStack$Type, arg1: integer)
constructor(arg0: $Fluid$Type, arg1: integer, arg2: $CompoundTag$Type)
constructor(arg0: $Fluid$Type, arg1: integer)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isEmpty"(): boolean
public "copy"(): $FluidStack
public "grow"(arg0: integer): void
public "getDisplayName"(): $Component
public "getTag"(): $CompoundTag
public "shrink"(arg0: integer): void
public "setAmount"(arg0: integer): void
public "getAmount"(): integer
public "isFluidEqual"(arg0: $ItemStack$Type): boolean
public "isFluidEqual"(arg0: $FluidStack$Type): boolean
public "getTranslationKey"(): string
public "setTag"(arg0: $CompoundTag$Type): void
public "getFluid"(): $Fluid
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public static "loadFluidStackFromNBT"(arg0: $CompoundTag$Type): $FluidStack
public static "readFromPacket"(arg0: $FriendlyByteBuf$Type): $FluidStack
public "writeToPacket"(arg0: $FriendlyByteBuf$Type): void
public "getOrCreateChildTag"(arg0: string): $CompoundTag
public static "areFluidStackTagsEqual"(arg0: $FluidStack$Type, arg1: $FluidStack$Type): boolean
public "isFluidStackIdentical"(arg0: $FluidStack$Type): boolean
public "getOrCreateTag"(): $CompoundTag
public "hasTag"(): boolean
public "containsFluid"(arg0: $FluidStack$Type): boolean
public "getChildTag"(arg0: string): $CompoundTag
public "removeChildTag"(arg0: string): void
public "getRawFluid"(): $Fluid
get "empty"(): boolean
get "displayName"(): $Component
get "tag"(): $CompoundTag
set "amount"(value: integer)
get "amount"(): integer
get "translationKey"(): string
set "tag"(value: $CompoundTag$Type)
get "fluid"(): $Fluid
get "orCreateTag"(): $CompoundTag
get "rawFluid"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidStack$Type = ($FluidStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidStack_ = $FluidStack$Type;
}}
declare module "packages/net/minecraftforge/client/model/geometry/$BlockGeometryBakingContext$VisibilityData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockGeometryBakingContext$VisibilityData {

constructor()

public "copyFrom"(arg0: $BlockGeometryBakingContext$VisibilityData$Type): void
public "isVisible"(arg0: string, arg1: boolean): boolean
public "setVisibilityState"(arg0: string, arg1: boolean): void
public "hasCustomVisibility"(arg0: string): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockGeometryBakingContext$VisibilityData$Type = ($BlockGeometryBakingContext$VisibilityData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockGeometryBakingContext$VisibilityData_ = $BlockGeometryBakingContext$VisibilityData$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegisterEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$RegisterEvent$RegisterHelper, $RegisterEvent$RegisterHelper$Type} from "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Registry, $Registry$Type} from "packages/net/minecraft/core/$Registry"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegisterEvent extends $Event implements $IModBusEvent {

constructor()

public "toString"(): string
public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $ResourceLocation$Type, arg2: $Supplier$Type<(T)>): void
public "register"<T>(arg0: $ResourceKey$Type<(any)>, arg1: $Consumer$Type<($RegisterEvent$RegisterHelper$Type<(T)>)>): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "getRegistryKey"(): $ResourceKey<(any)>
public "getVanillaRegistry"<T>(): $Registry<(T)>
public "getForgeRegistry"<T>(): $IForgeRegistry<(T)>
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "registryKey"(): $ResourceKey<(any)>
get "vanillaRegistry"(): $Registry<(T)>
get "forgeRegistry"(): $IForgeRegistry<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$Type = ($RegisterEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterEvent_ = $RegisterEvent$Type;
}}
declare module "packages/net/minecraftforge/client/event/$RegisterParticleProvidersEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$ParticleProvider, $ParticleProvider$Type} from "packages/net/minecraft/client/particle/$ParticleProvider"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleEngine$SpriteParticleRegistration, $ParticleEngine$SpriteParticleRegistration$Type} from "packages/net/minecraft/client/particle/$ParticleEngine$SpriteParticleRegistration"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"
import {$ParticleProvider$Sprite, $ParticleProvider$Sprite$Type} from "packages/net/minecraft/client/particle/$ParticleProvider$Sprite"

export class $RegisterParticleProvidersEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $ParticleEngine$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "registerSprite"<T extends $ParticleOptions>(arg0: $ParticleType$Type<(T)>, arg1: $ParticleProvider$Sprite$Type<(T)>): void
public "registerSpecial"<T extends $ParticleOptions>(arg0: $ParticleType$Type<(T)>, arg1: $ParticleProvider$Type<(T)>): void
public "registerSpriteSet"<T extends $ParticleOptions>(arg0: $ParticleType$Type<(T)>, arg1: $ParticleEngine$SpriteParticleRegistration$Type<(T)>): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterParticleProvidersEvent$Type = ($RegisterParticleProvidersEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterParticleProvidersEvent_ = $RegisterParticleProvidersEvent$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ModelEvent$BakingCompleted" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$ModelEvent, $ModelEvent$Type} from "packages/net/minecraftforge/client/event/$ModelEvent"
import {$BakedModel, $BakedModel$Type} from "packages/net/minecraft/client/resources/model/$BakedModel"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBakery, $ModelBakery$Type} from "packages/net/minecraft/client/resources/model/$ModelBakery"
import {$ModelManager, $ModelManager$Type} from "packages/net/minecraft/client/resources/model/$ModelManager"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModelEvent$BakingCompleted extends $ModelEvent implements $IModBusEvent {

constructor()
constructor(arg0: $ModelManager$Type, arg1: $Map$Type<($ResourceLocation$Type), ($BakedModel$Type)>, arg2: $ModelBakery$Type)

public "getModels"(): $Map<($ResourceLocation), ($BakedModel)>
public "getListenerList"(): $ListenerList
public "getModelManager"(): $ModelManager
public "getModelBakery"(): $ModelBakery
get "models"(): $Map<($ResourceLocation), ($BakedModel)>
get "listenerList"(): $ListenerList
get "modelManager"(): $ModelManager
get "modelBakery"(): $ModelBakery
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$BakingCompleted$Type = ($ModelEvent$BakingCompleted);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelEvent$BakingCompleted_ = $ModelEvent$BakingCompleted$Type;
}}
declare module "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback" {
import {$RegistryManager, $RegistryManager$Type} from "packages/net/minecraftforge/registries/$RegistryManager"
import {$IForgeRegistryInternal, $IForgeRegistryInternal$Type} from "packages/net/minecraftforge/registries/$IForgeRegistryInternal"

export interface $IForgeRegistry$ClearCallback<V> {

 "onClear"(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void

(arg0: $IForgeRegistryInternal$Type<(V)>, arg1: $RegistryManager$Type): void
}

export namespace $IForgeRegistry$ClearCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeRegistry$ClearCallback$Type<V> = ($IForgeRegistry$ClearCallback<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeRegistry$ClearCallback_<V> = $IForgeRegistry$ClearCallback$Type<(V)>;
}}
declare module "packages/net/minecraftforge/event/$AnvilUpdateEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $AnvilUpdateEvent extends $Event {

constructor(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: string, arg3: integer, arg4: $Player$Type)
constructor()

public "getName"(): string
public "getRight"(): $ItemStack
public "getLeft"(): $ItemStack
public "getCost"(): integer
public "getMaterialCost"(): integer
public "isCancelable"(): boolean
public "setOutput"(arg0: $ItemStack$Type): void
public "getOutput"(): $ItemStack
public "getPlayer"(): $Player
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "setCost"(arg0: integer): void
public "setMaterialCost"(arg0: integer): void
get "name"(): string
get "right"(): $ItemStack
get "left"(): $ItemStack
get "cost"(): integer
get "materialCost"(): integer
get "cancelable"(): boolean
set "output"(value: $ItemStack$Type)
get "output"(): $ItemStack
get "player"(): $Player
get "listenerList"(): $ListenerList
set "cost"(value: integer)
set "materialCost"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpdateEvent$Type = ($AnvilUpdateEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AnvilUpdateEvent_ = $AnvilUpdateEvent$Type;
}}
declare module "packages/net/minecraftforge/common/util/$LazyOptional" {
import {$NonNullFunction, $NonNullFunction$Type} from "packages/net/minecraftforge/common/util/$NonNullFunction"
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$NonNullPredicate, $NonNullPredicate$Type} from "packages/net/minecraftforge/common/util/$NonNullPredicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$NonNullSupplier, $NonNullSupplier$Type} from "packages/net/minecraftforge/common/util/$NonNullSupplier"
import {$NonNullConsumer, $NonNullConsumer$Type} from "packages/net/minecraftforge/common/util/$NonNullConsumer"

export class $LazyOptional<T> {


public "cast"<X>(): $LazyOptional<(X)>
public "map"<U>(arg0: $NonNullFunction$Type<(any), (any)>): $Optional<(U)>
public static "of"<T>(arg0: $NonNullSupplier$Type<(T)>): $LazyOptional<(T)>
public "filter"(arg0: $NonNullPredicate$Type<(any)>): $Optional<(T)>
public static "empty"<T>(): $LazyOptional<(T)>
public "resolve"(): $Optional<(T)>
public "isPresent"(): boolean
public "orElse"(arg0: T): T
public "orElseThrow"<X extends $Throwable>(arg0: $NonNullSupplier$Type<(any)>): T
public "ifPresent"(arg0: $NonNullConsumer$Type<(any)>): void
public "orElseGet"(arg0: $NonNullSupplier$Type<(any)>): T
public "invalidate"(): void
public "removeListener"(arg0: $NonNullConsumer$Type<($LazyOptional$Type<(T)>)>): void
public "addListener"(arg0: $NonNullConsumer$Type<($LazyOptional$Type<(T)>)>): void
public "lazyMap"<U>(arg0: $NonNullFunction$Type<(any), (any)>): $LazyOptional<(U)>
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LazyOptional$Type<T> = ($LazyOptional<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LazyOptional_<T> = $LazyOptional$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent$Block" {
import {$BlockColors, $BlockColors$Type} from "packages/net/minecraft/client/color/block/$BlockColors"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$RegisterColorHandlersEvent, $RegisterColorHandlersEvent$Type} from "packages/net/minecraftforge/client/event/$RegisterColorHandlersEvent"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $RegisterColorHandlersEvent$Block extends $RegisterColorHandlersEvent {

constructor()
constructor(arg0: $BlockColors$Type)

public "register"(arg0: $BlockColor$Type, ...arg1: ($Block$Type)[]): void
public "getListenerList"(): $ListenerList
public "getBlockColors"(): $BlockColors
get "listenerList"(): $ListenerList
get "blockColors"(): $BlockColors
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterColorHandlersEvent$Block$Type = ($RegisterColorHandlersEvent$Block);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterColorHandlersEvent$Block_ = $RegisterColorHandlersEvent$Block$Type;
}}
declare module "packages/net/minecraftforge/fml/$IModStateTransition$EventGenerator" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ModContainer, $ModContainer$Type} from "packages/net/minecraftforge/fml/$ModContainer"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModStateTransition$EventGenerator<T extends ($Event) & ($IModBusEvent)> extends $Function<($ModContainer), (T)> {

 "apply"(arg0: $ModContainer$Type): $ModContainer
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($ModContainer)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<($ModContainer), (V)>

(arg0: $Function$Type<($ModContainer$Type), (FN)>): $IModStateTransition$EventGenerator<(FN)>
}

export namespace $IModStateTransition$EventGenerator {
function fromFunction<FN>(arg0: $Function$Type<($ModContainer$Type), (FN)>): $IModStateTransition$EventGenerator<(FN)>
function identity<T>(): $Function<($ModContainer), ($ModContainer)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModStateTransition$EventGenerator$Type<T> = ($IModStateTransition$EventGenerator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModStateTransition$EventGenerator_<T> = $IModStateTransition$EventGenerator$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/crafting/conditions/$ICondition" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $ICondition {

 "test"(arg0: $ICondition$IContext$Type): boolean
 "getID"(): $ResourceLocation
}

export namespace $ICondition {
function shouldRegisterEntry(arg0: $JsonElement$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$Type = ($ICondition);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICondition_ = $ICondition$Type;
}}
declare module "packages/net/minecraftforge/event/$BuildCreativeModeTabContentsEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$CreativeModeTab$TabVisibility, $CreativeModeTab$TabVisibility$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$TabVisibility"
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$MutableHashedLinkedMap, $MutableHashedLinkedMap$Type} from "packages/net/minecraftforge/common/util/$MutableHashedLinkedMap"

export class $BuildCreativeModeTabContentsEvent extends $Event implements $IModBusEvent, $CreativeModeTab$Output {

constructor()
constructor(arg0: $CreativeModeTab$Type, arg1: $ResourceKey$Type<($CreativeModeTab$Type)>, arg2: $CreativeModeTab$ItemDisplayParameters$Type, arg3: $MutableHashedLinkedMap$Type<($ItemStack$Type), ($CreativeModeTab$TabVisibility$Type)>)

public "accept"(arg0: $Supplier$Type<(any)>, arg1: $CreativeModeTab$TabVisibility$Type): void
public "accept"(arg0: $Supplier$Type<(any)>): void
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "getEntries"(): $MutableHashedLinkedMap<($ItemStack), ($CreativeModeTab$TabVisibility)>
public "getFlags"(): $FeatureFlagSet
public "isCancelable"(): boolean
public "getTabKey"(): $ResourceKey<($CreativeModeTab)>
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "hasPermissions"(): boolean
public "accept"(arg0: $ItemStack$Type, arg1: $CreativeModeTab$TabVisibility$Type): void
public "getTab"(): $CreativeModeTab
public "acceptAll"(arg0: $Collection$Type<($ItemStack$Type)>): void
public "accept"(arg0: $ItemLike$Type, arg1: $CreativeModeTab$TabVisibility$Type): void
public "acceptAll"(arg0: $Collection$Type<($ItemStack$Type)>, arg1: $CreativeModeTab$TabVisibility$Type): void
public "accept"(arg0: $ItemLike$Type): void
public "accept"(arg0: $ItemStack$Type): void
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
get "entries"(): $MutableHashedLinkedMap<($ItemStack), ($CreativeModeTab$TabVisibility)>
get "flags"(): $FeatureFlagSet
get "cancelable"(): boolean
get "tabKey"(): $ResourceKey<($CreativeModeTab)>
get "listenerList"(): $ListenerList
get "tab"(): $CreativeModeTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BuildCreativeModeTabContentsEvent$Type = ($BuildCreativeModeTabContentsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BuildCreativeModeTabContentsEvent_ = $BuildCreativeModeTabContentsEvent$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingExperienceDropEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingExperienceDropEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $Player$Type, arg2: integer)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getAttackingPlayer"(): $Player
public "getOriginalExperience"(): integer
public "getDroppedExperience"(): integer
public "setDroppedExperience"(arg0: integer): void
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "attackingPlayer"(): $Player
get "originalExperience"(): integer
get "droppedExperience"(): integer
set "droppedExperience"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingExperienceDropEvent$Type = ($LivingExperienceDropEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingExperienceDropEvent_ = $LivingExperienceDropEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$ChunkRenderTypeSet" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ExtendedChunkRenderTypeSet, $ExtendedChunkRenderTypeSet$Type} from "packages/net/fabricmc/fabric/impl/blockrenderlayer/$ExtendedChunkRenderTypeSet"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$Spliterator, $Spliterator$Type} from "packages/java/util/$Spliterator"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $ChunkRenderTypeSet implements $Iterable<($RenderType)>, $ExtendedChunkRenderTypeSet {


public "isEmpty"(): boolean
public "iterator"(): $Iterator<(any)>
public static "of"(arg0: $Collection$Type<($RenderType$Type)>): $ChunkRenderTypeSet
public static "of"(...arg0: ($RenderType$Type)[]): $ChunkRenderTypeSet
public "contains"(arg0: $RenderType$Type): boolean
public "asList"(): $List<(any)>
public static "all"(): $ChunkRenderTypeSet
public static "union"(arg0: $Iterable$Type<(any)>): $ChunkRenderTypeSet
public static "union"(...arg0: ($ChunkRenderTypeSet$Type)[]): $ChunkRenderTypeSet
public static "union"(arg0: $Collection$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "intersection"(...arg0: ($ChunkRenderTypeSet$Type)[]): $ChunkRenderTypeSet
public static "intersection"(arg0: $Collection$Type<($ChunkRenderTypeSet$Type)>): $ChunkRenderTypeSet
public static "intersection"(arg0: $Iterable$Type<(any)>): $ChunkRenderTypeSet
public static "none"(): $ChunkRenderTypeSet
public "sinytra$firstLayer"(): $RenderType
public "spliterator"(): $Spliterator<($RenderType)>
public "forEach"(arg0: $Consumer$Type<(any)>): void
[Symbol.iterator](): IterableIterator<any>;
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRenderTypeSet$Type = ($ChunkRenderTypeSet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRenderTypeSet_ = $ChunkRenderTypeSet$Type;
}}
declare module "packages/net/minecraftforge/registries/tags/$IReverseTag" {
import {$ITag, $ITag$Type} from "packages/net/minecraftforge/registries/tags/$ITag"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"

export interface $IReverseTag<V> {

 "getTagKeys"(): $Stream<($TagKey<(V)>)>
 "containsTag"(arg0: $TagKey$Type<(V)>): boolean
 "containsTag"(arg0: $ITag$Type<(V)>): boolean
}

export namespace $IReverseTag {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReverseTag$Type<V> = ($IReverseTag<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReverseTag_<V> = $IReverseTag$Type<(V)>;
}}
declare module "packages/net/minecraftforge/registries/$MissingMappingsEvent" {
import {$IForgeRegistry, $IForgeRegistry$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$MissingMappingsEvent$Mapping, $MissingMappingsEvent$Mapping$Type} from "packages/net/minecraftforge/registries/$MissingMappingsEvent$Mapping"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"

export class $MissingMappingsEvent extends $Event {

constructor(arg0: $ResourceKey$Type<(any)>, arg1: $IForgeRegistry$Type<(any)>, arg2: $Collection$Type<($MissingMappingsEvent$Mapping$Type<(any)>)>)
constructor()

public "getKey"(): $ResourceKey<(any)>
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "getRegistry"(): $IForgeRegistry<(any)>
public "getAllMappings"<T>(arg0: $ResourceKey$Type<(any)>): $List<($MissingMappingsEvent$Mapping<(T)>)>
public "getMappings"<T>(arg0: $ResourceKey$Type<(any)>, arg1: string): $List<($MissingMappingsEvent$Mapping<(T)>)>
get "key"(): $ResourceKey<(any)>
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "registry"(): $IForgeRegistry<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MissingMappingsEvent$Type = ($MissingMappingsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MissingMappingsEvent_ = $MissingMappingsEvent$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ICondition$IContext {

 "getTag"<T>(arg0: $TagKey$Type<(T)>): $Collection<($Holder<(T)>)>
 "getAllTags"<T>(arg0: $ResourceKey$Type<(any)>): $Map<($ResourceLocation), ($Collection<($Holder<(T)>)>)>

(arg0: $TagKey$Type<(T)>): $Collection<($Holder<(T)>)>
}

export namespace $ICondition$IContext {
const EMPTY: $ICondition$IContext
const TAGS_INVALID: $ICondition$IContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICondition$IContext$Type = ($ICondition$IContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICondition$IContext_ = $ICondition$IContext$Type;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullPredicate<T> {

 "test"(arg0: T): boolean

(arg0: T): boolean
}

export namespace $NonNullPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullPredicate$Type<T> = ($NonNullPredicate<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullPredicate_<T> = $NonNullPredicate$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerEvent$PlayerLoggedInEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"

export class $PlayerEvent$PlayerLoggedInEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type)

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEvent$PlayerLoggedInEvent$Type = ($PlayerEvent$PlayerLoggedInEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerEvent$PlayerLoggedInEvent_ = $PlayerEvent$PlayerLoggedInEvent$Type;
}}
declare module "packages/net/minecraftforge/client/settings/$IKeyConflictContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IKeyConflictContext {

 "isActive"(): boolean
 "conflicts"(arg0: $IKeyConflictContext$Type): boolean
}

export namespace $IKeyConflictContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IKeyConflictContext$Type = ($IKeyConflictContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IKeyConflictContext_ = $IKeyConflictContext$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkEvent$Context" {
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"
import {$NetworkEvent$PacketDispatcher, $NetworkEvent$PacketDispatcher$Type} from "packages/net/minecraftforge/network/$NetworkEvent$PacketDispatcher"
import {$AttributeKey, $AttributeKey$Type} from "packages/io/netty/util/$AttributeKey"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Attribute, $Attribute$Type} from "packages/io/netty/util/$Attribute"

export class $NetworkEvent$Context {


public "attr"<T>(arg0: $AttributeKey$Type<(T)>): $Attribute<(T)>
public "getSender"(): $ServerPlayer
public "getDirection"(): $NetworkDirection
public "getPacketHandled"(): boolean
public "getNetworkManager"(): $Connection
public "setPacketHandled"(arg0: boolean): void
public "enqueueWork"(arg0: $Runnable$Type): $CompletableFuture<(void)>
public "getPacketDispatcher"(): $NetworkEvent$PacketDispatcher
get "sender"(): $ServerPlayer
get "direction"(): $NetworkDirection
get "packetHandled"(): boolean
get "networkManager"(): $Connection
set "packetHandled"(value: boolean)
get "packetDispatcher"(): $NetworkEvent$PacketDispatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkEvent$Context$Type = ($NetworkEvent$Context);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkEvent$Context_ = $NetworkEvent$Context$Type;
}}
declare module "packages/net/minecraftforge/event/entity/$EntityEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EntityEvent extends $Event {

constructor()
constructor(arg0: $Entity$Type)

public "getEntity"(): $Entity
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "entity"(): $Entity
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$Type = ($EntityEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEvent_ = $EntityEvent$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$EnumArgument, $EnumArgument$Type} from "packages/net/minecraftforge/server/command/$EnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$EnumArgument$Info$Template, $EnumArgument$Info$Template$Type} from "packages/net/minecraftforge/server/command/$EnumArgument$Info$Template"

export class $EnumArgument$Info<T extends $Enum<(T)>> implements $ArgumentTypeInfo<($EnumArgument<(T)>), ($EnumArgument$Info$Template<>)> {

constructor()

public "unpack"(arg0: $EnumArgument$Type<(T)>): $EnumArgument$Info$Template<>
public "serializeToJson"(arg0: $EnumArgument$Info$Template$Type<>, arg1: $JsonObject$Type): void
public "serializeToNetwork"(arg0: $EnumArgument$Info$Template$Type<>, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $EnumArgument$Info$Template<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$Type<T> = ($EnumArgument$Info<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info_<T> = $EnumArgument$Info$Type<(T)>;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockModelProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$BlockModelBuilder, $BlockModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ModelProvider, $ModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ModelProvider"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockModelProvider extends $ModelProvider<($BlockModelBuilder)> {
static readonly "BLOCK_FOLDER": string
static readonly "ITEM_FOLDER": string
readonly "generatedModels": $Map<($ResourceLocation), (T)>
readonly "existingFileHelper": $ExistingFileHelper

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "getName"(): string
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelProvider$Type = ($BlockModelProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelProvider_ = $BlockModelProvider$Type;
}}
declare module "packages/net/minecraftforge/common/util/$BlockSnapshot" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $BlockSnapshot {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type): $BlockSnapshot
public static "create"(arg0: $ResourceKey$Type<($Level$Type)>, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: integer): $BlockSnapshot
public "getLevel"(): $LevelAccessor
public "getTag"(): $CompoundTag
public "getFlag"(): integer
public "getReplacedBlock"(): $BlockState
public "getPos"(): $BlockPos
public "getCurrentBlock"(): $BlockState
public "getBlockEntity"(): $BlockEntity
public "restore"(arg0: boolean): boolean
public "restore"(): boolean
public "restore"(arg0: boolean, arg1: boolean): boolean
public "restoreToLocation"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: boolean, arg3: boolean): boolean
get "level"(): $LevelAccessor
get "tag"(): $CompoundTag
get "flag"(): integer
get "replacedBlock"(): $BlockState
get "pos"(): $BlockPos
get "currentBlock"(): $BlockState
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSnapshot$Type = ($BlockSnapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockSnapshot_ = $BlockSnapshot$Type;
}}
declare module "packages/net/minecraftforge/network/$NetworkDirection" {
import {$NetworkEvent$Context, $NetworkEvent$Context$Type} from "packages/net/minecraftforge/network/$NetworkEvent$Context"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$NetworkEvent, $NetworkEvent$Type} from "packages/net/minecraftforge/network/$NetworkEvent"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ICustomPacket, $ICustomPacket$Type} from "packages/net/minecraftforge/network/$ICustomPacket"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $NetworkDirection extends $Enum<($NetworkDirection)> {
static readonly "PLAY_TO_SERVER": $NetworkDirection
static readonly "PLAY_TO_CLIENT": $NetworkDirection
static readonly "LOGIN_TO_SERVER": $NetworkDirection
static readonly "LOGIN_TO_CLIENT": $NetworkDirection


public static "values"(): ($NetworkDirection)[]
public static "valueOf"(arg0: string): $NetworkDirection
public static "directionFor"<T extends $ICustomPacket<(any)>>(arg0: $Class$Type<(T)>): $NetworkDirection
public "getOriginationSide"(): $LogicalSide
public "getReceptionSide"(): $LogicalSide
public "reply"(): $NetworkDirection
public "buildPacket"<T extends $Packet<(any)>>(arg0: $Pair$Type<($FriendlyByteBuf$Type), (integer)>, arg1: $ResourceLocation$Type): $ICustomPacket<(T)>
public "getEvent"(arg0: $ICustomPacket$Type<(any)>, arg1: $Supplier$Type<($NetworkEvent$Context$Type)>): $NetworkEvent
get "originationSide"(): $LogicalSide
get "receptionSide"(): $LogicalSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkDirection$Type = (("play_to_server") | ("login_to_client") | ("play_to_client") | ("login_to_server")) | ($NetworkDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkDirection_ = $NetworkDirection$Type;
}}
declare module "packages/net/minecraftforge/event/entity/$EntityEvent$Size" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$EntityEvent, $EntityEvent$Type} from "packages/net/minecraftforge/event/entity/$EntityEvent"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

/**
 * 
 * @deprecated
 */
export class $EntityEvent$Size extends $EntityEvent {

constructor()
constructor(arg0: $Entity$Type, arg1: $Pose$Type, arg2: $EntityDimensions$Type, arg3: $EntityDimensions$Type, arg4: float, arg5: float)
constructor(arg0: $Entity$Type, arg1: $Pose$Type, arg2: $EntityDimensions$Type, arg3: float)
constructor(arg0: $Entity$Type, arg1: $Pose$Type, arg2: $EntityDimensions$Type)

public "getListenerList"(): $ListenerList
public "getPose"(): $Pose
public "getNewEyeHeight"(): float
public "getNewSize"(): $EntityDimensions
public "setNewSize"(arg0: $EntityDimensions$Type): void
public "setNewSize"(arg0: $EntityDimensions$Type, arg1: boolean): void
public "getOldSize"(): $EntityDimensions
public "setNewEyeHeight"(arg0: float): void
public "getOriginalSize"(): $EntityDimensions
public "getOldEyeHeight"(): float
get "listenerList"(): $ListenerList
get "pose"(): $Pose
get "newEyeHeight"(): float
get "newSize"(): $EntityDimensions
set "newSize"(value: $EntityDimensions$Type)
get "oldSize"(): $EntityDimensions
set "newEyeHeight"(value: float)
get "originalSize"(): $EntityDimensions
get "oldEyeHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEvent$Size$Type = ($EntityEvent$Size);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEvent$Size_ = $EntityEvent$Size$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ConfiguredModel" {
import {$ConfiguredModel$Builder, $ConfiguredModel$Builder$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel$Builder"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ConfiguredModel {
static readonly "DEFAULT_WEIGHT": integer
readonly "model": $ModelFile
readonly "rotationX": integer
readonly "rotationY": integer
readonly "uvLock": boolean
readonly "weight": integer

constructor(arg0: $ModelFile$Type, arg1: integer, arg2: integer, arg3: boolean)
constructor(arg0: $ModelFile$Type, arg1: integer, arg2: integer, arg3: boolean, arg4: integer)
constructor(arg0: $ModelFile$Type)

public static "builder"(): $ConfiguredModel$Builder<(any)>
public static "allRotations"(arg0: $ModelFile$Type, arg1: boolean, arg2: integer): ($ConfiguredModel)[]
public static "allRotations"(arg0: $ModelFile$Type, arg1: boolean): ($ConfiguredModel)[]
public static "allYRotations"(arg0: $ModelFile$Type, arg1: integer, arg2: boolean): ($ConfiguredModel)[]
public static "allYRotations"(arg0: $ModelFile$Type, arg1: integer, arg2: boolean, arg3: integer): ($ConfiguredModel)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfiguredModel$Type = ($ConfiguredModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfiguredModel_ = $ConfiguredModel$Type;
}}
declare module "packages/net/minecraftforge/items/wrapper/$EntityHandsInvWrapper" {
import {$EntityEquipmentInvWrapper, $EntityEquipmentInvWrapper$Type} from "packages/net/minecraftforge/items/wrapper/$EntityEquipmentInvWrapper"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EntityHandsInvWrapper extends $EntityEquipmentInvWrapper {

constructor(arg0: $LivingEntity$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityHandsInvWrapper$Type = ($EntityHandsInvWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityHandsInvWrapper_ = $EntityHandsInvWrapper$Type;
}}
declare module "packages/net/minecraftforge/fml/$ModLoadingStage" {
import {$Throwable, $Throwable$Type} from "packages/java/lang/$Throwable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$DeferredWorkQueue, $DeferredWorkQueue$Type} from "packages/net/minecraftforge/fml/$DeferredWorkQueue"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLoadingStage extends $Enum<($ModLoadingStage)> {
static readonly "ERROR": $ModLoadingStage
static readonly "VALIDATE": $ModLoadingStage
static readonly "CONSTRUCT": $ModLoadingStage
static readonly "COMMON_SETUP": $ModLoadingStage
static readonly "SIDED_SETUP": $ModLoadingStage
static readonly "ENQUEUE_IMC": $ModLoadingStage
static readonly "PROCESS_IMC": $ModLoadingStage
static readonly "COMPLETE": $ModLoadingStage
static readonly "DONE": $ModLoadingStage


public "currentState"(arg0: $Throwable$Type): $ModLoadingStage
public static "values"(): ($ModLoadingStage)[]
public static "valueOf"(arg0: string): $ModLoadingStage
public "getDeferredWorkQueue"(): $DeferredWorkQueue
get "deferredWorkQueue"(): $DeferredWorkQueue
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLoadingStage$Type = (("sided_setup") | ("enqueue_imc") | ("process_imc") | ("construct") | ("error") | ("common_setup") | ("complete") | ("done") | ("validate")) | ($ModLoadingStage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModLoadingStage_ = $ModLoadingStage$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelFile$ExistingModelFile" {
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"

export class $ModelFile$ExistingModelFile extends $ModelFile {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelFile$ExistingModelFile$Type = ($ModelFile$ExistingModelFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelFile$ExistingModelFile_ = $ModelFile$ExistingModelFile$Type;
}}
declare module "packages/net/minecraftforge/fml/$LogicalSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $LogicalSide extends $Enum<($LogicalSide)> {
static readonly "CLIENT": $LogicalSide
static readonly "SERVER": $LogicalSide


public static "values"(): ($LogicalSide)[]
public static "valueOf"(arg0: string): $LogicalSide
public "isClient"(): boolean
public "isServer"(): boolean
get "client"(): boolean
get "server"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LogicalSide$Type = (("server") | ("client")) | ($LogicalSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LogicalSide_ = $LogicalSide$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegisterEvent$RegisterHelper" {
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegisterEvent$RegisterHelper<T> {

 "register"(arg0: string, arg1: T): void
 "register"(arg0: $ResourceKey$Type<(T)>, arg1: T): void
 "register"(arg0: $ResourceLocation$Type, arg1: T): void

(arg0: string, arg1: T): void
}

export namespace $RegisterEvent$RegisterHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterEvent$RegisterHelper$Type<T> = ($RegisterEvent$RegisterHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterEvent$RegisterHelper_<T> = $RegisterEvent$RegisterHelper$Type<(T)>;
}}
declare module "packages/net/minecraftforge/network/$HandshakeMessages$S2CRegistry" {
import {$HandshakeMessages$LoginIndexedMessage, $HandshakeMessages$LoginIndexedMessage$Type} from "packages/net/minecraftforge/network/$HandshakeMessages$LoginIndexedMessage"
import {$ForgeRegistry$Snapshot, $ForgeRegistry$Snapshot$Type} from "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $HandshakeMessages$S2CRegistry extends $HandshakeMessages$LoginIndexedMessage {

constructor(arg0: $ResourceLocation$Type, arg1: $ForgeRegistry$Snapshot$Type)

public static "decode"(arg0: $FriendlyByteBuf$Type): $HandshakeMessages$S2CRegistry
public "hasSnapshot"(): boolean
public "getSnapshot"(): $ForgeRegistry$Snapshot
public "getRegistryName"(): $ResourceLocation
get "snapshot"(): $ForgeRegistry$Snapshot
get "registryName"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandshakeMessages$S2CRegistry$Type = ($HandshakeMessages$S2CRegistry);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandshakeMessages$S2CRegistry_ = $HandshakeMessages$S2CRegistry$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$MultiPlayerGameMode, $MultiPlayerGameMode$Type} from "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode"

export class $ClientPlayerNetworkEvent extends $Event {

constructor()

public "getConnection"(): $Connection
public "isCancelable"(): boolean
public "getPlayer"(): $LocalPlayer
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "getMultiPlayerGameMode"(): $MultiPlayerGameMode
get "connection"(): $Connection
get "cancelable"(): boolean
get "player"(): $LocalPlayer
get "listenerList"(): $ListenerList
get "multiPlayerGameMode"(): $MultiPlayerGameMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerNetworkEvent$Type = ($ClientPlayerNetworkEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPlayerNetworkEvent_ = $ClientPlayerNetworkEvent$Type;
}}
declare module "packages/net/minecraftforge/client/$RenderTypeGroup" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export class $RenderTypeGroup extends $Record {
static "EMPTY": $RenderTypeGroup

constructor(block: $RenderType$Type, entity: $RenderType$Type, entityFabulous: $RenderType$Type)
constructor(arg0: $RenderType$Type, arg1: $RenderType$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "isEmpty"(): boolean
public "block"(): $RenderType
public "entity"(): $RenderType
public "entityFabulous"(): $RenderType
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeGroup$Type = ($RenderTypeGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RenderTypeGroup_ = $RenderTypeGroup$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$FaceRotation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ModelBuilder$FaceRotation extends $Enum<($ModelBuilder$FaceRotation)> {
static readonly "ZERO": $ModelBuilder$FaceRotation
static readonly "CLOCKWISE_90": $ModelBuilder$FaceRotation
static readonly "UPSIDE_DOWN": $ModelBuilder$FaceRotation
static readonly "COUNTERCLOCKWISE_90": $ModelBuilder$FaceRotation


public static "values"(): ($ModelBuilder$FaceRotation)[]
public static "valueOf"(arg0: string): $ModelBuilder$FaceRotation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$FaceRotation$Type = (("zero") | ("clockwise_90") | ("counterclockwise_90") | ("upside_down")) | ($ModelBuilder$FaceRotation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$FaceRotation_ = $ModelBuilder$FaceRotation$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $CustomLoaderBuilder<T extends $ModelBuilder<(T)>> {


public "end"(): T
public "toJson"(arg0: $JsonObject$Type): $JsonObject
public "visibility"(arg0: string, arg1: boolean): $CustomLoaderBuilder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomLoaderBuilder$Type<T> = ($CustomLoaderBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomLoaderBuilder_<T> = $CustomLoaderBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/util/$FakePlayer" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$WalkAnimationState, $WalkAnimationState$Type} from "packages/net/minecraft/world/entity/$WalkAnimationState"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Entity$RemovalReason, $Entity$RemovalReason$Type} from "packages/net/minecraft/world/entity/$Entity$RemovalReason"
import {$FFPlayer, $FFPlayer$Type} from "packages/snownee/fruits/duck/$FFPlayer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$ServerGamePacketListenerImpl, $ServerGamePacketListenerImpl$Type} from "packages/net/minecraft/server/network/$ServerGamePacketListenerImpl"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$KnockBackModifier, $KnockBackModifier$Type} from "packages/com/tacz/guns/api/entity/$KnockBackModifier"
import {$ServerPlayerGameMode, $ServerPlayerGameMode$Type} from "packages/net/minecraft/server/level/$ServerPlayerGameMode"
import {$MobEffectInstance, $MobEffectInstance$Type} from "packages/net/minecraft/world/effect/$MobEffectInstance"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$InventoryMenu, $InventoryMenu$Type} from "packages/net/minecraft/world/inventory/$InventoryMenu"
import {$Object2DoubleMap, $Object2DoubleMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2DoubleMap"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Stat, $Stat$Type} from "packages/net/minecraft/stats/$Stat"
import {$EntityDataAccessor, $EntityDataAccessor$Type} from "packages/net/minecraft/network/syncher/$EntityDataAccessor"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$ServerboundClientInformationPacket, $ServerboundClientInformationPacket$Type} from "packages/net/minecraft/network/protocol/game/$ServerboundClientInformationPacket"
import {$FoodData, $FoodData$Type} from "packages/net/minecraft/world/food/$FoodData"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$PlayerEnderChestContainer, $PlayerEnderChestContainer$Type} from "packages/net/minecraft/world/inventory/$PlayerEnderChestContainer"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$EntityInLevelCallback, $EntityInLevelCallback$Type} from "packages/net/minecraft/world/level/entity/$EntityInLevelCallback"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$EntityDraggingInformation, $EntityDraggingInformation$Type} from "packages/org/valkyrienskies/mod/common/util/$EntityDraggingInformation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$MobEffect, $MobEffect$Type} from "packages/net/minecraft/world/effect/$MobEffect"
import {$FishingHook, $FishingHook$Type} from "packages/net/minecraft/world/entity/projectile/$FishingHook"
import {$AtomicInteger, $AtomicInteger$Type} from "packages/java/util/concurrent/atomic/$AtomicInteger"
import {$SynchedEntityData, $SynchedEntityData$Type} from "packages/net/minecraft/network/syncher/$SynchedEntityData"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $FakePlayer extends $ServerPlayer {
 "connection": $ServerGamePacketListenerImpl
readonly "server": $MinecraftServer
readonly "gameMode": $ServerPlayerGameMode
 "camera": $Entity
 "containerCounter": integer
 "latency": integer
 "wonGame": boolean
static readonly "PERSISTED_NBT_TAG": string
static readonly "MAX_NAME_LENGTH": integer
static readonly "MAX_HEALTH": integer
static readonly "SLEEP_DURATION": integer
static readonly "WAKE_UP_DURATION": integer
static readonly "ENDER_SLOT_OFFSET": integer
static readonly "CROUCH_BB_HEIGHT": float
static readonly "SWIMMING_BB_WIDTH": float
static readonly "SWIMMING_BB_HEIGHT": float
static readonly "DEFAULT_EYE_HEIGHT": float
static readonly "STANDING_DIMENSIONS": $EntityDimensions
static readonly "DATA_PLAYER_MODE_CUSTOMISATION": $EntityDataAccessor<(byte)>
static readonly "DATA_PLAYER_MAIN_HAND": $EntityDataAccessor<(byte)>
static readonly "DATA_SHOULDER_LEFT": $EntityDataAccessor<($CompoundTag)>
static readonly "DATA_SHOULDER_RIGHT": $EntityDataAccessor<($CompoundTag)>
 "enderChestInventory": $PlayerEnderChestContainer
readonly "inventoryMenu": $InventoryMenu
 "containerMenu": $AbstractContainerMenu
 "foodData": $FoodData
 "jumpTriggerTime": integer
 "oBob": float
 "bob": float
 "takeXpDelay": integer
 "xCloakO": double
 "yCloakO": double
 "zCloakO": double
 "xCloak": double
 "yCloak": double
 "zCloak": double
 "sleepCounter": integer
 "wasUnderwater": boolean
 "experienceLevel": integer
 "totalExperience": integer
 "experienceProgress": float
 "enchantmentSeed": integer
readonly "defaultFlySpeed": float
 "fishing": $FishingHook
 "hurtDir": float
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
 "age": integer
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

constructor(arg0: $ServerLevel$Type, arg1: $GameProfile$Type)

public "awardStat"(arg0: $Stat$Type<(any)>, arg1: integer): void
public "getServer"(): $MinecraftServer
public "updateOptions"(arg0: $ServerboundClientInformationPacket$Type): void
public "canHarmPlayer"(arg0: $Player$Type): boolean
public "displayClientMessage"(arg0: $Component$Type, arg1: boolean): void
public "tick"(): void
public "die"(arg0: $DamageSource$Type): void
public "isInvulnerableTo"(arg0: $DamageSource$Type): boolean
public static "of"(arg0: any): $FFPlayer
public "vs$shouldDrag"(): boolean
public "getDraggingInformation"(): $EntityDraggingInformation
public "getCachedFeetBlockState"(): $BlockState
public static "fromLivingEntity"(arg0: $LivingEntity$Type): $KnockBackModifier
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "server"(): $MinecraftServer
get "draggingInformation"(): $EntityDraggingInformation
get "cachedFeetBlockState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakePlayer$Type = ($FakePlayer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FakePlayer_ = $FakePlayer$Type;
}}
declare module "packages/net/minecraftforge/items/wrapper/$EntityEquipmentInvWrapper" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot$Type, $EquipmentSlot$Type$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot$Type"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $EntityEquipmentInvWrapper implements $IItemHandlerModifiable {

constructor(arg0: $LivingEntity$Type, arg1: $EquipmentSlot$Type$Type)

public static "create"(arg0: $LivingEntity$Type): ($LazyOptional<($IItemHandlerModifiable)>)[]
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getSlots"(): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "isMutable"(): boolean
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "asContainer"(): $Container
public "getWidth"(): integer
public "setChanged"(): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEquipmentInvWrapper$Type = ($EntityEquipmentInvWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityEquipmentInvWrapper_ = $EntityEquipmentInvWrapper$Type;
}}
declare module "packages/net/minecraftforge/common/$IMinecartCollisionHandler" {
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IMinecartCollisionHandler {

 "getBoundingBox"(arg0: $AbstractMinecart$Type): $AABB
 "getMinecartCollisionBox"(arg0: $AbstractMinecart$Type): $AABB
 "onEntityCollision"(arg0: $AbstractMinecart$Type, arg1: $Entity$Type): void
 "getCollisionBox"(arg0: $AbstractMinecart$Type, arg1: $Entity$Type): $AABB
}

export namespace $IMinecartCollisionHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMinecartCollisionHandler$Type = ($IMinecartCollisionHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMinecartCollisionHandler_ = $IMinecartCollisionHandler$Type;
}}
declare module "packages/net/minecraftforge/common/world/$MobSpawnSettingsBuilder" {
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$SpawnerData"
import {$MobSpawnSettings, $MobSpawnSettings$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$MobSpawnSettings$Builder, $MobSpawnSettings$Builder$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$Builder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MobSpawnSettings$MobSpawnCost, $MobSpawnSettings$MobSpawnCost$Type} from "packages/net/minecraft/world/level/biome/$MobSpawnSettings$MobSpawnCost"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MobSpawnSettingsBuilder extends $MobSpawnSettings$Builder {
readonly "spawners": $Map<($MobCategory), ($List<($MobSpawnSettings$SpawnerData)>)>
readonly "mobSpawnCosts": $Map<($EntityType<(any)>), ($MobSpawnSettings$MobSpawnCost)>
 "creatureGenerationProbability": float

constructor(arg0: $MobSpawnSettings$Type)

public "getSpawner"(arg0: $MobCategory$Type): $List<($MobSpawnSettings$SpawnerData)>
public "getCost"(arg0: $EntityType$Type<(any)>): $MobSpawnSettings$MobSpawnCost
public "getSpawnerTypes"(): $Set<($MobCategory)>
public "getEntityTypes"(): $Set<($EntityType<(any)>)>
public "getProbability"(): float
public "disablePlayerSpawn"(): $MobSpawnSettingsBuilder
get "spawnerTypes"(): $Set<($MobCategory)>
get "entityTypes"(): $Set<($EntityType<(any)>)>
get "probability"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSpawnSettingsBuilder$Type = ($MobSpawnSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSpawnSettingsBuilder_ = $MobSpawnSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/fml/$IExtensionPoint" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IExtensionPoint<T extends $Record> {

}

export namespace $IExtensionPoint {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtensionPoint$Type<T> = ($IExtensionPoint<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtensionPoint_<T> = $IExtensionPoint$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$PlayerTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TickEvent$Phase, $TickEvent$Phase$Type} from "packages/net/minecraftforge/event/$TickEvent$Phase"
import {$TickEvent, $TickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent"
import {$TickEvent$Type, $TickEvent$Type$Type} from "packages/net/minecraftforge/event/$TickEvent$Type"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent$PlayerTickEvent extends $TickEvent {
readonly "player": $Player
readonly "type": $TickEvent$Type
readonly "side": $LogicalSide
readonly "phase": $TickEvent$Phase

constructor(arg0: $TickEvent$Phase$Type, arg1: $Player$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$PlayerTickEvent$Type = ($TickEvent$PlayerTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$PlayerTickEvent_ = $TickEvent$PlayerTickEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeAbstractMinecart" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeAbstractMinecart {

 "getComparatorLevel"(): integer
 "getMaxCartSpeedOnRail"(): float
 "getMaxSpeedAirLateral"(): float
 "getMaxSpeedAirVertical"(): float
 "setCurrentCartSpeedCapOnRail"(arg0: float): void
 "setMaxSpeedAirLateral"(arg0: float): void
 "shouldDoRailFunctions"(): boolean
 "setMaxSpeedAirVertical"(arg0: float): void
 "getCurrentCartSpeedCapOnRail"(): float
 "getMaxSpeedWithRail"(): double
 "getCurrentRailPosition"(): $BlockPos
 "canUseRail"(): boolean
 "canBeRidden"(): boolean
 "getDragAir"(): double
 "moveMinecartOnRail"(arg0: $BlockPos$Type): void
 "getSlopeAdjustment"(): double
 "isPoweredCart"(): boolean
 "setCanUseRail"(arg0: boolean): void
 "setDragAir"(arg0: double): void
}

export namespace $IForgeAbstractMinecart {
const DEFAULT_MAX_SPEED_AIR_LATERAL: float
const DEFAULT_MAX_SPEED_AIR_VERTICAL: float
const DEFAULT_AIR_DRAG: double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeAbstractMinecart$Type = ($IForgeAbstractMinecart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeAbstractMinecart_ = $IForgeAbstractMinecart$Type;
}}
declare module "packages/net/minecraftforge/event/level/$LevelEvent$Unload" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LevelEvent, $LevelEvent$Type} from "packages/net/minecraftforge/event/level/$LevelEvent"

export class $LevelEvent$Unload extends $LevelEvent {

constructor(arg0: $LevelAccessor$Type)
constructor()

public "getListenerList"(): $ListenerList
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelEvent$Unload$Type = ($LevelEvent$Unload);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelEvent$Unload_ = $LevelEvent$Unload$Type;
}}
declare module "packages/net/minecraftforge/registries/$ForgeRegistry$Snapshot" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IntSet, $IntSet$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntSet"
import {$Object2IntMap, $Object2IntMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Object2IntMap"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ForgeRegistry$Snapshot {
readonly "ids": $Object2IntMap<($ResourceLocation)>
readonly "aliases": $Map<($ResourceLocation), ($ResourceLocation)>
readonly "blocked": $IntSet
readonly "overrides": $Map<($ResourceLocation), (string)>

constructor()

public "write"(): $CompoundTag
public static "read"(arg0: $CompoundTag$Type): $ForgeRegistry$Snapshot
public static "read"(arg0: $FriendlyByteBuf$Type): $ForgeRegistry$Snapshot
public "getPacketData"(): $FriendlyByteBuf
get "packetData"(): $FriendlyByteBuf
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeRegistry$Snapshot$Type = ($ForgeRegistry$Snapshot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeRegistry$Snapshot_ = $ForgeRegistry$Snapshot$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$IModFileInfo" {
import {$IConfigurable, $IConfigurable$Type} from "packages/net/minecraftforge/forgespi/language/$IConfigurable"
import {$IModInfo, $IModInfo$Type} from "packages/net/minecraftforge/forgespi/language/$IModInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IModFileInfo$LanguageSpec, $IModFileInfo$LanguageSpec$Type} from "packages/net/minecraftforge/forgespi/language/$IModFileInfo$LanguageSpec"
import {$IModFile, $IModFile$Type} from "packages/net/minecraftforge/forgespi/locating/$IModFile"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModFileInfo {

 "moduleName"(): string
 "getFile"(): $IModFile
 "getFileProperties"(): $Map<(string), (any)>
 "showAsResourcePack"(): boolean
 "usesServices"(): $List<(string)>
 "getLicense"(): string
 "versionString"(): string
 "getConfig"(): $IConfigurable
 "requiredLanguageLoaders"(): $List<($IModFileInfo$LanguageSpec)>
 "getMods"(): $List<($IModInfo)>
}

export namespace $IModFileInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModFileInfo$Type = ($IModFileInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModFileInfo_ = $IModFileInfo$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeMenuType" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IContainerFactory, $IContainerFactory$Type} from "packages/net/minecraftforge/network/$IContainerFactory"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export interface $IForgeMenuType<T> {

 "create"(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type): T

(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}

export namespace $IForgeMenuType {
function create<T>(arg0: $IContainerFactory$Type<(T)>): $MenuType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMenuType$Type<T> = ($IForgeMenuType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMenuType_<T> = $IForgeMenuType$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModifiableStructureInfo$StructureInfo, $ModifiableStructureInfo$StructureInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo"
import {$StructureModifier, $StructureModifier$Type} from "packages/net/minecraftforge/common/world/$StructureModifier"

export class $ModifiableStructureInfo {

constructor(arg0: $ModifiableStructureInfo$StructureInfo$Type)

public "get"(): $ModifiableStructureInfo$StructureInfo
public "getOriginalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
public "applyStructureModifiers"(arg0: $Holder$Type<($Structure$Type)>, arg1: $List$Type<($StructureModifier$Type)>): void
public "getModifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "originalStructureInfo"(): $ModifiableStructureInfo$StructureInfo
get "modifiedStructureInfo"(): $ModifiableStructureInfo$StructureInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$Type = ($ModifiableStructureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo_ = $ModifiableStructureInfo$Type;
}}
declare module "packages/net/minecraftforge/fluids/$FluidType$Properties" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"

export class $FluidType$Properties {


public static "create"(): $FluidType$Properties
public "density"(arg0: integer): $FluidType$Properties
public "fallDistanceModifier"(arg0: float): $FluidType$Properties
public "canDrown"(arg0: boolean): $FluidType$Properties
public "pathType"(arg0: $BlockPathTypes$Type): $FluidType$Properties
public "viscosity"(arg0: integer): $FluidType$Properties
public "adjacentPathType"(arg0: $BlockPathTypes$Type): $FluidType$Properties
public "temperature"(arg0: integer): $FluidType$Properties
public "descriptionId"(arg0: string): $FluidType$Properties
public "rarity"(arg0: $Rarity$Type): $FluidType$Properties
public "canHydrate"(arg0: boolean): $FluidType$Properties
public "motionScale"(arg0: double): $FluidType$Properties
public "canExtinguish"(arg0: boolean): $FluidType$Properties
public "canSwim"(arg0: boolean): $FluidType$Properties
public "canPushEntity"(arg0: boolean): $FluidType$Properties
public "lightLevel"(arg0: integer): $FluidType$Properties
public "sound"(arg0: $SoundAction$Type, arg1: $SoundEvent$Type): $FluidType$Properties
public "supportsBoating"(arg0: boolean): $FluidType$Properties
public "canConvertToSource"(arg0: boolean): $FluidType$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidType$Properties$Type = ($FluidType$Properties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidType$Properties_ = $FluidType$Properties$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$BlockStateProvider$ConfiguredModelList, $BlockStateProvider$ConfiguredModelList$Type} from "packages/net/minecraftforge/client/model/generators/$BlockStateProvider$ConfiguredModelList"
import {$IGeneratedBlockState, $IGeneratedBlockState$Type} from "packages/net/minecraftforge/client/model/generators/$IGeneratedBlockState"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$VariantBlockStateBuilder$PartialBlockstate, $VariantBlockStateBuilder$PartialBlockstate$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder$PartialBlockstate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VariantBlockStateBuilder implements $IGeneratedBlockState {


public "getOwner"(): $Block
public "toJson"(): $JsonObject
public "partialState"(): $VariantBlockStateBuilder$PartialBlockstate
public "setModels"(arg0: $VariantBlockStateBuilder$PartialBlockstate$Type, ...arg1: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
public "forAllStates"(arg0: $Function$Type<($BlockState$Type), (($ConfiguredModel$Type)[])>): $VariantBlockStateBuilder
public "forAllStatesExcept"(arg0: $Function$Type<($BlockState$Type), (($ConfiguredModel$Type)[])>, ...arg1: ($Property$Type<(any)>)[]): $VariantBlockStateBuilder
public "getModels"(): $Map<($VariantBlockStateBuilder$PartialBlockstate), ($BlockStateProvider$ConfiguredModelList)>
public "addModels"(arg0: $VariantBlockStateBuilder$PartialBlockstate$Type, ...arg1: ($ConfiguredModel$Type)[]): $VariantBlockStateBuilder
get "owner"(): $Block
get "models"(): $Map<($VariantBlockStateBuilder$PartialBlockstate), ($BlockStateProvider$ConfiguredModelList)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VariantBlockStateBuilder$Type = ($VariantBlockStateBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VariantBlockStateBuilder_ = $VariantBlockStateBuilder$Type;
}}
declare module "packages/net/minecraftforge/client/textures/$ITextureAtlasSpriteLoader" {
import {$ForgeTextureMetadata, $ForgeTextureMetadata$Type} from "packages/net/minecraftforge/client/textures/$ForgeTextureMetadata"
import {$AnimationMetadataSection, $AnimationMetadataSection$Type} from "packages/net/minecraft/client/resources/metadata/animation/$AnimationMetadataSection"
import {$Resource, $Resource$Type} from "packages/net/minecraft/server/packs/resources/$Resource"
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FrameSize, $FrameSize$Type} from "packages/net/minecraft/client/resources/metadata/animation/$FrameSize"
import {$SpriteContents, $SpriteContents$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ITextureAtlasSpriteLoader {

 "loadContents"(arg0: $ResourceLocation$Type, arg1: $Resource$Type, arg2: $FrameSize$Type, arg3: $NativeImage$Type, arg4: $AnimationMetadataSection$Type, arg5: $ForgeTextureMetadata$Type): $SpriteContents
 "makeSprite"(arg0: $ResourceLocation$Type, arg1: $SpriteContents$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $TextureAtlasSprite
}

export namespace $ITextureAtlasSpriteLoader {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITextureAtlasSpriteLoader$Type = ($ITextureAtlasSpriteLoader);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITextureAtlasSpriteLoader_ = $ITextureAtlasSpriteLoader$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeVertexConsumer" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export interface $IForgeVertexConsumer {

 "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
 "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
 "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
 "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
}

export namespace $IForgeVertexConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeVertexConsumer$Type = ($IForgeVertexConsumer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeVertexConsumer_ = $IForgeVertexConsumer$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$BooleanValue extends $ForgeConfigSpec$ConfigValue<(boolean)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$BooleanValue$Type = ($ForgeConfigSpec$BooleanValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$BooleanValue_ = $ForgeConfigSpec$BooleanValue$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeLevel" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"

export interface $IForgeLevel extends $ICapabilityProvider {

 "increaseMaxEntityRadius"(arg0: double): double
 "getPartEntities"(): $Collection<($PartEntity<(any)>)>
 "getMaxEntityRadius"(): double
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeLevel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeLevel$Type = ($IForgeLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeLevel_ = $IForgeLevel$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeHolderSet$SerializationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IForgeHolderSet$SerializationType extends $Enum<($IForgeHolderSet$SerializationType)> {
static readonly "UNKNOWN": $IForgeHolderSet$SerializationType
static readonly "STRING": $IForgeHolderSet$SerializationType
static readonly "LIST": $IForgeHolderSet$SerializationType
static readonly "OBJECT": $IForgeHolderSet$SerializationType


public static "values"(): ($IForgeHolderSet$SerializationType)[]
public static "valueOf"(arg0: string): $IForgeHolderSet$SerializationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeHolderSet$SerializationType$Type = (("string") | ("list") | ("unknown") | ("object")) | ($IForgeHolderSet$SerializationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeHolderSet$SerializationType_ = $IForgeHolderSet$SerializationType$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ModelBuilder$TransformsBuilder, $ModelBuilder$TransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"
import {$BlockModel$GuiLight, $BlockModel$GuiLight$Type} from "packages/net/minecraft/client/renderer/block/model/$BlockModel$GuiLight"
import {$ModelBuilder$RootTransformsBuilder, $ModelBuilder$RootTransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ModelBuilder$ElementBuilder, $ModelBuilder$ElementBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$CustomLoaderBuilder, $CustomLoaderBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$CustomLoaderBuilder"

export class $ModelBuilder<T extends $ModelBuilder<(T)>> extends $ModelFile {


public "parent"(arg0: $ModelFile$Type): T
public "ao"(arg0: boolean): T
public "element"(arg0: integer): $ModelBuilder$ElementBuilder<>
public "element"(): $ModelBuilder$ElementBuilder<>
public "texture"(arg0: string, arg1: $ResourceLocation$Type): T
public "texture"(arg0: string, arg1: string): T
public "toJson"(): $JsonObject
public "renderType"(arg0: string): T
public "renderType"(arg0: $ResourceLocation$Type): T
public "getElementCount"(): integer
public "transforms"(): $ModelBuilder$TransformsBuilder<>
public "rootTransforms"(): $ModelBuilder$RootTransformsBuilder<>
public "guiLight"(arg0: $BlockModel$GuiLight$Type): T
public "customLoader"<L extends $CustomLoaderBuilder<(T)>>(arg0: $BiFunction$Type<(T), ($ExistingFileHelper$Type), (L)>): L
get "elementCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$Type<T> = ($ModelBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder_<T> = $ModelBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/items/$IItemHandler" {
import {$InventoryKJS, $InventoryKJS$Type} from "packages/dev/latvian/mods/kubejs/core/$InventoryKJS"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $IItemHandler extends $InventoryKJS {

 "getSlots"(): integer
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
 "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
 "kjs$self"(): $IItemHandler
 "isMutable"(): boolean
 "getStackInSlot"(i: integer): $ItemStack
 "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
 "getSlots"(): integer
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
 "getSlotLimit"(i: integer): integer
 "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getHeight"(): integer
 "clear"(): void
 "clear"(ingredient: $Ingredient$Type): void
 "asContainer"(): $Container
 "getWidth"(): integer
 "setChanged"(): void
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
}

export namespace $IItemHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IItemHandler$Type = ($IItemHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IItemHandler_ = $IItemHandler$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ForgeConfigSpec$Builder, $ForgeConfigSpec$Builder$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeConfigSpec$ConfigValue<T> implements $Supplier<(T)> {


public "get"(): T
public "next"(): $ForgeConfigSpec$Builder
public "getDefault"(): T
public "set"(arg0: T): void
public "save"(): void
public "getPath"(): $List<(string)>
public "clearCache"(): void
get "default"(): T
get "path"(): $List<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$ConfigValue$Type<T> = ($ForgeConfigSpec$ConfigValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$ConfigValue_<T> = $ForgeConfigSpec$ConfigValue$Type<(T)>;
}}
declare module "packages/net/minecraftforge/fml/config/$IConfigSpec" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$ConfigFormat, $ConfigFormat$Type} from "packages/com/electronwill/nightconfig/core/$ConfigFormat"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$LongSupplier, $LongSupplier$Type} from "packages/java/util/function/$LongSupplier"
import {$OptionalInt, $OptionalInt$Type} from "packages/java/util/$OptionalInt"
import {$CommentedConfig, $CommentedConfig$Type} from "packages/com/electronwill/nightconfig/core/$CommentedConfig"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$UnmodifiableConfig, $UnmodifiableConfig$Type} from "packages/com/electronwill/nightconfig/core/$UnmodifiableConfig"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IConfigSpec<T extends $IConfigSpec<(T)>> extends $UnmodifiableConfig {

 "self"(): T
 "isCorrect"(arg0: $CommentedConfig$Type): boolean
 "correct"(arg0: $CommentedConfig$Type): integer
 "isCorrecting"(): boolean
 "afterReload"(): void
 "acceptConfig"(arg0: $CommentedConfig$Type): void
 "get"<T>(arg0: string): T
 "get"<T>(arg0: $List$Type<(string)>): T
 "getByte"(arg0: $List$Type<(string)>): byte
 "getByte"(arg0: string): byte
 "getShort"(arg0: string): short
 "getShort"(arg0: $List$Type<(string)>): short
 "getChar"(arg0: string): character
 "getChar"(arg0: $List$Type<(string)>): character
 "getInt"(arg0: string): integer
 "getInt"(arg0: $List$Type<(string)>): integer
 "getLong"(arg0: string): long
 "getLong"(arg0: $List$Type<(string)>): long
 "isEmpty"(): boolean
 "size"(): integer
 "apply"<T>(arg0: string): T
 "apply"<T>(arg0: $List$Type<(string)>): T
 "contains"(arg0: $List$Type<(string)>): boolean
 "contains"(arg0: string): boolean
 "entrySet"(): $Set<(any)>
 "isNull"(arg0: string): boolean
 "isNull"(arg0: $List$Type<(string)>): boolean
 "valueMap"(): $Map<(string), (any)>
 "getOptional"<T>(arg0: $List$Type<(string)>): $Optional<(T)>
 "getOptional"<T>(arg0: string): $Optional<(T)>
 "getRaw"<T>(arg0: string): T
 "getRaw"<T>(arg0: $List$Type<(string)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): T
 "getEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): T
 "configFormat"(): $ConfigFormat<(any)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getOptionalEnum"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type): $Optional<(T)>
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: T, arg2: $EnumGetMethod$Type): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: $List$Type<(string)>, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $Supplier$Type<(T)>): T
 "getEnumOrElse"<T extends $Enum<(T)>>(arg0: string, arg1: $Class$Type<(T)>, arg2: $EnumGetMethod$Type, arg3: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: T): T
 "getOrElse"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>): T
 "getOrElse"<T>(arg0: string, arg1: T): T
 "getOrElse"<T>(arg0: string, arg1: $Supplier$Type<(T)>): T
 "getOptionalInt"(arg0: string): $OptionalInt
 "getOptionalInt"(arg0: $List$Type<(string)>): $OptionalInt
 "getCharOrElse"(arg0: string, arg1: character): character
 "getCharOrElse"(arg0: $List$Type<(string)>, arg1: character): character
 "getByteOrElse"(arg0: $List$Type<(string)>, arg1: byte): byte
 "getByteOrElse"(arg0: string, arg1: byte): byte
 "getShortOrElse"(arg0: string, arg1: short): short
 "getShortOrElse"(arg0: $List$Type<(string)>, arg1: short): short
 "getLongOrElse"(arg0: string, arg1: long): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: long): long
 "getLongOrElse"(arg0: string, arg1: $LongSupplier$Type): long
 "getLongOrElse"(arg0: $List$Type<(string)>, arg1: $LongSupplier$Type): long
 "getOptionalLong"(arg0: string): $OptionalLong
 "getOptionalLong"(arg0: $List$Type<(string)>): $OptionalLong
 "getIntOrElse"(arg0: string, arg1: $IntSupplier$Type): integer
 "getIntOrElse"(arg0: string, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: integer): integer
 "getIntOrElse"(arg0: $List$Type<(string)>, arg1: $IntSupplier$Type): integer
}

export namespace $IConfigSpec {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigSpec$Type<T> = ($IConfigSpec<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigSpec_<T> = $IConfigSpec$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/$IPlantable" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$PlantType, $PlantType$Type} from "packages/net/minecraftforge/common/$PlantType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IPlantable {

 "getPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
 "getPlantType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $PlantType

(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): $BlockState
}

export namespace $IPlantable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlantable$Type = ($IPlantable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlantable_ = $IPlantable$Type;
}}
declare module "packages/net/minecraftforge/forgespi/language/$ModFileScanData$AnnotationData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ElementType, $ElementType$Type} from "packages/java/lang/annotation/$ElementType"
import {$Type, $Type$Type} from "packages/org/objectweb/asm/$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModFileScanData$AnnotationData extends $Record {

constructor(annotationType: $Type$Type, targetType: $ElementType$Type, clazz: $Type$Type, memberName: string, annotationData: $Map$Type<(string), (any)>)

public "clazz"(): $Type
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "annotationData"(): $Map<(string), (any)>
public "annotationType"(): $Type
public "targetType"(): $ElementType
public "memberName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModFileScanData$AnnotationData$Type = ($ModFileScanData$AnnotationData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModFileScanData$AnnotationData_ = $ModFileScanData$AnnotationData$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeDimensionSpecialEffects" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$LightTexture, $LightTexture$Type} from "packages/net/minecraft/client/renderer/$LightTexture"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $IForgeDimensionSpecialEffects {

 "adjustLightmapColors"(arg0: $ClientLevel$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$Type): void
 "renderClouds"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $PoseStack$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$Type): boolean
 "renderSnowAndRain"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $LightTexture$Type, arg4: double, arg5: double, arg6: double): boolean
 "tickRain"(arg0: $ClientLevel$Type, arg1: integer, arg2: $Camera$Type): boolean
 "renderSky"(arg0: $ClientLevel$Type, arg1: integer, arg2: float, arg3: $PoseStack$Type, arg4: $Camera$Type, arg5: $Matrix4f$Type, arg6: boolean, arg7: $Runnable$Type): boolean
}

export namespace $IForgeDimensionSpecialEffects {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeDimensionSpecialEffects$Type = ($IForgeDimensionSpecialEffects);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeDimensionSpecialEffects_ = $IForgeDimensionSpecialEffects$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeDispensibleContainerItem" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeDispensibleContainerItem {

 "emptyContents"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockHitResult$Type, arg4: $ItemStack$Type): boolean
}

export namespace $IForgeDispensibleContainerItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeDispensibleContainerItem$Type = ($IForgeDispensibleContainerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeDispensibleContainerItem_ = $IForgeDispensibleContainerItem$Type;
}}
declare module "packages/net/minecraftforge/common/util/$TriPredicate" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TriPredicate<T, U, V> {

 "test"(arg0: T, arg1: U, arg2: V): boolean
 "or"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<(T), (U), (V)>
 "negate"(): $TriPredicate<(T), (U), (V)>
 "and"(arg0: $TriPredicate$Type<(any), (any), (any)>): $TriPredicate<(T), (U), (V)>

(arg0: T, arg1: U, arg2: V): boolean
}

export namespace $TriPredicate {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriPredicate$Type<T, U, V> = ($TriPredicate<(T), (U), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TriPredicate_<T, U, V> = $TriPredicate$Type<(T), (U), (V)>;
}}
declare module "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent$Clone" {
import {$LocalPlayer, $LocalPlayer$Type} from "packages/net/minecraft/client/player/$LocalPlayer"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$ClientPlayerNetworkEvent, $ClientPlayerNetworkEvent$Type} from "packages/net/minecraftforge/client/event/$ClientPlayerNetworkEvent"
import {$MultiPlayerGameMode, $MultiPlayerGameMode$Type} from "packages/net/minecraft/client/multiplayer/$MultiPlayerGameMode"

export class $ClientPlayerNetworkEvent$Clone extends $ClientPlayerNetworkEvent {

constructor()
constructor(arg0: $MultiPlayerGameMode$Type, arg1: $LocalPlayer$Type, arg2: $LocalPlayer$Type, arg3: $Connection$Type)

public "getPlayer"(): $LocalPlayer
public "getListenerList"(): $ListenerList
public "getOldPlayer"(): $LocalPlayer
public "getNewPlayer"(): $LocalPlayer
get "player"(): $LocalPlayer
get "listenerList"(): $ListenerList
get "oldPlayer"(): $LocalPlayer
get "newPlayer"(): $LocalPlayer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientPlayerNetworkEvent$Clone$Type = ($ClientPlayerNetworkEvent$Clone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientPlayerNetworkEvent$Clone_ = $ClientPlayerNetworkEvent$Clone$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeGuiGraphics" {
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IForgeGuiGraphics {

 "blitWithBorder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer): void
 "blitWithBorder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
 "blitInscribed"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
 "blitInscribed"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer): void
 "blitNineSlicedSized"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer, arg9: integer, arg10: integer, arg11: integer, arg12: integer): void
 "getColorFromFormattingCharacter"(arg0: character, arg1: boolean): integer
}

export namespace $IForgeGuiGraphics {
const DEFAULT_BACKGROUND_COLOR: integer
const DEFAULT_BORDER_COLOR_START: integer
const DEFAULT_BORDER_COLOR_END: integer
const UNDO_CHAR: string
const RESET_CHAR: string
const VALID: string
const INVALID: string
const TEXT_COLOR_CODES: (integer)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeGuiGraphics$Type = ($IForgeGuiGraphics);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeGuiGraphics_ = $IForgeGuiGraphics$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$TickEvent$Phase, $TickEvent$Phase$Type} from "packages/net/minecraftforge/event/$TickEvent$Phase"
import {$TickEvent$Type, $TickEvent$Type$Type} from "packages/net/minecraftforge/event/$TickEvent$Type"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent extends $Event {
readonly "type": $TickEvent$Type
readonly "side": $LogicalSide
readonly "phase": $TickEvent$Phase

constructor()
constructor(arg0: $TickEvent$Type$Type, arg1: $LogicalSide$Type, arg2: $TickEvent$Phase$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Type = ($TickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent_ = $TickEvent$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$EnumValue<T extends $Enum<(T)>> extends $ForgeConfigSpec$ConfigValue<(T)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$EnumValue$Type<T> = ($ForgeConfigSpec$EnumValue<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$EnumValue_<T> = $ForgeConfigSpec$EnumValue$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/world/$StructureSettingsBuilder" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$TerrainAdjustment, $TerrainAdjustment$Type} from "packages/net/minecraft/world/level/levelgen/structure/$TerrainAdjustment"
import {$StructureSettingsBuilder$StructureSpawnOverrideBuilder, $StructureSettingsBuilder$StructureSpawnOverrideBuilder$Type} from "packages/net/minecraftforge/common/world/$StructureSettingsBuilder$StructureSpawnOverrideBuilder"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"

export class $StructureSettingsBuilder {


public static "copyOf"(arg0: $Structure$StructureSettings$Type): $StructureSettingsBuilder
public "build"(): $Structure$StructureSettings
public "getOrAddSpawnOverrides"(arg0: $MobCategory$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getBiomes"(): $HolderSet<($Biome)>
public "setBiomes"(arg0: $HolderSet$Type<($Biome$Type)>): void
public "getSpawnOverrides"(arg0: $MobCategory$Type): $StructureSettingsBuilder$StructureSpawnOverrideBuilder
public "getDecorationStep"(): $GenerationStep$Decoration
public "setDecorationStep"(arg0: $GenerationStep$Decoration$Type): void
public "getTerrainAdaptation"(): $TerrainAdjustment
public "setTerrainAdaptation"(arg0: $TerrainAdjustment$Type): void
public "removeSpawnOverrides"(arg0: $MobCategory$Type): void
get "biomes"(): $HolderSet<($Biome)>
set "biomes"(value: $HolderSet$Type<($Biome$Type)>)
get "decorationStep"(): $GenerationStep$Decoration
set "decorationStep"(value: $GenerationStep$Decoration$Type)
get "terrainAdaptation"(): $TerrainAdjustment
set "terrainAdaptation"(value: $TerrainAdjustment$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureSettingsBuilder$Type = ($StructureSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureSettingsBuilder_ = $StructureSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $LivingEntityUseItemEvent extends $LivingEvent {

constructor()

public "getDuration"(): integer
public "getItem"(): $ItemStack
public "setDuration"(arg0: integer): void
public "getListenerList"(): $ListenerList
get "duration"(): integer
get "item"(): $ItemStack
set "duration"(value: integer)
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityUseItemEvent$Type = ($LivingEntityUseItemEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityUseItemEvent_ = $LivingEntityUseItemEvent$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientBlockExtensions" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ParticleEngine, $ParticleEngine$Type} from "packages/net/minecraft/client/particle/$ParticleEngine"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IClientBlockExtensions {

 "areBreakingParticlesTinted"(arg0: $BlockState$Type, arg1: $ClientLevel$Type, arg2: $BlockPos$Type): boolean
 "addDestroyEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ParticleEngine$Type): boolean
 "getFogColor"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Entity$Type, arg4: $Vector3d$Type, arg5: float): $Vector3d
 "addHitEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $HitResult$Type, arg3: $ParticleEngine$Type): boolean
}

export namespace $IClientBlockExtensions {
const DEFAULT: $IClientBlockExtensions
function of(arg0: $BlockState$Type): $IClientBlockExtensions
function of(arg0: $Block$Type): $IClientBlockExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientBlockExtensions$Type = ($IClientBlockExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientBlockExtensions_ = $IClientBlockExtensions$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeItemStack" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IForgeItemStack extends $ICapabilitySerializable<($CompoundTag)> {

 "equals"(arg0: $ItemStack$Type, arg1: boolean): boolean
 "onEntityItemUpdate"(arg0: $ItemEntity$Type): boolean
 "getEntityLifespan"(arg0: $Level$Type): integer
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "canPerformAction"(arg0: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $Player$Type, arg1: $Entity$Type): $AABB
 "canElytraFly"(arg0: $LivingEntity$Type): boolean
 "getEquipmentSlot"(): $EquipmentSlot
 "getAllEnchantments"(): $Map<($Enchantment), (integer)>
 "getCraftingRemainingItem"(): $ItemStack
 "getEnchantmentLevel"(arg0: $Enchantment$Type): integer
 "hasCraftingRemainingItem"(): boolean
 "isRepairable"(): boolean
 "doesSneakBypassUse"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "getXpRepairRatio"(): float
 "isPiglinCurrency"(): boolean
 "onDroppedByPlayer"(arg0: $Player$Type): boolean
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $Level$Type, arg1: $Player$Type): void
 "onInventoryTick"(arg0: $Level$Type, arg1: $Player$Type, arg2: integer, arg3: integer): void
 "onItemUseFirst"(arg0: $UseOnContext$Type): $InteractionResult
 "onBlockStartBreak"(arg0: $BlockPos$Type, arg1: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type): boolean
 "canEquip"(arg0: $EquipmentSlot$Type, arg1: $Entity$Type): boolean
 "isEnderMask"(arg0: $Player$Type, arg1: $EnderMan$Type): boolean
 "getBurnTime"(arg0: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $Level$Type, arg1: $Mob$Type): void
 "getFoodProperties"(arg0: $LivingEntity$Type): $FoodProperties
 "onStopUsing"(arg0: $LivingEntity$Type, arg1: integer): void
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $LivingEntity$Type): boolean
 "makesPiglinsNeutral"(arg0: $LivingEntity$Type): boolean
 "getEnchantmentValue"(): integer
 "canWalkOnPowderedSnow"(arg0: $LivingEntity$Type): boolean
 "canGrindstoneRepair"(): boolean
 "isNotReplaceableByPickAction"(arg0: $Player$Type, arg1: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type): boolean
 "canApplyAtEnchantingTable"(arg0: $Enchantment$Type): boolean
 "areShareTagsEqual"(arg0: $ItemStack$Type): boolean
 "readShareTag"(arg0: $CompoundTag$Type): void
 "getShareTag"(): $CompoundTag
 "onEntitySwing"(arg0: $LivingEntity$Type): boolean
 "elytraFlightTick"(arg0: $LivingEntity$Type, arg1: integer): boolean
 "getHighlightTip"(arg0: $Component$Type): $Component
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $IForgeItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeItemStack$Type = ($IForgeItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeItemStack_ = $IForgeItemStack$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeAdvancementBuilder" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Advancement, $Advancement$Type} from "packages/net/minecraft/advancements/$Advancement"

export interface $IForgeAdvancementBuilder {

 "save"(arg0: $Consumer$Type<($Advancement$Type)>, arg1: $ResourceLocation$Type, arg2: $ExistingFileHelper$Type): $Advancement
}

export namespace $IForgeAdvancementBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeAdvancementBuilder$Type = ($IForgeAdvancementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeAdvancementBuilder_ = $IForgeAdvancementBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ClimateSettingsBuilder" {
import {$Biome$ClimateSettings, $Biome$ClimateSettings$Type} from "packages/net/minecraft/world/level/biome/$Biome$ClimateSettings"
import {$Biome$TemperatureModifier, $Biome$TemperatureModifier$Type} from "packages/net/minecraft/world/level/biome/$Biome$TemperatureModifier"

export class $ClimateSettingsBuilder {


public static "copyOf"(arg0: $Biome$ClimateSettings$Type): $ClimateSettingsBuilder
public static "create"(arg0: boolean, arg1: float, arg2: $Biome$TemperatureModifier$Type, arg3: float): $ClimateSettingsBuilder
public "build"(): $Biome$ClimateSettings
public "getTemperature"(): float
public "setTemperature"(arg0: float): void
public "getDownfall"(): float
public "hasPrecipitation"(): boolean
public "setHasPrecipitation"(arg0: boolean): void
public "setTemperatureModifier"(arg0: $Biome$TemperatureModifier$Type): void
public "getTemperatureModifier"(): $Biome$TemperatureModifier
public "setDownfall"(arg0: float): void
get "temperature"(): float
set "temperature"(value: float)
get "downfall"(): float
set "temperatureModifier"(value: $Biome$TemperatureModifier$Type)
get "temperatureModifier"(): $Biome$TemperatureModifier
set "downfall"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimateSettingsBuilder$Type = ($ClimateSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimateSettingsBuilder_ = $ClimateSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget" {
import {$Packet, $Packet$Type} from "packages/net/minecraft/network/protocol/$Packet"
import {$NetworkDirection, $NetworkDirection$Type} from "packages/net/minecraftforge/network/$NetworkDirection"

export class $PacketDistributor$PacketTarget {


public "send"(arg0: $Packet$Type<(any)>): void
public "getDirection"(): $NetworkDirection
get "direction"(): $NetworkDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PacketDistributor$PacketTarget$Type = ($PacketDistributor$PacketTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PacketDistributor$PacketTarget_ = $PacketDistributor$PacketTarget$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockState" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$FabricBlockState, $FabricBlockState$Type} from "packages/net/fabricmc/fabric/api/block/v1/$FabricBlockState"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IPlantable, $IPlantable$Type} from "packages/net/minecraftforge/common/$IPlantable"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export interface $IForgeBlockState extends $FabricBlockState {

 "rotate"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $Rotation$Type): $BlockState
 "getRespawnPosition"(arg0: $EntityType$Type<(any)>, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: float, arg4: $LivingEntity$Type): $Optional<($Vec3)>
 "addRunningEffects"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "onBlockStateChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
 "onCaughtFire"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $LivingEntity$Type): void
 "onBlockExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
 "getAppearance"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): $BlockState
 "canSustainPlant"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type, arg3: $IPlantable$Type): boolean
 "isLadder"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): boolean
 "isFertile"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "isBurning"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "isValidSpawn"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $SpawnPlacements$Type$Type, arg3: $EntityType$Type<(any)>): boolean
 "onTreeGrow"(arg0: $LevelReader$Type, arg1: $BiConsumer$Type<($BlockPos$Type), ($BlockState$Type)>, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: $TreeConfiguration$Type): boolean
 "isConduitFrame"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): boolean
 "canHarvestBlock"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "getExpDrop"(arg0: $LevelReader$Type, arg1: $RandomSource$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer): integer
 "getBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type): $BlockPathTypes
 "isSlimeBlock"(): boolean
 "isPortalFrame"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): boolean
 "isFlammable"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "isFireSource"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "canEntityDestroy"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "canStickTo"(arg0: $BlockState$Type): boolean
 "getFireSpreadSpeed"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
 "getFlammability"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
 "isStickyBlock"(): boolean
 "canBeHydrated"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type, arg3: $BlockPos$Type): boolean
 "getBedDirection"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): $Direction
 "isBed"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type): boolean
 "setBedOccupied"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $LivingEntity$Type, arg3: boolean): void
 "getFriction"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): float
 "collisionExtendsVertically"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): boolean
 "shouldCheckWeakPower"(arg0: $SignalGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
 "hidesNeighborFace"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Direction$Type): boolean
 "getCloneItemStack"(arg0: $HitResult$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Player$Type): $ItemStack
 "addLandingEffects"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: integer): boolean
 "getSoundType"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Entity$Type): $SoundType
 "isScaffolding"(arg0: $LivingEntity$Type): boolean
 "getLightEmission"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type): integer
 "onNeighborChange"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): void
 "getWeakChanges"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
 "onDestroyedByPlayer"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: boolean, arg4: $FluidState$Type): boolean
 "getExplosionResistance"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): float
 "getBeaconColorMultiplier"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type): (float)[]
 "getStateAtViewpoint"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Vec3$Type): $BlockState
 "getEnchantPowerBonus"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): float
 "getAdjacentBlockPathType"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Mob$Type, arg3: $BlockPathTypes$Type): $BlockPathTypes
 "canDropFromExplosion"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): boolean
 "shouldDisplayFluidOverlay"(arg0: $BlockAndTintGetter$Type, arg1: $BlockPos$Type, arg2: $FluidState$Type): boolean
 "getToolModifiedState"(arg0: $UseOnContext$Type, arg1: $ToolAction$Type, arg2: boolean): $BlockState
 "supportsExternalFaceHiding"(): boolean
 "canRedstoneConnectTo"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): boolean
}

export namespace $IForgeBlockState {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockState$Type = ($IForgeBlockState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockState_ = $IForgeBlockState$Type;
}}
declare module "packages/net/minecraftforge/fluids/capability/templates/$FluidTank" {
import {$IFluidHandler, $IFluidHandler$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"
import {$IFluidTank, $IFluidTank$Type} from "packages/net/minecraftforge/fluids/$IFluidTank"

export class $FluidTank implements $IFluidHandler, $IFluidTank {

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Predicate$Type<($FluidStack$Type)>)

public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
public "getSpace"(): integer
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
public "getCapacity"(): integer
public "setCapacity"(arg0: integer): $FluidTank
public "setFluid"(arg0: $FluidStack$Type): void
public "getFluid"(): $FluidStack
public "readFromNBT"(arg0: $CompoundTag$Type): $FluidTank
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "isFluidValid"(arg0: $FluidStack$Type): boolean
public "isFluidValid"(arg0: integer, arg1: $FluidStack$Type): boolean
public "getTankCapacity"(arg0: integer): integer
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "setValidator"(arg0: $Predicate$Type<($FluidStack$Type)>): $FluidTank
public "getFluidAmount"(): integer
get "empty"(): boolean
get "space"(): integer
get "capacity"(): integer
set "capacity"(value: integer)
set "fluid"(value: $FluidStack$Type)
get "fluid"(): $FluidStack
get "tanks"(): integer
set "validator"(value: $Predicate$Type<($FluidStack$Type)>)
get "fluidAmount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTank$Type = ($FluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FluidTank_ = $FluidTank$Type;
}}
declare module "packages/net/minecraftforge/client/event/$RegisterKeyMappingsEvent" {
import {$KeyMapping, $KeyMapping$Type} from "packages/net/minecraft/client/$KeyMapping"
import {$Options, $Options$Type} from "packages/net/minecraft/client/$Options"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$IModBusEvent, $IModBusEvent$Type} from "packages/net/minecraftforge/fml/event/$IModBusEvent"

export class $RegisterKeyMappingsEvent extends $Event implements $IModBusEvent {

constructor()
constructor(arg0: $Options$Type)

public "register"(arg0: $KeyMapping$Type): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterKeyMappingsEvent$Type = ($RegisterKeyMappingsEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegisterKeyMappingsEvent_ = $RegisterKeyMappingsEvent$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$LongValue" {
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"

export class $ForgeConfigSpec$LongValue extends $ForgeConfigSpec$ConfigValue<(long)> {


}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$LongValue$Type = ($ForgeConfigSpec$LongValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$LongValue_ = $ForgeConfigSpec$LongValue$Type;
}}
declare module "packages/net/minecraftforge/entity/$IEntityAdditionalSpawnData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export interface $IEntityAdditionalSpawnData {

 "writeSpawnData"(arg0: $FriendlyByteBuf$Type): void
 "readSpawnData"(arg0: $FriendlyByteBuf$Type): void
}

export namespace $IEntityAdditionalSpawnData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEntityAdditionalSpawnData$Type = ($IEntityAdditionalSpawnData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEntityAdditionalSpawnData_ = $IEntityAdditionalSpawnData$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeMinecraft" {
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$Locale, $Locale$Type} from "packages/java/util/$Locale"

export interface $IForgeMinecraft {

 "getLocale"(): $Locale
 "popGuiLayer"(): void
 "pushGuiLayer"(arg0: $Screen$Type): void
}

export namespace $IForgeMinecraft {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeMinecraft$Type = ($IForgeMinecraft);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeMinecraft_ = $IForgeMinecraft$Type;
}}
declare module "packages/net/minecraftforge/network/$ServerStatusPing" {
import {$ServerStatusPing$ChannelData, $ServerStatusPing$ChannelData$Type} from "packages/net/minecraftforge/network/$ServerStatusPing$ChannelData"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ServerStatusPing extends $Record {
static readonly "CODEC": $Codec<($ServerStatusPing)>

constructor()
constructor(channels: $Map$Type<($ResourceLocation$Type), ($ServerStatusPing$ChannelData$Type)>, mods: $Map$Type<(string), (string)>, fmlNetworkVer: integer, truncated: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "mods"(): $Map<(string), (string)>
public "channels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
public "truncated"(): boolean
public "toBuf"(): $ByteBuf
public "fmlNetworkVer"(): integer
public "getRemoteChannels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
public "isTruncated"(): boolean
public "getRemoteModData"(): $Map<(string), (string)>
public "getFMLNetworkVersion"(): integer
get "remoteChannels"(): $Map<($ResourceLocation), ($ServerStatusPing$ChannelData)>
get "remoteModData"(): $Map<(string), (string)>
get "fMLNetworkVersion"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerStatusPing$Type = ($ServerStatusPing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerStatusPing_ = $ServerStatusPing$Type;
}}
declare module "packages/net/minecraftforge/common/brewing/$IBrewingRecipe" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBrewingRecipe {

 "getOutput"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): $ItemStack
 "isIngredient"(arg0: $ItemStack$Type): boolean
 "isInput"(arg0: $ItemStack$Type): boolean
}

export namespace $IBrewingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBrewingRecipe$Type = ($IBrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBrewingRecipe_ = $IBrewingRecipe$Type;
}}
declare module "packages/net/minecraftforge/common/world/$StructureModifier" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Structure, $Structure$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure"
import {$ModifiableStructureInfo$StructureInfo$Builder, $ModifiableStructureInfo$StructureInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo$Builder"
import {$StructureModifier$Phase, $StructureModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$StructureModifier$Phase"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $StructureModifier {

 "modify"(arg0: $Holder$Type<($Structure$Type)>, arg1: $StructureModifier$Phase$Type, arg2: $ModifiableStructureInfo$StructureInfo$Builder$Type): void
 "codec"(): $Codec<(any)>
}

export namespace $StructureModifier {
const DIRECT_CODEC: $Codec<($StructureModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($StructureModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($StructureModifier)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureModifier$Type = ($StructureModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureModifier_ = $StructureModifier$Type;
}}
declare module "packages/net/minecraftforge/fml/event/$IModBusEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModBusEvent {

}

export namespace $IModBusEvent {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModBusEvent$Type = ($IModBusEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModBusEvent_ = $IModBusEvent$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBaseRailBlock" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractMinecart, $AbstractMinecart$Type} from "packages/net/minecraft/world/entity/vehicle/$AbstractMinecart"
import {$RailShape, $RailShape$Type} from "packages/net/minecraft/world/level/block/state/properties/$RailShape"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IForgeBaseRailBlock {

 "getRailDirection"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): $RailShape
 "onMinecartPass"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): void
 "isFlexibleRail"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "canMakeSlopes"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "isValidRailShape"(arg0: $RailShape$Type): boolean
 "getRailMaxSpeed"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $AbstractMinecart$Type): float
}

export namespace $IForgeBaseRailBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBaseRailBlock$Type = ($IForgeBaseRailBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBaseRailBlock_ = $IForgeBaseRailBlock$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/$IForgeBlockAndTintGetter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IForgeBlockAndTintGetter {

 "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
}

export namespace $IForgeBlockAndTintGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockAndTintGetter$Type = ($IForgeBlockAndTintGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockAndTintGetter_ = $IForgeBlockAndTintGetter$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeLivingEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IForgeEntity, $IForgeEntity$Type} from "packages/net/minecraftforge/common/extensions/$IForgeEntity"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"

export interface $IForgeLivingEntity extends $IForgeEntity {

 "self"(): $LivingEntity
 "canSwimInFluidType"(arg0: $FluidType$Type): boolean
 "canDrownInFluidType"(arg0: $FluidType$Type): boolean
 "sinkInFluid"(arg0: $FluidType$Type): void
 "moveInFluid"(arg0: $FluidState$Type, arg1: $Vec3$Type, arg2: double): boolean
 "jumpInFluid"(arg0: $FluidType$Type): void
 "getPersistentData"(): $CompoundTag
 "canFluidExtinguish"(arg0: $FluidType$Type): boolean
 "isMultipartEntity"(): boolean
 "getParts"(): ($PartEntity<(any)>)[]
 "getStepHeight"(): float
 "onRemovedFromWorld"(): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getClassification"(arg0: boolean): $MobCategory
 "canUpdate"(arg0: boolean): void
 "canUpdate"(): boolean
 "canRiderInteract"(): boolean
 "revive"(): void
 "shouldRiderSit"(): boolean
 "canTrample"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: float): boolean
 "isAddedToWorld"(): boolean
 "onAddedToWorld"(): void
 "canStartSwimming"(): boolean
 "getEyeInFluidType"(): $FluidType
 "isPushedByFluid"(arg0: $FluidType$Type): boolean
/**
 * 
 * @deprecated
 */
 "getEyeHeightForge"(arg0: $Pose$Type, arg1: $EntityDimensions$Type): float
 "isEyeInFluidType"(arg0: $FluidType$Type): boolean
 "getMaxHeightFluidType"(): $FluidType
 "getFluidMotionScale"(arg0: $FluidType$Type): double
 "getFluidFallDistanceModifier"(arg0: $FluidType$Type): float
 "canBeRiddenUnderFluidType"(arg0: $FluidType$Type, arg1: $Entity$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$Type): boolean
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getSoundFromFluidType"(arg0: $FluidType$Type, arg1: $SoundAction$Type): $SoundEvent
 "shouldUpdateFluidWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "getPickedResult"(arg0: $HitResult$Type): $ItemStack
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $FluidState$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>, arg1: boolean): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>): boolean
 "isInFluidType"(arg0: $FluidType$Type): boolean
 "captureDrops"(arg0: $Collection$Type<($ItemEntity$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "getFluidTypeHeight"(arg0: $FluidType$Type): double
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeLivingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeLivingEntity$Type = ($IForgeLivingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeLivingEntity_ = $IForgeLivingEntity$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ModelBuilder$ElementBuilder$FaceBuilder, $ModelBuilder$ElementBuilder$FaceBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$FaceBuilder"
import {$ModelBuilder$ElementBuilder$RotationBuilder, $ModelBuilder$ElementBuilder$RotationBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$ElementBuilder$RotationBuilder"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$ElementBuilder {

constructor(arg0: $ModelBuilder$Type<(any)>)

public "end"(): T
public "to"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder<>
public "from"(arg0: float, arg1: float, arg2: float): $ModelBuilder$ElementBuilder<>
public "ao"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "color"(arg0: integer): $ModelBuilder$ElementBuilder<>
public "texture"(arg0: string): $ModelBuilder$ElementBuilder<>
public "emissivity"(arg0: integer, arg1: integer): $ModelBuilder$ElementBuilder<>
public "face"(arg0: $Direction$Type): $ModelBuilder$ElementBuilder$FaceBuilder<>
public "cube"(arg0: string): $ModelBuilder$ElementBuilder<>
public "shade"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "rotation"(): $ModelBuilder$ElementBuilder$RotationBuilder<>
public "calculateNormals"(arg0: boolean): $ModelBuilder$ElementBuilder<>
public "textureAll"(arg0: string): $ModelBuilder$ElementBuilder<>
public "faces"(arg0: $BiConsumer$Type<($Direction$Type), ($ModelBuilder$ElementBuilder$FaceBuilder$Type<>)>): $ModelBuilder$ElementBuilder<>
public "allFaces"(arg0: $BiConsumer$Type<($Direction$Type), ($ModelBuilder$ElementBuilder$FaceBuilder$Type<>)>): $ModelBuilder$ElementBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$ElementBuilder$Type = ($ModelBuilder$ElementBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$ElementBuilder_ = $ModelBuilder$ElementBuilder$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingChangeTargetEvent$ILivingTargetType, $LivingChangeTargetEvent$ILivingTargetType$Type} from "packages/net/minecraftforge/event/entity/living/$LivingChangeTargetEvent$ILivingTargetType"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingChangeTargetEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $LivingEntity$Type, arg2: $LivingChangeTargetEvent$ILivingTargetType$Type)

public "getTargetType"(): $LivingChangeTargetEvent$ILivingTargetType
public "setNewTarget"(arg0: $LivingEntity$Type): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "getOriginalTarget"(): $LivingEntity
public "getNewTarget"(): $LivingEntity
get "targetType"(): $LivingChangeTargetEvent$ILivingTargetType
set "newTarget"(value: $LivingEntity$Type)
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "originalTarget"(): $LivingEntity
get "newTarget"(): $LivingEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingChangeTargetEvent$Type = ($LivingChangeTargetEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingChangeTargetEvent_ = $LivingChangeTargetEvent$Type;
}}
declare module "packages/net/minecraftforge/registries/$RegistryBuilder" {
import {$IForgeRegistry$MissingFactory, $IForgeRegistry$MissingFactory$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$MissingFactory"
import {$IForgeRegistry$BakeCallback, $IForgeRegistry$BakeCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$BakeCallback"
import {$IForgeRegistry$AddCallback, $IForgeRegistry$AddCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$AddCallback"
import {$IForgeRegistry$CreateCallback, $IForgeRegistry$CreateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$CreateCallback"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IForgeRegistry$ClearCallback, $IForgeRegistry$ClearCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ClearCallback"
import {$IForgeRegistry$ValidateCallback, $IForgeRegistry$ValidateCallback$Type} from "packages/net/minecraftforge/registries/$IForgeRegistry$ValidateCallback"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RegistryBuilder<T> {

constructor()

public "add"(arg0: $IForgeRegistry$ClearCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$AddCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$BakeCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$CreateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "add"(arg0: $IForgeRegistry$ValidateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "getDefault"(): $ResourceLocation
public static "of"<T>(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public static "of"<T>(arg0: string): $RegistryBuilder<(T)>
public static "of"<T>(): $RegistryBuilder<(T)>
public "set"(arg0: $IForgeRegistry$MissingFactory$Type<(T)>): $RegistryBuilder<(T)>
public "setName"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "missing"(arg0: $IForgeRegistry$MissingFactory$Type<(T)>): $RegistryBuilder<(T)>
public "getAllowModifications"(): boolean
public "legacyName"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "legacyName"(arg0: string): $RegistryBuilder<(T)>
public "addCallback"(arg0: any): $RegistryBuilder<(T)>
public "disableOverrides"(): $RegistryBuilder<(T)>
public "disableSync"(): $RegistryBuilder<(T)>
public "disableSaving"(): $RegistryBuilder<(T)>
public "onValidate"(arg0: $IForgeRegistry$ValidateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "setMaxID"(arg0: integer): $RegistryBuilder<(T)>
public "onAdd"(arg0: $IForgeRegistry$AddCallback$Type<(T)>): $RegistryBuilder<(T)>
public "setDefaultKey"(arg0: $ResourceLocation$Type): $RegistryBuilder<(T)>
public "setIDRange"(arg0: integer, arg1: integer): $RegistryBuilder<(T)>
public "getValidate"(): $IForgeRegistry$ValidateCallback<(T)>
public "getBake"(): $IForgeRegistry$BakeCallback<(T)>
public "getMissingFactory"(): $IForgeRegistry$MissingFactory<(T)>
public "getMinId"(): integer
public "getMaxId"(): integer
public "getCreate"(): $IForgeRegistry$CreateCallback<(T)>
public "getAdd"(): $IForgeRegistry$AddCallback<(T)>
public "getClear"(): $IForgeRegistry$ClearCallback<(T)>
public "onCreate"(arg0: $IForgeRegistry$CreateCallback$Type<(T)>): $RegistryBuilder<(T)>
public "getAllowOverrides"(): boolean
public "onBake"(arg0: $IForgeRegistry$BakeCallback$Type<(T)>): $RegistryBuilder<(T)>
public "onClear"(arg0: $IForgeRegistry$ClearCallback$Type<(T)>): $RegistryBuilder<(T)>
public "allowModification"(): $RegistryBuilder<(T)>
public "hasTags"(): $RegistryBuilder<(T)>
public "getSaveToDisc"(): boolean
public "getLegacyNames"(): $Set<($ResourceLocation)>
public "getSync"(): boolean
get "default"(): $ResourceLocation
set "name"(value: $ResourceLocation$Type)
get "allowModifications"(): boolean
set "maxID"(value: integer)
set "defaultKey"(value: $ResourceLocation$Type)
get "validate"(): $IForgeRegistry$ValidateCallback<(T)>
get "bake"(): $IForgeRegistry$BakeCallback<(T)>
get "missingFactory"(): $IForgeRegistry$MissingFactory<(T)>
get "minId"(): integer
get "maxId"(): integer
get "create"(): $IForgeRegistry$CreateCallback<(T)>
get "clear"(): $IForgeRegistry$ClearCallback<(T)>
get "allowOverrides"(): boolean
get "saveToDisc"(): boolean
get "legacyNames"(): $Set<($ResourceLocation)>
get "sync"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryBuilder$Type<T> = ($RegistryBuilder<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryBuilder_<T> = $RegistryBuilder$Type<(T)>;
}}
declare module "packages/net/minecraftforge/common/capabilities/$CapabilityDispatcher" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CapabilityDispatcher implements $INBTSerializable<($CompoundTag)>, $ICapabilityProvider {

constructor(arg0: $Map$Type<($ResourceLocation$Type), ($ICapabilityProvider$Type)>, arg1: $List$Type<($Runnable$Type)>)
constructor(arg0: $Map$Type<($ResourceLocation$Type), ($ICapabilityProvider$Type)>, arg1: $List$Type<($Runnable$Type)>, arg2: $ICapabilityProvider$Type)

public "invalidate"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "areCompatible"(arg0: $CapabilityDispatcher$Type): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapabilityDispatcher$Type = ($CapabilityDispatcher);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CapabilityDispatcher_ = $CapabilityDispatcher$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$Phase" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TickEvent$Phase extends $Enum<($TickEvent$Phase)> {
static readonly "START": $TickEvent$Phase
static readonly "END": $TickEvent$Phase


public static "values"(): ($TickEvent$Phase)[]
public static "valueOf"(arg0: string): $TickEvent$Phase
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$Phase$Type = (("start") | ("end")) | ($TickEvent$Phase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$Phase_ = $TickEvent$Phase$Type;
}}
declare module "packages/net/minecraftforge/common/util/$BrainBuilder" {
import {$Schedule, $Schedule$Type} from "packages/net/minecraft/world/entity/schedule/$Schedule"
import {$SensorType, $SensorType$Type} from "packages/net/minecraft/world/entity/ai/sensing/$SensorType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Brain, $Brain$Type} from "packages/net/minecraft/world/entity/ai/$Brain"
import {$Dynamic, $Dynamic$Type} from "packages/com/mojang/serialization/$Dynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Activity, $Activity$Type} from "packages/net/minecraft/world/entity/schedule/$Activity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BehaviorControl, $BehaviorControl$Type} from "packages/net/minecraft/world/entity/ai/behavior/$BehaviorControl"
import {$Brain$Provider, $Brain$Provider$Type} from "packages/net/minecraft/world/entity/ai/$Brain$Provider"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$MemoryModuleType, $MemoryModuleType$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryModuleType"
import {$MemoryStatus, $MemoryStatus$Type} from "packages/net/minecraft/world/entity/ai/memory/$MemoryStatus"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BrainBuilder<E extends $LivingEntity> {

constructor(arg0: $Brain$Type<(E)>)

public "provider"(): $Brain$Provider<(E)>
public "getSchedule"(): $Schedule
public "getActivityRequirements"(): $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
public "addBehaviorToActivityByPriority"(arg0: integer, arg1: $Activity$Type, arg2: $BehaviorControl$Type<(any)>): void
public "addRequirementsToActivity"(arg0: $Activity$Type, arg1: $Collection$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>): void
public "makeBrain"(arg0: $Dynamic$Type<(any)>): $Brain<(E)>
public "addActivityRequirementsFrom"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>)>): void
public "addAvailableBehaviorsByPriorityTo"(arg0: $Map$Type<(integer), ($Map$Type<($Activity$Type), ($Set$Type<($BehaviorControl$Type<(any)>)>)>)>): void
public "addActivityRequirementsTo"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($Pair$Type<($MemoryModuleType$Type<(any)>), ($MemoryStatus$Type)>)>)>): void
public "getAvailableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(any)>)>)>)>
public "getMemoryTypes"(): $Collection<($MemoryModuleType<(any)>)>
public "getSensorTypes"(): $Collection<($SensorType<(any)>)>
public "getCoreActivities"(): $Set<($Activity)>
public "setActiveActivites"(arg0: $Set$Type<($Activity$Type)>): void
public "setDefaultActivity"(arg0: $Activity$Type): void
public "getActiveActivites"(): $Set<($Activity)>
public "getDefaultActivity"(): $Activity
public "setSchedule"(arg0: $Schedule$Type): void
public "addActivityMemoriesToEraseWhenStoppedFrom"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($MemoryModuleType$Type<(any)>)>)>): void
public "addActivityMemoriesToEraseWhenStoppedTo"(arg0: $Map$Type<($Activity$Type), ($Set$Type<($MemoryModuleType$Type<(any)>)>)>): void
public "addAvailableBehaviorsByPriorityFrom"(arg0: $Map$Type<(integer), ($Map$Type<($Activity$Type), ($Set$Type<($BehaviorControl$Type<(any)>)>)>)>): void
public "addMemoriesToEraseWhenActivityStopped"(arg0: $Activity$Type, arg1: $Collection$Type<($MemoryModuleType$Type<(any)>)>): void
public "getActivityMemoriesToEraseWhenStopped"(): $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
get "schedule"(): $Schedule
get "activityRequirements"(): $Map<($Activity), ($Set<($Pair<($MemoryModuleType<(any)>), ($MemoryStatus)>)>)>
get "availableBehaviorsByPriority"(): $Map<(integer), ($Map<($Activity), ($Set<($BehaviorControl<(any)>)>)>)>
get "memoryTypes"(): $Collection<($MemoryModuleType<(any)>)>
get "sensorTypes"(): $Collection<($SensorType<(any)>)>
get "coreActivities"(): $Set<($Activity)>
set "activeActivites"(value: $Set$Type<($Activity$Type)>)
set "defaultActivity"(value: $Activity$Type)
get "activeActivites"(): $Set<($Activity)>
get "defaultActivity"(): $Activity
set "schedule"(value: $Schedule$Type)
get "activityMemoriesToEraseWhenStopped"(): $Map<($Activity), ($Set<($MemoryModuleType<(any)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainBuilder$Type<E> = ($BrainBuilder<(E)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BrainBuilder_<E> = $BrainBuilder$Type<(E)>;
}}
declare module "packages/net/minecraftforge/client/$ExtendedServerListData" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"

export class $ExtendedServerListData extends $Record {

constructor(arg0: string, arg1: boolean, arg2: integer, arg3: string)
constructor(type: string, isCompatible: boolean, numberOfMods: integer, extraReason: string, truncated: boolean)

public "type"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "truncated"(): boolean
public "isCompatible"(): boolean
public "extraReason"(): string
public "numberOfMods"(): integer
get "compatible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedServerListData$Type = ($ExtendedServerListData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedServerListData_ = $ExtendedServerListData$Type;
}}
declare module "packages/net/minecraftforge/items/$ItemStackHandler" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$IItemHandlerModifiable, $IItemHandlerModifiable$Type} from "packages/net/minecraftforge/items/$IItemHandlerModifiable"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"

export class $ItemStackHandler implements $IItemHandler, $IItemHandlerModifiable, $INBTSerializable<($CompoundTag)> {

constructor(arg0: $NonNullList$Type<($ItemStack$Type)>)
constructor(arg0: integer)
constructor()

public "setSize"(arg0: integer): void
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$Type): void
public "getSlots"(): integer
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$Type, arg2: boolean): $ItemStack
public "isItemValid"(arg0: integer, arg1: $ItemStack$Type): boolean
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "serializeNBT"(): $CompoundTag
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $IItemHandler
public "isMutable"(): boolean
public "getStackInSlot"(i: integer): $ItemStack
public "insertItem"(i: integer, itemStack: $ItemStack$Type, b: boolean): $ItemStack
public "getSlots"(): integer
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "extractItem"(i: integer, i1: integer, b: boolean): $ItemStack
public "getSlotLimit"(i: integer): integer
public "isItemValid"(i: integer, itemStack: $ItemStack$Type): boolean
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getHeight"(): integer
public "clear"(): void
public "clear"(ingredient: $Ingredient$Type): void
public "asContainer"(): $Container
public "getWidth"(): integer
public "setChanged"(): void
public "find"(): integer
public "find"(ingredient: $Ingredient$Type): integer
public "count"(ingredient: $Ingredient$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "getAllItems"(): $List<($ItemStack)>
public "isEmpty"(): boolean
set "size"(value: integer)
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandler$Type = ($ItemStackHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackHandler_ = $ItemStackHandler$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockStateProvider" {
import {$CachedOutput, $CachedOutput$Type} from "packages/net/minecraft/data/$CachedOutput"
import {$DataProvider, $DataProvider$Type} from "packages/net/minecraft/data/$DataProvider"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TrapDoorBlock, $TrapDoorBlock$Type} from "packages/net/minecraft/world/level/block/$TrapDoorBlock"
import {$PressurePlateBlock, $PressurePlateBlock$Type} from "packages/net/minecraft/world/level/block/$PressurePlateBlock"
import {$ItemModelProvider, $ItemModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelProvider"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$WallSide, $WallSide$Type} from "packages/net/minecraft/world/level/block/state/properties/$WallSide"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$WallBlock, $WallBlock$Type} from "packages/net/minecraft/world/level/block/$WallBlock"
import {$CrossCollisionBlock, $CrossCollisionBlock$Type} from "packages/net/minecraft/world/level/block/$CrossCollisionBlock"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$PackOutput, $PackOutput$Type} from "packages/net/minecraft/data/$PackOutput"
import {$ImmutableMap, $ImmutableMap$Type} from "packages/com/google/common/collect/$ImmutableMap"
import {$SlabBlock, $SlabBlock$Type} from "packages/net/minecraft/world/level/block/$SlabBlock"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$VariantBlockStateBuilder, $VariantBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$VariantBlockStateBuilder"
import {$FenceGateBlock, $FenceGateBlock$Type} from "packages/net/minecraft/world/level/block/$FenceGateBlock"
import {$IronBarsBlock, $IronBarsBlock$Type} from "packages/net/minecraft/world/level/block/$IronBarsBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ModelFile, $ModelFile$Type} from "packages/net/minecraftforge/client/model/generators/$ModelFile"
import {$ConfiguredModel, $ConfiguredModel$Type} from "packages/net/minecraftforge/client/model/generators/$ConfiguredModel"
import {$MultiPartBlockStateBuilder, $MultiPartBlockStateBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$MultiPartBlockStateBuilder"
import {$RotatedPillarBlock, $RotatedPillarBlock$Type} from "packages/net/minecraft/world/level/block/$RotatedPillarBlock"
import {$FenceBlock, $FenceBlock$Type} from "packages/net/minecraft/world/level/block/$FenceBlock"
import {$ButtonBlock, $ButtonBlock$Type} from "packages/net/minecraft/world/level/block/$ButtonBlock"
import {$StandingSignBlock, $StandingSignBlock$Type} from "packages/net/minecraft/world/level/block/$StandingSignBlock"
import {$DoorBlock, $DoorBlock$Type} from "packages/net/minecraft/world/level/block/$DoorBlock"
import {$StairBlock, $StairBlock$Type} from "packages/net/minecraft/world/level/block/$StairBlock"
import {$Property, $Property$Type} from "packages/net/minecraft/world/level/block/state/properties/$Property"
import {$WallSignBlock, $WallSignBlock$Type} from "packages/net/minecraft/world/level/block/$WallSignBlock"
import {$BlockModelProvider, $BlockModelProvider$Type} from "packages/net/minecraftforge/client/model/generators/$BlockModelProvider"

export class $BlockStateProvider implements $DataProvider {
static readonly "WALL_PROPS": $ImmutableMap<($Direction), ($Property<($WallSide)>)>

constructor(arg0: $PackOutput$Type, arg1: string, arg2: $ExistingFileHelper$Type)

public "simpleBlockItem"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "blockTexture"(arg0: $Block$Type): $ResourceLocation
public "getVariantBuilder"(arg0: $Block$Type): $VariantBlockStateBuilder
public "itemModels"(): $ItemModelProvider
public "directionalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "directionalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "directionalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "directionalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type): void
public "axisBlock"(arg0: $RotatedPillarBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "stairsBlock"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "horizontalBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "fenceBlock"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "fenceBlock"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type): void
public "pressurePlateBlock"(arg0: $PressurePlateBlock$Type, arg1: $ResourceLocation$Type): void
public "pressurePlateBlock"(arg0: $PressurePlateBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "slabBlock"(arg0: $SlabBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "buttonBlock"(arg0: $ButtonBlock$Type, arg1: $ResourceLocation$Type): void
public "buttonBlock"(arg0: $ButtonBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "fourWayBlock"(arg0: $CrossCollisionBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type): void
public "fourWayMultipart"(arg0: $MultiPartBlockStateBuilder$Type, arg1: $ModelFile$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "fenceGateBlock"(arg0: $FenceGateBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "paneBlock"(arg0: $IronBarsBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type, arg5: $ModelFile$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "doorBlock"(arg0: $DoorBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: $ModelFile$Type, arg5: $ModelFile$Type, arg6: $ModelFile$Type, arg7: $ModelFile$Type, arg8: $ModelFile$Type): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type, arg4: boolean): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean): void
public "trapdoorBlock"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean): void
public "logBlock"(arg0: $RotatedPillarBlock$Type): void
public "models"(): $BlockModelProvider
public "getName"(): string
public "run"(arg0: $CachedOutput$Type): $CompletableFuture<(any)>
public "modLoc"(arg0: string): $ResourceLocation
public "cubeAll"(arg0: $Block$Type): $ModelFile
public "simpleBlock"(arg0: $Block$Type): void
public "simpleBlock"(arg0: $Block$Type, arg1: $Function$Type<($ModelFile$Type), (($ConfiguredModel$Type)[])>): void
public "simpleBlock"(arg0: $Block$Type, ...arg1: ($ConfiguredModel$Type)[]): void
public "simpleBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "fenceBlockWithRenderType"(arg0: $FenceBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "simpleBlockWithItem"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "getMultipartBuilder"(arg0: $Block$Type): $MultiPartBlockStateBuilder
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: string): void
public "axisBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "logBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: string): void
public "logBlockWithRenderType"(arg0: $RotatedPillarBlock$Type, arg1: $ResourceLocation$Type): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $ModelFile$Type): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $ModelFile$Type, arg2: integer): void
public "horizontalFaceBlock"(arg0: $Block$Type, arg1: $Function$Type<($BlockState$Type), ($ModelFile$Type)>, arg2: integer): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: $ResourceLocation$Type): void
public "stairsBlockWithRenderType"(arg0: $StairBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type, arg5: string): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "fenceGateBlockWithRenderType"(arg0: $FenceGateBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "doorBlockWithRenderType"(arg0: $DoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: string): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type, arg3: string): void
public "paneBlockWithRenderType"(arg0: $IronBarsBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type, arg4: $ResourceLocation$Type): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: $ResourceLocation$Type): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: boolean, arg4: string): void
public "trapdoorBlockWithRenderType"(arg0: $TrapDoorBlock$Type, arg1: $ResourceLocation$Type, arg2: boolean, arg3: $ResourceLocation$Type): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: $ResourceLocation$Type): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: string): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type, arg3: string): void
public "wallBlockWithRenderType"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type, arg2: $ResourceLocation$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: string, arg2: $ResourceLocation$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: $ResourceLocation$Type): void
public "wallBlock"(arg0: $WallBlock$Type, arg1: $ModelFile$Type, arg2: $ModelFile$Type, arg3: $ModelFile$Type): void
public "signBlock"(arg0: $StandingSignBlock$Type, arg1: $WallSignBlock$Type, arg2: $ModelFile$Type): void
public "signBlock"(arg0: $StandingSignBlock$Type, arg1: $WallSignBlock$Type, arg2: $ResourceLocation$Type): void
public "mcLoc"(arg0: string): $ResourceLocation
public static "saveStable"(arg0: $CachedOutput$Type, arg1: $JsonElement$Type, arg2: $Path$Type): $CompletableFuture<(any)>
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateProvider$Type = ($BlockStateProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStateProvider_ = $BlockStateProvider$Type;
}}
declare module "packages/net/minecraftforge/fml/loading/progress/$Message" {
import {$Message$MessageType, $Message$MessageType$Type} from "packages/net/minecraftforge/fml/loading/progress/$Message$MessageType"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $Message {

constructor(arg0: string, arg1: $Message$MessageType$Type)

public "getText"(): string
public "getTypeColour"(): (float)[]
get "text"(): string
get "typeColour"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Type = ($Message);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Message_ = $Message$Type;
}}
declare module "packages/net/minecraftforge/server/command/$EnumArgument$Info$Template" {
import {$EnumArgument, $EnumArgument$Type} from "packages/net/minecraftforge/server/command/$EnumArgument"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"

export class $EnumArgument$Info$Template implements $ArgumentTypeInfo$Template<($EnumArgument<(T)>)> {


public "instantiate"(arg0: $CommandBuildContext$Type): $EnumArgument<(T)>
public "type"(): $ArgumentTypeInfo<($EnumArgument<(T)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumArgument$Info$Template$Type = ($EnumArgument$Info$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumArgument$Info$Template_ = $EnumArgument$Info$Template$Type;
}}
declare module "packages/net/minecraftforge/client/event/$ModelEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"

export class $ModelEvent extends $Event {


public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelEvent$Type = ($ModelEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelEvent_ = $ModelEvent$Type;
}}
declare module "packages/net/minecraftforge/common/util/$ITeleporter" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$PortalInfo, $PortalInfo$Type} from "packages/net/minecraft/world/level/portal/$PortalInfo"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ITeleporter {

 "getPortalInfo"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $Function$Type<($ServerLevel$Type), ($PortalInfo$Type)>): $PortalInfo
 "placeEntity"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type, arg3: float, arg4: $Function$Type<(boolean), ($Entity$Type)>): $Entity
 "isVanilla"(): boolean
 "playTeleportSound"(arg0: $ServerPlayer$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type): boolean
}

export namespace $ITeleporter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITeleporter$Type = ($ITeleporter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITeleporter_ = $ITeleporter$Type;
}}
declare module "packages/net/minecraftforge/client/model/$ForgeFaceData" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $ForgeFaceData extends $Record {
static readonly "DEFAULT": $ForgeFaceData
static readonly "COLOR": $Codec<(integer)>
static readonly "CODEC": $Codec<($ForgeFaceData)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: boolean)
constructor(color: integer, blockLight: integer, skyLight: integer, ambientOcclusion: boolean, calculateNormals: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "read"(arg0: $JsonElement$Type, arg1: $ForgeFaceData$Type): $ForgeFaceData
public "color"(): integer
public "skyLight"(): integer
public "blockLight"(): integer
public "calculateNormals"(): boolean
public "ambientOcclusion"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeFaceData$Type = ($ForgeFaceData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeFaceData_ = $ForgeFaceData$Type;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeGenerationSettingsBuilder" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PlacedFeature, $PlacedFeature$Type} from "packages/net/minecraft/world/level/levelgen/placement/$PlacedFeature"
import {$BiomeGenerationSettings, $BiomeGenerationSettings$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings"
import {$GenerationStep$Decoration, $GenerationStep$Decoration$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Decoration"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BiomeGenerationSettings$PlainBuilder, $BiomeGenerationSettings$PlainBuilder$Type} from "packages/net/minecraft/world/level/biome/$BiomeGenerationSettings$PlainBuilder"
import {$GenerationStep$Carving, $GenerationStep$Carving$Type} from "packages/net/minecraft/world/level/levelgen/$GenerationStep$Carving"
import {$ConfiguredWorldCarver, $ConfiguredWorldCarver$Type} from "packages/net/minecraft/world/level/levelgen/carver/$ConfiguredWorldCarver"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BiomeGenerationSettingsBuilder extends $BiomeGenerationSettings$PlainBuilder {
readonly "carvers": $Map<($GenerationStep$Carving), ($List<($Holder<($ConfiguredWorldCarver<(any)>)>)>)>
readonly "features": $List<($List<($Holder<($PlacedFeature)>)>)>

constructor(arg0: $BiomeGenerationSettings$Type)

public "getFeatures"(arg0: $GenerationStep$Decoration$Type): $List<($Holder<($PlacedFeature)>)>
public "getCarvers"(arg0: $GenerationStep$Carving$Type): $List<($Holder<($ConfiguredWorldCarver<(any)>)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeGenerationSettingsBuilder$Type = ($BiomeGenerationSettingsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeGenerationSettingsBuilder_ = $BiomeGenerationSettingsBuilder$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$IEventBus" {
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GenericEvent, $GenericEvent$Type} from "packages/net/minecraftforge/eventbus/api/$GenericEvent"
import {$IEventBusInvokeDispatcher, $IEventBusInvokeDispatcher$Type} from "packages/net/minecraftforge/eventbus/api/$IEventBusInvokeDispatcher"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$EventPriority, $EventPriority$Type} from "packages/net/minecraftforge/eventbus/api/$EventPriority"

export interface $IEventBus {

 "shutdown"(): void
 "start"(): void
 "register"(arg0: any): void
 "unregister"(arg0: any): void
 "post"(arg0: $Event$Type, arg1: $IEventBusInvokeDispatcher$Type): boolean
 "post"(arg0: $Event$Type): boolean
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: boolean, arg2: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $Consumer$Type<(T)>): void
 "addListener"<T extends $Event>(arg0: $EventPriority$Type, arg1: boolean, arg2: $Class$Type<(T)>, arg3: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: boolean, arg3: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: boolean, arg3: $Class$Type<(T)>, arg4: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $EventPriority$Type, arg2: $Consumer$Type<(T)>): void
 "addGenericListener"<T extends $GenericEvent<(any)>, F>(arg0: $Class$Type<(F)>, arg1: $Consumer$Type<(T)>): void
}

export namespace $IEventBus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEventBus$Type = ($IEventBus);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEventBus_ = $IEventBus$Type;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingEvent$LivingTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEvent, $LivingEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEvent"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEvent$LivingTickEvent extends $LivingEvent {

constructor()
constructor(arg0: $LivingEntity$Type)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEvent$LivingTickEvent$Type = ($LivingEvent$LivingTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEvent$LivingTickEvent_ = $LivingEvent$LivingTickEvent$Type;
}}
declare module "packages/net/minecraftforge/fluids/$IFluidTank" {
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IFluidHandler$FluidAction, $IFluidHandler$FluidAction$Type} from "packages/net/minecraftforge/fluids/capability/$IFluidHandler$FluidAction"

export interface $IFluidTank {

 "fill"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): integer
 "drain"(arg0: $FluidStack$Type, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$Type): $FluidStack
 "getCapacity"(): integer
 "getFluid"(): $FluidStack
 "isFluidValid"(arg0: $FluidStack$Type): boolean
 "getFluidAmount"(): integer
}

export namespace $IFluidTank {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFluidTank$Type = ($IFluidTank);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFluidTank_ = $IFluidTank$Type;
}}
declare module "packages/net/minecraftforge/eventbus/api/$Event$Result" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Event$Result extends $Enum<($Event$Result)> {
static readonly "DENY": $Event$Result
static readonly "DEFAULT": $Event$Result
static readonly "ALLOW": $Event$Result


public static "values"(): ($Event$Result)[]
public static "valueOf"(arg0: string): $Event$Result
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Event$Result$Type = (("allow") | ("deny") | ("default")) | ($Event$Result);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Event$Result_ = $Event$Result$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$AttackEntityEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PlayerEvent, $PlayerEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerEvent"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $AttackEntityEvent extends $PlayerEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $Entity$Type)

public "getTarget"(): $Entity
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "target"(): $Entity
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttackEntityEvent$Type = ($AttackEntityEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AttackEntityEvent_ = $AttackEntityEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$RootTransformsBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$TransformationHelper$TransformOrigin, $TransformationHelper$TransformOrigin$Type} from "packages/net/minecraftforge/common/util/$TransformationHelper$TransformOrigin"
import {$Transformation, $Transformation$Type} from "packages/com/mojang/math/$Transformation"
import {$Quaternionf, $Quaternionf$Type} from "packages/org/joml/$Quaternionf"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ModelBuilder$RootTransformsBuilder {


public "scale"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "scale"(arg0: float): $ModelBuilder$RootTransformsBuilder<>
public "scale"(arg0: float, arg1: float, arg2: float): $ModelBuilder$RootTransformsBuilder<>
public "end"(): $ModelBuilder<(T)>
public "transform"(arg0: $Transformation$Type): $ModelBuilder$RootTransformsBuilder<>
public "origin"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "origin"(arg0: $TransformationHelper$TransformOrigin$Type): $ModelBuilder$RootTransformsBuilder<>
public "translation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$RootTransformsBuilder<>
public "translation"(arg0: $Vector3f$Type): $ModelBuilder$RootTransformsBuilder<>
public "toJson"(): $JsonObject
public "rotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "rotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "rightRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "leftRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
public "leftRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(arg0: float, arg1: float, arg2: float, arg3: boolean): $ModelBuilder$RootTransformsBuilder<>
public "postRotation"(arg0: $Quaternionf$Type): $ModelBuilder$RootTransformsBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$RootTransformsBuilder$Type = ($ModelBuilder$RootTransformsBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$RootTransformsBuilder_ = $ModelBuilder$RootTransformsBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgePotion" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IForgePotion {

 "isFoil"(arg0: $ItemStack$Type): boolean
}

export namespace $IForgePotion {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgePotion$Type = ($IForgePotion);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgePotion_ = $IForgePotion$Type;
}}
declare module "packages/net/minecraftforge/common/util/$NonNullFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NonNullFunction<T, R> {

 "apply"(arg0: T): R

(arg0: T): R
}

export namespace $NonNullFunction {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullFunction$Type<T, R> = ($NonNullFunction<(T), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NonNullFunction_<T, R> = $NonNullFunction$Type<(T), (R)>;
}}
declare module "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent$Stop" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$LivingEntityUseItemEvent, $LivingEntityUseItemEvent$Type} from "packages/net/minecraftforge/event/entity/living/$LivingEntityUseItemEvent"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export class $LivingEntityUseItemEvent$Stop extends $LivingEntityUseItemEvent {

constructor()
constructor(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: integer)

public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityUseItemEvent$Stop$Type = ($LivingEntityUseItemEvent$Stop);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityUseItemEvent$Stop_ = $LivingEntityUseItemEvent$Stop$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export interface $IForgeBlockEntity extends $ICapabilitySerializable<($CompoundTag)> {

 "onLoad"(): void
 "getPersistentData"(): $CompoundTag
 "getRenderBoundingBox"(): $AABB
 "requestModelDataUpdate"(): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "onChunkUnloaded"(): void
 "handleUpdateTag"(arg0: $CompoundTag$Type): void
 "getModelData"(): $ModelData
 "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeBlockEntity {
const INFINITE_EXTENT_AABB: $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeBlockEntity$Type = ($IForgeBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeBlockEntity_ = $IForgeBlockEntity$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$Builder" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Pair, $Pair$Type} from "packages/org/apache/commons/lang3/tuple/$Pair"
import {$ForgeConfigSpec$EnumValue, $ForgeConfigSpec$EnumValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$EnumValue"
import {$ForgeConfigSpec$IntValue, $ForgeConfigSpec$IntValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$IntValue"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ForgeConfigSpec$ConfigValue, $ForgeConfigSpec$ConfigValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ConfigValue"
import {$ForgeConfigSpec$ValueSpec, $ForgeConfigSpec$ValueSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$ValueSpec"
import {$ForgeConfigSpec$BooleanValue, $ForgeConfigSpec$BooleanValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$BooleanValue"
import {$ForgeConfigSpec$LongValue, $ForgeConfigSpec$LongValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$LongValue"
import {$ForgeConfigSpec$DoubleValue, $ForgeConfigSpec$DoubleValue$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec$DoubleValue"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ForgeConfigSpec, $ForgeConfigSpec$Type} from "packages/net/minecraftforge/common/$ForgeConfigSpec"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$EnumGetMethod, $EnumGetMethod$Type} from "packages/com/electronwill/nightconfig/core/$EnumGetMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ForgeConfigSpec$Builder {

constructor()

public "comment"(...arg0: (string)[]): $ForgeConfigSpec$Builder
public "comment"(arg0: string): $ForgeConfigSpec$Builder
public "build"(): $ForgeConfigSpec
public "push"(arg0: $List$Type<(string)>): $ForgeConfigSpec$Builder
public "push"(arg0: string): $ForgeConfigSpec$Builder
public "pop"(): $ForgeConfigSpec$Builder
public "pop"(arg0: integer): $ForgeConfigSpec$Builder
public "configure"<T>(arg0: $Function$Type<($ForgeConfigSpec$Builder$Type), (T)>): $Pair<(T), ($ForgeConfigSpec)>
public "translation"(arg0: string): $ForgeConfigSpec$Builder
public "define"(arg0: string, arg1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(arg0: $List$Type<(string)>, arg1: boolean): $ForgeConfigSpec$BooleanValue
public "define"(arg0: string, arg1: $Supplier$Type<(boolean)>): $ForgeConfigSpec$BooleanValue
public "define"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(boolean)>): $ForgeConfigSpec$BooleanValue
public "define"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: T, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: T, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: string, arg1: T): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "define"<T>(arg0: $List$Type<(string)>, arg1: $ForgeConfigSpec$ValueSpec$Type, arg2: $Supplier$Type<(T)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, arg3: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>, arg4: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: $EnumGetMethod$Type, arg3: $Predicate$Type<(any)>, arg4: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: $Predicate$Type<(any)>, arg3: $Class$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, ...arg2: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, arg2: $EnumGetMethod$Type, ...arg3: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: $List$Type<(string)>, arg1: V, ...arg2: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $EnumGetMethod$Type, ...arg3: (V)[]): $ForgeConfigSpec$EnumValue<(V)>
public "defineEnum"<V extends $Enum<(V)>>(arg0: string, arg1: V, arg2: $Collection$Type<(V)>): $ForgeConfigSpec$EnumValue<(V)>
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(integer)>, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: integer, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(integer)>, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"(arg0: string, arg1: integer, arg2: integer, arg3: integer): $ForgeConfigSpec$IntValue
public "defineInRange"<V extends $Comparable<(any)>>(arg0: string, arg1: V, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"(arg0: $List$Type<(string)>, arg1: long, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(long)>, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(long)>, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"<V extends $Comparable<(any)>>(arg0: $List$Type<(string)>, arg1: V, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"(arg0: string, arg1: long, arg2: long, arg3: long): $ForgeConfigSpec$LongValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(double)>, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"<V extends $Comparable<(any)>>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(V)>, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"<V extends $Comparable<(any)>>(arg0: string, arg1: $Supplier$Type<(V)>, arg2: V, arg3: V, arg4: $Class$Type<(V)>): $ForgeConfigSpec$ConfigValue<(V)>
public "defineInRange"(arg0: string, arg1: $Supplier$Type<(double)>, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: $List$Type<(string)>, arg1: double, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineInRange"(arg0: string, arg1: double, arg2: double, arg3: double): $ForgeConfigSpec$DoubleValue
public "defineList"<T>(arg0: string, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: string, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: $List$Type<(string)>, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineList"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineInList"<T>(arg0: string, arg1: $Supplier$Type<(T)>, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: string, arg1: T, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<(T)>, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "defineInList"<T>(arg0: $List$Type<(string)>, arg1: T, arg2: $Collection$Type<(any)>): $ForgeConfigSpec$ConfigValue<(T)>
public "worldRestart"(): $ForgeConfigSpec$Builder
public "defineListAllowEmpty"<T>(arg0: $List$Type<(string)>, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: $List$Type<(string)>, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: string, arg1: $Supplier$Type<($List$Type<(any)>)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
public "defineListAllowEmpty"<T>(arg0: string, arg1: $List$Type<(any)>, arg2: $Predicate$Type<(any)>): $ForgeConfigSpec$ConfigValue<($List<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Builder$Type = ($ForgeConfigSpec$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$Builder_ = $ForgeConfigSpec$Builder$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$BlockModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $BlockModelBuilder extends $ModelBuilder<($BlockModelBuilder)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelBuilder$Type = ($BlockModelBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockModelBuilder_ = $BlockModelBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder" {
import {$ModifiableBiomeInfo$BiomeInfo, $ModifiableBiomeInfo$BiomeInfo$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo"
import {$ClimateSettingsBuilder, $ClimateSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$ClimateSettingsBuilder"
import {$MobSpawnSettingsBuilder, $MobSpawnSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$MobSpawnSettingsBuilder"
import {$BiomeGenerationSettingsBuilder, $BiomeGenerationSettingsBuilder$Type} from "packages/net/minecraftforge/common/world/$BiomeGenerationSettingsBuilder"
import {$BiomeSpecialEffectsBuilder, $BiomeSpecialEffectsBuilder$Type} from "packages/net/minecraftforge/common/world/$BiomeSpecialEffectsBuilder"

export class $ModifiableBiomeInfo$BiomeInfo$Builder {


public static "copyOf"(arg0: $ModifiableBiomeInfo$BiomeInfo$Type): $ModifiableBiomeInfo$BiomeInfo$Builder
public "build"(): $ModifiableBiomeInfo$BiomeInfo
public "getMobSpawnSettings"(): $MobSpawnSettingsBuilder
public "getGenerationSettings"(): $BiomeGenerationSettingsBuilder
public "getClimateSettings"(): $ClimateSettingsBuilder
public "getSpecialEffects"(): $BiomeSpecialEffectsBuilder
get "mobSpawnSettings"(): $MobSpawnSettingsBuilder
get "generationSettings"(): $BiomeGenerationSettingsBuilder
get "climateSettings"(): $ClimateSettingsBuilder
get "specialEffects"(): $BiomeSpecialEffectsBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableBiomeInfo$BiomeInfo$Builder$Type = ($ModifiableBiomeInfo$BiomeInfo$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableBiomeInfo$BiomeInfo$Builder_ = $ModifiableBiomeInfo$BiomeInfo$Builder$Type;
}}
declare module "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent$EntityInteractSpecific" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$PlayerInteractEvent, $PlayerInteractEvent$Type} from "packages/net/minecraftforge/event/entity/player/$PlayerInteractEvent"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlayerInteractEvent$EntityInteractSpecific extends $PlayerInteractEvent {

constructor()
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type, arg2: $Entity$Type, arg3: $Vec3$Type)

public "getTarget"(): $Entity
public "getLocalPos"(): $Vec3
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
get "target"(): $Entity
get "localPos"(): $Vec3
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerInteractEvent$EntityInteractSpecific$Type = ($PlayerInteractEvent$EntityInteractSpecific);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerInteractEvent$EntityInteractSpecific_ = $PlayerInteractEvent$EntityInteractSpecific$Type;
}}
declare module "packages/net/minecraftforge/common/$ForgeConfigSpec$Range" {
import {$Comparable, $Comparable$Type} from "packages/java/lang/$Comparable"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $ForgeConfigSpec$Range<V extends $Comparable<(any)>> implements $Predicate<(any)> {


public "toString"(): string
public "test"(arg0: any): boolean
public "getMin"(): V
public "getMax"(): V
public "getClazz"(): $Class<(any)>
public "correct"(arg0: any, arg1: any): any
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public "negate"(): $Predicate<(any)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(any)>
public static "isEqual"<T>(arg0: any): $Predicate<(any)>
get "min"(): V
get "max"(): V
get "clazz"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ForgeConfigSpec$Range$Type<V> = ($ForgeConfigSpec$Range<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ForgeConfigSpec$Range_<V> = $ForgeConfigSpec$Range$Type<(V)>;
}}
declare module "packages/net/minecraftforge/common/world/$BiomeModifier" {
import {$HolderSet, $HolderSet$Type} from "packages/net/minecraft/core/$HolderSet"
import {$ModifiableBiomeInfo$BiomeInfo$Builder, $ModifiableBiomeInfo$BiomeInfo$Builder$Type} from "packages/net/minecraftforge/common/world/$ModifiableBiomeInfo$BiomeInfo$Builder"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$BiomeModifier$Phase, $BiomeModifier$Phase$Type} from "packages/net/minecraftforge/common/world/$BiomeModifier$Phase"
import {$Biome, $Biome$Type} from "packages/net/minecraft/world/level/biome/$Biome"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export interface $BiomeModifier {

 "modify"(arg0: $Holder$Type<($Biome$Type)>, arg1: $BiomeModifier$Phase$Type, arg2: $ModifiableBiomeInfo$BiomeInfo$Builder$Type): void
 "codec"(): $Codec<(any)>
}

export namespace $BiomeModifier {
const DIRECT_CODEC: $Codec<($BiomeModifier)>
const REFERENCE_CODEC: $Codec<($Holder<($BiomeModifier)>)>
const LIST_CODEC: $Codec<($HolderSet<($BiomeModifier)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeModifier$Type = ($BiomeModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeModifier_ = $BiomeModifier$Type;
}}
declare module "packages/net/minecraftforge/event/$TickEvent$ServerTickEvent" {
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$BooleanSupplier, $BooleanSupplier$Type} from "packages/java/util/function/$BooleanSupplier"
import {$TickEvent$Phase, $TickEvent$Phase$Type} from "packages/net/minecraftforge/event/$TickEvent$Phase"
import {$TickEvent, $TickEvent$Type} from "packages/net/minecraftforge/event/$TickEvent"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$TickEvent$Type, $TickEvent$Type$Type} from "packages/net/minecraftforge/event/$TickEvent$Type"
import {$LogicalSide, $LogicalSide$Type} from "packages/net/minecraftforge/fml/$LogicalSide"

export class $TickEvent$ServerTickEvent extends $TickEvent {
readonly "type": $TickEvent$Type
readonly "side": $LogicalSide
readonly "phase": $TickEvent$Phase

constructor()
constructor(arg0: $TickEvent$Phase$Type, arg1: $BooleanSupplier$Type, arg2: $MinecraftServer$Type)

public "haveTime"(): boolean
public "getServer"(): $MinecraftServer
public "getListenerList"(): $ListenerList
get "server"(): $MinecraftServer
get "listenerList"(): $ListenerList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickEvent$ServerTickEvent$Type = ($TickEvent$ServerTickEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TickEvent$ServerTickEvent_ = $TickEvent$ServerTickEvent$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder$TransformVecBuilder" {
import {$ModelBuilder$TransformsBuilder, $ModelBuilder$TransformsBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder$TransformsBuilder"

export class $ModelBuilder$TransformsBuilder$TransformVecBuilder {


public "scale"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "scale"(arg0: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "end"(): $ModelBuilder$TransformsBuilder<>
public "translation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "rotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "rightRotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
public "leftRotation"(arg0: float, arg1: float, arg2: float): $ModelBuilder$TransformsBuilder$TransformVecBuilder<>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type = ($ModelBuilder$TransformsBuilder$TransformVecBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelBuilder$TransformsBuilder$TransformVecBuilder_ = $ModelBuilder$TransformsBuilder$TransformVecBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/crafting/$ConditionalRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ConditionalRecipe$Serializer<T extends $Recipe<(any)>> implements $RecipeSerializer<(T)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConditionalRecipe$Serializer$Type<T> = ($ConditionalRecipe$Serializer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConditionalRecipe$Serializer_<T> = $ConditionalRecipe$Serializer$Type<(T)>;
}}
declare module "packages/net/minecraftforge/event/$AddReloadListenerEvent" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$PreparableReloadListener, $PreparableReloadListener$Type} from "packages/net/minecraft/server/packs/resources/$PreparableReloadListener"
import {$ListenerList, $ListenerList$Type} from "packages/net/minecraftforge/eventbus/$ListenerList"
import {$Event, $Event$Type} from "packages/net/minecraftforge/eventbus/api/$Event"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ReloadableServerResources, $ReloadableServerResources$Type} from "packages/net/minecraft/server/$ReloadableServerResources"

export class $AddReloadListenerEvent extends $Event {

constructor(arg0: $ReloadableServerResources$Type, arg1: $RegistryAccess$Type)
constructor()

public "getListeners"(): $List<($PreparableReloadListener)>
public "addListener"(arg0: $PreparableReloadListener$Type): void
public "isCancelable"(): boolean
public "getListenerList"(): $ListenerList
public "hasResult"(): boolean
public "getConditionContext"(): $ICondition$IContext
public "getRegistryAccess"(): $RegistryAccess
public "getServerResources"(): $ReloadableServerResources
get "listeners"(): $List<($PreparableReloadListener)>
get "cancelable"(): boolean
get "listenerList"(): $ListenerList
get "conditionContext"(): $ICondition$IContext
get "registryAccess"(): $RegistryAccess
get "serverResources"(): $ReloadableServerResources
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddReloadListenerEvent$Type = ($AddReloadListenerEvent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AddReloadListenerEvent_ = $AddReloadListenerEvent$Type;
}}
declare module "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions$FontContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IClientItemExtensions$FontContext extends $Enum<($IClientItemExtensions$FontContext)> {
static readonly "ITEM_COUNT": $IClientItemExtensions$FontContext
static readonly "TOOLTIP": $IClientItemExtensions$FontContext
static readonly "SELECTED_ITEM_NAME": $IClientItemExtensions$FontContext


public static "values"(): ($IClientItemExtensions$FontContext)[]
public static "valueOf"(arg0: string): $IClientItemExtensions$FontContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClientItemExtensions$FontContext$Type = (("item_count") | ("selected_item_name") | ("tooltip")) | ($IClientItemExtensions$FontContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClientItemExtensions$FontContext_ = $IClientItemExtensions$FontContext$Type;
}}
declare module "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$ItemModelBuilder$OverrideBuilder, $ItemModelBuilder$OverrideBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ItemModelBuilder$OverrideBuilder"
import {$ExistingFileHelper, $ExistingFileHelper$Type} from "packages/net/minecraftforge/common/data/$ExistingFileHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ModelBuilder, $ModelBuilder$Type} from "packages/net/minecraftforge/client/model/generators/$ModelBuilder"

export class $ItemModelBuilder extends $ModelBuilder<($ItemModelBuilder)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ExistingFileHelper$Type)

public "override"(arg0: integer): $ItemModelBuilder$OverrideBuilder
public "override"(): $ItemModelBuilder$OverrideBuilder
public "toJson"(): $JsonObject
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelBuilder$Type = ($ItemModelBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemModelBuilder_ = $ItemModelBuilder$Type;
}}
declare module "packages/net/minecraftforge/common/world/$ModifiableStructureInfo$StructureInfo" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Structure$StructureSettings, $Structure$StructureSettings$Type} from "packages/net/minecraft/world/level/levelgen/structure/$Structure$StructureSettings"

export class $ModifiableStructureInfo$StructureInfo extends $Record {

constructor(structureSettings: $Structure$StructureSettings$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "structureSettings"(): $Structure$StructureSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModifiableStructureInfo$StructureInfo$Type = ($ModifiableStructureInfo$StructureInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModifiableStructureInfo$StructureInfo_ = $ModifiableStructureInfo$StructureInfo$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$BiPredicate, $BiPredicate$Type} from "packages/java/util/function/$BiPredicate"
import {$SoundAction, $SoundAction$Type} from "packages/net/minecraftforge/common/$SoundAction"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Pose, $Pose$Type} from "packages/net/minecraft/world/entity/$Pose"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EntityDimensions, $EntityDimensions$Type} from "packages/net/minecraft/world/entity/$EntityDimensions"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$MobCategory, $MobCategory$Type} from "packages/net/minecraft/world/entity/$MobCategory"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$PartEntity, $PartEntity$Type} from "packages/net/minecraftforge/entity/$PartEntity"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeEntity extends $ICapabilitySerializable<($CompoundTag)> {

 "getPersistentData"(): $CompoundTag
 "canFluidExtinguish"(arg0: $FluidType$Type): boolean
 "canSwimInFluidType"(arg0: $FluidType$Type): boolean
 "isMultipartEntity"(): boolean
 "getParts"(): ($PartEntity<(any)>)[]
 "getStepHeight"(): float
 "onRemovedFromWorld"(): void
 "deserializeNBT"(arg0: $CompoundTag$Type): void
 "getClassification"(arg0: boolean): $MobCategory
 "canUpdate"(arg0: boolean): void
 "canUpdate"(): boolean
 "canRiderInteract"(): boolean
 "revive"(): void
 "shouldRiderSit"(): boolean
 "canTrample"(arg0: $BlockState$Type, arg1: $BlockPos$Type, arg2: float): boolean
 "isAddedToWorld"(): boolean
 "onAddedToWorld"(): void
 "canStartSwimming"(): boolean
 "getEyeInFluidType"(): $FluidType
 "isPushedByFluid"(arg0: $FluidType$Type): boolean
/**
 * 
 * @deprecated
 */
 "getEyeHeightForge"(arg0: $Pose$Type, arg1: $EntityDimensions$Type): float
 "isEyeInFluidType"(arg0: $FluidType$Type): boolean
 "getMaxHeightFluidType"(): $FluidType
 "getFluidMotionScale"(arg0: $FluidType$Type): double
 "getFluidFallDistanceModifier"(arg0: $FluidType$Type): float
 "canBeRiddenUnderFluidType"(arg0: $FluidType$Type, arg1: $Entity$Type): boolean
 "canHydrateInFluidType"(arg0: $FluidType$Type): boolean
 "hasCustomOutlineRendering"(arg0: $Player$Type): boolean
 "getSoundFromFluidType"(arg0: $FluidType$Type, arg1: $SoundAction$Type): $SoundEvent
 "shouldUpdateFluidWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "getPickedResult"(arg0: $HitResult$Type): $ItemStack
 "isInFluidType"(): boolean
 "isInFluidType"(arg0: $FluidState$Type): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>, arg1: boolean): boolean
 "isInFluidType"(arg0: $BiPredicate$Type<($FluidType$Type), (double)>): boolean
 "isInFluidType"(arg0: $FluidType$Type): boolean
 "captureDrops"(arg0: $Collection$Type<($ItemEntity$Type)>): $Collection<($ItemEntity)>
 "captureDrops"(): $Collection<($ItemEntity)>
 "getFluidTypeHeight"(arg0: $FluidType$Type): double
 "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
 "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}

export namespace $IForgeEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeEntity$Type = ($IForgeEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeEntity_ = $IForgeEntity$Type;
}}
declare module "packages/net/minecraftforge/common/extensions/$IForgeFluid" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Boat, $Boat$Type} from "packages/net/minecraft/world/entity/vehicle/$Boat"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $IForgeFluid {

 "move"(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
 "getBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: boolean): $BlockPathTypes
 "canHydrate"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockPos$Type): boolean
 "canExtinguish"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
 "getFluidType"(): $FluidType
 "supportsBoating"(arg0: $FluidState$Type, arg1: $Boat$Type): boolean
 "canConvertToSource"(arg0: $FluidState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): boolean
 "shouldUpdateWhileBoating"(arg0: $FluidState$Type, arg1: $Boat$Type, arg2: $Entity$Type): boolean
 "getExplosionResistance"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
 "getAdjacentBlockPathType"(arg0: $FluidState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Mob$Type, arg4: $BlockPathTypes$Type): $BlockPathTypes

(arg0: $FluidState$Type, arg1: $LivingEntity$Type, arg2: $Vec3$Type, arg3: double): boolean
}

export namespace $IForgeFluid {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IForgeFluid$Type = ($IForgeFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IForgeFluid_ = $IForgeFluid$Type;
}}
