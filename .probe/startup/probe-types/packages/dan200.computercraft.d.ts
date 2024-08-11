declare module "packages/dan200/computercraft/core/lua/$ILuaMachine$Factory" {
import {$ILuaMachine, $ILuaMachine$Type} from "packages/dan200/computercraft/core/lua/$ILuaMachine"
import {$MachineEnvironment, $MachineEnvironment$Type} from "packages/dan200/computercraft/core/lua/$MachineEnvironment"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $ILuaMachine$Factory {

 "create"(arg0: $MachineEnvironment$Type, arg1: $InputStream$Type): $ILuaMachine

(arg0: $MachineEnvironment$Type, arg1: $InputStream$Type): $ILuaMachine
}

export namespace $ILuaMachine$Factory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaMachine$Factory$Type = ($ILuaMachine$Factory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaMachine$Factory_ = $ILuaMachine$Factory$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/core/$ComputerState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $ComputerState extends $Enum<($ComputerState)> implements $StringRepresentable {
static readonly "OFF": $ComputerState
static readonly "ON": $ComputerState
static readonly "BLINKING": $ComputerState


public "toString"(): string
public static "values"(): ($ComputerState)[]
public static "valueOf"(arg0: string): $ComputerState
public "getTexture"(): string
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "texture"(): string
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerState$Type = (("blinking") | ("off") | ("on")) | ($ComputerState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerState_ = $ComputerState$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$ILuaAPI" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILuaAPI {

 "shutdown"(): void
 "update"(): void
 "getModuleName"(): string
 "startup"(): void
 "getNames"(): (string)[]

(): void
}

export namespace $ILuaAPI {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaAPI$Type = ($ILuaAPI);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaAPI_ = $ILuaAPI$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$CustomShapelessRecipe$Serialiser" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CustomShapelessRecipe$Factory, $CustomShapelessRecipe$Factory$Type} from "packages/dan200/computercraft/shared/recipe/$CustomShapelessRecipe$Factory"
import {$CustomShapelessRecipe, $CustomShapelessRecipe$Type} from "packages/dan200/computercraft/shared/recipe/$CustomShapelessRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CustomShapelessRecipe$Serialiser<T extends $CustomShapelessRecipe> extends $Record implements $RecipeSerializer<(T)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $CustomShapelessRecipe$Factory<($DataResult<(T)>)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomShapelessRecipe$Serialiser$Type<T> = ($CustomShapelessRecipe$Serialiser<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomShapelessRecipe$Serialiser_<T> = $CustomShapelessRecipe$Serialiser$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/command/arguments/$RepeatArgumentType$Info" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$RepeatArgumentType, $RepeatArgumentType$Type} from "packages/dan200/computercraft/shared/command/arguments/$RepeatArgumentType"
import {$RepeatArgumentType$Template, $RepeatArgumentType$Template$Type} from "packages/dan200/computercraft/shared/command/arguments/$RepeatArgumentType$Template"

export class $RepeatArgumentType$Info implements $ArgumentTypeInfo<($RepeatArgumentType<(any), (any)>), ($RepeatArgumentType$Template)> {

constructor()

public "unpack"(arg0: $RepeatArgumentType$Type<(any), (any)>): $RepeatArgumentType$Template
public "serializeToJson"(arg0: $RepeatArgumentType$Template$Type, arg1: $JsonObject$Type): void
public "serializeToNetwork"(arg0: $RepeatArgumentType$Template$Type, arg1: $FriendlyByteBuf$Type): void
public "deserializeFromNetwork"(arg0: $FriendlyByteBuf$Type): $RepeatArgumentType$Template
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$Info$Type = ($RepeatArgumentType$Info);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatArgumentType$Info_ = $RepeatArgumentType$Info$Type;
}}
declare module "packages/dan200/computercraft/api/peripheral/$IComputerAccess" {
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$WorkMonitor, $WorkMonitor$Type} from "packages/dan200/computercraft/api/peripheral/$WorkMonitor"
import {$WritableMount, $WritableMount$Type} from "packages/dan200/computercraft/api/filesystem/$WritableMount"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IComputerAccess {

 "getID"(): integer
 "unmount"(arg0: string): void
 "getAvailablePeripheral"(arg0: string): $IPeripheral
 "mount"(arg0: string, arg1: $Mount$Type): string
 "mount"(arg0: string, arg1: $Mount$Type, arg2: string): string
 "queueEvent"(arg0: string, ...arg1: (any)[]): void
 "getAttachmentName"(): string
 "mountWritable"(arg0: string, arg1: $WritableMount$Type, arg2: string): string
 "mountWritable"(arg0: string, arg1: $WritableMount$Type): string
 "getAvailablePeripherals"(): $Map<(string), ($IPeripheral)>
 "getMainThreadMonitor"(): $WorkMonitor
}

export namespace $IComputerAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComputerAccess$Type = ($IComputerAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComputerAccess_ = $IComputerAccess$Type;
}}
declare module "packages/dan200/computercraft/core/asm/$GenericMethod" {
import {$GenericSource, $GenericSource$Type} from "packages/dan200/computercraft/api/lua/$GenericSource"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export class $GenericMethod {


public "name"(): string
public static "getMethods"(arg0: $GenericSource$Type): $Stream<($GenericMethod)>
public "id"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericMethod$Type = ($GenericMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericMethod_ = $GenericMethod$Type;
}}
declare module "packages/dan200/computercraft/api/media/$IMedia" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMedia {

 "getLabel"(arg0: $ItemStack$Type): string
 "setLabel"(arg0: $ItemStack$Type, arg1: string): boolean
 "getAudio"(arg0: $ItemStack$Type): $SoundEvent
 "createDataMount"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): $Mount
 "getAudioTitle"(arg0: $ItemStack$Type): string

(arg0: $ItemStack$Type): string
}

export namespace $IMedia {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMedia$Type = ($IMedia);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMedia_ = $IMedia$Type;
}}
declare module "packages/dan200/computercraft/api/peripheral/$WorkMonitor" {
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $WorkMonitor {

 "canWork"(): boolean
 "trackWork"(arg0: long, arg1: $TimeUnit$Type): void
 "shouldWork"(): boolean
 "runWork"(arg0: $Runnable$Type): boolean
}

export namespace $WorkMonitor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkMonitor$Type = ($WorkMonitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorkMonitor_ = $WorkMonitor$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IComputerBlockEntity, $IComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$IComputerBlockEntity"
import {$ServerComputer, $ServerComputer$Type} from "packages/dan200/computercraft/shared/computer/core/$ServerComputer"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuProvider, $MenuProvider$Type} from "packages/net/minecraft/world/$MenuProvider"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"
import {$ComputerFamily, $ComputerFamily$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerFamily"

export class $AbstractComputerBlockEntity extends $BlockEntity implements $IComputerBlockEntity, $Nameable, $MenuProvider {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ComputerFamily$Type)

public "getFamily"(): $ComputerFamily
public "getLabel"(): string
public "getName"(): $Component
public "getDisplayName"(): $Component
public "getCustomName"(): $Component
public "neighborChanged"(arg0: $BlockPos$Type): void
public "hasCustomName"(): boolean
public "load"(arg0: $CompoundTag$Type): void
public "saveAdditional"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "setRemoved"(): void
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "isUsable"(arg0: $Player$Type): boolean
public "updateRedstone"(): void
public "setLabel"(arg0: string): void
public "getServerComputer"(): $ServerComputer
public "getComputerID"(): integer
public "setComputerID"(arg0: integer): void
public "updateInputsImmediately"(): void
public "neighbourShapeChanged"(arg0: $Direction$Type): void
public "createServerComputer"(): $ServerComputer
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "shouldCloseCurrentScreen"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "family"(): $ComputerFamily
get "label"(): string
get "name"(): $Component
get "displayName"(): $Component
get "customName"(): $Component
get "updateTag"(): $CompoundTag
get "updatePacket"(): $ClientboundBlockEntityDataPacket
set "label"(value: string)
get "serverComputer"(): $ServerComputer
get "computerID"(): integer
set "computerID"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBlockEntity$Type = ($AbstractComputerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractComputerBlockEntity_ = $AbstractComputerBlockEntity$Type;
}}
declare module "packages/dan200/computercraft/core/filesystem/$FileSystem" {
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$OpenOption, $OpenOption$Type} from "packages/java/nio/file/$OpenOption"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$OptionalLong, $OptionalLong$Type} from "packages/java/util/$OptionalLong"
import {$SeekableByteChannel, $SeekableByteChannel$Type} from "packages/java/nio/channels/$SeekableByteChannel"
import {$FileSystemWrapper, $FileSystemWrapper$Type} from "packages/dan200/computercraft/core/filesystem/$FileSystemWrapper"
import {$WritableMount, $WritableMount$Type} from "packages/dan200/computercraft/api/filesystem/$WritableMount"
import {$BasicFileAttributes, $BasicFileAttributes$Type} from "packages/java/nio/file/attribute/$BasicFileAttributes"

export class $FileSystem {

constructor(arg0: string, arg1: $Mount$Type)
constructor(arg0: string, arg1: $WritableMount$Type)

public static "getName"(arg0: string): string
public static "contains"(arg0: string, arg1: string): boolean
public "list"(arg0: string): (string)[]
public "delete"(arg0: string): void
public "combine"(arg0: string, arg1: string): string
public "close"(): void
public "copy"(arg0: string, arg1: string): void
public "getSize"(arg0: string): long
public "getAttributes"(arg0: string): $BasicFileAttributes
public "isReadOnly"(arg0: string): boolean
public "exists"(arg0: string): boolean
public "getFreeSpace"(arg0: string): long
public "move"(arg0: string, arg1: string): void
public "getCapacity"(arg0: string): $OptionalLong
public static "sanitizePath"(arg0: string, arg1: boolean): string
public "isDir"(arg0: string): boolean
public static "getDirectory"(arg0: string): string
public "unmount"(arg0: string): void
public "mount"(arg0: string, arg1: string, arg2: $Mount$Type): void
public static "toLocal"(arg0: string, arg1: string): string
public "openForWrite"(arg0: string, arg1: $Set$Type<($OpenOption$Type)>): $FileSystemWrapper<($SeekableByteChannel)>
public "openForRead"(arg0: string): $FileSystemWrapper<($SeekableByteChannel)>
public "mountWritable"(arg0: string, arg1: string, arg2: $WritableMount$Type): void
public "makeDir"(arg0: string): void
public "getMountLabel"(arg0: string): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileSystem$Type = ($FileSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileSystem_ = $FileSystem$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/modem/wired/$WiredModemFullBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $WiredModemFullBlock extends $Block implements $EntityBlock {
static readonly "MODEM_ON": $BooleanProperty
static readonly "PERIPHERAL_ON": $BooleanProperty
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

/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WiredModemFullBlock$Type = ($WiredModemFullBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WiredModemFullBlock_ = $WiredModemFullBlock$Type;
}}
declare module "packages/dan200/computercraft/core/methods/$MethodSupplier$TargetedConsumer" {
import {$NamedMethod, $NamedMethod$Type} from "packages/dan200/computercraft/core/methods/$NamedMethod"

export interface $MethodSupplier$TargetedConsumer<T> {

 "accept"(arg0: any, arg1: string, arg2: T, arg3: $NamedMethod$Type<(T)>): void

(arg0: any, arg1: string, arg2: T, arg3: $NamedMethod$Type<(T)>): void
}

export namespace $MethodSupplier$TargetedConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodSupplier$TargetedConsumer$Type<T> = ($MethodSupplier$TargetedConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodSupplier$TargetedConsumer_<T> = $MethodSupplier$TargetedConsumer$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlockItem$WiredModem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CableBlock, $CableBlock$Type} from "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlock"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$CableBlockItem, $CableBlockItem$Type} from "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlockItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CableBlockItem$WiredModem extends $CableBlockItem {
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

constructor(arg0: $CableBlock$Type, arg1: $Item$Properties$Type)

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlockItem$WiredModem$Type = ($CableBlockItem$WiredModem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlockItem$WiredModem_ = $CableBlockItem$WiredModem$Type;
}}
declare module "packages/dan200/computercraft/core/terminal/$Terminal" {
import {$Colour, $Colour$Type} from "packages/dan200/computercraft/core/util/$Colour"
import {$TextBuffer, $TextBuffer$Type} from "packages/dan200/computercraft/core/terminal/$TextBuffer"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Palette, $Palette$Type} from "packages/dan200/computercraft/core/terminal/$Palette"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $Terminal {

constructor(arg0: integer, arg1: integer, arg2: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $Runnable$Type)

public "clear"(): void
public "write"(arg0: string): void
public "reset"(): void
public "resize"(arg0: integer, arg1: integer): void
public "getLine"(arg0: integer): $TextBuffer
public "getHeight"(): integer
public "isColour"(): boolean
public "setCursorBlink"(arg0: boolean): void
public "getCursorX"(): integer
public "getTextColour"(): integer
public "getCursorY"(): integer
public "getCursorBlink"(): boolean
public "getWidth"(): integer
public "setLine"(arg0: integer, arg1: string, arg2: string, arg3: string): void
public "setChanged"(): void
public "blit"(arg0: $ByteBuffer$Type, arg1: $ByteBuffer$Type, arg2: $ByteBuffer$Type): void
public static "getColour"(arg0: character, arg1: $Colour$Type): integer
public "getPalette"(): $Palette
public "scroll"(arg0: integer): void
public "setTextColour"(arg0: integer): void
public "setCursorPos"(arg0: integer, arg1: integer): void
public "getTextColourLine"(arg0: integer): $TextBuffer
public "clearLine"(): void
public "getBackgroundColour"(): integer
public "getBackgroundColourLine"(arg0: integer): $TextBuffer
public "setBackgroundColour"(arg0: integer): void
get "height"(): integer
get "colour"(): boolean
set "cursorBlink"(value: boolean)
get "cursorX"(): integer
get "textColour"(): integer
get "cursorY"(): integer
get "cursorBlink"(): boolean
get "width"(): integer
get "palette"(): $Palette
set "textColour"(value: integer)
get "backgroundColour"(): integer
set "backgroundColour"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Terminal$Type = ($Terminal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Terminal_ = $Terminal$Type;
}}
declare module "packages/dan200/computercraft/core/filesystem/$FileSystemWrapper" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"
import {$TrackingCloseable, $TrackingCloseable$Type} from "packages/dan200/computercraft/core/filesystem/$TrackingCloseable"

export class $FileSystemWrapper<T extends $Closeable> implements $TrackingCloseable {


public "get"(): T
public "isOpen"(): boolean
public "close"(): void
get "open"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FileSystemWrapper$Type<T> = ($FileSystemWrapper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FileSystemWrapper_<T> = $FileSystemWrapper$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/turtle/recipes/$TurtleOverlayRecipe" {
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$CustomShapelessRecipe, $CustomShapelessRecipe$Type} from "packages/dan200/computercraft/shared/recipe/$CustomShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ShapelessRecipeSpec, $ShapelessRecipeSpec$Type} from "packages/dan200/computercraft/shared/recipe/$ShapelessRecipeSpec"
import {$CraftingContainer, $CraftingContainer$Type} from "packages/net/minecraft/world/inventory/$CraftingContainer"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $TurtleOverlayRecipe extends $CustomShapelessRecipe {
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: $ShapelessRecipeSpec$Type, arg2: $ResourceLocation$Type)

public "assemble"(arg0: $CraftingContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getSerializer"(): $RecipeSerializer<($TurtleOverlayRecipe)>
get "serializer"(): $RecipeSerializer<($TurtleOverlayRecipe)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleOverlayRecipe$Type = ($TurtleOverlayRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleOverlayRecipe_ = $TurtleOverlayRecipe$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$CommandComputerBlockEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$CommandSourceStack, $CommandSourceStack$Type} from "packages/net/minecraft/commands/$CommandSourceStack"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ComputerBlockEntity, $ComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$ComputerBlockEntity"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$CommandComputerBlockEntity$CommandReceiver, $CommandComputerBlockEntity$CommandReceiver$Type} from "packages/dan200/computercraft/shared/computer/blocks/$CommandComputerBlockEntity$CommandReceiver"

export class $CommandComputerBlockEntity extends $ComputerBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getSource"(): $CommandSourceStack
public "getReceiver"(): $CommandComputerBlockEntity$CommandReceiver
public "isUsable"(arg0: $Player$Type): boolean
public static "isCommandUsable"(arg0: $Player$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "source"(): $CommandSourceStack
get "receiver"(): $CommandComputerBlockEntity$CommandReceiver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandComputerBlockEntity$Type = ($CommandComputerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandComputerBlockEntity_ = $CommandComputerBlockEntity$Type;
}}
declare module "packages/dan200/computercraft/core/methods/$PeripheralMethod" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"

export interface $PeripheralMethod {

 "apply"(arg0: any, arg1: $ILuaContext$Type, arg2: $IComputerAccess$Type, arg3: $IArguments$Type): $MethodResult

(arg0: any, arg1: $ILuaContext$Type, arg2: $IComputerAccess$Type, arg3: $IArguments$Type): $MethodResult
}

export namespace $PeripheralMethod {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralMethod$Type = ($PeripheralMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralMethod_ = $PeripheralMethod$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$CommandComputerBlock" {
import {$ComputerBlock, $ComputerBlock$Type} from "packages/dan200/computercraft/shared/computer/blocks/$ComputerBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$GameMasterBlock, $GameMasterBlock$Type} from "packages/net/minecraft/world/level/block/$GameMasterBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ComputerState, $ComputerState$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/dan200/computercraft/shared/platform/$RegistryEntry"
import {$CommandComputerBlockEntity, $CommandComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$CommandComputerBlockEntity"

export class $CommandComputerBlock<T extends $CommandComputerBlockEntity> extends $ComputerBlock<(T)> implements $GameMasterBlock {
static readonly "STATE": $EnumProperty<($ComputerState)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryEntry$Type<($BlockEntityType$Type<(T)>)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandComputerBlock$Type<T> = ($CommandComputerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandComputerBlock_<T> = $CommandComputerBlock$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/computer/terminal/$TerminalState" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$NetworkedTerminal, $NetworkedTerminal$Type} from "packages/dan200/computercraft/shared/computer/terminal/$NetworkedTerminal"

export class $TerminalState {

constructor(arg0: $FriendlyByteBuf$Type)
constructor(arg0: $NetworkedTerminal$Type)

public "size"(): integer
public "apply"(arg0: $NetworkedTerminal$Type): void
public "write"(arg0: $FriendlyByteBuf$Type): void
public static "create"(arg0: $NetworkedTerminal$Type): $TerminalState
public "create"(): $NetworkedTerminal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TerminalState$Type = ($TerminalState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TerminalState_ = $TerminalState$Type;
}}
declare module "packages/dan200/computercraft/core/apis/$IAPIEnvironment" {
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Metric$Counter, $Metric$Counter$Type} from "packages/dan200/computercraft/core/metrics/$Metric$Counter"
import {$ComputerSide, $ComputerSide$Type} from "packages/dan200/computercraft/core/computer/$ComputerSide"
import {$Metric$Event, $Metric$Event$Type} from "packages/dan200/computercraft/core/metrics/$Metric$Event"
import {$OperationTimer, $OperationTimer$Type} from "packages/dan200/computercraft/core/metrics/$OperationTimer"
import {$FileSystem, $FileSystem$Type} from "packages/dan200/computercraft/core/filesystem/$FileSystem"
import {$Terminal, $Terminal$Type} from "packages/dan200/computercraft/core/terminal/$Terminal"
import {$WorkMonitor, $WorkMonitor$Type} from "packages/dan200/computercraft/api/peripheral/$WorkMonitor"
import {$ComputerEnvironment, $ComputerEnvironment$Type} from "packages/dan200/computercraft/core/computer/$ComputerEnvironment"
import {$GlobalEnvironment, $GlobalEnvironment$Type} from "packages/dan200/computercraft/core/computer/$GlobalEnvironment"
import {$IAPIEnvironment$IPeripheralChangeListener, $IAPIEnvironment$IPeripheralChangeListener$Type} from "packages/dan200/computercraft/core/apis/$IAPIEnvironment$IPeripheralChangeListener"

export interface $IAPIEnvironment {

 "shutdown"(): void
 "getFileSystem"(): $FileSystem
 "time"(arg0: $Metric$Event$Type): $OperationTimer
 "metrics"(): $MetricsObserver
 "getInput"(arg0: $ComputerSide$Type): integer
 "getLabel"(): string
 "getTerminal"(): $Terminal
 "reboot"(): void
 "setOutput"(arg0: $ComputerSide$Type, arg1: integer): void
 "getOutput"(arg0: $ComputerSide$Type): integer
 "getPeripheral"(arg0: $ComputerSide$Type): $IPeripheral
 "queueEvent"(arg0: string, ...arg1: (any)[]): void
 "cancelTimer"(arg0: integer): void
 "setLabel"(arg0: string): void
 "getComputerID"(): integer
 "observe"(arg0: $Metric$Counter$Type): void
 "observe"(arg0: $Metric$Event$Type, arg1: long): void
 "startTimer"(arg0: long): integer
 "setBundledOutput"(arg0: $ComputerSide$Type, arg1: integer): void
 "getBundledOutput"(arg0: $ComputerSide$Type): integer
 "getBundledInput"(arg0: $ComputerSide$Type): integer
 "getMainThreadMonitor"(): $WorkMonitor
 "getComputerEnvironment"(): $ComputerEnvironment
 "getGlobalEnvironment"(): $GlobalEnvironment
 "setPeripheralChangeListener"(arg0: $IAPIEnvironment$IPeripheralChangeListener$Type): void
}

export namespace $IAPIEnvironment {
const TIMER_EVENT: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAPIEnvironment$Type = ($IAPIEnvironment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAPIEnvironment_ = $IAPIEnvironment$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$ComputerBlockEntity" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractComputerBlockEntity, $AbstractComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlockEntity"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ComputerFamily, $ComputerFamily$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerFamily"

export class $ComputerBlockEntity extends $AbstractComputerBlockEntity {
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $ComputerFamily$Type)

public "getDirection"(): $Direction
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "peripheral"(): $IPeripheral
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerBlockEntity$Type = ($ComputerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerBlockEntity_ = $ComputerBlockEntity$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$MethodResult" {
import {$ILuaCallback, $ILuaCallback$Type} from "packages/dan200/computercraft/api/lua/$ILuaCallback"

export class $MethodResult {


public static "of"(): $MethodResult
public static "of"(...arg0: (any)[]): $MethodResult
public static "of"(arg0: any): $MethodResult
public static "yield"(arg0: (any)[], arg1: $ILuaCallback$Type): $MethodResult
public "getResult"(): (any)[]
public "getCallback"(): $ILuaCallback
public static "pullEvent"(arg0: string, arg1: $ILuaCallback$Type): $MethodResult
public "adjustError"(arg0: integer): $MethodResult
public static "pullEventRaw"(arg0: string, arg1: $ILuaCallback$Type): $MethodResult
public "getErrorAdjust"(): integer
get "result"(): (any)[]
get "callback"(): $ILuaCallback
get "errorAdjust"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodResult$Type = ($MethodResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodResult_ = $MethodResult$Type;
}}
declare module "packages/dan200/computercraft/core/methods/$MethodSupplier" {
import {$MethodSupplier$UntargetedConsumer, $MethodSupplier$UntargetedConsumer$Type} from "packages/dan200/computercraft/core/methods/$MethodSupplier$UntargetedConsumer"
import {$MethodSupplier$TargetedConsumer, $MethodSupplier$TargetedConsumer$Type} from "packages/dan200/computercraft/core/methods/$MethodSupplier$TargetedConsumer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $MethodSupplier<T> {

 "forEachMethod"(arg0: any, arg1: $MethodSupplier$TargetedConsumer$Type<(T)>): boolean
 "forEachSelfMethod"(arg0: any, arg1: $MethodSupplier$UntargetedConsumer$Type<(T)>): boolean
 "getSelfMethods"(arg0: any): $Map<(string), (T)>
}

export namespace $MethodSupplier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodSupplier$Type<T> = ($MethodSupplier<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodSupplier_<T> = $MethodSupplier$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/recipe/$ShapedRecipeSpec" {
import {$ShapedTemplate, $ShapedTemplate$Type} from "packages/dan200/computercraft/shared/recipe/$ShapedTemplate"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeProperties, $RecipeProperties$Type} from "packages/dan200/computercraft/shared/recipe/$RecipeProperties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ShapedRecipeSpec extends $Record {

constructor(properties: $RecipeProperties$Type, template: $ShapedTemplate$Type, result: $ItemStack$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "result"(): $ItemStack
public "properties"(): $RecipeProperties
public static "fromJson"(arg0: $JsonObject$Type): $ShapedRecipeSpec
public "template"(): $ShapedTemplate
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $ShapedRecipeSpec
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeSpec$Type = ($ShapedRecipeSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedRecipeSpec_ = $ShapedRecipeSpec$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$CustomShapelessRecipe" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$CustomShapelessRecipe$Factory, $CustomShapelessRecipe$Factory$Type} from "packages/dan200/computercraft/shared/recipe/$CustomShapelessRecipe$Factory"
import {$ShapelessRecipe, $ShapelessRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapelessRecipe"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ShapelessRecipeSpec, $ShapelessRecipeSpec$Type} from "packages/dan200/computercraft/shared/recipe/$ShapelessRecipeSpec"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $CustomShapelessRecipe extends $ShapelessRecipe {
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "result": $ItemStack
readonly "ingredients": $NonNullList<($Ingredient)>

constructor(arg0: $ResourceLocation$Type, arg1: $ShapelessRecipeSpec$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public static "validatingSerialiser"<T extends $CustomShapelessRecipe>(arg0: $CustomShapelessRecipe$Factory$Type<($DataResult$Type<(T)>)>): $RecipeSerializer<(T)>
public static "serialiser"<T extends $CustomShapelessRecipe>(arg0: $CustomShapelessRecipe$Factory$Type<(T)>): $RecipeSerializer<(T)>
public "toSpec"(): $ShapelessRecipeSpec
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomShapelessRecipe$Type = ($CustomShapelessRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomShapelessRecipe_ = $CustomShapelessRecipe$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$ILuaCallback" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"

export interface $ILuaCallback {

 "resume"(arg0: (any)[]): $MethodResult

(arg0: (any)[]): $MethodResult
}

export namespace $ILuaCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaCallback$Type = ($ILuaCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaCallback_ = $ILuaCallback$Type;
}}
declare module "packages/dan200/computercraft/core/metrics/$Metric" {
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Metric {


public "name"(): string
public "toString"(): string
public "format"(arg0: long): string
public "id"(): integer
public "unit"(): string
public static "metrics"(): $Map<(string), ($Metric)>
public static "formatBytes"(arg0: long): string
public static "formatTime"(arg0: long): string
public static "formatDefault"(arg0: long): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$Type = ($Metric);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Metric_ = $Metric$Type;
}}
declare module "packages/dan200/computercraft/core/computer/mainthread/$MainThreadScheduler$Executor" {
import {$WorkMonitor, $WorkMonitor$Type} from "packages/dan200/computercraft/api/peripheral/$WorkMonitor"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $MainThreadScheduler$Executor extends $WorkMonitor {

 "enqueue"(arg0: $Runnable$Type): boolean
 "canWork"(): boolean
 "trackWork"(arg0: long, arg1: $TimeUnit$Type): void
 "shouldWork"(): boolean
 "runWork"(arg0: $Runnable$Type): boolean
}

export namespace $MainThreadScheduler$Executor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainThreadScheduler$Executor$Type = ($MainThreadScheduler$Executor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainThreadScheduler$Executor_ = $MainThreadScheduler$Executor$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$CommandComputerBlockEntity$CommandReceiver" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CommandSource, $CommandSource$Type} from "packages/net/minecraft/commands/$CommandSource"
import {$CommandComputerBlockEntity, $CommandComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$CommandComputerBlockEntity"

export class $CommandComputerBlockEntity$CommandReceiver implements $CommandSource {

constructor(arg0: $CommandComputerBlockEntity$Type)

public "sendSystemMessage"(arg0: $Component$Type): void
public "acceptsSuccess"(): boolean
public "acceptsFailure"(): boolean
public "shouldInformAdmins"(): boolean
public "copyOutput"(): $List<(string)>
public "clearOutput"(): void
public "alwaysAccepts"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandComputerBlockEntity$CommandReceiver$Type = ($CommandComputerBlockEntity$CommandReceiver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandComputerBlockEntity$CommandReceiver_ = $CommandComputerBlockEntity$CommandReceiver$Type;
}}
declare module "packages/dan200/computercraft/core/filesystem/$TrackingCloseable" {
import {$Closeable, $Closeable$Type} from "packages/java/io/$Closeable"

export interface $TrackingCloseable extends $Closeable {

 "isOpen"(): boolean
 "close"(): void
}

export namespace $TrackingCloseable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrackingCloseable$Type = ($TrackingCloseable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TrackingCloseable_ = $TrackingCloseable$Type;
}}
declare module "packages/dan200/computercraft/core/lua/$MachineResult" {
import {$Exception, $Exception$Type} from "packages/java/lang/$Exception"

export class $MachineResult {
static readonly "OK": $MachineResult
static readonly "PAUSE": $MachineResult
static readonly "TIMEOUT": $MachineResult
static readonly "GENERIC_ERROR": $MachineResult


public "isPause"(): boolean
public "getMessage"(): string
public static "error"(arg0: $Exception$Type): $MachineResult
public static "error"(arg0: string): $MachineResult
public "isError"(): boolean
get "pause"(): boolean
get "message"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineResult$Type = ($MachineResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineResult_ = $MachineResult$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$ILuaContext" {
import {$LuaTask, $LuaTask$Type} from "packages/dan200/computercraft/api/lua/$LuaTask"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"

export interface $ILuaContext {

 "executeMainThreadTask"(arg0: $LuaTask$Type): $MethodResult
 "issueMainThreadTask"(arg0: $LuaTask$Type): long

(arg0: $LuaTask$Type): $MethodResult
}

export namespace $ILuaContext {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaContext$Type = ($ILuaContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaContext_ = $ILuaContext$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$CustomShapedRecipe" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$ShapedRecipeSpec, $ShapedRecipeSpec$Type} from "packages/dan200/computercraft/shared/recipe/$ShapedRecipeSpec"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$CustomShapedRecipe$Factory, $CustomShapedRecipe$Factory$Type} from "packages/dan200/computercraft/shared/recipe/$CustomShapedRecipe$Factory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $CustomShapedRecipe extends $ShapedRecipe {
static "MAX_WIDTH": integer
static "MAX_HEIGHT": integer
readonly "width": integer
readonly "height": integer
readonly "recipeItems": $NonNullList<($Ingredient)>
readonly "result": $ItemStack
readonly "group": string
readonly "category": $CraftingBookCategory
readonly "showNotification": boolean

constructor(arg0: $ResourceLocation$Type, arg1: $ShapedRecipeSpec$Type)

public "getSerializer"(): $RecipeSerializer<(any)>
public static "validatingSerialiser"<T extends $CustomShapedRecipe>(arg0: $CustomShapedRecipe$Factory$Type<($DataResult$Type<(T)>)>): $RecipeSerializer<(T)>
public static "serialiser"<T extends $CustomShapedRecipe>(arg0: $CustomShapedRecipe$Factory$Type<(T)>): $RecipeSerializer<(T)>
public "toSpec"(): $ShapedRecipeSpec
get "serializer"(): $RecipeSerializer<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomShapedRecipe$Type = ($CustomShapedRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomShapedRecipe_ = $CustomShapedRecipe$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
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
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$CableModemVariant, $CableModemVariant$Type} from "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableModemVariant"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CableBlock extends $Block implements $SimpleWaterloggedBlock, $EntityBlock {
static readonly "MODEM": $EnumProperty<($CableModemVariant)>
static readonly "CABLE": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "SOUTH": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "DOWN": $BooleanProperty
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

/**
 * 
 * @deprecated
 */
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getFluidState"(arg0: $BlockState$Type): $FluidState
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public static "canConnectIn"(arg0: $BlockState$Type, arg1: $Direction$Type): boolean
public static "correctConnections"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockState
public static "doesConnectVisually"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "onCustomDestroyBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlock$Type = ($CableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlock_ = $CableBlock$Type;
}}
declare module "packages/dan200/computercraft/core/methods/$MethodSupplier$UntargetedConsumer" {
import {$NamedMethod, $NamedMethod$Type} from "packages/dan200/computercraft/core/methods/$NamedMethod"

export interface $MethodSupplier$UntargetedConsumer<T> {

 "accept"(arg0: string, arg1: T, arg2: $NamedMethod$Type<(T)>): void

(arg0: string, arg1: T, arg2: $NamedMethod$Type<(T)>): void
}

export namespace $MethodSupplier$UntargetedConsumer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodSupplier$UntargetedConsumer$Type<T> = ($MethodSupplier$UntargetedConsumer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MethodSupplier$UntargetedConsumer_<T> = $MethodSupplier$UntargetedConsumer$Type<(T)>;
}}
declare module "packages/dan200/computercraft/api/turtle/$TurtleCommandResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $TurtleCommandResult {


public static "failure"(): $TurtleCommandResult
public static "failure"(arg0: string): $TurtleCommandResult
public static "success"(): $TurtleCommandResult
public static "success"(arg0: (any)[]): $TurtleCommandResult
public "getErrorMessage"(): string
public "isSuccess"(): boolean
public "getResults"(): (any)[]
get "errorMessage"(): string
get "results"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleCommandResult$Type = ($TurtleCommandResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleCommandResult_ = $TurtleCommandResult$Type;
}}
declare module "packages/dan200/computercraft/api/pocket/$IPocketUpgrade" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$UpgradeBase, $UpgradeBase$Type} from "packages/dan200/computercraft/api/upgrades/$UpgradeBase"
import {$IPocketAccess, $IPocketAccess$Type} from "packages/dan200/computercraft/api/pocket/$IPocketAccess"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IPocketUpgrade extends $UpgradeBase {

 "update"(arg0: $IPocketAccess$Type, arg1: $IPeripheral$Type): void
 "onRightClick"(arg0: $Level$Type, arg1: $IPocketAccess$Type, arg2: $IPeripheral$Type): boolean
 "createPeripheral"(arg0: $IPocketAccess$Type): $IPeripheral
 "getUpgradeID"(): $ResourceLocation
 "getCraftingItem"(): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$Type): $CompoundTag
 "getUpgradeItem"(arg0: $CompoundTag$Type): $ItemStack
 "getUnlocalisedAdjective"(): string
}

export namespace $IPocketUpgrade {
function getDefaultAdjective(arg0: $ResourceLocation$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPocketUpgrade$Type = ($IPocketUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPocketUpgrade_ = $IPocketUpgrade$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$CustomShapedRecipe$Serialiser" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$DataResult, $DataResult$Type} from "packages/com/mojang/serialization/$DataResult"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CustomShapedRecipe$Factory, $CustomShapedRecipe$Factory$Type} from "packages/dan200/computercraft/shared/recipe/$CustomShapedRecipe$Factory"
import {$CustomShapedRecipe, $CustomShapedRecipe$Type} from "packages/dan200/computercraft/shared/recipe/$CustomShapedRecipe"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $CustomShapedRecipe$Serialiser<T extends $CustomShapedRecipe> extends $Record implements $RecipeSerializer<(T)> {


public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "factory"(): $CustomShapedRecipe$Factory<($DataResult<(T)>)>
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): T
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): T
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: T): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomShapedRecipe$Serialiser$Type<T> = ($CustomShapedRecipe$Serialiser<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomShapedRecipe$Serialiser_<T> = $CustomShapedRecipe$Serialiser$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/turtle/recipes/$TurtleOverlayRecipe$Serialiser" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TurtleOverlayRecipe, $TurtleOverlayRecipe$Type} from "packages/dan200/computercraft/shared/turtle/recipes/$TurtleOverlayRecipe"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $TurtleOverlayRecipe$Serialiser implements $RecipeSerializer<($TurtleOverlayRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $TurtleOverlayRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $TurtleOverlayRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $TurtleOverlayRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $TurtleOverlayRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleOverlayRecipe$Serialiser$Type = ($TurtleOverlayRecipe$Serialiser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleOverlayRecipe$Serialiser_ = $TurtleOverlayRecipe$Serialiser$Type;
}}
declare module "packages/dan200/computercraft/core/computer/$ComputerEnvironment" {
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$WritableMount, $WritableMount$Type} from "packages/dan200/computercraft/api/filesystem/$WritableMount"

export interface $ComputerEnvironment {

 "getDay"(): integer
 "getTimeOfDay"(): double
 "getMetrics"(): $MetricsObserver
 "createRootMount"(): $WritableMount
}

export namespace $ComputerEnvironment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerEnvironment$Type = ($ComputerEnvironment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerEnvironment_ = $ComputerEnvironment$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$RecipeProperties" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$CraftingBookCategory, $CraftingBookCategory$Type} from "packages/net/minecraft/world/item/crafting/$CraftingBookCategory"

export class $RecipeProperties extends $Record {

constructor(group: string, category: $CraftingBookCategory$Type)

public "group"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $CraftingRecipe$Type): $RecipeProperties
public "category"(): $CraftingBookCategory
public static "fromJson"(arg0: $JsonObject$Type): $RecipeProperties
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $RecipeProperties
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeProperties$Type = ($RecipeProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeProperties_ = $RecipeProperties$Type;
}}
declare module "packages/dan200/computercraft/api/pocket/$IPocketAccess" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IPocketAccess {

 "getEntity"(): $Entity
 "getLight"(): integer
/**
 * 
 * @deprecated
 */
 "getUpgrades"(): $Map<($ResourceLocation), ($IPeripheral)>
 "getColour"(): integer
 "setColour"(arg0: integer): void
 "invalidatePeripheral"(): void
 "updateUpgradeNBTData"(): void
 "setLight"(arg0: integer): void
 "getUpgradeNBTData"(): $CompoundTag
}

export namespace $IPocketAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPocketAccess$Type = ($IPocketAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPocketAccess_ = $IPocketAccess$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$ILuaAPIFactory" {
import {$IComputerSystem, $IComputerSystem$Type} from "packages/dan200/computercraft/api/lua/$IComputerSystem"
import {$ILuaAPI, $ILuaAPI$Type} from "packages/dan200/computercraft/api/lua/$ILuaAPI"

export interface $ILuaAPIFactory {

 "create"(arg0: $IComputerSystem$Type): $ILuaAPI

(arg0: $IComputerSystem$Type): $ILuaAPI
}

export namespace $ILuaAPIFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaAPIFactory$Type = ($ILuaAPIFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaAPIFactory_ = $ILuaAPIFactory$Type;
}}
declare module "packages/dan200/computercraft/api/upgrades/$UpgradeBase" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $UpgradeBase {

 "getUpgradeID"(): $ResourceLocation
 "getCraftingItem"(): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$Type): $CompoundTag
 "getUpgradeItem"(arg0: $CompoundTag$Type): $ItemStack
 "getUnlocalisedAdjective"(): string
}

export namespace $UpgradeBase {
function getDefaultAdjective(arg0: $ResourceLocation$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeBase$Type = ($UpgradeBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeBase_ = $UpgradeBase$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$ShapelessRecipeSpec" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$RecipeProperties, $RecipeProperties$Type} from "packages/dan200/computercraft/shared/recipe/$RecipeProperties"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $ShapelessRecipeSpec extends $Record {

constructor(properties: $RecipeProperties$Type, ingredients: $NonNullList$Type<($Ingredient$Type)>, result: $ItemStack$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "result"(): $ItemStack
public "properties"(): $RecipeProperties
public static "fromJson"(arg0: $JsonObject$Type): $ShapelessRecipeSpec
public "ingredients"(): $NonNullList<($Ingredient)>
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $ShapelessRecipeSpec
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapelessRecipeSpec$Type = ($ShapelessRecipeSpec);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapelessRecipeSpec_ = $ShapelessRecipeSpec$Type;
}}
declare module "packages/dan200/computercraft/core/computer/$ComputerSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"

export class $ComputerSide extends $Enum<($ComputerSide)> {
static readonly "BOTTOM": $ComputerSide
static readonly "TOP": $ComputerSide
static readonly "BACK": $ComputerSide
static readonly "FRONT": $ComputerSide
static readonly "RIGHT": $ComputerSide
static readonly "LEFT": $ComputerSide
static readonly "NAMES": $List<(string)>
static readonly "COUNT": integer


public "getName"(): string
public static "values"(): ($ComputerSide)[]
public static "valueOf"(arg0: integer): $ComputerSide
public static "valueOf"(arg0: string): $ComputerSide
public static "valueOfInsensitive"(arg0: string): $ComputerSide
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerSide$Type = (("top") | ("left") | ("bottom") | ("back") | ("front") | ("right")) | ($ComputerSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerSide_ = $ComputerSide$Type;
}}
declare module "packages/dan200/computercraft/api/turtle/$TurtleAnimation" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TurtleAnimation extends $Enum<($TurtleAnimation)> {
static readonly "NONE": $TurtleAnimation
static readonly "MOVE_FORWARD": $TurtleAnimation
static readonly "MOVE_BACK": $TurtleAnimation
static readonly "MOVE_UP": $TurtleAnimation
static readonly "MOVE_DOWN": $TurtleAnimation
static readonly "TURN_LEFT": $TurtleAnimation
static readonly "TURN_RIGHT": $TurtleAnimation
static readonly "SWING_LEFT_TOOL": $TurtleAnimation
static readonly "SWING_RIGHT_TOOL": $TurtleAnimation
static readonly "WAIT": $TurtleAnimation
static readonly "SHORT_WAIT": $TurtleAnimation


public static "values"(): ($TurtleAnimation)[]
public static "valueOf"(arg0: string): $TurtleAnimation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleAnimation$Type = (("short_wait") | ("move_back") | ("wait") | ("move_up") | ("swing_right_tool") | ("move_down") | ("swing_left_tool") | ("none") | ("move_forward") | ("turn_left") | ("turn_right")) | ($TurtleAnimation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleAnimation_ = $TurtleAnimation$Type;
}}
declare module "packages/dan200/computercraft/api/peripheral/$IPeripheral" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"

export interface $IPeripheral {

 "equals"(arg0: $IPeripheral$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$Type): void
 "detach"(arg0: $IComputerAccess$Type): void
 "getAdditionalTypes"(): $Set<(string)>
}

export namespace $IPeripheral {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheral$Type = ($IPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPeripheral_ = $IPeripheral$Type;
}}
declare module "packages/dan200/computercraft/shared/media/items/$TreasureDiskItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IMedia, $IMedia$Type} from "packages/dan200/computercraft/api/media/$IMedia"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TreasureDiskItem extends $Item implements $IMedia {
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

public static "create"(arg0: string, arg1: integer): $ItemStack
public "getLabel"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public static "getColour"(arg0: $ItemStack$Type): integer
public "createDataMount"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): $Mount
public "setLabel"(arg0: $ItemStack$Type, arg1: string): boolean
public "getAudio"(arg0: $ItemStack$Type): $SoundEvent
public "getAudioTitle"(arg0: $ItemStack$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreasureDiskItem$Type = ($TreasureDiskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TreasureDiskItem_ = $TreasureDiskItem$Type;
}}
declare module "packages/dan200/computercraft/api/turtle/$TurtleVerb" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TurtleVerb extends $Enum<($TurtleVerb)> {
static readonly "DIG": $TurtleVerb
static readonly "ATTACK": $TurtleVerb


public static "values"(): ($TurtleVerb)[]
public static "valueOf"(arg0: string): $TurtleVerb
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleVerb$Type = (("dig") | ("attack")) | ($TurtleVerb);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleVerb_ = $TurtleVerb$Type;
}}
declare module "packages/dan200/computercraft/core/metrics/$MetricsObserver" {
import {$Metric$Counter, $Metric$Counter$Type} from "packages/dan200/computercraft/core/metrics/$Metric$Counter"
import {$Metric$Event, $Metric$Event$Type} from "packages/dan200/computercraft/core/metrics/$Metric$Event"

export interface $MetricsObserver {

 "observe"(arg0: $Metric$Event$Type, arg1: long): void
 "observe"(arg0: $Metric$Counter$Type): void
}

export namespace $MetricsObserver {
function discard(): $MetricsObserver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricsObserver$Type = ($MetricsObserver);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MetricsObserver_ = $MetricsObserver$Type;
}}
declare module "packages/dan200/computercraft/shared/media/items/$PrintoutItem$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PrintoutItem$Type extends $Enum<($PrintoutItem$Type)> {
static readonly "PAGE": $PrintoutItem$Type
static readonly "PAGES": $PrintoutItem$Type
static readonly "BOOK": $PrintoutItem$Type


public static "values"(): ($PrintoutItem$Type)[]
public static "valueOf"(arg0: string): $PrintoutItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintoutItem$Type$Type = (("pages") | ("book") | ("page")) | ($PrintoutItem$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintoutItem$Type_ = $PrintoutItem$Type$Type;
}}
declare module "packages/dan200/computercraft/api/filesystem/$WritableMount" {
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$OpenOption, $OpenOption$Type} from "packages/java/nio/file/$OpenOption"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$SeekableByteChannel, $SeekableByteChannel$Type} from "packages/java/nio/channels/$SeekableByteChannel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicFileAttributes, $BasicFileAttributes$Type} from "packages/java/nio/file/attribute/$BasicFileAttributes"

export interface $WritableMount extends $Mount {

 "delete"(arg0: string): void
 "isReadOnly"(arg0: string): boolean
 "rename"(arg0: string, arg1: string): void
 "makeDirectory"(arg0: string): void
 "getCapacity"(): long
 "openFile"(arg0: string, arg1: $Set$Type<($OpenOption$Type)>): $SeekableByteChannel
/**
 * 
 * @deprecated
 */
 "openForWrite"(arg0: string): $SeekableByteChannel
/**
 * 
 * @deprecated
 */
 "openForAppend"(arg0: string): $SeekableByteChannel
 "getRemainingSpace"(): long
 "list"(arg0: string, arg1: $List$Type<(string)>): void
 "getSize"(arg0: string): long
 "getAttributes"(arg0: string): $BasicFileAttributes
 "exists"(arg0: string): boolean
 "isDirectory"(arg0: string): boolean
 "openForRead"(arg0: string): $SeekableByteChannel
}

export namespace $WritableMount {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WritableMount$Type = ($WritableMount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WritableMount_ = $WritableMount$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/printer/$PrinterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$HorizontalContainerBlock, $HorizontalContainerBlock$Type} from "packages/dan200/computercraft/shared/common/$HorizontalContainerBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PrinterBlock extends $HorizontalContainerBlock {
static readonly "TOP": $BooleanProperty
static readonly "BOTTOM": $BooleanProperty
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

public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrinterBlock$Type = ($PrinterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrinterBlock_ = $PrinterBlock$Type;
}}
declare module "packages/dan200/computercraft/core/methods/$NamedMethod" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$PeripheralType, $PeripheralType$Type} from "packages/dan200/computercraft/api/peripheral/$PeripheralType"

export class $NamedMethod<T> extends $Record {

constructor(name: string, method: T, nonYielding: boolean, genericType: $PeripheralType$Type)

public "name"(): string
public "equals"(arg0: any): boolean
public "toString"(): string
public "method"(): T
public "hashCode"(): integer
public "genericType"(): $PeripheralType
public "nonYielding"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NamedMethod$Type<T> = ($NamedMethod<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NamedMethod_<T> = $NamedMethod$Type<(T)>;
}}
declare module "packages/dan200/computercraft/api/turtle/$ITurtleUpgrade" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$TurtleSide, $TurtleSide$Type} from "packages/dan200/computercraft/api/turtle/$TurtleSide"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$UpgradeBase, $UpgradeBase$Type} from "packages/dan200/computercraft/api/upgrades/$UpgradeBase"
import {$ITurtleAccess, $ITurtleAccess$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleAccess"
import {$TurtleUpgradeType, $TurtleUpgradeType$Type} from "packages/dan200/computercraft/api/turtle/$TurtleUpgradeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TurtleCommandResult, $TurtleCommandResult$Type} from "packages/dan200/computercraft/api/turtle/$TurtleCommandResult"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TurtleVerb, $TurtleVerb$Type} from "packages/dan200/computercraft/api/turtle/$TurtleVerb"

export interface $ITurtleUpgrade extends $UpgradeBase {

 "update"(arg0: $ITurtleAccess$Type, arg1: $TurtleSide$Type): void
 "getType"(): $TurtleUpgradeType
 "useTool"(arg0: $ITurtleAccess$Type, arg1: $TurtleSide$Type, arg2: $TurtleVerb$Type, arg3: $Direction$Type): $TurtleCommandResult
 "getPersistedData"(arg0: $CompoundTag$Type): $CompoundTag
 "createPeripheral"(arg0: $ITurtleAccess$Type, arg1: $TurtleSide$Type): $IPeripheral
 "getUpgradeID"(): $ResourceLocation
 "getCraftingItem"(): $ItemStack
 "isItemSuitable"(arg0: $ItemStack$Type): boolean
 "getUpgradeData"(arg0: $ItemStack$Type): $CompoundTag
 "getUpgradeItem"(arg0: $CompoundTag$Type): $ItemStack
 "getUnlocalisedAdjective"(): string
}

export namespace $ITurtleUpgrade {
function getDefaultAdjective(arg0: $ResourceLocation$Type): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurtleUpgrade$Type = ($ITurtleUpgrade);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurtleUpgrade_ = $ITurtleUpgrade$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/core/$ServerComputer" {
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$ComputerSide, $ComputerSide$Type} from "packages/dan200/computercraft/core/computer/$ComputerSide"
import {$IAPIEnvironment, $IAPIEnvironment$Type} from "packages/dan200/computercraft/core/apis/$IAPIEnvironment"
import {$ComputerState, $ComputerState$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerState"
import {$TerminalState, $TerminalState$Type} from "packages/dan200/computercraft/shared/computer/terminal/$TerminalState"
import {$Computer, $Computer$Type} from "packages/dan200/computercraft/core/computer/$Computer"
import {$ComputerEnvironment, $ComputerEnvironment$Type} from "packages/dan200/computercraft/core/computer/$ComputerEnvironment"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$InputHandler, $InputHandler$Type} from "packages/dan200/computercraft/shared/computer/core/$InputHandler"
import {$WritableMount, $WritableMount$Type} from "packages/dan200/computercraft/api/filesystem/$WritableMount"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ComputerFamily, $ComputerFamily$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerFamily"
import {$ILuaAPI, $ILuaAPI$Type} from "packages/dan200/computercraft/api/lua/$ILuaAPI"

export class $ServerComputer implements $InputHandler, $ComputerEnvironment {

constructor(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: string, arg4: $ComputerFamily$Type, arg5: integer, arg6: integer)

public "shutdown"(): void
public "register"(): $UUID
public "isOn"(): boolean
public "getState"(): $ComputerState
public "close"(): void
public "getFamily"(): $ComputerFamily
public "getID"(): integer
public "getDay"(): integer
public "keepAlive"(): void
public "getLevel"(): $ServerLevel
public "setLevel"(arg0: $ServerLevel$Type): void
public "getTimeOfDay"(): double
public "getPosition"(): $BlockPos
public "getLabel"(): string
public "tickServer"(): void
public "reboot"(): void
public "turnOn"(): void
public "getMetrics"(): $MetricsObserver
public "setPosition"(arg0: $BlockPos$Type): void
public "getInstanceID"(): integer
public "getComputer"(): $Computer
public "setPeripheral"(arg0: $ComputerSide$Type, arg1: $IPeripheral$Type): void
public "setRedstoneInput"(arg0: $ComputerSide$Type, arg1: integer): void
public "getBundledRedstoneOutput"(arg0: $ComputerSide$Type): integer
public "getPeripheral"(arg0: $ComputerSide$Type): $IPeripheral
public "queueEvent"(arg0: string, arg1: (any)[]): void
public "setLabel"(arg0: string): void
public "getRedstoneOutput"(arg0: $ComputerSide$Type): integer
public "addAPI"(arg0: $ILuaAPI$Type): void
public "getAPIEnvironment"(): $IAPIEnvironment
public "getInstanceUUID"(): $UUID
public "getTerminalState"(): $TerminalState
public "pollAndResetChanges"(): integer
public "setBundledRedstoneInput"(arg0: $ComputerSide$Type, arg1: integer): void
public "hasTimedOut"(): boolean
public "createRootMount"(): $WritableMount
public "mouseDrag"(arg0: integer, arg1: integer, arg2: integer): void
public "mouseUp"(arg0: integer, arg1: integer, arg2: integer): void
public "keyDown"(arg0: integer, arg1: boolean): void
public "keyUp"(arg0: integer): void
public "queueEvent"(arg0: string): void
public "mouseClick"(arg0: integer, arg1: integer, arg2: integer): void
public "mouseScroll"(arg0: integer, arg1: integer, arg2: integer): void
get "on"(): boolean
get "state"(): $ComputerState
get "family"(): $ComputerFamily
get "iD"(): integer
get "day"(): integer
get "level"(): $ServerLevel
set "level"(value: $ServerLevel$Type)
get "timeOfDay"(): double
get "position"(): $BlockPos
get "label"(): string
get "metrics"(): $MetricsObserver
set "position"(value: $BlockPos$Type)
get "instanceID"(): integer
get "computer"(): $Computer
set "label"(value: string)
get "aPIEnvironment"(): $IAPIEnvironment
get "instanceUUID"(): $UUID
get "terminalState"(): $TerminalState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerComputer$Type = ($ServerComputer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerComputer_ = $ServerComputer$Type;
}}
declare module "packages/dan200/computercraft/core/computer/$Computer" {
import {$Terminal, $Terminal$Type} from "packages/dan200/computercraft/core/terminal/$Terminal"
import {$Environment, $Environment$Type} from "packages/dan200/computercraft/core/computer/$Environment"
import {$ComputerEnvironment, $ComputerEnvironment$Type} from "packages/dan200/computercraft/core/computer/$ComputerEnvironment"
import {$WorkMonitor, $WorkMonitor$Type} from "packages/dan200/computercraft/api/peripheral/$WorkMonitor"
import {$ComputerContext, $ComputerContext$Type} from "packages/dan200/computercraft/core/$ComputerContext"
import {$IAPIEnvironment, $IAPIEnvironment$Type} from "packages/dan200/computercraft/core/apis/$IAPIEnvironment"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ILuaAPI, $ILuaAPI$Type} from "packages/dan200/computercraft/api/lua/$ILuaAPI"

export class $Computer {

constructor(arg0: $ComputerContext$Type, arg1: $ComputerEnvironment$Type, arg2: $Terminal$Type, arg3: integer)

public "shutdown"(): void
public "isOn"(): boolean
public "unload"(): void
public "getID"(): integer
public "tick"(): void
public "getLabel"(): string
public "getEnvironment"(): $Environment
public "reboot"(): void
public "turnOn"(): void
public "isBlinking"(): boolean
public "queueEvent"(arg0: string, arg1: (any)[]): void
public "setLabel"(arg0: string): void
public "getAPIEnvironment"(): $IAPIEnvironment
public "pollAndResetChanges"(): integer
public "addApi"(arg0: $ILuaAPI$Type): void
public "queueMainThread"(arg0: $Runnable$Type): boolean
public "getMainThreadMonitor"(): $WorkMonitor
get "on"(): boolean
get "iD"(): integer
get "label"(): string
get "environment"(): $Environment
get "blinking"(): boolean
set "label"(value: string)
get "aPIEnvironment"(): $IAPIEnvironment
get "mainThreadMonitor"(): $WorkMonitor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Computer$Type = ($Computer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Computer_ = $Computer$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$CustomShapedRecipe$Factory" {
import {$ShapedRecipeSpec, $ShapedRecipeSpec$Type} from "packages/dan200/computercraft/shared/recipe/$ShapedRecipeSpec"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CustomShapedRecipe$Factory<R> {

 "create"(arg0: $ResourceLocation$Type, arg1: $ShapedRecipeSpec$Type): R

(arg0: $ResourceLocation$Type, arg1: $ShapedRecipeSpec$Type): R
}

export namespace $CustomShapedRecipe$Factory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomShapedRecipe$Factory$Type<R> = ($CustomShapedRecipe$Factory<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomShapedRecipe$Factory_<R> = $CustomShapedRecipe$Factory$Type<(R)>;
}}
declare module "packages/dan200/computercraft/core/computer/computerthread/$ComputerScheduler" {
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$ComputerScheduler$Executor, $ComputerScheduler$Executor$Type} from "packages/dan200/computercraft/core/computer/computerthread/$ComputerScheduler$Executor"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$ComputerScheduler$Worker, $ComputerScheduler$Worker$Type} from "packages/dan200/computercraft/core/computer/computerthread/$ComputerScheduler$Worker"

export interface $ComputerScheduler {

 "stop"(arg0: long, arg1: $TimeUnit$Type): boolean
 "createExecutor"(arg0: $ComputerScheduler$Worker$Type, arg1: $MetricsObserver$Type): $ComputerScheduler$Executor
}

export namespace $ComputerScheduler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerScheduler$Type = ($ComputerScheduler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerScheduler_ = $ComputerScheduler$Type;
}}
declare module "packages/dan200/computercraft/shared/pocket/items/$PocketComputerItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IPocketUpgrade, $IPocketUpgrade$Type} from "packages/dan200/computercraft/api/pocket/$IPocketUpgrade"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IComputerItem, $IComputerItem$Type} from "packages/dan200/computercraft/shared/computer/items/$IComputerItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IMedia, $IMedia$Type} from "packages/dan200/computercraft/api/media/$IMedia"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MinecraftServer, $MinecraftServer$Type} from "packages/net/minecraft/server/$MinecraftServer"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IColouredItem, $IColouredItem$Type} from "packages/dan200/computercraft/shared/common/$IColouredItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UpgradeData, $UpgradeData$Type} from "packages/dan200/computercraft/api/upgrades/$UpgradeData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$ComputerFamily, $ComputerFamily$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerFamily"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$PocketServerComputer, $PocketServerComputer$Type} from "packages/dan200/computercraft/shared/pocket/core/$PocketServerComputer"

export class $PocketComputerItem extends $Item implements $IComputerItem, $IMedia, $IColouredItem {
static readonly "NBT_ON": string
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

constructor(arg0: $Item$Properties$Type, arg1: $ComputerFamily$Type)

public "create"(arg0: integer, arg1: string, arg2: integer, arg3: $UpgradeData$Type<($IPocketUpgrade$Type)>): $ItemStack
public "getFamily"(): $ComputerFamily
public "getLabel"(arg0: $ItemStack$Type): string
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getName"(arg0: $ItemStack$Type): $Component
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getCreatorModId"(arg0: $ItemStack$Type): string
public static "getUpgrade"(arg0: $ItemStack$Type): $IPocketUpgrade
public static "getInstanceID"(arg0: $ItemStack$Type): $UUID
public static "getUpgradeInfo"(arg0: $ItemStack$Type): $CompoundTag
public static "setUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeData$Type<($IPocketUpgrade$Type)>): void
public static "getUpgradeWithData"(arg0: $ItemStack$Type): $UpgradeData<($IPocketUpgrade)>
public "setLabel"(arg0: $ItemStack$Type, arg1: string): boolean
public static "getServerComputer"(arg0: $MinecraftServer$Type, arg1: $ItemStack$Type): $PocketServerComputer
public "changeItem"(arg0: $ItemStack$Type, arg1: $Item$Type): $ItemStack
public "createDataMount"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): $Mount
public "createServerComputer"(arg0: $ServerLevel$Type, arg1: $Entity$Type, arg2: $Container$Type, arg3: $ItemStack$Type): $PocketServerComputer
public "getComputerID"(arg0: $ItemStack$Type): integer
public "getAudio"(arg0: $ItemStack$Type): $SoundEvent
public "getAudioTitle"(arg0: $ItemStack$Type): string
public "getColour"(arg0: $ItemStack$Type): integer
public static "getColourBasic"(arg0: $ItemStack$Type): integer
public static "setColourBasic"(arg0: $ItemStack$Type, arg1: integer): void
public "withColour"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
get "family"(): $ComputerFamily
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketComputerItem$Type = ($PocketComputerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketComputerItem_ = $PocketComputerItem$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/core/$ComputerFamily" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ComputerFamily extends $Enum<($ComputerFamily)> {
static readonly "NORMAL": $ComputerFamily
static readonly "ADVANCED": $ComputerFamily
static readonly "COMMAND": $ComputerFamily


public static "values"(): ($ComputerFamily)[]
public static "valueOf"(arg0: string): $ComputerFamily
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerFamily$Type = (("normal") | ("advanced") | ("command")) | ($ComputerFamily);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerFamily_ = $ComputerFamily$Type;
}}
declare module "packages/dan200/computercraft/api/upgrades/$UpgradeData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$UpgradeBase, $UpgradeBase$Type} from "packages/dan200/computercraft/api/upgrades/$UpgradeBase"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export class $UpgradeData<T extends $UpgradeBase> extends $Record {

constructor(upgrade: T, data: $CompoundTag$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "copyOf"<T extends $UpgradeBase>(arg0: $UpgradeData$Type<(T)>): $UpgradeData<(T)>
public static "of"<T extends $UpgradeBase>(arg0: T, arg1: $CompoundTag$Type): $UpgradeData<(T)>
public "data"(): $CompoundTag
public "copy"(): $UpgradeData<(T)>
public "upgrade"(): T
public static "ofDefault"<T extends $UpgradeBase>(arg0: T): $UpgradeData<(T)>
public "getUpgradeItem"(): $ItemStack
get "upgradeItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeData$Type<T> = ($UpgradeData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeData_<T> = $UpgradeData$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/common/$IColouredItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IColouredItem {

 "getColour"(arg0: $ItemStack$Type): integer
 "withColour"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
}

export namespace $IColouredItem {
const NBT_COLOUR: string
function getColourBasic(arg0: $ItemStack$Type): integer
function setColourBasic(arg0: $ItemStack$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColouredItem$Type = ($IColouredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColouredItem_ = $IColouredItem$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$LuaTable" {
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Map$Entry, $Map$Entry$Type} from "packages/java/util/$Map$Entry"

export interface $LuaTable<K, V> extends $Map<(K), (V)> {

 "remove"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "length"(): integer
 "getInt"(arg0: string): integer
 "getInt"(arg0: integer): integer
 "getLong"(arg0: integer): long
 "getLong"(arg0: string): long
 "clear"(): void
 "putAll"(arg0: $Map$Type<(any), (any)>): void
 "remove"(arg0: any, arg1: any): boolean
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V): V
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replaceAll"(arg0: $BiFunction$Type<(any), (any), (any)>): void
 "size"(): integer
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$Type<(any), (any), (any)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
 "forEach"(arg0: $BiConsumer$Type<(any), (any)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$Type<(any), (any)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$Type<(any), (any), (any)>): V
}

export namespace $LuaTable {
function copyOf<K, V>(arg0: $Map$Type<(any), (any)>): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
function of<K, V>(): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
function of<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
function entry<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
function ofEntries<K, V>(...arg0: ($Map$Entry$Type<(any), (any)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTable$Type<K, V> = ($LuaTable<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTable_<K, V> = $LuaTable$Type<(K), (V)>;
}}
declare module "packages/dan200/computercraft/core/lua/$ILuaMachine" {
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"
import {$MachineResult, $MachineResult$Type} from "packages/dan200/computercraft/core/lua/$MachineResult"

export interface $ILuaMachine {

 "close"(): void
 "handleEvent"(arg0: string, arg1: (any)[]): $MachineResult
 "printExecutionState"(arg0: $StringBuilder$Type): void
}

export namespace $ILuaMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaMachine$Type = ($ILuaMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ILuaMachine_ = $ILuaMachine$Type;
}}
declare module "packages/dan200/computercraft/core/metrics/$Metric$Counter" {
import {$Metric, $Metric$Type} from "packages/dan200/computercraft/core/metrics/$Metric"

export class $Metric$Counter extends $Metric {

constructor(arg0: string)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$Counter$Type = ($Metric$Counter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Metric$Counter_ = $Metric$Counter$Type;
}}
declare module "packages/dan200/computercraft/shared/pocket/core/$PocketServerComputer" {
import {$IPocketUpgrade, $IPocketUpgrade$Type} from "packages/dan200/computercraft/api/pocket/$IPocketUpgrade"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ServerComputer, $ServerComputer$Type} from "packages/dan200/computercraft/shared/computer/core/$ServerComputer"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UpgradeData, $UpgradeData$Type} from "packages/dan200/computercraft/api/upgrades/$UpgradeData"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IPocketAccess, $IPocketAccess$Type} from "packages/dan200/computercraft/api/pocket/$IPocketAccess"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ComputerFamily, $ComputerFamily$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerFamily"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PocketServerComputer extends $ServerComputer implements $IPocketAccess {

constructor(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: integer, arg3: string, arg4: $ComputerFamily$Type)

public "getEntity"(): $Entity
public "tickServer"(): void
public "getLight"(): integer
/**
 * 
 * @deprecated
 */
public "getUpgrades"(): $Map<($ResourceLocation), ($IPeripheral)>
public "getColour"(): integer
public "getUpgrade"(): $UpgradeData<($IPocketUpgrade)>
public "setColour"(arg0: integer): void
public "setUpgrade"(arg0: $UpgradeData$Type<($IPocketUpgrade$Type)>): void
public "updateValues"(arg0: $Entity$Type, arg1: $ItemStack$Type, arg2: $IPocketUpgrade$Type): void
public "invalidatePeripheral"(): void
public "updateUpgradeNBTData"(): void
public "setLight"(arg0: integer): void
public "getUpgradeNBTData"(): $CompoundTag
get "entity"(): $Entity
get "light"(): integer
get "upgrades"(): $Map<($ResourceLocation), ($IPeripheral)>
get "colour"(): integer
get "upgrade"(): $UpgradeData<($IPocketUpgrade)>
set "colour"(value: integer)
set "upgrade"(value: $UpgradeData$Type<($IPocketUpgrade$Type)>)
set "light"(value: integer)
get "upgradeNBTData"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PocketServerComputer$Type = ($PocketServerComputer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PocketServerComputer_ = $PocketServerComputer$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CableBlock, $CableBlock$Type} from "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlock"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CableBlockItem extends $BlockItem {
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

constructor(arg0: $CableBlock$Type, arg1: $Item$Properties$Type)

public "getDescriptionId"(): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
get "descriptionId"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlockItem$Type = ($CableBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlockItem_ = $CableBlockItem$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$CustomShapelessRecipe$Factory" {
import {$ShapelessRecipeSpec, $ShapelessRecipeSpec$Type} from "packages/dan200/computercraft/shared/recipe/$ShapelessRecipeSpec"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $CustomShapelessRecipe$Factory<R> {

 "create"(arg0: $ResourceLocation$Type, arg1: $ShapelessRecipeSpec$Type): R

(arg0: $ResourceLocation$Type, arg1: $ShapelessRecipeSpec$Type): R
}

export namespace $CustomShapelessRecipe$Factory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomShapelessRecipe$Factory$Type<R> = ($CustomShapelessRecipe$Factory<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomShapelessRecipe$Factory_<R> = $CustomShapelessRecipe$Factory$Type<(R)>;
}}
declare module "packages/dan200/computercraft/shared/container/$BasicContainer" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $BasicContainer extends $Container {

 "getContents"(): $NonNullList<($ItemStack)>
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "clearContent"(): void
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "getItem"(arg0: integer): $ItemStack
 "setChanged"(): void
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "kjs$self"(): $Container
 "getMaxStackSize"(): integer
 "startOpen"(arg0: $Player$Type): void
 "stillValid"(arg0: $Player$Type): boolean
 "stopOpen"(arg0: $Player$Type): void
 "isMutable"(): boolean
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "getStackInSlot"(slot: integer): $ItemStack
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "getSlots"(): integer
 "countItem"(arg0: $Item$Type): integer
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "getHeight"(): integer
 "clear"(): void
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "asContainer"(): $Container
 "getWidth"(): integer
 "getSlotLimit"(slot: integer): integer
 "setChanged"(): void
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "clear"(ingredient: $Ingredient$Type): void
 "find"(): integer
 "find"(ingredient: $Ingredient$Type): integer
 "count"(ingredient: $Ingredient$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "getAllItems"(): $List<($ItemStack)>
 "isEmpty"(): boolean
}

export namespace $BasicContainer {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicContainer$Type = ($BasicContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicContainer_ = $BasicContainer$Type;
}}
declare module "packages/dan200/computercraft/core/terminal/$Palette" {
import {$Colour, $Colour$Type} from "packages/dan200/computercraft/core/util/$Colour"

export class $Palette {
static readonly "PALETTE_SIZE": integer
static readonly "DEFAULT": $Palette

constructor(arg0: boolean)

public "resetColours"(): void
public static "decodeRGB8"(arg0: integer): (double)[]
public static "encodeRGB8"(arg0: (double)[]): integer
public "getColour"(arg0: integer): (double)[]
public "setColour"(arg0: integer, arg1: $Colour$Type): void
public "setColour"(arg0: integer, arg1: double, arg2: double, arg3: double): void
public "resetColour"(arg0: integer): void
public "getRenderColours"(arg0: integer): (byte)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Palette$Type = ($Palette);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Palette_ = $Palette$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
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
import {$AbstractComputerBlockEntity, $AbstractComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IBundledRedstoneBlock, $IBundledRedstoneBlock$Type} from "packages/dan200/computercraft/shared/common/$IBundledRedstoneBlock"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractComputerBlock<T extends $AbstractComputerBlockEntity> extends $HorizontalDirectionalBlock implements $IBundledRedstoneBlock, $EntityBlock {
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


public "getTicker"<U extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(U)>): $BlockEntityTicker<(U)>
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getCloneItemStack"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
/**
 * 
 * @deprecated
 */
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "isSignalSource"(arg0: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
/**
 * 
 * @deprecated
 */
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "getBundledRedstoneOutput"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerBlock$Type<T> = ($AbstractComputerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractComputerBlock_<T> = $AbstractComputerBlock$Type<(T)>;
}}
declare module "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableModemVariant" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $CableModemVariant extends $Enum<($CableModemVariant)> implements $StringRepresentable {
static readonly "None": $CableModemVariant
static readonly "DownOff": $CableModemVariant
static readonly "UpOff": $CableModemVariant
static readonly "NorthOff": $CableModemVariant
static readonly "SouthOff": $CableModemVariant
static readonly "WestOff": $CableModemVariant
static readonly "EastOff": $CableModemVariant
static readonly "DownOn": $CableModemVariant
static readonly "UpOn": $CableModemVariant
static readonly "NorthOn": $CableModemVariant
static readonly "SouthOn": $CableModemVariant
static readonly "WestOn": $CableModemVariant
static readonly "EastOn": $CableModemVariant
static readonly "DownOffPeripheral": $CableModemVariant
static readonly "UpOffPeripheral": $CableModemVariant
static readonly "NorthOffPeripheral": $CableModemVariant
static readonly "SouthOffPeripheral": $CableModemVariant
static readonly "WestOffPeripheral": $CableModemVariant
static readonly "EastOffPeripheral": $CableModemVariant
static readonly "DownOnPeripheral": $CableModemVariant
static readonly "UpOnPeripheral": $CableModemVariant
static readonly "NorthOnPeripheral": $CableModemVariant
static readonly "SouthOnPeripheral": $CableModemVariant
static readonly "WestOnPeripheral": $CableModemVariant
static readonly "EastOnPeripheral": $CableModemVariant


public "toString"(): string
public static "values"(): ($CableModemVariant)[]
public static "valueOf"(arg0: string): $CableModemVariant
public static "from"(arg0: $Direction$Type): $CableModemVariant
public static "from"(arg0: $Direction$Type, arg1: boolean, arg2: boolean): $CableModemVariant
public "getFacing"(): $Direction
public "getSerializedName"(): string
public "isPeripheralOn"(): boolean
public "isModemOn"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "facing"(): $Direction
get "serializedName"(): string
get "peripheralOn"(): boolean
get "modemOn"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableModemVariant$Type = (("eastonperipheral") | ("westonperipheral") | ("westoff") | ("southoffperipheral") | ("none") | ("upon") | ("southonperipheral") | ("upoff") | ("southon") | ("downonperipheral") | ("downoff") | ("upoffperipheral") | ("weston") | ("eastoffperipheral") | ("northoffperipheral") | ("uponperipheral") | ("northon") | ("downoffperipheral") | ("eastoff") | ("northonperipheral") | ("southoff") | ("downon") | ("easton") | ("northoff") | ("westoffperipheral")) | ($CableModemVariant);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableModemVariant_ = $CableModemVariant$Type;
}}
declare module "packages/dan200/computercraft/api/turtle/$ITurtleAccess" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$UpgradeData, $UpgradeData$Type} from "packages/dan200/computercraft/api/upgrades/$UpgradeData"
import {$TurtleSide, $TurtleSide$Type} from "packages/dan200/computercraft/api/turtle/$TurtleSide"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$TurtleAnimation, $TurtleAnimation$Type} from "packages/dan200/computercraft/api/turtle/$TurtleAnimation"
import {$TurtleCommand, $TurtleCommand$Type} from "packages/dan200/computercraft/api/turtle/$TurtleCommand"
import {$ITurtleUpgrade, $ITurtleUpgrade$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleUpgrade"
import {$GameProfile, $GameProfile$Type} from "packages/com/mojang/authlib/$GameProfile"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $ITurtleAccess {

 "getLevel"(): $Level
 "getPosition"(): $BlockPos
 "getSelectedSlot"(): integer
 "getOwningPlayer"(): $GameProfile
 "isFuelNeeded"(): boolean
 "executeCommand"(arg0: $TurtleCommand$Type): $MethodResult
 "addFuel"(arg0: integer): void
 "getInventory"(): $Container
 "playAnimation"(arg0: $TurtleAnimation$Type): void
 "getDirection"(): $Direction
 "consumeFuel"(arg0: integer): boolean
 "isRemoved"(): boolean
 "getColour"(): integer
 "getUpgrade"(arg0: $TurtleSide$Type): $ITurtleUpgrade
 "setColour"(arg0: integer): void
/**
 * 
 * @deprecated
 */
 "setUpgrade"(arg0: $TurtleSide$Type, arg1: $ITurtleUpgrade$Type): void
 "setSelectedSlot"(arg0: integer): void
 "setDirection"(arg0: $Direction$Type): void
 "getPeripheral"(arg0: $TurtleSide$Type): $IPeripheral
 "getUpgradeWithData"(arg0: $TurtleSide$Type): $UpgradeData<($ITurtleUpgrade)>
 "getFuelLevel"(): integer
 "setFuelLevel"(arg0: integer): void
 "setUpgradeWithData"(arg0: $TurtleSide$Type, arg1: $UpgradeData$Type<($ITurtleUpgrade$Type)>): void
 "getFuelLimit"(): integer
 "updateUpgradeNBTData"(arg0: $TurtleSide$Type): void
 "getUpgradeNBTData"(arg0: $TurtleSide$Type): $CompoundTag
 "teleportTo"(arg0: $Level$Type, arg1: $BlockPos$Type): boolean
}

export namespace $ITurtleAccess {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITurtleAccess$Type = ($ITurtleAccess);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITurtleAccess_ = $ITurtleAccess$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$LuaTask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LuaTask {

 "execute"(): (any)[]

(): (any)[]
}

export namespace $LuaTask {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTask$Type = ($LuaTask);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaTask_ = $LuaTask$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$IArguments" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$LuaTable, $LuaTable$Type} from "packages/dan200/computercraft/api/lua/$LuaTable"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IArguments {

 "get"(arg0: integer): any
 "getBoolean"(arg0: integer): boolean
 "getInt"(arg0: integer): integer
 "getLong"(arg0: integer): long
 "getDouble"(arg0: integer): double
 "getBytes"(arg0: integer): $ByteBuffer
 "count"(): integer
 "getType"(arg0: integer): string
 "getTable"(arg0: integer): $Map<(any), (any)>
 "drop"(arg0: integer): $IArguments
 "getAll"(): (any)[]
 "getString"(arg0: integer): string
 "getEnum"<T extends $Enum<(T)>>(arg0: integer, arg1: $Class$Type<(T)>): T
 "escapes"(): $IArguments
 "optString"(arg0: integer): $Optional<(string)>
 "optString"(arg0: integer, arg1: string): string
 "optInt"(arg0: integer): $Optional<(integer)>
 "optInt"(arg0: integer, arg1: integer): integer
 "getBytesCoerced"(arg0: integer): $ByteBuffer
 "optEnum"<T extends $Enum<(T)>>(arg0: integer, arg1: $Class$Type<(T)>): $Optional<(T)>
 "getStringCoerced"(arg0: integer): string
 "getFiniteDouble"(arg0: integer): double
 "getTableUnsafe"(arg0: integer): $LuaTable<(any), (any)>
 "optFiniteDouble"(arg0: integer): $Optional<(double)>
 "optFiniteDouble"(arg0: integer, arg1: double): double
 "optTableUnsafe"(arg0: integer): $Optional<($LuaTable<(any), (any)>)>
 "optBytes"(arg0: integer): $Optional<($ByteBuffer)>
 "optBoolean"(arg0: integer): $Optional<(boolean)>
 "optBoolean"(arg0: integer, arg1: boolean): boolean
 "optLong"(arg0: integer, arg1: long): long
 "optLong"(arg0: integer): $Optional<(long)>
 "optTable"(arg0: integer, arg1: $Map$Type<(any), (any)>): $Map<(any), (any)>
 "optTable"(arg0: integer): $Optional<($Map<(any), (any)>)>
 "optDouble"(arg0: integer): $Optional<(double)>
 "optDouble"(arg0: integer, arg1: double): double
}

export namespace $IArguments {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArguments$Type = ($IArguments);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IArguments_ = $IArguments$Type;
}}
declare module "packages/dan200/computercraft/api/turtle/$TurtleUpgradeType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TurtleUpgradeType extends $Enum<($TurtleUpgradeType)> {
static readonly "TOOL": $TurtleUpgradeType
static readonly "PERIPHERAL": $TurtleUpgradeType
static readonly "BOTH": $TurtleUpgradeType


public static "values"(): ($TurtleUpgradeType)[]
public static "valueOf"(arg0: string): $TurtleUpgradeType
public "isTool"(): boolean
public "isPeripheral"(): boolean
get "tool"(): boolean
get "peripheral"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleUpgradeType$Type = (("peripheral") | ("tool") | ("both")) | ($TurtleUpgradeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleUpgradeType_ = $TurtleUpgradeType$Type;
}}
declare module "packages/dan200/computercraft/core/terminal/$TextBuffer" {
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"

export class $TextBuffer {

constructor(arg0: character, arg1: integer)
constructor(arg0: string)

public "length"(): integer
public "toString"(): string
public "charAt"(arg0: integer): character
public "fill"(arg0: character): void
public "fill"(arg0: character, arg1: integer, arg2: integer): void
public "write"(arg0: $TextBuffer$Type): void
public "write"(arg0: string, arg1: integer): void
public "write"(arg0: string): void
public "write"(arg0: $ByteBuffer$Type, arg1: integer): void
public "setChar"(arg0: integer, arg1: character): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBuffer$Type = ($TextBuffer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TextBuffer_ = $TextBuffer$Type;
}}
declare module "packages/dan200/computercraft/shared/common/$HorizontalContainerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $HorizontalContainerBlock extends $BaseEntityBlock {
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalContainerBlock$Type = ($HorizontalContainerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HorizontalContainerBlock_ = $HorizontalContainerBlock$Type;
}}
declare module "packages/dan200/computercraft/shared/media/items/$PrintoutItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$PrintoutItem$Type, $PrintoutItem$Type$Type} from "packages/dan200/computercraft/shared/media/items/$PrintoutItem$Type"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PrintoutItem extends $Item {
static readonly "LINES_PER_PAGE": integer
static readonly "LINE_MAX_LENGTH": integer
static readonly "MAX_PAGES": integer
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

constructor(arg0: $Item$Properties$Type, arg1: $PrintoutItem$Type$Type)

public "getType"(): $PrintoutItem$Type
public static "getText"(arg0: $ItemStack$Type): (string)[]
public static "getTitle"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "getColours"(arg0: $ItemStack$Type): (string)[]
public static "createMultipleFromTitleAndText"(arg0: string, arg1: (string)[], arg2: (string)[]): $ItemStack
public static "createBookFromTitleAndText"(arg0: string, arg1: (string)[], arg2: (string)[]): $ItemStack
public static "getPageCount"(arg0: $ItemStack$Type): integer
public static "createSingleFromTitleAndText"(arg0: string, arg1: (string)[], arg2: (string)[]): $ItemStack
get "type"(): $PrintoutItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PrintoutItem$Type = ($PrintoutItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PrintoutItem_ = $PrintoutItem$Type;
}}
declare module "packages/dan200/computercraft/shared/turtle/blocks/$TurtleBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$TurtleBlockEntity, $TurtleBlockEntity$Type} from "packages/dan200/computercraft/shared/turtle/blocks/$TurtleBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$AbstractComputerBlock, $AbstractComputerBlock$Type} from "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlock"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/dan200/computercraft/shared/platform/$RegistryEntry"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $TurtleBlock extends $AbstractComputerBlock<($TurtleBlockEntity)> implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "IMMUNE_EXPLOSION_RESISTANCE": float
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryEntry$Type<($BlockEntityType$Type<($TurtleBlockEntity$Type)>)>)

public "getTicker"<U extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(U)>): $BlockEntityTicker<(U)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getFluidState"(arg0: $BlockState$Type): $FluidState
/**
 * 
 * @deprecated
 */
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleBlock$Type = ($TurtleBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleBlock_ = $TurtleBlock$Type;
}}
declare module "packages/dan200/computercraft/core/computer/$TimeoutState" {
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $TimeoutState {
static readonly "BASE_TIMEOUT": long
static readonly "TIMEOUT": long
static readonly "ABORT_TIMEOUT": long
static readonly "ABORT_MESSAGE": string

constructor()

public "refresh"(): void
public "removeListener"(arg0: $Runnable$Type): void
public "addListener"(arg0: $Runnable$Type): void
public "isPaused"(): boolean
public "isSoftAborted"(): boolean
public "isHardAborted"(): boolean
get "paused"(): boolean
get "softAborted"(): boolean
get "hardAborted"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TimeoutState$Type = ($TimeoutState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TimeoutState_ = $TimeoutState$Type;
}}
declare module "packages/dan200/computercraft/core/$ComputerContext$Builder" {
import {$GenericMethod, $GenericMethod$Type} from "packages/dan200/computercraft/core/asm/$GenericMethod"
import {$ILuaAPIFactory, $ILuaAPIFactory$Type} from "packages/dan200/computercraft/api/lua/$ILuaAPIFactory"
import {$ILuaMachine$Factory, $ILuaMachine$Factory$Type} from "packages/dan200/computercraft/core/lua/$ILuaMachine$Factory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MainThreadScheduler, $MainThreadScheduler$Type} from "packages/dan200/computercraft/core/computer/mainthread/$MainThreadScheduler"
import {$ComputerContext, $ComputerContext$Type} from "packages/dan200/computercraft/core/$ComputerContext"
import {$ComputerScheduler, $ComputerScheduler$Type} from "packages/dan200/computercraft/core/computer/computerthread/$ComputerScheduler"

export class $ComputerContext$Builder {


public "build"(): $ComputerContext
public "computerThreads"(arg0: integer): $ComputerContext$Builder
public "apiFactories"(arg0: $Collection$Type<($ILuaAPIFactory$Type)>): $ComputerContext$Builder
public "luaFactory"(arg0: $ILuaMachine$Factory$Type): $ComputerContext$Builder
public "genericMethods"(arg0: $Collection$Type<($GenericMethod$Type)>): $ComputerContext$Builder
public "mainThreadScheduler"(arg0: $MainThreadScheduler$Type): $ComputerContext$Builder
public "computerScheduler"(arg0: $ComputerScheduler$Type): $ComputerContext$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerContext$Builder$Type = ($ComputerContext$Builder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerContext$Builder_ = $ComputerContext$Builder$Type;
}}
declare module "packages/dan200/computercraft/shared/command/arguments/$RepeatArgumentType" {
import {$Suggestions, $Suggestions$Type} from "packages/com/mojang/brigadier/suggestion/$Suggestions"
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SuggestionsBuilder, $SuggestionsBuilder$Type} from "packages/com/mojang/brigadier/suggestion/$SuggestionsBuilder"
import {$ArgumentType, $ArgumentType$Type} from "packages/com/mojang/brigadier/arguments/$ArgumentType"
import {$CommandContext, $CommandContext$Type} from "packages/com/mojang/brigadier/context/$CommandContext"

export class $RepeatArgumentType<T, U> implements $ArgumentType<($List<(T)>)> {


public static "some"<T>(arg0: $ArgumentType$Type<(T)>, arg1: $SimpleCommandExceptionType$Type): $RepeatArgumentType<(T), (T)>
public "getExamples"(): $Collection<(string)>
public "listSuggestions"<S>(arg0: $CommandContext$Type<(S)>, arg1: $SuggestionsBuilder$Type): $CompletableFuture<($Suggestions)>
public static "someFlat"<T>(arg0: $ArgumentType$Type<($List$Type<(T)>)>, arg1: $SimpleCommandExceptionType$Type): $RepeatArgumentType<(T), ($List<(T)>)>
get "examples"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$Type<T, U> = ($RepeatArgumentType<(T), (U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatArgumentType_<T, U> = $RepeatArgumentType$Type<(T), (U)>;
}}
declare module "packages/dan200/computercraft/core/lua/$MachineEnvironment" {
import {$MethodSupplier, $MethodSupplier$Type} from "packages/dan200/computercraft/core/methods/$MethodSupplier"
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$TimeoutState, $TimeoutState$Type} from "packages/dan200/computercraft/core/computer/$TimeoutState"
import {$LuaMethod, $LuaMethod$Type} from "packages/dan200/computercraft/core/methods/$LuaMethod"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"
import {$ILuaAPI, $ILuaAPI$Type} from "packages/dan200/computercraft/api/lua/$ILuaAPI"

export class $MachineEnvironment extends $Record {

constructor(context: $ILuaContext$Type, metrics: $MetricsObserver$Type, timeout: $TimeoutState$Type, apis: $Iterable$Type<($ILuaAPI$Type)>, luaMethods: $MethodSupplier$Type<($LuaMethod$Type)>, hostString: string)

public "context"(): $ILuaContext
public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "timeout"(): $TimeoutState
public "hostString"(): string
public "metrics"(): $MetricsObserver
public "apis"(): $Iterable<($ILuaAPI)>
public "luaMethods"(): $MethodSupplier<($LuaMethod)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineEnvironment$Type = ($MachineEnvironment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MachineEnvironment_ = $MachineEnvironment$Type;
}}
declare module "packages/dan200/computercraft/api/peripheral/$IDynamicPeripheral" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"

export interface $IDynamicPeripheral extends $IPeripheral {

 "getMethodNames"(): (string)[]
 "callMethod"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: integer, arg3: $IArguments$Type): $MethodResult
 "equals"(arg0: $IPeripheral$Type): boolean
 "getType"(): string
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$Type): void
 "detach"(arg0: $IComputerAccess$Type): void
 "getAdditionalTypes"(): $Set<(string)>
}

export namespace $IDynamicPeripheral {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicPeripheral$Type = ($IDynamicPeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDynamicPeripheral_ = $IDynamicPeripheral$Type;
}}
declare module "packages/dan200/computercraft/core/computer/$GlobalEnvironment" {
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$InputStream, $InputStream$Type} from "packages/java/io/$InputStream"

export interface $GlobalEnvironment {

 "getHostString"(): string
 "createResourceMount"(arg0: string, arg1: string): $Mount
 "getUserAgent"(): string
 "createResourceFile"(arg0: string, arg1: string): $InputStream
}

export namespace $GlobalEnvironment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlobalEnvironment$Type = ($GlobalEnvironment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GlobalEnvironment_ = $GlobalEnvironment$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/monitor/$MonitorEdgeState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $MonitorEdgeState extends $Enum<($MonitorEdgeState)> implements $StringRepresentable {
static readonly "NONE": $MonitorEdgeState
static readonly "L": $MonitorEdgeState
static readonly "R": $MonitorEdgeState
static readonly "LR": $MonitorEdgeState
static readonly "U": $MonitorEdgeState
static readonly "D": $MonitorEdgeState
static readonly "UD": $MonitorEdgeState
static readonly "RD": $MonitorEdgeState
static readonly "LD": $MonitorEdgeState
static readonly "RU": $MonitorEdgeState
static readonly "LU": $MonitorEdgeState
static readonly "LRD": $MonitorEdgeState
static readonly "RUD": $MonitorEdgeState
static readonly "LUD": $MonitorEdgeState
static readonly "LRU": $MonitorEdgeState
static readonly "LRUD": $MonitorEdgeState


public "toString"(): string
public static "values"(): ($MonitorEdgeState)[]
public static "valueOf"(arg0: string): $MonitorEdgeState
public "getSerializedName"(): string
public static "fromConnections"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): $MonitorEdgeState
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorEdgeState$Type = (("rud") | ("ru") | ("d") | ("lr") | ("lrud") | ("lu") | ("none") | ("l") | ("lru") | ("ud") | ("r") | ("rd") | ("u") | ("ld") | ("lud") | ("lrd")) | ($MonitorEdgeState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorEdgeState_ = $MonitorEdgeState$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/items/$CommandComputerItem" {
import {$ComputerItem, $ComputerItem$Type} from "packages/dan200/computercraft/shared/computer/items/$ComputerItem"
import {$ComputerBlock, $ComputerBlock$Type} from "packages/dan200/computercraft/shared/computer/blocks/$ComputerBlock"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommandComputerItem extends $ComputerItem {
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

constructor(arg0: $ComputerBlock$Type<(any)>, arg1: $Item$Properties$Type)

public "createDataMount"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): $Mount
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommandComputerItem$Type = ($CommandComputerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommandComputerItem_ = $CommandComputerItem$Type;
}}
declare module "packages/dan200/computercraft/core/computer/computerthread/$ComputerScheduler$Worker" {
import {$StringBuilder, $StringBuilder$Type} from "packages/java/lang/$StringBuilder"

export interface $ComputerScheduler$Worker {

 "unload"(): void
 "work"(): void
 "writeState"(arg0: $StringBuilder$Type): void
 "getComputerID"(): integer
 "abortWithError"(): void
 "abortWithTimeout"(): void
}

export namespace $ComputerScheduler$Worker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerScheduler$Worker$Type = ($ComputerScheduler$Worker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerScheduler$Worker_ = $ComputerScheduler$Worker$Type;
}}
declare module "packages/dan200/computercraft/api/peripheral/$PeripheralType" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"

export class $PeripheralType {

constructor(arg0: string, arg1: $Set$Type<(string)>)

public static "ofType"(arg0: string, ...arg1: (string)[]): $PeripheralType
public static "ofType"(arg0: string, arg1: $Collection$Type<(string)>): $PeripheralType
public static "ofType"(arg0: string): $PeripheralType
public static "untyped"(): $PeripheralType
public "getAdditionalTypes"(): $Set<(string)>
public "getPrimaryType"(): string
public static "ofAdditional"(...arg0: (string)[]): $PeripheralType
public static "ofAdditional"(arg0: $Collection$Type<(string)>): $PeripheralType
get "additionalTypes"(): $Set<(string)>
get "primaryType"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralType$Type = ($PeripheralType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PeripheralType_ = $PeripheralType$Type;
}}
declare module "packages/dan200/computercraft/shared/recipe/$ShapedTemplate" {
import {$ShapedRecipe, $ShapedRecipe$Type} from "packages/net/minecraft/world/item/crafting/$ShapedRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export class $ShapedTemplate extends $Record {

constructor(width: integer, height: integer, ingredients: $NonNullList$Type<($Ingredient$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "of"(arg0: $ShapedRecipe$Type): $ShapedTemplate
public "width"(): integer
public static "fromJson"(arg0: $JsonObject$Type): $ShapedTemplate
public "height"(): integer
public "ingredients"(): $NonNullList<($Ingredient)>
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $ShapedTemplate
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedTemplate$Type = ($ShapedTemplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ShapedTemplate_ = $ShapedTemplate$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$IComputerSystem" {
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$WorkMonitor, $WorkMonitor$Type} from "packages/dan200/computercraft/api/peripheral/$WorkMonitor"
import {$WritableMount, $WritableMount$Type} from "packages/dan200/computercraft/api/filesystem/$WritableMount"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IComputerSystem extends $IComputerAccess {

 "getLabel"(): string
 "getID"(): integer
 "unmount"(arg0: string): void
 "getAvailablePeripheral"(arg0: string): $IPeripheral
 "mount"(arg0: string, arg1: $Mount$Type): string
 "mount"(arg0: string, arg1: $Mount$Type, arg2: string): string
 "queueEvent"(arg0: string, ...arg1: (any)[]): void
 "getAttachmentName"(): string
 "mountWritable"(arg0: string, arg1: $WritableMount$Type, arg2: string): string
 "mountWritable"(arg0: string, arg1: $WritableMount$Type): string
 "getAvailablePeripherals"(): $Map<(string), ($IPeripheral)>
 "getMainThreadMonitor"(): $WorkMonitor
}

export namespace $IComputerSystem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComputerSystem$Type = ($IComputerSystem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComputerSystem_ = $IComputerSystem$Type;
}}
declare module "packages/dan200/computercraft/shared/turtle/items/$TurtleItem" {
import {$IColouredItem, $IColouredItem$Type} from "packages/dan200/computercraft/shared/common/$IColouredItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CauldronInteraction, $CauldronInteraction$Type} from "packages/net/minecraft/core/cauldron/$CauldronInteraction"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$UpgradeData, $UpgradeData$Type} from "packages/dan200/computercraft/api/upgrades/$UpgradeData"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TurtleSide, $TurtleSide$Type} from "packages/dan200/computercraft/api/turtle/$TurtleSide"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ITurtleUpgrade, $ITurtleUpgrade$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleUpgrade"
import {$TurtleBlock, $TurtleBlock$Type} from "packages/dan200/computercraft/shared/turtle/blocks/$TurtleBlock"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractComputerItem, $AbstractComputerItem$Type} from "packages/dan200/computercraft/shared/computer/items/$AbstractComputerItem"

export class $TurtleItem extends $AbstractComputerItem implements $IColouredItem {
static readonly "CAULDRON_INTERACTION": $CauldronInteraction
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

constructor(arg0: $TurtleBlock$Type, arg1: $Item$Properties$Type)

public "create"(arg0: integer, arg1: string, arg2: integer, arg3: $UpgradeData$Type<($ITurtleUpgrade$Type)>, arg4: $UpgradeData$Type<($ITurtleUpgrade$Type)>, arg5: integer, arg6: $ResourceLocation$Type): $ItemStack
public "getName"(arg0: $ItemStack$Type): $Component
public "getCreatorModId"(arg0: $ItemStack$Type): string
public "getUpgrade"(arg0: $ItemStack$Type, arg1: $TurtleSide$Type): $ITurtleUpgrade
public "getOverlay"(arg0: $ItemStack$Type): $ResourceLocation
public "getUpgradeWithData"(arg0: $ItemStack$Type, arg1: $TurtleSide$Type): $UpgradeData<($ITurtleUpgrade)>
public "getFuelLevel"(arg0: $ItemStack$Type): integer
public "changeItem"(arg0: $ItemStack$Type, arg1: $Item$Type): $ItemStack
public "getColour"(arg0: $ItemStack$Type): integer
public static "getColourBasic"(arg0: $ItemStack$Type): integer
public static "setColourBasic"(arg0: $ItemStack$Type, arg1: integer): void
public "withColour"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleItem$Type = ($TurtleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleItem_ = $TurtleItem$Type;
}}
declare module "packages/dan200/computercraft/shared/common/$IBundledRedstoneBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $IBundledRedstoneBlock {

 "getBundledRedstoneOutput"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
}

export namespace $IBundledRedstoneBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBundledRedstoneBlock$Type = ($IBundledRedstoneBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBundledRedstoneBlock_ = $IBundledRedstoneBlock$Type;
}}
declare module "packages/dan200/computercraft/api/lua/$GenericSource" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $GenericSource {

 "id"(): string

(): string
}

export namespace $GenericSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericSource$Type = ($GenericSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericSource_ = $GenericSource$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/items/$ComputerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ComputerBlock, $ComputerBlock$Type} from "packages/dan200/computercraft/shared/computer/blocks/$ComputerBlock"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$AbstractComputerItem, $AbstractComputerItem$Type} from "packages/dan200/computercraft/shared/computer/items/$AbstractComputerItem"

export class $ComputerItem extends $AbstractComputerItem {
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

constructor(arg0: $ComputerBlock$Type<(any)>, arg1: $Item$Properties$Type)

public "create"(arg0: integer, arg1: string): $ItemStack
public "changeItem"(arg0: $ItemStack$Type, arg1: $Item$Type): $ItemStack
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerItem$Type = ($ComputerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerItem_ = $ComputerItem$Type;
}}
declare module "packages/dan200/computercraft/api/turtle/$TurtleSide" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $TurtleSide extends $Enum<($TurtleSide)> {
static readonly "LEFT": $TurtleSide
static readonly "RIGHT": $TurtleSide


public static "values"(): ($TurtleSide)[]
public static "valueOf"(arg0: string): $TurtleSide
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleSide$Type = (("left") | ("right")) | ($TurtleSide);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleSide_ = $TurtleSide$Type;
}}
declare module "packages/dan200/computercraft/core/computer/mainthread/$MainThreadScheduler" {
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$MainThreadScheduler$Executor, $MainThreadScheduler$Executor$Type} from "packages/dan200/computercraft/core/computer/mainthread/$MainThreadScheduler$Executor"

export interface $MainThreadScheduler {

 "createExecutor"(arg0: $MetricsObserver$Type): $MainThreadScheduler$Executor

(arg0: $MetricsObserver$Type): $MainThreadScheduler$Executor
}

export namespace $MainThreadScheduler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MainThreadScheduler$Type = ($MainThreadScheduler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MainThreadScheduler_ = $MainThreadScheduler$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/items/$AbstractComputerItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IComputerItem, $IComputerItem$Type} from "packages/dan200/computercraft/shared/computer/items/$IComputerItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$AbstractComputerBlock, $AbstractComputerBlock$Type} from "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlock"
import {$IMedia, $IMedia$Type} from "packages/dan200/computercraft/api/media/$IMedia"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractComputerItem extends $BlockItem implements $IComputerItem, $IMedia {
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

constructor(arg0: $AbstractComputerBlock$Type<(any)>, arg1: $Item$Properties$Type)

public "getLabel"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "setLabel"(arg0: $ItemStack$Type, arg1: string): boolean
public "createDataMount"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): $Mount
public "getComputerID"(arg0: $ItemStack$Type): integer
public "changeItem"(arg0: $ItemStack$Type, arg1: $Item$Type): $ItemStack
public "getAudio"(arg0: $ItemStack$Type): $SoundEvent
public "getAudioTitle"(arg0: $ItemStack$Type): string
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractComputerItem$Type = ($AbstractComputerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractComputerItem_ = $AbstractComputerItem$Type;
}}
declare module "packages/dan200/computercraft/core/apis/$IAPIEnvironment$IPeripheralChangeListener" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$ComputerSide, $ComputerSide$Type} from "packages/dan200/computercraft/core/computer/$ComputerSide"

export interface $IAPIEnvironment$IPeripheralChangeListener {

 "onPeripheralChanged"(arg0: $ComputerSide$Type, arg1: $IPeripheral$Type): void

(arg0: $ComputerSide$Type, arg1: $IPeripheral$Type): void
}

export namespace $IAPIEnvironment$IPeripheralChangeListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAPIEnvironment$IPeripheralChangeListener$Type = ($IAPIEnvironment$IPeripheralChangeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAPIEnvironment$IPeripheralChangeListener_ = $IAPIEnvironment$IPeripheralChangeListener$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/items/$IComputerItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IComputerItem {

 "getLabel"(arg0: $ItemStack$Type): string
 "getComputerID"(arg0: $ItemStack$Type): integer
 "changeItem"(arg0: $ItemStack$Type, arg1: $Item$Type): $ItemStack

(arg0: $ItemStack$Type): string
}

export namespace $IComputerItem {
const NBT_ID: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComputerItem$Type = ($IComputerItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComputerItem_ = $IComputerItem$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/monitor/$MonitorBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MonitorEdgeState, $MonitorEdgeState$Type} from "packages/dan200/computercraft/shared/peripheral/monitor/$MonitorEdgeState"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/dan200/computercraft/shared/platform/$RegistryEntry"

export class $MonitorBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "ORIENTATION": $DirectionProperty
static readonly "FACING": $DirectionProperty
static readonly "STATE": $EnumProperty<($MonitorEdgeState)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryEntry$Type<(any)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
/**
 * 
 * @deprecated
 */
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
/**
 * 
 * @deprecated
 */
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MonitorBlock$Type = ($MonitorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MonitorBlock_ = $MonitorBlock$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$IComputerBlockEntity" {
import {$ComputerFamily, $ComputerFamily$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerFamily"

export interface $IComputerBlockEntity {

 "getFamily"(): $ComputerFamily
 "getLabel"(): string
 "setLabel"(arg0: string): void
 "getComputerID"(): integer
 "setComputerID"(arg0: integer): void
}

export namespace $IComputerBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComputerBlockEntity$Type = ($IComputerBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IComputerBlockEntity_ = $IComputerBlockEntity$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/speaker/$SpeakerBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SpeakerBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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

public "getTicker"<U extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(U)>): $BlockEntityTicker<(U)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeakerBlock$Type = ($SpeakerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpeakerBlock_ = $SpeakerBlock$Type;
}}
declare module "packages/dan200/computercraft/shared/platform/$RegistryEntry" {
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $RegistryEntry<U> extends $Supplier<(U)> {

 "id"(): $ResourceLocation
 "get"(): U
}

export namespace $RegistryEntry {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$Type<U> = ($RegistryEntry<(U)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegistryEntry_<U> = $RegistryEntry$Type<(U)>;
}}
declare module "packages/dan200/computercraft/shared/computer/core/$InputHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $InputHandler {

 "shutdown"(): void
 "reboot"(): void
 "turnOn"(): void
 "mouseDrag"(arg0: integer, arg1: integer, arg2: integer): void
 "mouseUp"(arg0: integer, arg1: integer, arg2: integer): void
 "keyDown"(arg0: integer, arg1: boolean): void
 "keyUp"(arg0: integer): void
 "queueEvent"(arg0: string, arg1: (any)[]): void
 "queueEvent"(arg0: string): void
 "mouseClick"(arg0: integer, arg1: integer, arg2: integer): void
 "mouseScroll"(arg0: integer, arg1: integer, arg2: integer): void
}

export namespace $InputHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InputHandler$Type = ($InputHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InputHandler_ = $InputHandler$Type;
}}
declare module "packages/dan200/computercraft/core/$ComputerContext" {
import {$MethodSupplier, $MethodSupplier$Type} from "packages/dan200/computercraft/core/methods/$MethodSupplier"
import {$ILuaAPIFactory, $ILuaAPIFactory$Type} from "packages/dan200/computercraft/api/lua/$ILuaAPIFactory"
import {$ILuaMachine$Factory, $ILuaMachine$Factory$Type} from "packages/dan200/computercraft/core/lua/$ILuaMachine$Factory"
import {$GlobalEnvironment, $GlobalEnvironment$Type} from "packages/dan200/computercraft/core/computer/$GlobalEnvironment"
import {$LuaMethod, $LuaMethod$Type} from "packages/dan200/computercraft/core/methods/$LuaMethod"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PeripheralMethod, $PeripheralMethod$Type} from "packages/dan200/computercraft/core/methods/$PeripheralMethod"
import {$MainThreadScheduler, $MainThreadScheduler$Type} from "packages/dan200/computercraft/core/computer/mainthread/$MainThreadScheduler"
import {$TimeUnit, $TimeUnit$Type} from "packages/java/util/concurrent/$TimeUnit"
import {$ComputerScheduler, $ComputerScheduler$Type} from "packages/dan200/computercraft/core/computer/computerthread/$ComputerScheduler"
import {$ComputerContext$Builder, $ComputerContext$Builder$Type} from "packages/dan200/computercraft/core/$ComputerContext$Builder"

export class $ComputerContext {


public static "builder"(arg0: $GlobalEnvironment$Type): $ComputerContext$Builder
public "close"(arg0: long, arg1: $TimeUnit$Type): boolean
public "peripheralMethods"(): $MethodSupplier<($PeripheralMethod)>
public "luaMethods"(): $MethodSupplier<($LuaMethod)>
public "apiFactories"(): $List<($ILuaAPIFactory)>
public "luaFactory"(): $ILuaMachine$Factory
public "mainThreadScheduler"(): $MainThreadScheduler
public "globalEnvironment"(): $GlobalEnvironment
public "ensureClosed"(arg0: long, arg1: $TimeUnit$Type): void
public "computerScheduler"(): $ComputerScheduler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerContext$Type = ($ComputerContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerContext_ = $ComputerContext$Type;
}}
declare module "packages/dan200/computercraft/shared/media/items/$DiskItem" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$IColouredItem, $IColouredItem$Type} from "packages/dan200/computercraft/shared/common/$IColouredItem"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Mount, $Mount$Type} from "packages/dan200/computercraft/api/filesystem/$Mount"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IMedia, $IMedia$Type} from "packages/dan200/computercraft/api/media/$IMedia"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DiskItem extends $Item implements $IMedia, $IColouredItem {
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

public "getLabel"(arg0: $ItemStack$Type): string
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "getColour"(arg0: $ItemStack$Type): integer
public "setLabel"(arg0: $ItemStack$Type, arg1: string): boolean
public static "getDiskID"(arg0: $ItemStack$Type): integer
public "createDataMount"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): $Mount
public static "createFromIDAndColour"(arg0: integer, arg1: string, arg2: integer): $ItemStack
public "getAudio"(arg0: $ItemStack$Type): $SoundEvent
public "getAudioTitle"(arg0: $ItemStack$Type): string
public static "getColourBasic"(arg0: $ItemStack$Type): integer
public static "setColourBasic"(arg0: $ItemStack$Type, arg1: integer): void
public "withColour"(arg0: $ItemStack$Type, arg1: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskItem$Type = ($DiskItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskItem_ = $DiskItem$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/blocks/$ComputerBlock" {
import {$ComputerBlockEntity, $ComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$ComputerBlockEntity"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$ComputerState, $ComputerState$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AbstractComputerBlock, $AbstractComputerBlock$Type} from "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlock"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/dan200/computercraft/shared/platform/$RegistryEntry"

export class $ComputerBlock<T extends $ComputerBlockEntity> extends $AbstractComputerBlock<(T)> {
static readonly "STATE": $EnumProperty<($ComputerState)>
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryEntry$Type<($BlockEntityType$Type<(T)>)>)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerBlock$Type<T> = ($ComputerBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerBlock_<T> = $ComputerBlock$Type<(T)>;
}}
declare module "packages/dan200/computercraft/core/computer/$Environment" {
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Metric$Counter, $Metric$Counter$Type} from "packages/dan200/computercraft/core/metrics/$Metric$Counter"
import {$ComputerSide, $ComputerSide$Type} from "packages/dan200/computercraft/core/computer/$ComputerSide"
import {$Metric$Event, $Metric$Event$Type} from "packages/dan200/computercraft/core/metrics/$Metric$Event"
import {$IAPIEnvironment, $IAPIEnvironment$Type} from "packages/dan200/computercraft/core/apis/$IAPIEnvironment"
import {$OperationTimer, $OperationTimer$Type} from "packages/dan200/computercraft/core/metrics/$OperationTimer"
import {$FileSystem, $FileSystem$Type} from "packages/dan200/computercraft/core/filesystem/$FileSystem"
import {$Terminal, $Terminal$Type} from "packages/dan200/computercraft/core/terminal/$Terminal"
import {$WorkMonitor, $WorkMonitor$Type} from "packages/dan200/computercraft/api/peripheral/$WorkMonitor"
import {$ComputerEnvironment, $ComputerEnvironment$Type} from "packages/dan200/computercraft/core/computer/$ComputerEnvironment"
import {$GlobalEnvironment, $GlobalEnvironment$Type} from "packages/dan200/computercraft/core/computer/$GlobalEnvironment"
import {$IAPIEnvironment$IPeripheralChangeListener, $IAPIEnvironment$IPeripheralChangeListener$Type} from "packages/dan200/computercraft/core/apis/$IAPIEnvironment$IPeripheralChangeListener"

export class $Environment implements $IAPIEnvironment {


public "shutdown"(): void
public "getFileSystem"(): $FileSystem
public "metrics"(): $MetricsObserver
public "getInput"(arg0: $ComputerSide$Type): integer
public "getLabel"(): string
public "getTerminal"(): $Terminal
public "reboot"(): void
public "setOutput"(arg0: $ComputerSide$Type, arg1: integer): void
public "getOutput"(arg0: $ComputerSide$Type): integer
public "setPeripheral"(arg0: $ComputerSide$Type, arg1: $IPeripheral$Type): void
public "setRedstoneInput"(arg0: $ComputerSide$Type, arg1: integer): void
public "getPeripheral"(arg0: $ComputerSide$Type): $IPeripheral
public "queueEvent"(arg0: string, ...arg1: (any)[]): void
public "cancelTimer"(arg0: integer): void
public "setLabel"(arg0: string): void
public "getComputerID"(): integer
public "getExternalBundledRedstoneOutput"(arg0: $ComputerSide$Type): integer
public "getExternalRedstoneOutput"(arg0: $ComputerSide$Type): integer
public "setBundledRedstoneInput"(arg0: $ComputerSide$Type, arg1: integer): void
public "startTimer"(arg0: long): integer
public "setBundledOutput"(arg0: $ComputerSide$Type, arg1: integer): void
public "getBundledOutput"(arg0: $ComputerSide$Type): integer
public "getBundledInput"(arg0: $ComputerSide$Type): integer
public "getMainThreadMonitor"(): $WorkMonitor
public "getComputerEnvironment"(): $ComputerEnvironment
public "getGlobalEnvironment"(): $GlobalEnvironment
public "setPeripheralChangeListener"(arg0: $IAPIEnvironment$IPeripheralChangeListener$Type): void
public "time"(arg0: $Metric$Event$Type): $OperationTimer
public "observe"(arg0: $Metric$Counter$Type): void
public "observe"(arg0: $Metric$Event$Type, arg1: long): void
get "fileSystem"(): $FileSystem
get "label"(): string
get "terminal"(): $Terminal
set "label"(value: string)
get "computerID"(): integer
get "mainThreadMonitor"(): $WorkMonitor
get "computerEnvironment"(): $ComputerEnvironment
get "globalEnvironment"(): $GlobalEnvironment
set "peripheralChangeListener"(value: $IAPIEnvironment$IPeripheralChangeListener$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Environment$Type = ($Environment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Environment_ = $Environment$Type;
}}
declare module "packages/dan200/computercraft/core/util/$Colour" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Colour extends $Enum<($Colour)> {
static readonly "BLACK": $Colour
static readonly "RED": $Colour
static readonly "GREEN": $Colour
static readonly "BROWN": $Colour
static readonly "BLUE": $Colour
static readonly "PURPLE": $Colour
static readonly "CYAN": $Colour
static readonly "LIGHT_GREY": $Colour
static readonly "GREY": $Colour
static readonly "PINK": $Colour
static readonly "LIME": $Colour
static readonly "YELLOW": $Colour
static readonly "LIGHT_BLUE": $Colour
static readonly "MAGENTA": $Colour
static readonly "ORANGE": $Colour
static readonly "WHITE": $Colour
static readonly "VALUES": ($Colour)[]


public static "values"(): ($Colour)[]
public static "valueOf"(arg0: string): $Colour
public "getNext"(): $Colour
public "getG"(): float
public "getB"(): float
public "getPrevious"(): $Colour
public static "fromInt"(arg0: integer): $Colour
public "getR"(): float
public "getHex"(): integer
public static "fromHex"(arg0: integer): $Colour
get "next"(): $Colour
get "g"(): float
get "b"(): float
get "previous"(): $Colour
get "r"(): float
get "hex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Colour$Type = (("magenta") | ("pink") | ("green") | ("light_grey") | ("lime") | ("black") | ("yellow") | ("light_blue") | ("brown") | ("cyan") | ("grey") | ("red") | ("orange") | ("blue") | ("white") | ("purple")) | ($Colour);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Colour_ = $Colour$Type;
}}
declare module "packages/dan200/computercraft/api/turtle/$TurtleCommand" {
import {$ITurtleAccess, $ITurtleAccess$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleAccess"
import {$TurtleCommandResult, $TurtleCommandResult$Type} from "packages/dan200/computercraft/api/turtle/$TurtleCommandResult"

export interface $TurtleCommand {

 "execute"(arg0: $ITurtleAccess$Type): $TurtleCommandResult

(arg0: $ITurtleAccess$Type): $TurtleCommandResult
}

export namespace $TurtleCommand {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurtleCommand$Type = ($TurtleCommand);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleCommand_ = $TurtleCommand$Type;
}}
declare module "packages/dan200/computercraft/shared/command/arguments/$RepeatArgumentType$Template" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$RepeatArgumentType$Info, $RepeatArgumentType$Info$Type} from "packages/dan200/computercraft/shared/command/arguments/$RepeatArgumentType$Info"
import {$SimpleCommandExceptionType, $SimpleCommandExceptionType$Type} from "packages/com/mojang/brigadier/exceptions/$SimpleCommandExceptionType"
import {$ArgumentTypeInfo, $ArgumentTypeInfo$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo"
import {$CommandBuildContext, $CommandBuildContext$Type} from "packages/net/minecraft/commands/$CommandBuildContext"
import {$ArgumentTypeInfo$Template, $ArgumentTypeInfo$Template$Type} from "packages/net/minecraft/commands/synchronization/$ArgumentTypeInfo$Template"
import {$RepeatArgumentType, $RepeatArgumentType$Type} from "packages/dan200/computercraft/shared/command/arguments/$RepeatArgumentType"

export class $RepeatArgumentType$Template extends $Record implements $ArgumentTypeInfo$Template<($RepeatArgumentType<(any), (any)>)> {

constructor(info: $RepeatArgumentType$Info$Type, child: $ArgumentTypeInfo$Template$Type<(any)>, flatten: boolean, some: $SimpleCommandExceptionType$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "info"(): $RepeatArgumentType$Info
public "child"(): $ArgumentTypeInfo$Template<(any)>
public "flatten"(): boolean
public "instantiate"(arg0: $CommandBuildContext$Type): $RepeatArgumentType<(any), (any)>
public "some"(): $SimpleCommandExceptionType
public "type"(): $ArgumentTypeInfo<($RepeatArgumentType<(any), (any)>), (any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RepeatArgumentType$Template$Type = ($RepeatArgumentType$Template);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RepeatArgumentType$Template_ = $RepeatArgumentType$Template$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlockItem$Cable" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CableBlock, $CableBlock$Type} from "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlock"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$CableBlockItem, $CableBlockItem$Type} from "packages/dan200/computercraft/shared/peripheral/modem/wired/$CableBlockItem"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CableBlockItem$Cable extends $CableBlockItem {
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

constructor(arg0: $CableBlock$Type, arg1: $Item$Properties$Type)

public "place"(arg0: $BlockPlaceContext$Type): $InteractionResult
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CableBlockItem$Cable$Type = ($CableBlockItem$Cable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CableBlockItem$Cable_ = $CableBlockItem$Cable$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/diskdrive/$DiskDriveBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$HorizontalContainerBlock, $HorizontalContainerBlock$Type} from "packages/dan200/computercraft/shared/common/$HorizontalContainerBlock"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$DiskDriveState, $DiskDriveState$Type} from "packages/dan200/computercraft/shared/peripheral/diskdrive/$DiskDriveState"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $DiskDriveBlock extends $HorizontalContainerBlock {
static readonly "STATE": $EnumProperty<($DiskDriveState)>
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

public "getTicker"<U extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(U)>): $BlockEntityTicker<(U)>
/**
 * 
 * @deprecated
 */
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskDriveBlock$Type = ($DiskDriveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskDriveBlock_ = $DiskDriveBlock$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/diskdrive/$DiskDriveState" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $DiskDriveState extends $Enum<($DiskDriveState)> implements $StringRepresentable {
static readonly "EMPTY": $DiskDriveState
static readonly "FULL": $DiskDriveState
static readonly "INVALID": $DiskDriveState


public static "values"(): ($DiskDriveState)[]
public static "valueOf"(arg0: string): $DiskDriveState
public "getSerializedName"(): string
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DiskDriveState$Type = (("invalid") | ("empty") | ("full")) | ($DiskDriveState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DiskDriveState_ = $DiskDriveState$Type;
}}
declare module "packages/dan200/computercraft/core/computer/computerthread/$ComputerScheduler$Executor" {
import {$TimeoutState, $TimeoutState$Type} from "packages/dan200/computercraft/core/computer/$TimeoutState"

export interface $ComputerScheduler$Executor {

 "submit"(): void
 "setRemainingTime"(arg0: long): void
 "timeoutState"(): $TimeoutState
 "getRemainingTime"(): long
}

export namespace $ComputerScheduler$Executor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerScheduler$Executor$Type = ($ComputerScheduler$Executor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComputerScheduler$Executor_ = $ComputerScheduler$Executor$Type;
}}
declare module "packages/dan200/computercraft/shared/turtle/blocks/$TurtleBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BasicContainer, $BasicContainer$Type} from "packages/dan200/computercraft/shared/container/$BasicContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$IntSupplier, $IntSupplier$Type} from "packages/java/util/function/$IntSupplier"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractComputerBlockEntity, $AbstractComputerBlockEntity$Type} from "packages/dan200/computercraft/shared/computer/blocks/$AbstractComputerBlockEntity"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ITurtleAccess, $ITurtleAccess$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleAccess"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TurtleSide, $TurtleSide$Type} from "packages/dan200/computercraft/api/turtle/$TurtleSide"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ITurtleUpgrade, $ITurtleUpgrade$Type} from "packages/dan200/computercraft/api/turtle/$ITurtleUpgrade"
import {$ComputerFamily, $ComputerFamily$Type} from "packages/dan200/computercraft/shared/computer/core/$ComputerFamily"

export class $TurtleBlockEntity extends $AbstractComputerBlockEntity implements $BasicContainer {
static readonly "INVENTORY_SIZE": integer
static readonly "INVENTORY_WIDTH": integer
static readonly "INVENTORY_HEIGHT": integer
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $IntSupplier$Type, arg4: $ComputerFamily$Type)

public "getContents"(): $NonNullList<($ItemStack)>
public "getAccess"(): $ITurtleAccess
public "onMoved"(arg0: $Runnable$Type): void
public "setChanged"(): void
public "getDirection"(): $Direction
public "createMenu"(arg0: integer, arg1: $Inventory$Type, arg2: $Player$Type): $AbstractContainerMenu
public "neighborChanged"(arg0: $BlockPos$Type): void
public "getColour"(): integer
public "getUpgrade"(arg0: $TurtleSide$Type): $ITurtleUpgrade
public "saveAdditional"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "stillValid"(arg0: $Player$Type): boolean
public "getOverlay"(): $ResourceLocation
public "loadServer"(arg0: $CompoundTag$Type): void
public "transferStateFrom"(arg0: $TurtleBlockEntity$Type): void
public "loadClient"(arg0: $CompoundTag$Type): void
public "setDirection"(arg0: $Direction$Type): void
public "peripheral"(): $IPeripheral
public "getRenderOffset"(arg0: float): $Vec3
public "getToolRenderAngle"(arg0: $TurtleSide$Type, arg1: float): float
public "getFuelLimit"(): integer
public "onTileEntityChange"(): void
public "notifyMoveEnd"(): void
public "getRenderYaw"(arg0: float): float
public "getItemSnapshot"(arg0: integer): $ItemStack
public "notifyMoveStart"(): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "clearContent"(): void
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "getItem"(arg0: integer): $ItemStack
public "getBlock"(level: $Level$Type): $BlockContainerJS
public "kjs$self"(): $Container
public "getMaxStackSize"(): integer
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "isMutable"(): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "getStackInSlot"(slot: integer): $ItemStack
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
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
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "contents"(): $NonNullList<($ItemStack)>
get "access"(): $ITurtleAccess
get "direction"(): $Direction
get "colour"(): integer
get "updateTag"(): $CompoundTag
get "overlay"(): $ResourceLocation
set "direction"(value: $Direction$Type)
get "fuelLimit"(): integer
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
export type $TurtleBlockEntity$Type = ($TurtleBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TurtleBlockEntity_ = $TurtleBlockEntity$Type;
}}
declare module "packages/dan200/computercraft/core/metrics/$OperationTimer" {
import {$MetricsObserver, $MetricsObserver$Type} from "packages/dan200/computercraft/core/metrics/$MetricsObserver"
import {$AutoCloseable, $AutoCloseable$Type} from "packages/java/lang/$AutoCloseable"
import {$Metric$Event, $Metric$Event$Type} from "packages/dan200/computercraft/core/metrics/$Metric$Event"

export class $OperationTimer implements $AutoCloseable {


public static "start"(arg0: $MetricsObserver$Type, arg1: $Metric$Event$Type): $OperationTimer
public "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OperationTimer$Type = ($OperationTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OperationTimer_ = $OperationTimer$Type;
}}
declare module "packages/dan200/computercraft/core/metrics/$Metric$Event" {
import {$Metric, $Metric$Type} from "packages/dan200/computercraft/core/metrics/$Metric"
import {$LongFunction, $LongFunction$Type} from "packages/java/util/function/$LongFunction"

export class $Metric$Event extends $Metric {

constructor(arg0: string, arg1: string, arg2: $LongFunction$Type<(string)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$Event$Type = ($Metric$Event);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Metric$Event_ = $Metric$Event$Type;
}}
declare module "packages/dan200/computercraft/api/filesystem/$Mount" {
import {$SeekableByteChannel, $SeekableByteChannel$Type} from "packages/java/nio/channels/$SeekableByteChannel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BasicFileAttributes, $BasicFileAttributes$Type} from "packages/java/nio/file/attribute/$BasicFileAttributes"

export interface $Mount {

 "list"(arg0: string, arg1: $List$Type<(string)>): void
 "getSize"(arg0: string): long
 "getAttributes"(arg0: string): $BasicFileAttributes
 "exists"(arg0: string): boolean
 "isDirectory"(arg0: string): boolean
 "openForRead"(arg0: string): $SeekableByteChannel
}

export namespace $Mount {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Mount$Type = ($Mount);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Mount_ = $Mount$Type;
}}
declare module "packages/dan200/computercraft/shared/computer/terminal/$NetworkedTerminal" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Terminal, $Terminal$Type} from "packages/dan200/computercraft/core/terminal/$Terminal"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $NetworkedTerminal extends $Terminal {

constructor(arg0: integer, arg1: integer, arg2: boolean)
constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $Runnable$Type)

public "write"(arg0: $FriendlyByteBuf$Type): void
public "read"(arg0: $FriendlyByteBuf$Type): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkedTerminal$Type = ($NetworkedTerminal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NetworkedTerminal_ = $NetworkedTerminal$Type;
}}
declare module "packages/dan200/computercraft/core/methods/$LuaMethod" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"

export interface $LuaMethod {

 "apply"(arg0: any, arg1: $ILuaContext$Type, arg2: $IArguments$Type): $MethodResult

(arg0: any, arg1: $ILuaContext$Type, arg2: $IArguments$Type): $MethodResult
}

export namespace $LuaMethod {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaMethod$Type = ($LuaMethod);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LuaMethod_ = $LuaMethod$Type;
}}
declare module "packages/dan200/computercraft/shared/peripheral/modem/wireless/$WirelessModemBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RegistryEntry, $RegistryEntry$Type} from "packages/dan200/computercraft/shared/platform/$RegistryEntry"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $WirelessModemBlock extends $DirectionalBlock implements $SimpleWaterloggedBlock, $EntityBlock {
static readonly "ON": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $RegistryEntry$Type<(any)>)

/**
 * 
 * @deprecated
 */
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getFluidState"(arg0: $BlockState$Type): $FluidState
/**
 * 
 * @deprecated
 */
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
/**
 * 
 * @deprecated
 */
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WirelessModemBlock$Type = ($WirelessModemBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WirelessModemBlock_ = $WirelessModemBlock$Type;
}}
