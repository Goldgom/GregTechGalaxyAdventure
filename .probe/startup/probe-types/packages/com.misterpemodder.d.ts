declare module "packages/com/misterpemodder/shulkerboxtooltip/impl/hook/$HandledScreenDrawTooltip" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $HandledScreenDrawTooltip {

 "shulkerboxtooltip$drawMouseoverTooltip"(arg0: $GuiGraphics$Type, arg1: $Font$Type, arg2: $List$Type<($Component$Type)>, arg3: $Optional$Type<($TooltipComponent$Type)>, arg4: $ItemStack$Type, arg5: integer, arg6: integer): void

(arg0: $GuiGraphics$Type, arg1: $Font$Type, arg2: $List$Type<($Component$Type)>, arg3: $Optional$Type<($TooltipComponent$Type)>, arg4: $ItemStack$Type, arg5: integer, arg6: integer): void
}

export namespace $HandledScreenDrawTooltip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenDrawTooltip$Type = ($HandledScreenDrawTooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandledScreenDrawTooltip_ = $HandledScreenDrawTooltip$Type;
}}
declare module "packages/com/misterpemodder/shulkerboxtooltip/impl/hook/$DrawContextExtensions" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $DrawContextExtensions {

 "setMouseY"(arg0: integer): void
 "setMouseX"(arg0: integer): void
 "getMouseY"(): integer
 "getMouseX"(): integer
 "getTooltipBottomYPosition"(): integer
 "setTooltipTopYPosition"(arg0: integer): void
 "getTooltipTopYPosition"(): integer
 "setTooltipBottomYPosition"(arg0: integer): void
}

export namespace $DrawContextExtensions {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawContextExtensions$Type = ($DrawContextExtensions);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DrawContextExtensions_ = $DrawContextExtensions$Type;
}}
declare module "packages/com/misterpemodder/shulkerboxtooltip/impl/hook/$HandledScreenLockTooltip" {
import {$TooltipComponent, $TooltipComponent$Type} from "packages/net/minecraft/world/inventory/tooltip/$TooltipComponent"
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $HandledScreenLockTooltip {

 "shulkerboxtooltip$lockTooltipPosition"(arg0: $GuiGraphics$Type, arg1: $Font$Type, arg2: $List$Type<($Component$Type)>, arg3: $Optional$Type<($TooltipComponent$Type)>, arg4: $ItemStack$Type, arg5: integer, arg6: integer): void

(arg0: $GuiGraphics$Type, arg1: $Font$Type, arg2: $List$Type<($Component$Type)>, arg3: $Optional$Type<($TooltipComponent$Type)>, arg4: $ItemStack$Type, arg5: integer, arg6: integer): void
}

export namespace $HandledScreenLockTooltip {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HandledScreenLockTooltip$Type = ($HandledScreenLockTooltip);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $HandledScreenLockTooltip_ = $HandledScreenLockTooltip$Type;
}}
