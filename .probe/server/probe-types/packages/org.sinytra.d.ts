declare module "packages/org/sinytra/connector/mod/compat/$ItemStackExtensions" {
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"

export interface $ItemStackExtensions {

 "connector_useOn"(arg0: $UseOnContext$Type): $InteractionResult

(arg0: $UseOnContext$Type): $InteractionResult
}

export namespace $ItemStackExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackExtensions$Type = ($ItemStackExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemStackExtensions_ = $ItemStackExtensions$Type;
}}
declare module "packages/org/sinytra/connector/mod/compat/hud/$GuiExtensions" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export interface $GuiExtensions {

 "connector_setRenderState"(arg0: string, arg1: boolean): void
 "connector_renderHealth"(arg0: $GuiGraphics$Type): void
 "connector_wrapCancellableCall"(arg0: string, arg1: $Runnable$Type): boolean
 "connector_getRenderState"(arg0: string): boolean
 "connector_postRender"(arg0: $GuiGraphics$Type, arg1: float): void
 "connector_renderHotbar"(arg0: $GuiGraphics$Type, arg1: float): void
 "connector_preRender"(arg0: $GuiGraphics$Type, arg1: float): void
 "connector_renderEffects"(arg0: $GuiGraphics$Type, arg1: float): void
 "connector_beforeDebugEnabled"(arg0: $GuiGraphics$Type, arg1: float): void
 "connector_renderArmor"(arg0: $GuiGraphics$Type): void
}

export namespace $GuiExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiExtensions$Type = ($GuiExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $GuiExtensions_ = $GuiExtensions$Type;
}}
declare module "packages/org/sinytra/connector/mod/mixin/recipebook/$RecipeBookCategoriesAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RecipeBookCategoriesAccessor {

}

export namespace $RecipeBookCategoriesAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookCategoriesAccessor$Type = ($RecipeBookCategoriesAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeBookCategoriesAccessor_ = $RecipeBookCategoriesAccessor$Type;
}}
