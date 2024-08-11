declare module "packages/com/abdelaziz/canary/common/hopper/$CanaryStackList" {
import {$ItemStackSubscriber, $ItemStackSubscriber$Type} from "packages/com/abdelaziz/canary/common/entity/item/$ItemStackSubscriber"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$CanaryDefaultedList, $CanaryDefaultedList$Type} from "packages/com/abdelaziz/canary/api/inventory/$CanaryDefaultedList"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$InventoryChangeTracker, $InventoryChangeTracker$Type} from "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeTracker"

export class $CanaryStackList extends $NonNullList<($ItemStack)> implements $CanaryDefaultedList, $ItemStackSubscriber {

constructor(arg0: $NonNullList$Type<($ItemStack$Type)>, arg1: integer)
constructor(arg0: integer)

public "runComparatorUpdatePatternOnFailedExtract"(arg0: $CanaryStackList$Type, arg1: $Container$Type): void
public "maybeSendsComparatorUpdatesOnFailedExtract"(): boolean
public "add"(arg0: integer, arg1: $ItemStack$Type): void
public "remove"(arg0: integer): $ItemStack
public "clear"(): void
public "set"(arg0: integer, arg1: $ItemStack$Type): $ItemStack
public "changed"(): void
public "setInventoryModificationCallback"(arg0: $InventoryChangeTracker$Type): void
public "notifyBeforeCountChange"(arg0: integer, arg1: integer): void
public "removeInventoryModificationCallback"(arg0: $InventoryChangeTracker$Type): void
public "getModCount"(): long
public "changedALot"(): void
public "getSignalStrength"(arg0: $Container$Type): integer
public "getFullSlots"(): integer
public "getOccupiedSlots"(): integer
public "setReducedSignalStrengthOverride"(): void
public "clearSignalStrengthOverride"(): void
public "hasSignalStrengthOverride"(): boolean
public "changedInteractionConditions"(): void
public "remove"(arg0: any): boolean
public static "copyOf"<E>(arg0: $Collection$Type<(any)>): $List<(E)>
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$Type<(any)>): boolean
public "removeAll"(arg0: $Collection$Type<(any)>): boolean
public "retainAll"(arg0: $Collection$Type<(any)>): boolean
public "containsAll"(arg0: $Collection$Type<(any)>): boolean
set "inventoryModificationCallback"(value: $InventoryChangeTracker$Type)
get "modCount"(): long
get "fullSlots"(): integer
get "occupiedSlots"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanaryStackList$Type = ($CanaryStackList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanaryStackList_ = $CanaryStackList$Type;
}}
declare module "packages/com/abdelaziz/canary/common/world/chunk/$ClassGroupFilterableList" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$EntityClassGroup, $EntityClassGroup$Type} from "packages/com/abdelaziz/canary/common/entity/$EntityClassGroup"

export interface $ClassGroupFilterableList<T> {

 "getAllOfGroupType"(arg0: $EntityClassGroup$Type): $Collection<(T)>

(arg0: $EntityClassGroup$Type): $Collection<(T)>
}

export namespace $ClassGroupFilterableList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClassGroupFilterableList$Type<T> = ($ClassGroupFilterableList<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClassGroupFilterableList_<T> = $ClassGroupFilterableList$Type<(T)>;
}}
declare module "packages/com/abdelaziz/canary/common/world/$ChunkView" {
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"

export interface $ChunkView {

 "getLoadedChunk"(arg0: integer, arg1: integer): $ChunkAccess

(arg0: integer, arg1: integer): $ChunkAccess
}

export namespace $ChunkView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkView$Type = ($ChunkView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkView_ = $ChunkView$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/$EquipmentEntity$EquipmentTrackingEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity$EquipmentTrackingEntity {

}

export namespace $EquipmentEntity$EquipmentTrackingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$EquipmentTrackingEntity$Type = ($EquipmentEntity$EquipmentTrackingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentEntity$EquipmentTrackingEntity_ = $EquipmentEntity$EquipmentTrackingEntity$Type;
}}
declare module "packages/com/abdelaziz/canary/mixin/world/combined_heightmap_update/$HeightmapAccessor" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $HeightmapAccessor {

 "set"(arg0: integer, arg1: integer, arg2: integer): void
 "getOpaque"(): $Predicate<($BlockState)>
}

export namespace $HeightmapAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeightmapAccessor$Type = ($HeightmapAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HeightmapAccessor_ = $HeightmapAccessor$Type;
}}
declare module "packages/com/abdelaziz/canary/common/block/entity/inventory_comparator_tracking/$ComparatorTracker" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $ComparatorTracker {

 "hasAnyComparatorNearby"(): boolean
 "onComparatorAdded"(arg0: $Direction$Type, arg1: integer): void
}

export namespace $ComparatorTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComparatorTracker$Type = ($ComparatorTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ComparatorTracker_ = $ComparatorTracker$Type;
}}
declare module "packages/com/abdelaziz/canary/api/inventory/$CanaryDefaultedList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CanaryDefaultedList {

 "changedInteractionConditions"(): void

(): void
}

export namespace $CanaryDefaultedList {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CanaryDefaultedList$Type = ($CanaryDefaultedList);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CanaryDefaultedList_ = $CanaryDefaultedList$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/$EquipmentEntity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EquipmentEntity {

 "canaryOnEquipmentChanged"(): void
}

export namespace $EquipmentEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquipmentEntity$Type = ($EquipmentEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquipmentEntity_ = $EquipmentEntity$Type;
}}
declare module "packages/com/abdelaziz/canary/common/shapes/$OffsetVoxelShapeCache" {
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export interface $OffsetVoxelShapeCache {

 "setShape"(arg0: float, arg1: $Direction$Type, arg2: $VoxelShape$Type): void
 "getOffsetSimplifiedShape"(arg0: float, arg1: $Direction$Type): $VoxelShape
}

export namespace $OffsetVoxelShapeCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetVoxelShapeCache$Type = ($OffsetVoxelShapeCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OffsetVoxelShapeCache_ = $OffsetVoxelShapeCache$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/pushable/$EntityPushablePredicate" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"

export class $EntityPushablePredicate<S> implements $Predicate<(S)> {

constructor()

public static "and"<T>(arg0: $Predicate$Type<(any)>, arg1: $Predicate$Type<(any)>): $Predicate<(T)>
public "test"(arg0: S): boolean
public "or"(arg0: $Predicate$Type<(any)>): $Predicate<(S)>
public "negate"(): $Predicate<(S)>
public "and"(arg0: $Predicate$Type<(any)>): $Predicate<(S)>
public static "not"<T>(arg0: $Predicate$Type<(any)>): $Predicate<(S)>
public static "isEqual"<T>(arg0: any): $Predicate<(S)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityPushablePredicate$Type<S> = ($EntityPushablePredicate<(S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityPushablePredicate_<S> = $EntityPushablePredicate$Type<(S)>;
}}
declare module "packages/com/abdelaziz/canary/common/world/interests/$PointOfInterestSetExtended" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$PoiRecord, $PoiRecord$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy"

export interface $PointOfInterestSetExtended {

 "collectMatchingPoints"(arg0: $Predicate$Type<($Holder$Type<($PoiType$Type)>)>, arg1: $PoiManager$Occupancy$Type, arg2: $Consumer$Type<($PoiRecord$Type)>): void

(arg0: $Predicate$Type<($Holder$Type<($PoiType$Type)>)>, arg1: $PoiManager$Occupancy$Type, arg2: $Consumer$Type<($PoiRecord$Type)>): void
}

export namespace $PointOfInterestSetExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestSetExtended$Type = ($PointOfInterestSetExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointOfInterestSetExtended_ = $PointOfInterestSetExtended$Type;
}}
declare module "packages/com/abdelaziz/canary/common/world/$ClimbingMobCachingSection" {
import {$AbortableIterationConsumer$Continuation, $AbortableIterationConsumer$Continuation$Type} from "packages/net/minecraft/util/$AbortableIterationConsumer$Continuation"
import {$BlockCachingEntity, $BlockCachingEntity$Type} from "packages/com/abdelaziz/canary/common/entity/pushable/$BlockCachingEntity"
import {$ArrayList, $ArrayList$Type} from "packages/java/util/$ArrayList"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EntityPushablePredicate, $EntityPushablePredicate$Type} from "packages/com/abdelaziz/canary/common/entity/pushable/$EntityPushablePredicate"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClimbingMobCachingSection {

 "onEntityModifiedCachedBlock"(arg0: $BlockCachingEntity$Type, arg1: $BlockState$Type): void
 "collectPushableEntities"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $AABB$Type, arg3: $EntityPushablePredicate$Type<(any)>, arg4: $ArrayList$Type<($Entity$Type)>): $AbortableIterationConsumer$Continuation
}

export namespace $ClimbingMobCachingSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClimbingMobCachingSection$Type = ($ClimbingMobCachingSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClimbingMobCachingSection_ = $ClimbingMobCachingSection$Type;
}}
declare module "packages/com/abdelaziz/canary/common/client/$ClientWorldAccessor" {
import {$TransientEntitySectionManager, $TransientEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$TransientEntitySectionManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ClientWorldAccessor {

 "getEntityManager"(): $TransientEntitySectionManager<($Entity)>

(): $TransientEntitySectionManager<($Entity)>
}

export namespace $ClientWorldAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientWorldAccessor$Type = ($ClientWorldAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientWorldAccessor_ = $ClientWorldAccessor$Type;
}}
declare module "packages/com/abdelaziz/canary/common/hopper/$NotifyingItemStack" {
import {$ItemStackSubscriber, $ItemStackSubscriber$Type} from "packages/com/abdelaziz/canary/common/entity/item/$ItemStackSubscriber"

export interface $NotifyingItemStack {

 "canary$subscribeWithIndex"(arg0: $ItemStackSubscriber$Type, arg1: integer): void
 "canary$unsubscribeWithIndex"(arg0: $ItemStackSubscriber$Type, arg1: integer): void
 "canary$unsubscribe"(arg0: $ItemStackSubscriber$Type): void
 "canary$subscribe"(arg0: $ItemStackSubscriber$Type): void
}

export namespace $NotifyingItemStack {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NotifyingItemStack$Type = ($NotifyingItemStack);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NotifyingItemStack_ = $NotifyingItemStack$Type;
}}
declare module "packages/com/abdelaziz/canary/common/world/interests/$PointOfInterestStorageExtended" {
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$PoiRecord, $PoiRecord$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiRecord"
import {$WorldBorder, $WorldBorder$Type} from "packages/net/minecraft/world/level/border/$WorldBorder"
import {$PoiType, $PoiType$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiType"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PoiManager$Occupancy, $PoiManager$Occupancy$Type} from "packages/net/minecraft/world/entity/ai/village/poi/$PoiManager$Occupancy"

export interface $PointOfInterestStorageExtended {

 "findNearestForPortalLogic"(arg0: $BlockPos$Type, arg1: integer, arg2: $Holder$Type<($PoiType$Type)>, arg3: $PoiManager$Occupancy$Type, arg4: $Predicate$Type<($PoiRecord$Type)>, arg5: $WorldBorder$Type): $Optional<($PoiRecord)>

(arg0: $BlockPos$Type, arg1: integer, arg2: $Holder$Type<($PoiType$Type)>, arg3: $PoiManager$Occupancy$Type, arg4: $Predicate$Type<($PoiRecord$Type)>, arg5: $WorldBorder$Type): $Optional<($PoiRecord)>
}

export namespace $PointOfInterestStorageExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PointOfInterestStorageExtended$Type = ($PointOfInterestStorageExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PointOfInterestStorageExtended_ = $PointOfInterestStorageExtended$Type;
}}
declare module "packages/com/abdelaziz/canary/common/util/tuples/$WorldSectionBox" {
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $WorldSectionBox extends $Record {

constructor(world: $Level$Type, chunkX1: integer, chunkY1: integer, chunkZ1: integer, chunkX2: integer, chunkY2: integer, chunkZ2: integer)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "world"(): $Level
public "numSections"(): integer
public "chunkX1"(): integer
public "chunkX2"(): integer
public "chunkY1"(): integer
public "chunkZ1"(): integer
public "chunkZ2"(): integer
public "chunkY2"(): integer
public "matchesRelevantBlocksBox"(arg0: $AABB$Type): boolean
public static "relevantExpandedBlocksBox"(arg0: $Level$Type, arg1: $AABB$Type): $WorldSectionBox
public static "relevantFluidBox"(arg0: $Level$Type, arg1: $AABB$Type): $WorldSectionBox
public static "entityAccessBox"(arg0: $Level$Type, arg1: $AABB$Type): $WorldSectionBox
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSectionBox$Type = ($WorldSectionBox);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldSectionBox_ = $WorldSectionBox$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/$NavigatingEntity" {
import {$PathNavigation, $PathNavigation$Type} from "packages/net/minecraft/world/entity/ai/navigation/$PathNavigation"

export interface $NavigatingEntity {

 "updateNavigationRegistration"(): void
 "setRegisteredToWorld"(arg0: $PathNavigation$Type): void
 "getRegisteredNavigation"(): $PathNavigation
 "isRegisteredToWorld"(): boolean
}

export namespace $NavigatingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NavigatingEntity$Type = ($NavigatingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NavigatingEntity_ = $NavigatingEntity$Type;
}}
declare module "packages/com/abdelaziz/canary/mixin/util/accessors/$EntitySectionAccessor" {
import {$ClassInstanceMultiMap, $ClassInstanceMultiMap$Type} from "packages/net/minecraft/util/$ClassInstanceMultiMap"

export interface $EntitySectionAccessor<T> {

 "getStorage"(): $ClassInstanceMultiMap<(T)>

(): $ClassInstanceMultiMap<(T)>
}

export namespace $EntitySectionAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntitySectionAccessor$Type<T> = ($EntitySectionAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntitySectionAccessor_<T> = $EntitySectionAccessor$Type<(T)>;
}}
declare module "packages/com/abdelaziz/canary/mixin/util/accessors/$TransientEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"

export interface $TransientEntitySectionManagerAccessor<T extends $EntityAccess> {

 "getSectionStorage"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage<(T)>
}

export namespace $TransientEntitySectionManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransientEntitySectionManagerAccessor$Type<T> = ($TransientEntitySectionManagerAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TransientEntitySectionManagerAccessor_<T> = $TransientEntitySectionManagerAccessor$Type<(T)>;
}}
declare module "packages/com/abdelaziz/canary/common/world/$ChunkRandomSource" {
import {$BlockPos$MutableBlockPos, $BlockPos$MutableBlockPos$Type} from "packages/net/minecraft/core/$BlockPos$MutableBlockPos"

export interface $ChunkRandomSource {

 "getRandomPosInChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos$Type): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $BlockPos$MutableBlockPos$Type): void
}

export namespace $ChunkRandomSource {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkRandomSource$Type = ($ChunkRandomSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkRandomSource_ = $ChunkRandomSource$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/item/$ItemStackSubscriber" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemStackSubscriber {

 "notifyBeforeCountChange"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $ItemStackSubscriber {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackSubscriber$Type = ($ItemStackSubscriber);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackSubscriber_ = $ItemStackSubscriber$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/movement_tracker/$SectionedEntityMovementListener" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $SectionedEntityMovementListener {

 "handleEntityMovement"(arg0: $Class$Type<(any)>): void

(arg0: $Class$Type<(any)>): void
}

export namespace $SectionedEntityMovementListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementListener$Type = ($SectionedEntityMovementListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedEntityMovementListener_ = $SectionedEntityMovementListener$Type;
}}
declare module "packages/com/abdelaziz/canary/common/ai/pathing/$BlockStatePathingCache" {
import {$BlockPathTypes, $BlockPathTypes$Type} from "packages/net/minecraft/world/level/pathfinder/$BlockPathTypes"

export interface $BlockStatePathingCache {

 "getPathNodeType"(): $BlockPathTypes
 "getNeighborPathNodeType"(): $BlockPathTypes
}

export namespace $BlockStatePathingCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStatePathingCache$Type = ($BlockStatePathingCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockStatePathingCache_ = $BlockStatePathingCache$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/$EntityClassGroup" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export class $EntityClassGroup {
static readonly "MINECART_BOAT_LIKE_COLLISION": $EntityClassGroup

constructor(arg0: $Predicate$Type<($Class$Type<(any)>)>)

public "clear"(): void
public "contains"(arg0: $Class$Type<(any)>): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityClassGroup$Type = ($EntityClassGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityClassGroup_ = $EntityClassGroup$Type;
}}
declare module "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeListener" {
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $InventoryChangeListener {

 "handleInventoryContentModified"(arg0: $Container$Type): void
 "handleStackListReplaced"(arg0: $Container$Type): void
 "handleInventoryRemoved"(arg0: $Container$Type): void
 "handleComparatorAdded"(arg0: $Container$Type): boolean
}

export namespace $InventoryChangeListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeListener$Type = ($InventoryChangeListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeListener_ = $InventoryChangeListener$Type;
}}
declare module "packages/com/abdelaziz/canary/mixin/util/accessors/$ServerLevelAccessor" {
import {$PersistentEntitySectionManager, $PersistentEntitySectionManager$Type} from "packages/net/minecraft/world/level/entity/$PersistentEntitySectionManager"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $ServerLevelAccessor {

 "getEntityManager"(): $PersistentEntitySectionManager<($Entity)>

(): $PersistentEntitySectionManager<($Entity)>
}

export namespace $ServerLevelAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$Type = ($ServerLevelAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerLevelAccessor_ = $ServerLevelAccessor$Type;
}}
declare module "packages/com/abdelaziz/canary/common/world/$ServerWorldExtended" {
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"

export interface $ServerWorldExtended {

 "setNavigationInactive"(arg0: $Mob$Type): void
 "setNavigationActive"(arg0: $Mob$Type): void
}

export namespace $ServerWorldExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerWorldExtended$Type = ($ServerWorldExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ServerWorldExtended_ = $ServerWorldExtended$Type;
}}
declare module "packages/com/abdelaziz/canary/common/world/interests/$RegionBasedStorageSectionExtended" {
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"

export interface $RegionBasedStorageSectionExtended<R> {

 "getWithinChunkColumn"(arg0: integer, arg1: integer): $Stream<(R)>
 "getInChunkColumn"(arg0: integer, arg1: integer): $Iterable<(R)>
}

export namespace $RegionBasedStorageSectionExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegionBasedStorageSectionExtended$Type<R> = ($RegionBasedStorageSectionExtended<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RegionBasedStorageSectionExtended_<R> = $RegionBasedStorageSectionExtended$Type<(R)>;
}}
declare module "packages/com/abdelaziz/canary/common/entity/pushable/$BlockCachingEntity" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"

export interface $BlockCachingEntity {

 "canarySetClimbingMobCachingSectionUpdateBehavior"(arg0: boolean): void
 "canaryOnBlockCacheDeleted"(): void
 "canaryOnBlockCacheSet"(arg0: $BlockState$Type): void
 "getCachedFeetBlockState"(): $BlockState

(arg0: boolean): void
}

export namespace $BlockCachingEntity {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCachingEntity$Type = ($BlockCachingEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockCachingEntity_ = $BlockCachingEntity$Type;
}}
declare module "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeTracker" {
import {$CanaryStackList, $CanaryStackList$Type} from "packages/com/abdelaziz/canary/common/hopper/$CanaryStackList"
import {$InventoryChangeEmitter, $InventoryChangeEmitter$Type} from "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeEmitter"
import {$InventoryChangeListener, $InventoryChangeListener$Type} from "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeListener"

export interface $InventoryChangeTracker extends $InventoryChangeEmitter {

 "stopListenForMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "listenForMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "listenForContentChangesOnce"(arg0: $CanaryStackList$Type, arg1: $InventoryChangeListener$Type): void
 "emitFirstComparatorAdded"(): void
 "forwardContentChangeOnce"(arg0: $InventoryChangeListener$Type, arg1: $CanaryStackList$Type, arg2: $InventoryChangeTracker$Type): void
 "forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "emitStackListReplaced"(): void
 "emitCallbackReplaced"(): void
 "emitContentModified"(): void
 "stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "emitRemoved"(): void
}

export namespace $InventoryChangeTracker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeTracker$Type = ($InventoryChangeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeTracker_ = $InventoryChangeTracker$Type;
}}
declare module "packages/com/abdelaziz/canary/mixin/util/accessors/$PersistentEntitySectionManagerAccessor" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"

export interface $PersistentEntitySectionManagerAccessor<T extends $EntityAccess> {

 "getSectionStorage"(): $EntitySectionStorage<(T)>

(): $EntitySectionStorage<(T)>
}

export namespace $PersistentEntitySectionManagerAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PersistentEntitySectionManagerAccessor$Type<T> = ($PersistentEntitySectionManagerAccessor<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PersistentEntitySectionManagerAccessor_<T> = $PersistentEntitySectionManagerAccessor$Type<(T)>;
}}
declare module "packages/com/abdelaziz/canary/common/entity/movement_tracker/$EntityMovementTrackerSection" {
import {$EntitySectionStorage, $EntitySectionStorage$Type} from "packages/net/minecraft/world/level/entity/$EntitySectionStorage"
import {$SectionedEntityMovementTracker, $SectionedEntityMovementTracker$Type} from "packages/com/abdelaziz/canary/common/entity/movement_tracker/$SectionedEntityMovementTracker"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"

export interface $EntityMovementTrackerSection {

 "removeListener"(arg0: $EntitySectionStorage$Type<(any)>, arg1: $SectionedEntityMovementTracker$Type<(any), (any)>): void
 "addListener"(arg0: $SectionedEntityMovementTracker$Type<(any), (any)>): void
 "listenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$Type<(E), (S)>, arg1: integer): void
 "removeListenToMovementOnce"<S, E extends $EntityAccess>(arg0: $SectionedEntityMovementTracker$Type<(E), (S)>, arg1: integer): void
 "trackEntityMovement"(arg0: integer, arg1: long): void
 "getChangeTime"(arg0: integer): long
}

export namespace $EntityMovementTrackerSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityMovementTrackerSection$Type = ($EntityMovementTrackerSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityMovementTrackerSection_ = $EntityMovementTrackerSection$Type;
}}
declare module "packages/com/abdelaziz/canary/common/ai/$MemoryModificationCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MemoryModificationCounter {

 "getModCount"(): long

(): long
}

export namespace $MemoryModificationCounter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MemoryModificationCounter$Type = ($MemoryModificationCounter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MemoryModificationCounter_ = $MemoryModificationCounter$Type;
}}
declare module "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeEmitter" {
import {$CanaryStackList, $CanaryStackList$Type} from "packages/com/abdelaziz/canary/common/hopper/$CanaryStackList"
import {$InventoryChangeTracker, $InventoryChangeTracker$Type} from "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeTracker"
import {$InventoryChangeListener, $InventoryChangeListener$Type} from "packages/com/abdelaziz/canary/common/block/entity/inventory_change_tracking/$InventoryChangeListener"

export interface $InventoryChangeEmitter {

 "emitFirstComparatorAdded"(): void
 "forwardContentChangeOnce"(arg0: $InventoryChangeListener$Type, arg1: $CanaryStackList$Type, arg2: $InventoryChangeTracker$Type): void
 "forwardMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "emitStackListReplaced"(): void
 "emitCallbackReplaced"(): void
 "emitContentModified"(): void
 "stopForwardingMajorInventoryChanges"(arg0: $InventoryChangeListener$Type): void
 "emitRemoved"(): void
}

export namespace $InventoryChangeEmitter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryChangeEmitter$Type = ($InventoryChangeEmitter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryChangeEmitter_ = $InventoryChangeEmitter$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/$PositionedEntityTrackingSection" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PositionedEntityTrackingSection {

 "getPos"(): long
 "setPos"(arg0: long): void
}

export namespace $PositionedEntityTrackingSection {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PositionedEntityTrackingSection$Type = ($PositionedEntityTrackingSection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PositionedEntityTrackingSection_ = $PositionedEntityTrackingSection$Type;
}}
declare module "packages/com/abdelaziz/canary/common/world/chunk/$ChunkHolderExtended" {
import {$CompletableFuture, $CompletableFuture$Type} from "packages/java/util/concurrent/$CompletableFuture"
import {$ChunkAccess, $ChunkAccess$Type} from "packages/net/minecraft/world/level/chunk/$ChunkAccess"
import {$Either, $Either$Type} from "packages/com/mojang/datafixers/util/$Either"
import {$ChunkHolder$ChunkLoadingFailure, $ChunkHolder$ChunkLoadingFailure$Type} from "packages/net/minecraft/server/level/$ChunkHolder$ChunkLoadingFailure"

export interface $ChunkHolderExtended {

 "updateLastAccessTime"(arg0: long): boolean
 "getFutureByStatus"(arg0: integer): $CompletableFuture<($Either<($ChunkAccess), ($ChunkHolder$ChunkLoadingFailure)>)>
 "setFutureForStatus"(arg0: integer, arg1: $CompletableFuture$Type<($Either$Type<($ChunkAccess$Type), ($ChunkHolder$ChunkLoadingFailure$Type)>)>): void
}

export namespace $ChunkHolderExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkHolderExtended$Type = ($ChunkHolderExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkHolderExtended_ = $ChunkHolderExtended$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/movement_tracker/$MovementTrackerCache" {
import {$SectionedEntityMovementTracker, $SectionedEntityMovementTracker$Type} from "packages/com/abdelaziz/canary/common/entity/movement_tracker/$SectionedEntityMovementTracker"

export interface $MovementTrackerCache {

 "remove"(arg0: $SectionedEntityMovementTracker$Type<(any), (any)>): void
 "deduplicate"<S extends $SectionedEntityMovementTracker<(any), (any)>>(arg0: S): S
}

export namespace $MovementTrackerCache {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MovementTrackerCache$Type = ($MovementTrackerCache);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MovementTrackerCache_ = $MovementTrackerCache$Type;
}}
declare module "packages/com/abdelaziz/canary/common/world/blockentity/$BlockEntityGetter" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export interface $BlockEntityGetter {

 "getLoadedExistingBlockEntity"(arg0: $BlockPos$Type): $BlockEntity

(arg0: $BlockPos$Type): $BlockEntity
}

export namespace $BlockEntityGetter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityGetter$Type = ($BlockEntityGetter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockEntityGetter_ = $BlockEntityGetter$Type;
}}
declare module "packages/com/abdelaziz/canary/mixin/world/block_entity_ticking/sleeping/$RebindableTickingBlockEntityWrapperAccessor" {
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"

export interface $RebindableTickingBlockEntityWrapperAccessor {

 "getTicker"(): $TickingBlockEntity
 "callRebind"(arg0: $TickingBlockEntity$Type): void
}

export namespace $RebindableTickingBlockEntityWrapperAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RebindableTickingBlockEntityWrapperAccessor$Type = ($RebindableTickingBlockEntityWrapperAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RebindableTickingBlockEntityWrapperAccessor_ = $RebindableTickingBlockEntityWrapperAccessor$Type;
}}
declare module "packages/com/abdelaziz/canary/common/block/entity/$SleepingBlockEntity" {
import {$TickingBlockEntity, $TickingBlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$TickingBlockEntity"
import {$RebindableTickingBlockEntityWrapperAccessor, $RebindableTickingBlockEntityWrapperAccessor$Type} from "packages/com/abdelaziz/canary/mixin/world/block_entity_ticking/sleeping/$RebindableTickingBlockEntityWrapperAccessor"

export interface $SleepingBlockEntity {

 "wakeUpNow"(): void
 "startSleeping"(): boolean
 "isSleeping"(): boolean
 "setTickWrapper"(arg0: $RebindableTickingBlockEntityWrapperAccessor$Type): void
 "setSleepingTicker"(arg0: $TickingBlockEntity$Type): void
 "getTickWrapper"(): $RebindableTickingBlockEntityWrapperAccessor
 "getSleepingTicker"(): $TickingBlockEntity
 "setTicker"(arg0: $TickingBlockEntity$Type): void
 "sleepOnlyCurrentTick"(): void
}

export namespace $SleepingBlockEntity {
const SLEEPING_BLOCK_ENTITY_TICKER: $TickingBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SleepingBlockEntity$Type = ($SleepingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SleepingBlockEntity_ = $SleepingBlockEntity$Type;
}}
declare module "packages/com/abdelaziz/canary/common/entity/movement_tracker/$SectionedEntityMovementTracker" {
import {$WorldSectionBox, $WorldSectionBox$Type} from "packages/com/abdelaziz/canary/common/util/tuples/$WorldSectionBox"
import {$EntityMovementTrackerSection, $EntityMovementTrackerSection$Type} from "packages/com/abdelaziz/canary/common/entity/movement_tracker/$EntityMovementTrackerSection"
import {$SectionedEntityMovementListener, $SectionedEntityMovementListener$Type} from "packages/com/abdelaziz/canary/common/entity/movement_tracker/$SectionedEntityMovementListener"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$EntityAccess, $EntityAccess$Type} from "packages/net/minecraft/world/level/entity/$EntityAccess"

export class $SectionedEntityMovementTracker<E extends $EntityAccess, S> {

constructor(arg0: $WorldSectionBox$Type, arg1: $Class$Type<(S)>)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "register"(arg0: $ServerLevel$Type): void
public "isUnchangedSince"(arg0: long): boolean
public "unRegister"(arg0: $ServerLevel$Type): void
public "onSectionEnteredRange"(arg0: $EntityMovementTrackerSection$Type): void
public "onSectionLeftRange"(arg0: $EntityMovementTrackerSection$Type): void
public "emitEntityMovement"(arg0: integer, arg1: $EntityMovementTrackerSection$Type): void
public "listenToEntityMovementOnce"(arg0: $SectionedEntityMovementListener$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionedEntityMovementTracker$Type<E, S> = ($SectionedEntityMovementTracker<(E), (S)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SectionedEntityMovementTracker_<E, S> = $SectionedEntityMovementTracker$Type<(E), (S)>;
}}
