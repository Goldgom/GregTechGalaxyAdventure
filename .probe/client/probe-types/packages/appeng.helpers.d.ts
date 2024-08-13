declare module "packages/appeng/helpers/$IPriorityHost" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ISubMenuHost, $ISubMenuHost$Type} from "packages/appeng/api/storage/$ISubMenuHost"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $IPriorityHost extends $ISubMenuHost {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
 "getMainMenuIcon"(): $ItemStack
}

export namespace $IPriorityHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPriorityHost$Type = ($IPriorityHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPriorityHost_ = $IPriorityHost$Type;
}}
declare module "packages/appeng/helpers/patternprovider/$PatternProviderLogic" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LockCraftingMode, $LockCraftingMode$Type} from "packages/appeng/api/config/$LockCraftingMode"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$PatternProviderLogicHost, $PatternProviderLogicHost$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderLogicHost"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ICraftingProvider, $ICraftingProvider$Type} from "packages/appeng/api/networking/crafting/$ICraftingProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$PatternProviderReturnInventory, $PatternProviderReturnInventory$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderReturnInventory"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export class $PatternProviderLogic implements $InternalInventoryHost, $ICraftingProvider {
static readonly "NBT_MEMORY_CARD_PATTERNS": string
static readonly "NBT_UNLOCK_EVENT": string
static readonly "NBT_UNLOCK_STACK": string
static readonly "NBT_PRIORITY": string
static readonly "NBT_SEND_LIST": string
static readonly "NBT_SEND_DIRECTION": string
static readonly "NBT_RETURN_INV": string

constructor(arg0: $IManagedGridNode$Type, arg1: $PatternProviderLogicHost$Type)
constructor(arg0: $IManagedGridNode$Type, arg1: $PatternProviderLogicHost$Type, arg2: integer)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "isBlocking"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "updateRedstoneState"(): void
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "getCraftingLockedReason"(): $LockCraftingMode
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "saveChanges"(): void
public "isClientSide"(): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "exportSettings"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "importSettings"(arg0: $CompoundTag$Type, arg1: $Player$Type): void
public "isBusy"(): boolean
public "getPatternPriority"(): integer
public "getReturnInv"(): $PatternProviderReturnInventory
public "resetCraftingLock"(): void
public "getUnlockStack"(): $GenericStack
public "clearContent"(): void
public "getTerminalGroup"(): $PatternContainerGroup
public "getSortValue"(): long
public "updatePatterns"(): void
public "getPatternInv"(): $InternalInventory
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[]): boolean
public "getConfigManager"(): $IConfigManager
public "getGrid"(): $IGrid
public "addDrops"(arg0: $List$Type<($ItemStack$Type)>): void
public "onMainNodeStateChanged"(): void
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "getEmitableItems"(): $Set<($AEKey)>
set "priority"(value: integer)
get "priority"(): integer
get "blocking"(): boolean
get "availablePatterns"(): $List<($IPatternDetails)>
get "craftingLockedReason"(): $LockCraftingMode
get "clientSide"(): boolean
get "busy"(): boolean
get "patternPriority"(): integer
get "returnInv"(): $PatternProviderReturnInventory
get "unlockStack"(): $GenericStack
get "terminalGroup"(): $PatternContainerGroup
get "sortValue"(): long
get "patternInv"(): $InternalInventory
get "configManager"(): $IConfigManager
get "grid"(): $IGrid
get "emitableItems"(): $Set<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderLogic$Type = ($PatternProviderLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderLogic_ = $PatternProviderLogic$Type;
}}
declare module "packages/appeng/helpers/patternprovider/$PatternProviderLogicHost" {
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$PatternProviderLogic, $PatternProviderLogic$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderLogic"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$PatternContainer, $PatternContainer$Type} from "packages/appeng/helpers/patternprovider/$PatternContainer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $PatternProviderLogicHost extends $IConfigurableObject, $IPriorityHost, $PatternContainer {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getTerminalPatternInventory"(): $InternalInventory
 "getTerminalSortOrder"(): long
 "isVisibleInTerminal"(): boolean
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
 "saveChanges"(): void
 "getBlockEntity"(): $BlockEntity
 "getTargets"(): $EnumSet<($Direction)>
 "getLogic"(): $PatternProviderLogic
 "getTerminalIcon"(): $AEItemKey
 "getTerminalGroup"(): $PatternContainerGroup
 "getConfigManager"(): $IConfigManager
 "getGrid"(): $IGrid
 "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
 "getMainMenuIcon"(): $ItemStack
}

export namespace $PatternProviderLogicHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderLogicHost$Type = ($PatternProviderLogicHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderLogicHost_ = $PatternProviderLogicHost$Type;
}}
declare module "packages/appeng/helpers/$InterfaceLogicHost" {
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InterfaceLogic, $InterfaceLogic$Type} from "packages/appeng/helpers/$InterfaceLogic"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IConfigInvHost, $IConfigInvHost$Type} from "packages/appeng/helpers/$IConfigInvHost"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $InterfaceLogicHost extends $IConfigurableObject, $IUpgradeableObject, $IPriorityHost, $IConfigInvHost {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getConfig"(): $GenericStackInv
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
 "saveChanges"(): void
 "getBlockEntity"(): $BlockEntity
 "getStorage"(): $GenericStackInv
 "getInterfaceLogic"(): $InterfaceLogic
 "getUpgrades"(): $IUpgradeInventory
 "getConfigManager"(): $IConfigManager
 "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
 "isUpgradedWith"(arg0: $ItemLike$Type): boolean
 "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
 "getMainMenuIcon"(): $ItemStack
}

export namespace $InterfaceLogicHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogicHost$Type = ($InterfaceLogicHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceLogicHost_ = $InterfaceLogicHost$Type;
}}
declare module "packages/appeng/helpers/externalstorage/$GenericStackInv$Mode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $GenericStackInv$Mode extends $Enum<($GenericStackInv$Mode)> {
static readonly "CONFIG_TYPES": $GenericStackInv$Mode
static readonly "CONFIG_STACKS": $GenericStackInv$Mode
static readonly "STORAGE": $GenericStackInv$Mode


public static "values"(): ($GenericStackInv$Mode)[]
public static "valueOf"(arg0: string): $GenericStackInv$Mode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStackInv$Mode$Type = (("config_types") | ("config_stacks") | ("storage")) | ($GenericStackInv$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericStackInv$Mode_ = $GenericStackInv$Mode$Type;
}}
declare module "packages/appeng/helpers/patternprovider/$PatternContainer" {
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"

export interface $PatternContainer {

 "getTerminalPatternInventory"(): $InternalInventory
 "getTerminalSortOrder"(): long
 "isVisibleInTerminal"(): boolean
 "getTerminalGroup"(): $PatternContainerGroup
 "getGrid"(): $IGrid
}

export namespace $PatternContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternContainer$Type = ($PatternContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternContainer_ = $PatternContainer$Type;
}}
declare module "packages/appeng/helpers/$InterfaceLogic" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$ConfigInventory, $ConfigInventory$Type} from "packages/appeng/util/$ConfigInventory"
import {$ImmutableSet, $ImmutableSet$Type} from "packages/com/google/common/collect/$ImmutableSet"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$InterfaceLogicHost, $InterfaceLogicHost$Type} from "packages/appeng/helpers/$InterfaceLogicHost"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$ICraftingLink, $ICraftingLink$Type} from "packages/appeng/api/networking/crafting/$ICraftingLink"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $InterfaceLogic implements $ICraftingRequester, $IUpgradeableObject, $IConfigurableObject {

constructor(arg0: $IManagedGridNode$Type, arg1: $InterfaceLogicHost$Type, arg2: $Item$Type)
constructor(arg0: $IManagedGridNode$Type, arg1: $InterfaceLogicHost$Type, arg2: $Item$Type, arg3: integer)

public "getLocation"(): $DimensionalBlockPos
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getConfig"(): $ConfigInventory
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getStorage"(): $ConfigInventory
public "getInventory"(): $MEStorage
public "getActionableNode"(): $IGridNode
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
public "insertCraftedItems"(arg0: $ICraftingLink$Type, arg1: $AEKey$Type, arg2: long, arg3: $Actionable$Type): long
public "jobStateChange"(arg0: $ICraftingLink$Type): void
public "gridChanged"(): void
public "clearContent"(): void
public "notifyNeighbors"(): void
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "addDrops"(arg0: $List$Type<($ItemStack$Type)>): void
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
get "location"(): $DimensionalBlockPos
set "priority"(value: integer)
get "priority"(): integer
get "config"(): $ConfigInventory
get "storage"(): $ConfigInventory
get "inventory"(): $MEStorage
get "actionableNode"(): $IGridNode
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InterfaceLogic$Type = ($InterfaceLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InterfaceLogic_ = $InterfaceLogic$Type;
}}
declare module "packages/appeng/helpers/$AEMultiBlockEntity" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$IFacadeContainer, $IFacadeContainer$Type} from "packages/appeng/api/parts/$IFacadeContainer"
import {$IPart, $IPart$Type} from "packages/appeng/api/parts/$IPart"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$DimensionalBlockPos, $DimensionalBlockPos$Type} from "packages/appeng/api/util/$DimensionalBlockPos"
import {$IPartItem, $IPartItem$Type} from "packages/appeng/api/parts/$IPartItem"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$IInWorldGridNodeHost, $IInWorldGridNodeHost$Type} from "packages/appeng/api/networking/$IInWorldGridNodeHost"
import {$IColorableBlockEntity, $IColorableBlockEntity$Type} from "packages/appeng/api/implementations/blockentities/$IColorableBlockEntity"
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$IPartHost, $IPartHost$Type} from "packages/appeng/api/parts/$IPartHost"
import {$SelectedPart, $SelectedPart$Type} from "packages/appeng/api/parts/$SelectedPart"

export interface $AEMultiBlockEntity extends $IInWorldGridNodeHost, $IPartHost, $IColorableBlockEntity {

 "getCableConnectionType"(arg0: $Direction$Type): $AECableType
 "getGridNode"(arg0: $Direction$Type): $IGridNode
 "isEmpty"(): boolean
 "getLocation"(): $DimensionalBlockPos
 "cleanup"(): void
 "getColor"(): $AEColor
 "hasRedstone"(): boolean
 "getBlockEntity"(): $BlockEntity
 "markForUpdate"(): void
 "replacePart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type, arg3: $InteractionHand$Type): T
 "markForSave"(): void
 "selectPartWorld"(arg0: $Vec3$Type): $SelectedPart
 "getFacadeContainer"(): $IFacadeContainer
 "getPart"(arg0: $Direction$Type): $IPart
 "notifyNeighbors"(): void
 "selectPartLocal"(arg0: $Vec3$Type): $SelectedPart
 "getCollisionShape"(arg0: $CollisionContext$Type): $VoxelShape
 "removePartFromSide"(arg0: $Direction$Type): void
 "notifyNeighborNow"(arg0: $Direction$Type): void
 "partChanged"(): void
 "canAddPart"(arg0: $ItemStack$Type, arg1: $Direction$Type): boolean
 "clearContainer"(): void
 "isBlocked"(arg0: $Direction$Type): boolean
 "removePart"(arg0: $IPart$Type): boolean
 "isInWorld"(): boolean
 "addPart"<T extends $IPart>(arg0: $IPartItem$Type<(T)>, arg1: $Direction$Type, arg2: $Player$Type): T
 "recolourBlock"(arg0: $Direction$Type, arg1: $AEColor$Type, arg2: $Player$Type): boolean
 "getCableConnectionLength"(arg0: $AECableType$Type): float
}

export namespace $AEMultiBlockEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AEMultiBlockEntity$Type = ($AEMultiBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AEMultiBlockEntity_ = $AEMultiBlockEntity$Type;
}}
declare module "packages/appeng/helpers/$IMouseWheelItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IMouseWheelItem {

 "onWheel"(arg0: $ItemStack$Type, arg1: boolean): void

(arg0: $ItemStack$Type, arg1: boolean): void
}

export namespace $IMouseWheelItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMouseWheelItem$Type = ($IMouseWheelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMouseWheelItem_ = $IMouseWheelItem$Type;
}}
declare module "packages/appeng/helpers/externalstorage/$GenericStackInv" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$GenericStackInv$Mode, $GenericStackInv$Mode$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv$Mode"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$AEKeyType, $AEKeyType$Type} from "packages/appeng/api/stacks/$AEKeyType"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$ConfigMenuInventory, $ConfigMenuInventory$Type} from "packages/appeng/util/$ConfigMenuInventory"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$GenericInternalInventory, $GenericInternalInventory$Type} from "packages/appeng/api/behaviors/$GenericInternalInventory"
import {$AEKeyFilter, $AEKeyFilter$Type} from "packages/appeng/api/storage/$AEKeyFilter"
import {$GenericStackInvAccessor, $GenericStackInvAccessor$Type} from "packages/com/gregtechceu/gtceu/core/mixins/ae2/$GenericStackInvAccessor"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export class $GenericStackInv implements $MEStorage, $GenericInternalInventory, $GenericStackInvAccessor {

constructor(arg0: $Runnable$Type, arg1: integer)
constructor(arg0: $Runnable$Type, arg1: $GenericStackInv$Mode$Type, arg2: integer)

public "extract"(arg0: integer, arg1: $AEKey$Type, arg2: long, arg3: $Actionable$Type): long
public "extract"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
public "insert"(arg0: integer, arg1: $AEKey$Type, arg2: long, arg3: $Actionable$Type): long
public "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): long
public "clear"(): void
public "isEmpty"(): boolean
public "size"(): integer
public "getKey"(arg0: integer): $AEKey
public "getStack"(arg0: integer): $GenericStack
public "getFilter"(): $AEKeyFilter
public "getCapacity"(arg0: $AEKeyType$Type): long
public "getMode"(): $GenericStackInv$Mode
public "getDescription"(): $Component
public "setCapacity"(arg0: $AEKeyType$Type, arg1: long): void
public "onChange"(): void
public "setStack"(arg0: integer, arg1: $GenericStack$Type): void
public "setDescription"(arg0: $Component$Type): void
public "useRegisteredCapacities"(): void
public "getAmount"(arg0: integer): long
public "getAvailableStacks"(arg0: $KeyCounter$Type): void
public "canInsert"(): boolean
public "writeToChildTag"(arg0: $CompoundTag$Type, arg1: string): void
public "readFromChildTag"(arg0: $CompoundTag$Type, arg1: string): void
public "getMaxAmount"(arg0: $AEKey$Type): long
public "canExtract"(): boolean
public "isAllowed"(arg0: $AEKey$Type): boolean
public "isAllowed"(arg0: $GenericStack$Type): boolean
public "beginBatch"(): void
public "readFromTag"(arg0: $ListTag$Type): void
public "endBatch"(): void
public "endBatchSuppressed"(): void
public "writeToTag"(): $ListTag
public "createMenuWrapper"(): $ConfigMenuInventory
public "getAvailableStacks"(): $KeyCounter
public static "checkPreconditions"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): void
public "isPreferredStorageFor"(arg0: $AEKey$Type, arg1: $IActionSource$Type): boolean
get "empty"(): boolean
get "filter"(): $AEKeyFilter
get "mode"(): $GenericStackInv$Mode
get "description"(): $Component
set "description"(value: $Component$Type)
get "availableStacks"(): $KeyCounter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericStackInv$Type = ($GenericStackInv);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GenericStackInv_ = $GenericStackInv$Type;
}}
declare module "packages/appeng/helpers/$IConfigInvHost" {
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"

export interface $IConfigInvHost {

 "getConfig"(): $GenericStackInv

(): $GenericStackInv
}

export namespace $IConfigInvHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigInvHost$Type = ($IConfigInvHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IConfigInvHost_ = $IConfigInvHost$Type;
}}
declare module "packages/appeng/helpers/$Splotch" {
import {$AEColor, $AEColor$Type} from "packages/appeng/api/util/$AEColor"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"

export class $Splotch {

constructor(arg0: $AEColor$Type, arg1: boolean, arg2: $Direction$Type, arg3: $Vec3$Type)
constructor(arg0: $FriendlyByteBuf$Type)

public "x"(): float
public "y"(): float
public "getSeed"(): integer
public "getSide"(): $Direction
public "getColor"(): $AEColor
public "isLumen"(): boolean
public "writeToStream"(arg0: $FriendlyByteBuf$Type): void
get "seed"(): integer
get "side"(): $Direction
get "color"(): $AEColor
get "lumen"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Splotch$Type = ($Splotch);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Splotch_ = $Splotch$Type;
}}
declare module "packages/appeng/helpers/patternprovider/$PatternProviderReturnInventory" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$MEStorage, $MEStorage$Type} from "packages/appeng/api/storage/$MEStorage"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"

export class $PatternProviderReturnInventory extends $GenericStackInv {
static "NUMBER_OF_SLOTS": integer

constructor(arg0: $Runnable$Type)

public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "canInsert"(): boolean
public "canExtract"(): boolean
public "injectIntoNetwork"(arg0: $MEStorage$Type, arg1: $IActionSource$Type, arg2: $Consumer$Type<($GenericStack$Type)>): boolean
public "addDrops"(arg0: $List$Type<($ItemStack$Type)>, arg1: $Level$Type, arg2: $BlockPos$Type): void
public static "checkPreconditions"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type, arg3: $IActionSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PatternProviderReturnInventory$Type = ($PatternProviderReturnInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PatternProviderReturnInventory_ = $PatternProviderReturnInventory$Type;
}}
