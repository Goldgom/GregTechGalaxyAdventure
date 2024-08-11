declare module "packages/appeng/me/cluster/implementations/$SpatialPylonCluster" {
import {$SpatialPylonBlockEntity, $SpatialPylonBlockEntity$Type} from "packages/appeng/blockentity/spatial/$SpatialPylonBlockEntity"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$IAECluster, $IAECluster$Type} from "packages/appeng/me/cluster/$IAECluster"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$SpatialPylonCluster$Axis, $SpatialPylonCluster$Axis$Type} from "packages/appeng/me/cluster/implementations/$SpatialPylonCluster$Axis"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $SpatialPylonCluster implements $IAECluster {

constructor(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type)

public "size"(): integer
public "destroy"(): void
public "isDestroyed"(): boolean
public "isValid"(): boolean
public "setLevel"(): $ServerLevel
public "updateStatus"(arg0: boolean): void
public "setValid"(arg0: boolean): void
public "getBoundsMin"(): $BlockPos
public "getCurrentAxis"(): $SpatialPylonCluster$Axis
public "getBoundsMax"(): $BlockPos
public "getBlockEntities"(): $Iterator<($SpatialPylonBlockEntity)>
get "destroyed"(): boolean
get "valid"(): boolean
set "valid"(value: boolean)
get "boundsMin"(): $BlockPos
get "currentAxis"(): $SpatialPylonCluster$Axis
get "boundsMax"(): $BlockPos
get "blockEntities"(): $Iterator<($SpatialPylonBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonCluster$Type = ($SpatialPylonCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonCluster_ = $SpatialPylonCluster$Type;
}}
declare module "packages/appeng/me/cluster/implementations/$QuantumCluster" {
import {$LevelEvent$Unload, $LevelEvent$Unload$Type} from "packages/net/minecraftforge/event/level/$LevelEvent$Unload"
import {$QuantumBridgeBlockEntity, $QuantumBridgeBlockEntity$Type} from "packages/appeng/blockentity/qnb/$QuantumBridgeBlockEntity"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IAECluster, $IAECluster$Type} from "packages/appeng/me/cluster/$IAECluster"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export class $QuantumCluster implements $IAECluster, $IActionHost {

constructor(arg0: $BlockPos$Type, arg1: $BlockPos$Type)

public "toString"(): string
public "destroy"(): void
public "isDestroyed"(): boolean
public "getActionableNode"(): $IGridNode
public "updateStatus"(arg0: boolean): void
public "getBoundsMin"(): $BlockPos
public "getBoundsMax"(): $BlockPos
public "getCenter"(): $QuantumBridgeBlockEntity
public "isCorner"(arg0: $QuantumBridgeBlockEntity$Type): boolean
public "setUpdateStatus"(arg0: boolean): void
public "getBlockEntities"(): $Iterator<($QuantumBridgeBlockEntity)>
public "onUnload"(arg0: $LevelEvent$Unload$Type): void
get "destroyed"(): boolean
get "actionableNode"(): $IGridNode
get "boundsMin"(): $BlockPos
get "boundsMax"(): $BlockPos
get "center"(): $QuantumBridgeBlockEntity
get "blockEntities"(): $Iterator<($QuantumBridgeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCluster$Type = ($QuantumCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumCluster_ = $QuantumCluster$Type;
}}
declare module "packages/appeng/me/cluster/implementations/$SpatialPylonCluster$Axis" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $SpatialPylonCluster$Axis extends $Enum<($SpatialPylonCluster$Axis)> {
static readonly "X": $SpatialPylonCluster$Axis
static readonly "Y": $SpatialPylonCluster$Axis
static readonly "Z": $SpatialPylonCluster$Axis
static readonly "UNFORMED": $SpatialPylonCluster$Axis


public static "values"(): ($SpatialPylonCluster$Axis)[]
public static "valueOf"(arg0: string): $SpatialPylonCluster$Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpatialPylonCluster$Axis$Type = (("x") | ("y") | ("z") | ("unformed")) | ($SpatialPylonCluster$Axis);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpatialPylonCluster$Axis_ = $SpatialPylonCluster$Axis$Type;
}}
declare module "packages/appeng/me/cluster/$IAECluster" {
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"

export interface $IAECluster {

 "destroy"(): void
 "isDestroyed"(): boolean
 "updateStatus"(arg0: boolean): void
 "getBoundsMin"(): $BlockPos
 "getBoundsMax"(): $BlockPos
 "getBlockEntities"(): $Iterator<(any)>
}

export namespace $IAECluster {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAECluster$Type = ($IAECluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAECluster_ = $IAECluster$Type;
}}
declare module "packages/appeng/me/cluster/$IAEMultiBlock" {
import {$IAECluster, $IAECluster$Type} from "packages/appeng/me/cluster/$IAECluster"

export interface $IAEMultiBlock<Cluster extends $IAECluster> {

 "isValid"(): boolean
 "disconnect"(arg0: boolean): void
 "getCluster"(): Cluster
}

export namespace $IAEMultiBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEMultiBlock$Type<Cluster> = ($IAEMultiBlock<(Cluster)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAEMultiBlock_<Cluster> = $IAEMultiBlock$Type<(Cluster)>;
}}
declare module "packages/appeng/me/cluster/implementations/$CraftingCPUCluster" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICraftingCPU, $ICraftingCPU$Type} from "packages/appeng/api/networking/crafting/$ICraftingCPU"
import {$ICraftingPlan, $ICraftingPlan$Type} from "packages/appeng/api/networking/crafting/$ICraftingPlan"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$CraftingCpuLogic, $CraftingCpuLogic$Type} from "packages/appeng/crafting/execution/$CraftingCpuLogic"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$CpuSelectionMode, $CpuSelectionMode$Type} from "packages/appeng/api/config/$CpuSelectionMode"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$Type} from "packages/appeng/api/networking/crafting/$ICraftingSubmitResult"
import {$CraftingJobStatus, $CraftingJobStatus$Type} from "packages/appeng/api/networking/crafting/$CraftingJobStatus"
import {$CraftingBlockEntity, $CraftingBlockEntity$Type} from "packages/appeng/blockentity/crafting/$CraftingBlockEntity"
import {$IAECluster, $IAECluster$Type} from "packages/appeng/me/cluster/$IAECluster"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $CraftingCPUCluster implements $IAECluster, $ICraftingCPU {
readonly "craftingLogic": $CraftingCpuLogic

constructor(arg0: $BlockPos$Type, arg1: $BlockPos$Type)

public "getName"(): $Component
public "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
public "destroy"(): void
public "isDestroyed"(): boolean
public "isActive"(): boolean
public "getNode"(): $IGridNode
public "getLevel"(): $Level
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "updateStatus"(arg0: boolean): void
public "getBoundsMin"(): $BlockPos
public "getBoundsMax"(): $BlockPos
public "submitJob"(arg0: $IGrid$Type, arg1: $ICraftingPlan$Type, arg2: $IActionSource$Type, arg3: $ICraftingRequester$Type): $ICraftingSubmitResult
public "isBusy"(): boolean
public "getCoProcessors"(): integer
public "isPreferredFor"(arg0: $IActionSource$Type): boolean
public "getJobStatus"(): $CraftingJobStatus
public "getSelectionMode"(): $CpuSelectionMode
public "cancelJob"(): void
public "breakCluster"(): void
public "updateName"(): void
public "getConfigManager"(): $IConfigManager
public "getGrid"(): $IGrid
public "markDirty"(): void
public "getBlockEntities"(): $Iterator<($CraftingBlockEntity)>
public "canBeAutoSelectedFor"(arg0: $IActionSource$Type): boolean
public "getAvailableStorage"(): long
public "updateOutput"(arg0: $GenericStack$Type): void
public "getSrc"(): $IActionSource
get "name"(): $Component
get "destroyed"(): boolean
get "active"(): boolean
get "node"(): $IGridNode
get "level"(): $Level
get "boundsMin"(): $BlockPos
get "boundsMax"(): $BlockPos
get "busy"(): boolean
get "coProcessors"(): integer
get "jobStatus"(): $CraftingJobStatus
get "selectionMode"(): $CpuSelectionMode
get "configManager"(): $IConfigManager
get "grid"(): $IGrid
get "blockEntities"(): $Iterator<($CraftingBlockEntity)>
get "availableStorage"(): long
get "src"(): $IActionSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCPUCluster$Type = ($CraftingCPUCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingCPUCluster_ = $CraftingCPUCluster$Type;
}}
declare module "packages/appeng/me/service/$CraftingService" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$CraftingLink, $CraftingLink$Type} from "packages/appeng/crafting/$CraftingLink"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$IStorageService, $IStorageService$Type} from "packages/appeng/api/networking/storage/$IStorageService"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$IEnergyService, $IEnergyService$Type} from "packages/appeng/api/networking/energy/$IEnergyService"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$Type} from "packages/appeng/api/networking/crafting/$ICraftingSubmitResult"
import {$Future, $Future$Type} from "packages/java/util/concurrent/$Future"
import {$CalculationStrategy, $CalculationStrategy$Type} from "packages/appeng/api/networking/crafting/$CalculationStrategy"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$ICraftingCPU, $ICraftingCPU$Type} from "packages/appeng/api/networking/crafting/$ICraftingCPU"
import {$ICraftingPlan, $ICraftingPlan$Type} from "packages/appeng/api/networking/crafting/$ICraftingPlan"
import {$ICraftingService, $ICraftingService$Type} from "packages/appeng/api/networking/crafting/$ICraftingService"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ICraftingProvider, $ICraftingProvider$Type} from "packages/appeng/api/networking/crafting/$ICraftingProvider"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$ICraftingSimulationRequester, $ICraftingSimulationRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingSimulationRequester"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$IGridServiceProvider, $IGridServiceProvider$Type} from "packages/appeng/api/networking/$IGridServiceProvider"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridStorage, $IGridStorage$Type} from "packages/appeng/api/networking/$IGridStorage"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$AEKeyFilter, $AEKeyFilter$Type} from "packages/appeng/api/storage/$AEKeyFilter"

export class $CraftingService implements $ICraftingService, $IGridServiceProvider {

constructor(arg0: $IGrid$Type, arg1: $IStorageService$Type, arg2: $IEnergyService$Type)

public "removeNode"(arg0: $IGridNode$Type): void
public "getProviders"(arg0: $IPatternDetails$Type): $Iterable<($ICraftingProvider)>
public "addNode"(arg0: $IGridNode$Type, arg1: $CompoundTag$Type): void
public "getCraftingFor"(arg0: $AEKey$Type): $Collection<($IPatternDetails)>
public "isRequesting"(arg0: $AEKey$Type): boolean
public "canEmitFor"(arg0: $AEKey$Type): boolean
public "getCraftables"(arg0: $AEKeyFilter$Type): $Set<($AEKey)>
public "submitJob"(arg0: $ICraftingPlan$Type, arg1: $ICraftingRequester$Type, arg2: $ICraftingCPU$Type, arg3: boolean, arg4: $IActionSource$Type): $ICraftingSubmitResult
public "isRequestingAny"(): boolean
public "getRequestedAmount"(arg0: $AEKey$Type): long
public "getCpus"(): $ImmutableSet<($ICraftingCPU)>
public "getFuzzyCraftable"(arg0: $AEKey$Type, arg1: $AEKeyFilter$Type): $AEKey
public "addLink"(arg0: $CraftingLink$Type): void
public "insertIntoCpus"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): long
public "hasCpu"(arg0: $ICraftingCPU$Type): boolean
public "onServerEndTick"(): void
public "beginCraftingCalculation"(arg0: $Level$Type, arg1: $ICraftingSimulationRequester$Type, arg2: $AEKey$Type, arg3: long, arg4: $CalculationStrategy$Type): $Future<($ICraftingPlan)>
public "refreshNodeCraftingProvider"(arg0: $IGridNode$Type): void
public "isCraftable"(arg0: $AEKey$Type): boolean
/**
 * 
 * @deprecated
 */
public "addNode"(arg0: $IGridNode$Type): void
public "onLevelEndTick"(arg0: $Level$Type): void
public "onServerStartTick"(): void
/**
 * 
 * @deprecated
 */
public "onJoin"(arg0: $IGridStorage$Type): void
public "onLevelStartTick"(arg0: $Level$Type): void
/**
 * 
 * @deprecated
 */
public "onSplit"(arg0: $IGridStorage$Type): void
public "saveNodeData"(arg0: $IGridNode$Type, arg1: $CompoundTag$Type): void
/**
 * 
 * @deprecated
 */
public "populateGridStorage"(arg0: $IGridStorage$Type): void
get "requestingAny"(): boolean
get "cpus"(): $ImmutableSet<($ICraftingCPU)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingService$Type = ($CraftingService);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingService_ = $CraftingService$Type;
}}
declare module "packages/appeng/me/helpers/$IGridConnectedBlockEntity" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IActionHost, $IActionHost$Type} from "packages/appeng/api/networking/security/$IActionHost"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$Type} from "packages/appeng/api/networking/$IInWorldGridNodeHost"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$IOwnerAwareBlockEntity, $IOwnerAwareBlockEntity$Type} from "packages/appeng/block/$IOwnerAwareBlockEntity"

export interface $IGridConnectedBlockEntity extends $IActionHost, $IOwnerAwareBlockEntity, $IInWorldGridNodeHost {

 "setOwner"(arg0: $Player$Type): void
 "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
 "saveChanges"(): void
 "getGridNode"(): $IGridNode
 "getGridNode"(arg0: $Direction$Type): $IGridNode
 "getActionableNode"(): $IGridNode
 "getMainNode"(): $IManagedGridNode
 "ifGridPresent"(arg0: $Consumer$Type<($IGrid$Type)>): boolean
 "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
 "getCableConnectionType"(arg0: $Direction$Type): $AECableType
}

export namespace $IGridConnectedBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridConnectedBlockEntity$Type = ($IGridConnectedBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridConnectedBlockEntity_ = $IGridConnectedBlockEntity$Type;
}}
