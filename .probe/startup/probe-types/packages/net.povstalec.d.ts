declare module "packages/net/povstalec/sgjourney/common/blocks/$GoldenIdolBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $GoldenIdolBlock extends $HorizontalDirectionalBlock {
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
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getRenderType"(arg0: $BlockState$Type): $RenderShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoldenIdolBlock$Type = ($GoldenIdolBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoldenIdolBlock_ = $GoldenIdolBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/block_entities/stargate/$AbstractStargateEntity" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Stargate$Feedback, $Stargate$Feedback$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Stargate$Feedback"
import {$Stargate$ChevronLockSpeed, $Stargate$ChevronLockSpeed$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Stargate$ChevronLockSpeed"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Address, $Address$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Address"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundWrapper, $SoundWrapper$Type} from "packages/net/povstalec/sgjourney/client/sound/$SoundWrapper"
import {$Stargate$Gen, $Stargate$Gen$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Stargate$Gen"
import {$EnergyBlockEntity, $EnergyBlockEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/$EnergyBlockEntity"
import {$SGJourneyEnergy, $SGJourneyEnergy$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$SGJourneyEnergy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Wormhole, $Wormhole$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Wormhole"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$AbstractDHDEntity, $AbstractDHDEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/dhd/$AbstractDHDEntity"
import {$Address$Immutable, $Address$Immutable$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Address$Immutable"
import {$StargatePeripheralWrapper, $StargatePeripheralWrapper$Type} from "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/$StargatePeripheralWrapper"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Stargate$FilterType, $Stargate$FilterType$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Stargate$FilterType"

export class $AbstractStargateEntity extends $EnergyBlockEntity {
static readonly "EMPTY": string
static readonly "ADD_TO_NETWORK": string
static readonly "ID": string
static readonly "ID_9_CHEVRON_ADDRESS": string
static readonly "ADDRESS": string
static readonly "DHD_POS": string
static readonly "ENERGY": string
static readonly "CONNECTION_ID": string
static readonly "NETWORK": string
static readonly "RESTRICT_NETWORK": string
static readonly "TIMES_OPENED": string
static readonly "AUTOCLOSE": string
static readonly "FILTER_TYPE": string
static readonly "WHITELIST": string
static readonly "BLACKLIST": string
static readonly "UPGRADED": string
static readonly "DISPLAY_ID": string
static readonly "VARIANT": string
static readonly "POINT_OF_ORIGIN": string
static readonly "SYMBOLS": string
static readonly "STANDARD_THICKNESS": float
static readonly "VERTICAL_CENTER_STANDARD_HEIGHT": float
static readonly "HORIZONTAL_CENTER_STANDARD_HEIGHT": float
 "wormholeIdleSound": $SoundWrapper
 "wormholeOpenSound": $SoundWrapper
 "spinSound": $SoundWrapper
readonly "ENERGY_STORAGE": $SGJourneyEnergy
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Stargate$Gen$Type, arg4: integer, arg5: float, arg6: float)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Stargate$Gen$Type, arg4: integer)

public "capacity"(): long
public "getAddress"(): $Address
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $AbstractStargateEntity$Type): void
public "getVariant"(): string
public "setVariant"(arg0: string): void
public "getGeneration"(): $Stargate$Gen
public "onLoad"(): void
public "getStatus"(arg0: $Player$Type): void
public "isConnected"(): boolean
public "getOrientation"(): $Orientation
public "getSymbols"(): string
public "getRenderBoundingBox"(): $AABB
public "isRestricted"(arg0: integer): boolean
public "getDirection"(): $Direction
public "maxReceive"(): long
public "maxExtract"(): long
public "setConnected"(arg0: $StargateConnection$State$Type): void
public "updateAdvancedCrystalInterfaceBlocks"(arg0: string, ...arg1: (any)[]): void
public "getCenter"(): $Vec3
public "getTickCount"(): integer
public "getFailSound"(): $SoundEvent
public "getRotationSound"(): $SoundEvent
public "getStartupSound"(): $SoundEvent
public "updateClient"(): void
public "getPrimaryChevronIncomingSound"(): $SoundEvent
public "getChevronIncomingSound"(): $SoundEvent
public "getPrimaryChevronEngageSound"(): $SoundEvent
public "getWormholeCloseSound"(): $SoundEvent
public "getWormholeOpenSound"(): $SoundEvent
public "getChevronEngageSound"(): $SoundEvent
public "getWormholeIdleSound"(): $SoundEvent
public "setNetwork"(arg0: integer): void
public "getNetwork"(): integer
public "load"(arg0: $CompoundTag$Type): void
public "getConnectionState"(): $StargateConnection$State
public "setSymbols"(arg0: string): void
public "updateStargate"(arg0: boolean): void
public "setPointOfOrigin"(arg0: string): void
public "unsetDHD"(arg0: boolean): void
public "isObstructed"(): boolean
public "getCenterPos"(): $BlockPos
public "deserializeStargateInfo"(arg0: $CompoundTag$Type, arg1: boolean): void
public "serializeStargateInfo"(arg0: $CompoundTag$Type): $CompoundTag
public "getPointOfOrigin"(): string
public "isDialingOut"(): boolean
public "getChevronsEngaged"(): integer
public "setRandomPointOfOrigin"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "setSymbolsFromDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "addStargateToNetwork"(): void
public "bypassDisconnectStargate"(arg0: $Stargate$Feedback$Type, arg1: boolean): $Stargate$Feedback
public "removeStargateFromNetwork"(): void
public "setPointOfOriginFromDimension"(arg0: $ResourceKey$Type<($Level$Type)>): void
public "getRedstoneSymbolOutput"(): integer
public "getRedstoneSegmentOutput"(): integer
public "set9ChevronAddress"(arg0: $Address$Type): void
public "getFilterType"(): $Stargate$FilterType
public "autoclose"(): integer
public "loadDHD"(): void
public "deserializeFilters"(arg0: $CompoundTag$Type): void
public "serializeFilters"(arg0: $CompoundTag$Type): void
public "encodeChevron"(arg0: integer, arg1: boolean, arg2: boolean): $Stargate$Feedback
public "getSymbolBounds"(): integer
public "setRecentFeedback"(arg0: $Stargate$Feedback$Type): $Stargate$Feedback
public "get9ChevronAddress"(): $Address
public "engageStargate"(arg0: $Address$Type, arg1: boolean): $Stargate$Feedback
public "resetStargate"(arg0: $Stargate$Feedback$Type, arg1: boolean): $Stargate$Feedback
public "resetStargate"(arg0: $Stargate$Feedback$Type): $Stargate$Feedback
public "disconnectStargate"(arg0: $Stargate$Feedback$Type, arg1: boolean): $Stargate$Feedback
public "engageSymbol"(arg0: integer): $Stargate$Feedback
public "chevronSound"(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean): void
public static "getChevron"(arg0: $AbstractStargateEntity$Type, arg1: integer): integer
public "getEngagedChevrons"(): (integer)[]
public "idleWormholeSound"(): void
public "playRotationSound"(): void
public "openWormholeSound"(): void
public "closeWormholeSound"(): void
public static "kawooshFunction"(arg0: integer): double
public "doKawoosh"(arg0: integer): void
public "connectStargate"(arg0: string, arg1: $StargateConnection$State$Type): void
public "stopRotationSound"(): void
public "setRestrictNetwork"(arg0: boolean): void
public "getMaxGateOpenTime"(): integer
public "setStargateState"(arg0: $StargateConnection$State$Type, arg1: integer, arg2: boolean): void
public "shouldDisintegrate"(arg0: $Entity$Type): boolean
public "getRecentFeedback"(): $Stargate$Feedback
public "sendDHDFeedback"(arg0: $Stargate$Feedback$Type): void
public "getOpenTime"(): integer
public "getDHDPos"(): $Optional<($BlockPos)>
public "setTickCount"(arg0: integer): void
public "updateDHD"(): void
public "getRestrictNetwork"(): boolean
public "clearBlacklist"(): void
public "setEngagedChevrons"(arg0: (integer)[]): void
public "chevronsRendered"(): integer
public "setDHD"(arg0: $AbstractDHDEntity$Type, arg1: integer): void
public "getTimesOpened"(): integer
public "isWormholeOpen"(): boolean
public "setFilterType"(arg0: integer): $Stargate$FilterType
public "hasDHD"(): boolean
public "getRelativeCenter"(): $Vec3
public "shouldCallForward"(): boolean
public "addToWhitelist"(arg0: $Address$Immutable$Type): boolean
public "setAddress"(arg0: $Address$Type): void
public "addToBlacklist"(arg0: $Address$Immutable$Type): boolean
public "increaseTickCount"(): integer
public "clearWhitelist"(): void
public "setOpenSoundLead"(arg0: integer): void
public "getWormhole"(): $Wormhole
public "getGateAddition"(): double
public "getConnectionID"(): string
public "getOpenSoundLead"(): integer
public "checkStargate"(): void
public "doWhileDialed"(arg0: integer, arg1: $Stargate$ChevronLockSpeed$Type): void
public "isCorrectEnergySide"(arg0: $Direction$Type): boolean
public "receiveStargateMessage"(arg0: string): void
public "getHorizontalCenterHeight"(): float
public "setKawooshTickCount"(arg0: integer): void
public "getKawooshTickCount"(): integer
public "isSymbolOutOfBounds"(arg0: integer): boolean
public "updateBasicInterfaceBlocks"(arg0: string, ...arg1: (any)[]): void
public "sendStargateMessage"(arg0: string): boolean
public "getConnectionAddress"(arg0: integer): $Address
public static "getChevronConfiguration"(arg0: integer): (integer)[]
public "getTimeSinceLastTraveler"(): integer
public "registerInterfaceMethods"(arg0: $StargatePeripheralWrapper$Type): void
public "updateInterfaceBlocks"(arg0: string, ...arg1: (any)[]): void
public "getVerticalCenterHeight"(): float
public "getChevronLockSpeed"(): $Stargate$ChevronLockSpeed
public "playWormholeIdleSound"(): void
public "isAddressWhitelisted"(arg0: $Address$Immutable$Type): boolean
public "updateCrystalInterfaceBlocks"(arg0: string, ...arg1: (any)[]): void
public "removeFromBlacklist"(arg0: $Address$Immutable$Type): boolean
public "removeFromWhitelist"(arg0: $Address$Immutable$Type): boolean
public "isAddressBlacklisted"(arg0: $Address$Immutable$Type): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "address"(): $Address
get "variant"(): string
set "variant"(value: string)
get "generation"(): $Stargate$Gen
get "connected"(): boolean
get "orientation"(): $Orientation
get "symbols"(): string
get "renderBoundingBox"(): $AABB
get "direction"(): $Direction
set "connected"(value: $StargateConnection$State$Type)
get "center"(): $Vec3
get "tickCount"(): integer
get "failSound"(): $SoundEvent
get "rotationSound"(): $SoundEvent
get "startupSound"(): $SoundEvent
get "primaryChevronIncomingSound"(): $SoundEvent
get "chevronIncomingSound"(): $SoundEvent
get "primaryChevronEngageSound"(): $SoundEvent
get "wormholeCloseSound"(): $SoundEvent
get "wormholeOpenSound"(): $SoundEvent
get "chevronEngageSound"(): $SoundEvent
get "wormholeIdleSound"(): $SoundEvent
set "network"(value: integer)
get "network"(): integer
get "connectionState"(): $StargateConnection$State
set "symbols"(value: string)
set "pointOfOrigin"(value: string)
get "obstructed"(): boolean
get "centerPos"(): $BlockPos
get "pointOfOrigin"(): string
get "dialingOut"(): boolean
get "chevronsEngaged"(): integer
set "randomPointOfOrigin"(value: $ResourceKey$Type<($Level$Type)>)
set "symbolsFromDimension"(value: $ResourceKey$Type<($Level$Type)>)
set "pointOfOriginFromDimension"(value: $ResourceKey$Type<($Level$Type)>)
get "redstoneSymbolOutput"(): integer
get "redstoneSegmentOutput"(): integer
set "9ChevronAddress"(value: $Address$Type)
get "filterType"(): $Stargate$FilterType
get "symbolBounds"(): integer
set "recentFeedback"(value: $Stargate$Feedback$Type)
get "9ChevronAddress"(): $Address
get "engagedChevrons"(): (integer)[]
set "restrictNetwork"(value: boolean)
get "maxGateOpenTime"(): integer
get "recentFeedback"(): $Stargate$Feedback
get "openTime"(): integer
get "dHDPos"(): $Optional<($BlockPos)>
set "tickCount"(value: integer)
get "restrictNetwork"(): boolean
set "engagedChevrons"(value: (integer)[])
get "timesOpened"(): integer
get "wormholeOpen"(): boolean
set "filterType"(value: integer)
get "relativeCenter"(): $Vec3
set "address"(value: $Address$Type)
set "openSoundLead"(value: integer)
get "wormhole"(): $Wormhole
get "gateAddition"(): double
get "connectionID"(): string
get "openSoundLead"(): integer
get "horizontalCenterHeight"(): float
set "kawooshTickCount"(value: integer)
get "kawooshTickCount"(): integer
get "timeSinceLastTraveler"(): integer
get "verticalCenterHeight"(): float
get "chevronLockSpeed"(): $Stargate$ChevronLockSpeed
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStargateEntity$Type = ($AbstractStargateEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStargateEntity_ = $AbstractStargateEntity$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/peripherals/$InterfacePeripheralWrapper" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$EnergyBlockEntity, $EnergyBlockEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/$EnergyBlockEntity"
import {$AbstractInterfaceEntity, $AbstractInterfaceEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity"
import {$InterfacePeripheral, $InterfacePeripheral$Type} from "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/peripherals/$InterfacePeripheral"

export class $InterfacePeripheralWrapper {

constructor(arg0: $AbstractInterfaceEntity$Type)

public "resetInterface"(): boolean
public "newPeripheral"(): $LazyOptional<($IPeripheral)>
public "getPeripheral"(): $InterfacePeripheral
public "queueEvent"(arg0: string, ...arg1: (any)[]): void
public static "createPeripheral"(arg0: $AbstractInterfaceEntity$Type, arg1: $EnergyBlockEntity$Type): $InterfacePeripheral
get "peripheral"(): $InterfacePeripheral
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfacePeripheralWrapper$Type = ($InterfacePeripheralWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfacePeripheralWrapper_ = $InterfacePeripheralWrapper$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$MilkyWayStargateRingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $MilkyWayStargateRingBlock extends $AbstractStargateRingBlock {
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MilkyWayStargateRingBlock$Type = ($MilkyWayStargateRingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MilkyWayStargateRingBlock_ = $MilkyWayStargateRingBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$TollanStargateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractStargateBaseBlock, $AbstractStargateBaseBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBaseBlock"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $TollanStargateBlock extends $AbstractStargateBaseBlock {
static readonly "EMPTY": string
static readonly "LOCAL_POINT_OF_ORIGIN": string
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getParts"(): $ArrayList<($StargatePart)>
public "getRing"(): $AbstractStargateRingBlock
public "ringState"(): $BlockState
get "parts"(): $ArrayList<($StargatePart)>
get "ring"(): $AbstractStargateRingBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TollanStargateBlock$Type = ($TollanStargateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TollanStargateBlock_ = $TollanStargateBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$CommunicationCrystalItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractCrystalItem, $AbstractCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$AbstractCrystalItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommunicationCrystalItem extends $AbstractCrystalItem {
static readonly "DEFAULT_MAX_DISTANCE": integer
static readonly "ADVANCED_MAX_DISTANCE": integer
static readonly "DEFAULT_FREQUENCY": integer
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

public "getFrequency"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getMaxDistance"(): integer
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
public static "tagSetup"(arg0: integer): $CompoundTag
get "maxDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommunicationCrystalItem$Type = ($CommunicationCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommunicationCrystalItem_ = $CommunicationCrystalItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$MaterializationCrystalItem$Advanced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MaterializationCrystalItem, $MaterializationCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$MaterializationCrystalItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MaterializationCrystalItem$Advanced extends $MaterializationCrystalItem {
static readonly "DEFAULT_RANGE_INCREMENT": integer
static readonly "ADVANCED_RANGE_INCREMENT": integer
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

public "isAdvanced"(): boolean
public "getRangeIncrement"(): integer
get "advanced"(): boolean
get "rangeIncrement"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterializationCrystalItem$Advanced$Type = ($MaterializationCrystalItem$Advanced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterializationCrystalItem$Advanced_ = $MaterializationCrystalItem$Advanced$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/world/features/$SpireFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$SpireConfiguration, $SpireConfiguration$Type} from "packages/net/povstalec/sgjourney/common/world/features/configuration/$SpireConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $SpireFeature extends $Feature<($SpireConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($SpireConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($SpireConfiguration$Type)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpireFeature$Type = ($SpireFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpireFeature_ = $SpireFeature$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$CrystalInterfaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InterfaceMode, $InterfaceMode$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$InterfaceMode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractInterfaceBlock, $AbstractInterfaceBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractInterfaceBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CrystalInterfaceBlock extends $AbstractInterfaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "UPDATE": $BooleanProperty
static readonly "MODE": $EnumProperty<($InterfaceMode)>
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

public "getCapacity"(): long
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDroppedBlock"(): $Block
get "capacity"(): long
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalInterfaceBlock$Type = ($CrystalInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalInterfaceBlock_ = $CrystalInterfaceBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Stargate$WormholeTravel" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Stargate$WormholeTravel extends $Enum<($Stargate$WormholeTravel)> {
static readonly "ENABLED": $Stargate$WormholeTravel
static readonly "CREATIVE_ONLY": $Stargate$WormholeTravel
static readonly "DISABLED": $Stargate$WormholeTravel


public static "values"(): ($Stargate$WormholeTravel)[]
public static "valueOf"(arg0: string): $Stargate$WormholeTravel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stargate$WormholeTravel$Type = (("creative_only") | ("disabled") | ("enabled")) | ($Stargate$WormholeTravel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stargate$WormholeTravel_ = $Stargate$WormholeTravel$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Stargate$ChevronLockSpeed" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Stargate$ChevronLockSpeed extends $Enum<($Stargate$ChevronLockSpeed)> {
static readonly "SLOW": $Stargate$ChevronLockSpeed
static readonly "MEDIUM": $Stargate$ChevronLockSpeed
static readonly "FAST": $Stargate$ChevronLockSpeed


public static "values"(): ($Stargate$ChevronLockSpeed)[]
public static "valueOf"(arg0: string): $Stargate$ChevronLockSpeed
public "getMultiplier"(): integer
public "getChevronWaitTicks"(): integer
public "getKawooshStartTicks"(): integer
get "multiplier"(): integer
get "chevronWaitTicks"(): integer
get "kawooshStartTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stargate$ChevronLockSpeed$Type = (("fast") | ("slow") | ("medium")) | ($Stargate$ChevronLockSpeed);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stargate$ChevronLockSpeed_ = $Stargate$ChevronLockSpeed$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$VialItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $VialItem extends $Item {
static readonly "MAX_CAPACITY": integer
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

public static "getFluidStack"(arg0: $ItemStack$Type): $FluidStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "getFluidAmount"(arg0: $ItemStack$Type): integer
public static "getMaxCapacity"(): integer
public static "getNaquadahAmount"(arg0: $ItemStack$Type): integer
public static "drainNaquadah"(arg0: $ItemStack$Type, arg1: integer): void
public static "heavyLiquidNaquadahSetup"(): $ItemStack
public static "liquidNaquadahSetup"(): $ItemStack
get "maxCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VialItem$Type = ($VialItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VialItem_ = $VialItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/tools/$SGJourneyPickaxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SGJourneyPickaxeItem extends $PickaxeItem {
 "speed": float
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGJourneyPickaxeItem$Type = ($SGJourneyPickaxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGJourneyPickaxeItem_ = $SGJourneyPickaxeItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Address$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Address$Type extends $Enum<($Address$Type)> {
static readonly "ADDRESS_INVALID": $Address$Type
static readonly "ADDRESS_9_CHEVRON": $Address$Type
static readonly "ADDRESS_8_CHEVRON": $Address$Type
static readonly "ADDRESS_7_CHEVRON": $Address$Type


public static "values"(): ($Address$Type)[]
public static "valueOf"(arg0: string): $Address$Type
public static "fromInt"(arg0: integer): $Address$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Address$Type$Type = (("address_7_chevron") | ("address_8_chevron") | ("address_invalid") | ("address_9_chevron")) | ($Address$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Address$Type_ = $Address$Type$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/blocks/$CartoucheBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CartoucheBlockItem extends $BlockItem {
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

public static "updateCustomBlockEntityTag"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartoucheBlockItem$Type = ($CartoucheBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartoucheBlockItem_ = $CartoucheBlockItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/capabilities/$SGJourneyEnergy" {
import {$Tag, $Tag$Type} from "packages/net/minecraft/nbt/$Tag"
import {$EnergyStorage, $EnergyStorage$Type} from "packages/net/minecraftforge/energy/$EnergyStorage"

export class $SGJourneyEnergy extends $EnergyStorage {

constructor(arg0: long, arg1: long, arg2: long)

public "canExtract"(): boolean
public "getEnergyStored"(): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "maxReceive"(): long
public "canReceive"(): boolean
public "maxExtract"(): long
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "getMaxEnergyStored"(): integer
public "setEnergy"(arg0: long): long
public "deserializeNBT"(arg0: $Tag$Type): void
public "serializeNBT"(): $Tag
public "onEnergyChanged"(arg0: long, arg1: boolean): void
public "extractLongEnergy"(arg0: long, arg1: boolean): long
public "receiveLongEnergy"(arg0: long, arg1: boolean): long
public static "getRegularEnergy"(arg0: long): integer
public "getTrueMaxEnergyStored"(): long
public "getTrueEnergyStored"(): long
get "energyStored"(): integer
get "maxEnergyStored"(): integer
set "energy"(value: long)
get "trueMaxEnergyStored"(): long
get "trueEnergyStored"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGJourneyEnergy$Type = ($SGJourneyEnergy);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGJourneyEnergy_ = $SGJourneyEnergy$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/tools/$SGJourneyAxeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SGJourneyAxeItem extends $AxeItem {
static "STRIPPABLES": $Map<($Block), ($Block)>
 "speed": float
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

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGJourneyAxeItem$Type = ($SGJourneyAxeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGJourneyAxeItem_ = $SGJourneyAxeItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$AdvancedCrystallizerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractCrystallizerBlock, $AbstractCrystallizerBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractCrystallizerBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedCrystallizerBlock extends $AbstractCrystallizerBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDroppedBlock"(): $Block
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedCrystallizerBlock$Type = ($AdvancedCrystallizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedCrystallizerBlock_ = $AdvancedCrystallizerBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$EnergyCrystalItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractCrystalItem, $AbstractCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$AbstractCrystalItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyCrystalItem extends $AbstractCrystalItem {
static readonly "DEFAULT_CAPACITY": integer
static readonly "DEFAULT_ENERGY_TRANSFER": integer
static readonly "ADVANCED_CAPACITY": integer
static readonly "ADVANCED_ENERGY_TRANSFER": integer
static readonly "ENERGY_LIMIT": string
static readonly "ENERGY": string
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

public "getCapacity"(): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public static "getEnergy"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
public static "tagSetup"(arg0: integer): $CompoundTag
public "getTransfer"(): integer
get "capacity"(): integer
get "transfer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCrystalItem$Type = ($EnergyCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCrystalItem_ = $EnergyCrystalItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$UniverseStargateRingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $UniverseStargateRingBlock extends $AbstractStargateRingBlock {
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniverseStargateRingBlock$Type = ($UniverseStargateRingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniverseStargateRingBlock_ = $UniverseStargateRingBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$StargateVariantItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractStargateBlock, $AbstractStargateBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StargateVariantItem extends $Item {
static readonly "VARIANT": string
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
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "getVariantString"(arg0: $ItemStack$Type): $Optional<(string)>
public static "stargateVariant"<StargateBlock extends $AbstractStargateBlock>(arg0: string): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StargateVariantItem$Type = ($StargateVariantItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StargateVariantItem_ = $StargateVariantItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/recipe/$AdvancedCrystallizerRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$AdvancedCrystallizerRecipe, $AdvancedCrystallizerRecipe$Type} from "packages/net/povstalec/sgjourney/common/recipe/$AdvancedCrystallizerRecipe"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdvancedCrystallizerRecipe$Serializer implements $RecipeSerializer<($AdvancedCrystallizerRecipe)> {
static readonly "INSTANCE": $AdvancedCrystallizerRecipe$Serializer
static readonly "ID": $ResourceLocation

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $AdvancedCrystallizerRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $AdvancedCrystallizerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $AdvancedCrystallizerRecipe$Type): void
public static "getIngredient"(arg0: $Map$Type<(string), ($JsonElement$Type)>): $Pair<($Ingredient), (integer)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $AdvancedCrystallizerRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedCrystallizerRecipe$Serializer$Type = ($AdvancedCrystallizerRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedCrystallizerRecipe$Serializer_ = $AdvancedCrystallizerRecipe$Serializer$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$SymbolBlock$Stone" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SymbolBlock, $SymbolBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/$SymbolBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SymbolBlock$Stone extends $SymbolBlock {
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
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

public "getItem"(): $ItemLike
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
get "item"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SymbolBlock$Stone$Type = ($SymbolBlock$Stone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SymbolBlock$Stone_ = $SymbolBlock$Stone$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$CallForwardingDevice" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CallForwardingDevice extends $Item {
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
export type $CallForwardingDevice$Type = ($CallForwardingDevice);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CallForwardingDevice_ = $CallForwardingDevice$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/armor/$PersonalShieldItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AncientGene$ATAGene, $AncientGene$ATAGene$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$AncientGene$ATAGene"
import {$AncientTech, $AncientTech$Type} from "packages/net/povstalec/sgjourney/common/tech/$AncientTech"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PersonalShieldItem extends $ArmorItem implements $AncientTech {
static readonly "ENERGY": string
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "type": $ArmorItem$Type
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public static "getEnergy"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "depleteEnergy"(arg0: $ItemStack$Type, arg1: integer): void
public static "personalShieldSetup"(): $ItemStack
public "getGeneType"(arg0: $Entity$Type): $AncientGene$ATAGene
public "canUseAncientTech"(arg0: $Entity$Type): boolean
public "canUseAncientTech"(arg0: boolean, arg1: $Entity$Type): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersonalShieldItem$Type = ($PersonalShieldItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersonalShieldItem_ = $PersonalShieldItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/tech/$AncientTech" {
import {$AncientGene$ATAGene, $AncientGene$ATAGene$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$AncientGene$ATAGene"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $AncientTech {

 "getGeneType"(arg0: $Entity$Type): $AncientGene$ATAGene
 "canUseAncientTech"(arg0: $Entity$Type): boolean
 "canUseAncientTech"(arg0: boolean, arg1: $Entity$Type): boolean
}

export namespace $AncientTech {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientTech$Type = ($AncientTech);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientTech_ = $AncientTech$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/peripherals/$StargatePeripheral" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$AbstractInterfaceEntity, $AbstractInterfaceEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity"
import {$AbstractStargateEntity, $AbstractStargateEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/stargate/$AbstractStargateEntity"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"
import {$InterfacePeripheral, $InterfacePeripheral$Type} from "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/peripherals/$InterfacePeripheral"

export class $StargatePeripheral extends $InterfacePeripheral {

constructor(arg0: $AbstractInterfaceEntity$Type, arg1: $AbstractStargateEntity$Type)

public "callMethod"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: integer, arg3: $IArguments$Type): $MethodResult
public "queueEvent"(arg0: string, ...arg1: (any)[]): void
public "getChevronsEngaged"(): integer
public "disconnectStargate"(arg0: $ILuaContext$Type): $MethodResult
public "getOpenTime"(): integer
public "isWormholeOpen"(): boolean
public "isStargateConnected"(): boolean
public "getStargateGeneration"(): integer
public "isStargateDialingOut"(): boolean
public "getStargateEnergy"(): long
public "getStargateType"(): string
get "chevronsEngaged"(): integer
get "openTime"(): integer
get "wormholeOpen"(): boolean
get "stargateConnected"(): boolean
get "stargateGeneration"(): integer
get "stargateDialingOut"(): boolean
get "stargateEnergy"(): long
get "stargateType"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StargatePeripheral$Type = ($StargatePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StargatePeripheral_ = $StargatePeripheral$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blockstates/$Orientation" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $Orientation extends $Enum<($Orientation)> implements $StringRepresentable {
static readonly "REGULAR": $Orientation
static readonly "UPWARD": $Orientation
static readonly "DOWNWARD": $Orientation


public static "values"(): ($Orientation)[]
public static "valueOf"(arg0: string): $Orientation
public "getIndex"(): integer
public "getSerializedName"(): string
public "get2DDataValue"(): integer
public static "getMultiDirection"(arg0: $Direction$Type, arg1: $Direction$Type, arg2: $Orientation$Type): $Direction
public static "getCenterDirection"(arg0: $Direction$Type, arg1: $Orientation$Type): $Direction
public static "getOrientationFromXRot"(arg0: $Player$Type): $Orientation
public static "getEffectiveVector"(arg0: $Direction$Type, arg1: $Orientation$Type): $Vec3
public static "getEffectiveDirection"(arg0: $Direction$Type, arg1: $Orientation$Type): $Direction
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "index"(): integer
get "serializedName"(): string
get "2DDataValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Orientation$Type = (("downward") | ("regular") | ("upward")) | ($Orientation);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Orientation_ = $Orientation$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$RingPanelBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
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
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $RingPanelBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RingPanelBlock$Type = ($RingPanelBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RingPanelBlock_ = $RingPanelBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/recipe/$CrystallizerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $CrystallizerRecipe implements $Recipe<($SimpleContainer)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $NonNullList$Type<($Ingredient$Type)>, arg3: (integer)[], arg4: boolean, arg5: boolean)

public "matches"(arg0: $SimpleContainer$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "assemble"(arg0: $SimpleContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getAmountInSlot"(arg0: integer): integer
public "depletePrimary"(): boolean
public "depleteSecondary"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "itemStackMatches"(arg0: $SimpleContainer$Type, arg1: integer): boolean
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SimpleContainer$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getType"(): $ResourceLocation
public "getMod"(): string
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getGroup"(): string
public "setGroup"(group: string): void
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "mod"(): string
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystallizerRecipe$Type = ($CrystallizerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystallizerRecipe_ = $CrystallizerRecipe$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$ATAGeneDetectorBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AncientGene$ATAGene, $AncientGene$ATAGene$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$AncientGene$ATAGene"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AncientTech, $AncientTech$Type} from "packages/net/povstalec/sgjourney/common/tech/$AncientTech"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ATAGeneDetectorBlock extends $Block implements $AncientTech {
static readonly "MEASURED_GENE": $IntegerProperty
static readonly "DETECTION_DISTANCE": double
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

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getGeneType"(arg0: $Entity$Type): $AncientGene$ATAGene
public "canUseAncientTech"(arg0: $Entity$Type): boolean
public "canUseAncientTech"(arg0: boolean, arg1: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ATAGeneDetectorBlock$Type = ($ATAGeneDetectorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ATAGeneDetectorBlock_ = $ATAGeneDetectorBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/capabilities/$AncientGene$ATAGene" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AncientGene$ATAGene extends $Enum<($AncientGene$ATAGene)> {
static readonly "ANCIENT": $AncientGene$ATAGene
static readonly "INHERITED": $AncientGene$ATAGene
static readonly "ARTIFICIAL": $AncientGene$ATAGene
static readonly "NONE": $AncientGene$ATAGene


public static "values"(): ($AncientGene$ATAGene)[]
public static "valueOf"(arg0: string): $AncientGene$ATAGene
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AncientGene$ATAGene$Type = (("artificial") | ("inherited") | ("none") | ("ancient")) | ($AncientGene$ATAGene);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AncientGene$ATAGene_ = $AncientGene$ATAGene$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$TransportRingsBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$AbstractTransporterBlock, $AbstractTransporterBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractTransporterBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TransportRingsBlock extends $AbstractTransporterBlock {
static readonly "FACING": $DirectionProperty
static readonly "ACTIVATED": $BooleanProperty
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
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportRingsBlock$Type = ($TransportRingsBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransportRingsBlock_ = $TransportRingsBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Address" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Address$Type, $Address$Type$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Address$Type"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Address$Immutable, $Address$Immutable$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Address$Immutable"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $Address {
static readonly "ADDRESS_DIVIDER": string
static readonly "MIN_ADDRESS_LENGTH": integer
static readonly "MAX_ADDRESS_LENGTH": integer

constructor(arg0: $Map$Type<(double), (double)>)
constructor(arg0: string)
constructor(arg0: (integer)[])
constructor()
constructor(arg0: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLength"(): integer
public "isEmpty"(): boolean
public "toArray"(): (integer)[]
public "getType"(): $Address$Type
public "copy"(): $Address
public "reset"(): $Address
public "getSymbol"(arg0: integer): integer
public "fromString"(arg0: string): $Address
public "getDimension"(): $Optional<(string)>
public "addSymbol"(arg0: integer): $Address
public "containsSymbol"(arg0: integer): boolean
public "immutable"(): $Address$Immutable
public "isComplete"(): boolean
public static "addressStringToIntArray"(arg0: string): (integer)[]
public "getMaxAddressLength"(): integer
public static "canBeTransformedToAddress"(arg0: string): boolean
public static "addressIntArrayToString"(arg0: (integer)[]): string
public "fromDimension"(arg0: $ServerLevel$Type, arg1: $ResourceKey$Type<($Level$Type)>): $Address
public "isFromDimension"(): boolean
public "isBuffer"(): boolean
public "fromTable"(arg0: $Map$Type<(double), (double)>): $Address
public "canGrow"(): boolean
public "toComponent"(arg0: boolean): $Component
public "fromArray"(arg0: (integer)[]): $Address
public "hasPointOfOrigin"(): boolean
public "randomAddress"(arg0: integer, arg1: integer, arg2: long): $Address
public "randomAddress"(arg0: integer, arg1: integer, arg2: integer, arg3: long): $Address
public static "integerListToArray"(arg0: $List$Type<(integer)>): (integer)[]
public "fromIntegerList"(arg0: $List$Type<(integer)>): $Address
get "length"(): integer
get "empty"(): boolean
get "type"(): $Address$Type
get "dimension"(): $Optional<(string)>
get "complete"(): boolean
get "maxAddressLength"(): integer
get "buffer"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Address$Type = ($Address);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Address_ = $Address$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$MilkyWayStargateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractStargateBaseBlock, $AbstractStargateBaseBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBaseBlock"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $MilkyWayStargateBlock extends $AbstractStargateBaseBlock {
static readonly "EMPTY": string
static readonly "LOCAL_POINT_OF_ORIGIN": string
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRing"(): $AbstractStargateRingBlock
public "ringState"(): $BlockState
get "ring"(): $AbstractStargateRingBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MilkyWayStargateBlock$Type = ($MilkyWayStargateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MilkyWayStargateBlock_ = $MilkyWayStargateBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/world/features/configuration/$SpireConfiguration" {
import {$BlockStateProvider, $BlockStateProvider$Type} from "packages/net/minecraft/world/level/levelgen/feature/stateproviders/$BlockStateProvider"
import {$ConfiguredFeature, $ConfiguredFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$ConfiguredFeature"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$FeatureConfiguration, $FeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$FeatureConfiguration"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $SpireConfiguration implements $FeatureConfiguration {
static readonly "CODEC": $Codec<($SpireConfiguration)>
readonly "fillingProvider": $BlockStateProvider
readonly "fillingPlacements": $BlockStateProvider
readonly "canProtrudeThrough": $TagKey<($Block)>

constructor(arg0: $BlockStateProvider$Type, arg1: $BlockStateProvider$Type, arg2: $TagKey$Type<($Block$Type)>)

public "getFeatures"(): $Stream<($ConfiguredFeature<(any), (any)>)>
get "features"(): $Stream<($ConfiguredFeature<(any), (any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpireConfiguration$Type = ($SpireConfiguration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpireConfiguration_ = $SpireConfiguration$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$HeavyNaquadahLiquidizerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractNaquadahLiquidizerBlock, $AbstractNaquadahLiquidizerBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractNaquadahLiquidizerBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $HeavyNaquadahLiquidizerBlock extends $AbstractNaquadahLiquidizerBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDroppedBlock"(): $Block
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeavyNaquadahLiquidizerBlock$Type = ($HeavyNaquadahLiquidizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeavyNaquadahLiquidizerBlock_ = $HeavyNaquadahLiquidizerBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$CrystallizerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractCrystallizerBlock, $AbstractCrystallizerBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractCrystallizerBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $CrystallizerBlock extends $AbstractCrystallizerBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDroppedBlock"(): $Block
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystallizerBlock$Type = ($CrystallizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystallizerBlock_ = $CrystallizerBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$RingRemoteItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$TransportRingsEntity, $TransportRingsEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$TransportRingsEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $RingRemoteItem extends $Item {
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
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "canActivate"(arg0: $ItemStack$Type): boolean
public "findNearestTransportRings"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: integer): $Optional<($TransportRingsEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RingRemoteItem$Type = ($RingRemoteItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RingRemoteItem_ = $RingRemoteItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/block_entities/dhd/$AbstractDHDEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Vec3i, $Vec3i$Type} from "packages/net/minecraft/core/$Vec3i"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Address, $Address$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Address"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$EnergyBlockEntity, $EnergyBlockEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/$EnergyBlockEntity"
import {$SGJourneyEnergy, $SGJourneyEnergy$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$SGJourneyEnergy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractDHDEntity extends $EnergyBlockEntity {
static readonly "CRYSTAL_MODE": string
static readonly "ENERGY_TRANSFER": string
static readonly "CALL_FORWARDING": string
static readonly "STARGATE_POS": string
static readonly "DEFAULT_ENERGY_TARGET": integer
static readonly "DEFAULT_ENERGY_TRANSFER": integer
static readonly "DEFAULT_CONNECTION_DISTANCE": integer
readonly "ENERGY_STORAGE": $SGJourneyEnergy
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getAddress"(): $Address
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $AbstractDHDEntity$Type): void
public "onLoad"(): void
public "getDirection"(): $Direction
public "getEnergyTarget"(): long
public "updateClient"(): void
public "load"(arg0: $CompoundTag$Type): void
public "setStargate"(): void
public "unsetStargate"(): void
public "getMaxDistance"(): integer
public "engageChevron"(arg0: integer): void
public "isSymbolEngaged"(arg0: integer): boolean
public "isCenterButtonEngaged"(): boolean
public "updateDHD"(arg0: $Address$Type, arg1: boolean): void
public "setAddress"(arg0: $Address$Type): void
public "isCorrectEnergySide"(arg0: $Direction$Type): boolean
public "callForwardingEnabled"(): boolean
public "sendMessageToNearbyPlayers"(arg0: $Component$Type, arg1: integer): void
public "getMaxEnergyTransfer"(): long
public "setCenterButtonEngaged"(arg0: boolean): void
public "findNearestStargate"(arg0: integer): $Optional<($Vec3i)>
public "setCallForwardingState"(arg0: boolean): void
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "address"(): $Address
get "direction"(): $Direction
get "energyTarget"(): long
get "maxDistance"(): integer
get "centerButtonEngaged"(): boolean
set "address"(value: $Address$Type)
get "maxEnergyTransfer"(): long
set "centerButtonEngaged"(value: boolean)
set "callForwardingState"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDHDEntity$Type = ($AbstractDHDEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDHDEntity_ = $AbstractDHDEntity$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/tools/$SGJourneyHoeItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SGJourneyHoeItem extends $HoeItem {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
 "speed": float
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGJourneyHoeItem$Type = ($SGJourneyHoeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGJourneyHoeItem_ = $SGJourneyHoeItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$PDAItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AncientGene$ATAGene, $AncientGene$ATAGene$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$AncientGene$ATAGene"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AncientTech, $AncientTech$Type} from "packages/net/povstalec/sgjourney/common/tech/$AncientTech"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GoauldTech, $GoauldTech$Type} from "packages/net/povstalec/sgjourney/common/tech/$GoauldTech"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PDAItem extends $Item implements $AncientTech, $GoauldTech {
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
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "getGeneType"(arg0: $Entity$Type): $AncientGene$ATAGene
public "canUseAncientTech"(arg0: $Entity$Type): boolean
public "canUseAncientTech"(arg0: boolean, arg1: $Entity$Type): boolean
public "canUseGoauldTech"(arg0: $Entity$Type): boolean
public "canUseGoauldTech"(arg0: boolean, arg1: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PDAItem$Type = ($PDAItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PDAItem_ = $PDAItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$ArcheologyTableBlock" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $ArcheologyTableBlock extends $DirectionalBlock {
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
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getRenderType"(arg0: $BlockState$Type): $RenderShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArcheologyTableBlock$Type = ($ArcheologyTableBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ArcheologyTableBlock_ = $ArcheologyTableBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/armor/$FalconArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $FalconArmorItem extends $ArmorItem {
readonly "type": $ArmorItem$Type
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FalconArmorItem$Type = ($FalconArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FalconArmorItem_ = $FalconArmorItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/block_entities/tech/$TransportRingsEntity" {
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$AbstractTransporterEntity, $AbstractTransporterEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractTransporterEntity"
import {$SGJourneyEnergy, $SGJourneyEnergy$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$SGJourneyEnergy"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $TransportRingsEntity extends $AbstractTransporterEntity {
 "isSender": boolean
 "emptySpace": integer
 "ticks": integer
 "progressOld": integer
 "progress": integer
 "transportHeight": integer
 "transportLight": integer
static readonly "ADD_TO_NETWORK": string
static readonly "ID": string
static readonly "CUSTOM_NAME": string
readonly "ENERGY_STORAGE": $SGJourneyEnergy
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockPos$Type, arg1: $BlockState$Type)

public "capacity"(): long
public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $TransportRingsEntity$Type): void
public "activate"(arg0: $BlockPos$Type): void
public "deactivate"(): void
public "getStatus"(): void
public "setProgress"(arg0: integer): void
public "getRenderBoundingBox"(): $AABB
public "setActivated"(arg0: boolean): void
public "getTransportHeight"(): integer
public "maxReceive"(): long
public "maxExtract"(): long
public "isActivated"(): boolean
public "getProgress"(arg0: float): float
public "canTransport"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "status"(): void
set "progress"(value: integer)
get "renderBoundingBox"(): $AABB
set "activated"(value: boolean)
get "transportHeight"(): integer
get "activated"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransportRingsEntity$Type = ($TransportRingsEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransportRingsEntity_ = $TransportRingsEntity$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$CartoucheBlock$Stone" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CartoucheBlock, $CartoucheBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/$CartoucheBlock"

export class $CartoucheBlock$Stone extends $CartoucheBlock {
static readonly "ADDRESS_TABLE": string
static readonly "DIMENSION": string
static readonly "ADDRESS": string
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
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

public "getItem"(): $ItemLike
public "getBlock"(): $Block
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
get "item"(): $ItemLike
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartoucheBlock$Stone$Type = ($CartoucheBlock$Stone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartoucheBlock$Stone_ = $CartoucheBlock$Stone$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$TransferCrystalItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractCrystalItem, $AbstractCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$AbstractCrystalItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransferCrystalItem extends $AbstractCrystalItem {
static readonly "DEFAULT_MAX_TRANSFER": integer
static readonly "ADVANCED_MAX_TRANSFER": integer
static readonly "TRANSFER_LIMIT": string
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
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
public static "tagSetup"(arg0: integer): $CompoundTag
public static "getMaxTransfer"(arg0: $ItemStack$Type): integer
public "getMaxTransfer"(): integer
get "maxTransfer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferCrystalItem$Type = ($TransferCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferCrystalItem_ = $TransferCrystalItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractStargateBlock, $AbstractStargateBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$AbstractStargateEntity, $AbstractStargateEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/stargate/$AbstractStargateEntity"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"

export class $AbstractStargateRingBlock extends $AbstractStargateBlock {
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: double, arg2: double)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getStargate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $AbstractStargateEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStargateRingBlock$Type = ($AbstractStargateRingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStargateRingBlock_ = $AbstractStargateRingBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$UniverseStargateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$AbstractStargateBaseBlock, $AbstractStargateBaseBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBaseBlock"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $UniverseStargateBlock extends $AbstractStargateBaseBlock {
static readonly "EMPTY": string
static readonly "LOCAL_POINT_OF_ORIGIN": string
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRing"(): $AbstractStargateRingBlock
public "ringState"(): $BlockState
get "ring"(): $AbstractStargateRingBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UniverseStargateBlock$Type = ($UniverseStargateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UniverseStargateBlock_ = $UniverseStargateBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/dhd/$MilkyWayDHDBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractDHDBlock, $AbstractDHDBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/dhd/$AbstractDHDBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $MilkyWayDHDBlock extends $AbstractDHDBlock implements $SimpleWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDHD"(): $Block
public static "milkyWayCrystalSetup"(): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "dHD"(): $Block
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MilkyWayDHDBlock$Type = ($MilkyWayDHDBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MilkyWayDHDBlock_ = $MilkyWayDHDBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$NaquadahGeneratorMarkIIBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NaquadahGeneratorBlock, $NaquadahGeneratorBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/$NaquadahGeneratorBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NaquadahGeneratorMarkIIBlock extends $NaquadahGeneratorBlock {
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
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NaquadahGeneratorMarkIIBlock$Type = ($NaquadahGeneratorMarkIIBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NaquadahGeneratorMarkIIBlock_ = $NaquadahGeneratorMarkIIBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blockstates/$InterfaceMode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $InterfaceMode extends $Enum<($InterfaceMode)> implements $StringRepresentable {
static readonly "OFF": $InterfaceMode
static readonly "RING_SEGMENT": $InterfaceMode
static readonly "RING_ROTATION": $InterfaceMode
static readonly "CHEVRONS_ACTIVE": $InterfaceMode
static readonly "WORMHOLE_ACTIVE": $InterfaceMode


public static "values"(): ($InterfaceMode)[]
public static "valueOf"(arg0: string): $InterfaceMode
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
export type $InterfaceMode$Type = (("ring_segment") | ("ring_rotation") | ("chevrons_active") | ("wormhole_active") | ("off")) | ($InterfaceMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceMode_ = $InterfaceMode$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$NaquadahLiquidizerBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$AbstractNaquadahLiquidizerBlock, $AbstractNaquadahLiquidizerBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractNaquadahLiquidizerBlock"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $NaquadahLiquidizerBlock extends $AbstractNaquadahLiquidizerBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDroppedBlock"(): $Block
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NaquadahLiquidizerBlock$Type = ($NaquadahLiquidizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NaquadahLiquidizerBlock_ = $NaquadahLiquidizerBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractTransporterBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractTransporterBlock extends $BaseEntityBlock {
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


public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public static "excludeFromNetwork"(arg0: $ItemStack$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTransporterBlock$Type = ($AbstractTransporterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTransporterBlock_ = $AbstractTransporterBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/recipe/$CrystallizerRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$CrystallizerRecipe, $CrystallizerRecipe$Type} from "packages/net/povstalec/sgjourney/common/recipe/$CrystallizerRecipe"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrystallizerRecipe$Serializer implements $RecipeSerializer<($CrystallizerRecipe)> {
static readonly "INSTANCE": $CrystallizerRecipe$Serializer
static readonly "ID": $ResourceLocation

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $CrystallizerRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $CrystallizerRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $CrystallizerRecipe$Type): void
public static "getIngredient"(arg0: $Map$Type<(string), ($JsonElement$Type)>): $Pair<($Ingredient), (integer)>
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $CrystallizerRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystallizerRecipe$Serializer$Type = ($CrystallizerRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystallizerRecipe$Serializer_ = $CrystallizerRecipe$Serializer$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$SymbolBlock$Sandstone" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SymbolBlock, $SymbolBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/$SymbolBlock"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $SymbolBlock$Sandstone extends $SymbolBlock {
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
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

public "getItem"(): $ItemLike
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
get "item"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SymbolBlock$Sandstone$Type = ($SymbolBlock$Sandstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SymbolBlock$Sandstone_ = $SymbolBlock$Sandstone$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$ControlCrystalItem$Advanced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ControlCrystalItem, $ControlCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$ControlCrystalItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ControlCrystalItem$Advanced extends $ControlCrystalItem {
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

public "isAdvanced"(): boolean
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
get "advanced"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlCrystalItem$Advanced$Type = ($ControlCrystalItem$Advanced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlCrystalItem$Advanced_ = $ControlCrystalItem$Advanced$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$CommunicationCrystalItem$Advanced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$CommunicationCrystalItem, $CommunicationCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$CommunicationCrystalItem"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CommunicationCrystalItem$Advanced extends $CommunicationCrystalItem {
static readonly "DEFAULT_MAX_DISTANCE": integer
static readonly "ADVANCED_MAX_DISTANCE": integer
static readonly "DEFAULT_FREQUENCY": integer
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

public "isAdvanced"(): boolean
public "getMaxDistance"(): integer
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
get "advanced"(): boolean
get "maxDistance"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CommunicationCrystalItem$Advanced$Type = ($CommunicationCrystalItem$Advanced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CommunicationCrystalItem$Advanced_ = $CommunicationCrystalItem$Advanced$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$StaffWeaponItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StaffWeaponItem extends $Item {
static readonly "IS_OPEN": string
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

public static "isOpen"(arg0: $ItemStack$Type): boolean
public "getFluidStack"(arg0: $ItemStack$Type): $FluidStack
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "setOpen"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type, arg3: boolean): void
public "getNaquadahAmount"(arg0: $ItemStack$Type): integer
public "isCorrectFluid"(arg0: $FluidStack$Type): boolean
public "depleteLiquidNaquadah"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StaffWeaponItem$Type = ($StaffWeaponItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StaffWeaponItem_ = $StaffWeaponItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Stargate$Feedback" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Stargate$Feedback extends $Enum<($Stargate$Feedback)> {
static readonly "NONE": $Stargate$Feedback
static readonly "UNKNOWN_ERROR": $Stargate$Feedback
static readonly "SYMBOL_ENCODED": $Stargate$Feedback
static readonly "SYMBOL_IN_ADDRESS": $Stargate$Feedback
static readonly "SYMBOL_OUT_OF_BOUNDS": $Stargate$Feedback
static readonly "ENCODE_WHEN_CONNECTED": $Stargate$Feedback
static readonly "CONNECTION_ESTABLISHED_SYSTEM_WIDE": $Stargate$Feedback
static readonly "CONNECTION_ESTABLISHED_INTERSTELLAR": $Stargate$Feedback
static readonly "CONNECTION_ESTABLISHED_INTERGALACTIC": $Stargate$Feedback
static readonly "INCOMPLETE_ADDRESS": $Stargate$Feedback
static readonly "INVALID_ADDRESS": $Stargate$Feedback
static readonly "NOT_ENOUGH_POWER": $Stargate$Feedback
static readonly "SELF_OBSTRUCTED": $Stargate$Feedback
static readonly "TARGET_OBSTRUCTED": $Stargate$Feedback
static readonly "SELF_DIAL": $Stargate$Feedback
static readonly "SAME_SYSTEM_DIAL": $Stargate$Feedback
static readonly "ALREADY_CONNECTED": $Stargate$Feedback
static readonly "NO_GALAXY": $Stargate$Feedback
static readonly "NO_DIMENSIONS": $Stargate$Feedback
static readonly "NO_STARGATES": $Stargate$Feedback
static readonly "TARGET_RESTRICTED": $Stargate$Feedback
static readonly "INVALID_8_CHEVRON_ADDRESS": $Stargate$Feedback
static readonly "INVALID_SYSTEM_WIDE_CONNECTION": $Stargate$Feedback
static readonly "WHITELISTED_TARGET": $Stargate$Feedback
static readonly "WHITELISTED_SELF": $Stargate$Feedback
static readonly "BLACKLISTED_TARGET": $Stargate$Feedback
static readonly "BLACKLISTED_SELF": $Stargate$Feedback
static readonly "CONNECTION_ENDED_BY_DISCONNECT": $Stargate$Feedback
static readonly "CONNECTION_ENDED_BY_POINT_OF_ORIGIN": $Stargate$Feedback
static readonly "CONNECTION_ENDED_BY_NETWORK": $Stargate$Feedback
static readonly "CONNECTION_ENDED_BY_AUTOCLOSE": $Stargate$Feedback
static readonly "EXCEEDED_CONNECTION_TIME": $Stargate$Feedback
static readonly "RAN_OUT_OF_POWER": $Stargate$Feedback
static readonly "CONNECTION_REROUTED": $Stargate$Feedback
static readonly "WRONG_DISCONNECT_SIDE": $Stargate$Feedback
static readonly "CONNECTION_FORMING": $Stargate$Feedback
static readonly "STARGATE_DESTROYED": $Stargate$Feedback
static readonly "COULD_NOT_REACH_TARGET_STARGATE": $Stargate$Feedback
static readonly "INTERRUPTED_BY_INCOMING_CONNECTION": $Stargate$Feedback
static readonly "CHEVRON_RAISED": $Stargate$Feedback
static readonly "ROTATING": $Stargate$Feedback
static readonly "ROTATION_BLOCKED": $Stargate$Feedback
static readonly "NOT_ROTATING": $Stargate$Feedback
static readonly "ROTATION_STOPPED": $Stargate$Feedback
static readonly "CHEVRON_ALREADY_OPENED": $Stargate$Feedback
static readonly "CHEVRON_ALREADY_CLOSED": $Stargate$Feedback
static readonly "CHEVRON_NOT_RAISED": $Stargate$Feedback
static readonly "CANNOT_ENCODE_POINT_OF_ORIGIN": $Stargate$Feedback


public static "values"(): ($Stargate$Feedback)[]
public static "valueOf"(arg0: string): $Stargate$Feedback
public "getMessage"(): string
public "isError"(): boolean
public "getCode"(): integer
public "playFailSound"(): boolean
public "getFeedbackMessage"(): $Component
get "message"(): string
get "error"(): boolean
get "code"(): integer
get "feedbackMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stargate$Feedback$Type = (("interrupted_by_incoming_connection") | ("not_rotating") | ("rotating") | ("symbol_in_address") | ("symbol_out_of_bounds") | ("connection_established_system_wide") | ("blacklisted_self") | ("same_system_dial") | ("no_galaxy") | ("connection_ended_by_network") | ("encode_when_connected") | ("connection_ended_by_point_of_origin") | ("none") | ("rotation_stopped") | ("invalid_8_chevron_address") | ("chevron_not_raised") | ("unknown_error") | ("symbol_encoded") | ("connection_forming") | ("invalid_address") | ("connection_established_intergalactic") | ("whitelisted_target") | ("connection_established_interstellar") | ("already_connected") | ("connection_ended_by_autoclose") | ("connection_rerouted") | ("no_stargates") | ("ran_out_of_power") | ("wrong_disconnect_side") | ("exceeded_connection_time") | ("chevron_raised") | ("target_obstructed") | ("invalid_system_wide_connection") | ("target_restricted") | ("connection_ended_by_disconnect") | ("not_enough_power") | ("incomplete_address") | ("chevron_already_closed") | ("blacklisted_target") | ("whitelisted_self") | ("self_dial") | ("no_dimensions") | ("self_obstructed") | ("stargate_destroyed") | ("cannot_encode_point_of_origin") | ("chevron_already_opened") | ("rotation_blocked") | ("could_not_reach_target_stargate")) | ($Stargate$Feedback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stargate$Feedback_ = $Stargate$Feedback$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$CartoucheBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $CartoucheBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
static readonly "ADDRESS_TABLE": string
static readonly "DIMENSION": string
static readonly "ADDRESS": string
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
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

public "getItem"(): $ItemLike
public "getBlock"(): $Block
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "item"(): $ItemLike
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartoucheBlock$Type = ($CartoucheBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartoucheBlock_ = $CartoucheBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"

export class $StargatePart extends $Enum<($StargatePart)> implements $StringRepresentable {
static readonly "BASE": $StargatePart
static readonly "LEFT": $StargatePart
static readonly "LEFT2": $StargatePart
static readonly "LEFT2_ABOVE": $StargatePart
static readonly "LEFT3_ABOVE": $StargatePart
static readonly "LEFT3_ABOVE2": $StargatePart
static readonly "LEFT3_ABOVE3": $StargatePart
static readonly "LEFT3_ABOVE4": $StargatePart
static readonly "LEFT3_ABOVE5": $StargatePart
static readonly "LEFT2_ABOVE5": $StargatePart
static readonly "LEFT2_ABOVE6": $StargatePart
static readonly "LEFT_ABOVE6": $StargatePart
static readonly "ABOVE6": $StargatePart
static readonly "RIGHT_ABOVE6": $StargatePart
static readonly "RIGHT2_ABOVE6": $StargatePart
static readonly "RIGHT2_ABOVE5": $StargatePart
static readonly "RIGHT3_ABOVE5": $StargatePart
static readonly "RIGHT3_ABOVE4": $StargatePart
static readonly "RIGHT3_ABOVE3": $StargatePart
static readonly "RIGHT3_ABOVE2": $StargatePart
static readonly "RIGHT3_ABOVE": $StargatePart
static readonly "RIGHT2_ABOVE": $StargatePart
static readonly "RIGHT2": $StargatePart
static readonly "RIGHT": $StargatePart
static readonly "LEFT2_ABOVE4": $StargatePart
static readonly "LEFT_ABOVE5": $StargatePart
static readonly "ABOVE5": $StargatePart
static readonly "RIGHT_ABOVE5": $StargatePart
static readonly "RIGHT2_ABOVE4": $StargatePart
static readonly "DEFAULT_PARTS": $ArrayList<($StargatePart)>
static readonly "TOLLAN_PARTS": $ArrayList<($StargatePart)>


public "toString"(): string
public static "values"(): ($StargatePart)[]
public static "valueOf"(arg0: string): $StargatePart
public "getBaseBlockPos"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $Orientation$Type): $BlockPos
public "getRelativeRingPos"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $Orientation$Type): $Vec3
public "getSerializedName"(): string
public "getRingPos"(arg0: $BlockPos$Type, arg1: $Direction$Type, arg2: $Orientation$Type): $BlockPos
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StargatePart$Type = (("left2_above4") | ("left3_above2") | ("left3_above3") | ("left3_above4") | ("left2_above6") | ("right2") | ("left3_above5") | ("left2_above5") | ("right2_above") | ("right2_above6") | ("right2_above5") | ("right2_above4") | ("right3_above5") | ("right3_above2") | ("left_above5") | ("left_above6") | ("right_above5") | ("right3_above4") | ("right3_above3") | ("above6") | ("right_above6") | ("above5") | ("left2") | ("left3_above") | ("right") | ("left2_above") | ("left") | ("base") | ("right3_above")) | ($StargatePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StargatePart_ = $StargatePart$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/blocks/$DHDItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DHDItem extends $BlockItem {
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

public static "updateCustomBlockEntityTag"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DHDItem$Type = ($DHDItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DHDItem_ = $DHDItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$ControlCrystalItem$Large" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ControlCrystalItem, $ControlCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$ControlCrystalItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ControlCrystalItem$Large extends $ControlCrystalItem {
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

public "isLarge"(): boolean
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
get "large"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlCrystalItem$Large$Type = ($ControlCrystalItem$Large);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlCrystalItem$Large_ = $ControlCrystalItem$Large$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/fluids/$HeavyNaquadahFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $HeavyNaquadahFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeavyNaquadahFluidType$Type = ($HeavyNaquadahFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeavyNaquadahFluidType_ = $HeavyNaquadahFluidType$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$PegasusStargateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractStargateBaseBlock, $AbstractStargateBaseBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBaseBlock"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $PegasusStargateBlock extends $AbstractStargateBaseBlock {
static readonly "EMPTY": string
static readonly "LOCAL_POINT_OF_ORIGIN": string
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRing"(): $AbstractStargateRingBlock
public "ringState"(): $BlockState
public static "localSymbols"(arg0: $ItemStack$Type): $ItemStack
get "ring"(): $AbstractStargateRingBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PegasusStargateBlock$Type = ($PegasusStargateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PegasusStargateBlock_ = $PegasusStargateBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$SymbolBlock" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"
import {$DirectionalBlock, $DirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$DirectionalBlock"

export class $SymbolBlock extends $DirectionalBlock implements $EntityBlock {
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
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


public "getItem"(): $ItemLike
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "item"(): $ItemLike
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SymbolBlock$Type = ($SymbolBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SymbolBlock_ = $SymbolBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$SecretSwitchBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SecretSwitchBlock extends $Block {
static readonly "POWERED": $BooleanProperty
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

public "isSignalSource"(arg0: $BlockState$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SecretSwitchBlock$Type = ($SecretSwitchBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SecretSwitchBlock_ = $SecretSwitchBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$ClassicStargateBaseBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ClassicStargateBaseBlock extends $HorizontalDirectionalBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassicStargateBaseBlock$Type = ($ClassicStargateBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassicStargateBaseBlock_ = $ClassicStargateBaseBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$FirePitBlock" {
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
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $FirePitBlock extends $Block {
static readonly "LIT": $BooleanProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $ParticleOptions$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FirePitBlock$Type = ($FirePitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FirePitBlock_ = $FirePitBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$ChevronBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
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
import {$FrontAndTop, $FrontAndTop$Type} from "packages/net/minecraft/core/$FrontAndTop"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"

export class $ChevronBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "LIT": $BooleanProperty
static readonly "ORIENTATION": $EnumProperty<($FrontAndTop)>
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
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
export type $ChevronBlock$Type = ($ChevronBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChevronBlock_ = $ChevronBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$StargateUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AbstractStargateBlock, $AbstractStargateBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBlock"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AbstractStargateBaseBlock, $AbstractStargateBaseBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBaseBlock"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StargateUpgradeItem extends $Item {
static readonly "TYPE": string
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
public static "getStargateString"(arg0: $ItemStack$Type): $Optional<(string)>
public static "stargateType"<StargateBlock extends $AbstractStargateBlock>(arg0: StargateBlock): $ItemStack
public "getStargateBaseBlock"(arg0: $ItemStack$Type): $Optional<($AbstractStargateBaseBlock)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StargateUpgradeItem$Type = ($StargateUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StargateUpgradeItem_ = $StargateUpgradeItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$AdvancedCrystalInterfaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InterfaceMode, $InterfaceMode$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$InterfaceMode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractInterfaceBlock, $AbstractInterfaceBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractInterfaceBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AdvancedCrystalInterfaceBlock extends $AbstractInterfaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "UPDATE": $BooleanProperty
static readonly "MODE": $EnumProperty<($InterfaceMode)>
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

public "getCapacity"(): long
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDroppedBlock"(): $Block
get "capacity"(): long
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedCrystalInterfaceBlock$Type = ($AdvancedCrystalInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedCrystalInterfaceBlock_ = $AdvancedCrystalInterfaceBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/$StargatePeripheralWrapper" {
import {$StargatePeripheral, $StargatePeripheral$Type} from "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/peripherals/$StargatePeripheral"
import {$AbstractInterfaceEntity$InterfaceType, $AbstractInterfaceEntity$InterfaceType$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity$InterfaceType"

export class $StargatePeripheralWrapper {

constructor(arg0: $StargatePeripheral$Type, arg1: $AbstractInterfaceEntity$InterfaceType$Type)

public "getType"(): $AbstractInterfaceEntity$InterfaceType
public "getPeripheral"(): $StargatePeripheral
get "type"(): $AbstractInterfaceEntity$InterfaceType
get "peripheral"(): $StargatePeripheral
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StargatePeripheralWrapper$Type = ($StargatePeripheralWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StargatePeripheralWrapper_ = $StargatePeripheralWrapper$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Wormhole" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Stargate$WormholeTravel, $Stargate$WormholeTravel$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Stargate$WormholeTravel"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$ITeleporter, $ITeleporter$Type} from "packages/net/minecraftforge/common/util/$ITeleporter"
import {$AbstractStargateEntity, $AbstractStargateEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/stargate/$AbstractStargateEntity"
import {$PortalInfo, $PortalInfo$Type} from "packages/net/minecraft/world/level/portal/$PortalInfo"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Wormhole implements $ITeleporter {
static readonly "MIN_SPEED": double

constructor()

public "doWormhole"(arg0: $AbstractStargateEntity$Type, arg1: $AbstractStargateEntity$Type, arg2: $Entity$Type, arg3: $Vec3$Type, arg4: $Stargate$WormholeTravel$Type): void
public "wormholeEntities"(arg0: $AbstractStargateEntity$Type, arg1: $AbstractStargateEntity$Type, arg2: $Stargate$WormholeTravel$Type): boolean
public "findCandidates"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $Direction$Type): boolean
public "hasCandidates"(): boolean
public "shouldWormhole"(arg0: $AbstractStargateEntity$Type, arg1: $Entity$Type, arg2: integer, arg3: double, arg4: double, arg5: double): boolean
public "reverseIfNeeded"(arg0: boolean, arg1: double): double
public "getPortalInfo"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $Function$Type<($ServerLevel$Type), ($PortalInfo$Type)>): $PortalInfo
public "placeEntity"(arg0: $Entity$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type, arg3: float, arg4: $Function$Type<(boolean), ($Entity$Type)>): $Entity
public "isVanilla"(): boolean
public "playTeleportSound"(arg0: $ServerPlayer$Type, arg1: $ServerLevel$Type, arg2: $ServerLevel$Type): boolean
get "vanilla"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wormhole$Type = ($Wormhole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Wormhole_ = $Wormhole$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$PegasusStargateRingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $PegasusStargateRingBlock extends $AbstractStargateRingBlock {
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PegasusStargateRingBlock$Type = ($PegasusStargateRingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PegasusStargateRingBlock_ = $PegasusStargateRingBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/blocks/$TransporterBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransporterBlockItem extends $BlockItem {
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

public static "updateCustomBlockEntityTag"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterBlockItem$Type = ($TransporterBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransporterBlockItem_ = $TransporterBlockItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$ClassicStargateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractStargateBaseBlock, $AbstractStargateBaseBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBaseBlock"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $ClassicStargateBlock extends $AbstractStargateBaseBlock {
static readonly "EMPTY": string
static readonly "LOCAL_POINT_OF_ORIGIN": string
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRing"(): $AbstractStargateRingBlock
public "ringState"(): $BlockState
public "upgradeStargate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): boolean
get "ring"(): $AbstractStargateRingBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassicStargateBlock$Type = ($ClassicStargateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassicStargateBlock_ = $ClassicStargateBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/tools/$SGJourneySwordItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SGJourneySwordItem extends $SwordItem {
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

constructor(arg0: $Tier$Type, arg1: integer, arg2: float, arg3: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGJourneySwordItem$Type = ($SGJourneySwordItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGJourneySwordItem_ = $SGJourneySwordItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/recipe/$AdvancedCrystallizerRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$SimpleContainer, $SimpleContainer$Type} from "packages/net/minecraft/world/$SimpleContainer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $AdvancedCrystallizerRecipe implements $Recipe<($SimpleContainer)> {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $NonNullList$Type<($Ingredient$Type)>, arg3: (integer)[], arg4: boolean, arg5: boolean)

public "matches"(arg0: $SimpleContainer$Type, arg1: $Level$Type): boolean
public "getId"(): $ResourceLocation
public "assemble"(arg0: $SimpleContainer$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getAmountInSlot"(arg0: integer): integer
public "depletePrimary"(): boolean
public "depleteSecondary"(): boolean
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "itemStackMatches"(arg0: $SimpleContainer$Type, arg1: integer): boolean
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "showNotification"(): boolean
public "getRemainingItems"(arg0: $SimpleContainer$Type): $NonNullList<($ItemStack)>
public "isIncomplete"(): boolean
public "getType"(): $ResourceLocation
public "getMod"(): string
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
public "getGroup"(): string
public "setGroup"(group: string): void
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "getOrCreateId"(): $ResourceLocation
public "getSchema"(): $RecipeSchema
public "hasInput"(match: $ReplacementMatch$Type): boolean
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $ResourceLocation
get "mod"(): string
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
get "schema"(): $RecipeSchema
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedCrystallizerRecipe$Type = ($AdvancedCrystallizerRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvancedCrystallizerRecipe_ = $AdvancedCrystallizerRecipe$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBaseBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$AbstractStargateBlock, $AbstractStargateBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$AbstractStargateEntity, $AbstractStargateEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/stargate/$AbstractStargateEntity"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $AbstractStargateBaseBlock extends $AbstractStargateBlock implements $EntityBlock {
static readonly "EMPTY": string
static readonly "LOCAL_POINT_OF_ORIGIN": string
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: double, arg2: double)

public "setVariant"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getRing"(): $AbstractStargateRingBlock
public "updateStargate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $StargateConnection$State$Type, arg4: integer): void
public "getStargate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $AbstractStargateEntity
public static "localPointOfOrigin"(arg0: $ItemStack$Type): $ItemStack
public static "excludeFromNetwork"(arg0: $ItemStack$Type): $ItemStack
public static "destroyStargate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $ArrayList$Type<($StargatePart$Type)>, arg3: $Direction$Type, arg4: $Orientation$Type): void
public "ringState"(): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "ring"(): $AbstractStargateRingBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStargateBaseBlock$Type = ($AbstractStargateBaseBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStargateBaseBlock_ = $AbstractStargateBaseBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$NaquadahGeneratorMarkIBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NaquadahGeneratorBlock, $NaquadahGeneratorBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/$NaquadahGeneratorBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $NaquadahGeneratorMarkIBlock extends $NaquadahGeneratorBlock {
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
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NaquadahGeneratorMarkIBlock$Type = ($NaquadahGeneratorMarkIBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NaquadahGeneratorMarkIBlock_ = $NaquadahGeneratorMarkIBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractNaquadahLiquidizerBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractNaquadahLiquidizerBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getDroppedBlock"(): $Block
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractNaquadahLiquidizerBlock$Type = ($AbstractNaquadahLiquidizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractNaquadahLiquidizerBlock_ = $AbstractNaquadahLiquidizerBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/dhd/$ClassicDHDBlock" {
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
import {$AbstractDHDBlock, $AbstractDHDBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/dhd/$AbstractDHDBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ClassicDHDBlock extends $AbstractDHDBlock {
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
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDHD"(): $Block
get "dHD"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassicDHDBlock$Type = ($ClassicDHDBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassicDHDBlock_ = $ClassicDHDBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$EnergyCrystalItem$Advanced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnergyCrystalItem, $EnergyCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$EnergyCrystalItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyCrystalItem$Advanced extends $EnergyCrystalItem {
static readonly "DEFAULT_CAPACITY": integer
static readonly "DEFAULT_ENERGY_TRANSFER": integer
static readonly "ADVANCED_CAPACITY": integer
static readonly "ADVANCED_ENERGY_TRANSFER": integer
static readonly "ENERGY_LIMIT": string
static readonly "ENERGY": string
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

public "getCapacity"(): integer
public "isAdvanced"(): boolean
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
public "getTransfer"(): integer
get "capacity"(): integer
get "advanced"(): boolean
get "transfer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCrystalItem$Advanced$Type = ($EnergyCrystalItem$Advanced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCrystalItem$Advanced_ = $EnergyCrystalItem$Advanced$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$KaraKeshItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GoauldTech, $GoauldTech$Type} from "packages/net/povstalec/sgjourney/common/tech/$GoauldTech"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $KaraKeshItem extends $Item implements $GoauldTech {
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
public "canAttackBlock"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $LivingEntity$Type, arg3: $InteractionHand$Type): $InteractionResult
public "canUseGoauldTech"(arg0: $Entity$Type): boolean
public "canUseGoauldTech"(arg0: boolean, arg1: $Entity$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KaraKeshItem$Type = ($KaraKeshItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $KaraKeshItem_ = $KaraKeshItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/tech/$GoauldTech" {
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $GoauldTech {

 "canUseGoauldTech"(arg0: $Entity$Type): boolean
 "canUseGoauldTech"(arg0: boolean, arg1: $Entity$Type): boolean
}

export namespace $GoauldTech {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoauldTech$Type = ($GoauldTech);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GoauldTech_ = $GoauldTech$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/peripherals/$InterfacePeripheral" {
import {$IPeripheral, $IPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IPeripheral"
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$InterfaceMethod, $InterfaceMethod$Type} from "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/methods/$InterfaceMethod"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$IDynamicPeripheral, $IDynamicPeripheral$Type} from "packages/dan200/computercraft/api/peripheral/$IDynamicPeripheral"
import {$AbstractInterfaceEntity, $AbstractInterfaceEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"

export class $InterfacePeripheral implements $IPeripheral, $IDynamicPeripheral {

constructor(arg0: $AbstractInterfaceEntity$Type)

public "equals"(arg0: $IPeripheral$Type): boolean
public "getType"(): string
public "attach"(arg0: $IComputerAccess$Type): void
public "detach"(arg0: $IComputerAccess$Type): void
public "getMethodNames"(): (string)[]
public "getEnergyTarget"(): long
public "registerMethod"<ConnectedBlockEntity extends $BlockEntity>(arg0: $InterfaceMethod$Type<(ConnectedBlockEntity)>): void
public "getEnergy"(): long
public "callMethod"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: integer, arg3: $IArguments$Type): $MethodResult
public "getEnergyCapacity"(): long
public "getTarget"(): any
public "getAdditionalTypes"(): $Set<(string)>
get "type"(): string
get "methodNames"(): (string)[]
get "energyTarget"(): long
get "energy"(): long
get "energyCapacity"(): long
get "target"(): any
get "additionalTypes"(): $Set<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfacePeripheral$Type = ($InterfacePeripheral);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfacePeripheral_ = $InterfacePeripheral$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$MemoryCrystalItem$Advanced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$MemoryCrystalItem, $MemoryCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$MemoryCrystalItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemoryCrystalItem$Advanced extends $MemoryCrystalItem {
static readonly "DEFAULT_MEMORY_CAPACITY": integer
static readonly "ADVANCED_MEMORY_CAPACITY": integer
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

public "isAdvanced"(): boolean
public "getMemoryCapacity"(): integer
get "advanced"(): boolean
get "memoryCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCrystalItem$Advanced$Type = ($MemoryCrystalItem$Advanced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCrystalItem$Advanced_ = $MemoryCrystalItem$Advanced$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/dhd/$PegasusDHDBlock" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$AbstractDHDBlock, $AbstractDHDBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/dhd/$AbstractDHDBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"

export class $PegasusDHDBlock extends $AbstractDHDBlock implements $SimpleWaterloggedBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDHD"(): $Block
public static "pegasusCrystalSetup"(): $ItemStack
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "dHD"(): $Block
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PegasusDHDBlock$Type = ($PegasusDHDBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PegasusDHDBlock_ = $PegasusDHDBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock, $SimpleWaterloggedBlock$Type} from "packages/net/minecraft/world/level/block/$SimpleWaterloggedBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$PushReaction, $PushReaction$Type} from "packages/net/minecraft/world/level/material/$PushReaction"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$AbstractStargateEntity, $AbstractStargateEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/stargate/$AbstractStargateEntity"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractStargateBlock extends $Block implements $SimpleWaterloggedBlock {
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: double, arg2: double)

public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "getFluidState"(arg0: $BlockState$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getParts"(): $ArrayList<($StargatePart)>
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public "getStargate"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $AbstractStargateEntity
public "getShapeFromArray"(arg0: (($VoxelShape$Type)[])[], arg1: $Direction$Type, arg2: $Orientation$Type): $VoxelShape
public "getPistonPushReaction"(arg0: $BlockState$Type): $PushReaction
public "canPlaceLiquid"(arg0: $BlockGetter$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Fluid$Type): boolean
public "pickupBlock"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $ItemStack
public "placeLiquid"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $FluidState$Type): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$Type): $Optional<($SoundEvent)>
get "parts"(): $ArrayList<($StargatePart)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractStargateBlock$Type = ($AbstractStargateBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractStargateBlock_ = $AbstractStargateBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractCrystallizerBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $AbstractCrystallizerBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getDroppedBlock"(): $Block
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCrystallizerBlock$Type = ($AbstractCrystallizerBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCrystallizerBlock_ = $AbstractCrystallizerBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Stargate$Gen" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Stargate$Gen extends $Enum<($Stargate$Gen)> {
static readonly "NONE": $Stargate$Gen
static readonly "GEN_1": $Stargate$Gen
static readonly "GEN_2": $Stargate$Gen
static readonly "GEN_3": $Stargate$Gen


public static "values"(): ($Stargate$Gen)[]
public static "valueOf"(arg0: string): $Stargate$Gen
public "isNewer"(arg0: $Stargate$Gen$Type): boolean
public static "intToGen"(arg0: integer): $Stargate$Gen
public "getGen"(): integer
get "gen"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stargate$Gen$Type = (("gen_2") | ("gen_1") | ("none") | ("gen_3")) | ($Stargate$Gen);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stargate$Gen_ = $Stargate$Gen$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$SyringeItem$Contents" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $SyringeItem$Contents extends $Enum<($SyringeItem$Contents)> {
static readonly "EMPTY": $SyringeItem$Contents
static readonly "BLOOD": $SyringeItem$Contents
static readonly "PROTOTYPE_ATA": $SyringeItem$Contents
static readonly "ATA": $SyringeItem$Contents


public static "values"(): ($SyringeItem$Contents)[]
public static "valueOf"(arg0: string): $SyringeItem$Contents
public "getText"(): string
public "getFormatting"(): $ChatFormatting
get "text"(): string
get "formatting"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeItem$Contents$Type = (("prototype_ata") | ("blood") | ("empty") | ("ata")) | ($SyringeItem$Contents);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyringeItem$Contents_ = $SyringeItem$Contents$Type;
}}
declare module "packages/net/povstalec/sgjourney/client/sound/$SoundWrapper" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SoundWrapper {

constructor()

public "isPlaying"(): boolean
public "playSound"(): void
public "stopSound"(): void
public "hasSound"(): boolean
get "playing"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundWrapper$Type = ($SoundWrapper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SoundWrapper_ = $SoundWrapper$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractTransporterEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnergyBlockEntity, $EnergyBlockEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/$EnergyBlockEntity"
import {$SGJourneyEnergy, $SGJourneyEnergy$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$SGJourneyEnergy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $AbstractTransporterEntity extends $EnergyBlockEntity implements $Nameable {
static readonly "ADD_TO_NETWORK": string
static readonly "ID": string
static readonly "CUSTOM_NAME": string
readonly "ENERGY_STORAGE": $SGJourneyEnergy
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getID"(): $UUID
public "setID"(arg0: $UUID$Type): void
public "onLoad"(): void
public "getStatus"(arg0: $Player$Type): void
public "getName"(): $Component
public "getDisplayName"(): $Component
public "getCustomName"(): $Component
public "setCustomName"(arg0: $Component$Type): void
public "generateID"(): $UUID
public "load"(arg0: $CompoundTag$Type): void
public "addTransporterToNetwork"(): void
public "removeTransporterFromNetwork"(): void
public "hasCustomName"(): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "iD"(): $UUID
set "iD"(value: $UUID$Type)
get "name"(): $Component
get "displayName"(): $Component
get "customName"(): $Component
set "customName"(value: $Component$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTransporterEntity$Type = ($AbstractTransporterEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractTransporterEntity_ = $AbstractTransporterEntity$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Address$Immutable" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Address$Type, $Address$Type$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Address$Type"
import {$Address, $Address$Type} from "packages/net/povstalec/sgjourney/common/stargate/$Address"

export class $Address$Immutable {

constructor(arg0: string)
constructor(arg0: $Address$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "getLength"(): integer
public "toArray"(): (integer)[]
public "getType"(): $Address$Type
public "copy"(): $Address$Immutable
public "getSymbol"(arg0: integer): integer
public "containsSymbol"(arg0: integer): boolean
public "mutable"(): $Address
public "toComponent"(arg0: boolean): $Component
get "length"(): integer
get "type"(): $Address$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Address$Immutable$Type = ($Address$Immutable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Address$Immutable_ = $Address$Immutable$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$MaterializationCrystalItem$CrystalMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $MaterializationCrystalItem$CrystalMode extends $Enum<($MaterializationCrystalItem$CrystalMode)> {
static readonly "INCREASE_RANGE": $MaterializationCrystalItem$CrystalMode
static readonly "ENABLE_INTERDIMENSIONAL_TRANSPORT": $MaterializationCrystalItem$CrystalMode


public static "values"(): ($MaterializationCrystalItem$CrystalMode)[]
public static "valueOf"(arg0: string): $MaterializationCrystalItem$CrystalMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterializationCrystalItem$CrystalMode$Type = (("increase_range") | ("enable_interdimensional_transport")) | ($MaterializationCrystalItem$CrystalMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterializationCrystalItem$CrystalMode_ = $MaterializationCrystalItem$CrystalMode$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/block_entities/$EnergyBlockEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SGJourneyEnergy, $SGJourneyEnergy$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$SGJourneyEnergy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergyBlockEntity extends $BlockEntity {
readonly "ENERGY_STORAGE": $SGJourneyEnergy
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: boolean)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "onLoad"(): void
public "getStatus"(arg0: $Player$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "canExtract"(): boolean
public "getEnergyStored"(): long
public "extractEnergy"(arg0: long, arg1: boolean): long
public "canReceive"(): boolean
public "receiveEnergy"(arg0: long, arg1: boolean): long
public "setEnergy"(arg0: long): long
public "invalidateCaps"(): void
public "load"(arg0: $CompoundTag$Type): void
public "depleteEnergy"(arg0: long, arg1: boolean): long
public "getEnergyCapacity"(): long
public "getMaxReceive"(): long
public "getMaxExtract"(): long
public "canExtractEnergy"(arg0: long): boolean
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "energyStored"(): long
set "energy"(value: long)
get "energyCapacity"(): long
get "maxReceive"(): long
get "maxExtract"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyBlockEntity$Type = ($EnergyBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyBlockEntity_ = $EnergyBlockEntity$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$TransferCrystalItem$Advanced" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$TransferCrystalItem, $TransferCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$TransferCrystalItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $TransferCrystalItem$Advanced extends $TransferCrystalItem {
static readonly "DEFAULT_MAX_TRANSFER": integer
static readonly "ADVANCED_MAX_TRANSFER": integer
static readonly "TRANSFER_LIMIT": string
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

public "isAdvanced"(): boolean
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
public "getMaxTransfer"(): integer
get "advanced"(): boolean
get "maxTransfer"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransferCrystalItem$Advanced$Type = ($TransferCrystalItem$Advanced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransferCrystalItem$Advanced_ = $TransferCrystalItem$Advanced$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/methods/$InterfaceMethod" {
import {$MethodResult, $MethodResult$Type} from "packages/dan200/computercraft/api/lua/$MethodResult"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IComputerAccess, $IComputerAccess$Type} from "packages/dan200/computercraft/api/peripheral/$IComputerAccess"
import {$IArguments, $IArguments$Type} from "packages/dan200/computercraft/api/lua/$IArguments"
import {$ILuaContext, $ILuaContext$Type} from "packages/dan200/computercraft/api/lua/$ILuaContext"
import {$AbstractInterfaceEntity, $AbstractInterfaceEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity"

export interface $InterfaceMethod<ConnectedBlockEntity extends $BlockEntity> {

 "getName"(): string
 "use"(arg0: $IComputerAccess$Type, arg1: $ILuaContext$Type, arg2: $AbstractInterfaceEntity$Type, arg3: ConnectedBlockEntity, arg4: $IArguments$Type): $MethodResult
}

export namespace $InterfaceMethod {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceMethod$Type<ConnectedBlockEntity> = ($InterfaceMethod<(ConnectedBlockEntity)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceMethod_<ConnectedBlockEntity> = $InterfaceMethod$Type<(ConnectedBlockEntity)>;
}}
declare module "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity$InterfaceType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $AbstractInterfaceEntity$InterfaceType extends $Enum<($AbstractInterfaceEntity$InterfaceType)> {
static readonly "BASIC": $AbstractInterfaceEntity$InterfaceType
static readonly "CRYSTAL": $AbstractInterfaceEntity$InterfaceType
static readonly "ADVANCED_CRYSTAL": $AbstractInterfaceEntity$InterfaceType


public "getName"(): string
public static "values"(): ($AbstractInterfaceEntity$InterfaceType)[]
public static "valueOf"(arg0: string): $AbstractInterfaceEntity$InterfaceType
public "hasAdvancedCrystalMethods"(): boolean
public "hasCrystalMethods"(): boolean
get "name"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractInterfaceEntity$InterfaceType$Type = (("crystal") | ("basic") | ("advanced_crystal")) | ($AbstractInterfaceEntity$InterfaceType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractInterfaceEntity$InterfaceType_ = $AbstractInterfaceEntity$InterfaceType$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/fluids/$NaquadahFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"

export class $NaquadahFluidType extends $FluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NaquadahFluidType$Type = ($NaquadahFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NaquadahFluidType_ = $NaquadahFluidType$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$ExplosiveBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ExplosiveBlock extends $Block {
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: float)

public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "canDropFromExplosion"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosiveBlock$Type = ($ExplosiveBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExplosiveBlock_ = $ExplosiveBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$CartoucheBlock$Sandstone" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$DoubleBlockHalf, $DoubleBlockHalf$Type} from "packages/net/minecraft/world/level/block/state/properties/$DoubleBlockHalf"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$CartoucheBlock, $CartoucheBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/$CartoucheBlock"

export class $CartoucheBlock$Sandstone extends $CartoucheBlock {
static readonly "ADDRESS_TABLE": string
static readonly "DIMENSION": string
static readonly "ADDRESS": string
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
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

public "getItem"(): $ItemLike
public "getBlock"(): $Block
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
get "item"(): $ItemLike
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartoucheBlock$Sandstone$Type = ($CartoucheBlock$Sandstone);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CartoucheBlock$Sandstone_ = $CartoucheBlock$Sandstone$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractInterfaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InterfaceMode, $InterfaceMode$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$InterfaceMode"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Mirror, $Mirror$Type} from "packages/net/minecraft/world/level/block/$Mirror"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$EnergyBlockEntity, $EnergyBlockEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/$EnergyBlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractInterfaceBlock extends $BaseEntityBlock {
static readonly "FACING": $DirectionProperty
static readonly "UPDATE": $BooleanProperty
static readonly "MODE": $EnumProperty<($InterfaceMode)>
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


public "getCapacity"(): long
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "mirror"(arg0: $BlockState$Type, arg1: $Mirror$Type): $BlockState
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "comparatorOutput"(arg0: $BlockState$Type, arg1: $EnergyBlockEntity$Type): integer
public "getDroppedBlock"(): $Block
public "updateInterface"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): void
get "capacity"(): long
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractInterfaceBlock$Type = ($AbstractInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractInterfaceBlock_ = $AbstractInterfaceBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$ZPMHubBlock" {
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
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ZPMHubBlock extends $BaseEntityBlock {
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
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZPMHubBlock$Type = ($ZPMHubBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZPMHubBlock_ = $ZPMHubBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/tools/$SGJourneyShovelItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SGJourneyShovelItem extends $ShovelItem {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
 "speed": float
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

constructor(arg0: $Tier$Type, arg1: float, arg2: float, arg3: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SGJourneyShovelItem$Type = ($SGJourneyShovelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SGJourneyShovelItem_ = $SGJourneyShovelItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AbstractInterfaceEntity$InterfaceType, $AbstractInterfaceEntity$InterfaceType$Type} from "packages/net/povstalec/sgjourney/common/block_entities/tech/$AbstractInterfaceEntity$InterfaceType"
import {$InterfacePeripheralWrapper, $InterfacePeripheralWrapper$Type} from "packages/net/povstalec/sgjourney/common/compatibility/cctweaked/peripherals/$InterfacePeripheralWrapper"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AttachmentTarget, $AttachmentTarget$Type} from "packages/net/fabricmc/fabric/api/attachment/v1/$AttachmentTarget"
import {$EnergyBlockEntity, $EnergyBlockEntity$Type} from "packages/net/povstalec/sgjourney/common/block_entities/$EnergyBlockEntity"
import {$SGJourneyEnergy, $SGJourneyEnergy$Type} from "packages/net/povstalec/sgjourney/common/capabilities/$SGJourneyEnergy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AbstractInterfaceEntity extends $EnergyBlockEntity {
static readonly "ENERGY_TARGET": string
 "energyBlockEntity": $EnergyBlockEntity
readonly "ENERGY_STORAGE": $SGJourneyEnergy
 "level": $Level
 "worldPosition": $BlockPos
 "remove": boolean
 "hasComparators": byte

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $AbstractInterfaceEntity$InterfaceType$Type)

public static "tick"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $AbstractInterfaceEntity$Type): void
public "onLoad"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getDirection"(): $Direction
public "getEnergyTarget"(): long
public "setEnergyTarget"(arg0: long): void
public "getInterfaceType"(): $AbstractInterfaceEntity$InterfaceType
public "load"(arg0: $CompoundTag$Type): void
public "queueEvent"(arg0: string, ...arg1: (any)[]): void
public "updateInterface"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Block$Type, arg3: $BlockState$Type): boolean
public "isCorrectEnergySide"(arg0: $Direction$Type): boolean
public "findEnergyBlockEntity"(): $EnergyBlockEntity
public "getPeripheralWrapper"(): $InterfacePeripheralWrapper
public static "transfer"(original: $AttachmentTarget$Type, target: $AttachmentTarget$Type, isDeath: boolean): void
get "direction"(): $Direction
get "energyTarget"(): long
set "energyTarget"(value: long)
get "interfaceType"(): $AbstractInterfaceEntity$InterfaceType
get "peripheralWrapper"(): $InterfacePeripheralWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractInterfaceEntity$Type = ($AbstractInterfaceEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractInterfaceEntity_ = $AbstractInterfaceEntity$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$ClassicStargateRingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $ClassicStargateRingBlock extends $AbstractStargateRingBlock {
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

public "asItem"(): $Item
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassicStargateRingBlock$Type = ($ClassicStargateRingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassicStargateRingBlock_ = $ClassicStargateRingBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/dhd/$AbstractDHDBlock" {
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
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"
import {$HorizontalDirectionalBlock, $HorizontalDirectionalBlock$Type} from "packages/net/minecraft/world/level/block/$HorizontalDirectionalBlock"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $AbstractDHDBlock extends $HorizontalDirectionalBlock implements $EntityBlock {
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
public "playerWillDestroy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $Player$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "rotate"(arg0: $BlockState$Type, arg1: $Rotation$Type): $BlockState
public "getDHD"(): $Block
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
get "dHD"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractDHDBlock$Type = ($AbstractDHDBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractDHDBlock_ = $AbstractDHDBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$MaterializationCrystalItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$MaterializationCrystalItem$CrystalMode, $MaterializationCrystalItem$CrystalMode$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$MaterializationCrystalItem$CrystalMode"
import {$AbstractCrystalItem, $AbstractCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$AbstractCrystalItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MaterializationCrystalItem extends $AbstractCrystalItem {
static readonly "DEFAULT_RANGE_INCREMENT": integer
static readonly "ADVANCED_RANGE_INCREMENT": integer
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
public static "tagSetup"(arg0: $MaterializationCrystalItem$CrystalMode$Type): $CompoundTag
public static "getCrystalMode"(arg0: $ItemStack$Type): $MaterializationCrystalItem$CrystalMode
public "getRangeIncrement"(): integer
get "rangeIncrement"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterializationCrystalItem$Type = ($MaterializationCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MaterializationCrystalItem_ = $MaterializationCrystalItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$MemoryCrystalItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$AbstractCrystalItem, $AbstractCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$AbstractCrystalItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $MemoryCrystalItem extends $AbstractCrystalItem {
static readonly "DEFAULT_MEMORY_CAPACITY": integer
static readonly "ADVANCED_MEMORY_CAPACITY": integer
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
public static "getMemory"(arg0: $ItemStack$Type, arg1: integer): $CompoundTag
public "isFoil"(arg0: $ItemStack$Type): boolean
public static "getMemoryListSize"(arg0: $ItemStack$Type): integer
public static "getAddressAt"(arg0: $ItemStack$Type, arg1: integer): (integer)[]
public static "getCoordinatesAt"(arg0: $ItemStack$Type, arg1: integer): (integer)[]
public "getMemoryCapacity"(): integer
public static "saveAddress"(arg0: $ItemStack$Type, arg1: (integer)[]): boolean
public static "abydosAddress"(): $ItemStack
public static "atlantisAddress"(): $ItemStack
public static "getMemoryList"(arg0: $ItemStack$Type): $ListTag
public static "saveMemory"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): boolean
public static "saveCoordinates"(arg0: $ItemStack$Type, arg1: (integer)[]): boolean
get "memoryCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryCrystalItem$Type = ($MemoryCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryCrystalItem_ = $MemoryCrystalItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$AbstractCrystalItem" {
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
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AbstractCrystalItem extends $Item {
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

public "isAdvanced"(): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isLarge"(): boolean
public "descriptionInRing"(): $Optional<($Component)>
public "descriptionInDHD"(arg0: $ItemStack$Type): $Optional<($Component)>
public "isRegular"(): boolean
get "advanced"(): boolean
get "large"(): boolean
get "regular"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractCrystalItem$Type = ($AbstractCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractCrystalItem_ = $AbstractCrystalItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/blocks/$StargateBlockItem" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$Type} from "packages/net/mehvahdjukaar/moonlight/api/item/additional_placements/$AdditionalItemPlacement"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $StargateBlockItem extends $BlockItem {
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

public static "updateCustomBlockEntityTag"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type): boolean
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public "moonlight$addAdditionalBehavior"(arg0: $AdditionalItemPlacement$Type): void
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StargateBlockItem$Type = ($StargateBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StargateBlockItem_ = $StargateBlockItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/tech/$BasicInterfaceBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InterfaceMode, $InterfaceMode$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$InterfaceMode"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AbstractInterfaceBlock, $AbstractInterfaceBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/tech/$AbstractInterfaceBlock"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $BasicInterfaceBlock extends $AbstractInterfaceBlock {
static readonly "FACING": $DirectionProperty
static readonly "UPDATE": $BooleanProperty
static readonly "MODE": $EnumProperty<($InterfaceMode)>
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

public "getCapacity"(): long
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getDroppedBlock"(): $Block
get "capacity"(): long
get "droppedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicInterfaceBlock$Type = ($BasicInterfaceBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BasicInterfaceBlock_ = $BasicInterfaceBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/crystals/$ControlCrystalItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AbstractCrystalItem, $AbstractCrystalItem$Type} from "packages/net/povstalec/sgjourney/common/items/crystals/$AbstractCrystalItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ControlCrystalItem extends $AbstractCrystalItem {
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
export type $ControlCrystalItem$Type = ($ControlCrystalItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ControlCrystalItem_ = $ControlCrystalItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/armor/$JackalArmorItem" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $JackalArmorItem extends $ArmorItem {
readonly "type": $ArmorItem$Type
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
readonly "knockbackResistance": float
readonly "material": $ArmorMaterial
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
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

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $JackalArmorItem$Type = ($JackalArmorItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $JackalArmorItem_ = $JackalArmorItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $StargateConnection$State extends $Enum<($StargateConnection$State)> implements $StringRepresentable {
static readonly "IDLE": $StargateConnection$State
static readonly "OUTGOING_CONNECTION": $StargateConnection$State
static readonly "INCOMING_CONNECTION": $StargateConnection$State


public "toString"(): string
public static "values"(): ($StargateConnection$State)[]
public static "valueOf"(arg0: string): $StargateConnection$State
public "isConnected"(): boolean
public "getSerializedName"(): string
public "isDialingOut"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
get "connected"(): boolean
get "serializedName"(): string
get "dialingOut"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StargateConnection$State$Type = (("idle") | ("outgoing_connection") | ("incoming_connection")) | ($StargateConnection$State);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StargateConnection$State_ = $StargateConnection$State$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$ZeroPointModule" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
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
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ZeroPointModule extends $Item {
static readonly "maxEntropy": integer
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
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarColor"(arg0: $ItemStack$Type): integer
public "getBarWidth"(arg0: $ItemStack$Type): integer
public static "getEnergy"(arg0: $ItemStack$Type): long
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZeroPointModule$Type = ($ZeroPointModule);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ZeroPointModule_ = $ZeroPointModule$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/$NaquadahGeneratorBlock" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BaseEntityBlock, $BaseEntityBlock$Type} from "packages/net/minecraft/world/level/block/$BaseEntityBlock"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $NaquadahGeneratorBlock extends $BaseEntityBlock {
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

public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NaquadahGeneratorBlock$Type = ($NaquadahGeneratorBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NaquadahGeneratorBlock_ = $NaquadahGeneratorBlock$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/items/$SyringeItem" {
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
import {$SyringeItem$Contents, $SyringeItem$Contents$Type} from "packages/net/povstalec/sgjourney/common/items/$SyringeItem$Contents"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $SyringeItem extends $Item {
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
public static "addContents"(arg0: $SyringeItem$Contents$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyringeItem$Type = ($SyringeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SyringeItem_ = $SyringeItem$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/stargate/$Stargate$FilterType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $Stargate$FilterType extends $Enum<($Stargate$FilterType)> {
static readonly "NONE": $Stargate$FilterType
static readonly "WHITELIST": $Stargate$FilterType
static readonly "BLACKLIST": $Stargate$FilterType


public static "values"(): ($Stargate$FilterType)[]
public static "valueOf"(arg0: string): $Stargate$FilterType
public "isBlacklist"(): boolean
public "getIntegerValue"(): integer
public static "getFilterType"(arg0: integer): $Stargate$FilterType
public "isWhitelist"(): boolean
public "shouldFilter"(): boolean
get "blacklist"(): boolean
get "integerValue"(): integer
get "whitelist"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stargate$FilterType$Type = (("blacklist") | ("none") | ("whitelist")) | ($Stargate$FilterType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Stargate$FilterType_ = $Stargate$FilterType$Type;
}}
declare module "packages/net/povstalec/sgjourney/common/blocks/stargate/$TollanStargateRingBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Orientation, $Orientation$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$Orientation"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StargatePart, $StargatePart$Type} from "packages/net/povstalec/sgjourney/common/blockstates/$StargatePart"
import {$AbstractStargateRingBlock, $AbstractStargateRingBlock$Type} from "packages/net/povstalec/sgjourney/common/blocks/stargate/$AbstractStargateRingBlock"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$SoundType, $SoundType$Type} from "packages/net/minecraft/world/level/block/$SoundType"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$StargateConnection$State, $StargateConnection$State$Type} from "packages/net/povstalec/sgjourney/common/stargate/$StargateConnection$State"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $TollanStargateRingBlock extends $AbstractStargateRingBlock {
static readonly "FACING": $DirectionProperty
static readonly "ORIENTATION": $EnumProperty<($Orientation)>
static readonly "PART": $EnumProperty<($StargatePart)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "CONNECTION_STATE": $EnumProperty<($StargateConnection$State)>
static readonly "CHEVRONS_ACTIVE": $IntegerProperty
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

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getParts"(): $ArrayList<($StargatePart)>
public "asItem"(): $Item
get "parts"(): $ArrayList<($StargatePart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TollanStargateRingBlock$Type = ($TollanStargateRingBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TollanStargateRingBlock_ = $TollanStargateRingBlock$Type;
}}
