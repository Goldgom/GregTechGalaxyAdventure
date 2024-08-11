declare module "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder" {
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"

export interface $IRecipeSlotBuilder extends $IIngredientAcceptor<($IRecipeSlotBuilder)> {

 "setBackground"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setFluidRenderer"(arg0: long, arg1: boolean, arg2: integer, arg3: integer): $IRecipeSlotBuilder
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): $IRecipeSlotBuilder
 "setOverlay"(arg0: $IDrawable$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "setCustomRenderer"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $IIngredientRenderer$Type<(T)>): $IRecipeSlotBuilder
 "setSlotName"(arg0: string): $IRecipeSlotBuilder
 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): $IRecipeSlotBuilder
 "addIngredients"<I>(arg0: $IIngredientType$Type<(I)>, arg1: $List$Type<(I)>): $IRecipeSlotBuilder
 "addIngredients"(arg0: $Ingredient$Type): $IRecipeSlotBuilder
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): $IRecipeSlotBuilder
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): $IRecipeSlotBuilder
 "addItemStack"(arg0: $ItemStack$Type): $IRecipeSlotBuilder
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): $IRecipeSlotBuilder
}

export namespace $IRecipeSlotBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotBuilder$Type = ($IRecipeSlotBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotBuilder_ = $IRecipeSlotBuilder$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IRecipesGui" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipesGui {

 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "show"<V>(arg0: $IFocus$Type<(V)>): void
 "show"(arg0: $List$Type<($IFocus$Type<(any)>)>): void
 "showRecipes"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: $List$Type<(T)>, arg2: $List$Type<($IFocus$Type<(any)>)>): void
 "showTypes"(arg0: $List$Type<($RecipeType$Type<(any)>)>): void
}

export namespace $IRecipesGui {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipesGui$Type = ($IRecipesGui);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipesGui_ = $IRecipesGui$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IJeiHelpers" {
import {$IModIdHelper, $IModIdHelper$Type} from "packages/mezz/jei/api/helpers/$IModIdHelper"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IColorHelper, $IColorHelper$Type} from "packages/mezz/jei/api/helpers/$IColorHelper"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IGuiHelper, $IGuiHelper$Type} from "packages/mezz/jei/api/helpers/$IGuiHelper"
import {$IPlatformFluidHelper, $IPlatformFluidHelper$Type} from "packages/mezz/jei/api/helpers/$IPlatformFluidHelper"
import {$IStackHelper, $IStackHelper$Type} from "packages/mezz/jei/api/helpers/$IStackHelper"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"

export interface $IJeiHelpers {

 "getIngredientManager"(): $IIngredientManager
 "getAllRecipeTypes"(): $Stream<($RecipeType<(any)>)>
 "getModIdHelper"(): $IModIdHelper
 "getGuiHelper"(): $IGuiHelper
 "getPlatformFluidHelper"(): $IPlatformFluidHelper<(any)>
 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "getColorHelper"(): $IColorHelper
 "getStackHelper"(): $IStackHelper
 "getFocusFactory"(): $IFocusFactory
}

export namespace $IJeiHelpers {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiHelpers$Type = ($IJeiHelpers);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiHelpers_ = $IJeiHelpers$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IColorHelper" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TextureAtlasSprite, $TextureAtlasSprite$Type} from "packages/net/minecraft/client/renderer/texture/$TextureAtlasSprite"

export interface $IColorHelper {

 "getColors"(arg0: $TextureAtlasSprite$Type, arg1: integer, arg2: integer): $List<(integer)>
 "getColors"(arg0: $ItemStack$Type, arg1: integer): $List<(integer)>
 "getClosestColorName"(arg0: integer): string
}

export namespace $IColorHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColorHelper$Type = ($IColorHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IColorHelper_ = $IColorHelper$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IStackHelper" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IStackHelper {

 "isEquivalent"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $UidContext$Type): boolean
 "getUniqueIdentifierForStack"(arg0: $ItemStack$Type, arg1: $UidContext$Type): string
}

export namespace $IStackHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStackHelper$Type = ($IStackHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IStackHelper_ = $IStackHelper$Type;
}}
declare module "packages/mezz/jei/api/registration/$IAdvancedRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IRecipeCategoryDecorator, $IRecipeCategoryDecorator$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryDecorator"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IJeiFeatures, $IJeiFeatures$Type} from "packages/mezz/jei/api/runtime/$IJeiFeatures"
import {$IRecipeManagerPlugin, $IRecipeManagerPlugin$Type} from "packages/mezz/jei/api/recipe/advanced/$IRecipeManagerPlugin"

export interface $IAdvancedRegistration {

 "addRecipeCategoryDecorator"<T>(arg0: $RecipeType$Type<(T)>, arg1: $IRecipeCategoryDecorator$Type<(T)>): void
 "getJeiHelpers"(): $IJeiHelpers
 "getJeiFeatures"(): $IJeiFeatures
 "addRecipeManagerPlugin"(arg0: $IRecipeManagerPlugin$Type): void
}

export namespace $IAdvancedRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAdvancedRegistration$Type = ($IAdvancedRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IAdvancedRegistration_ = $IAdvancedRegistration$Type;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeTransferRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IRecipeTransferInfo, $IRecipeTransferInfo$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferInfo"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferHandlerHelper, $IRecipeTransferHandlerHelper$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandlerHelper"

export interface $IRecipeTransferRegistration {

 "addUniversalRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler$Type<(C), (R)>): void
 "getJeiHelpers"(): $IJeiHelpers
 "addRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo$Type<(C), (R)>): void
 "addRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler$Type<(C), (R)>, arg1: $RecipeType$Type<(R)>): void
 "addRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $Class$Type<(any)>, arg1: $MenuType$Type<(C)>, arg2: $RecipeType$Type<(R)>, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "getTransferHelper"(): $IRecipeTransferHandlerHelper
}

export namespace $IRecipeTransferRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferRegistration$Type = ($IRecipeTransferRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferRegistration_ = $IRecipeTransferRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusGroup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFocusGroup {

 "isEmpty"(): boolean
 "getItemStackFocuses"(): $Stream<($IFocus<($ItemStack)>)>
 "getItemStackFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<($ItemStack)>)>
 "getAllFocuses"(): $List<($IFocus<(any)>)>
 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<($IFocus<(T)>)>
 "getFocuses"(arg0: $RecipeIngredientRole$Type): $Stream<($IFocus<(any)>)>
 "getFocuses"<T>(arg0: $IIngredientType$Type<(T)>, arg1: $RecipeIngredientRole$Type): $Stream<($IFocus<(T)>)>
}

export namespace $IFocusGroup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusGroup$Type = ($IFocusGroup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusGroup_ = $IFocusGroup$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMapping" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IJeiKeyMapping {

 "isUnbound"(): boolean
 "getTranslatedKeyMessage"(): $Component
 "isActiveAndMatches"(arg0: $InputConstants$Key$Type): boolean
}

export namespace $IJeiKeyMapping {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMapping$Type = ($IJeiKeyMapping);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMapping_ = $IJeiKeyMapping$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientVisibility$IListener, $IIngredientVisibility$IListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility {

 "registerListener"(arg0: $IIngredientVisibility$IListener$Type): void
 "isIngredientVisible"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "isIngredientVisible"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): boolean
}

export namespace $IIngredientVisibility {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$Type = ($IIngredientVisibility);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility_ = $IIngredientVisibility$Type;
}}
declare module "packages/mezz/jei/api/registration/$ISubtypeRegistration" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$IIngredientSubtypeInterpreter, $IIngredientSubtypeInterpreter$Type} from "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $ISubtypeRegistration {

 "useNbtForSubtypes"(...arg0: ($Fluid$Type)[]): void
 "useNbtForSubtypes"(...arg0: ($Item$Type)[]): void
 "registerSubtypeInterpreter"(arg0: $Item$Type, arg1: $IIngredientSubtypeInterpreter$Type<($ItemStack$Type)>): void
 "registerSubtypeInterpreter"<B, I>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (I)>, arg1: B, arg2: $IIngredientSubtypeInterpreter$Type<(I)>): void
}

export namespace $ISubtypeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubtypeRegistration$Type = ($ISubtypeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubtypeRegistration_ = $ISubtypeRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IDrawableAnimated$StartDirection extends $Enum<($IDrawableAnimated$StartDirection)> {
static readonly "TOP": $IDrawableAnimated$StartDirection
static readonly "BOTTOM": $IDrawableAnimated$StartDirection
static readonly "LEFT": $IDrawableAnimated$StartDirection
static readonly "RIGHT": $IDrawableAnimated$StartDirection


public static "values"(): ($IDrawableAnimated$StartDirection)[]
public static "valueOf"(arg0: string): $IDrawableAnimated$StartDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$StartDirection$Type = (("top") | ("left") | ("bottom") | ("right")) | ($IDrawableAnimated$StartDirection);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated$StartDirection_ = $IDrawableAnimated$StartDirection$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientVisibility$IListener" {
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientVisibility$IListener {

 "onIngredientVisibilityChanged"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: boolean): void

(arg0: $ITypedIngredient$Type<(V)>, arg1: boolean): void
}

export namespace $IIngredientVisibility$IListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientVisibility$IListener$Type = ($IIngredientVisibility$IListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientVisibility$IListener_ = $IIngredientVisibility$IListener$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/$IExtendableRecipeCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeCategoryExtension, $IRecipeCategoryExtension$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryExtension"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IExtendableRecipeCategory<T, W extends $IRecipeCategoryExtension> extends $IRecipeCategory<(T)> {

 "addCategoryExtension"<R extends T>(arg0: $Class$Type<(any)>, arg1: $Function$Type<(R), (any)>): void
 "addCategoryExtension"<R extends T>(arg0: $Class$Type<(any)>, arg1: $Predicate$Type<(R)>, arg2: $Function$Type<(R), (any)>): void
 "draw"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
 "getTitle"(): $Component
 "getHeight"(): integer
 "getWidth"(): integer
 "isHandled"(arg0: T): boolean
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
 "handleInput"(arg0: T, arg1: double, arg2: double, arg3: $InputConstants$Key$Type): boolean
 "getTooltipStrings"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: double, arg3: double): $List<($Component)>
 "getIcon"(): $IDrawable
 "getBackground"(): $IDrawable
 "getRecipeType"(): $RecipeType<(T)>
 "getRegistryName"(arg0: T): $ResourceLocation
}

export namespace $IExtendableRecipeCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IExtendableRecipeCategory$Type<T, W> = ($IExtendableRecipeCategory<(T), (W)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IExtendableRecipeCategory_<T, W> = $IExtendableRecipeCategory$Type<(T), (W)>;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeCatalystRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"

export interface $IRecipeCatalystRegistration {

 "getIngredientManager"(): $IIngredientManager
 "addRecipeCatalyst"<T>(arg0: $IIngredientType$Type<(T)>, arg1: T, ...arg2: ($RecipeType$Type<(any)>)[]): void
 "addRecipeCatalyst"(arg0: $ItemStack$Type, ...arg1: ($RecipeType$Type<(any)>)[]): void
 "getJeiHelpers"(): $IJeiHelpers
}

export namespace $IRecipeCatalystRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCatalystRegistration$Type = ($IRecipeCatalystRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCatalystRegistration_ = $IRecipeCatalystRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/$ITickTimer" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITickTimer {

 "getValue"(): integer
 "getMaxValue"(): integer
}

export namespace $ITickTimer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickTimer$Type = ($ITickTimer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITickTimer_ = $ITickTimer$Type;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$IIngredientSubtypeInterpreter" {
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientSubtypeInterpreter<T> {

 "apply"(arg0: T, arg1: $UidContext$Type): string

(arg0: T, arg1: $UidContext$Type): string
}

export namespace $IIngredientSubtypeInterpreter {
const NONE: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientSubtypeInterpreter$Type<T> = ($IIngredientSubtypeInterpreter<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientSubtypeInterpreter_<T> = $IIngredientSubtypeInterpreter$Type<(T)>;
}}
declare module "packages/mezz/jei/api/ingredients/$ITypedIngredient" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ITypedIngredient<T> {

 "getType"(): $IIngredientType<(T)>
 "getItemStack"(): $Optional<($ItemStack)>
 "getIngredient"(): T
 "getIngredient"<V>(arg0: $IIngredientType$Type<(V)>): $Optional<(V)>
}

export namespace $ITypedIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITypedIngredient$Type<T> = ($ITypedIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ITypedIngredient_<T> = $ITypedIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder" {
import {$IIngredientAcceptor, $IIngredientAcceptor$Type} from "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"

export interface $IRecipeLayoutBuilder {

 "addInvisibleIngredients"(arg0: $RecipeIngredientRole$Type): $IIngredientAcceptor<(any)>
 "addSlot"(arg0: $RecipeIngredientRole$Type, arg1: integer, arg2: integer): $IRecipeSlotBuilder
 "createFocusLink"(...arg0: ($IIngredientAcceptor$Type<(any)>)[]): void
 "setShapeless"(arg0: integer, arg1: integer): void
 "setShapeless"(): void
 "moveRecipeTransferButton"(arg0: integer, arg1: integer): void
}

export namespace $IRecipeLayoutBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutBuilder$Type = ($IRecipeLayoutBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutBuilder_ = $IRecipeLayoutBuilder$Type;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigFile" {
import {$Path, $Path$Type} from "packages/java/nio/file/$Path"
import {$List, $List$Type} from "packages/java/util/$List"

export interface $IJeiConfigFile {

 "getPath"(): $Path
 "getCategories"(): $List<(any)>
}

export namespace $IJeiConfigFile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigFile$Type = ($IJeiConfigFile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigFile_ = $IJeiConfigFile$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"

export interface $IRecipeTransferManager {

 "getRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: C, arg1: $IRecipeCategory$Type<(R)>): $Optional<($IRecipeTransferHandler<(C), (R)>)>

(arg0: C, arg1: $IRecipeCategory$Type<(R)>): $Optional<($IRecipeTransferHandler<(C), (R)>)>
}

export namespace $IRecipeTransferManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferManager$Type = ($IRecipeTransferManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferManager_ = $IRecipeTransferManager$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView" {
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IRecipeSlotsView {

 "getSlotViews"(): $List<($IRecipeSlotView)>
 "getSlotViews"(arg0: $RecipeIngredientRole$Type): $List<($IRecipeSlotView)>
 "findSlotByName"(arg0: string): $Optional<($IRecipeSlotView)>
}

export namespace $IRecipeSlotsView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotsView$Type = ($IRecipeSlotsView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotsView_ = $IRecipeSlotsView$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Iterable, $Iterable$Type} from "packages/java/lang/$Iterable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $IIngredientHelper<V> {

 "getDisplayName"(arg0: V): string
 "getAmount"(arg0: V): long
 "getErrorInfo"(arg0: V): string
 "getUniqueId"(arg0: V, arg1: $UidContext$Type): string
 "hasSubtypes"(arg0: V): boolean
 "getColors"(arg0: V): $Iterable<(integer)>
 "copyIngredient"(arg0: V): V
 "getWildcardId"(arg0: V): string
 "getDisplayModId"(arg0: V): string
 "getTagStream"(arg0: V): $Stream<($ResourceLocation)>
 "getTagEquivalent"(arg0: $Collection$Type<(V)>): $Optional<($ResourceLocation)>
 "getCheatItemStack"(arg0: V): $ItemStack
 "normalizeIngredient"(arg0: V): V
 "isHiddenFromRecipeViewersByTags"(arg0: V): boolean
 "isIngredientOnServer"(arg0: V): boolean
 "getResourceLocation"(arg0: V): $ResourceLocation
 "isValidIngredient"(arg0: V): boolean
 "copyWithAmount"(arg0: V, arg1: long): V
 "getIngredientType"(): $IIngredientType<(V)>
}

export namespace $IIngredientHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientHelper$Type<V> = ($IIngredientHelper<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientHelper_<V> = $IIngredientHelper$Type<(V)>;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientListOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientListOverlay {

 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "getVisibleIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
 "isListDisplayed"(): boolean
 "hasKeyboardFocus"(): boolean
}

export namespace $IIngredientListOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientListOverlay$Type = ($IIngredientListOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientListOverlay_ = $IIngredientListOverlay$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory" {
import {$IJeiBrewingRecipe, $IJeiBrewingRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IJeiAnvilRecipe, $IJeiAnvilRecipe$Type} from "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe"

export interface $IVanillaRecipeFactory {

/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $ItemStack$Type, arg2: $ItemStack$Type, arg3: $ResourceLocation$Type): $IJeiBrewingRecipe
/**
 * 
 * @deprecated
 */
 "createBrewingRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type): $IJeiBrewingRecipe
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
/**
 * 
 * @deprecated
 */
 "createAnvilRecipe"(arg0: $ItemStack$Type, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>): $IJeiAnvilRecipe
 "createAnvilRecipe"(arg0: $List$Type<($ItemStack$Type)>, arg1: $List$Type<($ItemStack$Type)>, arg2: $List$Type<($ItemStack$Type)>, arg3: $ResourceLocation$Type): $IJeiAnvilRecipe
}

export namespace $IVanillaRecipeFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVanillaRecipeFactory$Type = ($IVanillaRecipeFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVanillaRecipeFactory_ = $IVanillaRecipeFactory$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IFocusFactory, $IFocusFactory$Type} from "packages/mezz/jei/api/recipe/$IFocusFactory"

export interface $IGuiClickableArea {

 "getTooltipStrings"(): $List<($Component)>
 "onClick"(arg0: $IFocusFactory$Type, arg1: $IRecipesGui$Type): void
 "getArea"(): $Rect2i
 "isTooltipEnabled"(): boolean
}

export namespace $IGuiClickableArea {
function createBasic(arg0: integer, arg1: integer, arg2: integer, arg3: integer, ...arg4: ($RecipeType$Type<(any)>)[]): $IGuiClickableArea
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiClickableArea$Type = ($IGuiClickableArea);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiClickableArea_ = $IGuiClickableArea$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig" {
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IEditModeConfig$HideMode, $IEditModeConfig$HideMode$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IEditModeConfig {

 "isIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): boolean
 "getIngredientHiddenUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>): $Set<($IEditModeConfig$HideMode)>
 "showIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
 "hideIngredientUsingConfigFile"<V>(arg0: $ITypedIngredient$Type<(V)>, arg1: $IEditModeConfig$HideMode$Type): void
}

export namespace $IEditModeConfig {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$Type = ($IEditModeConfig);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig_ = $IEditModeConfig$Type;
}}
declare module "packages/mezz/jei/api/gui/builder/$IIngredientAcceptor" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientAcceptor<THIS extends $IIngredientAcceptor<(THIS)>> {

 "addItemStacks"(arg0: $List$Type<($ItemStack$Type)>): THIS
 "addIngredients"<I>(arg0: $IIngredientType$Type<(I)>, arg1: $List$Type<(I)>): THIS
 "addIngredients"(arg0: $Ingredient$Type): THIS
 "addIngredient"<I>(arg0: $IIngredientType$Type<(I)>, arg1: I): THIS
 "addFluidStack"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): THIS
 "addFluidStack"(arg0: $Fluid$Type, arg1: long): THIS
 "addItemStack"(arg0: $ItemStack$Type): THIS
 "addIngredientsUnsafe"(arg0: $List$Type<(any)>): THIS
}

export namespace $IIngredientAcceptor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientAcceptor$Type<THIS> = ($IIngredientAcceptor<(THIS)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientAcceptor_<THIS> = $IIngredientAcceptor$Type<(THIS)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandlerHelper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"
import {$IRecipeTransferInfo, $IRecipeTransferInfo$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferInfo"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$IRecipeTransferHandler, $IRecipeTransferHandler$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"

export interface $IRecipeTransferHandlerHelper {

 "createBasicRecipeTransferInfo"<C extends $AbstractContainerMenu, R>(arg0: $Class$Type<(any)>, arg1: $MenuType$Type<(C)>, arg2: $RecipeType$Type<(R)>, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $IRecipeTransferInfo<(C), (R)>
 "createRecipeSlotsView"(arg0: $List$Type<($IRecipeSlotView$Type)>): $IRecipeSlotsView
 "recipeTransferHasServerSupport"(): boolean
 "createUserErrorForMissingSlots"(arg0: $Component$Type, arg1: $Collection$Type<($IRecipeSlotView$Type)>): $IRecipeTransferError
 "createUserErrorWithTooltip"(arg0: $Component$Type): $IRecipeTransferError
 "createInternalError"(): $IRecipeTransferError
 "createUnregisteredRecipeTransferHandler"<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo$Type<(C), (R)>): $IRecipeTransferHandler<(C), (R)>
}

export namespace $IRecipeTransferHandlerHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferHandlerHelper$Type = ($IRecipeTransferHandlerHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferHandlerHelper_ = $IRecipeTransferHandlerHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiContainerHandler" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IGuiClickableArea, $IGuiClickableArea$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IGuiContainerHandler<T extends $AbstractContainerScreen<(any)>> {

 "getClickableIngredientUnderMouse"(arg0: T, arg1: double, arg2: double): $Optional<($IClickableIngredient<(any)>)>
 "getGuiClickableAreas"(arg0: T, arg1: double, arg2: double): $Collection<($IGuiClickableArea)>
 "getGuiExtraAreas"(arg0: T): $List<($Rect2i)>
}

export namespace $IGuiContainerHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiContainerHandler$Type<T> = ($IGuiContainerHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiContainerHandler_<T> = $IGuiContainerHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientFilter" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IIngredientFilter {

 "setFilterText"(arg0: string): void
 "getFilterText"(): string
 "getFilteredIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $List<(T)>
 "getFilteredItemStacks"(): $List<($ItemStack)>
}

export namespace $IIngredientFilter {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientFilter$Type = ($IIngredientFilter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientFilter_ = $IIngredientFilter$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeLookup" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"

export interface $IRecipeLookup<R> {

 "get"(): $Stream<(R)>
 "includeHidden"(): $IRecipeLookup<(R)>
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeLookup<(R)>
}

export namespace $IRecipeLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLookup$Type<R> = ($IRecipeLookup<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLookup_<R> = $IRecipeLookup$Type<(R)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler" {
import {$IGhostIngredientHandler$Target, $IGhostIngredientHandler$Target$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IGhostIngredientHandler<T extends $Screen> {

 "onComplete"(): void
 "getTargetsTyped"<I>(arg0: T, arg1: $ITypedIngredient$Type<(I)>, arg2: boolean): $List<($IGhostIngredientHandler$Target<(I)>)>
 "shouldHighlightTargets"(): boolean
}

export namespace $IGhostIngredientHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Type<T> = ($IGhostIngredientHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler_<T> = $IGhostIngredientHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder" {
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"

export interface $IDrawableBuilder {

 "trim"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "build"(): $IDrawableStatic
 "addPadding"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $IDrawableBuilder
 "setTextureSize"(arg0: integer, arg1: integer): $IDrawableBuilder
 "buildAnimated"(arg0: integer, arg1: $IDrawableAnimated$StartDirection$Type, arg2: boolean): $IDrawableAnimated
 "buildAnimated"(arg0: $ITickTimer$Type, arg1: $IDrawableAnimated$StartDirection$Type): $IDrawableAnimated
}

export namespace $IDrawableBuilder {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableBuilder$Type = ($IDrawableBuilder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableBuilder_ = $IDrawableBuilder$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeSlotTooltipCallback, $IRecipeSlotTooltipCallback$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IRecipeSlotDrawable extends $IRecipeSlotView {

 "draw"(arg0: $GuiGraphics$Type): void
 "getTooltip"(): $List<($Component)>
 "addTooltipCallback"(arg0: $IRecipeSlotTooltipCallback$Type): void
 "getRect"(): $Rect2i
 "drawHoverOverlays"(arg0: $GuiGraphics$Type): void
 "isEmpty"(): boolean
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
 "getRole"(): $RecipeIngredientRole
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
}

export namespace $IRecipeSlotDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotDrawable$Type = ($IRecipeSlotDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotDrawable_ = $IRecipeSlotDrawable$Type;
}}
declare module "packages/mezz/jei/api/recipe/advanced/$IRecipeManagerPlugin" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"

export interface $IRecipeManagerPlugin {

 "getRecipeTypes"<V>(arg0: $IFocus$Type<(V)>): $List<($RecipeType<(any)>)>
 "getRecipes"<T, V>(arg0: $IRecipeCategory$Type<(T)>, arg1: $IFocus$Type<(V)>): $List<(T)>
 "getRecipes"<T>(arg0: $IRecipeCategory$Type<(T)>): $List<(T)>
}

export namespace $IRecipeManagerPlugin {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeManagerPlugin$Type = ($IRecipeManagerPlugin);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeManagerPlugin_ = $IRecipeManagerPlugin$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableStatic" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableStatic extends $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
 "getHeight"(): integer
 "getWidth"(): integer
}

export namespace $IDrawableStatic {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableStatic$Type = ($IDrawableStatic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableStatic_ = $IDrawableStatic$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiAnvilRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiAnvilRecipe {

 "getOutputs"(): $List<($ItemStack)>
 "getUid"(): $ResourceLocation
 "getRightInputs"(): $List<($ItemStack)>
 "getLeftInputs"(): $List<($ItemStack)>
}

export namespace $IJeiAnvilRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiAnvilRecipe$Type = ($IJeiAnvilRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiAnvilRecipe_ = $IJeiAnvilRecipe$Type;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$ISubtypeManager" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"
import {$UidContext, $UidContext$Type} from "packages/mezz/jei/api/ingredients/subtypes/$UidContext"

export interface $ISubtypeManager {

 "getSubtypeInfo"(arg0: $ItemStack$Type, arg1: $UidContext$Type): string
 "getSubtypeInfo"<T>(arg0: $IIngredientTypeWithSubtypes$Type<(any), (T)>, arg1: T, arg2: $UidContext$Type): string
 "hasSubtypes"<T, B>(arg0: $IIngredientTypeWithSubtypes$Type<(B), (T)>, arg1: T): boolean
}

export namespace $ISubtypeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISubtypeManager$Type = ($ISubtypeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ISubtypeManager_ = $ISubtypeManager$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
 "getHeight"(): integer
 "getWidth"(): integer
}

export namespace $IDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawable$Type = ($IDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawable_ = $IDrawable$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IPlatformFluidHelper" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IIngredientTypeWithSubtypes, $IIngredientTypeWithSubtypes$Type} from "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes"

export interface $IPlatformFluidHelper<T> {

 "create"(arg0: $Fluid$Type, arg1: long): T
 "create"(arg0: $Fluid$Type, arg1: long, arg2: $CompoundTag$Type): T
 "bucketVolume"(): long
 "getFluidIngredientType"(): $IIngredientTypeWithSubtypes<($Fluid), (T)>
}

export namespace $IPlatformFluidHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlatformFluidHelper$Type<T> = ($IPlatformFluidHelper<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IPlatformFluidHelper_<T> = $IPlatformFluidHelper$Type<(T)>;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeTransferError$Type, $IRecipeTransferError$Type$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferError {

 "getType"(): $IRecipeTransferError$Type
 "showError"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: $IRecipeSlotsView$Type, arg4: integer, arg5: integer): void
 "getTooltip"(): $List<($Component)>
 "getMissingCountHint"(): integer
 "getButtonHighlightColor"(): integer

(): $IRecipeTransferError$Type
}

export namespace $IRecipeTransferError {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type = ($IRecipeTransferError);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError_ = $IRecipeTransferError$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientType<T> {

 "castIngredient"(arg0: any): $Optional<(T)>
 "getIngredientClass"(): $Class<(any)>
 "getUid"(): string

(arg0: any): $Optional<(T)>
}

export namespace $IIngredientType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientType$Type<T> = ($IIngredientType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientType_<T> = $IIngredientType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler$Target" {
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IGhostIngredientHandler$Target<I> extends $Consumer<(I)> {

 "accept"(arg0: I): void
 "getArea"(): $Rect2i
 "andThen"(arg0: $Consumer$Type<(any)>): $Consumer<(I)>
}

export namespace $IGhostIngredientHandler$Target {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGhostIngredientHandler$Target$Type<I> = ($IGhostIngredientHandler$Target<(I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGhostIngredientHandler$Target_<I> = $IGhostIngredientHandler$Target$Type<(I)>;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IVanillaRecipeFactory, $IVanillaRecipeFactory$Type} from "packages/mezz/jei/api/recipe/vanilla/$IVanillaRecipeFactory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IRecipeRegistration {

 "getIngredientManager"(): $IIngredientManager
 "getVanillaRecipeFactory"(): $IVanillaRecipeFactory
 "addIngredientInfo"<T>(arg0: $List$Type<(T)>, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addIngredientInfo"<T>(arg0: T, arg1: $IIngredientType$Type<(T)>, ...arg2: ($Component$Type)[]): void
 "addItemStackInfo"(arg0: $List$Type<($ItemStack$Type)>, ...arg1: ($Component$Type)[]): void
 "addItemStackInfo"(arg0: $ItemStack$Type, ...arg1: ($Component$Type)[]): void
 "getJeiHelpers"(): $IJeiHelpers
 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
 "getIngredientVisibility"(): $IIngredientVisibility
}

export namespace $IRecipeRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeRegistration$Type = ($IRecipeRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeRegistration_ = $IRecipeRegistration$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IRecipeSlotView {

 "isEmpty"(): boolean
 "getDisplayedIngredient"(): $Optional<($ITypedIngredient<(any)>)>
 "getDisplayedIngredient"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getSlotName"(): $Optional<(string)>
 "getItemStacks"(): $Stream<($ItemStack)>
 "getAllIngredients"(): $Stream<($ITypedIngredient<(any)>)>
 "getIngredients"<T>(arg0: $IIngredientType$Type<(T)>): $Stream<(T)>
 "drawHighlight"(arg0: $GuiGraphics$Type, arg1: integer): void
 "getRole"(): $RecipeIngredientRole
 "getDisplayedItemStack"(): $Optional<($ItemStack)>
}

export namespace $IRecipeSlotView {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotView$Type = ($IRecipeSlotView);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotView_ = $IRecipeSlotView$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeManager" {
import {$IRecipeCatalystLookup, $IRecipeCatalystLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$IRecipeLookup, $IRecipeLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeLookup"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IRecipeLayoutDrawable, $IRecipeLayoutDrawable$Type} from "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeCategoriesLookup, $IRecipeCategoriesLookup$Type} from "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IScalableDrawable, $IScalableDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IScalableDrawable"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeManager {

 "createRecipeLookup"<R>(arg0: $RecipeType$Type<(R)>): $IRecipeLookup<(R)>
 "hideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
 "addRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $List$Type<(T)>): void
 "createRecipeCategoryLookup"(): $IRecipeCategoriesLookup
 "createRecipeCatalystLookup"(arg0: $RecipeType$Type<(any)>): $IRecipeCatalystLookup
 "getRecipeType"(arg0: $ResourceLocation$Type): $Optional<($RecipeType<(any)>)>
 "hideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "unhideRecipes"<T>(arg0: $RecipeType$Type<(T)>, arg1: $Collection$Type<(T)>): void
 "getRecipeCategory"<T>(arg0: $RecipeType$Type<(T)>): $IRecipeCategory<(T)>
 "unhideRecipeCategory"(arg0: $RecipeType$Type<(any)>): void
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type, arg3: $IScalableDrawable$Type, arg4: integer): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "createRecipeLayoutDrawable"<T>(arg0: $IRecipeCategory$Type<(T)>, arg1: T, arg2: $IFocusGroup$Type): $Optional<($IRecipeLayoutDrawable<(T)>)>
 "createRecipeSlotDrawable"(arg0: $RecipeIngredientRole$Type, arg1: $List$Type<($Optional$Type<($ITypedIngredient$Type<(any)>)>)>, arg2: $Set$Type<(integer)>, arg3: integer, arg4: integer, arg5: integer): $IRecipeSlotDrawable
}

export namespace $IRecipeManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeManager$Type = ($IRecipeManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeManager_ = $IRecipeManager$Type;
}}
declare module "packages/mezz/jei/api/registration/$IRecipeCategoryRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"

export interface $IRecipeCategoryRegistration {

 "getJeiHelpers"(): $IJeiHelpers
 "addRecipeCategories"(...arg0: ($IRecipeCategory$Type<(any)>)[]): void
}

export namespace $IRecipeCategoryRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoryRegistration$Type = ($IRecipeCategoryRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoryRegistration_ = $IRecipeCategoryRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/vanilla/$IJeiBrewingRecipe" {
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export interface $IJeiBrewingRecipe {

 "getPotionOutput"(): $ItemStack
 "getUid"(): $ResourceLocation
 "getIngredients"(): $List<($ItemStack)>
 "getBrewingSteps"(): integer
 "getPotionInputs"(): $List<($ItemStack)>
}

export namespace $IJeiBrewingRecipe {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiBrewingRecipe$Type = ($IJeiBrewingRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiBrewingRecipe_ = $IJeiBrewingRecipe$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferInfo" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"

export interface $IRecipeTransferInfo<C extends $AbstractContainerMenu, R> {

 "requireCompleteSets"(arg0: C, arg1: R): boolean
 "getContainerClass"(): $Class<(any)>
 "canHandle"(arg0: C, arg1: R): boolean
 "getRecipeSlots"(arg0: C, arg1: R): $List<($Slot)>
 "getHandlingError"(arg0: C, arg1: R): $IRecipeTransferError
 "getInventorySlots"(arg0: C, arg1: R): $List<($Slot)>
 "getMenuType"(): $Optional<($MenuType<(C)>)>
 "getRecipeType"(): $RecipeType<(R)>
}

export namespace $IRecipeTransferInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferInfo$Type<C, R> = ($IRecipeTransferInfo<(C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferInfo_<C, R> = $IRecipeTransferInfo$Type<(C), (R)>;
}}
declare module "packages/mezz/jei/api/registration/$IGuiHandlerRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IScreenHandler, $IScreenHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IScreenHandler"
import {$IGlobalGuiHandler, $IGlobalGuiHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGlobalGuiHandler"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IGhostIngredientHandler, $IGhostIngredientHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler"
import {$IGuiContainerHandler, $IGuiContainerHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiContainerHandler"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IGuiHandlerRegistration {

 "addRecipeClickArea"<T extends $AbstractContainerScreen<(any)>>(arg0: $Class$Type<(any)>, arg1: integer, arg2: integer, arg3: integer, arg4: integer, ...arg5: ($RecipeType$Type<(any)>)[]): void
 "getJeiHelpers"(): $IJeiHelpers
 "addGuiContainerHandler"<T extends $AbstractContainerScreen<(any)>>(arg0: $Class$Type<(any)>, arg1: $IGuiContainerHandler$Type<(T)>): void
 "addGenericGuiContainerHandler"<T extends $AbstractContainerScreen<(any)>>(arg0: $Class$Type<(any)>, arg1: $IGuiContainerHandler$Type<(any)>): void
 "addGuiScreenHandler"<T extends $Screen>(arg0: $Class$Type<(T)>, arg1: $IScreenHandler$Type<(T)>): void
 "addGhostIngredientHandler"<T extends $Screen>(arg0: $Class$Type<(T)>, arg1: $IGhostIngredientHandler$Type<(T)>): void
 "addGlobalGuiHandler"(arg0: $IGlobalGuiHandler$Type): void
}

export namespace $IGuiHandlerRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHandlerRegistration$Type = ($IGuiHandlerRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHandlerRegistration_ = $IGuiHandlerRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocus" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocus<V> {

 "getTypedValue"(): $ITypedIngredient<(V)>
 "checkedCast"<T>(arg0: $IIngredientType$Type<(T)>): $Optional<($IFocus<(T)>)>
 "getRole"(): $RecipeIngredientRole
}

export namespace $IFocus {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocus$Type<V> = ($IFocus<(V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocus_<V> = $IFocus$Type<(V)>;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeType" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"

export class $RecipeType<T> {

constructor(arg0: $ResourceLocation$Type, arg1: $Class$Type<(any)>)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public static "create"<T>(arg0: string, arg1: string, arg2: $Class$Type<(any)>): $RecipeType<(T)>
public "getUid"(): $ResourceLocation
public "getRecipeClass"(): $Class<(any)>
get "uid"(): $ResourceLocation
get "recipeClass"(): $Class<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeType$Type<T> = ($RecipeType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeType_<T> = $RecipeType$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/$IRecipeLayoutDrawable" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$IRecipeSlotDrawable, $IRecipeSlotDrawable$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotDrawable"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeLayoutDrawable<R> {

 "getRecipeSlotsView"(): $IRecipeSlotsView
 "drawRecipe"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "getIngredientUnderMouse"<T>(arg0: integer, arg1: integer, arg2: $IIngredientType$Type<(T)>): $Optional<(T)>
 "getItemStackUnderMouse"(arg0: integer, arg1: integer): $Optional<($ItemStack)>
 "getRecipe"(): R
 "setPosition"(arg0: integer, arg1: integer): void
 "getRecipeCategory"(): $IRecipeCategory<(R)>
 "getRect"(): $Rect2i
 "isMouseOver"(arg0: double, arg1: double): boolean
 "getRecipeSlotUnderMouse"(arg0: double, arg1: double): $Optional<($IRecipeSlotDrawable)>
 "getRecipeBookmarkButtonArea"(): $Rect2i
 "getRecipeTransferButtonArea"(): $Rect2i
 "getRectWithBorder"(): $Rect2i
 "drawOverlays"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
}

export namespace $IRecipeLayoutDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeLayoutDrawable$Type<R> = ($IRecipeLayoutDrawable<(R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeLayoutDrawable_<R> = $IRecipeLayoutDrawable$Type<(R)>;
}}
declare module "packages/mezz/jei/api/ingredients/subtypes/$UidContext" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UidContext extends $Enum<($UidContext)> {
static readonly "Ingredient": $UidContext
static readonly "Recipe": $UidContext


public static "values"(): ($UidContext)[]
public static "valueOf"(arg0: string): $UidContext
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UidContext$Type = (("ingredient") | ("recipe")) | ($UidContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UidContext_ = $UidContext$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/vanilla/crafting/$ICraftingCategoryExtension" {
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IRecipeCategoryExtension, $IRecipeCategoryExtension$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryExtension"
import {$ICraftingGridHelper, $ICraftingGridHelper$Type} from "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $ICraftingCategoryExtension extends $IRecipeCategoryExtension {

 "getHeight"(): integer
 "getWidth"(): integer
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: $ICraftingGridHelper$Type, arg2: $IFocusGroup$Type): void
 "getRegistryName"(): $ResourceLocation
 "handleInput"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type): boolean
 "getTooltipStrings"(arg0: double, arg1: double): $List<($Component)>
 "drawInfo"(arg0: integer, arg1: integer, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void

(): integer
}

export namespace $ICraftingCategoryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingCategoryExtension$Type = ($ICraftingCategoryExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingCategoryExtension_ = $ICraftingCategoryExtension$Type;
}}
declare module "packages/mezz/jei/api/registration/$IModIngredientRegistration" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IColorHelper, $IColorHelper$Type} from "packages/mezz/jei/api/helpers/$IColorHelper"
import {$ISubtypeManager, $ISubtypeManager$Type} from "packages/mezz/jei/api/ingredients/subtypes/$ISubtypeManager"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"

export interface $IModIngredientRegistration {

 "register"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>, arg2: $IIngredientHelper$Type<(V)>, arg3: $IIngredientRenderer$Type<(V)>): void
 "getColorHelper"(): $IColorHelper
 "getSubtypeManager"(): $ISubtypeManager
}

export namespace $IModIngredientRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModIngredientRegistration$Type = ($IModIngredientRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModIngredientRegistration_ = $IModIngredientRegistration$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IEditModeConfig$HideMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IEditModeConfig$HideMode extends $Enum<($IEditModeConfig$HideMode)> {
static readonly "SINGLE": $IEditModeConfig$HideMode
static readonly "WILDCARD": $IEditModeConfig$HideMode


public static "values"(): ($IEditModeConfig$HideMode)[]
public static "valueOf"(arg0: string): $IEditModeConfig$HideMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEditModeConfig$HideMode$Type = (("single") | ("wildcard")) | ($IEditModeConfig$HideMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IEditModeConfig$HideMode_ = $IEditModeConfig$HideMode$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/$IRecipeCategory" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeCategory<T> {

 "draw"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
 "getTitle"(): $Component
 "getHeight"(): integer
 "getWidth"(): integer
 "isHandled"(arg0: T): boolean
 "setRecipe"(arg0: $IRecipeLayoutBuilder$Type, arg1: T, arg2: $IFocusGroup$Type): void
 "handleInput"(arg0: T, arg1: double, arg2: double, arg3: $InputConstants$Key$Type): boolean
 "getTooltipStrings"(arg0: T, arg1: $IRecipeSlotsView$Type, arg2: double, arg3: double): $List<($Component)>
 "getIcon"(): $IDrawable
 "getBackground"(): $IDrawable
 "getRecipeType"(): $RecipeType<(T)>
 "getRegistryName"(arg0: T): $ResourceLocation
}

export namespace $IRecipeCategory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategory$Type<T> = ($IRecipeCategory<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategory_<T> = $IRecipeCategory$Type<(T)>;
}}
declare module "packages/mezz/jei/api/helpers/$IModIdHelper" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IModIdHelper {

 "getModNameForModId"(arg0: string): string
 "isDisplayingModNameEnabled"(): boolean
 "getFormattedModNameForModId"(arg0: string): string
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: $ITypedIngredient$Type<(T)>): $List<($Component)>
 "addModNameToIngredientTooltip"<T>(arg0: $List$Type<($Component$Type)>, arg1: T, arg2: $IIngredientHelper$Type<(T)>): $List<($Component)>
 "getModNameForTooltip"<T>(arg0: $ITypedIngredient$Type<(T)>): $Optional<($Component)>
}

export namespace $IModIdHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModIdHelper$Type = ($IModIdHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModIdHelper_ = $IModIdHelper$Type;
}}
declare module "packages/mezz/jei/api/recipe/$RecipeIngredientRole" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $RecipeIngredientRole extends $Enum<($RecipeIngredientRole)> {
static readonly "INPUT": $RecipeIngredientRole
static readonly "OUTPUT": $RecipeIngredientRole
static readonly "CATALYST": $RecipeIngredientRole
static readonly "RENDER_ONLY": $RecipeIngredientRole


public static "values"(): ($RecipeIngredientRole)[]
public static "valueOf"(arg0: string): $RecipeIngredientRole
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeIngredientRole$Type = (("output") | ("input") | ("catalyst") | ("render_only")) | ($RecipeIngredientRole);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RecipeIngredientRole_ = $RecipeIngredientRole$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IScreenHandler" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$IGuiProperties, $IGuiProperties$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiProperties"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"

export interface $IScreenHandler<T extends $Screen> extends $Function<(T), ($IGuiProperties)> {

 "apply"(arg0: T): $IGuiProperties
 "compose"<V>(arg0: $Function$Type<(any), (any)>): $Function<(V), ($IGuiProperties)>
 "andThen"<V>(arg0: $Function$Type<(any), (any)>): $Function<(T), (V)>

(arg0: T): $IGuiProperties
}

export namespace $IScreenHandler {
function identity<T>(): $Function<(T), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenHandler$Type<T> = ($IScreenHandler<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenHandler_<T> = $IScreenHandler$Type<(T)>;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCategoriesLookup" {
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"

export interface $IRecipeCategoriesLookup {

 "get"(): $Stream<($IRecipeCategory<(any)>)>
 "includeHidden"(): $IRecipeCategoriesLookup
 "limitFocus"(arg0: $Collection$Type<(any)>): $IRecipeCategoriesLookup
 "limitTypes"(arg0: $Collection$Type<($RecipeType$Type<(any)>)>): $IRecipeCategoriesLookup
}

export namespace $IRecipeCategoriesLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoriesLookup$Type = ($IRecipeCategoriesLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoriesLookup_ = $IRecipeCategoriesLookup$Type;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGlobalGuiHandler" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IGlobalGuiHandler {

 "getClickableIngredientUnderMouse"(arg0: double, arg1: double): $Optional<($IClickableIngredient<(any)>)>
 "getGuiExtraAreas"(): $Collection<($Rect2i)>
}

export namespace $IGlobalGuiHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGlobalGuiHandler$Type = ($IGlobalGuiHandler);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGlobalGuiHandler_ = $IGlobalGuiHandler$Type;
}}
declare module "packages/mezz/jei/api/registration/$IVanillaCategoryExtensionRegistration" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$CraftingRecipe, $CraftingRecipe$Type} from "packages/net/minecraft/world/item/crafting/$CraftingRecipe"
import {$ICraftingCategoryExtension, $ICraftingCategoryExtension$Type} from "packages/mezz/jei/api/recipe/category/extensions/vanilla/crafting/$ICraftingCategoryExtension"
import {$IExtendableRecipeCategory, $IExtendableRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/extensions/$IExtendableRecipeCategory"

export interface $IVanillaCategoryExtensionRegistration {

 "getJeiHelpers"(): $IJeiHelpers
 "getCraftingCategory"(): $IExtendableRecipeCategory<($CraftingRecipe), ($ICraftingCategoryExtension)>
}

export namespace $IVanillaCategoryExtensionRegistration {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVanillaCategoryExtensionRegistration$Type = ($IVanillaCategoryExtensionRegistration);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IVanillaCategoryExtensionRegistration_ = $IVanillaCategoryExtensionRegistration$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryExtension" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$InputConstants$Key, $InputConstants$Key$Type} from "packages/com/mojang/blaze3d/platform/$InputConstants$Key"

export interface $IRecipeCategoryExtension {

 "handleInput"(arg0: double, arg1: double, arg2: $InputConstants$Key$Type): boolean
 "getTooltipStrings"(arg0: double, arg1: double): $List<($Component)>
 "drawInfo"(arg0: integer, arg1: integer, arg2: $GuiGraphics$Type, arg3: double, arg4: double): void
}

export namespace $IRecipeCategoryExtension {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoryExtension$Type = ($IRecipeCategoryExtension);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoryExtension_ = $IRecipeCategoryExtension$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IRecipeLayoutBuilder, $IRecipeLayoutBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeLayoutBuilder"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotBuilder, $IRecipeSlotBuilder$Type} from "packages/mezz/jei/api/gui/builder/$IRecipeSlotBuilder"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $ICraftingGridHelper {

 "createAndSetOutputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<(T)>): $IRecipeSlotBuilder
 "createAndSetOutputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($ItemStack$Type)>): $IRecipeSlotBuilder
 "setInputs"<T>(arg0: $List$Type<($IRecipeSlotBuilder$Type)>, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): void
 "createAndSetInputs"<T>(arg0: $IRecipeLayoutBuilder$Type, arg1: $IIngredientType$Type<(T)>, arg2: $List$Type<($List$Type<(T)>)>, arg3: integer, arg4: integer): $List<($IRecipeSlotBuilder)>
 "createAndSetInputs"(arg0: $IRecipeLayoutBuilder$Type, arg1: $List$Type<($List$Type<($ItemStack$Type)>)>, arg2: integer, arg3: integer): $List<($IRecipeSlotBuilder)>
}

export namespace $ICraftingGridHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingGridHelper$Type = ($ICraftingGridHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICraftingGridHelper_ = $ICraftingGridHelper$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IScalableDrawable" {
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IScalableDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
 "draw"(arg0: $GuiGraphics$Type, arg1: $Rect2i$Type): void

(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): void
}

export namespace $IScalableDrawable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScalableDrawable$Type = ($IScalableDrawable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScalableDrawable_ = $IScalableDrawable$Type;
}}
declare module "packages/mezz/jei/api/helpers/$IGuiHelper" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$ITickTimer, $ITickTimer$Type} from "packages/mezz/jei/api/gui/$ITickTimer"
import {$IDrawableBuilder, $IDrawableBuilder$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableBuilder"
import {$IDrawableAnimated, $IDrawableAnimated$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$IDrawableStatic, $IDrawableStatic$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableStatic"
import {$ICraftingGridHelper, $ICraftingGridHelper$Type} from "packages/mezz/jei/api/gui/ingredient/$ICraftingGridHelper"
import {$IDrawableAnimated$StartDirection, $IDrawableAnimated$StartDirection$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated$StartDirection"

export interface $IGuiHelper {

 "getSlotDrawable"(): $IDrawableStatic
 "createDrawable"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableStatic
 "createBlankDrawable"(arg0: integer, arg1: integer): $IDrawableStatic
 "createDrawableIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $IDrawable
 "createDrawableIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $IDrawable
 "drawableBuilder"(arg0: $ResourceLocation$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $IDrawableBuilder
 "createDrawableItemStack"(arg0: $ItemStack$Type): $IDrawable
 "createCraftingGridHelper"(): $ICraftingGridHelper
 "createAnimatedDrawable"(arg0: $IDrawableStatic$Type, arg1: integer, arg2: $IDrawableAnimated$StartDirection$Type, arg3: boolean): $IDrawableAnimated
 "createTickTimer"(arg0: integer, arg1: integer, arg2: boolean): $ITickTimer
}

export namespace $IGuiHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiHelper$Type = ($IGuiHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiHelper_ = $IGuiHelper$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager" {
import {$IIngredientManager$IIngredientListener, $IIngredientManager$IIngredientListener$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener"
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$IIngredientRenderer, $IIngredientRenderer$Type} from "packages/mezz/jei/api/ingredients/$IIngredientRenderer"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientManager {

 "addIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
 "removeIngredientsAtRuntime"<V>(arg0: $IIngredientType$Type<(V)>, arg1: $Collection$Type<(V)>): void
 "getIngredientHelper"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientHelper<(V)>
 "getIngredientHelper"<V>(arg0: V): $IIngredientHelper<(V)>
 "getIngredientTypeChecked"<V>(arg0: $Class$Type<(any)>): $Optional<($IIngredientType<(V)>)>
 "getIngredientTypeChecked"<V>(arg0: V): $Optional<($IIngredientType<(V)>)>
 "getIngredientRenderer"<V>(arg0: $IIngredientType$Type<(V)>): $IIngredientRenderer<(V)>
 "getIngredientRenderer"<V>(arg0: V): $IIngredientRenderer<(V)>
 "createTypedIngredient"<V>(arg0: $IIngredientType$Type<(V)>, arg1: V): $Optional<($ITypedIngredient<(V)>)>
 "createTypedIngredient"<V>(arg0: V): $Optional<($ITypedIngredient<(V)>)>
 "getAllItemStacks"(): $Collection<($ItemStack)>
 "getRegisteredIngredientTypes"(): $Collection<($IIngredientType<(any)>)>
 "getAllIngredients"<V>(arg0: $IIngredientType$Type<(V)>): $Collection<(V)>
 "registerIngredientListener"(arg0: $IIngredientManager$IIngredientListener$Type): void
/**
 * 
 * @deprecated
 */
 "getIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<(V)>
 "getIngredientTypeForUid"(arg0: string): $Optional<($IIngredientType<(any)>)>
 "normalizeTypedIngredient"<V>(arg0: $ITypedIngredient$Type<(V)>): $ITypedIngredient<(V)>
 "getTypedIngredientByUid"<V>(arg0: $IIngredientType$Type<(V)>, arg1: string): $Optional<($ITypedIngredient<(V)>)>
}

export namespace $IIngredientManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$Type = ($IIngredientManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager_ = $IIngredientManager$Type;
}}
declare module "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotTooltipCallback" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IRecipeSlotView, $IRecipeSlotView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotView"

export interface $IRecipeSlotTooltipCallback {

 "onTooltip"(arg0: $IRecipeSlotView$Type, arg1: $List$Type<($Component$Type)>): void

(arg0: $IRecipeSlotView$Type, arg1: $List$Type<($Component$Type)>): void
}

export namespace $IRecipeSlotTooltipCallback {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeSlotTooltipCallback$Type = ($IRecipeSlotTooltipCallback);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeSlotTooltipCallback_ = $IRecipeSlotTooltipCallback$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferHandler" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$RecipeType, $RecipeType$Type} from "packages/mezz/jei/api/recipe/$RecipeType"
import {$AbstractContainerMenu, $AbstractContainerMenu$Type} from "packages/net/minecraft/world/inventory/$AbstractContainerMenu"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$IRecipeTransferError, $IRecipeTransferError$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {

 "transferRecipe"(arg0: C, arg1: R, arg2: $IRecipeSlotsView$Type, arg3: $Player$Type, arg4: boolean, arg5: boolean): $IRecipeTransferError
 "getContainerClass"(): $Class<(any)>
 "getMenuType"(): $Optional<($MenuType<(C)>)>
 "getRecipeType"(): $RecipeType<(R)>
}

export namespace $IRecipeTransferHandler {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferHandler$Type<C, R> = ($IRecipeTransferHandler<(C), (R)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferHandler_<C, R> = $IRecipeTransferHandler$Type<(C), (R)>;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientTypeWithSubtypes" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Class, $Class$Type} from "packages/java/lang/$Class"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"

export interface $IIngredientTypeWithSubtypes<B, I> extends $IIngredientType<(I)> {

 "getBase"(arg0: I): B
 "getIngredientBaseClass"(): $Class<(any)>
 "getIngredientClass"(): $Class<(any)>
 "castIngredient"(arg0: any): $Optional<(I)>
 "getUid"(): string
}

export namespace $IIngredientTypeWithSubtypes {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientTypeWithSubtypes$Type<B, I> = ($IIngredientTypeWithSubtypes<(B), (I)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientTypeWithSubtypes_<B, I> = $IIngredientTypeWithSubtypes$Type<(B), (I)>;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiRuntime" {
import {$IJeiHelpers, $IJeiHelpers$Type} from "packages/mezz/jei/api/helpers/$IJeiHelpers"
import {$IEditModeConfig, $IEditModeConfig$Type} from "packages/mezz/jei/api/runtime/$IEditModeConfig"
import {$IIngredientFilter, $IIngredientFilter$Type} from "packages/mezz/jei/api/runtime/$IIngredientFilter"
import {$IJeiConfigManager, $IJeiConfigManager$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigManager"
import {$IBookmarkOverlay, $IBookmarkOverlay$Type} from "packages/mezz/jei/api/runtime/$IBookmarkOverlay"
import {$IRecipesGui, $IRecipesGui$Type} from "packages/mezz/jei/api/runtime/$IRecipesGui"
import {$IIngredientListOverlay, $IIngredientListOverlay$Type} from "packages/mezz/jei/api/runtime/$IIngredientListOverlay"
import {$IRecipeManager, $IRecipeManager$Type} from "packages/mezz/jei/api/recipe/$IRecipeManager"
import {$IIngredientManager, $IIngredientManager$Type} from "packages/mezz/jei/api/runtime/$IIngredientManager"
import {$IJeiKeyMappings, $IJeiKeyMappings$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMappings"
import {$IScreenHelper, $IScreenHelper$Type} from "packages/mezz/jei/api/runtime/$IScreenHelper"
import {$IRecipeTransferManager, $IRecipeTransferManager$Type} from "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferManager"
import {$IIngredientVisibility, $IIngredientVisibility$Type} from "packages/mezz/jei/api/runtime/$IIngredientVisibility"

export interface $IJeiRuntime {

 "getIngredientManager"(): $IIngredientManager
 "getRecipeManager"(): $IRecipeManager
 "getIngredientFilter"(): $IIngredientFilter
 "getJeiHelpers"(): $IJeiHelpers
 "getConfigManager"(): $IJeiConfigManager
 "getScreenHelper"(): $IScreenHelper
 "getKeyMappings"(): $IJeiKeyMappings
 "getIngredientListOverlay"(): $IIngredientListOverlay
 "getIngredientVisibility"(): $IIngredientVisibility
 "getRecipeTransferManager"(): $IRecipeTransferManager
 "getBookmarkOverlay"(): $IBookmarkOverlay
 "getEditModeConfig"(): $IEditModeConfig
 "getRecipesGui"(): $IRecipesGui
}

export namespace $IJeiRuntime {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiRuntime$Type = ($IJeiRuntime);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiRuntime_ = $IJeiRuntime$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IFocusFactory" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$RecipeIngredientRole, $RecipeIngredientRole$Type} from "packages/mezz/jei/api/recipe/$RecipeIngredientRole"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IFocus, $IFocus$Type} from "packages/mezz/jei/api/recipe/$IFocus"
import {$IFocusGroup, $IFocusGroup$Type} from "packages/mezz/jei/api/recipe/$IFocusGroup"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IFocusFactory {

 "getEmptyFocusGroup"(): $IFocusGroup
 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $IIngredientType$Type<(V)>, arg2: V): $IFocus<(V)>
 "createFocus"<V>(arg0: $RecipeIngredientRole$Type, arg1: $ITypedIngredient$Type<(V)>): $IFocus<(V)>
 "createFocusGroup"(arg0: $Collection$Type<(any)>): $IFocusGroup
}

export namespace $IFocusFactory {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFocusFactory$Type = ($IFocusFactory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFocusFactory_ = $IFocusFactory$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiFeatures" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IJeiFeatures {

 "disableInventoryEffectRendererGuiHandler"(): void

(): void
}

export namespace $IJeiFeatures {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiFeatures$Type = ($IJeiFeatures);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiFeatures_ = $IJeiFeatures$Type;
}}
declare module "packages/mezz/jei/api/gui/drawable/$IDrawableAnimated" {
import {$IDrawable, $IDrawable$Type} from "packages/mezz/jei/api/gui/drawable/$IDrawable"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IDrawableAnimated extends $IDrawable {

 "draw"(arg0: $GuiGraphics$Type, arg1: integer, arg2: integer): void
 "draw"(arg0: $GuiGraphics$Type): void
 "getHeight"(): integer
 "getWidth"(): integer
}

export namespace $IDrawableAnimated {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrawableAnimated$Type = ($IDrawableAnimated);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDrawableAnimated_ = $IDrawableAnimated$Type;
}}
declare module "packages/mezz/jei/api/ingredients/$IIngredientRenderer" {
import {$Font, $Font$Type} from "packages/net/minecraft/client/gui/$Font"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"

export interface $IIngredientRenderer<T> {

 "render"(arg0: $GuiGraphics$Type, arg1: T): void
 "getHeight"(): integer
 "getWidth"(): integer
 "getTooltip"(arg0: T, arg1: $TooltipFlag$Type): $List<($Component)>
 "getFontRenderer"(arg0: $Minecraft$Type, arg1: T): $Font
}

export namespace $IIngredientRenderer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientRenderer$Type<T> = ($IIngredientRenderer<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientRenderer_<T> = $IIngredientRenderer$Type<(T)>;
}}
declare module "packages/mezz/jei/api/runtime/$IBookmarkOverlay" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IBookmarkOverlay {

 "getIngredientUnderMouse"(): $Optional<($ITypedIngredient<(any)>)>
 "getIngredientUnderMouse"<T>(arg0: $IIngredientType$Type<(T)>): T
 "getItemStackUnderMouse"(): $ItemStack
}

export namespace $IBookmarkOverlay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBookmarkOverlay$Type = ($IBookmarkOverlay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBookmarkOverlay_ = $IBookmarkOverlay$Type;
}}
declare module "packages/mezz/jei/api/recipe/transfer/$IRecipeTransferError$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IRecipeTransferError$Type extends $Enum<($IRecipeTransferError$Type)> {
static readonly "INTERNAL": $IRecipeTransferError$Type
static readonly "USER_FACING": $IRecipeTransferError$Type
static readonly "COSMETIC": $IRecipeTransferError$Type
readonly "allowsTransfer": boolean


public static "values"(): ($IRecipeTransferError$Type)[]
public static "valueOf"(arg0: string): $IRecipeTransferError$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTransferError$Type$Type = (("internal") | ("user_facing") | ("cosmetic")) | ($IRecipeTransferError$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeTransferError$Type_ = $IRecipeTransferError$Type$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IJeiKeyMappings" {
import {$IJeiKeyMapping, $IJeiKeyMapping$Type} from "packages/mezz/jei/api/runtime/$IJeiKeyMapping"

export interface $IJeiKeyMappings {

 "getShowRecipe"(): $IJeiKeyMapping
 "getShowUses"(): $IJeiKeyMapping
}

export namespace $IJeiKeyMappings {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiKeyMappings$Type = ($IJeiKeyMappings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiKeyMappings_ = $IJeiKeyMappings$Type;
}}
declare module "packages/mezz/jei/api/recipe/$IRecipeCatalystLookup" {
import {$IIngredientType, $IIngredientType$Type} from "packages/mezz/jei/api/ingredients/$IIngredientType"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IRecipeCatalystLookup {

 "get"<S>(arg0: $IIngredientType$Type<(S)>): $Stream<(S)>
 "get"(): $Stream<($ITypedIngredient<(any)>)>
 "getItemStack"(): $Stream<($ItemStack)>
 "includeHidden"(): $IRecipeCatalystLookup
}

export namespace $IRecipeCatalystLookup {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCatalystLookup$Type = ($IRecipeCatalystLookup);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCatalystLookup_ = $IRecipeCatalystLookup$Type;
}}
declare module "packages/mezz/jei/api/recipe/category/extensions/$IRecipeCategoryDecorator" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IRecipeCategory, $IRecipeCategory$Type} from "packages/mezz/jei/api/recipe/category/$IRecipeCategory"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiGraphics, $GuiGraphics$Type} from "packages/net/minecraft/client/gui/$GuiGraphics"
import {$IRecipeSlotsView, $IRecipeSlotsView$Type} from "packages/mezz/jei/api/gui/ingredient/$IRecipeSlotsView"

export interface $IRecipeCategoryDecorator<T> {

 "draw"(arg0: T, arg1: $IRecipeCategory$Type<(T)>, arg2: $IRecipeSlotsView$Type, arg3: $GuiGraphics$Type, arg4: double, arg5: double): void
 "decorateExistingTooltips"(arg0: $List$Type<($Component$Type)>, arg1: T, arg2: $IRecipeCategory$Type<(T)>, arg3: $IRecipeSlotsView$Type, arg4: double, arg5: double): $List<($Component)>
}

export namespace $IRecipeCategoryDecorator {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeCategoryDecorator$Type<T> = ($IRecipeCategoryDecorator<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRecipeCategoryDecorator_<T> = $IRecipeCategoryDecorator$Type<(T)>;
}}
declare module "packages/mezz/jei/api/gui/handlers/$IGuiProperties" {
import {$Class, $Class$Type} from "packages/java/lang/$Class"

export interface $IGuiProperties {

 "getGuiLeft"(): integer
 "getGuiTop"(): integer
 "getScreenWidth"(): integer
 "getScreenHeight"(): integer
 "getGuiYSize"(): integer
 "getGuiXSize"(): integer
 "getScreenClass"(): $Class<(any)>
}

export namespace $IGuiProperties {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGuiProperties$Type = ($IGuiProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGuiProperties_ = $IGuiProperties$Type;
}}
declare module "packages/mezz/jei/api/runtime/config/$IJeiConfigManager" {
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$IJeiConfigFile, $IJeiConfigFile$Type} from "packages/mezz/jei/api/runtime/config/$IJeiConfigFile"

export interface $IJeiConfigManager {

 "getConfigFiles"(): $Collection<($IJeiConfigFile)>

(): $Collection<($IJeiConfigFile)>
}

export namespace $IJeiConfigManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IJeiConfigManager$Type = ($IJeiConfigManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IJeiConfigManager_ = $IJeiConfigManager$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IIngredientManager$IIngredientListener" {
import {$IIngredientHelper, $IIngredientHelper$Type} from "packages/mezz/jei/api/ingredients/$IIngredientHelper"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"

export interface $IIngredientManager$IIngredientListener {

 "onIngredientsAdded"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
 "onIngredientsRemoved"<V>(arg0: $IIngredientHelper$Type<(V)>, arg1: $Collection$Type<($ITypedIngredient$Type<(V)>)>): void
}

export namespace $IIngredientManager$IIngredientListener {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIngredientManager$IIngredientListener$Type = ($IIngredientManager$IIngredientListener);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IIngredientManager$IIngredientListener_ = $IIngredientManager$IIngredientListener$Type;
}}
declare module "packages/mezz/jei/api/runtime/$IClickableIngredient" {
import {$ITypedIngredient, $ITypedIngredient$Type} from "packages/mezz/jei/api/ingredients/$ITypedIngredient"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"

export interface $IClickableIngredient<T> {

 "getTypedIngredient"(): $ITypedIngredient<(T)>
 "getArea"(): $Rect2i
}

export namespace $IClickableIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IClickableIngredient$Type<T> = ($IClickableIngredient<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IClickableIngredient_<T> = $IClickableIngredient$Type<(T)>;
}}
declare module "packages/mezz/jei/api/runtime/$IScreenHelper" {
import {$IClickableIngredient, $IClickableIngredient$Type} from "packages/mezz/jei/api/runtime/$IClickableIngredient"
import {$IGuiProperties, $IGuiProperties$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiProperties"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Optional, $Optional$Type} from "packages/java/util/$Optional"
import {$Screen, $Screen$Type} from "packages/net/minecraft/client/gui/screens/$Screen"
import {$IGhostIngredientHandler, $IGhostIngredientHandler$Type} from "packages/mezz/jei/api/gui/handlers/$IGhostIngredientHandler"
import {$IGuiClickableArea, $IGuiClickableArea$Type} from "packages/mezz/jei/api/gui/handlers/$IGuiClickableArea"
import {$Rect2i, $Rect2i$Type} from "packages/net/minecraft/client/renderer/$Rect2i"
import {$AbstractContainerScreen, $AbstractContainerScreen$Type} from "packages/net/minecraft/client/gui/screens/inventory/$AbstractContainerScreen"

export interface $IScreenHelper {

 "getClickableIngredientUnderMouse"(arg0: $Screen$Type, arg1: double, arg2: double): $Stream<($IClickableIngredient<(any)>)>
 "getGuiExclusionAreas"(arg0: $Screen$Type): $Stream<($Rect2i)>
 "getGhostIngredientHandler"<T extends $Screen>(arg0: T): $Optional<($IGhostIngredientHandler<(T)>)>
 "getGuiClickableArea"(arg0: $AbstractContainerScreen$Type<(any)>, arg1: double, arg2: double): $Stream<($IGuiClickableArea)>
 "getGuiProperties"<T extends $Screen>(arg0: T): $Optional<($IGuiProperties)>
}

export namespace $IScreenHelper {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenHelper$Type = ($IScreenHelper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IScreenHelper_ = $IScreenHelper$Type;
}}
