declare module "packages/me/jellysquid/mods/sodium/mixin/core/render/$VertexFormatAccessor" {
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"

export interface $VertexFormatAccessor {

 "getOffsets"(): $IntList

(): $IntList
}

export namespace $VertexFormatAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VertexFormatAccessor$Type = ($VertexFormatAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $VertexFormatAccessor_ = $VertexFormatAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ModelCuboid {
readonly "x1": float
readonly "y1": float
readonly "z1": float
readonly "x2": float
readonly "y2": float
readonly "z2": float
readonly "u0": float
readonly "u1": float
readonly "u2": float
readonly "u3": float
readonly "u4": float
readonly "u5": float
readonly "v0": float
readonly "v1": float
readonly "v2": float
readonly "mirror": boolean

constructor(arg0: integer, arg1: integer, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: boolean, arg12: float, arg13: float, arg14: $Set$Type<($Direction$Type)>)

public "shouldDrawFace"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboid$Type = ($ModelCuboid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboid_ = $ModelCuboid$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"

export class $ExtendedVertexFormat$Element {
readonly "actual": $VertexFormatElement
readonly "increment": integer
readonly "byteLength": integer

constructor(arg0: $VertexFormatElement$Type, arg1: integer, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedVertexFormat$Element$Type = ($ExtendedVertexFormat$Element);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedVertexFormat$Element_ = $ExtendedVertexFormat$Element$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getIndex"(): integer
 "getTime"(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport" {
import {$SectionPos, $SectionPos$Type} from "packages/net/minecraft/core/$SectionPos"
import {$Frustum, $Frustum$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/frustum/$Frustum"
import {$CameraTransform, $CameraTransform$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$CameraTransform"
import {$Vector3d, $Vector3d$Type} from "packages/org/joml/$Vector3d"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"

export class $Viewport {

constructor(arg0: $Frustum$Type, arg1: $Vector3d$Type)

public "getTransform"(): $CameraTransform
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float, arg4: float, arg5: float): boolean
public "isBoxVisible"(arg0: integer, arg1: integer, arg2: integer, arg3: float): boolean
public "isBoxVisible"(arg0: $AABB$Type): boolean
public "getChunkCoord"(): $SectionPos
public "getBlockCoord"(): $BlockPos
get "transform"(): $CameraTransform
get "chunkCoord"(): $SectionPos
get "blockCoord"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Viewport$Type = ($Viewport);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Viewport_ = $Viewport$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$BiomeSeedProvider" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"

export interface $BiomeSeedProvider {

 "sodium$getBiomeSeed"(): long

(): long
}

export namespace $BiomeSeedProvider {
function getBiomeSeed(arg0: $ClientLevel$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiomeSeedProvider$Type = ($BiomeSeedProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BiomeSeedProvider_ = $BiomeSeedProvider$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker" {
import {$CallbackInfo, $CallbackInfo$Type} from "packages/org/spongepowered/asm/mixin/injection/callback/$CallbackInfo"
import {$ClientChunkEventListener, $ClientChunkEventListener$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ClientChunkEventListener"
import {$ChunkTracker$ChunkEventHandler, $ChunkTracker$ChunkEventHandler$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker$ChunkEventHandler"
import {$LongCollection, $LongCollection$Type} from "packages/it/unimi/dsi/fastutil/longs/$LongCollection"

export class $ChunkTracker implements $ClientChunkEventListener {

constructor()

public "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
public "getReadyChunks"(): $LongCollection
public "forEachEvent"(arg0: $ChunkTracker$ChunkEventHandler$Type, arg1: $ChunkTracker$ChunkEventHandler$Type): void
public static "forEachChunk"(arg0: $LongCollection$Type, arg1: $ChunkTracker$ChunkEventHandler$Type): void
public "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
public "handler$dje000$valkyrienskies$beforeUpdateMerged"(x: integer, z: integer, ci: $CallbackInfo$Type): void
public "updateMapCenter"(arg0: integer, arg1: integer): void
public "updateLoadDistance"(arg0: integer): void
get "readyChunks"(): $LongCollection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$Type = ($ChunkTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker_ = $ChunkTracker$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTrackerHolder" {
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$ChunkTracker, $ChunkTracker$Type} from "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker"

export interface $ChunkTrackerHolder {

 "sodium$getTracker"(): $ChunkTracker

(arg0: $ClientLevel$Type): $ChunkTracker
}

export namespace $ChunkTrackerHolder {
function get(arg0: $ClientLevel$Type): $ChunkTracker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTrackerHolder$Type = ($ChunkTrackerHolder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTrackerHolder_ = $ChunkTrackerHolder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/interop/$BlockColorsExtended" {
import {$BlockColors, $BlockColors$Type} from "packages/net/minecraft/client/color/block/$BlockColors"
import {$ReferenceSet, $ReferenceSet$Type} from "packages/it/unimi/dsi/fastutil/objects/$ReferenceSet"
import {$BlockColor, $BlockColor$Type} from "packages/net/minecraft/client/color/block/$BlockColor"
import {$Reference2ReferenceMap, $Reference2ReferenceMap$Type} from "packages/it/unimi/dsi/fastutil/objects/$Reference2ReferenceMap"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $BlockColorsExtended {

 "embeddium$getOverridenVanillaBlocks"(): $ReferenceSet<($Block)>
 "sodium$getProviders"(): $Reference2ReferenceMap<($Block), ($BlockColor)>
}

export namespace $BlockColorsExtended {
function getProviders(arg0: $BlockColors$Type): $Reference2ReferenceMap<($Block), ($BlockColor)>
function getOverridenVanillaBlocks(arg0: $BlockColors$Type): $ReferenceSet<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockColorsExtended$Type = ($BlockColorsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockColorsExtended_ = $BlockColorsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/$SodiumWorldRenderer" {
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource$BufferSource"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$BlockDestructionProgress, $BlockDestructionProgress$Type} from "packages/net/minecraft/server/level/$BlockDestructionProgress"
import {$Viewport, $Viewport$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Long2ObjectMap, $Long2ObjectMap$Type} from "packages/it/unimi/dsi/fastutil/longs/$Long2ObjectMap"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$SortedSet, $SortedSet$Type} from "packages/java/util/$SortedSet"
import {$RenderBuffers, $RenderBuffers$Type} from "packages/net/minecraft/client/renderer/$RenderBuffers"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$Type} from "packages/net/minecraft/client/renderer/blockentity/$BlockEntityRenderDispatcher"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $SodiumWorldRenderer {

constructor(arg0: $Minecraft$Type)

public static "instance"(): $SodiumWorldRenderer
public "reload"(): void
public "drawChunkLayer"(arg0: $RenderType$Type, arg1: $PoseStack$Type, arg2: double, arg3: double, arg4: double): void
public "isSectionReady"(arg0: integer, arg1: integer, arg2: integer): boolean
public "setWorld"(arg0: $ClientLevel$Type): void
public "setupTerrain"(arg0: $Camera$Type, arg1: $Viewport$Type, arg2: integer, arg3: boolean, arg4: boolean): void
public "scheduleTerrainUpdate"(): void
public "scheduleRebuildForBlockArea"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "scheduleRebuildForChunks"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: boolean): void
public "didBlockEntityRequestOutline"(): boolean
public "renderBlockEntities"(arg0: $PoseStack$Type, arg1: $RenderBuffers$Type, arg2: $Long2ObjectMap$Type<($SortedSet$Type<($BlockDestructionProgress$Type)>)>, arg3: $Camera$Type, arg4: float): void
public "getChunksDebugString"(): string
public "scheduleRebuildForChunk"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "isTerrainRenderComplete"(): boolean
public "getVisibleChunkCount"(): integer
/**
 * 
 * @deprecated
 */
public "onChunkRemoved"(arg0: integer, arg1: integer): void
/**
 * 
 * @deprecated
 */
public "onChunkAdded"(arg0: integer, arg1: integer): void
public "isBoxVisible"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): boolean
public "getDebugStrings"(): $Collection<(string)>
/**
 * 
 * @deprecated
 */
public "onChunkLightAdded"(arg0: integer, arg1: integer): void
public "isEntityVisible"(arg0: $Entity$Type): boolean
public static "instanceNullable"(): $SodiumWorldRenderer
public "redirect$djd000$valkyrienskies$renderShipBlockEntities"(instance: $SodiumWorldRenderer$Type, matrices: $PoseStack$Type, bufferBuilders: $RenderBuffers$Type, blockBreakingProgressions: $Long2ObjectMap$Type<(any)>, tickDelta: float, immediate: $MultiBufferSource$BufferSource$Type, x: double, y: double, z: double, blockEntityRenderer: $BlockEntityRenderDispatcher$Type): void
public "blockEntityIterator"(): $Iterator<($BlockEntity)>
public "forEachVisibleBlockEntity"(arg0: $Consumer$Type<($BlockEntity$Type)>): void
set "world"(value: $ClientLevel$Type)
get "chunksDebugString"(): string
get "terrainRenderComplete"(): boolean
get "visibleChunkCount"(): integer
get "debugStrings"(): $Collection<(string)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumWorldRenderer$Type = ($SodiumWorldRenderer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumWorldRenderer_ = $SodiumWorldRenderer$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/$NativeImageAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NativeImageAccessor {

 "getPointer"(): long

(): long
}

export namespace $NativeImageAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NativeImageAccessor$Type = ($NativeImageAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NativeImageAccessor_ = $NativeImageAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/core/render/$MinecraftAccessor" {
import {$Thread, $Thread$Type} from "packages/java/lang/$Thread"

export interface $MinecraftAccessor {

 "embeddium$getGameThread"(): $Thread

(): $Thread
}

export namespace $MinecraftAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$Type = ($MinecraftAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftAccessor_ = $MinecraftAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/$ModelCuboidAccessor" {
import {$ModelCuboid, $ModelCuboid$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"

export interface $ModelCuboidAccessor {

 "embeddium$getSimpleCuboid"(): $ModelCuboid
 "sodium$copy"(): $ModelCuboid
}

export namespace $ModelCuboidAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelCuboidAccessor$Type = ($ModelCuboidAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelCuboidAccessor_ = $ModelCuboidAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/core/model/$BakedModelMixin" {
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EmbeddiumBakedModelExtension, $EmbeddiumBakedModelExtension$Type} from "packages/org/embeddedt/embeddium/api/model/$EmbeddiumBakedModelExtension"
import {$RenderType, $RenderType$Type} from "packages/net/minecraft/client/renderer/$RenderType"

export interface $BakedModelMixin extends $EmbeddiumBakedModelExtension {

 "useAmbientOcclusionWithLightEmission"(arg0: $BlockState$Type, arg1: $RenderType$Type): boolean
}

export namespace $BakedModelMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModelMixin$Type = ($BakedModelMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedModelMixin_ = $BakedModelMixin$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/$BakedQuadView" {
import {$ModelQuadFacing, $ModelQuadFacing$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing"
import {$ModelQuadView, $ModelQuadView$Type} from "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $BakedQuadView extends $ModelQuadView {

 "setFlags"(arg0: integer): void
 "hasShade"(): boolean
 "getNormalFace"(): $ModelQuadFacing
 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
 "getX"(arg0: integer): float
 "hasColor"(): boolean
 "getSprite"(): $TextureAtlasSprite
 "getColorIndex"(): integer
 "getTexU"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getModFaceNormal"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getTexV"(arg0: integer): float
}

export namespace $BakedQuadView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuadView$Type = ($BakedQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BakedQuadView_ = $BakedQuadView$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/color/interop/$ItemColorsExtended" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemColor, $ItemColor$Type} from "packages/net/minecraft/client/color/item/$ItemColor"

export interface $ItemColorsExtended {

 "sodium$getColorProvider"(arg0: $ItemStack$Type): $ItemColor

(arg0: $ItemStack$Type): $ItemColor
}

export namespace $ItemColorsExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemColorsExtended$Type = ($ItemColorsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemColorsExtended_ = $ItemColorsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder" {
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$SodiumBufferBuilder, $SodiumBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$VertexBufferWriter, $VertexBufferWriter$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"

export interface $ExtendedBufferBuilder extends $VertexBufferWriter {

 "sodium$getElementOffset"(): integer
 "sodium$getFormatDescription"(): $VertexFormatDescription
 "sodium$moveToNextVertex"(): void
 "sodium$usingFixedColor"(): boolean
 "sodium$getDelegate"(): $SodiumBufferBuilder
 "sodium$getBuffer"(): $ByteBuffer
 "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
 "canUseIntrinsics"(): boolean
/**
 * 
 * @deprecated
 */
 "isFullWriter"(): boolean
}

export namespace $ExtendedBufferBuilder {
function of(arg0: $VertexConsumer$Type): $VertexBufferWriter
function copyInto(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
function tryOf(arg0: $VertexConsumer$Type): $VertexBufferWriter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBufferBuilder$Type = ($ExtendedBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedBufferBuilder_ = $ExtendedBufferBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$CameraTransform" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CameraTransform {
readonly "intX": integer
readonly "intY": integer
readonly "intZ": integer
readonly "fracX": float
readonly "fracY": float
readonly "fracZ": float
readonly "x": double
readonly "y": double
readonly "z": double

constructor(arg0: double, arg1: double, arg2: double)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CameraTransform$Type = ($CameraTransform);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CameraTransform_ = $CameraTransform$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$ReadableContainerExtended" {
import {$PalettedContainerRO, $PalettedContainerRO$Type} from "packages/net/minecraft/world/level/chunk/$PalettedContainerRO"

export interface $ReadableContainerExtended<T> {

 "sodium$copy"(): $PalettedContainerRO<(T)>
 "sodium$unpack"(arg0: (T)[], arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "sodium$unpack"(arg0: (T)[]): void
}

export namespace $ReadableContainerExtended {
function clone<T>(arg0: $PalettedContainerRO$Type<(T)>): $PalettedContainerRO<(T)>
function of<T>(arg0: $PalettedContainerRO$Type<(T)>): $ReadableContainerExtended<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReadableContainerExtended$Type<T> = ($ReadableContainerExtended<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReadableContainerExtended_<T> = $ReadableContainerExtended$Type<(T)>;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelPartData" {
import {$ModelPart, $ModelPart$Type} from "packages/net/minecraft/client/model/geom/$ModelPart"
import {$ModelCuboid, $ModelCuboid$Type} from "packages/me/jellysquid/mods/sodium/client/render/immediate/model/$ModelCuboid"

export interface $ModelPartData {

 "isHidden"(): boolean
/**
 * 
 * @deprecated
 */
 "getChildren"(): ($ModelPart)[]
 "isVisible"(): boolean
/**
 * 
 * @deprecated
 */
 "getCuboids"(): ($ModelCuboid)[]
}

export namespace $ModelPartData {
function from(arg0: $ModelPart$Type): $ModelPartData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelPartData$Type = ($ModelPartData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelPartData_ = $ModelPartData$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/world/$WorldRendererExtended" {
import {$SodiumWorldRenderer, $SodiumWorldRenderer$Type} from "packages/me/jellysquid/mods/sodium/client/render/$SodiumWorldRenderer"

export interface $WorldRendererExtended {

 "sodium$getWorldRenderer"(): $SodiumWorldRenderer

(): $SodiumWorldRenderer
}

export namespace $WorldRendererExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldRendererExtended$Type = ($WorldRendererExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WorldRendererExtended_ = $WorldRendererExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/texture/$SpriteContentsExtended" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsExtended {

 "sodium$hasAnimation"(): boolean
 "sodium$isActive"(): boolean
 "sodium$setActive"(arg0: boolean): void
}

export namespace $SpriteContentsExtended {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsExtended$Type = ($SpriteContentsExtended);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsExtended_ = $SpriteContentsExtended$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpriteContentsAnimationAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>

(): $List<($SpriteContents$FrameInfo)>
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$Type = ($SpriteContentsAnimationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/tracking/$SpriteContentsAnimationFrameAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsAnimationFrameAccessor {

 "getTime"(): integer

(): integer
}

export namespace $SpriteContentsAnimationFrameAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationFrameAccessor$Type = ($SpriteContentsAnimationFrameAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationFrameAccessor_ = $SpriteContentsAnimationFrameAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAnimationAccessor" {
import {$SpriteContents$FrameInfo, $SpriteContents$FrameInfo$Type} from "packages/net/minecraft/client/renderer/texture/$SpriteContents$FrameInfo"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $SpriteContentsAnimationAccessor {

 "getFrames"(): $List<($SpriteContents$FrameInfo)>
 "getFrameRowSize"(): integer
}

export namespace $SpriteContentsAnimationAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimationAccessor$Type = ($SpriteContentsAnimationAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAnimationAccessor_ = $SpriteContentsAnimationAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/animations/upload/$SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $SpriteContentsAccessor {

 "getImages"(): ($NativeImage)[]

(): ($NativeImage)[]
}

export namespace $SpriteContentsAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$Type = ($SpriteContentsAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsAccessor_ = $SpriteContentsAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ClientChunkEventListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ClientChunkEventListener {

 "onChunkStatusRemoved"(arg0: integer, arg1: integer, arg2: integer): void
 "onChunkStatusAdded"(arg0: integer, arg1: integer, arg2: integer): void
 "updateMapCenter"(arg0: integer, arg1: integer): void
 "updateLoadDistance"(arg0: integer): void
}

export namespace $ClientChunkEventListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientChunkEventListener$Type = ($ClientChunkEventListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ClientChunkEventListener_ = $ClientChunkEventListener$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/frustum/$Frustum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Frustum {

 "testAab"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean

(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float): boolean
}

export namespace $Frustum {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$Type = ($Frustum);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Frustum_ = $Frustum$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/properties/$ModelQuadFacing" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"

export class $ModelQuadFacing extends $Enum<($ModelQuadFacing)> {
static readonly "POS_X": $ModelQuadFacing
static readonly "POS_Y": $ModelQuadFacing
static readonly "POS_Z": $ModelQuadFacing
static readonly "NEG_X": $ModelQuadFacing
static readonly "NEG_Y": $ModelQuadFacing
static readonly "NEG_Z": $ModelQuadFacing
static readonly "UNASSIGNED": $ModelQuadFacing
static readonly "VALUES": ($ModelQuadFacing)[]
static readonly "COUNT": integer
static readonly "NONE": integer
static readonly "ALL": integer


public static "values"(): ($ModelQuadFacing)[]
public static "valueOf"(arg0: string): $ModelQuadFacing
public static "fromDirection"(arg0: $Direction$Type): $ModelQuadFacing
public "getOpposite"(): $ModelQuadFacing
get "opposite"(): $ModelQuadFacing
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadFacing$Type = (("pos_y") | ("pos_z") | ("pos_x") | ("neg_x") | ("neg_z") | ("neg_y") | ("unassigned")) | ($ModelQuadFacing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadFacing_ = $ModelQuadFacing$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/textures/$SpriteContentsInvoker" {
import {$NativeImage, $NativeImage$Type} from "packages/com/mojang/blaze3d/platform/$NativeImage"

export interface $SpriteContentsInvoker {

 "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$Type)[]): void

(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$Type)[]): void
}

export namespace $SpriteContentsInvoker {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsInvoker$Type = ($SpriteContentsInvoker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SpriteContentsInvoker_ = $SpriteContentsInvoker$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/chunk/map/$ChunkTracker$ChunkEventHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ChunkTracker$ChunkEventHandler {

 "apply"(arg0: integer, arg1: integer): void

(arg0: integer, arg1: integer): void
}

export namespace $ChunkTracker$ChunkEventHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkTracker$ChunkEventHandler$Type = ($ChunkTracker$ChunkEventHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChunkTracker$ChunkEventHandler_ = $ChunkTracker$ChunkEventHandler$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/model/quad/$ModelQuadView" {
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $ModelQuadView {

 "getFlags"(): integer
 "getY"(arg0: integer): float
 "getColor"(arg0: integer): integer
 "getZ"(arg0: integer): float
 "getComputedFaceNormal"(): integer
 "hasAmbientOcclusion"(): boolean
 "getX"(arg0: integer): float
 "hasColor"(): boolean
 "getSprite"(): $TextureAtlasSprite
 "getColorIndex"(): integer
 "getTexU"(arg0: integer): float
 "getLight"(arg0: integer): integer
 "getLightFace"(): $Direction
 "getModFaceNormal"(): integer
 "getForgeNormal"(arg0: integer): integer
 "getTexV"(arg0: integer): float
}

export namespace $ModelQuadView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelQuadView$Type = ($ModelQuadView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModelQuadView_ = $ModelQuadView$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$SodiumBufferBuilder" {
import {$VertexFormatElement, $VertexFormatElement$Type} from "packages/com/mojang/blaze3d/vertex/$VertexFormatElement"
import {$VertexConsumer, $VertexConsumer$Type} from "packages/com/mojang/blaze3d/vertex/$VertexConsumer"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$Matrix4f, $Matrix4f$Type} from "packages/org/joml/$Matrix4f"
import {$VertexFormatDescription, $VertexFormatDescription$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/format/$VertexFormatDescription"
import {$Matrix3f, $Matrix3f$Type} from "packages/org/joml/$Matrix3f"
import {$ByteBuffer, $ByteBuffer$Type} from "packages/java/nio/$ByteBuffer"
import {$MemoryStack, $MemoryStack$Type} from "packages/org/lwjgl/system/$MemoryStack"
import {$ExtendedBufferBuilder, $ExtendedBufferBuilder$Type} from "packages/me/jellysquid/mods/sodium/client/render/vertex/buffer/$ExtendedBufferBuilder"
import {$BufferBuilder, $BufferBuilder$Type} from "packages/com/mojang/blaze3d/vertex/$BufferBuilder"
import {$PoseStack$Pose, $PoseStack$Pose$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack$Pose"
import {$VertexBufferWriter, $VertexBufferWriter$Type} from "packages/net/caffeinemc/mods/sodium/api/vertex/buffer/$VertexBufferWriter"
import {$BakedQuad, $BakedQuad$Type} from "packages/net/minecraft/client/renderer/block/model/$BakedQuad"

export class $SodiumBufferBuilder implements $VertexConsumer, $VertexBufferWriter {

constructor(arg0: $ExtendedBufferBuilder$Type)

public "reset"(): void
public "push"(arg0: $MemoryStack$Type, arg1: long, arg2: integer, arg3: $VertexFormatDescription$Type): void
public "color"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $VertexConsumer
public "overlayCoords"(arg0: integer, arg1: integer): $VertexConsumer
public "uv2"(arg0: integer, arg1: integer): $VertexConsumer
public "normal"(arg0: float, arg1: float, arg2: float): $VertexConsumer
public "unsetDefaultColor"(): void
public "color"(arg0: integer): $VertexConsumer
public "vertex"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: integer, arg10: integer, arg11: float, arg12: float, arg13: float): void
public "defaultColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "uv2"(arg0: integer): $VertexConsumer
public "overlayCoords"(arg0: integer): $VertexConsumer
public "getOriginalBufferBuilder"(): $BufferBuilder
public "vertex"(arg0: double, arg1: double, arg2: double): $VertexConsumer
public "uv"(arg0: float, arg1: float): $VertexConsumer
public "endVertex"(): void
public "canUseIntrinsics"(): boolean
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: (integer)[], arg7: integer, arg8: boolean): void
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: (float)[], arg3: float, arg4: float, arg5: float, arg6: float, arg7: (integer)[], arg8: integer, arg9: boolean): void
public "vertex"(arg0: $Matrix4f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "normal"(arg0: $Matrix3f$Type, arg1: float, arg2: float, arg3: float): $VertexConsumer
public "color"(arg0: float, arg1: float, arg2: float, arg3: float): $VertexConsumer
public static "of"(arg0: $VertexConsumer$Type): $VertexBufferWriter
public static "copyInto"(arg0: $VertexBufferWriter$Type, arg1: $MemoryStack$Type, arg2: long, arg3: integer, arg4: $VertexFormatDescription$Type): void
public static "tryOf"(arg0: $VertexConsumer$Type): $VertexBufferWriter
/**
 * 
 * @deprecated
 */
public "isFullWriter"(): boolean
public "putBulkData"(arg0: $PoseStack$Pose$Type, arg1: $BakedQuad$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: integer, arg7: integer, arg8: boolean): void
public "applyBakedLighting"(arg0: integer, arg1: $ByteBuffer$Type): integer
public "applyBakedNormals"(arg0: $Vector3f$Type, arg1: $ByteBuffer$Type, arg2: $Matrix3f$Type): void
public "misc"(arg0: $VertexFormatElement$Type, ...arg1: (integer)[]): $VertexConsumer
get "originalBufferBuilder"(): $BufferBuilder
get "fullWriter"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SodiumBufferBuilder$Type = ($SodiumBufferBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SodiumBufferBuilder_ = $SodiumBufferBuilder$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/mixin/features/render/gui/debug/$DebugScreenOverlayAccessor" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $DebugScreenOverlayAccessor {

 "invokeRenderLines"(arg0: $GuiGraphics$Type, arg1: $List$Type<(string)>, arg2: boolean): void

(arg0: $GuiGraphics$Type, arg1: $List$Type<(string)>, arg2: boolean): void
}

export namespace $DebugScreenOverlayAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugScreenOverlayAccessor$Type = ($DebugScreenOverlayAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DebugScreenOverlayAccessor_ = $DebugScreenOverlayAccessor$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/render/viewport/$ViewportProvider" {
import {$Viewport, $Viewport$Type} from "packages/me/jellysquid/mods/sodium/client/render/viewport/$Viewport"

export interface $ViewportProvider {

 "sodium$createViewport"(): $Viewport

(): $Viewport
}

export namespace $ViewportProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewportProvider$Type = ($ViewportProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ViewportProvider_ = $ViewportProvider$Type;
}}
declare module "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat" {
import {$ExtendedVertexFormat$Element, $ExtendedVertexFormat$Element$Type} from "packages/me/jellysquid/mods/sodium/client/buffer/$ExtendedVertexFormat$Element"

export interface $ExtendedVertexFormat {

 "embeddium$getExtendedElements"(): ($ExtendedVertexFormat$Element)[]

(): ($ExtendedVertexFormat$Element)[]
}

export namespace $ExtendedVertexFormat {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedVertexFormat$Type = ($ExtendedVertexFormat);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ExtendedVertexFormat_ = $ExtendedVertexFormat$Type;
}}
