declare module "packages/me/ichun/mods/ichunutil/mixin/$LevelStorageAccessAccessorMixin" {
import {$LevelStorageSource$LevelDirectory, $LevelStorageSource$LevelDirectory$Type} from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelDirectory"

export interface $LevelStorageAccessAccessorMixin {

 "getLevelDirectory"(): $LevelStorageSource$LevelDirectory

(): $LevelStorageSource$LevelDirectory
}

export namespace $LevelStorageAccessAccessorMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelStorageAccessAccessorMixin$Type = ($LevelStorageAccessAccessorMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LevelStorageAccessAccessorMixin_ = $LevelStorageAccessAccessorMixin$Type;
}}
declare module "packages/me/ichun/mods/ichunutil/mixin/$MinecraftServerAccessorMixin" {
import {$LevelStorageSource$LevelStorageAccess, $LevelStorageSource$LevelStorageAccess$Type} from "packages/net/minecraft/world/level/storage/$LevelStorageSource$LevelStorageAccess"

export interface $MinecraftServerAccessorMixin {

 "getStorageSource"(): $LevelStorageSource$LevelStorageAccess

(): $LevelStorageSource$LevelStorageAccess
}

export namespace $MinecraftServerAccessorMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftServerAccessorMixin$Type = ($MinecraftServerAccessorMixin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MinecraftServerAccessorMixin_ = $MinecraftServerAccessorMixin$Type;
}}
declare module "packages/me/ichun/mods/ichunutil/mixin/client/$LivingEntityRendererAccessorMixin" {
import {$RenderLayer, $RenderLayer$Type} from "packages/net/minecraft/client/renderer/entity/layers/$RenderLayer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$EntityModel, $EntityModel$Type} from "packages/net/minecraft/client/model/$EntityModel"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $LivingEntityRendererAccessorMixin<T extends $LivingEntity, M extends $EntityModel<(T)>> {

 "invokeAddLayer"(arg0: $RenderLayer$Type<(T), (M)>): boolean
 "setModel"(arg0: M): void
 "getLayers"(): $List<($RenderLayer<(T), (M)>)>
}

export namespace $LivingEntityRendererAccessorMixin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessorMixin$Type<T, M> = ($LivingEntityRendererAccessorMixin<(T), (M)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LivingEntityRendererAccessorMixin_<T, M> = $LivingEntityRendererAccessorMixin$Type<(T), (M)>;
}}
