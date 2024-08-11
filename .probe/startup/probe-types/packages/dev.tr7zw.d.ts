declare module "packages/dev/tr7zw/entityculling/versionless/access/$Cullable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Cullable {

 "setTimeout"(): void
 "isForcedVisible"(): boolean
 "setCulled"(arg0: boolean): void
 "isCulled"(): boolean
 "isOutOfCamera"(): boolean
 "setOutOfCamera"(arg0: boolean): void
}

export namespace $Cullable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cullable$Type = ($Cullable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Cullable_ = $Cullable$Type;
}}
declare module "packages/dev/tr7zw/entityculling/access/$EntityRendererInter" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export interface $EntityRendererInter<T extends $Entity> {

 "shadowRenderNameTag"(arg0: T, arg1: $Component$Type, arg2: $PoseStack$Type, arg3: $MultiBufferSource$Type, arg4: integer, arg5: float): void
 "shadowShouldShowName"(arg0: T): boolean
}

export namespace $EntityRendererInter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererInter$Type<T> = ($EntityRendererInter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityRendererInter_<T> = $EntityRendererInter$Type<(T)>;
}}
